// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number.
   * 
   * > Only ID cards of residents in the Chinese mainland are supported.
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * **normal**: The original value in plaintext.
   * 
   * > Due to limitations of the authoritative data source, two-factor ID verification does not support MD5 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product plan. This is a static field. Set the value to **ID_2META**.
   * 
   * @example
   * ID_2META
   */
  productCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Zhang*
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      productCode: 'ProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      productCode: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

