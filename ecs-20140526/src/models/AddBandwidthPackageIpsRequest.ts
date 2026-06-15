// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBandwidthPackageIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth package.
   * 
   * This parameter is required.
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * A token that you can specify to ensure the idempotency of the request. The token must be unique across requests. It can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of public IP addresses to add to the bandwidth package. Valid values: 1 to 256.
   * 
   * This parameter is required.
   */
  ipCount?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the bandwidth package is located. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      ipCount: 'IpCount',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      ipCount: 'string',
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

