// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete automatic payment. Valid values:
   * 
   * 1. **true**: Automatic payment is automatically completed. Make sure that your account balance is sufficient.
   * 
   * 1. **false**: An order is generated but no payment is made.
   * 
   * 
   * 
   * 
   * > Default value: true. If your payment method has insufficient balance, set AutoPay to false. In this case, an unpaid order is generated. You can log on to the ApsaraDB RDS console to complete automatic payment.
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
   * * **cloud_essd**: PL1 ESSD
   * * **cloud_essd2**: PL2 ESSD
   * * **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The node information.
   * > This parameter is used for MySQL Cluster Edition instances.
   */
  DBNodeShrink?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this node modification. Valid values:
   * * **true**: A dry run is performed without executing the modification. The system checks items such as request parameters, request format, business limits, and inventory.
   * * **false**: A request is sent. After the request passes the check, the modification is directly executed. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The effective period. Valid values:
   * * **Immediate** (default): The modification takes effect immediately.
   * * **MaintainTime**: The modification takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to asynchronously execute the provisioning. Valid values:
   * * **true**: The request only submits an order, and the modification is asynchronously executed. This is the default value.
   * * **false**: After the request passes the check, the modification is directly executed.
   * 
   * > Default value: true. The modification is asynchronously executed. If you set this parameter to false, the modification is synchronously executed, and the response time is relatively longer.
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
      DBNodeShrink: 'DBNode',
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
      DBNodeShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

