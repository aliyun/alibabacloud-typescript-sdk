// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs extends $dara.Model {
  /**
   * @remarks
   * The region where the VPC peer resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  status?: string;
  /**
   * @remarks
   * The ID of the VPC peer.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      status: 'string',
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

export class ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList extends $dara.Model {
  /**
   * @remarks
   * The IDs of the VPC peers.
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
   * The VPC peers.
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

