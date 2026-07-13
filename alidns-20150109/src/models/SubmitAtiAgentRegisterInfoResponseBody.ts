// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAtiAgentRegisterInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * AddRspDomainServerHoldStatusForGateway
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorized principal.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authorized principal.
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
   * The encrypted diagnostic message.
   * 
   * @example
   * AQEAAAAAaNIARXXXXUQwNjE0LUQzN0XXXXVEQy1BQzExLTMzXXXXNTkxRjk1Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason why the authentication failed. Valid values:
   * - ExplicitDeny: Explicit denial.
   * - ImplicitDeny: Implicit denial.
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

export class SubmitAtiAgentRegisterInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when the RAM authentication fails.
   */
  accessDeniedDetail?: SubmitAtiAgentRegisterInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The Agent status. Valid values:
   * 
   * - Draft: The Agent registration form is being filled out and has not been formally submitted. In the Draft state, only modification and detail viewing are supported. Other operations are not supported.
   * - Private CA Pending Issuance: The Agent registration has been formally submitted. Alibaba Cloud has completed the ACME DNS-01 pre-check and submitted the registration information along with the generated DNS records to CNNIC. The system is waiting for CNNIC to approve and issue the Private CA certificate and complete the TL sealing.
   * - DNS Pending Verification: CNNIC has approved and issued the Private CA certificate and completed the TL sealing, but the DNS records of the user have not been verified. The user needs to add the corresponding DNS records in the domain name resolution and complete the verification.
   * - Active: All processes are complete. The Private CA certificate has been issued, the TL has been sealed, and the DNS records have been verified. The Agent is activated and can be discovered and trusted across the network.
   * - Expired: The Agent identity certificate has expired because the user did not complete the certificate renewal within the validity period.
   * - Revoked: The Agent certificate has been revoked, the DNS records have been cleaned up, and the Agent can no longer be discovered or trusted. The Agent cannot be restored to the Active state.
   * 
   * @example
   * Private CA 待签发
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: SubmitAtiAgentRegisterInfoResponseBodyAccessDeniedDetail,
      requestId: 'string',
      status: 'boolean',
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

