// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateContainerGroupRequest extends $tea.Model {
  dnsConfig?: CreateContainerGroupRequestDnsConfig;
  securityContext?: CreateContainerGroupRequestSecurityContext;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  containerGroupName?: string;
  restartPolicy?: string;
  eipInstanceId?: string;
  cpu?: number;
  memory?: number;
  resourceGroupId?: string;
  dnsPolicy?: string;
  clientToken?: string;
  instanceType?: string;
  slsEnable?: boolean;
  imageSnapshotId?: string;
  ramRoleName?: string;
  terminationGracePeriodSeconds?: number;
  autoMatchImageCache?: boolean;
  vkClientVersion?: string;
  ipv6AddressCount?: number;
  activeDeadlineSeconds?: number;
  spotStrategy?: string;
  spotPriceLimit?: number;
  scheduleStrategy?: string;
  tenantVSwitchId?: string;
  tenantSecurityGroupId?: string;
  corePattern?: string;
  shareProcessNamespace?: boolean;
  productOnEciMode?: string;
  secondaryENIPolicy?: string;
  autoCreateEip?: boolean;
  eipBandwidth?: number;
  eipISP?: string;
  eipCommonBandwidthPackage?: string;
  hostName?: string;
  ingressBandwidth?: number;
  egressBandwidth?: number;
  cpuOptionsCore?: number;
  cpuOptionsThreadsPerCore?: number;
  cpuOptionsNuma?: string;
  ephemeralStorage?: number;
  tag?: CreateContainerGroupRequestTag[];
  imageRegistryCredential?: CreateContainerGroupRequestImageRegistryCredential[];
  container?: CreateContainerGroupRequestContainer[];
  volume?: CreateContainerGroupRequestVolume[];
  initContainer?: CreateContainerGroupRequestInitContainer[];
  hostAliase?: CreateContainerGroupRequestHostAliase[];
  arn?: CreateContainerGroupRequestArn[];
  ntpServer?: string[];
  acrRegistryInfo?: CreateContainerGroupRequestAcrRegistryInfo[];
  static names(): { [key: string]: string } {
    return {
      dnsConfig: 'DnsConfig',
      securityContext: 'SecurityContext',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      containerGroupName: 'ContainerGroupName',
      restartPolicy: 'RestartPolicy',
      eipInstanceId: 'EipInstanceId',
      cpu: 'Cpu',
      memory: 'Memory',
      resourceGroupId: 'ResourceGroupId',
      dnsPolicy: 'DnsPolicy',
      clientToken: 'ClientToken',
      instanceType: 'InstanceType',
      slsEnable: 'SlsEnable',
      imageSnapshotId: 'ImageSnapshotId',
      ramRoleName: 'RamRoleName',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      autoMatchImageCache: 'AutoMatchImageCache',
      vkClientVersion: 'VkClientVersion',
      ipv6AddressCount: 'Ipv6AddressCount',
      activeDeadlineSeconds: 'ActiveDeadlineSeconds',
      spotStrategy: 'SpotStrategy',
      spotPriceLimit: 'SpotPriceLimit',
      scheduleStrategy: 'ScheduleStrategy',
      tenantVSwitchId: 'TenantVSwitchId',
      tenantSecurityGroupId: 'TenantSecurityGroupId',
      corePattern: 'CorePattern',
      shareProcessNamespace: 'ShareProcessNamespace',
      productOnEciMode: 'ProductOnEciMode',
      secondaryENIPolicy: 'SecondaryENIPolicy',
      autoCreateEip: 'AutoCreateEip',
      eipBandwidth: 'EipBandwidth',
      eipISP: 'EipISP',
      eipCommonBandwidthPackage: 'EipCommonBandwidthPackage',
      hostName: 'HostName',
      ingressBandwidth: 'IngressBandwidth',
      egressBandwidth: 'EgressBandwidth',
      cpuOptionsCore: 'CpuOptionsCore',
      cpuOptionsThreadsPerCore: 'CpuOptionsThreadsPerCore',
      cpuOptionsNuma: 'CpuOptionsNuma',
      ephemeralStorage: 'EphemeralStorage',
      tag: 'Tag',
      imageRegistryCredential: 'ImageRegistryCredential',
      container: 'Container',
      volume: 'Volume',
      initContainer: 'InitContainer',
      hostAliase: 'HostAliase',
      arn: 'Arn',
      ntpServer: 'NtpServer',
      acrRegistryInfo: 'AcrRegistryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsConfig: CreateContainerGroupRequestDnsConfig,
      securityContext: CreateContainerGroupRequestSecurityContext,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      zoneId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      containerGroupName: 'string',
      restartPolicy: 'string',
      eipInstanceId: 'string',
      cpu: 'number',
      memory: 'number',
      resourceGroupId: 'string',
      dnsPolicy: 'string',
      clientToken: 'string',
      instanceType: 'string',
      slsEnable: 'boolean',
      imageSnapshotId: 'string',
      ramRoleName: 'string',
      terminationGracePeriodSeconds: 'number',
      autoMatchImageCache: 'boolean',
      vkClientVersion: 'string',
      ipv6AddressCount: 'number',
      activeDeadlineSeconds: 'number',
      spotStrategy: 'string',
      spotPriceLimit: 'number',
      scheduleStrategy: 'string',
      tenantVSwitchId: 'string',
      tenantSecurityGroupId: 'string',
      corePattern: 'string',
      shareProcessNamespace: 'boolean',
      productOnEciMode: 'string',
      secondaryENIPolicy: 'string',
      autoCreateEip: 'boolean',
      eipBandwidth: 'number',
      eipISP: 'string',
      eipCommonBandwidthPackage: 'string',
      hostName: 'string',
      ingressBandwidth: 'number',
      egressBandwidth: 'number',
      cpuOptionsCore: 'number',
      cpuOptionsThreadsPerCore: 'number',
      cpuOptionsNuma: 'string',
      ephemeralStorage: 'number',
      tag: { 'type': 'array', 'itemType': CreateContainerGroupRequestTag },
      imageRegistryCredential: { 'type': 'array', 'itemType': CreateContainerGroupRequestImageRegistryCredential },
      container: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainer },
      volume: { 'type': 'array', 'itemType': CreateContainerGroupRequestVolume },
      initContainer: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainer },
      hostAliase: { 'type': 'array', 'itemType': CreateContainerGroupRequestHostAliase },
      arn: { 'type': 'array', 'itemType': CreateContainerGroupRequestArn },
      ntpServer: { 'type': 'array', 'itemType': 'string' },
      acrRegistryInfo: { 'type': 'array', 'itemType': CreateContainerGroupRequestAcrRegistryInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupResponseBody extends $tea.Model {
  requestId?: string;
  containerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      containerGroupId: 'ContainerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      containerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  imageCacheName?: string;
  eipInstanceId?: string;
  resourceGroupId?: string;
  clientToken?: string;
  imageCacheSize?: number;
  vkClientVersion?: string;
  retentionDays?: number;
  autoMatchImageCache?: boolean;
  imageRegistryCredential?: CreateImageCacheRequestImageRegistryCredential[];
  image?: string[];
  tag?: CreateImageCacheRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      imageCacheName: 'ImageCacheName',
      eipInstanceId: 'EipInstanceId',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
      imageCacheSize: 'ImageCacheSize',
      vkClientVersion: 'VkClientVersion',
      retentionDays: 'RetentionDays',
      autoMatchImageCache: 'AutoMatchImageCache',
      imageRegistryCredential: 'ImageRegistryCredential',
      image: 'Image',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      zoneId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      imageCacheName: 'string',
      eipInstanceId: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
      imageCacheSize: 'number',
      vkClientVersion: 'string',
      retentionDays: 'number',
      autoMatchImageCache: 'boolean',
      imageRegistryCredential: { 'type': 'array', 'itemType': CreateImageCacheRequestImageRegistryCredential },
      image: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateImageCacheRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheResponseBody extends $tea.Model {
  requestId?: string;
  imageCacheId?: string;
  containerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageCacheId: 'ImageCacheId',
      containerGroupId: 'ContainerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageCacheId: 'string',
      containerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupId?: string;
  clientToken?: string;
  vkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupId: 'ContainerGroupId',
      clientToken: 'ClientToken',
      vkClientVersion: 'VkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupId: 'string',
      clientToken: 'string',
      vkClientVersion: 'string',
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
  headers: { [key: string]: string };
  body: DeleteContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageCacheRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  imageCacheId?: string;
  clientToken?: string;
  vkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      imageCacheId: 'ImageCacheId',
      clientToken: 'ClientToken',
      vkClientVersion: 'VkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      imageCacheId: 'string',
      clientToken: 'string',
      vkClientVersion: 'string',
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
  headers: { [key: string]: string };
  body: DeleteImageCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImageCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupId?: string;
  startTime?: string;
  endTime?: string;
  period?: string;
  vkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupId: 'ContainerGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      vkClientVersion: 'VkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
      vkClientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBody extends $tea.Model {
  requestId?: string;
  containerGroupId?: string;
  records?: DescribeContainerGroupMetricResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      containerGroupId: 'ContainerGroupId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      containerGroupId: 'string',
      records: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerGroupMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerGroupMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  cpu?: number;
  memory?: number;
  instanceType?: string;
  spotStrategy?: string;
  zoneId?: string;
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      cpu: 'Cpu',
      memory: 'Memory',
      instanceType: 'InstanceType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      cpu: 'number',
      memory: 'number',
      instanceType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
      spotPriceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBody extends $tea.Model {
  requestId?: string;
  priceInfo?: DescribeContainerGroupPriceResponseBodyPriceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribeContainerGroupPriceResponseBodyPriceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerGroupPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerGroupPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  vSwitchId?: string;
  nextToken?: string;
  limit?: number;
  containerGroupIds?: string;
  containerGroupName?: string;
  status?: string;
  vkClientVersion?: string;
  resourceGroupId?: string;
  withEvent?: boolean;
  tag?: DescribeContainerGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      nextToken: 'NextToken',
      limit: 'Limit',
      containerGroupIds: 'ContainerGroupIds',
      containerGroupName: 'ContainerGroupName',
      status: 'Status',
      vkClientVersion: 'VkClientVersion',
      resourceGroupId: 'ResourceGroupId',
      withEvent: 'WithEvent',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      zoneId: 'string',
      vSwitchId: 'string',
      nextToken: 'string',
      limit: 'number',
      containerGroupIds: 'string',
      containerGroupName: 'string',
      status: 'string',
      vkClientVersion: 'string',
      resourceGroupId: 'string',
      withEvent: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  containerGroups?: DescribeContainerGroupsResponseBodyContainerGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      containerGroups: 'ContainerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      containerGroups: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupId?: string;
  containerName?: string;
  startTime?: string;
  tail?: number;
  lastTime?: boolean;
  sinceSeconds?: number;
  limitBytes?: number;
  timestamps?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      startTime: 'StartTime',
      tail: 'Tail',
      lastTime: 'LastTime',
      sinceSeconds: 'SinceSeconds',
      limitBytes: 'LimitBytes',
      timestamps: 'Timestamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupId: 'string',
      containerName: 'string',
      startTime: 'string',
      tail: 'number',
      lastTime: 'boolean',
      sinceSeconds: 'number',
      limitBytes: 'number',
      timestamps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerLogResponseBody extends $tea.Model {
  requestId?: string;
  containerName?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      containerName: 'ContainerName',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      containerName: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  imageCacheId?: string;
  imageCacheName?: string;
  snapshotId?: string;
  image?: string;
  resourceGroupId?: string;
  tag?: DescribeImageCachesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      snapshotId: 'SnapshotId',
      image: 'Image',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      imageCacheId: 'string',
      imageCacheName: 'string',
      snapshotId: 'string',
      image: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImageCachesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponseBody extends $tea.Model {
  requestId?: string;
  imageCaches?: DescribeImageCachesResponseBodyImageCaches[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageCaches: 'ImageCaches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageCaches: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCaches },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupIds?: string;
  resourceGroupId?: string;
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupIds: 'ContainerGroupIds',
      resourceGroupId: 'ResourceGroupId',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupIds: 'string',
      resourceGroupId: 'string',
      metricType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBody extends $tea.Model {
  requestId?: string;
  monitorDatas?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorDatas: 'MonitorDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorDatas: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMultiContainerGroupMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMultiContainerGroupMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecContainerCommandRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupId?: string;
  containerName?: string;
  command?: string;
  TTY?: boolean;
  stdin?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      command: 'Command',
      TTY: 'TTY',
      stdin: 'Stdin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupId: 'string',
      containerName: 'string',
      command: 'string',
      TTY: 'boolean',
      stdin: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecContainerCommandResponseBody extends $tea.Model {
  requestId?: string;
  webSocketUri?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webSocketUri: 'WebSocketUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webSocketUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecContainerCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecContainerCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecContainerCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsageRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsageResponseBody extends $tea.Model {
  requestId?: string;
  attributes?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      attributes: 'Attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartContainerGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupId?: string;
  clientToken?: string;
  vkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupId: 'ContainerGroupId',
      clientToken: 'ClientToken',
      vkClientVersion: 'VkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupId: 'string',
      clientToken: 'string',
      vkClientVersion: 'string',
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
  headers: { [key: string]: string };
  body: RestartContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequest extends $tea.Model {
  dnsConfig?: UpdateContainerGroupRequestDnsConfig;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  containerGroupId?: string;
  restartPolicy?: string;
  clientToken?: string;
  cpu?: number;
  memory?: number;
  resourceGroupId?: string;
  tag?: UpdateContainerGroupRequestTag[];
  volume?: UpdateContainerGroupRequestVolume[];
  container?: UpdateContainerGroupRequestContainer[];
  initContainer?: UpdateContainerGroupRequestInitContainer[];
  imageRegistryCredential?: UpdateContainerGroupRequestImageRegistryCredential[];
  static names(): { [key: string]: string } {
    return {
      dnsConfig: 'DnsConfig',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      containerGroupId: 'ContainerGroupId',
      restartPolicy: 'RestartPolicy',
      clientToken: 'ClientToken',
      cpu: 'Cpu',
      memory: 'Memory',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      volume: 'Volume',
      container: 'Container',
      initContainer: 'InitContainer',
      imageRegistryCredential: 'ImageRegistryCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsConfig: UpdateContainerGroupRequestDnsConfig,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      containerGroupId: 'string',
      restartPolicy: 'string',
      clientToken: 'string',
      cpu: 'number',
      memory: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': UpdateContainerGroupRequestTag },
      volume: { 'type': 'array', 'itemType': UpdateContainerGroupRequestVolume },
      container: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainer },
      initContainer: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainer },
      imageRegistryCredential: { 'type': 'array', 'itemType': UpdateContainerGroupRequestImageRegistryCredential },
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
  headers: { [key: string]: string };
  body: UpdateContainerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateContainerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestDnsConfigOption extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestDnsConfig extends $tea.Model {
  nameServer?: string[];
  search?: string[];
  option?: CreateContainerGroupRequestDnsConfigOption[];
  static names(): { [key: string]: string } {
    return {
      nameServer: 'NameServer',
      search: 'Search',
      option: 'Option',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServer: { 'type': 'array', 'itemType': 'string' },
      search: { 'type': 'array', 'itemType': 'string' },
      option: { 'type': 'array', 'itemType': CreateContainerGroupRequestDnsConfigOption },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestSecurityContextSysctl extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
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

export class CreateContainerGroupRequestContainerReadinessProbeHttpGet extends $tea.Model {
  scheme?: string;
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      scheme: 'Scheme',
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheme: 'string',
      path: 'string',
      port: 'number',
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

export class CreateContainerGroupRequestContainerReadinessProbe extends $tea.Model {
  timeoutSeconds?: number;
  successThreshold?: number;
  tcpSocket: CreateContainerGroupRequestContainerReadinessProbeTcpSocket;
  httpGet: CreateContainerGroupRequestContainerReadinessProbeHttpGet;
  periodSeconds?: number;
  initialDelaySeconds?: number;
  exec: CreateContainerGroupRequestContainerReadinessProbeExec;
  failureThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutSeconds: 'TimeoutSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      httpGet: 'HttpGet',
      periodSeconds: 'PeriodSeconds',
      initialDelaySeconds: 'InitialDelaySeconds',
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateContainerGroupRequestContainerReadinessProbeTcpSocket,
      httpGet: CreateContainerGroupRequestContainerReadinessProbeHttpGet,
      periodSeconds: 'number',
      initialDelaySeconds: 'number',
      exec: CreateContainerGroupRequestContainerReadinessProbeExec,
      failureThreshold: 'number',
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
  capability: CreateContainerGroupRequestContainerSecurityContextCapability;
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
  scheme?: string;
  port?: number;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      scheme: 'Scheme',
      port: 'Port',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheme: 'string',
      port: 'number',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLivenessProbe extends $tea.Model {
  periodSeconds?: number;
  tcpSocket: CreateContainerGroupRequestContainerLivenessProbeTcpSocket;
  initialDelaySeconds?: number;
  successThreshold?: number;
  exec: CreateContainerGroupRequestContainerLivenessProbeExec;
  httpGet: CreateContainerGroupRequestContainerLivenessProbeHttpGet;
  failureThreshold?: number;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      tcpSocket: 'TcpSocket',
      initialDelaySeconds: 'InitialDelaySeconds',
      successThreshold: 'SuccessThreshold',
      exec: 'Exec',
      httpGet: 'HttpGet',
      failureThreshold: 'FailureThreshold',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      tcpSocket: CreateContainerGroupRequestContainerLivenessProbeTcpSocket,
      initialDelaySeconds: 'number',
      successThreshold: 'number',
      exec: CreateContainerGroupRequestContainerLivenessProbeExec,
      httpGet: CreateContainerGroupRequestContainerLivenessProbeHttpGet,
      failureThreshold: 'number',
      timeoutSeconds: 'number',
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
  fieldRef: CreateContainerGroupRequestContainerEnvironmentVarFieldRef;
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

export class CreateContainerGroupRequestContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  subPath?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      subPath: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerPort extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestContainer extends $tea.Model {
  readinessProbe: CreateContainerGroupRequestContainerReadinessProbe;
  securityContext: CreateContainerGroupRequestContainerSecurityContext;
  livenessProbe: CreateContainerGroupRequestContainerLivenessProbe;
  environmentVar?: CreateContainerGroupRequestContainerEnvironmentVar[];
  tty?: boolean;
  workingDir?: string;
  arg?: string[];
  stdin?: boolean;
  volumeMount?: CreateContainerGroupRequestContainerVolumeMount[];
  imagePullPolicy?: string;
  stdinOnce?: boolean;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  command?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  terminationMessagePolicy?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerExec?: string[];
  lifecyclePreStopHandlerHttpGetPath?: string;
  port?: CreateContainerGroupRequestContainerPort[];
  terminationMessagePath?: string;
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerTcpSocketHost?: string;
  gpu?: number;
  lifecyclePreStopHandlerExec?: string[];
  memory?: number;
  name?: string;
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  image?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetHttpHeader?: CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader[];
  cpu?: number;
  lifecyclePostStartHandlerHttpGetPort?: number;
  lifecyclePostStartHandlerHttpGetHttpHeader?: CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader[];
  static names(): { [key: string]: string } {
    return {
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      livenessProbe: 'LivenessProbe',
      environmentVar: 'EnvironmentVar',
      tty: 'Tty',
      workingDir: 'WorkingDir',
      arg: 'Arg',
      stdin: 'Stdin',
      volumeMount: 'VolumeMount',
      imagePullPolicy: 'ImagePullPolicy',
      stdinOnce: 'StdinOnce',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      command: 'Command',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      terminationMessagePolicy: 'TerminationMessagePolicy',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerExec: 'LifecyclePostStartHandlerExec',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      port: 'Port',
      terminationMessagePath: 'TerminationMessagePath',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      gpu: 'Gpu',
      lifecyclePreStopHandlerExec: 'LifecyclePreStopHandlerExec',
      memory: 'Memory',
      name: 'Name',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      image: 'Image',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetHttpHeader: 'LifecyclePreStopHandlerHttpGetHttpHeader',
      cpu: 'Cpu',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetHttpHeader: 'LifecyclePostStartHandlerHttpGetHttpHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readinessProbe: CreateContainerGroupRequestContainerReadinessProbe,
      securityContext: CreateContainerGroupRequestContainerSecurityContext,
      livenessProbe: CreateContainerGroupRequestContainerLivenessProbe,
      environmentVar: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerEnvironmentVar },
      tty: 'boolean',
      workingDir: 'string',
      arg: { 'type': 'array', 'itemType': 'string' },
      stdin: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerVolumeMount },
      imagePullPolicy: 'string',
      stdinOnce: 'boolean',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      terminationMessagePolicy: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetPath: 'string',
      port: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerPort },
      terminationMessagePath: 'string',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      gpu: 'number',
      lifecyclePreStopHandlerExec: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      name: 'string',
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      image: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader },
      cpu: 'number',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': CreateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeader },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeDiskVolume extends $tea.Model {
  diskSize?: number;
  fsType?: string;
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      fsType: 'FsType',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      fsType: 'string',
      diskId: 'string',
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

export class CreateContainerGroupRequestVolumeFlexVolume extends $tea.Model {
  fsType?: string;
  options?: string;
  driver?: string;
  static names(): { [key: string]: string } {
    return {
      fsType: 'FsType',
      options: 'Options',
      driver: 'Driver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsType: 'string',
      options: 'string',
      driver: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeHostPathVolume extends $tea.Model {
  type?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath extends $tea.Model {
  path?: string;
  mode?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      mode: 'Mode',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      mode: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeConfigFileVolume extends $tea.Model {
  defaultMode?: number;
  configFileToPath?: CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath[];
  static names(): { [key: string]: string } {
    return {
      defaultMode: 'DefaultMode',
      configFileToPath: 'ConfigFileToPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultMode: 'number',
      configFileToPath: { 'type': 'array', 'itemType': CreateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolumeEmptyDirVolume extends $tea.Model {
  medium?: string;
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestVolume extends $tea.Model {
  diskVolume: CreateContainerGroupRequestVolumeDiskVolume;
  NFSVolume: CreateContainerGroupRequestVolumeNFSVolume;
  flexVolume: CreateContainerGroupRequestVolumeFlexVolume;
  hostPathVolume: CreateContainerGroupRequestVolumeHostPathVolume;
  configFileVolume: CreateContainerGroupRequestVolumeConfigFileVolume;
  emptyDirVolume: CreateContainerGroupRequestVolumeEmptyDirVolume;
  type?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      NFSVolume: 'NFSVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      configFileVolume: 'ConfigFileVolume',
      emptyDirVolume: 'EmptyDirVolume',
      type: 'Type',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: CreateContainerGroupRequestVolumeDiskVolume,
      NFSVolume: CreateContainerGroupRequestVolumeNFSVolume,
      flexVolume: CreateContainerGroupRequestVolumeFlexVolume,
      hostPathVolume: CreateContainerGroupRequestVolumeHostPathVolume,
      configFileVolume: CreateContainerGroupRequestVolumeConfigFileVolume,
      emptyDirVolume: CreateContainerGroupRequestVolumeEmptyDirVolume,
      type: 'string',
      name: 'string',
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
  capability: CreateContainerGroupRequestInitContainerSecurityContextCapability;
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

export class CreateContainerGroupRequestInitContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  subPath?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      subPath: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestInitContainerPort extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
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
  fieldRef: CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef;
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

export class CreateContainerGroupRequestInitContainer extends $tea.Model {
  securityContext: CreateContainerGroupRequestInitContainerSecurityContext;
  image?: string;
  volumeMount?: CreateContainerGroupRequestInitContainerVolumeMount[];
  port?: CreateContainerGroupRequestInitContainerPort[];
  terminationMessagePath?: string;
  environmentVar?: CreateContainerGroupRequestInitContainerEnvironmentVar[];
  imagePullPolicy?: string;
  workingDir?: string;
  cpu?: number;
  arg?: string[];
  command?: string[];
  gpu?: number;
  memory?: number;
  terminationMessagePolicy?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      image: 'Image',
      volumeMount: 'VolumeMount',
      port: 'Port',
      terminationMessagePath: 'TerminationMessagePath',
      environmentVar: 'EnvironmentVar',
      imagePullPolicy: 'ImagePullPolicy',
      workingDir: 'WorkingDir',
      cpu: 'Cpu',
      arg: 'Arg',
      command: 'Command',
      gpu: 'Gpu',
      memory: 'Memory',
      terminationMessagePolicy: 'TerminationMessagePolicy',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: CreateContainerGroupRequestInitContainerSecurityContext,
      image: 'string',
      volumeMount: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerVolumeMount },
      port: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerPort },
      terminationMessagePath: 'string',
      environmentVar: { 'type': 'array', 'itemType': CreateContainerGroupRequestInitContainerEnvironmentVar },
      imagePullPolicy: 'string',
      workingDir: 'string',
      cpu: 'number',
      arg: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      gpu: 'number',
      memory: 'number',
      terminationMessagePolicy: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestHostAliase extends $tea.Model {
  ip?: string;
  hostname?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      hostname: 'Hostname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      hostname: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestArn extends $tea.Model {
  roleArn?: string;
  roleType?: string;
  assumeRoleFor?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      roleType: 'RoleType',
      assumeRoleFor: 'AssumeRoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      roleType: 'string',
      assumeRoleFor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContainerGroupRequestAcrRegistryInfo extends $tea.Model {
  domain?: string[];
  instanceName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': 'string' },
      instanceName: 'string',
      instanceId: 'string',
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

export class DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces extends $tea.Model {
  rxErrors?: number;
  txBytes?: number;
  name?: string;
  txErrors?: number;
  rxBytes?: number;
  static names(): { [key: string]: string } {
    return {
      rxErrors: 'RxErrors',
      txBytes: 'TxBytes',
      name: 'Name',
      txErrors: 'TxErrors',
      rxBytes: 'RxBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rxErrors: 'number',
      txBytes: 'number',
      name: 'string',
      txErrors: 'number',
      rxBytes: 'number',
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

export class DescribeContainerGroupMetricResponseBodyRecordsCPU extends $tea.Model {
  usageNanoCores?: number;
  limit?: number;
  usageCoreNanoSeconds?: number;
  load?: number;
  static names(): { [key: string]: string } {
    return {
      usageNanoCores: 'UsageNanoCores',
      limit: 'Limit',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      load: 'Load',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageNanoCores: 'number',
      limit: 'number',
      usageCoreNanoSeconds: 'number',
      load: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsMemory extends $tea.Model {
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  availableBytes?: number;
  cache?: number;
  static names(): { [key: string]: string } {
    return {
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
      availableBytes: 'number',
      cache: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsContainersCPU extends $tea.Model {
  usageNanoCores?: number;
  limit?: number;
  usageCoreNanoSeconds?: number;
  load?: number;
  static names(): { [key: string]: string } {
    return {
      usageNanoCores: 'UsageNanoCores',
      limit: 'Limit',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      load: 'Load',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageNanoCores: 'number',
      limit: 'number',
      usageCoreNanoSeconds: 'number',
      load: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupMetricResponseBodyRecordsContainersMemory extends $tea.Model {
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  availableBytes?: number;
  cache?: number;
  static names(): { [key: string]: string } {
    return {
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
      availableBytes: 'number',
      cache: 'number',
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

export class DescribeContainerGroupMetricResponseBodyRecords extends $tea.Model {
  network?: DescribeContainerGroupMetricResponseBodyRecordsNetwork;
  CPU?: DescribeContainerGroupMetricResponseBodyRecordsCPU;
  timestamp?: string;
  memory?: DescribeContainerGroupMetricResponseBodyRecordsMemory;
  containers?: DescribeContainerGroupMetricResponseBodyRecordsContainers[];
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      CPU: 'CPU',
      timestamp: 'Timestamp',
      memory: 'Memory',
      containers: 'Containers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: DescribeContainerGroupMetricResponseBodyRecordsNetwork,
      CPU: DescribeContainerGroupMetricResponseBodyRecordsCPU,
      timestamp: 'string',
      memory: DescribeContainerGroupMetricResponseBodyRecordsMemory,
      containers: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsContainers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupPriceResponseBodyPriceInfoSpotPricesSpotPrice extends $tea.Model {
  zoneId?: string;
  spotPrice?: number;
  instanceType?: string;
  originPrice?: number;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      spotPrice: 'SpotPrice',
      instanceType: 'InstanceType',
      originPrice: 'OriginPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      spotPrice: 'number',
      instanceType: 'string',
      originPrice: 'number',
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
  resource?: string;
  discountPrice?: number;
  tradePrice?: number;
  originalPrice?: number;
  rules?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      originalPrice: 'OriginalPrice',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      discountPrice: 'number',
      tradePrice: 'number',
      originalPrice: 'number',
      rules: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules,
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
  discountPrice?: number;
  tradePrice?: number;
  originalPrice?: number;
  detailInfos?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos;
  currency?: string;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      originalPrice: 'OriginalPrice',
      detailInfos: 'DetailInfos',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      tradePrice: 'number',
      originalPrice: 'number',
      detailInfos: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos,
      currency: 'string',
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

export class DescribeContainerGroupPriceResponseBodyPriceInfo extends $tea.Model {
  spotPrices?: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices;
  price?: DescribeContainerGroupPriceResponseBodyPriceInfoPrice;
  rules?: DescribeContainerGroupPriceResponseBodyPriceInfoRules;
  static names(): { [key: string]: string } {
    return {
      spotPrices: 'SpotPrices',
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPrices: DescribeContainerGroupPriceResponseBodyPriceInfoSpotPrices,
      price: DescribeContainerGroupPriceResponseBodyPriceInfoPrice,
      rules: DescribeContainerGroupPriceResponseBodyPriceInfoRules,
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

export class DescribeContainerGroupsResponseBodyContainerGroupsEvents extends $tea.Model {
  type?: string;
  lastTimestamp?: string;
  message?: string;
  name?: string;
  reason?: string;
  count?: number;
  firstTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      count: 'number',
      firstTimestamp: 'string',
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

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet extends $tea.Model {
  scheme?: string;
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      scheme: 'Scheme',
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheme: 'string',
      path: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe extends $tea.Model {
  successThreshold?: number;
  initialDelaySeconds?: number;
  failureThreshold?: number;
  timeoutSeconds?: number;
  tcpSocket?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket;
  execs?: string[];
  httpGet?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet;
  periodSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      successThreshold: 'SuccessThreshold',
      initialDelaySeconds: 'InitialDelaySeconds',
      failureThreshold: 'FailureThreshold',
      timeoutSeconds: 'TimeoutSeconds',
      tcpSocket: 'TcpSocket',
      execs: 'Execs',
      httpGet: 'HttpGet',
      periodSeconds: 'PeriodSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successThreshold: 'number',
      initialDelaySeconds: 'number',
      failureThreshold: 'number',
      timeoutSeconds: 'number',
      tcpSocket: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeTcpSocket,
      execs: { 'type': 'array', 'itemType': 'string' },
      httpGet: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbeHttpGet,
      periodSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState extends $tea.Model {
  startTime?: string;
  finishTime?: string;
  detailStatus?: string;
  state?: string;
  message?: string;
  signal?: number;
  exitCode?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      detailStatus: 'DetailStatus',
      state: 'State',
      message: 'Message',
      signal: 'Signal',
      exitCode: 'ExitCode',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      finishTime: 'string',
      detailStatus: 'string',
      state: 'string',
      message: 'string',
      signal: 'number',
      exitCode: 'number',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState extends $tea.Model {
  startTime?: string;
  finishTime?: string;
  detailStatus?: string;
  state?: string;
  message?: string;
  signal?: number;
  exitCode?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      detailStatus: 'DetailStatus',
      state: 'State',
      message: 'Message',
      signal: 'Signal',
      exitCode: 'ExitCode',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      finishTime: 'string',
      detailStatus: 'string',
      state: 'string',
      message: 'string',
      signal: 'number',
      exitCode: 'number',
      reason: 'string',
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
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  capability?: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability;
  static names(): { [key: string]: string } {
    return {
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
      capability: 'Capability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
      capability: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContextCapability,
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

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet extends $tea.Model {
  scheme?: string;
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      scheme: 'Scheme',
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheme: 'string',
      path: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe extends $tea.Model {
  successThreshold?: number;
  initialDelaySeconds?: number;
  failureThreshold?: number;
  timeoutSeconds?: number;
  tcpSocket?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket;
  execs?: string[];
  httpGet?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet;
  periodSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      successThreshold: 'SuccessThreshold',
      initialDelaySeconds: 'InitialDelaySeconds',
      failureThreshold: 'FailureThreshold',
      timeoutSeconds: 'TimeoutSeconds',
      tcpSocket: 'TcpSocket',
      execs: 'Execs',
      httpGet: 'HttpGet',
      periodSeconds: 'PeriodSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successThreshold: 'number',
      initialDelaySeconds: 'number',
      failureThreshold: 'number',
      timeoutSeconds: 'number',
      tcpSocket: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeTcpSocket,
      execs: { 'type': 'array', 'itemType': 'string' },
      httpGet: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbeHttpGet,
      periodSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsContainers extends $tea.Model {
  livenessProbe?: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe;
  commands?: string[];
  volumeMounts?: DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts[];
  args?: string[];
  image?: string;
  ports?: DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts[];
  restartCount?: number;
  imagePullPolicy?: string;
  stdinOnce?: boolean;
  cpu?: number;
  previousState?: DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState;
  tty?: boolean;
  workingDir?: string;
  currentState?: DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState;
  ready?: boolean;
  gpu?: number;
  securityContext?: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext;
  memory?: number;
  stdin?: boolean;
  name?: string;
  environmentVars?: DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars[];
  readinessProbe?: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      commands: 'Commands',
      volumeMounts: 'VolumeMounts',
      args: 'Args',
      image: 'Image',
      ports: 'Ports',
      restartCount: 'RestartCount',
      imagePullPolicy: 'ImagePullPolicy',
      stdinOnce: 'StdinOnce',
      cpu: 'Cpu',
      previousState: 'PreviousState',
      tty: 'Tty',
      workingDir: 'WorkingDir',
      currentState: 'CurrentState',
      ready: 'Ready',
      gpu: 'Gpu',
      securityContext: 'SecurityContext',
      memory: 'Memory',
      stdin: 'Stdin',
      name: 'Name',
      environmentVars: 'EnvironmentVars',
      readinessProbe: 'ReadinessProbe',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: DescribeContainerGroupsResponseBodyContainerGroupsContainersLivenessProbe,
      commands: { 'type': 'array', 'itemType': 'string' },
      volumeMounts: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersVolumeMounts },
      args: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      ports: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersPorts },
      restartCount: 'number',
      imagePullPolicy: 'string',
      stdinOnce: 'boolean',
      cpu: 'number',
      previousState: DescribeContainerGroupsResponseBodyContainerGroupsContainersPreviousState,
      tty: 'boolean',
      workingDir: 'string',
      currentState: DescribeContainerGroupsResponseBodyContainerGroupsContainersCurrentState,
      ready: 'boolean',
      gpu: 'number',
      securityContext: DescribeContainerGroupsResponseBodyContainerGroupsContainersSecurityContext,
      memory: 'number',
      stdin: 'boolean',
      name: 'string',
      environmentVars: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainersEnvironmentVars },
      readinessProbe: DescribeContainerGroupsResponseBodyContainerGroupsContainersReadinessProbe,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState extends $tea.Model {
  startTime?: string;
  finishTime?: string;
  detailStatus?: string;
  state?: string;
  message?: string;
  signal?: number;
  exitCode?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      detailStatus: 'DetailStatus',
      state: 'State',
      message: 'Message',
      signal: 'Signal',
      exitCode: 'ExitCode',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      finishTime: 'string',
      detailStatus: 'string',
      state: 'string',
      message: 'string',
      signal: 'number',
      exitCode: 'number',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState extends $tea.Model {
  startTime?: string;
  finishTime?: string;
  detailStatus?: string;
  state?: string;
  message?: string;
  signal?: number;
  exitCode?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      detailStatus: 'DetailStatus',
      state: 'State',
      message: 'Message',
      signal: 'Signal',
      exitCode: 'ExitCode',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      finishTime: 'string',
      detailStatus: 'string',
      state: 'string',
      message: 'string',
      signal: 'number',
      exitCode: 'number',
      reason: 'string',
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
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  capability?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability;
  static names(): { [key: string]: string } {
    return {
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
      capability: 'Capability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
      capability: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability,
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

export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainers extends $tea.Model {
  volumeMounts?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts[];
  args?: string[];
  image?: string;
  ports?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts[];
  restartCount?: number;
  imagePullPolicy?: string;
  previousState?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState;
  workingDir?: string;
  cpu?: number;
  currentState?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState;
  command?: string[];
  ready?: boolean;
  gpu?: number;
  securityContext?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext;
  memory?: number;
  name?: string;
  environmentVars?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars[];
  static names(): { [key: string]: string } {
    return {
      volumeMounts: 'VolumeMounts',
      args: 'Args',
      image: 'Image',
      ports: 'Ports',
      restartCount: 'RestartCount',
      imagePullPolicy: 'ImagePullPolicy',
      previousState: 'PreviousState',
      workingDir: 'WorkingDir',
      cpu: 'Cpu',
      currentState: 'CurrentState',
      command: 'Command',
      ready: 'Ready',
      gpu: 'Gpu',
      securityContext: 'SecurityContext',
      memory: 'Memory',
      name: 'Name',
      environmentVars: 'EnvironmentVars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeMounts: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersVolumeMounts },
      args: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      ports: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPorts },
      restartCount: 'number',
      imagePullPolicy: 'string',
      previousState: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersPreviousState,
      workingDir: 'string',
      cpu: 'number',
      currentState: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersCurrentState,
      command: { 'type': 'array', 'itemType': 'string' },
      ready: 'boolean',
      gpu: 'number',
      securityContext: DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContext,
      memory: 'number',
      name: 'string',
      environmentVars: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainersEnvironmentVars },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig extends $tea.Model {
  searches?: string[];
  options?: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions[];
  nameServers?: string[];
  static names(): { [key: string]: string } {
    return {
      searches: 'Searches',
      options: 'Options',
      nameServers: 'NameServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searches: { 'type': 'array', 'itemType': 'string' },
      options: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsDnsConfigOptions },
      nameServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsVolumes extends $tea.Model {
  type?: string;
  diskVolumeDiskId?: string;
  NFSVolumeReadOnly?: boolean;
  configFileVolumeConfigFileToPaths?: DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths[];
  flexVolumeFsType?: string;
  flexVolumeDriver?: string;
  diskVolumeFsType?: string;
  flexVolumeOptions?: string;
  NFSVolumeServer?: string;
  NFSVolumePath?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeDriver: 'FlexVolumeDriver',
      diskVolumeFsType: 'DiskVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      NFSVolumeServer: 'NFSVolumeServer',
      NFSVolumePath: 'NFSVolumePath',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      diskVolumeDiskId: 'string',
      NFSVolumeReadOnly: 'boolean',
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsVolumesConfigFileVolumeConfigFileToPaths },
      flexVolumeFsType: 'string',
      flexVolumeDriver: 'string',
      diskVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      NFSVolumeServer: 'string',
      NFSVolumePath: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContextSysctls extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
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

export class DescribeContainerGroupsResponseBodyContainerGroups extends $tea.Model {
  status?: string;
  creationTime?: string;
  vpcId?: string;
  internetIp?: string;
  tenantSecurityGroupId?: string;
  securityGroupId?: string;
  hostAliases?: DescribeContainerGroupsResponseBodyContainerGroupsHostAliases[];
  tags?: DescribeContainerGroupsResponseBodyContainerGroupsTags[];
  events?: DescribeContainerGroupsResponseBodyContainerGroupsEvents[];
  succeededTime?: string;
  spotStrategy?: string;
  ephemeralStorage?: number;
  tenantEniInstanceId?: string;
  discount?: number;
  restartPolicy?: string;
  memory?: number;
  tenantVSwitchId?: string;
  containers?: DescribeContainerGroupsResponseBodyContainerGroupsContainers[];
  eniInstanceId?: string;
  initContainers?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainers[];
  containerGroupId?: string;
  instanceType?: string;
  ipv6Address?: string;
  intranetIp?: string;
  regionId?: string;
  dnsConfig?: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig;
  volumes?: DescribeContainerGroupsResponseBodyContainerGroupsVolumes[];
  ramRoleName?: string;
  vSwitchId?: string;
  cpu?: number;
  expiredTime?: string;
  resourceGroupId?: string;
  zoneId?: string;
  containerGroupName?: string;
  eciSecurityContext?: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext;
  failedTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      vpcId: 'VpcId',
      internetIp: 'InternetIp',
      tenantSecurityGroupId: 'TenantSecurityGroupId',
      securityGroupId: 'SecurityGroupId',
      hostAliases: 'HostAliases',
      tags: 'Tags',
      events: 'Events',
      succeededTime: 'SucceededTime',
      spotStrategy: 'SpotStrategy',
      ephemeralStorage: 'EphemeralStorage',
      tenantEniInstanceId: 'TenantEniInstanceId',
      discount: 'Discount',
      restartPolicy: 'RestartPolicy',
      memory: 'Memory',
      tenantVSwitchId: 'TenantVSwitchId',
      containers: 'Containers',
      eniInstanceId: 'EniInstanceId',
      initContainers: 'InitContainers',
      containerGroupId: 'ContainerGroupId',
      instanceType: 'InstanceType',
      ipv6Address: 'Ipv6Address',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      dnsConfig: 'DnsConfig',
      volumes: 'Volumes',
      ramRoleName: 'RamRoleName',
      vSwitchId: 'VSwitchId',
      cpu: 'Cpu',
      expiredTime: 'ExpiredTime',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      containerGroupName: 'ContainerGroupName',
      eciSecurityContext: 'EciSecurityContext',
      failedTime: 'FailedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      vpcId: 'string',
      internetIp: 'string',
      tenantSecurityGroupId: 'string',
      securityGroupId: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsHostAliases },
      tags: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsTags },
      events: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsEvents },
      succeededTime: 'string',
      spotStrategy: 'string',
      ephemeralStorage: 'number',
      tenantEniInstanceId: 'string',
      discount: 'number',
      restartPolicy: 'string',
      memory: 'number',
      tenantVSwitchId: 'string',
      containers: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainers },
      eniInstanceId: 'string',
      initContainers: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainers },
      containerGroupId: 'string',
      instanceType: 'string',
      ipv6Address: 'string',
      intranetIp: 'string',
      regionId: 'string',
      dnsConfig: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig,
      volumes: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsVolumes },
      ramRoleName: 'string',
      vSwitchId: 'string',
      cpu: 'number',
      expiredTime: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      containerGroupName: 'string',
      eciSecurityContext: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext,
      failedTime: 'string',
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

export class DescribeImageCachesResponseBodyImageCachesEvents extends $tea.Model {
  type?: string;
  lastTimestamp?: string;
  message?: string;
  name?: string;
  count?: number;
  firstTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      count: 'number',
      firstTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageCachesResponseBodyImageCaches extends $tea.Model {
  images?: string[];
  creationTime?: string;
  status?: string;
  progress?: string;
  expireDateTime?: string;
  containerGroupId?: string;
  tags?: DescribeImageCachesResponseBodyImageCachesTags[];
  events?: DescribeImageCachesResponseBodyImageCachesEvents[];
  imageCacheId?: string;
  regionId?: string;
  snapshotId?: string;
  resourceGroupId?: string;
  imageCacheName?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      creationTime: 'CreationTime',
      status: 'Status',
      progress: 'Progress',
      expireDateTime: 'ExpireDateTime',
      containerGroupId: 'ContainerGroupId',
      tags: 'Tags',
      events: 'Events',
      imageCacheId: 'ImageCacheId',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      resourceGroupId: 'ResourceGroupId',
      imageCacheName: 'ImageCacheName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'string',
      status: 'string',
      progress: 'string',
      expireDateTime: 'string',
      containerGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCachesTags },
      events: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCachesEvents },
      imageCacheId: 'string',
      regionId: 'string',
      snapshotId: 'string',
      resourceGroupId: 'string',
      imageCacheName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces extends $tea.Model {
  rxErrors?: number;
  txBytes?: number;
  name?: string;
  txErrors?: number;
  rxBytes?: number;
  static names(): { [key: string]: string } {
    return {
      rxErrors: 'RxErrors',
      txBytes: 'TxBytes',
      name: 'Name',
      txErrors: 'TxErrors',
      rxBytes: 'RxBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rxErrors: 'number',
      txBytes: 'number',
      name: 'string',
      txErrors: 'number',
      rxBytes: 'number',
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

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU extends $tea.Model {
  usageNanoCores?: number;
  limit?: number;
  usageCoreNanoSeconds?: number;
  load?: number;
  static names(): { [key: string]: string } {
    return {
      usageNanoCores: 'UsageNanoCores',
      limit: 'Limit',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      load: 'Load',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageNanoCores: 'number',
      limit: 'number',
      usageCoreNanoSeconds: 'number',
      load: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory extends $tea.Model {
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  availableBytes?: number;
  cache?: number;
  static names(): { [key: string]: string } {
    return {
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
      availableBytes: 'number',
      cache: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersCPU extends $tea.Model {
  usageNanoCores?: number;
  limit?: number;
  usageCoreNanoSeconds?: number;
  load?: number;
  static names(): { [key: string]: string } {
    return {
      usageNanoCores: 'UsageNanoCores',
      limit: 'Limit',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      load: 'Load',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageNanoCores: 'number',
      limit: 'number',
      usageCoreNanoSeconds: 'number',
      load: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainersMemory extends $tea.Model {
  rss?: number;
  usageBytes?: number;
  workingSet?: number;
  availableBytes?: number;
  cache?: number;
  static names(): { [key: string]: string } {
    return {
      rss: 'Rss',
      usageBytes: 'UsageBytes',
      workingSet: 'WorkingSet',
      availableBytes: 'AvailableBytes',
      cache: 'Cache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rss: 'number',
      usageBytes: 'number',
      workingSet: 'number',
      availableBytes: 'number',
      cache: 'number',
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

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords extends $tea.Model {
  network?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork;
  CPU?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU;
  timestamp?: string;
  memory?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory;
  containers?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers[];
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      CPU: 'CPU',
      timestamp: 'Timestamp',
      memory: 'Memory',
      containers: 'Containers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork,
      CPU: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsCPU,
      timestamp: 'string',
      memory: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsMemory,
      containers: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsContainers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpecContainerMemory extends $tea.Model {
  limit?: number;
  swapLimit?: number;
  reservation?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      swapLimit: 'SwapLimit',
      reservation: 'Reservation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      swapLimit: 'number',
      reservation: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpecContainerCpu extends $tea.Model {
  quota?: number;
  mask?: string;
  limit?: number;
  maxLimit?: number;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      mask: 'Mask',
      limit: 'Limit',
      maxLimit: 'MaxLimit',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
      mask: 'string',
      limit: 'number',
      maxLimit: 'number',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpec extends $tea.Model {
  creationTime?: string;
  image?: string;
  labels?: string;
  hasCustomMetrics?: boolean;
  hasCpu?: boolean;
  envs?: string;
  hasDiskIo?: boolean;
  hasFilesystem?: boolean;
  hasNetwork?: boolean;
  containerMemory?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpecContainerMemory;
  hasMemory?: boolean;
  containerCpu?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpecContainerCpu;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      image: 'Image',
      labels: 'Labels',
      hasCustomMetrics: 'HasCustomMetrics',
      hasCpu: 'HasCpu',
      envs: 'Envs',
      hasDiskIo: 'HasDiskIo',
      hasFilesystem: 'HasFilesystem',
      hasNetwork: 'HasNetwork',
      containerMemory: 'ContainerMemory',
      hasMemory: 'HasMemory',
      containerCpu: 'ContainerCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      image: 'string',
      labels: 'string',
      hasCustomMetrics: 'boolean',
      hasCpu: 'boolean',
      envs: 'string',
      hasDiskIo: 'boolean',
      hasFilesystem: 'boolean',
      hasNetwork: 'boolean',
      containerMemory: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpecContainerMemory,
      hasMemory: 'boolean',
      containerCpu: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpecContainerCpu,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsTcp extends $tea.Model {
  closeWait?: number;
  finWait2?: number;
  lastAck?: number;
  closing?: number;
  listen?: number;
  timeWait?: number;
  established?: number;
  finWait1?: number;
  close?: number;
  synRecv?: number;
  synSent?: number;
  static names(): { [key: string]: string } {
    return {
      closeWait: 'CloseWait',
      finWait2: 'FinWait2',
      lastAck: 'LastAck',
      closing: 'Closing',
      listen: 'Listen',
      timeWait: 'TimeWait',
      established: 'Established',
      finWait1: 'FinWait1',
      close: 'Close',
      synRecv: 'SynRecv',
      synSent: 'SynSent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeWait: 'number',
      finWait2: 'number',
      lastAck: 'number',
      closing: 'number',
      listen: 'number',
      timeWait: 'number',
      established: 'number',
      finWait1: 'number',
      close: 'number',
      synRecv: 'number',
      synSent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsInterfaceStats extends $tea.Model {
  rxErrors?: number;
  rxDropped?: number;
  txDropped?: number;
  txBytes?: number;
  rxPackets?: number;
  txErrors?: number;
  txPackets?: number;
  rxBytes?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      rxErrors: 'RxErrors',
      rxDropped: 'RxDropped',
      txDropped: 'TxDropped',
      txBytes: 'TxBytes',
      rxPackets: 'RxPackets',
      txErrors: 'TxErrors',
      txPackets: 'TxPackets',
      rxBytes: 'RxBytes',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rxErrors: 'number',
      rxDropped: 'number',
      txDropped: 'number',
      txBytes: 'number',
      rxPackets: 'number',
      txErrors: 'number',
      txPackets: 'number',
      rxBytes: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsTcp6 extends $tea.Model {
  closeWait?: number;
  finWait2?: number;
  lastAck?: number;
  closing?: number;
  listen?: number;
  timeWait?: number;
  established?: number;
  finWait1?: number;
  close?: number;
  synRecv?: number;
  synSent?: number;
  static names(): { [key: string]: string } {
    return {
      closeWait: 'CloseWait',
      finWait2: 'FinWait2',
      lastAck: 'LastAck',
      closing: 'Closing',
      listen: 'Listen',
      timeWait: 'TimeWait',
      established: 'Established',
      finWait1: 'FinWait1',
      close: 'Close',
      synRecv: 'SynRecv',
      synSent: 'SynSent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeWait: 'number',
      finWait2: 'number',
      lastAck: 'number',
      closing: 'number',
      listen: 'number',
      timeWait: 'number',
      established: 'number',
      finWait1: 'number',
      close: 'number',
      synRecv: 'number',
      synSent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsUdp extends $tea.Model {
  txQueued?: number;
  listen?: number;
  dropped?: number;
  rxQueued?: number;
  static names(): { [key: string]: string } {
    return {
      txQueued: 'TxQueued',
      listen: 'Listen',
      dropped: 'Dropped',
      rxQueued: 'RxQueued',
    };
  }

  static types(): { [key: string]: any } {
    return {
      txQueued: 'number',
      listen: 'number',
      dropped: 'number',
      rxQueued: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsUdp6 extends $tea.Model {
  txQueued?: number;
  listen?: number;
  dropped?: number;
  rxQueued?: number;
  static names(): { [key: string]: string } {
    return {
      txQueued: 'TxQueued',
      listen: 'Listen',
      dropped: 'Dropped',
      rxQueued: 'RxQueued',
    };
  }

  static types(): { [key: string]: any } {
    return {
      txQueued: 'number',
      listen: 'number',
      dropped: 'number',
      rxQueued: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStats extends $tea.Model {
  rxDropped?: number;
  tcp?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsTcp;
  txErrors?: number;
  rxErrors?: number;
  interfaceStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsInterfaceStats[];
  tcp6?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsTcp6;
  txDropped?: number;
  udp?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsUdp;
  txBytes?: number;
  udp6?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsUdp6;
  rxPackets?: number;
  name?: string;
  rxBytes?: number;
  txPackets?: number;
  static names(): { [key: string]: string } {
    return {
      rxDropped: 'RxDropped',
      tcp: 'Tcp',
      txErrors: 'TxErrors',
      rxErrors: 'RxErrors',
      interfaceStats: 'InterfaceStats',
      tcp6: 'Tcp6',
      txDropped: 'TxDropped',
      udp: 'Udp',
      txBytes: 'TxBytes',
      udp6: 'Udp6',
      rxPackets: 'RxPackets',
      name: 'Name',
      rxBytes: 'RxBytes',
      txPackets: 'TxPackets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rxDropped: 'number',
      tcp: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsTcp,
      txErrors: 'number',
      rxErrors: 'number',
      interfaceStats: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsInterfaceStats },
      tcp6: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsTcp6,
      txDropped: 'number',
      udp: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsUdp,
      txBytes: 'number',
      udp6: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStatsUdp6,
      rxPackets: 'number',
      name: 'string',
      rxBytes: 'number',
      txPackets: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsFsStats extends $tea.Model {
  type?: string;
  readsMerged?: number;
  hasInodes?: boolean;
  readsCompleted?: number;
  writesMerged?: number;
  inodesFree?: number;
  available?: number;
  usage?: number;
  inodes?: number;
  baseUsage?: number;
  sectorsRead?: number;
  writeTime?: number;
  sectorsWritten?: number;
  readTime?: number;
  limit?: number;
  device?: string;
  writesCompleted?: number;
  ioTime?: number;
  weightedIoTime?: number;
  ioInProgress?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      readsMerged: 'ReadsMerged',
      hasInodes: 'HasInodes',
      readsCompleted: 'ReadsCompleted',
      writesMerged: 'WritesMerged',
      inodesFree: 'InodesFree',
      available: 'Available',
      usage: 'Usage',
      inodes: 'Inodes',
      baseUsage: 'BaseUsage',
      sectorsRead: 'SectorsRead',
      writeTime: 'WriteTime',
      sectorsWritten: 'SectorsWritten',
      readTime: 'ReadTime',
      limit: 'Limit',
      device: 'Device',
      writesCompleted: 'WritesCompleted',
      ioTime: 'IoTime',
      weightedIoTime: 'WeightedIoTime',
      ioInProgress: 'IoInProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      readsMerged: 'number',
      hasInodes: 'boolean',
      readsCompleted: 'number',
      writesMerged: 'number',
      inodesFree: 'number',
      available: 'number',
      usage: 'number',
      inodes: 'number',
      baseUsage: 'number',
      sectorsRead: 'number',
      writeTime: 'number',
      sectorsWritten: 'number',
      readTime: 'number',
      limit: 'number',
      device: 'string',
      writesCompleted: 'number',
      ioTime: 'number',
      weightedIoTime: 'number',
      ioInProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsAcceleratorStats extends $tea.Model {
  model?: string;
  minor?: number;
  temperature?: number;
  powerUsage?: number;
  memoryTotal?: number;
  make?: string;
  dutyCycle?: number;
  memoryUsed?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      minor: 'Minor',
      temperature: 'Temperature',
      powerUsage: 'PowerUsage',
      memoryTotal: 'MemoryTotal',
      make: 'Make',
      dutyCycle: 'DutyCycle',
      memoryUsed: 'MemoryUsed',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      minor: 'number',
      temperature: 'number',
      powerUsage: 'number',
      memoryTotal: 'number',
      make: 'string',
      dutyCycle: 'number',
      memoryUsed: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStatsCpuUsage extends $tea.Model {
  user?: number;
  perCpuUsages?: number[];
  total?: number;
  system?: number;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      perCpuUsages: 'PerCpuUsages',
      total: 'Total',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'number',
      perCpuUsages: { 'type': 'array', 'itemType': 'number' },
      total: 'number',
      system: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStatsCpuCFS extends $tea.Model {
  throttledTime?: number;
  periods?: number;
  throttledPeriods?: number;
  static names(): { [key: string]: string } {
    return {
      throttledTime: 'ThrottledTime',
      periods: 'Periods',
      throttledPeriods: 'ThrottledPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      throttledTime: 'number',
      periods: 'number',
      throttledPeriods: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStats extends $tea.Model {
  cpuUsage?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStatsCpuUsage;
  loadAverage?: number;
  cpuCFS?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStatsCpuCFS;
  static names(): { [key: string]: string } {
    return {
      cpuUsage: 'CpuUsage',
      loadAverage: 'LoadAverage',
      cpuCFS: 'CpuCFS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsage: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStatsCpuUsage,
      loadAverage: 'number',
      cpuCFS: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStatsCpuCFS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStatsHierarchicalData extends $tea.Model {
  pgmajFault?: number;
  pgFault?: number;
  static names(): { [key: string]: string } {
    return {
      pgmajFault: 'PgmajFault',
      pgFault: 'PgFault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pgmajFault: 'number',
      pgFault: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStatsContainerData extends $tea.Model {
  pgmajFault?: number;
  pgFault?: number;
  static names(): { [key: string]: string } {
    return {
      pgmajFault: 'PgmajFault',
      pgFault: 'PgFault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pgmajFault: 'number',
      pgFault: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStats extends $tea.Model {
  failCnt?: number;
  maxUsage?: number;
  hierarchicalData?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStatsHierarchicalData;
  rss?: number;
  containerData?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStatsContainerData;
  workingSet?: number;
  swap?: number;
  cache?: number;
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      failCnt: 'FailCnt',
      maxUsage: 'MaxUsage',
      hierarchicalData: 'HierarchicalData',
      rss: 'Rss',
      containerData: 'ContainerData',
      workingSet: 'WorkingSet',
      swap: 'Swap',
      cache: 'Cache',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCnt: 'number',
      maxUsage: 'number',
      hierarchicalData: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStatsHierarchicalData,
      rss: 'number',
      containerData: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStatsContainerData,
      workingSet: 'number',
      swap: 'number',
      cache: 'number',
      usage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsTaskStats extends $tea.Model {
  nrUninterruptible?: number;
  nrRunning?: number;
  nrSleeping?: number;
  nrIoWait?: number;
  nrStopped?: number;
  static names(): { [key: string]: string } {
    return {
      nrUninterruptible: 'NrUninterruptible',
      nrRunning: 'NrRunning',
      nrSleeping: 'NrSleeping',
      nrIoWait: 'NrIoWait',
      nrStopped: 'NrStopped',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nrUninterruptible: 'number',
      nrRunning: 'number',
      nrSleeping: 'number',
      nrIoWait: 'number',
      nrStopped: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiced extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiceTime extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiceBytes extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoMerged extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsSectors extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoQueued extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoTime extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoWaitTime extends $tea.Model {
  stats?: string;
  minor?: number;
  major?: number;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      stats: 'Stats',
      minor: 'Minor',
      major: 'Major',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stats: 'string',
      minor: 'number',
      major: 'number',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStats extends $tea.Model {
  ioServiced?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiced[];
  ioServiceTime?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiceTime[];
  ioServiceBytes?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiceBytes[];
  ioMerged?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoMerged[];
  sectors?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsSectors[];
  ioQueued?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoQueued[];
  ioTime?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoTime[];
  ioWaitTime?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoWaitTime[];
  static names(): { [key: string]: string } {
    return {
      ioServiced: 'IoServiced',
      ioServiceTime: 'IoServiceTime',
      ioServiceBytes: 'IoServiceBytes',
      ioMerged: 'IoMerged',
      sectors: 'Sectors',
      ioQueued: 'IoQueued',
      ioTime: 'IoTime',
      ioWaitTime: 'IoWaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioServiced: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiced },
      ioServiceTime: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiceTime },
      ioServiceBytes: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoServiceBytes },
      ioMerged: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoMerged },
      sectors: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsSectors },
      ioQueued: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoQueued },
      ioTime: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoTime },
      ioWaitTime: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStatsIoWaitTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStats extends $tea.Model {
  networkStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStats;
  fsStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsFsStats[];
  acceleratorStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsAcceleratorStats[];
  cpuStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStats;
  timestamp?: string;
  memoryStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStats;
  taskStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsTaskStats;
  diskIoStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStats;
  static names(): { [key: string]: string } {
    return {
      networkStats: 'NetworkStats',
      fsStats: 'FsStats',
      acceleratorStats: 'AcceleratorStats',
      cpuStats: 'CpuStats',
      timestamp: 'Timestamp',
      memoryStats: 'MemoryStats',
      taskStats: 'TaskStats',
      diskIoStats: 'DiskIoStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkStats: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsNetworkStats,
      fsStats: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsFsStats },
      acceleratorStats: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsAcceleratorStats },
      cpuStats: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsCpuStats,
      timestamp: 'string',
      memoryStats: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsMemoryStats,
      taskStats: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsTaskStats,
      diskIoStats: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStatsDiskIoStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfos extends $tea.Model {
  aliases?: string[];
  containerSpec?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpec;
  containerStats?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStats[];
  labels?: string;
  namespace?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      containerSpec: 'ContainerSpec',
      containerStats: 'ContainerStats',
      labels: 'Labels',
      namespace: 'Namespace',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': 'string' },
      containerSpec: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerSpec,
      containerStats: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfosContainerStats },
      labels: 'string',
      namespace: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatas extends $tea.Model {
  records?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords[];
  containerInfos?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfos[];
  containerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      containerInfos: 'ContainerInfos',
      containerGroupId: 'ContainerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecords },
      containerInfos: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasContainerInfos },
      containerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  zones?: string[];
  recommendZones?: string[];
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zones: 'Zones',
      recommendZones: 'RecommendZones',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zones: { 'type': 'array', 'itemType': 'string' },
      recommendZones: { 'type': 'array', 'itemType': 'string' },
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestDnsConfigOption extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestDnsConfig extends $tea.Model {
  nameServer?: string[];
  search?: string[];
  option?: UpdateContainerGroupRequestDnsConfigOption[];
  static names(): { [key: string]: string } {
    return {
      nameServer: 'NameServer',
      search: 'Search',
      option: 'Option',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServer: { 'type': 'array', 'itemType': 'string' },
      search: { 'type': 'array', 'itemType': 'string' },
      option: { 'type': 'array', 'itemType': UpdateContainerGroupRequestDnsConfigOption },
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

export class UpdateContainerGroupRequestVolumeNFSVolume extends $tea.Model {
  path?: string;
  server?: string;
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      server: 'Server',
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      server: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolumeConfigFileVolumeConfigFileToPath extends $tea.Model {
  path?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      content: 'string',
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
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestVolume extends $tea.Model {
  NFSVolume: UpdateContainerGroupRequestVolumeNFSVolume;
  configFileVolume: UpdateContainerGroupRequestVolumeConfigFileVolume;
  emptyDirVolume: UpdateContainerGroupRequestVolumeEmptyDirVolume;
  type?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      NFSVolume: 'NFSVolume',
      configFileVolume: 'ConfigFileVolume',
      emptyDirVolume: 'EmptyDirVolume',
      type: 'Type',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      NFSVolume: UpdateContainerGroupRequestVolumeNFSVolume,
      configFileVolume: UpdateContainerGroupRequestVolumeConfigFileVolume,
      emptyDirVolume: UpdateContainerGroupRequestVolumeEmptyDirVolume,
      type: 'string',
      name: 'string',
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

export class UpdateContainerGroupRequestContainerReadinessProbeHttpGet extends $tea.Model {
  scheme?: string;
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      scheme: 'Scheme',
      path: 'Path',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheme: 'string',
      path: 'string',
      port: 'number',
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

export class UpdateContainerGroupRequestContainerReadinessProbe extends $tea.Model {
  timeoutSeconds?: number;
  successThreshold?: number;
  tcpSocket: UpdateContainerGroupRequestContainerReadinessProbeTcpSocket;
  httpGet: UpdateContainerGroupRequestContainerReadinessProbeHttpGet;
  periodSeconds?: number;
  initialDelaySeconds?: number;
  exec: UpdateContainerGroupRequestContainerReadinessProbeExec;
  failureThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutSeconds: 'TimeoutSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      httpGet: 'HttpGet',
      periodSeconds: 'PeriodSeconds',
      initialDelaySeconds: 'InitialDelaySeconds',
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: UpdateContainerGroupRequestContainerReadinessProbeTcpSocket,
      httpGet: UpdateContainerGroupRequestContainerReadinessProbeHttpGet,
      periodSeconds: 'number',
      initialDelaySeconds: 'number',
      exec: UpdateContainerGroupRequestContainerReadinessProbeExec,
      failureThreshold: 'number',
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
  capability: UpdateContainerGroupRequestContainerSecurityContextCapability;
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
  scheme?: string;
  port?: number;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      scheme: 'Scheme',
      port: 'Port',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheme: 'string',
      port: 'number',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLivenessProbe extends $tea.Model {
  periodSeconds?: number;
  tcpSocket: UpdateContainerGroupRequestContainerLivenessProbeTcpSocket;
  initialDelaySeconds?: number;
  successThreshold?: number;
  exec: UpdateContainerGroupRequestContainerLivenessProbeExec;
  httpGet: UpdateContainerGroupRequestContainerLivenessProbeHttpGet;
  failureThreshold?: number;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      tcpSocket: 'TcpSocket',
      initialDelaySeconds: 'InitialDelaySeconds',
      successThreshold: 'SuccessThreshold',
      exec: 'Exec',
      httpGet: 'HttpGet',
      failureThreshold: 'FailureThreshold',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      tcpSocket: UpdateContainerGroupRequestContainerLivenessProbeTcpSocket,
      initialDelaySeconds: 'number',
      successThreshold: 'number',
      exec: UpdateContainerGroupRequestContainerLivenessProbeExec,
      httpGet: UpdateContainerGroupRequestContainerLivenessProbeHttpGet,
      failureThreshold: 'number',
      timeoutSeconds: 'number',
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
  fieldRef: UpdateContainerGroupRequestContainerEnvironmentVarFieldRef;
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

export class UpdateContainerGroupRequestContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  subPath?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      subPath: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerPort extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestContainer extends $tea.Model {
  readinessProbe: UpdateContainerGroupRequestContainerReadinessProbe;
  securityContext: UpdateContainerGroupRequestContainerSecurityContext;
  livenessProbe: UpdateContainerGroupRequestContainerLivenessProbe;
  environmentVar?: UpdateContainerGroupRequestContainerEnvironmentVar[];
  tty?: boolean;
  workingDir?: string;
  arg?: string[];
  stdin?: boolean;
  volumeMount?: UpdateContainerGroupRequestContainerVolumeMount[];
  imagePullPolicy?: string;
  stdinOnce?: boolean;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  command?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerExec?: string[];
  lifecyclePreStopHandlerHttpGetPath?: string;
  port?: UpdateContainerGroupRequestContainerPort[];
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerHttpGetHttpHeaders?: UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders[];
  lifecyclePostStartHandlerTcpSocketHost?: string;
  gpu?: number;
  lifecyclePreStopHandlerExec?: string[];
  memory?: number;
  name?: string;
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  image?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetHttpHeader?: UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader[];
  cpu?: number;
  lifecyclePostStartHandlerHttpGetPort?: number;
  static names(): { [key: string]: string } {
    return {
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      livenessProbe: 'LivenessProbe',
      environmentVar: 'EnvironmentVar',
      tty: 'Tty',
      workingDir: 'WorkingDir',
      arg: 'Arg',
      stdin: 'Stdin',
      volumeMount: 'VolumeMount',
      imagePullPolicy: 'ImagePullPolicy',
      stdinOnce: 'StdinOnce',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      command: 'Command',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerExec: 'LifecyclePostStartHandlerExec',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      port: 'Port',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePostStartHandlerHttpGetHttpHeaders: 'LifecyclePostStartHandlerHttpGetHttpHeaders',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      gpu: 'Gpu',
      lifecyclePreStopHandlerExec: 'LifecyclePreStopHandlerExec',
      memory: 'Memory',
      name: 'Name',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      image: 'Image',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetHttpHeader: 'LifecyclePreStopHandlerHttpGetHttpHeader',
      cpu: 'Cpu',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readinessProbe: UpdateContainerGroupRequestContainerReadinessProbe,
      securityContext: UpdateContainerGroupRequestContainerSecurityContext,
      livenessProbe: UpdateContainerGroupRequestContainerLivenessProbe,
      environmentVar: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerEnvironmentVar },
      tty: 'boolean',
      workingDir: 'string',
      arg: { 'type': 'array', 'itemType': 'string' },
      stdin: 'boolean',
      volumeMount: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerVolumeMount },
      imagePullPolicy: 'string',
      stdinOnce: 'boolean',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerExec: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetPath: 'string',
      port: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerPort },
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerHttpGetHttpHeaders: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerLifecyclePostStartHandlerHttpGetHttpHeaders },
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      gpu: 'number',
      lifecyclePreStopHandlerExec: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      name: 'string',
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      image: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetHttpHeader: { 'type': 'array', 'itemType': UpdateContainerGroupRequestContainerLifecyclePreStopHandlerHttpGetHttpHeader },
      cpu: 'number',
      lifecyclePostStartHandlerHttpGetPort: 'number',
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
  capability: UpdateContainerGroupRequestInitContainerSecurityContextCapability;
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

export class UpdateContainerGroupRequestInitContainerVolumeMount extends $tea.Model {
  mountPath?: string;
  readOnly?: boolean;
  subPath?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      readOnly: 'ReadOnly',
      subPath: 'SubPath',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      readOnly: 'boolean',
      subPath: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContainerGroupRequestInitContainerPort extends $tea.Model {
  protocol?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      port: 'number',
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
  fieldRef: UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef;
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

export class UpdateContainerGroupRequestInitContainer extends $tea.Model {
  securityContext: UpdateContainerGroupRequestInitContainerSecurityContext;
  image?: string;
  volumeMount?: UpdateContainerGroupRequestInitContainerVolumeMount[];
  port?: UpdateContainerGroupRequestInitContainerPort[];
  environmentVar?: UpdateContainerGroupRequestInitContainerEnvironmentVar[];
  imagePullPolicy?: string;
  stdinOnce?: boolean;
  cpu?: number;
  tty?: boolean;
  workingDir?: string;
  command?: string[];
  arg?: string[];
  gpu?: number;
  memory?: number;
  stdin?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      image: 'Image',
      volumeMount: 'VolumeMount',
      port: 'Port',
      environmentVar: 'EnvironmentVar',
      imagePullPolicy: 'ImagePullPolicy',
      stdinOnce: 'StdinOnce',
      cpu: 'Cpu',
      tty: 'Tty',
      workingDir: 'WorkingDir',
      command: 'Command',
      arg: 'Arg',
      gpu: 'Gpu',
      memory: 'Memory',
      stdin: 'Stdin',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: UpdateContainerGroupRequestInitContainerSecurityContext,
      image: 'string',
      volumeMount: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerVolumeMount },
      port: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerPort },
      environmentVar: { 'type': 'array', 'itemType': UpdateContainerGroupRequestInitContainerEnvironmentVar },
      imagePullPolicy: 'string',
      stdinOnce: 'boolean',
      cpu: 'number',
      tty: 'boolean',
      workingDir: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      arg: { 'type': 'array', 'itemType': 'string' },
      gpu: 'number',
      memory: 'number',
      stdin: 'boolean',
      name: 'string',
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

  async createContainerGroupWithOptions(request: CreateContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateContainerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateContainerGroupResponse>(await this.doRPCRequest("CreateContainerGroup", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateContainerGroupResponse({}));
  }

  async createContainerGroup(request: CreateContainerGroupRequest): Promise<CreateContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createContainerGroupWithOptions(request, runtime);
  }

  async createImageCacheWithOptions(request: CreateImageCacheRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImageCacheResponse>(await this.doRPCRequest("CreateImageCache", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImageCacheResponse({}));
  }

  async createImageCache(request: CreateImageCacheRequest): Promise<CreateImageCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageCacheWithOptions(request, runtime);
  }

  async deleteContainerGroupWithOptions(request: DeleteContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContainerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteContainerGroupResponse>(await this.doRPCRequest("DeleteContainerGroup", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteContainerGroupResponse({}));
  }

  async deleteContainerGroup(request: DeleteContainerGroupRequest): Promise<DeleteContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContainerGroupWithOptions(request, runtime);
  }

  async deleteImageCacheWithOptions(request: DeleteImageCacheRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImageCacheResponse>(await this.doRPCRequest("DeleteImageCache", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImageCacheResponse({}));
  }

  async deleteImageCache(request: DeleteImageCacheRequest): Promise<DeleteImageCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageCacheWithOptions(request, runtime);
  }

  async describeContainerGroupMetricWithOptions(request: DescribeContainerGroupMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContainerGroupMetricResponse>(await this.doRPCRequest("DescribeContainerGroupMetric", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContainerGroupMetricResponse({}));
  }

  async describeContainerGroupMetric(request: DescribeContainerGroupMetricRequest): Promise<DescribeContainerGroupMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupMetricWithOptions(request, runtime);
  }

  async describeContainerGroupPriceWithOptions(request: DescribeContainerGroupPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContainerGroupPriceResponse>(await this.doRPCRequest("DescribeContainerGroupPrice", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContainerGroupPriceResponse({}));
  }

  async describeContainerGroupPrice(request: DescribeContainerGroupPriceRequest): Promise<DescribeContainerGroupPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupPriceWithOptions(request, runtime);
  }

  async describeContainerGroupsWithOptions(request: DescribeContainerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContainerGroupsResponse>(await this.doRPCRequest("DescribeContainerGroups", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContainerGroupsResponse({}));
  }

  async describeContainerGroups(request: DescribeContainerGroupsRequest): Promise<DescribeContainerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerGroupsWithOptions(request, runtime);
  }

  async describeContainerLogWithOptions(request: DescribeContainerLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContainerLogResponse>(await this.doRPCRequest("DescribeContainerLog", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContainerLogResponse({}));
  }

  async describeContainerLog(request: DescribeContainerLogRequest): Promise<DescribeContainerLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerLogWithOptions(request, runtime);
  }

  async describeImageCachesWithOptions(request: DescribeImageCachesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageCachesResponse>(await this.doRPCRequest("DescribeImageCaches", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageCachesResponse({}));
  }

  async describeImageCaches(request: DescribeImageCachesRequest): Promise<DescribeImageCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageCachesWithOptions(request, runtime);
  }

  async describeMultiContainerGroupMetricWithOptions(request: DescribeMultiContainerGroupMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMultiContainerGroupMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMultiContainerGroupMetricResponse>(await this.doRPCRequest("DescribeMultiContainerGroupMetric", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMultiContainerGroupMetricResponse({}));
  }

  async describeMultiContainerGroupMetric(request: DescribeMultiContainerGroupMetricRequest): Promise<DescribeMultiContainerGroupMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMultiContainerGroupMetricWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async execContainerCommandWithOptions(request: ExecContainerCommandRequest, runtime: $Util.RuntimeOptions): Promise<ExecContainerCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecContainerCommandResponse>(await this.doRPCRequest("ExecContainerCommand", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ExecContainerCommandResponse({}));
  }

  async execContainerCommand(request: ExecContainerCommandRequest): Promise<ExecContainerCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execContainerCommandWithOptions(request, runtime);
  }

  async listUsageWithOptions(request: ListUsageRequest, runtime: $Util.RuntimeOptions): Promise<ListUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsageResponse>(await this.doRPCRequest("ListUsage", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsageResponse({}));
  }

  async listUsage(request: ListUsageRequest): Promise<ListUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsageWithOptions(request, runtime);
  }

  async restartContainerGroupWithOptions(request: RestartContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<RestartContainerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartContainerGroupResponse>(await this.doRPCRequest("RestartContainerGroup", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new RestartContainerGroupResponse({}));
  }

  async restartContainerGroup(request: RestartContainerGroupRequest): Promise<RestartContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartContainerGroupWithOptions(request, runtime);
  }

  async updateContainerGroupWithOptions(request: UpdateContainerGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateContainerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateContainerGroupResponse>(await this.doRPCRequest("UpdateContainerGroup", "2018-08-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateContainerGroupResponse({}));
  }

  async updateContainerGroup(request: UpdateContainerGroupRequest): Promise<UpdateContainerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateContainerGroupWithOptions(request, runtime);
  }

}
