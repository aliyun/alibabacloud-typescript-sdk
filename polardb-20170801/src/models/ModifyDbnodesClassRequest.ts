// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodesClassRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The cluster node ID.
   * >If this parameter is specified, DBNode.N.TargetClass is required. N is an integer that starts from 1. Maximum value: 16 minus the current number of nodes.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The specifications of the node to be changed. For more information about node specifications, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html). 
   * 
   * >If this parameter is specified, DBNode.N.DBNodeId is required. N is an integer that starts from 1. Maximum value: 16 minus the current number of nodes.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      targetClass: 'TargetClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      targetClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodesClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Uses coupons.
   * * false: Does not use coupons.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token is case-sensitive and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cloud service provider to which the instance belongs.
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
   * The list of cluster nodes.
   * 
   * This parameter is required.
   */
  DBNode?: ModifyDBNodesClassRequestDBNode[];
  /**
   * @remarks
   * The type of the specification change. Valid values:
   * 
   * - **Upgrade**: Upgrades the specifications.
   * 
   * - **Downgrade**: Downgrades the specifications.
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
   * The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The latest time must be at least 30 minutes later than the start time.
   * > * If `PlannedStartTime` is set but this parameter is not specified, the latest time to execute the task defaults to `start time + 30 minutes`. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The planned transient disconnection time.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled (executed within the target time period) specification upgrade task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * This parameter takes effect only when `ModifyType` is set to `Upgrade`.
   * > * The start time can be any time point within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the start time can range from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * > * If this parameter is left empty, the specification upgrade task is immediately executed by default.
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
      DBNode: 'DBNode',
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
      DBNode: { 'type': 'array', 'itemType': ModifyDBNodesClassRequestDBNode },
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
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

