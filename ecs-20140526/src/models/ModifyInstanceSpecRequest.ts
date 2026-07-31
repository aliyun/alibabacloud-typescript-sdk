// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new system disk category. Valid values:
   * 
   * @example
   * cloud_ssd
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

export class ModifyInstanceSpecRequestTemporary extends $dara.Model {
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  endTime?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      internetMaxBandwidthOut: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecRequestDisk extends $dara.Model {
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

export class ModifyInstanceSpecRequest extends $dara.Model {
  systemDisk?: ModifyInstanceSpecRequestSystemDisk;
  temporary?: ModifyInstanceSpecRequestTemporary;
  /**
   * @remarks
   * Specifies whether cross-cluster instance type upgrades are supported.
   * 
   * @example
   * false
   */
  allowMigrateAcrossZone?: boolean;
  /**
   * @remarks
   * Specifies whether to submit an asynchronous request. Valid values:
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  disk?: ModifyInstanceSpecRequestDisk[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target instance type of the instance. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s (Megabit per second). Valid values:
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s (Megabit per second). Valid values: 0 to 100.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      temporary: 'Temporary',
      allowMigrateAcrossZone: 'AllowMigrateAcrossZone',
      async: 'Async',
      clientToken: 'ClientToken',
      disk: 'Disk',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: ModifyInstanceSpecRequestSystemDisk,
      temporary: ModifyInstanceSpecRequestTemporary,
      allowMigrateAcrossZone: 'boolean',
      async: 'boolean',
      clientToken: 'string',
      disk: { 'type': 'array', 'itemType': ModifyInstanceSpecRequestDisk },
      dryRun: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(this.temporary && typeof (this.temporary as any).validate === 'function') {
      (this.temporary as any).validate();
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

