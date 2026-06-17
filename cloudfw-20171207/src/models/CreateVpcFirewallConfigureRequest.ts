// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the VPC firewall after it is created. Valid values:
   * 
   * - **open** (default): The VPC firewall is automatically enabled after it is created.
   * 
   * - **close**: The VPC firewall is not automatically enabled after it is created. To enable the firewall, call the [ModifyVpcFirewallSwitchStatus](https://help.aliyun.com/document_detail/342935.html) operation.
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
   * The CIDR blocks of the local VPC. The value is a JSON string that contains the following parameters:
   * 
   * - **RouteTableId**: The ID of the route table for the local VPC.
   * 
   * - RouteEntryList: The route entries. The value is a JSON string that contains DestinationCidr (the destination CIDR block of the local VPC) and **NextHopInstanceId** (the ID of the next hop instance of the local VPC).
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
   * > For more information about the regions where Cloud Firewall is available, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  localVpcRegion?: string;
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
   * The CIDR blocks of the peer VPC. The value is a JSON string that contains the following parameters:
   * 
   * - **RouteTableId**: The ID of the route table for the peer VPC.
   * 
   * - RouteEntryList: The route entries. The value is a JSON string that contains DestinationCidr (the destination CIDR block of the peer VPC) and **NextHopInstanceId** (the ID of the next hop instance of the peer VPC).
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
   * 
   * > For more information about the regions where Cloud Firewall is available, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
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

