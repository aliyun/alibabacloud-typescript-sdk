// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class User extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * user_display_name
   */
  displayName?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * @example
   * RAM_USER
   */
  type?: string;
  /**
   * @remarks
   * The time of the last update. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The name of the updater.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 222748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user_name
   */
  userName?: string;
  /**
   * @remarks
   * The resource descriptor of the user.
   * 
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

