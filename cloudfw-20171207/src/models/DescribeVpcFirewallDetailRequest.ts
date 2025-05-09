// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The natural language of the request and response. Valid values:
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
   * The ID of the local VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  localVpcId?: string;
  /**
   * @remarks
   * The ID of the peer VPC.
   * 
   * @example
   * vpc-90rq0anm6t8vbwbo****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * >  You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      localVpcId: 'LocalVpcId',
      peerVpcId: 'PeerVpcId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      localVpcId: 'string',
      peerVpcId: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

