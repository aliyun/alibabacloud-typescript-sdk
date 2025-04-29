// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits";
import { DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags } from "./DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags";


export class DescribeScalingConfigurationsResponseBodyScalingConfigurations extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ECS instance on a dedicated host is associated with the dedicated host. Valid values:
   * 
   * *   default: The instance is not associated with the dedicated host. If you restart an instance that was stopped in Economical Mode and the original dedicated host of the instance has insufficient resources, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
   * *   host: The instance is associated with the dedicated host. If you restart an instance that was stopped in Economical Mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot be restarted.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * You can specify CPU and Memory to define the range of instance types. For example, if you set CPU to 2 and Memory to 16, the instance types that have 2 vCPUs and 16 GiB are returned. If you specify CPU and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones and preferentially creates instances by using the lowest-priced instance type.
   * 
   * >  You can specify CPU and Memory to define instance types only when you set Scaling Policy to Cost Optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The time at which the scaling configuration was created.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instances. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the "Standard mode" section in the [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html) topic.
   * *   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The priority of the custom ECS instance type + vSwitch combination.
   * 
   * >  This parameter takes effect only when Scaling Policy of the scaling group is set to Priority Policy.
   * 
   * If Auto Scaling cannot create ECS instances by using the custom ECS instance type + vSwitch combination of the highest priority, Auto Scaling creates ECS instances by using the custom ECS instance type + vSwitch combination of the next highest priority.
   * 
   * >  If you specify the priorities of only a portion of custom ECS instance type + vSwitch combinations, Auto Scaling preferentially creates ECS instances by using the custom combinations that have specified priorities. If the custom combinations that have specified priorities do not provide sufficient resources, Auto Scaling creates ECS instances by using the custom combinations that do not have specified priorities based on the specified orders of vSwitches and instance types.
   * 
   * *   Example: the specified order of vSwitches for your scaling group is vsw1 and vsw2 and the specified order of instance types in your scaling configuration is type1 and type 2. In addition, you use CustomPriorities to specify ["vsw2+type2", "vsw1+type2"]. In this example, the vsw2+type2 combination has the highest priority and the vsw2+type1 combination has the lowest priority. The vsw1+type2 combination has a higher priority than the vsw1+type1 combination.
   */
  customPriorities?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities[];
  /**
   * @remarks
   * The data disks.
   */
  dataDisks?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks[];
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
   * The ID of the dedicated host on which the ECS instance is created. Preemptible instances are not supported by dedicated hosts. Therefore, if you specify DedicatedHostId, SpotStrategy and SpotPriceLimit are ignored.
   * 
   * You can call the DescribeDedicatedHosts operation to query the IDs of dedicated hosts.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Indicates whether Release Protection is enabled for the ECS instances. You can specify this parameter to determine whether the ECS instances can be deleted by using the ECS console or calling the DeleteInstance operation. Valid values:
   * 
   * *   true: Release Protection is enabled for the ECS instances. You cannot delete the ECS instances by using the ECS console or calling the DeleteInstance operation.
   * *   false: Release Protection is disabled for the ECS instances. You can delete the ECS instances by using the ECS console or calling the DeleteInstance operation.
   * 
   * >  You can enable Release Protection for only pay-as-you-go instances to prevent unexpected instance deletion during scale-in events. The Release Protection feature does not affect normal scaling activities. In other words, an instance that meets the criteria of scale-in policies may be removed from a scaling group during a scale-in event even if you enabled Release Protection for the instance.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The ID of the deployment set to which the Elastic Compute Service (ECS) instances belong.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The hostname series of the ECS instances.
   * 
   * @example
   * LocalHost
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the High Performance Computing (HPC) cluster to which the ECS instances belong.
   * 
   * @example
   * hpc-clus****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Indicates whether the access channel is enabled for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the security hardening mode (IMDSv2) is forcefully used to access instance metadata. Valid values:
   * 
   * *   optional: The security hardening mode IMDSv2 is not forcibly used.
   * *   required: The security hardening mode (IMDSv2) is forcibly used. After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can specify this parameter to obtain the latest available images in the current image family for instance creation. If you specify ImageId, you cannot specify `ImageFamily`.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image file that provides the image resource for Auto Scaling to create ECS instances.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image file.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_2014****.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * Indicates whether the ecs-user username can be used to log on to an ECS instance created from the scaling configuration. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  imageOptionsLoginAsNonRoot?: boolean;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: a public image provided by Alibaba Cloud
   * *   self: a custom image that you created
   * *   others: a shared image from another Alibaba Cloud account or a community image published by another Alibaba Cloud account
   * *   marketplace: an Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The description of the ECS instances.
   * 
   * @example
   * FinanceDept
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The generation of the ECS instances.
   * 
   * @example
   * ecs-3
   */
  instanceGeneration?: string;
  /**
   * @remarks
   * The naming series of the ECS instances.
   * 
   * @example
   * instance****
   */
  instanceName?: string;
  /**
   * @remarks
   * The intelligent configuration settings, which determine the available instance types.
   */
  instancePatternInfos?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos[];
  /**
   * @remarks
   * The instance types of the ECS instances.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ECS instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth. You are charged for the bandwidth that you specified by using InternetMaxBandwidthOut.
   * *   PayByTraffic: pay-by-traffic. You are charged for the actual traffic that you used. InternetMaxBandwidthOut specifies only the maximum available bandwidth.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Indicates whether the ECS instances are I/O optimized. Valid values:
   * 
   * *   none: The ECS instances are not I/O optimized.
   * *   optimized: The ECS instances are I/O optimized.
   * 
   * @example
   * none
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The number of randomly generated IPv6 addresses that are allocated to the elastic network interface (ENI).
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair that is used to log on to an ECS instance created from the scaling configuration.
   * 
   * @example
   * keypair****
   */
  keyPairName?: string;
  /**
   * @remarks
   * The status of the scaling configuration in the scaling group. Valid values:
   * 
   * *   Active: The scaling configuration is active in the scaling group. Auto Scaling uses the scaling configuration that is in the Active state to create ECS instances during scale-out events.
   * *   Inactive: The scaling configuration is inactive in the scaling group. Scaling configurations that are in the Inactive state are still contained in the scaling group, but Auto Scaling does not use the inactive scaling configurations to create ECS instances during scale-out events.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * You can specify CPU and Memory to define the range of instance types. For example, if you set CPU to 2 and Memory to 16, the instance types that have 2 vCPUs and 16 GiB are returned. If you specify CPU and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones and preferentially creates instances by using the lowest-priced instance type.
   * 
   * >  You can specify CPU and Memory to define instance types only when you set Scaling Policy to Cost Optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The ENIs.
   */
  networkInterfaces?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces[];
  /**
   * @remarks
   * Indicates whether the password preconfigured in the image is used.
   * 
   * @example
   * true
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * Indicates whether a password is configured for the instance.
   * 
   * @example
   * false
   */
  passwordSetted?: boolean;
  privatePoolOptions_id?: string;
  privatePoolOptions_matchCriteria?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role assumed by the ECS instances. This name is provided and maintained by RAM. You can call the ListRoles operation to query the available RAM roles.
   * 
   * @example
   * ramrole****
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECS instances belong.
   * 
   * @example
   * rg-aekzn2ou7xo****
   */
  resourceGroupId?: string;
  resourcePoolOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-bp1ezrfgoyn5kijl****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The name of the scaling configuration.
   * 
   * @example
   * scalingconfigura****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling configuration belongs.
   * 
   * @example
   * asg-bp17pelvl720x3v7****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not available for use.
   */
  schedulerOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions;
  /**
   * @remarks
   * Indicates whether Security Hardening is enabled. Valid values:
   * 
   * *   Active: Security Hardening is enabled. This value is applicable to only public images.
   * *   Deactive: Security Hardening is disabled. This value is applicable to all images.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the ECS instances belong. ECS instances that belong to the same security group can communicate with each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the ECS instances belong. ECS instances that belong to the same security group can communicate with each other.
   */
  securityGroupIds?: string[];
  securityOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions;
  /**
   * @remarks
   * The protection period of the preemptible instances. Unit: hours.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption event of the preemptible instances.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The preemptible instances.
   */
  spotPriceLimits?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits[];
  /**
   * @remarks
   * The preemption policy that is applied to pay-as-you-go instances. Valid values:
   * 
   * *   NoSpot: The instances are created as regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are preemptible instances for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set. The value is an integer that is greater than or equal to 2.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is applied to the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  systemDiskAutoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is available only when you set SystemDisk.Category to cloud_auto.
   * 
   * @example
   * false
   */
  systemDiskBurstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the system disks. The values are sorted based on their priorities. The first value has the highest priority. If Auto Scaling cannot create instances by using the disk category of the highest priority, Auto Scaling creates instances by using the disk category of the next highest priority. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: enterprise SSD (ESSD)
   * *   cloud_auto: ESSD AutoPL
   * 
   * @example
   * cloud
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The description of the system disk.
   * 
   * @example
   * Test system disk.
   */
  systemDiskDescription?: string;
  /**
   * @remarks
   * The encryption algorithm that is applied to the system disk. Valid values:
   * 
   * *   AES-256
   * *   SM4-128
   * 
   * @example
   * AES-256
   */
  systemDiskEncryptAlgorithm?: string;
  /**
   * @remarks
   * Indicates whether the system disk is encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  systemDiskEncrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key that is applied to the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  systemDiskKMSKeyId?: string;
  /**
   * @remarks
   * The name of the system disk.
   * 
   * @example
   * cloud_ssd_Test
   */
  systemDiskName?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that is an ESSD.
   * 
   * @example
   * PL1
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS of the system disk.
   * 
   * >  IOPS measures the number of read and write operations that an EBS device can process per second.
   * 
   * @example
   * 100
   */
  systemDiskProvisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags[];
  /**
   * @remarks
   * Indicates whether the ECS instance is created on a dedicated host. Valid values:
   * 
   * *   default: The ECS instance is created on a non-dedicated host.
   * *   host: The ECS instance is created on a dedicated host. If you do not specify DedicatedHostId, the system selects a dedicated host for the ECS instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * The user data of the ECS instances.
   * 
   * @example
   * echo hello ecs!
   */
  userData?: string;
  /**
   * @remarks
   * The weights of the instance types. The value of this parameter indicates the capacity of an instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the instance type are required to meet the expected capacity requirement.
   */
  weightedCapacities?: number[];
  /**
   * @remarks
   * The ID of the zone in which the ECS instances are created. You can call the DescribeZones operation to query the zone IDs.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
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
      imageOptionsLoginAsNonRoot: 'ImageOptionsLoginAsNonRoot',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceDescription: 'InstanceDescription',
      instanceGeneration: 'InstanceGeneration',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceType: 'InstanceType',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      lifecycleState: 'LifecycleState',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      networkInterfaces: 'NetworkInterfaces',
      passwordInherit: 'PasswordInherit',
      passwordSetted: 'PasswordSetted',
      privatePoolOptions_id: 'PrivatePoolOptions.Id',
      privatePoolOptions_matchCriteria: 'PrivatePoolOptions.MatchCriteria',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourcePoolOptions: 'ResourcePoolOptions',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      schedulerOptions: 'SchedulerOptions',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      securityOptions: 'SecurityOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimits: 'SpotPriceLimits',
      spotStrategy: 'SpotStrategy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      systemDiskAutoSnapshotPolicyId: 'SystemDiskAutoSnapshotPolicyId',
      systemDiskBurstingEnabled: 'SystemDiskBurstingEnabled',
      systemDiskCategories: 'SystemDiskCategories',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskDescription: 'SystemDiskDescription',
      systemDiskEncryptAlgorithm: 'SystemDiskEncryptAlgorithm',
      systemDiskEncrypted: 'SystemDiskEncrypted',
      systemDiskKMSKeyId: 'SystemDiskKMSKeyId',
      systemDiskName: 'SystemDiskName',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskProvisionedIops: 'SystemDiskProvisionedIops',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      tenancy: 'Tenancy',
      userData: 'UserData',
      weightedCapacities: 'WeightedCapacities',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      cpu: 'number',
      creationTime: 'string',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks },
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
      imageOptionsLoginAsNonRoot: 'boolean',
      imageOwnerAlias: 'string',
      instanceDescription: 'string',
      instanceGeneration: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos },
      instanceType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      lifecycleState: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      networkInterfaces: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces },
      passwordInherit: 'boolean',
      passwordSetted: 'boolean',
      privatePoolOptions_id: 'string',
      privatePoolOptions_matchCriteria: 'string',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourcePoolOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsResourcePoolOptions,
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions,
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      securityOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSecurityOptions,
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits },
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      systemDiskAutoSnapshotPolicyId: 'string',
      systemDiskBurstingEnabled: 'boolean',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      systemDiskCategory: 'string',
      systemDiskDescription: 'string',
      systemDiskEncryptAlgorithm: 'string',
      systemDiskEncrypted: 'boolean',
      systemDiskKMSKeyId: 'string',
      systemDiskName: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskProvisionedIops: 'number',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags },
      tenancy: 'string',
      userData: 'string',
      weightedCapacities: { 'type': 'array', 'itemType': 'number' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customPriorities)) {
      $dara.Model.validateArray(this.customPriorities);
    }
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instancePatternInfos)) {
      $dara.Model.validateArray(this.instancePatternInfos);
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
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.weightedCapacities)) {
      $dara.Model.validateArray(this.weightedCapacities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

