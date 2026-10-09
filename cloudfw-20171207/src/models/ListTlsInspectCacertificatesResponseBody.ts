// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTlsInspectCACertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm type of the CA certificate. Valid values:
   * - **RSA**: RSA algorithm.
   * - **ECC**: ECC algorithm.
   * - **SM2**: SM2 (Chinese national cryptographic) algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate alias.
   * 
   * @example
   * rsa_ml_***_root
   */
  aliasName?: string;
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * 2732BB48-2969-5716-B5D9-******CA85
   */
  caCertId?: string;
  /**
   * @remarks
   * The type of the CA certificate. Valid values:
   * 
   * - **ROOT**: Root CA certificate.
   * - **SUB_ROOT**: Subordinate CA certificate.
   * 
   * @example
   * ROOT
   */
  caCertType?: string;
  /**
   * @remarks
   * The certificate chain expiration timestamp.
   * 
   * @example
   * 1934***149
   */
  certChainExpirationTime?: number;
  /**
   * @remarks
   * The expiration timestamp.
   * 
   * @example
   * 1934***149
   */
  expirationTime?: number;
  /**
   * @remarks
   * The key length of the CA certificate.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The parent CA certificate ID.
   * 
   * @example
   * 340BB48-2969-5716-B5D9-****ACA85
   */
  parentCaCertId?: string;
  /**
   * @remarks
   * The signature algorithm of the CA certificate.
   * 
   * @example
   * SHA256WITHRSA
   */
  signAlgorithm?: string;
  /**
   * @remarks
   * The certificate status. Valid values:
   * - **ISSUE**: Enabled.
   * - **REVOKE**: Revoked.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      aliasName: 'AliasName',
      caCertId: 'CaCertId',
      caCertType: 'CaCertType',
      certChainExpirationTime: 'CertChainExpirationTime',
      expirationTime: 'ExpirationTime',
      keySize: 'KeySize',
      parentCaCertId: 'ParentCaCertId',
      signAlgorithm: 'SignAlgorithm',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      aliasName: 'string',
      caCertId: 'string',
      caCertType: 'string',
      certChainExpirationTime: 'number',
      expirationTime: 'number',
      keySize: 'number',
      parentCaCertId: 'string',
      signAlgorithm: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTlsInspectCACertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certificates?: ListTlsInspectCACertificatesResponseBodyCertificates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-******837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ListTlsInspectCACertificatesResponseBodyCertificates },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

