// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm of the certificate. Valid values:
   * 
   * - **RSA**
   * 
   * - **ECC**
   * 
   * - **SM2**
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The global ID of the certificate. This ID is used across Alibaba Cloud services and is in the `Certificate ID-Region ID` format. For example, if a certificate ID is `123`, the `CertIdentifier` is `123-cn-hangzhou` for the Alibaba Cloud China site and `123-ap-southeast-1` for the Alibaba Cloud International site (www\\.alibabacloud.com).
   * 
   * - For the Alibaba Cloud China website, the format is certificate ID + "-cn-hangzhou".
   * 
   * - For the Alibaba Cloud International website (www\\.alibabacloud.com), the format is certificate ID + "-ap-southeast-1".
   * 
   * For example, if the certificate ID is 123, the CertIdentifier is "123-cn-hangzhou" for the China site and "123-ap-southeast-1" for the International site.
   * 
   * @example
   * 21589515-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 17281539
   */
  certificateId?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * test
   */
  certificateName?: string;
  /**
   * @remarks
   * The source of the certificate.
   * 
   * - BUY: A purchased certificate.
   * 
   * - TEST: A test certificate.
   * 
   * - UPLOAD: An uploaded certificate.
   * 
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @remarks
   * The status of the certificate.
   * 
   * - **issued**: The certificate is issued.
   * 
   * - **revoked**: The certificate is revoked.
   * 
   * - **willExpire**: The certificate is about to expire.
   * 
   * - **expired**: The certificate has expired.
   * 
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * aliyun.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain names that are bound to the certificate. Multiple domain names are separated by commas.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether a private key is available. Valid values:
   * 
   * - **true**: A private key is available.
   * 
   * - **false**: A private key is not available.
   * 
   * @example
   * true
   */
  existPrivateKey?: boolean;
  /**
   * @remarks
   * The fingerprint of the public key.
   * 
   * @example
   * 123
   */
  fingerPrint?: string;
  /**
   * @remarks
   * The ID of the certificate instance.
   * 
   * @example
   * cas-cn-v***
   */
  instanceId?: string;
  /**
   * @remarks
   * The certification authority.
   * 
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @remarks
   * The key size, in bits.
   * 
   * - For RSA keys, typical sizes are 2048, 3072, or 4096.
   * 
   * - For ECC or SM2 keys, the typical size is 256.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The end of the certificate validity period.
   * 
   * @example
   * 1749580567000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the certificate validity period.
   * 
   * @example
   * 1760745600000
   */
  notBefore?: number;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 123
   */
  serial?: string;
  /**
   * @remarks
   * An array that contains the alternative domain names of the certificate. This parameter corresponds to the `Subject Alternative Name` field of the certificate.
   */
  subjectAlternativeNames?: string[];
  /**
   * @remarks
   * The list of Alibaba Cloud products in which the certificate is deployed.
   */
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
  /**
   * @remarks
   * The list of certificates.
   */
  certificateList?: ListCertificatesResponseBodyCertificateList[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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

