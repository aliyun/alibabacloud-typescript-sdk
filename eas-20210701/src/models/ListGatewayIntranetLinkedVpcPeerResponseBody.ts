// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs extends $dara.Model {
  /**
   * @remarks
   * The region where the peered VPC is located.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The network connectivity status of the peered VPC.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the peered VPC.
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
   * The list of peered VPC IDs.
   */
  peerVpcs?: ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs[];
  /**
   * @remarks
   * The ID of the VPC.
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
   * The list of peered VPCs.
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

