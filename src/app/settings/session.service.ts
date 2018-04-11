import {Injectable} from '@angular/core';

import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';
import {LocalStorageNamespace} from '@store/store.dictionary';
import {User} from '@pages/authentication/authentication.dictionary';

@Injectable()
class SessionService {

    constructor(private storeLocalStorageService: StoreLocalStorageService) {
    }

    public isSignedUser(): boolean {
        return !!this.storeLocalStorageService.get(LocalStorageNamespace.user.toString());
    }

    public getSignInUser(): User {
        return this.storeLocalStorageService.get(LocalStorageNamespace.user.toString()) as User;
    }
}

export {SessionService};
