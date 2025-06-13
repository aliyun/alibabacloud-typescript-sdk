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

