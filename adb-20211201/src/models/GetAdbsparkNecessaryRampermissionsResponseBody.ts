// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM action that failed the authentication.
   * 
   * @example
   * ListSparkApps
   */
  action?: string;
  /**
   * @remarks
   * The type of the policy denial. Valid values:
   * 
   * *   ImplicitDeny: Resource owner has not configured relevant permission policies for the current user, default denial of unauthorized operations.
   * *   ExplicitDeny: RAM policies configured by the resource owner explicitly deny the current user access to corresponding resources
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that causes the access denied error.
   * 
   * *   ControlPolicy: control policy
   * *   SessionPolicy: Temporary Token additional permission policy
   * *   AssumeRolePolicy: RAM role trust policy
   * *   AccountLevelIdentityBasedPolicy: Principal policy within account authorization scope, including custom policies and system policies
   * *   ResourceGroupLevelIdentityBasedPolicy: Principal policy within resource group authorization scope, including custom policies and system policies.
   * 
   * @example
   * ControlPolicy
   */
  policyType?: string;
  /**
   * @remarks
   * The identity type of the current user. Valid values:
   * 
   * *   SubUser: a RAM user
   * *   AssumedRoleUser: a RAM role
   * 
   * @example
   * SubUser
   */
  principalType?: string;
  /**
   * @remarks
   * Authentication object information, can be the current user\\"s RAM account ID, or the role information corresponding to the current visitor.
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
   * When permission check fails, returns diagnostic information related to permission check failure.
   */
  deniedDetail?: GetADBSparkNecessaryRAMPermissionsResponseBodyDataDeniedDetail;
  /**
   * @remarks
   * Check whether the use has the basic permissions to use Analytic DB for Spark.
   * 
   * *   true: The check is passed and the basic permissions are granted.
   * *   false: The check fails and some permissions are missing.
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * Based on diagnostic information, recommends configurations for customers to perform in the RAM system.
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
   * The returned result.
   */
  data?: GetADBSparkNecessaryRAMPermissionsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

