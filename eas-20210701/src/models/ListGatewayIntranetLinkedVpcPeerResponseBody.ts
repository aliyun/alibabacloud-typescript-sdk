// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList } from "./ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList";


export class ListGatewayIntranetLinkedVpcPeerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of VPC peers.
   */
  peerVpcList?: ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      peerVpcList: 'PeerVpcList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      peerVpcList: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.peerVpcList)) {
      $dara.Model.validateArray(this.peerVpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

