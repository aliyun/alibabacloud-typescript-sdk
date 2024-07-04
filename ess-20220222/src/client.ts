// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyEciScalingConfigurationRequest extends $tea.Model {
  content?: string;
  format?: string;
  regionId?: string;
  scalingConfigurationId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      format: 'Format',
      regionId: 'RegionId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      format: 'string',
      regionId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyEciScalingConfigurationResponseBody extends $tea.Model {
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

export class ApplyEciScalingConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyEciScalingConfigurationResponseBody;
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
      body: ApplyEciScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  attachMode?: string;
  clientToken?: string;
  DBInstances?: string[];
  forceAttach?: boolean;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachMode: 'AttachMode',
      clientToken: 'ClientToken',
      DBInstances: 'DBInstances',
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachMode: 'string',
      clientToken: 'string',
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      type: 'string',
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
  dedicatedHostClusterId?: string;
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
  networkInterfaces?: CreateScalingConfigurationRequestNetworkInterfaces[];
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
      dedicatedHostClusterId: 'DedicatedHostClusterId',
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
      networkInterfaces: 'NetworkInterfaces',
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
      dedicatedHostClusterId: 'string',
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
      networkInterfaces: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestNetworkInterfaces },
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
  dedicatedHostClusterId?: string;
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
  networkInterfaces?: CreateScalingConfigurationShrinkRequestNetworkInterfaces[];
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
      dedicatedHostClusterId: 'DedicatedHostClusterId',
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
      networkInterfaces: 'NetworkInterfaces',
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
      dedicatedHostClusterId: 'string',
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
      networkInterfaces: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestNetworkInterfaces },
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
  DBInstances?: CreateScalingGroupRequestDBInstances[];
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
      DBInstances: 'DBInstances',
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
      DBInstances: { 'type': 'array', 'itemType': CreateScalingGroupRequestDBInstances },
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

