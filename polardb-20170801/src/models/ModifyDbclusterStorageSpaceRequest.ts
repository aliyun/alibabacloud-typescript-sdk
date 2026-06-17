// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterStorageSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * 
   * - `true` (default): A coupon is automatically used.
   * 
   * - `false`: A coupon is not used.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique for each request, case-sensitive, and a maximum of 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies the cloud provider of the instance.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies the latest time to start the scheduled task. Specify the time in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the latest start time is `PlannedStartTime + 30 minutes` by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * Specifies the earliest time to start the scheduled task. Specify the time in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * > - This parameter takes effect only when `ModifyType` is set to `Upgrade`.
   * >
   * > - The start time can be a point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can set the start time to a value that is between `2021-01-14T09:00:00Z` and `2021-01-15T09:00:00Z`.
   * >
   * > - If you leave this parameter empty, the task runs immediately.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * Specifies the promotion code. If you do not specify this parameter, the system uses the default coupon.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies the new storage space. Unit: GB.
   * 
   * > For PolarDB for MySQL Standard Edition clusters, the storage space must be between 20 GB and 32,000 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * Specifies the subcategory of the cluster. Valid values:
   * 
   * - **normal_exclusive**: dedicated
   * 
   * - **normal_general**: general-purpose
   * 
   * @example
   * normal_general
   */
  subCategory?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      cloudProvider: 'CloudProvider',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSpace: 'StorageSpace',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      cloudProvider: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      promotionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSpace: 'number',
      subCategory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

