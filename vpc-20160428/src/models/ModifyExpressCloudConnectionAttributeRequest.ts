// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressCloudConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The local BGP autonomous system (AS) number to be configured on the Smart Access Gateway device.
   * 
   * @example
   * sag-ejfge***
   */
  bgpAs?: string;
  /**
   * @remarks
   * The cloud-side IP address used for peering with the Smart Access Gateway device.
   * 
   * @example
   * ``172.16.**.**``
   */
  ceIp?: string;
  /**
   * @remarks
   * The description of the Express Cloud Connection instance.
   * 
   * @example
   * ECC
   */
  description?: string;
  /**
   * @remarks
   * The instance ID of the Express Cloud Connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecc-bp1t9osmuln*******
   */
  eccId?: string;
  /**
   * @remarks
   * The name of the Express Cloud Connection instance.
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The local IP address of the Smart Access Gateway device used for peering with the cloud.
   * 
   * @example
   * ``10.10.**.**``
   */
  peIp?: string;
  /**
   * @remarks
   * The region ID of the Express Cloud Connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bgpAs: 'BgpAs',
      ceIp: 'CeIp',
      description: 'Description',
      eccId: 'EccId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peIp: 'PeIp',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpAs: 'string',
      ceIp: 'string',
      description: 'string',
      eccId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peIp: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

