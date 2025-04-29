// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyScalingConfigurationShrinkRequestImageOptions } from "./ModifyScalingConfigurationShrinkRequestImageOptions";
import { ModifyScalingConfigurationShrinkRequestPrivatePoolOptions } from "./ModifyScalingConfigurationShrinkRequestPrivatePoolOptions";
import { ModifyScalingConfigurationShrinkRequestSystemDisk } from "./ModifyScalingConfigurationShrinkRequestSystemDisk";
import { ModifyScalingConfigurationShrinkRequestCustomPriorities } from "./ModifyScalingConfigurationShrinkRequestCustomPriorities";
import { ModifyScalingConfigurationShrinkRequestDataDisks } from "./ModifyScalingConfigurationShrinkRequestDataDisks";
import { ModifyScalingConfigurationShrinkRequestInstancePatternInfos } from "./ModifyScalingConfigurationShrinkRequestInstancePatternInfos";
import { ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides } from "./ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides";
import { ModifyScalingConfigurationShrinkRequestNetworkInterfaces } from "./ModifyScalingConfigurationShrinkRequestNetworkInterfaces";
import { ModifyScalingConfigurationShrinkRequestResourcePoolOptions } from "./ModifyScalingConfigurationShrinkRequestResourcePoolOptions";
import { ModifyScalingConfigurationShrinkRequestSecurityOptions } from "./ModifyScalingConfigurationShrinkRequestSecurityOptions";
import { ModifyScalingConfigurationShrinkRequestSpotPriceLimits } from "./ModifyScalingConfigurationShrinkRequestSpotPriceLimits";


