// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRulesInstanceQosRule extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-h3m8b5dusopp5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the public network bandwidth throttling rule. This rule applies only to premium bandwidth.
   * 
   * @example
   * qos-3kh93uu0vdbka****
   */
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
  /**
   * @remarks
   * The public network bandwidth throttling rules bound to the instance.
   */
  instanceQosRule?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRulesInstanceQosRule[];
  /**
   * @remarks
   * The total number of public network bandwidth throttling rules for the instance group.
   * 
   * @example
   * 2
   */
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
   * The disk size, in GB.
   * 
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type.
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * phone
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 2025
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

export class DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-48xr63m4dybjk****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The architecture type.
   * 
   * @example
   * ARM
   */
  architectureType?: string;
  /**
   * @remarks
   * The number of active instances.
   * 
   * > An instance is considered active if its instance status is not "Deleting" or "Deleted".
   * 
   * @example
   * 2
   */
  availableInstanceAmount?: number;
  /**
   * @remarks
   * The ID of the bandwidth package.
   * 
   * @example
   * np-0q6ixs7vpxciz****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The status of the bandwidth package.
   * Valid values:
   * - Creating: being created.
   * - Releasing: being released.
   * - InUse: in use.
   * - Failed: failed.
   * - Expired: expired.
   * - Available: unbound and being billed.
   * 
   * @example
   * Creating
   */
  bandwidthPackageStatus?: string;
  /**
   * @remarks
   * The type of the bandwidth package.
   * 
   * @example
   * cbwp_ecd
   */
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The public network bandwidth throttling rules for the instance group.
   */
  bindQosRules?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelBindQosRules;
  channel?: string;
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
   * The number of CPU cores.
   * 
   * @example
   * 8
   */
  cpu?: string;
  /**
   * @remarks
   * The disk information.
   */
  disks?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelDisks[];
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The reason for the creation failure.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time of the subscription instance group.
   * 
   * @example
   * 2027-06-29 07:25:31
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-02-01 10:56:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-06zyt9m93zwax****
   */
  imageId?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 25.09.2
   */
  imageVersion?: string;
  /**
   * @remarks
   * The list of installed applications.
   * 
   * @example
   * "抖音","淘宝"
   */
  installedAppList?: string;
  /**
   * @remarks
   * The instance group ID.
   * 
   * @example
   * ag-h67a2cs0zprfdh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The instance group name.
   * 
   * @example
   * Cloud phoneA
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The instance group specifications.
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
   * The instance group status.
   * 
   * @example
   * RUNNING
   */
  instanceGroupStatus?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
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
  /**
   * @remarks
   * The network type of the instance.
   * 
   * > This field is returned only for instance groups with a standard network.
   * 
   * @example
   * network_pro_ecd
   */
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
   * The network ID.
   * 
   * @example
   * cn-shanghai+dir-030598****
   */
  officeSiteId?: string;
  packageId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-c6n38xucps8kl****
   */
  policyGroupId?: string;
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
   * The rendering type of the instance group.
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
   * The system version.
   * 
   * @example
   * Android 12
   */
  systemVersion?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModelTags[];
  /**
   * @remarks
   * The vSwitch ID in the VPC.
   * 
   * @example
   * vsw-t4n0yqs009ho024wt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
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
      channel: 'Channel',
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
      packageId: 'PackageId',
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
      channel: 'string',
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
      packageId: 'string',
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
   * The details of the instance group.
   */
  instanceGroupModel?: DescribeAndroidInstanceGroupsResponseBodyInstanceGroupModel[];
  /**
   * @remarks
   * The pagination token that indicates the position where the current call returns. An empty value indicates that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

