// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficDetailResponseBodyTrafficList extends $dara.Model {
  /**
   * @remarks
   * The inbound network throughput, in bytes.
   * 
   * @example
   * 1115096939
   */
  inBytes?: number;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-8vb2d7c9mtn0bo9qcraq
   */
  instanceId?: string;
  /**
   * @remarks
   * The asset type. This value is valid only for the Internet border.
   * 
   * @example
   * EcsPublicIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound network throughput, in bytes.
   * 
   * @example
   * 100000000
   */
  outBytes?: number;
  /**
   * @remarks
   * The protection duration, in hours.
   * 
   * @example
   * 20
   */
  protectionDuration?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the resource. For Internet border traffic, this is the public IP address of the asset. For NAT border traffic, this is the instance ID of the firewall.
   * 
   * @example
   * 39.106.146.214
   */
  resourceId?: string;
  /**
   * @remarks
   * The total network throughput for both inbound and outbound traffic, in bytes.
   * 
   * @example
   * 1215096939
   */
  totalBytes?: number;
  /**
   * @remarks
   * The date of the traffic statistics.
   * 
   * @example
   * 20231001
   */
  trafficDay?: string;
  /**
   * @remarks
   * The type of the firewall border for which traffic is queried. Valid values:
   * 
   * - **EIP_TRAFFIC**: traffic on the Internet border.
   * 
   * - **NatGateway_TRAFFIC**: traffic on the NAT border.
   * 
   * - **VPC_TRAFFIC**: traffic on the VPC border.
   * 
   * @example
   * EIP_TRAFFIC
   */
  trafficType?: string;
  static names(): { [key: string]: string } {
    return {
      inBytes: 'InBytes',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      outBytes: 'OutBytes',
      protectionDuration: 'ProtectionDuration',
      regionNo: 'RegionNo',
      resourceId: 'ResourceId',
      totalBytes: 'TotalBytes',
      trafficDay: 'TrafficDay',
      trafficType: 'TrafficType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBytes: 'number',
      instanceId: 'string',
      instanceType: 'string',
      outBytes: 'number',
      protectionDuration: 'number',
      regionNo: 'string',
      resourceId: 'string',
      totalBytes: 'number',
      trafficDay: 'string',
      trafficType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayTrafficDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0525EADE-C112-5702-A5BC-0E2F6F94DB23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of traffic statistics entries.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of traffic statistics.
   */
  trafficList?: DescribePostpayTrafficDetailResponseBodyTrafficList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficList: 'TrafficList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      trafficList: { 'type': 'array', 'itemType': DescribePostpayTrafficDetailResponseBodyTrafficList },
    };
  }

  validate() {
    if(Array.isArray(this.trafficList)) {
      $dara.Model.validateArray(this.trafficList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

