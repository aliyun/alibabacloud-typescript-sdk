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
   * The bandwidth business time. The bandwidth calculation granularity is 5 minutes.
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
   * The bandwidth type. Valid values:
   * - 1: public network.
   * - 2: internal network.
   * 
   * @example
   * 1
   */
  flowType?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-6ecpqvkicnchxccozrpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type, such as vm, eip, single_tenant, or nc.
   * 
   * @example
   * vm
   */
  instanceType?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.107.***
   */
  ip?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) of the IP address.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 43795230
   */
  rxBw?: number;
  /**
   * @remarks
   * The service type, such as vm, eip, esk, or meta.
   * 
   * @example
   * vm
   */
  serviceType?: string;
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
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
   * The collection of Internet bandwidth cap information.
   */
  bandwidths?: DescribeInstanceBandwidthDetailResponseBodyBandwidths[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The total number of records.
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

