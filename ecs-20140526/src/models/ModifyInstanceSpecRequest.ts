// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * 更换系统盘类型。取值范围：
   * 
   * - cloud_efficiency：高效云盘
   * 
   * - cloud_ssd：SSD云盘
   * 
   * >该参数只有在从[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)升级到[正常售卖的实例规格族](https://help.aliyun.com/document_detail/25378.html)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。
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
   * >该参数正在邀测中，暂未开放使用。
   * 
   * @example
   * null
   */
  endTime?: string;
  /**
   * @remarks
   * >该参数正在邀测中，暂未开放使用。
   * 
   * @example
   * null
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * >该参数正在邀测中，暂未开放使用。
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
   * Specifies whether to support cross-cluster instance type upgrade. Valid values:
   * - true: Cross-cluster instance type upgrade is supported.
   * - false: Cross-cluster instance type upgrade is not supported.
   * 
   * Default value: false.
   * 
   * If you set the parameter `AllowMigrateAcrossZone` to true and upgrade the Elastic Compute Service instance based on the response, take note of the following items:
   * 
   * Classic network type instances:
   *     
   * * For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is changed to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For Linux instances, basic disks (`cloud`) are identified as **xvda** or **xvdb**, and ultra disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as **vda** or **vdb**.
   *     
   * * For [instance families that are available for purchase](https://help.aliyun.com/document_detail/25378.html), the private IP address of the instance changes.
   * 
   * VPC-type instances: For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is changed to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For Linux instances, basic disks (`cloud`) are identified as **xvda** or **xvdb**, and ultra disks (`cloud_efficiency`) and standard SSDs (`cloud_ssd`) are identified as **vda** or **vdb**.
   * 
   * @example
   * false
   */
  allowMigrateAcrossZone?: boolean;
  /**
   * @remarks
   * Specifies whether to submit an asynchronous request. Valid values:
   * - true: The request is submitted asynchronously.
   * - false: The request is not submitted asynchronously.
   * 
   * Default value: false.
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
   * - true: performs only a dry run. The instance type and public bandwidth are not changed. The system checks whether the required parameters are specified, whether the request format is valid, whether business restrictions are met, and whether ECS resources are sufficient. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - false (default): performs a dry run and sends the request. If the check succeeds, the instance type and public bandwidth are changed.
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
   * The target instance type. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
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
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance. When resource contention occurs, the peak bandwidths may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance. When resource contention occurs, the peak bandwidths may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
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

