// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaStandardVerifyRequest extends $dara.Model {
  /**
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
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

