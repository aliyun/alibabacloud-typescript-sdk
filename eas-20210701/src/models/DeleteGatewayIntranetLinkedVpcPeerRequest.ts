// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs } from "./DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs";


export class DeleteGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC peer.
   */
  peerVpcs?: DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs[];
  /**
   * @remarks
   * The ID of the associated VPC. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
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
      peerVpcs: { 'type': 'array', 'itemType': DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs },
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

