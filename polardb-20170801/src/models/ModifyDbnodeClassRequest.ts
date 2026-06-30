// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Uses coupons.
   * * false: Does not use coupons.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token is case-sensitive and can contain a maximum of 64 ASCII characters.
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
   * The node type. Set this parameter to DLNode only when you change the node specifications of an AI node.
   * 
   * @example
   * DLNode
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The type of the specification change. Valid values: 
   * * **Upgrade**: upgrades the specifications.
   * * **Downgrade**: downgrades the specifications.
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
   * The latest start time of the scheduled specification change task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The latest time must be at least 30 minutes later than the start time.
   * > * If `PlannedStartTime` is set but this parameter is not specified, the latest time defaults to `start time + 30 minutes`. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The planned transient disconnection time.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest start time of the scheduled specification change task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * This parameter takes effect when `ModifyType` is set to `Upgrade` or `Downgrade`.
   * > * The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the valid range for the start time is from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * > * If this parameter is left empty, the specification change task is immediately executed.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The coupon code. If this parameter is not specified, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The cluster sub-series. Valid values:
   * 
   * - **normal_exclusive**: Dedicated
   * 
   * - **normal_general**: General-purpose
   * 
   * This parameter is required when you change specifications between Dedicated and General-purpose.
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

