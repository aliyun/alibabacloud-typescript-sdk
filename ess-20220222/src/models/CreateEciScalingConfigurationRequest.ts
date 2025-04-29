// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEciScalingConfigurationRequestAcrRegistryInfos } from "./CreateEciScalingConfigurationRequestAcrRegistryInfos";
import { CreateEciScalingConfigurationRequestContainers } from "./CreateEciScalingConfigurationRequestContainers";
import { CreateEciScalingConfigurationRequestDnsConfigOptions } from "./CreateEciScalingConfigurationRequestDnsConfigOptions";
import { CreateEciScalingConfigurationRequestHostAliases } from "./CreateEciScalingConfigurationRequestHostAliases";
import { CreateEciScalingConfigurationRequestImageRegistryCredentials } from "./CreateEciScalingConfigurationRequestImageRegistryCredentials";
import { CreateEciScalingConfigurationRequestInitContainers } from "./CreateEciScalingConfigurationRequestInitContainers";
import { CreateEciScalingConfigurationRequestSecurityContextSysctls } from "./CreateEciScalingConfigurationRequestSecurityContextSysctls";
import { CreateEciScalingConfigurationRequestTags } from "./CreateEciScalingConfigurationRequestTags";
import { CreateEciScalingConfigurationRequestVolumes } from "./CreateEciScalingConfigurationRequestVolumes";


