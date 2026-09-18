// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateDetailResponseBodyCertificateChainList extends $dara.Model {
  /**
   * @remarks
   * The issuer name of the certificate chain.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The end time of the certificate validity period.
   * 
   * @example
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The start time of the certificate validity period.
   * 
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The remaining days of the certificate chain validity period.
   * 
   * @example
   * 10
   */
  remainDay?: number;
  /**
   * @remarks
   * The common name of the certificate chain.
   * 
   * @example
   * Digicert
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      remainDay: 'RemainDay',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuer: 'string',
      notAfter: 'number',
      notBefore: 'number',
      remainDay: 'number',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateDetailResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate algorithm.
   * 
   * - **RSA**: RSA algorithm.
   * - **ECC**: ECC algorithm.
   * - **SM2**: SM2 algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The global certificate ID in the format of certificate ID + "-" + site region ID. This ID is commonly used across Alibaba Cloud services.
   *   --For the China site, the value is certificate ID + "-cn-hangzhou".
   * For the International site, the value is certificate ID + "-ap-southeast-1".
   * For example, if the certificate ID is 123, the CertIdentifier on the China site is "123-cn-hangzhou", and the CertIdentifier on the International site is "123-ap-southeast-1".
   * 
   * @example
   * 21912069-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate chain information list.
   */
  certificateChainList?: GetCertificateDetailResponseBodyCertificateChainList[];
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 22559621
   */
  certificateId?: number;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @remarks
   * The certificate source.
   * - BUY: Purchased certificate.
   * - TEST: Test certificate.
   * - UPLOAD: Uploaded certificate.
   * 
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @remarks
   * The certificate status.
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
   * The common domain name.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The company information ID associated with the certificate application. This value is empty for DV certificates.
   * 
   * @example
   * 44211
   */
  companyId?: number;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 304066
   */
  contactId?: number;
  /**
   * @remarks
   * The certificate signing request (CSR) used to issue the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The deployment information in JSON format:
   * 
   * --Scope: Valid values are all/server. The value is all if the certificate has a private key, or server if it does not.
   * 
   * --ServerName: The name of the server associated with the certificate instance.
   * 
   * --ResourceInstanceId: The resource identifier of the server associated with the certificate instance.
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
   * All domain names included in the certificate. Multiple domain names are separated by commas (,).
   * 
   * @example
   * aliyundoc.com,example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether a private key exists on the backend for the current certificate. Valid values:
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
   * The public key fingerprint.
   * 
   * @example
   * 123
   */
  fingerPrint?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cas_dv-cn-123
   */
  instanceId?: string;
  /**
   * @remarks
   * The certificate issue authority.
   * 
   * @example
   * Digicert
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
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The start time of the certificate validity period.
   * 
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
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
   * The list of Subject Alternative Names (SANs) of the certificate, returned in array format. This corresponds to the `Subject Alternative Name` field of the certificate.
   */
  subjectAlternativeNames?: string[];
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetCertificateDetailResponseBodyTags[];
  /**
   * @remarks
   * The list of Alibaba Cloud services to which the certificate is currently deployed.
   */
  usingProductList?: string[];
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      certificateChainList: 'CertificateChainList',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateSource: 'CertificateSource',
      certificateStatus: 'CertificateStatus',
      commonName: 'CommonName',
      companyId: 'CompanyId',
      contactId: 'ContactId',
      csr: 'Csr',
      deploymentDesc: 'DeploymentDesc',
      domain: 'Domain',
      existPrivateKey: 'ExistPrivateKey',
      fingerPrint: 'FingerPrint',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      keySize: 'KeySize',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      serial: 'Serial',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      tags: 'Tags',
      usingProductList: 'UsingProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      certificateChainList: { 'type': 'array', 'itemType': GetCertificateDetailResponseBodyCertificateChainList },
      certificateId: 'number',
      certificateName: 'string',
      certificateSource: 'string',
      certificateStatus: 'string',
      commonName: 'string',
      companyId: 'number',
      contactId: 'number',
      csr: 'string',
      deploymentDesc: 'string',
      domain: 'string',
      existPrivateKey: 'boolean',
      fingerPrint: 'string',
      instanceId: 'string',
      issuer: 'string',
      keySize: 'number',
      notAfter: 'number',
      notBefore: 'number',
      requestId: 'string',
      serial: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetCertificateDetailResponseBodyTags },
      usingProductList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.certificateChainList)) {
      $dara.Model.validateArray(this.certificateChainList);
    }
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

