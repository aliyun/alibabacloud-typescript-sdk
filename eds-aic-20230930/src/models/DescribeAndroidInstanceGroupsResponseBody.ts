// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRulesInstanceQosRule extends $dara.Model {
  instanceId?: string;
  qosRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      qosRuleId: 'QosRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      qosRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRules extends $dara.Model {
  instanceQosRule?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRulesInstanceQosRule[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceQosRule: 'InstanceQosRule',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQosRule: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRulesInstanceQosRule },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceQosRule)) {
      $dara.Model.validateArray(this.instanceQosRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks extends $dara.Model {
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelTags extends $dara.Model {
  key?: string;
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

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-48xr63m4dybjk****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The type of the architecture.
   * 
   * @example
   * ARM
   */
  architectureType?: string;
  /**
   * @remarks
   * The number of available instances.
   * 
   * >  Available instances are those not in the Deleting or Deleted state.
   * 
   * @example
   * 5
   */
  availableInstanceAmount?: number;
  bandwidthPackageId?: string;
  bandwidthPackageStatus?: string;
  bandwidthPackageType?: string;
  bindQosRules?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRules;
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
   * The number of vCPUs.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The disks.
   */
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  /**
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The cause of the creation failure.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The time when the instance group was created.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the subscription instance group expires.
   * 
   * @example
   * 2027-06-29 07:25:31
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the instance group was updated.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  imageVersion?: string;
  /**
   * @remarks
   * The list of installed applications.
   * 
   * @example
   * "TikTok","WeChat"
   */
  installedAppList?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-h67a2cs0zprfdh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The specifications of the instance group.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The description of the instance group specifications.
   * 
   * @example
   * ARM-2vCPU4GiB 32GiB
   */
  instanceGroupSpecDescribe?: string;
  /**
   * @remarks
   * The status of the instance group.
   * 
   * @example
   * RUNNING
   */
  instanceGroupStatus?: string;
  /**
   * @example
   * 50
   */
  ipv6Bandwidth?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 8
   */
  memory?: number;
  networkType?: string;
  /**
   * @remarks
   * The number of instances in the instance group.
   * 
   * @example
   * 10
   */
  numberOfInstances?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * cn-shanghai+dir-030598****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-c6n38xucps8kl****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rendering mode of the instance group.
   * 
   * Valid values:
   * 
   * *   GPURemote: GPU remote rendering.
   * *   CPU: CPU rendering.
   * *   GPUocal: GPU local rendering.
   * 
   * @example
   * CPU
   */
  renderingType?: string;
  /**
   * @remarks
   * The height of the resolution.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * Android 12
   */
  systemVersion?: string;
  tags?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelTags[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-t4n0yqs009ho024wt****
   */
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      architectureType: 'ArchitectureType',
      availableInstanceAmount: 'AvailableInstanceAmount',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageStatus: 'BandwidthPackageStatus',
      bandwidthPackageType: 'BandwidthPackageType',
      bindQosRules: 'BindQosRules',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      enableIpv6: 'EnableIpv6',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageVersion: 'ImageVersion',
      installedAppList: 'InstalledAppList',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupName: 'InstanceGroupName',
      instanceGroupSpec: 'InstanceGroupSpec',
      instanceGroupSpecDescribe: 'InstanceGroupSpecDescribe',
      instanceGroupStatus: 'InstanceGroupStatus',
      ipv6Bandwidth: 'Ipv6Bandwidth',
      memory: 'Memory',
      networkType: 'NetworkType',
      numberOfInstances: 'NumberOfInstances',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      renderingType: 'RenderingType',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
      saleMode: 'SaleMode',
      systemVersion: 'SystemVersion',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      architectureType: 'string',
      availableInstanceAmount: 'number',
      bandwidthPackageId: 'string',
      bandwidthPackageStatus: 'string',
      bandwidthPackageType: 'string',
      bindQosRules: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRules,
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks },
      enableIpv6: 'boolean',
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageVersion: 'string',
      installedAppList: 'string',
      instanceGroupId: 'string',
      instanceGroupName: 'string',
      instanceGroupSpec: 'string',
      instanceGroupSpecDescribe: 'string',
      instanceGroupStatus: 'string',
      ipv6Bandwidth: 'number',
      memory: 'number',
      networkType: 'string',
      numberOfInstances: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      renderingType: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
      saleMode: 'string',
      systemVersion: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelTags },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.bindQosRules && typeof (this.bindQosRules as any).validate === 'function') {
      (this.bindQosRules as any).validate();
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
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

export class DescribeAndroidInstanceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance group.
   */
  instanceGroupModel?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceGroupModel: 'InstanceGroupModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupModel: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupModel)) {
      $dara.Model.validateArray(this.instanceGroupModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

