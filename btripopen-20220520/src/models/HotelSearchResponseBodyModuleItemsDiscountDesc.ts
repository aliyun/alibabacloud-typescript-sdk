// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail } from "./HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail";


export class HotelSearchResponseBodyModuleItemsDiscountDesc extends $dara.Model {
  cashReduceTotal?: string;
  dinamicLabel?: string;
  discountDetail?: HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail[];
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cashReduceTotal: 'cash_reduce_total',
      dinamicLabel: 'dinamic_label',
      discountDetail: 'discount_detail',
      subTitle: 'sub_title',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashReduceTotal: 'string',
      dinamicLabel: 'string',
      discountDetail: { 'type': 'array', 'itemType': HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail },
      subTitle: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.discountDetail)) {
      $dara.Model.validateArray(this.discountDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

