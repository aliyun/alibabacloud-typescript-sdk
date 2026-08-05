// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelIProductionJobResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * ice:CancelIProductionJob
   */
  authAction?: string;
  /**
   * @remarks
   * The identity used for authentication in the request. Valid values:
   * - RAM user: RAM user UID
   * - RAM role: RoleName:RoleSessionName
   * - Federated: ProviderType/ProviderName
   * 
   * @example
   * ****4522705967****
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The account to which the authenticate principal belongs.
   * 
   * @example
   * ****82303720****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the identity used for authentication in the request. Valid values:
   * - SubUser: RAM user
   * - AssumedRoleUser: RAM role
   * - Federated: SSO federated identity
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * ******AAZ/h8jzNEODc5QUUyLUZCOTAtNUQyQy1BMEFBLUUzODQxODUx******==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of denial by the access policy. Valid values:
   * - **ImplicitDeny**: The resource owner has not configured a relevant permission policy for the current user. Access to unauthorized operations is denied by default.
   * - **ExplicitDeny**: The RAM policy configured by the resource owner explicitly denies the current user access to the corresponding resource.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that caused the access denial. Valid values:
   * - **ControlPolicy**: control policy.
   * - **SessionPolicy**: an additional permission policy attached to a temporary token.
   * - **AssumeRolePolicy**: the trust policy of a RAM role.
   * - **AccountLevelIdentityBasedPolicy**: an identity-access policy at the account authorization scope, including custom policies and system policies.
   * - **ResourceGroupLevelIdentityBasedPolicy**: an identity-access policy at the resource group authorization scope, including custom policies and system policies.
   * 
   * @example
   * AssumeRolePolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelIProductionJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: CancelIProductionJobResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: CancelIProductionJobResponseBodyAccessDeniedDetail,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

