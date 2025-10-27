// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityProxyResponseBodyProxyList extends $dara.Model {
  /**
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @example
   * “”
   */
  detail?: string;
  /**
   * @example
   * 1797733170015112
   */
  memberUid?: string;
  /**
   * @example
   * ngw-2zex8sf4s5vus8rq3rjqo
   */
  natGatewayId?: string;
  /**
   * @example
   * ecs-slb-eip-waf
   */
  natGatewayName?: string;
  /**
   * @example
   * proxy-nat4921f192b6cf438d93f8
   */
  proxyId?: string;
  /**
   * @example
   * nat-idmp-fir
   */
  proxyName?: string;
  /**
   * @example
   * ap-southeast-1
   */
  regionNo?: string;
  snatIpList?: string[];
  /**
   * @example
   * normal
   */
  status?: string;
  /**
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @example
   * vsw-5gu2qqfmjmwl8ktzgfekl
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-wz9xn35tq33hunzvpu0se
   */
  vpcId?: string;
  /**
   * @example
   * vpc-bp1kw9igsq0yyzeanqamx
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      detail: 'Detail',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      snatIpList: 'SnatIpList',
      status: 'Status',
      strictMode: 'StrictMode',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      detail: 'string',
      memberUid: 'string',
      natGatewayId: 'string',
      natGatewayName: 'string',
      proxyId: 'string',
      proxyName: 'string',
      regionNo: 'string',
      snatIpList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      strictMode: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snatIpList)) {
      $dara.Model.validateArray(this.snatIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityProxyResponseBody extends $dara.Model {
  proxyList?: DescribeSecurityProxyResponseBodyProxyList[];
  /**
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      proxyList: 'ProxyList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyList: { 'type': 'array', 'itemType': DescribeSecurityProxyResponseBodyProxyList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.proxyList)) {
      $dara.Model.validateArray(this.proxyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

