// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceDetailResponseBodyDingGroupList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the DingTalk group for expert services.
   * 
   * @example
   * 123
   */
  dingGroupInstanceId?: string;
  /**
   * @remarks
   * The name of the DingTalk group for expert services.
   * 
   * @example
   * 123
   */
  dingGroupName?: string;
  /**
   * @remarks
   * The type of the DingTalk group for expert services. Valid values:
   * - expedite: Application assistance.
   * - remote: Offline deployment.
   * 
   * @example
   * remote
   */
  dingGroupType?: string;
  /**
   * @remarks
   * The link to join the DingTalk group for expert services.
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
   * The CNAME record value for verification-free authorization. This parameter may be empty.
   * 
   * @example
   * 123.com
   */
  cname?: string;
  /**
   * @remarks
   * The prefix used for CNAME validation.
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
   * The value of the host record for validation.
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
   * The key of the tag.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * Specifies whether automatic hosting is enabled. Valid values:
   * - enable: Enabled.
   * - disable: Disabled.
   * 
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @remarks
   * Specifies whether the current version includes automatic hosting. Valid values:
   * - 1: Included.
   * - 0: Not included.
   * 
   * @example
   * 1
   */
  autoReissueFlag?: number;
  /**
   * @remarks
   * The average waiting time for issuing a certificate of this specification, in seconds.
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
   * The global certificate ID. The format is Certificate ID + "-" + Site region ID. This ID is commonly used across Alibaba Cloud services.
   * - For the Chinese site, the format is Certificate ID + "-cn-hangzhou".
   * - For the international site, the format is Certificate ID + "-ap-southeast-1".
   * For example, if the certificate ID is 123, the CertIdentifier for the Chinese site is "123-cn-hangzhou", and for the international site, it is "123-ap-southeast-1".
   * 
   * @example
   * 22783111-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 1234567890
   */
  certificateId?: number;
  /**
   * @remarks
   * The name of the instance. When a certificate is issued, this name is used as the default name of the certificate.
   * 
   * @example
   * 123
   */
  certificateName?: string;
  /**
   * @remarks
   * The expiration time of the latest certificate. The value is a UNIX timestamp accurate to seconds. If no certificate is issued, this parameter is empty.
   * 
   * @example
   * 1801324800000
   */
  certificateNotAfter?: number;
  /**
   * @remarks
   * The start time of the latest certificate. The value is a UNIX timestamp accurate to seconds. If no certificate is issued, this parameter is empty.
   * 
   * @example
   * 1781568000000
   */
  certificateNotBefore?: number;
  /**
   * @remarks
   * The revocation time of the latest certificate. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1801324800000
   */
  certificateRevokeTime?: number;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * - **issued**: Issued.
   * - **revoked**: Revoked.
   * - **willExpire**: Expiring soon.
   * - **expired**: Expired.
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
   * The city where the company or organization of the user who purchased the certificate is located. This field is required when generating a CSR. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The ID of the company information.
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
   * The code of the country or region where the organization specified in the certificate is located. For example, CN indicates China, and US indicates the United States. This field is required when generating a CSR. Default value: CN.
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
   * The number of deployed cloud service resources.
   * 
   * @example
   * 30
   */
  deploymentResourceCount?: number;
  /**
   * @remarks
   * The used quota for deployment to cloud servers.
   * 
   * @example
   * 30
   */
  deploymentUseCount?: number;
  /**
   * @remarks
   * The list of associated DingTalk groups for expert services.
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
   * The number of exact domain names.
   * 
   * @example
   * 1
   */
  fullDomainCount?: number;
  /**
   * @remarks
   * The method used to generate the CSR. Valid values:
   * - online: Generated by the system. The Csr field is ignored.
   * - upload: Uploaded by the user. The Csr field is required.
   * 
   * @example
   * online
   */
  generateCsrMethod?: string;
  /**
   * @remarks
   * The expiration time of the instance. The value is a UNIX timestamp accurate to seconds. If no certificate has been issued, this parameter is empty.
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
   * The start time of the instance. The value is a UNIX timestamp accurate to seconds. If no certificate has been issued, this parameter is empty.
   * 
   * @example
   * 1801324800000
   */
  instanceStartTime?: number;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * - BUY: Official certificate.
   * - TEST: Test certificate.
   * 
   * @example
   * TEST
   */
  instanceType?: string;
  /**
   * @remarks
   * The algorithm of the certificate. Valid values:
   * - **RSA_2048**
   * - **RSA_3072**
   * - **RSA_4096**
   * - **ECC_256**
   * - **SM2**
   * 
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether the quota for domain name monitoring can be expanded. Valid values:
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 1
   */
  monitorExpandFlag?: number;
  /**
   * @remarks
   * The used quota for domain name monitoring.
   * 
   * @example
   * 10
   */
  monitorUseCount?: number;
  /**
   * @remarks
   * The end time of the instance purchase. The value is a UNIX timestamp used to determine the purchase duration of the instance.
   * 
   * @example
   * 1801324800000
   */
  orderEndTime?: number;
  /**
   * @remarks
   * The progress of the order.
   * 
   * @example
   * {
   *   "orderProgress": [
   *     {
   *       "certificateId": 12345,
   *       "certificateName": "example.com",
   *       "notBefore": 1727000000000,
   *       "notAfter": 1735000000000,
   *       "stages": [
   *         { "name": "apply", "title": "apply", "status": "completed", "time": 1726990000000 },
   *         { "name": "domainValidation", "title": "domainValidation", "status": "completed", "time": 1727000000000 },
   *         { "name": "issue", "title": "issue", "status": "completed", "time": 1727000000000 }
   *       ]
   *     }
   *   ]
   * }
   */
  orderProgress?: string;
  /**
   * @remarks
   * The start time of the instance purchase. The value is a UNIX timestamp accurate to seconds, used to determine the time limit for refunds.
   * 
   * @example
   * 1801324800000
   */
  orderStartTime?: number;
  /**
   * @remarks
   * The result returned by the CA during the last operation on the certificate.
   * 
   * @example
   * pending
   */
  pendingResult?: string;
  /**
   * @remarks
   * The province or region where the company is located. This field is required when generating a CSR. Default value: Beijing.
   * 
   * @example
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * B2CE1D02-6D5E-56E5-A9BD-EE288255C7F9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of the purchased instance.
   * 
   * @example
   * ss.dv.t
   */
  spec?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **inactive**: Pending use.
   * - **pending**: Under review. The latest certificate is committed for review.
   * - **willExpire**: Expiring soon.
   * - **expired**: Expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Shutdown and unavailable.
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
   * The total quota for deployment to cloud servers.
   * 
   * @example
   * 60
   */
  totalDeploymentCount?: number;
  /**
   * @remarks
   * The total quota for domain name monitoring.
   * 
   * @example
   * 80
   */
  totalMonitorCount?: number;
  /**
   * @remarks
   * The upgrade status of the instance. Valid values:
   * - none: The instance is not upgraded.
   * - payed: The instance upgrade is paid.
   * - issued: The latest certificate is issued for the instance upgrade.
   * 
   * @example
   * none
   */
  upgradeStatus?: string;
  /**
   * @remarks
   * The validation method for the certificate application. Valid values:
   * - DNS: DNS validation, using TXT or CNAME records.
   * - HTTP: File validation.
   * 
   * @example
   * DNS
   */
  validationMethod?: string;
  /**
   * @remarks
   * The version type. Valid values:
   * - FOTA: System upgrade.
   * - APP: Application upgrade.
   * 
   * @example
   * 0
   */
  versionType?: string;
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
      autoReissueFlag: 'AutoReissueFlag',
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
      deploymentResourceCount: 'DeploymentResourceCount',
      deploymentUseCount: 'DeploymentUseCount',
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
      monitorExpandFlag: 'MonitorExpandFlag',
      monitorUseCount: 'MonitorUseCount',
      orderEndTime: 'OrderEndTime',
      orderProgress: 'OrderProgress',
      orderStartTime: 'OrderStartTime',
      pendingResult: 'PendingResult',
      province: 'Province',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tags: 'Tags',
      totalDeploymentCount: 'TotalDeploymentCount',
      totalMonitorCount: 'TotalMonitorCount',
      upgradeStatus: 'UpgradeStatus',
      validationMethod: 'ValidationMethod',
      versionType: 'VersionType',
      wildcardDomainCount: 'WildcardDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissue: 'string',
      autoReissueFlag: 'number',
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
      deploymentResourceCount: 'number',
      deploymentUseCount: 'number',
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
      monitorExpandFlag: 'number',
      monitorUseCount: 'number',
      orderEndTime: 'number',
      orderProgress: 'string',
      orderStartTime: 'number',
      pendingResult: 'string',
      province: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceDetailResponseBodyTags },
      totalDeploymentCount: 'number',
      totalMonitorCount: 'number',
      upgradeStatus: 'string',
      validationMethod: 'string',
      versionType: 'string',
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

