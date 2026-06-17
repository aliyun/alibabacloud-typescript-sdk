// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTimeTopResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The inbound bandwidth. Unit: bps.
   * 
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.66.231.XXX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * vfw-tr-7a9c8901ed394****
   */
  natFirewallId?: string;
  /**
   * @remarks
   * The name of the NAT firewall.
   * 
   * @example
   * vfw-test
   */
  natFirewallName?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-uf6pnry5vpawb****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT Gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 27
   */
  newConn?: string;
  /**
   * @remarks
   * The outbound bandwidth. Unit: bps.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-qingdao
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the asset instance.
   * 
   * @example
   * i-bp130nn8h6157dir****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the asset instance.
   * 
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 27
   */
  sessionCount?: string;
  /**
   * @remarks
   * The total bandwidth. Unit: bps.
   * 
   * @example
   * 232
   */
  totalBps?: number;
  static names(): { [key: string]: string } {
    return {
      inBps: 'InBps',
      ip: 'Ip',
      natFirewallId: 'NatFirewallId',
      natFirewallName: 'NatFirewallName',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      newConn: 'NewConn',
      outBps: 'OutBps',
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      sessionCount: 'SessionCount',
      totalBps: 'TotalBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBps: 'number',
      ip: 'string',
      natFirewallId: 'string',
      natFirewallName: 'string',
      natGatewayId: 'string',
      natGatewayName: 'string',
      newConn: 'string',
      outBps: 'number',
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      sessionCount: 'string',
      totalBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatFirewallTimeTopResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of results.
   * 
   * @example
   * 2
   */
  dataCount?: number;
  /**
   * @remarks
   * The list of data.
   */
  dataList?: DescribeNatFirewallTimeTopResponseBodyDataList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
   * @remarks
   * The point in time when the traffic data was collected. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656923760
   */
  trafficTime?: string;
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
      dataList: { 'type': 'array', 'itemType': DescribeNatFirewallTimeTopResponseBodyDataList },
      requestId: 'string',
      trafficTime: 'string',
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

