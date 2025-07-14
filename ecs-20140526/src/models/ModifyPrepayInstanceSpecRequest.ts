// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: utra disk
   * *   cloud_ssd: standard SSD
   * 
   * >  This parameter takes effect on an instance only when you change from a [retired instance type](https://help.aliyun.com/document_detail/55263.html) to an instance type in an [instance family available for purchase](https://help.aliyun.com/document_detail/25378.html) and upgrade the instance from a non-I/O optimized instance type to an I/O optimized instance type.
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
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  category?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  diskId?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
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
   * *   true: The payment is automatically completed.
   * *   false: An order is generated but no payment is made.
   * 
   * Default value: true.
   * 
   * > 
   * 
   * *   Make sure that your account balance is sufficient. Otherwise, your order becomes invalid and must be canceled.
   * 
   * *   If your account balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the ECS console to pay for the order.
   * 
   * *   If you set `OperatorType` to `downgrade`, `AutoPay` is ignored.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotency of the request. You can use the client to generate the value, but make sure that the value is unique among different requests. This value allows only ASCII characters and is up to 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  disk?: ModifyPrepayInstanceSpecRequestDisk[];
  /**
   * @remarks
   * The end time of the temporary change. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
   * The new instance type. For information about available instance types, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation.
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
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * When you set `MigrateAcrossZone` to `true` and you upgrade the instance type of an instance based on the returned information, take note of the following items:
   * 
   * Instance that resides in the classic network:
   * 
   * *   For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\\* such as xvda and xvdb, and ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vd\\* such as vda and vdb.
   * *   For [instance families available for purchase](https://help.aliyun.com/document_detail/25378.html), when the instance type of an instance is changed, the private IP address of the instance changes.
   * 
   * Instance that resides in a virtual private cloud (VPC): For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\\* such as xvda and xvdb, and ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vd\\* such as vda and vdb.
   * 
   * @example
   * false
   */
  migrateAcrossZone?: boolean;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  modifyMode?: string;
  /**
   * @remarks
   * The type of the change to the instance. Valid values:
   * 
   * >  This parameter is optional. The system can automatically determine whether the instance change is an upgrade or a downgrade. If you want to specify this parameter, refer to the following valid values of the parameter.
   * 
   * *   upgrade: upgrades the instance type. Make sure that the balance in your account is sufficient.
   * *   downgrade: downgrades the instance type. When the new instance type specified by the `InstanceType` parameter has lower specifications than the current instance type, set `OperatorType` to downgrade.
   * 
   * >  You can refer to the preceding usage notes on how to upgrade or downgrade the instance type.
   * 
   * @example
   * upgrade
   */
  operatorType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The restart time of the instance. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
  /**
   * @remarks
   * Specifies whether to restart the instance immediately after the instance type is changed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  If the instance is in the **Stopped** state, the instance remains in the Stopped state and no operations are performed, regardless of whether `RebootWhenFinished` is set to true.
   * 
   * @example
   * false
   */
  rebootWhenFinished?: boolean;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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

