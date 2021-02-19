// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachDBInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  forceAttach?: boolean;
  clientToken?: string;
  DBInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      forceAttach: 'ForceAttach',
      clientToken: 'ClientToken',
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      forceAttach: 'boolean',
      clientToken: 'string',
      DBInstance: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: AttachDBInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  entrusted?: boolean;
  ownerAccount?: string;
  instanceId?: string[];
  loadBalancerWeight?: number[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      entrusted: 'Entrusted',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      loadBalancerWeight: 'LoadBalancerWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      entrusted: 'boolean',
      ownerAccount: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      loadBalancerWeight: { 'type': 'array', 'itemType': 'number' },
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
  headers: { [key: string]: string };
  body: AttachInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  forceAttach?: boolean;
  clientToken?: string;
  loadBalancer?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      forceAttach: 'ForceAttach',
      clientToken: 'ClientToken',
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      forceAttach: 'boolean',
      clientToken: 'string',
      loadBalancer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersResponseBody extends $tea.Model {
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

export class AttachLoadBalancersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachLoadBalancersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  scalingGroupId?: string;
  clientToken?: string;
  forceAttach?: boolean;
  VServerGroup?: AttachVServerGroupsRequestVServerGroup[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
      VServerGroup: 'VServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      scalingGroupId: 'string',
      clientToken: 'string',
      forceAttach: 'boolean',
      VServerGroup: { 'type': 'array', 'itemType': AttachVServerGroupsRequestVServerGroup },
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
  headers: { [key: string]: string };
  body: AttachVServerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachVServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteLifecycleActionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  lifecycleHookId?: string;
  lifecycleActionToken?: string;
  lifecycleActionResult?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      lifecycleHookId: 'LifecycleHookId',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleActionResult: 'LifecycleActionResult',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      lifecycleHookId: 'string',
      lifecycleActionToken: 'string',
      lifecycleActionResult: 'string',
      clientToken: 'string',
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
  headers: { [key: string]: string };
  body: CompleteLifecycleActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CompleteLifecycleActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  name?: string;
  description?: string;
  scalingGroupId?: string;
  metricName?: string;
  metricType?: string;
  period?: number;
  statistics?: string;
  threshold?: number;
  comparisonOperator?: string;
  evaluationCount?: number;
  groupId?: number;
  effective?: string;
  alarmAction?: string[];
  dimension?: CreateAlarmRequestDimension[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      scalingGroupId: 'ScalingGroupId',
      metricName: 'MetricName',
      metricType: 'MetricType',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      groupId: 'GroupId',
      effective: 'Effective',
      alarmAction: 'AlarmAction',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
      scalingGroupId: 'string',
      metricName: 'string',
      metricType: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
      comparisonOperator: 'string',
      evaluationCount: 'number',
      groupId: 'number',
      effective: 'string',
      alarmAction: { 'type': 'array', 'itemType': 'string' },
      dimension: { 'type': 'array', 'itemType': CreateAlarmRequestDimension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmResponseBody extends $tea.Model {
  requestId?: string;
  alarmTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alarmTaskId: 'AlarmTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alarmTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleHookRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  scalingGroupId?: string;
  lifecycleHookName?: string;
  lifecycleTransition?: string;
  defaultResult?: string;
  heartbeatTimeout?: number;
  notificationMetadata?: string;
  notificationArn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      notificationMetadata: 'NotificationMetadata',
      notificationArn: 'NotificationArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      scalingGroupId: 'string',
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      notificationMetadata: 'string',
      notificationArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleHookResponseBody extends $tea.Model {
  requestId?: string;
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      lifecycleHookId: 'LifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      lifecycleHookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLifecycleHookResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLifecycleHookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLifecycleHookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNotificationConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  notificationArn?: string;
  notificationType?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      notificationArn: 'NotificationArn',
      notificationType: 'NotificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      notificationArn: 'string',
      notificationType: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateNotificationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNotificationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequest extends $tea.Model {
  systemDisk?: CreateScalingConfigurationRequestSystemDisk;
  privatePoolOptions?: CreateScalingConfigurationRequestPrivatePoolOptions;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  imageId?: string;
  imageName?: string;
  instanceType?: string;
  cpu?: number;
  memory?: number;
  deploymentSetId?: string;
  securityGroupId?: string;
  ioOptimized?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  scalingConfigurationName?: string;
  loadBalancerWeight?: number;
  ownerAccount?: string;
  tags?: string;
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  securityEnhancementStrategy?: string;
  instanceName?: string;
  hostName?: string;
  spotStrategy?: string;
  passwordInherit?: boolean;
  password?: string;
  resourceGroupId?: string;
  hpcClusterId?: string;
  instanceDescription?: string;
  clientToken?: string;
  ipv6AddressCount?: number;
  creditSpecification?: string;
  imageFamily?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  affinity?: string;
  tenancy?: string;
  schedulerOptions?: { [key: string]: any };
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  instanceTypes?: string[];
  instanceTypeOverride?: CreateScalingConfigurationRequestInstanceTypeOverride[];
  dataDisk?: CreateScalingConfigurationRequestDataDisk[];
  spotPriceLimit?: CreateScalingConfigurationRequestSpotPriceLimit[];
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      privatePoolOptions: 'PrivatePoolOptions',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceType: 'InstanceType',
      cpu: 'Cpu',
      memory: 'Memory',
      deploymentSetId: 'DeploymentSetId',
      securityGroupId: 'SecurityGroupId',
      ioOptimized: 'IoOptimized',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      scalingConfigurationName: 'ScalingConfigurationName',
      loadBalancerWeight: 'LoadBalancerWeight',
      ownerAccount: 'OwnerAccount',
      tags: 'Tags',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      spotStrategy: 'SpotStrategy',
      passwordInherit: 'PasswordInherit',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      hpcClusterId: 'HpcClusterId',
      instanceDescription: 'InstanceDescription',
      clientToken: 'ClientToken',
      ipv6AddressCount: 'Ipv6AddressCount',
      creditSpecification: 'CreditSpecification',
      imageFamily: 'ImageFamily',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      schedulerOptions: 'SchedulerOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      instanceTypes: 'InstanceTypes',
      instanceTypeOverride: 'InstanceTypeOverride',
      dataDisk: 'DataDisk',
      spotPriceLimit: 'SpotPriceLimit',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: CreateScalingConfigurationRequestSystemDisk,
      privatePoolOptions: CreateScalingConfigurationRequestPrivatePoolOptions,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceType: 'string',
      cpu: 'number',
      memory: 'number',
      deploymentSetId: 'string',
      securityGroupId: 'string',
      ioOptimized: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      scalingConfigurationName: 'string',
      loadBalancerWeight: 'number',
      ownerAccount: 'string',
      tags: 'string',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      securityEnhancementStrategy: 'string',
      instanceName: 'string',
      hostName: 'string',
      spotStrategy: 'string',
      passwordInherit: 'boolean',
      password: 'string',
      resourceGroupId: 'string',
      hpcClusterId: 'string',
      instanceDescription: 'string',
      clientToken: 'string',
      ipv6AddressCount: 'number',
      creditSpecification: 'string',
      imageFamily: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      affinity: 'string',
      tenancy: 'string',
      schedulerOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceTypeOverride: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestInstanceTypeOverride },
      dataDisk: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestDataDisk },
      spotPriceLimit: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestSpotPriceLimit },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequest extends $tea.Model {
  systemDisk?: CreateScalingConfigurationShrinkRequestSystemDisk;
  privatePoolOptions?: CreateScalingConfigurationShrinkRequestPrivatePoolOptions;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  imageId?: string;
  imageName?: string;
  instanceType?: string;
  cpu?: number;
  memory?: number;
  deploymentSetId?: string;
  securityGroupId?: string;
  ioOptimized?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  scalingConfigurationName?: string;
  loadBalancerWeight?: number;
  ownerAccount?: string;
  tags?: string;
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  securityEnhancementStrategy?: string;
  instanceName?: string;
  hostName?: string;
  spotStrategy?: string;
  passwordInherit?: boolean;
  password?: string;
  resourceGroupId?: string;
  hpcClusterId?: string;
  instanceDescription?: string;
  clientToken?: string;
  ipv6AddressCount?: number;
  creditSpecification?: string;
  imageFamily?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  affinity?: string;
  tenancy?: string;
  schedulerOptionsShrink?: string;
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  instanceTypes?: string[];
  instanceTypeOverride?: CreateScalingConfigurationShrinkRequestInstanceTypeOverride[];
  dataDisk?: CreateScalingConfigurationShrinkRequestDataDisk[];
  spotPriceLimit?: CreateScalingConfigurationShrinkRequestSpotPriceLimit[];
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      privatePoolOptions: 'PrivatePoolOptions',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceType: 'InstanceType',
      cpu: 'Cpu',
      memory: 'Memory',
      deploymentSetId: 'DeploymentSetId',
      securityGroupId: 'SecurityGroupId',
      ioOptimized: 'IoOptimized',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      scalingConfigurationName: 'ScalingConfigurationName',
      loadBalancerWeight: 'LoadBalancerWeight',
      ownerAccount: 'OwnerAccount',
      tags: 'Tags',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      spotStrategy: 'SpotStrategy',
      passwordInherit: 'PasswordInherit',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
      hpcClusterId: 'HpcClusterId',
      instanceDescription: 'InstanceDescription',
      clientToken: 'ClientToken',
      ipv6AddressCount: 'Ipv6AddressCount',
      creditSpecification: 'CreditSpecification',
      imageFamily: 'ImageFamily',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      schedulerOptionsShrink: 'SchedulerOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      instanceTypes: 'InstanceTypes',
      instanceTypeOverride: 'InstanceTypeOverride',
      dataDisk: 'DataDisk',
      spotPriceLimit: 'SpotPriceLimit',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: CreateScalingConfigurationShrinkRequestSystemDisk,
      privatePoolOptions: CreateScalingConfigurationShrinkRequestPrivatePoolOptions,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceType: 'string',
      cpu: 'number',
      memory: 'number',
      deploymentSetId: 'string',
      securityGroupId: 'string',
      ioOptimized: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      scalingConfigurationName: 'string',
      loadBalancerWeight: 'number',
      ownerAccount: 'string',
      tags: 'string',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      securityEnhancementStrategy: 'string',
      instanceName: 'string',
      hostName: 'string',
      spotStrategy: 'string',
      passwordInherit: 'boolean',
      password: 'string',
      resourceGroupId: 'string',
      hpcClusterId: 'string',
      instanceDescription: 'string',
      clientToken: 'string',
      ipv6AddressCount: 'number',
      creditSpecification: 'string',
      imageFamily: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      affinity: 'string',
      tenancy: 'string',
      schedulerOptionsShrink: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceTypeOverride: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestInstanceTypeOverride },
      dataDisk: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestDataDisk },
      spotPriceLimit: { 'type': 'array', 'itemType': CreateScalingConfigurationShrinkRequestSpotPriceLimit },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateScalingConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequest extends $tea.Model {
  removalPolicy?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupName?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  instanceId?: string;
  regionId?: string;
  minSize?: number;
  maxSize?: number;
  defaultCooldown?: number;
  loadBalancerIds?: string;
  DBInstanceIds?: string;
  ownerAccount?: string;
  vSwitchId?: string;
  multiAZPolicy?: string;
  healthCheckType?: string;
  scalingPolicy?: string;
  clientToken?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstanceRemedy?: boolean;
  compensateWithOnDemand?: boolean;
  spotInstancePools?: number;
  desiredCapacity?: number;
  groupDeletionProtection?: boolean;
  scaleOutAmountCheck?: boolean;
  vSwitchIds?: string[];
  lifecycleHook?: CreateScalingGroupRequestLifecycleHook[];
  VServerGroup?: CreateScalingGroupRequestVServerGroup[];
  tag?: CreateScalingGroupRequestTag[];
  launchTemplateOverride?: CreateScalingGroupRequestLaunchTemplateOverride[];
  static names(): { [key: string]: string } {
    return {
      removalPolicy: 'RemovalPolicy',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupName: 'ScalingGroupName',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      minSize: 'MinSize',
      maxSize: 'MaxSize',
      defaultCooldown: 'DefaultCooldown',
      loadBalancerIds: 'LoadBalancerIds',
      DBInstanceIds: 'DBInstanceIds',
      ownerAccount: 'OwnerAccount',
      vSwitchId: 'VSwitchId',
      multiAZPolicy: 'MultiAZPolicy',
      healthCheckType: 'HealthCheckType',
      scalingPolicy: 'ScalingPolicy',
      clientToken: 'ClientToken',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      spotInstancePools: 'SpotInstancePools',
      desiredCapacity: 'DesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      scaleOutAmountCheck: 'ScaleOutAmountCheck',
      vSwitchIds: 'VSwitchIds',
      lifecycleHook: 'LifecycleHook',
      VServerGroup: 'VServerGroup',
      tag: 'Tag',
      launchTemplateOverride: 'LaunchTemplateOverride',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removalPolicy: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupName: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      instanceId: 'string',
      regionId: 'string',
      minSize: 'number',
      maxSize: 'number',
      defaultCooldown: 'number',
      loadBalancerIds: 'string',
      DBInstanceIds: 'string',
      ownerAccount: 'string',
      vSwitchId: 'string',
      multiAZPolicy: 'string',
      healthCheckType: 'string',
      scalingPolicy: 'string',
      clientToken: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstanceRemedy: 'boolean',
      compensateWithOnDemand: 'boolean',
      spotInstancePools: 'number',
      desiredCapacity: 'number',
      groupDeletionProtection: 'boolean',
      scaleOutAmountCheck: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHook: { 'type': 'array', 'itemType': CreateScalingGroupRequestLifecycleHook },
      VServerGroup: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroup },
      tag: { 'type': 'array', 'itemType': CreateScalingGroupRequestTag },
      launchTemplateOverride: { 'type': 'array', 'itemType': CreateScalingGroupRequestLaunchTemplateOverride },
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
  headers: { [key: string]: string };
  body: CreateScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  scalingRuleName?: string;
  cooldown?: number;
  minAdjustmentMagnitude?: number;
  adjustmentType?: string;
  adjustmentValue?: number;
  scalingRuleType?: string;
  estimatedInstanceWarmup?: number;
  metricName?: string;
  targetValue?: number;
  disableScaleIn?: boolean;
  scaleInEvaluationCount?: number;
  scaleOutEvaluationCount?: number;
  ownerAccount?: string;
  predictiveScalingMode?: string;
  predictiveValueBehavior?: string;
  predictiveValueBuffer?: number;
  predictiveTaskBufferTime?: number;
  initialMaxSize?: number;
  stepAdjustment?: CreateScalingRuleRequestStepAdjustment[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleName: 'ScalingRuleName',
      cooldown: 'Cooldown',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      scalingRuleType: 'ScalingRuleType',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      metricName: 'MetricName',
      targetValue: 'TargetValue',
      disableScaleIn: 'DisableScaleIn',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      ownerAccount: 'OwnerAccount',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      initialMaxSize: 'InitialMaxSize',
      stepAdjustment: 'StepAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      scalingRuleName: 'string',
      cooldown: 'number',
      minAdjustmentMagnitude: 'number',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      scalingRuleType: 'string',
      estimatedInstanceWarmup: 'number',
      metricName: 'string',
      targetValue: 'number',
      disableScaleIn: 'boolean',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      ownerAccount: 'string',
      predictiveScalingMode: 'string',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      predictiveTaskBufferTime: 'number',
      initialMaxSize: 'number',
      stepAdjustment: { 'type': 'array', 'itemType': CreateScalingRuleRequestStepAdjustment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleResponseBody extends $tea.Model {
  scalingRuleAri?: string;
  requestId?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      scalingRuleAri: 'ScalingRuleAri',
      requestId: 'RequestId',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingRuleAri: 'string',
      requestId: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  scheduledTaskName?: string;
  description?: string;
  scheduledAction?: string;
  recurrenceEndTime?: string;
  launchTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  taskEnabled?: boolean;
  launchExpirationTime?: number;
  ownerAccount?: string;
  minValue?: number;
  maxValue?: number;
  desiredCapacity?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      scheduledTaskName: 'ScheduledTaskName',
      description: 'Description',
      scheduledAction: 'ScheduledAction',
      recurrenceEndTime: 'RecurrenceEndTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      taskEnabled: 'TaskEnabled',
      launchExpirationTime: 'LaunchExpirationTime',
      ownerAccount: 'OwnerAccount',
      minValue: 'MinValue',
      maxValue: 'MaxValue',
      desiredCapacity: 'DesiredCapacity',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      scheduledTaskName: 'string',
      description: 'string',
      scheduledAction: 'string',
      recurrenceEndTime: 'string',
      launchTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      taskEnabled: 'boolean',
      launchExpirationTime: 'number',
      ownerAccount: 'string',
      minValue: 'number',
      maxValue: 'number',
      desiredCapacity: 'number',
      scalingGroupId: 'string',
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
  headers: { [key: string]: string };
  body: CreateScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateScalingConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DeactivateScalingConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactivateScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  alarmTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      alarmTaskId: 'AlarmTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      alarmTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmResponseBody extends $tea.Model {
  requestId?: string;
  alarmTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alarmTaskId: 'AlarmTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alarmTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLifecycleHookRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  lifecycleHookId?: string;
  scalingGroupId?: string;
  lifecycleHookName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      lifecycleHookId: 'LifecycleHookId',
      scalingGroupId: 'ScalingGroupId',
      lifecycleHookName: 'LifecycleHookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      lifecycleHookId: 'string',
      scalingGroupId: 'string',
      lifecycleHookName: 'string',
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
  headers: { [key: string]: string };
  body: DeleteLifecycleHookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLifecycleHookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNotificationConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  notificationArn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      notificationArn: 'NotificationArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      notificationArn: 'string',
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
  headers: { [key: string]: string };
  body: DeleteNotificationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNotificationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingConfigurationId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingConfigurationId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DeleteScalingConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  forceDelete?: boolean;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      forceDelete: 'ForceDelete',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      forceDelete: 'boolean',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DeleteScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingRuleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingRuleId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingRuleId: 'ScalingRuleId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingRuleId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DeleteScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduledTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scheduledTaskId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scheduledTaskId: 'ScheduledTaskId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scheduledTaskId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DeleteScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  scalingGroupId?: string;
  alarmTaskId?: string;
  state?: string;
  isEnable?: boolean;
  metricType?: string;
  metricName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
      alarmTaskId: 'AlarmTaskId',
      state: 'State',
      isEnable: 'IsEnable',
      metricType: 'MetricType',
      metricName: 'MetricName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      scalingGroupId: 'string',
      alarmTaskId: 'string',
      state: 'string',
      isEnable: 'boolean',
      metricType: 'string',
      metricName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  alarmList?: DescribeAlarmsResponseBodyAlarmList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      alarmList: 'AlarmList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      alarmList: DescribeAlarmsResponseBodyAlarmList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingActivityId?: string;
  lifecycleActionStatus?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingActivityId: 'ScalingActivityId',
      lifecycleActionStatus: 'LifecycleActionStatus',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingActivityId: 'string',
      lifecycleActionStatus: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  lifecycleActions?: DescribeLifecycleActionsResponseBodyLifecycleActions;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      lifecycleActions: 'LifecycleActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      lifecycleActions: DescribeLifecycleActionsResponseBodyLifecycleActions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLifecycleActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLifecycleActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  scalingGroupId?: string;
  lifecycleHookName?: string;
  pageNumber?: number;
  pageSize?: number;
  lifecycleHookId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      lifecycleHookName: 'LifecycleHookName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      lifecycleHookId: 'LifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      scalingGroupId: 'string',
      lifecycleHookName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      lifecycleHookId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  lifecycleHooks?: DescribeLifecycleHooksResponseBodyLifecycleHooks;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      lifecycleHooks: 'LifecycleHooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      lifecycleHooks: DescribeLifecycleHooksResponseBodyLifecycleHooks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLifecycleHooksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  maxNumberOfLifecycleHooks?: number;
  maxNumberOfScalingRules?: number;
  maxNumberOfScalingInstances?: number;
  maxNumberOfScheduledTasks?: number;
  maxNumberOfVServerGroups?: number;
  maxNumberOfLoadBalancers?: number;
  maxNumberOfMinSize?: number;
  maxNumberOfScalingGroups?: number;
  maxNumberOfNotificationConfigurations?: number;
  maxNumberOfMaxSize?: number;
  maxNumberOfDBInstances?: number;
  maxNumberOfScalingConfigurations?: number;
  static names(): { [key: string]: string } {
    return {
      maxNumberOfLifecycleHooks: 'MaxNumberOfLifecycleHooks',
      maxNumberOfScalingRules: 'MaxNumberOfScalingRules',
      maxNumberOfScalingInstances: 'MaxNumberOfScalingInstances',
      maxNumberOfScheduledTasks: 'MaxNumberOfScheduledTasks',
      maxNumberOfVServerGroups: 'MaxNumberOfVServerGroups',
      maxNumberOfLoadBalancers: 'MaxNumberOfLoadBalancers',
      maxNumberOfMinSize: 'MaxNumberOfMinSize',
      maxNumberOfScalingGroups: 'MaxNumberOfScalingGroups',
      maxNumberOfNotificationConfigurations: 'MaxNumberOfNotificationConfigurations',
      maxNumberOfMaxSize: 'MaxNumberOfMaxSize',
      maxNumberOfDBInstances: 'MaxNumberOfDBInstances',
      maxNumberOfScalingConfigurations: 'MaxNumberOfScalingConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNumberOfLifecycleHooks: 'number',
      maxNumberOfScalingRules: 'number',
      maxNumberOfScalingInstances: 'number',
      maxNumberOfScheduledTasks: 'number',
      maxNumberOfVServerGroups: 'number',
      maxNumberOfLoadBalancers: 'number',
      maxNumberOfMinSize: 'number',
      maxNumberOfScalingGroups: 'number',
      maxNumberOfNotificationConfigurations: 'number',
      maxNumberOfMaxSize: 'number',
      maxNumberOfDBInstances: 'number',
      maxNumberOfScalingConfigurations: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLimitationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLimitationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponseBody extends $tea.Model {
  requestId?: string;
  notificationConfigurationModels?: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      notificationConfigurationModels: 'NotificationConfigurationModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      notificationConfigurationModels: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNotificationConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  notificationTypes?: DescribeNotificationTypesResponseBodyNotificationTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      notificationTypes: 'NotificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      notificationTypes: DescribeNotificationTypesResponseBodyNotificationTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNotificationTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNotificationTypesResponseBody,
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
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeScalingActivitiesRequest extends $tea.Model {
  scalingActivityId?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  scalingGroupId?: string;
  statusCode?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      scalingActivityId: 'ScalingActivityId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scalingGroupId: 'ScalingGroupId',
      statusCode: 'StatusCode',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingActivityId: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scalingGroupId: 'string',
      statusCode: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  scalingActivities?: DescribeScalingActivitiesResponseBodyScalingActivities;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      scalingActivities: 'ScalingActivities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      scalingActivities: DescribeScalingActivitiesResponseBodyScalingActivities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingActivitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  scalingActivityId?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      scalingActivityId: 'ScalingActivityId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingActivityId: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingActivityDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingActivityDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsRequest extends $tea.Model {
  scalingConfigurationId?: string[];
  scalingConfigurationName?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  scalingGroupId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scalingGroupId: 'ScalingGroupId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingConfigurationId: { 'type': 'array', 'itemType': 'string' },
      scalingConfigurationName: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scalingGroupId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  scalingConfigurations?: DescribeScalingConfigurationsResponseBodyScalingConfigurations;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      scalingConfigurations: 'ScalingConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      scalingConfigurations: DescribeScalingConfigurationsResponseBodyScalingConfigurations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  scalingGroupId?: string;
  scalingConfigurationId?: string;
  healthStatus?: string;
  lifecycleState?: string;
  creationType?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
      scalingConfigurationId: 'ScalingConfigurationId',
      healthStatus: 'HealthStatus',
      lifecycleState: 'LifecycleState',
      creationType: 'CreationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      scalingGroupId: 'string',
      scalingConfigurationId: 'string',
      healthStatus: 'string',
      lifecycleState: 'string',
      creationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  scalingInstances?: DescribeScalingInstancesResponseBodyScalingInstances;
  totalSpotCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      scalingInstances: 'ScalingInstances',
      totalSpotCount: 'TotalSpotCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      scalingInstances: DescribeScalingInstancesResponseBodyScalingInstances,
      totalSpotCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesRequest extends $tea.Model {
  scalingRuleId?: string[];
  scalingRuleName?: string[];
  scalingRuleAri?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  scalingGroupId?: string;
  scalingRuleType?: string;
  showAlarmRules?: boolean;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleAri: 'ScalingRuleAri',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleType: 'ScalingRuleType',
      showAlarmRules: 'ShowAlarmRules',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingRuleId: { 'type': 'array', 'itemType': 'string' },
      scalingRuleName: { 'type': 'array', 'itemType': 'string' },
      scalingRuleAri: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scalingGroupId: 'string',
      scalingRuleType: 'string',
      showAlarmRules: 'boolean',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBody extends $tea.Model {
  totalCount?: number;
  scalingRules?: DescribeScalingRulesResponseBodyScalingRules;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      scalingRules: 'ScalingRules',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      scalingRules: DescribeScalingRulesResponseBodyScalingRules,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksRequest extends $tea.Model {
  scheduledAction?: string[];
  scheduledTaskId?: string[];
  scheduledTaskName?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledAction: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskId: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskName: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  scheduledTasks?: DescribeScheduledTasksResponseBodyScheduledTasks;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      scheduledTasks: 'ScheduledTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      scheduledTasks: DescribeScheduledTasksResponseBodyScheduledTasks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduledTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduledTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDBInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  forceDetach?: boolean;
  clientToken?: string;
  DBInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      forceDetach: 'ForceDetach',
      clientToken: 'ClientToken',
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      forceDetach: 'boolean',
      clientToken: 'string',
      DBInstance: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: DetachDBInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  ownerAccount?: string;
  decreaseDesiredCapacity?: boolean;
  detachOption?: string;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      ownerAccount: 'OwnerAccount',
      decreaseDesiredCapacity: 'DecreaseDesiredCapacity',
      detachOption: 'DetachOption',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      ownerAccount: 'string',
      decreaseDesiredCapacity: 'boolean',
      detachOption: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: DetachInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLoadBalancersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  forceDetach?: boolean;
  clientToken?: string;
  loadBalancer?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      forceDetach: 'ForceDetach',
      clientToken: 'ClientToken',
      loadBalancer: 'LoadBalancer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      forceDetach: 'boolean',
      clientToken: 'string',
      loadBalancer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLoadBalancersResponseBody extends $tea.Model {
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

export class DetachLoadBalancersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachLoadBalancersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  scalingGroupId?: string;
  clientToken?: string;
  forceDetach?: boolean;
  VServerGroup?: DetachVServerGroupsRequestVServerGroup[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      VServerGroup: 'VServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      scalingGroupId: 'string',
      clientToken: 'string',
      forceDetach: 'boolean',
      VServerGroup: { 'type': 'array', 'itemType': DetachVServerGroupsRequestVServerGroup },
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
  headers: { [key: string]: string };
  body: DetachVServerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachVServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlarmRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  alarmTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      alarmTaskId: 'AlarmTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      alarmTaskId: 'string',
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
  headers: { [key: string]: string };
  body: DisableAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableScalingGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DisableScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlarmRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  alarmTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      alarmTaskId: 'AlarmTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      alarmTaskId: 'string',
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
  headers: { [key: string]: string };
  body: EnableAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableScalingGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  activeScalingConfigurationId?: string;
  ownerAccount?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  instanceId?: string[];
  loadBalancerWeight?: number[];
  launchTemplateOverride?: EnableScalingGroupRequestLaunchTemplateOverride[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      ownerAccount: 'OwnerAccount',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      instanceId: 'InstanceId',
      loadBalancerWeight: 'LoadBalancerWeight',
      launchTemplateOverride: 'LaunchTemplateOverride',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      activeScalingConfigurationId: 'string',
      ownerAccount: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      loadBalancerWeight: { 'type': 'array', 'itemType': 'number' },
      launchTemplateOverride: { 'type': 'array', 'itemType': EnableScalingGroupRequestLaunchTemplateOverride },
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
  headers: { [key: string]: string };
  body: EnableScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterStandbyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  clientToken?: string;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      clientToken: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterStandbyResponseBody extends $tea.Model {
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

export class EnterStandbyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnterStandbyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnterStandbyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteScalingRuleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingRuleAri?: string;
  clientToken?: string;
  breachThreshold?: number;
  metricValue?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleAri: 'ScalingRuleAri',
      clientToken: 'ClientToken',
      breachThreshold: 'BreachThreshold',
      metricValue: 'MetricValue',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingRuleAri: 'string',
      clientToken: 'string',
      breachThreshold: 'number',
      metricValue: 'number',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: ExecuteScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitStandbyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  clientToken?: string;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      clientToken: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExitStandbyResponseBody extends $tea.Model {
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

export class ExitStandbyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExitStandbyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExitStandbyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  pageSize?: number;
  keys?: ListTagKeysResponseBodyKeys;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      pageSize: 'number',
      keys: ListTagKeysResponseBodyKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  tagResources?: ListTagResourcesResponseBodyTagResources;
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
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  pageSize?: number;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      pageSize: 'number',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  pageSize?: number;
  values?: ListTagValuesResponseBodyValues;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      pageSize: 'number',
      values: ListTagValuesResponseBodyValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  alarmTaskId?: string;
  name?: string;
  description?: string;
  metricName?: string;
  metricType?: string;
  period?: number;
  statistics?: string;
  threshold?: number;
  comparisonOperator?: string;
  evaluationCount?: number;
  groupId?: number;
  effective?: string;
  alarmAction?: string[];
  dimension?: ModifyAlarmRequestDimension[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      alarmTaskId: 'AlarmTaskId',
      name: 'Name',
      description: 'Description',
      metricName: 'MetricName',
      metricType: 'MetricType',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      groupId: 'GroupId',
      effective: 'Effective',
      alarmAction: 'AlarmAction',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      alarmTaskId: 'string',
      name: 'string',
      description: 'string',
      metricName: 'string',
      metricType: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
      comparisonOperator: 'string',
      evaluationCount: 'number',
      groupId: 'number',
      effective: 'string',
      alarmAction: { 'type': 'array', 'itemType': 'string' },
      dimension: { 'type': 'array', 'itemType': ModifyAlarmRequestDimension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmResponseBody extends $tea.Model {
  requestId?: string;
  alarmTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alarmTaskId: 'AlarmTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alarmTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLifecycleHookRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  lifecycleHookId?: string;
  scalingGroupId?: string;
  lifecycleHookName?: string;
  defaultResult?: string;
  heartbeatTimeout?: number;
  lifecycleTransition?: string;
  notificationMetadata?: string;
  notificationArn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      lifecycleHookId: 'LifecycleHookId',
      scalingGroupId: 'ScalingGroupId',
      lifecycleHookName: 'LifecycleHookName',
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleTransition: 'LifecycleTransition',
      notificationMetadata: 'NotificationMetadata',
      notificationArn: 'NotificationArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      lifecycleHookId: 'string',
      scalingGroupId: 'string',
      lifecycleHookName: 'string',
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleTransition: 'string',
      notificationMetadata: 'string',
      notificationArn: 'string',
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
  headers: { [key: string]: string };
  body: ModifyLifecycleHookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLifecycleHookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNotificationConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  notificationArn?: string;
  notificationType?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      notificationArn: 'NotificationArn',
      notificationType: 'NotificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      notificationArn: 'string',
      notificationType: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyNotificationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNotificationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequest extends $tea.Model {
  systemDisk?: ModifyScalingConfigurationRequestSystemDisk;
  privatePoolOptions?: ModifyScalingConfigurationRequestPrivatePoolOptions;
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  scalingConfigurationId?: string;
  ioOptimized?: string;
  spotStrategy?: string;
  scalingConfigurationName?: string;
  instanceName?: string;
  hostName?: string;
  imageId?: string;
  imageName?: string;
  cpu?: number;
  memory?: number;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  loadBalancerWeight?: number;
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  passwordInherit?: boolean;
  tags?: string;
  deploymentSetId?: string;
  securityGroupId?: string;
  override?: boolean;
  resourceGroupId?: string;
  hpcClusterId?: string;
  instanceDescription?: string;
  ipv6AddressCount?: number;
  creditSpecification?: string;
  imageFamily?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  affinity?: string;
  tenancy?: string;
  schedulerOptions?: { [key: string]: any };
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  dataDisk?: ModifyScalingConfigurationRequestDataDisk[];
  spotPriceLimit?: ModifyScalingConfigurationRequestSpotPriceLimit[];
  instanceTypes?: string[];
  instanceTypeOverride?: ModifyScalingConfigurationRequestInstanceTypeOverride[];
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      privatePoolOptions: 'PrivatePoolOptions',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
      ioOptimized: 'IoOptimized',
      spotStrategy: 'SpotStrategy',
      scalingConfigurationName: 'ScalingConfigurationName',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      imageId: 'ImageId',
      imageName: 'ImageName',
      cpu: 'Cpu',
      memory: 'Memory',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      loadBalancerWeight: 'LoadBalancerWeight',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      passwordInherit: 'PasswordInherit',
      tags: 'Tags',
      deploymentSetId: 'DeploymentSetId',
      securityGroupId: 'SecurityGroupId',
      override: 'Override',
      resourceGroupId: 'ResourceGroupId',
      hpcClusterId: 'HpcClusterId',
      instanceDescription: 'InstanceDescription',
      ipv6AddressCount: 'Ipv6AddressCount',
      creditSpecification: 'CreditSpecification',
      imageFamily: 'ImageFamily',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      schedulerOptions: 'SchedulerOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      dataDisk: 'DataDisk',
      spotPriceLimit: 'SpotPriceLimit',
      instanceTypes: 'InstanceTypes',
      instanceTypeOverride: 'InstanceTypeOverride',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: ModifyScalingConfigurationRequestSystemDisk,
      privatePoolOptions: ModifyScalingConfigurationRequestPrivatePoolOptions,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      scalingConfigurationId: 'string',
      ioOptimized: 'string',
      spotStrategy: 'string',
      scalingConfigurationName: 'string',
      instanceName: 'string',
      hostName: 'string',
      imageId: 'string',
      imageName: 'string',
      cpu: 'number',
      memory: 'number',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      loadBalancerWeight: 'number',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      passwordInherit: 'boolean',
      tags: 'string',
      deploymentSetId: 'string',
      securityGroupId: 'string',
      override: 'boolean',
      resourceGroupId: 'string',
      hpcClusterId: 'string',
      instanceDescription: 'string',
      ipv6AddressCount: 'number',
      creditSpecification: 'string',
      imageFamily: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      affinity: 'string',
      tenancy: 'string',
      schedulerOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      dataDisk: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestDataDisk },
      spotPriceLimit: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestSpotPriceLimit },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceTypeOverride: { 'type': 'array', 'itemType': ModifyScalingConfigurationRequestInstanceTypeOverride },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequest extends $tea.Model {
  systemDisk?: ModifyScalingConfigurationShrinkRequestSystemDisk;
  privatePoolOptions?: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions;
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  scalingConfigurationId?: string;
  ioOptimized?: string;
  spotStrategy?: string;
  scalingConfigurationName?: string;
  instanceName?: string;
  hostName?: string;
  imageId?: string;
  imageName?: string;
  cpu?: number;
  memory?: number;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  loadBalancerWeight?: number;
  userData?: string;
  keyPairName?: string;
  ramRoleName?: string;
  passwordInherit?: boolean;
  tags?: string;
  deploymentSetId?: string;
  securityGroupId?: string;
  override?: boolean;
  resourceGroupId?: string;
  hpcClusterId?: string;
  instanceDescription?: string;
  ipv6AddressCount?: number;
  creditSpecification?: string;
  imageFamily?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  affinity?: string;
  tenancy?: string;
  schedulerOptionsShrink?: string;
  spotDuration?: number;
  spotInterruptionBehavior?: string;
  dataDisk?: ModifyScalingConfigurationShrinkRequestDataDisk[];
  spotPriceLimit?: ModifyScalingConfigurationShrinkRequestSpotPriceLimit[];
  instanceTypes?: string[];
  instanceTypeOverride?: ModifyScalingConfigurationShrinkRequestInstanceTypeOverride[];
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      privatePoolOptions: 'PrivatePoolOptions',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      scalingConfigurationId: 'ScalingConfigurationId',
      ioOptimized: 'IoOptimized',
      spotStrategy: 'SpotStrategy',
      scalingConfigurationName: 'ScalingConfigurationName',
      instanceName: 'InstanceName',
      hostName: 'HostName',
      imageId: 'ImageId',
      imageName: 'ImageName',
      cpu: 'Cpu',
      memory: 'Memory',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      loadBalancerWeight: 'LoadBalancerWeight',
      userData: 'UserData',
      keyPairName: 'KeyPairName',
      ramRoleName: 'RamRoleName',
      passwordInherit: 'PasswordInherit',
      tags: 'Tags',
      deploymentSetId: 'DeploymentSetId',
      securityGroupId: 'SecurityGroupId',
      override: 'Override',
      resourceGroupId: 'ResourceGroupId',
      hpcClusterId: 'HpcClusterId',
      instanceDescription: 'InstanceDescription',
      ipv6AddressCount: 'Ipv6AddressCount',
      creditSpecification: 'CreditSpecification',
      imageFamily: 'ImageFamily',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
      affinity: 'Affinity',
      tenancy: 'Tenancy',
      schedulerOptionsShrink: 'SchedulerOptions',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      dataDisk: 'DataDisk',
      spotPriceLimit: 'SpotPriceLimit',
      instanceTypes: 'InstanceTypes',
      instanceTypeOverride: 'InstanceTypeOverride',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: ModifyScalingConfigurationShrinkRequestSystemDisk,
      privatePoolOptions: ModifyScalingConfigurationShrinkRequestPrivatePoolOptions,
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      scalingConfigurationId: 'string',
      ioOptimized: 'string',
      spotStrategy: 'string',
      scalingConfigurationName: 'string',
      instanceName: 'string',
      hostName: 'string',
      imageId: 'string',
      imageName: 'string',
      cpu: 'number',
      memory: 'number',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      loadBalancerWeight: 'number',
      userData: 'string',
      keyPairName: 'string',
      ramRoleName: 'string',
      passwordInherit: 'boolean',
      tags: 'string',
      deploymentSetId: 'string',
      securityGroupId: 'string',
      override: 'boolean',
      resourceGroupId: 'string',
      hpcClusterId: 'string',
      instanceDescription: 'string',
      ipv6AddressCount: 'number',
      creditSpecification: 'string',
      imageFamily: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
      affinity: 'string',
      tenancy: 'string',
      schedulerOptionsShrink: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      dataDisk: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestDataDisk },
      spotPriceLimit: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestSpotPriceLimit },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      instanceTypeOverride: { 'type': 'array', 'itemType': ModifyScalingConfigurationShrinkRequestInstanceTypeOverride },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: ModifyScalingConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupRequest extends $tea.Model {
  removalPolicy?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scalingGroupName?: string;
  minSize?: number;
  maxSize?: number;
  defaultCooldown?: number;
  activeScalingConfigurationId?: string;
  ownerAccount?: string;
  healthCheckType?: string;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstanceRemedy?: boolean;
  compensateWithOnDemand?: boolean;
  spotInstancePools?: number;
  desiredCapacity?: number;
  groupDeletionProtection?: boolean;
  scaleOutAmountCheck?: boolean;
  vSwitchIds?: string[];
  launchTemplateOverride?: ModifyScalingGroupRequestLaunchTemplateOverride[];
  static names(): { [key: string]: string } {
    return {
      removalPolicy: 'RemovalPolicy',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      minSize: 'MinSize',
      maxSize: 'MaxSize',
      defaultCooldown: 'DefaultCooldown',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      ownerAccount: 'OwnerAccount',
      healthCheckType: 'HealthCheckType',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      spotInstancePools: 'SpotInstancePools',
      desiredCapacity: 'DesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      scaleOutAmountCheck: 'ScaleOutAmountCheck',
      vSwitchIds: 'VSwitchIds',
      launchTemplateOverride: 'LaunchTemplateOverride',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removalPolicy: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
      minSize: 'number',
      maxSize: 'number',
      defaultCooldown: 'number',
      activeScalingConfigurationId: 'string',
      ownerAccount: 'string',
      healthCheckType: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstanceRemedy: 'boolean',
      compensateWithOnDemand: 'boolean',
      spotInstancePools: 'number',
      desiredCapacity: 'number',
      groupDeletionProtection: 'boolean',
      scaleOutAmountCheck: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      launchTemplateOverride: { 'type': 'array', 'itemType': ModifyScalingGroupRequestLaunchTemplateOverride },
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
  headers: { [key: string]: string };
  body: ModifyScalingGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingRuleId?: string;
  scalingRuleName?: string;
  cooldown?: number;
  minAdjustmentMagnitude?: number;
  adjustmentType?: string;
  adjustmentValue?: number;
  estimatedInstanceWarmup?: number;
  metricName?: string;
  targetValue?: number;
  disableScaleIn?: boolean;
  scaleInEvaluationCount?: number;
  scaleOutEvaluationCount?: number;
  ownerAccount?: string;
  predictiveScalingMode?: string;
  predictiveValueBehavior?: string;
  predictiveValueBuffer?: number;
  predictiveTaskBufferTime?: number;
  initialMaxSize?: number;
  stepAdjustment?: ModifyScalingRuleRequestStepAdjustment[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      cooldown: 'Cooldown',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      metricName: 'MetricName',
      targetValue: 'TargetValue',
      disableScaleIn: 'DisableScaleIn',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      ownerAccount: 'OwnerAccount',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      initialMaxSize: 'InitialMaxSize',
      stepAdjustment: 'StepAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      cooldown: 'number',
      minAdjustmentMagnitude: 'number',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      estimatedInstanceWarmup: 'number',
      metricName: 'string',
      targetValue: 'number',
      disableScaleIn: 'boolean',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      ownerAccount: 'string',
      predictiveScalingMode: 'string',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      predictiveTaskBufferTime: 'number',
      initialMaxSize: 'number',
      stepAdjustment: { 'type': 'array', 'itemType': ModifyScalingRuleRequestStepAdjustment },
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
  headers: { [key: string]: string };
  body: ModifyScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScheduledTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduledTaskId?: string;
  scheduledTaskName?: string;
  description?: string;
  scheduledAction?: string;
  recurrenceEndTime?: string;
  launchTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  taskEnabled?: boolean;
  launchExpirationTime?: number;
  ownerAccount?: string;
  minValue?: number;
  maxValue?: number;
  desiredCapacity?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      description: 'Description',
      scheduledAction: 'ScheduledAction',
      recurrenceEndTime: 'RecurrenceEndTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      taskEnabled: 'TaskEnabled',
      launchExpirationTime: 'LaunchExpirationTime',
      ownerAccount: 'OwnerAccount',
      minValue: 'MinValue',
      maxValue: 'MaxValue',
      desiredCapacity: 'DesiredCapacity',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduledTaskId: 'string',
      scheduledTaskName: 'string',
      description: 'string',
      scheduledAction: 'string',
      recurrenceEndTime: 'string',
      launchTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      taskEnabled: 'boolean',
      launchExpirationTime: 'number',
      ownerAccount: 'string',
      minValue: 'number',
      maxValue: 'number',
      desiredCapacity: 'number',
      scalingGroupId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyScheduledTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScheduledTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebalanceInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: RebalanceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebalanceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordLifecycleActionHeartbeatRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  lifecycleHookId?: string;
  lifecycleActionToken?: string;
  heartbeatTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      lifecycleHookId: 'lifecycleHookId',
      lifecycleActionToken: 'lifecycleActionToken',
      heartbeatTimeout: 'heartbeatTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      lifecycleHookId: 'string',
      lifecycleActionToken: 'string',
      heartbeatTimeout: 'number',
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
  headers: { [key: string]: string };
  body: RecordLifecycleActionHeartbeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecordLifecycleActionHeartbeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  ownerAccount?: string;
  removePolicy?: string;
  decreaseDesiredCapacity?: boolean;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      ownerAccount: 'OwnerAccount',
      removePolicy: 'RemovePolicy',
      decreaseDesiredCapacity: 'DecreaseDesiredCapacity',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      ownerAccount: 'string',
      removePolicy: 'string',
      decreaseDesiredCapacity: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: RemoveInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProcessesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  clientToken?: string;
  process?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      clientToken: 'ClientToken',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      clientToken: 'string',
      process: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: ResumeProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGroupDeletionProtectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  groupDeletionProtection?: boolean;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      groupDeletionProtection: 'GroupDeletionProtection',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      groupDeletionProtection: 'boolean',
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
  headers: { [key: string]: string };
  body: SetGroupDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGroupDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceHealthRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  instanceId?: string;
  healthStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      instanceId: 'InstanceId',
      healthStatus: 'HealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      instanceId: 'string',
      healthStatus: 'string',
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
  headers: { [key: string]: string };
  body: SetInstanceHealthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetInstanceHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstancesProtectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  protectedFromScaleIn?: boolean;
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      protectedFromScaleIn: 'ProtectedFromScaleIn',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      protectedFromScaleIn: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SetInstancesProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetInstancesProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendProcessesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  clientToken?: string;
  process?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      clientToken: 'ClientToken',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      clientToken: 'string',
      process: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: SuspendProcessesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAuthenticationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uid?: number;
  onlyCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uid: 'Uid',
      onlyCheck: 'OnlyCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uid: 'number',
      onlyCheck: 'boolean',
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
  headers: { [key: string]: string };
  body: VerifyAuthenticationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyAuthenticationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsRequestVServerGroupVServerGroupAttribute extends $tea.Model {
  VServerGroupId?: string;
  weight?: number;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      weight: 'number',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachVServerGroupsRequestVServerGroup extends $tea.Model {
  VServerGroupAttribute?: AttachVServerGroupsRequestVServerGroupVServerGroupAttribute[];
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupAttribute: 'VServerGroupAttribute',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupAttribute: { 'type': 'array', 'itemType': AttachVServerGroupsRequestVServerGroupVServerGroupAttribute },
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlarmRequestDimension extends $tea.Model {
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

export class CreateScalingConfigurationRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  diskName?: string;
  description?: string;
  autoSnapshotPolicyId?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      diskName: 'DiskName',
      description: 'Description',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      diskName: 'string',
      description: 'string',
      autoSnapshotPolicyId: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestInstanceTypeOverride extends $tea.Model {
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

export class CreateScalingConfigurationRequestDataDisk extends $tea.Model {
  performanceLevel?: string;
  description?: string;
  snapshotId?: string;
  size?: number;
  device?: string;
  diskName?: string;
  autoSnapshotPolicyId?: string;
  category?: string;
  KMSKeyId?: string;
  deleteWithInstance?: boolean;
  encrypted?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      description: 'Description',
      snapshotId: 'SnapshotId',
      size: 'Size',
      device: 'Device',
      diskName: 'DiskName',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      KMSKeyId: 'KMSKeyId',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      description: 'string',
      snapshotId: 'string',
      size: 'number',
      device: 'string',
      diskName: 'string',
      autoSnapshotPolicyId: 'string',
      category: 'string',
      KMSKeyId: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestSpotPriceLimit extends $tea.Model {
  priceLimit?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      priceLimit: 'PriceLimit',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceLimit: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  diskName?: string;
  description?: string;
  autoSnapshotPolicyId?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      diskName: 'DiskName',
      description: 'Description',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      diskName: 'string',
      description: 'string',
      autoSnapshotPolicyId: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestInstanceTypeOverride extends $tea.Model {
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

export class CreateScalingConfigurationShrinkRequestDataDisk extends $tea.Model {
  performanceLevel?: string;
  description?: string;
  snapshotId?: string;
  size?: number;
  device?: string;
  diskName?: string;
  autoSnapshotPolicyId?: string;
  category?: string;
  KMSKeyId?: string;
  deleteWithInstance?: boolean;
  encrypted?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      description: 'Description',
      snapshotId: 'SnapshotId',
      size: 'Size',
      device: 'Device',
      diskName: 'DiskName',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      KMSKeyId: 'KMSKeyId',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      description: 'string',
      snapshotId: 'string',
      size: 'number',
      device: 'string',
      diskName: 'string',
      autoSnapshotPolicyId: 'string',
      category: 'string',
      KMSKeyId: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationShrinkRequestSpotPriceLimit extends $tea.Model {
  priceLimit?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      priceLimit: 'PriceLimit',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceLimit: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestLifecycleHook extends $tea.Model {
  defaultResult?: string;
  lifecycleHookName?: string;
  lifecycleTransition?: string;
  notificationMetadata?: string;
  notificationArn?: string;
  heartbeatTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      notificationMetadata: 'NotificationMetadata',
      notificationArn: 'NotificationArn',
      heartbeatTimeout: 'HeartbeatTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      notificationMetadata: 'string',
      notificationArn: 'string',
      heartbeatTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestVServerGroupVServerGroupAttribute extends $tea.Model {
  VServerGroupId?: string;
  weight?: number;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      weight: 'number',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestVServerGroup extends $tea.Model {
  VServerGroupAttribute?: CreateScalingGroupRequestVServerGroupVServerGroupAttribute[];
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupAttribute: 'VServerGroupAttribute',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupAttribute: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroupVServerGroupAttribute },
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestTag extends $tea.Model {
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

export class CreateScalingGroupRequestLaunchTemplateOverride extends $tea.Model {
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

export class CreateScalingRuleRequestStepAdjustment extends $tea.Model {
  metricIntervalUpperBound?: number;
  scalingAdjustment?: number;
  metricIntervalLowerBound?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
      metricIntervalLowerBound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmListAlarmAlarmActions extends $tea.Model {
  alarmAction?: string[];
  static names(): { [key: string]: string } {
    return {
      alarmAction: 'AlarmAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmAction: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmListAlarmDimensionsDimension extends $tea.Model {
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

export class DescribeAlarmsResponseBodyAlarmListAlarmDimensions extends $tea.Model {
  dimension?: DescribeAlarmsResponseBodyAlarmListAlarmDimensionsDimension[];
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListAlarmDimensionsDimension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmListAlarm extends $tea.Model {
  alarmTaskId?: string;
  metricName?: string;
  evaluationCount?: number;
  state?: string;
  alarmActions?: DescribeAlarmsResponseBodyAlarmListAlarmAlarmActions;
  scalingGroupId?: string;
  period?: number;
  comparisonOperator?: string;
  effective?: string;
  description?: string;
  dimensions?: DescribeAlarmsResponseBodyAlarmListAlarmDimensions;
  metricType?: string;
  name?: string;
  threshold?: number;
  enable?: boolean;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      state: 'State',
      alarmActions: 'AlarmActions',
      scalingGroupId: 'ScalingGroupId',
      period: 'Period',
      comparisonOperator: 'ComparisonOperator',
      effective: 'Effective',
      description: 'Description',
      dimensions: 'Dimensions',
      metricType: 'MetricType',
      name: 'Name',
      threshold: 'Threshold',
      enable: 'Enable',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      metricName: 'string',
      evaluationCount: 'number',
      state: 'string',
      alarmActions: DescribeAlarmsResponseBodyAlarmListAlarmAlarmActions,
      scalingGroupId: 'string',
      period: 'number',
      comparisonOperator: 'string',
      effective: 'string',
      description: 'string',
      dimensions: DescribeAlarmsResponseBodyAlarmListAlarmDimensions,
      metricType: 'string',
      name: 'string',
      threshold: 'number',
      enable: 'boolean',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmList extends $tea.Model {
  alarm?: DescribeAlarmsResponseBodyAlarmListAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmListAlarm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBodyLifecycleActionsLifecycleActionInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBodyLifecycleActionsLifecycleAction extends $tea.Model {
  lifecycleHookId?: string;
  instanceIds?: DescribeLifecycleActionsResponseBodyLifecycleActionsLifecycleActionInstanceIds;
  lifecycleActionToken?: string;
  lifecycleActionStatus?: string;
  lifecycleActionResult?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycleHookId: 'LifecycleHookId',
      instanceIds: 'InstanceIds',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleActionStatus: 'LifecycleActionStatus',
      lifecycleActionResult: 'LifecycleActionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHookId: 'string',
      instanceIds: DescribeLifecycleActionsResponseBodyLifecycleActionsLifecycleActionInstanceIds,
      lifecycleActionToken: 'string',
      lifecycleActionStatus: 'string',
      lifecycleActionResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleActionsResponseBodyLifecycleActions extends $tea.Model {
  lifecycleAction?: DescribeLifecycleActionsResponseBodyLifecycleActionsLifecycleAction[];
  static names(): { [key: string]: string } {
    return {
      lifecycleAction: 'LifecycleAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleAction: { 'type': 'array', 'itemType': DescribeLifecycleActionsResponseBodyLifecycleActionsLifecycleAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponseBodyLifecycleHooksLifecycleHook extends $tea.Model {
  defaultResult?: string;
  lifecycleHookId?: string;
  lifecycleHookName?: string;
  lifecycleTransition?: string;
  notificationMetadata?: string;
  notificationArn?: string;
  heartbeatTimeout?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      notificationMetadata: 'NotificationMetadata',
      notificationArn: 'NotificationArn',
      heartbeatTimeout: 'HeartbeatTimeout',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      lifecycleHookId: 'string',
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      notificationMetadata: 'string',
      notificationArn: 'string',
      heartbeatTimeout: 'number',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponseBodyLifecycleHooks extends $tea.Model {
  lifecycleHook?: DescribeLifecycleHooksResponseBodyLifecycleHooksLifecycleHook[];
  static names(): { [key: string]: string } {
    return {
      lifecycleHook: 'LifecycleHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHook: { 'type': 'array', 'itemType': DescribeLifecycleHooksResponseBodyLifecycleHooksLifecycleHook },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModelsNotificationConfigurationModelNotificationTypes extends $tea.Model {
  notificationType?: string[];
  static names(): { [key: string]: string } {
    return {
      notificationType: 'NotificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModelsNotificationConfigurationModel extends $tea.Model {
  notificationArn?: string;
  notificationTypes?: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModelsNotificationConfigurationModelNotificationTypes;
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
      notificationTypes: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModelsNotificationConfigurationModelNotificationTypes,
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModels extends $tea.Model {
  notificationConfigurationModel?: DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModelsNotificationConfigurationModel[];
  static names(): { [key: string]: string } {
    return {
      notificationConfigurationModel: 'NotificationConfigurationModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationConfigurationModel: { 'type': 'array', 'itemType': DescribeNotificationConfigurationsResponseBodyNotificationConfigurationModelsNotificationConfigurationModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotificationTypesResponseBodyNotificationTypes extends $tea.Model {
  notificationType?: string[];
  static names(): { [key: string]: string } {
    return {
      notificationType: 'NotificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  vpcUnavailable?: boolean;
  classicUnavailable?: boolean;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      vpcUnavailable: 'VpcUnavailable',
      classicUnavailable: 'ClassicUnavailable',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      vpcUnavailable: 'boolean',
      classicUnavailable: 'boolean',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBodyScalingActivitiesScalingActivity extends $tea.Model {
  progress?: number;
  attachedCapacity?: string;
  scalingInstanceNumber?: number;
  totalCapacity?: string;
  autoCreatedCapacity?: string;
  scalingGroupId?: string;
  endTime?: string;
  startTime?: string;
  description?: string;
  statusCode?: string;
  cause?: string;
  scalingActivityId?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      attachedCapacity: 'AttachedCapacity',
      scalingInstanceNumber: 'ScalingInstanceNumber',
      totalCapacity: 'TotalCapacity',
      autoCreatedCapacity: 'AutoCreatedCapacity',
      scalingGroupId: 'ScalingGroupId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      description: 'Description',
      statusCode: 'StatusCode',
      cause: 'Cause',
      scalingActivityId: 'ScalingActivityId',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      attachedCapacity: 'string',
      scalingInstanceNumber: 'number',
      totalCapacity: 'string',
      autoCreatedCapacity: 'string',
      scalingGroupId: 'string',
      endTime: 'string',
      startTime: 'string',
      description: 'string',
      statusCode: 'string',
      cause: 'string',
      scalingActivityId: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivitiesResponseBodyScalingActivities extends $tea.Model {
  scalingActivity?: DescribeScalingActivitiesResponseBodyScalingActivitiesScalingActivity[];
  static names(): { [key: string]: string } {
    return {
      scalingActivity: 'ScalingActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingActivity: { 'type': 'array', 'itemType': DescribeScalingActivitiesResponseBodyScalingActivitiesScalingActivity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationPrivatePoolOptions extends $tea.Model {
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationTagsTag extends $tea.Model {
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationTags extends $tea.Model {
  tag?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisksDataDisk extends $tea.Model {
  performanceLevel?: string;
  description?: string;
  snapshotId?: string;
  device?: string;
  size?: number;
  diskName?: string;
  autoSnapshotPolicyId?: string;
  category?: string;
  KMSKeyId?: string;
  deleteWithInstance?: boolean;
  encrypted?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      description: 'Description',
      snapshotId: 'SnapshotId',
      device: 'Device',
      size: 'Size',
      diskName: 'DiskName',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      KMSKeyId: 'KMSKeyId',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      description: 'string',
      snapshotId: 'string',
      device: 'string',
      size: 'number',
      diskName: 'string',
      autoSnapshotPolicyId: 'string',
      category: 'string',
      KMSKeyId: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisks extends $tea.Model {
  dataDisk?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisksDataDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSpotPriceLimitSpotPriceModel extends $tea.Model {
  priceLimit?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      priceLimit: 'PriceLimit',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceLimit: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSpotPriceLimit extends $tea.Model {
  spotPriceModel?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSpotPriceLimitSpotPriceModel[];
  static names(): { [key: string]: string } {
    return {
      spotPriceModel: 'SpotPriceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceModel: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSpotPriceLimitSpotPriceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationWeightedCapacities extends $tea.Model {
  weightedCapacity?: string[];
  static names(): { [key: string]: string } {
    return {
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weightedCapacity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSecurityGroupIds extends $tea.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSchedulerOptions extends $tea.Model {
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationInstanceTypes extends $tea.Model {
  instanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfiguration extends $tea.Model {
  privatePoolOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationPrivatePoolOptions;
  creationTime?: string;
  scalingConfigurationName?: string;
  tags?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationTags;
  dataDisks?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisks;
  systemDiskAutoSnapshotPolicyId?: string;
  spotStrategy?: string;
  affinity?: string;
  spotDuration?: number;
  instanceName?: string;
  userData?: string;
  spotPriceLimit?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSpotPriceLimit;
  imageId?: string;
  loadBalancerWeight?: number;
  hostName?: string;
  systemDiskName?: string;
  instanceType?: string;
  systemDiskPerformanceLevel?: string;
  imageName?: string;
  internetChargeType?: string;
  zoneId?: string;
  scalingConfigurationId?: string;
  creditSpecification?: string;
  spotInterruptionBehavior?: string;
  deploymentSetId?: string;
  systemDiskDescription?: string;
  keyPairName?: string;
  securityGroupId?: string;
  scalingGroupId?: string;
  tenancy?: string;
  systemDiskSize?: number;
  ipv6AddressCount?: number;
  lifecycleState?: string;
  securityEnhancementStrategy?: string;
  dedicatedHostId?: string;
  instanceGeneration?: string;
  hpcClusterId?: string;
  passwordInherit?: boolean;
  memory?: number;
  imageFamily?: string;
  systemDiskCategory?: string;
  weightedCapacities?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationWeightedCapacities;
  internetMaxBandwidthOut?: number;
  internetMaxBandwidthIn?: number;
  instanceDescription?: string;
  securityGroupIds?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSecurityGroupIds;
  ioOptimized?: string;
  ramRoleName?: string;
  cpu?: number;
  resourceGroupId?: string;
  schedulerOptions?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSchedulerOptions;
  instanceTypes?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationInstanceTypes;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      creationTime: 'CreationTime',
      scalingConfigurationName: 'ScalingConfigurationName',
      tags: 'Tags',
      dataDisks: 'DataDisks',
      systemDiskAutoSnapshotPolicyId: 'SystemDiskAutoSnapshotPolicyId',
      spotStrategy: 'SpotStrategy',
      affinity: 'Affinity',
      spotDuration: 'SpotDuration',
      instanceName: 'InstanceName',
      userData: 'UserData',
      spotPriceLimit: 'SpotPriceLimit',
      imageId: 'ImageId',
      loadBalancerWeight: 'LoadBalancerWeight',
      hostName: 'HostName',
      systemDiskName: 'SystemDiskName',
      instanceType: 'InstanceType',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      imageName: 'ImageName',
      internetChargeType: 'InternetChargeType',
      zoneId: 'ZoneId',
      scalingConfigurationId: 'ScalingConfigurationId',
      creditSpecification: 'CreditSpecification',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      deploymentSetId: 'DeploymentSetId',
      systemDiskDescription: 'SystemDiskDescription',
      keyPairName: 'KeyPairName',
      securityGroupId: 'SecurityGroupId',
      scalingGroupId: 'ScalingGroupId',
      tenancy: 'Tenancy',
      systemDiskSize: 'SystemDiskSize',
      ipv6AddressCount: 'Ipv6AddressCount',
      lifecycleState: 'LifecycleState',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      dedicatedHostId: 'DedicatedHostId',
      instanceGeneration: 'InstanceGeneration',
      hpcClusterId: 'HpcClusterId',
      passwordInherit: 'PasswordInherit',
      memory: 'Memory',
      imageFamily: 'ImageFamily',
      systemDiskCategory: 'SystemDiskCategory',
      weightedCapacities: 'WeightedCapacities',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      instanceDescription: 'InstanceDescription',
      securityGroupIds: 'SecurityGroupIds',
      ioOptimized: 'IoOptimized',
      ramRoleName: 'RamRoleName',
      cpu: 'Cpu',
      resourceGroupId: 'ResourceGroupId',
      schedulerOptions: 'SchedulerOptions',
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationPrivatePoolOptions,
      creationTime: 'string',
      scalingConfigurationName: 'string',
      tags: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationTags,
      dataDisks: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisks,
      systemDiskAutoSnapshotPolicyId: 'string',
      spotStrategy: 'string',
      affinity: 'string',
      spotDuration: 'number',
      instanceName: 'string',
      userData: 'string',
      spotPriceLimit: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSpotPriceLimit,
      imageId: 'string',
      loadBalancerWeight: 'number',
      hostName: 'string',
      systemDiskName: 'string',
      instanceType: 'string',
      systemDiskPerformanceLevel: 'string',
      imageName: 'string',
      internetChargeType: 'string',
      zoneId: 'string',
      scalingConfigurationId: 'string',
      creditSpecification: 'string',
      spotInterruptionBehavior: 'string',
      deploymentSetId: 'string',
      systemDiskDescription: 'string',
      keyPairName: 'string',
      securityGroupId: 'string',
      scalingGroupId: 'string',
      tenancy: 'string',
      systemDiskSize: 'number',
      ipv6AddressCount: 'number',
      lifecycleState: 'string',
      securityEnhancementStrategy: 'string',
      dedicatedHostId: 'string',
      instanceGeneration: 'string',
      hpcClusterId: 'string',
      passwordInherit: 'boolean',
      memory: 'number',
      imageFamily: 'string',
      systemDiskCategory: 'string',
      weightedCapacities: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationWeightedCapacities,
      internetMaxBandwidthOut: 'number',
      internetMaxBandwidthIn: 'number',
      instanceDescription: 'string',
      securityGroupIds: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSecurityGroupIds,
      ioOptimized: 'string',
      ramRoleName: 'string',
      cpu: 'number',
      resourceGroupId: 'string',
      schedulerOptions: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationSchedulerOptions,
      instanceTypes: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationInstanceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigurationsResponseBodyScalingConfigurations extends $tea.Model {
  scalingConfiguration?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfiguration[];
  static names(): { [key: string]: string } {
    return {
      scalingConfiguration: 'ScalingConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingConfiguration: { 'type': 'array', 'itemType': DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfiguration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBodyScalingInstancesScalingInstance extends $tea.Model {
  creationTime?: string;
  loadBalancerWeight?: number;
  launchTemplateId?: string;
  instanceId?: string;
  launchTemplateVersion?: string;
  healthStatus?: string;
  spotStrategy?: string;
  scalingGroupId?: string;
  warmupState?: string;
  lifecycleState?: string;
  creationType?: string;
  scalingConfigurationId?: string;
  entrusted?: boolean;
  weightedCapacity?: number;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      loadBalancerWeight: 'LoadBalancerWeight',
      launchTemplateId: 'LaunchTemplateId',
      instanceId: 'InstanceId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      healthStatus: 'HealthStatus',
      spotStrategy: 'SpotStrategy',
      scalingGroupId: 'ScalingGroupId',
      warmupState: 'WarmupState',
      lifecycleState: 'LifecycleState',
      creationType: 'CreationType',
      scalingConfigurationId: 'ScalingConfigurationId',
      entrusted: 'Entrusted',
      weightedCapacity: 'WeightedCapacity',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      loadBalancerWeight: 'number',
      launchTemplateId: 'string',
      instanceId: 'string',
      launchTemplateVersion: 'string',
      healthStatus: 'string',
      spotStrategy: 'string',
      scalingGroupId: 'string',
      warmupState: 'string',
      lifecycleState: 'string',
      creationType: 'string',
      scalingConfigurationId: 'string',
      entrusted: 'boolean',
      weightedCapacity: 'number',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBodyScalingInstances extends $tea.Model {
  scalingInstance?: DescribeScalingInstancesResponseBodyScalingInstancesScalingInstance[];
  static names(): { [key: string]: string } {
    return {
      scalingInstance: 'ScalingInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingInstance: { 'type': 'array', 'itemType': DescribeScalingInstancesResponseBodyScalingInstancesScalingInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarmDimensionsDimension extends $tea.Model {
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

export class DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarmDimensions extends $tea.Model {
  dimension?: DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarmDimensionsDimension[];
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarmDimensionsDimension },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarm extends $tea.Model {
  alarmTaskId?: string;
  comparisonOperator?: string;
  metricName?: string;
  evaluationCount?: number;
  alarmTaskName?: string;
  dimensions?: DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarmDimensions;
  metricType?: string;
  threshold?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      alarmTaskName: 'AlarmTaskName',
      dimensions: 'Dimensions',
      metricType: 'MetricType',
      threshold: 'Threshold',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      comparisonOperator: 'string',
      metricName: 'string',
      evaluationCount: 'number',
      alarmTaskName: 'string',
      dimensions: DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarmDimensions,
      metricType: 'string',
      threshold: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarms extends $tea.Model {
  alarm?: DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarmsAlarm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesScalingRuleStepAdjustmentsStepAdjustment extends $tea.Model {
  metricIntervalUpperBound?: number;
  scalingAdjustment?: number;
  metricIntervalLowerBound?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
      metricIntervalLowerBound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesScalingRuleStepAdjustments extends $tea.Model {
  stepAdjustment?: DescribeScalingRulesResponseBodyScalingRulesScalingRuleStepAdjustmentsStepAdjustment[];
  static names(): { [key: string]: string } {
    return {
      stepAdjustment: 'StepAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepAdjustment: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesScalingRuleStepAdjustmentsStepAdjustment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesScalingRule extends $tea.Model {
  metricName?: string;
  initialMaxSize?: number;
  alarms?: DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarms;
  scaleOutEvaluationCount?: number;
  predictiveScalingMode?: string;
  minSize?: number;
  predictiveTaskBufferTime?: number;
  scalingGroupId?: string;
  predictiveValueBehavior?: string;
  cooldown?: number;
  scalingRuleType?: string;
  predictiveValueBuffer?: number;
  scaleInEvaluationCount?: number;
  disableScaleIn?: boolean;
  scalingRuleName?: string;
  adjustmentType?: string;
  estimatedInstanceWarmup?: number;
  minAdjustmentMagnitude?: number;
  scalingRuleAri?: string;
  stepAdjustments?: DescribeScalingRulesResponseBodyScalingRulesScalingRuleStepAdjustments;
  targetValue?: number;
  maxSize?: number;
  adjustmentValue?: number;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      initialMaxSize: 'InitialMaxSize',
      alarms: 'Alarms',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      predictiveScalingMode: 'PredictiveScalingMode',
      minSize: 'MinSize',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      scalingGroupId: 'ScalingGroupId',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      cooldown: 'Cooldown',
      scalingRuleType: 'ScalingRuleType',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      disableScaleIn: 'DisableScaleIn',
      scalingRuleName: 'ScalingRuleName',
      adjustmentType: 'AdjustmentType',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      scalingRuleAri: 'ScalingRuleAri',
      stepAdjustments: 'StepAdjustments',
      targetValue: 'TargetValue',
      maxSize: 'MaxSize',
      adjustmentValue: 'AdjustmentValue',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      initialMaxSize: 'number',
      alarms: DescribeScalingRulesResponseBodyScalingRulesScalingRuleAlarms,
      scaleOutEvaluationCount: 'number',
      predictiveScalingMode: 'string',
      minSize: 'number',
      predictiveTaskBufferTime: 'number',
      scalingGroupId: 'string',
      predictiveValueBehavior: 'string',
      cooldown: 'number',
      scalingRuleType: 'string',
      predictiveValueBuffer: 'number',
      scaleInEvaluationCount: 'number',
      disableScaleIn: 'boolean',
      scalingRuleName: 'string',
      adjustmentType: 'string',
      estimatedInstanceWarmup: 'number',
      minAdjustmentMagnitude: 'number',
      scalingRuleAri: 'string',
      stepAdjustments: DescribeScalingRulesResponseBodyScalingRulesScalingRuleStepAdjustments,
      targetValue: 'number',
      maxSize: 'number',
      adjustmentValue: 'number',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRules extends $tea.Model {
  scalingRule?: DescribeScalingRulesResponseBodyScalingRulesScalingRule[];
  static names(): { [key: string]: string } {
    return {
      scalingRule: 'ScalingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingRule: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesScalingRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBodyScheduledTasksScheduledTask extends $tea.Model {
  taskEnabled?: boolean;
  recurrenceValue?: string;
  maxValue?: number;
  recurrenceType?: string;
  scheduledTaskName?: string;
  recurrenceEndTime?: string;
  scheduledTaskId?: string;
  desiredCapacity?: number;
  minValue?: number;
  scalingGroupId?: string;
  launchExpirationTime?: number;
  description?: string;
  scheduledAction?: string;
  launchTime?: string;
  static names(): { [key: string]: string } {
    return {
      taskEnabled: 'TaskEnabled',
      recurrenceValue: 'RecurrenceValue',
      maxValue: 'MaxValue',
      recurrenceType: 'RecurrenceType',
      scheduledTaskName: 'ScheduledTaskName',
      recurrenceEndTime: 'RecurrenceEndTime',
      scheduledTaskId: 'ScheduledTaskId',
      desiredCapacity: 'DesiredCapacity',
      minValue: 'MinValue',
      scalingGroupId: 'ScalingGroupId',
      launchExpirationTime: 'LaunchExpirationTime',
      description: 'Description',
      scheduledAction: 'ScheduledAction',
      launchTime: 'LaunchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskEnabled: 'boolean',
      recurrenceValue: 'string',
      maxValue: 'number',
      recurrenceType: 'string',
      scheduledTaskName: 'string',
      recurrenceEndTime: 'string',
      scheduledTaskId: 'string',
      desiredCapacity: 'number',
      minValue: 'number',
      scalingGroupId: 'string',
      launchExpirationTime: 'number',
      description: 'string',
      scheduledAction: 'string',
      launchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBodyScheduledTasks extends $tea.Model {
  scheduledTask?: DescribeScheduledTasksResponseBodyScheduledTasksScheduledTask[];
  static names(): { [key: string]: string } {
    return {
      scheduledTask: 'ScheduledTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledTask: { 'type': 'array', 'itemType': DescribeScheduledTasksResponseBodyScheduledTasksScheduledTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequestVServerGroupVServerGroupAttribute extends $tea.Model {
  VServerGroupId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      VServerGroupId: 'VServerGroupId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequestVServerGroup extends $tea.Model {
  VServerGroupAttribute?: DetachVServerGroupsRequestVServerGroupVServerGroupAttribute[];
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      VServerGroupAttribute: 'VServerGroupAttribute',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroupAttribute: { 'type': 'array', 'itemType': DetachVServerGroupsRequestVServerGroupVServerGroupAttribute },
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableScalingGroupRequestLaunchTemplateOverride extends $tea.Model {
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

export class ListTagKeysResponseBodyKeys extends $tea.Model {
  key?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': 'string' },
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBodyValues extends $tea.Model {
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlarmRequestDimension extends $tea.Model {
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

export class ModifyScalingConfigurationRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  diskName?: string;
  description?: string;
  autoSnapshotPolicyId?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      diskName: 'DiskName',
      description: 'Description',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      diskName: 'string',
      description: 'string',
      autoSnapshotPolicyId: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestDataDisk extends $tea.Model {
  performanceLevel?: string;
  description?: string;
  snapshotId?: string;
  size?: number;
  device?: string;
  diskName?: string;
  autoSnapshotPolicyId?: string;
  category?: string;
  KMSKeyId?: string;
  deleteWithInstance?: boolean;
  encrypted?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      description: 'Description',
      snapshotId: 'SnapshotId',
      size: 'Size',
      device: 'Device',
      diskName: 'DiskName',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      KMSKeyId: 'KMSKeyId',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      description: 'string',
      snapshotId: 'string',
      size: 'number',
      device: 'string',
      diskName: 'string',
      autoSnapshotPolicyId: 'string',
      category: 'string',
      KMSKeyId: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestSpotPriceLimit extends $tea.Model {
  priceLimit?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      priceLimit: 'PriceLimit',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceLimit: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationRequestInstanceTypeOverride extends $tea.Model {
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

export class ModifyScalingConfigurationShrinkRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  diskName?: string;
  description?: string;
  autoSnapshotPolicyId?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
      diskName: 'DiskName',
      description: 'Description',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
      diskName: 'string',
      description: 'string',
      autoSnapshotPolicyId: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestPrivatePoolOptions extends $tea.Model {
  matchCriteria?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestDataDisk extends $tea.Model {
  performanceLevel?: string;
  description?: string;
  snapshotId?: string;
  size?: number;
  device?: string;
  diskName?: string;
  autoSnapshotPolicyId?: string;
  category?: string;
  KMSKeyId?: string;
  deleteWithInstance?: boolean;
  encrypted?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      description: 'Description',
      snapshotId: 'SnapshotId',
      size: 'Size',
      device: 'Device',
      diskName: 'DiskName',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      KMSKeyId: 'KMSKeyId',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      description: 'string',
      snapshotId: 'string',
      size: 'number',
      device: 'string',
      diskName: 'string',
      autoSnapshotPolicyId: 'string',
      category: 'string',
      KMSKeyId: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestSpotPriceLimit extends $tea.Model {
  priceLimit?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      priceLimit: 'PriceLimit',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceLimit: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigurationShrinkRequestInstanceTypeOverride extends $tea.Model {
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

export class ModifyScalingGroupRequestLaunchTemplateOverride extends $tea.Model {
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

export class ModifyScalingRuleRequestStepAdjustment extends $tea.Model {
  metricIntervalUpperBound?: number;
  scalingAdjustment?: number;
  metricIntervalLowerBound?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
      metricIntervalLowerBound: 'number',
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
      'us-west-1': "ess.aliyuncs.com",
      'us-east-1': "ess.aliyuncs.com",
      'cn-shanghai-finance-1': "ess.aliyuncs.com",
      'cn-shenzhen-finance-1': "ess.aliyuncs.com",
      'cn-north-2-gov-1': "ess.aliyuncs.com",
      'ap-northeast-2-pop': "ess.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "ess.aliyuncs.com",
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
      'cn-zhangbei-na61-b01': "ess.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ess.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ess.aliyuncs.com",
      'eu-west-1-oxs': "ess.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "ess.ap-northeast-1.aliyuncs.com",
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

  async attachDBInstancesWithOptions(request: AttachDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachDBInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachDBInstancesResponse>(await this.doRPCRequest("AttachDBInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new AttachDBInstancesResponse({}));
  }

  async attachDBInstances(request: AttachDBInstancesRequest): Promise<AttachDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDBInstancesWithOptions(request, runtime);
  }

  async attachInstancesWithOptions(request: AttachInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachInstancesResponse>(await this.doRPCRequest("AttachInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new AttachInstancesResponse({}));
  }

  async attachInstances(request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachInstancesWithOptions(request, runtime);
  }

  async attachLoadBalancersWithOptions(request: AttachLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<AttachLoadBalancersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachLoadBalancersResponse>(await this.doRPCRequest("AttachLoadBalancers", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new AttachLoadBalancersResponse({}));
  }

  async attachLoadBalancers(request: AttachLoadBalancersRequest): Promise<AttachLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLoadBalancersWithOptions(request, runtime);
  }

  async attachVServerGroupsWithOptions(request: AttachVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AttachVServerGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachVServerGroupsResponse>(await this.doRPCRequest("AttachVServerGroups", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new AttachVServerGroupsResponse({}));
  }

  async attachVServerGroups(request: AttachVServerGroupsRequest): Promise<AttachVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachVServerGroupsWithOptions(request, runtime);
  }

  async completeLifecycleActionWithOptions(request: CompleteLifecycleActionRequest, runtime: $Util.RuntimeOptions): Promise<CompleteLifecycleActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompleteLifecycleActionResponse>(await this.doRPCRequest("CompleteLifecycleAction", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CompleteLifecycleActionResponse({}));
  }

  async completeLifecycleAction(request: CompleteLifecycleActionRequest): Promise<CompleteLifecycleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeLifecycleActionWithOptions(request, runtime);
  }

  async createAlarmWithOptions(request: CreateAlarmRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlarmResponse>(await this.doRPCRequest("CreateAlarm", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlarmResponse({}));
  }

  async createAlarm(request: CreateAlarmRequest): Promise<CreateAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlarmWithOptions(request, runtime);
  }

  async createLifecycleHookWithOptions(request: CreateLifecycleHookRequest, runtime: $Util.RuntimeOptions): Promise<CreateLifecycleHookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLifecycleHookResponse>(await this.doRPCRequest("CreateLifecycleHook", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLifecycleHookResponse({}));
  }

  async createLifecycleHook(request: CreateLifecycleHookRequest): Promise<CreateLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLifecycleHookWithOptions(request, runtime);
  }

  async createNotificationConfigurationWithOptions(request: CreateNotificationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateNotificationConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNotificationConfigurationResponse>(await this.doRPCRequest("CreateNotificationConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNotificationConfigurationResponse({}));
  }

  async createNotificationConfiguration(request: CreateNotificationConfigurationRequest): Promise<CreateNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNotificationConfigurationWithOptions(request, runtime);
  }

  async createScalingConfigurationWithOptions(tmpReq: CreateScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateScalingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.schedulerOptions)) {
      request.schedulerOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerOptions, "SchedulerOptions", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScalingConfigurationResponse>(await this.doRPCRequest("CreateScalingConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScalingConfigurationResponse({}));
  }

  async createScalingConfiguration(request: CreateScalingConfigurationRequest): Promise<CreateScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingConfigurationWithOptions(request, runtime);
  }

  async createScalingGroupWithOptions(request: CreateScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScalingGroupResponse>(await this.doRPCRequest("CreateScalingGroup", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScalingGroupResponse({}));
  }

  async createScalingGroup(request: CreateScalingGroupRequest): Promise<CreateScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingGroupWithOptions(request, runtime);
  }

  async createScalingRuleWithOptions(request: CreateScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScalingRuleResponse>(await this.doRPCRequest("CreateScalingRule", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScalingRuleResponse({}));
  }

  async createScalingRule(request: CreateScalingRuleRequest): Promise<CreateScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  async createScheduledTaskWithOptions(request: CreateScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduledTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScheduledTaskResponse>(await this.doRPCRequest("CreateScheduledTask", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScheduledTaskResponse({}));
  }

  async createScheduledTask(request: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduledTaskWithOptions(request, runtime);
  }

  async deactivateScalingConfigurationWithOptions(request: DeactivateScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeactivateScalingConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactivateScalingConfigurationResponse>(await this.doRPCRequest("DeactivateScalingConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeactivateScalingConfigurationResponse({}));
  }

  async deactivateScalingConfiguration(request: DeactivateScalingConfigurationRequest): Promise<DeactivateScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateScalingConfigurationWithOptions(request, runtime);
  }

  async deleteAlarmWithOptions(request: DeleteAlarmRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlarmResponse>(await this.doRPCRequest("DeleteAlarm", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlarmResponse({}));
  }

  async deleteAlarm(request: DeleteAlarmRequest): Promise<DeleteAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlarmWithOptions(request, runtime);
  }

  async deleteLifecycleHookWithOptions(request: DeleteLifecycleHookRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLifecycleHookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLifecycleHookResponse>(await this.doRPCRequest("DeleteLifecycleHook", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLifecycleHookResponse({}));
  }

  async deleteLifecycleHook(request: DeleteLifecycleHookRequest): Promise<DeleteLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLifecycleHookWithOptions(request, runtime);
  }

  async deleteNotificationConfigurationWithOptions(request: DeleteNotificationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNotificationConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNotificationConfigurationResponse>(await this.doRPCRequest("DeleteNotificationConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNotificationConfigurationResponse({}));
  }

  async deleteNotificationConfiguration(request: DeleteNotificationConfigurationRequest): Promise<DeleteNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNotificationConfigurationWithOptions(request, runtime);
  }

  async deleteScalingConfigurationWithOptions(request: DeleteScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScalingConfigurationResponse>(await this.doRPCRequest("DeleteScalingConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScalingConfigurationResponse({}));
  }

  async deleteScalingConfiguration(request: DeleteScalingConfigurationRequest): Promise<DeleteScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingConfigurationWithOptions(request, runtime);
  }

  async deleteScalingGroupWithOptions(request: DeleteScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScalingGroupResponse>(await this.doRPCRequest("DeleteScalingGroup", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScalingGroupResponse({}));
  }

  async deleteScalingGroup(request: DeleteScalingGroupRequest): Promise<DeleteScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingGroupWithOptions(request, runtime);
  }

  async deleteScalingRuleWithOptions(request: DeleteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScalingRuleResponse>(await this.doRPCRequest("DeleteScalingRule", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScalingRuleResponse({}));
  }

  async deleteScalingRule(request: DeleteScalingRuleRequest): Promise<DeleteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingRuleWithOptions(request, runtime);
  }

  async deleteScheduledTaskWithOptions(request: DeleteScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduledTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScheduledTaskResponse>(await this.doRPCRequest("DeleteScheduledTask", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScheduledTaskResponse({}));
  }

  async deleteScheduledTask(request: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduledTaskWithOptions(request, runtime);
  }

  async describeAlarmsWithOptions(request: DescribeAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlarmsResponse>(await this.doRPCRequest("DescribeAlarms", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlarmsResponse({}));
  }

  async describeAlarms(request: DescribeAlarmsRequest): Promise<DescribeAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmsWithOptions(request, runtime);
  }

  async describeLifecycleActionsWithOptions(request: DescribeLifecycleActionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLifecycleActionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLifecycleActionsResponse>(await this.doRPCRequest("DescribeLifecycleActions", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLifecycleActionsResponse({}));
  }

  async describeLifecycleActions(request: DescribeLifecycleActionsRequest): Promise<DescribeLifecycleActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLifecycleActionsWithOptions(request, runtime);
  }

  async describeLifecycleHooksWithOptions(request: DescribeLifecycleHooksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLifecycleHooksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLifecycleHooksResponse>(await this.doRPCRequest("DescribeLifecycleHooks", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLifecycleHooksResponse({}));
  }

  async describeLifecycleHooks(request: DescribeLifecycleHooksRequest): Promise<DescribeLifecycleHooksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLifecycleHooksWithOptions(request, runtime);
  }

  async describeLimitationWithOptions(request: DescribeLimitationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLimitationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLimitationResponse>(await this.doRPCRequest("DescribeLimitation", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLimitationResponse({}));
  }

  async describeLimitation(request: DescribeLimitationRequest): Promise<DescribeLimitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLimitationWithOptions(request, runtime);
  }

  async describeNotificationConfigurationsWithOptions(request: DescribeNotificationConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNotificationConfigurationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNotificationConfigurationsResponse>(await this.doRPCRequest("DescribeNotificationConfigurations", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNotificationConfigurationsResponse({}));
  }

  async describeNotificationConfigurations(request: DescribeNotificationConfigurationsRequest): Promise<DescribeNotificationConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationConfigurationsWithOptions(request, runtime);
  }

  async describeNotificationTypesWithOptions(request: DescribeNotificationTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNotificationTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNotificationTypesResponse>(await this.doRPCRequest("DescribeNotificationTypes", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNotificationTypesResponse({}));
  }

  async describeNotificationTypes(request: DescribeNotificationTypesRequest): Promise<DescribeNotificationTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNotificationTypesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeScalingActivitiesWithOptions(request: DescribeScalingActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingActivitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingActivitiesResponse>(await this.doRPCRequest("DescribeScalingActivities", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingActivitiesResponse({}));
  }

  async describeScalingActivities(request: DescribeScalingActivitiesRequest): Promise<DescribeScalingActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivitiesWithOptions(request, runtime);
  }

  async describeScalingActivityDetailWithOptions(request: DescribeScalingActivityDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingActivityDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingActivityDetailResponse>(await this.doRPCRequest("DescribeScalingActivityDetail", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingActivityDetailResponse({}));
  }

  async describeScalingActivityDetail(request: DescribeScalingActivityDetailRequest): Promise<DescribeScalingActivityDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivityDetailWithOptions(request, runtime);
  }

  async describeScalingConfigurationsWithOptions(request: DescribeScalingConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingConfigurationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingConfigurationsResponse>(await this.doRPCRequest("DescribeScalingConfigurations", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingConfigurationsResponse({}));
  }

  async describeScalingConfigurations(request: DescribeScalingConfigurationsRequest): Promise<DescribeScalingConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingConfigurationsWithOptions(request, runtime);
  }

  async describeScalingInstancesWithOptions(request: DescribeScalingInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingInstancesResponse>(await this.doRPCRequest("DescribeScalingInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingInstancesResponse({}));
  }

  async describeScalingInstances(request: DescribeScalingInstancesRequest): Promise<DescribeScalingInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingInstancesWithOptions(request, runtime);
  }

  async describeScalingRulesWithOptions(request: DescribeScalingRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingRulesResponse>(await this.doRPCRequest("DescribeScalingRules", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingRulesResponse({}));
  }

  async describeScalingRules(request: DescribeScalingRulesRequest): Promise<DescribeScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingRulesWithOptions(request, runtime);
  }

  async describeScheduledTasksWithOptions(request: DescribeScheduledTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduledTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScheduledTasksResponse>(await this.doRPCRequest("DescribeScheduledTasks", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScheduledTasksResponse({}));
  }

  async describeScheduledTasks(request: DescribeScheduledTasksRequest): Promise<DescribeScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduledTasksWithOptions(request, runtime);
  }

  async detachDBInstancesWithOptions(request: DetachDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DetachDBInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachDBInstancesResponse>(await this.doRPCRequest("DetachDBInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DetachDBInstancesResponse({}));
  }

  async detachDBInstances(request: DetachDBInstancesRequest): Promise<DetachDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDBInstancesWithOptions(request, runtime);
  }

  async detachInstancesWithOptions(request: DetachInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DetachInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachInstancesResponse>(await this.doRPCRequest("DetachInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DetachInstancesResponse({}));
  }

  async detachInstances(request: DetachInstancesRequest): Promise<DetachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachInstancesWithOptions(request, runtime);
  }

  async detachLoadBalancersWithOptions(request: DetachLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<DetachLoadBalancersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachLoadBalancersResponse>(await this.doRPCRequest("DetachLoadBalancers", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DetachLoadBalancersResponse({}));
  }

  async detachLoadBalancers(request: DetachLoadBalancersRequest): Promise<DetachLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLoadBalancersWithOptions(request, runtime);
  }

  async detachVServerGroupsWithOptions(request: DetachVServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DetachVServerGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachVServerGroupsResponse>(await this.doRPCRequest("DetachVServerGroups", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DetachVServerGroupsResponse({}));
  }

  async detachVServerGroups(request: DetachVServerGroupsRequest): Promise<DetachVServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachVServerGroupsWithOptions(request, runtime);
  }

  async disableAlarmWithOptions(request: DisableAlarmRequest, runtime: $Util.RuntimeOptions): Promise<DisableAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableAlarmResponse>(await this.doRPCRequest("DisableAlarm", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DisableAlarmResponse({}));
  }

  async disableAlarm(request: DisableAlarmRequest): Promise<DisableAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAlarmWithOptions(request, runtime);
  }

  async disableScalingGroupWithOptions(request: DisableScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<DisableScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableScalingGroupResponse>(await this.doRPCRequest("DisableScalingGroup", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new DisableScalingGroupResponse({}));
  }

  async disableScalingGroup(request: DisableScalingGroupRequest): Promise<DisableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableScalingGroupWithOptions(request, runtime);
  }

  async enableAlarmWithOptions(request: EnableAlarmRequest, runtime: $Util.RuntimeOptions): Promise<EnableAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableAlarmResponse>(await this.doRPCRequest("EnableAlarm", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnableAlarmResponse({}));
  }

  async enableAlarm(request: EnableAlarmRequest): Promise<EnableAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAlarmWithOptions(request, runtime);
  }

  async enableScalingGroupWithOptions(request: EnableScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<EnableScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableScalingGroupResponse>(await this.doRPCRequest("EnableScalingGroup", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnableScalingGroupResponse({}));
  }

  async enableScalingGroup(request: EnableScalingGroupRequest): Promise<EnableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableScalingGroupWithOptions(request, runtime);
  }

  async enterStandbyWithOptions(request: EnterStandbyRequest, runtime: $Util.RuntimeOptions): Promise<EnterStandbyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnterStandbyResponse>(await this.doRPCRequest("EnterStandby", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnterStandbyResponse({}));
  }

  async enterStandby(request: EnterStandbyRequest): Promise<EnterStandbyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enterStandbyWithOptions(request, runtime);
  }

  async executeScalingRuleWithOptions(request: ExecuteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteScalingRuleResponse>(await this.doRPCRequest("ExecuteScalingRule", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteScalingRuleResponse({}));
  }

  async executeScalingRule(request: ExecuteScalingRuleRequest): Promise<ExecuteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeScalingRuleWithOptions(request, runtime);
  }

  async exitStandbyWithOptions(request: ExitStandbyRequest, runtime: $Util.RuntimeOptions): Promise<ExitStandbyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExitStandbyResponse>(await this.doRPCRequest("ExitStandby", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ExitStandbyResponse({}));
  }

  async exitStandby(request: ExitStandbyRequest): Promise<ExitStandbyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exitStandbyWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async modifyAlarmWithOptions(request: ModifyAlarmRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAlarmResponse>(await this.doRPCRequest("ModifyAlarm", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAlarmResponse({}));
  }

  async modifyAlarm(request: ModifyAlarmRequest): Promise<ModifyAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAlarmWithOptions(request, runtime);
  }

  async modifyLifecycleHookWithOptions(request: ModifyLifecycleHookRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLifecycleHookResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLifecycleHookResponse>(await this.doRPCRequest("ModifyLifecycleHook", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLifecycleHookResponse({}));
  }

  async modifyLifecycleHook(request: ModifyLifecycleHookRequest): Promise<ModifyLifecycleHookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLifecycleHookWithOptions(request, runtime);
  }

  async modifyNotificationConfigurationWithOptions(request: ModifyNotificationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNotificationConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNotificationConfigurationResponse>(await this.doRPCRequest("ModifyNotificationConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNotificationConfigurationResponse({}));
  }

  async modifyNotificationConfiguration(request: ModifyNotificationConfigurationRequest): Promise<ModifyNotificationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNotificationConfigurationWithOptions(request, runtime);
  }

  async modifyScalingConfigurationWithOptions(tmpReq: ModifyScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyScalingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.schedulerOptions)) {
      request.schedulerOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerOptions, "SchedulerOptions", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingConfigurationResponse>(await this.doRPCRequest("ModifyScalingConfiguration", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingConfigurationResponse({}));
  }

  async modifyScalingConfiguration(request: ModifyScalingConfigurationRequest): Promise<ModifyScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingConfigurationWithOptions(request, runtime);
  }

  async modifyScalingGroupWithOptions(request: ModifyScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingGroupResponse>(await this.doRPCRequest("ModifyScalingGroup", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingGroupResponse({}));
  }

  async modifyScalingGroup(request: ModifyScalingGroupRequest): Promise<ModifyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  async modifyScalingRuleWithOptions(request: ModifyScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingRuleResponse>(await this.doRPCRequest("ModifyScalingRule", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingRuleResponse({}));
  }

  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  async modifyScheduledTaskWithOptions(request: ModifyScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScheduledTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScheduledTaskResponse>(await this.doRPCRequest("ModifyScheduledTask", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScheduledTaskResponse({}));
  }

  async modifyScheduledTask(request: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScheduledTaskWithOptions(request, runtime);
  }

  async rebalanceInstancesWithOptions(request: RebalanceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RebalanceInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebalanceInstancesResponse>(await this.doRPCRequest("RebalanceInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new RebalanceInstancesResponse({}));
  }

  async rebalanceInstances(request: RebalanceInstancesRequest): Promise<RebalanceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebalanceInstancesWithOptions(request, runtime);
  }

  async recordLifecycleActionHeartbeatWithOptions(request: RecordLifecycleActionHeartbeatRequest, runtime: $Util.RuntimeOptions): Promise<RecordLifecycleActionHeartbeatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecordLifecycleActionHeartbeatResponse>(await this.doRPCRequest("RecordLifecycleActionHeartbeat", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new RecordLifecycleActionHeartbeatResponse({}));
  }

  async recordLifecycleActionHeartbeat(request: RecordLifecycleActionHeartbeatRequest): Promise<RecordLifecycleActionHeartbeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordLifecycleActionHeartbeatWithOptions(request, runtime);
  }

  async removeInstancesWithOptions(request: RemoveInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveInstancesResponse>(await this.doRPCRequest("RemoveInstances", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveInstancesResponse({}));
  }

  async removeInstances(request: RemoveInstancesRequest): Promise<RemoveInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeInstancesWithOptions(request, runtime);
  }

  async resumeProcessesWithOptions(request: ResumeProcessesRequest, runtime: $Util.RuntimeOptions): Promise<ResumeProcessesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeProcessesResponse>(await this.doRPCRequest("ResumeProcesses", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeProcessesResponse({}));
  }

  async resumeProcesses(request: ResumeProcessesRequest): Promise<ResumeProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeProcessesWithOptions(request, runtime);
  }

  async setGroupDeletionProtectionWithOptions(request: SetGroupDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetGroupDeletionProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetGroupDeletionProtectionResponse>(await this.doRPCRequest("SetGroupDeletionProtection", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new SetGroupDeletionProtectionResponse({}));
  }

  async setGroupDeletionProtection(request: SetGroupDeletionProtectionRequest): Promise<SetGroupDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGroupDeletionProtectionWithOptions(request, runtime);
  }

  async setInstanceHealthWithOptions(request: SetInstanceHealthRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceHealthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetInstanceHealthResponse>(await this.doRPCRequest("SetInstanceHealth", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new SetInstanceHealthResponse({}));
  }

  async setInstanceHealth(request: SetInstanceHealthRequest): Promise<SetInstanceHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceHealthWithOptions(request, runtime);
  }

  async setInstancesProtectionWithOptions(request: SetInstancesProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetInstancesProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetInstancesProtectionResponse>(await this.doRPCRequest("SetInstancesProtection", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new SetInstancesProtectionResponse({}));
  }

  async setInstancesProtection(request: SetInstancesProtectionRequest): Promise<SetInstancesProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstancesProtectionWithOptions(request, runtime);
  }

  async suspendProcessesWithOptions(request: SuspendProcessesRequest, runtime: $Util.RuntimeOptions): Promise<SuspendProcessesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendProcessesResponse>(await this.doRPCRequest("SuspendProcesses", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendProcessesResponse({}));
  }

  async suspendProcesses(request: SuspendProcessesRequest): Promise<SuspendProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendProcessesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async verifyAuthenticationWithOptions(request: VerifyAuthenticationRequest, runtime: $Util.RuntimeOptions): Promise<VerifyAuthenticationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyAuthenticationResponse>(await this.doRPCRequest("VerifyAuthentication", "2014-08-28", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyAuthenticationResponse({}));
  }

  async verifyAuthentication(request: VerifyAuthenticationRequest): Promise<VerifyAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyAuthenticationWithOptions(request, runtime);
  }

  async verifyUserWithOptions(request: VerifyUserRequest, runtime: $Util.RuntimeOptions): Promise<VerifyUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyUserResponse>(await this.doRPCRequest("VerifyUser", "2014-08-28", "HTTPS", "POST", "AK", "none", req, runtime), new VerifyUserResponse({}));
  }

  async verifyUser(request: VerifyUserRequest): Promise<VerifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyUserWithOptions(request, runtime);
  }

}