export class ModifyScalingConfigurationShrinkRequest extends $dara.Model {
  imageOptions?: ModifyScalingConfigurationShrinkRequestImageOptions;
  privatePoolOptions?: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions;
  systemDisk?: ModifyScalingConfigurationShrinkRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to associate the instance on a dedicated host with the dedicated host. Valid values:
   * 
   * *   default: does not associate the instance on the dedicated host with the dedicated host. If you restart an instance that was stopped in Economical Mode and the original dedicated host of the instance has insufficient resources, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
   * *   host: associates the instance on a dedicated host with the dedicated host. If you restart an instance that was stopped in Economical Mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the instance cannot be started.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
   * 
   * > You can specify CPU and Memory to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify an instance type in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The performance mode of burstable instances. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * *   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The priority of the custom "ECS instance type + vSwitch" combination.
   * 
   * >  This setting is valid only if the scaling policy of the scaling group is a priority policy.
   * 
   * If Auto Scaling cannot create ECS instances by using the custom "ECS instance type + vSwitch" combination of the highest priority, Auto Scaling creates ECS instances by using the custom "ECS instance type + vSwitch" combination of the next highest priority.
   * 
   * >  If you specify the priorities of only a part of custom "ECS instance type + vSwitch" combinations, Auto Scaling preferentially creates ECS instances by using the custom combinations that have the specified priorities. If the custom combinations that have the specified priorities do not provide sufficient resources, Auto Scaling creates ECS instances by using the custom combinations that do not have the specified priorities based on the specified orders of vSwitches and instance types.
   * 
   * *   Example: The specified order of vSwitches for your scaling group is vsw1 and vsw2, and the specified order of instance types in your scaling configuration is type1 and type 2. In addition, you use CustomPriorities to specify ["vsw2+type2", "vsw1+type2"]. In this example, the vsw2+type2 combination has the highest priority and the vsw2+type1 combination has the lowest priority. The vsw1+type2 combination has a higher priority than the vsw1+type1 combination.
   */
  customPriorities?: ModifyScalingConfigurationShrinkRequestCustomPriorities[];
  /**
   * @remarks
   * The data disks.
   */
  dataDisks?: ModifyScalingConfigurationShrinkRequestDataDisks[];
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   * 
   * @example
   * dc-zm04u8r3lohsq****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host on which you want to create ECS instances. You cannot create preemptible instances on dedicated hosts. If you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are ignored.
   * 
   * You can call the DescribeDedicatedHosts operation to query the most recent list of dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Release Protection feature for ECS instances. If you enable this feature, you cannot directly release the ECS instances in the ECS console or by calling the DeleteInstance operation. Valid values:
   * 
   * *   true: enables the Release Protection feature. In this case, you cannot directly release the ECS instances in the ECS console or by calling the DeleteInstance operation.
   * *   false: disables the Release Protection feature. In this case, you can directly release the ECS instances in the ECS console or by calling the DeleteInstance operation.
   * 
   * >  You can enable the Release Protection feature only for pay-as-you-go instances to prevent accidental instance deletion. The Release Protection feature does not affect normal scaling activities. An instance that meets the criteria of scale-in policies can be removed from a scaling group during a scale-in event, regardless of whether you enabled the Release Protection feature for the instance.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the deployment set of the ECS instances that are created by using the scaling configuration.
   * 
   * @example
   * ds-bp13v7bjnj9gis****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
   * 
   * *   Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
   * *   Other instances, such as Linux instances: The hostname must be 2 to 64 characters in length. Separate a hostname into multiple segments with periods (.). Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * hos****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the Elastic High Performance Computing (E-HPC) cluster to which the ECS instances belong.
   * 
   * @example
   * hpc-clusterid
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * Default value: enabled.
   * 
   * >  For information about instance metadata, see [Obtain instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Specifies whether to forcibly use the security hardening mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * *   optional: does not forcibly use the security hardening mode (IMDSv2).
   * *   required: forcibly uses the security hardening mode (IMDSv2). If you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * >  For more information about instance metadata access modes, see [Access modes of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. If you specify this parameter, the latest custom images that are available in the specified image family are returned. Then, you can use the images to create instances. If you specify ImageId, you cannot specify ImageFamily.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image that is used by Auto Scaling to automatically create ECS instances.
   * 
   * > If the image that is specified in the scaling configuration contains system disks and data disks, the data that is stored in the data disks is cleared after you modify the image.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. Each image name must be unique in a region. If you specify ImageId, ImageName is ignored.
   * 
   * You cannot use ImageName to specify images from Alibaba Cloud Marketplace.
   * 
   * @example
   * suse11sp3_64_20G_aliaegis_2015****.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters but cannot start with `http://` or `https://`.
   * 
   * @example
   * Test instance.
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the Elastic Compute Service (ECS) instance that is automatically created by using the scaling configuration.
   * 
   * @example
   * inst****
   */
  instanceName?: string;
  /**
   * @remarks
   * The intelligent configuration settings, which determine the available instance types.
   */
  instancePatternInfos?: ModifyScalingConfigurationShrinkRequestInstancePatternInfos[];
  /**
   * @remarks
   * The instance types.
   */
  instanceTypeOverrides?: ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides[];
  /**
   * @remarks
   * The instance type. If you specify InstanceTypes, InstanceType is ignored.
   * 
   * Auto Scaling creates instances based on the priorities of instance types. If Auto Scaling cannot create instances by using the instance type that has the highest priority, Auto Scaling creates instances by using the instance type that has the next highest priority.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth. You are charged for the bandwidth specified by InternetMaxBandwidthOut.
   * *   PayByTraffic: pay-by-traffic. You are charged for the actual traffic generated. InternetMaxBandwidthOut specifies only the maximum available bandwidth.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10. The default value is 10.
   * *   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the value of `InternetMaxBandwidthOut`. The default value is the value of `InternetMaxBandwidthOut`.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 50
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether to create I/O optimized instances from the scaling configuration. Valid values:
   * 
   * *   none: creates non-I/O optimized instances from the scaling configuration.
   * *   optimized: creates I/O optimized instances from the scaling configuration.
   * 
   * @example
   * none
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses that you want to allocate to the elastic network interface (ENI).
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair that you can use to log on to an ECS instance.
   * 
   * *   Windows instances do not support this parameter.
   * *   By default, the username and password authentication method is disabled for Linux instances.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server. Valid values: 1 to 100.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
   * 
   * > You can specify CPU and Memory to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify an instance type in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The ENIs.
   */
  networkInterfaces?: ModifyScalingConfigurationShrinkRequestNetworkInterfaces[];
  /**
   * @remarks
   * Specifies whether to overwrite existing data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  override?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the ECS instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   * \\`()~!@#$%^&\\*-_+=|{}[]:;\\"<>,.?/
   * 
   * The password of a Windows instance cannot start with a forward slash (/).
   * 
   * >  We recommend that you use HTTPS to send requests if you specify Password to avoid password leakage.
   * 
   * @example
   * 123abc****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password that is preconfigured in the image. Before you use this parameter, make sure that a password is configured in the image.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The name of the RAM role that you want to attach to the ECS instance. The name is provided and maintained by Resource Access Management (RAM). You can call the ListRoles operation to query the available RAM roles. You can call the CreateRole operation to create RAM roles.
   * 
   * @example
   * RamRoleTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECS instances belong.
   * 
   * @example
   * abcd1234abcd****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourcePoolOptions?: ModifyScalingConfigurationShrinkRequestResourcePoolOptions;
  /**
   * @remarks
   * The ID of the scaling configuration that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * asc-bp16har3jpj6fjbx****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length, and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
   * 
   * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
   * 
   * @example
   * test-modify
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The scheduler options.
   * 
   * @example
   * ["testManagedPrivateSpaceId****"]
   */
  schedulerOptionsShrink?: string;
  /**
   * @remarks
   * The ID of the security group with which ECS instances are associated. The ECS instances that are associated with the same security group can access each other.
   * 
   * @example
   * sg-F876F****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups.
   */
  securityGroupIds?: string[];
  securityOptions?: ModifyScalingConfigurationShrinkRequestSecurityOptions;
  /**
   * @remarks
   * The protection period of preemptible instances. Unit: hours. Valid values:
   * 
   * *   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, Alibaba Cloud compares the bidding price with the market price and checks the resource inventory to determine whether to release the instance.
   * *   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance is not automatically released within 1 hour. Alibaba Cloud compares the biding price with the market price and checks the resource inventory to determine whether to release the instance.
   * 
   * >  Alibaba Cloud notifies you of ECS system events 5 minutes before an instance is released. Preemptible instances are billed by second. We recommend that you specify a protection period based on your business requirements.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The preemptible instance types.
   */
  spotPriceLimits?: ModifyScalingConfigurationShrinkRequestSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy of pay-as-you-go instances. Valid values:
   * 
   * *   NoSpot: The instances are created as regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are preemptible instances for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The categories of the system disks. If Auto Scaling cannot create disks by using the disk category of the highest priority, Auto Scaling creates disks by using the disk category of the next highest priority. Valid values:
   * 
   * *   cloud: basic disk.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   * 
   * >  If you specify this parameter, you cannot specify `SystemDisk.Category`.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The tags of the ECS instance. Specify the tags as key-value pairs. You can specify up to 20 tags. When you specify tag keys and tag values, take note of the following items:
   * 
   * *   A tag key can be up to 64 characters in length. The key cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. The tag key cannot be an empty string.
   * *   A tag value can be up to 128 characters in length. The value cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. The tag value can be an empty string.
   * 
   * @example
   * {"key1":"value1","key2":"value2", ... "key5":"value5"}
   */
  tags?: string;
  /**
   * @remarks
   * Specifies whether to create ECS instances on dedicated hosts. Valid values:
   * 
   * *   default: creates ECS instances on non-dedicated hosts.
   * *   host: creates ECS instances on dedicated hosts. If you do not specify DedicatedHostId, the system randomly selects a dedicated host for an ECS instance.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The user data of the Elastic Compute Service (ECS) instance. The user data must be encoded in Base64 format. The size of raw data before Base64 encoding cannot exceed 32 KB.
   * 
   * @example
   * echo hello ecs!
   */
  userData?: string;
  /**
   * @remarks
   * The zone ID of the ECS instances that are created by using the scaling configuration.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageOptions: 'ImageOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      cpu: 'Cpu',
      creditSpecification: 'CreditSpecification',
      customPriorities: 'CustomPriorities',
      dataDisks: 'DataDisks',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      httpEndpoint: 'HttpEndpoint',
      httpTokens: 'HttpTokens',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceTypeOverrides: 'InstanceTypeOverrides',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      networkInterfaces: 'NetworkInterfaces',
      override: 'Override',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourcePoolOptions: 'ResourcePoolOptions',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      schedulerOptionsShrink: 'SchedulerOptions',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      securityOptions: 'SecurityOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimits: 'SpotPriceLimits',
      spotStrategy: 'SpotStrategy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      systemDiskCategories: 'SystemDiskCategories',
      tags: 'Tags',
      tenancy: 'Tenancy',
      userData: 'UserData',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageOptions: ModifyScalingConfigurationShrinkRequestImageOptions,
      privatePoolOptions: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions,
      systemDisk: ModifyScalingConfigurationShrinkRequestSystemDisk,
      affinity: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestDataDisks },
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
      httpEndpoint: 'string',
      httpTokens: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstancePatternInfos },
      instanceTypeOverrides: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      networkInterfaces: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestNetworkInterfaces },
      override: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourcePoolOptions: ModifyScalingConfigurationShrinkRequestResourcePoolOptions,
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      schedulerOptionsShrink: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: ModifyScalingConfigurationShrinkRequestSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestSpotPriceLimits },
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      tags: 'string',
      tenancy: 'string',
      userData: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.customPriorities)) {
      $dara.Model.validateArray(this.customPriorities);
    }
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instancePatternInfos)) {
      $dara.Model.validateArray(this.instancePatternInfos);
    }
    if(Array.isArray(this.instanceTypeOverrides)) {
      $dara.Model.validateArray(this.instanceTypeOverrides);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.networkInterfaces)) {
      $dara.Model.validateArray(this.networkInterfaces);
    }
    if(this.resourcePoolOptions && typeof (this.resourcePoolOptions as any).validate === 'function') {
      (this.resourcePoolOptions as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(Array.isArray(this.spotPriceLimits)) {
      $dara.Model.validateArray(this.spotPriceLimits);
    }
    if(Array.isArray(this.systemDiskCategories)) {
      $dara.Model.validateArray(this.systemDiskCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

