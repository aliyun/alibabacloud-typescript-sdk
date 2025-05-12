// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs } from "./CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs";


export class CreateGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of VPC peers.
   */
  peerVpcs?: CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs[];
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
      peerVpcs: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcs: { 'type': 'array', 'itemType': CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs },
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

