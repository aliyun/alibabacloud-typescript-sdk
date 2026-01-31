// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDetailResponseBodyDingGroupList extends $dara.Model {
  /**
   * @example
   * 123
   */
  dingGroupInstanceId?: string;
  /**
   * @example
   * 123
   */
  dingGroupName?: string;
  /**
   * @example
   * remote
   */
  dingGroupType?: string;
  /**
   * @example
   * https://123.com
   */
  dingGroupUrl?: string;
  static names(): { [key: string]: string } {
    return {
      dingGroupInstanceId: 'DingGroupInstanceId',
      dingGroupName: 'DingGroupName',
      dingGroupType: 'DingGroupType',
      dingGroupUrl: 'DingGroupUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingGroupInstanceId: 'string',
      dingGroupName: 'string',
      dingGroupType: 'string',
      dingGroupUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyDomainValidationList extends $dara.Model {
  /**
   * @example
   * 123.com
   */
  cname?: string;
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * example.com
   */
  rootDomain?: string;
  /**
   * @example
   * @
   */
  validationKey?: string;
  /**
   * @example
   * TXT
   */
  validationType?: string;
  /**
   * @example
   * 123
   */
  validationValue?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      rootDomain: 'RootDomain',
      validationKey: 'ValidationKey',
      validationType: 'ValidationType',
      validationValue: 'ValidationValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      rootDomain: 'string',
      validationKey: 'string',
      validationType: 'string',
      validationValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDetailResponseBodyTags extends $dara.Model {
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

export class GetInstanceDetailResponseBody extends $dara.Model {
  /**
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @example
   * 120
   */
  averageWaitingTime?: string;
  /**
   * @example
   * DigiCert
   */
  brand?: string;
  /**
   * @example
   * 22783111-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @example
   * 1234567890
   */
  certificateId?: number;
  /**
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @example
   * 1801324800000
   */
  certificateNotAfter?: number;
  /**
   * @example
   * 1801324800000
   */
  certificateRevokeTime?: number;
  /**
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @example
   * DV
   */
  certificateType?: string;
  /**
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @example
   * 47305
   */
  companyId?: number;
  contactIdList?: number[];
  /**
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  dingGroupList?: GetInstanceDetailResponseBodyDingGroupList[];
  /**
   * @example
   * example.com
   */
  domain?: string;
  domainValidationList?: GetInstanceDetailResponseBodyDomainValidationList[];
  /**
   * @example
   * 1
   */
  fullDomainCount?: number;
  /**
   * @example
   * online
   */
  generateCsrMethod?: string;
  /**
   * @example
   * 1801324800000
   */
  instanceEndTime?: number;
  /**
   * @example
   * cas_dv-cn-123
   */
  instanceId?: string;
  /**
   * @example
   * 1801324800000
   */
  instanceStartTime?: number;
  /**
   * @example
   * TEST
   */
  instanceType?: string;
  /**
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @example
   * 1801324800000
   */
  orderEndTime?: number;
  /**
   * @example
   * 1801324800000
   */
  orderStartTime?: number;
  /**
   * @example
   * pending
   */
  pendingResult?: string;
  /**
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @example
   * B2CE1D02-6D5E-56E5-A9BD-EE288255C7F9
   */
  requestId?: string;
  /**
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @example
   * ss.dv.t
   */
  spec?: string;
  /**
   * @example
   * inactive
   */
  status?: string;
  tags?: GetInstanceDetailResponseBodyTags[];
  /**
   * @example
   * DNS
   */
  validationMethod?: string;
  /**
   * @example
   * 0
   */
  wildcardDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoReissue: 'AutoReissue',
      averageWaitingTime: 'AverageWaitingTime',
      brand: 'Brand',
      certIdentifier: 'CertIdentifier',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateNotAfter: 'CertificateNotAfter',
      certificateRevokeTime: 'CertificateRevokeTime',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      city: 'City',
      companyId: 'CompanyId',
      contactIdList: 'ContactIdList',
      countryCode: 'CountryCode',
      csr: 'Csr',
      dingGroupList: 'DingGroupList',
      domain: 'Domain',
      domainValidationList: 'DomainValidationList',
      fullDomainCount: 'FullDomainCount',
      generateCsrMethod: 'GenerateCsrMethod',
      instanceEndTime: 'InstanceEndTime',
      instanceId: 'InstanceId',
      instanceStartTime: 'InstanceStartTime',
      instanceType: 'InstanceType',
      keyAlgorithm: 'KeyAlgorithm',
      orderEndTime: 'OrderEndTime',
      orderStartTime: 'OrderStartTime',
      pendingResult: 'PendingResult',
      province: 'Province',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      validationMethod: 'ValidationMethod',
      wildcardDomainCount: 'WildcardDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissue: 'string',
      averageWaitingTime: 'string',
      brand: 'string',
      certIdentifier: 'string',
      certificateId: 'number',
      certificateName: 'string',
      certificateNotAfter: 'number',
      certificateRevokeTime: 'number',
      certificateStatus: 'string',
      certificateType: 'string',
      city: 'string',
      companyId: 'number',
      contactIdList: { 'type': 'array', 'itemType': 'number' },
      countryCode: 'string',
      csr: 'string',
      dingGroupList: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyDingGroupList },
      domain: 'string',
      domainValidationList: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyDomainValidationList },
      fullDomainCount: 'number',
      generateCsrMethod: 'string',
      instanceEndTime: 'number',
      instanceId: 'string',
      instanceStartTime: 'number',
      instanceType: 'string',
      keyAlgorithm: 'string',
      orderEndTime: 'number',
      orderStartTime: 'number',
      pendingResult: 'string',
      province: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyTags },
      validationMethod: 'string',
      wildcardDomainCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactIdList)) {
      $dara.Model.validateArray(this.contactIdList);
    }
    if(Array.isArray(this.dingGroupList)) {
      $dara.Model.validateArray(this.dingGroupList);
    }
    if(Array.isArray(this.domainValidationList)) {
      $dara.Model.validateArray(this.domainValidationList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

