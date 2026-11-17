// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressCompareIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The country name.
   * - China
   * 
   * This parameter is required.
   * 
   * @example
   * Fixed value: China
   */
  defaultCountry?: string;
  /**
   * @remarks
   * ADD_VERIFY
   * 
   * This parameter is required.
   * 
   * @example
   * Fixed value: ADD_VERIFY
   */
  productCode?: string;
  /**
   * @remarks
   * The first address.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba Xixi Campus, Hangzhou
   */
  text1?: string;
  /**
   * @remarks
   * The second address.
   * 
   * This parameter is required.
   * 
   * @example
   * Building 1, No. 969 West Wenyi Road, Hangzhou
   */
  text2?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCountry: 'DefaultCountry',
      productCode: 'ProductCode',
      text1: 'Text1',
      text2: 'Text2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCountry: 'string',
      productCode: 'string',
      text1: 'string',
      text2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

