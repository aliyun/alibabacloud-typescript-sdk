// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaVerifyIntlRequest extends $dara.Model {
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @example
   * ID_2META
   */
  productCode?: string;
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

