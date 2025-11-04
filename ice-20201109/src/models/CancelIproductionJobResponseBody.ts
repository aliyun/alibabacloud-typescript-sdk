// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelIProductionJobResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The operation that failed the permission check.
   * 
   * @example
   * ice:CancelIProductionJob
   */
  authAction?: string;
  /**
   * @remarks
   * The identity. Values:
   * 
   * *   RAM user: a UID
   * *   RAM role: RoleName:RoleSessionName
   * *   Federated user: ProviderType/ProviderName
   * 
   * @example
   * ****4522705967****
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The account to which the principal belongs.
   * 
   * @example
   * ****82303720****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of identity that made the request. Valid values:
   * 
   * *   SubUser: RAM user
   * *   AssumedRoleUser: RAM role
   * *   Federated: SSO federated user
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
   * The type of policy that resulted in the denial. Valid values:
   * 
   * *   **ImplicitDeny**: The resource holder has not configured a policy for the current user. By default, unauthorized operations are denied.
   * *   **ExplicitDeny**: The RAM policy configured by the resource holder explicitly denies the current user access to the corresponding resources.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of policy that triggered the permission failure.
   * 
   * *   **ControlPolicy**: control policy
   * *   **SessionPolicy**: an additional policy attached to a temporary token.
   * *   **AssumeRolePolicy**: the trust policy of a RAM role.
   * *   **AccountLevelIdentityBasedPolicy**: an identity-based policy at the account level (custom or system).
   * *   **ResourceGroupLevelIdentityBasedPolicy**: an identity-based policy scoped to a resource group.
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
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   */
  accessDeniedDetail?: CancelIProductionJobResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

