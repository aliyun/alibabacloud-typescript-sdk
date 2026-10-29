// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ExecuteRequestResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The specific action that the caller attempted to perform, such as s3:PutObject or ec2:DescribeInstances.
   * 
   * @example
   * yundun-saf:Execute
   */
  authAction?: string;
  /**
   * @remarks
   * The human-readable display name of the request principal, such as the username or role name.
   * 
   * @example
   * 29918048924096****
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the request principal belongs.
   * 
   * @example
   * 178059440630****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type of the request principal. Valid values:
   * - SubUser: RAM user created by an Alibaba Cloud account.
   * - AssumedRoleUser: Temporary identity obtained by assuming a role.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The Base64-encoded permission diagnostic log used for troubleshooting and automated analysis.
   * 
   * @example
   * AQIBIAAAA...r+ow==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The specific denial type for the access denied scenario. Valid values:
   * - ImplicitDeny: Implicit deny due to the lack of explicit authorization.
   * - ExplicitDeny: Explicit deny where the operation is explicitly denied in the policy.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The scope and type of the policy in the access denied scenario. Valid values:
   * - AccountLevelIdentityBasedPolicy: Account-level identity-based policy that applies to the entire Alibaba Cloud account.
   * - ResourceGroupLevelIdentityBasedPolicy: Resource group-level identity-based policy that applies to a specific resource group.
   * - SessionPolicy: Session policy that applies to a temporary session.
   * - ControlPolicy: Control policy used for core permission control.
   * - AssumeRolePolicy: Trust policy that defines which entities can assume the role.
   * 
   * @example
   * AccountLevelIdentityBasedPolicy
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

export class ExecuteRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic details for access denial.
   */
  accessDeniedDetail?: ExecuteRequestResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data, which includes fields such as tags, score, and extend.
   * 
   * @example
   * {"score": 80.4, "tags": "ra0601,rnk0002,rn0312"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F41DC6-2070-5CE7-8B2D-7A23D882932D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ExecuteRequestResponseBodyAccessDeniedDetail,
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

