// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * RemoveRspDomainServerHoldStatusForGateway
   */
  authAction?: string;
  /**
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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

export class VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponseBody extends $dara.Model {
  accessDeniedDetail?: VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 2074753647748672512
   */
  agentRegisterInfoId?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * PrecheckFailedOnTooManyVmSnapshot
   */
  errorMessage?: string;
  /**
   * @example
   * ACME DNS-01 域名验证通过
   */
  message?: string;
  /**
   * @example
   * PASSED
   */
  precheckStatus?: string;
  /**
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1782572400000
   */
  verifyTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      agentRegisterInfoId: 'AgentRegisterInfoId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      precheckStatus: 'PrecheckStatus',
      requestId: 'RequestId',
      success: 'Success',
      verifyTimestamp: 'VerifyTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: VerifyAtiAgentRegisterInfoAcmeChallengeRecordResponseBodyAccessDeniedDetail,
      agentRegisterInfoId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      precheckStatus: 'string',
      requestId: 'string',
      success: 'boolean',
      verifyTimestamp: 'number',
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

