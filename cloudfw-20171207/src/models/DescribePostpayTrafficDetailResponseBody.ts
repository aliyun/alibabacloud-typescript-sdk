// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficDetailResponseBodyTrafficList extends $dara.Model {
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are received Unit: bytes.
   * 
   * @example
   * 1115096939
   */
  inBytes?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-8vb2d7c9mtn0bo9qcraq
   */
  instanceId?: string;
  /**
   * @remarks
   * The asset type. This value takes effect only for the Internet firewall.
   * 
   * @example
   * EcsPublicIP
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent. Unit: bytes.
   * 
   * @example
   * 100000000
   */
  outBytes?: number;
  /**
   * @remarks
   * Protection duration. Unit: hours.
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
   * The resource ID. The resource ID for the Internet firewall is the public IP address that is protected the Internet firewall, and the resource ID for a NAT firewall is the instance ID of the NAT firewall.
   * 
   * @example
   * 39.106.146.214
   */
  resourceId?: string;
  /**
   * @remarks
   * The total inbound and outbound network throughput, which indicates the total number of bytes that are received and sent. Unit: bytes.
   * 
   * @example
   * 1215096939
   */
  totalBytes?: number;
  /**
   * @remarks
   * The date on which the statistics are collected.
   * 
   * @example
   * 20231001
   */
  trafficDay?: string;
  /**
   * @remarks
   * The traffic type. Valid values:
   * 
   * *   **EIP_TRAFFIC**: traffic for the Internet firewall
   * *   **NatGateway_TRAFFIC**: traffic for NAT firewalls
   * *   **VPC_TRAFFIC**: traffic for VPC firewalls
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
   * The total number of entries returned.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The statistics on traffic.
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

