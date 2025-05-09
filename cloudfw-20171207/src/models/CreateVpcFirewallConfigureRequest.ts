// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the VPC firewall after you create the firewall. Valid values:
   * 
   * *   **open**: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
   * *   **close**: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the [ModifyVpcFirewallSwitchStatus](https://help.aliyun.com/document_detail/342935.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The CIDR blocks of the local VPC. The value is a JSON string that contains the following parameters:
   * 
   * *   **RouteTableId**: the ID of the route table for the local VPC.
   * *   **RouteEntryList**: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters. The DestinationCidr parameter indicates the destination CIDR block of the local VPC. The NextHopInstanceId parameter indicates the instance ID of the next hop for the local VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  localVpcCidrTableList?: string;
  /**
   * @remarks
   * The ID of the local VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  localVpcId?: string;
  /**
   * @remarks
   * The region ID of the local VPC.
   * 
   * >  For more information about the regions in which Cloud Firewall is available, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  localVpcRegion?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The CIDR blocks of the peer VPC. The value is a JSON string that contains the following parameters:
   * 
   * *   **RouteTableId**: the ID of the route table for the peer VPC.
   * *   **RouteEntryList**: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters. The DestinationCidr parameter indicates the destination CIDR block of the peer VPC. The NextHopInstanceId parameter indicates the instance ID of the next hop for the peer VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  peerVpcCidrTableList?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wb8vbo90rq0anm6t****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The region ID of the peer VPC.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  peerVpcRegion?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * my-vpc-firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      firewallSwitch: 'FirewallSwitch',
      lang: 'Lang',
      localVpcCidrTableList: 'LocalVpcCidrTableList',
      localVpcId: 'LocalVpcId',
      localVpcRegion: 'LocalVpcRegion',
      memberUid: 'MemberUid',
      peerVpcCidrTableList: 'PeerVpcCidrTableList',
      peerVpcId: 'PeerVpcId',
      peerVpcRegion: 'PeerVpcRegion',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallSwitch: 'string',
      lang: 'string',
      localVpcCidrTableList: 'string',
      localVpcId: 'string',
      localVpcRegion: 'string',
      memberUid: 'string',
      peerVpcCidrTableList: 'string',
      peerVpcId: 'string',
      peerVpcRegion: 'string',
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

