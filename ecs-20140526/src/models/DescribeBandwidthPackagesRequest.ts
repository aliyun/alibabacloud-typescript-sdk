// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth package.
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the NAT gateway. If specified, only bandwidth packages associated with the NAT gateway are returned.
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Starting value: 1. Default value: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the bandwidth package.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      natGatewayId: 'NatGatewayId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      natGatewayId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

