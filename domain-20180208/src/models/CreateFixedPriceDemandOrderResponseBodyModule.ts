// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedPriceDemandOrderResponseBodyModule extends $dara.Model {
  domain?: string;
  orderNo?: string;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      orderNo: 'OrderNo',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      orderNo: 'string',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

