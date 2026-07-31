// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new category of the system disk. Valid values:
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
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  category?: string;
  /**
   * @remarks
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  diskId?: string;
  /**
   * @remarks
   * >This parameter is not publicly available.
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
   * Specifies whether automatic payment is enabled when you upgrade the instance type. Valid values:
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * >This parameter is not publicly available.
   */
  disk?: ModifyPrepayInstanceSpecRequestDisk[];
  /**
   * @remarks
   * The end time of the temporary specification change. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
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
   * Specifies whether cross-cluster instance type upgrades are supported. Valid values:
   * 
   * @example
   * false
   */
  migrateAcrossZone?: boolean;
  /**
   * @remarks
   * >This parameter is not publicly available.
   * 
   * @example
   * null
   */
  modifyMode?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
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
   * Specifies whether to immediately restart the instance after the specification change is complete. Valid values:
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

