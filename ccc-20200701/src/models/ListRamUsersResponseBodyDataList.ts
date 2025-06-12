// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRamUsersResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 15772400000****
   */
  aliyunUid?: number;
  displayName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @example
   * false
   */
  primary?: boolean;
  /**
   * @example
   * 28036411123456****
   */
  ramId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      displayName: 'DisplayName',
      email: 'Email',
      loginName: 'LoginName',
      mobile: 'Mobile',
      primary: 'Primary',
      ramId: 'RamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      displayName: 'string',
      email: 'string',
      loginName: 'string',
      mobile: 'string',
      primary: 'boolean',
      ramId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

