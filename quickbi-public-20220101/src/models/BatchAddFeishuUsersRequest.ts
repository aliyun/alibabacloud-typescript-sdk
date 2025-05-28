// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFeishuUsersRequest extends $dara.Model {
  feishuUsers?: string;
  /**
   * @example
   * False
   */
  isAdmin?: boolean;
  /**
   * @example
   * true
   */
  isAuthAdmin?: boolean;
  /**
   * @example
   * "0d5fb19b-5555-41f0-99da-1248fc27ca51,0f868dd6_68dd_4d13_8422_c5dca3bd4b61"
   */
  userGroupIds?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      feishuUsers: 'FeishuUsers',
      isAdmin: 'IsAdmin',
      isAuthAdmin: 'IsAuthAdmin',
      userGroupIds: 'UserGroupIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feishuUsers: 'string',
      isAdmin: 'boolean',
      isAuthAdmin: 'boolean',
      userGroupIds: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

