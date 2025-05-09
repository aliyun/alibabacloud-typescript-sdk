// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 147783******
   */
  memberUid?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-bp123456g******
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: **10**.**** Maximum value: **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * @example
   * proxy-nat97a******
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall. The name must be 4 to 50 characters in length, and can contain letters, digits, and underscores (_). The name cannot start with an underscore.
   * 
   * @example
   * proxy-******
   */
  proxyName?: string;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the NAT firewall. Valid values:
   * 
   * *   configuring
   * *   deleting
   * *   normal
   * *   abnormal
   * *   opening
   * *   closing
   * *   closed
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      natGatewayId: 'NatGatewayId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      regionNo: 'RegionNo',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
      natGatewayId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      proxyId: 'string',
      proxyName: 'string',
      regionNo: 'string',
      status: 'string',
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

