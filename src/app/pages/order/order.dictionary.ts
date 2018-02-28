import {Watch} from '@common/dictionaries/watch.dictionary';

class PreOrder {

    constructor(public name: string,
                public phone: string,
                public email: string,
                public watch: Watch) {
    }

}

export {PreOrder};