// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsAcrRegistryInfos } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsAcrRegistryInfos";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsDnsConfigOptions } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsDnsConfigOptions";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsHostAliases } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsHostAliases";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsImageRegistryCredentials } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsImageRegistryCredentials";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsTags } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsTags";
import { DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumes } from "./DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumes";


export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurations extends $dara.Model {
  /**
   * @remarks
   * The Container Registry Enterprise Edition instances.
   */
  acrRegistryInfos?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsAcrRegistryInfos[];
  /**
   * @remarks
   * The validity period of the scaling configuration. Unit: seconds.
   * 
   * @example
   * 1000
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Indicates whether elastic IP addresses (EIPs) are automatically created and bound to elastic container instances.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Indicates whether the image cache is automatically matched. Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The name series of elastic container instances.
   * 
   * @example
   * test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The containers in an elastic container instance.
   */
  containers?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers[];
  /**
   * @remarks
   * Indicates whether the Cost Optimization feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  costOptimization?: boolean;
  /**
   * @remarks
   * The number of vCPUs per elastic container instance.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. This parameter can be specified for only specific instance types. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. This parameter can be specified for only specific instance types. A value of 1 indicates that Hyper-Threading is disabled. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
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
   * The bucket that stores the data cache.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the ESSD AutoPL disk that stores the data cache. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk that stores the data cache. We recommend that you use enterprise SSDs (ESSDs). Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk that stores the data cache. Valid values: 0 to min{50,000, 1000 x *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50* x Capacity, 50,000}.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >  This parameter is not available for use.
   * 
   * @example
   * This is an example.
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses of the Domain Name Service (DNS) server.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The options. Each option is a name-value pair. The value in the name-value pair is optional.
   */
  dnsConfigOptions?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of the DNS servers.
   */
  dnsConfigSearches?: string[];
  /**
   * @remarks
   * The Domain Name System (DNS) policy.
   * 
   * @example
   * Default
   */
  dnsPolicy?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: bit/s.
   * 
   * @example
   * 1024000
   */
  egressBandwidth?: number;
  /**
   * @remarks
   * The EIP bandwidth. Default value: 5. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The capacity of the ephemeral storage. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The version of the GPU driver.
   * 
   * @example
   * tesla=470.82.01
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The hostnames and IP addresses for a container that are added to the hosts file of the elastic container instance.
   */
  hostAliases?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsHostAliases[];
  /**
   * @remarks
   * The hostname series.
   * 
   * @example
   * [\\"hehe.com\\", \\"haha.com\\"]
   */
  hostName?: string;
  /**
   * @remarks
   * The information about the image repository.
   */
  imageRegistryCredentials?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsImageRegistryCredentials[];
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * @example
   * imc-2zebxkiifuyzzlhl****
   */
  imageSnapshotId?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: bit/s.
   * 
   * @example
   * 1024000
   */
  ingressBandwidth?: number;
  /**
   * @remarks
   * The init containers.
   */
  initContainers?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers[];
  /**
   * @remarks
   * The level of the instance family, which is used to filter the available instance types that meet the specified requirements. This parameter takes effect only if `CostOptimization` is set to true. Valid values:
   * 
   * *   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The specified ECS instance types. You can specify up to five instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The status of the scaling configuration in the scaling group. Valid values:
   * 
   * *   Active: The scaling configuration is active in the scaling group. Auto Scaling uses the scaling configuration that is in the Active state to create instances during scale-out events.
   * *   Inactive: The scaling configuration is inactive in the scaling group. Scaling configurations that are in the Inactive state are still contained in the scaling group, but Auto Scaling does not use the inactive scaling configurations to create instances during scale-out events.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The load balancing weight of each elastic container instance as a backend server. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * You can specify CPU and Memory to define the range of instance types. For example, if you set CPU to 2 and Memory to 16, the instance types that have 2 vCPUs and 16 GiB are returned. After you specify CPU and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones and preferentially creates instances by using the lowest-priced instance type.
   * 
   * >  You can specify CPU and Memory to define instance types only if you set Scaling Policy to Cost Optimization and no instance type is specified in the scaling configuration.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The endpoints of the Network Time Protocol (NTP) server.
   */
  ntpServers?: string[];
  /**
   * @remarks
   * The Resource Access Management (RAM) role of elastic container instances. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see [Use an instance RAM role by calling API operations](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * ram:PassRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of elastic container instances.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-8db03793gfrz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The restart policy of elastic container instances. Valid values:
   * 
   * *   Never: Elastic container instances are never restarted.
   * *   Always: Elastic container instances are always restarted.
   * *   OnFailure: Elastic container instances are restarted upon failures.
   * 
   * @example
   * Never
   */
  restartPolicy?: string;
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
   * scalingconfi****
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
   * The system information of the security context in which the elastic container instance runs.
   */
  securityContextSysCtls?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls[];
  /**
   * @remarks
   * The ID of the security group with which elastic container instances are associated. Elastic container instances that are associated with the same security group can communicate with each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * >  This parameter is not available for use.
   * 
   * @example
   * False
   */
  slsEnable?: boolean;
  /**
   * @remarks
   * The maximum hourly price for preemptible elastic container instances.
   * 
   * This parameter is returned only if you set SpotStrategy to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for elastic container instances. Valid values:
   * 
   * *   NoSpot: The instances are created as regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of elastic container instances. Tags are specified in the key-value format.
   */
  tags?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsTags[];
  /**
   * @remarks
   * The buffer time during which a program handles operations before the program stops.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volumes.
   */
  volumes?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumes[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      costOptimization: 'CostOptimization',
      cpu: 'Cpu',
      cpuOptionsCore: 'CpuOptionsCore',
      cpuOptionsThreadsPerCore: 'CpuOptionsThreadsPerCore',
      creationTime: 'CreationTime',
      dataCacheBucket: 'DataCacheBucket',
      dataCacheBurstingEnabled: 'DataCacheBurstingEnabled',
      dataCachePL: 'DataCachePL',
      dataCacheProvisionedIops: 'DataCacheProvisionedIops',
      description: 'Description',
      dnsConfigNameServers: 'DnsConfigNameServers',
      dnsConfigOptions: 'DnsConfigOptions',
      dnsConfigSearches: 'DnsConfigSearches',
      dnsPolicy: 'DnsPolicy',
      egressBandwidth: 'EgressBandwidth',
      eipBandwidth: 'EipBandwidth',
      ephemeralStorage: 'EphemeralStorage',
      gpuDriverVersion: 'GpuDriverVersion',
      hostAliases: 'HostAliases',
      hostName: 'HostName',
      imageRegistryCredentials: 'ImageRegistryCredentials',
      imageSnapshotId: 'ImageSnapshotId',
      ingressBandwidth: 'IngressBandwidth',
      initContainers: 'InitContainers',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypes: 'InstanceTypes',
      ipv6AddressCount: 'Ipv6AddressCount',
      lifecycleState: 'LifecycleState',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      ntpServers: 'NtpServers',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restartPolicy: 'RestartPolicy',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      securityContextSysCtls: 'SecurityContextSysCtls',
      securityGroupId: 'SecurityGroupId',
      slsEnable: 'SlsEnable',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers },
      costOptimization: 'boolean',
      cpu: 'number',
      cpuOptionsCore: 'number',
      cpuOptionsThreadsPerCore: 'number',
      creationTime: 'string',
      dataCacheBucket: 'string',
      dataCacheBurstingEnabled: 'boolean',
      dataCachePL: 'string',
      dataCacheProvisionedIops: 'number',
      description: 'string',
      dnsConfigNameServers: { 'type': 'array', 'itemType': 'string' },
      dnsConfigOptions: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsDnsConfigOptions },
      dnsConfigSearches: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      ephemeralStorage: 'number',
      gpuDriverVersion: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers },
      instanceFamilyLevel: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      lifecycleState: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      ntpServers: { 'type': 'array', 'itemType': 'string' },
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restartPolicy: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      securityContextSysCtls: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls },
      securityGroupId: 'string',
      slsEnable: 'boolean',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumes },
    };
  }

  validate() {
    if(Array.isArray(this.acrRegistryInfos)) {
      $dara.Model.validateArray(this.acrRegistryInfos);
    }
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(Array.isArray(this.dnsConfigNameServers)) {
      $dara.Model.validateArray(this.dnsConfigNameServers);
    }
    if(Array.isArray(this.dnsConfigOptions)) {
      $dara.Model.validateArray(this.dnsConfigOptions);
    }
    if(Array.isArray(this.dnsConfigSearches)) {
      $dara.Model.validateArray(this.dnsConfigSearches);
    }
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    if(Array.isArray(this.imageRegistryCredentials)) {
      $dara.Model.validateArray(this.imageRegistryCredentials);
    }
    if(Array.isArray(this.initContainers)) {
      $dara.Model.validateArray(this.initContainers);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.ntpServers)) {
      $dara.Model.validateArray(this.ntpServers);
    }
    if(Array.isArray(this.securityContextSysCtls)) {
      $dara.Model.validateArray(this.securityContextSysCtls);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

