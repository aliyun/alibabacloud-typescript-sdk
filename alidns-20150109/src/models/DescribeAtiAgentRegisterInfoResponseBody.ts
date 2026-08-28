// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiAgentRegisterInfoResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * RemoveRspDomainServerHoldStatusForGateway
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
   * 1046973331XXXX
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
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
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

export class DescribeAtiAgentRegisterInfoResponseBodyEndpointsEndpointTransports extends $dara.Model {
  transport?: string[];
  static names(): { [key: string]: string } {
    return {
      transport: 'Transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transport: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.transport)) {
      $dara.Model.validateArray(this.transport);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoResponseBodyEndpointsEndpoint extends $dara.Model {
  agentUrl?: string;
  metadataUrl?: string;
  protocol?: string;
  transports?: DescribeAtiAgentRegisterInfoResponseBodyEndpointsEndpointTransports;
  static names(): { [key: string]: string } {
    return {
      agentUrl: 'AgentUrl',
      metadataUrl: 'MetadataUrl',
      protocol: 'Protocol',
      transports: 'Transports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUrl: 'string',
      metadataUrl: 'string',
      protocol: 'string',
      transports: DescribeAtiAgentRegisterInfoResponseBodyEndpointsEndpointTransports,
    };
  }

  validate() {
    if(this.transports && typeof (this.transports as any).validate === 'function') {
      (this.transports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoResponseBodyEndpoints extends $dara.Model {
  endpoint?: DescribeAtiAgentRegisterInfoResponseBodyEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeAtiAgentRegisterInfoResponseBodyEndpointsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.endpoint)) {
      $dara.Model.validateArray(this.endpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoResponseBodyRejectReason extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the Agent registration failure.
   * 
   * @example
   * Invalid status
   */
  message?: string;
  /**
   * @remarks
   * The type of review failure. Valid values:
   * - ACME_VERIFY_FAILED: ACME verification failed.  
   * - INFO_AUDIT_FAILED: Agent information review failed.
   * 
   * @example
   * ACME_VERIFY_FAILED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAtiAgentRegisterInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: DescribeAtiAgentRegisterInfoResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The capability description of the Agent.
   * 
   * @example
   * Payment service
   */
  agentDescription?: string;
  /**
   * @remarks
   * The display name of the Agent.
   * 
   * @example
   * TestAgent
   */
  agentDisplayName?: string;
  /**
   * @remarks
   * The endpoint domain name through which the Agent provides external services.
   * 
   * @example
   * example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The Agent ID, which is uniformly assigned by CNNIC after real-name authentication. The Agent ID serves as the unique identifier that binds the Agent to the authenticated registrant.
   * 
   * @example
   * 019f3672-9705-7a7a-88fd-9a6a211aa5f2
   */
  agentId?: string;
  /**
   * @remarks
   * The Agent registration ID. This ID is automatically generated by the Alibaba Cloud ATS platform and is globally unique within the platform. It is automatically generated during the Agent registration process. In the multi-step registration process through the API, this ID must be carried throughout all steps to ensure that each step is associated with the same Agent and the complete registration process is completed.
   * 
   * @example
   * 2074753647748672512
   */
  agentRegisterInfoId?: string;
  agentSubHost?: string;
  /**
   * @remarks
   * The version of the Agent.
   * 
   * @example
   * 1.0.1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The ATI name, which is a globally unique identifier in the ATI trust system. Example: ati://v1.0.0.www.example.com
   * - ati:// — The protocol prefix that identifies this as a resource in the ATI system.
   * - v1.0.0 — The Agent version number.
   * - www.example.com — The domain name (FQDN) bound to the Agent.
   * 
   * @example
   * ati://v1.0.0.www.example.com
   */
  atiName?: string;
  /**
   * @remarks
   * The creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  domainMode?: string;
  endpoints?: DescribeAtiAgentRegisterInfoResponseBodyEndpoints;
  /**
   * @remarks
   * Ignore.
   * 
   * @example
   * Ignore
   */
  identityCertSerialNumber?: string;
  /**
   * @remarks
   * The ID of the authenticated registrant.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  /**
   * @remarks
   * The name of the registrant.
   * 
   * @example
   * Zhang xx
   */
  registrantName?: string;
  /**
   * @remarks
   * The reason for Agent registration review failure.
   */
  rejectReason?: DescribeAtiAgentRegisterInfoResponseBodyRejectReason;
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
   * Ignore.
   * 
   * @example
   * Ignore
   */
  serverCertSerialNumber?: string;
  /**
   * @remarks
   * The Agent status. Valid values:
   * 
   * - Draft: The Agent registration form is being filled out and has not been formally submitted. In draft status, only modification and detail viewing operations are supported.
   * - Private CA Pending Issuance: The Agent registration has been formally submitted. Alibaba Cloud has completed the ACME DNS-01 pre-check and submitted the registration information and generated DNS records to CNNIC. Currently waiting for CNNIC to approve and issue the Private CA and complete TL sealing.
   * - DNS Pending Verification: CNNIC has approved and issued the Private CA certificate and completed TL sealing, but the DNS records of the user have not been verified. Waiting for the user to add the corresponding DNS records in domain name resolution and complete verification.
   * - Active: All processes are complete. The Private CA certificate has been issued, TL has been sealed, and DNS records have been verified. The Agent is activated and can be discovered and trust-verified across the network.
   * - Expired: The Agent identity certificate has expired, and the user did not complete certificate renewal within the validity period.
   * - Revoked: The Agent certificate has been revoked, DNS records have been cleaned up, and the Agent cannot be discovered or trust-verified. It cannot be restored to active status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Ignore.
   * 
   * @example
   * Ignore
   */
  trustCard?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * Deprecated
   */
  trustCardUrl?: string;
  trustLevel?: string;
  /**
   * @remarks
   * The update time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      agentDescription: 'AgentDescription',
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentId: 'AgentId',
      agentRegisterInfoId: 'AgentRegisterInfoId',
      agentSubHost: 'AgentSubHost',
      agentVersion: 'AgentVersion',
      atiName: 'AtiName',
      createTimestamp: 'CreateTimestamp',
      domainMode: 'DomainMode',
      endpoints: 'Endpoints',
      identityCertSerialNumber: 'IdentityCertSerialNumber',
      registrantId: 'RegistrantId',
      registrantName: 'RegistrantName',
      rejectReason: 'RejectReason',
      requestId: 'RequestId',
      serverCertSerialNumber: 'ServerCertSerialNumber',
      status: 'Status',
      trustCard: 'TrustCard',
      trustCardUrl: 'TrustCardUrl',
      trustLevel: 'TrustLevel',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeAtiAgentRegisterInfoResponseBodyAccessDeniedDetail,
      agentDescription: 'string',
      agentDisplayName: 'string',
      agentHost: 'string',
      agentId: 'string',
      agentRegisterInfoId: 'string',
      agentSubHost: 'string',
      agentVersion: 'string',
      atiName: 'string',
      createTimestamp: 'number',
      domainMode: 'string',
      endpoints: DescribeAtiAgentRegisterInfoResponseBodyEndpoints,
      identityCertSerialNumber: 'string',
      registrantId: 'string',
      registrantName: 'string',
      rejectReason: DescribeAtiAgentRegisterInfoResponseBodyRejectReason,
      requestId: 'string',
      serverCertSerialNumber: 'string',
      status: 'string',
      trustCard: 'string',
      trustCardUrl: 'string',
      trustLevel: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    if(this.rejectReason && typeof (this.rejectReason as any).validate === 'function') {
      (this.rejectReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

