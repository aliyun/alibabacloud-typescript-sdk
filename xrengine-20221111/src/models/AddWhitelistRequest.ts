// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliyunUid?: string;
  jwtToken?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      jwtToken: 'JwtToken',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      jwtToken: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

