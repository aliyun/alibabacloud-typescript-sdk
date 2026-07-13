// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAtiRegistrantResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * CreateUser
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authorization principal.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted complete diagnostic message.
   * 
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason for the authentication failure. Valid values:
   * - ExplicitDeny: Explicit deny.
   * - ImplicitDeny: Implicit deny.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DlpSend
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

export class CreateAtiRegistrantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: CreateAtiRegistrantResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The name of the real-name verified registrant.
   * 
   * @example
   * 张xx
   */
  name?: string;
  /**
   * @remarks
   * The ID of the real-name verified registrant.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The real-name verification status. Valid values:
   * 
   * - Approved.
   * - Under review.
   * - Rejected.
   * 
   * @example
   * 审核通过
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      createTimestamp: 'CreateTimestamp',
      name: 'Name',
      registrantId: 'RegistrantId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: CreateAtiRegistrantResponseBodyAccessDeniedDetail,
      createTimestamp: 'number',
      name: 'string',
      registrantId: 'string',
      requestId: 'string',
      status: 'string',
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

