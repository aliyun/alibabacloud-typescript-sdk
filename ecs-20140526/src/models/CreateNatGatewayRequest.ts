// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNatGatewayRequestBandwidthPackage } from "./CreateNatGatewayRequestBandwidthPackage";


export class CreateNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bandwidthPackage?: CreateNatGatewayRequestBandwidthPackage[];
  clientToken?: string;
  description?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: { 'type': 'array', 'itemType': CreateNatGatewayRequestBandwidthPackage },
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthPackage)) {
      $dara.Model.validateArray(this.bandwidthPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

