// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBandwidthPackageIpsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bandwidthPackageId?: string;
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  removedIpAddresses?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removedIpAddresses: 'RemovedIpAddresses',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removedIpAddresses: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.removedIpAddresses)) {
      $dara.Model.validateArray(this.removedIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

