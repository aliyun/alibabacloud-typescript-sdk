// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new system disk category. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * >This parameter is valid only when you upgrade from a [retired instance type](https://help.aliyun.com/document_detail/55263.html) to a [normally sold instance family](https://help.aliyun.com/document_detail/25378.html) and upgrade a non-I/O optimized instance type to an I/O optimized instance type.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequestDisk extends $dara.Model {
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  category?: string;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  diskId?: string;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayInstanceSpecRequest extends $dara.Model {
  systemDisk?: ModifyPrepayInstanceSpecRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to enable automatic payment when you upgrade the instance type. Valid values:
   * 
   * - true: enables automatic payment.
   * - false: generates the order without deducting fees.
   * 
   * Default value: true.
   * > - When automatic payment is enabled, you must ensure that your payment method balance is sufficient. Otherwise, an abnormal order is generated and can only be canceled.
   * > - If your payment method balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the ECS console to complete the payment.
   * > - If the `OperatorType` parameter is set to `downgrade`, the `AutoPay` parameter is ignored.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * >This parameter is not available.
   */
  disk?: ModifyPrepayInstanceSpecRequestDisk[];
  /**
   * @remarks
   * The end time of the temporary change. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
   * 
   * @example
   * 2018-01-01T12:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target instance type for the upgrade or downgrade. For valid values, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to allow cross-cluster instance type upgrade. Valid values:
   * - true: yes.
   * - false: no.
   * 
   * Default value: false.
   * 
   * If the `MigrateAcrossZone` parameter is set to `true` and you upgrade the ECS instance based on the returned information, take note of the following items:
   * 
   * VPC-connected instances: For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when you upgrade a non-I/O optimized instance to an I/O optimized instance, the disk device names and software authorization codes of the ECS instance change. For Linux instances, basic disks (cloud) are identified as xvda or xvdb, and ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vda or vdb.
   * 
   * @example
   * false
   */
  migrateAcrossZone?: boolean;
  /**
   * @remarks
   * >This parameter is not available.
   * 
   * @example
   * null
   */
  modifyMode?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * >You do not need to specify this parameter. The system automatically determines whether to upgrade or downgrade the instance type. If you specify this parameter, follow these rules:
   * 
   * - upgrade: upgrades the instance type. Make sure that your payment method balance is sufficient.
   * 
   * - downgrade: downgrades the instance type. If the instance type specified by `InstanceType` is lower than the current instance type, set `OperatorType` to `downgrade`.
   * 
   * >For precautions about upgrading or downgrading instance types, see the preceding operation description section.
   * 
   * @example
   * upgrade
   */
  operatorType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time to restart the instance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * [ISO 8601](https://help.aliyun.com/document_detail/25696.html)
   * 
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
  /**
   * @remarks
   * Specifies whether to immediately restart the instance after the instance type change is complete. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * Default value: false.
   * 
   * > If the instance is in the **Stopped** state, it remains in the Stopped state and no action is performed even if you set `RebootWhenFinished` to `true`.
   * 
   * @example
   * false
   */
  rebootWhenFinished?: boolean;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      disk: 'Disk',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      migrateAcrossZone: 'MigrateAcrossZone',
      modifyMode: 'ModifyMode',
      operatorType: 'OperatorType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rebootTime: 'RebootTime',
      rebootWhenFinished: 'RebootWhenFinished',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: ModifyPrepayInstanceSpecRequestSystemDisk,
      autoPay: 'boolean',
      clientToken: 'string',
      disk: { 'type': 'array', 'itemType': ModifyPrepayInstanceSpecRequestDisk },
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      migrateAcrossZone: 'boolean',
      modifyMode: 'string',
      operatorType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rebootTime: 'string',
      rebootWhenFinished: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

