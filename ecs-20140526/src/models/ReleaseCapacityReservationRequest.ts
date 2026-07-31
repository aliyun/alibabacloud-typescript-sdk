// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseCapacityReservationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the capacity reservation.
   * 
   * This parameter is required.
   * 
   * @example
   * crp-bp67acfmxazb4****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseCapacityReservationRequest extends $dara.Model {
  privatePoolOptions?: ReleaseCapacityReservationRequestPrivatePoolOptions;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values: false. Currently, only false is supported, which indicates that the capacity reservation is directly released without a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the capacity reservation. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      privatePoolOptions: 'PrivatePoolOptions',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: ReleaseCapacityReservationRequestPrivatePoolOptions,
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

