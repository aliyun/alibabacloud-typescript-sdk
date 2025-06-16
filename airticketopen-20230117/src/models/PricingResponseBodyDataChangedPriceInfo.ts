// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PricingResponseBodyDataChangedPriceInfo extends $dara.Model {
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 100
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 10
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 100
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 10
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 10
   */
  infantTax?: number;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

