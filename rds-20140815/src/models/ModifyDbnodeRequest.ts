// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * mysql.n2.medium.xc
   */
  classCode?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rn-6256r4a87xvv7****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'classCode',
      nodeId: 'nodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay for the order.
   * Valid values:
   * 
   * 1. **true**: Automatic payment is enabled. Make sure that your account balance is sufficient.
   * 
   * 1. **false**: Only an order is generated and no payment is made.
   * 
   * 
   * 
   * 
   * > Default value: true. If your payment method has an insufficient balance, you can set this parameter to false. In this case, an unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1k8s41l2o52****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new instance storage capacity. Unit: GB. For details, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The node information.
   * > This parameter applies to ApsaraDB RDS for MySQL Cluster Edition instances.
   */
  DBNode?: ModifyDBNodeRequestDBNode[];
  /**
   * @remarks
   * Specifies whether to perform a precheck before the node modifications. Valid values:
   * * **true**: A precheck is performed, but the modifications are not applied. The precheck includes checks on request parameters, request format, service limits, and inventory.
   * * **false**: A normal request is sent, and the modifications are directly applied after the precheck is passed (default).
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The effective period. Valid values:
   * * **Immediate** (default): The modifications immediately take effect.
   * * **MaintainTime**: The modifications take effect within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to asynchronously apply the modifications. Valid values:
   * * **true**: Only an order is generated, and the modifications are asynchronously applied (default).
   * * **false**: The modifications are synchronously applied after the precheck is passed.
   * 
   * > Default value: true. The modifications are asynchronously applied. If you set this parameter to false, the modifications are synchronously applied, and the API response time is relatively long.
   * 
   * @example
   * true
   */
  produceAsync?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNode: 'DBNode',
      dryRun: 'DryRun',
      effectiveTime: 'EffectiveTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      produceAsync: 'ProduceAsync',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      DBInstanceStorageType: 'string',
      DBNode: { 'type': 'array', 'itemType': ModifyDBNodeRequestDBNode },
      dryRun: 'boolean',
      effectiveTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      produceAsync: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

