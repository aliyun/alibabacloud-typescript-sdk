// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachInstancesRequest extends $tea.Model {
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
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

export class CreateScalingConfigurationRequest extends $tea.Model {
  dataDisk?: CreateScalingConfigurationRequestDataDisk[];
  systemDisk?: CreateScalingConfigurationRequestSystemDisk;
  imageId?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': CreateScalingConfigurationRequestDataDisk },
      systemDisk: CreateScalingConfigurationRequestSystemDisk,
      imageId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      securityGroupId: 'string',
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
  removalPolicy?: string[];
  DBInstanceIds?: string;
  defaultCooldown?: number;
  loadBalancerIds?: string;
  maxSize?: number;
  minSize?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  scalingGroupName?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      removalPolicy: 'RemovalPolicy',
      DBInstanceIds: 'DBInstanceIds',
      defaultCooldown: 'DefaultCooldown',
      loadBalancerIds: 'LoadBalancerIds',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupName: 'ScalingGroupName',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removalPolicy: { 'type': 'array', 'itemType': 'string' },
      DBInstanceIds: 'string',
      defaultCooldown: 'number',
      loadBalancerIds: 'string',
      maxSize: 'number',
      minSize: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupName: 'string',
      vSwitchId: 'string',
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
  cooldown?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      cooldown: 'Cooldown',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      cooldown: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scalingRuleName: 'string',
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
  launchExpirationTime?: number;
  launchTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduledAction?: string;
  scheduledTaskName?: string;
  taskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      launchExpirationTime: 'number',
      launchTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class DeleteScalingConfigurationRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'ForceDelete',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduledTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduledTaskId: 'ScheduledTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class DescribeAccountAttributesRequest extends $tea.Model {
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

export class DescribeAccountAttributesResponseBody extends $tea.Model {
  maxNumberOfDBInstances?: number;
  maxNumberOfLoadBalancers?: number;
  maxNumberOfMaxSize?: number;
  maxNumberOfMinSize?: number;
  maxNumberOfScalingConfigurations?: number;
  maxNumberOfScalingGroups?: number;
  maxNumberOfScalingInstances?: number;
  maxNumberOfScalingRules?: number;
  maxNumberOfScheduledTasks?: number;
  static names(): { [key: string]: string } {
    return {
      maxNumberOfDBInstances: 'MaxNumberOfDBInstances',
      maxNumberOfLoadBalancers: 'MaxNumberOfLoadBalancers',
      maxNumberOfMaxSize: 'MaxNumberOfMaxSize',
      maxNumberOfMinSize: 'MaxNumberOfMinSize',
      maxNumberOfScalingConfigurations: 'MaxNumberOfScalingConfigurations',
      maxNumberOfScalingGroups: 'MaxNumberOfScalingGroups',
      maxNumberOfScalingInstances: 'MaxNumberOfScalingInstances',
      maxNumberOfScalingRules: 'MaxNumberOfScalingRules',
      maxNumberOfScheduledTasks: 'MaxNumberOfScheduledTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNumberOfDBInstances: 'number',
      maxNumberOfLoadBalancers: 'number',
      maxNumberOfMaxSize: 'number',
      maxNumberOfMinSize: 'number',
      maxNumberOfScalingConfigurations: 'number',
      maxNumberOfScalingGroups: 'number',
      maxNumberOfScalingInstances: 'number',
      maxNumberOfScalingRules: 'number',
      maxNumberOfScheduledTasks: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountAttributesResponseBody;
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
      body: DescribeAccountAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityHistoryRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityHistoryResponseBody extends $tea.Model {
  capacityHistoryItems?: DescribeCapacityHistoryResponseBodyCapacityHistoryItems;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityHistoryItems: 'CapacityHistoryItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityHistoryItems: DescribeCapacityHistoryResponseBodyCapacityHistoryItems,
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCapacityHistoryResponseBody;
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
      body: DescribeCapacityHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLimitationRequest extends $tea.Model {
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

export class DescribeLimitationResponseBody extends $tea.Model {
  maxNumberOfDBInstances?: number;
  maxNumberOfLoadBalancers?: number;
  maxNumberOfMaxSize?: number;
  maxNumberOfMinSize?: number;
  maxNumberOfScalingConfigurations?: number;
  maxNumberOfScalingGroups?: number;
  maxNumberOfScalingInstances?: number;
  maxNumberOfScalingRules?: number;
  maxNumberOfScheduledTasks?: number;
  static names(): { [key: string]: string } {
    return {
      maxNumberOfDBInstances: 'MaxNumberOfDBInstances',
      maxNumberOfLoadBalancers: 'MaxNumberOfLoadBalancers',
      maxNumberOfMaxSize: 'MaxNumberOfMaxSize',
      maxNumberOfMinSize: 'MaxNumberOfMinSize',
      maxNumberOfScalingConfigurations: 'MaxNumberOfScalingConfigurations',
      maxNumberOfScalingGroups: 'MaxNumberOfScalingGroups',
      maxNumberOfScalingInstances: 'MaxNumberOfScalingInstances',
      maxNumberOfScalingRules: 'MaxNumberOfScalingRules',
      maxNumberOfScheduledTasks: 'MaxNumberOfScheduledTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNumberOfDBInstances: 'number',
      maxNumberOfLoadBalancers: 'number',
      maxNumberOfMaxSize: 'number',
      maxNumberOfMinSize: 'number',
      maxNumberOfScalingConfigurations: 'number',
      maxNumberOfScalingGroups: 'number',
      maxNumberOfScalingInstances: 'number',
      maxNumberOfScalingRules: 'number',
      maxNumberOfScheduledTasks: 'number',
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

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
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
  scalingActivityId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      scalingActivityId: 'ScalingActivityId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingActivityId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  scalingActivities?: DescribeScalingActivitiesResponseBodyScalingActivities;
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
      scalingActivities: DescribeScalingActivitiesResponseBodyScalingActivities,
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
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
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
  scalingConfigurationId?: string[];
  scalingConfigurationName?: string[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingConfigurationId: { 'type': 'array', 'itemType': 'string' },
      scalingConfigurationName: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeScalingConfigurationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingConfigurations?: DescribeScalingConfigurationsResponseBodyScalingConfigurations;
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
      scalingConfigurations: DescribeScalingConfigurationsResponseBodyScalingConfigurations,
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
  scalingGroupId?: string[];
  scalingGroupName?: string[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingGroupId: { 'type': 'array', 'itemType': 'string' },
      scalingGroupName: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
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
  scalingGroups?: DescribeScalingGroupsResponseBodyScalingGroups;
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
      scalingGroups: DescribeScalingGroupsResponseBodyScalingGroups,
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
  instanceId?: string[];
  creationType?: string;
  healthStatus?: string;
  lifecycleState?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingConfigurationId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      creationType: 'CreationType',
      healthStatus: 'HealthStatus',
      lifecycleState: 'LifecycleState',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      creationType: 'string',
      healthStatus: 'string',
      lifecycleState: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  scalingInstances?: DescribeScalingInstancesResponseBodyScalingInstances;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingInstances: 'ScalingInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingInstances: DescribeScalingInstancesResponseBodyScalingInstances,
      totalCount: 'number',
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
  scalingRuleAri?: string[];
  scalingRuleId?: string[];
  scalingRuleName?: string[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      scalingRuleAri: 'ScalingRuleAri',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingRuleAri: { 'type': 'array', 'itemType': 'string' },
      scalingRuleId: { 'type': 'array', 'itemType': 'string' },
      scalingRuleName: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeScalingRulesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scalingRules?: DescribeScalingRulesResponseBodyScalingRules;
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
      scalingRules: DescribeScalingRulesResponseBodyScalingRules,
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
  scheduledAction?: string[];
  scheduledTaskId?: string[];
  scheduledTaskName?: string[];
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledAction: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskId: { 'type': 'array', 'itemType': 'string' },
      scheduledTaskName: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  scheduledTasks?: DescribeScheduledTasksResponseBodyScheduledTasks;
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
      scheduledTasks: DescribeScheduledTasksResponseBodyScheduledTasks,
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

export class DetachInstancesRequest extends $tea.Model {
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
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

export class DisableScalingGroupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class EnableScalingGroupRequest extends $tea.Model {
  instanceId?: string[];
  activeScalingConfigurationId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      activeScalingConfigurationId: 'string',
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

export class ExecuteScalingRuleRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingRuleAri?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleAri: 'ScalingRuleAri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

export class ModifyScalingGroupRequest extends $tea.Model {
  removalPolicy?: string[];
  activeScalingConfigurationId?: string;
  defaultCooldown?: number;
  maxSize?: number;
  minSize?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  scalingGroupId?: string;
  scalingGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      removalPolicy: 'RemovalPolicy',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      defaultCooldown: 'DefaultCooldown',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removalPolicy: { 'type': 'array', 'itemType': 'string' },
      activeScalingConfigurationId: 'string',
      defaultCooldown: 'number',
      maxSize: 'number',
      minSize: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
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
  cooldown?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingRuleId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      cooldown: 'Cooldown',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      cooldown: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
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
  launchExpirationTime?: number;
  launchTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduledAction?: string;
  scheduledTaskId?: string;
  scheduledTaskName?: string;
  taskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      launchExpirationTime: 'number',
      launchTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class RemoveInstancesRequest extends $tea.Model {
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
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

export class VerifyAuthenticationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class VerifyUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestDataDisk extends $tea.Model {
  category?: string;
  deleteWithInstance?: string;
  device?: string;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      device: 'Device',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'string',
      device: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingConfigurationRequestSystemDisk extends $tea.Model {
  category?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityHistoryResponseBodyCapacityHistoryItemsCapacityHistoryModel extends $tea.Model {
  attachedCapacity?: number;
  autoCreatedCapacity?: number;
  scalingGroupId?: string;
  timestamp?: string;
  totalCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      attachedCapacity: 'AttachedCapacity',
      autoCreatedCapacity: 'AutoCreatedCapacity',
      scalingGroupId: 'ScalingGroupId',
      timestamp: 'Timestamp',
      totalCapacity: 'TotalCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedCapacity: 'number',
      autoCreatedCapacity: 'number',
      scalingGroupId: 'string',
      timestamp: 'string',
      totalCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityHistoryResponseBodyCapacityHistoryItems extends $tea.Model {
  capacityHistoryModel?: DescribeCapacityHistoryResponseBodyCapacityHistoryItemsCapacityHistoryModel[];
  static names(): { [key: string]: string } {
    return {
      capacityHistoryModel: 'CapacityHistoryModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityHistoryModel: { 'type': 'array', 'itemType': DescribeCapacityHistoryResponseBodyCapacityHistoryItemsCapacityHistoryModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  attachedCapacity?: string;
  autoCreatedCapacity?: string;
  cause?: string;
  description?: string;
  endTime?: string;
  progress?: number;
  scalingActivityId?: string;
  scalingGroupId?: string;
  startTime?: string;
  statusCode?: string;
  statusMessage?: string;
  totalCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      attachedCapacity: 'AttachedCapacity',
      autoCreatedCapacity: 'AutoCreatedCapacity',
      cause: 'Cause',
      description: 'Description',
      endTime: 'EndTime',
      progress: 'Progress',
      scalingActivityId: 'ScalingActivityId',
      scalingGroupId: 'ScalingGroupId',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      statusMessage: 'StatusMessage',
      totalCapacity: 'TotalCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedCapacity: 'string',
      autoCreatedCapacity: 'string',
      cause: 'string',
      description: 'string',
      endTime: 'string',
      progress: 'number',
      scalingActivityId: 'string',
      scalingGroupId: 'string',
      startTime: 'string',
      statusCode: 'string',
      statusMessage: 'string',
      totalCapacity: 'string',
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisksDataDisk extends $tea.Model {
  category?: string;
  device?: string;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      device: 'Device',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      device: 'string',
      size: 'number',
      snapshotId: 'string',
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

export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfiguration extends $tea.Model {
  creationTime?: string;
  dataDisks?: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisks;
  imageId?: string;
  instanceGeneration?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  lifecycleState?: string;
  scalingConfigurationId?: string;
  scalingConfigurationName?: string;
  scalingGroupId?: string;
  securityGroupId?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataDisks: 'DataDisks',
      imageId: 'ImageId',
      instanceGeneration: 'InstanceGeneration',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      lifecycleState: 'LifecycleState',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingConfigurationName: 'ScalingConfigurationName',
      scalingGroupId: 'ScalingGroupId',
      securityGroupId: 'SecurityGroupId',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dataDisks: DescribeScalingConfigurationsResponseBodyScalingConfigurationsScalingConfigurationDataDisks,
      imageId: 'string',
      instanceGeneration: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      lifecycleState: 'string',
      scalingConfigurationId: 'string',
      scalingConfigurationName: 'string',
      scalingGroupId: 'string',
      securityGroupId: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
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

export class DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupDBInstanceIds extends $tea.Model {
  DBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupLoadBalancerIds extends $tea.Model {
  loadBalancerId?: string[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupRemovalPolicies extends $tea.Model {
  removalPolicy?: string[];
  static names(): { [key: string]: string } {
    return {
      removalPolicy: 'RemovalPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removalPolicy: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsScalingGroup extends $tea.Model {
  activeCapacity?: number;
  activeScalingConfigurationId?: string;
  creationTime?: string;
  DBInstanceIds?: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupDBInstanceIds;
  defaultCooldown?: number;
  lifecycleState?: string;
  loadBalancerIds?: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupLoadBalancerIds;
  maxSize?: number;
  minSize?: number;
  pendingCapacity?: number;
  regionId?: string;
  removalPolicies?: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupRemovalPolicies;
  removingCapacity?: number;
  scalingGroupId?: string;
  scalingGroupName?: string;
  totalCapacity?: number;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      activeCapacity: 'ActiveCapacity',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      creationTime: 'CreationTime',
      DBInstanceIds: 'DBInstanceIds',
      defaultCooldown: 'DefaultCooldown',
      lifecycleState: 'LifecycleState',
      loadBalancerIds: 'LoadBalancerIds',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      pendingCapacity: 'PendingCapacity',
      regionId: 'RegionId',
      removalPolicies: 'RemovalPolicies',
      removingCapacity: 'RemovingCapacity',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      totalCapacity: 'TotalCapacity',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCapacity: 'number',
      activeScalingConfigurationId: 'string',
      creationTime: 'string',
      DBInstanceIds: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupDBInstanceIds,
      defaultCooldown: 'number',
      lifecycleState: 'string',
      loadBalancerIds: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupLoadBalancerIds,
      maxSize: 'number',
      minSize: 'number',
      pendingCapacity: 'number',
      regionId: 'string',
      removalPolicies: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroupRemovalPolicies,
      removingCapacity: 'number',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
      totalCapacity: 'number',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroups extends $tea.Model {
  scalingGroup?: DescribeScalingGroupsResponseBodyScalingGroupsScalingGroup[];
  static names(): { [key: string]: string } {
    return {
      scalingGroup: 'ScalingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingGroup: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsScalingGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBodyScalingInstancesScalingInstance extends $tea.Model {
  creationTime?: string;
  creationType?: string;
  healthStatus?: string;
  instanceId?: string;
  lifecycleState?: string;
  scalingConfigurationId?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creationType: 'CreationType',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      lifecycleState: 'LifecycleState',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      creationType: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      lifecycleState: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
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

export class DescribeScalingRulesResponseBodyScalingRulesScalingRule extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  cooldown?: number;
  maxSize?: number;
  minSize?: number;
  scalingGroupId?: string;
  scalingRuleAri?: string;
  scalingRuleId?: string;
  scalingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      cooldown: 'Cooldown',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleAri: 'ScalingRuleAri',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      cooldown: 'number',
      maxSize: 'number',
      minSize: 'number',
      scalingGroupId: 'string',
      scalingRuleAri: 'string',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
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
  description?: string;
  launchExpirationTime?: number;
  launchTime?: string;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  scheduledAction?: string;
  scheduledTaskId?: string;
  scheduledTaskName?: string;
  taskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      scheduledAction: 'ScheduledAction',
      scheduledTaskId: 'ScheduledTaskId',
      scheduledTaskName: 'ScheduledTaskName',
      taskEnabled: 'TaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      launchExpirationTime: 'number',
      launchTime: 'string',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
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
   * @deprecated OpenAPI AttachInstances is deprecated, please use Ess::2014-08-28::AttachInstances,Ess::2022-02-22::AttachInstances instead.
   *
   * @param request AttachInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachInstancesResponse
   */
  // Deprecated
  async attachInstancesWithOptions(request: AttachInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachInstancesResponse> {
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

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachInstances",
      version: "2016-07-22",
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
   * @deprecated OpenAPI AttachInstances is deprecated, please use Ess::2014-08-28::AttachInstances,Ess::2022-02-22::AttachInstances instead.
   *
   * @param request AttachInstancesRequest
   * @return AttachInstancesResponse
   */
  // Deprecated
  async attachInstances(request: AttachInstancesRequest): Promise<AttachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachInstancesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateScalingConfiguration is deprecated, please use Ess::2022-02-22::CreateScalingConfiguration,Ess::2014-08-28::CreateScalingConfiguration instead.
   *
   * @param request CreateScalingConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateScalingConfigurationResponse
   */
  // Deprecated
  async createScalingConfigurationWithOptions(request: CreateScalingConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!Util.isUnset(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.dataDisk)) {
      query["DataDisk"] = request.dataDisk;
    }

    if (!Util.isUnset(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScalingConfiguration",
      version: "2016-07-22",
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
   * @deprecated OpenAPI CreateScalingConfiguration is deprecated, please use Ess::2022-02-22::CreateScalingConfiguration,Ess::2014-08-28::CreateScalingConfiguration instead.
   *
   * @param request CreateScalingConfigurationRequest
   * @return CreateScalingConfigurationResponse
   */
  // Deprecated
  async createScalingConfiguration(request: CreateScalingConfigurationRequest): Promise<CreateScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateScalingGroup is deprecated, please use Ess::2022-02-22::CreateScalingGroup,Ess::2014-08-28::CreateScalingGroup instead.
   *
   * @param request CreateScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateScalingGroupResponse
   */
  // Deprecated
  async createScalingGroupWithOptions(request: CreateScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!Util.isUnset(request.defaultCooldown)) {
      query["DefaultCooldown"] = request.defaultCooldown;
    }

    if (!Util.isUnset(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!Util.isUnset(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!Util.isUnset(request.minSize)) {
      query["MinSize"] = request.minSize;
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

    if (!Util.isUnset(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.removalPolicy)) {
      query["RemovalPolicy"] = request.removalPolicy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScalingGroup",
      version: "2016-07-22",
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
   * @deprecated OpenAPI CreateScalingGroup is deprecated, please use Ess::2022-02-22::CreateScalingGroup,Ess::2014-08-28::CreateScalingGroup instead.
   *
   * @param request CreateScalingGroupRequest
   * @return CreateScalingGroupResponse
   */
  // Deprecated
  async createScalingGroup(request: CreateScalingGroupRequest): Promise<CreateScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingGroupWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateScalingRule is deprecated, please use Ess::2022-02-22::CreateScalingRule,Ess::2014-08-28::CreateScalingRule instead.
   *
   * @param request CreateScalingRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateScalingRuleResponse
   */
  // Deprecated
  async createScalingRuleWithOptions(request: CreateScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!Util.isUnset(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!Util.isUnset(request.cooldown)) {
      query["Cooldown"] = request.cooldown;
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

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScalingRule",
      version: "2016-07-22",
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
   * @deprecated OpenAPI CreateScalingRule is deprecated, please use Ess::2022-02-22::CreateScalingRule,Ess::2014-08-28::CreateScalingRule instead.
   *
   * @param request CreateScalingRuleRequest
   * @return CreateScalingRuleResponse
   */
  // Deprecated
  async createScalingRule(request: CreateScalingRuleRequest): Promise<CreateScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateScheduledTask is deprecated, please use Ess::2022-02-22::CreateScheduledTask,Ess::2014-08-28::CreateScheduledTask instead.
   *
   * @param request CreateScheduledTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateScheduledTaskResponse
   */
  // Deprecated
  async createScheduledTaskWithOptions(request: CreateScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduledTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.launchExpirationTime)) {
      query["LaunchExpirationTime"] = request.launchExpirationTime;
    }

    if (!Util.isUnset(request.launchTime)) {
      query["LaunchTime"] = request.launchTime;
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

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2016-07-22",
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
   * @deprecated OpenAPI CreateScheduledTask is deprecated, please use Ess::2022-02-22::CreateScheduledTask,Ess::2014-08-28::CreateScheduledTask instead.
   *
   * @param request CreateScheduledTaskRequest
   * @return CreateScheduledTaskResponse
   */
  // Deprecated
  async createScheduledTask(request: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduledTaskWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DeleteScalingConfiguration is deprecated, please use Ess::2022-02-22::DeleteScalingConfiguration,Ess::2014-08-28::DeleteScalingConfiguration instead.
   *
   * @param request DeleteScalingConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScalingConfigurationResponse
   */
  // Deprecated
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

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScalingConfiguration",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DeleteScalingConfiguration is deprecated, please use Ess::2022-02-22::DeleteScalingConfiguration,Ess::2014-08-28::DeleteScalingConfiguration instead.
   *
   * @param request DeleteScalingConfigurationRequest
   * @return DeleteScalingConfigurationResponse
   */
  // Deprecated
  async deleteScalingConfiguration(request: DeleteScalingConfigurationRequest): Promise<DeleteScalingConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DeleteScalingGroup is deprecated, please use Ess::2022-02-22::DeleteScalingGroup,Ess::2014-08-28::DeleteScalingGroup instead.
   *
   * @param request DeleteScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScalingGroupResponse
   */
  // Deprecated
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
      version: "2016-07-22",
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
   * @deprecated OpenAPI DeleteScalingGroup is deprecated, please use Ess::2022-02-22::DeleteScalingGroup,Ess::2014-08-28::DeleteScalingGroup instead.
   *
   * @param request DeleteScalingGroupRequest
   * @return DeleteScalingGroupResponse
   */
  // Deprecated
  async deleteScalingGroup(request: DeleteScalingGroupRequest): Promise<DeleteScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingGroupWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DeleteScalingRule is deprecated, please use Ess::2022-02-22::DeleteScalingRule,Ess::2014-08-28::DeleteScalingRule instead.
   *
   * @param request DeleteScalingRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScalingRuleResponse
   */
  // Deprecated
  async deleteScalingRuleWithOptions(request: DeleteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingRuleResponse> {
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

    if (!Util.isUnset(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScalingRule",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DeleteScalingRule is deprecated, please use Ess::2022-02-22::DeleteScalingRule,Ess::2014-08-28::DeleteScalingRule instead.
   *
   * @param request DeleteScalingRuleRequest
   * @return DeleteScalingRuleResponse
   */
  // Deprecated
  async deleteScalingRule(request: DeleteScalingRuleRequest): Promise<DeleteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingRuleWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DeleteScheduledTask is deprecated, please use Ess::2022-02-22::DeleteScheduledTask,Ess::2014-08-28::DeleteScheduledTask instead.
   *
   * @param request DeleteScheduledTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteScheduledTaskResponse
   */
  // Deprecated
  async deleteScheduledTaskWithOptions(request: DeleteScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduledTaskResponse> {
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

    if (!Util.isUnset(request.scheduledTaskId)) {
      query["ScheduledTaskId"] = request.scheduledTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScheduledTask",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DeleteScheduledTask is deprecated, please use Ess::2022-02-22::DeleteScheduledTask,Ess::2014-08-28::DeleteScheduledTask instead.
   *
   * @param request DeleteScheduledTaskRequest
   * @return DeleteScheduledTaskResponse
   */
  // Deprecated
  async deleteScheduledTask(request: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduledTaskWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeAccountAttributes is deprecated, please use Ess::2022-02-22::DescribeLimitation,Ess::2014-08-28::DescribeLimitation instead.
   *
   * @param request DescribeAccountAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAccountAttributesResponse
   */
  // Deprecated
  async describeAccountAttributesWithOptions(request: DescribeAccountAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAttributesResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountAttributes",
      version: "2016-07-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountAttributesResponse>(await this.callApi(params, req, runtime), new DescribeAccountAttributesResponse({}));
  }

  /**
   * @deprecated OpenAPI DescribeAccountAttributes is deprecated, please use Ess::2022-02-22::DescribeLimitation,Ess::2014-08-28::DescribeLimitation instead.
   *
   * @param request DescribeAccountAttributesRequest
   * @return DescribeAccountAttributesResponse
   */
  // Deprecated
  async describeAccountAttributes(request: DescribeAccountAttributesRequest): Promise<DescribeAccountAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAttributesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeCapacityHistory is deprecated, please use Ess::2022-02-22::DescribeScalingActivities,Ess::2014-08-28::DescribeScalingActivities instead.
   *
   * @param request DescribeCapacityHistoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCapacityHistoryResponse
   */
  // Deprecated
  async describeCapacityHistoryWithOptions(request: DescribeCapacityHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapacityHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCapacityHistory",
      version: "2016-07-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCapacityHistoryResponse>(await this.callApi(params, req, runtime), new DescribeCapacityHistoryResponse({}));
  }

  /**
   * @deprecated OpenAPI DescribeCapacityHistory is deprecated, please use Ess::2022-02-22::DescribeScalingActivities,Ess::2014-08-28::DescribeScalingActivities instead.
   *
   * @param request DescribeCapacityHistoryRequest
   * @return DescribeCapacityHistoryResponse
   */
  // Deprecated
  async describeCapacityHistory(request: DescribeCapacityHistoryRequest): Promise<DescribeCapacityHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapacityHistoryWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeLimitation is deprecated, please use Ess::2022-02-22::DescribeLimitation,Ess::2014-08-28::DescribeLimitation instead.
   *
   * @param request DescribeLimitationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLimitationResponse
   */
  // Deprecated
  async describeLimitationWithOptions(request: DescribeLimitationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLimitationResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLimitation",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeLimitation is deprecated, please use Ess::2022-02-22::DescribeLimitation,Ess::2014-08-28::DescribeLimitation instead.
   *
   * @param request DescribeLimitationRequest
   * @return DescribeLimitationResponse
   */
  // Deprecated
  async describeLimitation(request: DescribeLimitationRequest): Promise<DescribeLimitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLimitationWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeRegions is deprecated, please use Ess::2022-02-22::DescribeRegions,Ess::2014-08-28::DescribeRegions instead.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  // Deprecated
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeRegions is deprecated, please use Ess::2022-02-22::DescribeRegions,Ess::2014-08-28::DescribeRegions instead.
   *
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  // Deprecated
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScalingActivities is deprecated, please use Ess::2022-02-22::DescribeScalingActivities,Ess::2014-08-28::DescribeScalingActivities instead.
   *
   * @param request DescribeScalingActivitiesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingActivitiesResponse
   */
  // Deprecated
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!Util.isUnset(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingActivities",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScalingActivities is deprecated, please use Ess::2022-02-22::DescribeScalingActivities,Ess::2014-08-28::DescribeScalingActivities instead.
   *
   * @param request DescribeScalingActivitiesRequest
   * @return DescribeScalingActivitiesResponse
   */
  // Deprecated
  async describeScalingActivities(request: DescribeScalingActivitiesRequest): Promise<DescribeScalingActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivitiesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScalingActivityDetail is deprecated, please use Ess::2022-02-22::DescribeScalingActivityDetail,Ess::2014-08-28::DescribeScalingActivityDetail instead.
   *
   * @param request DescribeScalingActivityDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingActivityDetailResponse
   */
  // Deprecated
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
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScalingActivityDetail is deprecated, please use Ess::2022-02-22::DescribeScalingActivityDetail,Ess::2014-08-28::DescribeScalingActivityDetail instead.
   *
   * @param request DescribeScalingActivityDetailRequest
   * @return DescribeScalingActivityDetailResponse
   */
  // Deprecated
  async describeScalingActivityDetail(request: DescribeScalingActivityDetailRequest): Promise<DescribeScalingActivityDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivityDetailWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScalingConfigurations is deprecated, please use Ess::2022-02-22::DescribeScalingConfigurations,Ess::2014-08-28::DescribeScalingConfigurations instead.
   *
   * @param request DescribeScalingConfigurationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingConfigurationsResponse
   */
  // Deprecated
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!Util.isUnset(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingConfigurations",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScalingConfigurations is deprecated, please use Ess::2022-02-22::DescribeScalingConfigurations,Ess::2014-08-28::DescribeScalingConfigurations instead.
   *
   * @param request DescribeScalingConfigurationsRequest
   * @return DescribeScalingConfigurationsResponse
   */
  // Deprecated
  async describeScalingConfigurations(request: DescribeScalingConfigurationsRequest): Promise<DescribeScalingConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingConfigurationsWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScalingGroups is deprecated, please use Ess::2022-02-22::DescribeScalingGroups,Ess::2014-08-28::DescribeScalingGroups instead.
   *
   * @param request DescribeScalingGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingGroupsResponse
   */
  // Deprecated
  async describeScalingGroupsWithOptions(request: DescribeScalingGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupsResponse> {
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingGroups",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScalingGroups is deprecated, please use Ess::2022-02-22::DescribeScalingGroups,Ess::2014-08-28::DescribeScalingGroups instead.
   *
   * @param request DescribeScalingGroupsRequest
   * @return DescribeScalingGroupsResponse
   */
  // Deprecated
  async describeScalingGroups(request: DescribeScalingGroupsRequest): Promise<DescribeScalingGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupsWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScalingInstances is deprecated, please use Ess::2022-02-22::DescribeScalingInstances,Ess::2014-08-28::DescribeScalingInstances instead.
   *
   * @param request DescribeScalingInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingInstancesResponse
   */
  // Deprecated
  async describeScalingInstancesWithOptions(request: DescribeScalingInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.creationType)) {
      query["CreationType"] = request.creationType;
    }

    if (!Util.isUnset(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!Util.isUnset(request.lifecycleState)) {
      query["LifecycleState"] = request.lifecycleState;
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

    if (!Util.isUnset(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingInstances",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScalingInstances is deprecated, please use Ess::2022-02-22::DescribeScalingInstances,Ess::2014-08-28::DescribeScalingInstances instead.
   *
   * @param request DescribeScalingInstancesRequest
   * @return DescribeScalingInstancesResponse
   */
  // Deprecated
  async describeScalingInstances(request: DescribeScalingInstancesRequest): Promise<DescribeScalingInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingInstancesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScalingRules is deprecated, please use Ess::2022-02-22::DescribeScalingRules,Ess::2014-08-28::DescribeScalingRules instead.
   *
   * @param request DescribeScalingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScalingRulesResponse
   */
  // Deprecated
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

    if (!Util.isUnset(request.scalingRuleAri)) {
      query["ScalingRuleAri"] = request.scalingRuleAri;
    }

    if (!Util.isUnset(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScalingRules",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScalingRules is deprecated, please use Ess::2022-02-22::DescribeScalingRules,Ess::2014-08-28::DescribeScalingRules instead.
   *
   * @param request DescribeScalingRulesRequest
   * @return DescribeScalingRulesResponse
   */
  // Deprecated
  async describeScalingRules(request: DescribeScalingRulesRequest): Promise<DescribeScalingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingRulesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DescribeScheduledTasks is deprecated, please use Ess::2022-02-22::DescribeScheduledTasks,Ess::2014-08-28::DescribeScheduledTasks instead.
   *
   * @param request DescribeScheduledTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScheduledTasksResponse
   */
  // Deprecated
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

    if (!Util.isUnset(request.scheduledAction)) {
      query["ScheduledAction"] = request.scheduledAction;
    }

    if (!Util.isUnset(request.scheduledTaskId)) {
      query["ScheduledTaskId"] = request.scheduledTaskId;
    }

    if (!Util.isUnset(request.scheduledTaskName)) {
      query["ScheduledTaskName"] = request.scheduledTaskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScheduledTasks",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DescribeScheduledTasks is deprecated, please use Ess::2022-02-22::DescribeScheduledTasks,Ess::2014-08-28::DescribeScheduledTasks instead.
   *
   * @param request DescribeScheduledTasksRequest
   * @return DescribeScheduledTasksResponse
   */
  // Deprecated
  async describeScheduledTasks(request: DescribeScheduledTasksRequest): Promise<DescribeScheduledTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduledTasksWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DetachInstances is deprecated, please use Ess::2022-02-22::DetachInstances,Ess::2014-08-28::DetachInstances instead.
   *
   * @param request DetachInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachInstancesResponse
   */
  // Deprecated
  async detachInstancesWithOptions(request: DetachInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DetachInstancesResponse> {
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

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachInstances",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DetachInstances is deprecated, please use Ess::2022-02-22::DetachInstances,Ess::2014-08-28::DetachInstances instead.
   *
   * @param request DetachInstancesRequest
   * @return DetachInstancesResponse
   */
  // Deprecated
  async detachInstances(request: DetachInstancesRequest): Promise<DetachInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachInstancesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DisableScalingGroup is deprecated, please use Ess::2022-02-22::DisableScalingGroup,Ess::2014-08-28::DisableScalingGroup instead.
   *
   * @param request DisableScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableScalingGroupResponse
   */
  // Deprecated
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

    if (!Util.isUnset(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableScalingGroup",
      version: "2016-07-22",
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
   * @deprecated OpenAPI DisableScalingGroup is deprecated, please use Ess::2022-02-22::DisableScalingGroup,Ess::2014-08-28::DisableScalingGroup instead.
   *
   * @param request DisableScalingGroupRequest
   * @return DisableScalingGroupResponse
   */
  // Deprecated
  async disableScalingGroup(request: DisableScalingGroupRequest): Promise<DisableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableScalingGroupWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI EnableScalingGroup is deprecated, please use Ess::2014-08-28::EnableScalingGroup,Ess::2022-02-22::EnableScalingGroup instead.
   *
   * @param request EnableScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableScalingGroupResponse
   */
  // Deprecated
  async enableScalingGroupWithOptions(request: EnableScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<EnableScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeScalingConfigurationId)) {
      query["ActiveScalingConfigurationId"] = request.activeScalingConfigurationId;
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

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableScalingGroup",
      version: "2016-07-22",
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
   * @deprecated OpenAPI EnableScalingGroup is deprecated, please use Ess::2014-08-28::EnableScalingGroup,Ess::2022-02-22::EnableScalingGroup instead.
   *
   * @param request EnableScalingGroupRequest
   * @return EnableScalingGroupResponse
   */
  // Deprecated
  async enableScalingGroup(request: EnableScalingGroupRequest): Promise<EnableScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableScalingGroupWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ExecuteScalingRule is deprecated, please use Ess::2014-08-28::ExecuteScalingRule,Ess::2022-02-22::ExecuteScalingRule instead.
   *
   * @param request ExecuteScalingRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExecuteScalingRuleResponse
   */
  // Deprecated
  async executeScalingRuleWithOptions(request: ExecuteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteScalingRuleResponse> {
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
      version: "2016-07-22",
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
   * @deprecated OpenAPI ExecuteScalingRule is deprecated, please use Ess::2014-08-28::ExecuteScalingRule,Ess::2022-02-22::ExecuteScalingRule instead.
   *
   * @param request ExecuteScalingRuleRequest
   * @return ExecuteScalingRuleResponse
   */
  // Deprecated
  async executeScalingRule(request: ExecuteScalingRuleRequest): Promise<ExecuteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeScalingRuleWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ModifyScalingGroup is deprecated, please use Ess::2014-08-28::ModifyScalingGroup,Ess::2022-02-22::ModifyScalingGroup instead.
   *
   * @param request ModifyScalingGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyScalingGroupResponse
   */
  // Deprecated
  async modifyScalingGroupWithOptions(request: ModifyScalingGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeScalingConfigurationId)) {
      query["ActiveScalingConfigurationId"] = request.activeScalingConfigurationId;
    }

    if (!Util.isUnset(request.defaultCooldown)) {
      query["DefaultCooldown"] = request.defaultCooldown;
    }

    if (!Util.isUnset(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!Util.isUnset(request.minSize)) {
      query["MinSize"] = request.minSize;
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

    if (!Util.isUnset(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!Util.isUnset(request.removalPolicy)) {
      query["RemovalPolicy"] = request.removalPolicy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScalingGroup",
      version: "2016-07-22",
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
   * @deprecated OpenAPI ModifyScalingGroup is deprecated, please use Ess::2014-08-28::ModifyScalingGroup,Ess::2022-02-22::ModifyScalingGroup instead.
   *
   * @param request ModifyScalingGroupRequest
   * @return ModifyScalingGroupResponse
   */
  // Deprecated
  async modifyScalingGroup(request: ModifyScalingGroupRequest): Promise<ModifyScalingGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ModifyScalingRule is deprecated, please use Ess::2014-08-28::ModifyScalingRule,Ess::2022-02-22::ModifyScalingRule instead.
   *
   * @param request ModifyScalingRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyScalingRuleResponse
   */
  // Deprecated
  async modifyScalingRuleWithOptions(request: ModifyScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!Util.isUnset(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!Util.isUnset(request.cooldown)) {
      query["Cooldown"] = request.cooldown;
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

    if (!Util.isUnset(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScalingRule",
      version: "2016-07-22",
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
   * @deprecated OpenAPI ModifyScalingRule is deprecated, please use Ess::2014-08-28::ModifyScalingRule,Ess::2022-02-22::ModifyScalingRule instead.
   *
   * @param request ModifyScalingRuleRequest
   * @return ModifyScalingRuleResponse
   */
  // Deprecated
  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ModifyScheduledTask is deprecated, please use Ess::2014-08-28::ModifyScheduledTask,Ess::2022-02-22::ModifyScheduledTask instead.
   *
   * @param request ModifyScheduledTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyScheduledTaskResponse
   */
  // Deprecated
  async modifyScheduledTaskWithOptions(request: ModifyScheduledTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScheduledTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.launchExpirationTime)) {
      query["LaunchExpirationTime"] = request.launchExpirationTime;
    }

    if (!Util.isUnset(request.launchTime)) {
      query["LaunchTime"] = request.launchTime;
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
      version: "2016-07-22",
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
   * @deprecated OpenAPI ModifyScheduledTask is deprecated, please use Ess::2014-08-28::ModifyScheduledTask,Ess::2022-02-22::ModifyScheduledTask instead.
   *
   * @param request ModifyScheduledTaskRequest
   * @return ModifyScheduledTaskResponse
   */
  // Deprecated
  async modifyScheduledTask(request: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScheduledTaskWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI RemoveInstances is deprecated, please use Ess::2014-08-28::RemoveInstances,Ess::2022-02-22::RemoveInstances instead.
   *
   * @param request RemoveInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveInstancesResponse
   */
  // Deprecated
  async removeInstancesWithOptions(request: RemoveInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveInstancesResponse> {
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

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveInstances",
      version: "2016-07-22",
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
   * @deprecated OpenAPI RemoveInstances is deprecated, please use Ess::2014-08-28::RemoveInstances,Ess::2022-02-22::RemoveInstances instead.
   *
   * @param request RemoveInstancesRequest
   * @return RemoveInstancesResponse
   */
  // Deprecated
  async removeInstances(request: RemoveInstancesRequest): Promise<RemoveInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeInstancesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI VerifyAuthentication is deprecated, please use Ess::2014-08-28::VerifyAuthentication instead.
   *
   * @param request VerifyAuthenticationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyAuthenticationResponse
   */
  // Deprecated
  async verifyAuthenticationWithOptions(request: VerifyAuthenticationRequest, runtime: $Util.RuntimeOptions): Promise<VerifyAuthenticationResponse> {
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

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyAuthentication",
      version: "2016-07-22",
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
   * @deprecated OpenAPI VerifyAuthentication is deprecated, please use Ess::2014-08-28::VerifyAuthentication instead.
   *
   * @param request VerifyAuthenticationRequest
   * @return VerifyAuthenticationResponse
   */
  // Deprecated
  async verifyAuthentication(request: VerifyAuthenticationRequest): Promise<VerifyAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyAuthenticationWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI VerifyUser is deprecated, please use Ess::2014-08-28::VerifyUser instead.
   *
   * @param request VerifyUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyUserResponse
   */
  // Deprecated
  async verifyUserWithOptions(request: VerifyUserRequest, runtime: $Util.RuntimeOptions): Promise<VerifyUserResponse> {
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
      action: "VerifyUser",
      version: "2016-07-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<VerifyUserResponse>(await this.callApi(params, req, runtime), new VerifyUserResponse({}));
  }

  /**
   * @deprecated OpenAPI VerifyUser is deprecated, please use Ess::2014-08-28::VerifyUser instead.
   *
   * @param request VerifyUserRequest
   * @return VerifyUserResponse
   */
  // Deprecated
  async verifyUser(request: VerifyUserRequest): Promise<VerifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyUserWithOptions(request, runtime);
  }

}
