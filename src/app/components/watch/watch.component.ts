import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Watch} from 'shared/dictionaries/watch.dictionary';
import {LouisImage} from 'shared/dictionaries/Image.dictionary';
import {DEFAULT_CARD_IMAGE} from '@settings/constants';

@Component({
    selector: 'louis-watch',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchComponent implements OnInit, OnChanges {

    @Input()
    public watch: any;

    @Input()
    public extraClasses: string;

    public mainImage: string = DEFAULT_CARD_IMAGE;
    public priceMap: object;

    @Output()
    public watchTaped: EventEmitter<Watch> = new EventEmitter<Watch>();

    ngOnInit() {
        this.priceMap = {
            currencyTo: 'UAH',
            discount: this.watch.discount,
            toFixed: 2
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        const watch = changes.watch.currentValue;
        if (watch && watch.images && watch.images.length) {
            this.mainImage = this.getMainImage(watch.images)
        }
    }

    public onWatchTap(watch: Watch): void {
        this.watchTaped.emit(watch);
    }

    private getMainImage(images: Array<LouisImage>): string {
        for (let i = 0, len = images.length; i < len; i += 1) {
            if (images[i].isMain) {
                return images[i].binary;
            }
        }

        return images[0].binary;
    }
}

export {WatchComponent};
