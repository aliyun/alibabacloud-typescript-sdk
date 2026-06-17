// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodesClassRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node.
   * 
   * > If you specify this parameter, you must also specify DBNode.N.TargetClass. N represents the index of the node in the request, starting from 1.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The target specifications of the node. For more information about node specifications, see [compute node specifications](https://help.aliyun.com/document_detail/102542.html).
   * 
   * > If you specify this parameter, you must also specify DBNode.N.DBNodeId. N represents the index of the node in the request, starting from 1.
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
   * Specifies whether to automatically apply a coupon. Valid values:
   * 
   * - true (Default): A coupon is automatically applied.
   * 
   * - false: A coupon is not applied.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This token must be unique for each request and must be a case-sensitive string of up to 64 ASCII characters.
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
   * The list of cluster nodes.
   * 
   * This parameter is required.
   */
  DBNode?: ModifyDBNodesClassRequestDBNode[];
  /**
   * @remarks
   * The modification type. Valid values:
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
   * The latest time to begin the scheduled task. Specify the time in UTC using the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the task starts within 30 minutes of the `PlannedStartTime`. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task will start by `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The planned time for the transient disconnection.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest time to begin the scheduled upgrade of the node specifications. Specify the time in UTC using the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * > - This parameter takes effect only when `ModifyType` is set to `Upgrade`.
   * >
   * > - The specified time must be within the next 24 hours.
   * >
   * > - If this parameter is not specified, the upgrade task runs immediately.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The coupon code. If you do not specify this parameter, a default coupon is applied.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The sub-category of the cluster. Valid values:
   * 
   * - **normal_exclusive**: dedicated specifications
   * 
   * - **normal_general**: general-purpose specifications
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

