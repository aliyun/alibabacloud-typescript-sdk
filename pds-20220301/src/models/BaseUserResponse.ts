// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IDPermission } from "./Idpermission";


export class BaseUserResponse extends $dara.Model {
  /**
   * @example
   * http://a.b.c/ccp.jpg
   */
  avatar?: string;
  /**
   * @example
   * 1567407718386
   */
  createdAt?: string;
  /**
   * @example
   * system
   */
  creator?: string;
  /**
   * @example
   * 123
   */
  defaultDriveId?: string;
  defaultLocation?: string;
  denyChangePasswordBySelf?: boolean;
  /**
   * @example
   * ccp team user
   */
  description?: string;
  /**
   * @example
   * hz999
   */
  domainId?: string;
  /**
   * @example
   * 123@ccp.com
   */
  email?: string;
  /**
   * @example
   * 0
   */
  expiredAt?: number;
  isSync?: boolean;
  lastLoginTime?: number;
  needChangePasswordNextLogin?: boolean;
  /**
   * @example
   * abc
   */
  nickName?: string;
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  /**
   * @example
   * 13700000000
   */
  phone?: string;
  phoneRegion?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 1567407718386
   */
  updatedAt?: string;
  userData?: { [key: string]: any };
  /**
   * @example
   * ccpuserid
   */
  userId?: string;
  /**
   * @example
   * name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDriveId: 'default_drive_id',
      defaultLocation: 'default_location',
      denyChangePasswordBySelf: 'deny_change_password_by_self',
      description: 'description',
      domainId: 'domain_id',
      email: 'email',
      expiredAt: 'expired_at',
      isSync: 'is_sync',
      lastLoginTime: 'last_login_time',
      needChangePasswordNextLogin: 'need_change_password_next_login',
      nickName: 'nick_name',
      pathStatus: 'path_status',
      permission: 'permission',
      phone: 'phone',
      phoneRegion: 'phone_region',
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
      createdAt: 'string',
      creator: 'string',
      defaultDriveId: 'string',
      defaultLocation: 'string',
      denyChangePasswordBySelf: 'boolean',
      description: 'string',
      domainId: 'string',
      email: 'string',
      expiredAt: 'number',
      isSync: 'boolean',
      lastLoginTime: 'number',
      needChangePasswordNextLogin: 'boolean',
      nickName: 'string',
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      phone: 'string',
      phoneRegion: 'string',
      role: 'string',
      status: 'string',
      updatedAt: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

