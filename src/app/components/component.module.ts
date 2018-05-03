import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ModalGalleryModule} from 'angular-modal-gallery';
// Pipes
import {DiscountPipe} from '@pipes/discount/discount';
import {ToFixedPipe} from '@pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';
import {PriceShowPipe} from '@pipes/transformPrice/transformPrice.ts';
import {AddSpacePipe} from '@pipes/addSpace/addSpace';
// Components
import {WatchComponent} from './watch/watch.component';
import {WatchListComponent} from './watchList/watchList.component';
import {LoaderComponent} from './loader/loader.component';
import {CommentComponent} from './comment/comment.component';
import {CommentListComponent} from './commentList/commentList.component';
import {ModalComponent} from './modal/modal.component';
import {HeaderComponent} from './header/header.component';
import {ImagesComponent} from './images/images.component';
import {DelimiterComponent} from './delimiter/delimiter.component';
import {PriceWithDiscountComponent} from './price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from './price/withoutDiscount/priceWithoutDiscount.component';
// TODO: Need investigation, seems unneeded
// import 'hammerjs';
// import 'mousetrap';

@NgModule({
    declarations: [
        WatchComponent,
        WatchListComponent,
        DiscountPipe,
        ToFixedPipe,
        CurrencySignPipe,
        CalculatePricePipe,
        PriceShowPipe,
        AddSpacePipe,
        LoaderComponent,
        CommentComponent,
        CommentListComponent,
        ModalComponent,
        HeaderComponent,
        ImagesComponent,
        DelimiterComponent,
        PriceWithDiscountComponent,
        PriceWithoutDiscountComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ModalGalleryModule.forRoot()
    ],
    exports: [
        WatchComponent,
        WatchListComponent,
        LoaderComponent,
        DiscountPipe,
        ToFixedPipe,
        CurrencySignPipe,
        CalculatePricePipe,
        PriceShowPipe,
        AddSpacePipe,
        CommentComponent,
        CommentListComponent,
        ModalComponent,
        HeaderComponent,
        ImagesComponent,
        DelimiterComponent
    ]
})
class ComponentModule {

}

export {ComponentModule};
