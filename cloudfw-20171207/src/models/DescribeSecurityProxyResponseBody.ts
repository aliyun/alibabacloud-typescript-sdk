// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityProxyResponseBodyProxyList extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The details of the exception.
   * 
   * @example
   * “”
   */
  detail?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 1797733170015112
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-2zex8sf4s5vus8rq3rjqo
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT Gateway.
   * 
   * @example
   * ecs-slb-eip-waf
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat4921f192b6cf438d93f8
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall.
   * 
   * @example
   * nat-idmp-fir
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * ap-southeast-1
   */
  regionNo?: string;
  /**
   * @remarks
   * The list of SNAT IP addresses.
   */
  snatIpList?: string[];
  /**
   * @remarks
   * The status of the Cloud Firewall. Valid values:
   * 
   * - **configuring**: The firewall is being created.
   * 
   * - **deleting**: The firewall is being deleted.
   * 
   * - **normal**: The firewall is running.
   * 
   * - **abnormal**: The firewall is not running as expected.
   * 
   * - **opening**: The firewall is being enabled.
   * 
   * - **closing**: The firewall is being disabled.
   * 
   * - **closed**: The firewall is disabled.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the strict mode is enabled. 1: The strict mode is enabled. 0: The strict mode is disabled.
   * 
   * @example
   * 0
   */
  strictMode?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the Cloud Firewall instance belongs.
   * 
   * @example
   * vsw-5gu2qqfmjmwl8ktzgfekl
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * @example
   * vpc-wz9xn35tq33hunzvpu0se
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance name of the VPC.
   * 
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
  /**
   * @remarks
   * The list of NAT firewalls.
   */
  proxyList?: DescribeSecurityProxyResponseBodyProxyList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

