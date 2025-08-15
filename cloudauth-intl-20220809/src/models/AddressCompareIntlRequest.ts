// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressCompareIntlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  defaultCountry?: string;
  /**
   * @remarks
   * ADD_VERIFY
   * 
   * This parameter is required.
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text1?: string;
  /**
   * @remarks
   * This parameter is required.
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

