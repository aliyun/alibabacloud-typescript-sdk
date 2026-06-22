// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficDetailResponseBodyTrafficList extends $dara.Model {
  /**
   * @remarks
   * The inbound network throughput (total bytes). Unit: bytes.
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
   * The asset type. This value takes effect only for Internet border traffic.
   * 
   * @example
   * EcsPublicIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound network throughput (total bytes). Unit: bytes.
   * 
   * @example
   * 100000000
   */
  outBytes?: number;
  /**
   * @remarks
   * The protection duration. Unit: hours.
   * 
   * @example
   * 20
   */
  protectionDuration?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The resource ID. For Internet border traffic, this is the public IP address of the asset. For NAT border traffic, this is the firewall instance ID of the asset.
   * 
   * @example
   * 39.106.146.214
   */
  resourceId?: string;
  /**
   * @remarks
   * The total network throughput in both inbound and outbound directions (total bytes sent and received). Unit: bytes.
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
   * The type of traffic boundary for statistics. Valid values:
   *           
   * - **EIP_TRAFFIC**: Internet border traffic.
   *   
   * - **NatGateway_TRAFFIC**: NAT border traffic.
   * - **VPC_TRAFFIC**: VPC border traffic.
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
   * The request ID.
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
   * The traffic statistics list.
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

