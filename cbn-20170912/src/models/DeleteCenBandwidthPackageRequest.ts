// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCenBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * cenbwp-4c2zaavbvh5f42****
   */
  cenBandwidthPackageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

