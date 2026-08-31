// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new category of the system disk. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * > This parameter is valid only when you upgrade from a [retired instance type](https://help.aliyun.com/document_detail/55263.html) to a [currently available instance family](https://help.aliyun.com/document_detail/25378.html) and change a non-I/O optimized instance to an I/O optimized instance.
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
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  category?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  diskId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
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
   * Specifies whether to automatically complete automatic payment when you upgrade the instance type. Valid values:
   * 
   * - true: Automatic payment is automatically completed.
   * - false: An order is created but automatic payment is not completed.
   * 
   * Default value: true.
   * > - If you set AutoPay to true, make sure that your account has a sufficient payment method balance. Otherwise, an abnormal order is generated, and you can only cancel the order.
   * > - If your payment method balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can logon to the ECS console to pay for the order.
   * > - When `OperatorType` is set to `downgrade`, the `AutoPay` parameter is ignored.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  disk?: ModifyPrepayInstanceSpecRequestDisk[];
  /**
   * @remarks
   * The end time of the temporary instance type change. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
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
   * The target instance type for the Upgrade/Downgrade. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html) or invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.g5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to support cross-cluster Upgrade/Downgrade of instance types. Valid values:
   * - true: Cross-cluster instance type changes are supported.
   * - false: Cross-cluster instance type changes are not supported.
   * 
   * Default value: false.
   * 
   * When `MigrateAcrossZone` is set to `true`, take note of the following items after you upgrade the Elastic Compute Service instance based on the response:
   * 
   * VPC-type instances: For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is changed to an I/O optimized instance, the disk device names and software authorization codes of the server change. For Linux instances, basic disks (cloud) are identified as xvda or xvdb. Ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vda or vdb. This parameter is used for optimization of cross-cluster migration.
   * 
   * @example
   * false
   */
  migrateAcrossZone?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  modifyMode?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * > This parameter is optional. The system can automatically determine whether the operation is an upgrade or a downgrade. If you upload this parameter, follow the rules below.
   * 
   * - upgrade: upgrades the instance type. Make sure that your account has a sufficient payment method balance.
   * 
   * - downgrade: downgrades the instance type. When the instance type specified by `InstanceType` is lower than the current instance type, set `OperatorType` to `downgrade`.
   * 
   * > For precautions about upgrading or downgrading instance types, see the operation description section above.
   * 
   * @example
   * upgrade
   */
  operatorType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The restart time of the instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
  /**
   * @remarks
   * Specifies whether to immediately restart the instance after the instance type is changed. Valid values:
   * 
   * - true: The instance is immediately restarted.
   * - false: The instance is not immediately restarted.
   * 
   * Default value: false.
   * 
   * > If the instance is in the **Stopped** state, the instance remains stopped even if you set `RebootWhenFinished` to `true`. No operation is performed.
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

