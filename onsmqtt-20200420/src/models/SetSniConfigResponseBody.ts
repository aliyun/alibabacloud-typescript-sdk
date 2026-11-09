// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSniConfigResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * SetSniConfig
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization entity.
   * 
   * @example
   * 2063xxxxxxxx533
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the authorization entity.
   * 
   * @example
   * 1245xxxxx34343
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authorization entity.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic information.
   * 
   * @example
   * AQFma6gWZmuoFkMxQ0M3MUVCLTRFQzQtNTI1OS1BQ0Q0LTlBMTFGQkVDOTA3Qw==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of permission denial.
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

export class SetSniConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   */
  accessDeniedDetail?: SetSniConfigResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DQDC0E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of \\`true\\` indicates that the call was successful. A value of \\`false\\` indicates that the call failed.
   * 
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SetSniConfigResponseBodyAccessDeniedDetail,
      requestId: 'string',
      success: 'string',
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

