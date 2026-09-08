// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempUpgradeCenBandwidthPackageSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The temporarily increased peak bandwidth. Unit: Mbit/s.
   * 
   * Valid values: **2** to **10000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The instance ID of the bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * cenbwp-y08yosedeqlpua****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The expiration time of the temporary bandwidth upgrade.
   * 
   * The time is expressed in the ISO 8601 standard in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-07-24T13:00:52Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      endTime: 'EndTime',
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
      endTime: 'string',
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

