// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestDnsConfig } from "./CreateContainerGroupRequestDnsConfig";
import { CreateContainerGroupRequestHostSecurityContext } from "./CreateContainerGroupRequestHostSecurityContext";
import { CreateContainerGroupRequestSecurityContext } from "./CreateContainerGroupRequestSecurityContext";
import { CreateContainerGroupRequestAcrRegistryInfo } from "./CreateContainerGroupRequestAcrRegistryInfo";
import { CreateContainerGroupRequestContainer } from "./CreateContainerGroupRequestContainer";
import { CreateContainerGroupRequestHostAliase } from "./CreateContainerGroupRequestHostAliase";
import { CreateContainerGroupRequestImageRegistryCredential } from "./CreateContainerGroupRequestImageRegistryCredential";
import { CreateContainerGroupRequestInitContainer } from "./CreateContainerGroupRequestInitContainer";
import { CreateContainerGroupRequestTag } from "./CreateContainerGroupRequestTag";
import { CreateContainerGroupRequestVolume } from "./CreateContainerGroupRequestVolume";


export class CreateContainerGroupRequest extends $dara.Model {
  dnsConfig?: CreateContainerGroupRequestDnsConfig;
  hostSecurityContext?: CreateContainerGroupRequestHostSecurityContext;
  securityContext?: CreateContainerGroupRequestSecurityContext;
  /**
   * @remarks
   * The information about the Container Registry Enterprise Edition instance that provides the image for the creation of the elastic container instance. For more information, see [Pull images from a Container Registry Enterprise Edition instance without using a secret](https://help.aliyun.com/document_detail/194250.html).
   */
  acrRegistryInfo?: CreateContainerGroupRequestAcrRegistryInfo[];
  /**
   * @remarks
   * The active period of the elastic container instance. After this period expires, the instance is forced to exit. Unit: seconds.
   * 
   * @example
   * 1000
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * Specifies whether to automatically create an EIP and associate it with the elastic container instance.
   * 
   * @example
   * true
   */
  autoCreateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically match image caches. Default value: false.
   * 
   * @example
   * false
   */
  autoMatchImageCache?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-xxxx-12d3-xxxx-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The compute category of the instance. For more information, see [Specify a compute category to create an elastic container instance](https://help.aliyun.com/document_detail/2638061.html).
   */
  computeCategory?: string[];
  /**
   * @remarks
   * The information about the container.
   * 
   * This parameter is required.
   */
  container?: CreateContainerGroupRequestContainer[];
  /**
   * @remarks
   * The name of the elastic container instance (container group). The name must meet the following requirements:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name can contain lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * nginx-test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * Specifies whether to enable container resource view. Container resource view displays the actual container resource data instead of data of the host. If the specifications of the generated elastic container instance are larger than the specifications that you request for when you create the instance, you can enable the ContainerResourceView feature to ensure that the resources that you view in the container are the same as the resources that you request for.
   * 
   * @example
   * false
   */
  containerResourceView?: boolean;
  /**
   * @remarks
   * The path to core dump files. For more information, see [Save core files to volumes](https://help.aliyun.com/document_detail/167801.html).
   * 
   * >  The path cannot start with |. You cannot use core dump files to configure executable programs.``
   * 
   * @example
   * /xx/xx/core
   */
  corePattern?: string;
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the instance.
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * The CPU architecture of the instance. Default value: AMD64. Valid values:
   * 
   * *   AMD64
   * *   ARM64
   * 
   * @example
   * ARM64
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * The number of physical CPU cores. You can specify this parameter for only specific ECS instance types.
   * 
   * @example
   * 2
   */
  cpuOptionsCore?: number;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * 1
   */
  cpuOptionsNuma?: string;
  /**
   * @remarks
   * The number of threads per core. You can specify this parameter for only specific ECS instance types. A value of 1 specifies that Hyper-Threading is disabled.
   * 
   * @example
   * 2
   */
  cpuOptionsThreadsPerCore?: number;
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
   * Specifies whether to enable the performance burst feature when ESSDs AutoPL are used to store data caches. For more information, see [ESSDs AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  dataCacheBurstingEnabled?: boolean;
  /**
   * @remarks
   * The performance level (PL) of the disk that you want to use to store data caches.\\
   * Enhanced SSDs (ESSDs) are preferentially used to store data caches. The default performance level is PL1.
   * 
   * @example
   * PL1
   */
  dataCachePL?: string;
  /**
   * @remarks
   * The input/output operations per second (IOPS) provisioned for ESSDs AutoPL when ESSDs AutoPL are used to store data caches.\\
   * Valid values: 0 to min{50000, 1000 × Storage capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Storage capacity, 50,000}.\\
   * For more information, see [ESSDs AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  dataCacheProvisionedIops?: number;
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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and available resources. If the request passes the dry run, the DryRunOperation error code is returned. Otherwise, an error message is returned.
   * *   false (default): performs a dry run and performs the actual request. If the request passes the dry run, the elastic container instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The maximum bandwidth value for the EIP. Unit: Mbit/s. Default value: 5.\\
   * This parameter is valid only when AutoCreateEip is set to true.
   * 
   * @example
   * 5
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The EIP bandwidth plan that you want to associate with the instance.
   * 
   * @example
   * cbwp-2zeukbj916scmj51m****
   */
  eipCommonBandwidthPackage?: string;
  /**
   * @remarks
   * The line type of the EIP. Default value: BGP. Valid values:
   * 
   * *   BGP: BGP (Multi-ISP) line
   * *   BGP_PRO: BGP (Multi-ISP) Pro line
   * 
   * @example
   * BPG
   */
  eipISP?: string;
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-uf66jeqopgqa9hdn****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The increased capacity of the temporary storage space. Unit: GiB.\\
   * For more information, see [Increase the size of the temporary storage space](https://help.aliyun.com/document_detail/204066.html).
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * Specifies whether to configure the instance to use a fixed IP address. For more information, see [Configure an elastic container instance to use a fixed IP address](https://help.aliyun.com/document_detail/2381086.html).
   * 
   * @example
   * true
   */
  fixedIp?: string;
  /**
   * @remarks
   * The retention period of the fixed IP address after the original instance is released and the fixed IP address becomes idle. Unit: hours. Default value: 48.
   * 
   * @example
   * 24
   */
  fixedIpRetainHour?: number;
  /**
   * @remarks
   * The version of the GPU driver. Default value: tesla=470.82.01. Valid values:
   * 
   * *   tesla=470.82.01
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
   * The alias of the elastic container instance.
   */
  hostAliase?: CreateContainerGroupRequestHostAliase[];
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The image acceleration mode. Valid values:
   * 
   * *   nydus: uses Nydus to accelerate image pulling. The images must support Nydus.
   * *   dadi: uses DADI to accelerate image pulling. The images must support DADI.
   * *   p2p: uses P2P to accelerate image pulling. The images must support p2p.
   * *   imc: uses image caches to accelerate image pulling.
   * 
   * @example
   * imc
   */
  imageAccelerateMode?: string;
  /**
   * @remarks
   * The information about the logon credentials.
   */
  imageRegistryCredential?: CreateContainerGroupRequestImageRegistryCredential[];
  /**
   * @remarks
   * The ID of the image cache. For more information, see [Use image caches to accelerate the creation of instances](https://help.aliyun.com/document_detail/141281.html).
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
   * The information about the init containers.
   */
  initContainer?: CreateContainerGroupRequestInitContainer[];
  /**
   * @remarks
   * The address of the self-managed image repository. When you create an elastic container instance by using an image in a self-managed image repository that uses a self-signed certificate, you must specify this parameter to skip the certificate authentication. This prevents image pull failures caused by certificate authentication failures.
   * 
   * @example
   * "harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"
   */
  insecureRegistry?: string;
  /**
   * @remarks
   * The ECS instance types that you specify to create the elastic container instance. Multiple instance types are supported. For more information, see [Specify ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/114664.html).
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of IPv6 addresses that are assigned to the instance. Set the value to 1. You can assign only one IPv6 address to an elastic container instance.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The maximum IPv6 Internet bandwidth when you set Ipv6GatewayBandwidthEnable to true. Valid values:
   * 
   * *   If the billing method for IPv6 network usage is pay-by-bandwidth, the maximum IPv6 Internet bandwidth ranges from 1 to 2,000 Mbit/s.
   * 
   * *   If the billing method for IPv6 network usage is pay-by-traffic, the maximum IPv6 Internet bandwidth varies based on the edition of the IPv6 gateway.
   * 
   *     *   If the IPv6 gateway is of Free Edition, the maximum IPv6 Internet bandwidth ranges from 1 to 200 Mbit/s.
   *     *   If the IPv6 gateway is of Enterprise Edition, the maximum IPv6 Internet bandwidth ranges from 1 to 500 Mbit/s.
   *     *   If the IPv6 gateway is of Enhanced Enterprise Edition, the maximum IPv6 Internet bandwidth ranges from 1 to 1000 Mbit/s.
   * 
   * The default value is the maximum value in the Internet bandwidth range of the IPv6 gateway.
   * 
   * @example
   * 100
   */
  ipv6GatewayBandwidth?: string;
  /**
   * @remarks
   * Specifies whether to enable Internet access to the elastic container instance over IPv6 addresses.
   * 
   * @example
   * true
   */
  ipv6GatewayBandwidthEnable?: boolean;
  maxPendingMinute?: number;
  /**
   * @remarks
   * The memory size that you want to allocate to the instance. Unit: GiB.
   * 
   * @example
   * 2.0
   */
  memory?: number;
  /**
   * @remarks
   * The endpoints of the Network Time Protocol (NTP) servers.
   * 
   * @example
   * ntp.cloud.aliyuncs.com
   */
  ntpServer?: string[];
  /**
   * @remarks
   * The operating system of the elastic container instance. Default value: Linux. Valid values:
   * 
   * *   Linux
   * *   Windows
   * 
   * >  Windows instances are in invitational preview. To use the operating system, submit a ticket.
   * 
   * @example
   * Windows
   */
  osType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The address of the self-managed image repository. When you create an elastic container instance by using an image in a self-managed image repository that uses the HTTP protocol, you must specify this parameter. This way, Elastic Container Instance pulls the image over the HTTP protocol instead of the default HTTPS protocol. This prevents image pull failures caused by different protocols.
   * 
   * @example
   * "harbor***.pre.com,192.168.XX.XX:5000,reg***.test.com:80"
   */
  plainHttpRegistry?: string;
  /**
   * @remarks
   * The private IP address of the elastic container instance. Only IPv4 addresses are supported. Make sure that the IP address is idle.
   * 
   * @example
   * 172.16.0.1
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the instance Resource Access Management (RAM) role. You can use the same RAM role to access elastic container instances and ECS instances. For more information, see [Use an instance RAM role by calling API operations](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * RamTestRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
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
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The restart policy of the instance. Valid values:
   * 
   * *   Always: Always restarts the instance if a container in the instance exits upon termination.
   * *   Never: Never restarts the instance if a container in the instance exits upon termination.
   * *   OnFailure: Restarts the instance only if a container in the instance exists upon failure with a status code of non-zero.
   * 
   * Default value: Always.
   * 
   * @example
   * Always
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The resource scheduling policy when you specify multiple zones to create an elastic container instance. To specify multiple zones, you can use the VSwitchId to specify multiple vSwitches. Valid values:
   * 
   * *   VSwitchOrdered: The system schedules resources in the sequence of the vSwitches.
   * *   VSwitchRandom: The system schedules resources at random.
   * 
   * For more information, see [Specify multiple zones to create an elastic container instance](https://help.aliyun.com/document_detail/157290.html).
   * 
   * @example
   * VSwitchOrdered
   */
  scheduleStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs. Instances in the same security group can access each other.
   * 
   * If you do not specify a security group, the system automatically uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the container protocols and port numbers that you want to expose. If you do not have a default security group in the region, the system creates a default security group, and then adds the container protocols and port numbers that you specified to the inbound rules of the security group.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use a shared namespace. Default value: false.
   * 
   * @example
   * false
   */
  shareProcessNamespace?: boolean;
  /**
   * @remarks
   * The protection period of the preemptible elastic container instance. Unit: hours. Default value: 1. A value of 0 indicates no protection period.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The maximum hourly price of the preemptible elastic container instance. The value can be accurate to three decimal places.
   * 
   * If you set SpotStrategy to SpotWithPriceLimit, you must specify the SpotPriceLimit parameter.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bid policy for the instance. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable periodical execution.
   * 
   * *   true: enables periodical execution.
   * *   false: disables periodical execution.
   * 
   * @example
   * true
   */
  strictSpot?: boolean;
  /**
   * @remarks
   * The tags that you want to add to the instance. You can bind a maximum of 20 tags. For more information, see [Use tags to manage elastic container instances](https://help.aliyun.com/document_detail/146608.html).
   */
  tag?: CreateContainerGroupRequestTag[];
  /**
   * @remarks
   * The buffer period of time during which the program handles operations before the program is stopped. Unit: seconds.
   * 
   * @example
   * 60
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The IDs of the vSwitches that connect to the instance. You can specify up to 10 vSwitch IDs at a time. Separate multiple vSwitch IDs with commas (,). Example: `vsw-***,vsw-***`.
   * 
   * If you do not specify a vSwitch, the system automatically uses the default vSwitch in the default VPC in the region that you selected. If you do not have a default VPC or a default vSwitch in the region, the system automatically creates a default VPC and a default vSwitch.
   * 
   * >  The number of IP addresses in the vSwitch CIDR block determines the maximum number of elastic container instances that you can create for the vSwitch. Before you create elastic container instances, you must plan the CIDR block of the vSwitch.
   * 
   * @example
   * vsw-bp1xpiowfm5vo8o3c****,vsw-bp1rkyjgr1xwoho6k****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The information about the volume that you want to mount to the container.
   */
  volume?: CreateContainerGroupRequestVolume[];
  /**
   * @remarks
   * The zone ID of the instance. If you do not specify this parameter, the system selects a zone.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsConfig: 'DnsConfig',
      hostSecurityContext: 'HostSecurityContext',
      securityContext: 'SecurityContext',
      acrRegistryInfo: 'AcrRegistryInfo',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      autoCreateEip: 'AutoCreateEip',
      autoMatchImageCache: 'AutoMatchImageCache',
      clientToken: 'ClientToken',
      computeCategory: 'ComputeCategory',
      container: 'Container',
      containerGroupName: 'ContainerGroupName',
      containerResourceView: 'ContainerResourceView',
      corePattern: 'CorePattern',
      cpu: 'Cpu',
      cpuArchitecture: 'CpuArchitecture',
      cpuOptionsCore: 'CpuOptionsCore',
      cpuOptionsNuma: 'CpuOptionsNuma',
      cpuOptionsThreadsPerCore: 'CpuOptionsThreadsPerCore',
      dataCacheBucket: 'DataCacheBucket',
      dataCacheBurstingEnabled: 'DataCacheBurstingEnabled',
      dataCachePL: 'DataCachePL',
      dataCacheProvisionedIops: 'DataCacheProvisionedIops',
      dnsPolicy: 'DnsPolicy',
      dryRun: 'DryRun',
      egressBandwidth: 'EgressBandwidth',
      eipBandwidth: 'EipBandwidth',
      eipCommonBandwidthPackage: 'EipCommonBandwidthPackage',
      eipISP: 'EipISP',
      eipInstanceId: 'EipInstanceId',
      ephemeralStorage: 'EphemeralStorage',
      fixedIp: 'FixedIp',
      fixedIpRetainHour: 'FixedIpRetainHour',
      gpuDriverVersion: 'GpuDriverVersion',
      hostAliase: 'HostAliase',
      hostName: 'HostName',
      imageAccelerateMode: 'ImageAccelerateMode',
      imageRegistryCredential: 'ImageRegistryCredential',
      imageSnapshotId: 'ImageSnapshotId',
      ingressBandwidth: 'IngressBandwidth',
      initContainer: 'InitContainer',
      insecureRegistry: 'InsecureRegistry',
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      ipv6GatewayBandwidth: 'Ipv6GatewayBandwidth',
      ipv6GatewayBandwidthEnable: 'Ipv6GatewayBandwidthEnable',
      maxPendingMinute: 'MaxPendingMinute',
      memory: 'Memory',
      ntpServer: 'NtpServer',
      osType: 'OsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plainHttpRegistry: 'PlainHttpRegistry',
      privateIpAddress: 'PrivateIpAddress',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restartPolicy: 'RestartPolicy',
      scheduleStrategy: 'ScheduleStrategy',
      securityGroupId: 'SecurityGroupId',
      shareProcessNamespace: 'ShareProcessNamespace',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      strictSpot: 'StrictSpot',
      tag: 'Tag',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      vSwitchId: 'VSwitchId',
      volume: 'Volume',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsConfig: CreateContainerGroupRequestDnsConfig,
      hostSecurityContext: CreateContainerGroupRequestHostSecurityContext,
      securityContext: CreateContainerGroupRequestSecurityContext,
      acrRegistryInfo: { 'type': 'array', 'itemType': CreateContainerGroupRequestAcrRegistryInfo },
      activeDeadlineSeconds: 'number',
      autoCreateEip: 'boolean',
      autoMatchImageCache: 'boolean',
      clientToken: 'string',
      computeCategory: { 'type': 'array', 'itemType': 'string' },
      container: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainer },
      containerGroupName: 'string',
      containerResourceView: 'boolean',
      corePattern: 'string',
      cpu: 'number',
      cpuArchitecture: 'string',
      cpuOptionsCore: 'number',
      cpuOptionsNuma: 'string',
      cpuOptionsThreadsPerCore: 'number',
      dataCacheBucket: 'string',
      dataCacheBurstingEnabled: 'boolean',
      dataCachePL: 'string',
      dataCacheProvisionedIops: 'number',
      dnsPolicy: 'string',
      dryRun: 'boolean',
      egressBandwidth: 'number',
      eipBandwidth: 'number',
      eipCommonBandwidthPackage: 'string',
      eipISP: 'string',
      eipInstanceId: 'string',
      ephemeralStorage: 'number',
      fixedIp: 'string',
      fixedIpRetainHour: 'number',
      gpuDriverVersion: 'string',
      hostAliase: { 'type': 'array', 'itemType': CreateContainerGroupRequestHostAliase },
      hostName: 'string',
      imageAccelerateMode: 'string',
      imageRegistryCredential: { 'type': 'array', 'itemType': CreateContainerGroupRequestImageRegistryCredential },
      imageSnapshotId: 'string',
      ingressBandwidth: 'number',
      initContainer: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainer },
      insecureRegistry: 'string',
      instanceType: 'string',
      ipv6AddressCount: 'number',
      ipv6GatewayBandwidth: 'string',
      ipv6GatewayBandwidthEnable: 'boolean',
      maxPendingMinute: 'number',
      memory: 'number',
      ntpServer: { 'type': 'array', 'itemType': 'string' },
      osType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plainHttpRegistry: 'string',
      privateIpAddress: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restartPolicy: 'string',
      scheduleStrategy: 'string',
      securityGroupId: 'string',
      shareProcessNamespace: 'boolean',
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      strictSpot: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateContainerGroupRequestTag },
      terminationGracePeriodSeconds: 'number',
      vSwitchId: 'string',
      volume: { 'type': 'array', 'itemType': CreateContainerGroupRequestVolume },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dnsConfig && typeof (this.dnsConfig as any).validate === 'function') {
      (this.dnsConfig as any).validate();
    }
    if(this.hostSecurityContext && typeof (this.hostSecurityContext as any).validate === 'function') {
      (this.hostSecurityContext as any).validate();
    }
    if(this.securityContext && typeof (this.securityContext as any).validate === 'function') {
      (this.securityContext as any).validate();
    }
    if(Array.isArray(this.acrRegistryInfo)) {
      $dara.Model.validateArray(this.acrRegistryInfo);
    }
    if(Array.isArray(this.computeCategory)) {
      $dara.Model.validateArray(this.computeCategory);
    }
    if(Array.isArray(this.container)) {
      $dara.Model.validateArray(this.container);
    }
    if(Array.isArray(this.hostAliase)) {
      $dara.Model.validateArray(this.hostAliase);
    }
    if(Array.isArray(this.imageRegistryCredential)) {
      $dara.Model.validateArray(this.imageRegistryCredential);
    }
    if(Array.isArray(this.initContainer)) {
      $dara.Model.validateArray(this.initContainer);
    }
    if(Array.isArray(this.ntpServer)) {
      $dara.Model.validateArray(this.ntpServer);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.volume)) {
      $dara.Model.validateArray(this.volume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

