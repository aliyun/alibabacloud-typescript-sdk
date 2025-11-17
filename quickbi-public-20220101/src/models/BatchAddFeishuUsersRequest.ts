// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFeishuUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Information of the users to be added
   * 
   * @example
   * {"ad****fd": "TEST", "82****5a": "TEST"}"
   */
  feishuUsers?: string;
  /**
   * @remarks
   * Whether the user is an admin user:
   * - true
   * - false
   * 
   * Default is false if not provided
   * 
   * @example
   * False
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * Whether the user is an authorization administrator
   * 
   * - true
   * - false
   * 
   * Default is false if not provided
   * 
   * @example
   * true
   */
  isAuthAdmin?: boolean;
  /**
   * @remarks
   * User group ID(s)
   * 
   * @example
   * "0d5fb19b-5555-41f0-99da-1248fc27ca51,0f868dd6_68dd_4d13_8422_c5dca3bd4b61"
   */
  userGroupIds?: string;
  /**
   * @remarks
   * User type
   * - Developer: 1
   * - Visitor: 2
   * - Analyst: 3
   * 
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

