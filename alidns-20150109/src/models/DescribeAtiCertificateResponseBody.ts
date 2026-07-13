// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiCertificateResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DescribeAtiCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied details. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: DescribeAtiCertificateResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The agent host address.
   * 
   * @example
   * www.example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The agent ID. After CNNIC real-name authentication, CNNIC assigns a unified agent ID. The agent ID serves as the unique identifier that binds the agent to the real-name authenticated registrant.
   * 
   * @example
   * csp01860716@5e0964fd-951c-4e45-b518-d09d4d2db8ca
   */
  agentId?: string;
  /**
   * @remarks
   * The encryption algorithm of the certificate.
   * 
   * @example
   * RSA-2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate file in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFAD...
   * （中间是一长串经过 Base64 编码的数据）
   * ...
   * -----END CERTIFICATE-----
   */
  certPem?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * - Server: server certificate.
   * - Identity: identity certificate.
   * 
   * @example
   * Server
   */
  certType?: string;
  /**
   * @remarks
   * The creation time of the health check template (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The issuer information of the certificate, identified in Distinguished Names (DN) format.
   * 
   * @example
   * DigiCert Inc
   */
  issuer?: string;
  /**
   * @remarks
   * The end time of the certificate validity period.
   * 
   * @example
   * 2027-05-09 02:19:49
   */
  notAfter?: string;
  /**
   * @remarks
   * The start time of the certificate validity period.
   * 
   * @example
   * 2026-01-26 02:16:38
   */
  notBefore?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
   */
  requestId?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN), which specifies additional identities for the certificate subject.
   * 
   * @example
   * "dNSName: example.com, dNSName: www.example.com",
   */
  san?: string;
  /**
   * @remarks
   * The serial number that indicates the priority of the returned address. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  serialNumber?: string;
  /**
   * @remarks
   * The certificate source.
   * 
   * @example
   * BYOC
   */
  source?: string;
  /**
   * @remarks
   * The validity status of the certificate. Valid values:
   * 
   * - Valid
   * - Invalid
   * 
   * @example
   * Valid
   */
  status?: string;
  /**
   * @remarks
   * The certificate subject (owner), identified in DN format.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:1825725063814405:eventstreaming/dsadsad123213-trigger1
   */
  subject?: string;
  /**
   * @remarks
   * The DNS TLSA record value that stores the certificate public key fingerprint.
   * 
   * @example
   * 3 1 1 2ea103e8c5ba3466ff7f94cc28336b40ce7432e55a2fc37e86b65e55737c45662
   */
  tlsaFingerprint?: string;
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
      agentHost: 'AgentHost',
      agentId: 'AgentId',
      algorithm: 'Algorithm',
      certPem: 'CertPem',
      certType: 'CertType',
      createTimestamp: 'CreateTimestamp',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      san: 'San',
      serialNumber: 'SerialNumber',
      source: 'Source',
      status: 'Status',
      subject: 'Subject',
      tlsaFingerprint: 'TlsaFingerprint',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeAtiCertificateResponseBodyAccessDeniedDetail,
      agentHost: 'string',
      agentId: 'string',
      algorithm: 'string',
      certPem: 'string',
      certType: 'string',
      createTimestamp: 'number',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
      san: 'string',
      serialNumber: 'string',
      source: 'string',
      status: 'string',
      subject: 'string',
      tlsaFingerprint: 'string',
      updateTimestamp: 'number',
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

