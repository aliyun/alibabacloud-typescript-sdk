// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * 
   * - `true` (default): A coupon is automatically applied.
   * 
   * - `false`: A coupon is not applied.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique across requests. It is case-sensitive and can be up to 64 ASCII characters long.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cloud provider of the instance.
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
  /**
   * @remarks
   * The target node specifications for all nodes in the cluster. For more information, see [compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * 
   * This parameter is required.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeTargetClass?: string;
  /**
   * @remarks
   * To modify the specifications of an AI node, you must set this parameter to `DLNode`.
   * 
   * @example
   * DLNode
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The modification type. Valid values:
   * 
   * - **Upgrade**: Upgrades the node specifications.
   * 
   * - **Downgrade**: Downgrades the node specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but omit this parameter, the latest start time defaults to `PlannedStartTime + 30 minutes`. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The planned time for a transient disconnection. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled upgrade or downgrade task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - This parameter is valid only when `ModifyType` is set to `Upgrade` or `Downgrade`.
   * >
   * > - The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can set the start time to a value in the range from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >
   * > - If you leave this parameter empty, the task is immediately executed.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The coupon code. If you omit this parameter, the system applies the default coupon.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subcategory of the cluster. Valid values:
   * 
   * - **normal_exclusive**: dedicated specifications
   * 
   * - **normal_general**: general-purpose specifications
   * 
   * This parameter is required when switching between dedicated and general-purpose specifications.
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
      DBNodeTargetClass: 'DBNodeTargetClass',
      DBNodeType: 'DBNodeType',
      modifyType: 'ModifyType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedFlashingOffTime: 'PlannedFlashingOffTime',
      plannedStartTime: 'PlannedStartTime',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      cloudProvider: 'string',
      DBClusterId: 'string',
      DBNodeTargetClass: 'string',
      DBNodeType: 'string',
      modifyType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedFlashingOffTime: 'string',
      plannedStartTime: 'string',
      promotionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

