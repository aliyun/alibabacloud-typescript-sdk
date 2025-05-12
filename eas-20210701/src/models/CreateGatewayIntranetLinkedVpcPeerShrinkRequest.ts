// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayIntranetLinkedVpcPeerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of VPC peers.
   */
  peerVpcsShrink?: string;
  /**
   * @remarks
   * The VPC ID. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcsShrink: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcsShrink: 'string',
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

