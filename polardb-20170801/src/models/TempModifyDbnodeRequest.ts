// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempModifyDBNodeRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the node to be upgraded or added.
   * 
   * > - When you add a node, the node specifications must be the same as those of the existing nodes.
   * > - For the specifications of existing cluster nodes, see [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html).
   * 
   * @example
   * polar.mysql.x4.medium
   */
  targetClass?: string;
  /**
   * @remarks
   * The zone of the node to be added. The zone must be the same as that of the existing nodes.
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
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * true (default): Uses coupons.
   * * false: Does not use coupons.
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can contain only ASCII characters. The token can be up to 64 characters in length.
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
   * The information about the node to be upgraded or added.
   * 
   * This parameter is required.
   */
  DBNode?: TempModifyDBNodeRequestDBNode[];
  /**
   * @remarks
   * The change type. The value is fixed as **TempUpgrade**.
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
   * - **Modify**: temporarily upgrades specifications.
   * - **Add**: temporarily adds nodes.
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
   * The restore time for the temporary upgrade. Specify the time in the YYYY-MM-DD hh:mm:ss format.
   * 
   * > The restore time cannot be earlier than 1 hour after the current time or later than 1 day before the cluster expiration time.
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

