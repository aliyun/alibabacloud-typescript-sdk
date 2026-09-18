// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic managed renewal is enabled. Valid values:
   * - enable: Enabled.
   * - disable: Not enabled.
   * 
   * @example
   * enable
   */
  autoReissue?: string;
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
   * - China site: certificate ID + "-cn-hangzhou"
   * - International site: certificate ID + "-ap-southeast-1"
   * 
   * For example, if the certificate ID is 123, the CertIdentifier on the China site is "123-cn-hangzhou", and the CertIdentifier on the international site is "123-ap-southeast-1".
   * 
   * @example
   * 21795675-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The domain name of the latest issued certificate.
   * 
   * @example
   * abc.com,www.abc.com
   */
  certificateDomain?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 18541349
   */
  certificateId?: number;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * cert-13216408
   */
  certificateName?: string;
  /**
   * @remarks
   * The end time of the latest certificate. The value is a UNIX timestamp in seconds. This field is empty if no certificate has been issued.
   * 
   * @example
   * 1801324800000
   */
  certificateNotAfter?: number;
  /**
   * @remarks
   * The start time of the latest certificate. The value is a UNIX timestamp in seconds. This field is empty if no certificate has been issued.
   * 
   * @example
   * 1776988800000
   */
  certificateNotBefore?: number;
  /**
   * @remarks
   * The revocation time of the latest certificate. The value is a UNIX timestamp in seconds.
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
   * - **willExpire**: About to expire.
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
   * The domain name bound to the certificate.
   * 
   * @example
   * test.com
   */
  domain?: string;
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
   * The expiration time of the instance. The value is a UNIX timestamp in seconds. This field is empty if no certificate has been issued.
   * 
   * @example
   * 1801324800000
   */
  instanceEndTime?: number;
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
   * The start time of the instance. The value is a UNIX timestamp in seconds. This field is empty if no certificate has been issued.
   * 
   * @example
   * 1801324800000
   */
  instanceStartTime?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * - BUY: formal certificate.
   * - TEST: test certificate.
   * 
   * @example
   * BUY
   */
  instanceType?: string;
  /**
   * @remarks
   * The certificate algorithm. Default value: RSA_2048. Valid values:
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
   * The end time when the instance was purchased. The value is a UNIX timestamp in seconds. This value is used to determine the purchase duration of the instance.
   * 
   * @example
   * 1801324800000
   */
  orderEndTime?: number;
  /**
   * @remarks
   * The start time when the instance was purchased. The value is a UNIX timestamp in seconds. This value is used to determine the refund time limit.
   * 
   * @example
   * 1801324800000
   */
  orderStartTime?: number;
  /**
   * @remarks
   * The result returned by the CA during the last certificate operation.
   * 
   * @example
   * pending
   */
  pendingResult?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 123
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
   * - **inactive**: Pending use.
   * - **pending**: Under review. The latest certificate is being reviewed.
   * - **willExpire**: The instance is about to expire.
   * - **expired**: The instance has expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Closed. The instance is unavailable.
   * 
   * @example
   * inactive
   */
  status?: string;
  /**
   * @remarks
   * The list of cloud services to which the latest certificate is deployed.
   */
  usingProductList?: string[];
  /**
   * @remarks
   * The version type. Valid values:
   * - basic: Basic Edition.
   * - standard: Standard Edition.
   * - professional: Professional Edition.
   * - ultimate: Ultimate Edition.
   * 
   * @example
   * professional
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
      brand: 'Brand',
      certIdentifier: 'CertIdentifier',
      certificateDomain: 'CertificateDomain',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateNotAfter: 'CertificateNotAfter',
      certificateNotBefore: 'CertificateNotBefore',
      certificateRevokeTime: 'CertificateRevokeTime',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      domain: 'Domain',
      fullDomainCount: 'FullDomainCount',
      instanceEndTime: 'InstanceEndTime',
      instanceId: 'InstanceId',
      instanceStartTime: 'InstanceStartTime',
      instanceType: 'InstanceType',
      keyAlgorithm: 'KeyAlgorithm',
      orderEndTime: 'OrderEndTime',
      orderStartTime: 'OrderStartTime',
      pendingResult: 'PendingResult',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      usingProductList: 'UsingProductList',
      versionType: 'VersionType',
      wildcardDomainCount: 'WildcardDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissue: 'string',
      brand: 'string',
      certIdentifier: 'string',
      certificateDomain: 'string',
      certificateId: 'number',
      certificateName: 'string',
      certificateNotAfter: 'number',
      certificateNotBefore: 'number',
      certificateRevokeTime: 'number',
      certificateStatus: 'string',
      certificateType: 'string',
      domain: 'string',
      fullDomainCount: 'number',
      instanceEndTime: 'number',
      instanceId: 'string',
      instanceStartTime: 'number',
      instanceType: 'string',
      keyAlgorithm: 'string',
      orderEndTime: 'number',
      orderStartTime: 'number',
      pendingResult: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      usingProductList: { 'type': 'array', 'itemType': 'string' },
      versionType: 'string',
      wildcardDomainCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.usingProductList)) {
      $dara.Model.validateArray(this.usingProductList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of instances for which managed renewal is not enabled.
   * 
   * @example
   * 80
   */
  disableReissueCount?: number;
  /**
   * @remarks
   * The number of instances for which managed renewal is enabled.
   * 
   * @example
   * 100
   */
  enableReissueCount?: number;
  /**
   * @remarks
   * The list of instances.
   */
  instanceList?: ListInstancesResponseBodyInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records displayed per page.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      disableReissueCount: 'DisableReissueCount',
      enableReissueCount: 'EnableReissueCount',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      disableReissueCount: 'number',
      enableReissueCount: 'number',
      instanceList: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceList },
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

