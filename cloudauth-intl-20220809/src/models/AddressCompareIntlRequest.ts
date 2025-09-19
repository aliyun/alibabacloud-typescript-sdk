// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressCompareIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Country name
   * - China
   * 
   * This parameter is required.
   * 
   * @example
   * fixed value：中国
   */
  defaultCountry?: string;
  /**
   * @remarks
   * ADD_VERIFY
   * 
   * This parameter is required.
   * 
   * @example
   * fixed value：ADD_VERIFY
   */
  productCode?: string;
  /**
   * @remarks
   * Address 1
   * 
   * This parameter is required.
   * 
   * @example
   * 杭州市阿里巴巴西溪园区
   */
  text1?: string;
  /**
   * @remarks
   * Address 2
   * 
   * This parameter is required.
   * 
   * @example
   * 杭州市文一西路969号1号楼
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

