// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CommitContainerRequest extends $tea.Model {
  acrRegistryInfo?: CommitContainerRequestAcrRegistryInfo;
  arn?: CommitContainerRequestArn;
  containerGroupId?: string;
  containerName?: string;
  image?: CommitContainerRequestImage;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfo: 'AcrRegistryInfo',
      arn: 'Arn',
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      image: 'Image',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfo: CommitContainerRequestAcrRegistryInfo,
      arn: CommitContainerRequestArn,
      containerGroupId: 'string',
      containerName: 'string',
      image: CommitContainerRequestImage,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContainerResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContainerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CommitContainerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CommitContainerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDataCacheRequest extends $tea.Model {
  bucket?: string;
  clientToken?: string;
  dataCacheId?: string;
  destinationRegionId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  path?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retentionDays?: number;
  tag?: CopyDataCacheRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataCacheId: 'DataCacheId',
      destinationRegionId: 'DestinationRegionId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataCacheId: 'string',
      destinationRegionId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      tag: { 'type': 'array', 'itemType': CopyDataCacheRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDataCacheResponseBody extends $tea.Model {
  dataCacheId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCacheId: 'DataCacheId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCacheId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDataCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyDataCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyDataCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequest extends $tea.Model {
  dnsConfig?: CreateContainerGroupRequestDnsConfig;
  hostSecurityContext?: CreateContainerGroupRequestHostSecurityContext;
  securityContext?: CreateContainerGroupRequestSecurityContext;
  acrRegistryInfo?: CreateContainerGroupRequestAcrRegistryInfo[];
  activeDeadlineSeconds?: number;
  autoCreateEip?: boolean;
  autoMatchImageCache?: boolean;
  clientToken?: string;
  computeCategory?: string[];
  container?: CreateContainerGroupRequestContainer[];
  containerGroupName?: string;
  containerResourceView?: boolean;
  corePattern?: string;
  cpu?: number;
  cpuArchitecture?: string;
  cpuOptionsCore?: number;
  cpuOptionsNuma?: string;
  cpuOptionsThreadsPerCore?: number;
  dataCacheBucket?: string;
  dataCacheBurstingEnabled?: boolean;
  dataCachePL?: string;
  dataCacheProvisionedIops?: number;
  dnsPolicy?: string;
  dryRun?: boolean;
  egressBandwidth?: number;
  eipBandwidth?: number;
  eipCommonBandwidthPackage?: string;
  eipISP?: string;
  eipInstanceId?: string;
  ephemeralStorage?: number;
  fixedIp?: string;
  fixedIpRetainHour?: number;
  gpuDriverVersion?: string;
  hostAliase?: CreateContainerGroupRequestHostAliase[];
  hostName?: string;
  imageAccelerateMode?: string;
  imageRegistryCredential?: CreateContainerGroupRequestImageRegistryCredential[];
  imageSnapshotId?: string;
  ingressBandwidth?: number;
  initContainer?: CreateContainerGroupRequestInitContainer[];
  insecureRegistry?: string;
  instanceType?: string;
  ipv6AddressCount?: number;
  ipv6GatewayBandwidth?: string;
  ipv6GatewayBandwidthEnable?: boolean;
  memory?: number;
  ntpServer?: string[];
  osType?: string;
  overheadReservationOption?: CreateContainerGroupRequestOverheadReservationOption;
  ownerAccount?: string;
  ownerId?: number;
  plainHttpRegistry?: string;
  privateIpAddress?: string;
  ramRoleName?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restartPolicy?: string;
  scheduleStrategy?: string;
  securityGroupId?: string;
  shareProcessNamespace?: boolean;
  spotDuration?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  strictSpot?: boolean;
  tag?: CreateContainerGroupRequestTag[];
  terminationGracePeriodSeconds?: number;
  vSwitchId?: string;
  volume?: CreateContainerGroupRequestVolume[];
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
      memory: 'Memory',
      ntpServer: 'NtpServer',
      osType: 'OsType',
      overheadReservationOption: 'OverheadReservationOption',
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
      memory: 'number',
      ntpServer: { 'type': 'array', 'itemType': 'string' },
      osType: 'string',
      overheadReservationOption: CreateContainerGroupRequestOverheadReservationOption,
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupResponseBody extends $tea.Model {
  containerGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCacheRequest extends $tea.Model {
  bucket?: string;
  clientToken?: string;
  dataSource?: CreateDataCacheRequestDataSource;
  eipCreateParam?: CreateDataCacheRequestEipCreateParam;
  eipInstanceId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  path?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retentionDays?: number;
  securityGroupId?: string;
  size?: number;
  tag?: CreateDataCacheRequestTag[];
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataSource: 'DataSource',
      eipCreateParam: 'EipCreateParam',
      eipInstanceId: 'EipInstanceId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      size: 'Size',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataSource: CreateDataCacheRequestDataSource,
      eipCreateParam: CreateDataCacheRequestEipCreateParam,
      eipInstanceId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': CreateDataCacheRequestTag },
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCacheResponseBody extends $tea.Model {
  dataCacheId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataCacheId: 'DataCacheId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCacheId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDataCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequest extends $tea.Model {
  acrRegistryInfo?: CreateImageCacheRequestAcrRegistryInfo[];
  annotations?: string;
  autoMatchImageCache?: boolean;
  clientToken?: string;
  eipInstanceId?: string;
  eliminationStrategy?: string;
  flash?: boolean;
  flashCopyCount?: number;
  image?: string[];
  imageCacheName?: string;
  imageCacheSize?: number;
  imageRegistryCredential?: CreateImageCacheRequestImageRegistryCredential[];
  insecureRegistry?: string;
  ownerAccount?: string;
  ownerId?: number;
  plainHttpRegistry?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retentionDays?: number;
  securityGroupId?: string;
  standardCopyCount?: number;
  tag?: CreateImageCacheRequestTag[];
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfo: 'AcrRegistryInfo',
      annotations: 'Annotations',
      autoMatchImageCache: 'AutoMatchImageCache',
      clientToken: 'ClientToken',
      eipInstanceId: 'EipInstanceId',
      eliminationStrategy: 'EliminationStrategy',
      flash: 'Flash',
      flashCopyCount: 'FlashCopyCount',
      image: 'Image',
      imageCacheName: 'ImageCacheName',
      imageCacheSize: 'ImageCacheSize',
      imageRegistryCredential: 'ImageRegistryCredential',
      insecureRegistry: 'InsecureRegistry',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plainHttpRegistry: 'PlainHttpRegistry',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      standardCopyCount: 'StandardCopyCount',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfo: { 'type': 'array', 'itemType': CreateImageCacheRequestAcrRegistryInfo },
      annotations: 'string',
      autoMatchImageCache: 'boolean',
      clientToken: 'string',
      eipInstanceId: 'string',
      eliminationStrategy: 'string',
      flash: 'boolean',
      flashCopyCount: 'number',
      image: { 'type': 'array', 'itemType': 'string' },
      imageCacheName: 'string',
      imageCacheSize: 'number',
      imageRegistryCredential: { 'type': 'array', 'itemType': CreateImageCacheRequestImageRegistryCredential },
      insecureRegistry: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plainHttpRegistry: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      standardCopyCount: 'number',
      tag: { 'type': 'array', 'itemType': CreateImageCacheRequestTag },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheResponseBody extends $tea.Model {
  containerGroupId?: string;
  imageCacheId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      imageCacheId: 'ImageCacheId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      imageCacheId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateImageCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceOpsTaskRequest extends $tea.Model {
  containerGroupId?: string;
  opsType?: string;
  opsValue?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      opsType: 'OpsType',
      opsValue: 'OpsValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      opsType: 'string',
      opsValue: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceOpsTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceOpsTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceOpsTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceOpsTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualNodeRequest extends $tea.Model {
  clientToken?: string;
  clusterDNS?: string;
  clusterDomain?: string;
  customResources?: string;
  eipInstanceId?: string;
  enablePublicNetwork?: boolean;
  kubeConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  tag?: CreateVirtualNodeRequestTag[];
  taint?: CreateVirtualNodeRequestTaint[];
  tlsBootstrapEnabled?: boolean;
  vSwitchId?: string;
  virtualNodeName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterDNS: 'ClusterDNS',
      clusterDomain: 'ClusterDomain',
      customResources: 'CustomResources',
      eipInstanceId: 'EipInstanceId',
      enablePublicNetwork: 'EnablePublicNetwork',
      kubeConfig: 'KubeConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      taint: 'Taint',
      tlsBootstrapEnabled: 'TlsBootstrapEnabled',
      vSwitchId: 'VSwitchId',
      virtualNodeName: 'VirtualNodeName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterDNS: 'string',
      clusterDomain: 'string',
      customResources: 'string',
      eipInstanceId: 'string',
      enablePublicNetwork: 'boolean',
      kubeConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVirtualNodeRequestTag },
      taint: { 'type': 'array', 'itemType': CreateVirtualNodeRequestTaint },
      tlsBootstrapEnabled: 'boolean',
      vSwitchId: 'string',
      virtualNodeName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualNodeResponseBody extends $tea.Model {
  requestId?: string;
  virtualNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualNodeId: 'VirtualNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVirtualNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVirtualNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerGroupRequest extends $tea.Model {
  clientToken?: string;
  containerGroupId?: string;
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      containerGroupId: 'ContainerGroupId',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      containerGroupId: 'string',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataCacheRequest extends $tea.Model {
  bucket?: string;
  clientToken?: string;
  dataCacheId?: string;
  ownerAccount?: string;
  ownerId?: number;
  path?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataCacheId: 'DataCacheId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataCacheId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataCacheResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageCacheRequest extends $tea.Model {
  clientToken?: string;
  imageCacheId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageCacheId: 'ImageCacheId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageCacheId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageCacheResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteImageCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteImageCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualNodeRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  virtualNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      virtualNodeId: 'VirtualNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      virtualNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualNodeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVirtualNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  destinationResource?: DescribeAvailableResourceRequestDestinationResource;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  spotResource?: DescribeAvailableResourceRequestSpotResource;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationResource: 'DestinationResource',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotResource: 'SpotResource',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationResource: DescribeAvailableResourceRequestDestinationResource,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotResource: DescribeAvailableResourceRequestSpotResource,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeAvailableResourceResponseBodyAvailableZones,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommitContainerTaskRequest extends $tea.Model {
  containerGroupId?: string;
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string[];
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: { 'type': 'array', 'itemType': 'string' },
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommitContainerTaskResponseBody extends $tea.Model {
  commitTasks?: DescribeCommitContainerTaskResponseBodyCommitTasks[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commitTasks: 'CommitTasks',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitTasks: { 'type': 'array', 'itemType': DescribeCommitContainerTaskResponseBodyCommitTasks },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommitContainerTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCommitContainerTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommitContainerTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsRequest extends $tea.Model {
  containerGroupIds?: string;
  eventSource?: string;
  limit?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  sinceSecond?: number;
  tag?: DescribeContainerGroupEventsRequestTag[];
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupIds: 'ContainerGroupIds',
      eventSource: 'EventSource',
      limit: 'Limit',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sinceSecond: 'SinceSecond',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupIds: 'string',
      eventSource: 'string',
      limit: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sinceSecond: 'number',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupEventsRequestTag },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponseBody extends $tea.Model {
  data?: DescribeContainerGroupEventsResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeContainerGroupEventsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerGroupEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerGroupEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricRequest extends $tea.Model {
  containerGroupId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBody extends $tea.Model {
  containerGroupId?: string;
  records?: DescribeContainerGroupMetricResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      records: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerGroupMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerGroupMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceRequest extends $tea.Model {
  computeCategory?: string;
  cpu?: number;
  ephemeralStorage?: number;
  instanceType?: string;
  memory?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  spotDuration?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeCategory: 'ComputeCategory',
      cpu: 'Cpu',
      ephemeralStorage: 'EphemeralStorage',
      instanceType: 'InstanceType',
      memory: 'Memory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeCategory: 'string',
      cpu: 'number',
      ephemeralStorage: 'number',
      instanceType: 'string',
      memory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBody extends $tea.Model {
  priceInfo?: DescribeContainerGroupPriceResponseBodyPriceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribeContainerGroupPriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerGroupPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerGroupPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusRequest extends $tea.Model {
  containerGroupIds?: string;
  limit?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  sinceSecond?: number;
  tag?: DescribeContainerGroupStatusRequestTag[];
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupIds: 'ContainerGroupIds',
      limit: 'Limit',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sinceSecond: 'SinceSecond',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupIds: 'string',
      limit: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sinceSecond: 'number',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupStatusRequestTag },
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBody extends $tea.Model {
  data?: DescribeContainerGroupStatusResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerGroupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerGroupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsRequest extends $tea.Model {
  computeCategory?: string;
  containerGroupIds?: string;
  containerGroupName?: string;
  limit?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  status?: string;
  tag?: DescribeContainerGroupsRequestTag[];
  vSwitchId?: string;
  withEvent?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeCategory: 'ComputeCategory',
      containerGroupIds: 'ContainerGroupIds',
      containerGroupName: 'ContainerGroupName',
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      withEvent: 'WithEvent',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeCategory: 'string',
      containerGroupIds: 'string',
      containerGroupName: 'string',
      limit: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupsRequestTag },
      vSwitchId: 'string',
      withEvent: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBody extends $tea.Model {
  containerGroups?: DescribeContainerGroupsResponseBodyContainerGroups[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroups: 'ContainerGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroups: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroups },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerLogRequest extends $tea.Model {
  containerGroupId?: string;
  containerName?: string;
  lastTime?: boolean;
  limitBytes?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sinceSeconds?: number;
  startTime?: string;
  tail?: number;
  timestamps?: boolean;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      lastTime: 'LastTime',
      limitBytes: 'LimitBytes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sinceSeconds: 'SinceSeconds',
      startTime: 'StartTime',
      tail: 'Tail',
      timestamps: 'Timestamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      containerName: 'string',
      lastTime: 'boolean',
      limitBytes: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sinceSeconds: 'number',
      startTime: 'string',
      tail: 'number',
      timestamps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerLogResponseBody extends $tea.Model {
  containerName?: string;
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesRequest extends $tea.Model {
  bucket?: string;
  dataCacheId?: string[];
  limit?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  path?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: DescribeDataCachesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      dataCacheId: 'DataCacheId',
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      dataCacheId: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDataCachesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesResponseBody extends $tea.Model {
  dataCaches?: DescribeDataCachesResponseBodyDataCaches[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataCaches: 'DataCaches',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCaches: { 'type': 'array', 'itemType': DescribeDataCachesResponseBodyDataCaches },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesRequest extends $tea.Model {
  image?: string;
  imageCacheId?: string;
  imageCacheName?: string;
  imageFullMatch?: boolean;
  imageMatchCountRequest?: number;
  limit?: number;
  matchImage?: string[];
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  snapshotId?: string;
  tag?: DescribeImageCachesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      imageFullMatch: 'ImageFullMatch',
      imageMatchCountRequest: 'ImageMatchCountRequest',
      limit: 'Limit',
      matchImage: 'MatchImage',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotId: 'SnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      imageCacheId: 'string',
      imageCacheName: 'string',
      imageFullMatch: 'boolean',
      imageMatchCountRequest: 'number',
      limit: 'number',
      matchImage: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImageCachesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponseBody extends $tea.Model {
  imageCaches?: DescribeImageCachesResponseBodyImageCaches[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCaches: 'ImageCaches',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCaches: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCaches },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeImageCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceOpsRecordsRequest extends $tea.Model {
  containerGroupId?: string;
  opsType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      opsType: 'OpsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      opsType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceOpsRecordsResponseBody extends $tea.Model {
  records?: DescribeInstanceOpsRecordsResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeInstanceOpsRecordsResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceOpsRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceOpsRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceOpsRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricRequest extends $tea.Model {
  containerGroupIds?: string;
  metricType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroupIds: 'ContainerGroupIds',
      metricType: 'MetricType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupIds: 'string',
      metricType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBody extends $tea.Model {
  monitorDatas?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorDatas: 'MonitorDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorDatas: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMultiContainerGroupMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMultiContainerGroupMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesRequest extends $tea.Model {
  clientToken?: string;
  limit?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  tag?: DescribeVirtualNodesRequestTag[];
  virtualNodeIds?: string;
  virtualNodeName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      virtualNodeIds: 'VirtualNodeIds',
      virtualNodeName: 'VirtualNodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      limit: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVirtualNodesRequestTag },
      virtualNodeIds: 'string',
      virtualNodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  virtualNodes?: DescribeVirtualNodesResponseBodyVirtualNodes[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualNodes: 'VirtualNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      virtualNodes: { 'type': 'array', 'itemType': DescribeVirtualNodesResponseBodyVirtualNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecContainerCommandRequest extends $tea.Model {
  command?: string;
  containerGroupId?: string;
  containerName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  stdin?: boolean;
  sync?: boolean;
  TTY?: boolean;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stdin: 'Stdin',
      sync: 'Sync',
      TTY: 'TTY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      containerGroupId: 'string',
      containerName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stdin: 'boolean',
      sync: 'boolean',
      TTY: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecContainerCommandResponseBody extends $tea.Model {
  httpUrl?: string;
  requestId?: string;
  syncResponse?: string;
  webSocketUri?: string;
  static names(): { [key: string]: string } {
    return {
      httpUrl: 'HttpUrl',
      requestId: 'RequestId',
      syncResponse: 'SyncResponse',
      webSocketUri: 'WebSocketUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpUrl: 'string',
      requestId: 'string',
      syncResponse: 'string',
      webSocketUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecContainerCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecContainerCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecContainerCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  limit?: string;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsageRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsageResponseBody extends $tea.Model {
  attributes?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeContainerGroupVolumeRequest extends $tea.Model {
  clientToken?: string;
  containerGroupId?: string;
  newSize?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  volumeName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      containerGroupId: 'ContainerGroupId',
      newSize: 'NewSize',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      volumeName: 'VolumeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      containerGroupId: 'string',
      newSize: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      volumeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeContainerGroupVolumeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeContainerGroupVolumeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeContainerGroupVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResizeContainerGroupVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartContainerGroupRequest extends $tea.Model {
  clientToken?: string;
  containerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      containerGroupId: 'ContainerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      containerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartContainerGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartContainerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequest extends $tea.Model {
  dnsConfig?: UpdateContainerGroupRequestDnsConfig;
  acrRegistryInfo?: UpdateContainerGroupRequestAcrRegistryInfo[];
  clientToken?: string;
  container?: UpdateContainerGroupRequestContainer[];
  containerGroupId?: string;
  cpu?: number;
  imageRegistryCredential?: UpdateContainerGroupRequestImageRegistryCredential[];
  initContainer?: UpdateContainerGroupRequestInitContainer[];
  memory?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restartPolicy?: string;
  tag?: UpdateContainerGroupRequestTag[];
  updateType?: string;
  volume?: UpdateContainerGroupRequestVolume[];
  static names(): { [key: string]: string } {
    return {
      dnsConfig: 'DnsConfig',
      acrRegistryInfo: 'AcrRegistryInfo',
      clientToken: 'ClientToken',
      container: 'Container',
      containerGroupId: 'ContainerGroupId',
      cpu: 'Cpu',
      imageRegistryCredential: 'ImageRegistryCredential',
      initContainer: 'InitContainer',
      memory: 'Memory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restartPolicy: 'RestartPolicy',
      tag: 'Tag',
      updateType: 'UpdateType',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsConfig: UpdateContainerGroupRequestDnsConfig,
      acrRegistryInfo: { 'type': 'array', 'itemType': UpdateContainerGroupRequestAcrRegistryInfo },
      clientToken: 'string',
      container: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainer },
      containerGroupId: 'string',
      cpu: 'number',
      imageRegistryCredential: { 'type': 'array', 'itemType': UpdateContainerGroupRequestImageRegistryCredential },
      initContainer: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainer },
      memory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restartPolicy: 'string',
      tag: { 'type': 'array', 'itemType': UpdateContainerGroupRequestTag },
      updateType: 'string',
      volume: { 'type': 'array', 'itemType': UpdateContainerGroupRequestVolume },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataCacheRequest extends $tea.Model {
  bucket?: string;
  clientToken?: string;
  dataCacheId?: string;
  dataSource?: UpdateDataCacheRequestDataSource;
  eipCreateParam?: UpdateDataCacheRequestEipCreateParam;
  eipInstanceId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retentionDays?: number;
  securityGroupId?: string;
  size?: number;
  tag?: UpdateDataCacheRequestTag[];
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataCacheId: 'DataCacheId',
      dataSource: 'DataSource',
      eipCreateParam: 'EipCreateParam',
      eipInstanceId: 'EipInstanceId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      size: 'Size',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataCacheId: 'string',
      dataSource: UpdateDataCacheRequestDataSource,
      eipCreateParam: UpdateDataCacheRequestEipCreateParam,
      eipInstanceId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': UpdateDataCacheRequestTag },
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataCacheResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDataCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageCacheRequest extends $tea.Model {
  acrRegistryInfo?: UpdateImageCacheRequestAcrRegistryInfo[];
  autoMatchImageCache?: boolean;
  clientToken?: string;
  eipInstanceId?: string;
  eliminationStrategy?: string;
  flash?: boolean;
  flashCopyCount?: number;
  image?: string[];
  imageCacheId?: string;
  imageCacheName?: string;
  imageCacheSize?: number;
  imageRegistryCredential?: UpdateImageCacheRequestImageRegistryCredential[];
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  retentionDays?: number;
  securityGroupId?: string;
  standardCopyCount?: number;
  tag?: UpdateImageCacheRequestTag[];
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfo: 'AcrRegistryInfo',
      autoMatchImageCache: 'AutoMatchImageCache',
      clientToken: 'ClientToken',
      eipInstanceId: 'EipInstanceId',
      eliminationStrategy: 'EliminationStrategy',
      flash: 'Flash',
      flashCopyCount: 'FlashCopyCount',
      image: 'Image',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      imageCacheSize: 'ImageCacheSize',
      imageRegistryCredential: 'ImageRegistryCredential',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      securityGroupId: 'SecurityGroupId',
      standardCopyCount: 'StandardCopyCount',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfo: { 'type': 'array', 'itemType': UpdateImageCacheRequestAcrRegistryInfo },
      autoMatchImageCache: 'boolean',
      clientToken: 'string',
      eipInstanceId: 'string',
      eliminationStrategy: 'string',
      flash: 'boolean',
      flashCopyCount: 'number',
      image: { 'type': 'array', 'itemType': 'string' },
      imageCacheId: 'string',
      imageCacheName: 'string',
      imageCacheSize: 'number',
      imageRegistryCredential: { 'type': 'array', 'itemType': UpdateImageCacheRequestImageRegistryCredential },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      securityGroupId: 'string',
      standardCopyCount: 'number',
      tag: { 'type': 'array', 'itemType': UpdateImageCacheRequestTag },
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageCacheResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateImageCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateImageCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualNodeRequest extends $tea.Model {
  clientToken?: string;
  clusterDNS?: string;
  clusterDomain?: string;
  customResources?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: UpdateVirtualNodeRequestTag[];
  virtualNodeId?: string;
  virtualNodeName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterDNS: 'ClusterDNS',
      clusterDomain: 'ClusterDomain',
      customResources: 'CustomResources',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      virtualNodeId: 'VirtualNodeId',
      virtualNodeName: 'VirtualNodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterDNS: 'string',
      clusterDomain: 'string',
      customResources: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': UpdateVirtualNodeRequestTag },
      virtualNodeId: 'string',
      virtualNodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualNodeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVirtualNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVirtualNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContainerRequestAcrRegistryInfo extends $tea.Model {
  arnService?: string;
  arnUser?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arnService: 'ArnService',
      arnUser: 'ArnUser',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnService: 'string',
      arnUser: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContainerRequestArn extends $tea.Model {
  roleArn?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitContainerRequestImage extends $tea.Model {
  author?: string;
  message?: string;
  repository?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      message: 'Message',
      repository: 'Repository',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      message: 'string',
      repository: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDataCacheRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestDnsConfigOption extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestDnsConfig extends $tea.Model {
  nameServer?: string[];
  option?: CreateContainerGroupRequestDnsConfigOption[];
  search?: string[];
  static names(): { [key: string]: string } {
    return {
      nameServer: 'NameServer',
      option: 'Option',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServer: { 'type': 'array', 'itemType': 'string' },
      option: { 'type': 'array', 'itemType': CreateContainerGroupRequestDnsConfigOption },
      search: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestHostSecurityContextSysctl extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestHostSecurityContext extends $tea.Model {
  sysctl?: CreateContainerGroupRequestHostSecurityContextSysctl[];
  static names(): { [key: string]: string } {
    return {
      sysctl: 'Sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctl: { 'type': 'array', 'itemType': CreateContainerGroupRequestHostSecurityContextSysctl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestSecurityContextSysctl extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestSecurityContext extends $tea.Model {
  sysctl?: CreateContainerGroupRequestSecurityContextSysctl[];
  static names(): { [key: string]: string } {
    return {
      sysctl: 'Sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctl: { 'type': 'array', 'itemType': CreateContainerGroupRequestSecurityContextSysctl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestAcrRegistryInfo extends $tea.Model {
  arnService?: string;
  arnUser?: string;
  domain?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arnService: 'ArnService',
      arnUser: 'ArnUser',
      domain: 'Domain',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnService: 'string',
      arnUser: 'string',
      domain: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLivenessProbeExec extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLivenessProbeHttpGet extends $tea.Model {
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLivenessProbeTcpSocket extends $tea.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLivenessProbe extends $tea.Model {
  exec?: CreateContainerGroupRequestContainerLivenessProbeExec;
  failureThreshold?: number;
  httpGet?: CreateContainerGroupRequestContainerLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateContainerGroupRequestContainerLivenessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: CreateContainerGroupRequestContainerLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateContainerGroupRequestContainerLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateContainerGroupRequestContainerLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerReadinessProbeExec extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerReadinessProbeHttpGet extends $tea.Model {
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerReadinessProbeTcpSocket extends $tea.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerReadinessProbe extends $tea.Model {
  exec?: CreateContainerGroupRequestContainerReadinessProbeExec;
  failureThreshold?: number;
  httpGet?: CreateContainerGroupRequestContainerReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateContainerGroupRequestContainerReadinessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: CreateContainerGroupRequestContainerReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateContainerGroupRequestContainerReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateContainerGroupRequestContainerReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerSecurityContextCapability extends $tea.Model {
  add?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerSecurityContext extends $tea.Model {
  capability?: CreateContainerGroupRequestContainerSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: CreateContainerGroupRequestContainerSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerEnvironmentVarFieldRef extends $tea.Model {
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerEnvironmentVar extends $tea.Model {
  fieldRef?: CreateContainerGroupRequestContainerEnvironmentVarFieldRef;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: CreateContainerGroupRequestContainerEnvironmentVarFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerPort extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainer extends $tea.Model {
  livenessProbe?: CreateContainerGroupRequestContainerLivenessProbe;
  readinessProbe?: CreateContainerGroupRequestContainerReadinessProbe;
  securityContext?: CreateContainerGroupRequestContainerSecurityContext;
  arg?: string[];
  command?: string[];
  cpu?: number;
  environmentVar?: CreateContainerGroupRequestContainerEnvironmentVar[];
  environmentVarHide?: boolean;
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  lifecyclePostStartHandlerExec?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  lifecyclePostStartHandlerHttpGetHttpHeader?: CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader[];
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerHttpGetPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerTcpSocketHost?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePreStopHandlerExec?: string[];
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerHttpGetHttpHeader?: CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader[];
  lifecyclePreStopHandlerHttpGetPath?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  memory?: number;
  name?: string;
  port?: CreateContainerGroupRequestContainerPort[];
  securityContextPrivileged?: boolean;
  securityContextRunAsGroup?: number;
  securityContextRunAsNonRoot?: boolean;
  stdin?: boolean;
  stdinOnce?: boolean;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeMount?: CreateContainerGroupRequestContainerVolumeMount[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      environmentVarHide: 'EnvironmentVarHide',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExec: 'LifecyclePostStartHandlerExec',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetHttpHeader: 'LifecyclePostStartHandlerHttpGetHttpHeader',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExec: 'LifecyclePreStopHandlerExec',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetHttpHeader: 'LifecyclePreStopHandlerHttpGetHttpHeader',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      memory: 'Memory',
      name: 'Name',
      port: 'Port',
      securityContextPrivileged: 'SecurityContextPrivileged',
      securityContextRunAsGroup: 'SecurityContextRunAsGroup',
      securityContextRunAsNonRoot: 'SecurityContextRunAsNonRoot',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      terminationMessagePath: 'TerminationMessagePath',
      terminationMessagePolicy: 'TerminationMessagePolicy',
      tty: 'Tty',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: CreateContainerGroupRequestContainerLivenessProbe,
      readinessProbe: CreateContainerGroupRequestContainerReadinessProbe,
      securityContext: CreateContainerGroupRequestContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerEnvironmentVar },
      environmentVarHide: 'boolean',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader },
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader },
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerPort },
      securityContextPrivileged: 'boolean',
      securityContextRunAsGroup: 'number',
      securityContextRunAsNonRoot: 'boolean',
      stdin: 'boolean',
      stdinOnce: 'boolean',
      terminationMessagePath: 'string',
      terminationMessagePolicy: 'string',
      tty: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerVolumeMount },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestHostAliase extends $tea.Model {
  hostname?: string[];
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestImageRegistryCredential extends $tea.Model {
  password?: string;
  server?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerSecurityContextCapability extends $tea.Model {
  add?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerSecurityContext extends $tea.Model {
  capability?: CreateContainerGroupRequestInitContainerSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: CreateContainerGroupRequestInitContainerSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef extends $tea.Model {
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerEnvironmentVar extends $tea.Model {
  fieldRef?: CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerPort extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainer extends $tea.Model {
  securityContext?: CreateContainerGroupRequestInitContainerSecurityContext;
  arg?: string[];
  command?: string[];
  cpu?: number;
  environmentVar?: CreateContainerGroupRequestInitContainerEnvironmentVar[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  memory?: number;
  name?: string;
  port?: CreateContainerGroupRequestInitContainerPort[];
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  volumeMount?: CreateContainerGroupRequestInitContainerVolumeMount[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      memory: 'Memory',
      name: 'Name',
      port: 'Port',
      terminationMessagePath: 'TerminationMessagePath',
      terminationMessagePolicy: 'TerminationMessagePolicy',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: CreateContainerGroupRequestInitContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerPort },
      terminationMessagePath: 'string',
      terminationMessagePolicy: 'string',
      volumeMount: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerVolumeMount },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestOverheadReservationOption extends $tea.Model {
  enableOverheadReservation?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOverheadReservation: 'EnableOverheadReservation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOverheadReservation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath extends $tea.Model {
  content?: string;
  mode?: number;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mode: 'Mode',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mode: 'number',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeConfigFileVolume extends $tea.Model {
  configFileToPath?: CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath[];
  defaultMode?: number;
  static names(): { [key: string]: string } {
    return {
      configFileToPath: 'ConfigFileToPath',
      defaultMode: 'DefaultMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileToPath: { 'type': 'array', 'itemType': CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath },
      defaultMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeDiskVolume extends $tea.Model {
  diskId?: string;
  diskSize?: number;
  fsType?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      fsType: 'FsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      fsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeEmptyDirVolume extends $tea.Model {
  medium?: string;
  sizeLimit?: string;
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'string',
      sizeLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeFlexVolume extends $tea.Model {
  driver?: string;
  fsType?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      driver: 'Driver',
      fsType: 'FsType',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driver: 'string',
      fsType: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeHostPathVolume extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeNFSVolume extends $tea.Model {
  path?: string;
  readOnly?: boolean;
  server?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      readOnly: 'ReadOnly',
      server: 'Server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      readOnly: 'boolean',
      server: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolume extends $tea.Model {
  configFileVolume?: CreateContainerGroupRequestVolumeConfigFileVolume;
  diskVolume?: CreateContainerGroupRequestVolumeDiskVolume;
  emptyDirVolume?: CreateContainerGroupRequestVolumeEmptyDirVolume;
  flexVolume?: CreateContainerGroupRequestVolumeFlexVolume;
  hostPathVolume?: CreateContainerGroupRequestVolumeHostPathVolume;
  NFSVolume?: CreateContainerGroupRequestVolumeNFSVolume;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolume: 'ConfigFileVolume',
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolume: CreateContainerGroupRequestVolumeConfigFileVolume,
      diskVolume: CreateContainerGroupRequestVolumeDiskVolume,
      emptyDirVolume: CreateContainerGroupRequestVolumeEmptyDirVolume,
      flexVolume: CreateContainerGroupRequestVolumeFlexVolume,
      hostPathVolume: CreateContainerGroupRequestVolumeHostPathVolume,
      NFSVolume: CreateContainerGroupRequestVolumeNFSVolume,
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCacheRequestDataSource extends $tea.Model {
  options?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCacheRequestEipCreateParam extends $tea.Model {
  bandwidth?: number;
  commonBandwidthPackage?: string;
  ISP?: string;
  internetChargeType?: string;
  publicIpAddressPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commonBandwidthPackage: 'CommonBandwidthPackage',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      commonBandwidthPackage: 'string',
      ISP: 'string',
      internetChargeType: 'string',
      publicIpAddressPoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCacheRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequestAcrRegistryInfo extends $tea.Model {
  arnService?: string;
  arnUser?: string;
  domain?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arnService: 'ArnService',
      arnUser: 'ArnUser',
      domain: 'Domain',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arnService: 'string',
      arnUser: 'string',
      domain: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequestImageRegistryCredential extends $tea.Model {
  password?: string;
  server?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualNodeRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualNodeRequestTaint extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequestDestinationResource extends $tea.Model {
  category?: string;
  cores?: number;
  memory?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cores: 'Cores',
      memory: 'Memory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cores: 'number',
      memory: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequestSpotResource extends $tea.Model {
  spotDuration?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $tea.Model {
  statusCategory?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      statusCategory: 'StatusCategory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusCategory: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources extends $tea.Model {
  supportedResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $tea.Model {
  supportedResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      supportedResources: 'SupportedResources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources extends $tea.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $tea.Model {
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources,
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZones extends $tea.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos extends $tea.Model {
  message?: string;
  phase?: string;
  recordTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      phase: 'Phase',
      recordTime: 'RecordTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      phase: 'string',
      recordTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommitContainerTaskResponseBodyCommitTasks extends $tea.Model {
  commitPhaseInfos?: DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos[];
  containerName?: string;
  statusMessage?: string;
  taskCreationTime?: string;
  taskFinishedTime?: string;
  taskId?: string;
  taskProgress?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      commitPhaseInfos: 'CommitPhaseInfos',
      containerName: 'ContainerName',
      statusMessage: 'StatusMessage',
      taskCreationTime: 'TaskCreationTime',
      taskFinishedTime: 'TaskFinishedTime',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitPhaseInfos: { 'type': 'array', 'itemType': DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos },
      containerName: 'string',
      statusMessage: 'string',
      taskCreationTime: 'string',
      taskFinishedTime: 'string',
      taskId: 'string',
      taskProgress: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponseBodyDataEventsMetadata extends $tea.Model {
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponseBodyDataEventsSource extends $tea.Model {
  component?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject extends $tea.Model {
  apiVersion?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      kind: 'Kind',
      name: 'Name',
      namespace: 'Namespace',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      kind: 'string',
      name: 'string',
      namespace: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponseBodyDataEvents extends $tea.Model {
  count?: number;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  metadata?: DescribeContainerGroupEventsResponseBodyDataEventsMetadata;
  reason?: string;
  reportingComponent?: string;
  reportingInstance?: string;
  source?: DescribeContainerGroupEventsResponseBodyDataEventsSource;
  type?: string;
  involvedObject?: DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      metadata: 'Metadata',
      reason: 'Reason',
      reportingComponent: 'ReportingComponent',
      reportingInstance: 'ReportingInstance',
      source: 'Source',
      type: 'Type',
      involvedObject: 'involvedObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      metadata: DescribeContainerGroupEventsResponseBodyDataEventsMetadata,
      reason: 'string',
      reportingComponent: 'string',
      reportingInstance: 'string',
      source: DescribeContainerGroupEventsResponseBodyDataEventsSource,
      type: 'string',
      involvedObject: DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupEventsResponseBodyData extends $tea.Model {
  annotations?: string;
  containerGroupId?: string;
  events?: DescribeContainerGroupEventsResponseBodyDataEvents[];
  name?: string;
  namespace?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      containerGroupId: 'ContainerGroupId',
      events: 'Events',
      name: 'Name',
      namespace: 'Namespace',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      containerGroupId: 'string',
      events: { 'type': 'array', 'itemType': DescribeContainerGroupEventsResponseBodyDataEvents },
      name: 'string',
      namespace: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsCPU extends $tea.Model {
  limit?: number;
  load?: number;
  usageCoreNanoSeconds?: number;
  usageNanoCores?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      load: 'Load',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      usageNanoCores: 'UsageNanoCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      load: 'number',
      usageCoreNanoSeconds: 'number',
      usageNanoCores: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsContainersCPU extends $tea.Model {
  limit?: number;
  load?: number;
  usageCoreNanoSeconds?: number;
  usageNanoCores?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      load: 'Load',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      usageNanoCores: 'UsageNanoCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      load: 'number',
      usageCoreNanoSeconds: 'number',
      usageNanoCores: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsContainersMemory extends $tea.Model {
  availableBytes?: number;
  cache?: number;
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  static names(): { [key: string]: string } {
    return {
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableBytes: 'number',
      cache: 'number',
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsContainers extends $tea.Model {
  CPU?: DescribeContainerGroupMetricResponseBodyRecordsContainersCPU;
  memory?: DescribeContainerGroupMetricResponseBodyRecordsContainersMemory;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: DescribeContainerGroupMetricResponseBodyRecordsContainersCPU,
      memory: DescribeContainerGroupMetricResponseBodyRecordsContainersMemory,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsDisk extends $tea.Model {
  device?: string;
  readBytes?: number;
  readIO?: number;
  writeBytes?: number;
  writeIO?: number;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      readBytes: 'ReadBytes',
      readIO: 'ReadIO',
      writeBytes: 'WriteBytes',
      writeIO: 'WriteIO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      readBytes: 'number',
      readIO: 'number',
      writeBytes: 'number',
      writeIO: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsFilesystem extends $tea.Model {
  available?: number;
  capacity?: number;
  category?: string;
  fsName?: string;
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      capacity: 'Capacity',
      category: 'Category',
      fsName: 'FsName',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'number',
      capacity: 'number',
      category: 'string',
      fsName: 'string',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsMemory extends $tea.Model {
  availableBytes?: number;
  cache?: number;
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  static names(): { [key: string]: string } {
    return {
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableBytes: 'number',
      cache: 'number',
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces extends $tea.Model {
  name?: string;
  rxBytes?: number;
  rxDrops?: number;
  rxErrors?: number;
  rxPackets?: number;
  txBytes?: number;
  txDrops?: number;
  txErrors?: number;
  txPackets?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rxBytes: 'RxBytes',
      rxDrops: 'RxDrops',
      rxErrors: 'RxErrors',
      rxPackets: 'RxPackets',
      txBytes: 'TxBytes',
      txDrops: 'TxDrops',
      txErrors: 'TxErrors',
      txPackets: 'TxPackets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rxBytes: 'number',
      rxDrops: 'number',
      rxErrors: 'number',
      rxPackets: 'number',
      txBytes: 'number',
      txDrops: 'number',
      txErrors: 'number',
      txPackets: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsNetwork extends $tea.Model {
  interfaces?: DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecords extends $tea.Model {
  CPU?: DescribeContainerGroupMetricResponseBodyRecordsCPU;
  containers?: DescribeContainerGroupMetricResponseBodyRecordsContainers[];
  disk?: DescribeContainerGroupMetricResponseBodyRecordsDisk[];
  filesystem?: DescribeContainerGroupMetricResponseBodyRecordsFilesystem[];
  memory?: DescribeContainerGroupMetricResponseBodyRecordsMemory;
  network?: DescribeContainerGroupMetricResponseBodyRecordsNetwork;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      containers: 'Containers',
      disk: 'Disk',
      filesystem: 'Filesystem',
      memory: 'Memory',
      network: 'Network',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: DescribeContainerGroupMetricResponseBodyRecordsCPU,
      containers: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsContainers },
      disk: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsDisk },
      filesystem: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsFilesystem },
      memory: DescribeContainerGroupMetricResponseBodyRecordsMemory,
      network: DescribeContainerGroupMetricResponseBodyRecordsNetwork,
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRulesRule extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules extends $tea.Model {
  rule?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo extends $tea.Model {
  discountPrice?: number;
  originalPrice?: number;
  resource?: string;
  rules?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resource: 'Resource',
      rules: 'Rules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resource: 'string',
      rules: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules,
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos extends $tea.Model {
  detailInfo?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo[];
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoPrice extends $tea.Model {
  currency?: string;
  detailInfos?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos,
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoRules extends $tea.Model {
  rule?: DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeContainerGroupPriceResponseBodyPriceInfoRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice extends $tea.Model {
  instanceType?: string;
  originPrice?: number;
  spotPrice?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      originPrice: 'OriginPrice',
      spotPrice: 'SpotPrice',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      originPrice: 'number',
      spotPrice: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices extends $tea.Model {
  spotPrice?: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice[];
  static names(): { [key: string]: string } {
    return {
      spotPrice: 'SpotPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPrice: { 'type': 'array', 'itemType': DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfo extends $tea.Model {
  price?: DescribeContainerGroupPriceResponseBodyPriceInfoPrice;
  rules?: DescribeContainerGroupPriceResponseBodyPriceInfoRules;
  spotPrices?: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
      spotPrices: 'SpotPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeContainerGroupPriceResponseBodyPriceInfoPrice,
      rules: DescribeContainerGroupPriceResponseBodyPriceInfoRules,
      spotPrices: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusConditions extends $tea.Model {
  message?: string;
  reason?: string;
  lastTransitionTime?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      lastTransitionTime: 'lastTransitionTime',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      lastTransitionTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning extends $tea.Model {
  startedAtstartedAt?: string;
  static names(): { [key: string]: string } {
    return {
      startedAtstartedAt: 'StartedAtstartedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startedAtstartedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated extends $tea.Model {
  containerID?: string;
  exitCode?: number;
  finishedAt?: string;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: string;
  static names(): { [key: string]: string } {
    return {
      containerID: 'ContainerID',
      exitCode: 'ExitCode',
      finishedAt: 'FinishedAt',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startedAt: 'StartedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerID: 'string',
      exitCode: 'number',
      finishedAt: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting extends $tea.Model {
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState extends $tea.Model {
  running?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning;
  terminated?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated;
  waiting?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting;
  static names(): { [key: string]: string } {
    return {
      running: 'Running',
      terminated: 'Terminated',
      waiting: 'Waiting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      running: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning,
      terminated: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated,
      waiting: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning extends $tea.Model {
  startedAtstartedAt?: string;
  static names(): { [key: string]: string } {
    return {
      startedAtstartedAt: 'StartedAtstartedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startedAtstartedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated extends $tea.Model {
  containerID?: string;
  exitCode?: number;
  finishedAt?: string;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: string;
  static names(): { [key: string]: string } {
    return {
      containerID: 'ContainerID',
      exitCode: 'ExitCode',
      finishedAt: 'FinishedAt',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startedAt: 'StartedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerID: 'string',
      exitCode: 'number',
      finishedAt: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting extends $tea.Model {
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState extends $tea.Model {
  running?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning;
  terminated?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated;
  waiting?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting;
  static names(): { [key: string]: string } {
    return {
      running: 'Running',
      terminated: 'Terminated',
      waiting: 'Waiting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      running: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning,
      terminated: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated,
      waiting: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses extends $tea.Model {
  image?: string;
  imageID?: string;
  lastState?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState;
  name?: string;
  ready?: boolean;
  restartCount?: number;
  started?: boolean;
  state?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      imageID: 'ImageID',
      lastState: 'LastState',
      name: 'Name',
      ready: 'Ready',
      restartCount: 'RestartCount',
      started: 'Started',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      imageID: 'string',
      lastState: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState,
      name: 'string',
      ready: 'boolean',
      restartCount: 'number',
      started: 'boolean',
      state: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps extends $tea.Model {
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyDataPodStatus extends $tea.Model {
  conditions?: DescribeContainerGroupStatusResponseBodyDataPodStatusConditions[];
  containerStatuses?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses[];
  hostIp?: string;
  phase?: string;
  podIp?: string;
  podIps?: DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps[];
  qosClass?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      containerStatuses: 'ContainerStatuses',
      hostIp: 'HostIp',
      phase: 'Phase',
      podIp: 'PodIp',
      podIps: 'PodIps',
      qosClass: 'QosClass',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyDataPodStatusConditions },
      containerStatuses: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses },
      hostIp: 'string',
      phase: 'string',
      podIp: 'string',
      podIps: { 'type': 'array', 'itemType': DescribeContainerGroupStatusResponseBodyDataPodStatusPodIps },
      qosClass: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupStatusResponseBodyData extends $tea.Model {
  annotations?: string;
  containerGroupId?: string;
  name?: string;
  namespace?: string;
  podStatus?: DescribeContainerGroupStatusResponseBodyDataPodStatus;
  status?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      containerGroupId: 'ContainerGroupId',
      name: 'Name',
      namespace: 'Namespace',
      podStatus: 'PodStatus',
      status: 'Status',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      containerGroupId: 'string',
      name: 'string',
      namespace: 'string',
      podStatus: DescribeContainerGroupStatusResponseBodyDataPodStatus,
      status: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState extends $tea.Model {
  detailStatus?: string;
  exitCode?: number;
  finishTime?: string;
  message?: string;
  reason?: string;
  signal?: number;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFromFieldRef extends $tea.Model {
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom extends $tea.Model {
  fieldRef?: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFromFieldRef;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFromFieldRef,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars extends $tea.Model {
  key?: string;
  value?: string;
  valueFrom?: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueFrom: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVarsValueFrom,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet extends $tea.Model {
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket extends $tea.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe extends $tea.Model {
  execs?: string[];
  failureThreshold?: number;
  httpGet?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      execs: 'Execs',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execs: { 'type': 'array', 'itemType': 'string' },
      failureThreshold: 'number',
      httpGet: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState extends $tea.Model {
  detailStatus?: string;
  exitCode?: number;
  finishTime?: string;
  message?: string;
  reason?: string;
  signal?: number;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet extends $tea.Model {
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket extends $tea.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe extends $tea.Model {
  execs?: string[];
  failureThreshold?: number;
  httpGet?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      execs: 'Execs',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execs: { 'type': 'array', 'itemType': 'string' },
      failureThreshold: 'number',
      httpGet: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability extends $tea.Model {
  adds?: string[];
  static names(): { [key: string]: string } {
    return {
      adds: 'Adds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext extends $tea.Model {
  capability?: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts extends $tea.Model {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainers extends $tea.Model {
  args?: string[];
  commands?: string[];
  cpu?: number;
  currentState?: DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState;
  environmentVars?: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  livenessProbe?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe;
  memory?: number;
  name?: string;
  ports?: DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts[];
  previousState?: DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState;
  readinessProbe?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe;
  ready?: boolean;
  restartCount?: number;
  securityContext?: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext;
  stdin?: boolean;
  stdinOnce?: boolean;
  tty?: boolean;
  volumeMounts?: DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      livenessProbe: 'LivenessProbe',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      previousState: 'PreviousState',
      readinessProbe: 'ReadinessProbe',
      ready: 'Ready',
      restartCount: 'RestartCount',
      securityContext: 'SecurityContext',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      currentState: DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState,
      environmentVars: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      livenessProbe: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe,
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts },
      previousState: DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState,
      readinessProbe: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe,
      ready: 'boolean',
      restartCount: 'number',
      securityContext: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext,
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig extends $tea.Model {
  nameServers?: string[];
  options?: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions[];
  searches?: string[];
  static names(): { [key: string]: string } {
    return {
      nameServers: 'NameServers',
      options: 'Options',
      searches: 'Searches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServers: { 'type': 'array', 'itemType': 'string' },
      options: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions },
      searches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext extends $tea.Model {
  sysctls?: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls[];
  static names(): { [key: string]: string } {
    return {
      sysctls: 'Sysctls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctls: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsEvents extends $tea.Model {
  count?: number;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  name?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsHostAliases extends $tea.Model {
  hostnames?: string[];
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState extends $tea.Model {
  detailStatus?: string;
  exitCode?: number;
  finishTime?: string;
  message?: string;
  reason?: string;
  signal?: number;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef extends $tea.Model {
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFrom extends $tea.Model {
  fieldRef?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFromFieldRef,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars extends $tea.Model {
  key?: string;
  value?: string;
  valueFrom?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFrom;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueFrom: 'ValueFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueFrom: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVarsValueFrom,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState extends $tea.Model {
  detailStatus?: string;
  exitCode?: number;
  finishTime?: string;
  message?: string;
  reason?: string;
  signal?: number;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      detailStatus: 'DetailStatus',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      message: 'Message',
      reason: 'Reason',
      signal: 'Signal',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailStatus: 'string',
      exitCode: 'number',
      finishTime: 'string',
      message: 'string',
      reason: 'string',
      signal: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability extends $tea.Model {
  adds?: string[];
  static names(): { [key: string]: string } {
    return {
      adds: 'Adds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext extends $tea.Model {
  capability?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts extends $tea.Model {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainers extends $tea.Model {
  args?: string[];
  command?: string[];
  cpu?: number;
  currentState?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState;
  environmentVars?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  memory?: number;
  name?: string;
  ports?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts[];
  previousState?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState;
  ready?: boolean;
  restartCount?: number;
  securityContext?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext;
  volumeMounts?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      previousState: 'PreviousState',
      ready: 'Ready',
      restartCount: 'RestartCount',
      securityContext: 'SecurityContext',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      currentState: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState,
      environmentVars: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts },
      previousState: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState,
      ready: 'boolean',
      restartCount: 'number',
      securityContext: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext,
      volumeMounts: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsVolumes extends $tea.Model {
  configFileVolumeConfigFileToPaths?: DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths[];
  diskVolumeDiskId?: string;
  diskVolumeFsType?: string;
  emptyDirVolumeMedium?: string;
  emptyDirVolumeSizeLimit?: string;
  flexVolumeDriver?: string;
  flexVolumeFsType?: string;
  flexVolumeOptions?: string;
  NFSVolumePath?: string;
  NFSVolumeReadOnly?: boolean;
  NFSVolumeServer?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      diskVolumeFsType: 'DiskVolumeFsType',
      emptyDirVolumeMedium: 'EmptyDirVolumeMedium',
      emptyDirVolumeSizeLimit: 'EmptyDirVolumeSizeLimit',
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      NFSVolumePath: 'NFSVolumePath',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      NFSVolumeServer: 'NFSVolumeServer',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths },
      diskVolumeDiskId: 'string',
      diskVolumeFsType: 'string',
      emptyDirVolumeMedium: 'string',
      emptyDirVolumeSizeLimit: 'string',
      flexVolumeDriver: 'string',
      flexVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      NFSVolumePath: 'string',
      NFSVolumeReadOnly: 'boolean',
      NFSVolumeServer: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroups extends $tea.Model {
  computeCategory?: string;
  containerGroupId?: string;
  containerGroupName?: string;
  containers?: DescribeContainerGroupsResponseBodyContainerGroupsContainers[];
  cpu?: number;
  creationTime?: string;
  discount?: number;
  dnsConfig?: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig;
  eciSecurityContext?: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext;
  eniInstanceId?: string;
  ephemeralStorage?: number;
  events?: DescribeContainerGroupsResponseBodyContainerGroupsEvents[];
  expiredTime?: string;
  failedTime?: string;
  hostAliases?: DescribeContainerGroupsResponseBodyContainerGroupsHostAliases[];
  initContainers?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainers[];
  instanceType?: string;
  internetIp?: string;
  intranetIp?: string;
  ipv6Address?: string;
  memory?: number;
  ramRoleName?: string;
  regionId?: string;
  resourceGroupId?: string;
  restartPolicy?: string;
  securityGroupId?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  status?: string;
  succeededTime?: string;
  tags?: DescribeContainerGroupsResponseBodyContainerGroupsTags[];
  tenantEniInstanceId?: string;
  tenantEniIp?: string;
  tenantSecurityGroupId?: string;
  tenantVSwitchId?: string;
  vSwitchId?: string;
  volumes?: DescribeContainerGroupsResponseBodyContainerGroupsVolumes[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeCategory: 'ComputeCategory',
      containerGroupId: 'ContainerGroupId',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      discount: 'Discount',
      dnsConfig: 'DnsConfig',
      eciSecurityContext: 'EciSecurityContext',
      eniInstanceId: 'EniInstanceId',
      ephemeralStorage: 'EphemeralStorage',
      events: 'Events',
      expiredTime: 'ExpiredTime',
      failedTime: 'FailedTime',
      hostAliases: 'HostAliases',
      initContainers: 'InitContainers',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ipv6Address: 'Ipv6Address',
      memory: 'Memory',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restartPolicy: 'RestartPolicy',
      securityGroupId: 'SecurityGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      succeededTime: 'SucceededTime',
      tags: 'Tags',
      tenantEniInstanceId: 'TenantEniInstanceId',
      tenantEniIp: 'TenantEniIp',
      tenantSecurityGroupId: 'TenantSecurityGroupId',
      tenantVSwitchId: 'TenantVSwitchId',
      vSwitchId: 'VSwitchId',
      volumes: 'Volumes',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeCategory: 'string',
      containerGroupId: 'string',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainers },
      cpu: 'number',
      creationTime: 'string',
      discount: 'number',
      dnsConfig: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig,
      eciSecurityContext: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext,
      eniInstanceId: 'string',
      ephemeralStorage: 'number',
      events: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsEvents },
      expiredTime: 'string',
      failedTime: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsHostAliases },
      initContainers: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainers },
      instanceType: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ipv6Address: 'string',
      memory: 'number',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restartPolicy: 'string',
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      status: 'string',
      succeededTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsTags },
      tenantEniInstanceId: 'string',
      tenantEniIp: 'string',
      tenantSecurityGroupId: 'string',
      tenantVSwitchId: 'string',
      vSwitchId: 'string',
      volumes: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsVolumes },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesResponseBodyDataCachesDataSource extends $tea.Model {
  options?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesResponseBodyDataCachesEvents extends $tea.Model {
  count?: number;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  name?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesResponseBodyDataCachesTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataCachesResponseBodyDataCaches extends $tea.Model {
  bucket?: string;
  containerGroupId?: string;
  creationTime?: string;
  dataCacheId?: string;
  dataSource?: DescribeDataCachesResponseBodyDataCachesDataSource;
  events?: DescribeDataCachesResponseBodyDataCachesEvents[];
  expireDateTime?: string;
  flashSnapshotId?: string;
  lastMatchedTime?: string;
  name?: string;
  path?: string;
  progress?: string;
  regionId?: string;
  resourceGroupId?: string;
  size?: number;
  snapshotId?: string;
  status?: string;
  tags?: DescribeDataCachesResponseBodyDataCachesTags[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      containerGroupId: 'ContainerGroupId',
      creationTime: 'CreationTime',
      dataCacheId: 'DataCacheId',
      dataSource: 'DataSource',
      events: 'Events',
      expireDateTime: 'ExpireDateTime',
      flashSnapshotId: 'FlashSnapshotId',
      lastMatchedTime: 'LastMatchedTime',
      name: 'Name',
      path: 'Path',
      progress: 'Progress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      containerGroupId: 'string',
      creationTime: 'string',
      dataCacheId: 'string',
      dataSource: DescribeDataCachesResponseBodyDataCachesDataSource,
      events: { 'type': 'array', 'itemType': DescribeDataCachesResponseBodyDataCachesEvents },
      expireDateTime: 'string',
      flashSnapshotId: 'string',
      lastMatchedTime: 'string',
      name: 'string',
      path: 'string',
      progress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      snapshotId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDataCachesResponseBodyDataCachesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponseBodyImageCachesEvents extends $tea.Model {
  count?: number;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  name?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponseBodyImageCachesTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponseBodyImageCaches extends $tea.Model {
  containerGroupId?: string;
  creationTime?: string;
  eliminationStrategy?: string;
  events?: DescribeImageCachesResponseBodyImageCachesEvents[];
  expireDateTime?: string;
  flashSnapshotId?: string;
  imageCacheId?: string;
  imageCacheName?: string;
  imageCacheSize?: number;
  images?: string[];
  lastMatchedTime?: string;
  progress?: string;
  regionId?: string;
  resourceGroupId?: string;
  snapshotId?: string;
  status?: string;
  tags?: DescribeImageCachesResponseBodyImageCachesTags[];
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      creationTime: 'CreationTime',
      eliminationStrategy: 'EliminationStrategy',
      events: 'Events',
      expireDateTime: 'ExpireDateTime',
      flashSnapshotId: 'FlashSnapshotId',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      imageCacheSize: 'ImageCacheSize',
      images: 'Images',
      lastMatchedTime: 'LastMatchedTime',
      progress: 'Progress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      creationTime: 'string',
      eliminationStrategy: 'string',
      events: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCachesEvents },
      expireDateTime: 'string',
      flashSnapshotId: 'string',
      imageCacheId: 'string',
      imageCacheName: 'string',
      imageCacheSize: 'number',
      images: { 'type': 'array', 'itemType': 'string' },
      lastMatchedTime: 'string',
      progress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCachesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceOpsRecordsResponseBodyRecords extends $tea.Model {
  createTime?: string;
  expireTime?: string;
  opsStatus?: string;
  opsType?: string;
  resultContent?: string;
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      opsStatus: 'OpsStatus',
      opsType: 'OpsType',
      resultContent: 'ResultContent',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      opsStatus: 'string',
      opsType: 'string',
      resultContent: 'string',
      resultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU extends $tea.Model {
  limit?: number;
  load?: number;
  usageCoreNanoSeconds?: number;
  usageNanoCores?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      load: 'Load',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      usageNanoCores: 'UsageNanoCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      load: 'number',
      usageCoreNanoSeconds: 'number',
      usageNanoCores: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU extends $tea.Model {
  limit?: number;
  load?: number;
  usageCoreNanoSeconds?: number;
  usageNanoCores?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      load: 'Load',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      usageNanoCores: 'UsageNanoCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      load: 'number',
      usageCoreNanoSeconds: 'number',
      usageNanoCores: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory extends $tea.Model {
  availableBytes?: number;
  cache?: number;
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  static names(): { [key: string]: string } {
    return {
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableBytes: 'number',
      cache: 'number',
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers extends $tea.Model {
  CPU?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU;
  memory?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU,
      memory: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk extends $tea.Model {
  device?: string;
  readBytes?: number;
  readIo?: number;
  writeBytes?: number;
  writeIo?: number;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      readBytes: 'ReadBytes',
      readIo: 'ReadIo',
      writeBytes: 'WriteBytes',
      writeIo: 'WriteIo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      readBytes: 'number',
      readIo: 'number',
      writeBytes: 'number',
      writeIo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem extends $tea.Model {
  available?: number;
  capacity?: number;
  fsName?: string;
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      capacity: 'Capacity',
      fsName: 'FsName',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'number',
      capacity: 'number',
      fsName: 'string',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory extends $tea.Model {
  availableBytes?: number;
  cache?: number;
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  static names(): { [key: string]: string } {
    return {
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableBytes: 'number',
      cache: 'number',
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces extends $tea.Model {
  name?: string;
  rxBytes?: number;
  rxDrops?: number;
  rxErrors?: number;
  rxPackets?: number;
  txBytes?: number;
  txDrops?: number;
  txErrors?: number;
  txPackets?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rxBytes: 'RxBytes',
      rxDrops: 'RxDrops',
      rxErrors: 'RxErrors',
      rxPackets: 'RxPackets',
      txBytes: 'TxBytes',
      txDrops: 'TxDrops',
      txErrors: 'TxErrors',
      txPackets: 'TxPackets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rxBytes: 'number',
      rxDrops: 'number',
      rxErrors: 'number',
      rxPackets: 'number',
      txBytes: 'number',
      txDrops: 'number',
      txErrors: 'number',
      txPackets: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork extends $tea.Model {
  interfaces?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords extends $tea.Model {
  CPU?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU;
  containers?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers[];
  disk?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk[];
  filesystem?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem[];
  memory?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory;
  network?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      containers: 'Containers',
      disk: 'Disk',
      filesystem: 'Filesystem',
      memory: 'Memory',
      network: 'Network',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU,
      containers: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers },
      disk: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsDisk },
      filesystem: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem },
      memory: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory,
      network: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork,
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatas extends $tea.Model {
  containerGroupId?: string;
  records?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords[];
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      records: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  recommendZones?: string[];
  regionEndpoint?: string;
  regionId?: string;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      recommendZones: 'RecommendZones',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendZones: { 'type': 'array', 'itemType': 'string' },
      regionEndpoint: 'string',
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesResponseBodyVirtualNodesEvents extends $tea.Model {
  count?: number;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  name?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesResponseBodyVirtualNodesTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualNodesResponseBodyVirtualNodes extends $tea.Model {
  creationTime?: string;
  events?: DescribeVirtualNodesResponseBodyVirtualNodesEvents[];
  internetIp?: string;
  intranetIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeVirtualNodesResponseBodyVirtualNodesTags[];
  virtualNodeId?: string;
  virtualNodeName?: string;
  virtualNodeSecurityGroupId?: string;
  virtualNodeVSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      events: 'Events',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      virtualNodeId: 'VirtualNodeId',
      virtualNodeName: 'VirtualNodeName',
      virtualNodeSecurityGroupId: 'VirtualNodeSecurityGroupId',
      virtualNodeVSwitchId: 'VirtualNodeVSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      events: { 'type': 'array', 'itemType': DescribeVirtualNodesResponseBodyVirtualNodesEvents },
      internetIp: 'string',
      intranetIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeVirtualNodesResponseBodyVirtualNodesTags },
      virtualNodeId: 'string',
      virtualNodeName: 'string',
      virtualNodeSecurityGroupId: 'string',
      virtualNodeVSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestDnsConfigOption extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestDnsConfig extends $tea.Model {
  nameServer?: string[];
  option?: UpdateContainerGroupRequestDnsConfigOption[];
  search?: string[];
  static names(): { [key: string]: string } {
    return {
      nameServer: 'NameServer',
      option: 'Option',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServer: { 'type': 'array', 'itemType': 'string' },
      option: { 'type': 'array', 'itemType': UpdateContainerGroupRequestDnsConfigOption },
      search: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestAcrRegistryInfo extends $tea.Model {
  domain?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLivenessProbeExec extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLivenessProbeHttpGet extends $tea.Model {
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLivenessProbeTcpSocket extends $tea.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLivenessProbe extends $tea.Model {
  exec?: UpdateContainerGroupRequestContainerLivenessProbeExec;
  failureThreshold?: number;
  httpGet?: UpdateContainerGroupRequestContainerLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: UpdateContainerGroupRequestContainerLivenessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: UpdateContainerGroupRequestContainerLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: UpdateContainerGroupRequestContainerLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: UpdateContainerGroupRequestContainerLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerReadinessProbeExec extends $tea.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerReadinessProbeHttpGet extends $tea.Model {
  path?: string;
  port?: number;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      port: 'Port',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      port: 'number',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerReadinessProbeTcpSocket extends $tea.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerReadinessProbe extends $tea.Model {
  exec?: UpdateContainerGroupRequestContainerReadinessProbeExec;
  failureThreshold?: number;
  httpGet?: UpdateContainerGroupRequestContainerReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: UpdateContainerGroupRequestContainerReadinessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: UpdateContainerGroupRequestContainerReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: UpdateContainerGroupRequestContainerReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: UpdateContainerGroupRequestContainerReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerSecurityContextCapability extends $tea.Model {
  add?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerSecurityContext extends $tea.Model {
  capability?: UpdateContainerGroupRequestContainerSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: UpdateContainerGroupRequestContainerSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerEnvironmentVarFieldRef extends $tea.Model {
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerEnvironmentVar extends $tea.Model {
  fieldRef?: UpdateContainerGroupRequestContainerEnvironmentVarFieldRef;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: UpdateContainerGroupRequestContainerEnvironmentVarFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerPort extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainer extends $tea.Model {
  livenessProbe?: UpdateContainerGroupRequestContainerLivenessProbe;
  readinessProbe?: UpdateContainerGroupRequestContainerReadinessProbe;
  securityContext?: UpdateContainerGroupRequestContainerSecurityContext;
  arg?: string[];
  command?: string[];
  cpu?: number;
  environmentVar?: UpdateContainerGroupRequestContainerEnvironmentVar[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  lifecyclePostStartHandlerExec?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  lifecyclePostStartHandlerHttpGetHttpHeaders?: UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders[];
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerHttpGetPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerTcpSocketHost?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePreStopHandlerExec?: string[];
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerHttpGetHttpHeader?: UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader[];
  lifecyclePreStopHandlerHttpGetPath?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  memory?: number;
  name?: string;
  port?: UpdateContainerGroupRequestContainerPort[];
  stdin?: boolean;
  stdinOnce?: boolean;
  tty?: boolean;
  volumeMount?: UpdateContainerGroupRequestContainerVolumeMount[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExec: 'LifecyclePostStartHandlerExec',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetHttpHeaders: 'LifecyclePostStartHandlerHttpGetHttpHeaders',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExec: 'LifecyclePreStopHandlerExec',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetHttpHeader: 'LifecyclePreStopHandlerHttpGetHttpHeader',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      memory: 'Memory',
      name: 'Name',
      port: 'Port',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: UpdateContainerGroupRequestContainerLivenessProbe,
      readinessProbe: UpdateContainerGroupRequestContainerReadinessProbe,
      securityContext: UpdateContainerGroupRequestContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetHttpHeaders: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders },
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader },
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerPort },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerVolumeMount },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestImageRegistryCredential extends $tea.Model {
  password?: string;
  server?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerSecurityContextCapability extends $tea.Model {
  add?: string[];
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerSecurityContext extends $tea.Model {
  capability?: UpdateContainerGroupRequestInitContainerSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: UpdateContainerGroupRequestInitContainerSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef extends $tea.Model {
  fieldPath?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPath: 'FieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerEnvironmentVar extends $tea.Model {
  fieldRef?: UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerPort extends $tea.Model {
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  mountPropagation?: string;
  name?: string;
  readOnly?: boolean;
  subPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      mountPropagation: 'MountPropagation',
      name: 'Name',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      mountPropagation: 'string',
      name: 'string',
      readOnly: 'boolean',
      subPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainer extends $tea.Model {
  securityContext?: UpdateContainerGroupRequestInitContainerSecurityContext;
  arg?: string[];
  command?: string[];
  cpu?: number;
  environmentVar?: UpdateContainerGroupRequestInitContainerEnvironmentVar[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  memory?: number;
  name?: string;
  port?: UpdateContainerGroupRequestInitContainerPort[];
  stdin?: boolean;
  stdinOnce?: boolean;
  tty?: boolean;
  volumeMount?: UpdateContainerGroupRequestInitContainerVolumeMount[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      arg: 'Arg',
      command: 'Command',
      cpu: 'Cpu',
      environmentVar: 'EnvironmentVar',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      memory: 'Memory',
      name: 'Name',
      port: 'Port',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMount: 'VolumeMount',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: UpdateContainerGroupRequestInitContainerSecurityContext,
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVar: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerEnvironmentVar },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      memory: 'number',
      name: 'string',
      port: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerPort },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerVolumeMount },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath extends $tea.Model {
  content?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeConfigFileVolume extends $tea.Model {
  configFileToPath?: UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath[];
  static names(): { [key: string]: string } {
    return {
      configFileToPath: 'ConfigFileToPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileToPath: { 'type': 'array', 'itemType': UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeEmptyDirVolume extends $tea.Model {
  medium?: string;
  sizeLimit?: string;
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'string',
      sizeLimit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeFlexVolume extends $tea.Model {
  driver?: string;
  fsType?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      driver: 'Driver',
      fsType: 'FsType',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driver: 'string',
      fsType: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeHostPathVolume extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeNFSVolume extends $tea.Model {
  path?: string;
  readOnly?: boolean;
  server?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      readOnly: 'ReadOnly',
      server: 'Server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      readOnly: 'boolean',
      server: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolume extends $tea.Model {
  configFileVolume?: UpdateContainerGroupRequestVolumeConfigFileVolume;
  emptyDirVolume?: UpdateContainerGroupRequestVolumeEmptyDirVolume;
  flexVolume?: UpdateContainerGroupRequestVolumeFlexVolume;
  hostPathVolume?: UpdateContainerGroupRequestVolumeHostPathVolume;
  NFSVolume?: UpdateContainerGroupRequestVolumeNFSVolume;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolume: 'ConfigFileVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolume: UpdateContainerGroupRequestVolumeConfigFileVolume,
      emptyDirVolume: UpdateContainerGroupRequestVolumeEmptyDirVolume,
      flexVolume: UpdateContainerGroupRequestVolumeFlexVolume,
      hostPathVolume: UpdateContainerGroupRequestVolumeHostPathVolume,
      NFSVolume: UpdateContainerGroupRequestVolumeNFSVolume,
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataCacheRequestDataSource extends $tea.Model {
  options?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataCacheRequestEipCreateParam extends $tea.Model {
  bandwidth?: number;
  commonBandwidthPackage?: string;
  ISP?: string;
  internetChargeType?: string;
  publicIpAddressPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commonBandwidthPackage: 'CommonBandwidthPackage',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      commonBandwidthPackage: 'string',
      ISP: 'string',
      internetChargeType: 'string',
      publicIpAddressPoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataCacheRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageCacheRequestAcrRegistryInfo extends $tea.Model {
  domain?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageCacheRequestImageRegistryCredential extends $tea.Model {
  password?: string;
  server?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageCacheRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualNodeRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eci", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @summary Creates an asynchronous task to store a specified container in an elastic container instance as an image and pushes the image to an image repository of Alibaba Cloud Container Registry.
   *
   * @description You must specify the Alibaba Cloud Resource Name (ARN) of the RAM role of the Container Registry Enterprise Edition instance to grant the elastic container instance to assume the RAM role to push images.
   *
   * @param request CommitContainerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CommitContainerResponse
   */
  async commitContainerWithOptions(request: CommitContainerRequest, runtime: $Util.RuntimeOptions): Promise<CommitContainerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!Util.isUnset(request.arn)) {
      query["Arn"] = request.arn;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CommitContainer",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CommitContainerResponse>(await this.callApi(params, req, runtime), new CommitContainerResponse({}));
  }

  /**
   * @summary Creates an asynchronous task to store a specified container in an elastic container instance as an image and pushes the image to an image repository of Alibaba Cloud Container Registry.
   *
   * @description You must specify the Alibaba Cloud Resource Name (ARN) of the RAM role of the Container Registry Enterprise Edition instance to grant the elastic container instance to assume the RAM role to push images.
   *
   * @param request CommitContainerRequest
   * @return CommitContainerResponse
   */
  async commitContainer(request: CommitContainerRequest): Promise<CommitContainerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitContainerWithOptions(request, runtime);
  }

  /**
   * @summary Copies a DataCache from one region to another region.
   *
   * @description You cannot directly use a DataCache across regions. You can call this operation to copy a DataCache from one region to another region. This operation is suitable for the following scenarios:
   * *   If you want to use a DataCache across regions and the DataCache exists in Region A, you can call this operation to quickly copy the DataCache to Region B.
   * *   If you directly pull data from a region outside China to a region inside the Chinese mainland when you create a DataCache, the data may be pulled at a slow speed due to network limits. In this case, you can create a DataCache in a region outside the Chinese mainland but inside China, such as the China (Hong Kong) region, and call this operation to copy the data to the region inside the Chinese mainland.
   * > The process of copying a DataCache is equivalent to copying a snapshot. You are charged for the traffic generated during the copy process and the storage of the generated DataCache.
   *
   * @param request CopyDataCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CopyDataCacheResponse
   */
  async copyDataCacheWithOptions(request: CopyDataCacheRequest, runtime: $Util.RuntimeOptions): Promise<CopyDataCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!Util.isUnset(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyDataCacheResponse>(await this.callApi(params, req, runtime), new CopyDataCacheResponse({}));
  }

  /**
   * @summary Copies a DataCache from one region to another region.
   *
   * @description You cannot directly use a DataCache across regions. You can call this operation to copy a DataCache from one region to another region. This operation is suitable for the following scenarios:
   * *   If you want to use a DataCache across regions and the DataCache exists in Region A, you can call this operation to quickly copy the DataCache to Region B.
   * *   If you directly pull data from a region outside China to a region inside the Chinese mainland when you create a DataCache, the data may be pulled at a slow speed due to network limits. In this case, you can create a DataCache in a region outside the Chinese mainland but inside China, such as the China (Hong Kong) region, and call this operation to copy the data to the region inside the Chinese mainland.
   * > The process of copying a DataCache is equivalent to copying a snapshot. You are charged for the traffic generated during the copy process and the storage of the generated DataCache.
   *
   * @param request CopyDataCacheRequest
   * @return CopyDataCacheResponse
   */
  async copyDataCache(request: CopyDataCacheRequest): Promise<CopyDataCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyDataCacheWithOptions(request, runtime);
  }

  /**
   * @summary Creates an elastic container instance.
   *
   * @description When you call the CreateContainerGroup operation to create an elastic container instance, the system automatically creates a service-linked role named AliyunServiceRoleForECI. You can assume the service-linked role to access relevant cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   * When you create an elastic container instance, you can configure features that are related to instances, images, and storage based on your business requirements. For information about parameters configured for the features and the description of the parameters, see the following documents:
   * **Instances**
   * You can use one of the following methods to create an elastic container instance:
   * *   [Specify the number of vCPUs and memory size to create an elastic container instance](https://help.aliyun.com/document_detail/114662.html)
   * *   [Specify ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/114664.html)
   * Both the preceding creation methods support the following features:
   * *   [Create a preemptible elastic container instance](https://help.aliyun.com/document_detail/157759.html)
   * *   [Configure multiple zones](https://help.aliyun.com/document_detail/157290.html)
   * *   [Configure multiple specifications](https://help.aliyun.com/document_detail/146468.html)
   * *   [Use tags to manage elastic container instances](https://help.aliyun.com/document_detail/146608.html)
   * **Images**
   * *   [Configure a container image](https://help.aliyun.com/document_detail/461311.html)
   * *   [Use the image cache feature to accelerate the creation of an elastic container instance](https://help.aliyun.com/document_detail/141281.html)
   * *   [Specify a Container Registry Enterprise Edition instance](https://help.aliyun.com/document_detail/194250.html)
   * *   [Use self-managed image repositories](https://help.aliyun.com/document_detail/378059.html)
   * **Networking**
   * *   [Create and Associate an EIP](https://help.aliyun.com/document_detail/99146.html)
   * *   [Assign a security group](https://help.aliyun.com/document_detail/176237.html)
   * *   [Assign an IPv6 address to an elastic container instance](https://help.aliyun.com/document_detail/451282.html)
   * *   [Configure maximum bandwidth](https://help.aliyun.com/document_detail/190635.html)
   * **Storage**
   * *   [Mount a disk volume](https://help.aliyun.com/document_detail/144571.html)
   * *   [Mount a NAS volume](https://help.aliyun.com/document_detail/464075.html)
   * *   [Mount an OSS bucket to an elastic container instance as a volume](https://help.aliyun.com/document_detail/464076.html)
   * *   [Mount an emptyDir volume](https://help.aliyun.com/document_detail/464078.html)
   * *   [Mount a ConfigFile volume](https://help.aliyun.com/document_detail/464080.html)
   * *   [Increase the size of the temporary storage space](https://help.aliyun.com/document_detail/204066.html)
   * **Container configuration**
   * *   [Configure startup commands and arguments for a container](https://help.aliyun.com/document_detail/94593.html)
   * *   [Use probes to perform health checks on a container](https://help.aliyun.com/document_detail/99053.html)
   * *   [Obtain metadata by using environment variables](https://help.aliyun.com/document_detail/141788.html)
   * *   [Configure a security context for an elastic container instance or a container](https://help.aliyun.com/document_detail/462313.html)
   * *   [Configure the NTP service](https://help.aliyun.com/document_detail/462768.html)
   * **Logging and O\\&M**
   * *   [Use environment variables to configure log collection](https://help.aliyun.com/document_detail/121973.html)
   * *   [Save core files to volumes](https://help.aliyun.com/document_detail/167801.html)
   *
   * @param request CreateContainerGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateContainerGroupResponse
   */
  async createContainerGroupWithOptions(request: CreateContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateContainerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!Util.isUnset(request.activeDeadlineSeconds)) {
      query["ActiveDeadlineSeconds"] = request.activeDeadlineSeconds;
    }

    if (!Util.isUnset(request.autoCreateEip)) {
      query["AutoCreateEip"] = request.autoCreateEip;
    }

    if (!Util.isUnset(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.computeCategory)) {
      query["ComputeCategory"] = request.computeCategory;
    }

    if (!Util.isUnset(request.container)) {
      query["Container"] = request.container;
    }

    if (!Util.isUnset(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!Util.isUnset(request.containerResourceView)) {
      query["ContainerResourceView"] = request.containerResourceView;
    }

    if (!Util.isUnset(request.corePattern)) {
      query["CorePattern"] = request.corePattern;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.cpuArchitecture)) {
      query["CpuArchitecture"] = request.cpuArchitecture;
    }

    if (!Util.isUnset(request.cpuOptionsCore)) {
      query["CpuOptionsCore"] = request.cpuOptionsCore;
    }

    if (!Util.isUnset(request.cpuOptionsNuma)) {
      query["CpuOptionsNuma"] = request.cpuOptionsNuma;
    }

    if (!Util.isUnset(request.cpuOptionsThreadsPerCore)) {
      query["CpuOptionsThreadsPerCore"] = request.cpuOptionsThreadsPerCore;
    }

    if (!Util.isUnset(request.dataCacheBucket)) {
      query["DataCacheBucket"] = request.dataCacheBucket;
    }

    if (!Util.isUnset(request.dataCacheBurstingEnabled)) {
      query["DataCacheBurstingEnabled"] = request.dataCacheBurstingEnabled;
    }

    if (!Util.isUnset(request.dataCachePL)) {
      query["DataCachePL"] = request.dataCachePL;
    }

    if (!Util.isUnset(request.dataCacheProvisionedIops)) {
      query["DataCacheProvisionedIops"] = request.dataCacheProvisionedIops;
    }

    if (!Util.isUnset(request.dnsPolicy)) {
      query["DnsPolicy"] = request.dnsPolicy;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.egressBandwidth)) {
      query["EgressBandwidth"] = request.egressBandwidth;
    }

    if (!Util.isUnset(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!Util.isUnset(request.eipCommonBandwidthPackage)) {
      query["EipCommonBandwidthPackage"] = request.eipCommonBandwidthPackage;
    }

    if (!Util.isUnset(request.eipISP)) {
      query["EipISP"] = request.eipISP;
    }

    if (!Util.isUnset(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!Util.isUnset(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!Util.isUnset(request.fixedIp)) {
      query["FixedIp"] = request.fixedIp;
    }

    if (!Util.isUnset(request.fixedIpRetainHour)) {
      query["FixedIpRetainHour"] = request.fixedIpRetainHour;
    }

    if (!Util.isUnset(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!Util.isUnset(request.hostAliase)) {
      query["HostAliase"] = request.hostAliase;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.imageAccelerateMode)) {
      query["ImageAccelerateMode"] = request.imageAccelerateMode;
    }

    if (!Util.isUnset(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!Util.isUnset(request.imageSnapshotId)) {
      query["ImageSnapshotId"] = request.imageSnapshotId;
    }

    if (!Util.isUnset(request.ingressBandwidth)) {
      query["IngressBandwidth"] = request.ingressBandwidth;
    }

    if (!Util.isUnset(request.initContainer)) {
      query["InitContainer"] = request.initContainer;
    }

    if (!Util.isUnset(request.insecureRegistry)) {
      query["InsecureRegistry"] = request.insecureRegistry;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!Util.isUnset(request.ipv6GatewayBandwidth)) {
      query["Ipv6GatewayBandwidth"] = request.ipv6GatewayBandwidth;
    }

    if (!Util.isUnset(request.ipv6GatewayBandwidthEnable)) {
      query["Ipv6GatewayBandwidthEnable"] = request.ipv6GatewayBandwidthEnable;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.ntpServer)) {
      query["NtpServer"] = request.ntpServer;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.overheadReservationOption)) {
      query["OverheadReservationOption"] = request.overheadReservationOption;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plainHttpRegistry)) {
      query["PlainHttpRegistry"] = request.plainHttpRegistry;
    }

    if (!Util.isUnset(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!Util.isUnset(request.scheduleStrategy)) {
      query["ScheduleStrategy"] = request.scheduleStrategy;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.shareProcessNamespace)) {
      query["ShareProcessNamespace"] = request.shareProcessNamespace;
    }

    if (!Util.isUnset(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!Util.isUnset(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!Util.isUnset(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!Util.isUnset(request.strictSpot)) {
      query["StrictSpot"] = request.strictSpot;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.dnsConfig)) {
      query["DnsConfig"] = request.dnsConfig;
    }

    if (!Util.isUnset(request.hostSecurityContext)) {
      query["HostSecurityContext"] = request.hostSecurityContext;
    }

    if (!Util.isUnset(request.securityContext)) {
      query["SecurityContext"] = request.securityContext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateContainerGroupResponse>(await this.callApi(params, req, runtime), new CreateContainerGroupResponse({}));
  }

  /**
   * @summary Creates an elastic container instance.
   *
   * @description When you call the CreateContainerGroup operation to create an elastic container instance, the system automatically creates a service-linked role named AliyunServiceRoleForECI. You can assume the service-linked role to access relevant cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   * When you create an elastic container instance, you can configure features that are related to instances, images, and storage based on your business requirements. For information about parameters configured for the features and the description of the parameters, see the following documents:
   * **Instances**
   * You can use one of the following methods to create an elastic container instance:
   * *   [Specify the number of vCPUs and memory size to create an elastic container instance](https://help.aliyun.com/document_detail/114662.html)
   * *   [Specify ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/114664.html)
   * Both the preceding creation methods support the following features:
   * *   [Create a preemptible elastic container instance](https://help.aliyun.com/document_detail/157759.html)
   * *   [Configure multiple zones](https://help.aliyun.com/document_detail/157290.html)
   * *   [Configure multiple specifications](https://help.aliyun.com/document_detail/146468.html)
   * *   [Use tags to manage elastic container instances](https://help.aliyun.com/document_detail/146608.html)
   * **Images**
   * *   [Configure a container image](https://help.aliyun.com/document_detail/461311.html)
   * *   [Use the image cache feature to accelerate the creation of an elastic container instance](https://help.aliyun.com/document_detail/141281.html)
   * *   [Specify a Container Registry Enterprise Edition instance](https://help.aliyun.com/document_detail/194250.html)
   * *   [Use self-managed image repositories](https://help.aliyun.com/document_detail/378059.html)
   * **Networking**
   * *   [Create and Associate an EIP](https://help.aliyun.com/document_detail/99146.html)
   * *   [Assign a security group](https://help.aliyun.com/document_detail/176237.html)
   * *   [Assign an IPv6 address to an elastic container instance](https://help.aliyun.com/document_detail/451282.html)
   * *   [Configure maximum bandwidth](https://help.aliyun.com/document_detail/190635.html)
   * **Storage**
   * *   [Mount a disk volume](https://help.aliyun.com/document_detail/144571.html)
   * *   [Mount a NAS volume](https://help.aliyun.com/document_detail/464075.html)
   * *   [Mount an OSS bucket to an elastic container instance as a volume](https://help.aliyun.com/document_detail/464076.html)
   * *   [Mount an emptyDir volume](https://help.aliyun.com/document_detail/464078.html)
   * *   [Mount a ConfigFile volume](https://help.aliyun.com/document_detail/464080.html)
   * *   [Increase the size of the temporary storage space](https://help.aliyun.com/document_detail/204066.html)
   * **Container configuration**
   * *   [Configure startup commands and arguments for a container](https://help.aliyun.com/document_detail/94593.html)
   * *   [Use probes to perform health checks on a container](https://help.aliyun.com/document_detail/99053.html)
   * *   [Obtain metadata by using environment variables](https://help.aliyun.com/document_detail/141788.html)
   * *   [Configure a security context for an elastic container instance or a container](https://help.aliyun.com/document_detail/462313.html)
   * *   [Configure the NTP service](https://help.aliyun.com/document_detail/462768.html)
   * **Logging and O\\&M**
   * *   [Use environment variables to configure log collection](https://help.aliyun.com/document_detail/121973.html)
   * *   [Save core files to volumes](https://help.aliyun.com/document_detail/167801.html)
   *
   * @param request CreateContainerGroupRequest
   * @return CreateContainerGroupResponse
   */
  async createContainerGroup(request: CreateContainerGroupRequest): Promise<CreateContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createContainerGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates a DataCache.
   *
   * @description *   You are charged for the creation of image caches. We recommend that you learn the relevant billing information in advance. For more information, see [DataCaches](https://help.aliyun.com/document_detail/2503093.html).
   * *   Before you create an image cache, you must evaluate the size of the data to be cached. If the size of the data exceeds the specified cache size, the image cache fails to be created.
   * *   When a data cache is being created, the system automatically creates a temporary elastic container instance (ECI) and an enhanced SSD (ESSD) for the data cache. During the creation, do not delete the ECI and ESSD. Otherwise, the data cache fails to be created.
   * *   When a data cache is being created, a snapshot is generated for the data cache. Do not delete the snapshot. Otherwise, the data cache becomes invalid.
   *
   * @param request CreateDataCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDataCacheResponse
   */
  async createDataCacheWithOptions(request: CreateDataCacheRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.eipCreateParam)) {
      query["EipCreateParam"] = request.eipCreateParam;
    }

    if (!Util.isUnset(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataCacheResponse>(await this.callApi(params, req, runtime), new CreateDataCacheResponse({}));
  }

  /**
   * @summary Creates a DataCache.
   *
   * @description *   You are charged for the creation of image caches. We recommend that you learn the relevant billing information in advance. For more information, see [DataCaches](https://help.aliyun.com/document_detail/2503093.html).
   * *   Before you create an image cache, you must evaluate the size of the data to be cached. If the size of the data exceeds the specified cache size, the image cache fails to be created.
   * *   When a data cache is being created, the system automatically creates a temporary elastic container instance (ECI) and an enhanced SSD (ESSD) for the data cache. During the creation, do not delete the ECI and ESSD. Otherwise, the data cache fails to be created.
   * *   When a data cache is being created, a snapshot is generated for the data cache. Do not delete the snapshot. Otherwise, the data cache becomes invalid.
   *
   * @param request CreateDataCacheRequest
   * @return CreateDataCacheResponse
   */
  async createDataCache(request: CreateDataCacheRequest): Promise<CreateDataCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataCacheWithOptions(request, runtime);
  }

  /**
   * @summary Creates an image cache. The image cache can accelerate image pulling and reduce the instance startup time when you create an elastic container instance later.
   *
   * @description *   **Precautions**
   *     *   You are charged for creation of image caches. We recommend that you learn the relevant billing information in advance. For more information about billing of image caches, see [Image caches](https://help.aliyun.com/document_detail/447682.html).
   *     *   Before you create an image cache, you must estimate the total size of the images that you want to cache. If the total size of the images exceeds the specified cache size, the image cache cannot be created.
   *     *   When an image cache is being created, the system creates an intermediate elastic container instance and an intermediate enhanced SSD (ESSD) at performance level 1 (PL1). Do not delete the intermediate instance and the ESSD while the image cache is being created. If you delete the intermediate instance or the ESSD, the image cache cannot be created.
   *     *   A temporary local snapshot and a specific number of regular snapshots are generated during the creation of the image cache. Do not delete these snapshots. If you delete these snapshots, the image cache becomes invalid.
   *     *   If you use SDKs, SDK for Java 1.0.10 or later and SDK for Python 1.0.7 or later are supported.
   * *   **Usage notes**
   *     *   For images that are created based on Container Registry Enterprise Edition instances and use custom domain names, if you want to configure password-free access to the image caches, you must use AcrRegistryInfo-related parameters to specify Container Registry instances. When you configure AcrRegistryInfo-related parameters, you must set the AcrRegistryInfo.N.InstanceId parameter.
   *     *   If the image cache that you created will be used to create more than 1,000 elastic container instances at a time, we recommend that you use the StandardCopyCount and FlashCopyCount parameters to create multiple temporary local snapshots and regular snapshots of the image. The multiple snapshots are billed based on incremental data. If no incremental data exists on the multiple snapshots, you are not charged for the multiple snapshots.
   * >  When you call the CreateImageCache operation to create an image cache, the system automatically creates a service-linked role named AliyunServiceRoleForECI. The role is used to access other Alibaba Cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   *
   * @param request CreateImageCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateImageCacheResponse
   */
  async createImageCacheWithOptions(request: CreateImageCacheRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!Util.isUnset(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!Util.isUnset(request.eliminationStrategy)) {
      query["EliminationStrategy"] = request.eliminationStrategy;
    }

    if (!Util.isUnset(request.flash)) {
      query["Flash"] = request.flash;
    }

    if (!Util.isUnset(request.flashCopyCount)) {
      query["FlashCopyCount"] = request.flashCopyCount;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!Util.isUnset(request.imageCacheSize)) {
      query["ImageCacheSize"] = request.imageCacheSize;
    }

    if (!Util.isUnset(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!Util.isUnset(request.insecureRegistry)) {
      query["InsecureRegistry"] = request.insecureRegistry;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plainHttpRegistry)) {
      query["PlainHttpRegistry"] = request.plainHttpRegistry;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.standardCopyCount)) {
      query["StandardCopyCount"] = request.standardCopyCount;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageCacheResponse>(await this.callApi(params, req, runtime), new CreateImageCacheResponse({}));
  }

  /**
   * @summary Creates an image cache. The image cache can accelerate image pulling and reduce the instance startup time when you create an elastic container instance later.
   *
   * @description *   **Precautions**
   *     *   You are charged for creation of image caches. We recommend that you learn the relevant billing information in advance. For more information about billing of image caches, see [Image caches](https://help.aliyun.com/document_detail/447682.html).
   *     *   Before you create an image cache, you must estimate the total size of the images that you want to cache. If the total size of the images exceeds the specified cache size, the image cache cannot be created.
   *     *   When an image cache is being created, the system creates an intermediate elastic container instance and an intermediate enhanced SSD (ESSD) at performance level 1 (PL1). Do not delete the intermediate instance and the ESSD while the image cache is being created. If you delete the intermediate instance or the ESSD, the image cache cannot be created.
   *     *   A temporary local snapshot and a specific number of regular snapshots are generated during the creation of the image cache. Do not delete these snapshots. If you delete these snapshots, the image cache becomes invalid.
   *     *   If you use SDKs, SDK for Java 1.0.10 or later and SDK for Python 1.0.7 or later are supported.
   * *   **Usage notes**
   *     *   For images that are created based on Container Registry Enterprise Edition instances and use custom domain names, if you want to configure password-free access to the image caches, you must use AcrRegistryInfo-related parameters to specify Container Registry instances. When you configure AcrRegistryInfo-related parameters, you must set the AcrRegistryInfo.N.InstanceId parameter.
   *     *   If the image cache that you created will be used to create more than 1,000 elastic container instances at a time, we recommend that you use the StandardCopyCount and FlashCopyCount parameters to create multiple temporary local snapshots and regular snapshots of the image. The multiple snapshots are billed based on incremental data. If no incremental data exists on the multiple snapshots, you are not charged for the multiple snapshots.
   * >  When you call the CreateImageCache operation to create an image cache, the system automatically creates a service-linked role named AliyunServiceRoleForECI. The role is used to access other Alibaba Cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   *
   * @param request CreateImageCacheRequest
   * @return CreateImageCacheResponse
   */
  async createImageCache(request: CreateImageCacheRequest): Promise<CreateImageCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageCacheWithOptions(request, runtime);
  }

  /**
   * @summary Creates an O&M task.
   *
   * @description O&M tasks are classified into:
   * *   coredump: After you enable coredump, the system generates a core dump file when a container unexpectedly stops. You can use the core dump file to analyze the exception and find out the cause of the problem. For more information, see [Enable coredump](https://help.aliyun.com/document_detail/167801.html).
   * *   tcpdump: After you enable tcpdump, the system captures network packets when a container unexpectedly stops. You can analyze the packets and locate network problems. For more information, see Enable [tcpdump](https://help.aliyun.com/document_detail/429749.html).
   *
   * @param request CreateInstanceOpsTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateInstanceOpsTaskResponse
   */
  async createInstanceOpsTaskWithOptions(request: CreateInstanceOpsTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceOpsTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.opsType)) {
      query["OpsType"] = request.opsType;
    }

    if (!Util.isUnset(request.opsValue)) {
      query["OpsValue"] = request.opsValue;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceOpsTask",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceOpsTaskResponse>(await this.callApi(params, req, runtime), new CreateInstanceOpsTaskResponse({}));
  }

  /**
   * @summary Creates an O&M task.
   *
   * @description O&M tasks are classified into:
   * *   coredump: After you enable coredump, the system generates a core dump file when a container unexpectedly stops. You can use the core dump file to analyze the exception and find out the cause of the problem. For more information, see [Enable coredump](https://help.aliyun.com/document_detail/167801.html).
   * *   tcpdump: After you enable tcpdump, the system captures network packets when a container unexpectedly stops. You can analyze the packets and locate network problems. For more information, see Enable [tcpdump](https://help.aliyun.com/document_detail/429749.html).
   *
   * @param request CreateInstanceOpsTaskRequest
   * @return CreateInstanceOpsTaskResponse
   */
  async createInstanceOpsTask(request: CreateInstanceOpsTaskRequest): Promise<CreateInstanceOpsTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceOpsTaskWithOptions(request, runtime);
  }

  /**
   * @summary Creates a VNode to connect self-managed Kubernetes clusters to elastic container instances.
   *
   * @description *   When you call this operation to create a virtual node, the system automatically creates a service-linked role AliyunServiceRoleForECIVnode. This way, you can use the service-linked role to access relevant cloud services such as Elastic Container Instance, Elastic Compute Service (ECS), and Virtual Private Cloud (VPC). For more information, see [Service-linked role for virtual nodes](https://help.aliyun.com/document_detail/311014.html).
   * *   You are charged for virtual nodes based on number of virtual nodes that you use. Each virtual node has a resident node, which is equivalent to an ECI instance with 2 vCPU cores and 8 GiB memory. You are charged for virtual nodes based on elastic container instances.
   *
   * @param request CreateVirtualNodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateVirtualNodeResponse
   */
  async createVirtualNodeWithOptions(request: CreateVirtualNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterDNS)) {
      query["ClusterDNS"] = request.clusterDNS;
    }

    if (!Util.isUnset(request.clusterDomain)) {
      query["ClusterDomain"] = request.clusterDomain;
    }

    if (!Util.isUnset(request.customResources)) {
      query["CustomResources"] = request.customResources;
    }

    if (!Util.isUnset(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!Util.isUnset(request.enablePublicNetwork)) {
      query["EnablePublicNetwork"] = request.enablePublicNetwork;
    }

    if (!Util.isUnset(request.kubeConfig)) {
      query["KubeConfig"] = request.kubeConfig;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.taint)) {
      query["Taint"] = request.taint;
    }

    if (!Util.isUnset(request.tlsBootstrapEnabled)) {
      query["TlsBootstrapEnabled"] = request.tlsBootstrapEnabled;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.virtualNodeName)) {
      query["VirtualNodeName"] = request.virtualNodeName;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVirtualNode",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVirtualNodeResponse>(await this.callApi(params, req, runtime), new CreateVirtualNodeResponse({}));
  }

  /**
   * @summary Creates a VNode to connect self-managed Kubernetes clusters to elastic container instances.
   *
   * @description *   When you call this operation to create a virtual node, the system automatically creates a service-linked role AliyunServiceRoleForECIVnode. This way, you can use the service-linked role to access relevant cloud services such as Elastic Container Instance, Elastic Compute Service (ECS), and Virtual Private Cloud (VPC). For more information, see [Service-linked role for virtual nodes](https://help.aliyun.com/document_detail/311014.html).
   * *   You are charged for virtual nodes based on number of virtual nodes that you use. Each virtual node has a resident node, which is equivalent to an ECI instance with 2 vCPU cores and 8 GiB memory. You are charged for virtual nodes based on elastic container instances.
   *
   * @param request CreateVirtualNodeRequest
   * @return CreateVirtualNodeResponse
   */
  async createVirtualNode(request: CreateVirtualNodeRequest): Promise<CreateVirtualNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualNodeWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a container group.
   *
   * @description You can delete a container group that you no longer need. Before you delete a container group, make sure that you understand the lifecycle of container groups. For more information, see [Lifecycle of an elastic container instance](https://help.aliyun.com/document_detail/122385.html).
   *
   * @param request DeleteContainerGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteContainerGroupResponse
   */
  async deleteContainerGroupWithOptions(request: DeleteContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContainerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContainerGroupResponse>(await this.callApi(params, req, runtime), new DeleteContainerGroupResponse({}));
  }

  /**
   * @summary Deletes a container group.
   *
   * @description You can delete a container group that you no longer need. Before you delete a container group, make sure that you understand the lifecycle of container groups. For more information, see [Lifecycle of an elastic container instance](https://help.aliyun.com/document_detail/122385.html).
   *
   * @param request DeleteContainerGroupRequest
   * @return DeleteContainerGroupResponse
   */
  async deleteContainerGroup(request: DeleteContainerGroupRequest): Promise<DeleteContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContainerGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a DataCache.
   *
   * @param request DeleteDataCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDataCacheResponse
   */
  async deleteDataCacheWithOptions(request: DeleteDataCacheRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataCacheResponse>(await this.callApi(params, req, runtime), new DeleteDataCacheResponse({}));
  }

  /**
   * @summary Deletes a DataCache.
   *
   * @param request DeleteDataCacheRequest
   * @return DeleteDataCacheResponse
   */
  async deleteDataCache(request: DeleteDataCacheRequest): Promise<DeleteDataCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataCacheWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an image cache.
   *
   * @param request DeleteImageCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteImageCacheResponse
   */
  async deleteImageCacheWithOptions(request: DeleteImageCacheRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImageCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageCacheResponse>(await this.callApi(params, req, runtime), new DeleteImageCacheResponse({}));
  }

  /**
   * @summary Deletes an image cache.
   *
   * @param request DeleteImageCacheRequest
   * @return DeleteImageCacheResponse
   */
  async deleteImageCache(request: DeleteImageCacheRequest): Promise<DeleteImageCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageCacheWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a virtual node.
   *
   * @param request DeleteVirtualNodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteVirtualNodeResponse
   */
  async deleteVirtualNodeWithOptions(request: DeleteVirtualNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.virtualNodeId)) {
      query["VirtualNodeId"] = request.virtualNodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVirtualNode",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVirtualNodeResponse>(await this.callApi(params, req, runtime), new DeleteVirtualNodeResponse({}));
  }

  /**
   * @summary Deletes a virtual node.
   *
   * @param request DeleteVirtualNodeRequest
   * @return DeleteVirtualNodeResponse
   */
  async deleteVirtualNode(request: DeleteVirtualNodeRequest): Promise<DeleteVirtualNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualNodeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Elastic Compute Service (ECS) instance families that are available in a specified region and zone.
   *
   * @description When you call the CreateContainerGroup operation to create an elastic container instance, you can use the InstanceType parameter to specify ECS instance types that fit your specific needs. To ensure that the elastic container instance can be created, you can call the DescribeAvailableResource operation to query which ECS instance types and instance families are available in the specified region and zone before you create the elastic container instance.
   *
   * @param request DescribeAvailableResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationResource)) {
      query["DestinationResource"] = request.destinationResource;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.spotResource)) {
      query["SpotResource"] = request.spotResource;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  /**
   * @summary Queries the Elastic Compute Service (ECS) instance families that are available in a specified region and zone.
   *
   * @description When you call the CreateContainerGroup operation to create an elastic container instance, you can use the InstanceType parameter to specify ECS instance types that fit your specific needs. To ensure that the elastic container instance can be created, you can call the DescribeAvailableResource operation to query which ECS instance types and instance families are available in the specified region and zone before you create the elastic container instance.
   *
   * @param request DescribeAvailableResourceRequest
   * @return DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a CommitContainer task.
   *
   * @param request DescribeCommitContainerTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCommitContainerTaskResponse
   */
  async describeCommitContainerTaskWithOptions(request: DescribeCommitContainerTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommitContainerTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCommitContainerTask",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCommitContainerTaskResponse>(await this.callApi(params, req, runtime), new DescribeCommitContainerTaskResponse({}));
  }

  /**
   * @summary Queries the details of a CommitContainer task.
   *
   * @param request DescribeCommitContainerTaskRequest
   * @return DescribeCommitContainerTaskResponse
   */
  async describeCommitContainerTask(request: DescribeCommitContainerTaskRequest): Promise<DescribeCommitContainerTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommitContainerTaskWithOptions(request, runtime);
  }

  /**
   * @summary Queries event information about multiple container groups at a time.
   *
   * @description You can call this operation to query the event information about multiple elastic container instances at a time. By default, the most recent 50 entries of events of each elastic container instance are returned.
   *
   * @param request DescribeContainerGroupEventsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerGroupEventsResponse
   */
  async describeContainerGroupEventsWithOptions(request: DescribeContainerGroupEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!Util.isUnset(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sinceSecond)) {
      query["SinceSecond"] = request.sinceSecond;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerGroupEvents",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerGroupEventsResponse>(await this.callApi(params, req, runtime), new DescribeContainerGroupEventsResponse({}));
  }

  /**
   * @summary Queries event information about multiple container groups at a time.
   *
   * @description You can call this operation to query the event information about multiple elastic container instances at a time. By default, the most recent 50 entries of events of each elastic container instance are returned.
   *
   * @param request DescribeContainerGroupEventsRequest
   * @return DescribeContainerGroupEventsResponse
   */
  async describeContainerGroupEvents(request: DescribeContainerGroupEventsRequest): Promise<DescribeContainerGroupEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupEventsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the monitoring data of an elastic container instance.
   *
   * @description *   A maximum of 50 monitoring data entries can be returned. If the number of monitoring data entries exceeds this limit, an error message is returned.
   * *   You can query real-time monitoring data (data generated within the last 5 minutes) and historical data (data generated more than 5 minutes ago). If the time range to query starts or ends later than the current time, historical monitoring data generated more than 5 minutes ago is returned.
   * *   The elastic container instance whose monitoring data you want to query must be created after April 3, 2019, 15:00 UTC+8.
   *
   * @param request DescribeContainerGroupMetricRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerGroupMetricResponse
   */
  async describeContainerGroupMetricWithOptions(request: DescribeContainerGroupMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerGroupMetric",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerGroupMetricResponse>(await this.callApi(params, req, runtime), new DescribeContainerGroupMetricResponse({}));
  }

  /**
   * @summary Queries the monitoring data of an elastic container instance.
   *
   * @description *   A maximum of 50 monitoring data entries can be returned. If the number of monitoring data entries exceeds this limit, an error message is returned.
   * *   You can query real-time monitoring data (data generated within the last 5 minutes) and historical data (data generated more than 5 minutes ago). If the time range to query starts or ends later than the current time, historical monitoring data generated more than 5 minutes ago is returned.
   * *   The elastic container instance whose monitoring data you want to query must be created after April 3, 2019, 15:00 UTC+8.
   *
   * @param request DescribeContainerGroupMetricRequest
   * @return DescribeContainerGroupMetricResponse
   */
  async describeContainerGroupMetric(request: DescribeContainerGroupMetricRequest): Promise<DescribeContainerGroupMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupMetricWithOptions(request, runtime);
  }

  /**
   * @summary Queries the price of an elastic container instance.
   *
   * @description *   When you call this operation, you cannot use resource groups to control the permissions of a RAM user.
   * *   You can create an elastic container instance by specifying vCPU and memory resource specifications or by specifying ECS instance types. When you call this operation to query the prices of elastic container instances, pass in specifications of the elastic container instances.
   *     *   [vCPU and memory specifications](https://help.aliyun.com/document_detail/114662.html).
   *     *   [ECS instance types that are supported by Elastic Container Instance](https://help.aliyun.com/document_detail/114664.html).
   *
   * @param request DescribeContainerGroupPriceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerGroupPriceResponse
   */
  async describeContainerGroupPriceWithOptions(request: DescribeContainerGroupPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.computeCategory)) {
      query["ComputeCategory"] = request.computeCategory;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!Util.isUnset(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!Util.isUnset(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerGroupPrice",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerGroupPriceResponse>(await this.callApi(params, req, runtime), new DescribeContainerGroupPriceResponse({}));
  }

  /**
   * @summary Queries the price of an elastic container instance.
   *
   * @description *   When you call this operation, you cannot use resource groups to control the permissions of a RAM user.
   * *   You can create an elastic container instance by specifying vCPU and memory resource specifications or by specifying ECS instance types. When you call this operation to query the prices of elastic container instances, pass in specifications of the elastic container instances.
   *     *   [vCPU and memory specifications](https://help.aliyun.com/document_detail/114662.html).
   *     *   [ECS instance types that are supported by Elastic Container Instance](https://help.aliyun.com/document_detail/114664.html).
   *
   * @param request DescribeContainerGroupPriceRequest
   * @return DescribeContainerGroupPriceResponse
   */
  async describeContainerGroupPrice(request: DescribeContainerGroupPriceRequest): Promise<DescribeContainerGroupPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupPriceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statuses of multiple container groups at a time.
   *
   * @param request DescribeContainerGroupStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerGroupStatusResponse
   */
  async describeContainerGroupStatusWithOptions(request: DescribeContainerGroupStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sinceSecond)) {
      query["SinceSecond"] = request.sinceSecond;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerGroupStatus",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerGroupStatusResponse>(await this.callApi(params, req, runtime), new DescribeContainerGroupStatusResponse({}));
  }

  /**
   * @summary Queries the statuses of multiple container groups at a time.
   *
   * @param request DescribeContainerGroupStatusRequest
   * @return DescribeContainerGroupStatusResponse
   */
  async describeContainerGroupStatus(request: DescribeContainerGroupStatusRequest): Promise<DescribeContainerGroupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about multiple elastic container instances at a time.
   *
   * @description *   After an elastic container instance is terminated, its underlying computing resources are recycled. By default, other resources, such as elastic IP addresses (EIPs), that are created together with the instance are released together with the instance.
   * *   The metadata of an instance in the final status (Failed, Succeeded, or Expired) is retained based on the following rules:
   *     *   All metadata information is retained within 1 hour since the instance enters the final status.
   *     *   One hour after the instance enters the final status, only the latest 100 entries of metadata information in each region are retained.
   *
   * @param request DescribeContainerGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerGroupsResponse
   */
  async describeContainerGroupsWithOptions(request: DescribeContainerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.computeCategory)) {
      query["ComputeCategory"] = request.computeCategory;
    }

    if (!Util.isUnset(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!Util.isUnset(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.withEvent)) {
      query["WithEvent"] = request.withEvent;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerGroups",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerGroupsResponse>(await this.callApi(params, req, runtime), new DescribeContainerGroupsResponse({}));
  }

  /**
   * @summary Queries information about multiple elastic container instances at a time.
   *
   * @description *   After an elastic container instance is terminated, its underlying computing resources are recycled. By default, other resources, such as elastic IP addresses (EIPs), that are created together with the instance are released together with the instance.
   * *   The metadata of an instance in the final status (Failed, Succeeded, or Expired) is retained based on the following rules:
   *     *   All metadata information is retained within 1 hour since the instance enters the final status.
   *     *   One hour after the instance enters the final status, only the latest 100 entries of metadata information in each region are retained.
   *
   * @param request DescribeContainerGroupsRequest
   * @return DescribeContainerGroupsResponse
   */
  async describeContainerGroups(request: DescribeContainerGroupsRequest): Promise<DescribeContainerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the logs of a container in a container group.
   *
   * @param request DescribeContainerLogRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerLogResponse
   */
  async describeContainerLogWithOptions(request: DescribeContainerLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!Util.isUnset(request.lastTime)) {
      query["LastTime"] = request.lastTime;
    }

    if (!Util.isUnset(request.limitBytes)) {
      query["LimitBytes"] = request.limitBytes;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sinceSeconds)) {
      query["SinceSeconds"] = request.sinceSeconds;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tail)) {
      query["Tail"] = request.tail;
    }

    if (!Util.isUnset(request.timestamps)) {
      query["Timestamps"] = request.timestamps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerLog",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerLogResponse>(await this.callApi(params, req, runtime), new DescribeContainerLogResponse({}));
  }

  /**
   * @summary Queries the logs of a container in a container group.
   *
   * @param request DescribeContainerLogRequest
   * @return DescribeContainerLogResponse
   */
  async describeContainerLog(request: DescribeContainerLogRequest): Promise<DescribeContainerLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerLogWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about data caches.
   *
   * @param request DescribeDataCachesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataCachesResponse
   */
  async describeDataCachesWithOptions(request: DescribeDataCachesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataCaches",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataCachesResponse>(await this.callApi(params, req, runtime), new DescribeDataCachesResponse({}));
  }

  /**
   * @summary Queries the information about data caches.
   *
   * @param request DescribeDataCachesRequest
   * @return DescribeDataCachesResponse
   */
  async describeDataCaches(request: DescribeDataCachesRequest): Promise<DescribeDataCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataCachesWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about image caches.
   *
   * @param request DescribeImageCachesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeImageCachesResponse
   */
  async describeImageCachesWithOptions(request: DescribeImageCachesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!Util.isUnset(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!Util.isUnset(request.imageFullMatch)) {
      query["ImageFullMatch"] = request.imageFullMatch;
    }

    if (!Util.isUnset(request.imageMatchCountRequest)) {
      query["ImageMatchCountRequest"] = request.imageMatchCountRequest;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.matchImage)) {
      query["MatchImage"] = request.matchImage;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageCaches",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageCachesResponse>(await this.callApi(params, req, runtime), new DescribeImageCachesResponse({}));
  }

  /**
   * @summary Queries information about image caches.
   *
   * @param request DescribeImageCachesRequest
   * @return DescribeImageCachesResponse
   */
  async describeImageCaches(request: DescribeImageCachesRequest): Promise<DescribeImageCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageCachesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about operations and maintenance tasks of an elastic container instance.
   *
   * @param request DescribeInstanceOpsRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceOpsRecordsResponse
   */
  async describeInstanceOpsRecordsWithOptions(request: DescribeInstanceOpsRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceOpsRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.opsType)) {
      query["OpsType"] = request.opsType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceOpsRecords",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceOpsRecordsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceOpsRecordsResponse({}));
  }

  /**
   * @summary Queries the information about operations and maintenance tasks of an elastic container instance.
   *
   * @param request DescribeInstanceOpsRecordsRequest
   * @return DescribeInstanceOpsRecordsResponse
   */
  async describeInstanceOpsRecords(request: DescribeInstanceOpsRecordsRequest): Promise<DescribeInstanceOpsRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceOpsRecordsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the monitoring data of elastic container instances.
   *
   * @description *   Only the latest entry of monitoring data of each elastic container instance is returned.
   * *   You can query only the monitoring data of elastic container instances that are created after April 3, 2019 15:00:00 UTC+8.
   *
   * @param request DescribeMultiContainerGroupMetricRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeMultiContainerGroupMetricResponse
   */
  async describeMultiContainerGroupMetricWithOptions(request: DescribeMultiContainerGroupMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiContainerGroupMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMultiContainerGroupMetric",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMultiContainerGroupMetricResponse>(await this.callApi(params, req, runtime), new DescribeMultiContainerGroupMetricResponse({}));
  }

  /**
   * @summary Queries the monitoring data of elastic container instances.
   *
   * @description *   Only the latest entry of monitoring data of each elastic container instance is returned.
   * *   You can query only the monitoring data of elastic container instances that are created after April 3, 2019 15:00:00 UTC+8.
   *
   * @param request DescribeMultiContainerGroupMetricRequest
   * @return DescribeMultiContainerGroupMetricResponse
   */
  async describeMultiContainerGroupMetric(request: DescribeMultiContainerGroupMetricRequest): Promise<DescribeMultiContainerGroupMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiContainerGroupMetricWithOptions(request, runtime);
  }

  /**
   * @summary Queries the regions and zones in which Elastic Container Instance is available.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @summary Queries the regions and zones in which Elastic Container Instance is available.
   *
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about virtual nodes.
   *
   * @param request DescribeVirtualNodesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVirtualNodesResponse
   */
  async describeVirtualNodesWithOptions(request: DescribeVirtualNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.virtualNodeIds)) {
      query["VirtualNodeIds"] = request.virtualNodeIds;
    }

    if (!Util.isUnset(request.virtualNodeName)) {
      query["VirtualNodeName"] = request.virtualNodeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVirtualNodes",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVirtualNodesResponse>(await this.callApi(params, req, runtime), new DescribeVirtualNodesResponse({}));
  }

  /**
   * @summary Queries information about virtual nodes.
   *
   * @param request DescribeVirtualNodesRequest
   * @return DescribeVirtualNodesResponse
   */
  async describeVirtualNodes(request: DescribeVirtualNodesRequest): Promise<DescribeVirtualNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualNodesWithOptions(request, runtime);
  }

  /**
   * @summary Runs commands in a container.
   *
   * @param request ExecContainerCommandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecContainerCommandResponse
   */
  async execContainerCommandWithOptions(request: ExecContainerCommandRequest, runtime: $Util.RuntimeOptions): Promise<ExecContainerCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.command)) {
      query["Command"] = request.command;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.stdin)) {
      query["Stdin"] = request.stdin;
    }

    if (!Util.isUnset(request.sync)) {
      query["Sync"] = request.sync;
    }

    if (!Util.isUnset(request.TTY)) {
      query["TTY"] = request.TTY;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecContainerCommand",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecContainerCommandResponse>(await this.callApi(params, req, runtime), new ExecContainerCommandResponse({}));
  }

  /**
   * @summary Runs commands in a container.
   *
   * @param request ExecContainerCommandRequest
   * @return ExecContainerCommandResponse
   */
  async execContainerCommand(request: ExecContainerCommandRequest): Promise<ExecContainerCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execContainerCommandWithOptions(request, runtime);
  }

  /**
   * @summary 查询用户tag
   *
   * @param request ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * @summary 查询用户tag
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the used amounts and upper limits of privileges and quotas that you have in a specified region.
   *
   * @description This operation does not support resource group authentication.
   *
   * @param request ListUsageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUsageResponse
   */
  async listUsageWithOptions(request: ListUsageRequest, runtime: $Util.RuntimeOptions): Promise<ListUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsage",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsageResponse>(await this.callApi(params, req, runtime), new ListUsageResponse({}));
  }

  /**
   * @summary Queries the used amounts and upper limits of privileges and quotas that you have in a specified region.
   *
   * @description This operation does not support resource group authentication.
   *
   * @param request ListUsageRequest
   * @return ListUsageResponse
   */
  async listUsage(request: ListUsageRequest): Promise<ListUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsageWithOptions(request, runtime);
  }

  /**
   * @summary Scales out volumes on an elastic container instance.
   *
   * @description You can scale up volumes by calling this operation. You cannot scale down volumes by calling this operation. Only volumes of Alibaba Cloud disks can be scaled up.
   *
   * @param request ResizeContainerGroupVolumeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResizeContainerGroupVolumeResponse
   */
  async resizeContainerGroupVolumeWithOptions(request: ResizeContainerGroupVolumeRequest, runtime: $Util.RuntimeOptions): Promise<ResizeContainerGroupVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.newSize)) {
      query["NewSize"] = request.newSize;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.volumeName)) {
      query["VolumeName"] = request.volumeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeContainerGroupVolume",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeContainerGroupVolumeResponse>(await this.callApi(params, req, runtime), new ResizeContainerGroupVolumeResponse({}));
  }

  /**
   * @summary Scales out volumes on an elastic container instance.
   *
   * @description You can scale up volumes by calling this operation. You cannot scale down volumes by calling this operation. Only volumes of Alibaba Cloud disks can be scaled up.
   *
   * @param request ResizeContainerGroupVolumeRequest
   * @return ResizeContainerGroupVolumeResponse
   */
  async resizeContainerGroupVolume(request: ResizeContainerGroupVolumeRequest): Promise<ResizeContainerGroupVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeContainerGroupVolumeWithOptions(request, runtime);
  }

  /**
   * @summary Restarts an elastic container instance.
   *
   * @description *   Only elastic container instances that are in the Pending or Running state can be restarted. Instances that are in the Succeeded or Failed state cannot be restarted.
   * *   Elastic container instances that were created before 15:00:00 on March 7, 2019 cannot be restarted.
   * *   When an elastic container instance is being restarted, its status changes into Restarting.
   *
   * @param request RestartContainerGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestartContainerGroupResponse
   */
  async restartContainerGroupWithOptions(request: RestartContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<RestartContainerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartContainerGroupResponse>(await this.callApi(params, req, runtime), new RestartContainerGroupResponse({}));
  }

  /**
   * @summary Restarts an elastic container instance.
   *
   * @description *   Only elastic container instances that are in the Pending or Running state can be restarted. Instances that are in the Succeeded or Failed state cannot be restarted.
   * *   Elastic container instances that were created before 15:00:00 on March 7, 2019 cannot be restarted.
   * *   When an elastic container instance is being restarted, its status changes into Restarting.
   *
   * @param request RestartContainerGroupRequest
   * @return RestartContainerGroupResponse
   */
  async restartContainerGroup(request: RestartContainerGroupRequest): Promise<RestartContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartContainerGroupWithOptions(request, runtime);
  }

  /**
   * @summary 打用户tag
   *
   * @param request TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * @summary 打用户tag
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary 去除用户tag
   *
   * @param request UntagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * @summary 去除用户tag
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Updates an elastic container instance.
   *
   * @description *   Only elastic container instances that are in the Pending or Running state can be updated. After you call this operation to update an elastic container instance, the instance enters the Updating state.
   * *   If the RestartPolicy parameter is set to Never for the elastic container instance that you are updating, the containers of the instance may fail. Exercise caution if you want to update the kind of instances.
   *
   * @param request UpdateContainerGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateContainerGroupResponse
   */
  async updateContainerGroupWithOptions(request: UpdateContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateContainerGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.container)) {
      query["Container"] = request.container;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!Util.isUnset(request.initContainer)) {
      query["InitContainer"] = request.initContainer;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    if (!Util.isUnset(request.dnsConfig)) {
      query["DnsConfig"] = request.dnsConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateContainerGroupResponse>(await this.callApi(params, req, runtime), new UpdateContainerGroupResponse({}));
  }

  /**
   * @summary Updates an elastic container instance.
   *
   * @description *   Only elastic container instances that are in the Pending or Running state can be updated. After you call this operation to update an elastic container instance, the instance enters the Updating state.
   * *   If the RestartPolicy parameter is set to Never for the elastic container instance that you are updating, the containers of the instance may fail. Exercise caution if you want to update the kind of instances.
   *
   * @param request UpdateContainerGroupRequest
   * @return UpdateContainerGroupResponse
   */
  async updateContainerGroup(request: UpdateContainerGroupRequest): Promise<UpdateContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateContainerGroupWithOptions(request, runtime);
  }

  /**
   * @summary Updates a data cache.
   *
   * @param request UpdateDataCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDataCacheResponse
   */
  async updateDataCacheWithOptions(request: UpdateDataCacheRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!Util.isUnset(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.eipCreateParam)) {
      query["EipCreateParam"] = request.eipCreateParam;
    }

    if (!Util.isUnset(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataCacheResponse>(await this.callApi(params, req, runtime), new UpdateDataCacheResponse({}));
  }

  /**
   * @summary Updates a data cache.
   *
   * @param request UpdateDataCacheRequest
   * @return UpdateDataCacheResponse
   */
  async updateDataCache(request: UpdateDataCacheRequest): Promise<UpdateDataCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataCacheWithOptions(request, runtime);
  }

  /**
   * @summary Updates an image cache.
   *
   * @description Only image caches that are in the Ready or UpdateFailed state can be updated.
   *
   * @param request UpdateImageCacheRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateImageCacheResponse
   */
  async updateImageCacheWithOptions(request: UpdateImageCacheRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!Util.isUnset(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!Util.isUnset(request.eliminationStrategy)) {
      query["EliminationStrategy"] = request.eliminationStrategy;
    }

    if (!Util.isUnset(request.flash)) {
      query["Flash"] = request.flash;
    }

    if (!Util.isUnset(request.flashCopyCount)) {
      query["FlashCopyCount"] = request.flashCopyCount;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!Util.isUnset(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!Util.isUnset(request.imageCacheSize)) {
      query["ImageCacheSize"] = request.imageCacheSize;
    }

    if (!Util.isUnset(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.standardCopyCount)) {
      query["StandardCopyCount"] = request.standardCopyCount;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateImageCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateImageCacheResponse>(await this.callApi(params, req, runtime), new UpdateImageCacheResponse({}));
  }

  /**
   * @summary Updates an image cache.
   *
   * @description Only image caches that are in the Ready or UpdateFailed state can be updated.
   *
   * @param request UpdateImageCacheRequest
   * @return UpdateImageCacheResponse
   */
  async updateImageCache(request: UpdateImageCacheRequest): Promise<UpdateImageCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageCacheWithOptions(request, runtime);
  }

  /**
   * @summary Updates attributes of a virtual node.
   *
   * @description ## Usage notes
   * Only virtual nodes that are in the Ready state can be updated.
   *
   * @param request UpdateVirtualNodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateVirtualNodeResponse
   */
  async updateVirtualNodeWithOptions(request: UpdateVirtualNodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVirtualNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterDNS)) {
      query["ClusterDNS"] = request.clusterDNS;
    }

    if (!Util.isUnset(request.clusterDomain)) {
      query["ClusterDomain"] = request.clusterDomain;
    }

    if (!Util.isUnset(request.customResources)) {
      query["CustomResources"] = request.customResources;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.virtualNodeId)) {
      query["VirtualNodeId"] = request.virtualNodeId;
    }

    if (!Util.isUnset(request.virtualNodeName)) {
      query["VirtualNodeName"] = request.virtualNodeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVirtualNode",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateVirtualNodeResponse>(await this.callApi(params, req, runtime), new UpdateVirtualNodeResponse({}));
  }

  /**
   * @summary Updates attributes of a virtual node.
   *
   * @description ## Usage notes
   * Only virtual nodes that are in the Ready state can be updated.
   *
   * @param request UpdateVirtualNodeRequest
   * @return UpdateVirtualNodeResponse
   */
  async updateVirtualNode(request: UpdateVirtualNodeRequest): Promise<UpdateVirtualNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVirtualNodeWithOptions(request, runtime);
  }

}
