// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyEciScalingConfigurationRequestAcrRegistryInfos } from "./ModifyEciScalingConfigurationRequestAcrRegistryInfos";
import { ModifyEciScalingConfigurationRequestContainers } from "./ModifyEciScalingConfigurationRequestContainers";
import { ModifyEciScalingConfigurationRequestDnsConfigOptions } from "./ModifyEciScalingConfigurationRequestDnsConfigOptions";
import { ModifyEciScalingConfigurationRequestHostAliases } from "./ModifyEciScalingConfigurationRequestHostAliases";
import { ModifyEciScalingConfigurationRequestImageRegistryCredentials } from "./ModifyEciScalingConfigurationRequestImageRegistryCredentials";
import { ModifyEciScalingConfigurationRequestInitContainers } from "./ModifyEciScalingConfigurationRequestInitContainers";
import { ModifyEciScalingConfigurationRequestSecurityContextSysCtls } from "./ModifyEciScalingConfigurationRequestSecurityContextSysCtls";
import { ModifyEciScalingConfigurationRequestTags } from "./ModifyEciScalingConfigurationRequestTags";
import { ModifyEciScalingConfigurationRequestVolumes } from "./ModifyEciScalingConfigurationRequestVolumes";


export class ModifyEciScalingConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The Container Registry Enterprise Edition instances.
   */
  acrRegistryInfos?: ModifyEciScalingConfigurationRequestAcrRegistryInfos[];
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
   * Specifies whether to automatically match image caches.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The name series of elastic container instances. Naming conventions:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name can contain only lowercase letters, digits, and hyphens (-). The name cannot start or end with a hyphen (-).
   * 
   * @example
   * nginx-test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The containers.
   */
  containers?: ModifyEciScalingConfigurationRequestContainers[];
  /**
   * @remarks
   * The update mode of containers. Valid values:
   * 
   * *   RenewUpdate: full update mode. This value takes effect based on the value of Containers in an update request. This value indicates that the previous setting of Containers is overwritten.
   * *   IncrementalUpdate: incremental update mode. Container matching is performed based on the Container.name value. Only the parameters that are included in the request parameters are updated.
   * 
   * Default value: RenewUpdate.
   * 
   * @example
   * RenewUpdate
   */
  containersUpdateType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Cost Optimization feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
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
   * The number of physical CPU cores. You can specify this parameter for only specific ECS instance types. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * The number of threads per core. You can specify this parameter for only specific instance types. A value of 1 specifies that Hyper-Threading is disabled. For more information, see [Specify CPU options](https://help.aliyun.com/document_detail/197781.html).
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
  /**
   * @remarks
   * The bucket in which data caches are stored.
   * 
   * @example
   * default
   */
  dataCacheBucket?: string;
  /**
   * @remarks
   * Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk in which data caches are stored. Valid values:
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
   * The performance level (PL) of the cloud disk in which data caches are stored. We recommend that you use Enterprise SSDs (ESSDs). Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
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
   * The provisioned read/write IOPS of the ESSD AutoPL disk in which data caches are stored. Valid values: 0 to min{50,000, 1,000 × *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800+50 x *Capacity, 50,000}.
   * 
   * >  For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
  /**
   * @remarks
   * >  This parameter is unavailable.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The IP addresses of DNS servers.
   */
  dnsConfigNameServers?: string[];
  /**
   * @remarks
   * The options. Each option is a name-value pair. The value in the name-value pair is optional.
   */
  dnsConfigOptions?: ModifyEciScalingConfigurationRequestDnsConfigOptions[];
  /**
   * @remarks
   * The search domains of DNS servers.
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
   * The EIP bandwidth.
   * 
   * Default value: 5. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * >  This parameter is not available for use.
   * 
   * @example
   * false
   */
  enableSls?: boolean;
  /**
   * @remarks
   * The size of the temporary storage space. By default, an Enterprise SSD (ESSD) of the PL1 type is used. Unit: GiB.
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
   * The hosts.
   */
  hostAliases?: ModifyEciScalingConfigurationRequestHostAliases[];
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
  imageRegistryCredentials?: ModifyEciScalingConfigurationRequestImageRegistryCredentials[];
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
  initContainers?: ModifyEciScalingConfigurationRequestInitContainers[];
  /**
   * @remarks
   * The level of the instance family, which is used to filter instance types that meet the specified criteria. This parameter takes effect only if you set `CostOptimization` to true. Valid values:
   * 
   * *   EntryLevel: entry level (shared instance type). Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html) of burstable instances.
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The ECS instance types. You can specify up to five instance types.
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
   * The load balancing weight of each backend server. Valid values: 1 to 100.
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
   * The endpoints of Network Time Protocol (NTP) servers.
   */
  ntpServers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role. You can use the same RAM role to access elastic container instances and Elastic Compute Service (ECS) instances. For more information, see [Use an instance RAM role by calling API operations](https://help.aliyun.com/document_detail/61178.html).
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
   * The instance restart policy. Valid values:
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
   * The name of a scaling configuration must be unique in the specified region. If you do not specify this parameter, the value of ScalingConfigurationId is used.
   * 
   * @example
   * test-modify
   */
  scalingConfigurationName?: string;
  /**
   * @remarks
   * The security contexts in which the elastic container instance runs.
   */
  securityContextSysCtls?: ModifyEciScalingConfigurationRequestSecurityContextSysCtls[];
  /**
   * @remarks
   * The ID of the security group to which elastic container instances belong. Elastic container instances that belong to the same security group can communicate with each other.
   * 
   * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and then adds the container protocols and port numbers that you specified to the inbound rules of the security group.
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
   * The tags.
   */
  tags?: ModifyEciScalingConfigurationRequestTags[];
  /**
   * @remarks
   * The buffer period during which the program handles operations before the program is stopped. Unit: seconds.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The volumes.
   */
  volumes?: ModifyEciScalingConfigurationRequestVolumes[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      containersUpdateType: 'ContainersUpdateType',
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
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      securityContextSysCtls: 'SecurityContextSysCtls',
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
      acrRegistryInfos: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestAcrRegistryInfos },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainers },
      containersUpdateType: 'string',
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
      dnsConfigOptions: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestDnsConfigOptions },
      dnsConfigSearchs: { 'type': 'array', 'itemType': 'string' },
      dnsPolicy: 'string',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      enableSls: 'boolean',
      ephemeralStorage: 'number',
      gpuDriverVersion: 'string',
      hostAliases: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestHostAliases },
      hostName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestImageRegistryCredentials },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainers: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainers },
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
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      securityContextSysCtls: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestSecurityContextSysCtls },
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestTags },
      terminationGracePeriodSeconds: 'number',
      volumes: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestVolumes },
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

