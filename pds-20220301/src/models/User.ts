// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class User extends $dara.Model {
  /**
   * @remarks
   * The profile picture.
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
   * The default drive ID.
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
   * The email address of the user.
   * 
   * @example
   * a@aliyunpds.com
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
   * The mobile number of the user.
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
   * user
   */
  role?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
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
   * The custom data of the user.
   */
  userData?: { [key: string]: string };
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
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
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

