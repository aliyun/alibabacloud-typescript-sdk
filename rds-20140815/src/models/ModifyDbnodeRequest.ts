// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBNodeRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The specification information about the node.
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
   * rn-6256r4a87xvv7he5p
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
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * 1.  **true**: automatically completes the payment. Make sure that your account balance is sufficient.
   * 2.  **false**: does not automatically complete the payment. An unpaid order is generated.
   * 
   * >  The default value is true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to pay for the order.
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
   * The new storage capacity of the instance. Unit: GB For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd**: performance level 1 (PL1) enhanced SSD (ESSD)
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The information about the node.
   * 
   * >  This parameter is used for ApsaraDB RDS for MySQL instances that run RDS Cluster Edition.
   */
  DBNode?: ModifyDBNodeRequestDBNode[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values: Valid values:
   * 
   * *   **true**: performs a dry run and does not perform the actual request. The system checks items such as the request parameters, request format, service limits, and available resources.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when you want the change to take effect. Valid values:
   * 
   * *   **Immediate** (default): The change immediately takes effect.
   * *   **MaintainTime**: The effective time is within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to asynchronously perform the operation. Valid values:
   * 
   * *   **true** (default): sends only the order. The operation is asynchronously performed.
   * *   **false**: sends the request. After the request passes the check, the operation is directly performed.
   * 
   * >  The default value is true, which indicates that the change operation is asynchronously performed. If you set this parameter to false, the change operation is simultaneously performed. This prolongs the response time of the operation.
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

