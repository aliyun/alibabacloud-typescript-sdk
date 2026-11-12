// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesDisksDiskTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesDisks extends $dara.Model {
  /**
   * @remarks
   * The cloud disk category. Valid values:
   * 
   * - ESSD: ESSD at performance level (PL) 0.
   * - SSD: Standard SSD.
   * - CLOUD_EFFICIENCY: Ultra disk.
   * 
   * @example
   * ESSD
   */
  category?: string;
  /**
   * @remarks
   * The creation time of the instance. The time is displayed in UTC in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-02-24T02:20:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The device name of the cloud disk on the server.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the cloud disk.
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * d-bp14wq0149cpp2x****
   */
  diskId?: string;
  /**
   * @remarks
   * The cloud disk name.
   * 
   * @example
   * SystemDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The tag information of the cloud disk.
   */
  diskTags?: ListInstancesResponseBodyInstancesDisksDiskTags[];
  /**
   * @remarks
   * The cloud disk type. Valid values:
   * 
   * - system: system cloud disk.
   * - data: data cloud disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the cloud disk.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cloud disk belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 50
   */
  size?: number;
  /**
   * @remarks
   * The cloud disk status. Valid values:
   * 
   * - ReIniting: The cloud disk is being initialized.
   * - Creating: The cloud disk is being created.
   * - In_use: The cloud disk is in use.
   * - Available: The cloud disk is unattached.
   * - Attaching: The cloud disk is being mounted.
   * - Detaching: The cloud disk is being unmounted.
   * 
   * @example
   * In_use
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskTags: 'DiskTags',
      diskType: 'DiskType',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      diskTags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDisksDiskTags },
      diskType: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskTags)) {
      $dara.Model.validateArray(this.diskTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesImage extends $dara.Model {
  /**
   * @remarks
   * The image provider.
   * 
   * @example
   * https://selfs****e.console.aliyun.com/ticket/createIndex
   */
  imageContact?: string;
  /**
   * @remarks
   * The URL of the image icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/O****1vdh9651ReKqWNMI2I_!!6000000002136****-24-24.svg
   */
  imageIconUrl?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * test-custom-1686536882356
   */
  imageName?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * - system: system image.
   * - app: application image.
   * - custom: custom image.
   * 
   * @example
   * system
   */
  imageType?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * V3.5
   */
  imageVersion?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * windows
   */
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      imageContact: 'ImageContact',
      imageIconUrl: 'ImageIconUrl',
      imageName: 'ImageName',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageContact: 'string',
      imageIconUrl: 'string',
      imageName: 'string',
      imageType: 'string',
      imageVersion: 'string',
      osType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The peak public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  peakBandwidth?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 72.25.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 116.62.XX.XX
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The DDoS status of the public IP address.
   * 
   * @example
   * normal
   */
  publicIpDdosStatus?: string;
  static names(): { [key: string]: string } {
    return {
      peakBandwidth: 'PeakBandwidth',
      privateIpAddress: 'PrivateIpAddress',
      publicIpAddress: 'PublicIpAddress',
      publicIpDdosStatus: 'PublicIpDdosStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakBandwidth: 'number',
      privateIpAddress: 'string',
      publicIpAddress: 'string',
      publicIpDdosStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The cloud disk category. Valid values:
   * 
   * - ESSD: ESSD at performance level (PL) 0.
   * - SSD: Standard SSD.
   * - CLOUD_EFFICIENCY: Ultra disk.
   * 
   * @example
   * ESSD
   */
  diskCategory?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 60
   */
  diskSize?: number;
  /**
   * @remarks
   * The data transfer quota.
   * 
   * - A value of 0 indicates a bandwidth-based instance.
   * - A non-zero value indicates a data transfer plan-based instance.
   * 
   * @example
   * 818
   */
  flow?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * @example
   * 2
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cpu: 'Cpu',
      diskCategory: 'DiskCategory',
      diskSize: 'DiskSize',
      flow: 'Flow',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cpu: 'number',
      diskCategory: 'string',
      diskSize: 'number',
      flow: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The server status. Valid values:
   * 
   * - Normal: Normal.
   * - Expired: Expired.
   * - Overdue: Overdue payment.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether the plan is a combination plan.
   * 
   * @example
   * false
   */
  combination?: boolean;
  /**
   * @remarks
   * The combination plan instance ID.
   * 
   * @example
   * com-f6c9a22****45b5b8de68ad608af1ba
   */
  combinationInstanceId?: string;
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * swas_intl
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-03-08T05:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The DDoS status. Valid values:
   * 
   * - Normal: Normal.
   * - BlackHole: Blackhole filtering is activated.
   * - Defense: Traffic is being scrubbed.
   * 
   * @example
   * Normal
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The reason why the resource is disabled. Valid values:
   * 
   * - FINANCIAL: The resource is locked due to an overdue payment.
   * - SECURITY: The resource is locked due to security reasons.
   * - EXPIRED: The instance has expired.
   * 
   * @example
   * EXPIRED
   */
  disableReason?: string;
  /**
   * @remarks
   * The array of cloud disk information for the simple application server.
   */
  disks?: ListInstancesResponseBodyInstancesDisks[];
  /**
   * @remarks
   * The expiration time. The time is displayed in UTC in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-05-08T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image information.
   */
  image?: ListInstancesResponseBodyInstancesImage;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * fe9c66133a9d4688872869726b52****
   */
  imageId?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 172.26.XX.XX
   */
  innerIpAddress?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The server name.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The network attributes.
   */
  networkAttributes?: ListInstancesResponseBodyInstancesNetworkAttributes[];
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * swas.s2.c2m2s50b4t08
   */
  planId?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * - NORMAL: general-purpose.
   * - CAPACITY: storage-optimized.
   * - PREVIOUS: previous generation.
   * - MULTI_IP: multi-public-IP.
   * - INTERNATIONAL: international.
   * 
   * > For more information, see [Instance families](https://help.aliyun.com/document_detail/2861773.html).
   * 
   * @example
   * NORMAL
   */
  planType?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 42.1.XX.XX
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekz7jmhg5s****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specifications.
   */
  resourceSpec?: ListInstancesResponseBodyInstancesResourceSpec;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - Pending: The instance is being prepared.
   * - Starting: The instance is starting.
   * - Running: The instance is running.
   * - Stopping: The instance is stopping.
   * - Stopped: The instance is stopped.
   * - Resetting: The instance is being reset.
   * - Upgrading: The instance is being upgraded.
   * - Disabled: The instance is unavailable.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstancesResponseBodyInstancesTags[];
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 41f30524-5df7-49c9-9c6e-32****489001
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      combination: 'Combination',
      combinationInstanceId: 'CombinationInstanceId',
      commodityCode: 'CommodityCode',
      creationTime: 'CreationTime',
      ddosStatus: 'DdosStatus',
      disableReason: 'DisableReason',
      disks: 'Disks',
      expiredTime: 'ExpiredTime',
      image: 'Image',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkAttributes: 'NetworkAttributes',
      planId: 'PlanId',
      planType: 'PlanType',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceSpec: 'ResourceSpec',
      status: 'Status',
      tags: 'Tags',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      chargeType: 'string',
      combination: 'boolean',
      combinationInstanceId: 'string',
      commodityCode: 'string',
      creationTime: 'string',
      ddosStatus: 'string',
      disableReason: 'string',
      disks: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDisks },
      expiredTime: 'string',
      image: ListInstancesResponseBodyInstancesImage,
      imageId: 'string',
      innerIpAddress: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkAttributes: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesNetworkAttributes },
      planId: 'string',
      planType: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceSpec: ListInstancesResponseBodyInstancesResourceSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesTags },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(Array.isArray(this.networkAttributes)) {
      $dara.Model.validateArray(this.networkAttributes);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of simple application server information.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The page number of the simple application server list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The settings for the number of entries per page for paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

