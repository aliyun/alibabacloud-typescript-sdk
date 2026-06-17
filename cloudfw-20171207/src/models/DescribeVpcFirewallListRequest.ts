// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallListRequest extends $dara.Model {
  /**
   * @remarks
   * The subtype of the connection. Valid values:
   * 
   * - **vpc2vpc**: Express Connect.
   * 
   * - **vpcpeer**: peering connection.
   * 
   * @example
   * vpcpeer
   */
  connectSubType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * - **opened**: The firewall is enabled.
   * 
   * - **closed**: The firewall is disabled.
   * 
   * - **notconfigured**: The firewall is not configured.
   * 
   * - **configured**: The firewall is configured.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
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
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries per page.
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
   * > For more information about the regions where Cloud Firewall is supported, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
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

