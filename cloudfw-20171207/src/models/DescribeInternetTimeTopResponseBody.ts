// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTimeTopResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 183.60.164.XXX
   */
  IP?: string;
  /**
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @example
   * 2
   */
  inPps?: number;
  /**
   * @example
   * ngw-wz98eedr5l5hkb8****e7
   */
  natGatewayId?: string;
  /**
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @example
   * 47.97.66.XXX
   */
  natIP?: string;
  /**
   * @example
   * 27
   */
  newConn?: number;
  /**
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @example
   * 2
   */
  outPps?: number;
  /**
   * @example
   * 10.21.186.XXX
   */
  privateIP?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * lb-bp14ue2rgktunncq****
   */
  resourceInstanceId?: string;
  /**
   * @example
   * test
   */
  resourceInstanceName?: string;
  /**
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @example
   * 232
   */
  totalBps?: number;
  /**
   * @example
   * 88
   */
  totalPps?: number;
  /**
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
   * @example
   * 19
   */
  dataCount?: number;
  dataList?: DescribeInternetTimeTopResponseBodyDataList[];
  /**
   * @example
   * 7F2D5C04-731F-50B0-ADE1-01637B3C****
   */
  requestId?: string;
  /**
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

