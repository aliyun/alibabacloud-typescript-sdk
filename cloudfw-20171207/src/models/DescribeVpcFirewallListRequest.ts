// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallListRequest extends $dara.Model {
  /**
   * @remarks
   * The connection subtype. Valid values:
   * 
   * - **vpc2vpc**: Express Connect.
   * - **vpcpeer**: VPC peering connection.
   * 
   * @example
   * vpcpeer
   */
  connectSubType?: string;
  /**
   * @remarks
   * The page number Settings for a paging query.
   * 
   * Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the virtual private cloud (VPC) border firewall. Valid values:
   * 
   * - **opened**: Enabled.
   * - **closed**: Disabled.
   * - **notconfigured**: The virtual private cloud (VPC) border firewall is not configured.
   * - **configured**: The virtual private cloud (VPC) border firewall is configured.
   * 
   * > If you do not specify the Settings for this parameter, virtual private cloud (VPC) border firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member accounts of the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number Settings of virtual private cloud (VPC) border firewalls per page for a paging query.
   * 
   * Default value: **10**. Maximum value: **50**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account to which the peer VPC belongs.
   * 
   * @example
   * 258039427902****
   */
  peerUid?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) border firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the virtual private cloud (VPC) border firewall.
   * 
   * @example
   * test-vpc-firewall
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The instance ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectSubType: 'ConnectSubType',
      currentPage: 'CurrentPage',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
      peerUid: 'PeerUid',
      regionNo: 'RegionNo',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectSubType: 'string',
      currentPage: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      memberUid: 'string',
      pageSize: 'string',
      peerUid: 'string',
      regionNo: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
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

