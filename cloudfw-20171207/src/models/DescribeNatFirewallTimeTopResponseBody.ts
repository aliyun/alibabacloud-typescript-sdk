// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTimeTopResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @example
   * 10.66.231.XXX
   */
  ip?: string;
  /**
   * @example
   * vfw-tr-7a9c8901ed394****
   */
  natFirewallId?: string;
  /**
   * @example
   * vfw-test
   */
  natFirewallName?: string;
  /**
   * @example
   * ngw-uf6pnry5vpawb****
   */
  natGatewayId?: string;
  /**
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @example
   * 27
   */
  newConn?: string;
  /**
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @example
   * cn-qingdao
   */
  regionNo?: string;
  /**
   * @example
   * i-bp130nn8h6157dir****
   */
  resourceInstanceId?: string;
  /**
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @example
   * 27
   */
  sessionCount?: string;
  /**
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
   * @example
   * 2
   */
  dataCount?: number;
  dataList?: DescribeNatFirewallTimeTopResponseBodyDataList[];
  /**
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
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

