// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyCertificateList extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm type of the certificate. Valid values:
   * 
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
   * The global certificate ID, in the format of certificate ID + "-" + site region ID. This ID is commonly used across Alibaba Cloud services.
   * - For the China site, the value is certificate ID + "-cn-hangzhou".
   * - For the China site, the value is certificate ID + "-ap-southeast-1".
   * 
   * For example, if the certificate ID is 123, the CertIdentifier on the China site is "123-cn-hangzhou", and the CertIdentifier on the China site is "123-ap-southeast-1".
   * 
   * @example
   * 21589515-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 17281539
   */
  certificateId?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * test
   */
  certificateName?: string;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * - BUY: a formal certificate.
   * - TEST: a test certificate.
   * - UPLOAD: an uploaded certificate.
   * 
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * - **issued**: Issued.
   * - **revoked**: Revoked.
   * - **willExpire**: About to expire.
   * - **expired**: Expired.
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
   * The deployment information in JSON format:
   * 
   * --Scope: valid values are all/server. If the certificate has a private key, the value is all. If the certificate does not have a private key, the value is server.
   * 
   * --ServerName: the name of the server associated with the certificate instance.
   * 
   * --ResourceInstanceId: the resource identifier of the server associated with the certificate instance.
   * 
   * @example
   * {
   *       "Scope": "all",
   *        "ServerName": "acmeServerName",
   *        "ResourceInstanceId": "cas_dv-cn-XXX"
   * }
   */
  deploymentDesc?: string;
  /**
   * @remarks
   * The domain names bound to the certificate. Multiple domain names are separated by commas (,).
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the certificate has a private key. Valid values:
   * 
   * - **true**
   * - **false**
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
   * The certificate instance ID.
   * 
   * @example
   * cas-cn-v***
   */
  instanceId?: string;
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @remarks
   * The key algorithm length.
   * - The RSA algorithm length is typically 2048, 3072, or 4096.
   * - The ECC and SM2 algorithm length is typically 256.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The end time of the certificate validity period.
   * 
   * @example
   * 1749580567000
   */
  notAfter?: number;
  /**
   * @remarks
   * The start time of the certificate validity period.
   * 
   * @example
   * 1760745600000
   */
  notBefore?: number;
  /**
   * @remarks
   * The certificate serial number.
   * 
   * @example
   * 123
   */
  serial?: string;
  /**
   * @remarks
   * The list of subject alternative names (SANs) of the certificate, returned as an array. This corresponds to the `Subject Alternative Name` field of the certificate.
   */
  subjectAlternativeNames?: string[];
  /**
   * @remarks
   * The list of Alibaba Cloud services to which the certificate is currently deployed.
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
      deploymentDesc: 'DeploymentDesc',
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
      deploymentDesc: 'string',
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
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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

