// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateDetailResponseBodyCertificateChainList extends $dara.Model {
  /**
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @example
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @example
   * 10
   */
  remainDay?: number;
  /**
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
   * @example
   * test
   */
  tagKey?: string;
  /**
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
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @example
   * 21912069-cn-hangzhou
   */
  certIdentifier?: string;
  certificateChainList?: GetCertificateDetailResponseBodyCertificateChainList[];
  /**
   * @example
   * 22559621
   */
  certificateId?: number;
  /**
   * @example
   * 123
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
   * www.example.com
   */
  commonName?: string;
  /**
   * @example
   * aliyundoc.com,example.aliyundoc.com
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
   * cas_dv-cn-123
   */
  instanceId?: string;
  /**
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @example
   * 2048
   */
  keySize?: number;
  /**
   * @example
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  serial?: string;
  subjectAlternativeNames?: string[];
  tags?: GetCertificateDetailResponseBodyTags[];
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

