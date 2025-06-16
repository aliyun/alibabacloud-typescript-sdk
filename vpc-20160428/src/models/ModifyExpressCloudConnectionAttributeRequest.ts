// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressCloudConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The BGP autonomous system number (ASN) to be configured for the Smart Access Gateway (SAG) device.
   * 
   * @example
   * sag-ejfge***
   */
  bgpAs?: string;
  /**
   * @remarks
   * The peer IP address when the SAG device is connected to the cloud.
   * 
   * @example
   * ``172.16.**.**``
   */
  ceIp?: string;
  /**
   * @remarks
   * Descriptions of ECC.
   * 
   * @example
   * ECC
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ECC instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecc-bp1t9osmuln*******
   */
  eccId?: string;
  /**
   * @remarks
   * The name of the ECC instance.
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The on-premises IP address when the SAG device is connected to the cloud.
   * 
   * @example
   * ``10.10.**.**``
   */
  peIp?: string;
  /**
   * @remarks
   * The region ID of the ECC instance.
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

