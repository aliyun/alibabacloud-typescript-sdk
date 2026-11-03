// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallConfigureRequest extends $dara.Model {
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
   * The CIDR block information of the local VPC, in JSON format. This parameter includes the following fields:
   * 
   * - **RouteTableId**: the route table ID of the local VPC.
   * 
   * - **RouteEntryList**: a JSON array that includes DestinationCidr (the destination CIDR block of the local VPC) and NextHopInstanceId (the instance ID of the next hop for the local VPC).
   * 
   * > You can call the [DescribeVpcFirewallDetail](https://help.aliyun.com/document_detail/342892.html) operation to query the CIDR block information of the local VPC for the VPC border firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  localVpcCidrTableList?: string;
  /**
   * @remarks
   * The UID of the member account associated with the current Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The CIDR block information of the peer VPC, in JSON format. This parameter includes the following fields:
   * 
   * - **RouteTableId**: the route table ID of the peer VPC.
   * 
   * - **RouteEntryList**: a JSON array that includes DestinationCidr (the destination CIDR block of the peer VPC) and NextHopInstanceId (the instance ID of the next hop for the peer VPC).
   * 
   * > You can call the [DescribeVpcFirewallDetail](https://help.aliyun.com/document_detail/342892.html) operation to query the CIDR block information of the peer VPC for the VPC border firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]
   */
  peerVpcCidrTableList?: string;
  /**
   * @remarks
   * The instance ID of the VPC border firewall.
   * 
   * > You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance ID of the VPC border firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC border firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * test-vpc-firewall
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      localVpcCidrTableList: 'LocalVpcCidrTableList',
      memberUid: 'MemberUid',
      peerVpcCidrTableList: 'PeerVpcCidrTableList',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      localVpcCidrTableList: 'string',
      memberUid: 'string',
      peerVpcCidrTableList: 'string',
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

