// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstanceList extends $dara.Model {
  /**
   * @example
   * enable
   */
  autoReissue?: string;
  /**
   * @example
   * DigiCert
   */
  brand?: string;
  /**
   * @example
   * 21795675-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @example
   * 18541349
   */
  certificateId?: number;
  /**
   * @example
   * cert-13216408
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
   * test.com
   */
  domain?: string;
  /**
   * @example
   * 1
   */
  fullDomainCount?: number;
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
   * BUY
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
   * ss.dv.t
   */
  spec?: string;
  /**
   * @example
   * inactive
   */
  status?: string;
  /**
   * @example
   * 0
   */
  wildcardDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoReissue: 'AutoReissue',
      brand: 'Brand',
      certIdentifier: 'CertIdentifier',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateNotAfter: 'CertificateNotAfter',
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
      spec: 'Spec',
      status: 'Status',
      wildcardDomainCount: 'WildcardDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissue: 'string',
      brand: 'string',
      certIdentifier: 'string',
      certificateId: 'number',
      certificateName: 'string',
      certificateNotAfter: 'number',
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
      spec: 'string',
      status: 'string',
      wildcardDomainCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  instanceList?: ListInstancesResponseBodyInstanceList[];
  /**
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
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

