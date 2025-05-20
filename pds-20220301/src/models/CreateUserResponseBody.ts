// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * @example
   * http://aa.com/1.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The time when the user was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1639762579768
   */
  createdAt?: number;
  /**
   * @remarks
   * The user who created the user.
   * 
   * @example
   * user1
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the default drive.
   * 
   * @example
   * 1
   */
  defaultDriveId?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * vipuser
   */
  description?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * a@a.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * 001
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Valid values:
   * 
   * *   disabled: The user is prohibited from logon.
   * *   enabled: The user is in a normal state.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the user was modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1639762579768
   */
  updatedAt?: number;
  /**
   * @remarks
   * The custom data.
   */
  userData?: { [key: string]: any };
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * dingding_abc001
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * pds
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      updatedAt: 'updated_at',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'number',
      creator: 'string',
      defaultDriveId: 'string',
      description: 'string',
      domainId: 'string',
      email: 'string',
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'number',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

