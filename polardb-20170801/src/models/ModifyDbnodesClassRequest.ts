// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodesClassRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node.
   * > If this parameter is specified, DBNode.N.TargetClass is required. N is an integer starting from 1, and the maximum value is 16 minus the current number of nodes.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The specifications of the node to be modified. For more information about node specifications, see [Compute node specifications](https://help.aliyun.com/document_detail/102542.html). 
   * 
   * > If this parameter is specified, DBNode.N.DBNodeId is required. N is an integer starting from 1, and the maximum value is 16 minus the current number of nodes.
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
   * Specifies whether to automatically use a coupon. Valid values:
   * * true (default): Uses the coupon.
   * * false: Does not use the coupon.
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and is case-sensitive. It can be up to 64 ASCII characters in length.
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
   * The list of cluster nodes. If the cluster contains a node with HotReplicaMode set to ON, you must include all DBNodes (writer and reader nodes) in the same request, and the TargetClass of each node must be identical. Usage notes: HotReplicaMode scenario constraints: If the cluster contains a node with HotReplicaMode set to ON, you must include all DBNodes (writer and reader nodes) in the same request, and their TargetClass values must be identical.
   * 
   * This parameter is required.
   * 
   * @example
   * []
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
   * The latest time to start the scheduled task. The format is `YYYY-MM-DDThh:mm:ssZ` (UTC).
   * > * The latest time must be at least 30 minutes later than the start time.
   * > * If `PlannedStartTime` is specified but this parameter is not, the latest time to start the task defaults to the start time plus 30 minutes. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task will start at `2021-01-14T09:30:00Z` at the latest.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The planned transient disconnection time.
   * 
   * The time follows the ISO 8601 standard in the UTC time zone. The format is YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedFlashingOffTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled configuration upgrade task. The format is `YYYY-MM-DDThh:mm:ssZ` (UTC).
   * > * This parameter takes effect only when `ModifyType` is set to `Upgrade`.
   * > * The start time can be any time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the allowed start time ranges from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * > * If this parameter is left empty, the configuration upgrade task is executed immediately by default.
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

