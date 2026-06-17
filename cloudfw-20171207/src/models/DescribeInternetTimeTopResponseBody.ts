// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTimeTopResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 183.60.164.XXX
   */
  IP?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound packet forwarding rate. Unit: pps.
   * 
   * @example
   * 2
   */
  inPps?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-wz98eedr5l5hkb8****e7
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The public IP address of the NAT gateway.
   * 
   * @example
   * 47.97.66.XXX
   */
  natIP?: string;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 27
   */
  newConn?: number;
  /**
   * @remarks
   * The outbound traffic. Unit: bit/s.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound packet forwarding rate. Unit: pps.
   * 
   * @example
   * 2
   */
  outPps?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.21.186.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * lb-bp14ue2rgktunncq****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The type of the public IP address.
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The total bandwidth. Unit: bit/s.
   * 
   * @example
   * 232
   */
  totalBps?: number;
  /**
   * @remarks
   * The total number of packets.
   * 
   * @example
   * 88
   */
  totalPps?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) instance.
   * 
   * @example
   * vpc-wz9o0uzfjuj81fx7m****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      inBps: 'InBps',
      inPps: 'InPps',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      natIP: 'NatIP',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outPps: 'OutPps',
      privateIP: 'PrivateIP',
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceType: 'ResourceType',
      sessionCount: 'SessionCount',
      totalBps: 'TotalBps',
      totalPps: 'TotalPps',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      inBps: 'number',
      inPps: 'number',
      natGatewayId: 'string',
      natGatewayName: 'string',
      natIP: 'string',
      newConn: 'number',
      outBps: 'number',
      outPps: 'number',
      privateIP: 'string',
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceType: 'string',
      sessionCount: 'number',
      totalBps: 'number',
      totalPps: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetTimeTopResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 19
   */
  dataCount?: number;
  /**
   * @remarks
   * The list of data entries.
   */
  dataList?: DescribeInternetTimeTopResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F2D5C04-731F-50B0-ADE1-01637B3C****
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp of the traffic data. Unit: seconds.
   * 
   * @example
   * 1734399660
   */
  trafficTime?: number;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataList: 'DataList',
      requestId: 'RequestId',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataList: { 'type': 'array', 'itemType': DescribeInternetTimeTopResponseBodyDataList },
      requestId: 'string',
      trafficTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

