// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * Settings for the enabling status of the virtual private cloud (VPC) firewall after it is created. Valid values:
   * 
   * - **open** (default): Protection is automatically enabled after the VPC firewall is created.
   * 
   * - **close**: Protection is not automatically enabled after the VPC firewall is created. You can invoke the [ModifyVpcFirewallSwitchStatus](https://help.aliyun.com/document_detail/342935.html) operation to enable protection.
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  firewallSwitch?: string;
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
   * The CIDR block list of the local VPC, in JSON format. This parameter contains the following fields:
   * 
   * - **RouteTableId**: the route table ID of the local VPC.
   * - **RouteEntryList**: specified in JSON format. This field contains DestinationCidr (the destination CIDR block of the local VPC) and NextHopInstanceId (the next hop instance ID of the local VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  localVpcCidrTableList?: string;
  /**
   * @remarks
   * The instance ID of the local VPC.
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
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  localVpcRegion?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The CIDR block list of the peer VPC, in JSON format. This parameter contains the following fields:
   * - **RouteTableId**: the route table ID of the peer VPC.
   * - **RouteEntryList**: specified in JSON format. This field contains DestinationCidr (the destination CIDR block of the peer VPC) and NextHopInstanceId (the next hop instance ID of the peer VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  peerVpcCidrTableList?: string;
  /**
   * @remarks
   * The instance ID of the peer VPC.
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
   * > For more information about the regions supported by Cloud Firewall, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  peerVpcRegion?: string;
  /**
   * @remarks
   * The instance name of the virtual private cloud (VPC) firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * test-vpc-firewall
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

