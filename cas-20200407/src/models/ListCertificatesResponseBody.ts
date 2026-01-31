// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyCertificateList extends $dara.Model {
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * 21589515-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @example
   * 17281539
   */
  certificateId?: string;
  /**
   * @example
   * test
   */
  certificateName?: string;
  /**
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  existPrivateKey?: boolean;
  /**
   * @example
   * 123
   */
  fingerPrint?: string;
  /**
   * @example
   * cas-cn-v***
   */
  instanceId?: string;
  /**
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @example
   * 1749580567000
   */
  notAfter?: number;
  /**
   * @example
   * 1760745600000
   */
  notBefore?: number;
  /**
   * @example
   * 123
   */
  serial?: string;
  subjectAlternativeNames?: string[];
  usingProductList?: string[];
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateSource: 'CertificateSource',
      certificateStatus: 'CertificateStatus',
      commonName: 'CommonName',
      domain: 'Domain',
      existPrivateKey: 'ExistPrivateKey',
      fingerPrint: 'FingerPrint',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      keySize: 'KeySize',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      serial: 'Serial',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      usingProductList: 'UsingProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      certificateId: 'string',
      certificateName: 'string',
      certificateSource: 'string',
      certificateStatus: 'string',
      commonName: 'string',
      domain: 'string',
      existPrivateKey: 'boolean',
      fingerPrint: 'string',
      instanceId: 'string',
      issuer: 'string',
      keySize: 'number',
      notAfter: 'number',
      notBefore: 'number',
      serial: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
      usingProductList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    if(Array.isArray(this.usingProductList)) {
      $dara.Model.validateArray(this.usingProductList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesResponseBody extends $dara.Model {
  certificateList?: ListCertificatesResponseBodyCertificateList[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': ListCertificatesResponseBodyCertificateList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificateList)) {
      $dara.Model.validateArray(this.certificateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

