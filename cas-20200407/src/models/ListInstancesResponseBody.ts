// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic management is enabled. Valid values:
   * - enable: Enabled.
   * - disable: Disabled.
   * 
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @remarks
   * The auto-renewal status. Valid values:
   * - **enable**: Auto-renewal.
   * - **disable**: Manual renewal. You will receive a notification in the console before the instance expires.
   * 
   * @example
   * enable
   */
  autoRenewalStatus?: string;
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
   * The global certificate ID. The format is Certificate ID + "-" + Site region ID. It is commonly used in various Alibaba Cloud services.
   * - For the China site, the format is Certificate ID + "-cn-hangzhou".
   * - For the international site, the format is Certificate ID + "-ap-southeast-1".
   * 
   * For example, if the certificate ID is 123, the CertIdentifier for the China site is "123-cn-hangzhou", and for the international site, it is "123-ap-southeast-1".
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
   * The expiration time of the latest certificate. The value is a timestamp accurate to seconds. If the certificate is not issued, this parameter is empty.
   * 
   * @example
   * 1801324800000
   */
  certificateNotAfter?: number;
  /**
   * @remarks
   * The start time of the latest certificate. The value is a timestamp accurate to seconds. If the certificate is not issued, this parameter is empty.
   * 
   * @example
   * 1776988800000
   */
  certificateNotBefore?: number;
  /**
   * @remarks
   * The revocation time of the latest certificate. The value is a timestamp accurate to seconds.
   * 
   * @example
   * 1801324800000
   */
  certificateRevokeTime?: number;
  /**
   * @remarks
   * The certificate status. Valid values:
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
   * The certificate type. Valid values: DV, OV, and EV.
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
   * The number of exact domain names.
   * 
   * @example
   * 1
   */
  fullDomainCount?: number;
  /**
   * @remarks
   * The expiration time of the instance. The value is a timestamp accurate to seconds. If no certificate has been issued, this parameter is empty.
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
   * The start time of the instance. The value is a timestamp accurate to seconds. If no certificate has been issued, this parameter is empty.
   * 
   * @example
   * 1801324800000
   */
  instanceStartTime?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * - BUY: Official certificate.
   * - TEST: Test certificate.
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
   * The end time of the instance purchase. The value is a timestamp accurate to seconds. This parameter is used to determine the purchase duration of the instance.
   * 
   * @example
   * 1801324800000
   */
  orderEndTime?: number;
  /**
   * @remarks
   * The start time of the instance purchase. The value is a timestamp accurate to seconds. This parameter is used to determine the refund time limit.
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
   * The ID of the resource group.
   * 
   * @example
   * 123
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
   * - **inactive**: Pending.
   * - **pending**: Under review. The latest certificate is submitted for review.
   * - **willExpire**: Expiring soon.
   * - **expired**: Expired.
   * - **refund**: Refunded.
   * - **normal**: Normal.
   * - **closed**: Closed. The instance cannot be used.
   * 
   * @example
   * inactive
   */
  status?: string;
  /**
   * @remarks
   * The list of cloud services where the latest certificate is deployed.
   */
  usingProductList?: string[];
  /**
   * @remarks
   * The edition. Valid values: basic, standard, professional, and ultimate.
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
      autoRenewalStatus: 'AutoRenewalStatus',
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
      autoRenewalStatus: 'string',
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
   * The current page number displayed during paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of unmanaged instances.
   * 
   * @example
   * 80
   */
  disableReissueCount?: number;
  /**
   * @remarks
   * The number of managed instances.
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
   * The ID of the request.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records returned on each page.
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

