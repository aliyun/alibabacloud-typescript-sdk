// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDetailResponseBodyDingGroupList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the expert service DingTalk group.
   * 
   * @example
   * 123
   */
  dingGroupInstanceId?: string;
  /**
   * @remarks
   * The name of the expert service DingTalk group.
   * 
   * @example
   * 123
   */
  dingGroupName?: string;
  /**
   * @remarks
   * The type of the expert service DingTalk group. Valid values:
   * - expedite: application assistance.
   * - remote: offline deployment.
   * 
   * @example
   * remote
   */
  dingGroupType?: string;
  /**
   * @remarks
   * The link to join the expert service DingTalk group.
   * 
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
   * @remarks
   * The CNAME record value for verification-free authorization. This field may be empty.
   * 
   * @example
   * 123.com
   */
  cname?: string;
  /**
   * @remarks
   * The prefix for CNAME validation.
   * 
   * @example
   * abc
   */
  cnameKey?: string;
  /**
   * @remarks
   * The domain name to be validated.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The root domain name.
   * 
   * @example
   * example.com
   */
  rootDomain?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * @
   */
  validationKey?: string;
  /**
   * @remarks
   * The validation type. Valid values: TXT, HTTP, and CNAME.
   * 
   * @example
   * TXT
   */
  validationType?: string;
  /**
   * @remarks
   * The host record value for validation.
   * 
   * @example
   * 123
   */
  validationValue?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      cnameKey: 'CnameKey',
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
      cnameKey: 'string',
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
   * @remarks
   * The tag key.
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

export class GetInstanceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic managed renewal is enabled. Valid values:
   * - enable: Enabled.
   * - disable: Disabled.
   * 
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @remarks
   * The average waiting time for issuing a certificate of this specification. Unit: seconds.
   * 
   * @example
   * 120
   */
  averageWaitingTime?: string;
  /**
   * @remarks
   * The CA brand. Valid values: WoSign, CFCA, DigiCert, GeoTrust, GlobalSign, vTrus, and Alibaba.
   * 
   * @example
   * DigiCert
   */
  brand?: string;
  /**
   * @remarks
   * The global certificate ID, in the format of certificate ID + "-" + site region ID. This ID is commonly used across Alibaba Cloud services.
   *   --For the China site, the format is certificate ID + "-cn-hangzhou".
   * For the China site, the format is certificate ID + "-ap-southeast-1".
   * For example, if the certificate ID is 123, the CertIdentifier on the China site is "123-cn-hangzhou", and the CertIdentifier on the China site is "123-ap-southeast-1".
   * 
   * @example
   * 22783111-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 1234567890
   */
  certificateId?: number;
  /**
   * @remarks
   * The name of the instance. When a certificate is issued, this name is used as the default certificate name.
   * 
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @remarks
   * The end time of the latest certificate. The value is a UNIX timestamp. This field is empty if no certificate has been issued.
   * 
   * @example
   * 1801324800000
   */
  certificateNotAfter?: number;
  certificateNotBefore?: number;
  /**
   * @remarks
   * The revocation time of the latest certificate. The value is a UNIX timestamp.
   * 
   * @example
   * 1801324800000
   */
  certificateRevokeTime?: number;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * - **issued**: issued.
   * - **revoked**: revoked.
   * - **willExpire**: about to expire.
   * - **expired**: expired.
   * 
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values: DV, OV, and EV.
   * 
   * @example
   * DV
   */
  certificateType?: string;
  /**
   * @remarks
   * The city where the company or organization of the certificate purchaser is located. This field is required when generating a certificate signing request. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The company information ID.
   * 
   * @example
   * 47305
   */
  companyId?: number;
  /**
   * @remarks
   * The list of contact IDs.
   */
  contactIdList?: number[];
  /**
   * @remarks
   * The code of the country or region where the certificate organization is located. For example, CN indicates China, and US indicates the United States. This field is required when generating a certificate signing request. Default value: CN.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The certificate signing request in PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----   ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The list of associated expert service DingTalk groups.
   */
  dingGroupList?: GetInstanceDetailResponseBodyDingGroupList[];
  /**
   * @remarks
   * The domain name bound to the certificate.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of domain names to be validated.
   */
  domainValidationList?: GetInstanceDetailResponseBodyDomainValidationList[];
  /**
   * @remarks
   * The number of exact-match domain names.
   * 
   * @example
   * 1
   */
  fullDomainCount?: number;
  /**
   * @remarks
   * The CSR generation method. Valid values:
   * - online: system-generated. The Csr field is ignored.
   * - upload: user-uploaded. The Csr field is required.
   * 
   * @example
   * online
   */
  generateCsrMethod?: string;
  /**
   * @remarks
   * The expiration time of the instance. The value is a UNIX timestamp. If no certificate has been issued, this field is empty.
   * 
   * @example
   * 1801324800000
   */
  instanceEndTime?: number;
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
   * The start time of the instance. The value is a UNIX timestamp. If no certificate has been issued, this field is empty.
   * 
   * @example
   * 1801324800000
   */
  instanceStartTime?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * - **BUY**: formal certificate.
   * - **TEST**: test certificate.
   * 
   * @example
   * TEST
   */
  instanceType?: string;
  /**
   * @remarks
   * The certificate algorithm. Valid values:
   * - **RSA_2048**
   * - **RSA_3072**
   * - **RSA_4096**
   * - **ECC_256**
   * - **SM2**.
   * 
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @remarks
   * The end time of the instance purchase. The value is a UNIX timestamp. You can use this value to determine the purchase duration of the instance.
   * 
   * @example
   * 1801324800000
   */
  orderEndTime?: number;
  /**
   * @remarks
   * The start time of the instance purchase. The value is a UNIX timestamp. You can use this value to determine the refund time limit.
   * 
   * @example
   * 1801324800000
   */
  orderStartTime?: number;
  /**
   * @remarks
   * The result returned by the certification authority (CA) during the last certificate operation.
   * 
   * @example
   * pending
   */
  pendingResult?: string;
  /**
   * @remarks
   * The province or region where the company is located. This field is required when generating a certificate signing request. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * B2CE1D02-6D5E-56E5-A9BD-EE288255C7F9
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The purchased instance specification.
   * 
   * @example
   * ss.dv.t
   */
  spec?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **inactive**: pending use.
   * - **pending**: under review. The latest certificate is being reviewed.
   * - **willExpire**: the instance is about to expire.
   * - **expired**: the instance has expired.
   * - **refund**: refunded.
   * - **normal**: normal.
   * - **closed**: closed and unavailable.
   * 
   * @example
   * inactive
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetInstanceDetailResponseBodyTags[];
  /**
   * @remarks
   * The upgrade status of the instance. Valid values:
   * 
   * - none: the instance has not been upgraded.
   * 
   * - payed: the instance upgrade has been paid.
   * 
   * - issued: the latest certificate has been issued after the instance upgrade.
   * 
   * @example
   * none
   */
  upgradeStatus?: string;
  /**
   * @remarks
   * The validation method for the certificate application. Valid values:
   * - DNS: DNS validation, using TXT or CNAME.
   * - HTTP: file-based validation.
   * 
   * @example
   * DNS
   */
  validationMethod?: string;
  /**
   * @remarks
   * The number of wildcard domain names.
   * 
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
      certificateNotBefore: 'CertificateNotBefore',
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
      upgradeStatus: 'UpgradeStatus',
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
      certificateNotBefore: 'number',
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
      upgradeStatus: 'string',
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

