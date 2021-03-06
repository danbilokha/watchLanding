import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {Watch} from '@dictionaries/watch.dictionary';
import {WatchService} from './watch.service';
import {findWatchByName} from './watch.calculation';
import {map, switchMap, take} from 'rxjs/internal/operators';

@Injectable()
class WatchResolver implements Resolve<Observable<Watch>> {

    constructor(private watchService: WatchService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Watch> {
        return this.watchService
            .getWatches()
            .pipe(
                map(findWatchByName(route.params.name)),
                switchMap(v => Observable.of(v[0])),
                take(1)
            );
    }
}

export {WatchResolver};
