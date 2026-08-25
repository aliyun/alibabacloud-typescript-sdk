// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * idp-c-00dt9gnl7fmjaw9c****
   */
  certificateId?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * 1.2.840.113549.1.9.1=#160d696e666f406f6b74612e63****,CN=dev-xxxxxx,OU=SSOProvider,O=Okta,L=San Francisco,ST=California,C=US
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2030-06-23T07:04:37Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2020-06-23T07:03:37Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The public key of the certificate. The value of this parameter is in the PEM format and is Base64-encoded.
   * 
   * @example
   * MIIBIjANBgkqhkiG****
   */
  publicKey?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 159289587****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * SHA256withRSA
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The subject of the certificate.
   * 
   * @example
   * 1.2.840.113549.1.9.1=#160d696e666f406f6b74612e63****,CN=dev-xxxxxx,OU=SSOProvider,O=Okta,L=San Francisco,ST=California,C=US
   */
  subject?: string;
  /**
   * @remarks
   * The version of the certificate.
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The X.509 certificate in the PEM format.
   * 
   * @example
   * MIIDpDCCAoygAwIBAgIG****
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      publicKey: 'PublicKey',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      subject: 'Subject',
      version: 'Version',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      publicKey: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      subject: 'string',
      version: 'number',
      x509Certificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalSAMLIdPCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 400979BC-92EC-58B9-B47C-6913BD56A6FD
   */
  requestId?: string;
  /**
   * @remarks
   * The SAML signing certificates.
   */
  SAMLIdPCertificates?: ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdPCertificates: 'SAMLIdPCertificates',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdPCertificates: { 'type': 'array', 'itemType': ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates },
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SAMLIdPCertificates)) {
      $dara.Model.validateArray(this.SAMLIdPCertificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

