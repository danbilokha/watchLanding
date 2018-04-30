import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Watch} from '@common/dictionaries/watch.dictionary';
import {WatchService} from './watch.service';
import {findWatchByName} from './watch.calculation';

@Injectable()
class WatchResolver implements Resolve<Watch> {

    constructor(private watchService: WatchService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Watch> {
        return this.watchService
            .getWatches()
            .map(findWatchByName(route.params.name))
            .switchMap(v => Observable.of(v[0]));
    }
}

export {WatchResolver};
