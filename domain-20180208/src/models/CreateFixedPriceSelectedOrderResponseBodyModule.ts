// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedPriceSelectedOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  domainBlockTrade?: string[];
  /**
   * @example
   * 31199295f2074ce895645d386cb22c36
   */
  orderNo?: string;
  /**
   * @example
   * 20.00
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      domainBlockTrade: 'DomainBlockTrade',
      orderNo: 'OrderNo',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      domainBlockTrade: { 'type': 'array', 'itemType': 'string' },
      orderNo: 'string',
      price: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainBlockTrade)) {
      $dara.Model.validateArray(this.domainBlockTrade);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

