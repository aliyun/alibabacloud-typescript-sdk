// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PricingResponseBodyDataOriginalPriceInfo extends $dara.Model {
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 200
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 20
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 200
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 20
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

