// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyScalingGroupRequest extends $tea.Model {
  content?: string;
  format?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      format: 'Format',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      format: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScalingGroupResponseBody extends $tea.Model {
  requestId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScalingGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyScalingGroupResponseBody;
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
      body: ApplyScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAlbServerGroupsRequest extends $tea.Model {
  albServerGroups?: AttachAlbServerGroupsRequestAlbServerGroups[];
  clientToken?: string;
  forceAttach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      albServerGroups: 'AlbServerGroups',
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroups: { 'type': 'array', 'itemType': AttachAlbServerGroupsRequestAlbServerGroups },
      clientToken: 'string',
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAlbServerGroupsResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAlbServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachAlbServerGroupsResponseBody;
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
      body: AttachAlbServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDBInstancesRequest extends $tea.Model {
  clientToken?: string;
  DBInstances?: string[];
  forceAttach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstances: 'DBInstances',
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDBInstancesResponseBody extends $tea.Model {
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

export class AttachDBInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachDBInstancesResponseBody;
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
      body: AttachDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesRequest extends $tea.Model {
  clientToken?: string;
  entrusted?: boolean;
  instanceIds?: string[];
  lifecycleHook?: boolean;
  loadBalancerWeights?: number[];
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      entrusted: 'Entrusted',
      instanceIds: 'InstanceIds',
      lifecycleHook: 'LifecycleHook',
      loadBalancerWeights: 'LoadBalancerWeights',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      entrusted: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHook: 'boolean',
      loadBalancerWeights: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachInstancesResponseBody;
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
      body: AttachInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersRequest extends $tea.Model {
  async?: boolean;
  clientToken?: string;
  forceAttach?: boolean;
  loadBalancerConfigs?: AttachLoadBalancersRequestLoadBalancerConfigs[];
  loadBalancers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
      loadBalancerConfigs: 'LoadBalancerConfigs',
      loadBalancers: 'LoadBalancers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clientToken: 'string',
      forceAttach: 'boolean',
      loadBalancerConfigs: { 'type': 'array', 'itemType': AttachLoadBalancersRequestLoadBalancerConfigs },
      loadBalancers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachLoadBalancersResponseBody;
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
      body: AttachLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachServerGroupsRequest extends $tea.Model {
  clientToken?: string;
  forceAttach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  serverGroups?: AttachServerGroupsRequestServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      serverGroups: 'ServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      serverGroups: { 'type': 'array', 'itemType': AttachServerGroupsRequestServerGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachServerGroupsResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachServerGroupsResponseBody;
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
      body: AttachServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsRequest extends $tea.Model {
  clientToken?: string;
  forceAttach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  VServerGroups?: AttachVServerGroupsRequestVServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      VServerGroups: 'VServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      VServerGroups: { 'type': 'array', 'itemType': AttachVServerGroupsRequestVServerGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsResponseBody extends $tea.Model {
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

export class AttachVServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachVServerGroupsResponseBody;
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
      body: AttachVServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteLifecycleActionRequest extends $tea.Model {
  clientToken?: string;
  lifecycleActionResult?: string;
  lifecycleActionToken?: string;
  lifecycleHookId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lifecycleActionResult: 'LifecycleActionResult',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleHookId: 'LifecycleHookId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lifecycleActionResult: 'string',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteLifecycleActionResponseBody extends $tea.Model {
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

export class CompleteLifecycleActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompleteLifecycleActionResponseBody;
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
      body: CompleteLifecycleActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequest extends $tea.Model {
  alarmActions?: string[];
  comparisonOperator?: string;
  description?: string;
  dimensions?: CreateAlarmRequestDimensions[];
  effective?: string;
  evaluationCount?: number;
  expressions?: CreateAlarmRequestExpressions[];
  expressionsLogicOperator?: string;
  groupId?: number;
  metricName?: string;
  metricType?: string;
  name?: string;
  ownerId?: number;
  period?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmActions: 'AlarmActions',
      comparisonOperator: 'ComparisonOperator',
      description: 'Description',
      dimensions: 'Dimensions',
      effective: 'Effective',
      evaluationCount: 'EvaluationCount',
      expressions: 'Expressions',
      expressionsLogicOperator: 'ExpressionsLogicOperator',
      groupId: 'GroupId',
      metricName: 'MetricName',
      metricType: 'MetricType',
      name: 'Name',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmActions: { 'type': 'array', 'itemType': 'string' },
      comparisonOperator: 'string',
      description: 'string',
      dimensions: { 'type': 'array', 'itemType': CreateAlarmRequestDimensions },
      effective: 'string',
      evaluationCount: 'number',
      expressions: { 'type': 'array', 'itemType': CreateAlarmRequestExpressions },
      expressionsLogicOperator: 'string',
      groupId: 'number',
      metricName: 'string',
      metricType: 'string',
      name: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmResponseBody extends $tea.Model {
  alarmTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAlarmResponseBody;
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
      body: CreateAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequest extends $tea.Model {
  acrRegistryInfos?: CreateEciScalingConfigurationRequestAcrRegistryInfos[];
  activeDeadlineSeconds?: number;
  autoCreateEip?: boolean;
  autoMatchImageCache?: boolean;
  containerGroupName?: string;
  containers?: CreateEciScalingConfigurationRequestContainers[];
  costOptimization?: boolean;
  cpu?: number;
  cpuOptionsCore?: number;
  cpuOptionsThreadsPerCore?: number;
  dataCacheBucket?: string;
  dataCacheBurstingEnabled?: boolean;
  dataCachePL?: string;
  dataCacheProvisionedIops?: number;
  description?: string;
  dnsConfigNameServers?: string[];
  dnsConfigOptions?: CreateEciScalingConfigurationRequestDnsConfigOptions[];
  dnsConfigSearchs?: string[];
  dnsPolicy?: string;
  egressBandwidth?: number;
  eipBandwidth?: number;
  enableSls?: boolean;
  ephemeralStorage?: number;
  hostAliases?: CreateEciScalingConfigurationRequestHostAliases[];
  hostName?: string;
  imageRegistryCredentials?: CreateEciScalingConfigurationRequestImageRegistryCredentials[];
  imageSnapshotId?: string;
  ingressBandwidth?: number;
  initContainers?: CreateEciScalingConfigurationRequestInitContainers[];
  instanceFamilyLevel?: string;
  instanceTypes?: string[];
  ipv6AddressCount?: number;
  loadBalancerWeight?: number;
  memory?: number;
  ntpServers?: string[];
  ownerId?: number;
  ramRoleName?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  restartPolicy?: string;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  securityContextSysctls?: CreateEciScalingConfigurationRequestSecurityContextSysctls[];
  securityGroupId?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  tags?: CreateEciScalingConfigurationRequestTags[];
  terminationGracePeriodSeconds?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingConfigurationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEciScalingConfigurationResponseBody;
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
      body: CreateEciScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleHookRequest extends $tea.Model {
  defaultResult?: string;
  heartbeatTimeout?: number;
  lifecycleHookName?: string;
  lifecycleTransition?: string;
  notificationArn?: string;
  notificationMetadata?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleHookResponseBody extends $tea.Model {
  lifecycleHookId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleHookId: 'LifecycleHookId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHookId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleHookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLifecycleHookResponseBody;
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
      body: CreateLifecycleHookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNotificationConfigurationRequest extends $tea.Model {
  notificationArn?: string;
  notificationTypes?: string[];
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationArn: 'NotificationArn',
      notificationTypes: 'NotificationTypes',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationArn: 'string',
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNotificationConfigurationResponseBody extends $tea.Model {
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

export class CreateNotificationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNotificationConfigurationResponseBody;
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
      body: CreateNotificationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequest extends $tea.Model {
  imageOptions?: CreateScalingConfigurationRequestImageOptions;
  privatePoolOptions?: CreateScalingConfigurationRequestPrivatePoolOptions;
  systemDisk?: CreateScalingConfigurationRequestSystemDisk;
  affinity?: string;
  clientToken?: string;
  cpu?: number;
  creditSpecification?: string;
  customPriorities?: CreateScalingConfigurationRequestCustomPriorities[];
  dataDisks?: CreateScalingConfigurationRequestDataDisks[];
  dedicatedHostId?: string;
  deletionProtection?: boolean;
  deploymentSetId?: string;
  hostName?: string;
  hpcClusterId?: string;
  imageFamily?: string;
  imageId?: string;
  imageName?: string;
  instanceDescription?: string;
  instanceName?: string;
  instancePatternInfos?: CreateScalingConfigurationRequestInstancePatternInfos[];
  instanceType?: string;
  instanceTypeOverrides?: CreateScalingConfigurationRequestInstanceTypeOverrides[];
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ipv6AddressCount?: number;
  keyPairName?: string;
  loadBalancerWeight?: number;
  memory?: number;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  passwordInherit?: boolean;
  ramRoleName?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  schedulerOptions?: { [key: string]: any };
  securityEnhancementStrategy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  spotPriceLimits?: CreateScalingConfigurationRequestSpotPriceLimits[];
  spotStrategy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  systemDiskCategories?: string[];
  tags?: string;
  tenancy?: string;
  userData?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageOptions: 'ImageOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      clientToken: 'ClientToken',
      cpu: 'Cpu',
      creditSpecification: 'CreditSpecification',
      customPriorities: 'CustomPriorities',
      dataDisks: 'DataDisks',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceType: 'InstanceType',
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      schedulerOptions: 'SchedulerOptions',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
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
      imageOptions: CreateScalingConfigurationRequestImageOptions,
      privatePoolOptions: CreateScalingConfigurationRequestPrivatePoolOptions,
      systemDisk: CreateScalingConfigurationRequestSystemDisk,
      affinity: 'string',
      clientToken: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestDataDisks },
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestInstancePatternInfos },
      instanceType: 'string',
      instanceTypeOverrides: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestSpotPriceLimits },
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequest extends $tea.Model {
  imageOptions?: CreateScalingConfigurationShrinkRequestImageOptions;
  privatePoolOptions?: CreateScalingConfigurationShrinkRequestPrivatePoolOptions;
  systemDisk?: CreateScalingConfigurationShrinkRequestSystemDisk;
  affinity?: string;
  clientToken?: string;
  cpu?: number;
  creditSpecification?: string;
  customPriorities?: CreateScalingConfigurationShrinkRequestCustomPriorities[];
  dataDisks?: CreateScalingConfigurationShrinkRequestDataDisks[];
  dedicatedHostId?: string;
  deletionProtection?: boolean;
  deploymentSetId?: string;
  hostName?: string;
  hpcClusterId?: string;
  imageFamily?: string;
  imageId?: string;
  imageName?: string;
  instanceDescription?: string;
  instanceName?: string;
  instancePatternInfos?: CreateScalingConfigurationShrinkRequestInstancePatternInfos[];
  instanceType?: string;
  instanceTypeOverrides?: CreateScalingConfigurationShrinkRequestInstanceTypeOverrides[];
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ipv6AddressCount?: number;
  keyPairName?: string;
  loadBalancerWeight?: number;
  memory?: number;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  passwordInherit?: boolean;
  ramRoleName?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  schedulerOptionsShrink?: string;
  securityEnhancementStrategy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  spotPriceLimits?: CreateScalingConfigurationShrinkRequestSpotPriceLimits[];
  spotStrategy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  systemDiskCategories?: string[];
  tags?: string;
  tenancy?: string;
  userData?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageOptions: 'ImageOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      clientToken: 'ClientToken',
      cpu: 'Cpu',
      creditSpecification: 'CreditSpecification',
      customPriorities: 'CustomPriorities',
      dataDisks: 'DataDisks',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceType: 'InstanceType',
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      schedulerOptionsShrink: 'SchedulerOptions',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
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
      imageOptions: CreateScalingConfigurationShrinkRequestImageOptions,
      privatePoolOptions: CreateScalingConfigurationShrinkRequestPrivatePoolOptions,
      systemDisk: CreateScalingConfigurationShrinkRequestSystemDisk,
      affinity: 'string',
      clientToken: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestDataDisks },
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestInstancePatternInfos },
      instanceType: 'string',
      instanceTypeOverrides: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptionsShrink: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestSpotPriceLimits },
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingConfigurationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScalingConfigurationResponseBody;
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
      body: CreateScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequest extends $tea.Model {
  albServerGroups?: CreateScalingGroupRequestAlbServerGroups[];
  allocationStrategy?: string;
  azBalance?: boolean;
  clientToken?: string;
  compensateWithOnDemand?: boolean;
  containerGroupId?: string;
  customPolicyARN?: string;
  DBInstanceIds?: string;
  defaultCooldown?: number;
  desiredCapacity?: number;
  groupDeletionProtection?: boolean;
  groupType?: string;
  healthCheckType?: string;
  healthCheckTypes?: string[];
  instanceId?: string;
  launchTemplateId?: string;
  launchTemplateOverrides?: CreateScalingGroupRequestLaunchTemplateOverrides[];
  launchTemplateVersion?: string;
  lifecycleHooks?: CreateScalingGroupRequestLifecycleHooks[];
  loadBalancerConfigs?: CreateScalingGroupRequestLoadBalancerConfigs[];
  loadBalancerIds?: string;
  maxInstanceLifetime?: number;
  maxSize?: number;
  minSize?: number;
  multiAZPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  removalPolicies?: string[];
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  scalingGroupName?: string;
  scalingPolicy?: string;
  serverGroups?: CreateScalingGroupRequestServerGroups[];
  spotAllocationStrategy?: string;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  syncAlarmRuleToCms?: boolean;
  tags?: CreateScalingGroupRequestTags[];
  VServerGroups?: CreateScalingGroupRequestVServerGroups[];
  vSwitchId?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      albServerGroups: 'AlbServerGroups',
      allocationStrategy: 'AllocationStrategy',
      azBalance: 'AzBalance',
      clientToken: 'ClientToken',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      containerGroupId: 'ContainerGroupId',
      customPolicyARN: 'CustomPolicyARN',
      DBInstanceIds: 'DBInstanceIds',
      defaultCooldown: 'DefaultCooldown',
      desiredCapacity: 'DesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      groupType: 'GroupType',
      healthCheckType: 'HealthCheckType',
      healthCheckTypes: 'HealthCheckTypes',
      instanceId: 'InstanceId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleHooks: 'LifecycleHooks',
      loadBalancerConfigs: 'LoadBalancerConfigs',
      loadBalancerIds: 'LoadBalancerIds',
      maxInstanceLifetime: 'MaxInstanceLifetime',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      multiAZPolicy: 'MultiAZPolicy',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removalPolicies: 'RemovalPolicies',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupName: 'ScalingGroupName',
      scalingPolicy: 'ScalingPolicy',
      serverGroups: 'ServerGroups',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      syncAlarmRuleToCms: 'SyncAlarmRuleToCms',
      tags: 'Tags',
      VServerGroups: 'VServerGroups',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroups: { 'type': 'array', 'itemType': CreateScalingGroupRequestAlbServerGroups },
      allocationStrategy: 'string',
      azBalance: 'boolean',
      clientToken: 'string',
      compensateWithOnDemand: 'boolean',
      containerGroupId: 'string',
      customPolicyARN: 'string',
      DBInstanceIds: 'string',
      defaultCooldown: 'number',
      desiredCapacity: 'number',
      groupDeletionProtection: 'boolean',
      groupType: 'string',
      healthCheckType: 'string',
      healthCheckTypes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': CreateScalingGroupRequestLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      lifecycleHooks: { 'type': 'array', 'itemType': CreateScalingGroupRequestLifecycleHooks },
      loadBalancerConfigs: { 'type': 'array', 'itemType': CreateScalingGroupRequestLoadBalancerConfigs },
      loadBalancerIds: 'string',
      maxInstanceLifetime: 'number',
      maxSize: 'number',
      minSize: 'number',
      multiAZPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removalPolicies: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupName: 'string',
      scalingPolicy: 'string',
      serverGroups: { 'type': 'array', 'itemType': CreateScalingGroupRequestServerGroups },
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      syncAlarmRuleToCms: 'boolean',
      tags: { 'type': 'array', 'itemType': CreateScalingGroupRequestTags },
      VServerGroups: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroups },
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupResponseBody extends $tea.Model {
  requestId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScalingGroupResponseBody;
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
      body: CreateScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequest extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  alarmDimensions?: CreateScalingRuleRequestAlarmDimensions[];
  cooldown?: number;
  disableScaleIn?: boolean;
  estimatedInstanceWarmup?: number;
  initialMaxSize?: number;
  metricName?: string;
  minAdjustmentMagnitude?: number;
  ownerAccount?: string;
  ownerId?: number;
  predictiveScalingMode?: string;
  predictiveTaskBufferTime?: number;
  predictiveValueBehavior?: string;
  predictiveValueBuffer?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scaleInEvaluationCount?: number;
  scaleOutEvaluationCount?: number;
  scalingGroupId?: string;
  scalingRuleName?: string;
  scalingRuleType?: string;
  stepAdjustments?: CreateScalingRuleRequestStepAdjustments[];
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      alarmDimensions: 'AlarmDimensions',
      cooldown: 'Cooldown',
      disableScaleIn: 'DisableScaleIn',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      initialMaxSize: 'InitialMaxSize',
      metricName: 'MetricName',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleType: 'ScalingRuleType',
      stepAdjustments: 'StepAdjustments',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      alarmDimensions: { 'type': 'array', 'itemType': CreateScalingRuleRequestAlarmDimensions },
      cooldown: 'number',
      disableScaleIn: 'boolean',
      estimatedInstanceWarmup: 'number',
      initialMaxSize: 'number',
      metricName: 'string',
      minAdjustmentMagnitude: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      predictiveScalingMode: 'string',
      predictiveTaskBufferTime: 'number',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      scalingGroupId: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
      stepAdjustments: { 'type': 'array', 'itemType': CreateScalingRuleRequestStepAdjustments },
      targetValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  scalingRuleAri?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingRuleAri: 'ScalingRuleAri',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingRuleAri: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScalingRuleResponseBody;
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
      body: CreateScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskRequest extends $tea.Model {
  description?: string;
  desiredCapacity?: number;
  launchExpirationTime?: number;
  launchTime?: string;
  maxValue?: number;
  minValue?: number;
  ownerAccount?: string;
  ownerId?: number;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  scheduledAction?: string;
  scheduledTaskName?: string;
  taskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desiredCapacity: 'DesiredCapacity',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desiredCapacity: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      maxValue: 'number',
      minValue: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      scheduledAction: 'string',
      scheduledTaskName: 'string',
      taskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponseBody extends $tea.Model {
  requestId?: string;
  scheduledTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduledTaskId: 'ScheduledTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduledTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScheduledTaskResponseBody;
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
      body: CreateScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateScalingConfigurationRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateScalingConfigurationResponseBody extends $tea.Model {
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

export class DeactivateScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeactivateScalingConfigurationResponseBody;
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
      body: DeactivateScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmRequest extends $tea.Model {
  alarmTaskId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmResponseBody extends $tea.Model {
  alarmTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlarmResponseBody;
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
      body: DeleteAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEciScalingConfigurationRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEciScalingConfigurationResponseBody extends $tea.Model {
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

export class DeleteEciScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEciScalingConfigurationResponseBody;
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
      body: DeleteEciScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecycleHookRequest extends $tea.Model {
  lifecycleHookId?: string;
  lifecycleHookName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHookId: 'string',
      lifecycleHookName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecycleHookResponseBody extends $tea.Model {
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

export class DeleteLifecycleHookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLifecycleHookResponseBody;
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
      body: DeleteLifecycleHookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationConfigurationRequest extends $tea.Model {
  notificationArn?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationArn: 'NotificationArn',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationArn: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationConfigurationResponseBody extends $tea.Model {
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

export class DeleteNotificationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNotificationConfigurationResponseBody;
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
      body: DeleteNotificationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingConfigurationRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingConfigurationResponseBody extends $tea.Model {
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

export class DeleteScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScalingConfigurationResponseBody;
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
      body: DeleteScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingGroupRequest extends $tea.Model {
  forceDelete?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'ForceDelete',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingGroupResponseBody extends $tea.Model {
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

export class DeleteScalingGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScalingGroupResponseBody;
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
      body: DeleteScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingRuleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingRuleResponseBody extends $tea.Model {
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

export class DeleteScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScalingRuleResponseBody;
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
      body: DeleteScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledTaskRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scheduledTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scheduledTaskId: 'ScheduledTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scheduledTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledTaskResponseBody extends $tea.Model {
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

export class DeleteScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScheduledTaskResponseBody;
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
      body: DeleteScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsRequest extends $tea.Model {
  alarmTaskId?: string;
  isEnable?: boolean;
  metricName?: string;
  metricType?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      isEnable: 'IsEnable',
      metricName: 'MetricName',
      metricType: 'MetricType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      isEnable: 'boolean',
      metricName: 'string',
      metricType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBody extends $tea.Model {
  alarmList?: DescribeAlarmsResponseBodyAlarmList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmList: 'AlarmList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmList: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlarmsResponseBody;
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
      body: DescribeAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingConfigurationIds?: string[];
  scalingConfigurationNames?: string[];
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingConfigurationIds: 'ScalingConfigurationIds',
      scalingConfigurationNames: 'ScalingConfigurationNames',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingConfigurationIds: { 'type': 'array', 'itemType': 'string' },
      scalingConfigurationNames: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingConfigurations?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurations[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingConfigurations: 'ScalingConfigurations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingConfigurations: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurations },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEciScalingConfigurationsResponseBody;
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
      body: DescribeEciScalingConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsRequest extends $tea.Model {
  lifecycleActionStatus?: string;
  maxResults?: number;
  nextToken?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleActionStatus: 'LifecycleActionStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleActionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBody extends $tea.Model {
  lifecycleActions?: DescribeLifecycleActionsResponseBodyLifecycleActions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleActions: 'LifecycleActions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleActions: { 'type': 'array', 'itemType': DescribeLifecycleActionsResponseBodyLifecycleActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLifecycleActionsResponseBody;
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
      body: DescribeLifecycleActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksRequest extends $tea.Model {
  lifecycleHookIds?: string[];
  lifecycleHookName?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleHookIds: 'LifecycleHookIds',
      lifecycleHookName: 'LifecycleHookName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHookName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponseBody extends $tea.Model {
  lifecycleHooks?: DescribeLifecycleHooksResponseBodyLifecycleHooks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleHooks: 'LifecycleHooks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHooks: { 'type': 'array', 'itemType': DescribeLifecycleHooksResponseBodyLifecycleHooks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLifecycleHooksResponseBody;
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
      body: DescribeLifecycleHooksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationResponseBody extends $tea.Model {
  maxNumberOfAlbServerGroup?: number;
  maxNumberOfDBInstances?: number;
  maxNumberOfLifecycleHooks?: number;
  maxNumberOfLoadBalancers?: number;
  maxNumberOfMaxSize?: number;
  maxNumberOfMinSize?: number;
  maxNumberOfNlbServerGroup?: number;
  maxNumberOfNotificationConfigurations?: number;
  maxNumberOfScalingConfigurations?: number;
  maxNumberOfScalingGroups?: number;
  maxNumberOfScalingInstances?: number;
  maxNumberOfScalingRules?: number;
  maxNumberOfScheduledTasks?: number;
  maxNumberOfVServerGroups?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxNumberOfAlbServerGroup: 'MaxNumberOfAlbServerGroup',
      maxNumberOfDBInstances: 'MaxNumberOfDBInstances',
      maxNumberOfLifecycleHooks: 'MaxNumberOfLifecycleHooks',
      maxNumberOfLoadBalancers: 'MaxNumberOfLoadBalancers',
      maxNumberOfMaxSize: 'MaxNumberOfMaxSize',
      maxNumberOfMinSize: 'MaxNumberOfMinSize',
      maxNumberOfNlbServerGroup: 'MaxNumberOfNlbServerGroup',
      maxNumberOfNotificationConfigurations: 'MaxNumberOfNotificationConfigurations',
      maxNumberOfScalingConfigurations: 'MaxNumberOfScalingConfigurations',
      maxNumberOfScalingGroups: 'MaxNumberOfScalingGroups',
      maxNumberOfScalingInstances: 'MaxNumberOfScalingInstances',
      maxNumberOfScalingRules: 'MaxNumberOfScalingRules',
      maxNumberOfScheduledTasks: 'MaxNumberOfScheduledTasks',
      maxNumberOfVServerGroups: 'MaxNumberOfVServerGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNumberOfAlbServerGroup: 'number',
      maxNumberOfDBInstances: 'number',
      maxNumberOfLifecycleHooks: 'number',
      maxNumberOfLoadBalancers: 'number',
      maxNumberOfMaxSize: 'number',
      maxNumberOfMinSize: 'number',
      maxNumberOfNlbServerGroup: 'number',
      maxNumberOfNotificationConfigurations: 'number',
      maxNumberOfScalingConfigurations: 'number',
      maxNumberOfScalingGroups: 'number',
      maxNumberOfScalingInstances: 'number',
      maxNumberOfScalingRules: 'number',
      maxNumberOfScheduledTasks: 'number',
      maxNumberOfVServerGroups: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLimitationResponseBody;
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
      body: DescribeLimitationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponseBody extends $tea.Model {
  notificationConfigurationModels?: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationConfigurationModels: 'NotificationConfigurationModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationConfigurationModels: { 'type': 'array', 'itemType': DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNotificationConfigurationsResponseBody;
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
      body: DescribeNotificationConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationTypesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationTypesResponseBody extends $tea.Model {
  notificationTypes?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationTypes: 'NotificationTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNotificationTypesResponseBody;
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
      body: DescribeNotificationTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerId: 'number',
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

export class DescribeScalingActivitiesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingActivityIds?: string[];
  scalingGroupId?: string;
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingActivityIds: 'ScalingActivityIds',
      scalingGroupId: 'ScalingGroupId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingActivityIds: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
      statusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingActivities?: DescribeScalingActivitiesResponseBodyScalingActivities[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingActivities: 'ScalingActivities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingActivities: { 'type': 'array', 'itemType': DescribeScalingActivitiesResponseBodyScalingActivities },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingActivitiesResponseBody;
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
      body: DescribeScalingActivitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityDetailResponseBody extends $tea.Model {
  detail?: string;
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingActivityDetailResponseBody;
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
      body: DescribeScalingActivityDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingConfigurationIds?: string[];
  scalingConfigurationNames?: string[];
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingConfigurationIds: 'ScalingConfigurationIds',
      scalingConfigurationNames: 'ScalingConfigurationNames',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingConfigurationIds: { 'type': 'array', 'itemType': 'string' },
      scalingConfigurationNames: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingConfigurations?: DescribeScalingConfigurationsResponseBodyScalingConfigurations[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingConfigurations: 'ScalingConfigurations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingConfigurations: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurations },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingConfigurationsResponseBody;
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
      body: DescribeScalingConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsRequest extends $tea.Model {
  groupType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupIds?: string[];
  scalingGroupName?: string;
  scalingGroupNames?: string[];
  tags?: DescribeScalingGroupsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      groupType: 'GroupType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupIds: 'ScalingGroupIds',
      scalingGroupName: 'ScalingGroupName',
      scalingGroupNames: 'ScalingGroupNames',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupIds: { 'type': 'array', 'itemType': 'string' },
      scalingGroupName: 'string',
      scalingGroupNames: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': DescribeScalingGroupsRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingGroups?: DescribeScalingGroupsResponseBodyScalingGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingGroups: 'ScalingGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingGroupsResponseBody;
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
      body: DescribeScalingGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesRequest extends $tea.Model {
  creationType?: string;
  creationTypes?: string[];
  healthStatus?: string;
  instanceIds?: string[];
  lifecycleState?: string;
  lifecycleStates?: string[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingActivityId?: string;
  scalingConfigurationId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationType: 'CreationType',
      creationTypes: 'CreationTypes',
      healthStatus: 'HealthStatus',
      instanceIds: 'InstanceIds',
      lifecycleState: 'LifecycleState',
      lifecycleStates: 'LifecycleStates',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingActivityId: 'ScalingActivityId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationType: 'string',
      creationTypes: { 'type': 'array', 'itemType': 'string' },
      healthStatus: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleState: 'string',
      lifecycleStates: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingActivityId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingInstances?: DescribeScalingInstancesResponseBodyScalingInstances[];
  totalCount?: number;
  totalSpotCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingInstances: 'ScalingInstances',
      totalCount: 'TotalCount',
      totalSpotCount: 'TotalSpotCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingInstances: { 'type': 'array', 'itemType': DescribeScalingInstancesResponseBodyScalingInstances },
      totalCount: 'number',
      totalSpotCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingInstancesResponseBody;
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
      body: DescribeScalingInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scalingRuleAris?: string[];
  scalingRuleIds?: string[];
  scalingRuleNames?: string[];
  scalingRuleType?: string;
  showAlarmRules?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleAris: 'ScalingRuleAris',
      scalingRuleIds: 'ScalingRuleIds',
      scalingRuleNames: 'ScalingRuleNames',
      scalingRuleType: 'ScalingRuleType',
      showAlarmRules: 'ShowAlarmRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scalingRuleAris: { 'type': 'array', 'itemType': 'string' },
      scalingRuleIds: { 'type': 'array', 'itemType': 'string' },
      scalingRuleNames: { 'type': 'array', 'itemType': 'string' },
      scalingRuleType: 'string',
      showAlarmRules: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingRules?: DescribeScalingRulesResponseBodyScalingRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingRules: 'ScalingRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingRules: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingRulesResponseBody;
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
      body: DescribeScalingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scheduledActions?: string[];
  scheduledTaskIds?: string[];
  scheduledTaskNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scheduledActions: 'ScheduledActions',
      scheduledTaskIds: 'ScheduledTaskIds',
      scheduledTaskNames: 'ScheduledTaskNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scheduledActions: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskIds: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scheduledTasks?: DescribeScheduledTasksResponseBodyScheduledTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scheduledTasks: 'ScheduledTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scheduledTasks: { 'type': 'array', 'itemType': DescribeScheduledTasksResponseBodyScheduledTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScheduledTasksResponseBody;
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
      body: DescribeScheduledTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAlbServerGroupsRequest extends $tea.Model {
  albServerGroups?: DetachAlbServerGroupsRequestAlbServerGroups[];
  clientToken?: string;
  forceDetach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      albServerGroups: 'AlbServerGroups',
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroups: { 'type': 'array', 'itemType': DetachAlbServerGroupsRequestAlbServerGroups },
      clientToken: 'string',
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAlbServerGroupsResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAlbServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachAlbServerGroupsResponseBody;
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
      body: DetachAlbServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDBInstancesRequest extends $tea.Model {
  clientToken?: string;
  DBInstances?: string[];
  forceDetach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstances: 'DBInstances',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDBInstancesResponseBody extends $tea.Model {
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

export class DetachDBInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachDBInstancesResponseBody;
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
      body: DetachDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstancesRequest extends $tea.Model {
  clientToken?: string;
  decreaseDesiredCapacity?: boolean;
  detachOption?: string;
  instanceIds?: string[];
  lifecycleHook?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      decreaseDesiredCapacity: 'DecreaseDesiredCapacity',
      detachOption: 'DetachOption',
      instanceIds: 'InstanceIds',
      lifecycleHook: 'LifecycleHook',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      decreaseDesiredCapacity: 'boolean',
      detachOption: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHook: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstancesResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachInstancesResponseBody;
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
      body: DetachInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLoadBalancersRequest extends $tea.Model {
  async?: boolean;
  clientToken?: string;
  forceDetach?: boolean;
  loadBalancers?: string[];
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      loadBalancers: 'LoadBalancers',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clientToken: 'string',
      forceDetach: 'boolean',
      loadBalancers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLoadBalancersResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLoadBalancersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachLoadBalancersResponseBody;
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
      body: DetachLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachServerGroupsRequest extends $tea.Model {
  clientToken?: string;
  forceDetach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  serverGroups?: DetachServerGroupsRequestServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      serverGroups: 'ServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      serverGroups: { 'type': 'array', 'itemType': DetachServerGroupsRequestServerGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachServerGroupsResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachServerGroupsResponseBody;
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
      body: DetachServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequest extends $tea.Model {
  clientToken?: string;
  forceDetach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  VServerGroups?: DetachVServerGroupsRequestVServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      VServerGroups: 'VServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      VServerGroups: { 'type': 'array', 'itemType': DetachVServerGroupsRequestVServerGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsResponseBody extends $tea.Model {
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

export class DetachVServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachVServerGroupsResponseBody;
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
      body: DetachVServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlarmRequest extends $tea.Model {
  alarmTaskId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlarmResponseBody extends $tea.Model {
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

export class DisableAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAlarmResponseBody;
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
      body: DisableAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableScalingGroupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableScalingGroupResponseBody extends $tea.Model {
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

export class DisableScalingGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableScalingGroupResponseBody;
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
      body: DisableScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlarmRequest extends $tea.Model {
  alarmTaskId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlarmResponseBody extends $tea.Model {
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

export class EnableAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAlarmResponseBody;
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
      body: EnableAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableScalingGroupRequest extends $tea.Model {
  activeScalingConfigurationId?: string;
  instanceIds?: string[];
  launchTemplateId?: string;
  launchTemplateOverrides?: EnableScalingGroupRequestLaunchTemplateOverrides[];
  launchTemplateVersion?: string;
  loadBalancerWeights?: number[];
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      instanceIds: 'InstanceIds',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      loadBalancerWeights: 'LoadBalancerWeights',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeScalingConfigurationId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': EnableScalingGroupRequestLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      loadBalancerWeights: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableScalingGroupResponseBody extends $tea.Model {
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

export class EnableScalingGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableScalingGroupResponseBody;
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
      body: EnableScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterStandbyRequest extends $tea.Model {
  async?: boolean;
  clientToken?: string;
  instanceIds?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterStandbyResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterStandbyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnterStandbyResponseBody;
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
      body: EnterStandbyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScalingRuleRequest extends $tea.Model {
  breachThreshold?: number;
  clientToken?: string;
  metricValue?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingRuleAri?: string;
  static names(): { [key: string]: string } {
    return {
      breachThreshold: 'BreachThreshold',
      clientToken: 'ClientToken',
      metricValue: 'MetricValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleAri: 'ScalingRuleAri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breachThreshold: 'number',
      clientToken: 'string',
      metricValue: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingRuleAri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteScalingRuleResponseBody;
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
      body: ExecuteScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitStandbyRequest extends $tea.Model {
  async?: boolean;
  clientToken?: string;
  instanceIds?: string[];
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitStandbyResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitStandbyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExitStandbyResponseBody;
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
      body: ExitStandbyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  nextToken?: string;
  ownerId?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  keys?: string[];
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  ownerId?: number;
  regionId?: string;
  resourceIds?: string[];
  resourceOwnerAccount?: string;
  resourceType?: string;
  tags?: ListTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesRequestTags },
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

export class ListTagValuesRequest extends $tea.Model {
  key?: string;
  nextToken?: string;
  ownerId?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmRequest extends $tea.Model {
  alarmActions?: string[];
  alarmTaskId?: string;
  comparisonOperator?: string;
  description?: string;
  dimensions?: ModifyAlarmRequestDimensions[];
  effective?: string;
  evaluationCount?: number;
  expressions?: ModifyAlarmRequestExpressions[];
  expressionsLogicOperator?: string;
  groupId?: number;
  metricName?: string;
  metricType?: string;
  name?: string;
  ownerId?: number;
  period?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmActions: 'AlarmActions',
      alarmTaskId: 'AlarmTaskId',
      comparisonOperator: 'ComparisonOperator',
      description: 'Description',
      dimensions: 'Dimensions',
      effective: 'Effective',
      evaluationCount: 'EvaluationCount',
      expressions: 'Expressions',
      expressionsLogicOperator: 'ExpressionsLogicOperator',
      groupId: 'GroupId',
      metricName: 'MetricName',
      metricType: 'MetricType',
      name: 'Name',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmActions: { 'type': 'array', 'itemType': 'string' },
      alarmTaskId: 'string',
      comparisonOperator: 'string',
      description: 'string',
      dimensions: { 'type': 'array', 'itemType': ModifyAlarmRequestDimensions },
      effective: 'string',
      evaluationCount: 'number',
      expressions: { 'type': 'array', 'itemType': ModifyAlarmRequestExpressions },
      expressionsLogicOperator: 'string',
      groupId: 'number',
      metricName: 'string',
      metricType: 'string',
      name: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmResponseBody extends $tea.Model {
  alarmTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAlarmResponseBody;
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
      body: ModifyAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequest extends $tea.Model {
  acrRegistryInfos?: ModifyEciScalingConfigurationRequestAcrRegistryInfos[];
  activeDeadlineSeconds?: number;
  autoCreateEip?: boolean;
  autoMatchImageCache?: boolean;
  containerGroupName?: string;
  containers?: ModifyEciScalingConfigurationRequestContainers[];
  containersUpdateType?: string;
  costOptimization?: boolean;
  cpu?: number;
  cpuOptionsCore?: number;
  cpuOptionsThreadsPerCore?: number;
  dataCacheBucket?: string;
  dataCacheBurstingEnabled?: boolean;
  dataCachePL?: string;
  dataCacheProvisionedIops?: number;
  description?: string;
  dnsConfigNameServers?: string[];
  dnsConfigOptions?: ModifyEciScalingConfigurationRequestDnsConfigOptions[];
  dnsConfigSearchs?: string[];
  dnsPolicy?: string;
  egressBandwidth?: number;
  eipBandwidth?: number;
  enableSls?: boolean;
  ephemeralStorage?: number;
  hostAliases?: ModifyEciScalingConfigurationRequestHostAliases[];
  hostName?: string;
  imageRegistryCredentials?: ModifyEciScalingConfigurationRequestImageRegistryCredentials[];
  imageSnapshotId?: string;
  ingressBandwidth?: number;
  initContainers?: ModifyEciScalingConfigurationRequestInitContainers[];
  instanceFamilyLevel?: string;
  instanceTypes?: string[];
  ipv6AddressCount?: number;
  loadBalancerWeight?: number;
  memory?: number;
  ntpServers?: string[];
  ownerId?: number;
  ramRoleName?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  restartPolicy?: string;
  scalingConfigurationId?: string;
  scalingConfigurationName?: string;
  securityContextSysCtls?: ModifyEciScalingConfigurationRequestSecurityContextSysCtls[];
  securityGroupId?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  tags?: ModifyEciScalingConfigurationRequestTags[];
  terminationGracePeriodSeconds?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationResponseBody extends $tea.Model {
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

export class ModifyEciScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyEciScalingConfigurationResponseBody;
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
      body: ModifyEciScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecycleHookRequest extends $tea.Model {
  defaultResult?: string;
  heartbeatTimeout?: number;
  lifecycleHookId?: string;
  lifecycleHookName?: string;
  lifecycleHookStatus?: string;
  lifecycleTransition?: string;
  notificationArn?: string;
  notificationMetadata?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleHookStatus: 'LifecycleHookStatus',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleHookId: 'string',
      lifecycleHookName: 'string',
      lifecycleHookStatus: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecycleHookResponseBody extends $tea.Model {
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

export class ModifyLifecycleHookResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLifecycleHookResponseBody;
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
      body: ModifyLifecycleHookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNotificationConfigurationRequest extends $tea.Model {
  notificationArn?: string;
  notificationTypes?: string[];
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationArn: 'NotificationArn',
      notificationTypes: 'NotificationTypes',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationArn: 'string',
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNotificationConfigurationResponseBody extends $tea.Model {
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

export class ModifyNotificationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNotificationConfigurationResponseBody;
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
      body: ModifyNotificationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequest extends $tea.Model {
  imageOptions?: ModifyScalingConfigurationRequestImageOptions;
  privatePoolOptions?: ModifyScalingConfigurationRequestPrivatePoolOptions;
  systemDisk?: ModifyScalingConfigurationRequestSystemDisk;
  affinity?: string;
  cpu?: number;
  creditSpecification?: string;
  customPriorities?: ModifyScalingConfigurationRequestCustomPriorities[];
  dataDisks?: ModifyScalingConfigurationRequestDataDisks[];
  dedicatedHostId?: string;
  deletionProtection?: boolean;
  deploymentSetId?: string;
  hostName?: string;
  hpcClusterId?: string;
  imageFamily?: string;
  imageId?: string;
  imageName?: string;
  instanceDescription?: string;
  instanceName?: string;
  instancePatternInfos?: ModifyScalingConfigurationRequestInstancePatternInfos[];
  instanceTypeOverrides?: ModifyScalingConfigurationRequestInstanceTypeOverrides[];
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ipv6AddressCount?: number;
  keyPairName?: string;
  loadBalancerWeight?: number;
  memory?: number;
  override?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  passwordInherit?: boolean;
  ramRoleName?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  scalingConfigurationName?: string;
  schedulerOptions?: { [key: string]: any };
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  spotPriceLimits?: ModifyScalingConfigurationRequestSpotPriceLimits[];
  spotStrategy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  systemDiskCategories?: string[];
  tags?: string;
  tenancy?: string;
  userData?: string;
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
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceTypeOverrides: 'InstanceTypeOverrides',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      override: 'Override',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      schedulerOptions: 'SchedulerOptions',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
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
      imageOptions: ModifyScalingConfigurationRequestImageOptions,
      privatePoolOptions: ModifyScalingConfigurationRequestPrivatePoolOptions,
      systemDisk: ModifyScalingConfigurationRequestSystemDisk,
      affinity: 'string',
      cpu: 'number',
      creditSpecification: 'string',
      customPriorities: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestCustomPriorities },
      dataDisks: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestDataDisks },
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestInstancePatternInfos },
      instanceTypeOverrides: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      override: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      schedulerOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimits: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestSpotPriceLimits },
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequest extends $tea.Model {
  imageOptions?: ModifyScalingConfigurationShrinkRequestImageOptions;
  privatePoolOptions?: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions;
  systemDisk?: ModifyScalingConfigurationShrinkRequestSystemDisk;
  affinity?: string;
  cpu?: number;
  creditSpecification?: string;
  customPriorities?: ModifyScalingConfigurationShrinkRequestCustomPriorities[];
  dataDisks?: ModifyScalingConfigurationShrinkRequestDataDisks[];
  dedicatedHostId?: string;
  deletionProtection?: boolean;
  deploymentSetId?: string;
  hostName?: string;
  hpcClusterId?: string;
  imageFamily?: string;
  imageId?: string;
  imageName?: string;
  instanceDescription?: string;
  instanceName?: string;
  instancePatternInfos?: ModifyScalingConfigurationShrinkRequestInstancePatternInfos[];
  instanceTypeOverrides?: ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides[];
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ipv6AddressCount?: number;
  keyPairName?: string;
  loadBalancerWeight?: number;
  memory?: number;
  override?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  passwordInherit?: boolean;
  ramRoleName?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  scalingConfigurationName?: string;
  schedulerOptionsShrink?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  spotPriceLimits?: ModifyScalingConfigurationShrinkRequestSpotPriceLimits[];
  spotStrategy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  systemDiskCategories?: string[];
  tags?: string;
  tenancy?: string;
  userData?: string;
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
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      instancePatternInfos: 'InstancePatternInfos',
      instanceTypeOverrides: 'InstanceTypeOverrides',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      loadBalancerWeight: 'LoadBalancerWeight',
      memory: 'Memory',
      override: 'Override',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passwordInherit: 'PasswordInherit',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      schedulerOptionsShrink: 'SchedulerOptions',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
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
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      instancePatternInfos: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstancePatternInfos },
      instanceTypeOverrides: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      loadBalancerWeight: 'number',
      memory: 'number',
      override: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      passwordInherit: 'boolean',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      schedulerOptionsShrink: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationResponseBody extends $tea.Model {
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

export class ModifyScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScalingConfigurationResponseBody;
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
      body: ModifyScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupRequest extends $tea.Model {
  activeScalingConfigurationId?: string;
  allocationStrategy?: string;
  azBalance?: boolean;
  compensateWithOnDemand?: boolean;
  customPolicyARN?: string;
  defaultCooldown?: number;
  desiredCapacity?: number;
  disableDesiredCapacity?: boolean;
  groupDeletionProtection?: boolean;
  healthCheckType?: string;
  healthCheckTypes?: string[];
  launchTemplateId?: string;
  launchTemplateOverrides?: ModifyScalingGroupRequestLaunchTemplateOverrides[];
  launchTemplateVersion?: string;
  maxInstanceLifetime?: number;
  maxSize?: number;
  minSize?: number;
  multiAZPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  ownerAccount?: string;
  ownerId?: number;
  removalPolicies?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scalingGroupName?: string;
  spotAllocationStrategy?: string;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      allocationStrategy: 'AllocationStrategy',
      azBalance: 'AzBalance',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      customPolicyARN: 'CustomPolicyARN',
      defaultCooldown: 'DefaultCooldown',
      desiredCapacity: 'DesiredCapacity',
      disableDesiredCapacity: 'DisableDesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      healthCheckType: 'HealthCheckType',
      healthCheckTypes: 'HealthCheckTypes',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxInstanceLifetime: 'MaxInstanceLifetime',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      multiAZPolicy: 'MultiAZPolicy',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      removalPolicies: 'RemovalPolicies',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeScalingConfigurationId: 'string',
      allocationStrategy: 'string',
      azBalance: 'boolean',
      compensateWithOnDemand: 'boolean',
      customPolicyARN: 'string',
      defaultCooldown: 'number',
      desiredCapacity: 'number',
      disableDesiredCapacity: 'boolean',
      groupDeletionProtection: 'boolean',
      healthCheckType: 'string',
      healthCheckTypes: { 'type': 'array', 'itemType': 'string' },
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': ModifyScalingGroupRequestLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      maxInstanceLifetime: 'number',
      maxSize: 'number',
      minSize: 'number',
      multiAZPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      removalPolicies: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupResponseBody extends $tea.Model {
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

export class ModifyScalingGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScalingGroupResponseBody;
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
      body: ModifyScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequest extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  alarmDimensions?: ModifyScalingRuleRequestAlarmDimensions[];
  cooldown?: number;
  disableScaleIn?: boolean;
  estimatedInstanceWarmup?: number;
  initialMaxSize?: number;
  metricName?: string;
  minAdjustmentMagnitude?: number;
  ownerAccount?: string;
  ownerId?: number;
  predictiveScalingMode?: string;
  predictiveTaskBufferTime?: number;
  predictiveValueBehavior?: string;
  predictiveValueBuffer?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scaleInEvaluationCount?: number;
  scaleOutEvaluationCount?: number;
  scalingRuleId?: string;
  scalingRuleName?: string;
  stepAdjustments?: ModifyScalingRuleRequestStepAdjustments[];
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      alarmDimensions: 'AlarmDimensions',
      cooldown: 'Cooldown',
      disableScaleIn: 'DisableScaleIn',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      initialMaxSize: 'InitialMaxSize',
      metricName: 'MetricName',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      stepAdjustments: 'StepAdjustments',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      alarmDimensions: { 'type': 'array', 'itemType': ModifyScalingRuleRequestAlarmDimensions },
      cooldown: 'number',
      disableScaleIn: 'boolean',
      estimatedInstanceWarmup: 'number',
      initialMaxSize: 'number',
      metricName: 'string',
      minAdjustmentMagnitude: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      predictiveScalingMode: 'string',
      predictiveTaskBufferTime: 'number',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      stepAdjustments: { 'type': 'array', 'itemType': ModifyScalingRuleRequestStepAdjustments },
      targetValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleResponseBody extends $tea.Model {
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

export class ModifyScalingRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScalingRuleResponseBody;
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
      body: ModifyScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskRequest extends $tea.Model {
  description?: string;
  desiredCapacity?: number;
  launchExpirationTime?: number;
  launchTime?: string;
  maxValue?: number;
  minValue?: number;
  ownerAccount?: string;
  ownerId?: number;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scheduledAction?: string;
  scheduledTaskId?: string;
  scheduledTaskName?: string;
  taskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desiredCapacity: 'DesiredCapacity',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desiredCapacity: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      maxValue: 'number',
      minValue: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scheduledAction: 'string',
      scheduledTaskId: 'string',
      scheduledTaskName: 'string',
      taskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskResponseBody extends $tea.Model {
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

export class ModifyScheduledTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyScheduledTaskResponseBody;
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
      body: ModifyScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebalanceInstancesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebalanceInstancesResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebalanceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebalanceInstancesResponseBody;
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
      body: RebalanceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordLifecycleActionHeartbeatRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  heartbeatTimeout?: number;
  lifecycleActionToken?: string;
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      heartbeatTimeout: 'heartbeatTimeout',
      lifecycleActionToken: 'lifecycleActionToken',
      lifecycleHookId: 'lifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      heartbeatTimeout: 'number',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordLifecycleActionHeartbeatResponseBody extends $tea.Model {
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

export class RecordLifecycleActionHeartbeatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecordLifecycleActionHeartbeatResponseBody;
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
      body: RecordLifecycleActionHeartbeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstancesRequest extends $tea.Model {
  clientToken?: string;
  decreaseDesiredCapacity?: boolean;
  instanceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  removePolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      decreaseDesiredCapacity: 'DecreaseDesiredCapacity',
      instanceIds: 'InstanceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removePolicy: 'RemovePolicy',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      decreaseDesiredCapacity: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removePolicy: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstancesResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveInstancesResponseBody;
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
      body: RemoveInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProcessesRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: number;
  processes?: string[];
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      processes: 'Processes',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'number',
      processes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProcessesResponseBody extends $tea.Model {
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

export class ResumeProcessesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeProcessesResponseBody;
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
      body: ResumeProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequest extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  clientToken?: string;
  minAdjustmentMagnitude?: number;
  overrides?: ScaleWithAdjustmentRequestOverrides;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  syncActivity?: boolean;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      clientToken: 'ClientToken',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      overrides: 'Overrides',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      syncActivity: 'SyncActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      clientToken: 'string',
      minAdjustmentMagnitude: 'number',
      overrides: ScaleWithAdjustmentRequestOverrides,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      syncActivity: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentShrinkRequest extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  clientToken?: string;
  minAdjustmentMagnitude?: number;
  overridesShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  syncActivity?: boolean;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      clientToken: 'ClientToken',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      overridesShrink: 'Overrides',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      syncActivity: 'SyncActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      clientToken: 'string',
      minAdjustmentMagnitude: 'number',
      overridesShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      syncActivity: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentResponseBody extends $tea.Model {
  activityType?: string;
  requestId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleWithAdjustmentResponseBody;
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
      body: ScaleWithAdjustmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupDeletionProtectionRequest extends $tea.Model {
  groupDeletionProtection?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupDeletionProtection: 'GroupDeletionProtection',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupDeletionProtection: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupDeletionProtectionResponseBody extends $tea.Model {
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

export class SetGroupDeletionProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetGroupDeletionProtectionResponseBody;
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
      body: SetGroupDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceHealthRequest extends $tea.Model {
  healthStatus?: string;
  instanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthStatus: 'string',
      instanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceHealthResponseBody extends $tea.Model {
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

export class SetInstanceHealthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetInstanceHealthResponseBody;
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
      body: SetInstanceHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancesProtectionRequest extends $tea.Model {
  instanceIds?: string[];
  ownerId?: number;
  protectedFromScaleIn?: boolean;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      protectedFromScaleIn: 'ProtectedFromScaleIn',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      protectedFromScaleIn: 'boolean',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancesProtectionResponseBody extends $tea.Model {
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

export class SetInstancesProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetInstancesProtectionResponseBody;
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
      body: SetInstancesProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendProcessesRequest extends $tea.Model {
  clientToken?: string;
  ownerId?: number;
  processes?: string[];
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      processes: 'Processes',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerId: 'number',
      processes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendProcessesResponseBody extends $tea.Model {
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

export class SuspendProcessesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SuspendProcessesResponseBody;
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
      body: SuspendProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  resourceIds?: string[];
  resourceOwnerAccount?: string;
  resourceType?: string;
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
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
  ownerId?: number;
  regionId?: string;
  resourceIds?: string[];
  resourceOwnerAccount?: string;
  resourceType?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceType: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
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

export class VerifyAuthenticationRequest extends $tea.Model {
  onlyCheck?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      onlyCheck: 'OnlyCheck',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyCheck: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAuthenticationResponseBody extends $tea.Model {
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

export class VerifyAuthenticationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyAuthenticationResponseBody;
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
      body: VerifyAuthenticationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class VerifyUserResponseBody extends $tea.Model {
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

export class VerifyUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyUserResponseBody;
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
      body: VerifyUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAlbServerGroupsRequestAlbServerGroups extends $tea.Model {
  albServerGroupId?: string;
  port?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersRequestLoadBalancerConfigs extends $tea.Model {
  loadBalancerId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachServerGroupsRequestServerGroups extends $tea.Model {
  port?: number;
  serverGroupId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes extends $tea.Model {
  port?: number;
  VServerGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsRequestVServerGroups extends $tea.Model {
  loadBalancerId?: string;
  VServerGroupAttributes?: AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestExpressions extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestAcrRegistryInfos extends $tea.Model {
  domains?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersLivenessProbeExec extends $tea.Model {
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainersLivenessProbe extends $tea.Model {
  exec?: CreateEciScalingConfigurationRequestContainersLivenessProbeExec;
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket;
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
      exec: CreateEciScalingConfigurationRequestContainersLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersReadinessProbeExec extends $tea.Model {
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainersReadinessProbe extends $tea.Model {
  exec?: CreateEciScalingConfigurationRequestContainersReadinessProbeExec;
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket;
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
      exec: CreateEciScalingConfigurationRequestContainersReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateEciScalingConfigurationRequestContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateEciScalingConfigurationRequestContainersReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersSecurityContextCapability extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainersSecurityContext extends $tea.Model {
  capability?: CreateEciScalingConfigurationRequestContainersSecurityContextCapability;
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
      capability: CreateEciScalingConfigurationRequestContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersEnvironmentVars extends $tea.Model {
  fieldRefFieldPath?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestContainersPorts extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainersVolumeMounts extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestContainers extends $tea.Model {
  livenessProbe?: CreateEciScalingConfigurationRequestContainersLivenessProbe;
  readinessProbe?: CreateEciScalingConfigurationRequestContainersReadinessProbe;
  securityContext?: CreateEciScalingConfigurationRequestContainersSecurityContext;
  args?: string[];
  commands?: string[];
  cpu?: number;
  environmentVars?: CreateEciScalingConfigurationRequestContainersEnvironmentVars[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  lifecyclePostStartHandlerExecs?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerHttpGetPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerTcpSocketHost?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePreStopHandlerExecs?: string[];
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerHttpGetPath?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  memory?: number;
  name?: string;
  ports?: CreateEciScalingConfigurationRequestContainersPorts[];
  stdin?: boolean;
  stdinOnce?: boolean;
  tty?: boolean;
  volumeMounts?: CreateEciScalingConfigurationRequestContainersVolumeMounts[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExecs: 'LifecyclePostStartHandlerExecs',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExecs: 'LifecyclePreStopHandlerExecs',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: CreateEciScalingConfigurationRequestContainersLivenessProbe,
      readinessProbe: CreateEciScalingConfigurationRequestContainersReadinessProbe,
      securityContext: CreateEciScalingConfigurationRequestContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainersPorts },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestDnsConfigOptions extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestHostAliases extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestImageRegistryCredentials extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestInitContainersSecurityContext extends $tea.Model {
  capability?: CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability;
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
      capability: CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars extends $tea.Model {
  fieldRefFieldPath?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestInitContainersInitContainerPorts extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestInitContainers extends $tea.Model {
  securityContext?: CreateEciScalingConfigurationRequestInitContainersSecurityContext;
  args?: string[];
  commands?: string[];
  cpu?: number;
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  initContainerEnvironmentVars?: CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  initContainerPorts?: CreateEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  initContainerVolumeMounts?: CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
  memory?: number;
  name?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      initContainerEnvironmentVars: 'InitContainerEnvironmentVars',
      initContainerPorts: 'InitContainerPorts',
      initContainerVolumeMounts: 'InitContainerVolumeMounts',
      memory: 'Memory',
      name: 'Name',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: CreateEciScalingConfigurationRequestInitContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts },
      memory: 'number',
      name: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEciScalingConfigurationRequestSecurityContextSysctls extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestTags extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumesDiskVolume extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumesEmptyDirVolume extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumesFlexVolume extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumesHostPathVolume extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumesNFSVolume extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths extends $tea.Model {
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

export class CreateEciScalingConfigurationRequestVolumes extends $tea.Model {
  diskVolume?: CreateEciScalingConfigurationRequestVolumesDiskVolume;
  emptyDirVolume?: CreateEciScalingConfigurationRequestVolumesEmptyDirVolume;
  flexVolume?: CreateEciScalingConfigurationRequestVolumesFlexVolume;
  hostPathVolume?: CreateEciScalingConfigurationRequestVolumesHostPathVolume;
  NFSVolume?: CreateEciScalingConfigurationRequestVolumesNFSVolume;
  configFileVolumeConfigFileToPaths?: CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths[];
  configFileVolumeDefaultMode?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: CreateEciScalingConfigurationRequestVolumesDiskVolume,
      emptyDirVolume: CreateEciScalingConfigurationRequestVolumesEmptyDirVolume,
      flexVolume: CreateEciScalingConfigurationRequestVolumesFlexVolume,
      hostPathVolume: CreateEciScalingConfigurationRequestVolumesHostPathVolume,
      NFSVolume: CreateEciScalingConfigurationRequestVolumesNFSVolume,
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': CreateEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPaths },
      configFileVolumeDefaultMode: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestImageOptions extends $tea.Model {
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginAsNonRoot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestPrivatePoolOptions extends $tea.Model {
  id?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestSystemDisk extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  description?: string;
  diskName?: string;
  encryptAlgorithm?: string;
  encrypted?: boolean;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      description: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestCustomPriorities extends $tea.Model {
  instanceType?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestDataDisks extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  categories?: string[];
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestInstancePatternInfos extends $tea.Model {
  architectures?: string[];
  burstablePerformance?: string;
  cores?: number;
  excludedInstanceTypes?: string[];
  instanceFamilyLevel?: string;
  maxPrice?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      maxPrice: 'MaxPrice',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      maxPrice: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestInstanceTypeOverrides extends $tea.Model {
  instanceType?: string;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestSpotPriceLimits extends $tea.Model {
  instanceType?: string;
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestImageOptions extends $tea.Model {
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginAsNonRoot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestPrivatePoolOptions extends $tea.Model {
  id?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestSystemDisk extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  description?: string;
  diskName?: string;
  encryptAlgorithm?: string;
  encrypted?: boolean;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      description: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestCustomPriorities extends $tea.Model {
  instanceType?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestDataDisks extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  categories?: string[];
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestInstancePatternInfos extends $tea.Model {
  architectures?: string[];
  burstablePerformance?: string;
  cores?: number;
  excludedInstanceTypes?: string[];
  instanceFamilyLevel?: string;
  maxPrice?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      maxPrice: 'MaxPrice',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      maxPrice: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestInstanceTypeOverrides extends $tea.Model {
  instanceType?: string;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestSpotPriceLimits extends $tea.Model {
  instanceType?: string;
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestAlbServerGroups extends $tea.Model {
  albServerGroupId?: string;
  port?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestLaunchTemplateOverrides extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestLifecycleHooks extends $tea.Model {
  defaultResult?: string;
  heartbeatTimeout?: number;
  lifecycleHookName?: string;
  lifecycleTransition?: string;
  notificationArn?: string;
  notificationMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestLoadBalancerConfigs extends $tea.Model {
  loadBalancerId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestServerGroups extends $tea.Model {
  port?: number;
  serverGroupId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestTags extends $tea.Model {
  key?: string;
  propagate?: boolean;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      propagate: 'Propagate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      propagate: 'boolean',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestVServerGroupsVServerGroupAttributes extends $tea.Model {
  port?: number;
  VServerGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestVServerGroups extends $tea.Model {
  loadBalancerId?: string;
  VServerGroupAttributes?: CreateScalingGroupRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroupsVServerGroupAttributes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequestAlarmDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequestStepAdjustments extends $tea.Model {
  metricIntervalLowerBound?: number;
  metricIntervalUpperBound?: number;
  scalingAdjustment?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalLowerBound: 'number',
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmListDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmListExpressions extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmList extends $tea.Model {
  alarmActions?: string[];
  alarmTaskId?: string;
  comparisonOperator?: string;
  description?: string;
  dimensions?: DescribeAlarmsResponseBodyAlarmListDimensions[];
  effective?: string;
  enable?: boolean;
  evaluationCount?: number;
  expressions?: DescribeAlarmsResponseBodyAlarmListExpressions[];
  expressionsLogicOperator?: string;
  metricName?: string;
  metricType?: string;
  name?: string;
  period?: number;
  scalingGroupId?: string;
  state?: string;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmActions: 'AlarmActions',
      alarmTaskId: 'AlarmTaskId',
      comparisonOperator: 'ComparisonOperator',
      description: 'Description',
      dimensions: 'Dimensions',
      effective: 'Effective',
      enable: 'Enable',
      evaluationCount: 'EvaluationCount',
      expressions: 'Expressions',
      expressionsLogicOperator: 'ExpressionsLogicOperator',
      metricName: 'MetricName',
      metricType: 'MetricType',
      name: 'Name',
      period: 'Period',
      scalingGroupId: 'ScalingGroupId',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmActions: { 'type': 'array', 'itemType': 'string' },
      alarmTaskId: 'string',
      comparisonOperator: 'string',
      description: 'string',
      dimensions: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListDimensions },
      effective: 'string',
      enable: 'boolean',
      evaluationCount: 'number',
      expressions: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListExpressions },
      expressionsLogicOperator: 'string',
      metricName: 'string',
      metricType: 'string',
      name: 'string',
      period: 'number',
      scalingGroupId: 'string',
      state: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsAcrRegistryInfos extends $tea.Model {
  domains?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars extends $tea.Model {
  fieldRefFieldPath?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers extends $tea.Model {
  args?: string[];
  commands?: string[];
  cpu?: number;
  environmentVars?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  lifecyclePostStartHandlerExecs?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerHttpGetPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerTcpSocketHost?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePreStopHandlerExecs?: string[];
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerHttpGetPath?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  livenessProbeExecCommands?: string[];
  livenessProbeFailureThreshold?: number;
  livenessProbeHttpGetPath?: string;
  livenessProbeHttpGetPort?: number;
  livenessProbeHttpGetScheme?: string;
  livenessProbeInitialDelaySeconds?: number;
  livenessProbePeriodSeconds?: number;
  livenessProbeSuccessThreshold?: number;
  livenessProbeTcpSocketPort?: number;
  livenessProbeTimeoutSeconds?: number;
  memory?: number;
  name?: string;
  ports?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts[];
  readinessProbeExecCommands?: string[];
  readinessProbeFailureThreshold?: number;
  readinessProbeHttpGetPath?: string;
  readinessProbeHttpGetPort?: number;
  readinessProbeHttpGetScheme?: string;
  readinessProbeInitialDelaySeconds?: number;
  readinessProbePeriodSeconds?: number;
  readinessProbeSuccessThreshold?: number;
  readinessProbeTcpSocketPort?: number;
  readinessProbeTimeoutSeconds?: number;
  securityContextCapabilityAdds?: string[];
  securityContextReadOnlyRootFilesystem?: boolean;
  securityContextRunAsUser?: number;
  stdin?: boolean;
  stdinOnce?: boolean;
  tty?: boolean;
  volumeMounts?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExecs: 'LifecyclePostStartHandlerExecs',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExecs: 'LifecyclePreStopHandlerExecs',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      livenessProbeExecCommands: 'LivenessProbeExecCommands',
      livenessProbeFailureThreshold: 'LivenessProbeFailureThreshold',
      livenessProbeHttpGetPath: 'LivenessProbeHttpGetPath',
      livenessProbeHttpGetPort: 'LivenessProbeHttpGetPort',
      livenessProbeHttpGetScheme: 'LivenessProbeHttpGetScheme',
      livenessProbeInitialDelaySeconds: 'LivenessProbeInitialDelaySeconds',
      livenessProbePeriodSeconds: 'LivenessProbePeriodSeconds',
      livenessProbeSuccessThreshold: 'LivenessProbeSuccessThreshold',
      livenessProbeTcpSocketPort: 'LivenessProbeTcpSocketPort',
      livenessProbeTimeoutSeconds: 'LivenessProbeTimeoutSeconds',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      readinessProbeExecCommands: 'ReadinessProbeExecCommands',
      readinessProbeFailureThreshold: 'ReadinessProbeFailureThreshold',
      readinessProbeHttpGetPath: 'ReadinessProbeHttpGetPath',
      readinessProbeHttpGetPort: 'ReadinessProbeHttpGetPort',
      readinessProbeHttpGetScheme: 'ReadinessProbeHttpGetScheme',
      readinessProbeInitialDelaySeconds: 'ReadinessProbeInitialDelaySeconds',
      readinessProbePeriodSeconds: 'ReadinessProbePeriodSeconds',
      readinessProbeSuccessThreshold: 'ReadinessProbeSuccessThreshold',
      readinessProbeTcpSocketPort: 'ReadinessProbeTcpSocketPort',
      readinessProbeTimeoutSeconds: 'ReadinessProbeTimeoutSeconds',
      securityContextCapabilityAdds: 'SecurityContextCapabilityAdds',
      securityContextReadOnlyRootFilesystem: 'SecurityContextReadOnlyRootFilesystem',
      securityContextRunAsUser: 'SecurityContextRunAsUser',
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
      environmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      livenessProbeExecCommands: { 'type': 'array', 'itemType': 'string' },
      livenessProbeFailureThreshold: 'number',
      livenessProbeHttpGetPath: 'string',
      livenessProbeHttpGetPort: 'number',
      livenessProbeHttpGetScheme: 'string',
      livenessProbeInitialDelaySeconds: 'number',
      livenessProbePeriodSeconds: 'number',
      livenessProbeSuccessThreshold: 'number',
      livenessProbeTcpSocketPort: 'number',
      livenessProbeTimeoutSeconds: 'number',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersPorts },
      readinessProbeExecCommands: { 'type': 'array', 'itemType': 'string' },
      readinessProbeFailureThreshold: 'number',
      readinessProbeHttpGetPath: 'string',
      readinessProbeHttpGetPort: 'number',
      readinessProbeHttpGetScheme: 'string',
      readinessProbeInitialDelaySeconds: 'number',
      readinessProbePeriodSeconds: 'number',
      readinessProbeSuccessThreshold: 'number',
      readinessProbeTcpSocketPort: 'number',
      readinessProbeTimeoutSeconds: 'number',
      securityContextCapabilityAdds: { 'type': 'array', 'itemType': 'string' },
      securityContextReadOnlyRootFilesystem: 'boolean',
      securityContextRunAsUser: 'number',
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsDnsConfigOptions extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsHostAliases extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsImageRegistryCredentials extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars extends $tea.Model {
  fieldRefFieldPath?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers extends $tea.Model {
  cpu?: number;
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  initContainerArgs?: string[];
  initContainerCommands?: string[];
  initContainerEnvironmentVars?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars[];
  initContainerPorts?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts[];
  initContainerVolumeMounts?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts[];
  memory?: number;
  name?: string;
  securityContextCapabilityAdds?: string[];
  securityContextReadOnlyRootFilesystem?: boolean;
  securityContextRunAsUser?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      initContainerArgs: 'InitContainerArgs',
      initContainerCommands: 'InitContainerCommands',
      initContainerEnvironmentVars: 'InitContainerEnvironmentVars',
      initContainerPorts: 'InitContainerPorts',
      initContainerVolumeMounts: 'InitContainerVolumeMounts',
      memory: 'Memory',
      name: 'Name',
      securityContextCapabilityAdds: 'SecurityContextCapabilityAdds',
      securityContextReadOnlyRootFilesystem: 'SecurityContextReadOnlyRootFilesystem',
      securityContextRunAsUser: 'SecurityContextRunAsUser',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerArgs: { 'type': 'array', 'itemType': 'string' },
      initContainerCommands: { 'type': 'array', 'itemType': 'string' },
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainersInitContainerVolumeMounts },
      memory: 'number',
      name: 'string',
      securityContextCapabilityAdds: { 'type': 'array', 'itemType': 'string' },
      securityContextReadOnlyRootFilesystem: 'boolean',
      securityContextRunAsUser: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsTags extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumesConfigFileVolumeConfigFileToPaths extends $tea.Model {
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumes extends $tea.Model {
  configFileVolumeConfigFileToPaths?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumesConfigFileVolumeConfigFileToPaths[];
  configFileVolumeDefaultMode?: number;
  diskVolumeDiskId?: string;
  diskVolumeDiskSize?: number;
  diskVolumeFsType?: string;
  emptyDirVolumeMedium?: string;
  emptyDirVolumeSizeLimit?: string;
  flexVolumeDriver?: string;
  flexVolumeFsType?: string;
  flexVolumeOptions?: string;
  hostPathVolumePath?: string;
  hostPathVolumeType?: string;
  NFSVolumePath?: string;
  NFSVolumeReadOnly?: boolean;
  NFSVolumeServer?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configFileVolumeConfigFileToPaths: 'ConfigFileVolumeConfigFileToPaths',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      diskVolumeDiskId: 'DiskVolumeDiskId',
      diskVolumeDiskSize: 'DiskVolumeDiskSize',
      diskVolumeFsType: 'DiskVolumeFsType',
      emptyDirVolumeMedium: 'EmptyDirVolumeMedium',
      emptyDirVolumeSizeLimit: 'EmptyDirVolumeSizeLimit',
      flexVolumeDriver: 'FlexVolumeDriver',
      flexVolumeFsType: 'FlexVolumeFsType',
      flexVolumeOptions: 'FlexVolumeOptions',
      hostPathVolumePath: 'HostPathVolumePath',
      hostPathVolumeType: 'HostPathVolumeType',
      NFSVolumePath: 'NFSVolumePath',
      NFSVolumeReadOnly: 'NFSVolumeReadOnly',
      NFSVolumeServer: 'NFSVolumeServer',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsVolumesConfigFileVolumeConfigFileToPaths },
      configFileVolumeDefaultMode: 'number',
      diskVolumeDiskId: 'string',
      diskVolumeDiskSize: 'number',
      diskVolumeFsType: 'string',
      emptyDirVolumeMedium: 'string',
      emptyDirVolumeSizeLimit: 'string',
      flexVolumeDriver: 'string',
      flexVolumeFsType: 'string',
      flexVolumeOptions: 'string',
      hostPathVolumePath: 'string',
      hostPathVolumeType: 'string',
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

export class DescribeEciScalingConfigurationsResponseBodyScalingConfigurations extends $tea.Model {
  acrRegistryInfos?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsAcrRegistryInfos[];
  activeDeadlineSeconds?: number;
  autoCreateEip?: boolean;
  autoMatchImageCache?: boolean;
  containerGroupName?: string;
  containers?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsContainers[];
  costOptimization?: boolean;
  cpu?: number;
  cpuOptionsCore?: number;
  cpuOptionsThreadsPerCore?: number;
  creationTime?: string;
  dataCacheBucket?: string;
  dataCacheBurstingEnabled?: boolean;
  dataCachePL?: string;
  dataCacheProvisionedIops?: number;
  description?: string;
  dnsConfigNameServers?: string[];
  dnsConfigOptions?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsDnsConfigOptions[];
  dnsConfigSearches?: string[];
  dnsPolicy?: string;
  egressBandwidth?: number;
  eipBandwidth?: number;
  ephemeralStorage?: number;
  hostAliases?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsHostAliases[];
  hostName?: string;
  imageRegistryCredentials?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsImageRegistryCredentials[];
  imageSnapshotId?: string;
  ingressBandwidth?: number;
  initContainers?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsInitContainers[];
  instanceFamilyLevel?: string;
  instanceTypes?: string[];
  ipv6AddressCount?: number;
  lifecycleState?: string;
  loadBalancerWeight?: number;
  memory?: number;
  ntpServers?: string[];
  ramRoleName?: string;
  regionId?: string;
  resourceGroupId?: string;
  restartPolicy?: string;
  scalingConfigurationId?: string;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  securityContextSysCtls?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsSecurityContextSysCtls[];
  securityGroupId?: string;
  slsEnable?: boolean;
  spotPriceLimit?: number;
  spotStrategy?: string;
  tags?: DescribeEciScalingConfigurationsResponseBodyScalingConfigurationsTags[];
  terminationGracePeriodSeconds?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBodyLifecycleActions extends $tea.Model {
  instanceIds?: string[];
  lifecycleActionResult?: string;
  lifecycleActionStatus?: string;
  lifecycleActionToken?: string;
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lifecycleActionResult: 'LifecycleActionResult',
      lifecycleActionStatus: 'LifecycleActionStatus',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleHookId: 'LifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleActionResult: 'string',
      lifecycleActionStatus: 'string',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponseBodyLifecycleHooks extends $tea.Model {
  defaultResult?: string;
  heartbeatTimeout?: number;
  lifecycleHookId?: string;
  lifecycleHookName?: string;
  lifecycleHookStatus?: string;
  lifecycleTransition?: string;
  notificationArn?: string;
  notificationMetadata?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleHookStatus: 'LifecycleHookStatus',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleHookId: 'string',
      lifecycleHookName: 'string',
      lifecycleHookStatus: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels extends $tea.Model {
  notificationArn?: string;
  notificationTypes?: string[];
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationArn: 'NotificationArn',
      notificationTypes: 'NotificationTypes',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationArn: 'string',
      notificationTypes: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  classicUnavailable?: boolean;
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  vpcUnavailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      classicUnavailable: 'ClassicUnavailable',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      vpcUnavailable: 'VpcUnavailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicUnavailable: 'boolean',
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      vpcUnavailable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBodyScalingActivities extends $tea.Model {
  attachedCapacity?: string;
  autoCreatedCapacity?: string;
  cause?: string;
  createdCapacity?: number;
  createdInstances?: string[];
  description?: string;
  destroyedCapacity?: number;
  destroyedInstances?: string[];
  detail?: string;
  endTime?: string;
  errorCode?: string;
  errorMessage?: string;
  progress?: number;
  scalingActivityId?: string;
  scalingGroupId?: string;
  scalingInstanceNumber?: number;
  startTime?: string;
  startedCapacity?: number;
  startedInstances?: string[];
  statusCode?: string;
  statusMessage?: string;
  stoppedCapacity?: number;
  stoppedInstances?: string[];
  totalCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      attachedCapacity: 'AttachedCapacity',
      autoCreatedCapacity: 'AutoCreatedCapacity',
      cause: 'Cause',
      createdCapacity: 'CreatedCapacity',
      createdInstances: 'CreatedInstances',
      description: 'Description',
      destroyedCapacity: 'DestroyedCapacity',
      destroyedInstances: 'DestroyedInstances',
      detail: 'Detail',
      endTime: 'EndTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      progress: 'Progress',
      scalingActivityId: 'ScalingActivityId',
      scalingGroupId: 'ScalingGroupId',
      scalingInstanceNumber: 'ScalingInstanceNumber',
      startTime: 'StartTime',
      startedCapacity: 'StartedCapacity',
      startedInstances: 'StartedInstances',
      statusCode: 'StatusCode',
      statusMessage: 'StatusMessage',
      stoppedCapacity: 'StoppedCapacity',
      stoppedInstances: 'StoppedInstances',
      totalCapacity: 'TotalCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedCapacity: 'string',
      autoCreatedCapacity: 'string',
      cause: 'string',
      createdCapacity: 'number',
      createdInstances: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      destroyedCapacity: 'number',
      destroyedInstances: { 'type': 'array', 'itemType': 'string' },
      detail: 'string',
      endTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      progress: 'number',
      scalingActivityId: 'string',
      scalingGroupId: 'string',
      scalingInstanceNumber: 'number',
      startTime: 'string',
      startedCapacity: 'number',
      startedInstances: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
      statusMessage: 'string',
      stoppedCapacity: 'number',
      stoppedInstances: { 'type': 'array', 'itemType': 'string' },
      totalCapacity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities extends $tea.Model {
  instanceType?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  categories?: string[];
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos extends $tea.Model {
  architectures?: string[];
  burstablePerformance?: string;
  cores?: number;
  excludedInstanceTypes?: string[];
  instanceFamilyLevel?: string;
  maxPrice?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      maxPrice: 'MaxPrice',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      maxPrice: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions extends $tea.Model {
  managedPrivateSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      managedPrivateSpaceId: 'ManagedPrivateSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedPrivateSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits extends $tea.Model {
  instanceType?: string;
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags extends $tea.Model {
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurations extends $tea.Model {
  affinity?: string;
  cpu?: number;
  creationTime?: string;
  creditSpecification?: string;
  customPriorities?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsCustomPriorities[];
  dataDisks?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks[];
  dedicatedHostId?: string;
  deletionProtection?: boolean;
  deploymentSetId?: string;
  hostName?: string;
  hpcClusterId?: string;
  imageFamily?: string;
  imageId?: string;
  imageName?: string;
  imageOptionsLoginAsNonRoot?: boolean;
  imageOwnerAlias?: string;
  instanceDescription?: string;
  instanceGeneration?: string;
  instanceName?: string;
  instancePatternInfos?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsInstancePatternInfos[];
  instanceType?: string;
  instanceTypes?: string[];
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ipv6AddressCount?: number;
  keyPairName?: string;
  lifecycleState?: string;
  loadBalancerWeight?: number;
  memory?: number;
  passwordInherit?: boolean;
  privatePoolOptions_id?: string;
  privatePoolOptions_matchCriteria?: string;
  ramRoleName?: string;
  resourceGroupId?: string;
  scalingConfigurationId?: string;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  schedulerOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions;
  securityEnhancementStrategy?: string;
  securityGroupId?: string;
  securityGroupIds?: string[];
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  spotPriceLimits?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSpotPriceLimits[];
  spotStrategy?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  systemDiskAutoSnapshotPolicyId?: string;
  systemDiskBurstingEnabled?: boolean;
  systemDiskCategories?: string[];
  systemDiskCategory?: string;
  systemDiskDescription?: string;
  systemDiskEncryptAlgorithm?: string;
  systemDiskEncrypted?: boolean;
  systemDiskKMSKeyId?: string;
  systemDiskName?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskProvisionedIops?: number;
  systemDiskSize?: number;
  tags?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsTags[];
  tenancy?: string;
  userData?: string;
  weightedCapacities?: number[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      customPriorities: 'CustomPriorities',
      dataDisks: 'DataDisks',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
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
      passwordInherit: 'PasswordInherit',
      privatePoolOptions_id: 'PrivatePoolOptions.Id',
      privatePoolOptions_matchCriteria: 'PrivatePoolOptions.MatchCriteria',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      schedulerOptions: 'SchedulerOptions',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
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
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      hostName: 'string',
      hpcClusterId: 'string',
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
      passwordInherit: 'boolean',
      privatePoolOptions_id: 'string',
      privatePoolOptions_matchCriteria: 'string',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      schedulerOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsSchedulerOptions,
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsRequestTags extends $tea.Model {
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

export class DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups extends $tea.Model {
  albServerGroupId?: string;
  port?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs extends $tea.Model {
  loadBalancerId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsServerGroups extends $tea.Model {
  port?: number;
  serverGroupId?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsTags extends $tea.Model {
  propagate?: boolean;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      propagate: 'Propagate',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propagate: 'boolean',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes extends $tea.Model {
  port?: number;
  VServerGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups extends $tea.Model {
  loadBalancerId?: string;
  VServerGroupAttributes?: DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroups extends $tea.Model {
  activeCapacity?: number;
  activeScalingConfigurationId?: string;
  albServerGroups?: DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups[];
  allocationStrategy?: string;
  azBalance?: boolean;
  compensateWithOnDemand?: boolean;
  creationTime?: string;
  currentHostName?: string;
  customPolicyARN?: string;
  DBInstanceIds?: string[];
  defaultCooldown?: number;
  desiredCapacity?: number;
  enableDesiredCapacity?: boolean;
  groupDeletionProtection?: boolean;
  groupType?: string;
  healthCheckType?: string;
  healthCheckTypes?: string[];
  initCapacity?: number;
  isElasticStrengthInAlarm?: boolean;
  launchTemplateId?: string;
  launchTemplateOverrides?: DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides[];
  launchTemplateVersion?: string;
  lifecycleState?: string;
  loadBalancerConfigs?: DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs[];
  loadBalancerIds?: string[];
  maxInstanceLifetime?: number;
  maxSize?: number;
  minSize?: number;
  modificationTime?: string;
  monitorGroupId?: string;
  multiAZPolicy?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  pendingCapacity?: number;
  pendingWaitCapacity?: number;
  protectedCapacity?: number;
  regionId?: string;
  removalPolicies?: string[];
  removingCapacity?: number;
  removingWaitCapacity?: number;
  resourceGroupId?: string;
  scalingGroupId?: string;
  scalingGroupName?: string;
  scalingPolicy?: string;
  serverGroups?: DescribeScalingGroupsResponseBodyScalingGroupsServerGroups[];
  spotAllocationStrategy?: string;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  standbyCapacity?: number;
  stoppedCapacity?: number;
  suspendedProcesses?: string[];
  systemSuspended?: boolean;
  tags?: DescribeScalingGroupsResponseBodyScalingGroupsTags[];
  totalCapacity?: number;
  totalInstanceCount?: number;
  VServerGroups?: DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups[];
  vSwitchId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      activeCapacity: 'ActiveCapacity',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      albServerGroups: 'AlbServerGroups',
      allocationStrategy: 'AllocationStrategy',
      azBalance: 'AzBalance',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      creationTime: 'CreationTime',
      currentHostName: 'CurrentHostName',
      customPolicyARN: 'CustomPolicyARN',
      DBInstanceIds: 'DBInstanceIds',
      defaultCooldown: 'DefaultCooldown',
      desiredCapacity: 'DesiredCapacity',
      enableDesiredCapacity: 'EnableDesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      groupType: 'GroupType',
      healthCheckType: 'HealthCheckType',
      healthCheckTypes: 'HealthCheckTypes',
      initCapacity: 'InitCapacity',
      isElasticStrengthInAlarm: 'IsElasticStrengthInAlarm',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleState: 'LifecycleState',
      loadBalancerConfigs: 'LoadBalancerConfigs',
      loadBalancerIds: 'LoadBalancerIds',
      maxInstanceLifetime: 'MaxInstanceLifetime',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      modificationTime: 'ModificationTime',
      monitorGroupId: 'MonitorGroupId',
      multiAZPolicy: 'MultiAZPolicy',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      pendingCapacity: 'PendingCapacity',
      pendingWaitCapacity: 'PendingWaitCapacity',
      protectedCapacity: 'ProtectedCapacity',
      regionId: 'RegionId',
      removalPolicies: 'RemovalPolicies',
      removingCapacity: 'RemovingCapacity',
      removingWaitCapacity: 'RemovingWaitCapacity',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      scalingPolicy: 'ScalingPolicy',
      serverGroups: 'ServerGroups',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      standbyCapacity: 'StandbyCapacity',
      stoppedCapacity: 'StoppedCapacity',
      suspendedProcesses: 'SuspendedProcesses',
      systemSuspended: 'SystemSuspended',
      tags: 'Tags',
      totalCapacity: 'TotalCapacity',
      totalInstanceCount: 'TotalInstanceCount',
      VServerGroups: 'VServerGroups',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCapacity: 'number',
      activeScalingConfigurationId: 'string',
      albServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups },
      allocationStrategy: 'string',
      azBalance: 'boolean',
      compensateWithOnDemand: 'boolean',
      creationTime: 'string',
      currentHostName: 'string',
      customPolicyARN: 'string',
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
      defaultCooldown: 'number',
      desiredCapacity: 'number',
      enableDesiredCapacity: 'boolean',
      groupDeletionProtection: 'boolean',
      groupType: 'string',
      healthCheckType: 'string',
      healthCheckTypes: { 'type': 'array', 'itemType': 'string' },
      initCapacity: 'number',
      isElasticStrengthInAlarm: 'boolean',
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      loadBalancerConfigs: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs },
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxInstanceLifetime: 'number',
      maxSize: 'number',
      minSize: 'number',
      modificationTime: 'string',
      monitorGroupId: 'string',
      multiAZPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      pendingCapacity: 'number',
      pendingWaitCapacity: 'number',
      protectedCapacity: 'number',
      regionId: 'string',
      removalPolicies: { 'type': 'array', 'itemType': 'string' },
      removingCapacity: 'number',
      removingWaitCapacity: 'number',
      resourceGroupId: 'string',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
      scalingPolicy: 'string',
      serverGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsServerGroups },
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      standbyCapacity: 'number',
      stoppedCapacity: 'number',
      suspendedProcesses: { 'type': 'array', 'itemType': 'string' },
      systemSuspended: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsTags },
      totalCapacity: 'number',
      totalInstanceCount: 'number',
      VServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups },
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBodyScalingInstances extends $tea.Model {
  createdTime?: string;
  creationTime?: string;
  creationType?: string;
  entrusted?: boolean;
  healthStatus?: string;
  instanceId?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  lifecycleState?: string;
  loadBalancerWeight?: number;
  privateIpAddress?: string;
  scalingActivityId?: string;
  scalingConfigurationId?: string;
  scalingGroupId?: string;
  scalingInstanceId?: string;
  spotStrategy?: string;
  warmupState?: string;
  weightedCapacity?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creationTime: 'CreationTime',
      creationType: 'CreationType',
      entrusted: 'Entrusted',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleState: 'LifecycleState',
      loadBalancerWeight: 'LoadBalancerWeight',
      privateIpAddress: 'PrivateIpAddress',
      scalingActivityId: 'ScalingActivityId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
      scalingInstanceId: 'ScalingInstanceId',
      spotStrategy: 'SpotStrategy',
      warmupState: 'WarmupState',
      weightedCapacity: 'WeightedCapacity',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      creationTime: 'string',
      creationType: 'string',
      entrusted: 'boolean',
      healthStatus: 'string',
      instanceId: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      loadBalancerWeight: 'number',
      privateIpAddress: 'string',
      scalingActivityId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
      scalingInstanceId: 'string',
      spotStrategy: 'string',
      warmupState: 'string',
      weightedCapacity: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesAlarms extends $tea.Model {
  alarmTaskId?: string;
  alarmTaskName?: string;
  comparisonOperator?: string;
  dimensions?: DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions[];
  evaluationCount?: number;
  metricName?: string;
  metricType?: string;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      alarmTaskName: 'AlarmTaskName',
      comparisonOperator: 'ComparisonOperator',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      metricType: 'MetricType',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      alarmTaskName: 'string',
      comparisonOperator: 'string',
      dimensions: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions },
      evaluationCount: 'number',
      metricName: 'string',
      metricType: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesStepAdjustments extends $tea.Model {
  metricIntervalLowerBound?: number;
  metricIntervalUpperBound?: number;
  scalingAdjustment?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalLowerBound: 'number',
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRules extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  alarmDimensions?: DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions[];
  alarms?: DescribeScalingRulesResponseBodyScalingRulesAlarms[];
  cooldown?: number;
  disableScaleIn?: boolean;
  estimatedInstanceWarmup?: number;
  initialMaxSize?: number;
  maxSize?: number;
  metricName?: string;
  minAdjustmentMagnitude?: number;
  minSize?: number;
  predictiveScalingMode?: string;
  predictiveTaskBufferTime?: number;
  predictiveValueBehavior?: string;
  predictiveValueBuffer?: number;
  scaleInEvaluationCount?: number;
  scaleOutEvaluationCount?: number;
  scalingGroupId?: string;
  scalingRuleAri?: string;
  scalingRuleId?: string;
  scalingRuleName?: string;
  scalingRuleType?: string;
  stepAdjustments?: DescribeScalingRulesResponseBodyScalingRulesStepAdjustments[];
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      alarmDimensions: 'AlarmDimensions',
      alarms: 'Alarms',
      cooldown: 'Cooldown',
      disableScaleIn: 'DisableScaleIn',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      initialMaxSize: 'InitialMaxSize',
      maxSize: 'MaxSize',
      metricName: 'MetricName',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      minSize: 'MinSize',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleAri: 'ScalingRuleAri',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleType: 'ScalingRuleType',
      stepAdjustments: 'StepAdjustments',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      alarmDimensions: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions },
      alarms: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesAlarms },
      cooldown: 'number',
      disableScaleIn: 'boolean',
      estimatedInstanceWarmup: 'number',
      initialMaxSize: 'number',
      maxSize: 'number',
      metricName: 'string',
      minAdjustmentMagnitude: 'number',
      minSize: 'number',
      predictiveScalingMode: 'string',
      predictiveTaskBufferTime: 'number',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      scalingGroupId: 'string',
      scalingRuleAri: 'string',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
      stepAdjustments: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesStepAdjustments },
      targetValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBodyScheduledTasks extends $tea.Model {
  description?: string;
  desiredCapacity?: number;
  launchExpirationTime?: number;
  launchTime?: string;
  maxValue?: number;
  minValue?: number;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  scalingGroupId?: string;
  scheduledAction?: string;
  scheduledTaskId?: string;
  scheduledTaskName?: string;
  taskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desiredCapacity: 'DesiredCapacity',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      scalingGroupId: 'ScalingGroupId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desiredCapacity: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      maxValue: 'number',
      minValue: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      scalingGroupId: 'string',
      scheduledAction: 'string',
      scheduledTaskId: 'string',
      scheduledTaskName: 'string',
      taskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAlbServerGroupsRequestAlbServerGroups extends $tea.Model {
  albServerGroupId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachServerGroupsRequestServerGroups extends $tea.Model {
  port?: number;
  serverGroupId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes extends $tea.Model {
  port?: number;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequestVServerGroups extends $tea.Model {
  loadBalancerId?: string;
  VServerGroupAttributes?: DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableScalingGroupRequestLaunchTemplateOverrides extends $tea.Model {
  instanceType?: string;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTags extends $tea.Model {
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
  propagate?: boolean;
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      propagate: 'Propagate',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propagate: 'boolean',
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

export class ModifyAlarmRequestDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmRequestExpressions extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestAcrRegistryInfos extends $tea.Model {
  domains?: string[];
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersLivenessProbeExec extends $tea.Model {
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersLivenessProbeHttpGet extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersLivenessProbeTcpSocket extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersLivenessProbe extends $tea.Model {
  exec?: ModifyEciScalingConfigurationRequestContainersLivenessProbeExec;
  failureThreshold?: number;
  httpGet?: ModifyEciScalingConfigurationRequestContainersLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: ModifyEciScalingConfigurationRequestContainersLivenessProbeTcpSocket;
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
      exec: ModifyEciScalingConfigurationRequestContainersLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: ModifyEciScalingConfigurationRequestContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: ModifyEciScalingConfigurationRequestContainersLivenessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersReadinessProbeExec extends $tea.Model {
  commands?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersReadinessProbeHttpGet extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersReadinessProbeTcpSocket extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersReadinessProbe extends $tea.Model {
  exec?: ModifyEciScalingConfigurationRequestContainersReadinessProbeExec;
  failureThreshold?: number;
  httpGet?: ModifyEciScalingConfigurationRequestContainersReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: ModifyEciScalingConfigurationRequestContainersReadinessProbeTcpSocket;
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
      exec: ModifyEciScalingConfigurationRequestContainersReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: ModifyEciScalingConfigurationRequestContainersReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: ModifyEciScalingConfigurationRequestContainersReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersSecurityContextCapability extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersSecurityContext extends $tea.Model {
  capability?: ModifyEciScalingConfigurationRequestContainersSecurityContextCapability;
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
      capability: ModifyEciScalingConfigurationRequestContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersEnvironmentVars extends $tea.Model {
  fieldRef?: ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef;
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
      fieldRef: ModifyEciScalingConfigurationRequestContainersEnvironmentVarsFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestContainersPorts extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainersVolumeMounts extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestContainers extends $tea.Model {
  livenessProbe?: ModifyEciScalingConfigurationRequestContainersLivenessProbe;
  readinessProbe?: ModifyEciScalingConfigurationRequestContainersReadinessProbe;
  securityContext?: ModifyEciScalingConfigurationRequestContainersSecurityContext;
  args?: string[];
  commands?: string[];
  cpu?: number;
  environmentVars?: ModifyEciScalingConfigurationRequestContainersEnvironmentVars[];
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  lifecyclePostStartHandlerExecs?: string[];
  lifecyclePostStartHandlerHttpGetHost?: string;
  lifecyclePostStartHandlerHttpGetPath?: string;
  lifecyclePostStartHandlerHttpGetPort?: number;
  lifecyclePostStartHandlerHttpGetScheme?: string;
  lifecyclePostStartHandlerTcpSocketHost?: string;
  lifecyclePostStartHandlerTcpSocketPort?: number;
  lifecyclePreStopHandlerExecs?: string[];
  lifecyclePreStopHandlerHttpGetHost?: string;
  lifecyclePreStopHandlerHttpGetPath?: string;
  lifecyclePreStopHandlerHttpGetPort?: number;
  lifecyclePreStopHandlerHttpGetScheme?: string;
  lifecyclePreStopHandlerTcpSocketHost?: string;
  lifecyclePreStopHandlerTcpSocketPort?: number;
  memory?: number;
  name?: string;
  ports?: ModifyEciScalingConfigurationRequestContainersPorts[];
  stdin?: boolean;
  stdinOnce?: boolean;
  tty?: boolean;
  volumeMounts?: ModifyEciScalingConfigurationRequestContainersVolumeMounts[];
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      livenessProbe: 'LivenessProbe',
      readinessProbe: 'ReadinessProbe',
      securityContext: 'SecurityContext',
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      lifecyclePostStartHandlerExecs: 'LifecyclePostStartHandlerExecs',
      lifecyclePostStartHandlerHttpGetHost: 'LifecyclePostStartHandlerHttpGetHost',
      lifecyclePostStartHandlerHttpGetPath: 'LifecyclePostStartHandlerHttpGetPath',
      lifecyclePostStartHandlerHttpGetPort: 'LifecyclePostStartHandlerHttpGetPort',
      lifecyclePostStartHandlerHttpGetScheme: 'LifecyclePostStartHandlerHttpGetScheme',
      lifecyclePostStartHandlerTcpSocketHost: 'LifecyclePostStartHandlerTcpSocketHost',
      lifecyclePostStartHandlerTcpSocketPort: 'LifecyclePostStartHandlerTcpSocketPort',
      lifecyclePreStopHandlerExecs: 'LifecyclePreStopHandlerExecs',
      lifecyclePreStopHandlerHttpGetHost: 'LifecyclePreStopHandlerHttpGetHost',
      lifecyclePreStopHandlerHttpGetPath: 'LifecyclePreStopHandlerHttpGetPath',
      lifecyclePreStopHandlerHttpGetPort: 'LifecyclePreStopHandlerHttpGetPort',
      lifecyclePreStopHandlerHttpGetScheme: 'LifecyclePreStopHandlerHttpGetScheme',
      lifecyclePreStopHandlerTcpSocketHost: 'LifecyclePreStopHandlerTcpSocketHost',
      lifecyclePreStopHandlerTcpSocketPort: 'LifecyclePreStopHandlerTcpSocketPort',
      memory: 'Memory',
      name: 'Name',
      ports: 'Ports',
      stdin: 'Stdin',
      stdinOnce: 'StdinOnce',
      tty: 'Tty',
      volumeMounts: 'VolumeMounts',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livenessProbe: ModifyEciScalingConfigurationRequestContainersLivenessProbe,
      readinessProbe: ModifyEciScalingConfigurationRequestContainersReadinessProbe,
      securityContext: ModifyEciScalingConfigurationRequestContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainersEnvironmentVars },
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      lifecyclePostStartHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePostStartHandlerHttpGetHost: 'string',
      lifecyclePostStartHandlerHttpGetPath: 'string',
      lifecyclePostStartHandlerHttpGetPort: 'number',
      lifecyclePostStartHandlerHttpGetScheme: 'string',
      lifecyclePostStartHandlerTcpSocketHost: 'string',
      lifecyclePostStartHandlerTcpSocketPort: 'number',
      lifecyclePreStopHandlerExecs: { 'type': 'array', 'itemType': 'string' },
      lifecyclePreStopHandlerHttpGetHost: 'string',
      lifecyclePreStopHandlerHttpGetPath: 'string',
      lifecyclePreStopHandlerHttpGetPort: 'number',
      lifecyclePreStopHandlerHttpGetScheme: 'string',
      lifecyclePreStopHandlerTcpSocketHost: 'string',
      lifecyclePreStopHandlerTcpSocketPort: 'number',
      memory: 'number',
      name: 'string',
      ports: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainersPorts },
      stdin: 'boolean',
      stdinOnce: 'boolean',
      tty: 'boolean',
      volumeMounts: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestDnsConfigOptions extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestHostAliases extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestImageRegistryCredentials extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestInitContainersSecurityContextCapability extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestInitContainersSecurityContext extends $tea.Model {
  capability?: ModifyEciScalingConfigurationRequestInitContainersSecurityContextCapability;
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
      capability: ModifyEciScalingConfigurationRequestInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVarsFieldRef extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars extends $tea.Model {
  fieldRef?: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVarsFieldRef;
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
      fieldRef: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVarsFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestInitContainers extends $tea.Model {
  securityContext?: ModifyEciScalingConfigurationRequestInitContainersSecurityContext;
  args?: string[];
  commands?: string[];
  cpu?: number;
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  initContainerEnvironmentVars?: ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars[];
  initContainerPorts?: ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts[];
  initContainerVolumeMounts?: ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts[];
  memory?: number;
  name?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      securityContext: 'SecurityContext',
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      gpu: 'Gpu',
      image: 'Image',
      imagePullPolicy: 'ImagePullPolicy',
      initContainerEnvironmentVars: 'InitContainerEnvironmentVars',
      initContainerPorts: 'InitContainerPorts',
      initContainerVolumeMounts: 'InitContainerVolumeMounts',
      memory: 'Memory',
      name: 'Name',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityContext: ModifyEciScalingConfigurationRequestInitContainersSecurityContext,
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      gpu: 'number',
      image: 'string',
      imagePullPolicy: 'string',
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestInitContainersInitContainerVolumeMounts },
      memory: 'number',
      name: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEciScalingConfigurationRequestSecurityContextSysCtls extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestTags extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumesDiskVolume extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumesFlexVolume extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumesHostPathVolume extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumesNFSVolume extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath extends $tea.Model {
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

export class ModifyEciScalingConfigurationRequestVolumes extends $tea.Model {
  diskVolume?: ModifyEciScalingConfigurationRequestVolumesDiskVolume;
  emptyDirVolume?: ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume;
  flexVolume?: ModifyEciScalingConfigurationRequestVolumesFlexVolume;
  hostPathVolume?: ModifyEciScalingConfigurationRequestVolumesHostPathVolume;
  NFSVolume?: ModifyEciScalingConfigurationRequestVolumesNFSVolume;
  configFileVolumeConfigFileToPath?: ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath[];
  configFileVolumeDefaultMode?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskVolume: 'DiskVolume',
      emptyDirVolume: 'EmptyDirVolume',
      flexVolume: 'FlexVolume',
      hostPathVolume: 'HostPathVolume',
      NFSVolume: 'NFSVolume',
      configFileVolumeConfigFileToPath: 'ConfigFileVolumeConfigFileToPath',
      configFileVolumeDefaultMode: 'ConfigFileVolumeDefaultMode',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskVolume: ModifyEciScalingConfigurationRequestVolumesDiskVolume,
      emptyDirVolume: ModifyEciScalingConfigurationRequestVolumesEmptyDirVolume,
      flexVolume: ModifyEciScalingConfigurationRequestVolumesFlexVolume,
      hostPathVolume: ModifyEciScalingConfigurationRequestVolumesHostPathVolume,
      NFSVolume: ModifyEciScalingConfigurationRequestVolumesNFSVolume,
      configFileVolumeConfigFileToPath: { 'type': 'array', 'itemType': ModifyEciScalingConfigurationRequestVolumesConfigFileVolumeConfigFileToPath },
      configFileVolumeDefaultMode: 'number',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestImageOptions extends $tea.Model {
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginAsNonRoot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestPrivatePoolOptions extends $tea.Model {
  id?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestSystemDisk extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  description?: string;
  diskName?: string;
  encryptAlgorithm?: string;
  encrypted?: boolean;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      description: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestCustomPriorities extends $tea.Model {
  instanceType?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestDataDisks extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  categories?: string[];
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestInstancePatternInfos extends $tea.Model {
  architectures?: string[];
  burstablePerformance?: string;
  cores?: number;
  excludedInstanceTypes?: string[];
  instanceFamilyLevel?: string;
  maxPrice?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      maxPrice: 'MaxPrice',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      maxPrice: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestInstanceTypeOverrides extends $tea.Model {
  instanceType?: string;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestSpotPriceLimits extends $tea.Model {
  instanceType?: string;
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestImageOptions extends $tea.Model {
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginAsNonRoot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestPrivatePoolOptions extends $tea.Model {
  id?: string;
  matchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchCriteria: 'MatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      matchCriteria: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestSystemDisk extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  description?: string;
  diskName?: string;
  encryptAlgorithm?: string;
  encrypted?: boolean;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      description: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestCustomPriorities extends $tea.Model {
  instanceType?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestDataDisks extends $tea.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  categories?: string[];
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestInstancePatternInfos extends $tea.Model {
  architectures?: string[];
  burstablePerformance?: string;
  cores?: number;
  excludedInstanceTypes?: string[];
  instanceFamilyLevel?: string;
  maxPrice?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      maxPrice: 'MaxPrice',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      maxPrice: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestInstanceTypeOverrides extends $tea.Model {
  instanceType?: string;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestSpotPriceLimits extends $tea.Model {
  instanceType?: string;
  priceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priceLimit: 'PriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupRequestLaunchTemplateOverrides extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
      weightedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequestAlarmDimensions extends $tea.Model {
  dimensionKey?: string;
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequestStepAdjustments extends $tea.Model {
  metricIntervalLowerBound?: number;
  metricIntervalUpperBound?: number;
  scalingAdjustment?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalLowerBound: 'number',
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars extends $tea.Model {
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

export class ScaleWithAdjustmentRequestOverridesContainerOverrides extends $tea.Model {
  args?: string[];
  commands?: string[];
  cpu?: number;
  environmentVars?: ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars[];
  memory?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars },
      memory: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequestOverrides extends $tea.Model {
  containerOverrides?: ScaleWithAdjustmentRequestOverridesContainerOverrides[];
  cpu?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      containerOverrides: 'ContainerOverrides',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerOverrides: { 'type': 'array', 'itemType': ScaleWithAdjustmentRequestOverridesContainerOverrides },
      cpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTags extends $tea.Model {
  key?: string;
  propagate?: boolean;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      propagate: 'Propagate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      propagate: 'boolean',
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "ess.aliyuncs.com",
      'cn-beijing': "ess.aliyuncs.com",
      'cn-hangzhou': "ess.aliyuncs.com",
      'cn-shanghai': "ess.aliyuncs.com",
      'cn-shenzhen': "ess.aliyuncs.com",
      'cn-hongkong': "ess.aliyuncs.com",
      'ap-southeast-1': "ess.aliyuncs.com",
      'us-east-1': "ess.aliyuncs.com",
      'us-west-1': "ess.aliyuncs.com",
      'cn-shanghai-finance-1': "ess.aliyuncs.com",
      'cn-shenzhen-finance-1': "ess.aliyuncs.com",
      'cn-north-2-gov-1': "ess.aliyuncs.com",
      'ap-northeast-2-pop': "ess.aliyuncs.com",
      'cn-beijing-finance-pop': "ess.aliyuncs.com",
      'cn-beijing-gov-1': "ess.aliyuncs.com",
      'cn-beijing-nu16-b01': "ess.aliyuncs.com",
      'cn-edge-1': "ess.aliyuncs.com",
      'cn-fujian': "ess.aliyuncs.com",
      'cn-haidian-cm12-c01': "ess.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ess.aliyuncs.com",
      'cn-hangzhou-finance': "ess.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ess.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ess.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ess.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ess.aliyuncs.com",
      'cn-hangzhou-test-306': "ess.aliyuncs.com",
      'cn-hongkong-finance-pop': "ess.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ess.aliyuncs.com",
      'cn-qingdao-nebula': "ess.aliyuncs.com",
      'cn-shanghai-et15-b01': "ess.aliyuncs.com",
      'cn-shanghai-et2-b01': "ess.aliyuncs.com",
      'cn-shanghai-inner': "ess.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ess.aliyuncs.com",
      'cn-shenzhen-inner': "ess.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ess.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ess.aliyuncs.com",
      'cn-wuhan': "ess.aliyuncs.com",
      'cn-yushanfang': "ess.aliyuncs.com",
      'cn-zhangbei': "ess.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ess.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ess.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ess.aliyuncs.com",
      'eu-west-1-oxs': "ess.aliyuncs.com",
      'rus-west-1-pop': "ess.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ess", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async applyScalingGroupWithOptions(request: ApplyScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<ApplyScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.format)) {
      query["Format"] = request.format;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyScalingGroupResponse>(await this.callApi(params, req, runtime), new ApplyScalingGroupResponse({}));
  }

  async applyScalingGroup(request: ApplyScalingGroupRequest): Promise<ApplyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyScalingGroupWithOptions(request, runtime);
  }

  /**
    * Before you associate an ALB server group with a scaling group, make sure that the following requirements are met:
    * *   The scaling group resides in a virtual private cloud (VPC). The scaling group and the ALB server group must reside in the same VPC.
    * *   The ALB server group is in the Available state.
    * *   You can associate only a limited number of ALB server groups with a scaling group. To view the quota or manually request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
    *
    * @param request AttachAlbServerGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachAlbServerGroupsResponse
   */
  async attachAlbServerGroupsWithOptions(request: AttachAlbServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AttachAlbServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.albServerGroups)) {
      query["AlbServerGroups"] = request.albServerGroups;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachAlbServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachAlbServerGroupsResponse>(await this.callApi(params, req, runtime), new AttachAlbServerGroupsResponse({}));
  }

  /**
    * Before you associate an ALB server group with a scaling group, make sure that the following requirements are met:
    * *   The scaling group resides in a virtual private cloud (VPC). The scaling group and the ALB server group must reside in the same VPC.
    * *   The ALB server group is in the Available state.
    * *   You can associate only a limited number of ALB server groups with a scaling group. To view the quota or manually request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
    *
    * @param request AttachAlbServerGroupsRequest
    * @return AttachAlbServerGroupsResponse
   */
  async attachAlbServerGroups(request: AttachAlbServerGroupsRequest): Promise<AttachAlbServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAlbServerGroupsWithOptions(request, runtime);
  }

  /**
    * Before you associate an ApsaraDB RDS instance with a scaling group, make sure that the ApsaraDB RDS instance meets the following requirements:
    * *   The ApsaraDB RDS instance and the scaling group must belong to the same Alibaba Cloud account.
    * *   The ApsaraDB RDS instance must be unlocked. For more information about the lock policy, see [ApsaraDB RDS usage notes](~~41872~~).
    * *   The ApsaraDB RDS instance must be in the Running state.
    * After an ApsaraDB RDS instance is associated with the scaling group, the default IP address whitelist of the ApsaraDB RDS instance can contain no more than 1,000 IP addresses. For more information, see [Set the whitelist](~~43185~~).
    *
    * @param request AttachDBInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachDBInstancesResponse
   */
  async attachDBInstancesWithOptions(request: AttachDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
    }

    if (!Util.isUnset(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachDBInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachDBInstancesResponse>(await this.callApi(params, req, runtime), new AttachDBInstancesResponse({}));
  }

  /**
    * Before you associate an ApsaraDB RDS instance with a scaling group, make sure that the ApsaraDB RDS instance meets the following requirements:
    * *   The ApsaraDB RDS instance and the scaling group must belong to the same Alibaba Cloud account.
    * *   The ApsaraDB RDS instance must be unlocked. For more information about the lock policy, see [ApsaraDB RDS usage notes](~~41872~~).
    * *   The ApsaraDB RDS instance must be in the Running state.
    * After an ApsaraDB RDS instance is associated with the scaling group, the default IP address whitelist of the ApsaraDB RDS instance can contain no more than 1,000 IP addresses. For more information, see [Set the whitelist](~~43185~~).
    *
    * @param request AttachDBInstancesRequest
    * @return AttachDBInstancesResponse
   */
  async attachDBInstances(request: AttachDBInstancesRequest): Promise<AttachDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDBInstancesWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   The scaling group is in the Active state.
    * *   No scaling activities in the scaling group are in progress.
    * The ECS instances or the elastic container instances that you want to add to a scaling group must meet the following requirements:
    * *   The instances reside in the same region as the scaling group.
    * *   The instances must be in the Running state.
    * *   The instances are not added to other scaling groups.
    * *   The instances use the subscription or pay-as-you-go billing method, or are preemptible instances.
    * *   If the VswitchID parameter is specified for a scaling group, the instances that are in the classic network or those that are not in the same virtual private cloud (VPC) as the specified vSwitch cannot be added to the scaling group.
    * *   If the VswitchID parameter is not specified for a scaling group, the instances that are in VPCs cannot be added to the scaling group.
    * If no scaling activities in the specified scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the ScalingActivityId parameter in the response.
    * If the sum of the number of instances that you want to add and the number of existing instances in the scaling group is greater than the value of the MaxSize parameter, the call fails.
    * Instances that are manually added by calling the AttachInstances operation are not associated with the active scaling configuration of the scaling group.
    *
    * @param request AttachInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachInstancesResponse
   */
  async attachInstancesWithOptions(request: AttachInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.entrusted)) {
      query["Entrusted"] = request.entrusted;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.lifecycleHook)) {
      query["LifecycleHook"] = request.lifecycleHook;
    }

    if (!Util.isUnset(request.loadBalancerWeights)) {
      query["LoadBalancerWeights"] = request.loadBalancerWeights;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachInstancesResponse>(await this.callApi(params, req, runtime), new AttachInstancesResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   The scaling group is in the Active state.
    * *   No scaling activities in the scaling group are in progress.
    * The ECS instances or the elastic container instances that you want to add to a scaling group must meet the following requirements:
    * *   The instances reside in the same region as the scaling group.
    * *   The instances must be in the Running state.
    * *   The instances are not added to other scaling groups.
    * *   The instances use the subscription or pay-as-you-go billing method, or are preemptible instances.
    * *   If the VswitchID parameter is specified for a scaling group, the instances that are in the classic network or those that are not in the same virtual private cloud (VPC) as the specified vSwitch cannot be added to the scaling group.
    * *   If the VswitchID parameter is not specified for a scaling group, the instances that are in VPCs cannot be added to the scaling group.
    * If no scaling activities in the specified scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the ScalingActivityId parameter in the response.
    * If the sum of the number of instances that you want to add and the number of existing instances in the scaling group is greater than the value of the MaxSize parameter, the call fails.
    * Instances that are manually added by calling the AttachInstances operation are not associated with the active scaling configuration of the scaling group.
    *
    * @param request AttachInstancesRequest
    * @return AttachInstancesResponse
   */
  async attachInstances(request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachInstancesWithOptions(request, runtime);
  }

  /**
    * Before you call this operation to attach a CLB instance to your scaling group, take note of the following items:
    * *   The CLB instance and the scaling group must belong to the same Alibaba Cloud account.
    * *   The CLB instance and the scaling group must reside in the same region.
    * *   The CLB instance must be in the Running state.
    * *   The CLB instance must be configured with at least one listener. Health check is enabled for the CLB instance.
    * *   The CLB instance and the scaling group must be in the same virtual private cloud (VPC) if their network type is VPC.
    * *   If the network type of the scaling group is VPC, the network type of the CLB instance is classic network, and the CLB backend server groups contain instances of the VPC network type, the instances and the scaling group must be in the same VPC.
    * *   You can attach only a limited number of CLB instances to a scaling group. Fore more information, see [Limits](~~25863~~).
    *
    * @param request AttachLoadBalancersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachLoadBalancersResponse
   */
  async attachLoadBalancersWithOptions(request: AttachLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<AttachLoadBalancersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
    }

    if (!Util.isUnset(request.loadBalancerConfigs)) {
      query["LoadBalancerConfigs"] = request.loadBalancerConfigs;
    }

    if (!Util.isUnset(request.loadBalancers)) {
      query["LoadBalancers"] = request.loadBalancers;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachLoadBalancers",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachLoadBalancersResponse>(await this.callApi(params, req, runtime), new AttachLoadBalancersResponse({}));
  }

  /**
    * Before you call this operation to attach a CLB instance to your scaling group, take note of the following items:
    * *   The CLB instance and the scaling group must belong to the same Alibaba Cloud account.
    * *   The CLB instance and the scaling group must reside in the same region.
    * *   The CLB instance must be in the Running state.
    * *   The CLB instance must be configured with at least one listener. Health check is enabled for the CLB instance.
    * *   The CLB instance and the scaling group must be in the same virtual private cloud (VPC) if their network type is VPC.
    * *   If the network type of the scaling group is VPC, the network type of the CLB instance is classic network, and the CLB backend server groups contain instances of the VPC network type, the instances and the scaling group must be in the same VPC.
    * *   You can attach only a limited number of CLB instances to a scaling group. Fore more information, see [Limits](~~25863~~).
    *
    * @param request AttachLoadBalancersRequest
    * @return AttachLoadBalancersResponse
   */
  async attachLoadBalancers(request: AttachLoadBalancersRequest): Promise<AttachLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLoadBalancersWithOptions(request, runtime);
  }

  async attachServerGroupsWithOptions(request: AttachServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AttachServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.serverGroups)) {
      query["ServerGroups"] = request.serverGroups;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachServerGroupsResponse>(await this.callApi(params, req, runtime), new AttachServerGroupsResponse({}));
  }

  async attachServerGroups(request: AttachServerGroupsRequest): Promise<AttachServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachServerGroupsWithOptions(request, runtime);
  }

  /**
    * Before you call this operation to attach a vServer group to your scaling group, take note of the following items:
    * *   The CLB instance and the scaling group must belong to the same Alibaba Cloud account.
    * *   The CLB instance and the scaling group must reside in the same region.
    * *   The CLB instance must be in the Running state.
    * *   The CLB instance must be configured with at least one listener. Health check is enabled for the CLB instance.
    * *   The CLB instance and the scaling group must be in the same VPC if their network type is VPC.
    * *   If the network type of the scaling group is VPC, the network type of the CLB instance is classic network, and the vServer groups of the CLB instance contain instances of the VPC network type, the instances and the scaling group must be in the same VPC.
    * *   The vServer group that you want to attach to your scaling group must belong to the CLB instance.
    * *   You can attach only a limited number of vServer groups to a scaling group. For information about the quota on vServer groups, see [Limits](~~25863~~).
    * When you call this operation, you must specify the following parameters:
    * *   LoadBalancerId: the ID of the CLB instance.
    * *   VServerGroupId: the ID of the vServer group.
    * *   Port: the port number of the vServer group.
    * If a vServer group is attached to a scaling group by using different ports, Auto Scaling considers that more than one vServer group is attached to the scaling group. If multiple vServer groups with the same group ID and port number are specified in the request parameters, only the first vServer group is used. The other vServer groups are ignored.
    *
    * @param request AttachVServerGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachVServerGroupsResponse
   */
  async attachVServerGroupsWithOptions(request: AttachVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AttachVServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.VServerGroups)) {
      query["VServerGroups"] = request.VServerGroups;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachVServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachVServerGroupsResponse>(await this.callApi(params, req, runtime), new AttachVServerGroupsResponse({}));
  }

  /**
    * Before you call this operation to attach a vServer group to your scaling group, take note of the following items:
    * *   The CLB instance and the scaling group must belong to the same Alibaba Cloud account.
    * *   The CLB instance and the scaling group must reside in the same region.
    * *   The CLB instance must be in the Running state.
    * *   The CLB instance must be configured with at least one listener. Health check is enabled for the CLB instance.
    * *   The CLB instance and the scaling group must be in the same VPC if their network type is VPC.
    * *   If the network type of the scaling group is VPC, the network type of the CLB instance is classic network, and the vServer groups of the CLB instance contain instances of the VPC network type, the instances and the scaling group must be in the same VPC.
    * *   The vServer group that you want to attach to your scaling group must belong to the CLB instance.
    * *   You can attach only a limited number of vServer groups to a scaling group. For information about the quota on vServer groups, see [Limits](~~25863~~).
    * When you call this operation, you must specify the following parameters:
    * *   LoadBalancerId: the ID of the CLB instance.
    * *   VServerGroupId: the ID of the vServer group.
    * *   Port: the port number of the vServer group.
    * If a vServer group is attached to a scaling group by using different ports, Auto Scaling considers that more than one vServer group is attached to the scaling group. If multiple vServer groups with the same group ID and port number are specified in the request parameters, only the first vServer group is used. The other vServer groups are ignored.
    *
    * @param request AttachVServerGroupsRequest
    * @return AttachVServerGroupsResponse
   */
  async attachVServerGroups(request: AttachVServerGroupsRequest): Promise<AttachVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachVServerGroupsWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
    * If you set the LifecycleActionResult parameter for a lifecycle hook of a scaling group to CONTINUE in the operation, Auto Scaling continues to complete the scaling activity in the scaling group after the lifecycle hook times out. If you set the LifecycleActionResult parameter to ABANDON, Auto Scaling stops the scaling activity in the scaling group after the lifecycle hook times out.
    *
    * @param request CompleteLifecycleActionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CompleteLifecycleActionResponse
   */
  async completeLifecycleActionWithOptions(request: CompleteLifecycleActionRequest, runtime: $Util.RuntimeOptions): Promise<CompleteLifecycleActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lifecycleActionResult)) {
      query["LifecycleActionResult"] = request.lifecycleActionResult;
    }

    if (!Util.isUnset(request.lifecycleActionToken)) {
      query["LifecycleActionToken"] = request.lifecycleActionToken;
    }

    if (!Util.isUnset(request.lifecycleHookId)) {
      query["LifecycleHookId"] = request.lifecycleHookId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompleteLifecycleAction",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompleteLifecycleActionResponse>(await this.callApi(params, req, runtime), new CompleteLifecycleActionResponse({}));
  }

  /**
    * If you set the LifecycleActionResult parameter for a lifecycle hook of a scaling group to CONTINUE in the operation, Auto Scaling continues to complete the scaling activity in the scaling group after the lifecycle hook times out. If you set the LifecycleActionResult parameter to ABANDON, Auto Scaling stops the scaling activity in the scaling group after the lifecycle hook times out.
    *
    * @param request CompleteLifecycleActionRequest
    * @return CompleteLifecycleActionResponse
   */
  async completeLifecycleAction(request: CompleteLifecycleActionRequest): Promise<CompleteLifecycleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeLifecycleActionWithOptions(request, runtime);
  }

  async createAlarmWithOptions(request: CreateAlarmRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmActions)) {
      query["AlarmActions"] = request.alarmActions;
    }

    if (!Util.isUnset(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effective)) {
      query["Effective"] = request.effective;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.expressions)) {
      query["Expressions"] = request.expressions;
    }

    if (!Util.isUnset(request.expressionsLogicOperator)) {
      query["ExpressionsLogicOperator"] = request.expressionsLogicOperator;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlarmResponse>(await this.callApi(params, req, runtime), new CreateAlarmResponse({}));
  }

  async createAlarm(request: CreateAlarmRequest): Promise<CreateAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlarmWithOptions(request, runtime);
  }

  /**
    * A scaling configuration is a template that is used to create elastic container instances during scale-out activities.
    * You can specify the Cpu and Memory parameters to determine the range of instance types. If you specify the parameters, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Auto Scaling preferentially creates elastic container instances of the instance type that is provided at the lowest price. This scaling mode is available only if Scaling Policy is set to Cost Optimization Policy and no instance type is specified in the scaling configuration.
    *
    * @param request CreateEciScalingConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateEciScalingConfigurationResponse
   */
  async createEciScalingConfigurationWithOptions(request: CreateEciScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateEciScalingConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfos)) {
      query["AcrRegistryInfos"] = request.acrRegistryInfos;
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

    if (!Util.isUnset(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!Util.isUnset(request.containers)) {
      query["Containers"] = request.containers;
    }

    if (!Util.isUnset(request.costOptimization)) {
      query["CostOptimization"] = request.costOptimization;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.cpuOptionsCore)) {
      query["CpuOptionsCore"] = request.cpuOptionsCore;
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

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dnsConfigNameServers)) {
      query["DnsConfigNameServers"] = request.dnsConfigNameServers;
    }

    if (!Util.isUnset(request.dnsConfigOptions)) {
      query["DnsConfigOptions"] = request.dnsConfigOptions;
    }

    if (!Util.isUnset(request.dnsConfigSearchs)) {
      query["DnsConfigSearchs"] = request.dnsConfigSearchs;
    }

    if (!Util.isUnset(request.dnsPolicy)) {
      query["DnsPolicy"] = request.dnsPolicy;
    }

    if (!Util.isUnset(request.egressBandwidth)) {
      query["EgressBandwidth"] = request.egressBandwidth;
    }

    if (!Util.isUnset(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!Util.isUnset(request.enableSls)) {
      query["EnableSls"] = request.enableSls;
    }

    if (!Util.isUnset(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!Util.isUnset(request.hostAliases)) {
      query["HostAliases"] = request.hostAliases;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.imageRegistryCredentials)) {
      query["ImageRegistryCredentials"] = request.imageRegistryCredentials;
    }

    if (!Util.isUnset(request.imageSnapshotId)) {
      query["ImageSnapshotId"] = request.imageSnapshotId;
    }

    if (!Util.isUnset(request.ingressBandwidth)) {
      query["IngressBandwidth"] = request.ingressBandwidth;
    }

    if (!Util.isUnset(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!Util.isUnset(request.instanceFamilyLevel)) {
      query["InstanceFamilyLevel"] = request.instanceFamilyLevel;
    }

    if (!Util.isUnset(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!Util.isUnset(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!Util.isUnset(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.ntpServers)) {
      query["NtpServers"] = request.ntpServers;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!Util.isUnset(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.securityContextSysctls)) {
      query["SecurityContextSysctls"] = request.securityContextSysctls;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!Util.isUnset(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.volumes)) {
      query["Volumes"] = request.volumes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new CreateEciScalingConfigurationResponse({}));
  }

  /**
    * A scaling configuration is a template that is used to create elastic container instances during scale-out activities.
    * You can specify the Cpu and Memory parameters to determine the range of instance types. If you specify the parameters, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Auto Scaling preferentially creates elastic container instances of the instance type that is provided at the lowest price. This scaling mode is available only if Scaling Policy is set to Cost Optimization Policy and no instance type is specified in the scaling configuration.
    *
    * @param request CreateEciScalingConfigurationRequest
    * @return CreateEciScalingConfigurationResponse
   */
  async createEciScalingConfiguration(request: CreateEciScalingConfigurationRequest): Promise<CreateEciScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
    * You can create up to six lifecycle hooks for each scaling group. Elastic Compute Service (ECS) instances are not immediately added to or removed from scaling groups that have effective lifecycle hooks during scaling activities. The ECS instances are added to or removed from the scaling groups only after the lifecycle hooks time out. The period of time before the lifecycle hooks time out is specified by the HeartbeatTimeout parameter. Before lifecycle hooks time out, you can initialize the configurations of ECS instances and query data on the ECS instances.
    * If lifecycle hooks take effect for scale-out activities, the private IP addresses of ECS instances are added to the IP address whitelists of the associated ApsaraDB RDS instances and the ECS instances are added to the backend server groups of the associated Server Load Balancer (SLB) instances only after the lifecycle hooks time out. If lifecycle hooks take effect for scale-in activities, the private IP addresses of ECS instances are removed from the IP address whitelists of the disassociated ApsaraDB RDS instances and the ECS instances are removed from the backend server groups of the disassociated SLB instances only after the lifecycle hooks time out.
    * You can configure a notification method for a lifecycle hook. When the lifecycle hook takes effect, a notification can be sent by using a Message Service (MNS) topic, an MNS queue, or an Operation Orchestration Service (OOS) template. If you want to configure an OOS template, you must create a RAM role for OOS. For more information, see [Grant RAM permissions to OOS](~~120810~~).
    * > If your scaling group contains ECS instances and you configure an OOS template to add the private IP addresses of the ECS instances to or remove the private IP addresses of the ECS instances from the IP address whitelists of cloud databases other than ApsaraDB RDS databases, you must manually add the private IP addresses of the ECS instances to the IP address whitelists of the cloud databases.
    *
    * @param request CreateLifecycleHookRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLifecycleHookResponse
   */
  async createLifecycleHookWithOptions(request: CreateLifecycleHookRequest, runtime: $Util.RuntimeOptions): Promise<CreateLifecycleHookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultResult)) {
      query["DefaultResult"] = request.defaultResult;
    }

    if (!Util.isUnset(request.heartbeatTimeout)) {
      query["HeartbeatTimeout"] = request.heartbeatTimeout;
    }

    if (!Util.isUnset(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!Util.isUnset(request.lifecycleTransition)) {
      query["LifecycleTransition"] = request.lifecycleTransition;
    }

    if (!Util.isUnset(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!Util.isUnset(request.notificationMetadata)) {
      query["NotificationMetadata"] = request.notificationMetadata;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLifecycleHook",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLifecycleHookResponse>(await this.callApi(params, req, runtime), new CreateLifecycleHookResponse({}));
  }

  /**
    * You can create up to six lifecycle hooks for each scaling group. Elastic Compute Service (ECS) instances are not immediately added to or removed from scaling groups that have effective lifecycle hooks during scaling activities. The ECS instances are added to or removed from the scaling groups only after the lifecycle hooks time out. The period of time before the lifecycle hooks time out is specified by the HeartbeatTimeout parameter. Before lifecycle hooks time out, you can initialize the configurations of ECS instances and query data on the ECS instances.
    * If lifecycle hooks take effect for scale-out activities, the private IP addresses of ECS instances are added to the IP address whitelists of the associated ApsaraDB RDS instances and the ECS instances are added to the backend server groups of the associated Server Load Balancer (SLB) instances only after the lifecycle hooks time out. If lifecycle hooks take effect for scale-in activities, the private IP addresses of ECS instances are removed from the IP address whitelists of the disassociated ApsaraDB RDS instances and the ECS instances are removed from the backend server groups of the disassociated SLB instances only after the lifecycle hooks time out.
    * You can configure a notification method for a lifecycle hook. When the lifecycle hook takes effect, a notification can be sent by using a Message Service (MNS) topic, an MNS queue, or an Operation Orchestration Service (OOS) template. If you want to configure an OOS template, you must create a RAM role for OOS. For more information, see [Grant RAM permissions to OOS](~~120810~~).
    * > If your scaling group contains ECS instances and you configure an OOS template to add the private IP addresses of the ECS instances to or remove the private IP addresses of the ECS instances from the IP address whitelists of cloud databases other than ApsaraDB RDS databases, you must manually add the private IP addresses of the ECS instances to the IP address whitelists of the cloud databases.
    *
    * @param request CreateLifecycleHookRequest
    * @return CreateLifecycleHookResponse
   */
  async createLifecycleHook(request: CreateLifecycleHookRequest): Promise<CreateLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLifecycleHookWithOptions(request, runtime);
  }

  /**
    * ## Description
    * You can configure CloudMonitor system events, Message Service (MNS) queues, or MNS topics to receive notifications. When a specified type of scaling activity or resource change occurs in a scaling group, Auto Scaling sends notifications by using CloudMonitor or MNS.
    *
    * @param request CreateNotificationConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNotificationConfigurationResponse
   */
  async createNotificationConfigurationWithOptions(request: CreateNotificationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateNotificationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!Util.isUnset(request.notificationTypes)) {
      query["NotificationTypes"] = request.notificationTypes;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNotificationConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNotificationConfigurationResponse>(await this.callApi(params, req, runtime), new CreateNotificationConfigurationResponse({}));
  }

  /**
    * ## Description
    * You can configure CloudMonitor system events, Message Service (MNS) queues, or MNS topics to receive notifications. When a specified type of scaling activity or resource change occurs in a scaling group, Auto Scaling sends notifications by using CloudMonitor or MNS.
    *
    * @param request CreateNotificationConfigurationRequest
    * @return CreateNotificationConfigurationResponse
   */
  async createNotificationConfiguration(request: CreateNotificationConfigurationRequest): Promise<CreateNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNotificationConfigurationWithOptions(request, runtime);
  }

  /**
    * Auto Scaling automatically creates Elastic Compute Service (ECS) instances based on the specified scaling configuration. ECS instances can be created in the following modes:
    * *   InstancePatternInfos: intelligent configuration mode. In this mode, you need to only specify the number of vCPUs, memory size, instance family, and maximum price. Auto Scaling selects the instance type that has the lowest price based on the configurations to create ECS instances. This mode is available only for scaling groups that reside in virtual private clouds (VPCs). This mode reduces scale-out failures caused by insufficient inventory of instance types.
    * *   InstanceType: In this mode, you must specify one instance type.
    * *   InstanceTypes: In this mode, you can specify more than one instance type.
    * *   InstanceTypeOverrides: In this mode, you can specify multiple instance types and weights for the instance types.
    * *   Cpu and Memory: In this mode, you must specify the number of vCPUs and the memory size. Auto Scaling determines the range of available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling creates ECS instances by using the lowest-priced instance type. This mode is available only if Scaling Policy is set to Cost Optimization Policy and no instance type is specified in the scaling configuration.
    * > You cannot specify InstanceType, InstanceTypes, InstanceTypeOverrides, and Cpu and Memory at the same time. You can specify InstanceType and InstancePatternInfos or specify InstanceTypes and InstancePatternInfo at the same time. If you specify InstanceType and InstancePatternInfos or specify InstanceTypes and InstancePatternInfos at the same time, Auto Scaling preferentially uses the instance types that are specified by InstanceType or InstanceTypes for scale-outs. If the instance types that are specified by InstanceType or InstanceTypes do not have sufficient inventory, Auto Scaling uses the instance types that are specified by InstancePatternInfos for scale-outs.
    *
    * @param tmpReq CreateScalingConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateScalingConfigurationResponse
   */
  async createScalingConfigurationWithOptions(tmpReq: CreateScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateScalingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.schedulerOptions)) {
      request.schedulerOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerOptions, "SchedulerOptions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.affinity)) {
      query["Affinity"] = request.affinity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.creditSpecification)) {
      query["CreditSpecification"] = request.creditSpecification;
    }

    if (!Util.isUnset(request.customPriorities)) {
      query["CustomPriorities"] = request.customPriorities;
    }

    if (!Util.isUnset(request.dataDisks)) {
      query["DataDisks"] = request.dataDisks;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.hpcClusterId)) {
      query["HpcClusterId"] = request.hpcClusterId;
    }

    if (!Util.isUnset(request.imageFamily)) {
      query["ImageFamily"] = request.imageFamily;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instancePatternInfos)) {
      query["InstancePatternInfos"] = request.instancePatternInfos;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.instanceTypeOverrides)) {
      query["InstanceTypeOverrides"] = request.instanceTypeOverrides;
    }

    if (!Util.isUnset(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.internetMaxBandwidthIn)) {
      query["InternetMaxBandwidthIn"] = request.internetMaxBandwidthIn;
    }

    if (!Util.isUnset(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!Util.isUnset(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!Util.isUnset(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
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

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.schedulerOptionsShrink)) {
      query["SchedulerOptions"] = request.schedulerOptionsShrink;
    }

    if (!Util.isUnset(request.securityEnhancementStrategy)) {
      query["SecurityEnhancementStrategy"] = request.securityEnhancementStrategy;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!Util.isUnset(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!Util.isUnset(request.spotInterruptionBehavior)) {
      query["SpotInterruptionBehavior"] = request.spotInterruptionBehavior;
    }

    if (!Util.isUnset(request.spotPriceLimits)) {
      query["SpotPriceLimits"] = request.spotPriceLimits;
    }

    if (!Util.isUnset(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!Util.isUnset(request.storageSetId)) {
      query["StorageSetId"] = request.storageSetId;
    }

    if (!Util.isUnset(request.storageSetPartitionNumber)) {
      query["StorageSetPartitionNumber"] = request.storageSetPartitionNumber;
    }

    if (!Util.isUnset(request.systemDiskCategories)) {
      query["SystemDiskCategories"] = request.systemDiskCategories;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.tenancy)) {
      query["Tenancy"] = request.tenancy;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.imageOptions)) {
      query["ImageOptions"] = request.imageOptions;
    }

    if (!Util.isUnset(request.privatePoolOptions)) {
      query["PrivatePoolOptions"] = request.privatePoolOptions;
    }

    if (!Util.isUnset(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScalingConfigurationResponse>(await this.callApi(params, req, runtime), new CreateScalingConfigurationResponse({}));
  }

  /**
    * Auto Scaling automatically creates Elastic Compute Service (ECS) instances based on the specified scaling configuration. ECS instances can be created in the following modes:
    * *   InstancePatternInfos: intelligent configuration mode. In this mode, you need to only specify the number of vCPUs, memory size, instance family, and maximum price. Auto Scaling selects the instance type that has the lowest price based on the configurations to create ECS instances. This mode is available only for scaling groups that reside in virtual private clouds (VPCs). This mode reduces scale-out failures caused by insufficient inventory of instance types.
    * *   InstanceType: In this mode, you must specify one instance type.
    * *   InstanceTypes: In this mode, you can specify more than one instance type.
    * *   InstanceTypeOverrides: In this mode, you can specify multiple instance types and weights for the instance types.
    * *   Cpu and Memory: In this mode, you must specify the number of vCPUs and the memory size. Auto Scaling determines the range of available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling creates ECS instances by using the lowest-priced instance type. This mode is available only if Scaling Policy is set to Cost Optimization Policy and no instance type is specified in the scaling configuration.
    * > You cannot specify InstanceType, InstanceTypes, InstanceTypeOverrides, and Cpu and Memory at the same time. You can specify InstanceType and InstancePatternInfos or specify InstanceTypes and InstancePatternInfo at the same time. If you specify InstanceType and InstancePatternInfos or specify InstanceTypes and InstancePatternInfos at the same time, Auto Scaling preferentially uses the instance types that are specified by InstanceType or InstanceTypes for scale-outs. If the instance types that are specified by InstanceType or InstanceTypes do not have sufficient inventory, Auto Scaling uses the instance types that are specified by InstancePatternInfos for scale-outs.
    *
    * @param request CreateScalingConfigurationRequest
    * @return CreateScalingConfigurationResponse
   */
  async createScalingConfiguration(request: CreateScalingConfigurationRequest): Promise<CreateScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingConfigurationWithOptions(request, runtime);
  }

  /**
    * A scaling group is a group of Elastic Compute Service (ECS) instances that can be used in similar business scenarios.
    * You can create only a limited number of scaling groups in a region. Go to Quota Center to check the quota of the scaling groups.
    * A scaling group does not immediately take effect after you create the scaling group. You must call the EnableScalingGroup operation to enable the scaling group. After you enable the scaling group, Auto Scaling can execute scaling rules to trigger scaling activities in the scaling group.
    * The Classic Load Balancer (CLB) instances and ApsaraDB RDS instances that you want to associate with a scaling group must reside in the same region as the scaling group. CLB instances are formerly known as Server Load Balancer (SLB) instances. For more information, see the "Regions and zones" topic.
    * If you associate a CLB instance when you create a scaling group, Auto Scaling automatically adds ECS instances in the scaling group to the backend server group of the associated CLB instance. You can specify a server group to which ECS instances can be added. You can add ECS instances to the following types of server groups:
    * *   Default server group: a group of ECS instances that are used to receive requests. If you do not specify a vServer group or a primary/secondary server group for a listener, requests are forwarded to the ECS instances in the default server group.
    * *   vServer group: If you want to forward requests to backend servers that are not in the default server group or configure domain name-based or URL-based forwarding rules, you can use vServer groups.
    * > If you specify the default server group and multiple vServer groups at the same time, ECS instances are added to all specified server groups.
    * The default weight of an ECS instance that is added as a backend server of a CLB instance is 50. The CLB instance that you want to associate with your scaling group must meet the following requirements:
    * *   The CLB instance must be in the Active state. You can call the DescribeLoadBalancers operation to query the state of the CLB instance.
    * *   The health check feature must be enabled on all listener ports that are configured for the CLB instance. Otherwise, the scaling group fails to be created.
    * If you associate an Application Load Balancer (ALB) server group with a scaling group, Auto Scaling automatically adds ECS instances that are in the scaling group to the ALB server group to process requests distributed by the ALB instance to which the ALB server group belongs. You can specify multiple ALB server groups. The server groups must reside in the same virtual private cloud (VPC) as the scaling group. For more information, see the "AttachAlbServerGroups" topic.
    * If you associate an ApsaraDB RDS instance with a scaling group, Auto Scaling automatically adds the private IP addresses of the ECS instances in the scaling group to the IP address whitelist of the ApsaraDB RDS instance. The ApsaraDB RDS instance that you want to associate with your scaling group must meet the following requirements:
    * *   The ApsaraDB RDS instance must be in the Running state. You can call the DescribeDBInstances operation to query the state of the ApsaraDB RDS instance.
    * *   The number of IP addresses in the IP address whitelist of the ApsaraDB RDS instance cannot exceed the upper limit. For more information, see the "Configure whitelists" topic.
    * If you set the MultiAZPolicy parameter of the scaling group to COST_OPTIMIZED, take note of the following items:
    * *   You can use the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, and SpotInstancePools parameters to specify the instance allocation method based on the cost optimization policy. This instance allocation method is prioritized during scaling.
    * *   If you do not specify the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, or SpotInstancePools parameter, the instance types that are provided at the lowest price are used to create instances based on the cost optimization policy.
    * If you set the `Tags.Propagate` parameter of the scaling group to true, the following rules apply:
    * *   Tags that you add to the scaling group cannot be propagated to existing instances in the scaling group. Tags that you add to the scaling group are propagated to only new instances.
    * *   If you specify instance tags in the scaling configuration that is used to create instances and propagate the tags that you add to the scaling group to the instances, all tags exist at the same time.
    * *   If the tag key that you specify in a scaling configuration and the tag key that you add to the scaling group of the scaling configuration are the same, the tag value that you specify in the scaling configuration is preferentially used.
    *
    * @param request CreateScalingGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateScalingGroupResponse
   */
  async createScalingGroupWithOptions(request: CreateScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.albServerGroups)) {
      query["AlbServerGroups"] = request.albServerGroups;
    }

    if (!Util.isUnset(request.allocationStrategy)) {
      query["AllocationStrategy"] = request.allocationStrategy;
    }

    if (!Util.isUnset(request.azBalance)) {
      query["AzBalance"] = request.azBalance;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compensateWithOnDemand)) {
      query["CompensateWithOnDemand"] = request.compensateWithOnDemand;
    }

    if (!Util.isUnset(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!Util.isUnset(request.customPolicyARN)) {
      query["CustomPolicyARN"] = request.customPolicyARN;
    }

    if (!Util.isUnset(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!Util.isUnset(request.defaultCooldown)) {
      query["DefaultCooldown"] = request.defaultCooldown;
    }

    if (!Util.isUnset(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!Util.isUnset(request.groupDeletionProtection)) {
      query["GroupDeletionProtection"] = request.groupDeletionProtection;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckTypes)) {
      query["HealthCheckTypes"] = request.healthCheckTypes;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!Util.isUnset(request.launchTemplateOverrides)) {
      query["LaunchTemplateOverrides"] = request.launchTemplateOverrides;
    }

    if (!Util.isUnset(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!Util.isUnset(request.lifecycleHooks)) {
      query["LifecycleHooks"] = request.lifecycleHooks;
    }

    if (!Util.isUnset(request.loadBalancerConfigs)) {
      query["LoadBalancerConfigs"] = request.loadBalancerConfigs;
    }

    if (!Util.isUnset(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!Util.isUnset(request.maxInstanceLifetime)) {
      query["MaxInstanceLifetime"] = request.maxInstanceLifetime;
    }

    if (!Util.isUnset(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!Util.isUnset(request.minSize)) {
      query["MinSize"] = request.minSize;
    }

    if (!Util.isUnset(request.multiAZPolicy)) {
      query["MultiAZPolicy"] = request.multiAZPolicy;
    }

    if (!Util.isUnset(request.onDemandBaseCapacity)) {
      query["OnDemandBaseCapacity"] = request.onDemandBaseCapacity;
    }

    if (!Util.isUnset(request.onDemandPercentageAboveBaseCapacity)) {
      query["OnDemandPercentageAboveBaseCapacity"] = request.onDemandPercentageAboveBaseCapacity;
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

    if (!Util.isUnset(request.removalPolicies)) {
      query["RemovalPolicies"] = request.removalPolicies;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!Util.isUnset(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!Util.isUnset(request.serverGroups)) {
      query["ServerGroups"] = request.serverGroups;
    }

    if (!Util.isUnset(request.spotAllocationStrategy)) {
      query["SpotAllocationStrategy"] = request.spotAllocationStrategy;
    }

    if (!Util.isUnset(request.spotInstancePools)) {
      query["SpotInstancePools"] = request.spotInstancePools;
    }

    if (!Util.isUnset(request.spotInstanceRemedy)) {
      query["SpotInstanceRemedy"] = request.spotInstanceRemedy;
    }

    if (!Util.isUnset(request.syncAlarmRuleToCms)) {
      query["SyncAlarmRuleToCms"] = request.syncAlarmRuleToCms;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.VServerGroups)) {
      query["VServerGroups"] = request.VServerGroups;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScalingGroupResponse>(await this.callApi(params, req, runtime), new CreateScalingGroupResponse({}));
  }

  /**
    * A scaling group is a group of Elastic Compute Service (ECS) instances that can be used in similar business scenarios.
    * You can create only a limited number of scaling groups in a region. Go to Quota Center to check the quota of the scaling groups.
    * A scaling group does not immediately take effect after you create the scaling group. You must call the EnableScalingGroup operation to enable the scaling group. After you enable the scaling group, Auto Scaling can execute scaling rules to trigger scaling activities in the scaling group.
    * The Classic Load Balancer (CLB) instances and ApsaraDB RDS instances that you want to associate with a scaling group must reside in the same region as the scaling group. CLB instances are formerly known as Server Load Balancer (SLB) instances. For more information, see the "Regions and zones" topic.
    * If you associate a CLB instance when you create a scaling group, Auto Scaling automatically adds ECS instances in the scaling group to the backend server group of the associated CLB instance. You can specify a server group to which ECS instances can be added. You can add ECS instances to the following types of server groups:
    * *   Default server group: a group of ECS instances that are used to receive requests. If you do not specify a vServer group or a primary/secondary server group for a listener, requests are forwarded to the ECS instances in the default server group.
    * *   vServer group: If you want to forward requests to backend servers that are not in the default server group or configure domain name-based or URL-based forwarding rules, you can use vServer groups.
    * > If you specify the default server group and multiple vServer groups at the same time, ECS instances are added to all specified server groups.
    * The default weight of an ECS instance that is added as a backend server of a CLB instance is 50. The CLB instance that you want to associate with your scaling group must meet the following requirements:
    * *   The CLB instance must be in the Active state. You can call the DescribeLoadBalancers operation to query the state of the CLB instance.
    * *   The health check feature must be enabled on all listener ports that are configured for the CLB instance. Otherwise, the scaling group fails to be created.
    * If you associate an Application Load Balancer (ALB) server group with a scaling group, Auto Scaling automatically adds ECS instances that are in the scaling group to the ALB server group to process requests distributed by the ALB instance to which the ALB server group belongs. You can specify multiple ALB server groups. The server groups must reside in the same virtual private cloud (VPC) as the scaling group. For more information, see the "AttachAlbServerGroups" topic.
    * If you associate an ApsaraDB RDS instance with a scaling group, Auto Scaling automatically adds the private IP addresses of the ECS instances in the scaling group to the IP address whitelist of the ApsaraDB RDS instance. The ApsaraDB RDS instance that you want to associate with your scaling group must meet the following requirements:
    * *   The ApsaraDB RDS instance must be in the Running state. You can call the DescribeDBInstances operation to query the state of the ApsaraDB RDS instance.
    * *   The number of IP addresses in the IP address whitelist of the ApsaraDB RDS instance cannot exceed the upper limit. For more information, see the "Configure whitelists" topic.
    * If you set the MultiAZPolicy parameter of the scaling group to COST_OPTIMIZED, take note of the following items:
    * *   You can use the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, and SpotInstancePools parameters to specify the instance allocation method based on the cost optimization policy. This instance allocation method is prioritized during scaling.
    * *   If you do not specify the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, or SpotInstancePools parameter, the instance types that are provided at the lowest price are used to create instances based on the cost optimization policy.
    * If you set the `Tags.Propagate` parameter of the scaling group to true, the following rules apply:
    * *   Tags that you add to the scaling group cannot be propagated to existing instances in the scaling group. Tags that you add to the scaling group are propagated to only new instances.
    * *   If you specify instance tags in the scaling configuration that is used to create instances and propagate the tags that you add to the scaling group to the instances, all tags exist at the same time.
    * *   If the tag key that you specify in a scaling configuration and the tag key that you add to the scaling group of the scaling configuration are the same, the tag value that you specify in the scaling configuration is preferentially used.
    *
    * @param request CreateScalingGroupRequest
    * @return CreateScalingGroupResponse
   */
  async createScalingGroup(request: CreateScalingGroupRequest): Promise<CreateScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingGroupWithOptions(request, runtime);
  }

  /**
    * ## Description
    * A scaling rule defines a specific scaling activity, such as adding or removing N instances. If the number of Elastic Compute Service (ECS) instances in a scaling group is less than the minimum number allowed or greater than the maximum number allowed after a scaling rule is executed, Auto Scaling adjusts the number of ECS instances that you want to add or remove. This way, the number of ECS instances can be maintained within the valid range after the scaling rule is executed. The number of ECS instances that is specified in the scaling rule remains unchanged. Example:
    * *   If your scaling group contains two ECS instances and allows up to three ECS instances, only one ECS instance is added to your scaling group after you execute a scale-out rule in which three ECS instances are specified. The number of ECS instances that is specified in the scaling rule remains unchanged.
    * *   If your scaling group contains three ECS instances and requires at least two ECS instances, only one ECS instance is removed from your scaling group after you execute a scale-in rule in which five ECS instances are specified. The number of ECS instances that is specified in the scaling rule remains unchanged.
    * Before you call this operation, take note of the following items:
    * *   If you set the AdjustmentType parameter to TotalCapacity, the number of ECS instances in the scaling group is adjusted to the specified value. The value of the AdjustmentValue parameter must be greater than or equal to 0.
    * *   If you set the AdjustmentType parameter to QuantityChangeInCapacity or PercentChangeInCapacity, a positive value of AdjustmentValue specifies the number of ECS instances that are added to the scaling group, and a negative value of AdjustmentValue specifies the number of ECS instances that are removed from the scaling group.
    * *   If you set the AdjustmentType parameter to PercentChangeInCapacity, Auto Scaling uses the following formula to calculate a value, and then rounds the value to the nearest integer to obtain the number of ECS instances that need to be scaled: Value of TotalCapacity × Value of AdjustmentValue/100.
    * *   If the cooldown time is specified in a scaling rule, the specified time applies to the scaling group after the rule is executed. Otherwise, the value of the DefaultCooldown parameter of the scaling group applies to the scaling group.
    * *   You can create only a limited number of scaling rules for a scaling group. For more information, see the "Limits" topic.
    * *   The unique identifier (ScalingRuleAri) of a scaling rule can be used by the following operations:
    *     *   ExecuteScalingRule: You can call this operation to manually execute a specific scaling rule by setting the ScalingRuleAri parameter to the unique identifier of the scaling rule.
    *     *   CreateScheduledTask: You can call this operation to create a scheduled task for a specific scaling rule by setting the ScheduledAction parameter to the unique identifier of the scaling rule.
    *
    * @param request CreateScalingRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateScalingRuleResponse
   */
  async createScalingRuleWithOptions(request: CreateScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!Util.isUnset(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!Util.isUnset(request.alarmDimensions)) {
      query["AlarmDimensions"] = request.alarmDimensions;
    }

    if (!Util.isUnset(request.cooldown)) {
      query["Cooldown"] = request.cooldown;
    }

    if (!Util.isUnset(request.disableScaleIn)) {
      query["DisableScaleIn"] = request.disableScaleIn;
    }

    if (!Util.isUnset(request.estimatedInstanceWarmup)) {
      query["EstimatedInstanceWarmup"] = request.estimatedInstanceWarmup;
    }

    if (!Util.isUnset(request.initialMaxSize)) {
      query["InitialMaxSize"] = request.initialMaxSize;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.minAdjustmentMagnitude)) {
      query["MinAdjustmentMagnitude"] = request.minAdjustmentMagnitude;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.predictiveScalingMode)) {
      query["PredictiveScalingMode"] = request.predictiveScalingMode;
    }

    if (!Util.isUnset(request.predictiveTaskBufferTime)) {
      query["PredictiveTaskBufferTime"] = request.predictiveTaskBufferTime;
    }

    if (!Util.isUnset(request.predictiveValueBehavior)) {
      query["PredictiveValueBehavior"] = request.predictiveValueBehavior;
    }

    if (!Util.isUnset(request.predictiveValueBuffer)) {
      query["PredictiveValueBuffer"] = request.predictiveValueBuffer;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scaleInEvaluationCount)) {
      query["ScaleInEvaluationCount"] = request.scaleInEvaluationCount;
    }

    if (!Util.isUnset(request.scaleOutEvaluationCount)) {
      query["ScaleOutEvaluationCount"] = request.scaleOutEvaluationCount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    if (!Util.isUnset(request.stepAdjustments)) {
      query["StepAdjustments"] = request.stepAdjustments;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScalingRuleResponse>(await this.callApi(params, req, runtime), new CreateScalingRuleResponse({}));
  }

  /**
    * ## Description
    * A scaling rule defines a specific scaling activity, such as adding or removing N instances. If the number of Elastic Compute Service (ECS) instances in a scaling group is less than the minimum number allowed or greater than the maximum number allowed after a scaling rule is executed, Auto Scaling adjusts the number of ECS instances that you want to add or remove. This way, the number of ECS instances can be maintained within the valid range after the scaling rule is executed. The number of ECS instances that is specified in the scaling rule remains unchanged. Example:
    * *   If your scaling group contains two ECS instances and allows up to three ECS instances, only one ECS instance is added to your scaling group after you execute a scale-out rule in which three ECS instances are specified. The number of ECS instances that is specified in the scaling rule remains unchanged.
    * *   If your scaling group contains three ECS instances and requires at least two ECS instances, only one ECS instance is removed from your scaling group after you execute a scale-in rule in which five ECS instances are specified. The number of ECS instances that is specified in the scaling rule remains unchanged.
    * Before you call this operation, take note of the following items:
    * *   If you set the AdjustmentType parameter to TotalCapacity, the number of ECS instances in the scaling group is adjusted to the specified value. The value of the AdjustmentValue parameter must be greater than or equal to 0.
    * *   If you set the AdjustmentType parameter to QuantityChangeInCapacity or PercentChangeInCapacity, a positive value of AdjustmentValue specifies the number of ECS instances that are added to the scaling group, and a negative value of AdjustmentValue specifies the number of ECS instances that are removed from the scaling group.
    * *   If you set the AdjustmentType parameter to PercentChangeInCapacity, Auto Scaling uses the following formula to calculate a value, and then rounds the value to the nearest integer to obtain the number of ECS instances that need to be scaled: Value of TotalCapacity × Value of AdjustmentValue/100.
    * *   If the cooldown time is specified in a scaling rule, the specified time applies to the scaling group after the rule is executed. Otherwise, the value of the DefaultCooldown parameter of the scaling group applies to the scaling group.
    * *   You can create only a limited number of scaling rules for a scaling group. For more information, see the "Limits" topic.
    * *   The unique identifier (ScalingRuleAri) of a scaling rule can be used by the following operations:
    *     *   ExecuteScalingRule: You can call this operation to manually execute a specific scaling rule by setting the ScalingRuleAri parameter to the unique identifier of the scaling rule.
    *     *   CreateScheduledTask: You can call this operation to create a scheduled task for a specific scaling rule by setting the ScheduledAction parameter to the unique identifier of the scaling rule.
    *
    * @param request CreateScalingRuleRequest
    * @return CreateScalingRuleResponse
   */
  async createScalingRule(request: CreateScalingRuleRequest): Promise<CreateScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  /**
    * *   If a scheduled task fails to trigger a scaling activity due to an ongoing scaling activity in a scaling group or because the scaling group is disabled, the scheduled task is automatically retried during the period that is specified by the LaunchExpirationTime parameter. If the scheduled task still fails to trigger a scaling activity after the period ends, the task is automatically skipped.
    * *   If multiple tasks are scheduled at similar points in time to trigger scaling activities in the same scaling group, the earliest task triggers the scaling activity first. Other tasks trigger scaling activities within their launch expiration time. Only one scaling activity can be triggered in a scaling group at a time.`` If the previous scaling activity is complete and another scheduled task attempts to trigger a scaling activity, Auto Scaling executes the scaling rule that is specified in the scheduled task and then triggers a scaling activity.``
    * *   A scheduled task supports the following scaling methods:
    *     *   `ScheduledAction`: Specify an existing scaling rule that you want Auto Scaling to execute when the scheduled task is triggered.
    *     *   `ScalingGroupId`: Specify the minimum number, maximum number, or expected number of instances for the scaling group for which you created the scheduled task.
    * > You cannot specify the `ScheduledAction` and ScalingGroupId parameters at the same time.
    *
    * @param request CreateScheduledTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateScheduledTaskResponse
   */
  async createScheduledTaskWithOptions(request: CreateScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduledTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!Util.isUnset(request.launchExpirationTime)) {
      query["LaunchExpirationTime"] = request.launchExpirationTime;
    }

    if (!Util.isUnset(request.launchTime)) {
      query["LaunchTime"] = request.launchTime;
    }

    if (!Util.isUnset(request.maxValue)) {
      query["MaxValue"] = request.maxValue;
    }

    if (!Util.isUnset(request.minValue)) {
      query["MinValue"] = request.minValue;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.recurrenceEndTime)) {
      query["RecurrenceEndTime"] = request.recurrenceEndTime;
    }

    if (!Util.isUnset(request.recurrenceType)) {
      query["RecurrenceType"] = request.recurrenceType;
    }

    if (!Util.isUnset(request.recurrenceValue)) {
      query["RecurrenceValue"] = request.recurrenceValue;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scheduledAction)) {
      query["ScheduledAction"] = request.scheduledAction;
    }

    if (!Util.isUnset(request.scheduledTaskName)) {
      query["ScheduledTaskName"] = request.scheduledTaskName;
    }

    if (!Util.isUnset(request.taskEnabled)) {
      query["TaskEnabled"] = request.taskEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScheduledTask",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduledTaskResponse>(await this.callApi(params, req, runtime), new CreateScheduledTaskResponse({}));
  }

  /**
    * *   If a scheduled task fails to trigger a scaling activity due to an ongoing scaling activity in a scaling group or because the scaling group is disabled, the scheduled task is automatically retried during the period that is specified by the LaunchExpirationTime parameter. If the scheduled task still fails to trigger a scaling activity after the period ends, the task is automatically skipped.
    * *   If multiple tasks are scheduled at similar points in time to trigger scaling activities in the same scaling group, the earliest task triggers the scaling activity first. Other tasks trigger scaling activities within their launch expiration time. Only one scaling activity can be triggered in a scaling group at a time.`` If the previous scaling activity is complete and another scheduled task attempts to trigger a scaling activity, Auto Scaling executes the scaling rule that is specified in the scheduled task and then triggers a scaling activity.``
    * *   A scheduled task supports the following scaling methods:
    *     *   `ScheduledAction`: Specify an existing scaling rule that you want Auto Scaling to execute when the scheduled task is triggered.
    *     *   `ScalingGroupId`: Specify the minimum number, maximum number, or expected number of instances for the scaling group for which you created the scheduled task.
    * > You cannot specify the `ScheduledAction` and ScalingGroupId parameters at the same time.
    *
    * @param request CreateScheduledTaskRequest
    * @return CreateScheduledTaskResponse
   */
  async createScheduledTask(request: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduledTaskWithOptions(request, runtime);
  }

  async deactivateScalingConfigurationWithOptions(request: DeactivateScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeactivateScalingConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeactivateScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeactivateScalingConfigurationResponse>(await this.callApi(params, req, runtime), new DeactivateScalingConfigurationResponse({}));
  }

  async deactivateScalingConfiguration(request: DeactivateScalingConfigurationRequest): Promise<DeactivateScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateScalingConfigurationWithOptions(request, runtime);
  }

  async deleteAlarmWithOptions(request: DeleteAlarmRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlarmResponse>(await this.callApi(params, req, runtime), new DeleteAlarmResponse({}));
  }

  async deleteAlarm(request: DeleteAlarmRequest): Promise<DeleteAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlarmWithOptions(request, runtime);
  }

  /**
    * You cannot delete a scaling configuration that is used to create elastic container instances in the following scenarios:
    * *   The scaling configuration is in the Active state.
    * *   The scaling group contains elastic container instances that are created based on the scaling configuration.
    *
    * @param request DeleteEciScalingConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteEciScalingConfigurationResponse
   */
  async deleteEciScalingConfigurationWithOptions(request: DeleteEciScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEciScalingConfigurationResponse> {
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteEciScalingConfigurationResponse({}));
  }

  /**
    * You cannot delete a scaling configuration that is used to create elastic container instances in the following scenarios:
    * *   The scaling configuration is in the Active state.
    * *   The scaling group contains elastic container instances that are created based on the scaling configuration.
    *
    * @param request DeleteEciScalingConfigurationRequest
    * @return DeleteEciScalingConfigurationResponse
   */
  async deleteEciScalingConfiguration(request: DeleteEciScalingConfigurationRequest): Promise<DeleteEciScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEciScalingConfigurationWithOptions(request, runtime);
  }

  async deleteLifecycleHookWithOptions(request: DeleteLifecycleHookRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLifecycleHookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lifecycleHookId)) {
      query["LifecycleHookId"] = request.lifecycleHookId;
    }

    if (!Util.isUnset(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLifecycleHook",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLifecycleHookResponse>(await this.callApi(params, req, runtime), new DeleteLifecycleHookResponse({}));
  }

  async deleteLifecycleHook(request: DeleteLifecycleHookRequest): Promise<DeleteLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLifecycleHookWithOptions(request, runtime);
  }

  async deleteNotificationConfigurationWithOptions(request: DeleteNotificationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNotificationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNotificationConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNotificationConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteNotificationConfigurationResponse({}));
  }

  async deleteNotificationConfiguration(request: DeleteNotificationConfigurationRequest): Promise<DeleteNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNotificationConfigurationWithOptions(request, runtime);
  }

  /**
    * You cannot delete a scaling configuration in one of the following scenarios:
    * *   The scaling configuration in your scaling group is in the Active state.
    * *   The scaling group contains ECS instances that were created based on the scaling configuration.
    *
    * @param request DeleteScalingConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteScalingConfigurationResponse
   */
  async deleteScalingConfigurationWithOptions(request: DeleteScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScalingConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteScalingConfigurationResponse({}));
  }

  /**
    * You cannot delete a scaling configuration in one of the following scenarios:
    * *   The scaling configuration in your scaling group is in the Active state.
    * *   The scaling group contains ECS instances that were created based on the scaling configuration.
    *
    * @param request DeleteScalingConfigurationRequest
    * @return DeleteScalingConfigurationResponse
   */
  async deleteScalingConfiguration(request: DeleteScalingConfigurationRequest): Promise<DeleteScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingConfigurationWithOptions(request, runtime);
  }

  async deleteScalingGroupWithOptions(request: DeleteScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceDelete)) {
      query["ForceDelete"] = request.forceDelete;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScalingGroupResponse>(await this.callApi(params, req, runtime), new DeleteScalingGroupResponse({}));
  }

  async deleteScalingGroup(request: DeleteScalingGroupRequest): Promise<DeleteScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingGroupWithOptions(request, runtime);
  }

  async deleteScalingRuleWithOptions(request: DeleteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingRuleResponse> {
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScalingRuleResponse>(await this.callApi(params, req, runtime), new DeleteScalingRuleResponse({}));
  }

  async deleteScalingRule(request: DeleteScalingRuleRequest): Promise<DeleteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingRuleWithOptions(request, runtime);
  }

  async deleteScheduledTaskWithOptions(request: DeleteScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduledTaskResponse> {
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scheduledTaskId)) {
      query["ScheduledTaskId"] = request.scheduledTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScheduledTask",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduledTaskResponse>(await this.callApi(params, req, runtime), new DeleteScheduledTaskResponse({}));
  }

  async deleteScheduledTask(request: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduledTaskWithOptions(request, runtime);
  }

  async describeAlarmsWithOptions(request: DescribeAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!Util.isUnset(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlarms",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlarmsResponse>(await this.callApi(params, req, runtime), new DescribeAlarmsResponse({}));
  }

  async describeAlarms(request: DescribeAlarmsRequest): Promise<DescribeAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmsWithOptions(request, runtime);
  }

  async describeEciScalingConfigurationsWithOptions(request: DescribeEciScalingConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEciScalingConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingConfigurationIds)) {
      query["ScalingConfigurationIds"] = request.scalingConfigurationIds;
    }

    if (!Util.isUnset(request.scalingConfigurationNames)) {
      query["ScalingConfigurationNames"] = request.scalingConfigurationNames;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEciScalingConfigurations",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEciScalingConfigurationsResponse>(await this.callApi(params, req, runtime), new DescribeEciScalingConfigurationsResponse({}));
  }

  async describeEciScalingConfigurations(request: DescribeEciScalingConfigurationsRequest): Promise<DescribeEciScalingConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEciScalingConfigurationsWithOptions(request, runtime);
  }

  /**
    * If a scaling activity is executed and a lifecycle hook is created for the scaling activity, the lifecycle hook triggers a lifecycle action. A lifecycle action can be in one of the following states:
    * *   If a lifecycle action is in the Pending state, Elastic Compute Service (ECS) instances are waiting to be added to a scaling group or waiting to be removed from a scaling group.
    * *   If a lifecycle action is in the Timeout state, the lifecycle hook that triggers the lifecycle action expires and ECS instances are added to or removed from a scaling group.
    * *   If a lifecycle action is in the Completed state, you manually end the lifecycle hook that triggers the lifecycle action ahead of schedule.
    * If you do not specify the action to perform, such as execute a specific OOS template, after a lifecycle hook ends, you can call this operation to obtain the token of the lifecycle action that corresponds to the lifecycle hook. Then, you can specify a custom action to perform after the lifecycle hook ends.
    *
    * @param request DescribeLifecycleActionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeLifecycleActionsResponse
   */
  async describeLifecycleActionsWithOptions(request: DescribeLifecycleActionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLifecycleActionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lifecycleActionStatus)) {
      query["LifecycleActionStatus"] = request.lifecycleActionStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    if (!Util.isUnset(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLifecycleActions",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLifecycleActionsResponse>(await this.callApi(params, req, runtime), new DescribeLifecycleActionsResponse({}));
  }

  /**
    * If a scaling activity is executed and a lifecycle hook is created for the scaling activity, the lifecycle hook triggers a lifecycle action. A lifecycle action can be in one of the following states:
    * *   If a lifecycle action is in the Pending state, Elastic Compute Service (ECS) instances are waiting to be added to a scaling group or waiting to be removed from a scaling group.
    * *   If a lifecycle action is in the Timeout state, the lifecycle hook that triggers the lifecycle action expires and ECS instances are added to or removed from a scaling group.
    * *   If a lifecycle action is in the Completed state, you manually end the lifecycle hook that triggers the lifecycle action ahead of schedule.
    * If you do not specify the action to perform, such as execute a specific OOS template, after a lifecycle hook ends, you can call this operation to obtain the token of the lifecycle action that corresponds to the lifecycle hook. Then, you can specify a custom action to perform after the lifecycle hook ends.
    *
    * @param request DescribeLifecycleActionsRequest
    * @return DescribeLifecycleActionsResponse
   */
  async describeLifecycleActions(request: DescribeLifecycleActionsRequest): Promise<DescribeLifecycleActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLifecycleActionsWithOptions(request, runtime);
  }

  async describeLifecycleHooksWithOptions(request: DescribeLifecycleHooksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLifecycleHooksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lifecycleHookIds)) {
      query["LifecycleHookIds"] = request.lifecycleHookIds;
    }

    if (!Util.isUnset(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLifecycleHooks",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLifecycleHooksResponse>(await this.callApi(params, req, runtime), new DescribeLifecycleHooksResponse({}));
  }

  async describeLifecycleHooks(request: DescribeLifecycleHooksRequest): Promise<DescribeLifecycleHooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLifecycleHooksWithOptions(request, runtime);
  }

  async describeLimitationWithOptions(request: DescribeLimitationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLimitationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLimitation",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLimitationResponse>(await this.callApi(params, req, runtime), new DescribeLimitationResponse({}));
  }

  async describeLimitation(request: DescribeLimitationRequest): Promise<DescribeLimitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLimitationWithOptions(request, runtime);
  }

  async describeNotificationConfigurationsWithOptions(request: DescribeNotificationConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNotificationConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNotificationConfigurations",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNotificationConfigurationsResponse>(await this.callApi(params, req, runtime), new DescribeNotificationConfigurationsResponse({}));
  }

  async describeNotificationConfigurations(request: DescribeNotificationConfigurationsRequest): Promise<DescribeNotificationConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationConfigurationsWithOptions(request, runtime);
  }

  async describeNotificationTypesWithOptions(request: DescribeNotificationTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNotificationTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNotificationTypes",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNotificationTypesResponse>(await this.callApi(params, req, runtime), new DescribeNotificationTypesResponse({}));
  }

  async describeNotificationTypes(request: DescribeNotificationTypesRequest): Promise<DescribeNotificationTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationTypesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      version: "2022-02-22",
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

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * You can specify a scaling group ID to query all scaling activities in the scaling group.
    * You can filter query results based on the status of scaling activities.
    * You can query scaling activities that are executed in the previous 30 days.
    *
    * @param request DescribeScalingActivitiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeScalingActivitiesResponse
   */
  async describeScalingActivitiesWithOptions(request: DescribeScalingActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingActivitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingActivityIds)) {
      query["ScalingActivityIds"] = request.scalingActivityIds;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingActivities",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingActivitiesResponse>(await this.callApi(params, req, runtime), new DescribeScalingActivitiesResponse({}));
  }

  /**
    * You can specify a scaling group ID to query all scaling activities in the scaling group.
    * You can filter query results based on the status of scaling activities.
    * You can query scaling activities that are executed in the previous 30 days.
    *
    * @param request DescribeScalingActivitiesRequest
    * @return DescribeScalingActivitiesResponse
   */
  async describeScalingActivities(request: DescribeScalingActivitiesRequest): Promise<DescribeScalingActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivitiesWithOptions(request, runtime);
  }

  async describeScalingActivityDetailWithOptions(request: DescribeScalingActivityDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingActivityDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingActivityDetail",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingActivityDetailResponse>(await this.callApi(params, req, runtime), new DescribeScalingActivityDetailResponse({}));
  }

  async describeScalingActivityDetail(request: DescribeScalingActivityDetailRequest): Promise<DescribeScalingActivityDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivityDetailWithOptions(request, runtime);
  }

  async describeScalingConfigurationsWithOptions(request: DescribeScalingConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingConfigurationIds)) {
      query["ScalingConfigurationIds"] = request.scalingConfigurationIds;
    }

    if (!Util.isUnset(request.scalingConfigurationNames)) {
      query["ScalingConfigurationNames"] = request.scalingConfigurationNames;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingConfigurations",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingConfigurationsResponse>(await this.callApi(params, req, runtime), new DescribeScalingConfigurationsResponse({}));
  }

  async describeScalingConfigurations(request: DescribeScalingConfigurationsRequest): Promise<DescribeScalingConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingConfigurationsWithOptions(request, runtime);
  }

  async describeScalingGroupsWithOptions(request: DescribeScalingGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingGroupIds)) {
      query["ScalingGroupIds"] = request.scalingGroupIds;
    }

    if (!Util.isUnset(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!Util.isUnset(request.scalingGroupNames)) {
      query["ScalingGroupNames"] = request.scalingGroupNames;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingGroupsResponse>(await this.callApi(params, req, runtime), new DescribeScalingGroupsResponse({}));
  }

  async describeScalingGroups(request: DescribeScalingGroupsRequest): Promise<DescribeScalingGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupsWithOptions(request, runtime);
  }

  async describeScalingInstancesWithOptions(request: DescribeScalingInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.creationType)) {
      query["CreationType"] = request.creationType;
    }

    if (!Util.isUnset(request.creationTypes)) {
      query["CreationTypes"] = request.creationTypes;
    }

    if (!Util.isUnset(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.lifecycleState)) {
      query["LifecycleState"] = request.lifecycleState;
    }

    if (!Util.isUnset(request.lifecycleStates)) {
      query["LifecycleStates"] = request.lifecycleStates;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingInstancesResponse>(await this.callApi(params, req, runtime), new DescribeScalingInstancesResponse({}));
  }

  async describeScalingInstances(request: DescribeScalingInstancesRequest): Promise<DescribeScalingInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingInstancesWithOptions(request, runtime);
  }

  /**
    * You can specify a scaling group ID to query all scaling rules in the scaling group. You can also specify the scaling rule ID, name, unique identifier, and type in the request parameters as filter conditions.
    *
    * @param request DescribeScalingRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeScalingRulesResponse
   */
  async describeScalingRulesWithOptions(request: DescribeScalingRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scalingRuleAris)) {
      query["ScalingRuleAris"] = request.scalingRuleAris;
    }

    if (!Util.isUnset(request.scalingRuleIds)) {
      query["ScalingRuleIds"] = request.scalingRuleIds;
    }

    if (!Util.isUnset(request.scalingRuleNames)) {
      query["ScalingRuleNames"] = request.scalingRuleNames;
    }

    if (!Util.isUnset(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    if (!Util.isUnset(request.showAlarmRules)) {
      query["ShowAlarmRules"] = request.showAlarmRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingRules",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingRulesResponse>(await this.callApi(params, req, runtime), new DescribeScalingRulesResponse({}));
  }

  /**
    * You can specify a scaling group ID to query all scaling rules in the scaling group. You can also specify the scaling rule ID, name, unique identifier, and type in the request parameters as filter conditions.
    *
    * @param request DescribeScalingRulesRequest
    * @return DescribeScalingRulesResponse
   */
  async describeScalingRules(request: DescribeScalingRulesRequest): Promise<DescribeScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingRulesWithOptions(request, runtime);
  }

  async describeScheduledTasksWithOptions(request: DescribeScheduledTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduledTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scheduledActions)) {
      query["ScheduledActions"] = request.scheduledActions;
    }

    if (!Util.isUnset(request.scheduledTaskIds)) {
      query["ScheduledTaskIds"] = request.scheduledTaskIds;
    }

    if (!Util.isUnset(request.scheduledTaskNames)) {
      query["ScheduledTaskNames"] = request.scheduledTaskNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScheduledTasks",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScheduledTasksResponse>(await this.callApi(params, req, runtime), new DescribeScheduledTasksResponse({}));
  }

  async describeScheduledTasks(request: DescribeScheduledTasksRequest): Promise<DescribeScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduledTasksWithOptions(request, runtime);
  }

  async detachAlbServerGroupsWithOptions(request: DetachAlbServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DetachAlbServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.albServerGroups)) {
      query["AlbServerGroups"] = request.albServerGroups;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachAlbServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachAlbServerGroupsResponse>(await this.callApi(params, req, runtime), new DetachAlbServerGroupsResponse({}));
  }

  async detachAlbServerGroups(request: DetachAlbServerGroupsRequest): Promise<DetachAlbServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAlbServerGroupsWithOptions(request, runtime);
  }

  async detachDBInstancesWithOptions(request: DetachDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DetachDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
    }

    if (!Util.isUnset(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachDBInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachDBInstancesResponse>(await this.callApi(params, req, runtime), new DetachDBInstancesResponse({}));
  }

  async detachDBInstances(request: DetachDBInstancesRequest): Promise<DetachDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDBInstancesWithOptions(request, runtime);
  }

  /**
    * After ECS instances or elastic container instances are removed from a scaling group, you can call the AttachInstances operation to add the ECS instances or elastic container instances that are removed from the scaling group to other scaling groups.
    * After you remove an ECS instance or elastic container instance by calling the DetachInstances operation, the instance is not stopped or released.
    * Before you call this operation, make sure that the following conditions are met:
    * *   The specified scaling group is enabled.
    * *   No scaling activities in the specified scaling group are in progress.
    * > If no scaling activities in the specified scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * A successful call indicates only that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity based on the value of the ScalingActivityId parameter in the response.
    * The number of ECS instances or elastic container instances in a scaling group after you remove a specific number of instances from the scaling group must be equal to or greater than the value of the MinSize parameter. Otherwise, an error is reported when you call the DetachInstances operation.
    *
    * @param request DetachInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachInstancesResponse
   */
  async detachInstancesWithOptions(request: DetachInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DetachInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.decreaseDesiredCapacity)) {
      query["DecreaseDesiredCapacity"] = request.decreaseDesiredCapacity;
    }

    if (!Util.isUnset(request.detachOption)) {
      query["DetachOption"] = request.detachOption;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.lifecycleHook)) {
      query["LifecycleHook"] = request.lifecycleHook;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachInstancesResponse>(await this.callApi(params, req, runtime), new DetachInstancesResponse({}));
  }

  /**
    * After ECS instances or elastic container instances are removed from a scaling group, you can call the AttachInstances operation to add the ECS instances or elastic container instances that are removed from the scaling group to other scaling groups.
    * After you remove an ECS instance or elastic container instance by calling the DetachInstances operation, the instance is not stopped or released.
    * Before you call this operation, make sure that the following conditions are met:
    * *   The specified scaling group is enabled.
    * *   No scaling activities in the specified scaling group are in progress.
    * > If no scaling activities in the specified scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * A successful call indicates only that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity based on the value of the ScalingActivityId parameter in the response.
    * The number of ECS instances or elastic container instances in a scaling group after you remove a specific number of instances from the scaling group must be equal to or greater than the value of the MinSize parameter. Otherwise, an error is reported when you call the DetachInstances operation.
    *
    * @param request DetachInstancesRequest
    * @return DetachInstancesResponse
   */
  async detachInstances(request: DetachInstancesRequest): Promise<DetachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachInstancesWithOptions(request, runtime);
  }

  async detachLoadBalancersWithOptions(request: DetachLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<DetachLoadBalancersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
    }

    if (!Util.isUnset(request.loadBalancers)) {
      query["LoadBalancers"] = request.loadBalancers;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachLoadBalancers",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachLoadBalancersResponse>(await this.callApi(params, req, runtime), new DetachLoadBalancersResponse({}));
  }

  async detachLoadBalancers(request: DetachLoadBalancersRequest): Promise<DetachLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLoadBalancersWithOptions(request, runtime);
  }

  async detachServerGroupsWithOptions(request: DetachServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DetachServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.serverGroups)) {
      query["ServerGroups"] = request.serverGroups;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachServerGroupsResponse>(await this.callApi(params, req, runtime), new DetachServerGroupsResponse({}));
  }

  async detachServerGroups(request: DetachServerGroupsRequest): Promise<DetachServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachServerGroupsWithOptions(request, runtime);
  }

  /**
    * You can use the following parameters to specify the vServer groups that you want to detach from your scaling group.
    * *   LoadBalancerId: the ID of the Classic Load Balancer (CLB) instance.
    * *   VServerGroupId: the ID of the vServer group.
    * *   Port: the port number of the vServer group.
    * If the vServer group that is specified in this call matches the vServer group associated with your scaling group, the vServer group can be detached. Otherwise, the request for detaching the vServer group is ignored, and no error is reported.
    *
    * @param request DetachVServerGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachVServerGroupsResponse
   */
  async detachVServerGroupsWithOptions(request: DetachVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DetachVServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.VServerGroups)) {
      query["VServerGroups"] = request.VServerGroups;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachVServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachVServerGroupsResponse>(await this.callApi(params, req, runtime), new DetachVServerGroupsResponse({}));
  }

  /**
    * You can use the following parameters to specify the vServer groups that you want to detach from your scaling group.
    * *   LoadBalancerId: the ID of the Classic Load Balancer (CLB) instance.
    * *   VServerGroupId: the ID of the vServer group.
    * *   Port: the port number of the vServer group.
    * If the vServer group that is specified in this call matches the vServer group associated with your scaling group, the vServer group can be detached. Otherwise, the request for detaching the vServer group is ignored, and no error is reported.
    *
    * @param request DetachVServerGroupsRequest
    * @return DetachVServerGroupsResponse
   */
  async detachVServerGroups(request: DetachVServerGroupsRequest): Promise<DetachVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachVServerGroupsWithOptions(request, runtime);
  }

  async disableAlarmWithOptions(request: DisableAlarmRequest, runtime: $Util.RuntimeOptions): Promise<DisableAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAlarmResponse>(await this.callApi(params, req, runtime), new DisableAlarmResponse({}));
  }

  async disableAlarm(request: DisableAlarmRequest): Promise<DisableAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAlarmWithOptions(request, runtime);
  }

  async disableScalingGroupWithOptions(request: DisableScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<DisableScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableScalingGroupResponse>(await this.callApi(params, req, runtime), new DisableScalingGroupResponse({}));
  }

  async disableScalingGroup(request: DisableScalingGroupRequest): Promise<DisableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableScalingGroupWithOptions(request, runtime);
  }

  async enableAlarmWithOptions(request: EnableAlarmRequest, runtime: $Util.RuntimeOptions): Promise<EnableAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableAlarmResponse>(await this.callApi(params, req, runtime), new EnableAlarmResponse({}));
  }

  async enableAlarm(request: EnableAlarmRequest): Promise<EnableAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAlarmWithOptions(request, runtime);
  }

  /**
    * You can call this operation to enable a scaling group that is in the Inactive state and has an instance configuration source. The instance configuration source can be a scaling configuration, a launch template, or an Elastic Compute Service (ECS) instance that you specified when you created the scaling group. If a scaling group is not in the Inactive state or does not have an active instance configuration source, you cannot call this operation to enable the scaling group.
    * > A scaling group can have only one active instance configuration source. When you call this operation to enable a scaling group, you can specify a scaling configuration or a launch template for the scaling group. If an instance configuration source has been configured for the scaling group before you call this operation, the scaling configuration or launch template that you specify in the request overwrites the original scaling configuration or launch template.
    * If you specify a value for the InstanceIds parameter when you call the operation, Auto Scaling checks whether the total number of ECS instances is within the range allowed in the scaling group after you call the operation.
    * *   If the total number of ECS instances is less than the minimum number of instances required in the scaling group after you call the operation, Auto Scaling automatically creates the required number of pay-as-you-go ECS instances and adds the instances to the scaling group to reach the minimum number. For example, if the minimum number of instances required in your scaling group is five, and you specify the InstanceIds parameter to add two ECS instances to the scaling group, Auto Scaling automatically creates three instances in the scaling group after the two instances are added.
    * *   If the value of the TotalCapacity parameter is greater than the value of the MaxSize parameter, the call fails.
    *
    * @param request EnableScalingGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableScalingGroupResponse
   */
  async enableScalingGroupWithOptions(request: EnableScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<EnableScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeScalingConfigurationId)) {
      query["ActiveScalingConfigurationId"] = request.activeScalingConfigurationId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!Util.isUnset(request.launchTemplateOverrides)) {
      query["LaunchTemplateOverrides"] = request.launchTemplateOverrides;
    }

    if (!Util.isUnset(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!Util.isUnset(request.loadBalancerWeights)) {
      query["LoadBalancerWeights"] = request.loadBalancerWeights;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableScalingGroupResponse>(await this.callApi(params, req, runtime), new EnableScalingGroupResponse({}));
  }

  /**
    * You can call this operation to enable a scaling group that is in the Inactive state and has an instance configuration source. The instance configuration source can be a scaling configuration, a launch template, or an Elastic Compute Service (ECS) instance that you specified when you created the scaling group. If a scaling group is not in the Inactive state or does not have an active instance configuration source, you cannot call this operation to enable the scaling group.
    * > A scaling group can have only one active instance configuration source. When you call this operation to enable a scaling group, you can specify a scaling configuration or a launch template for the scaling group. If an instance configuration source has been configured for the scaling group before you call this operation, the scaling configuration or launch template that you specify in the request overwrites the original scaling configuration or launch template.
    * If you specify a value for the InstanceIds parameter when you call the operation, Auto Scaling checks whether the total number of ECS instances is within the range allowed in the scaling group after you call the operation.
    * *   If the total number of ECS instances is less than the minimum number of instances required in the scaling group after you call the operation, Auto Scaling automatically creates the required number of pay-as-you-go ECS instances and adds the instances to the scaling group to reach the minimum number. For example, if the minimum number of instances required in your scaling group is five, and you specify the InstanceIds parameter to add two ECS instances to the scaling group, Auto Scaling automatically creates three instances in the scaling group after the two instances are added.
    * *   If the value of the TotalCapacity parameter is greater than the value of the MaxSize parameter, the call fails.
    *
    * @param request EnableScalingGroupRequest
    * @return EnableScalingGroupResponse
   */
  async enableScalingGroup(request: EnableScalingGroupRequest): Promise<EnableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableScalingGroupWithOptions(request, runtime);
  }

  async enterStandbyWithOptions(request: EnterStandbyRequest, runtime: $Util.RuntimeOptions): Promise<EnterStandbyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnterStandby",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnterStandbyResponse>(await this.callApi(params, req, runtime), new EnterStandbyResponse({}));
  }

  async enterStandby(request: EnterStandbyRequest): Promise<EnterStandbyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enterStandbyWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   The scaling group is in the Active state.
    * *   No scaling activities in the scaling group are in progress.
    * If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the ScalingActivityId parameter in the response.
    * If the addition of a specified number of Elastic Compute Service (ECS) instances to a scaling group causes the total number of ECS instances in the scaling group to exceed the maximum number of instances allowed, Auto Scaling adds only a specific number of ECS instances to ensure that the total number of instances is equal to the maximum number of instances.
    * If the removal of a specified number of ECS instances from a scaling group causes the total number of ECS instances in the scaling group to drop below the minimum number of instances allowed, Auto Scaling removes only a specific number of ECS instances to ensure that the total number of instances is equal to the minimum number of instances.
    * You can specify only a limited number of ECS instances in each adjustment. For more information, see the description of the AdjustmentValue parameter in the CreateScalingRule topic.
    *
    * @param request ExecuteScalingRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExecuteScalingRuleResponse
   */
  async executeScalingRuleWithOptions(request: ExecuteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteScalingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.breachThreshold)) {
      query["BreachThreshold"] = request.breachThreshold;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.metricValue)) {
      query["MetricValue"] = request.metricValue;
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

    if (!Util.isUnset(request.scalingRuleAri)) {
      query["ScalingRuleAri"] = request.scalingRuleAri;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteScalingRuleResponse>(await this.callApi(params, req, runtime), new ExecuteScalingRuleResponse({}));
  }

  /**
    * Before you call this operation, take note of the following items:
    * *   The scaling group is in the Active state.
    * *   No scaling activities in the scaling group are in progress.
    * If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the ScalingActivityId parameter in the response.
    * If the addition of a specified number of Elastic Compute Service (ECS) instances to a scaling group causes the total number of ECS instances in the scaling group to exceed the maximum number of instances allowed, Auto Scaling adds only a specific number of ECS instances to ensure that the total number of instances is equal to the maximum number of instances.
    * If the removal of a specified number of ECS instances from a scaling group causes the total number of ECS instances in the scaling group to drop below the minimum number of instances allowed, Auto Scaling removes only a specific number of ECS instances to ensure that the total number of instances is equal to the minimum number of instances.
    * You can specify only a limited number of ECS instances in each adjustment. For more information, see the description of the AdjustmentValue parameter in the CreateScalingRule topic.
    *
    * @param request ExecuteScalingRuleRequest
    * @return ExecuteScalingRuleResponse
   */
  async executeScalingRule(request: ExecuteScalingRuleRequest): Promise<ExecuteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeScalingRuleWithOptions(request, runtime);
  }

  async exitStandbyWithOptions(request: ExitStandbyRequest, runtime: $Util.RuntimeOptions): Promise<ExitStandbyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExitStandby",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExitStandbyResponse>(await this.callApi(params, req, runtime), new ExitStandbyResponse({}));
  }

  async exitStandby(request: ExitStandbyRequest): Promise<ExitStandbyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exitStandbyWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2022-02-22",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
    * *   If you set MetricType to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Custom monitoring event-triggered tasks](~~74861~~).
    * *   When you create an event-triggered task, you must specify MetricName, DimensionKey, and DimensionValue to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify the user_id and scaling_group dimensions for an event-triggered task to aggregate monitoring data of all Elastic Compute Service (ECS) instances in a scaling group within an Alibaba Cloud account.
    *     *   If you set MetricType to custom, the valid values are your custom metrics.
    *     *   For information about the metrics that are supported if you set MetricType to system, see [Event-triggered task for system monitoring](~~74854~~).
    * > The user_id and scaling_group dimensions are automatically populated. You need to only specify the device and state dimensions. For more information, see `DimensionKey` and `DimensionValue` in the "Request parameters" section of this topic.
    *
    * @param request ModifyAlarmRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyAlarmResponse
   */
  async modifyAlarmWithOptions(request: ModifyAlarmRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmActions)) {
      query["AlarmActions"] = request.alarmActions;
    }

    if (!Util.isUnset(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!Util.isUnset(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effective)) {
      query["Effective"] = request.effective;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.expressions)) {
      query["Expressions"] = request.expressions;
    }

    if (!Util.isUnset(request.expressionsLogicOperator)) {
      query["ExpressionsLogicOperator"] = request.expressionsLogicOperator;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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

    if (!Util.isUnset(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAlarmResponse>(await this.callApi(params, req, runtime), new ModifyAlarmResponse({}));
  }

  /**
    * *   If you set MetricType to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Custom monitoring event-triggered tasks](~~74861~~).
    * *   When you create an event-triggered task, you must specify MetricName, DimensionKey, and DimensionValue to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify the user_id and scaling_group dimensions for an event-triggered task to aggregate monitoring data of all Elastic Compute Service (ECS) instances in a scaling group within an Alibaba Cloud account.
    *     *   If you set MetricType to custom, the valid values are your custom metrics.
    *     *   For information about the metrics that are supported if you set MetricType to system, see [Event-triggered task for system monitoring](~~74854~~).
    * > The user_id and scaling_group dimensions are automatically populated. You need to only specify the device and state dimensions. For more information, see `DimensionKey` and `DimensionValue` in the "Request parameters" section of this topic.
    *
    * @param request ModifyAlarmRequest
    * @return ModifyAlarmResponse
   */
  async modifyAlarm(request: ModifyAlarmRequest): Promise<ModifyAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAlarmWithOptions(request, runtime);
  }

  /**
    * If you want to change the name of a scaling configuration in a scaling group, make sure that the new name is unique within the scaling group.
    *
    * @param request ModifyEciScalingConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyEciScalingConfigurationResponse
   */
  async modifyEciScalingConfigurationWithOptions(request: ModifyEciScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEciScalingConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acrRegistryInfos)) {
      query["AcrRegistryInfos"] = request.acrRegistryInfos;
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

    if (!Util.isUnset(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!Util.isUnset(request.containers)) {
      query["Containers"] = request.containers;
    }

    if (!Util.isUnset(request.containersUpdateType)) {
      query["ContainersUpdateType"] = request.containersUpdateType;
    }

    if (!Util.isUnset(request.costOptimization)) {
      query["CostOptimization"] = request.costOptimization;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.cpuOptionsCore)) {
      query["CpuOptionsCore"] = request.cpuOptionsCore;
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

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dnsConfigNameServers)) {
      query["DnsConfigNameServers"] = request.dnsConfigNameServers;
    }

    if (!Util.isUnset(request.dnsConfigOptions)) {
      query["DnsConfigOptions"] = request.dnsConfigOptions;
    }

    if (!Util.isUnset(request.dnsConfigSearchs)) {
      query["DnsConfigSearchs"] = request.dnsConfigSearchs;
    }

    if (!Util.isUnset(request.dnsPolicy)) {
      query["DnsPolicy"] = request.dnsPolicy;
    }

    if (!Util.isUnset(request.egressBandwidth)) {
      query["EgressBandwidth"] = request.egressBandwidth;
    }

    if (!Util.isUnset(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!Util.isUnset(request.enableSls)) {
      query["EnableSls"] = request.enableSls;
    }

    if (!Util.isUnset(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!Util.isUnset(request.hostAliases)) {
      query["HostAliases"] = request.hostAliases;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.imageRegistryCredentials)) {
      query["ImageRegistryCredentials"] = request.imageRegistryCredentials;
    }

    if (!Util.isUnset(request.imageSnapshotId)) {
      query["ImageSnapshotId"] = request.imageSnapshotId;
    }

    if (!Util.isUnset(request.ingressBandwidth)) {
      query["IngressBandwidth"] = request.ingressBandwidth;
    }

    if (!Util.isUnset(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!Util.isUnset(request.instanceFamilyLevel)) {
      query["InstanceFamilyLevel"] = request.instanceFamilyLevel;
    }

    if (!Util.isUnset(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!Util.isUnset(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!Util.isUnset(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.ntpServers)) {
      query["NtpServers"] = request.ntpServers;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!Util.isUnset(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!Util.isUnset(request.securityContextSysCtls)) {
      query["SecurityContextSysCtls"] = request.securityContextSysCtls;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!Util.isUnset(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!Util.isUnset(request.volumes)) {
      query["Volumes"] = request.volumes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyEciScalingConfigurationResponse({}));
  }

  /**
    * If you want to change the name of a scaling configuration in a scaling group, make sure that the new name is unique within the scaling group.
    *
    * @param request ModifyEciScalingConfigurationRequest
    * @return ModifyEciScalingConfigurationResponse
   */
  async modifyEciScalingConfiguration(request: ModifyEciScalingConfigurationRequest): Promise<ModifyEciScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
    * You can use one of the following methods to specify the lifecycle hook that you want to modify:
    * *   Specify the lifecycle hook ID by using the LifecycleHookId parameter. When you use this method, the ScalingGroupId and LifecycleHookName parameters are ignored.
    * *   Specify the scaling group ID by using the ScalingGroupId parameter and specify the lifecycle hook name by using the LifecycleHookName parameter.
    *
    * @param request ModifyLifecycleHookRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyLifecycleHookResponse
   */
  async modifyLifecycleHookWithOptions(request: ModifyLifecycleHookRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLifecycleHookResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultResult)) {
      query["DefaultResult"] = request.defaultResult;
    }

    if (!Util.isUnset(request.heartbeatTimeout)) {
      query["HeartbeatTimeout"] = request.heartbeatTimeout;
    }

    if (!Util.isUnset(request.lifecycleHookId)) {
      query["LifecycleHookId"] = request.lifecycleHookId;
    }

    if (!Util.isUnset(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!Util.isUnset(request.lifecycleHookStatus)) {
      query["LifecycleHookStatus"] = request.lifecycleHookStatus;
    }

    if (!Util.isUnset(request.lifecycleTransition)) {
      query["LifecycleTransition"] = request.lifecycleTransition;
    }

    if (!Util.isUnset(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!Util.isUnset(request.notificationMetadata)) {
      query["NotificationMetadata"] = request.notificationMetadata;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLifecycleHook",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLifecycleHookResponse>(await this.callApi(params, req, runtime), new ModifyLifecycleHookResponse({}));
  }

  /**
    * You can use one of the following methods to specify the lifecycle hook that you want to modify:
    * *   Specify the lifecycle hook ID by using the LifecycleHookId parameter. When you use this method, the ScalingGroupId and LifecycleHookName parameters are ignored.
    * *   Specify the scaling group ID by using the ScalingGroupId parameter and specify the lifecycle hook name by using the LifecycleHookName parameter.
    *
    * @param request ModifyLifecycleHookRequest
    * @return ModifyLifecycleHookResponse
   */
  async modifyLifecycleHook(request: ModifyLifecycleHookRequest): Promise<ModifyLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLifecycleHookWithOptions(request, runtime);
  }

  async modifyNotificationConfigurationWithOptions(request: ModifyNotificationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNotificationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!Util.isUnset(request.notificationTypes)) {
      query["NotificationTypes"] = request.notificationTypes;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNotificationConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNotificationConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyNotificationConfigurationResponse({}));
  }

  async modifyNotificationConfiguration(request: ModifyNotificationConfigurationRequest): Promise<ModifyNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNotificationConfigurationWithOptions(request, runtime);
  }

  /**
    * You can change the name of a scaling configuration in a scaling group. The name must be unique within the scaling group.
    *
    * @param tmpReq ModifyScalingConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyScalingConfigurationResponse
   */
  async modifyScalingConfigurationWithOptions(tmpReq: ModifyScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyScalingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.schedulerOptions)) {
      request.schedulerOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerOptions, "SchedulerOptions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.affinity)) {
      query["Affinity"] = request.affinity;
    }

    if (!Util.isUnset(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.creditSpecification)) {
      query["CreditSpecification"] = request.creditSpecification;
    }

    if (!Util.isUnset(request.customPriorities)) {
      query["CustomPriorities"] = request.customPriorities;
    }

    if (!Util.isUnset(request.dataDisks)) {
      query["DataDisks"] = request.dataDisks;
    }

    if (!Util.isUnset(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.hpcClusterId)) {
      query["HpcClusterId"] = request.hpcClusterId;
    }

    if (!Util.isUnset(request.imageFamily)) {
      query["ImageFamily"] = request.imageFamily;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instancePatternInfos)) {
      query["InstancePatternInfos"] = request.instancePatternInfos;
    }

    if (!Util.isUnset(request.instanceTypeOverrides)) {
      query["InstanceTypeOverrides"] = request.instanceTypeOverrides;
    }

    if (!Util.isUnset(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!Util.isUnset(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!Util.isUnset(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!Util.isUnset(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.override)) {
      query["Override"] = request.override;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!Util.isUnset(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!Util.isUnset(request.schedulerOptionsShrink)) {
      query["SchedulerOptions"] = request.schedulerOptionsShrink;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!Util.isUnset(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!Util.isUnset(request.spotInterruptionBehavior)) {
      query["SpotInterruptionBehavior"] = request.spotInterruptionBehavior;
    }

    if (!Util.isUnset(request.spotPriceLimits)) {
      query["SpotPriceLimits"] = request.spotPriceLimits;
    }

    if (!Util.isUnset(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!Util.isUnset(request.storageSetId)) {
      query["StorageSetId"] = request.storageSetId;
    }

    if (!Util.isUnset(request.storageSetPartitionNumber)) {
      query["StorageSetPartitionNumber"] = request.storageSetPartitionNumber;
    }

    if (!Util.isUnset(request.systemDiskCategories)) {
      query["SystemDiskCategories"] = request.systemDiskCategories;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.tenancy)) {
      query["Tenancy"] = request.tenancy;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.imageOptions)) {
      query["ImageOptions"] = request.imageOptions;
    }

    if (!Util.isUnset(request.privatePoolOptions)) {
      query["PrivatePoolOptions"] = request.privatePoolOptions;
    }

    if (!Util.isUnset(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyScalingConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyScalingConfigurationResponse({}));
  }

  /**
    * You can change the name of a scaling configuration in a scaling group. The name must be unique within the scaling group.
    *
    * @param request ModifyScalingConfigurationRequest
    * @return ModifyScalingConfigurationResponse
   */
  async modifyScalingConfiguration(request: ModifyScalingConfigurationRequest): Promise<ModifyScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingConfigurationWithOptions(request, runtime);
  }

  /**
    * *   You cannot call this operation to modify the settings of the following parameters:
    *     *   RegionId
    *     *   LoadBalancerId
    * > If you want to change the CLB instances that are associated with your scaling group, call the AttachLoadBalancers and DetachLoadBalancers operations.
    *     *   DBInstanceId
    *     **
    *     **Note**If you want to change the ApsaraDB RDS instances that are associated with your scaling group, call the AttachDBInstances and DetachDBInstances operations.
    * *   You can modify only scaling groups that are in the Active or Inactive state.
    * *   If you enable a new scaling configuration, Elastic Compute Service (ECS) instances that are created based on the previous scaling configuration still run as expected in the scaling group.
    * *   If the total number of instances in the scaling group is greater than the allowed maximum number after you change the value of the MaxSize parameter, Auto Scaling automatically removes instances from the scaling group to ensure that the number of instances is within the new range.
    * *   If the total number of instances in the scaling group is less than the allowed minimum number after you change the value of the MinSize parameter, Auto Scaling automatically adds instances to the scaling group to ensure that the number of instances is within the new range.
    * *   If the total number of instances in the scaling group does not match the expected number of instances after you change the value of the DesiredCapacity parameter, Auto Scaling automatically adds instances to or removes instances from the scaling group to ensure that the number of instances matches the value of the DesiredCapacity parameter.
    *
    * @param request ModifyScalingGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyScalingGroupResponse
   */
  async modifyScalingGroupWithOptions(request: ModifyScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeScalingConfigurationId)) {
      query["ActiveScalingConfigurationId"] = request.activeScalingConfigurationId;
    }

    if (!Util.isUnset(request.allocationStrategy)) {
      query["AllocationStrategy"] = request.allocationStrategy;
    }

    if (!Util.isUnset(request.azBalance)) {
      query["AzBalance"] = request.azBalance;
    }

    if (!Util.isUnset(request.compensateWithOnDemand)) {
      query["CompensateWithOnDemand"] = request.compensateWithOnDemand;
    }

    if (!Util.isUnset(request.customPolicyARN)) {
      query["CustomPolicyARN"] = request.customPolicyARN;
    }

    if (!Util.isUnset(request.defaultCooldown)) {
      query["DefaultCooldown"] = request.defaultCooldown;
    }

    if (!Util.isUnset(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!Util.isUnset(request.disableDesiredCapacity)) {
      query["DisableDesiredCapacity"] = request.disableDesiredCapacity;
    }

    if (!Util.isUnset(request.groupDeletionProtection)) {
      query["GroupDeletionProtection"] = request.groupDeletionProtection;
    }

    if (!Util.isUnset(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!Util.isUnset(request.healthCheckTypes)) {
      query["HealthCheckTypes"] = request.healthCheckTypes;
    }

    if (!Util.isUnset(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!Util.isUnset(request.launchTemplateOverrides)) {
      query["LaunchTemplateOverrides"] = request.launchTemplateOverrides;
    }

    if (!Util.isUnset(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!Util.isUnset(request.maxInstanceLifetime)) {
      query["MaxInstanceLifetime"] = request.maxInstanceLifetime;
    }

    if (!Util.isUnset(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!Util.isUnset(request.minSize)) {
      query["MinSize"] = request.minSize;
    }

    if (!Util.isUnset(request.multiAZPolicy)) {
      query["MultiAZPolicy"] = request.multiAZPolicy;
    }

    if (!Util.isUnset(request.onDemandBaseCapacity)) {
      query["OnDemandBaseCapacity"] = request.onDemandBaseCapacity;
    }

    if (!Util.isUnset(request.onDemandPercentageAboveBaseCapacity)) {
      query["OnDemandPercentageAboveBaseCapacity"] = request.onDemandPercentageAboveBaseCapacity;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.removalPolicies)) {
      query["RemovalPolicies"] = request.removalPolicies;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!Util.isUnset(request.spotAllocationStrategy)) {
      query["SpotAllocationStrategy"] = request.spotAllocationStrategy;
    }

    if (!Util.isUnset(request.spotInstancePools)) {
      query["SpotInstancePools"] = request.spotInstancePools;
    }

    if (!Util.isUnset(request.spotInstanceRemedy)) {
      query["SpotInstanceRemedy"] = request.spotInstanceRemedy;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyScalingGroupResponse>(await this.callApi(params, req, runtime), new ModifyScalingGroupResponse({}));
  }

  /**
    * *   You cannot call this operation to modify the settings of the following parameters:
    *     *   RegionId
    *     *   LoadBalancerId
    * > If you want to change the CLB instances that are associated with your scaling group, call the AttachLoadBalancers and DetachLoadBalancers operations.
    *     *   DBInstanceId
    *     **
    *     **Note**If you want to change the ApsaraDB RDS instances that are associated with your scaling group, call the AttachDBInstances and DetachDBInstances operations.
    * *   You can modify only scaling groups that are in the Active or Inactive state.
    * *   If you enable a new scaling configuration, Elastic Compute Service (ECS) instances that are created based on the previous scaling configuration still run as expected in the scaling group.
    * *   If the total number of instances in the scaling group is greater than the allowed maximum number after you change the value of the MaxSize parameter, Auto Scaling automatically removes instances from the scaling group to ensure that the number of instances is within the new range.
    * *   If the total number of instances in the scaling group is less than the allowed minimum number after you change the value of the MinSize parameter, Auto Scaling automatically adds instances to the scaling group to ensure that the number of instances is within the new range.
    * *   If the total number of instances in the scaling group does not match the expected number of instances after you change the value of the DesiredCapacity parameter, Auto Scaling automatically adds instances to or removes instances from the scaling group to ensure that the number of instances matches the value of the DesiredCapacity parameter.
    *
    * @param request ModifyScalingGroupRequest
    * @return ModifyScalingGroupResponse
   */
  async modifyScalingGroup(request: ModifyScalingGroupRequest): Promise<ModifyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  async modifyScalingRuleWithOptions(request: ModifyScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!Util.isUnset(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!Util.isUnset(request.alarmDimensions)) {
      query["AlarmDimensions"] = request.alarmDimensions;
    }

    if (!Util.isUnset(request.cooldown)) {
      query["Cooldown"] = request.cooldown;
    }

    if (!Util.isUnset(request.disableScaleIn)) {
      query["DisableScaleIn"] = request.disableScaleIn;
    }

    if (!Util.isUnset(request.estimatedInstanceWarmup)) {
      query["EstimatedInstanceWarmup"] = request.estimatedInstanceWarmup;
    }

    if (!Util.isUnset(request.initialMaxSize)) {
      query["InitialMaxSize"] = request.initialMaxSize;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.minAdjustmentMagnitude)) {
      query["MinAdjustmentMagnitude"] = request.minAdjustmentMagnitude;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.predictiveScalingMode)) {
      query["PredictiveScalingMode"] = request.predictiveScalingMode;
    }

    if (!Util.isUnset(request.predictiveTaskBufferTime)) {
      query["PredictiveTaskBufferTime"] = request.predictiveTaskBufferTime;
    }

    if (!Util.isUnset(request.predictiveValueBehavior)) {
      query["PredictiveValueBehavior"] = request.predictiveValueBehavior;
    }

    if (!Util.isUnset(request.predictiveValueBuffer)) {
      query["PredictiveValueBuffer"] = request.predictiveValueBuffer;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scaleInEvaluationCount)) {
      query["ScaleInEvaluationCount"] = request.scaleInEvaluationCount;
    }

    if (!Util.isUnset(request.scaleOutEvaluationCount)) {
      query["ScaleOutEvaluationCount"] = request.scaleOutEvaluationCount;
    }

    if (!Util.isUnset(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.stepAdjustments)) {
      query["StepAdjustments"] = request.stepAdjustments;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyScalingRuleResponse>(await this.callApi(params, req, runtime), new ModifyScalingRuleResponse({}));
  }

  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  /**
    * You can use the following parameters to specify the scaling method of a scheduled task:
    * *   If you use the `ScheduledAction` parameter, you must select an existing scaling rule for the scheduled task.
    * *   If you use the `ScalingGroupId` parameter, you must specify the minimum number, maximum number, or expected number of instances in the scheduled task.
    * > You cannot specify the `ScheduledAction` and `ScalingGroupId` parameters at the same time.
    *
    * @param request ModifyScheduledTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyScheduledTaskResponse
   */
  async modifyScheduledTaskWithOptions(request: ModifyScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScheduledTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!Util.isUnset(request.launchExpirationTime)) {
      query["LaunchExpirationTime"] = request.launchExpirationTime;
    }

    if (!Util.isUnset(request.launchTime)) {
      query["LaunchTime"] = request.launchTime;
    }

    if (!Util.isUnset(request.maxValue)) {
      query["MaxValue"] = request.maxValue;
    }

    if (!Util.isUnset(request.minValue)) {
      query["MinValue"] = request.minValue;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.recurrenceEndTime)) {
      query["RecurrenceEndTime"] = request.recurrenceEndTime;
    }

    if (!Util.isUnset(request.recurrenceType)) {
      query["RecurrenceType"] = request.recurrenceType;
    }

    if (!Util.isUnset(request.recurrenceValue)) {
      query["RecurrenceValue"] = request.recurrenceValue;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scheduledAction)) {
      query["ScheduledAction"] = request.scheduledAction;
    }

    if (!Util.isUnset(request.scheduledTaskId)) {
      query["ScheduledTaskId"] = request.scheduledTaskId;
    }

    if (!Util.isUnset(request.scheduledTaskName)) {
      query["ScheduledTaskName"] = request.scheduledTaskName;
    }

    if (!Util.isUnset(request.taskEnabled)) {
      query["TaskEnabled"] = request.taskEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScheduledTask",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyScheduledTaskResponse>(await this.callApi(params, req, runtime), new ModifyScheduledTaskResponse({}));
  }

  /**
    * You can use the following parameters to specify the scaling method of a scheduled task:
    * *   If you use the `ScheduledAction` parameter, you must select an existing scaling rule for the scheduled task.
    * *   If you use the `ScalingGroupId` parameter, you must specify the minimum number, maximum number, or expected number of instances in the scheduled task.
    * > You cannot specify the `ScheduledAction` and `ScalingGroupId` parameters at the same time.
    *
    * @param request ModifyScheduledTaskRequest
    * @return ModifyScheduledTaskResponse
   */
  async modifyScheduledTask(request: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScheduledTaskWithOptions(request, runtime);
  }

  async rebalanceInstancesWithOptions(request: RebalanceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RebalanceInstancesResponse> {
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebalanceInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebalanceInstancesResponse>(await this.callApi(params, req, runtime), new RebalanceInstancesResponse({}));
  }

  async rebalanceInstances(request: RebalanceInstancesRequest): Promise<RebalanceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebalanceInstancesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to prolong the length of a lifecycle hook up to 20 times. Take note that the total length of a lifecycle hook cannot exceed 6 hours.
    *
    * @param request RecordLifecycleActionHeartbeatRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RecordLifecycleActionHeartbeatResponse
   */
  async recordLifecycleActionHeartbeatWithOptions(request: RecordLifecycleActionHeartbeatRequest, runtime: $Util.RuntimeOptions): Promise<RecordLifecycleActionHeartbeatResponse> {
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.heartbeatTimeout)) {
      query["heartbeatTimeout"] = request.heartbeatTimeout;
    }

    if (!Util.isUnset(request.lifecycleActionToken)) {
      query["lifecycleActionToken"] = request.lifecycleActionToken;
    }

    if (!Util.isUnset(request.lifecycleHookId)) {
      query["lifecycleHookId"] = request.lifecycleHookId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecordLifecycleActionHeartbeat",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordLifecycleActionHeartbeatResponse>(await this.callApi(params, req, runtime), new RecordLifecycleActionHeartbeatResponse({}));
  }

  /**
    * You can call this operation to prolong the length of a lifecycle hook up to 20 times. Take note that the total length of a lifecycle hook cannot exceed 6 hours.
    *
    * @param request RecordLifecycleActionHeartbeatRequest
    * @return RecordLifecycleActionHeartbeatResponse
   */
  async recordLifecycleActionHeartbeat(request: RecordLifecycleActionHeartbeatRequest): Promise<RecordLifecycleActionHeartbeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordLifecycleActionHeartbeatWithOptions(request, runtime);
  }

  async removeInstancesWithOptions(request: RemoveInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.decreaseDesiredCapacity)) {
      query["DecreaseDesiredCapacity"] = request.decreaseDesiredCapacity;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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

    if (!Util.isUnset(request.removePolicy)) {
      query["RemovePolicy"] = request.removePolicy;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveInstancesResponse>(await this.callApi(params, req, runtime), new RemoveInstancesResponse({}));
  }

  async removeInstances(request: RemoveInstancesRequest): Promise<RemoveInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeInstancesWithOptions(request, runtime);
  }

  async resumeProcessesWithOptions(request: ResumeProcessesRequest, runtime: $Util.RuntimeOptions): Promise<ResumeProcessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processes)) {
      query["Processes"] = request.processes;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeProcesses",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeProcessesResponse>(await this.callApi(params, req, runtime), new ResumeProcessesResponse({}));
  }

  async resumeProcesses(request: ResumeProcessesRequest): Promise<ResumeProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeProcessesWithOptions(request, runtime);
  }

  /**
    * Compared with the ExecuteScalingRule operation, the ScaleWithAdjustment operation does not require a scaling rule to be created in advance. Before you call the ScaleWithAdjustment operation, take note of the following items:
    * *   The following conditions must be met:
    *     *   The scaling group is in the Active state.
    *     *   No scaling activities in the scaling group are in progress.
    * *   If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * *   If the addition of a specified number of Elastic Compute Service (ECS) instances to a scaling group causes the total number of ECS instances in the scaling group to exceed the maximum number of instances allowed, Auto Scaling adds only a specific number of ECS instances to ensure that the total number of instances is equal to the maximum number of instances.
    * *   If the removal of a specified number of ECS instances from a scaling group causes the total number of ECS instances in the scaling group to drop below the minimum number of instances allowed, Auto Scaling removes only a specific number of ECS instances to ensure that the total number of instances is equal to the minimum number of instances.
    * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the `ScalingActivityId` parameter in the response.
    *
    * @param tmpReq ScaleWithAdjustmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ScaleWithAdjustmentResponse
   */
  async scaleWithAdjustmentWithOptions(tmpReq: ScaleWithAdjustmentRequest, runtime: $Util.RuntimeOptions): Promise<ScaleWithAdjustmentResponse> {
    Util.validateModel(tmpReq);
    let request = new ScaleWithAdjustmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.overrides)) {
      request.overridesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.overrides, "Overrides", "json");
    }

    let query = { };
    if (!Util.isUnset(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!Util.isUnset(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.minAdjustmentMagnitude)) {
      query["MinAdjustmentMagnitude"] = request.minAdjustmentMagnitude;
    }

    if (!Util.isUnset(request.overridesShrink)) {
      query["Overrides"] = request.overridesShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.syncActivity)) {
      query["SyncActivity"] = request.syncActivity;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleWithAdjustment",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ScaleWithAdjustmentResponse>(await this.callApi(params, req, runtime), new ScaleWithAdjustmentResponse({}));
  }

  /**
    * Compared with the ExecuteScalingRule operation, the ScaleWithAdjustment operation does not require a scaling rule to be created in advance. Before you call the ScaleWithAdjustment operation, take note of the following items:
    * *   The following conditions must be met:
    *     *   The scaling group is in the Active state.
    *     *   No scaling activities in the scaling group are in progress.
    * *   If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
    * *   If the addition of a specified number of Elastic Compute Service (ECS) instances to a scaling group causes the total number of ECS instances in the scaling group to exceed the maximum number of instances allowed, Auto Scaling adds only a specific number of ECS instances to ensure that the total number of instances is equal to the maximum number of instances.
    * *   If the removal of a specified number of ECS instances from a scaling group causes the total number of ECS instances in the scaling group to drop below the minimum number of instances allowed, Auto Scaling removes only a specific number of ECS instances to ensure that the total number of instances is equal to the minimum number of instances.
    * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the `ScalingActivityId` parameter in the response.
    *
    * @param request ScaleWithAdjustmentRequest
    * @return ScaleWithAdjustmentResponse
   */
  async scaleWithAdjustment(request: ScaleWithAdjustmentRequest): Promise<ScaleWithAdjustmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scaleWithAdjustmentWithOptions(request, runtime);
  }

  async setGroupDeletionProtectionWithOptions(request: SetGroupDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupDeletionProtection)) {
      query["GroupDeletionProtection"] = request.groupDeletionProtection;
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGroupDeletionProtection",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGroupDeletionProtectionResponse>(await this.callApi(params, req, runtime), new SetGroupDeletionProtectionResponse({}));
  }

  async setGroupDeletionProtection(request: SetGroupDeletionProtectionRequest): Promise<SetGroupDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupDeletionProtectionWithOptions(request, runtime);
  }

  /**
    * Configures the health check feature for Elastic Compute Service (ECS) instances.
    *
    * @param request SetInstanceHealthRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetInstanceHealthResponse
   */
  async setInstanceHealthWithOptions(request: SetInstanceHealthRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceHealthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetInstanceHealth",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetInstanceHealthResponse>(await this.callApi(params, req, runtime), new SetInstanceHealthResponse({}));
  }

  /**
    * Configures the health check feature for Elastic Compute Service (ECS) instances.
    *
    * @param request SetInstanceHealthRequest
    * @return SetInstanceHealthResponse
   */
  async setInstanceHealth(request: SetInstanceHealthRequest): Promise<SetInstanceHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceHealthWithOptions(request, runtime);
  }

  /**
    * Puts one or more Elastic Compute Service (ECS) instances into the Protected state.
    *
    * @param request SetInstancesProtectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetInstancesProtectionResponse
   */
  async setInstancesProtectionWithOptions(request: SetInstancesProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetInstancesProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.protectedFromScaleIn)) {
      query["ProtectedFromScaleIn"] = request.protectedFromScaleIn;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetInstancesProtection",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetInstancesProtectionResponse>(await this.callApi(params, req, runtime), new SetInstancesProtectionResponse({}));
  }

  /**
    * Puts one or more Elastic Compute Service (ECS) instances into the Protected state.
    *
    * @param request SetInstancesProtectionRequest
    * @return SetInstancesProtectionResponse
   */
  async setInstancesProtection(request: SetInstancesProtectionRequest): Promise<SetInstancesProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstancesProtectionWithOptions(request, runtime);
  }

  async suspendProcessesWithOptions(request: SuspendProcessesRequest, runtime: $Util.RuntimeOptions): Promise<SuspendProcessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processes)) {
      query["Processes"] = request.processes;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendProcesses",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendProcessesResponse>(await this.callApi(params, req, runtime), new SuspendProcessesResponse({}));
  }

  async suspendProcesses(request: SuspendProcessesRequest): Promise<SuspendProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendProcessesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2022-02-22",
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2022-02-22",
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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async verifyAuthenticationWithOptions(request: VerifyAuthenticationRequest, runtime: $Util.RuntimeOptions): Promise<VerifyAuthenticationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.onlyCheck)) {
      query["OnlyCheck"] = request.onlyCheck;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyAuthentication",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyAuthenticationResponse>(await this.callApi(params, req, runtime), new VerifyAuthenticationResponse({}));
  }

  async verifyAuthentication(request: VerifyAuthenticationRequest): Promise<VerifyAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyAuthenticationWithOptions(request, runtime);
  }

  async verifyUserWithOptions(request: VerifyUserRequest, runtime: $Util.RuntimeOptions): Promise<VerifyUserResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyUser",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyUserResponse>(await this.callApi(params, req, runtime), new VerifyUserResponse({}));
  }

  async verifyUser(request: VerifyUserRequest): Promise<VerifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyUserWithOptions(request, runtime);
  }

}
