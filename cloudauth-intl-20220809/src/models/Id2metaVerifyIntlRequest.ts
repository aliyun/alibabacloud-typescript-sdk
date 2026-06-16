// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID card number (in plaintext).
   * 
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - normal: original value (plaintext).
   * - Note: Due to authoritative data source restrictions, two-factor identity verification does not support MD5 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The product solution code. Set this parameter to ID_2META.
   * 
   * @example
   * ID_2META
   */
  productCode?: string;
  /**
   * @remarks
   * The name (in plaintext).
   * 
   * @example
   * 张*
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

