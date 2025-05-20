// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccountLinkInfo } from "./AccountLinkInfo";
import { BaseDriveResponse } from "./BaseDriveResponse";
import { IDPermission } from "./Idpermission";


export class UserExtraItem extends $dara.Model {
  account?: AccountLinkInfo[];
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
   * **if can be null:**
   * true
   */
  defaultDrive?: BaseDriveResponse;
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
  parentGroup?: BaseDriveResponse[];
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
      account: 'account',
      avatar: 'avatar',
      createdAt: 'created_at',
      creator: 'creator',
      defaultDrive: 'default_drive',
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
      parentGroup: 'parent_group',
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
      account: { 'type': 'array', 'itemType': AccountLinkInfo },
      avatar: 'string',
      createdAt: 'string',
      creator: 'string',
      defaultDrive: BaseDriveResponse,
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
      parentGroup: { 'type': 'array', 'itemType': BaseDriveResponse },
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
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    if(this.defaultDrive && typeof (this.defaultDrive as any).validate === 'function') {
      (this.defaultDrive as any).validate();
    }
    if(Array.isArray(this.parentGroup)) {
      $dara.Model.validateArray(this.parentGroup);
    }
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

