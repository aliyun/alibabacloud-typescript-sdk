// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempModifyDBNodeRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the node to upgrade or add.
   * 
   * > - When you add a node, the node specifications must be the same as the specifications of the existing nodes.
   * >
   * > - For more information about the specifications of existing cluster nodes, see [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html).
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  /**
   * @remarks
   * The zone for the new node. The zone must be the same as the zone of the existing nodes.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      targetClass: 'TargetClass',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetClass: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempModifyDBNodeRequest extends $dara.Model {
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique token for each request. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about the nodes to upgrade or add.
   * 
   * This parameter is required.
   */
  DBNode?: TempModifyDBNodeRequestDBNode[];
  /**
   * @remarks
   * The modification type. The value is fixed to **TempUpgrade**.
   * 
   * This parameter is required.
   * 
   * @example
   * TempUpgrade
   */
  modifyType?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Modify**: temporary upgrade
   * 
   * - **Add**: temporarily add a node
   * 
   * This parameter is required.
   * 
   * @example
   * Modify
   */
  operationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time to revert the temporary upgrade. The format is YYYY-MM-DD hh:mm:ss.
   * 
   * > The revert time must be at least 1 hour later than the current time. It must also be at least 1 day before the cluster expires.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-23 18:16:00
   */
  restoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNode: 'DBNode',
      modifyType: 'ModifyType',
      operationType: 'OperationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      DBClusterId: 'string',
      DBNode: { 'type': 'array', 'itemType': TempModifyDBNodeRequestDBNode },
      modifyType: 'string',
      operationType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      promotionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
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

