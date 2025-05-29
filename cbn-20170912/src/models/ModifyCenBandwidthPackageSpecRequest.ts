// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenBandwidthPackageSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The new maximum bandwidth value of the bandwidth plan. Unit: Mbit/s.
   * 
   * Valid values: **2** to **10000**.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * cenbwp-4c2zaavbvh5x****
   */
  cenBandwidthPackageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
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

