// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBandwidthDetailResponseBodyBandwidths extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1972653484384661
   */
  aliUid?: number;
  /**
   * @remarks
   * The bandwidth service time. The data granularity is 5 minutes.
   * 
   * @example
   * 2024-01-11 00:00:00
   */
  bizTime?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * cn-yichang-2
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The type of the bandwidth. Valid values: 1, which indicates public network bandwidth. 2, which indicates internal network bandwidth.
   * 
   * @example
   * 1
   */
  flowType?: number;
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * i-6ecpqvkicnchxccozrpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance, such as vm, eip, single_tenant, and nc.
   * 
   * @example
   * vm
   */
  instanceType?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 203.107.***
   */
  ip?: string;
  /**
   * @remarks
   * The Internet service provider to which the IP address belongs.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 43795230
   */
  rxBw?: number;
  /**
   * @remarks
   * The type of the service, such as vm, eip, esk, and meta.
   * 
   * @example
   * vm
   */
  serviceType?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 25415638
   */
  txBw?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bizTime: 'BizTime',
      ensRegionId: 'EnsRegionId',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ip: 'Ip',
      isp: 'Isp',
      rxBw: 'RxBw',
      serviceType: 'ServiceType',
      txBw: 'TxBw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bizTime: 'string',
      ensRegionId: 'string',
      flowType: 'number',
      instanceId: 'string',
      instanceType: 'string',
      ip: 'string',
      isp: 'string',
      rxBw: 'number',
      serviceType: 'string',
      txBw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBandwidthDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the maximum public bandwidth.
   */
  bandwidths?: DescribeInstanceBandwidthDetailResponseBodyBandwidths[];
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidths: 'Bandwidths',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidths: { 'type': 'array', 'itemType': DescribeInstanceBandwidthDetailResponseBodyBandwidths },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bandwidths)) {
      $dara.Model.validateArray(this.bandwidths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

