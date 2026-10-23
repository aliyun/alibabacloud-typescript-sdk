// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new category of the system cloud disk. Valid values:
   * 
   * - cloud_efficiency: ultra cloud disk
   * 
   * - cloud_ssd: standard SSD
   * 
   * > This parameter is valid only when you upgrade a [phased-out instance type](https://help.aliyun.com/document_detail/55263.html) to an [available instance family](https://help.aliyun.com/document_detail/25378.html) and change a non-I/O optimized instance type to an I/O optimized instance type.
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
   * > This parameter is in invitational preview and is not available.
   * 
   * @example
   * null
   */
  endTime?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available.
   * 
   * @example
   * null
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available.
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
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  category?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  diskId?: string;
  /**
   * @remarks
   * > This parameter is not available.
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
   * Specifies whether to allow cross-cluster network type upgrades. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
   * 
   * When the `AllowMigrateAcrossZone` parameter is set to true, take note of the following precautions after you upgrade the instance based on the returned information:
   * 
   * Classic network instances:
   *     
   * * For [phased-out network types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is changed to an I/O optimized instance, the private IP address, disk device names, and software license codes of the instance change. For Linux instances, basic cloud disks (`cloud`) are identified as **xvda** or **xvdb**, and ultra cloud disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as **vda** or **vdb**.
   *     
   * * For [available instance families](https://help.aliyun.com/document_detail/25378.html), the private IP address of the instance changes.
   * 
   * VPC instances: For [phased-out network types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is changed to an I/O optimized instance, the disk device names and software license codes of the instance change. For Linux instances, basic cloud disks (`cloud`) are identified as **xvda** or **xvdb**, and ultra cloud disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as **vda** or **vdb**.
   * 
   * @example
   * false
   */
  allowMigrateAcrossZone?: boolean;
  /**
   * @remarks
   * Specifies whether to submit an asynchronous request. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * > This parameter is not available.
   */
  disk?: ModifyInstanceSpecRequestDisk[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - true: performs a dry run and does not modify the instance type or Internet bandwidth of the instance. The system checks whether required parameters are specified, the request format, service limits, and ECS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - false (default): sends a normal request. After the check succeeds, the instance type and Internet bandwidth of the instance are directly modified.
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
   * The target instance type of the instance. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html). You can also call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to obtain the latest instance type list.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * - If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - If the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `InternetMaxBandwidthOut`. Default value: the value of `InternetMaxBandwidthOut`.
   * 
   * > The peak inbound and outbound bandwidth values in the **pay-by-traffic** billing mode are upper limits and are not guaranteed service level indicators. When resource contention occurs, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** billing mode.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * > The peak inbound and outbound bandwidth values in the **pay-by-traffic** billing mode are upper limits and are not guaranteed service level indicators. When resource contention occurs, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** billing mode.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * > This parameter is not available.
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

