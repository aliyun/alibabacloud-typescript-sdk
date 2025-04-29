// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags";
import { DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes } from "./DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes";


export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration extends $dara.Model {
  /**
   * @remarks
   * The information about the Container Registry Enterprise Edition instance.
   */
  acrRegistryInfos?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos[];
  /**
   * @remarks
   * The validity period of the scaling configuration. Unit: seconds.
   * 
   * @example
   * 60
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Indicates whether an elastic IP address (EIP) is automatically created and bound to the elastic container instance.
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
   * true
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The computing power types. A value of economy indicates that economic instance types are returned.
   */
  computeCategory?: string[];
  /**
   * @remarks
   * The name of the container group.
   * 
   * @example
   * test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The containers in the elastic container instance.
   */
  containers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers[];
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
   * The number of vCPUs that are allocated to the elastic container instance.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. You can specify this parameter for only specific instance types.
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. You can specify this parameter for only specific instance types. A value of 1 indicates that Hyper-Threading is disabled. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
  /**
   * @remarks
   * The time when the scaling configuration was created.
   * 
   * @example
   * 2023-05-10T02:39:15Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The bucket that caches data.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the ESSD AutoPL disk that caches data. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk that caches data. We recommend that you use enhanced SSDs (ESSDs). Valid values:
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
   * The provisioned read/write IOPS of the ESSD AutoPL disk that caches data. Valid values: 0 to min{50,000, 1,000 x *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50* x Capacity, 50,000}.
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
   * The IP addresses of DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The DNS options.
   */
  dnsConfigOptions?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions[];
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
   * The maximum outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 10485760
   */
  egressBandwidth?: number;
  /**
   * @remarks
   * The bandwidth of the EIP. Default value: 5. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The bound EIP bandwidth plan.
   * 
   * @example
   * cbwp-bp1rxai1z4b1an454xl8m
   */
  eipCommonBandwidthPackage?: string;
  /**
   * @remarks
   * The line type of the EIP. Valid values:
   * 
   * *   BGP: BGP (Multi-ISP) lines
   * *   BGP_PRO: BGP (Multi-ISP) Pro
   * 
   * @example
   * BGP
   */
  eipISP?: string;
  /**
   * @remarks
   * The ID of the IP address pool.
   * 
   * @example
   * pippool-bp187arfugi543y1s****
   */
  eipPublicIpAddressPoolId?: string;
  /**
   * @remarks
   * The size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The custom hostname mappings of a container in the elastic container instance.
   */
  hostAliases?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * hostname
   */
  hostName?: string;
  /**
   * @remarks
   * The image repositories.
   */
  imageRegistryCredentials?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials[];
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
   * The maximum inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 1024000
   */
  ingressBandwidth?: number;
  /**
   * @remarks
   * The init containers.
   */
  initContainers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers[];
  /**
   * @remarks
   * The level of the instance family, which is used to filter instance types that meet the specified criteria. This parameter takes effect only if `CostOptimization` is set to true. Valid values:
   * 
   * *   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective but may not provide stable computing performance in a consistent manner. Instance types of this level are suitable for business scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html) of burstable instances.
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
   * The state of the scaling configuration in the scaling group. Valid values:
   * 
   * *   Active: The scaling configuration is active in the scaling group. Auto Scaling uses the active scaling configuration to automatically create elastic container instances.
   * *   Inactive: The scaling configuration is inactive in the scaling group. Inactive scaling configurations are retained in scaling groups. However, Auto Scaling does not use inactive scaling groups to create elastic container instances.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of an elastic container instance as a Server Load Balancer (SLB) backend server. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
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
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The endpoints of the Network Time Protocol (NTP) servers.
   */
  ntpServers?: string[];
  /**
   * @remarks
   * The Resource Access Management (RAM) role of the elastic container instance. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see [Use the instance RAM role by calling APIs](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * ram:PassRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling configuration belongs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmwozpmmksakq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The restart policy of the container group. Valid values:
   * 
   * *   Never: The container group is never restarted.
   * *   Always: The container group is always restarted.
   * *   OnFailure: The container group is restarted upon failures.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-2zec39vg84usxdocme6a
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
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1frlu04fq4zv65b1bh
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The system information of the security context in which the elastic container instance is run.
   */
  securityContextSysCtls?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls[];
  /**
   * @remarks
   * The ID of the security group with which the elastic container instance is associated. Elastic container instances that are associated with the same security group can access each other.
   * 
   * @example
   * sg-bp18kz60mefs****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Indicates whether user logs are collected. Default value: **false**.
   * 
   * @example
   * false
   */
  slsEnable?: boolean;
  /**
   * @remarks
   * The maximum hourly price for the preemptible instance.
   * 
   * This parameter is returned only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The preemption policy of the instance. Valid values:
   * 
   * *   NoSpot: The instance is created as a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of the elastic container instance. Tags are specified in the key-value format.
   */
  tags?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags[];
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
  volumes?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      computeCategory: 'ComputeCategory',
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
      eipCommonBandwidthPackage: 'EipCommonBandwidthPackage',
      eipISP: 'EipISP',
      eipPublicIpAddressPoolId: 'EipPublicIpAddressPoolId',
      ephemeralStorage: 'EphemeralStorage',
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
      acrRegistryInfos: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      computeCategory: { 'type': 'array', 'itemType': 'string' },
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers },
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
      dnsConfigOptions: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions },
      dnsConfigSearches: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      eipCommonBandwidthPackage: 'string',
      eipISP: 'string',
      eipPublicIpAddressPoolId: 'string',
      ephemeralStorage: 'number',
      hostAliases: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers },
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
      securityContextSysCtls: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls },
      securityGroupId: 'string',
      slsEnable: 'boolean',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes },
    };
  }

  validate() {
    if(Array.isArray(this.acrRegistryInfos)) {
      $dara.Model.validateArray(this.acrRegistryInfos);
    }
    if(Array.isArray(this.computeCategory)) {
      $dara.Model.validateArray(this.computeCategory);
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

