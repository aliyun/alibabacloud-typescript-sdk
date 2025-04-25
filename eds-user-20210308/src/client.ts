// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ThirdAppOidcSsoConfigEndpoints extends $dara.Model {
  authorizationEndpoint?: string;
  discoveryEndpoint?: string;
  guestAuthorizationEndpoint?: string;
  issuer?: string;
  jwksEndpoint?: string;
  logoutEndpoint?: string;
  revokeEndpoint?: string;
  tokenEndpoint?: string;
  userinfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      discoveryEndpoint: 'DiscoveryEndpoint',
      guestAuthorizationEndpoint: 'GuestAuthorizationEndpoint',
      issuer: 'Issuer',
      jwksEndpoint: 'JwksEndpoint',
      logoutEndpoint: 'LogoutEndpoint',
      revokeEndpoint: 'RevokeEndpoint',
      tokenEndpoint: 'TokenEndpoint',
      userinfoEndpoint: 'UserinfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      discoveryEndpoint: 'string',
      guestAuthorizationEndpoint: 'string',
      issuer: 'string',
      jwksEndpoint: 'string',
      logoutEndpoint: 'string',
      revokeEndpoint: 'string',
      tokenEndpoint: 'string',
      userinfoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThirdAppOidcSsoConfig extends $dara.Model {
  accessTokenEffectiveTime?: number;
  codeEffectiveTime?: number;
  enableAuthLogin?: boolean;
  endpoints?: ThirdAppOidcSsoConfigEndpoints;
  grantScopes?: string[];
  grantTypes?: string[];
  idTokenAlgorithmType?: string;
  idTokenEffectiveTime?: number;
  redirectUris?: string[];
  refreshTokenEffective?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      enableAuthLogin: 'EnableAuthLogin',
      endpoints: 'Endpoints',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenAlgorithmType: 'IdTokenAlgorithmType',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      enableAuthLogin: 'boolean',
      endpoints: ThirdAppOidcSsoConfigEndpoints,
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenAlgorithmType: 'string',
      idTokenEffectiveTime: 'number',
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
    };
  }

  validate() {
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    if(Array.isArray(this.grantTypes)) {
      $dara.Model.validateArray(this.grantTypes);
    }
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThirdAppSecrets extends $dara.Model {
  enable?: boolean;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      secret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExistedPropertyValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The property value is used by another property.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues extends $dara.Model {
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModel extends $dara.Model {
  /**
   * @remarks
   * The property values that failed to be created.
   */
  failedPropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues[];
  /**
   * @remarks
   * Details of the property values that were created.
   */
  savePropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.failedPropertyValues)) {
      $dara.Model.validateArray(this.failedPropertyValues);
    }
    if(Array.isArray(this.savePropertyValues)) {
      $dara.Model.validateArray(this.savePropertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The result of creating the property value.
   */
  savePropertyValueModel?: CreatePropertyResponseBodyCreateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: CreatePropertyResponseBodyCreateResultSavePropertyValueModel,
    };
  }

  validate() {
    if(this.savePropertyValueModel && typeof (this.savePropertyValueModel as any).validate === 'function') {
      (this.savePropertyValueModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the convenience user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience user. The name can contain lowercase letters, digits, and underscores (_), and must be 3 to 24 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The organization to which the convenience user belongs.
   * 
   * @example
   * 1111****
   */
  orgId?: string;
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
   * The user password.
   * 
   * >  The password must be at least 10 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (excluding spaces).
   * 
   * @example
   * password1
   */
  password?: string;
  /**
   * @remarks
   * Mobile numbers are not supported on the international site (alibabacloud.com).
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks on the convenience user.
   * 
   * @example
   * remark1
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      password: 'Password',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      orgId: 'string',
      ownerType: 'string',
      password: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResultCreatedUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the end user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The mobile number of the end user.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks of the end user.
   * 
   * @example
   * remark1
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the end user.
   * 
   * @example
   * username2@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test2
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * ExistedEndUserId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The username test is used by another user.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The mobile number of the end user.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * Details of the created convenience users.
   */
  createdUsers?: CreateUsersResponseBodyCreateResultCreatedUsers[];
  /**
   * @remarks
   * Details of the convenience users that failed to be created.
   */
  failedUsers?: CreateUsersResponseBodyCreateResultFailedUsers[];
  static names(): { [key: string]: string } {
    return {
      createdUsers: 'CreatedUsers',
      failedUsers: 'FailedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultCreatedUsers },
      failedUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultFailedUsers },
    };
  }

  validate() {
    if(Array.isArray(this.createdUsers)) {
      $dara.Model.validateArray(this.createdUsers);
    }
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponseBodyMfaDevices extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failures to bind the virtual MFA device, or the number of authentication failures based on the virtual MFA device.
   * 
   * @example
   * 0
   */
  consecutiveFails?: number;
  /**
   * @remarks
   * The type of the virtual MFA device. The value can only be TOTP_VIRTUAL. This value indicates that the virtual MFA device follows the Time-based One-time Password (TOTP) algorithm.
   * 
   * @example
   * TOTP_VIRTUAL
   */
  deviceType?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience user that uses the virtual MFA device.
   * 
   * @example
   * test
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the virtual MFA device was enabled. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-22T06:20:49Z
   */
  gmtEnabled?: string;
  /**
   * @remarks
   * The time when the locked virtual MFA device was automatically unlocked. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-23T06:20:49Z
   */
  gmtUnlock?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 36
   */
  id?: number;
  /**
   * @remarks
   * The serial number of the virtual MFA device. The serial number is unique for each device.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the virtual MFA device.
   * 
   * Valid values:
   * 
   * *   LOCKED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   UNBOUND
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NORMAL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveFails: 'ConsecutiveFails',
      deviceType: 'DeviceType',
      email: 'Email',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      id: 'Id',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveFails: 'number',
      deviceType: 'string',
      email: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      id: 'number',
      serialNumber: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgByLayerResponseBodyOrgs extends $dara.Model {
  /**
   * @example
   * org-1mox****
   */
  orgId?: string;
  orgName?: string;
  /**
   * @example
   * org-ezqr****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgsResponseBodyOrgs extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org-****
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * org****
   */
  orgName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersExtras extends $dara.Model {
  assignedResourceCount?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      assignedResourceCount: 'AssignedResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedResourceCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.assignedResourceCount) {
      $dara.Model.validateMap(this.assignedResourceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * User Group 1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersOrgs extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * Organization 1
   */
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersProperties extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The work address of the convenience user.
   * 
   * @example
   * Hangzhou \\*\\*\\*
   */
  address?: string;
  /**
   * @remarks
   * The profile picture of the convenience user.
   * 
   * @example
   * https://cdn.*****
   */
  avatar?: string;
  /**
   * @remarks
   * The email address of the convenience user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  externalName?: string;
  extras?: DescribeUsersResponseBodyUsersExtras;
  /**
   * @remarks
   * The user groups to which the convenience user belongs.
   */
  groups?: DescribeUsersResponseBodyUsersGroups[];
  /**
   * @remarks
   * The ID of the convenience user.
   * 
   * @example
   * 4205**
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the convenience user is an administrator. If the convenience user is of the administrator-activated type, you must specify a user administrator. Notifications such as password reset on a client are sent to the email address or mobile number of the user administrator. For more information, see [Create a convenience user](https://help.aliyun.com/document_detail/214472.html).
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  /**
   * @remarks
   * The employee number of the convenience user.
   * 
   * @example
   * A10000**
   */
  jobNumber?: string;
  /**
   * @remarks
   * The nickname of the convenience user.
   * 
   * @example
   * Lee
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the organization to which the convenience user belongs.
   * 
   * >  This parameter will be deprecated in the future.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The organizations to which the convenience user belongs.
   */
  orgs?: DescribeUsersResponseBodyUsersOrgs[];
  /**
   * @remarks
   * The type of the convenience account.
   * 
   * *   Administrator-activated type: The administrator specifies the username and password of the convenience account. User notifications such as password reset notifications are sent to the email address or mobile number of the administrator.
   * *   User-activated type: The administrator specifies the username and the email address or mobile number of a convenience user. Notifications such as activation notifications that contain the default password are sent to the email address or mobile number of the convenience user.
   * 
   * Valid values:
   * 
   * *   CreateFromManager
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     administrator-activated
   * 
   *     <!-- -->
   * 
   * *   Normal
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     user-activated
   * 
   *     <!-- -->
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The mobile number of the convenience user. If you leave this parameter empty, the value of this parameter is not returned.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  properties?: DescribeUsersResponseBodyUsersProperties[];
  realNickName?: string;
  /**
   * @remarks
   * The remarks on the convenience user.
   * 
   * @example
   * TestUser
   */
  remark?: string;
  /**
   * @remarks
   * The status of the convenience user.
   * 
   * Valid values:
   * 
   * *   0: The convenience user is normal.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   9: The convenience user is locked.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The globally unique ID of the convenience user.
   * 
   * @example
   * 41fd1254d8f7****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      avatar: 'Avatar',
      email: 'Email',
      endUserId: 'EndUserId',
      externalName: 'ExternalName',
      extras: 'Extras',
      groups: 'Groups',
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      jobNumber: 'JobNumber',
      nickName: 'NickName',
      orgId: 'OrgId',
      orgs: 'Orgs',
      ownerType: 'OwnerType',
      phone: 'Phone',
      properties: 'Properties',
      realNickName: 'RealNickName',
      remark: 'Remark',
      status: 'Status',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      avatar: 'string',
      email: 'string',
      endUserId: 'string',
      externalName: 'string',
      extras: DescribeUsersResponseBodyUsersExtras,
      groups: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersGroups },
      id: 'number',
      isTenantManager: 'boolean',
      jobNumber: 'string',
      nickName: 'string',
      orgId: 'string',
      orgs: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersOrgs },
      ownerType: 'string',
      phone: 'string',
      properties: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersProperties },
      realNickName: 'string',
      remark: 'string',
      status: 'number',
      wyId: 'string',
    };
  }

  validate() {
    if(this.extras && typeof (this.extras as any).validate === 'function') {
      (this.extras as any).validate();
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestOrderParam extends $dara.Model {
  /**
   * @remarks
   * The field that you want to sort by.
   * 
   * Valid values:
   * 
   * *   EndUserId: the username.
   * *   id: the ID of the primary key.
   * *   gmt_created: the creation time.
   * 
   * @example
   * id
   */
  orderField?: string;
  /**
   * @remarks
   * The direction of the sort.
   * 
   * Valid values:
   * 
   * *   ASC: the ascending order.
   * *   DESC (default): the descending order.
   * 
   * @example
   * ASC
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      orderField: 'OrderField',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderField: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestPropertyFilterParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 123
   */
  propertyId?: number;
  /**
   * @remarks
   * The IDs of the property values.
   * 
   * @example
   * test
   */
  propertyValueIds?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueIds: 'PropertyValueIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestPropertyKeyValueFilterParam extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * job
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property values.
   * 
   * @example
   * dev
   */
  propertyValues?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersShrinkRequestPropertyFilterParam extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 123
   */
  propertyId?: number;
  /**
   * @remarks
   * The IDs of the property values.
   * 
   * @example
   * test
   */
  propertyValueIds?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueIds: 'PropertyValueIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersShrinkRequestPropertyKeyValueFilterParam extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * job
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property values.
   * 
   * @example
   * dev
   */
  propertyValues?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The account that is associated with the convenience user.
   * 
   * @example
   * test
   */
  externalName?: string;
  /**
   * @remarks
   * The account, student ID, or employee ID that is associated with the convenience user.
   * 
   * @example
   * 030801
   */
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersOrgList extends $dara.Model {
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersSupportLoginIdps extends $dara.Model {
  idpId?: string;
  idpName?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      idpName: 'IdpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'string',
      idpName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * A
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 42
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersUserSetPropertiesModels extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 12
   */
  propertyId?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property type.
   * 
   * @example
   * 2
   */
  propertyType?: number;
  /**
   * @remarks
   * The property values.
   */
  propertyValues?: FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues[];
  /**
   * @remarks
   * The ID of the convenience user that is bound to the property.
   * 
   * @example
   * 12345
   */
  userId?: number;
  /**
   * @remarks
   * The username of the convenience user that is bound to the property.
   * 
   * @example
   * testName
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class InitTenantAliasResponseBodyAliasInfo extends $dara.Model {
  /**
   * @example
   * FrequencyExceedsLimit
   */
  aliasEditDisabledReason?: string;
  /**
   * @example
   * False
   */
  aliasEditable?: boolean;
  /**
   * @example
   * Customized
   */
  aliasSourceType?: string;
  /**
   * @example
   * 2025-04-17 20:31:48
   */
  nextModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliasEditDisabledReason: 'AliasEditDisabledReason',
      aliasEditable: 'AliasEditable',
      aliasSourceType: 'AliasSourceType',
      nextModifyTime: 'NextModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasEditDisabledReason: 'string',
      aliasEditable: 'boolean',
      aliasSourceType: 'string',
      nextModifyTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBodyPropertiesPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * A
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 42
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBodyProperties extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 30
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * Details about the property values.
   */
  propertyValues?: ListPropertyResponseBodyPropertiesPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': ListPropertyResponseBodyPropertiesPropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueResponseBodyPropertyValueInfos extends $dara.Model {
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * HR
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBodyLockUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user that failed to be locked.
   * 
   * @example
   * test123
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidUsername
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test123 is an invalid username.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBodyLockUsersResult extends $dara.Model {
  /**
   * @remarks
   * The convenience users that failed to be locked.
   */
  failedUsers?: LockUsersResponseBodyLockUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users that were locked.
   */
  lockedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      lockedUsers: 'LockedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': LockUsersResponseBodyLockUsersResultFailedUsers },
      lockedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.lockedUsers)) {
      $dara.Model.validateArray(this.lockedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncStatusByAliUidResponseBodyData extends $dara.Model {
  /**
   * @example
   * 131239236086****
   */
  aliUid?: number;
  /**
   * @example
   * cdrs948144195608****
   */
  corpId?: string;
  /**
   * @example
   * 2020-06-30 07:50:42
   */
  gmtCreated?: string;
  /**
   * @example
   * 2022-03-02 14:27:39
   */
  gmtModified?: string;
  /**
   * @example
   * 18500
   */
  id?: number;
  /**
   * @example
   * 2022-03-02 14:31:39
   */
  latestBeginTime?: string;
  /**
   * @example
   * 2022-03-02 16:13:12
   */
  latestEndTime?: string;
  /**
   * @example
   * 2022-03-02 18:24:01
   */
  latestSuccessTime?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      corpId: 'CorpId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      latestBeginTime: 'LatestBeginTime',
      latestEndTime: 'LatestEndTime',
      latestSuccessTime: 'LatestSuccessTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      corpId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      latestBeginTime: 'string',
      latestEndTime: 'string',
      latestSuccessTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBodyRemoveUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user that failed to be removed.
   * 
   * @example
   * test2
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidUsername
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test2 is an invalid username.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBodyRemoveUsersResult extends $dara.Model {
  /**
   * @remarks
   * The convenience users that failed to be removed.
   */
  failedUsers?: RemoveUsersResponseBodyRemoveUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users that were removed.
   */
  removedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      removedUsers: 'RemovedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': RemoveUsersResponseBodyRemoveUsersResultFailedUsers },
      removedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.removedUsers)) {
      $dara.Model.validateArray(this.removedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBodyResetUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user whose password failed to be reset.
   * 
   * @example
   * test123
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidUsername
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test123 is an invalid username.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBodyResetUsersResult extends $dara.Model {
  /**
   * @remarks
   * The information about the convenience users whose passwords failed to be reset.
   */
  failedUsers?: ResetUserPasswordResponseBodyResetUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users to which the system sent a password reset email.
   */
  resetUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      resetUsers: 'ResetUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': ResetUserPasswordResponseBodyResetUsersResultFailedUsers },
      resetUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.resetUsers)) {
      $dara.Model.validateArray(this.resetUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBodyUnlockUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user that failed to be unlocked.
   * 
   * @example
   * test123
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidUsername
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test123 is an invalid username.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBodyUnlockUsersResult extends $dara.Model {
  /**
   * @remarks
   * The convenience users that failed to be unlocked.
   */
  failedUsers?: UnlockUsersResponseBodyUnlockUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users that were unlocked.
   */
  unlockedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      unlockedUsers: 'UnlockedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': UnlockUsersResponseBodyUnlockUsersResultFailedUsers },
      unlockedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.unlockedUsers)) {
      $dara.Model.validateArray(this.unlockedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyRequestPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The new property value.
   * 
   * @example
   * testvalue
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of property value that you want to modify. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property value ID.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ExistedPropertyValue
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The property value is used by another property.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * testvalue
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues extends $dara.Model {
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * testvalue2
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel extends $dara.Model {
  /**
   * @remarks
   * The property values that failed to be modified.
   */
  failedPropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues[];
  /**
   * @remarks
   * The property values that were modified.
   */
  savePropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.failedPropertyValues)) {
      $dara.Model.validateArray(this.failedPropertyValues);
    }
    if(Array.isArray(this.savePropertyValues)) {
      $dara.Model.validateArray(this.savePropertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the property.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * testkey2
   */
  propertyKey?: string;
  /**
   * @remarks
   * The result of the property value modification.
   */
  savePropertyValueModel?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel,
    };
  }

  validate() {
    if(this.savePropertyValueModel && typeof (this.savePropertyValueModel as any).validate === 'function') {
      (this.savePropertyValueModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupResources extends $dara.Model {
  region?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThirdApp extends $dara.Model {
  appKey?: string;
  name?: string;
  oidcSsoConfig?: ThirdAppOidcSsoConfig;
  secrets?: ThirdAppSecrets[];
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      name: 'Name',
      oidcSsoConfig: 'OidcSsoConfig',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      name: 'string',
      oidcSsoConfig: ThirdAppOidcSsoConfig,
      secrets: { 'type': 'array', 'itemType': ThirdAppSecrets },
    };
  }

  validate() {
    if(this.oidcSsoConfig && typeof (this.oidcSsoConfig as any).validate === 'function') {
      (this.oidcSsoConfig as any).validate();
    }
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WaIdPermissions extends $dara.Model {
  code?: string;
  isBasicChild?: boolean;
  name?: string;
  subPermissions?: WaIdPermissions[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isBasicChild: 'IsBasicChild',
      name: 'Name',
      subPermissions: 'SubPermissions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isBasicChild: 'boolean',
      name: 'string',
      subPermissions: { 'type': 'array', 'itemType': WaIdPermissions },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subPermissions)) {
      $dara.Model.validateArray(this.subPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDesktopManagerRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  isDesktopManager?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      isDesktopManager: 'IsDesktopManager',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDesktopManager: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDesktopManagerResponseBody extends $dara.Model {
  /**
   * @example
   * 868B8926-2E7A-5BE7-9897-E811E994****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDesktopManagerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSetDesktopManagerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSetDesktopManagerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeUserPasswordRequest extends $dara.Model {
  /**
   * @example
   * alice***
   */
  endUserId?: string;
  /**
   * @example
   * Admin@12***
   */
  newPassword?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      newPassword: 'NewPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      newPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeUserPasswordResponseBody extends $dara.Model {
  /**
   * @example
   * AA8D67CB-345D-5CDA-986E-FFAC7D0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeUserPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeUserPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the property. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 22C97624-2405-54AC-BD44-A63FBE97CC2D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of convenience users that are associated with the property.
   * 
   * @example
   * 7
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      useCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckUsedPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUsedPropertyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to query property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 380
   */
  propertyId?: number;
  /**
   * @remarks
   * The ID of the property value. You can call the [ListProperty](~~ListProperty~~) operation to query the ID of the property value.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of convenience accounts that are associated with the specified custom property value.
   * 
   * @example
   * 1
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      useCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyValueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckUsedPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUsedPropertyValueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org-evk12ozjvmlxl****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrgResponseBody extends $dara.Model {
  /**
   * @example
   * org-evk12ozjvmlxl****
   */
  orgId?: string;
  /**
   * @example
   * 7A2C3803-C975-5871-A232-80A91009****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrgResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrgResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The values of the property. You can specify up to 50 values for a property.
   */
  propertyValues?: string[];
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of creating the property.
   */
  createResult?: CreatePropertyResponseBodyCreateResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResult: CreatePropertyResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePropertyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the convenience users are automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  isLocalAdmin?: boolean;
  /**
   * @remarks
   * The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
   * 
   * @example
   * Test123****
   */
  password?: string;
  passwordExpireDays?: string;
  /**
   * @remarks
   * The information about the convenience user.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateUsers
   */
  users?: CreateUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      isLocalAdmin: 'IsLocalAdmin',
      password: 'Password',
      passwordExpireDays: 'PasswordExpireDays',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      isLocalAdmin: 'boolean',
      password: 'string',
      passwordExpireDays: 'string',
      users: { 'type': 'array', 'itemType': CreateUsersRequestUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBody extends $dara.Model {
  allSucceed?: boolean;
  /**
   * @remarks
   * The result of user creation.
   */
  createResult?: CreateUsersResponseBodyCreateResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allSucceed: 'AllSucceed',
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSucceed: 'boolean',
      createResult: CreateUsersResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The property value ID. You can call the [ListProperty](~~ListProperty~~) operation to query the property value ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  /**
   * @remarks
   * The user ID. You can call the [DescribeUsers](~~DescribeUsers~~) operation to query the user ID, which is the return value of the `Id` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPropertyValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6C62E40-F937-5803-B008-92E813399BA5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPropertyValueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserPropertyValueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The domain of the Active Directory (AD) workspace.
   * 
   * @example
   * cn.misumi.pri
   */
  adDomain?: string;
  /**
   * @remarks
   * The usernames of the convenience users.
   * 
   * @example
   * test
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 500.\\
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set the value to the token that is obtained from the previous query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The serial numbers of the virtual MFA devices.
   * 
   * @example
   * c2d9ae94-a64b-4a0d-8024-9519ca50****
   */
  serialNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      endUserIds: 'EndUserIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serialNumbers: 'SerialNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      serialNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.serialNumbers)) {
      $dara.Model.validateArray(this.serialNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the virtual MFA devices.
   */
  mfaDevices?: DescribeMfaDevicesResponseBodyMfaDevices[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6na6YlN9asMM31MsMcdQNpp
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33DBB8EC-6E68-4726-91C4-E09C59D9A7D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mfaDevices: 'MfaDevices',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaDevices: { 'type': 'array', 'itemType': DescribeMfaDevicesResponseBodyMfaDevices },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mfaDevices)) {
      $dara.Model.validateArray(this.mfaDevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMfaDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMfaDevicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgByLayerRequest extends $dara.Model {
  orgName?: string;
  /**
   * @example
   * org-11fs****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgByLayerResponseBody extends $dara.Model {
  orgs?: DescribeOrgByLayerResponseBodyOrgs[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orgs: 'Orgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgs: { 'type': 'array', 'itemType': DescribeOrgByLayerResponseBodyOrgs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgByLayerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOrgByLayerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOrgByLayerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 100.\\
   * Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the DescribeOrgs operation was called.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * org****
   */
  orgName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the DescribeOrgs operation was called.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The organizations.
   */
  orgs?: DescribeOrgsResponseBodyOrgs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B4BB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      orgs: 'Orgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      orgs: { 'type': 'array', 'itemType': DescribeOrgsResponseBodyOrgs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOrgsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOrgsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersRequest extends $dara.Model {
  bizType?: string;
  /**
   * @remarks
   * The usernames that must be exactly matched.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The usernames that must be exactly excluded.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The string that is used for fuzzy search. You perform fuzzy search by username (EndUserId) and email address (Email). Wildcard characters (\\*) are supported. For example, if you set this parameter to `a*m`, usernames or email addresses that start with `a` and end with `m` are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  filterWithAssignedResource?: { [key: string]: string };
  filterWithAssignedResources?: { [key: string]: boolean };
  /**
   * @remarks
   * The ID of the organization in which you want to query convenience users.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * *   Valid values: 1 to 500.
   * *   Default value: 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.\\
   * If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the return value of NextToken to perform the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the organization in which you want to query users.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  showExtras?: { [key: string]: any };
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endUserIds: 'EndUserIds',
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      filterWithAssignedResource: 'FilterWithAssignedResource',
      filterWithAssignedResources: 'FilterWithAssignedResources',
      groupId: 'GroupId',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      showExtras: 'ShowExtras',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      filterWithAssignedResource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      filterWithAssignedResources: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      groupId: 'string',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      showExtras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
    }
    if(this.filterWithAssignedResource) {
      $dara.Model.validateMap(this.filterWithAssignedResource);
    }
    if(this.filterWithAssignedResources) {
      $dara.Model.validateMap(this.filterWithAssignedResources);
    }
    if(this.showExtras) {
      $dara.Model.validateMap(this.showExtras);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersShrinkRequest extends $dara.Model {
  bizType?: string;
  /**
   * @remarks
   * The usernames that must be exactly matched.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The usernames that must be exactly excluded.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The string that is used for fuzzy search. You perform fuzzy search by username (EndUserId) and email address (Email). Wildcard characters (\\*) are supported. For example, if you set this parameter to `a*m`, usernames or email addresses that start with `a` and end with `m` are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  filterWithAssignedResourceShrink?: string;
  filterWithAssignedResourcesShrink?: string;
  /**
   * @remarks
   * The ID of the organization in which you want to query convenience users.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * *   Valid values: 1 to 500.
   * *   Default value: 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.\\
   * If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the return value of NextToken to perform the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the organization in which you want to query users.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  showExtrasShrink?: string;
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endUserIds: 'EndUserIds',
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      filterWithAssignedResourceShrink: 'FilterWithAssignedResource',
      filterWithAssignedResourcesShrink: 'FilterWithAssignedResources',
      groupId: 'GroupId',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      showExtrasShrink: 'ShowExtras',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      filterWithAssignedResourceShrink: 'string',
      filterWithAssignedResourcesShrink: 'string',
      groupId: 'string',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      showExtrasShrink: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The convenience accounts.
   */
  users?: DescribeUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of usernames to be precisely excluded.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The string that is used for fuzzy search. You can use usernames and email addresses to perform fuzzy search. Wildcard characters (\\*) are supported for this parameter. For example, if you set this parameter to a\\*m, the usernames or an email addresses that start with a or end with m are returned.
   * 
   * @example
   * test
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktops that are assigned to the convenience user.
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
  includeDesktopCount?: boolean;
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktop pools that are assigned to the convenience user.
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
   * false
   */
  includeDesktopGroupCount?: boolean;
  includeOrgInfo?: boolean;
  includeSupportIdps?: boolean;
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries per page. If you set this parameter to a value greater than 100, the system resets the value to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the returned NextToken value to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The parameter that might affect the sorting logic.
   */
  orderParam?: FilterUsersRequestOrderParam;
  /**
   * @remarks
   * The ID of the organization.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The activation type of the convenience account.
   * 
   * Valid values:
   * 
   * *   CreateFromManager: administrator-activated.
   * *   Normal: user-activated.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The list of properties for fuzzy search.
   */
  propertyFilterParam?: FilterUsersRequestPropertyFilterParam[];
  /**
   * @remarks
   * The list of property names and property values.
   */
  propertyKeyValueFilterParam?: FilterUsersRequestPropertyKeyValueFilterParam[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      includeDesktopCount: 'IncludeDesktopCount',
      includeDesktopGroupCount: 'IncludeDesktopGroupCount',
      includeOrgInfo: 'IncludeOrgInfo',
      includeSupportIdps: 'IncludeSupportIdps',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderParam: 'OrderParam',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      propertyFilterParam: 'PropertyFilterParam',
      propertyKeyValueFilterParam: 'PropertyKeyValueFilterParam',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      includeDesktopCount: 'boolean',
      includeDesktopGroupCount: 'boolean',
      includeOrgInfo: 'boolean',
      includeSupportIdps: 'boolean',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderParam: FilterUsersRequestOrderParam,
      orgId: 'string',
      ownerType: 'string',
      propertyFilterParam: { 'type': 'array', 'itemType': FilterUsersRequestPropertyFilterParam },
      propertyKeyValueFilterParam: { 'type': 'array', 'itemType': FilterUsersRequestPropertyKeyValueFilterParam },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
    }
    if(this.orderParam && typeof (this.orderParam as any).validate === 'function') {
      (this.orderParam as any).validate();
    }
    if(Array.isArray(this.propertyFilterParam)) {
      $dara.Model.validateArray(this.propertyFilterParam);
    }
    if(Array.isArray(this.propertyKeyValueFilterParam)) {
      $dara.Model.validateArray(this.propertyKeyValueFilterParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of usernames to be precisely excluded.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The string that is used for fuzzy search. You can use usernames and email addresses to perform fuzzy search. Wildcard characters (\\*) are supported for this parameter. For example, if you set this parameter to a\\*m, the usernames or an email addresses that start with a or end with m are returned.
   * 
   * @example
   * test
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktops that are assigned to the convenience user.
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
  includeDesktopCount?: boolean;
  /**
   * @remarks
   * Specifies whether to return the number of cloud desktop pools that are assigned to the convenience user.
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
   * false
   */
  includeDesktopGroupCount?: boolean;
  includeOrgInfo?: boolean;
  includeSupportIdps?: boolean;
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries per page. If you set this parameter to a value greater than 100, the system resets the value to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the returned NextToken value to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The parameter that might affect the sorting logic.
   */
  orderParamShrink?: string;
  /**
   * @remarks
   * The ID of the organization.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The activation type of the convenience account.
   * 
   * Valid values:
   * 
   * *   CreateFromManager: administrator-activated.
   * *   Normal: user-activated.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The list of properties for fuzzy search.
   */
  propertyFilterParam?: FilterUsersShrinkRequestPropertyFilterParam[];
  /**
   * @remarks
   * The list of property names and property values.
   */
  propertyKeyValueFilterParam?: FilterUsersShrinkRequestPropertyKeyValueFilterParam[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      includeDesktopCount: 'IncludeDesktopCount',
      includeDesktopGroupCount: 'IncludeDesktopGroupCount',
      includeOrgInfo: 'IncludeOrgInfo',
      includeSupportIdps: 'IncludeSupportIdps',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderParamShrink: 'OrderParam',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      propertyFilterParam: 'PropertyFilterParam',
      propertyKeyValueFilterParam: 'PropertyKeyValueFilterParam',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      includeDesktopCount: 'boolean',
      includeDesktopGroupCount: 'boolean',
      includeOrgInfo: 'boolean',
      includeSupportIdps: 'boolean',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderParamShrink: 'string',
      orgId: 'string',
      ownerType: 'string',
      propertyFilterParam: { 'type': 'array', 'itemType': FilterUsersShrinkRequestPropertyFilterParam },
      propertyKeyValueFilterParam: { 'type': 'array', 'itemType': FilterUsersShrinkRequestPropertyKeyValueFilterParam },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
    }
    if(Array.isArray(this.propertyFilterParam)) {
      $dara.Model.validateArray(this.propertyFilterParam);
    }
    if(Array.isArray(this.propertyKeyValueFilterParam)) {
      $dara.Model.validateArray(this.propertyKeyValueFilterParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the returned NextToken value to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBD276B5-00FF-5E04-8EF7-5CBA09BF112A
   */
  requestId?: string;
  /**
   * @remarks
   * The convenience accounts.
   */
  users?: FilterUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FilterUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FilterUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagerInfoByAuthCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * e49cd070452f0044813a467d4743****
   */
  authCode?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagerInfoByAuthCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 12345678901234****
   */
  orgId?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 1301234****
   */
  phone?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * devteam
   */
  teamName?: string;
  /**
   * @remarks
   * The tenant name.
   * 
   * @example
   * zhangsan
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the Elastic Desktop Service account.
   * 
   * @example
   * 12345678901234****
   */
  waId?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      phone: 'Phone',
      requestId: 'RequestId',
      teamName: 'TeamName',
      userName: 'UserName',
      waId: 'WaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      phone: 'string',
      requestId: 'string',
      teamName: 'string',
      userName: 'string',
      waId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagerInfoByAuthCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetManagerInfoByAuthCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetManagerInfoByAuthCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantAliasResponseBody extends $dara.Model {
  aliasInfo?: InitTenantAliasResponseBodyAliasInfo;
  /**
   * @example
   * WY23***
   */
  data?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasInfo: 'AliasInfo',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasInfo: InitTenantAliasResponseBodyAliasInfo,
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.aliasInfo && typeof (this.aliasInfo as any).validate === 'function') {
      (this.aliasInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTenantAliasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitTenantAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitTenantAliasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the properties.
   */
  properties?: ListPropertyResponseBodyProperties[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      properties: { 'type': 'array', 'itemType': ListPropertyResponseBodyProperties },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPropertyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the property. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about property values.
   */
  propertyValueInfos?: ListPropertyValueResponseBodyPropertyValueInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C52013A5-3422-5D1F-B22C-A57110972AD9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyValueInfos: 'PropertyValueInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValueInfos: { 'type': 'array', 'itemType': ListPropertyValueResponseBodyPropertyValueInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValueInfos)) {
      $dara.Model.validateArray(this.propertyValueInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPropertyValueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMfaDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The domain of the Active Directory (AD) workspace.
   * 
   * @example
   * pg-jifenn.com
   */
  adDomain?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device. The serial number is unique for each device.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMfaDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42FE70D8-4336-471B-8314-CCCFCE4159FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMfaDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LockMfaDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LockMfaDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersRequest extends $dara.Model {
  logoutSession?: boolean;
  /**
   * @remarks
   * The usernames of the convenience users that you want to lock.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      logoutSession: 'LogoutSession',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoutSession: 'boolean',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the locking the convenience user.
   */
  lockUsersResult?: LockUsersResponseBodyLockUsersResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lockUsersResult: 'LockUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockUsersResult: LockUsersResponseBodyLockUsersResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.lockUsersResult && typeof (this.lockUsersResult as any).validate === 'function') {
      (this.lockUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LockUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LockUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org-76joc57khvnhdh***
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrgResponseBody extends $dara.Model {
  /**
   * @example
   * 0296EDF8-3C8A-5128-8682-27B29C99****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrgResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyOrgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyOrgResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the convenience user. For a user-activated convenience user, the email address or mobile number must be verified. You can choose to verify the email address or the mobile number. For an administrator-activated convenience user, the email address and mobile number can be left empty.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * Alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The mobile number of the convenience user. For a user-activated convenience user, the email address or mobile number must be verified. You can choose to verify the email address or the mobile number. For an administrator-activated convenience user, the email address and mobile number can be left empty.
   * 
   * >  Accounts created on the International site (alibabacloud.com) do not support mobile number-based authentication.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveOrgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org-5yy5icj981xe5****
   */
  newParentOrgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org-5yy5icj981xe5****
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      newParentOrgId: 'NewParentOrgId',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newParentOrgId: 'string',
      orgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveOrgResponseBody extends $dara.Model {
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveOrgResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveOrgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveOrgResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncStatusByAliUidResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QuerySyncStatusByAliUidResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySyncStatusByAliUidResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncStatusByAliUidResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySyncStatusByAliUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySyncStatusByAliUidResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMfaDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The domain of the Active Directory (AD) workspace.
   * 
   * @example
   * alpha.lftltd.net
   */
  adDomain?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device. The serial number is unique for each device.
   * 
   * This parameter is required.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMfaDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB550AAB-FB36-4A91-93F6-F4374AF65403
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMfaDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveMfaDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveMfaDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveOrgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org-5yy5icj981xe5****
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveOrgResponseBody extends $dara.Model {
  /**
   * @example
   * 6C352609-EE7F-5603-B5E6-57C3EDDD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveOrgResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveOrgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveOrgResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the property. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePropertyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemovePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePropertyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The usernames of the convenience users that you want to remove.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of removing the convenience user.
   */
  removeUsersResult?: RemoveUsersResponseBodyRemoveUsersResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      removeUsersResult: 'RemoveUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUsersResult: RemoveUsersResponseBodyRemoveUsersResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.removeUsersResult && typeof (this.removeUsersResult as any).validate === 'function') {
      (this.removeUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The method to notify the user after the password is reset.
   * 
   * > Alibaba Cloud accounts of the international site do not support sending notification through text messages.
   * 
   * @example
   * 1
   */
  notifyType?: number;
  /**
   * @remarks
   * The names of the convenience users whose passwords you want to reset.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'number',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 32D05B39-E6EE-4D7A-9FD0-762A26859D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of resetting the password of the convenience user.
   */
  resetUsersResult?: ResetUserPasswordResponseBodyResetUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resetUsersResult: 'ResetUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resetUsersResult: ResetUserPasswordResponseBodyResetUsersResult,
    };
  }

  validate() {
    if(this.resetUsersResult && typeof (this.resetUsersResult as any).validate === 'function') {
      (this.resetUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetUserPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPropertyValueRequest extends $dara.Model {
  /**
   * @remarks
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The ID of the property value. You can call the [ListProperty](~~ListProperty~~) operation to query the ID of the property value.
   * 
   * This parameter is required.
   * 
   * @example
   * 978
   */
  propertyValueId?: number;
  /**
   * @remarks
   * The ID of the convenience user. You can call the [DescribeUsers](~~DescribeUsers~~) operation to query the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  userId?: number;
  /**
   * @remarks
   * The username of the convenience user.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPropertyValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPropertyValueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetUserPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetUserPropertyValueResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAllEduInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAllEduInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncAllEduInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncAllEduInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockMfaDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The domain of the Active Directory (AD) workspace.
   * 
   * @example
   * welab.co.id
   */
  adDomain?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device. The serial number is unique for each device.
   * 
   * This parameter is required.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockMfaDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BD39C60-4E38-43BE-BA2F-69136C6C5190
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockMfaDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockMfaDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockMfaDeviceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the convenience users are automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The usernames of the convenience users that you want to unlock.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 023F4EC4-3602-4A3E-A514-4970847D59DB
   */
  requestId?: string;
  /**
   * @remarks
   * The result of unlocking the convenience user.
   */
  unlockUsersResult?: UnlockUsersResponseBodyUnlockUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      unlockUsersResult: 'UnlockUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      unlockUsersResult: UnlockUsersResponseBodyUnlockUsersResult,
    };
  }

  validate() {
    if(this.unlockUsersResult && typeof (this.unlockUsersResult as any).validate === 'function') {
      (this.unlockUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the property that you want to modify. You can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the property ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  /**
   * @remarks
   * The new property name.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey
   */
  propertyKey?: string;
  /**
   * @remarks
   * The values of property.
   */
  propertyValues?: UpdatePropertyRequestPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': UpdatePropertyRequestPropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the modification.
   */
  updateResult?: UpdatePropertyResponseBodyUpdateResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: UpdatePropertyResponseBodyUpdateResult,
    };
  }

  validate() {
    if(this.updateResult && typeof (this.updateResult as any).validate === 'function') {
      (this.updateResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePropertyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eds-user", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 批量设置桌面管理员
   * 
   * @param request - BatchSetDesktopManagerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetDesktopManagerResponse
   */
  async batchSetDesktopManagerWithOptions(request: BatchSetDesktopManagerRequest, runtime: $dara.RuntimeOptions): Promise<BatchSetDesktopManagerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isDesktopManager)) {
      body["IsDesktopManager"] = request.isDesktopManager;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetDesktopManager",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<BatchSetDesktopManagerResponse>(await this.callApi(params, req, runtime), new BatchSetDesktopManagerResponse({}));
  }

  /**
   * 批量设置桌面管理员
   * 
   * @param request - BatchSetDesktopManagerRequest
   * @returns BatchSetDesktopManagerResponse
   */
  async batchSetDesktopManager(request: BatchSetDesktopManagerRequest): Promise<BatchSetDesktopManagerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetDesktopManagerWithOptions(request, runtime);
  }

  /**
   * 管理员修改用户密码
   * 
   * @param request - ChangeUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeUserPasswordResponse
   */
  async changeUserPasswordWithOptions(request: ChangeUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ChangeUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.newPassword)) {
      body["NewPassword"] = request.newPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeUserPassword",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeUserPasswordResponse>(await this.callApi(params, req, runtime), new ChangeUserPasswordResponse({}));
  }

  /**
   * 管理员修改用户密码
   * 
   * @param request - ChangeUserPasswordRequest
   * @returns ChangeUserPasswordResponse
   */
  async changeUserPassword(request: ChangeUserPasswordRequest): Promise<ChangeUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeUserPasswordWithOptions(request, runtime);
  }

  /**
   * Queries whether a property is associated with one or more convenience users.
   * 
   * @param request - CheckUsedPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsedPropertyResponse
   */
  async checkUsedPropertyWithOptions(request: CheckUsedPropertyRequest, runtime: $dara.RuntimeOptions): Promise<CheckUsedPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUsedProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckUsedPropertyResponse>(await this.callApi(params, req, runtime), new CheckUsedPropertyResponse({}));
  }

  /**
   * Queries whether a property is associated with one or more convenience users.
   * 
   * @param request - CheckUsedPropertyRequest
   * @returns CheckUsedPropertyResponse
   */
  async checkUsedProperty(request: CheckUsedPropertyRequest): Promise<CheckUsedPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsedPropertyWithOptions(request, runtime);
  }

  /**
   * Queries the number of convenience accounts that are associated with the specified custom property value.
   * 
   * @remarks
   * Before you call the operation, you can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the existing user properties and their IDs (PropertyId) and values (PropertyValueId).
   * 
   * @param request - CheckUsedPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValueWithOptions(request: CheckUsedPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<CheckUsedPropertyValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyValueId)) {
      query["PropertyValueId"] = request.propertyValueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUsedPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckUsedPropertyValueResponse>(await this.callApi(params, req, runtime), new CheckUsedPropertyValueResponse({}));
  }

  /**
   * Queries the number of convenience accounts that are associated with the specified custom property value.
   * 
   * @remarks
   * Before you call the operation, you can call the [ListProperty](https://help.aliyun.com/document_detail/410890.html) operation to query the existing user properties and their IDs (PropertyId) and values (PropertyValueId).
   * 
   * @param request - CheckUsedPropertyValueRequest
   * @returns CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValue(request: CheckUsedPropertyValueRequest): Promise<CheckUsedPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsedPropertyValueWithOptions(request, runtime);
  }

  /**
   * 创建组织
   * 
   * @param request - CreateOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrgResponse
   */
  async createOrgWithOptions(request: CreateOrgRequest, runtime: $dara.RuntimeOptions): Promise<CreateOrgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      query["ParentOrgId"] = request.parentOrgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateOrgResponse>(await this.callApi(params, req, runtime), new CreateOrgResponse({}));
  }

  /**
   * 创建组织
   * 
   * @param request - CreateOrgRequest
   * @returns CreateOrgResponse
   */
  async createOrg(request: CreateOrgRequest): Promise<CreateOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrgWithOptions(request, runtime);
  }

  /**
   * Creates a user property.
   * 
   * @param request - CreatePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePropertyResponse
   */
  async createPropertyWithOptions(request: CreatePropertyRequest, runtime: $dara.RuntimeOptions): Promise<CreatePropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!$dara.isNull(request.propertyValues)) {
      body["PropertyValues"] = request.propertyValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreatePropertyResponse>(await this.callApi(params, req, runtime), new CreatePropertyResponse({}));
  }

  /**
   * Creates a user property.
   * 
   * @param request - CreatePropertyRequest
   * @returns CreatePropertyResponse
   */
  async createProperty(request: CreatePropertyRequest): Promise<CreatePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPropertyWithOptions(request, runtime);
  }

  /**
   * Creates a convenience user.
   * 
   * @remarks
   * Convenience users are dedicated Elastic Desktop Service (EDS) user accounts and are suitable for scenarios in which you do not need to connect to enterprise Active Directory (AD) systems. The information about a convenience user includes the username, email address, and mobile number. You must specify the username or email address.
   * 
   * @param request - CreateUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsersResponse
   */
  async createUsersWithOptions(request: CreateUsersRequest, runtime: $dara.RuntimeOptions): Promise<CreateUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoLockTime)) {
      query["AutoLockTime"] = request.autoLockTime;
    }

    if (!$dara.isNull(request.isLocalAdmin)) {
      query["IsLocalAdmin"] = request.isLocalAdmin;
    }

    if (!$dara.isNull(request.passwordExpireDays)) {
      query["PasswordExpireDays"] = request.passwordExpireDays;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateUsersResponse>(await this.callApi(params, req, runtime), new CreateUsersResponse({}));
  }

  /**
   * Creates a convenience user.
   * 
   * @remarks
   * Convenience users are dedicated Elastic Desktop Service (EDS) user accounts and are suitable for scenarios in which you do not need to connect to enterprise Active Directory (AD) systems. The information about a convenience user includes the username, email address, and mobile number. You must specify the username or email address.
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: CreateUsersRequest): Promise<CreateUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Dissociates a user property from a user.
   * 
   * @remarks
   * Before you call this operation, you can call the FilterUsers operation to query the users that are associated with user properties.
   * 
   * @param request - DeleteUserPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValueWithOptions(request: DeleteUserPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserPropertyValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyValueId)) {
      body["PropertyValueId"] = request.propertyValueId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteUserPropertyValueResponse>(await this.callApi(params, req, runtime), new DeleteUserPropertyValueResponse({}));
  }

  /**
   * Dissociates a user property from a user.
   * 
   * @remarks
   * Before you call this operation, you can call the FilterUsers operation to query the users that are associated with user properties.
   * 
   * @param request - DeleteUserPropertyValueRequest
   * @returns DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValue(request: DeleteUserPropertyValueRequest): Promise<DeleteUserPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserPropertyValueWithOptions(request, runtime);
  }

  /**
   * Queries the information about virtual multi-factor authentication (MFA) devices that are bound to convenience users.
   * 
   * @param request - DescribeMfaDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMfaDevicesResponse
   */
  async describeMfaDevicesWithOptions(request: DescribeMfaDevicesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeMfaDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMfaDevices",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeMfaDevicesResponse>(await this.callApi(params, req, runtime), new DescribeMfaDevicesResponse({}));
  }

  /**
   * Queries the information about virtual multi-factor authentication (MFA) devices that are bound to convenience users.
   * 
   * @param request - DescribeMfaDevicesRequest
   * @returns DescribeMfaDevicesResponse
   */
  async describeMfaDevices(request: DescribeMfaDevicesRequest): Promise<DescribeMfaDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMfaDevicesWithOptions(request, runtime);
  }

  /**
   * 查找下级组织
   * 
   * @param request - DescribeOrgByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrgByLayerResponse
   */
  async describeOrgByLayerWithOptions(request: DescribeOrgByLayerRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOrgByLayerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orgName)) {
      body["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      body["ParentOrgId"] = request.parentOrgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrgByLayer",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeOrgByLayerResponse>(await this.callApi(params, req, runtime), new DescribeOrgByLayerResponse({}));
  }

  /**
   * 查找下级组织
   * 
   * @param request - DescribeOrgByLayerRequest
   * @returns DescribeOrgByLayerResponse
   */
  async describeOrgByLayer(request: DescribeOrgByLayerRequest): Promise<DescribeOrgByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrgByLayerWithOptions(request, runtime);
  }

  /**
   * Queries organizations.
   * 
   * @remarks
   * An organization is in a tree structure. The root organization ID is in the following format: org-aliyun-wy-org-id.
   * 
   * @param request - DescribeOrgsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrgsResponse
   */
  async describeOrgsWithOptions(request: DescribeOrgsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOrgsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.parentOrgId)) {
      query["ParentOrgId"] = request.parentOrgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrgs",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeOrgsResponse>(await this.callApi(params, req, runtime), new DescribeOrgsResponse({}));
  }

  /**
   * Queries organizations.
   * 
   * @remarks
   * An organization is in a tree structure. The root organization ID is in the following format: org-aliyun-wy-org-id.
   * 
   * @param request - DescribeOrgsRequest
   * @returns DescribeOrgsResponse
   */
  async describeOrgs(request: DescribeOrgsRequest): Promise<DescribeOrgsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrgsWithOptions(request, runtime);
  }

  /**
   * Queries the information about convenience users. The information of a convenience user includes a username, an email address, and a description.
   * 
   * @param tmpReq - DescribeUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsersResponse
   */
  async describeUsersWithOptions(tmpReq: DescribeUsersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUsersResponse> {
    tmpReq.validate();
    let request = new DescribeUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterWithAssignedResource)) {
      request.filterWithAssignedResourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterWithAssignedResource, "FilterWithAssignedResource", "json");
    }

    if (!$dara.isNull(tmpReq.filterWithAssignedResources)) {
      request.filterWithAssignedResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterWithAssignedResources, "FilterWithAssignedResources", "json");
    }

    if (!$dara.isNull(tmpReq.showExtras)) {
      request.showExtrasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.showExtras, "ShowExtras", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.filterWithAssignedResourceShrink)) {
      query["FilterWithAssignedResource"] = request.filterWithAssignedResourceShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.excludeEndUserIds)) {
      body["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!$dara.isNull(request.filterWithAssignedResourcesShrink)) {
      body["FilterWithAssignedResources"] = request.filterWithAssignedResourcesShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isQueryAllSubOrgs)) {
      body["IsQueryAllSubOrgs"] = request.isQueryAllSubOrgs;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.showExtrasShrink)) {
      body["ShowExtras"] = request.showExtrasShrink;
    }

    if (!$dara.isNull(request.solutionId)) {
      body["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeUsersResponse>(await this.callApi(params, req, runtime), new DescribeUsersResponse({}));
  }

  /**
   * Queries the information about convenience users. The information of a convenience user includes a username, an email address, and a description.
   * 
   * @param request - DescribeUsersRequest
   * @returns DescribeUsersResponse
   */
  async describeUsers(request: DescribeUsersRequest): Promise<DescribeUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsersWithOptions(request, runtime);
  }

  /**
   * Filters convenience accounts by property.
   * 
   * @param tmpReq - FilterUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FilterUsersResponse
   */
  async filterUsersWithOptions(tmpReq: FilterUsersRequest, runtime: $dara.RuntimeOptions): Promise<FilterUsersResponse> {
    tmpReq.validate();
    let request = new FilterUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderParam)) {
      request.orderParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderParam, "OrderParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.excludeEndUserIds)) {
      query["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.includeDesktopCount)) {
      query["IncludeDesktopCount"] = request.includeDesktopCount;
    }

    if (!$dara.isNull(request.includeDesktopGroupCount)) {
      query["IncludeDesktopGroupCount"] = request.includeDesktopGroupCount;
    }

    if (!$dara.isNull(request.includeOrgInfo)) {
      query["IncludeOrgInfo"] = request.includeOrgInfo;
    }

    if (!$dara.isNull(request.includeSupportIdps)) {
      query["IncludeSupportIdps"] = request.includeSupportIdps;
    }

    if (!$dara.isNull(request.isQueryAllSubOrgs)) {
      query["IsQueryAllSubOrgs"] = request.isQueryAllSubOrgs;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderParamShrink)) {
      query["OrderParam"] = request.orderParamShrink;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.ownerType)) {
      query["OwnerType"] = request.ownerType;
    }

    if (!$dara.isNull(request.propertyFilterParam)) {
      query["PropertyFilterParam"] = request.propertyFilterParam;
    }

    if (!$dara.isNull(request.propertyKeyValueFilterParam)) {
      query["PropertyKeyValueFilterParam"] = request.propertyKeyValueFilterParam;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FilterUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<FilterUsersResponse>(await this.callApi(params, req, runtime), new FilterUsersResponse({}));
  }

  /**
   * Filters convenience accounts by property.
   * 
   * @param request - FilterUsersRequest
   * @returns FilterUsersResponse
   */
  async filterUsers(request: FilterUsersRequest): Promise<FilterUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.filterUsersWithOptions(request, runtime);
  }

  /**
   * Obtains the information about the current logon administrator based on the authorization code.
   * 
   * @param request - GetManagerInfoByAuthCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagerInfoByAuthCodeResponse
   */
  async getManagerInfoByAuthCodeWithOptions(request: GetManagerInfoByAuthCodeRequest, runtime: $dara.RuntimeOptions): Promise<GetManagerInfoByAuthCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManagerInfoByAuthCode",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetManagerInfoByAuthCodeResponse>(await this.callApi(params, req, runtime), new GetManagerInfoByAuthCodeResponse({}));
  }

  /**
   * Obtains the information about the current logon administrator based on the authorization code.
   * 
   * @param request - GetManagerInfoByAuthCodeRequest
   * @returns GetManagerInfoByAuthCodeResponse
   */
  async getManagerInfoByAuthCode(request: GetManagerInfoByAuthCodeRequest): Promise<GetManagerInfoByAuthCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManagerInfoByAuthCodeWithOptions(request, runtime);
  }

  /**
   * 初始化TenantAlias
   * 
   * @param request - InitTenantAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitTenantAliasResponse
   */
  async initTenantAliasWithOptions(runtime: $dara.RuntimeOptions): Promise<InitTenantAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "InitTenantAlias",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InitTenantAliasResponse>(await this.callApi(params, req, runtime), new InitTenantAliasResponse({}));
  }

  /**
   * 初始化TenantAlias
   * @returns InitTenantAliasResponse
   */
  async initTenantAlias(): Promise<InitTenantAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initTenantAliasWithOptions(runtime);
  }

  /**
   * Queries all user properties within an Alibaba Cloud account.
   * 
   * @param request - ListPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPropertyResponse
   */
  async listPropertyWithOptions(runtime: $dara.RuntimeOptions): Promise<ListPropertyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListPropertyResponse>(await this.callApi(params, req, runtime), new ListPropertyResponse({}));
  }

  /**
   * Queries all user properties within an Alibaba Cloud account.
   * @returns ListPropertyResponse
   */
  async listProperty(): Promise<ListPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPropertyWithOptions(runtime);
  }

  /**
   * Queries property values of a user property.
   * 
   * @param request - ListPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPropertyValueResponse
   */
  async listPropertyValueWithOptions(request: ListPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<ListPropertyValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListPropertyValueResponse>(await this.callApi(params, req, runtime), new ListPropertyValueResponse({}));
  }

  /**
   * Queries property values of a user property.
   * 
   * @param request - ListPropertyValueRequest
   * @returns ListPropertyValueResponse
   */
  async listPropertyValue(request: ListPropertyValueRequest): Promise<ListPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPropertyValueWithOptions(request, runtime);
  }

  /**
   * Locks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * After a virtual MFA device is locked, the status of the virtual MFA device changes to LOCKED. The convenience user to which the MFA device is bound cannot log on to the cloud desktop that resides in the workspace with the MFA feature enabled because the identity of the convenience user cannot be verified based on the virtual MFA device. You can call the [UnlockMfaDevice](https://help.aliyun.com/document_detail/286534.html) operation to unlock the virtual MFA device.
   * 
   * @param request - LockMfaDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockMfaDeviceResponse
   */
  async lockMfaDeviceWithOptions(request: LockMfaDeviceRequest, runtime: $dara.RuntimeOptions): Promise<LockMfaDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<LockMfaDeviceResponse>(await this.callApi(params, req, runtime), new LockMfaDeviceResponse({}));
  }

  /**
   * Locks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * After a virtual MFA device is locked, the status of the virtual MFA device changes to LOCKED. The convenience user to which the MFA device is bound cannot log on to the cloud desktop that resides in the workspace with the MFA feature enabled because the identity of the convenience user cannot be verified based on the virtual MFA device. You can call the [UnlockMfaDevice](https://help.aliyun.com/document_detail/286534.html) operation to unlock the virtual MFA device.
   * 
   * @param request - LockMfaDeviceRequest
   * @returns LockMfaDeviceResponse
   */
  async lockMfaDevice(request: LockMfaDeviceRequest): Promise<LockMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Locks one or more convenience users.
   * 
   * @param request - LockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockUsersResponse
   */
  async lockUsersWithOptions(request: LockUsersRequest, runtime: $dara.RuntimeOptions): Promise<LockUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logoutSession)) {
      query["LogoutSession"] = request.logoutSession;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<LockUsersResponse>(await this.callApi(params, req, runtime), new LockUsersResponse({}));
  }

  /**
   * Locks one or more convenience users.
   * 
   * @param request - LockUsersRequest
   * @returns LockUsersResponse
   */
  async lockUsers(request: LockUsersRequest): Promise<LockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  /**
   * 修改组织
   * 
   * @param request - ModifyOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOrgResponse
   */
  async modifyOrgWithOptions(request: ModifyOrgRequest, runtime: $dara.RuntimeOptions): Promise<ModifyOrgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyOrgResponse>(await this.callApi(params, req, runtime), new ModifyOrgResponse({}));
  }

  /**
   * 修改组织
   * 
   * @param request - ModifyOrgRequest
   * @returns ModifyOrgResponse
   */
  async modifyOrg(request: ModifyOrgRequest): Promise<ModifyOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyOrgWithOptions(request, runtime);
  }

  /**
   * Modifies user information.
   * 
   * @param request - ModifyUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserResponse
   */
  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $dara.RuntimeOptions): Promise<ModifyUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUser",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyUserResponse>(await this.callApi(params, req, runtime), new ModifyUserResponse({}));
  }

  /**
   * Modifies user information.
   * 
   * @param request - ModifyUserRequest
   * @returns ModifyUserResponse
   */
  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  /**
   * 移动组织
   * 
   * @param request - MoveOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveOrgResponse
   */
  async moveOrgWithOptions(request: MoveOrgRequest, runtime: $dara.RuntimeOptions): Promise<MoveOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newParentOrgId)) {
      body["NewParentOrgId"] = request.newParentOrgId;
    }

    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<MoveOrgResponse>(await this.callApi(params, req, runtime), new MoveOrgResponse({}));
  }

  /**
   * 移动组织
   * 
   * @param request - MoveOrgRequest
   * @returns MoveOrgResponse
   */
  async moveOrg(request: MoveOrgRequest): Promise<MoveOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveOrgWithOptions(request, runtime);
  }

  /**
   * 查询edu同步信息
   * 
   * @param request - QuerySyncStatusByAliUidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySyncStatusByAliUidResponse
   */
  async querySyncStatusByAliUidWithOptions(runtime: $dara.RuntimeOptions): Promise<QuerySyncStatusByAliUidResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QuerySyncStatusByAliUid",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySyncStatusByAliUidResponse>(await this.callApi(params, req, runtime), new QuerySyncStatusByAliUidResponse({}));
  }

  /**
   * 查询edu同步信息
   * @returns QuerySyncStatusByAliUidResponse
   */
  async querySyncStatusByAliUid(): Promise<QuerySyncStatusByAliUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySyncStatusByAliUidWithOptions(runtime);
  }

  /**
   * Removes a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * If you remove a virtual MFA device that is bound to a convenience user, the convenience user can no longer use the virtual MFA device to log on to cloud desktops. Before the convenience user can log on to cloud desktops again, a new virtual MFA device must be bound to the convenience user.
   * 
   * @param request - RemoveMfaDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMfaDeviceResponse
   */
  async removeMfaDeviceWithOptions(request: RemoveMfaDeviceRequest, runtime: $dara.RuntimeOptions): Promise<RemoveMfaDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveMfaDeviceResponse>(await this.callApi(params, req, runtime), new RemoveMfaDeviceResponse({}));
  }

  /**
   * Removes a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @remarks
   * If you remove a virtual MFA device that is bound to a convenience user, the convenience user can no longer use the virtual MFA device to log on to cloud desktops. Before the convenience user can log on to cloud desktops again, a new virtual MFA device must be bound to the convenience user.
   * 
   * @param request - RemoveMfaDeviceRequest
   * @returns RemoveMfaDeviceResponse
   */
  async removeMfaDevice(request: RemoveMfaDeviceRequest): Promise<RemoveMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeMfaDeviceWithOptions(request, runtime);
  }

  /**
   * 移除组织
   * 
   * @param request - RemoveOrgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveOrgResponse
   */
  async removeOrgWithOptions(request: RemoveOrgRequest, runtime: $dara.RuntimeOptions): Promise<RemoveOrgResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveOrg",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveOrgResponse>(await this.callApi(params, req, runtime), new RemoveOrgResponse({}));
  }

  /**
   * 移除组织
   * 
   * @param request - RemoveOrgRequest
   * @returns RemoveOrgResponse
   */
  async removeOrg(request: RemoveOrgRequest): Promise<RemoveOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeOrgWithOptions(request, runtime);
  }

  /**
   * Deletes a user property.
   * 
   * @param request - RemovePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePropertyResponse
   */
  async removePropertyWithOptions(request: RemovePropertyRequest, runtime: $dara.RuntimeOptions): Promise<RemovePropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemovePropertyResponse>(await this.callApi(params, req, runtime), new RemovePropertyResponse({}));
  }

  /**
   * Deletes a user property.
   * 
   * @param request - RemovePropertyRequest
   * @returns RemovePropertyResponse
   */
  async removeProperty(request: RemovePropertyRequest): Promise<RemovePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePropertyWithOptions(request, runtime);
  }

  /**
   * Removes one or more convenience users.
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $dara.RuntimeOptions): Promise<RemoveUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveUsersResponse>(await this.callApi(params, req, runtime), new RemoveUsersResponse({}));
  }

  /**
   * Removes one or more convenience users.
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * Resets the password for a convenience user. If you call this operation, a token that is used to reset the password is generated, and the system sends a password reset email that includes the token to the email address of the convenience user.
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetUserPassword",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetUserPasswordResponse({}));
  }

  /**
   * Resets the password for a convenience user. If you call this operation, a token that is used to reset the password is generated, and the system sends a password reset email that includes the token to the email address of the convenience user.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Associates a user property with a convenience user.
   * 
   * @param request - SetUserPropertyValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPropertyValueResponse
   */
  async setUserPropertyValueWithOptions(request: SetUserPropertyValueRequest, runtime: $dara.RuntimeOptions): Promise<SetUserPropertyValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyValueId)) {
      body["PropertyValueId"] = request.propertyValueId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetUserPropertyValueResponse>(await this.callApi(params, req, runtime), new SetUserPropertyValueResponse({}));
  }

  /**
   * Associates a user property with a convenience user.
   * 
   * @param request - SetUserPropertyValueRequest
   * @returns SetUserPropertyValueResponse
   */
  async setUserPropertyValue(request: SetUserPropertyValueRequest): Promise<SetUserPropertyValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPropertyValueWithOptions(request, runtime);
  }

  /**
   * 从钉钉手动同步老师学生信息
   * 
   * @param request - SyncAllEduInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncAllEduInfoResponse
   */
  async syncAllEduInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<SyncAllEduInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "SyncAllEduInfo",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SyncAllEduInfoResponse>(await this.callApi(params, req, runtime), new SyncAllEduInfoResponse({}));
  }

  /**
   * 从钉钉手动同步老师学生信息
   * @returns SyncAllEduInfoResponse
   */
  async syncAllEduInfo(): Promise<SyncAllEduInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncAllEduInfoWithOptions(runtime);
  }

  /**
   * Unlocks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @param request - UnlockMfaDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockMfaDeviceResponse
   */
  async unlockMfaDeviceWithOptions(request: UnlockMfaDeviceRequest, runtime: $dara.RuntimeOptions): Promise<UnlockMfaDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnlockMfaDeviceResponse>(await this.callApi(params, req, runtime), new UnlockMfaDeviceResponse({}));
  }

  /**
   * Unlocks a virtual multi-factor authentication (MFA) device that is bound to a convenience user.
   * 
   * @param request - UnlockMfaDeviceRequest
   * @returns UnlockMfaDeviceResponse
   */
  async unlockMfaDevice(request: UnlockMfaDeviceRequest): Promise<UnlockMfaDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockMfaDeviceWithOptions(request, runtime);
  }

  /**
   * Unlocks one or more convenience users.
   * 
   * @param request - UnlockUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUsersResponse
   */
  async unlockUsersWithOptions(request: UnlockUsersRequest, runtime: $dara.RuntimeOptions): Promise<UnlockUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoLockTime)) {
      query["AutoLockTime"] = request.autoLockTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnlockUsersResponse>(await this.callApi(params, req, runtime), new UnlockUsersResponse({}));
  }

  /**
   * Unlocks one or more convenience users.
   * 
   * @param request - UnlockUsersRequest
   * @returns UnlockUsersResponse
   */
  async unlockUsers(request: UnlockUsersRequest): Promise<UnlockUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  /**
   * Modifies a user property.
   * 
   * @param request - UpdatePropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePropertyResponse
   */
  async updatePropertyWithOptions(request: UpdatePropertyRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!$dara.isNull(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!$dara.isNull(request.propertyValues)) {
      body["PropertyValues"] = request.propertyValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdatePropertyResponse>(await this.callApi(params, req, runtime), new UpdatePropertyResponse({}));
  }

  /**
   * Modifies a user property.
   * 
   * @param request - UpdatePropertyRequest
   * @returns UpdatePropertyResponse
   */
  async updateProperty(request: UpdatePropertyRequest): Promise<UpdatePropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePropertyWithOptions(request, runtime);
  }

}
