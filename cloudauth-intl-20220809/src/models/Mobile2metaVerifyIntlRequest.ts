// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Mobile2MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile number.
   * 
   * >
   * > - If **paramType** is set to **normal**, enter the plaintext value.
   * > - If **paramType** is set to **md5**, enter the 32-bit lowercase MD5 string.
   * 
   * This parameter is required.
   * 
   * @example
   * 186****1234
   */
  mobile?: string;
  /**
   * @remarks
   * The parameter type:
   * 
   * - **normal**: plaintext
   * 
   * - **md5**: MD5-encrypted
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product to use. Set this parameter to the static value **MOBILE_2META**.
   * 
   * This parameter is required.
   * 
   * @example
   * MOBILE_2META
   */
  productCode?: string;
  /**
   * @remarks
   * The name.
   * 
   * > 
   * > - If **paramType** is set to **normal**, enter the plaintext value.
   * > - If **paramType** is set to **md5**, enter the 32-bit lowercase MD5 string.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhang*
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      paramType: 'ParamType',
      productCode: 'ProductCode',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
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

