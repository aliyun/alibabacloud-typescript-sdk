// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateDetailResponseBodyCertificateChainList extends $dara.Model {
  /**
   * @remarks
   * The issuer of the certificate chain.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The end of the validity period.
   * 
   * @example
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the validity period.
   * 
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The remaining validity period of the certificate chain.
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
   * The tag key of the instance. You can specify 1 to 20 tag keys. The value cannot be an empty string.
   * 
   * The value can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The certificate algorithm. Valid values:
   * 
   * - **RSA**: The RSA algorithm.
   * 
   * - **ECC**: The ECC algorithm.
   * 
   * - **SM2**: The SM2 algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The global ID of the certificate, which is used in various Alibaba Cloud services. The format of the ID is `<Certificate ID>-<Region ID>`. The region ID is `cn-hangzhou` for the China site and `ap-southeast-1` for the International site. For example, if a certificate ID is `123`, its `CertIdentifier` is `123-cn-hangzhou` for the China site and `123-ap-southeast-1` for the International site.
   * 
   * @example
   * 21912069-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The information about the certificate chain.
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
   * The source of the certificate. Valid values:
   * 
   * - **BUY**: a purchased certificate.
   * 
   * - **TEST**: a test certificate.
   * 
   * - Upload the certificate.
   * 
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
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
   * The common name.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The ID of the company profile that is associated with the certificate application. This parameter is empty for DV certificates.
   * 
   * @example
   * 44211
   */
  companyId?: number;
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * 304066
   */
  contactId?: number;
  /**
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The domain names that are bound to the certificate. Multiple domain names are separated by commas (,).
   * 
   * @example
   * aliyundoc.com,example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether a private key is available. Valid values:
   * 
   * - **true**
   * 
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
   * The ID of the instance.
   * 
   * @example
   * cas_dv-cn-123
   */
  instanceId?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The key size.
   * 
   * - For RSA algorithms, the key size is typically 2,048, 3,072, or 4,096 bits.
   * 
   * - For ECC and SM2 algorithms, the key size is typically 256 bits.
   * 
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
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
   * The subject alternative names (SANs) of the certificate.
   */
  subjectAlternativeNames?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetCertificateDetailResponseBodyTags[];
  /**
   * @remarks
   * The list of cloud services in which the certificate is deployed.
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

