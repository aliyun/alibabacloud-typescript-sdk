// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs } from "./ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs";


export class ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPC peers.
   */
  peerVpcs?: ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcs: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcs: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.peerVpcs)) {
      $dara.Model.validateArray(this.peerVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

