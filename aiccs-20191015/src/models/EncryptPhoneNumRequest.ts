// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptPhoneNumRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

