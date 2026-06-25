// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareSimilarByImageResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The action for the authentication request.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The authentication principal information.
   * 
   * @example
   * 111
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the authentication principal.
   * 
   * @example
   * 222
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authentication principal.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted diagnostic message.
   * 
   * @example
   * xxxxxx
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * Valid values:
   * - ImplicitDeny: no policy is matched.
   * - ExplicitDeny: an explicit Deny policy is matched.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that caused the access denial.
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

export class CompareSimilarByImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication response details.
   */
  accessDeniedDetail?: CompareSimilarByImageResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The error code. Valid values:
   * - 0: success.
   * - Non-zero: failure.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @remarks
   * The image similarity score. Valid values: 0 to 1.
   * 
   * @example
   * 0.85
   */
  score?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      score: 'Score',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: CompareSimilarByImageResponseBodyAccessDeniedDetail,
      code: 'number',
      msg: 'string',
      requestId: 'string',
      score: 'number',
      success: 'boolean',
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

