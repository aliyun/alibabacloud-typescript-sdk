// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * * true (default): Uses the coupon.
   * * false: Does not use the coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and is case-sensitive. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cloud service provider of the instance.
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
   * The target specifications for all nodes. For more information, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * 
   * This parameter is required.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeTargetClass?: string;
  /**
   * @remarks
   * The node type. Set the value to DLNode only when you modify the node specifications of an AI node.
   * 
   * @example
   * DLNode
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The modification type. Valid values: 
   * * **Upgrade**: Upgrades the specifications.
   * * **Downgrade**: Downgrades the specifications.
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
   * The latest time to start the scheduled task. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * > * The latest time must be at least 30 minutes later than the start time.
   * > * If `PlannedStartTime` is specified but this parameter is left empty, the latest time to start the task defaults to 30 minutes after the start time. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task starts at `2021-01-14T09:30:00Z` at the latest.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The planned transient disconnection time.
   * 
   * The time follows the ISO 8601 standard in the `YYYY-MM-DDTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled upgrade or downgrade task within the specified time window. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * > * This parameter takes effect only when `ModifyType` is set to `Upgrade` or `Downgrade`.
   * >* The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the allowed start time ranges from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >* If this parameter is left empty, the upgrade task is executed immediately by default.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The coupon code. If this parameter is left empty, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The sub-edition of the cluster. Valid values:
   * 
   * - **normal_exclusive**: Dedicated.
   * 
   * - **normal_general**: General-purpose.
   * 
   * This parameter is required when you change the specifications between Dedicated and General-purpose.
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

