// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class User extends $dara.Model {
  /**
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @example
   * user_display_name
   */
  displayName?: string;
  /**
   * @example
   * RAM_USER
   */
  type?: string;
  /**
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  /**
   * @example
   * 222748924538****
   */
  userId?: string;
  /**
   * @example
   * user_name
   */
  userName?: string;
  /**
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  userPrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      displayName: 'displayName',
      type: 'type',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      userId: 'userId',
      userName: 'userName',
      userPrincipal: 'userPrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      displayName: 'string',
      type: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
      userId: 'string',
      userName: 'string',
      userPrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