export class DescribeAlertConfigurationRequest extends $tea.Model {
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

export class DescribeAlertConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  scaleStatuses?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scaleStatuses: 'ScaleStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scaleStatuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertConfigurationResponseBody;
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
      body: DescribeAlertConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationDetailRequest extends $tea.Model {
  outputFormat?: string;
  regionId?: string;
  scalingConfigurationId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      outputFormat: 'OutputFormat',
      regionId: 'RegionId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFormat: 'string',
      regionId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationDetailResponseBody extends $tea.Model {
  output?: string;
  requestId?: string;
  scalingConfiguration?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      scalingConfiguration: 'ScalingConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      scalingConfiguration: DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEciScalingConfigurationDetailResponseBody;
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
      body: DescribeEciScalingConfigurationDetailResponseBody,
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

export class DescribePatternTypesRequest extends $tea.Model {
  architecture?: string[];
  burstablePerformance?: string;
  channelId?: number;
  cores?: number;
  coresList?: number[];
  cpuArchitectures?: string[];
  excludedInstanceType?: string[];
  gpuSpecs?: string[];
  instanceCategories?: string[];
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  maxPrice?: number;
  maximumCpuCoreCount?: number;
  maximumGpuAmount?: number;
  maximumMemorySize?: number;
  memory?: number;
  memoryList?: number[];
  minimumBaselineCredit?: number;
  minimumCpuCoreCount?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  minimumGpuAmount?: number;
  minimumInitialCredit?: number;
  minimumMemorySize?: number;
  physicalProcessorModels?: string[];
  regionId?: string;
  spotStrategy?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      burstablePerformance: 'BurstablePerformance',
      channelId: 'ChannelId',
      cores: 'Cores',
      coresList: 'CoresList',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceType: 'ExcludedInstanceType',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      memoryList: 'MemoryList',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
      regionId: 'RegionId',
      spotStrategy: 'SpotStrategy',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      channelId: 'number',
      cores: 'number',
      coresList: { 'type': 'array', 'itemType': 'number' },
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceType: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      memoryList: { 'type': 'array', 'itemType': 'number' },
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      spotStrategy: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternTypesResponseBody extends $tea.Model {
  patternTypes?: DescribePatternTypesResponseBodyPatternTypes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patternTypes: 'PatternTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patternTypes: { 'type': 'array', 'itemType': DescribePatternTypesResponseBodyPatternTypes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePatternTypesResponseBody;
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
      body: DescribePatternTypesResponseBody,
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

export class DescribeScalingGroupDetailRequest extends $tea.Model {
  outputFormat?: string;
  ownerId?: number;
  regionId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      outputFormat: 'OutputFormat',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFormat: 'string',
      ownerId: 'number',
      regionId: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBody extends $tea.Model {
  output?: string;
  requestId?: string;
  scalingGroup?: DescribeScalingGroupDetailResponseBodyScalingGroup;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      scalingGroup: 'ScalingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      scalingGroup: DescribeScalingGroupDetailResponseBodyScalingGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScalingGroupDetailResponseBody;
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
      body: DescribeScalingGroupDetailResponseBody,
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
  recurrenceType?: string;
  recurrenceValue?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scheduledActions?: string[];
  scheduledTaskIds?: string[];
  scheduledTaskNames?: string[];
  taskEnabled?: boolean;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scheduledActions: 'ScheduledActions',
      scheduledTaskIds: 'ScheduledTaskIds',
      scheduledTaskNames: 'ScheduledTaskNames',
      taskEnabled: 'TaskEnabled',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scheduledActions: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskIds: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskNames: { 'type': 'array', 'itemType': 'string' },
      taskEnabled: 'boolean',
      taskName: 'string',
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
  removeSecurityGroup?: boolean;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstances: 'DBInstances',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeSecurityGroup: 'RemoveSecurityGroup',
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
      removeSecurityGroup: 'boolean',
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
  ignoreInvalidInstance?: boolean;
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
      ignoreInvalidInstance: 'IgnoreInvalidInstance',
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
      ignoreInvalidInstance: 'boolean',
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

export class ModifyAlertConfigurationRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scaleStatuses?: string[];
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scaleStatuses: 'ScaleStatuses',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scaleStatuses: { 'type': 'array', 'itemType': 'string' },
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlertConfigurationResponseBody extends $tea.Model {
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

export class ModifyAlertConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAlertConfigurationResponseBody;
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
      body: ModifyAlertConfigurationResponseBody,
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

export class ModifyInstanceAttributeRequest extends $tea.Model {
  entrusted?: boolean;
  instanceId?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      entrusted: 'Entrusted',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrusted: 'boolean',
      instanceId: 'string',
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

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceAttributeResponseBody;
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
      body: ModifyInstanceAttributeResponseBody,
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
  dedicatedHostClusterId?: string;
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
  networkInterfaces?: ModifyScalingConfigurationRequestNetworkInterfaces[];
  override?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
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
      dedicatedHostClusterId: 'DedicatedHostClusterId',
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
      networkInterfaces: 'NetworkInterfaces',
      override: 'Override',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
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
      dedicatedHostClusterId: 'string',
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
      networkInterfaces: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestNetworkInterfaces },
      override: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
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
  dedicatedHostClusterId?: string;
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
  networkInterfaces?: ModifyScalingConfigurationShrinkRequestNetworkInterfaces[];
  override?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
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
      dedicatedHostClusterId: 'DedicatedHostClusterId',
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
      networkInterfaces: 'NetworkInterfaces',
      override: 'Override',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
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
      dedicatedHostClusterId: 'string',
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
      networkInterfaces: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestNetworkInterfaces },
      override: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
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
  scalingPolicy?: string;
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
      scalingPolicy: 'ScalingPolicy',
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
      scalingPolicy: 'string',
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
  ignoreInvalidInstance?: boolean;
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
      ignoreInvalidInstance: 'IgnoreInvalidInstance',
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
      ignoreInvalidInstance: 'boolean',
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
  activityMetadata?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  clientToken?: string;
  lifecycleHookContext?: ScaleWithAdjustmentRequestLifecycleHookContext;
  minAdjustmentMagnitude?: number;
  overrides?: ScaleWithAdjustmentRequestOverrides;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  syncActivity?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityMetadata: 'ActivityMetadata',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      clientToken: 'ClientToken',
      lifecycleHookContext: 'LifecycleHookContext',
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
      activityMetadata: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      clientToken: 'string',
      lifecycleHookContext: ScaleWithAdjustmentRequestLifecycleHookContext,
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
  activityMetadata?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  clientToken?: string;
  lifecycleHookContextShrink?: string;
  minAdjustmentMagnitude?: number;
  overridesShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  syncActivity?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityMetadata: 'ActivityMetadata',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      clientToken: 'ClientToken',
      lifecycleHookContextShrink: 'LifecycleHookContext',
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
      activityMetadata: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      clientToken: 'string',
      lifecycleHookContextShrink: 'string',
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
  cpuArchitectures?: string[];
  excludedInstanceTypes?: string[];
  gpuSpecs?: string[];
  instanceCategories?: string[];
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  maxPrice?: number;
  maximumCpuCoreCount?: number;
  maximumGpuAmount?: number;
  maximumMemorySize?: number;
  memory?: number;
  minimumBaselineCredit?: number;
  minimumCpuCoreCount?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  minimumGpuAmount?: number;
  minimumInitialCredit?: number;
  minimumMemorySize?: number;
  physicalProcessorModels?: string[];
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
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

export class CreateScalingConfigurationRequestNetworkInterfaces extends $tea.Model {
  instanceType?: string;
  ipv6AddressCount?: number;
  networkInterfaceTrafficMode?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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
  cpuArchitectures?: string[];
  excludedInstanceTypes?: string[];
  gpuSpecs?: string[];
  instanceCategories?: string[];
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  maxPrice?: number;
  maximumCpuCoreCount?: number;
  maximumGpuAmount?: number;
  maximumMemorySize?: number;
  memory?: number;
  minimumBaselineCredit?: number;
  minimumCpuCoreCount?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  minimumGpuAmount?: number;
  minimumInitialCredit?: number;
  minimumMemorySize?: number;
  physicalProcessorModels?: string[];
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
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

export class CreateScalingConfigurationShrinkRequestNetworkInterfaces extends $tea.Model {
  instanceType?: string;
  ipv6AddressCount?: number;
  networkInterfaceTrafficMode?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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

export class CreateScalingGroupRequestDBInstances extends $tea.Model {
  attachMode?: string;
  DBInstanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachMode: 'AttachMode',
      DBInstanceId: 'DBInstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachMode: 'string',
      DBInstanceId: 'string',
      type: 'string',
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersEnvironmentVars extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersPorts extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers extends $tea.Model {
  args?: string[];
  commands?: string[];
  cpu?: number;
  environmentVars?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersEnvironmentVars[];
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
  ports?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersPorts[];
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
  volumeMounts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts[];
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
      environmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersEnvironmentVars },
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
      ports: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersPorts },
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
      volumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainersVolumeMounts },
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers extends $tea.Model {
  cpu?: number;
  gpu?: number;
  image?: string;
  imagePullPolicy?: string;
  initContainerArgs?: string[];
  initContainerCommands?: string[];
  initContainerEnvironmentVars?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars[];
  initContainerPorts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts[];
  initContainerVolumeMounts?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts[];
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
      initContainerEnvironmentVars: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerEnvironmentVars },
      initContainerPorts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerPorts },
      initContainerVolumeMounts: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainersInitContainerVolumeMounts },
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths extends $tea.Model {
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumes extends $tea.Model {
  configFileVolumeConfigFileToPaths?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths[];
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
      configFileVolumeConfigFileToPaths: { 'type': 'array', 'itemType': DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationVolumesConfigFileVolumeConfigFileToPaths },
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

export class DescribeEciScalingConfigurationDetailResponseBodyScalingConfiguration extends $tea.Model {
  acrRegistryInfos?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationAcrRegistryInfos[];
  activeDeadlineSeconds?: number;
  autoCreateEip?: boolean;
  autoMatchImageCache?: boolean;
  computeCategory?: string[];
  containerGroupName?: string;
  containers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationContainers[];
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
  dnsConfigOptions?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationDnsConfigOptions[];
  dnsConfigSearches?: string[];
  dnsPolicy?: string;
  egressBandwidth?: number;
  eipBandwidth?: number;
  eipCommonBandwidthPackage?: string;
  eipISP?: string;
  eipPublicIpAddressPoolId?: string;
  ephemeralStorage?: number;
  hostAliases?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationHostAliases[];
  hostName?: string;
  imageRegistryCredentials?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationImageRegistryCredentials[];
  imageSnapshotId?: string;
  ingressBandwidth?: number;
  initContainers?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationInitContainers[];
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
  securityContextSysCtls?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationSecurityContextSysCtls[];
  securityGroupId?: string;
  slsEnable?: boolean;
  spotPriceLimit?: number;
  spotStrategy?: string;
  tags?: DescribeEciScalingConfigurationDetailResponseBodyScalingConfigurationTags[];
  terminationGracePeriodSeconds?: number;
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

export class DescribePatternTypesResponseBodyPatternTypes extends $tea.Model {
  cores?: number;
  instanceFamilyLevel?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      instanceFamilyLevel: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      memory: 'number',
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

export class DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext extends $tea.Model {
  disableLifecycleHook?: boolean;
  ignoredLifecycleHookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      disableLifecycleHook: 'DisableLifecycleHook',
      ignoredLifecycleHookIds: 'IgnoredLifecycleHookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableLifecycleHook: 'boolean',
      ignoredLifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBodyScalingActivities extends $tea.Model {
  activityMetadata?: string;
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
  lifecycleHookContext?: DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext;
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
  triggerSourceId?: string;
  triggerSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      activityMetadata: 'ActivityMetadata',
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
      lifecycleHookContext: 'LifecycleHookContext',
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
      triggerSourceId: 'TriggerSourceId',
      triggerSourceType: 'TriggerSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityMetadata: 'string',
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
      lifecycleHookContext: DescribeScalingActivitiesResponseBodyScalingActivitiesLifecycleHookContext,
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
      triggerSourceId: 'string',
      triggerSourceType: 'string',
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
  cpuArchitectures?: string[];
  excludedInstanceTypes?: string[];
  gpuSpecs?: string[];
  instanceCategories?: string[];
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  maxPrice?: number;
  maximumCpuCoreCount?: number;
  maximumGpuAmount?: number;
  maximumMemorySize?: number;
  memory?: number;
  minimumBaselineCredit?: number;
  minimumCpuCoreCount?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  minimumGpuAmount?: number;
  minimumInitialCredit?: number;
  minimumMemorySize?: number;
  physicalProcessorModels?: string[];
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces extends $tea.Model {
  instanceType?: string;
  ipv6AddressCount?: number;
  networkInterfaceTrafficMode?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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
  dedicatedHostClusterId?: string;
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
  networkInterfaces?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces[];
  passwordInherit?: boolean;
  passwordSetted?: boolean;
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
      dedicatedHostClusterId: 'DedicatedHostClusterId',
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
      networkInterfaces: 'NetworkInterfaces',
      passwordInherit: 'PasswordInherit',
      passwordSetted: 'PasswordSetted',
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
      dedicatedHostClusterId: 'string',
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
      networkInterfaces: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsNetworkInterfaces },
      passwordInherit: 'boolean',
      passwordSetted: 'boolean',
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups extends $tea.Model {
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides extends $tea.Model {
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs extends $tea.Model {
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups extends $tea.Model {
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupTags extends $tea.Model {
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroupsVServerGroupAttributes extends $tea.Model {
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups extends $tea.Model {
  loadBalancerId?: string;
  VServerGroupAttributes?: DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroupsVServerGroupAttributes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBodyScalingGroup extends $tea.Model {
  activeCapacity?: number;
  activeScalingConfigurationId?: string;
  albServerGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups[];
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
  launchTemplateOverrides?: DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides[];
  launchTemplateVersion?: string;
  lifecycleState?: string;
  loadBalancerConfigs?: DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs[];
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
  serverGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups[];
  spotAllocationStrategy?: string;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  standbyCapacity?: number;
  stoppedCapacity?: number;
  suspendedProcesses?: string[];
  systemSuspended?: boolean;
  tags?: DescribeScalingGroupDetailResponseBodyScalingGroupTags[];
  totalCapacity?: number;
  totalInstanceCount?: number;
  VServerGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups[];
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
      albServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups },
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
      launchTemplateOverrides: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      loadBalancerConfigs: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs },
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
      serverGroups: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups },
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      standbyCapacity: 'number',
      stoppedCapacity: 'number',
      suspendedProcesses: { 'type': 'array', 'itemType': 'string' },
      systemSuspended: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupTags },
      totalCapacity: 'number',
      totalInstanceCount: 'number',
      VServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups },
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
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

export class DescribeScalingGroupsResponseBodyScalingGroupsDBInstances extends $tea.Model {
  DBInstanceId?: string;
  securityGroupIds?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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
  DBInstances?: DescribeScalingGroupsResponseBodyScalingGroupsDBInstances[];
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
      DBInstances: 'DBInstances',
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
      DBInstances: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsDBInstances },
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
  cpuArchitectures?: string[];
  excludedInstanceTypes?: string[];
  gpuSpecs?: string[];
  instanceCategories?: string[];
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  maxPrice?: number;
  maximumCpuCoreCount?: number;
  maximumGpuAmount?: number;
  maximumMemorySize?: number;
  memory?: number;
  minimumBaselineCredit?: number;
  minimumCpuCoreCount?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  minimumGpuAmount?: number;
  minimumInitialCredit?: number;
  minimumMemorySize?: number;
  physicalProcessorModels?: string[];
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyScalingConfigurationRequestNetworkInterfaces extends $tea.Model {
  instanceType?: string;
  ipv6AddressCount?: number;
  networkInterfaceTrafficMode?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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
  cpuArchitectures?: string[];
  excludedInstanceTypes?: string[];
  gpuSpecs?: string[];
  instanceCategories?: string[];
  instanceFamilyLevel?: string;
  instanceTypeFamilies?: string[];
  maxPrice?: number;
  maximumCpuCoreCount?: number;
  maximumGpuAmount?: number;
  maximumMemorySize?: number;
  memory?: number;
  minimumBaselineCredit?: number;
  minimumCpuCoreCount?: number;
  minimumEniIpv6AddressQuantity?: number;
  minimumEniPrivateIpAddressQuantity?: number;
  minimumEniQuantity?: number;
  minimumGpuAmount?: number;
  minimumInitialCredit?: number;
  minimumMemorySize?: number;
  physicalProcessorModels?: string[];
  static names(): { [key: string]: string } {
    return {
      architectures: 'Architectures',
      burstablePerformance: 'BurstablePerformance',
      cores: 'Cores',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceTypes: 'ExcludedInstanceTypes',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectures: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      cores: 'number',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyScalingConfigurationShrinkRequestNetworkInterfaces extends $tea.Model {
  instanceType?: string;
  ipv6AddressCount?: number;
  networkInterfaceTrafficMode?: string;
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      ipv6AddressCount: 'Ipv6AddressCount',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      ipv6AddressCount: 'number',
      networkInterfaceTrafficMode: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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

export class ScaleWithAdjustmentRequestLifecycleHookContext extends $tea.Model {
  disableLifecycleHook?: boolean;
  ignoredLifecycleHookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      disableLifecycleHook: 'DisableLifecycleHook',
      ignoredLifecycleHookIds: 'IgnoredLifecycleHookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableLifecycleHook: 'boolean',
      ignoredLifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
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

  /**
   * @summary Applies a scaling configuration of the Elastic Container Instance type. If you want to create and manage scaling configurations of the Elastic Container Instance type by using a configuration file, you can call the ApplyEciScalingConfiguration operation.
   *
   * @description Before you use a YAML configuration file to manage scaling configurations of the Elastic Container Instance type, you must take note of the following items:
   * *   If you include a scaling configuration ID within your request, the system updates the scaling configuration based on the YAML configuration file.
   * *   If you do not include a scaling configuration ID within your request, the system creates a scaling configuration of the Elastic Container Instance type based on the YAML configuration file.
   *
   * @param request ApplyEciScalingConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ApplyEciScalingConfigurationResponse
   */
  async applyEciScalingConfigurationWithOptions(request: ApplyEciScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ApplyEciScalingConfigurationResponse> {
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
      action: "ApplyEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new ApplyEciScalingConfigurationResponse({}));
  }

  /**
   * @summary Applies a scaling configuration of the Elastic Container Instance type. If you want to create and manage scaling configurations of the Elastic Container Instance type by using a configuration file, you can call the ApplyEciScalingConfiguration operation.
   *
   * @description Before you use a YAML configuration file to manage scaling configurations of the Elastic Container Instance type, you must take note of the following items:
   * *   If you include a scaling configuration ID within your request, the system updates the scaling configuration based on the YAML configuration file.
   * *   If you do not include a scaling configuration ID within your request, the system creates a scaling configuration of the Elastic Container Instance type based on the YAML configuration file.
   *
   * @param request ApplyEciScalingConfigurationRequest
   * @return ApplyEciScalingConfigurationResponse
   */
  async applyEciScalingConfiguration(request: ApplyEciScalingConfigurationRequest): Promise<ApplyEciScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary 基于yaml配置进行弹性伸缩管理
   *
   * @description You can call the ApplyScalingGroup operation to create scaling groups of the Elastic Container Instance type with ease. The resources of the scaling groups are defined in Kubernetes Deployment YAML files. You can also call this operation to extend annotations for elastic container instances in Kubernetes Deployment YAML files. For more information, see "Supported annotations" in this topic.
   * Mapping between YAML files and scaling groups: You can map the triplet of namespace, kind, and name in a YAML file to a scaling group name. A YAML file and a scaling group have a one-to-one mapping relationship in a region. For example, if you use the Kubernetes Deployment YAML file whose name is NGINX in the default namespace to create a scaling group in a region, the unique name of the mapped scaling group is k8s_default_Deployment_nginx.
   * You can use a Kubernetes Deployment YAML file to manage a scaling group based on the following logic:
   * * If an existing scaling group has a mapping relationship with your Kubernetes Deployment YAML file, you can update the scaling group by using the YAML file.
   * * If no scaling group that has a mapping relationship with your Kubernetes Deployment YAML file exists, you can create a scaling group with ease by using the YAML file.
   * ### Precautions
   * 1. If you do not specify a virtual private cloud (VPC), vSwitch, security group, or annotation in your Kubernetes Deployment YAML file, the system creates a default VPC that has default vSwitches and uses the default security group ess-default-sg of Auto Scaling. By default, the security group rule allows traffic on Transmission Control Protocol (TCP)-based port 22 and port 3389 and enables Internet Control Message Protocol (ICMP) for IPv4 addresses. If you want to enable other ports or protocols, you can create custom security group rules.
   * 2. If you want to use a public image, you must enable the Internet access feature and configure the k8s.aliyun.com/eci-with-eip pod annotation to enable the elastic IP address (EIP) feature.
   * 3. After you call the ApplyScalingGroup operation to apply a Kubernetes Deployment YAML file, the scaling group immediately enters the Enabled state and the scaling configuration immediately enters the Active state. If the number of replicas that you specified in the YAML file is grater than 0, elastic container instances are automatically created.
   * ### Supported annotations
   * For more information about annotations, see [ECI Pod Annotation](https://help.aliyun.com/document_detail/186939.html).
   * |Annotation|Example|Description|
   * |---|---|---|
   * |k8s.aliyun.com/ess-scaling-group-min-size|1|The minimum size of the scaling group that you want to create. Default value: 0.|
   * |k8s.aliyun.com/ess-scaling-group-max-size|20|The maximum size of the scaling group that you want to create. Default value: maximum number of replicas or 30, whichever is greater.|
   * |k8s.aliyun.com/eci-ntp-server|100.100.*.*|The IP address of the Network Time Protocol (NTP) server.|
   * |k8s.aliyun.com/eci-use-specs|2-4Gi|The specifications of 2 vCPUs and 4 GB memory. For more information, see [Create pods by specifying multiple specifications](https://help.aliyun.com/document_detail/451267.html).|
   * |k8s.aliyun.com/eci-vswitch|vsw-bp1xpiowfm5vo8o3c\\*\\*\\*\\*|The ID of the vSwitch. You can specify multiple vSwitches to specify multiple zones.|
   * |k8s.aliyun.com/eci-security-group|sg-bp1dktddjsg5nktv\\*\\*\\*\\*|The ID of the security group. Before you configure this annotation, take note of the following requirements:<ul data-sourcepos="26:74-26:168"><li data-sourcepos="26:78-26:114">You can specify one or more security groups. You can specify up to five security groups for each scaling group.</li><li data-sourcepos="26:114-26:140">If you specify multiple security groups, the security groups must belong to the same VPC.</li><li data-sourcepos="26:140-26:163">If you specify multiple security groups, the security groups must be of the same type.</li></ul>|
   * |k8s.aliyun.com/eci-sls-enable|"false"|If you set the value to false, the log collection feature is disabled.
   * If you do not want to use Custom Resource Definition (CRD) for Simple Log Service to collect logs of specific pods, you can configure this annotation for the pods and set the value to false. This prevents resource wastes caused by Logtails created by the system.|
   * |k8s.aliyun.com/eci-spot-strategy|SpotAsPriceGo|The bidding policy for the preemptible instance. Valid values:<ul data-sourcepos="28:69-28:204"><li data-sourcepos="28:73-28:158">SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price If you set the value to SpotWithPriceLimit, you must configure the k8s.aliyun.com/eci-spot-price-limit annotation.</li><li data-sourcepos="28:158-28:199">SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is used as the bid price.</li></ul>|
   * |k8s.aliyun.com/eci-spot-price-limit|"0.5"|The maximum hourly price of the preemptible instance. This value can be accurate to up to three decimal places.
   * This annotation takes effect only when you set the k8s.aliyun.com/eci-spot-strategy annotation to SpotWithPriceLimit.|
   * |k8s.aliyun.com/eci-with-eip|"true"|If you set the value to true, an EIP is automatically created and bound to each elastic container instance.|
   * |k8s.aliyun.com/eci-data-cache-bucket|default|The bucket of the specified DataCache. If you want to use a DataCache to create a pod, you must configure this annotation.|
   * |k8s.aliyun.com/eci-data-cache-pl|PL1|The performance level (PL) of the cloud disk that you want to create by using the specified DataCache.
   * By default, enhanced SSDs (ESSDs) are created. Default value: PL1.|
   * |k8s.aliyun.com/eci-data-cache-provisionedIops|"40000"|The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created by using the specified DataCache is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-data-cache-burstingEnabled|"true"|Specifies whether the Burst feature is enabled for the ESSD AutoPL disk. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created by using the specified DataCache is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-custom-tags|"env:test,name:alice"|The tags that you want to add to each elastic container instance. You can add up to three tags for each elastic container instance. Separate a tag key and a tag value with a colon (:). Separate multiple tags with commas (,).|
   *
   * @param request ApplyScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ApplyScalingGroupResponse
   */
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

  /**
   * @summary 基于yaml配置进行弹性伸缩管理
   *
   * @description You can call the ApplyScalingGroup operation to create scaling groups of the Elastic Container Instance type with ease. The resources of the scaling groups are defined in Kubernetes Deployment YAML files. You can also call this operation to extend annotations for elastic container instances in Kubernetes Deployment YAML files. For more information, see "Supported annotations" in this topic.
   * Mapping between YAML files and scaling groups: You can map the triplet of namespace, kind, and name in a YAML file to a scaling group name. A YAML file and a scaling group have a one-to-one mapping relationship in a region. For example, if you use the Kubernetes Deployment YAML file whose name is NGINX in the default namespace to create a scaling group in a region, the unique name of the mapped scaling group is k8s_default_Deployment_nginx.
   * You can use a Kubernetes Deployment YAML file to manage a scaling group based on the following logic:
   * * If an existing scaling group has a mapping relationship with your Kubernetes Deployment YAML file, you can update the scaling group by using the YAML file.
   * * If no scaling group that has a mapping relationship with your Kubernetes Deployment YAML file exists, you can create a scaling group with ease by using the YAML file.
   * ### Precautions
   * 1. If you do not specify a virtual private cloud (VPC), vSwitch, security group, or annotation in your Kubernetes Deployment YAML file, the system creates a default VPC that has default vSwitches and uses the default security group ess-default-sg of Auto Scaling. By default, the security group rule allows traffic on Transmission Control Protocol (TCP)-based port 22 and port 3389 and enables Internet Control Message Protocol (ICMP) for IPv4 addresses. If you want to enable other ports or protocols, you can create custom security group rules.
   * 2. If you want to use a public image, you must enable the Internet access feature and configure the k8s.aliyun.com/eci-with-eip pod annotation to enable the elastic IP address (EIP) feature.
   * 3. After you call the ApplyScalingGroup operation to apply a Kubernetes Deployment YAML file, the scaling group immediately enters the Enabled state and the scaling configuration immediately enters the Active state. If the number of replicas that you specified in the YAML file is grater than 0, elastic container instances are automatically created.
   * ### Supported annotations
   * For more information about annotations, see [ECI Pod Annotation](https://help.aliyun.com/document_detail/186939.html).
   * |Annotation|Example|Description|
   * |---|---|---|
   * |k8s.aliyun.com/ess-scaling-group-min-size|1|The minimum size of the scaling group that you want to create. Default value: 0.|
   * |k8s.aliyun.com/ess-scaling-group-max-size|20|The maximum size of the scaling group that you want to create. Default value: maximum number of replicas or 30, whichever is greater.|
   * |k8s.aliyun.com/eci-ntp-server|100.100.*.*|The IP address of the Network Time Protocol (NTP) server.|
   * |k8s.aliyun.com/eci-use-specs|2-4Gi|The specifications of 2 vCPUs and 4 GB memory. For more information, see [Create pods by specifying multiple specifications](https://help.aliyun.com/document_detail/451267.html).|
   * |k8s.aliyun.com/eci-vswitch|vsw-bp1xpiowfm5vo8o3c\\*\\*\\*\\*|The ID of the vSwitch. You can specify multiple vSwitches to specify multiple zones.|
   * |k8s.aliyun.com/eci-security-group|sg-bp1dktddjsg5nktv\\*\\*\\*\\*|The ID of the security group. Before you configure this annotation, take note of the following requirements:<ul data-sourcepos="26:74-26:168"><li data-sourcepos="26:78-26:114">You can specify one or more security groups. You can specify up to five security groups for each scaling group.</li><li data-sourcepos="26:114-26:140">If you specify multiple security groups, the security groups must belong to the same VPC.</li><li data-sourcepos="26:140-26:163">If you specify multiple security groups, the security groups must be of the same type.</li></ul>|
   * |k8s.aliyun.com/eci-sls-enable|"false"|If you set the value to false, the log collection feature is disabled.
   * If you do not want to use Custom Resource Definition (CRD) for Simple Log Service to collect logs of specific pods, you can configure this annotation for the pods and set the value to false. This prevents resource wastes caused by Logtails created by the system.|
   * |k8s.aliyun.com/eci-spot-strategy|SpotAsPriceGo|The bidding policy for the preemptible instance. Valid values:<ul data-sourcepos="28:69-28:204"><li data-sourcepos="28:73-28:158">SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price If you set the value to SpotWithPriceLimit, you must configure the k8s.aliyun.com/eci-spot-price-limit annotation.</li><li data-sourcepos="28:158-28:199">SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is used as the bid price.</li></ul>|
   * |k8s.aliyun.com/eci-spot-price-limit|"0.5"|The maximum hourly price of the preemptible instance. This value can be accurate to up to three decimal places.
   * This annotation takes effect only when you set the k8s.aliyun.com/eci-spot-strategy annotation to SpotWithPriceLimit.|
   * |k8s.aliyun.com/eci-with-eip|"true"|If you set the value to true, an EIP is automatically created and bound to each elastic container instance.|
   * |k8s.aliyun.com/eci-data-cache-bucket|default|The bucket of the specified DataCache. If you want to use a DataCache to create a pod, you must configure this annotation.|
   * |k8s.aliyun.com/eci-data-cache-pl|PL1|The performance level (PL) of the cloud disk that you want to create by using the specified DataCache.
   * By default, enhanced SSDs (ESSDs) are created. Default value: PL1.|
   * |k8s.aliyun.com/eci-data-cache-provisionedIops|"40000"|The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created by using the specified DataCache is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-data-cache-burstingEnabled|"true"|Specifies whether the Burst feature is enabled for the ESSD AutoPL disk. For more information, see [ESSD AutoPL](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created by using the specified DataCache is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-custom-tags|"env:test,name:alice"|The tags that you want to add to each elastic container instance. You can add up to three tags for each elastic container instance. Separate a tag key and a tag value with a colon (:). Separate multiple tags with commas (,).|
   *
   * @param request ApplyScalingGroupRequest
   * @return ApplyScalingGroupResponse
   */
  async applyScalingGroup(request: ApplyScalingGroupRequest): Promise<ApplyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyScalingGroupWithOptions(request, runtime);
  }

  /**
   * @summary Attaches Application Load Balancer (ALB) server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachAlbServerGroups operation. By attaching ALB server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   *
   * @description Before you call the operation to attach an ALB server group to your scaling group, make sure that the following requirements are met:
   * *   The scaling group and the ALB server group share the same virtual private cloud (VPC).
   * *   The ALB server group is in the Available state.
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
   * @summary Attaches Application Load Balancer (ALB) server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachAlbServerGroups operation. By attaching ALB server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   *
   * @description Before you call the operation to attach an ALB server group to your scaling group, make sure that the following requirements are met:
   * *   The scaling group and the ALB server group share the same virtual private cloud (VPC).
   * *   The ALB server group is in the Available state.
   *
   * @param request AttachAlbServerGroupsRequest
   * @return AttachAlbServerGroupsResponse
   */
  async attachAlbServerGroups(request: AttachAlbServerGroupsRequest): Promise<AttachAlbServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAlbServerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Associates one or more ApsaraDB RDS instances with a scaling group.
   *
   * @description Before you associate an ApsaraDB RDS instance with a scaling group, make sure that the ApsaraDB RDS instance meets the following requirements:
   * *   The ApsaraDB RDS instance and the scaling group must belong to the same Alibaba Cloud account.
   * *   The ApsaraDB RDS instance must be unlocked. For more information about the lock policy, see [ApsaraDB RDS usage notes](https://help.aliyun.com/document_detail/41872.html).
   * *   The ApsaraDB RDS instance must be in the Running state.
   * After an ApsaraDB RDS instance is associated with the scaling group, the default IP address whitelist of the ApsaraDB RDS instance can contain no more than 1,000 IP addresses. For more information, see [Set the whitelist](https://help.aliyun.com/document_detail/43185.html).
   *
   * @param request AttachDBInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachDBInstancesResponse
   */
  async attachDBInstancesWithOptions(request: AttachDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attachMode)) {
      query["AttachMode"] = request.attachMode;
    }

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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
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
   * @summary Associates one or more ApsaraDB RDS instances with a scaling group.
   *
   * @description Before you associate an ApsaraDB RDS instance with a scaling group, make sure that the ApsaraDB RDS instance meets the following requirements:
   * *   The ApsaraDB RDS instance and the scaling group must belong to the same Alibaba Cloud account.
   * *   The ApsaraDB RDS instance must be unlocked. For more information about the lock policy, see [ApsaraDB RDS usage notes](https://help.aliyun.com/document_detail/41872.html).
   * *   The ApsaraDB RDS instance must be in the Running state.
   * After an ApsaraDB RDS instance is associated with the scaling group, the default IP address whitelist of the ApsaraDB RDS instance can contain no more than 1,000 IP addresses. For more information, see [Set the whitelist](https://help.aliyun.com/document_detail/43185.html).
   *
   * @param request AttachDBInstancesRequest
   * @return AttachDBInstancesResponse
   */
  async attachDBInstances(request: AttachDBInstancesRequest): Promise<AttachDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDBInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Adds instances to a scaling group to provide services or restarts Elastic Compute Service (ECS) instances stopped in Economical Mode to provide services. You can call the AttachInstances operation to add ECS instances, elastic container instances, or third-party instances managed by Alibaba Cloud to your scaling group to provide services. You can also call this operation to restart ECS instances stopped in Economical Mode in your scaling group to provide services.
   *
   * @description Before you call this operation, take note of the following items:
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
   * @summary Adds instances to a scaling group to provide services or restarts Elastic Compute Service (ECS) instances stopped in Economical Mode to provide services. You can call the AttachInstances operation to add ECS instances, elastic container instances, or third-party instances managed by Alibaba Cloud to your scaling group to provide services. You can also call this operation to restart ECS instances stopped in Economical Mode in your scaling group to provide services.
   *
   * @description Before you call this operation, take note of the following items:
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
   * @summary Attaches load balancers to a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups. Load balancers help distribute the access traffic to the instances in scaling groups, which effectively improves the service performance of the scaling groups. You can call the AttachLoadBalancers operation to attach one or more load balancers to your scaling group.
   *
   * @description Before you call this operation, make sure that the following requirements are met:
   * *   The load balancer and the scaling group belong to the same Alibaba Cloud account and region.
   * *   The load balancer is in the `Running` state.
   * *   At least one listener is configured for the load balancer, and the health check feature is enabled for the load balancer.
   * *   If the network type of the load balancer and the scaling group is virtual private cloud (VPC), they use the same VPC.
   * *   If the network type of the scaling group is VPC, and that of the load balancer is classic network and a backend server of the load balancer uses a VPC, the scaling group and the backend server use the same VPC.
   * *   The attachment of load balancers ensures that the cumulative number of load balancers attached to the scaling group stays within the predefined maximum limit. For information about the load balancer quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
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
   * @summary Attaches load balancers to a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups. Load balancers help distribute the access traffic to the instances in scaling groups, which effectively improves the service performance of the scaling groups. You can call the AttachLoadBalancers operation to attach one or more load balancers to your scaling group.
   *
   * @description Before you call this operation, make sure that the following requirements are met:
   * *   The load balancer and the scaling group belong to the same Alibaba Cloud account and region.
   * *   The load balancer is in the `Running` state.
   * *   At least one listener is configured for the load balancer, and the health check feature is enabled for the load balancer.
   * *   If the network type of the load balancer and the scaling group is virtual private cloud (VPC), they use the same VPC.
   * *   If the network type of the scaling group is VPC, and that of the load balancer is classic network and a backend server of the load balancer uses a VPC, the scaling group and the backend server use the same VPC.
   * *   The attachment of load balancers ensures that the cumulative number of load balancers attached to the scaling group stays within the predefined maximum limit. For information about the load balancer quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   *
   * @param request AttachLoadBalancersRequest
   * @return AttachLoadBalancersResponse
   */
  async attachLoadBalancers(request: AttachLoadBalancersRequest): Promise<AttachLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLoadBalancersWithOptions(request, runtime);
  }

  /**
   * @summary Attaches server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachServerGroups operation. By attaching Application Load Balancer (ALB) or Network Load Balancer (NLB) server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   *
   * @param request AttachServerGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachServerGroupsResponse
   */
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

  /**
   * @summary Attaches server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachServerGroups operation. By attaching Application Load Balancer (ALB) or Network Load Balancer (NLB) server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   *
   * @param request AttachServerGroupsRequest
   * @return AttachServerGroupsResponse
   */
  async attachServerGroups(request: AttachServerGroupsRequest): Promise<AttachServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachServerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Attaches vServer groups to a scaling group. After a Classic Load Balancer (CLB) instance is attached to your scaling group, the instances in the scaling group are automatically added as backend servers of the CLB instance. These servers then handle requests forwarded by the CLB instance, streamlining the processing of incoming traffic. To direct varying access requests to separate backend servers or to distribute requests based on domain names or URLs, you can call the AttachVServerGroups operation. This operation enables the addition of multiple vServer groups, allowing for efficient management of various backend server configurations tailored to your routing preferences.
   *
   * @description *   Before you call this operation, make sure that the following requirements are met:
   *     *   The CLB instance and the scaling group belong to the same Alibaba Cloud account.
   *     *   The CLB instance and the scaling group reside in the same region.
   *     *   The CLB instance is in the Running state.
   *     *   The CLB instance is configured with at least one listener. The health check feature is enabled for the CLB instance.
   *     *   If the network type of both the CLB instance and the scaling group is virtual private cloud (VPC), they use the same VPC.
   *     *   If the network type of the scaling group is VPC and the network type of the CLB instance is classic network, any backend server of the CLB instance within a VPC setup shares the same VPC as the scaling group.
   *     *   The vServer groups that you want to attach to the scaling group belong to the CLB instance.
   *     *   The operation to attach vServer groups does not result in the total number of vServer groups exceeding the predefined quota limit. For information about the vServer group quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * *   When you call this operation to attach vServer groups, you must specify the following parameters:
   *     *   LoadBalancerId: the ID of the CLB instance
   *     *   VServerGroupId: the ID of the vServer group
   *     *   Port: the port number of the vServer group
   *     **
   *     **Note** If you attempt to attach the same vServer group to a scaling group multiple times over the identical port, the system regards each attempt as a separate vServer group attachment to the scaling group. In your request, if you include the same vServer group ID coupled with the same port number multiple times, only the first configuration of the vServer group and port number pairing is considered valid. Subsequent vServer group and port number parings are disregarded.
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
   * @summary Attaches vServer groups to a scaling group. After a Classic Load Balancer (CLB) instance is attached to your scaling group, the instances in the scaling group are automatically added as backend servers of the CLB instance. These servers then handle requests forwarded by the CLB instance, streamlining the processing of incoming traffic. To direct varying access requests to separate backend servers or to distribute requests based on domain names or URLs, you can call the AttachVServerGroups operation. This operation enables the addition of multiple vServer groups, allowing for efficient management of various backend server configurations tailored to your routing preferences.
   *
   * @description *   Before you call this operation, make sure that the following requirements are met:
   *     *   The CLB instance and the scaling group belong to the same Alibaba Cloud account.
   *     *   The CLB instance and the scaling group reside in the same region.
   *     *   The CLB instance is in the Running state.
   *     *   The CLB instance is configured with at least one listener. The health check feature is enabled for the CLB instance.
   *     *   If the network type of both the CLB instance and the scaling group is virtual private cloud (VPC), they use the same VPC.
   *     *   If the network type of the scaling group is VPC and the network type of the CLB instance is classic network, any backend server of the CLB instance within a VPC setup shares the same VPC as the scaling group.
   *     *   The vServer groups that you want to attach to the scaling group belong to the CLB instance.
   *     *   The operation to attach vServer groups does not result in the total number of vServer groups exceeding the predefined quota limit. For information about the vServer group quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * *   When you call this operation to attach vServer groups, you must specify the following parameters:
   *     *   LoadBalancerId: the ID of the CLB instance
   *     *   VServerGroupId: the ID of the vServer group
   *     *   Port: the port number of the vServer group
   *     **
   *     **Note** If you attempt to attach the same vServer group to a scaling group multiple times over the identical port, the system regards each attempt as a separate vServer group attachment to the scaling group. In your request, if you include the same vServer group ID coupled with the same port number multiple times, only the first configuration of the vServer group and port number pairing is considered valid. Subsequent vServer group and port number parings are disregarded.
   *
   * @param request AttachVServerGroupsRequest
   * @return AttachVServerGroupsResponse
   */
  async attachVServerGroups(request: AttachVServerGroupsRequest): Promise<AttachVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachVServerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Changes a resource group. Resource groups are a means to categorize and manage cloud resources, such as scaling groups, based on specific objectives, permissions, or ownership. In large, multifaceted organizations that manage numerous projects and users, this feature adopts a tiered management approach, simplifying management tasks and improving the effectiveness and oversight of resource allocation. You can call the ChangeResourceGroup operation to move your scaling groups from one resource group to another resource group, which facilitates streamlined monitoring and management within the context of the new group. This operation eliminates the need for repetitive and time-consuming cross-service resource queries, thereby enhancing operational efficiency.
   *
   * @description *   A resource is an entity of cloud services that you create on Alibaba Cloud. For example, a scaling group is a resource.
   * *   A resource group serves as a powerful organizational tool within your Alibaba Cloud account, enabling you to manage and monitor multiple resources collectively. It effectively addresses complexities surrounding resource categorization and permission control under a single Alibaba Cloud account, thereby enhancing management efficiency and control. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
   *
   * @param request ChangeResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChangeResourceGroupResponse
   */
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

  /**
   * @summary Changes a resource group. Resource groups are a means to categorize and manage cloud resources, such as scaling groups, based on specific objectives, permissions, or ownership. In large, multifaceted organizations that manage numerous projects and users, this feature adopts a tiered management approach, simplifying management tasks and improving the effectiveness and oversight of resource allocation. You can call the ChangeResourceGroup operation to move your scaling groups from one resource group to another resource group, which facilitates streamlined monitoring and management within the context of the new group. This operation eliminates the need for repetitive and time-consuming cross-service resource queries, thereby enhancing operational efficiency.
   *
   * @description *   A resource is an entity of cloud services that you create on Alibaba Cloud. For example, a scaling group is a resource.
   * *   A resource group serves as a powerful organizational tool within your Alibaba Cloud account, enabling you to manage and monitor multiple resources collectively. It effectively addresses complexities surrounding resource categorization and permission control under a single Alibaba Cloud account, thereby enhancing management efficiency and control. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
   *
   * @param request ChangeResourceGroupRequest
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Ends the timeout period of a lifecycle hook ahead of schedule. If you have created a lifecycle hook for your scaling group, you can call the CompleteLifecycleAction operation to end the timeout period of the lifecycle hook ahead of schedule based on your business requirements.
   *
   * @description When you manually cut short the timeout period of a lifecycle hook, Auto Scaling proceeds with one of the following actions based on the predefined settings: responding to the scaling request, aborting the scaling request, and initiating a rollback process.
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
   * @summary Ends the timeout period of a lifecycle hook ahead of schedule. If you have created a lifecycle hook for your scaling group, you can call the CompleteLifecycleAction operation to end the timeout period of the lifecycle hook ahead of schedule based on your business requirements.
   *
   * @description When you manually cut short the timeout period of a lifecycle hook, Auto Scaling proceeds with one of the following actions based on the predefined settings: responding to the scaling request, aborting the scaling request, and initiating a rollback process.
   *
   * @param request CompleteLifecycleActionRequest
   * @return CompleteLifecycleActionResponse
   */
  async completeLifecycleAction(request: CompleteLifecycleActionRequest): Promise<CompleteLifecycleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeLifecycleActionWithOptions(request, runtime);
  }

  /**
   * @summary Creates event-triggered tasks. If your business encounters unexpected traffic surges or has no specific patterns, you can call the CreateAlarm operation to create an event-triggered task and associate a CloudMonitor metric with the task. This allows you to dynamically adjust the number of Elastic Compute Service (ECS) instances or elastic container instances in your scaling group and keep updated on the real-time metric data, which facilitates cloud resource management and maintenance.
   *
   * @description *   If you set MetricType to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Event-triggered tasks of the custom monitoring type](https://help.aliyun.com/document_detail/74861.html).
   * *   When you create an event-triggered task, you must specify MetricName, Dimensions.DimensionKey, and Dimensions.DimensionValue to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify user_id and scaling_group for an event-triggered task to aggregate monitoring data of all ECS instances or elastic container instances in a scaling group within an Alibaba Cloud account.
   *     *   If you create an event-triggered task of the custom monitoring type, you can specify only custom metrics in the task.
   *     *   If you create an event-triggered task of the system monitoring type, you can specify the system metrics described in [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html) in the task.
   * >  user_id and scaling_group are automatically populated. You need to only specify device and state. For more information, see `Dimensions.DimensionKey` and `Dimensions.DimensionValue` in the "Request parameters" section of this topic.
   *
   * @param request CreateAlarmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAlarmResponse
   */
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

  /**
   * @summary Creates event-triggered tasks. If your business encounters unexpected traffic surges or has no specific patterns, you can call the CreateAlarm operation to create an event-triggered task and associate a CloudMonitor metric with the task. This allows you to dynamically adjust the number of Elastic Compute Service (ECS) instances or elastic container instances in your scaling group and keep updated on the real-time metric data, which facilitates cloud resource management and maintenance.
   *
   * @description *   If you set MetricType to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Event-triggered tasks of the custom monitoring type](https://help.aliyun.com/document_detail/74861.html).
   * *   When you create an event-triggered task, you must specify MetricName, Dimensions.DimensionKey, and Dimensions.DimensionValue to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify user_id and scaling_group for an event-triggered task to aggregate monitoring data of all ECS instances or elastic container instances in a scaling group within an Alibaba Cloud account.
   *     *   If you create an event-triggered task of the custom monitoring type, you can specify only custom metrics in the task.
   *     *   If you create an event-triggered task of the system monitoring type, you can specify the system metrics described in [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html) in the task.
   * >  user_id and scaling_group are automatically populated. You need to only specify device and state. For more information, see `Dimensions.DimensionKey` and `Dimensions.DimensionValue` in the "Request parameters" section of this topic.
   *
   * @param request CreateAlarmRequest
   * @return CreateAlarmResponse
   */
  async createAlarm(request: CreateAlarmRequest): Promise<CreateAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlarmWithOptions(request, runtime);
  }

  /**
   * @summary Creates a scaling configuration of the Elastic Container Instance type. Auto Scaling uses the scaling configuration as a template to create elastic container instances to meet your business requirements during scale-outs.
   *
   * @description A scaling configuration is a template that is used to create elastic container instances during scale-out activities.
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
   * @summary Creates a scaling configuration of the Elastic Container Instance type. Auto Scaling uses the scaling configuration as a template to create elastic container instances to meet your business requirements during scale-outs.
   *
   * @description A scaling configuration is a template that is used to create elastic container instances during scale-out activities.
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
   * @summary Creates one or more lifecycle hooks in a scaling group. A lifecycle hook allows you to execute custom actions like sending notifications or automating script execution at critical stages (such as instance startup and termination) in the lifecycle of an instance. Implementing the lifecycle hook feature allows for finer control and management of instances. For example, you can verify configurations, set up custom tasks, or back up data on your instances when lifecycle hooks take effect, thus enhancing the flexibility and reliability of application deployment.
   *
   * @description You can create up to six lifecycle hooks for each scaling group. After a lifecycle hook is created for a scaling group, Elastic Compute Service (ECS) instances in the scaling group waits to be added to or removed from the scaling group during scaling activities. You can use the HeartbeatTimeout parameter to specify the timeout period of the lifecycle hook. During the timeout period of a lifecycle hook, you can perform custom operations such as initialize ECS instance configurations and download ECS instance data on the ECS instances for which the lifecycle hook is applied.
   * During a scale-out activity and the timeout period of a lifecycle hook, the private IP addresses of ECS instances wait to be added to the associated whitelist that manages access to the ApsaraDB RDS instance. The ECS instances also wait to be added to the backend server group of the associated Classic Load Balancer (CLB) instance. After the lifecycle hook times out, the private IP addresses of the ECS instances are added to the whitelist that manages access to the associated ApsaraDB RDS instance. The ECS instances are also added to the backend server group of the associated CLB instance. During a scale-in activity and the timeout period of a lifecycle hook, the private IP addresses of ECS instances wait to be removed from the whitelist that manages access to the associated ApsaraDB RDS instance. The ECS instances also wait to be removed from the backend server group of the associated CLB instance. After the lifecycle hook times out, the private IP addresses of the ECS instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance. The ECS instances are also removed from the backend server group of the associated CLB instance.
   * You can configure a notification method for a lifecycle hook. When the lifecycle hook is triggered, a notification can be sent to the specified Message Service (MNS) topic or queue, or an operation can be performed based on the specified Operation Orchestration Service (OOS) template. If you want to configure an OOS template, you must create a Resource Access Management (RAM) role for OOS. For more information, see [Grant RAM permissions to OOS](https://help.aliyun.com/document_detail/120810.html).
   * > If your scaling group has existing ECS instances and you configured an OOS template that is used to add the private IP addresses of ECS instances to or remove the private IP addresses of ECS instances from the whitelists that manage access to cloud databases that are not ApsaraDB RDS databases, you must manually add the private IP addresses of the ECS instances to or remove the private IP addresses of the ECS instances from the whitelists that manage access to the cloud databases.
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
   * @summary Creates one or more lifecycle hooks in a scaling group. A lifecycle hook allows you to execute custom actions like sending notifications or automating script execution at critical stages (such as instance startup and termination) in the lifecycle of an instance. Implementing the lifecycle hook feature allows for finer control and management of instances. For example, you can verify configurations, set up custom tasks, or back up data on your instances when lifecycle hooks take effect, thus enhancing the flexibility and reliability of application deployment.
   *
   * @description You can create up to six lifecycle hooks for each scaling group. After a lifecycle hook is created for a scaling group, Elastic Compute Service (ECS) instances in the scaling group waits to be added to or removed from the scaling group during scaling activities. You can use the HeartbeatTimeout parameter to specify the timeout period of the lifecycle hook. During the timeout period of a lifecycle hook, you can perform custom operations such as initialize ECS instance configurations and download ECS instance data on the ECS instances for which the lifecycle hook is applied.
   * During a scale-out activity and the timeout period of a lifecycle hook, the private IP addresses of ECS instances wait to be added to the associated whitelist that manages access to the ApsaraDB RDS instance. The ECS instances also wait to be added to the backend server group of the associated Classic Load Balancer (CLB) instance. After the lifecycle hook times out, the private IP addresses of the ECS instances are added to the whitelist that manages access to the associated ApsaraDB RDS instance. The ECS instances are also added to the backend server group of the associated CLB instance. During a scale-in activity and the timeout period of a lifecycle hook, the private IP addresses of ECS instances wait to be removed from the whitelist that manages access to the associated ApsaraDB RDS instance. The ECS instances also wait to be removed from the backend server group of the associated CLB instance. After the lifecycle hook times out, the private IP addresses of the ECS instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance. The ECS instances are also removed from the backend server group of the associated CLB instance.
   * You can configure a notification method for a lifecycle hook. When the lifecycle hook is triggered, a notification can be sent to the specified Message Service (MNS) topic or queue, or an operation can be performed based on the specified Operation Orchestration Service (OOS) template. If you want to configure an OOS template, you must create a Resource Access Management (RAM) role for OOS. For more information, see [Grant RAM permissions to OOS](https://help.aliyun.com/document_detail/120810.html).
   * > If your scaling group has existing ECS instances and you configured an OOS template that is used to add the private IP addresses of ECS instances to or remove the private IP addresses of ECS instances from the whitelists that manage access to cloud databases that are not ApsaraDB RDS databases, you must manually add the private IP addresses of the ECS instances to or remove the private IP addresses of the ECS instances from the whitelists that manage access to the cloud databases.
   *
   * @param request CreateLifecycleHookRequest
   * @return CreateLifecycleHookResponse
   */
  async createLifecycleHook(request: CreateLifecycleHookRequest): Promise<CreateLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLifecycleHookWithOptions(request, runtime);
  }

  /**
   * @summary Creates a notification rule. You can call the CreateNotificationConfiguration operation to create a notification rule to stay informed about scaling events or resource changes. This helps you learn about the dynamic status of your scaling group in real time and further automates the management of scaling events.
   *
   * @description ## Description
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
   * @summary Creates a notification rule. You can call the CreateNotificationConfiguration operation to create a notification rule to stay informed about scaling events or resource changes. This helps you learn about the dynamic status of your scaling group in real time and further automates the management of scaling events.
   *
   * @description ## Description
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
   * @summary Creates a scaling configuration.
   *
   * @description Auto Scaling automatically creates Elastic Compute Service (ECS) instances based on the specified scaling configuration. ECS instances can be created in the following modes:
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

    if (!Util.isUnset(request.dedicatedHostClusterId)) {
      query["DedicatedHostClusterId"] = request.dedicatedHostClusterId;
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

    if (!Util.isUnset(request.networkInterfaces)) {
      query["NetworkInterfaces"] = request.networkInterfaces;
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
   * @summary Creates a scaling configuration.
   *
   * @description Auto Scaling automatically creates Elastic Compute Service (ECS) instances based on the specified scaling configuration. ECS instances can be created in the following modes:
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
   * @summary Creates a scaling group. You can call the CreateScalingGroup operation to automate the adjustment of computing power of a specific type based on your business requirements and scaling polices.
   *
   * @description A scaling group is a group of Elastic Compute Service (ECS) instances that can be used for similar purposes.
   * You can create only a limited number of scaling groups in a region. To check the quota of the scaling groups, go to Quota Center.
   * A scaling group does not immediately take effect after you create the scaling group. You can call the [EnableScalingGroup](https://help.aliyun.com/document_detail/25939.html) operation to enable a scaling group. You can trigger scaling events and execute scaling rules only in scaling groups that are in the Enabled state.
   * If you want to attach a Classic Load Balancer (CLB, formerly known as SLB) instance and an ApsaraDB RDS instance to the scaling group that you want to create, the scaling group, the CLB instance, and the ApsaraDB RDS instance must reside in the same region. For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * If you attach a CLB instance to the scaling group that you want to create, Auto Scaling will automatically add the ECS instances in the scaling group to the backend server groups of the CLB instance. You can specify the following types of server groups to add ECS instances:
   * *   Default server group: ECS instances in this group process frontend requests. If no listeners are configured for vServer groups or primary/secondary server groups, the frontend requests are forwarded to the ECS instances in the default server group.
   * *   vServer group: If you want to forward different requests to different backend servers, or you want to forward requests based on domain names and URLs, you can specify vServer groups.
   * >  If you specify both the default server group and multiple server groups simultaneously, Auto Scaling will add the ECS instances in your scaling group to these server groups concurrently.
   * The default weight of each ECS instance as a backend server is 50. If you want to attach a CLB instance to the scaling group that you want to create, make sure that the CLB instance meets the following requirements:
   * *   The CLB instance is in the Active state. You can call the [DescribeLoadBalancers](https://help.aliyun.com/document_detail/2401696.html) operation to query the status of CLB instances.
   * *   Health check must be enabled on all listener ports configured for the CLB instance. Otherwise, the scaling group will fail to be created.
   * If you attach Application Load Balancer (ALB) or Network Load Balancer (NLB) server groups to the scaling group that you want to create, Auto Scaling will add the ECS instances in your scaling group to the ALB or NLB server groups to process the access requests forwarded by the corresponding ALB or NLB instances. You can attach multiple ALB or NLB server groups to a scaling group. Make sure that the ALB or NLB server groups belong to the same virtual private cloud (VPC). For more information, see [AttachAlbServerGroups](https://help.aliyun.com/document_detail/266800.html) or [AttachServerGroups](https://help.aliyun.com/document_detail/600559.html).
   * If you attach an ApsaraDB RDS instance to the scaling group that you want to create, Auto Scaling will automatically add the private IP addresses of the ECS instances in your scaling group to the IP address whitelist of the ApsaraDB RDS instance. Before you attach an ApsaraDB RDS instance to your scaling group, make sure that the ApsaraDB RDS instance meets the following requirements:
   * *   The ApsaraDB RDS instance is in the Running state. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) state to query the status of ApsaraDB RDS instances.
   * *   The number of IP addresses in the IP address whitelist of the ApsaraDB RDS instance does not reach its upper limit. For more information, see [Configure a whitelist](https://help.aliyun.com/document_detail/43185.html).
   * If you set MultiAZPolicy for the scaling group that you want to create to COST_OPTIMIZED, the following rules apply:
   * *   If you use OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, and SpotInstancePools to specify the instance allocation mode under the cost optimization policy, Auto Scaling will prioritize the implementation of the specified instance allocation mode during scale-out events.
   * *   If you do not specify OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, or SpotInstancePools, Auto Scaling will preferentially create instances of the lowest-priced instance type based on the cost optimization policy.
   * If you set `Tags.Propagate` to true, the following rules will apply:
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

    if (!Util.isUnset(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
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
   * @summary Creates a scaling group. You can call the CreateScalingGroup operation to automate the adjustment of computing power of a specific type based on your business requirements and scaling polices.
   *
   * @description A scaling group is a group of Elastic Compute Service (ECS) instances that can be used for similar purposes.
   * You can create only a limited number of scaling groups in a region. To check the quota of the scaling groups, go to Quota Center.
   * A scaling group does not immediately take effect after you create the scaling group. You can call the [EnableScalingGroup](https://help.aliyun.com/document_detail/25939.html) operation to enable a scaling group. You can trigger scaling events and execute scaling rules only in scaling groups that are in the Enabled state.
   * If you want to attach a Classic Load Balancer (CLB, formerly known as SLB) instance and an ApsaraDB RDS instance to the scaling group that you want to create, the scaling group, the CLB instance, and the ApsaraDB RDS instance must reside in the same region. For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * If you attach a CLB instance to the scaling group that you want to create, Auto Scaling will automatically add the ECS instances in the scaling group to the backend server groups of the CLB instance. You can specify the following types of server groups to add ECS instances:
   * *   Default server group: ECS instances in this group process frontend requests. If no listeners are configured for vServer groups or primary/secondary server groups, the frontend requests are forwarded to the ECS instances in the default server group.
   * *   vServer group: If you want to forward different requests to different backend servers, or you want to forward requests based on domain names and URLs, you can specify vServer groups.
   * >  If you specify both the default server group and multiple server groups simultaneously, Auto Scaling will add the ECS instances in your scaling group to these server groups concurrently.
   * The default weight of each ECS instance as a backend server is 50. If you want to attach a CLB instance to the scaling group that you want to create, make sure that the CLB instance meets the following requirements:
   * *   The CLB instance is in the Active state. You can call the [DescribeLoadBalancers](https://help.aliyun.com/document_detail/2401696.html) operation to query the status of CLB instances.
   * *   Health check must be enabled on all listener ports configured for the CLB instance. Otherwise, the scaling group will fail to be created.
   * If you attach Application Load Balancer (ALB) or Network Load Balancer (NLB) server groups to the scaling group that you want to create, Auto Scaling will add the ECS instances in your scaling group to the ALB or NLB server groups to process the access requests forwarded by the corresponding ALB or NLB instances. You can attach multiple ALB or NLB server groups to a scaling group. Make sure that the ALB or NLB server groups belong to the same virtual private cloud (VPC). For more information, see [AttachAlbServerGroups](https://help.aliyun.com/document_detail/266800.html) or [AttachServerGroups](https://help.aliyun.com/document_detail/600559.html).
   * If you attach an ApsaraDB RDS instance to the scaling group that you want to create, Auto Scaling will automatically add the private IP addresses of the ECS instances in your scaling group to the IP address whitelist of the ApsaraDB RDS instance. Before you attach an ApsaraDB RDS instance to your scaling group, make sure that the ApsaraDB RDS instance meets the following requirements:
   * *   The ApsaraDB RDS instance is in the Running state. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) state to query the status of ApsaraDB RDS instances.
   * *   The number of IP addresses in the IP address whitelist of the ApsaraDB RDS instance does not reach its upper limit. For more information, see [Configure a whitelist](https://help.aliyun.com/document_detail/43185.html).
   * If you set MultiAZPolicy for the scaling group that you want to create to COST_OPTIMIZED, the following rules apply:
   * *   If you use OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, and SpotInstancePools to specify the instance allocation mode under the cost optimization policy, Auto Scaling will prioritize the implementation of the specified instance allocation mode during scale-out events.
   * *   If you do not specify OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, or SpotInstancePools, Auto Scaling will preferentially create instances of the lowest-priced instance type based on the cost optimization policy.
   * If you set `Tags.Propagate` to true, the following rules will apply:
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
   * @summary Creates a scaling rule. The purpose of a scaling rule varies based on its type. You can use a scaling rule to trigger a scaling activity or adjust the boundary values for a scaling group. You can call the CreateScalingRule operation to create different types of scaling rules based on your business requirements. For example, if your business requires only automatic adjustment of the boundary values for your scaling group, you can call this operation to create a predictive scaling rule.
   *
   * @description A scaling rule defines the specific scaling action. For example, you can use a scaling rule to define N instances to add or remove. If the execution of a scaling rule causes the total number of Elastic Compute Service (ECS) instances or elastic container instances in the scaling group to drop below the value of MinSize or to exceed the value of MaxSize, Auto Scaling adjusts the number of instances to add or remove, which ensures that the total number of instances stays within the valid range. Take note that Auto Scaling does not adjust the number of instances that you defined in the scaling rule. Examples:
   * *   The maximum number of instances (MaxSize) that can be contained in a scaling group is 3 and the current number of instances (Total Capacity) in the scaling group is 2. In this example, the Add3 scaling rule is created to add three ECS instances to the scaling group. However, after you execute Add3, Auto Scaling adds only one ECS instance to the scaling group. In addition, the number of ECS instances to add in the Add3 scaling rule remains unchanged.
   * *   The minimum number of instances (MinSize) that must be contained in a scaling group is 2 and the current number of instances (Total Capacity) is 3. In this example, the Remove5 scaling rule is created to remove five ECS instances from the scaling group. However, after you execute Remove5, Auto Scaling only removes one ECS instance from the scaling group. In addition, the number of ECS instances to remove in the Remove5 scaling rule remains unchanged.
   * Before you call this operation, take note of the following items:
   * *   If you set AdjustmentType to TotalCapacity, the total number of ECS instances or elastic container instances in your scaling group will be adjusted to a specified number when the scaling rule that you create by calling this operation is executed. You must set AdjustmentValue to an integer that is greater than 0.
   * *   If you set AdjustmentType to QuantityChangeInCapacity or PercentChangeInCapacity, a positive value of AdjustmentValue specifies that a specific number of ECS instances or elastic container instances will be added to your scaling group, and a negative value of AdjustmentValue specifies that a specific number of ECS instances or elastic container instances will be removed from the scaling group.
   * *   If you set AdjustmentType to PercentChangeInCapacity, Auto Scaling calculates the number of ECS instances or elastic container instances to add or remove by multiplying the current capacity of the scaling group (Total Capacity) by AdjustmentValue divided by 100, rounding off the result to determine the final adjustment count.
   * *   If you specify a cooldown period for a scaling rule, the cooldown period of the scaling rule takes effect after you execute the scaling rule. If you do not specify a cooldown period for a scaling rule, the value of DefaultCooldown of the scaling group takes effect after you execute the scaling rule.
   * *   You can create only a limited number of scaling rules for a scaling group. For more information, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * *   The following API operations may use the unique identifier of a scaling rule (ScalingRuleAri) that is returned after you call the CreateScalingRule operation:
   *     *   ExecuteScalingRule: You can call this operation to manually execute a scaling rule. In this operation, you can set ScalingRuleAri to the unique identifier of the scaling rule that you want to execute.
   *     *   CreateScheduledTask: You can call this operation to create a scheduled task for a scaling rule. In this operation, you can set ScalingRuleAri to the unique identifier of the scaling rule for which you want to create a scheduled task.
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
   * @summary Creates a scaling rule. The purpose of a scaling rule varies based on its type. You can use a scaling rule to trigger a scaling activity or adjust the boundary values for a scaling group. You can call the CreateScalingRule operation to create different types of scaling rules based on your business requirements. For example, if your business requires only automatic adjustment of the boundary values for your scaling group, you can call this operation to create a predictive scaling rule.
   *
   * @description A scaling rule defines the specific scaling action. For example, you can use a scaling rule to define N instances to add or remove. If the execution of a scaling rule causes the total number of Elastic Compute Service (ECS) instances or elastic container instances in the scaling group to drop below the value of MinSize or to exceed the value of MaxSize, Auto Scaling adjusts the number of instances to add or remove, which ensures that the total number of instances stays within the valid range. Take note that Auto Scaling does not adjust the number of instances that you defined in the scaling rule. Examples:
   * *   The maximum number of instances (MaxSize) that can be contained in a scaling group is 3 and the current number of instances (Total Capacity) in the scaling group is 2. In this example, the Add3 scaling rule is created to add three ECS instances to the scaling group. However, after you execute Add3, Auto Scaling adds only one ECS instance to the scaling group. In addition, the number of ECS instances to add in the Add3 scaling rule remains unchanged.
   * *   The minimum number of instances (MinSize) that must be contained in a scaling group is 2 and the current number of instances (Total Capacity) is 3. In this example, the Remove5 scaling rule is created to remove five ECS instances from the scaling group. However, after you execute Remove5, Auto Scaling only removes one ECS instance from the scaling group. In addition, the number of ECS instances to remove in the Remove5 scaling rule remains unchanged.
   * Before you call this operation, take note of the following items:
   * *   If you set AdjustmentType to TotalCapacity, the total number of ECS instances or elastic container instances in your scaling group will be adjusted to a specified number when the scaling rule that you create by calling this operation is executed. You must set AdjustmentValue to an integer that is greater than 0.
   * *   If you set AdjustmentType to QuantityChangeInCapacity or PercentChangeInCapacity, a positive value of AdjustmentValue specifies that a specific number of ECS instances or elastic container instances will be added to your scaling group, and a negative value of AdjustmentValue specifies that a specific number of ECS instances or elastic container instances will be removed from the scaling group.
   * *   If you set AdjustmentType to PercentChangeInCapacity, Auto Scaling calculates the number of ECS instances or elastic container instances to add or remove by multiplying the current capacity of the scaling group (Total Capacity) by AdjustmentValue divided by 100, rounding off the result to determine the final adjustment count.
   * *   If you specify a cooldown period for a scaling rule, the cooldown period of the scaling rule takes effect after you execute the scaling rule. If you do not specify a cooldown period for a scaling rule, the value of DefaultCooldown of the scaling group takes effect after you execute the scaling rule.
   * *   You can create only a limited number of scaling rules for a scaling group. For more information, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * *   The following API operations may use the unique identifier of a scaling rule (ScalingRuleAri) that is returned after you call the CreateScalingRule operation:
   *     *   ExecuteScalingRule: You can call this operation to manually execute a scaling rule. In this operation, you can set ScalingRuleAri to the unique identifier of the scaling rule that you want to execute.
   *     *   CreateScheduledTask: You can call this operation to create a scheduled task for a scaling rule. In this operation, you can set ScalingRuleAri to the unique identifier of the scaling rule for which you want to create a scheduled task.
   *
   * @param request CreateScalingRuleRequest
   * @return CreateScalingRuleResponse
   */
  async createScalingRule(request: CreateScalingRuleRequest): Promise<CreateScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  /**
   * @summary Creates a scheduled task. A scheduled task is a type of scaling task that enables automatic execution of a specific scaling rule at a specified point in time. You can call the CreateScheduledTask operation to create a scheduled task to implement automatic scaling of computing resources. This ensures your business continuity and minimizes resource costs.
   *
   * @description *   If the scaling rule of a scheduled task fails to be executed due to an ongoing scaling activity in the scaling group or because the scaling group is disabled, the scheduled task is automatically retried during the time window specified by `LaunchExpirationTime`. If the scheduled task still fails after the specified time window ends, the task is automatically skipped.
   * *   If several scheduled tasks concurrently attempt to execute the same scaling rule within a scaling group, the following rules apply:
   *     *   Scaling groups with **Expected Number of Instances** configured: The scaling activities incurred by the scheduled tasks are parallel scaling activities. In a proximate time window, Auto Scaling can trigger several scheduled tasks and then execute multiple parallel scaling activities at the same time.
   *     *   Scaling groups with **Expected Number of Instances** not configured: The scaling activity incurred by the earliest scheduled task is executed. Considering that a scaling group allows for no more than one ongoing scaling activity simultaneously, other scheduled tasks will spontaneously invoke retries within the time window specified by `LaunchExpirationTime`. Upon completion of the first scheduled task, any retries invoked by other tasks within the time window specified by `LaunchExpirationTime` lead to continuous enforcement of the scaling rule, with each iteration generating a distinct scaling activity.
   * *   You can use one of the following methods to specify the scaling mode:
   *     *   ScheduledAction: Specify an existing scaling rule that you want Auto Scaling to execute when the scheduled task is triggered.
   *     *   ScalingGroupId: Specify the minimum number, maximum number, or expected number of instances for the scaling group for which you create the scheduled task.
   *     **
   *     **Note** You cannot specify ScheduledAction and ScalingGroupId at the same time.
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
   * @summary Creates a scheduled task. A scheduled task is a type of scaling task that enables automatic execution of a specific scaling rule at a specified point in time. You can call the CreateScheduledTask operation to create a scheduled task to implement automatic scaling of computing resources. This ensures your business continuity and minimizes resource costs.
   *
   * @description *   If the scaling rule of a scheduled task fails to be executed due to an ongoing scaling activity in the scaling group or because the scaling group is disabled, the scheduled task is automatically retried during the time window specified by `LaunchExpirationTime`. If the scheduled task still fails after the specified time window ends, the task is automatically skipped.
   * *   If several scheduled tasks concurrently attempt to execute the same scaling rule within a scaling group, the following rules apply:
   *     *   Scaling groups with **Expected Number of Instances** configured: The scaling activities incurred by the scheduled tasks are parallel scaling activities. In a proximate time window, Auto Scaling can trigger several scheduled tasks and then execute multiple parallel scaling activities at the same time.
   *     *   Scaling groups with **Expected Number of Instances** not configured: The scaling activity incurred by the earliest scheduled task is executed. Considering that a scaling group allows for no more than one ongoing scaling activity simultaneously, other scheduled tasks will spontaneously invoke retries within the time window specified by `LaunchExpirationTime`. Upon completion of the first scheduled task, any retries invoked by other tasks within the time window specified by `LaunchExpirationTime` lead to continuous enforcement of the scaling rule, with each iteration generating a distinct scaling activity.
   * *   You can use one of the following methods to specify the scaling mode:
   *     *   ScheduledAction: Specify an existing scaling rule that you want Auto Scaling to execute when the scheduled task is triggered.
   *     *   ScalingGroupId: Specify the minimum number, maximum number, or expected number of instances for the scaling group for which you create the scheduled task.
   *     **
   *     **Note** You cannot specify ScheduledAction and ScalingGroupId at the same time.
   *
   * @param request CreateScheduledTaskRequest
   * @return CreateScheduledTaskResponse
   */
  async createScheduledTask(request: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduledTaskWithOptions(request, runtime);
  }

  /**
   * @summary Deactivates a scaling configuration.
   *
   * @description *   You can call this operation to deactivate a scaling configuration only in a disabled scaling group.
   *
   * @param request DeactivateScalingConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeactivateScalingConfigurationResponse
   */
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

  /**
   * @summary Deactivates a scaling configuration.
   *
   * @description *   You can call this operation to deactivate a scaling configuration only in a disabled scaling group.
   *
   * @param request DeactivateScalingConfigurationRequest
   * @return DeactivateScalingConfigurationResponse
   */
  async deactivateScalingConfiguration(request: DeactivateScalingConfigurationRequest): Promise<DeactivateScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you no longer need an event-triggered task, you can call the DeleteAlarm operation to delete it.
   *
   * @param request DeleteAlarmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAlarmResponse
   */
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

  /**
   * @summary Deletes an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you no longer need an event-triggered task, you can call the DeleteAlarm operation to delete it.
   *
   * @param request DeleteAlarmRequest
   * @return DeleteAlarmResponse
   */
  async deleteAlarm(request: DeleteAlarmRequest): Promise<DeleteAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlarmWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a scaling configuration of the Elastic Container Instance type. If the scaling configuration of a scaling group is in the Inactive state and the scaling group contains no elastic container instances created from the scaling configuration, you can call the DeleteEciScalingConfiguration operation to delete the scaling configuration to free up the scaling configuration quota.
   *
   * @description You cannot call this operation to delete a scaling configuration in the following scenarios:
   * *   The scaling configuration is in the Active state.
   * *   The scaling group contains elastic container instances created from the scaling configuration.
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
   * @summary Deletes a scaling configuration of the Elastic Container Instance type. If the scaling configuration of a scaling group is in the Inactive state and the scaling group contains no elastic container instances created from the scaling configuration, you can call the DeleteEciScalingConfiguration operation to delete the scaling configuration to free up the scaling configuration quota.
   *
   * @description You cannot call this operation to delete a scaling configuration in the following scenarios:
   * *   The scaling configuration is in the Active state.
   * *   The scaling group contains elastic container instances created from the scaling configuration.
   *
   * @param request DeleteEciScalingConfigurationRequest
   * @return DeleteEciScalingConfigurationResponse
   */
  async deleteEciScalingConfiguration(request: DeleteEciScalingConfigurationRequest): Promise<DeleteEciScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a lifecycle hook. If you no longer require a lifecycle hook, you can call the DeleteLifecycleHook operation to delete it, which frees up the lifecycle hook quota.
   *
   * @description If you delete an effective lifecycle hook before its timeout period ends, the instances on which the lifecycle hook takes effect exits the Pending state ahead of schedule. You can use the following methods to delete a lifecycle hook:
   * *   Include `LifecycleHookId` within your request to specify the lifecycle hook that you want to delete. In this case, `ScalingGroupId` and `LifecycleHookName` are ignored.
   * *   Include `ScalingGroupId` and `LifecycleHookName` within your request to specify the lifecycle hook that you want to delete.
   *
   * @param request DeleteLifecycleHookRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteLifecycleHookResponse
   */
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

  /**
   * @summary Deletes a lifecycle hook. If you no longer require a lifecycle hook, you can call the DeleteLifecycleHook operation to delete it, which frees up the lifecycle hook quota.
   *
   * @description If you delete an effective lifecycle hook before its timeout period ends, the instances on which the lifecycle hook takes effect exits the Pending state ahead of schedule. You can use the following methods to delete a lifecycle hook:
   * *   Include `LifecycleHookId` within your request to specify the lifecycle hook that you want to delete. In this case, `ScalingGroupId` and `LifecycleHookName` are ignored.
   * *   Include `ScalingGroupId` and `LifecycleHookName` within your request to specify the lifecycle hook that you want to delete.
   *
   * @param request DeleteLifecycleHookRequest
   * @return DeleteLifecycleHookResponse
   */
  async deleteLifecycleHook(request: DeleteLifecycleHookRequest): Promise<DeleteLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLifecycleHookWithOptions(request, runtime);
  }

  /**
   * @summary Deletes event notification rules. The event notification feature facilitates efficient issue identification and event management by automatically forwarding notifications from Auto Scaling to designated endpoints such as CloudMonitor or Message Service (MNS) topics and queues. If you no longer require an event notification rule, you can call the DeleteNotificationConfiguration operation to delete it.
   *
   * @param request DeleteNotificationConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteNotificationConfigurationResponse
   */
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

  /**
   * @summary Deletes event notification rules. The event notification feature facilitates efficient issue identification and event management by automatically forwarding notifications from Auto Scaling to designated endpoints such as CloudMonitor or Message Service (MNS) topics and queues. If you no longer require an event notification rule, you can call the DeleteNotificationConfiguration operation to delete it.
   *
   * @param request DeleteNotificationConfigurationRequest
   * @return DeleteNotificationConfigurationResponse
   */
  async deleteNotificationConfiguration(request: DeleteNotificationConfigurationRequest): Promise<DeleteNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNotificationConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a scaling configuration that is used to create Elastic Compute Service (ECS) instances.
   *
   * @description You cannot delete a scaling configuration in one of the following scenarios:
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
   * @summary Deletes a scaling configuration that is used to create Elastic Compute Service (ECS) instances.
   *
   * @description You cannot delete a scaling configuration in one of the following scenarios:
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

  /**
   * @summary Deletes a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can create scaling groups to manage your computing power with ease. The computing power refers to the instances that provide the computing capability. If you no longer require a scaling group, you can call the DeleteScalingGroup operation to delete it to free up the scaling group quota.
   *
   * @description Before you call the DeleteScalingGroup operation, take note of the following items:
   * *   If you delete a scaling group, the scaling configurations, scaling rules, scaling activities, and scaling requests related to the scaling group are also deleted.
   * *   If you delete a scaling group, the scheduled tasks and event-triggered tasks of the scaling group are not deleted. The Server Load Balancer (SLB) instances and ApsaraDB RDS instances that are attached to the scaling group are also not deleted.
   * *   If the scaling group that you want to delete contains ECS instances or elastic container instances that are in the In Service state, Auto Scaling stops the instances and then removes all manually added instances from the scaling group or releases all automatically created instances in the scaling group before the scaling group is deleted.
   *     **
   *     **Note** Before you delete a scaling group, make sure that the Deletion Protection feature is disabled. If you have enabled the Deletion Protection feature for a scaling group, disable the feature on the Modify Scaling Group page before you delete the scaling group.
   * *   If you do not disable the Deletion Protection feature for a scaling group, you cannot delete the scaling group by using the Auto Scaling console or calling this operation. The Deletion Protection feature is an effective measure to safeguard scaling groups against unintended deletion.
   * *   Prior to deleting a scaling group, make sure that your ECS instances within the scaling group are safeguarded against unintended release. Even if you have already enabled the Release Protection feature for the ECS instances, you must manually put these ECS instances into the Protected state. Doing so guarantees that the ECS instances will not be forcibly released during the deletion process of the scaling group, providing an extra layer of security.
   *     **
   *     **Note** Before you delete a scaling group, we recommend that you enable the Deletion Protection feature for ECS instances that you want to retain. This action guarantees that the ECS instances are not forcibly released after you delete the scaling group. For more information, see [SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html).
   *
   * @param request DeleteScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScalingGroupResponse
   */
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

  /**
   * @summary Deletes a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can create scaling groups to manage your computing power with ease. The computing power refers to the instances that provide the computing capability. If you no longer require a scaling group, you can call the DeleteScalingGroup operation to delete it to free up the scaling group quota.
   *
   * @description Before you call the DeleteScalingGroup operation, take note of the following items:
   * *   If you delete a scaling group, the scaling configurations, scaling rules, scaling activities, and scaling requests related to the scaling group are also deleted.
   * *   If you delete a scaling group, the scheduled tasks and event-triggered tasks of the scaling group are not deleted. The Server Load Balancer (SLB) instances and ApsaraDB RDS instances that are attached to the scaling group are also not deleted.
   * *   If the scaling group that you want to delete contains ECS instances or elastic container instances that are in the In Service state, Auto Scaling stops the instances and then removes all manually added instances from the scaling group or releases all automatically created instances in the scaling group before the scaling group is deleted.
   *     **
   *     **Note** Before you delete a scaling group, make sure that the Deletion Protection feature is disabled. If you have enabled the Deletion Protection feature for a scaling group, disable the feature on the Modify Scaling Group page before you delete the scaling group.
   * *   If you do not disable the Deletion Protection feature for a scaling group, you cannot delete the scaling group by using the Auto Scaling console or calling this operation. The Deletion Protection feature is an effective measure to safeguard scaling groups against unintended deletion.
   * *   Prior to deleting a scaling group, make sure that your ECS instances within the scaling group are safeguarded against unintended release. Even if you have already enabled the Release Protection feature for the ECS instances, you must manually put these ECS instances into the Protected state. Doing so guarantees that the ECS instances will not be forcibly released during the deletion process of the scaling group, providing an extra layer of security.
   *     **
   *     **Note** Before you delete a scaling group, we recommend that you enable the Deletion Protection feature for ECS instances that you want to retain. This action guarantees that the ECS instances are not forcibly released after you delete the scaling group. For more information, see [SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html).
   *
   * @param request DeleteScalingGroupRequest
   * @return DeleteScalingGroupResponse
   */
  async deleteScalingGroup(request: DeleteScalingGroupRequest): Promise<DeleteScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a scaling rule.
   *
   * @param request DeleteScalingRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScalingRuleResponse
   */
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

  /**
   * @summary Deletes a scaling rule.
   *
   * @param request DeleteScalingRuleRequest
   * @return DeleteScalingRuleResponse
   */
  async deleteScalingRule(request: DeleteScalingRuleRequest): Promise<DeleteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingRuleWithOptions(request, runtime);
  }

  /**
   * @summary Deletes scheduled tasks. For workloads with predictable patterns, you can create scheduled tasks to align with your business requirements and optimize resource utilization for cost savings. These tasks automatically ensure that sufficient computing resources are provisioned in anticipation of peak hours and efficiently release unused resources during off-peak hours, thereby streamlining operational efficiency and reducing expenses. If you no longer require a scheduled task, you can call the DeleteScheduledTask operation to delete it.
   *
   * @param request DeleteScheduledTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScheduledTaskResponse
   */
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

  /**
   * @summary Deletes scheduled tasks. For workloads with predictable patterns, you can create scheduled tasks to align with your business requirements and optimize resource utilization for cost savings. These tasks automatically ensure that sufficient computing resources are provisioned in anticipation of peak hours and efficiently release unused resources during off-peak hours, thereby streamlining operational efficiency and reducing expenses. If you no longer require a scheduled task, you can call the DeleteScheduledTask operation to delete it.
   *
   * @param request DeleteScheduledTaskRequest
   * @return DeleteScheduledTaskResponse
   */
  async deleteScheduledTask(request: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduledTaskWithOptions(request, runtime);
  }

  /**
   * @summary Queries event-triggered tasks. You can call the DescribeAlarms operation to learn about the configurations of event-triggered tasks and keep updated on monitoring data changes. This helps you troubleshoot system resource issues at the earliest opportunity and ensures system stability and reliability.
   *
   * @param request DescribeAlarmsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAlarmsResponse
   */
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

  /**
   * @summary Queries event-triggered tasks. You can call the DescribeAlarms operation to learn about the configurations of event-triggered tasks and keep updated on monitoring data changes. This helps you troubleshoot system resource issues at the earliest opportunity and ensures system stability and reliability.
   *
   * @param request DescribeAlarmsRequest
   * @return DescribeAlarmsResponse
   */
  async describeAlarms(request: DescribeAlarmsRequest): Promise<DescribeAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of scaling activities that prompt text message or email notifications.
   *
   * @param request DescribeAlertConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAlertConfigurationResponse
   */
  async describeAlertConfigurationWithOptions(request: DescribeAlertConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertConfigurationResponse> {
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
      action: "DescribeAlertConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeAlertConfigurationResponse({}));
  }

  /**
   * @summary Queries the status of scaling activities that prompt text message or email notifications.
   *
   * @param request DescribeAlertConfigurationRequest
   * @return DescribeAlertConfigurationResponse
   */
  async describeAlertConfiguration(request: DescribeAlertConfigurationRequest): Promise<DescribeAlertConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a scaling configuration. You can query a scaling configuration by its ID to learn about its details such as the temporary storage size, number of IPv6 addresses, and bandwidth of the elastic IP address (EIP). The scaling configuration details can be obtained as a YAML file.
   *
   * @param request DescribeEciScalingConfigurationDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEciScalingConfigurationDetailResponse
   */
  async describeEciScalingConfigurationDetailWithOptions(request: DescribeEciScalingConfigurationDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEciScalingConfigurationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFormat)) {
      query["OutputFormat"] = request.outputFormat;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DescribeEciScalingConfigurationDetail",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEciScalingConfigurationDetailResponse>(await this.callApi(params, req, runtime), new DescribeEciScalingConfigurationDetailResponse({}));
  }

  /**
   * @summary Queries the details of a scaling configuration. You can query a scaling configuration by its ID to learn about its details such as the temporary storage size, number of IPv6 addresses, and bandwidth of the elastic IP address (EIP). The scaling configuration details can be obtained as a YAML file.
   *
   * @param request DescribeEciScalingConfigurationDetailRequest
   * @return DescribeEciScalingConfigurationDetailResponse
   */
  async describeEciScalingConfigurationDetail(request: DescribeEciScalingConfigurationDetailRequest): Promise<DescribeEciScalingConfigurationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEciScalingConfigurationDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries scaling configurations of the Elastic Container Instance type to learn the scaling configuration details. This allows you to select an appropriate template when you create elastic container instances.
   *
   * @param request DescribeEciScalingConfigurationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEciScalingConfigurationsResponse
   */
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

  /**
   * @summary Queries scaling configurations of the Elastic Container Instance type to learn the scaling configuration details. This allows you to select an appropriate template when you create elastic container instances.
   *
   * @param request DescribeEciScalingConfigurationsRequest
   * @return DescribeEciScalingConfigurationsResponse
   */
  async describeEciScalingConfigurations(request: DescribeEciScalingConfigurationsRequest): Promise<DescribeEciScalingConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEciScalingConfigurationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a lifecycle hook. If you want to query the details of a lifecycle hook, you can call the DescribeLifecycleActions operation. For example, you can query the execution status and ID of a lifecycle hook, along with the Elastic Compute Service (ECS) instances on which the lifecycle hook takes effect. When you call this operation, you can specify parameters such as ScalingActivityId, LifecycleActionToken, and MaxResults to query the details of a lifecycle hook.
   *
   * @description If a scaling activity is executed and a lifecycle hook is created for the scaling activity, the lifecycle hook triggers a lifecycle action. A lifecycle action can be in one of the following states:
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
   * @summary Queries the details of a lifecycle hook. If you want to query the details of a lifecycle hook, you can call the DescribeLifecycleActions operation. For example, you can query the execution status and ID of a lifecycle hook, along with the Elastic Compute Service (ECS) instances on which the lifecycle hook takes effect. When you call this operation, you can specify parameters such as ScalingActivityId, LifecycleActionToken, and MaxResults to query the details of a lifecycle hook.
   *
   * @description If a scaling activity is executed and a lifecycle hook is created for the scaling activity, the lifecycle hook triggers a lifecycle action. A lifecycle action can be in one of the following states:
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

  /**
   * @summary Queries lifecycle hooks. If you want to check whether the configurations of your lifecycle hooks are correct or you want to query the details of multiple lifecycle hooks at the same time, you can call the DescribeLifecycleHooks operation. You can specify lifecycle hook IDs or scaling group IDs when you call this operation. This operation returns details such as the default actions, scaling activities, Alibaba Cloud Resource Names (ARNs) of notification recipients, and timeout periods of lifecycle hooks.
   *
   * @description You can use one of the following methods to query lifecycle hooks:
   * *   Specify a list of lifecycle hook IDs by using the LifecycleHookIds parameter. In this case, you do not need to specify the ScalingGroupId and LifecycleHookName parameters.
   * *   Specify the scaling group ID by using the ScalingGroupId parameter.
   * *   Specify the scaling group ID by using the ScalingGroupId parameter and the lifecycle hook name by using the LifecycleHookName parameter at the same time.
   *
   * @param request DescribeLifecycleHooksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLifecycleHooksResponse
   */
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

  /**
   * @summary Queries lifecycle hooks. If you want to check whether the configurations of your lifecycle hooks are correct or you want to query the details of multiple lifecycle hooks at the same time, you can call the DescribeLifecycleHooks operation. You can specify lifecycle hook IDs or scaling group IDs when you call this operation. This operation returns details such as the default actions, scaling activities, Alibaba Cloud Resource Names (ARNs) of notification recipients, and timeout periods of lifecycle hooks.
   *
   * @description You can use one of the following methods to query lifecycle hooks:
   * *   Specify a list of lifecycle hook IDs by using the LifecycleHookIds parameter. In this case, you do not need to specify the ScalingGroupId and LifecycleHookName parameters.
   * *   Specify the scaling group ID by using the ScalingGroupId parameter.
   * *   Specify the scaling group ID by using the ScalingGroupId parameter and the lifecycle hook name by using the LifecycleHookName parameter at the same time.
   *
   * @param request DescribeLifecycleHooksRequest
   * @return DescribeLifecycleHooksResponse
   */
  async describeLifecycleHooks(request: DescribeLifecycleHooksRequest): Promise<DescribeLifecycleHooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLifecycleHooksWithOptions(request, runtime);
  }

  /**
   * @summary Queries resource quotas. You can call the DescribeLimitation operation to query the upper limits on resources such as scheduled tasks that can be created in a scaling group, load balancers that can be attached to a scaling group, instances that can be contained in a scaling group, and scaling configurations that can be created in a scaling group.
   *
   * @param request DescribeLimitationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLimitationResponse
   */
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

  /**
   * @summary Queries resource quotas. You can call the DescribeLimitation operation to query the upper limits on resources such as scheduled tasks that can be created in a scaling group, load balancers that can be attached to a scaling group, instances that can be contained in a scaling group, and scaling configurations that can be created in a scaling group.
   *
   * @param request DescribeLimitationRequest
   * @return DescribeLimitationResponse
   */
  async describeLimitation(request: DescribeLimitationRequest): Promise<DescribeLimitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLimitationWithOptions(request, runtime);
  }

  /**
   * @summary Queries notifications. If you want to learn about a notification regarding the status of a scaling event or resource changes, you can call the DescribeNotificationConfigurations operation. This operation enables you to retrieve notification details, analyze resource change data, and refine scaling policies to efficiently utilize resources and fulfill business needs.
   *
   * @param request DescribeNotificationConfigurationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNotificationConfigurationsResponse
   */
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

  /**
   * @summary Queries notifications. If you want to learn about a notification regarding the status of a scaling event or resource changes, you can call the DescribeNotificationConfigurations operation. This operation enables you to retrieve notification details, analyze resource change data, and refine scaling policies to efficiently utilize resources and fulfill business needs.
   *
   * @param request DescribeNotificationConfigurationsRequest
   * @return DescribeNotificationConfigurationsResponse
   */
  async describeNotificationConfigurations(request: DescribeNotificationConfigurationsRequest): Promise<DescribeNotificationConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationConfigurationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries notification types. You can call the DescribeNotificationTypes operation to query the types of notifications on scaling events or resource changes occurred in your scaling groups. Notifications are triggered in scenarios such as successful scale-out events, successful scale-in events, expiration of scheduled tasks, and partially successful scale-out events.
   *
   * @param request DescribeNotificationTypesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNotificationTypesResponse
   */
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

  /**
   * @summary Queries notification types. You can call the DescribeNotificationTypes operation to query the types of notifications on scaling events or resource changes occurred in your scaling groups. Notifications are triggered in scenarios such as successful scale-out events, successful scale-in events, expiration of scheduled tasks, and partially successful scale-out events.
   *
   * @param request DescribeNotificationTypesRequest
   * @return DescribeNotificationTypesResponse
   */
  async describeNotificationTypes(request: DescribeNotificationTypesRequest): Promise<DescribeNotificationTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationTypesWithOptions(request, runtime);
  }

  /**
   * @summary Filters instance types that meet your business requirements. If you create a scaling configuration by opting for the Specify Instance Type approach, you can call the DescribePatternTypes operation. This operation is designed to sift through and identify instance types that fulfill your specific business needs. It does so by examining the number of vCPUs, memory size, instance family level, and maximum budgeted expense that you specify within the scaling configuration settings.
   *
   * @param request DescribePatternTypesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePatternTypesResponse
   */
  async describePatternTypesWithOptions(request: DescribePatternTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePatternTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePatternTypes",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePatternTypesResponse>(await this.callApi(params, req, runtime), new DescribePatternTypesResponse({}));
  }

  /**
   * @summary Filters instance types that meet your business requirements. If you create a scaling configuration by opting for the Specify Instance Type approach, you can call the DescribePatternTypes operation. This operation is designed to sift through and identify instance types that fulfill your specific business needs. It does so by examining the number of vCPUs, memory size, instance family level, and maximum budgeted expense that you specify within the scaling configuration settings.
   *
   * @param request DescribePatternTypesRequest
   * @return DescribePatternTypesResponse
   */
  async describePatternTypes(request: DescribePatternTypesRequest): Promise<DescribePatternTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePatternTypesWithOptions(request, runtime);
  }

  /**
   * @summary Queries regions. Before you activate Auto Scaling, you can call the DescribeRegions operation to query the regions where Auto Scaling is officially launched. This preliminary step facilitates the strategic selection of both the optimal region and availability zones for activating Auto Scaling, thereby guaranteeing the finest access speeds and operational efficiency within your chosen geographical area.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
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

  /**
   * @summary Queries regions. Before you activate Auto Scaling, you can call the DescribeRegions operation to query the regions where Auto Scaling is officially launched. This preliminary step facilitates the strategic selection of both the optimal region and availability zones for activating Auto Scaling, thereby guaranteeing the finest access speeds and operational efficiency within your chosen geographical area.
   *
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries scaling activities.
   *
   * @description You can specify a scaling group ID to query all scaling activities in the scaling group.
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
   * @summary Queries scaling activities.
   *
   * @description You can specify a scaling group ID to query all scaling activities in the scaling group.
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

  /**
   * @summary Queries the details of a scaling activity. The DescribeScalingActivityDetail operation enables you to access and monitor the details of a scaling activity, which is beneficial for troubleshooting and performance analysis purposes.
   *
   * @param request DescribeScalingActivityDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingActivityDetailResponse
   */
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

  /**
   * @summary Queries the details of a scaling activity. The DescribeScalingActivityDetail operation enables you to access and monitor the details of a scaling activity, which is beneficial for troubleshooting and performance analysis purposes.
   *
   * @param request DescribeScalingActivityDetailRequest
   * @return DescribeScalingActivityDetailResponse
   */
  async describeScalingActivityDetail(request: DescribeScalingActivityDetailRequest): Promise<DescribeScalingActivityDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivityDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries scaling configurations.
   *
   * @param request DescribeScalingConfigurationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingConfigurationsResponse
   */
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

  /**
   * @summary Queries scaling configurations.
   *
   * @param request DescribeScalingConfigurationsRequest
   * @return DescribeScalingConfigurationsResponse
   */
  async describeScalingConfigurations(request: DescribeScalingConfigurationsRequest): Promise<DescribeScalingConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingConfigurationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a scaling group. You can call the DescribeScalingGroupDetail operation to query the basic information, instances, and scaling configurations of a scaling group. If you set OutputFormat to yaml, the output is a Kubernetes Deployment file in the YAML format.
   *
   * @param request DescribeScalingGroupDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingGroupDetailResponse
   */
  async describeScalingGroupDetailWithOptions(request: DescribeScalingGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outputFormat)) {
      query["OutputFormat"] = request.outputFormat;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingGroupDetail",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScalingGroupDetailResponse>(await this.callApi(params, req, runtime), new DescribeScalingGroupDetailResponse({}));
  }

  /**
   * @summary Queries a scaling group. You can call the DescribeScalingGroupDetail operation to query the basic information, instances, and scaling configurations of a scaling group. If you set OutputFormat to yaml, the output is a Kubernetes Deployment file in the YAML format.
   *
   * @param request DescribeScalingGroupDetailRequest
   * @return DescribeScalingGroupDetailResponse
   */
  async describeScalingGroupDetail(request: DescribeScalingGroupDetailRequest): Promise<DescribeScalingGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries scaling groups. If you want to query the basic information, instances, and scaling configurations of a scaling group, you can call the DescribeScalingGroups operation.
   *
   * @param request DescribeScalingGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingGroupsResponse
   */
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

  /**
   * @summary Queries scaling groups. If you want to query the basic information, instances, and scaling configurations of a scaling group, you can call the DescribeScalingGroups operation.
   *
   * @param request DescribeScalingGroupsRequest
   * @return DescribeScalingGroupsResponse
   */
  async describeScalingGroups(request: DescribeScalingGroupsRequest): Promise<DescribeScalingGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Elastic Compute Service (ECS) instances in a scaling group. If you want to flexibly filter ECS instances that meet the specified criteria and query the instance details, you can call the DescribeScalingInstances operation. This operation enables you to input custom parameters for precise query of ECS instances, helping you gain a clear understanding of the instance details and optimize scaling configurations.
   *
   * @param request DescribeScalingInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingInstancesResponse
   */
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

  /**
   * @summary Queries the Elastic Compute Service (ECS) instances in a scaling group. If you want to flexibly filter ECS instances that meet the specified criteria and query the instance details, you can call the DescribeScalingInstances operation. This operation enables you to input custom parameters for precise query of ECS instances, helping you gain a clear understanding of the instance details and optimize scaling configurations.
   *
   * @param request DescribeScalingInstancesRequest
   * @return DescribeScalingInstancesResponse
   */
  async describeScalingInstances(request: DescribeScalingInstancesRequest): Promise<DescribeScalingInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Queries all scaling rules in a scaling group.
   *
   * @description You can specify a scaling group ID to query all scaling rules in the scaling group. You can also specify the scaling rule ID, name, unique identifier, and type in the request parameters as filter conditions.
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
   * @summary Queries all scaling rules in a scaling group.
   *
   * @description You can specify a scaling group ID to query all scaling rules in the scaling group. You can also specify the scaling rule ID, name, unique identifier, and type in the request parameters as filter conditions.
   *
   * @param request DescribeScalingRulesRequest
   * @return DescribeScalingRulesResponse
   */
  async describeScalingRules(request: DescribeScalingRulesRequest): Promise<DescribeScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries scheduled tasks. A scheduled task is a predefined task that triggers the automatic execution of a scaling rule at the specified point in time. It ensures an automatic scaling of computing resources to fulfill your business demands at a minimum cost. After you create a scheduled task, you can call the DescribeScheduledTasks operation to query the details of the task, such as the execution time point and the scaling group ID. You can also call this operation to query the total number of existing scheduled tasks.
   *
   * @description You can query scheduled tasks by scaling rule, task ID, or task name.
   *
   * @param request DescribeScheduledTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScheduledTasksResponse
   */
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

    if (!Util.isUnset(request.taskEnabled)) {
      query["TaskEnabled"] = request.taskEnabled;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
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

  /**
   * @summary Queries scheduled tasks. A scheduled task is a predefined task that triggers the automatic execution of a scaling rule at the specified point in time. It ensures an automatic scaling of computing resources to fulfill your business demands at a minimum cost. After you create a scheduled task, you can call the DescribeScheduledTasks operation to query the details of the task, such as the execution time point and the scaling group ID. You can also call this operation to query the total number of existing scheduled tasks.
   *
   * @description You can query scheduled tasks by scaling rule, task ID, or task name.
   *
   * @param request DescribeScheduledTasksRequest
   * @return DescribeScheduledTasksResponse
   */
  async describeScheduledTasks(request: DescribeScheduledTasksRequest): Promise<DescribeScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduledTasksWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates one or more Application Load Balancer (ALB) server groups from a scaling group.
   *
   * @param request DetachAlbServerGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachAlbServerGroupsResponse
   */
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

  /**
   * @summary Disassociates one or more Application Load Balancer (ALB) server groups from a scaling group.
   *
   * @param request DetachAlbServerGroupsRequest
   * @return DetachAlbServerGroupsResponse
   */
  async detachAlbServerGroups(request: DetachAlbServerGroupsRequest): Promise<DetachAlbServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAlbServerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates one or more ApsaraDB RDS instances from a scaling group.
   *
   * @param request DetachDBInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachDBInstancesResponse
   */
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

    if (!Util.isUnset(request.removeSecurityGroup)) {
      query["RemoveSecurityGroup"] = request.removeSecurityGroup;
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

  /**
   * @summary Disassociates one or more ApsaraDB RDS instances from a scaling group.
   *
   * @param request DetachDBInstancesRequest
   * @return DetachDBInstancesResponse
   */
  async detachDBInstances(request: DetachDBInstancesRequest): Promise<DetachDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDBInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Removes instances from a scaling group. If an enabled scaling group has no ongoing scaling activities, you can call the DetachInstances operation to remove one or more Elastic Compute Service (ECS) instances, elastic container instances, or Alibaba Cloud-hosted third-party instances from the scaling group.
   *
   * @description *   Before you call the DetachInstances operation, make sure that the following conditions are met:
   *     *   The specified scaling group is enabled.
   *     *   The specified scaling group does not have any ongoing scaling activities.
   *     **
   *     **Note** If the specified scaling group does not have any ongoing scaling activities, the operation can bypass the cooldown period of the scaling group and immediately trigger scaling activities.
   * *   Before you call this operation, take note of the following items:
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation can run independently. If needed, you can call the [AttachInstances](https://help.aliyun.com/document_detail/25954.html) operation to re-add these instances to a scaling group.
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation are not stopped or released.
   *     *   A successful call only means that Auto Scaling accepts your request. Scaling activities can be triggered as expected, but their successful execution is not guaranteed. You can query the status of a scaling activity based on the ScalingActivityId response parameter.
   *     *   The removal of ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances must not result in the overall number of instances within the specified scaling group falling below the minimum capacity threshold (MinSize); otherwise, an error will be reported.
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

    if (!Util.isUnset(request.ignoreInvalidInstance)) {
      query["IgnoreInvalidInstance"] = request.ignoreInvalidInstance;
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
   * @summary Removes instances from a scaling group. If an enabled scaling group has no ongoing scaling activities, you can call the DetachInstances operation to remove one or more Elastic Compute Service (ECS) instances, elastic container instances, or Alibaba Cloud-hosted third-party instances from the scaling group.
   *
   * @description *   Before you call the DetachInstances operation, make sure that the following conditions are met:
   *     *   The specified scaling group is enabled.
   *     *   The specified scaling group does not have any ongoing scaling activities.
   *     **
   *     **Note** If the specified scaling group does not have any ongoing scaling activities, the operation can bypass the cooldown period of the scaling group and immediately trigger scaling activities.
   * *   Before you call this operation, take note of the following items:
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation can run independently. If needed, you can call the [AttachInstances](https://help.aliyun.com/document_detail/25954.html) operation to re-add these instances to a scaling group.
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation are not stopped or released.
   *     *   A successful call only means that Auto Scaling accepts your request. Scaling activities can be triggered as expected, but their successful execution is not guaranteed. You can query the status of a scaling activity based on the ScalingActivityId response parameter.
   *     *   The removal of ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances must not result in the overall number of instances within the specified scaling group falling below the minimum capacity threshold (MinSize); otherwise, an error will be reported.
   *
   * @param request DetachInstancesRequest
   * @return DetachInstancesResponse
   */
  async detachInstances(request: DetachInstancesRequest): Promise<DetachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Detaches Classic Load Balancer (CLB, formerly known as Server Load Balancer or SLB) instances from a scaling group. If the current CLB instance no longer meets your business requirements, you can call the DetachLoadBalancers operation to detach it from your scaling group. When you call this operation, you can use ScalingGroupId, LoadBalancer.N, and ForceDetach to specify one or more CLB instances to detach. You can also determine whether to call this operation asynchronously and whether to remove the Elastic Compute Service (ECS) instances acting as backend servers from the backend server groups of the CLB instance. You can call this operation to detach only CLB instances from a scaling group.
   *
   * @param request DetachLoadBalancersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachLoadBalancersResponse
   */
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

  /**
   * @summary Detaches Classic Load Balancer (CLB, formerly known as Server Load Balancer or SLB) instances from a scaling group. If the current CLB instance no longer meets your business requirements, you can call the DetachLoadBalancers operation to detach it from your scaling group. When you call this operation, you can use ScalingGroupId, LoadBalancer.N, and ForceDetach to specify one or more CLB instances to detach. You can also determine whether to call this operation asynchronously and whether to remove the Elastic Compute Service (ECS) instances acting as backend servers from the backend server groups of the CLB instance. You can call this operation to detach only CLB instances from a scaling group.
   *
   * @param request DetachLoadBalancersRequest
   * @return DetachLoadBalancersResponse
   */
  async detachLoadBalancers(request: DetachLoadBalancersRequest): Promise<DetachLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLoadBalancersWithOptions(request, runtime);
  }

  /**
   * @summary Detach server groups from a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the DetachServerGroups operation. By detaching Application Load Balancer (ALB) or Network Load Balancer (NLB) server groups from your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   *
   * @param request DetachServerGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachServerGroupsResponse
   */
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

  /**
   * @summary Detach server groups from a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the DetachServerGroups operation. By detaching Application Load Balancer (ALB) or Network Load Balancer (NLB) server groups from your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   *
   * @param request DetachServerGroupsRequest
   * @return DetachServerGroupsResponse
   */
  async detachServerGroups(request: DetachServerGroupsRequest): Promise<DetachServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachServerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Detaches vServer groups from a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups to improve service performance. If the load balancer currently attached to your scaling group is no longer needed to distribute the access traffic to the instances in your scaling group, you can call the DetachVServerGroups operation to detach one or more vServer groups of this load balancer from the scaling group.
   *
   * @description *   When you call the DetachVServerGroups operation, you must use the following parameters to specify the vServer groups that you want to detach from your scaling group:
   *     *   LoadBalancerId: the ID of the load balancer
   *     *   VServerGroupId: the ID of the vServer group
   *     *   Port: the port number of the vServer group
   * *   When the vServer group specified by the request parameters matches that attached to your scaling group, this operation yields a favorable result. Otherwise, the request is ignored and no error is reported.
   * *   Before you call this operation, you must make sure that the load balancer has ceased routing the access traffic to the instances in the scaling group. Failure to do so may lead to service requests being dropped or lost during the detachment process.
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
   * @summary Detaches vServer groups from a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups to improve service performance. If the load balancer currently attached to your scaling group is no longer needed to distribute the access traffic to the instances in your scaling group, you can call the DetachVServerGroups operation to detach one or more vServer groups of this load balancer from the scaling group.
   *
   * @description *   When you call the DetachVServerGroups operation, you must use the following parameters to specify the vServer groups that you want to detach from your scaling group:
   *     *   LoadBalancerId: the ID of the load balancer
   *     *   VServerGroupId: the ID of the vServer group
   *     *   Port: the port number of the vServer group
   * *   When the vServer group specified by the request parameters matches that attached to your scaling group, this operation yields a favorable result. Otherwise, the request is ignored and no error is reported.
   * *   Before you call this operation, you must make sure that the load balancer has ceased routing the access traffic to the instances in the scaling group. Failure to do so may lead to service requests being dropped or lost during the detachment process.
   *
   * @param request DetachVServerGroupsRequest
   * @return DetachVServerGroupsResponse
   */
  async detachVServerGroups(request: DetachVServerGroupsRequest): Promise<DetachVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachVServerGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Disables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you currently do not need an event-triggered task, you can call the DisableAlarm operation to disable it.
   *
   * @description Before you disable an event-triggered task, make sure that the task is in the `Normal`, `Alert`, or `Insufficient Data` state.
   *
   * @param request DisableAlarmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableAlarmResponse
   */
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

  /**
   * @summary Disables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you currently do not need an event-triggered task, you can call the DisableAlarm operation to disable it.
   *
   * @description Before you disable an event-triggered task, make sure that the task is in the `Normal`, `Alert`, or `Insufficient Data` state.
   *
   * @param request DisableAlarmRequest
   * @return DisableAlarmResponse
   */
  async disableAlarm(request: DisableAlarmRequest): Promise<DisableAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAlarmWithOptions(request, runtime);
  }

  /**
   * @summary Disables a scaling group. If you temporarily do not require a scaling group that is in the Enabled state, you can call the DisableScalingGroup operation to disable it.
   *
   * @description Before you call this operation to disable a scaling group, take note of the following items:
   * *   If scaling activities are being executed in the specified scaling group when you call this operation, these activities will continue until they are complete. However, scaling activities that are triggered after this operation is called will be rejected.
   * *   This operation can be called only when the scaling group is in the Active state.
   *
   * @param request DisableScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableScalingGroupResponse
   */
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

  /**
   * @summary Disables a scaling group. If you temporarily do not require a scaling group that is in the Enabled state, you can call the DisableScalingGroup operation to disable it.
   *
   * @description Before you call this operation to disable a scaling group, take note of the following items:
   * *   If scaling activities are being executed in the specified scaling group when you call this operation, these activities will continue until they are complete. However, scaling activities that are triggered after this operation is called will be rejected.
   * *   This operation can be called only when the scaling group is in the Active state.
   *
   * @param request DisableScalingGroupRequest
   * @return DisableScalingGroupResponse
   */
  async disableScalingGroup(request: DisableScalingGroupRequest): Promise<DisableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableScalingGroupWithOptions(request, runtime);
  }

  /**
   * @summary Enables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you want to reuse an event-triggered task that is in the Disabled state, you can call the EnableAlarm operation to enable it.
   *
   * @param request EnableAlarmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableAlarmResponse
   */
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

  /**
   * @summary Enables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you want to reuse an event-triggered task that is in the Disabled state, you can call the EnableAlarm operation to enable it.
   *
   * @param request EnableAlarmRequest
   * @return EnableAlarmResponse
   */
  async enableAlarm(request: EnableAlarmRequest): Promise<EnableAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAlarmWithOptions(request, runtime);
  }

  /**
   * @summary Enables a scaling group. If a scaling group is in the Disabled state and contains an instance configuration source such as a launch template or a scaling configuration, you can call the EnableScalingGroup operation to enable the scaling group. This operation permits Auto Scaling to dynamically adjust the computing power (also known as the number of instances) in the scaling group based on your business requirements.
   *
   * @description *   You can call this operation to enable a scaling group only if the scaling group is in the Inactive state and contains an instance configuration source such as a launch temple or a scaling configuration. The instance configuration source can also be the Elastic Compute Service (ECS) instance that you specified when you created the scaling group. If the preceding requirements are not met, the operation will fail.
   *     **
   *     **Note** A scaling group can have only one active instance configuration source at a time. When you call this operation to enable a scaling group, you can specify a scaling configuration or a launch template for the scaling group. If the scaling group already have an instance configuration source defined prior to your calling, the scaling configuration or launch template specified within your request will supersede the existing scaling configuration or launch template.
   * *   If you specify InstanceId.N to add to the scaling group within your request, Auto Scaling will check whether the addition of InstanceId.N will cause the total number of ECS instances in the scaling group to fall outside the boundaries specified by MinSize and MaxSize after you call this operation.
   *     *   If the call results in the total number of ECS instances dropping below the value of MinSize, Auto Scaling proactively creates pay-as-you-go ECS instances to ensure that the total number reaches the minimum threshold. For example, if you set MinSize to 5 when you created a scaling group and include InstanceId.N within your request to add two ECS instances when you attempt to enable the scaling group, Auto Scaling creates three more ECS instances in the scaling group after the two ECS instances are added.
   *     *   If the call results in the total number of ECS instances exceeding the value of MaxSize, the operation fails.
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
   * @summary Enables a scaling group. If a scaling group is in the Disabled state and contains an instance configuration source such as a launch template or a scaling configuration, you can call the EnableScalingGroup operation to enable the scaling group. This operation permits Auto Scaling to dynamically adjust the computing power (also known as the number of instances) in the scaling group based on your business requirements.
   *
   * @description *   You can call this operation to enable a scaling group only if the scaling group is in the Inactive state and contains an instance configuration source such as a launch temple or a scaling configuration. The instance configuration source can also be the Elastic Compute Service (ECS) instance that you specified when you created the scaling group. If the preceding requirements are not met, the operation will fail.
   *     **
   *     **Note** A scaling group can have only one active instance configuration source at a time. When you call this operation to enable a scaling group, you can specify a scaling configuration or a launch template for the scaling group. If the scaling group already have an instance configuration source defined prior to your calling, the scaling configuration or launch template specified within your request will supersede the existing scaling configuration or launch template.
   * *   If you specify InstanceId.N to add to the scaling group within your request, Auto Scaling will check whether the addition of InstanceId.N will cause the total number of ECS instances in the scaling group to fall outside the boundaries specified by MinSize and MaxSize after you call this operation.
   *     *   If the call results in the total number of ECS instances dropping below the value of MinSize, Auto Scaling proactively creates pay-as-you-go ECS instances to ensure that the total number reaches the minimum threshold. For example, if you set MinSize to 5 when you created a scaling group and include InstanceId.N within your request to add two ECS instances when you attempt to enable the scaling group, Auto Scaling creates three more ECS instances in the scaling group after the two ECS instances are added.
   *     *   If the call results in the total number of ECS instances exceeding the value of MaxSize, the operation fails.
   *
   * @param request EnableScalingGroupRequest
   * @return EnableScalingGroupResponse
   */
  async enableScalingGroup(request: EnableScalingGroupRequest): Promise<EnableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableScalingGroupWithOptions(request, runtime);
  }

  /**
   * @summary Puts an Elastic Compute Service (ECS) instance into the Standby state.
   *
   * @description ## Description
   * *   If you call the operation to put an ECS instance in a scaling group that is associated with a Classic Load Balancer (CLB) instance into the Standby state, the weight of the ECS instance as a backend server of the CLB instance is set to 0.
   * *   You can remove an instance that is in the Standby state from a scaling group, and then release the instance.
   * *   ECS instances that are in the Standby state are not removed from the scaling group during scale-in activities triggered by event-triggered tasks.
   * *   If Auto Scaling considers an ECS instance that is in the Standby state unhealthy, for example, the ECS instance is being stopped or being restarted, Auto Scaling does not update the health status of the ECS instance or trigger scale-in activities to remove the ECS instance from the scaling group. Auto Scaling updates the health status of the ECS instance only when the ECS instance is no longer in the Standby state.
   *
   * @param request EnterStandbyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnterStandbyResponse
   */
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

  /**
   * @summary Puts an Elastic Compute Service (ECS) instance into the Standby state.
   *
   * @description ## Description
   * *   If you call the operation to put an ECS instance in a scaling group that is associated with a Classic Load Balancer (CLB) instance into the Standby state, the weight of the ECS instance as a backend server of the CLB instance is set to 0.
   * *   You can remove an instance that is in the Standby state from a scaling group, and then release the instance.
   * *   ECS instances that are in the Standby state are not removed from the scaling group during scale-in activities triggered by event-triggered tasks.
   * *   If Auto Scaling considers an ECS instance that is in the Standby state unhealthy, for example, the ECS instance is being stopped or being restarted, Auto Scaling does not update the health status of the ECS instance or trigger scale-in activities to remove the ECS instance from the scaling group. Auto Scaling updates the health status of the ECS instance only when the ECS instance is no longer in the Standby state.
   *
   * @param request EnterStandbyRequest
   * @return EnterStandbyResponse
   */
  async enterStandby(request: EnterStandbyRequest): Promise<EnterStandbyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enterStandbyWithOptions(request, runtime);
  }

  /**
   * @summary Executes a scaling rule. To adjust the number of Elastic Compute Service (ECS) instances or elastic container instances, you can manually execute a scaling rule or enable Auto Scaling to execute a scaling rule. You can call the ExecuteScalingRule operation to execute simple scaling rules or step scaling rules. Auto Scaling automatically executes target tracking scaling rules and predictive scaling rules on your behalf without requiring explicit execution calls.
   *
   * @description Before you call this operation, take note of the following items:
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
   * @summary Executes a scaling rule. To adjust the number of Elastic Compute Service (ECS) instances or elastic container instances, you can manually execute a scaling rule or enable Auto Scaling to execute a scaling rule. You can call the ExecuteScalingRule operation to execute simple scaling rules or step scaling rules. Auto Scaling automatically executes target tracking scaling rules and predictive scaling rules on your behalf without requiring explicit execution calls.
   *
   * @description Before you call this operation, take note of the following items:
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

  /**
   * @summary Removes an instance from the Standby state. When a scale-in event is triggered in a scaling group, Auto Scaling does not remove Elastic Compute Service (ECS) instances or elastic container instances that are in the Standby state from the scaling group. If you want to restart the instances that are in the Standby state, you can call the ExitStandby operation to remove the instances from the Standby state and put them into the In Service state.
   *
   * @description After ECS instances or elastic container instances are removed from the Standby state, the following rules apply:
   * *   The ECS instances or elastic container instances enter the In Service state.
   * *   The default weight of each ECS instance or elastic container instance as a backend server of the attached load balancer is 50.
   * *   If you stop or restart the ECS instances or elastic container instances, the health check status of the instances will be updated.
   * *   When a scale-in event is triggered, Auto Scaling may remove the ECS instances or elastic container instances from the scaling group.
   *
   * @param request ExitStandbyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExitStandbyResponse
   */
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

  /**
   * @summary Removes an instance from the Standby state. When a scale-in event is triggered in a scaling group, Auto Scaling does not remove Elastic Compute Service (ECS) instances or elastic container instances that are in the Standby state from the scaling group. If you want to restart the instances that are in the Standby state, you can call the ExitStandby operation to remove the instances from the Standby state and put them into the In Service state.
   *
   * @description After ECS instances or elastic container instances are removed from the Standby state, the following rules apply:
   * *   The ECS instances or elastic container instances enter the In Service state.
   * *   The default weight of each ECS instance or elastic container instance as a backend server of the attached load balancer is 50.
   * *   If you stop or restart the ECS instances or elastic container instances, the health check status of the instances will be updated.
   * *   When a scale-in event is triggered, Auto Scaling may remove the ECS instances or elastic container instances from the scaling group.
   *
   * @param request ExitStandbyRequest
   * @return ExitStandbyResponse
   */
  async exitStandby(request: ExitStandbyRequest): Promise<ExitStandbyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exitStandbyWithOptions(request, runtime);
  }

  /**
   * @summary Queries the tag keys added to Auto Scaling resources. Querying tag keys facilitates easier classification, identification, and monitoring of your Auto Scaling resources, thereby enhancing the flexibility and convenience of your resource management processes.
   *
   * @param request ListTagKeysRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagKeysResponse
   */
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

  /**
   * @summary Queries the tag keys added to Auto Scaling resources. Querying tag keys facilitates easier classification, identification, and monitoring of your Auto Scaling resources, thereby enhancing the flexibility and convenience of your resource management processes.
   *
   * @param request ListTagKeysRequest
   * @return ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * @summary Queries tags. You can call the ListTagResources operation to query tags that are added to Auto Scaling resources, thereby clarifying resource utilization and facilitating efficient management. This operation aids in the automation of resource categorization and permission management processes.
   *
   * @description *   Specify at least one of the following request parameters: `ResourceIds` and `Tags`. `Tags.Key` and `Tags.Value` are used to specify the query objects.
   * *   If you provide both `ResourceIds` and `Tags` in your request, the response will exclusively include Auto Scaling resources that satisfy the criteria set by these parameters, ensuring targeted and precise information retrieval.
   *
   * @param request ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
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

  /**
   * @summary Queries tags. You can call the ListTagResources operation to query tags that are added to Auto Scaling resources, thereby clarifying resource utilization and facilitating efficient management. This operation aids in the automation of resource categorization and permission management processes.
   *
   * @description *   Specify at least one of the following request parameters: `ResourceIds` and `Tags`. `Tags.Key` and `Tags.Value` are used to specify the query objects.
   * *   If you provide both `ResourceIds` and `Tags` in your request, the response will exclusively include Auto Scaling resources that satisfy the criteria set by these parameters, ensuring targeted and precise information retrieval.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the tag keys associated with Auto Scaling resources to facilitate a deeper comprehension of those resources. By doing so, you can categorize and manage your Auto Scaling resources more efficiently.
   *
   * @param request ListTagValuesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagValuesResponse
   */
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

  /**
   * @summary Queries the tag keys associated with Auto Scaling resources to facilitate a deeper comprehension of those resources. By doing so, you can categorize and manage your Auto Scaling resources more efficiently.
   *
   * @param request ListTagValuesRequest
   * @return ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an event-triggered task.
   *
   * @description *   If you set the MetricType parameter to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Custom monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74861.html).
   * *   When you create an event-triggered task, you must specify the MetricName, DimensionKey, and DimensionValue parameters to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify the user_id and scaling_group dimensions for an event-triggered task to aggregate monitoring data of all Elastic Compute Service (ECS) instances or elastic container instances in a scaling group within an Alibaba Cloud account.
   *     *   If you set the MetricType parameter to custom, the valid values are your custom metrics.
   *     *   For information about the metrics that are supported if you set the MetricType parameter to system, see[ Event-triggered task for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * > The user_id and scaling_group dimensions are automatically populated. You need to only specify the device and state dimensions. For more information, see the `DimensionKey` and `DimensionValue` parameters in the "Request parameters" section of this topic.
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
   * @summary Modifies an event-triggered task.
   *
   * @description *   If you set the MetricType parameter to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Custom monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74861.html).
   * *   When you create an event-triggered task, you must specify the MetricName, DimensionKey, and DimensionValue parameters to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify the user_id and scaling_group dimensions for an event-triggered task to aggregate monitoring data of all Elastic Compute Service (ECS) instances or elastic container instances in a scaling group within an Alibaba Cloud account.
   *     *   If you set the MetricType parameter to custom, the valid values are your custom metrics.
   *     *   For information about the metrics that are supported if you set the MetricType parameter to system, see[ Event-triggered task for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * > The user_id and scaling_group dimensions are automatically populated. You need to only specify the device and state dimensions. For more information, see the `DimensionKey` and `DimensionValue` parameters in the "Request parameters" section of this topic.
   *
   * @param request ModifyAlarmRequest
   * @return ModifyAlarmResponse
   */
  async modifyAlarm(request: ModifyAlarmRequest): Promise<ModifyAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAlarmWithOptions(request, runtime);
  }

  /**
   * @summary Sets the status of scaling activities that prompt text message or email notifications.
   *
   * @param request ModifyAlertConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAlertConfigurationResponse
   */
  async modifyAlertConfigurationWithOptions(request: ModifyAlertConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAlertConfigurationResponse> {
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

    if (!Util.isUnset(request.scaleStatuses)) {
      query["ScaleStatuses"] = request.scaleStatuses;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAlertConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAlertConfigurationResponse>(await this.callApi(params, req, runtime), new ModifyAlertConfigurationResponse({}));
  }

  /**
   * @summary Sets the status of scaling activities that prompt text message or email notifications.
   *
   * @param request ModifyAlertConfigurationRequest
   * @return ModifyAlertConfigurationResponse
   */
  async modifyAlertConfiguration(request: ModifyAlertConfigurationRequest): Promise<ModifyAlertConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAlertConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a scaling configuration for a scaling group that contains elastic container instances.
   *
   * @description If you want to change the name of a scaling configuration in a scaling group, make sure that the new name is unique within the scaling group.
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
   * @summary Modifies a scaling configuration for a scaling group that contains elastic container instances.
   *
   * @description If you want to change the name of a scaling configuration in a scaling group, make sure that the new name is unique within the scaling group.
   *
   * @param request ModifyEciScalingConfigurationRequest
   * @return ModifyEciScalingConfigurationResponse
   */
  async modifyEciScalingConfiguration(request: ModifyEciScalingConfigurationRequest): Promise<ModifyEciScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the attributes of an Elastic Compute Service (ECS) instance in a scaling group. You can call the ModifyInstanceAttribute operation to modify the lifecycle management attribute of a manually added ECS instance in a scaling group.
   *
   * @param request ModifyInstanceAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entrusted)) {
      query["Entrusted"] = request.entrusted;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ModifyInstanceAttribute",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  /**
   * @summary Modifies the attributes of an Elastic Compute Service (ECS) instance in a scaling group. You can call the ModifyInstanceAttribute operation to modify the lifecycle management attribute of a manually added ECS instance in a scaling group.
   *
   * @param request ModifyInstanceAttributeRequest
   * @return ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a lifecycle hook. If an existing lifecycle hook does not meet your business requirements anymore, you can call the ModifyLifecycleHook operation to modify the information such as the scaling event, timeout period, and default action of the lifecycle hook. Before you modify a lifecycle hook, you can locate the lifecycle hook by its ID, name, or scaling group.
   *
   * @description You can use one of the following methods to locate the lifecycle hook that you want to modify:
   * *   Specify LifecycleHookId. In this case, ScalingGroupId and LifecycleHookName are ignored.
   * *   Specify ScalingGroupId and LifecycleHookName. Each lifecycle hook within a scaling group has a unique name.
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
   * @summary Modifies a lifecycle hook. If an existing lifecycle hook does not meet your business requirements anymore, you can call the ModifyLifecycleHook operation to modify the information such as the scaling event, timeout period, and default action of the lifecycle hook. Before you modify a lifecycle hook, you can locate the lifecycle hook by its ID, name, or scaling group.
   *
   * @description You can use one of the following methods to locate the lifecycle hook that you want to modify:
   * *   Specify LifecycleHookId. In this case, ScalingGroupId and LifecycleHookName are ignored.
   * *   Specify ScalingGroupId and LifecycleHookName. Each lifecycle hook within a scaling group has a unique name.
   *
   * @param request ModifyLifecycleHookRequest
   * @return ModifyLifecycleHookResponse
   */
  async modifyLifecycleHook(request: ModifyLifecycleHookRequest): Promise<ModifyLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLifecycleHookWithOptions(request, runtime);
  }

  /**
   * @summary Modifies event notification rules. Event notification rules support automatic sending of notifications to CloudMonitor, Message Service (MNS) topics, or MNS queues when a specified type of events occur. This helps you learn about the dynamics of your scaling group at the earliest opportunity and further automate resource management. If an existing event notification rule does not meet your business requirements, you can call the ModifyNotificationConfiguration operation to modify the event notification rule, without the need to create a new rule. Take not that you cannot modify the notification method of an event notification rule by calling this operation.
   *
   * @param request ModifyNotificationConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyNotificationConfigurationResponse
   */
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

  /**
   * @summary Modifies event notification rules. Event notification rules support automatic sending of notifications to CloudMonitor, Message Service (MNS) topics, or MNS queues when a specified type of events occur. This helps you learn about the dynamics of your scaling group at the earliest opportunity and further automate resource management. If an existing event notification rule does not meet your business requirements, you can call the ModifyNotificationConfiguration operation to modify the event notification rule, without the need to create a new rule. Take not that you cannot modify the notification method of an event notification rule by calling this operation.
   *
   * @param request ModifyNotificationConfigurationRequest
   * @return ModifyNotificationConfigurationResponse
   */
  async modifyNotificationConfiguration(request: ModifyNotificationConfigurationRequest): Promise<ModifyNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNotificationConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a scaling configuration.
   *
   * @description You can change the name of a scaling configuration in a scaling group. The name must be unique within the scaling group.
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

    if (!Util.isUnset(request.dedicatedHostClusterId)) {
      query["DedicatedHostClusterId"] = request.dedicatedHostClusterId;
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

    if (!Util.isUnset(request.networkInterfaces)) {
      query["NetworkInterfaces"] = request.networkInterfaces;
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
   * @summary Modifies a scaling configuration.
   *
   * @description You can change the name of a scaling configuration in a scaling group. The name must be unique within the scaling group.
   *
   * @param request ModifyScalingConfigurationRequest
   * @return ModifyScalingConfigurationResponse
   */
  async modifyScalingConfiguration(request: ModifyScalingConfigurationRequest): Promise<ModifyScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can modify scaling groups to adjust your computing power with ease. The computing power refers to the instances that provide the computing capability. When your scaling group cannot meet your business requirements, you can call the ModifyScalingGroup operation to modify scaling group attributes such as the maximum, minimum, and expected numbers of instances. This prevents repeated creation and configuration of scaling groups, which saves you a lot of time and resource costs.
   *
   * @description *   You cannot modify the following parameters by calling this operation:
   *     *   RegionId
   *     *   LoadBalancerId
   *     **
   *     **Note** If you want to modify the load balancer settings of your scaling group, you can call the AttachLoadBalancers operation or the DetachLoadBalancers operation.
   *     *   DBInstanceId
   *     **
   *     **Note** If you want to modify the ApsaraDB RDS instance settings of your scaling group, you can call the AttachDBInstances operation or the DetachDBInstances operation.
   * *   You can call this operation to modify a scaling group only when the scaling group is in the `Active` or `Inactive` state.
   * *   Enabling a new scaling configuration in the scaling group will not impact existing Elastic Compute Service (ECS) instances or elastic container instances that were provisioned based on the previous scaling configuration. These instances will continue to run as expected.
   * *   If the modification of the MaxSize setting leads to the total number of ECS instances or elastic container instances in the scaling group exceeding the new maximum limit, Auto Scaling proactively removes the surplus instances to restore the total number to match the new maximum limit.
   * *   If the modification of the MinSize setting leads to the total number of ECS instances or elastic container instances in the scaling group exceeding the new minimum threshold, Auto Scaling proactively adds more instances to the scaling group to ensure that the total number aligns with the new minimum threshold.
   * *   If the modification of the DesiredCapacity setting leads to the total number of ECS instances or elastic container instances in the scaling group not matching the new desired capacity, Auto Scaling proactively adjusts the total number of instances to ensure that the total number aligns with the new desired capacity.
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

    if (!Util.isUnset(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
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
   * @summary Modifies a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can modify scaling groups to adjust your computing power with ease. The computing power refers to the instances that provide the computing capability. When your scaling group cannot meet your business requirements, you can call the ModifyScalingGroup operation to modify scaling group attributes such as the maximum, minimum, and expected numbers of instances. This prevents repeated creation and configuration of scaling groups, which saves you a lot of time and resource costs.
   *
   * @description *   You cannot modify the following parameters by calling this operation:
   *     *   RegionId
   *     *   LoadBalancerId
   *     **
   *     **Note** If you want to modify the load balancer settings of your scaling group, you can call the AttachLoadBalancers operation or the DetachLoadBalancers operation.
   *     *   DBInstanceId
   *     **
   *     **Note** If you want to modify the ApsaraDB RDS instance settings of your scaling group, you can call the AttachDBInstances operation or the DetachDBInstances operation.
   * *   You can call this operation to modify a scaling group only when the scaling group is in the `Active` or `Inactive` state.
   * *   Enabling a new scaling configuration in the scaling group will not impact existing Elastic Compute Service (ECS) instances or elastic container instances that were provisioned based on the previous scaling configuration. These instances will continue to run as expected.
   * *   If the modification of the MaxSize setting leads to the total number of ECS instances or elastic container instances in the scaling group exceeding the new maximum limit, Auto Scaling proactively removes the surplus instances to restore the total number to match the new maximum limit.
   * *   If the modification of the MinSize setting leads to the total number of ECS instances or elastic container instances in the scaling group exceeding the new minimum threshold, Auto Scaling proactively adds more instances to the scaling group to ensure that the total number aligns with the new minimum threshold.
   * *   If the modification of the DesiredCapacity setting leads to the total number of ECS instances or elastic container instances in the scaling group not matching the new desired capacity, Auto Scaling proactively adjusts the total number of instances to ensure that the total number aligns with the new desired capacity.
   *
   * @param request ModifyScalingGroupRequest
   * @return ModifyScalingGroupResponse
   */
  async modifyScalingGroup(request: ModifyScalingGroupRequest): Promise<ModifyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a scaling rule. If an existing scaling rule cannot meet your business requirements, you can call the ModifyScalingRule operation to modify the scaling rule, without the need to create a new one. This streamlines your workflow, enhancing operational efficiency while also contributing to cost optimization by avoiding redundant steps.
   *
   * @param request ModifyScalingRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyScalingRuleResponse
   */
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

  /**
   * @summary Modifies a scaling rule. If an existing scaling rule cannot meet your business requirements, you can call the ModifyScalingRule operation to modify the scaling rule, without the need to create a new one. This streamlines your workflow, enhancing operational efficiency while also contributing to cost optimization by avoiding redundant steps.
   *
   * @param request ModifyScalingRuleRequest
   * @return ModifyScalingRuleResponse
   */
  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a scheduled task. If an existing scheduled task cannot meet your business requirements, you can call the ModifyScheduledTask operation to adjust its parameter settings including the scaling rule to execute and the boundary values of your scaling group, without the need to create a new scheduled task. This operation provides a flexible way to optimize scheduled tasks.
   *
   * @description You can use the following parameters to specify the scaling method of a scheduled task:
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
   * @summary Modifies a scheduled task. If an existing scheduled task cannot meet your business requirements, you can call the ModifyScheduledTask operation to adjust its parameter settings including the scaling rule to execute and the boundary values of your scaling group, without the need to create a new scheduled task. This operation provides a flexible way to optimize scheduled tasks.
   *
   * @description You can use the following parameters to specify the scaling method of a scheduled task:
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

  /**
   * @summary Rebalances the distribution of Elastic Compute Service (ECS) instances across zones. If ECS instances are unevenly distributed across multiple zones, you can call the RebalanceInstances operation to rebalance the distribution of the ECS instances across the zones.
   *
   * @description ## [](#)Usage notes
   * Auto Scaling creates new ECS instances to replace the existing ECS instances to fulfill the rebalancing purpose. Auto Scaling starts the new ECS instances before stopping the existing ECS instances. The rebalancing operation does not affect the performance or service availability of your application.
   * *   This operation is supported by only multi-zone scaling groups whose `MultiAZPolicy` is set to `BALANCE`.
   * *   A rebalancing operation is required only when the distribution of the instances of a multi-zone scaling group is significantly unbalanced. In a rebalancing activity, Auto Scaling replaces up to 20 ECS instances to rectify the unbalanced distribution.
   * *   During the execution of a rebalancing operation, if the number of instances in the scaling group approaches or hits the value of MaxSize but the rebalancing operation needs to continue, Auto Scaling allows the total number of ECS instances to momentarily exceed the value of MaxSize by 10%. This temporary surplus condition persists for a duration until equilibrium in the distribution of ECS instances is achieved. Typically, it takes 1 to 6 minutes.
   *     **
   *     **Note** If the 10% increment of the maximum number of instances in a scaling group yield a non-integer value, the decimal portion is always rounded up to ensure an additional instance is accounted for. For example, you have a scaling group that holds a maximum of 15 ECS instances. During a rebalancing operation, Auto Scaling would permit the total number of instances to momentarily surpass this limit by 2, instead of the calculated 10% (which is 1.5).
   *
   * @param request RebalanceInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RebalanceInstancesResponse
   */
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

  /**
   * @summary Rebalances the distribution of Elastic Compute Service (ECS) instances across zones. If ECS instances are unevenly distributed across multiple zones, you can call the RebalanceInstances operation to rebalance the distribution of the ECS instances across the zones.
   *
   * @description ## [](#)Usage notes
   * Auto Scaling creates new ECS instances to replace the existing ECS instances to fulfill the rebalancing purpose. Auto Scaling starts the new ECS instances before stopping the existing ECS instances. The rebalancing operation does not affect the performance or service availability of your application.
   * *   This operation is supported by only multi-zone scaling groups whose `MultiAZPolicy` is set to `BALANCE`.
   * *   A rebalancing operation is required only when the distribution of the instances of a multi-zone scaling group is significantly unbalanced. In a rebalancing activity, Auto Scaling replaces up to 20 ECS instances to rectify the unbalanced distribution.
   * *   During the execution of a rebalancing operation, if the number of instances in the scaling group approaches or hits the value of MaxSize but the rebalancing operation needs to continue, Auto Scaling allows the total number of ECS instances to momentarily exceed the value of MaxSize by 10%. This temporary surplus condition persists for a duration until equilibrium in the distribution of ECS instances is achieved. Typically, it takes 1 to 6 minutes.
   *     **
   *     **Note** If the 10% increment of the maximum number of instances in a scaling group yield a non-integer value, the decimal portion is always rounded up to ensure an additional instance is accounted for. For example, you have a scaling group that holds a maximum of 15 ECS instances. During a rebalancing operation, Auto Scaling would permit the total number of instances to momentarily surpass this limit by 2, instead of the calculated 10% (which is 1.5).
   *
   * @param request RebalanceInstancesRequest
   * @return RebalanceInstancesResponse
   */
  async rebalanceInstances(request: RebalanceInstancesRequest): Promise<RebalanceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebalanceInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Extends the time window during which Elastic Compute Service (ECS) instances stay in a Pending state. If the current time window during which an ECS instance stays in a Pending state is not sufficient for you to complete custom operations on the ECS instance, you can call the RecordLifecycleActionHeartbeat operation to extend the time window. When you call this operation, you can specify lifecycleHookId, lifecycleActionToken, and heartbeatTimeout to extend the time window for the desired ECS instance.
   *
   * @description You can call this operation only when the desired ECS instance enters a Pending state.\\
   * An ECS instance can stay in a Pending state for up to six hours. Each time an ECS instance enters a Pending state, you can extend the time window during which the ECS instance stays in a Pending state up to 20 times.
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
   * @summary Extends the time window during which Elastic Compute Service (ECS) instances stay in a Pending state. If the current time window during which an ECS instance stays in a Pending state is not sufficient for you to complete custom operations on the ECS instance, you can call the RecordLifecycleActionHeartbeat operation to extend the time window. When you call this operation, you can specify lifecycleHookId, lifecycleActionToken, and heartbeatTimeout to extend the time window for the desired ECS instance.
   *
   * @description You can call this operation only when the desired ECS instance enters a Pending state.\\
   * An ECS instance can stay in a Pending state for up to six hours. Each time an ECS instance enters a Pending state, you can extend the time window during which the ECS instance stays in a Pending state up to 20 times.
   *
   * @param request RecordLifecycleActionHeartbeatRequest
   * @return RecordLifecycleActionHeartbeatResponse
   */
  async recordLifecycleActionHeartbeat(request: RecordLifecycleActionHeartbeatRequest): Promise<RecordLifecycleActionHeartbeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordLifecycleActionHeartbeatWithOptions(request, runtime);
  }

  /**
   * @summary Removes one or more Elastic Compute Service (ECS) instances or elastic container instances from a scaling group.
   *
   * @description *   Before you call this operation, make sure that the following requirements are met:
   *     *   The scaling group is in the Active state.
   *     *   No scaling activity is in progress within the scaling group.
   * > If no scaling activity is in progress within the scaling group, you can call the operation even within the cooldown period.
   * *   If an ECS instance is automatically created by Auto Scaling, or if an ECS instance is manually added to a scaling group and managed by the scaling group, the ECS instance is stopped in economical mode or is released after the instance is removed from the scaling group.
   * *   If an ECS instance is manually added to a scaling group and is not managed by the scaling group, the ECS instance is not stopped or released after the instance is removed from the scaling group.
   * *   If the difference between the number of existing ECS instances specified by the TotalCapacity parameter and the number of ECS instances that you call this operation to remove is less than the value of the MinSize parameter, the call fails.
   * A successful call only means that Auto Scaling accepts the request. The scaling activity may still fail. You can obtain the status of a scaling activity based on the value of the ScalingActivityId parameter in the response.
   *
   * @param request RemoveInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveInstancesResponse
   */
  async removeInstancesWithOptions(request: RemoveInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.decreaseDesiredCapacity)) {
      query["DecreaseDesiredCapacity"] = request.decreaseDesiredCapacity;
    }

    if (!Util.isUnset(request.ignoreInvalidInstance)) {
      query["IgnoreInvalidInstance"] = request.ignoreInvalidInstance;
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

  /**
   * @summary Removes one or more Elastic Compute Service (ECS) instances or elastic container instances from a scaling group.
   *
   * @description *   Before you call this operation, make sure that the following requirements are met:
   *     *   The scaling group is in the Active state.
   *     *   No scaling activity is in progress within the scaling group.
   * > If no scaling activity is in progress within the scaling group, you can call the operation even within the cooldown period.
   * *   If an ECS instance is automatically created by Auto Scaling, or if an ECS instance is manually added to a scaling group and managed by the scaling group, the ECS instance is stopped in economical mode or is released after the instance is removed from the scaling group.
   * *   If an ECS instance is manually added to a scaling group and is not managed by the scaling group, the ECS instance is not stopped or released after the instance is removed from the scaling group.
   * *   If the difference between the number of existing ECS instances specified by the TotalCapacity parameter and the number of ECS instances that you call this operation to remove is less than the value of the MinSize parameter, the call fails.
   * A successful call only means that Auto Scaling accepts the request. The scaling activity may still fail. You can obtain the status of a scaling activity based on the value of the ScalingActivityId parameter in the response.
   *
   * @param request RemoveInstancesRequest
   * @return RemoveInstancesResponse
   */
  async removeInstances(request: RemoveInstancesRequest): Promise<RemoveInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeInstancesWithOptions(request, runtime);
  }

  /**
   * @summary Resumes suspended processes in a scaling group.
   *
   * @param request ResumeProcessesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeProcessesResponse
   */
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

  /**
   * @summary Resumes suspended processes in a scaling group.
   *
   * @param request ResumeProcessesRequest
   * @return ResumeProcessesResponse
   */
  async resumeProcesses(request: ResumeProcessesRequest): Promise<ResumeProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeProcessesWithOptions(request, runtime);
  }

  /**
   * @summary Scales instances. The ScaleWithAdjustment operation differs from the ExecuteScalingRule operation in that ScaleWithAdjust can directly scale instances without requiring you to create a scaling rule in advance.
   *
   * @description *   Before you call this operation, take note of the following items:
   *     *   The scaling group is in the Active state.
   *     *   The scaling group has no ongoing scaling activities.
   * *   If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities before the cooldown period of the scaling group expires.
   * *   If the addition of a specific number of Elastic Compute Service (ECS) instances to the scaling group causes the total number of ECS instances in the scaling group to exceed the maximum allowed number, Auto Scaling adds ECS instances to the scaling group until the total number of instances is equal to the maximum allowed number.
   * *   If the removal of a specific number of ECS instances from the scaling group causes the total number of ECS instances in the scaling group to be less than the minimum allowed number, Auto Scaling removes ECS instances from the scaling group until the total number of instances is equal to the minimum allowed number.
   * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity based on the value of `ScalingActivityId` in the response.
   *
   * @param tmpReq ScaleWithAdjustmentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ScaleWithAdjustmentResponse
   */
  async scaleWithAdjustmentWithOptions(tmpReq: ScaleWithAdjustmentRequest, runtime: $Util.RuntimeOptions): Promise<ScaleWithAdjustmentResponse> {
    Util.validateModel(tmpReq);
    let request = new ScaleWithAdjustmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lifecycleHookContext)) {
      request.lifecycleHookContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lifecycleHookContext, "LifecycleHookContext", "json");
    }

    if (!Util.isUnset(tmpReq.overrides)) {
      request.overridesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.overrides, "Overrides", "json");
    }

    let query = { };
    if (!Util.isUnset(request.activityMetadata)) {
      query["ActivityMetadata"] = request.activityMetadata;
    }

    if (!Util.isUnset(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!Util.isUnset(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lifecycleHookContextShrink)) {
      query["LifecycleHookContext"] = request.lifecycleHookContextShrink;
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
   * @summary Scales instances. The ScaleWithAdjustment operation differs from the ExecuteScalingRule operation in that ScaleWithAdjust can directly scale instances without requiring you to create a scaling rule in advance.
   *
   * @description *   Before you call this operation, take note of the following items:
   *     *   The scaling group is in the Active state.
   *     *   The scaling group has no ongoing scaling activities.
   * *   If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities before the cooldown period of the scaling group expires.
   * *   If the addition of a specific number of Elastic Compute Service (ECS) instances to the scaling group causes the total number of ECS instances in the scaling group to exceed the maximum allowed number, Auto Scaling adds ECS instances to the scaling group until the total number of instances is equal to the maximum allowed number.
   * *   If the removal of a specific number of ECS instances from the scaling group causes the total number of ECS instances in the scaling group to be less than the minimum allowed number, Auto Scaling removes ECS instances from the scaling group until the total number of instances is equal to the minimum allowed number.
   * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity based on the value of `ScalingActivityId` in the response.
   *
   * @param request ScaleWithAdjustmentRequest
   * @return ScaleWithAdjustmentResponse
   */
  async scaleWithAdjustment(request: ScaleWithAdjustmentRequest): Promise<ScaleWithAdjustmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scaleWithAdjustmentWithOptions(request, runtime);
  }

  /**
   * @summary Sets deletion protection for a scaling group. If you enable deletion protection for a scaling group, you cannot delete the scaling group. If you disable deletion protection for a scaling group, you can directly delete the scaling group. You can call the SetGroupDeletionProtection operation to enable or disable deletion protection.
   *
   * @param request SetGroupDeletionProtectionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetGroupDeletionProtectionResponse
   */
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

  /**
   * @summary Sets deletion protection for a scaling group. If you enable deletion protection for a scaling group, you cannot delete the scaling group. If you disable deletion protection for a scaling group, you can directly delete the scaling group. You can call the SetGroupDeletionProtection operation to enable or disable deletion protection.
   *
   * @param request SetGroupDeletionProtectionRequest
   * @return SetGroupDeletionProtectionResponse
   */
  async setGroupDeletionProtection(request: SetGroupDeletionProtectionRequest): Promise<SetGroupDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * @summary Sets instance health. At times, the automatic health check system might not sufficiently determine the precise health status of your Elastic Compute Service (ECS) instances or elastic container instances. To overcome this, you can call the SetInstanceHealth operation to swiftly pinpoint problematic instances and resolve issues. This operation is designed to more precisely align with real-world business requirements and tackle O\\&M hurdles efficiently.
   *
   * @description Auto Scaling detects and removes unhealthy ECS instances or elastic container instances from the corresponding scaling groups. If you want to retain a specific instance in the corresponding scaling group, you can put the instance into the Standby or Protected state. For more information, see [EnterStandby](~~EnterStandby~~) and [SetInstancesProtection](~~SetInstancesProtection~~).
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
   * @summary Sets instance health. At times, the automatic health check system might not sufficiently determine the precise health status of your Elastic Compute Service (ECS) instances or elastic container instances. To overcome this, you can call the SetInstanceHealth operation to swiftly pinpoint problematic instances and resolve issues. This operation is designed to more precisely align with real-world business requirements and tackle O\\&M hurdles efficiently.
   *
   * @description Auto Scaling detects and removes unhealthy ECS instances or elastic container instances from the corresponding scaling groups. If you want to retain a specific instance in the corresponding scaling group, you can put the instance into the Standby or Protected state. For more information, see [EnterStandby](~~EnterStandby~~) and [SetInstancesProtection](~~SetInstancesProtection~~).
   *
   * @param request SetInstanceHealthRequest
   * @return SetInstanceHealthResponse
   */
  async setInstanceHealth(request: SetInstanceHealthRequest): Promise<SetInstanceHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceHealthWithOptions(request, runtime);
  }

  /**
   * @summary Puts Elastic Compute Service (ECS) instances into the Protected state. When ECS instances are put into the Protected state, they become immune to manual deletion attempts by using the Auto Scaling console or API operations. This operation serves as a robust safeguard, efficiently preventing any inadvertent instance release that could lead to irreversible consequences.
   *
   * @description Once ECS instances enter the Protected state, they become subject to the following restrictions:
   * *   ECS instances will persist in the Protected state, unless you deliberately remove them from this state.
   * *   Even in scenarios where automatic scale-in actions are initiated due to fluctuations in the number of ECS instances or the execution of event-triggered tasks, Auto Scaling does not remove ECS instances that are in the Protected state from their respective scaling groups. Only after being manually removed from their respective scaling groups can ECS instances that are in the Protected state be released. For more information, see [Remove an ECS instance](https://help.aliyun.com/document_detail/25955.html).
   * *   ECS instances in the Protected state maintain their existing health status even when they undergo stopping or restarting processes.
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
   * @summary Puts Elastic Compute Service (ECS) instances into the Protected state. When ECS instances are put into the Protected state, they become immune to manual deletion attempts by using the Auto Scaling console or API operations. This operation serves as a robust safeguard, efficiently preventing any inadvertent instance release that could lead to irreversible consequences.
   *
   * @description Once ECS instances enter the Protected state, they become subject to the following restrictions:
   * *   ECS instances will persist in the Protected state, unless you deliberately remove them from this state.
   * *   Even in scenarios where automatic scale-in actions are initiated due to fluctuations in the number of ECS instances or the execution of event-triggered tasks, Auto Scaling does not remove ECS instances that are in the Protected state from their respective scaling groups. Only after being manually removed from their respective scaling groups can ECS instances that are in the Protected state be released. For more information, see [Remove an ECS instance](https://help.aliyun.com/document_detail/25955.html).
   * *   ECS instances in the Protected state maintain their existing health status even when they undergo stopping or restarting processes.
   *
   * @param request SetInstancesProtectionRequest
   * @return SetInstancesProtectionResponse
   */
  async setInstancesProtection(request: SetInstancesProtectionRequest): Promise<SetInstancesProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstancesProtectionWithOptions(request, runtime);
  }

  /**
   * @summary Suspends scaling processes. This operation empowers you to selectively pause distinct scaling processes within a particular scaling group, enabling you to carry out alternative tasks and achieve more granular management over your scaling operations.
   *
   * @param request SuspendProcessesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SuspendProcessesResponse
   */
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

  /**
   * @summary Suspends scaling processes. This operation empowers you to selectively pause distinct scaling processes within a particular scaling group, enabling you to carry out alternative tasks and achieve more granular management over your scaling operations.
   *
   * @param request SuspendProcessesRequest
   * @return SuspendProcessesResponse
   */
  async suspendProcesses(request: SuspendProcessesRequest): Promise<SuspendProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendProcessesWithOptions(request, runtime);
  }

  /**
   * @summary Creates and attaches tags. You can call the TagResources operation to uniformly create and attach tags to your Auto Scaling resources, streamlining resource management. This capability empowers you to categorize resources based on tags, thereby enhancing the overall efficiency of resource allocation and utilization.
   *
   * @description *   You can attach up to 20 tags to a scaling group.
   *     **
   *     **Note** Before you attach tags to a specific Auto Scaling resource, Alibaba Cloud automatically verifies the current number of tags attached to that resource. In the event the proposed addition would exceed the maximum allowed number of tags, an error message will be promptly returned after you call this operation.
   * *   If you set `Tags.Propagate` to `true`, any tags attached to your scaling group will be automatically propagated to new instances that are subsequently created in the scaling group, without affecting existing instances.
   * *   If both the scaling configuration and the scaling group have tags attached, and tag propagation from the scaling group is enabled, the tags of newly created instances comply with the following rules:
   *     *   Instances set to join the scaling group will inherit the following tags: tags attached to the scaling configuration that initiates the instance creation and tags attached to the scaling group that are allowed to propagate to these instances upon instance creation.
   *     *   If the tag keys of the scaling configuration and those attached to the scaling group and propagated to the instances are identical, the tags attached to the scaling group and propagated to the instances will be overwritten by the tags of the scaling configuration.
   *
   * @param request TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
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

  /**
   * @summary Creates and attaches tags. You can call the TagResources operation to uniformly create and attach tags to your Auto Scaling resources, streamlining resource management. This capability empowers you to categorize resources based on tags, thereby enhancing the overall efficiency of resource allocation and utilization.
   *
   * @description *   You can attach up to 20 tags to a scaling group.
   *     **
   *     **Note** Before you attach tags to a specific Auto Scaling resource, Alibaba Cloud automatically verifies the current number of tags attached to that resource. In the event the proposed addition would exceed the maximum allowed number of tags, an error message will be promptly returned after you call this operation.
   * *   If you set `Tags.Propagate` to `true`, any tags attached to your scaling group will be automatically propagated to new instances that are subsequently created in the scaling group, without affecting existing instances.
   * *   If both the scaling configuration and the scaling group have tags attached, and tag propagation from the scaling group is enabled, the tags of newly created instances comply with the following rules:
   *     *   Instances set to join the scaling group will inherit the following tags: tags attached to the scaling configuration that initiates the instance creation and tags attached to the scaling group that are allowed to propagate to these instances upon instance creation.
   *     *   If the tag keys of the scaling configuration and those attached to the scaling group and propagated to the instances are identical, the tags attached to the scaling group and propagated to the instances will be overwritten by the tags of the scaling configuration.
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Removes tags from Auto Scaling resources simultaneously. This operation streamlines resource management activities, enhances system efficiency, and mitigates potential security vulnerabilities. Once a tag is removed from a particular resource, and if it is not re-added to any other resource, the system will automatically delete the unused tag.
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

  /**
   * @summary Removes tags from Auto Scaling resources simultaneously. This operation streamlines resource management activities, enhances system efficiency, and mitigates potential security vulnerabilities. Once a tag is removed from a particular resource, and if it is not re-added to any other resource, the system will automatically delete the unused tag.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether Auto Scaling is authorized to access Elastic Compute Service (ECS) and Elastic Container Instance resources.
   *
   * @param request VerifyAuthenticationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyAuthenticationResponse
   */
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

  /**
   * @summary Checks whether Auto Scaling is authorized to access Elastic Compute Service (ECS) and Elastic Container Instance resources.
   *
   * @param request VerifyAuthenticationRequest
   * @return VerifyAuthenticationResponse
   */
  async verifyAuthentication(request: VerifyAuthenticationRequest): Promise<VerifyAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyAuthenticationWithOptions(request, runtime);
  }

  /**
   * @summary Verifies whether Auto Scaling is activated. This operation guarantees that in response to shifts in business workloads or variations in incoming traffic, the system will automatically adjust resource provisioning. This auto-scaling capability enhances the overall system performance, ensuring high availability and improved flexibility to accommodate dynamic demands.
   *
   * @param request VerifyUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyUserResponse
   */
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

  /**
   * @summary Verifies whether Auto Scaling is activated. This operation guarantees that in response to shifts in business workloads or variations in incoming traffic, the system will automatically adjust resource provisioning. This auto-scaling capability enhances the overall system performance, ensuring high availability and improved flexibility to accommodate dynamic demands.
   *
   * @param request VerifyUserRequest
   * @return VerifyUserResponse
   */
  async verifyUser(request: VerifyUserRequest): Promise<VerifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyUserWithOptions(request, runtime);
  }

}
