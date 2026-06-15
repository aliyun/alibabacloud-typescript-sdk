// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBandwidthPackageSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The new bandwidth of the bandwidth package. Unit: Mbit/s. The value must be an integer.
   * 
   * This parameter is required.
   */
  bandwidth?: string;
  /**
   * @remarks
   * The ID of the bandwidth package.
   * 
   * This parameter is required.
   */
  bandwidthPackageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the bandwidth package is located. You can call the `DescribeRegions` operation to query the most recent region list.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      bandwidthPackageId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