export class CreateEciScalingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The Container Registry Enterprise Edition instances.
   */
  acrRegistryInfos?: CreateEciScalingConfigurationRequestAcrRegistryInfos[];
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
   * Specifies whether to automatically create elastic IP addresses (EIPs) and bind the EIPs to elastic container instances.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically match the image cache. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The name series of elastic container instances.
   * 
   * If you want to use an ordered instance name, specify the value for this parameter in the following format: name_prefix[begin_number,bits]name_suffix.
   * 
   * @example
   * nginx-test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The containers on the elastic container instance.
   */
  containers?: CreateEciScalingConfigurationRequestContainers[];
  /**
   * @remarks
   * Specifies whether to enable the Cost Optimization feature. Valid values:
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
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The number of physical CPU cores. You can specify this parameter for specific instance types. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. You can specify this parameter for specific instance types. A value of 1 specifies that Hyper-Threading is disabled. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
  /**
   * @remarks
   * The bucket that you want to use to store data caches.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature when ESSD AutoPL disks are used to store data caches. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The PL of the cloud disk that you want to use to store data caches. We recommend that you use ESSDs. Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * >  For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The provisioned IOPS of the ESSD AutoPL disk that you want to use to store data caches. Valid values: 0 to min{50,000, 1,000 × *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × *Capacity, 50,000}.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >  This parameter is unavailable for use.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses of the DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The options. Each option is a name-value pair. The value in the name-value pair is optional.
   */
  dnsConfigOptions?: CreateEciScalingConfigurationRequestDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of the DNS servers.
   */
  dnsConfigSearchs?: string[];
  /**
   * @remarks
   * The Domain Name System (DNS) policy. Valid values:
   * 
   * *   None: uses the DNS that is specified by DnsConfig.
   * *   Default: uses the DNS that is specified for the runtime environment.
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
   * >  This parameter is unavailable for use.
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * The size of the temporary storage space. By default, an Enterprise SSD (ESSD) of performance level 1 (PL1) is used. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The version of the GPU driver. Valid values:
   * 
   * *   tesla=470.82.01 (default)
   * *   tesla=525.85.12
   * 
   * >  You can switch the GPU driver version only for a few Elastic Compute Service (ECS) instance types. For more information, see [Specify GPU-accelerated ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/2579486.html).
   * 
   * @example
   * tesla=525.85.12
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The custom hostnames of the containers.
   */
  hostAliases?: CreateEciScalingConfigurationRequestHostAliases[];
  /**
   * @remarks
   * The hostname series of elastic container instances.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The image repositories.
   */
  imageRegistryCredentials?: CreateEciScalingConfigurationRequestImageRegistryCredentials[];
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
  initContainers?: CreateEciScalingConfigurationRequestInitContainers[];
  /**
   * @remarks
   * The level of the instance family. You can specify this parameter to match the available instance types. This parameter takes effect only if you set `CostOptimization` to true. Valid values:
   * 
   * *   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective, but may not ensure stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html) of burstable instances.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The ECS instance types that you want to use to create elastic container instances. You can specify up to five ECS instance types.
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
   * The load balancing weight of each elastic container instance. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The memory size per elastic container instance. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The endpoints of the Network Time Protocol (NTP) servers.
   */
  ntpServers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role. Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see [RAM roles](https://help.aliyun.com/document_detail/61175.html).
   * 
   * @example
   * RamTestRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The restart policy of elastic container instances. Valid values:
   * 
   * *   Always: always restarts elastic container instances.
   * *   Never: never restarts elastic container instances.
   * *   OnFailure: restarts elastic container instances upon failures.
   * 
   * Default value: Always.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter or a digit.
   * 
   * The name of the scaling configuration must be unique in a scaling group within a region. If you do not specify this parameter, the value of ScalingConfigurationId is used.
   * 
   * @example
   * scalingconfig****
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling configuration belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The system information of the security context in which the elastic container instance runs.
   */
  securityContextSysctls?: CreateEciScalingConfigurationRequestSecurityContextSysctls[];
  /**
   * @remarks
   * The ID of the security group to which elastic container instances belong. Elastic container instances that belong to the same security group can communicate with each other.
   * 
   * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group, and then adds the container protocols and port numbers that you specified to the inbound rules of the security group.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The maximum hourly price of preemptible elastic container instances. The value can be accurate to three decimal places.
   * 
   * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The instance bidding policy. Valid values:
   * 
   * *   NoSpot: The instances are created as pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are preemptible instances for which you can specify the maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The tags of elastic container instances. Tags must be specified as key-value pairs. You can specify up to 20 tags for each elastic container instance. When you specify Key and Value, take note of the following items:
   * 
   * *   A tag key can be up to 64 characters in length. The key cannot start with acs: or aliyun or contain `http://` or `https://`. You cannot specify an empty string as a tag key.
   * *   A tag value can be up to 128 characters in length. The value cannot start with acs: or aliyun or contain `http://` or `https://`. You can specify an empty string as a tag value.
   */
  tags?: CreateEciScalingConfigurationRequestTags[];
  /**
   * @remarks
   * The buffer time during which a program handles operations before the program stops. Unit: seconds.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volumes.
   */
  volumes?: CreateEciScalingConfigurationRequestVolumes[];
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
      dataCacheBucket: 'DataCacheBucket',
      dataCacheBurstingEnabled: 'DataCacheBurstingEnabled',
      dataCachePL: 'DataCachePL',
      dataCacheProvisionedIops: 'DataCacheProvisionedIops',
      description: 'Description',
      dnsConfigNameServers: 'DnsConfigNameServers',
      dnsConfigOptions: 'DnsConfigOptions',
      dnsConfigSearchs: 'DnsConfigSearchs',
      dnsPolicy: 'DnsPolicy',
      egressBandwidth: 'EgressBandwidth',
      eipBandwidth: 'EipBandwidth',
      enableSls: 'EnableSls',
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
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      ntpServers: 'NtpServers',
      ownerId: 'OwnerId',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      restartPolicy: 'RestartPolicy',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      securityContextSysctls: 'SecurityContextSysctls',
      securityGroupId: 'SecurityGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainers },
      costOptimization: 'boolean',
      cpu: 'number',
      cpuOptionsCore: 'number',
      cpuOptionsThreadsPerCore: 'number',
      dataCacheBucket: 'string',
      dataCacheBurstingEnabled: 'boolean',
      dataCachePL: 'string',
      dataCacheProvisionedIops: 'number',
      description: 'string',
      dnsConfigNameServers: { 'type': 'array', 'itemType': 'string' },
      dnsConfigOptions: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestDnsConfigOptions },
      dnsConfigSearchs: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      enableSls: 'boolean',
      ephemeralStorage: 'number',
      gpuDriverVersion: 'string',
      hostAliases: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainers },
      instanceFamilyLevel: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      loadBalancerWeight: 'number',
      memory: 'number',
      ntpServers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      restartPolicy: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      securityContextSysctls: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestSecurityContextSysctls },
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestVolumes },
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
    if(Array.isArray(this.dnsConfigSearchs)) {
      $dara.Model.validateArray(this.dnsConfigSearchs);
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
    if(Array.isArray(this.securityContextSysctls)) {
      $dara.Model.validateArray(this.securityContextSysctls);
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

