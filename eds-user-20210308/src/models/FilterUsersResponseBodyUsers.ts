// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterUsersResponseBodyUsersExternalInfo } from "./FilterUsersResponseBodyUsersExternalInfo";
import { FilterUsersResponseBodyUsersOrgList } from "./FilterUsersResponseBodyUsersOrgList";
import { FilterUsersResponseBodyUsersSupportLoginIdps } from "./FilterUsersResponseBodyUsersSupportLoginIdps";
import { FilterUsersResponseBodyUsersUserSetPropertiesModels } from "./FilterUsersResponseBodyUsersUserSetPropertiesModels";


export class FilterUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The date when a convenience account is automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The number of cloud desktops that are assigned to the convenience user.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud desktop pools that are assigned to the convenience user. This value is returned if you set `IncludeDesktopGroupCount` to `true`.
   * 
   * @example
   * 2
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The email address of the convenience user.
   * 
   * @example
   * testName@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the convenience user is a local administrator.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * The username of the convenience user.
   * 
   * @example
   * testName
   */
  endUserId?: string;
  /**
   * @remarks
   * The additional information about the convenience user.
   */
  externalInfo?: FilterUsersResponseBodyUsersExternalInfo;
  /**
   * @remarks
   * The ID of the convenience user.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the convenience user is a tenant administrator.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  orgList?: FilterUsersResponseBodyUsersOrgList[];
  /**
   * @remarks
   * The type of the account ownership.
   * 
   * Valid values:
   * 
   * *   CreateFromManager: administrator-activated
   * *   Normal: user-activated
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * By default, user account passwords do not expire. However, you can set a validity period between 30 and 365 days. Once the period expires, end users must change their password before they can log on to terminals.
   * 
   * >  The feature is in invitational preview. If you want to use this feature, submit a ticket.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: number;
  /**
   * @remarks
   * The number of days remaining until the account password expires.
   * 
   * @example
   * 10
   */
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The mobile number of the convenience user.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The nickname of the convenience user.
   * 
   * @example
   * Oliver
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks on the convenience user.
   * 
   * @example
   * 1
   */
  remark?: string;
  /**
   * @remarks
   * The remarks on the convenience account.
   * 
   * Valid values:
   * 
   * *   0: The convenience account is normal.
   * *   9: The convenience account is locked.
   * 
   * @example
   * 0
   */
  status?: number;
  supportLoginIdps?: FilterUsersResponseBodyUsersSupportLoginIdps[];
  /**
   * @remarks
   * The information about the properties.
   */
  userSetPropertiesModels?: FilterUsersResponseBodyUsersUserSetPropertiesModels[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      email: 'Email',
      enableAdminAccess: 'EnableAdminAccess',
      endUserId: 'EndUserId',
      externalInfo: 'ExternalInfo',
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      orgList: 'OrgList',
      ownerType: 'OwnerType',
      passwordExpireDays: 'PasswordExpireDays',
      passwordExpireRestDays: 'PasswordExpireRestDays',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
      status: 'Status',
      supportLoginIdps: 'SupportLoginIdps',
      userSetPropertiesModels: 'UserSetPropertiesModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      email: 'string',
      enableAdminAccess: 'boolean',
      endUserId: 'string',
      externalInfo: FilterUsersResponseBodyUsersExternalInfo,
      id: 'number',
      isTenantManager: 'boolean',
      orgList: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersOrgList },
      ownerType: 'string',
      passwordExpireDays: 'number',
      passwordExpireRestDays: 'number',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
      status: 'number',
      supportLoginIdps: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersSupportLoginIdps },
      userSetPropertiesModels: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModels },
    };
  }

  validate() {
    if(this.externalInfo && typeof (this.externalInfo as any).validate === 'function') {
      (this.externalInfo as any).validate();
    }
    if(Array.isArray(this.orgList)) {
      $dara.Model.validateArray(this.orgList);
    }
    if(Array.isArray(this.supportLoginIdps)) {
      $dara.Model.validateArray(this.supportLoginIdps);
    }
    if(Array.isArray(this.userSetPropertiesModels)) {
      $dara.Model.validateArray(this.userSetPropertiesModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

