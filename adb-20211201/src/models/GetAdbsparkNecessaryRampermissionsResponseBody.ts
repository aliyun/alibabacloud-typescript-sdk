// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM action for which authentication failed.
   * 
   * @example
   * ListSparkApps
   */
  action?: string;
  /**
   * @remarks
   * The type of access policy denial. Valid values:
   * - ImplicitDeny: The resource owner has not configured a relevant access policy for the current user. Unauthorized operations are denied by default.
   * - ExplicitDeny: The RAM policy configured by the resource owner explicitly denies the current user authorization to access the corresponding resource.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that caused the permission denial. Valid values:
   * - ControlPolicy: control policy.
   * - SessionPolicy: an additional permission policy attached to a temporary token.
   * - AssumeRolePolicy: the trust policy of a RAM role.
   * - AccountLevelIdentityBasedPolicy: an identity-access policy at the account authorization scope, including custom policies and system policies.
   * - ResourceGroupLevelIdentityBasedPolicy: an identity-access policy at the resource group authorization scope, including custom policies and system policies.
   * 
   * @example
   * ControlPolicy
   */
  policyType?: string;
  /**
   * @remarks
   * The identity type of the current user. Valid values:
   * - SubUser: Resource Access Management (RAM) user.
   * - AssumedRoleUser: RAM role.
   * 
   * @example
   * SubUser
   */
  principalType?: string;
  /**
   * @remarks
   * The information about the authentication target, which can be the Resource Access Management (RAM) users ID of the current user or the role information of the current accessor.
   * 
   * @example
   * 223345695632****
   */
  resourceAuthTargetInfo?: string;
  /**
   * @remarks
   * The ID of the resource owner.
   * 
   * @example
   * 11685695632****
   */
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
      principalType: 'PrincipalType',
      resourceAuthTargetInfo: 'ResourceAuthTargetInfo',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      noPermissionType: 'string',
      policyType: 'string',
      principalType: 'string',
      resourceAuthTargetInfo: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetADBSparkNecessaryRAMPermissionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The diagnostic information returned when the permission check fails.
   */
  deniedDetail?: GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail;
  /**
   * @remarks
   * Indicates whether the current user has the basic permissions to use ADB Spark. Valid values:
   * 
   * - true: The check is passed. The user has the basic permissions.
   * - false: The check failed. The user is missing some permissions.
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * The recommended RAM configuration based on the diagnostic information.
   * 
   * @example
   * Grant the system RAM policy \\"AliyunADBDeveloperAccess\\" to current RAM user can quickly solve this issue.
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      deniedDetail: 'DeniedDetail',
      passed: 'Passed',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deniedDetail: GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail,
      passed: 'boolean',
      suggestion: 'string',
    };
  }

  validate() {
    if(this.deniedDetail && typeof (this.deniedDetail as any).validate === 'function') {
      (this.deniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetADBSparkNecessaryRAMPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetADBSparkNecessaryRAMPermissionsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 642F3512-C628-5D0C-8815-F6670C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetADBSparkNecessaryRAMPermissionsResponseBodyData,
      requestId: 'string',
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

