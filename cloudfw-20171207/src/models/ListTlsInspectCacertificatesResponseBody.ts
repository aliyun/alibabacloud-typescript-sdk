// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTlsInspectCACertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * rsa_ml_***_root
   */
  aliasName?: string;
  /**
   * @example
   * 2732BB48-2969-5716-B5D9-******CA85
   */
  caCertId?: string;
  /**
   * @example
   * ROOT
   */
  caCertType?: string;
  /**
   * @example
   * 1934***149
   */
  expirationTime?: number;
  /**
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @example
   * 340BB48-2969-5716-B5D9-****ACA85
   */
  parentCaCertId?: string;
  /**
   * @example
   * SHA256WITHRSA
   */
  signAlgorithm?: string;
  /**
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
  certificates?: ListTlsInspectCACertificatesResponseBodyCertificates[];
  /**
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-******837D
   */
  requestId?: string;
  /**
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

