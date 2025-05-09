// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not configured.
   * *   **configured**: The VPC firewall is configured but is not enabled.
   * 
   * > If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account. The member is also an Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  networkInstanceId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **auto**: automatic mode
   * *   **manual**: manual mode
   * 
   * > If you do not specify this parameter, VPC firewalls in all routing modes are queried.
   * 
   * @example
   * auto
   */
  routeMode?: string;
  /**
   * @remarks
   * The type of the transit router. Valid values:
   * 
   * *   **Basic**: Basic Edition transit router
   * *   **Enterprise**: Enterprise Edition transit router
   * 
   * @example
   * Basic
   */
  transitRouterType?: string;
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
   * Test firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      currentPage: 'CurrentPage',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      memberUid: 'MemberUid',
      networkInstanceId: 'NetworkInstanceId',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      transitRouterType: 'TransitRouterType',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      currentPage: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      memberUid: 'string',
      networkInstanceId: 'string',
      ownerId: 'string',
      pageSize: 'string',
      regionNo: 'string',
      routeMode: 'string',
      transitRouterType: 'string',
      vpcFirewallId: 'string',
      vpcFirewallName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

