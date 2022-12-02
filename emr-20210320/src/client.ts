// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AckNode extends $tea.Model {
  nodeId?: string;
  nodeSelector?: AckNodeSelector;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      nodeSelector: AckNodeSelector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AckNodePool extends $tea.Model {
  nodePoolId?: string;
  nodeSelector?: AckNodeSelector;
  static names(): { [key: string]: string } {
    return {
      nodePoolId: 'NodePoolId',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePoolId: 'string',
      nodeSelector: AckNodeSelector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AckNodeSelector extends $tea.Model {
  labels?: AckNodeSelectorLabels[];
  taints?: AckNodeSelectorTaints[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      taints: 'Taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AckNodeSelectorLabels },
      taints: { 'type': 'array', 'itemType': AckNodeSelectorTaints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Application extends $tea.Model {
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplicationConfig extends $tea.Model {
  applicationName?: string;
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  configScope?: string;
  nodeGroupId?: string;
  nodeGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      configScope: 'ConfigScope',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      configScope: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplicationConfigParam extends $tea.Model {
  configAction?: string;
  configFileName?: string;
  configItemDescription?: string;
  configItemKey?: string;
  configItemValue?: string;
  configScope?: string;
  effectiveActions?: string;
  effectiveType?: string;
  nodeGroupId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      configAction: 'ConfigAction',
      configFileName: 'ConfigFileName',
      configItemDescription: 'ConfigItemDescription',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      configScope: 'ConfigScope',
      effectiveActions: 'EffectiveActions',
      effectiveType: 'EffectiveType',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAction: 'string',
      configFileName: 'string',
      configItemDescription: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      configScope: 'string',
      effectiveActions: 'string',
      effectiveType: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoRenewInstance extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoRenewInstanceParam extends $tea.Model {
  autoRenew?: string;
  autoRenewDuration?: string;
  autoRenewDurationUnit?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewDuration: 'string',
      autoRenewDurationUnit: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ByLoadScalingRule extends $tea.Model {
  comparisonOperator?: string;
  coolDownInterval?: number;
  evaluationCount?: number;
  metricName?: string;
  statistics?: string;
  threshold?: number;
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      coolDownInterval: 'CoolDownInterval',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      statistics: 'Statistics',
      threshold: 'Threshold',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      coolDownInterval: 'number',
      evaluationCount: 'number',
      metricName: 'string',
      statistics: 'string',
      threshold: 'number',
      timeWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ByLoadScalingRuleSpec extends $tea.Model {
  comparisonOperator?: string;
  evaluationCount?: number;
  metricName?: string;
  statistics?: string;
  threshold?: number;
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      statistics: 'Statistics',
      threshold: 'Threshold',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      metricName: 'string',
      statistics: 'string',
      threshold: 'number',
      timeWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ByTimeScalingRule extends $tea.Model {
  endTime?: number;
  launchExpirationTime?: number;
  launchTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchExpirationTime: 'number',
      launchTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ByTimeScalingRuleSpec extends $tea.Model {
  endTime?: number;
  launchTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClickhouseConf extends $tea.Model {
  initialReplica?: number;
  initialShard?: number;
  newNodeCount?: number;
  resizeType?: string;
  static names(): { [key: string]: string } {
    return {
      initialReplica: 'InitialReplica',
      initialShard: 'InitialShard',
      newNodeCount: 'NewNodeCount',
      resizeType: 'ResizeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialReplica: 'number',
      initialShard: 'number',
      newNodeCount: 'number',
      resizeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Cluster extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  clusterState?: string;
  clusterType?: string;
  createTime?: number;
  deployMode?: string;
  emrDefaultRole?: string;
  endTime?: number;
  expireTime?: number;
  nodeAttributes?: NodeAttributes;
  paymentType?: string;
  readyTime?: number;
  regionId?: string;
  releaseVersion?: string;
  resourceGroupId?: string;
  securityMode?: string;
  stateChangeReason?: ClusterStateChangeReason;
  subscriptionConfig?: SubscriptionConfig;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterState: 'ClusterState',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      emrDefaultRole: 'EmrDefaultRole',
      endTime: 'EndTime',
      expireTime: 'ExpireTime',
      nodeAttributes: 'NodeAttributes',
      paymentType: 'PaymentType',
      readyTime: 'ReadyTime',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      securityMode: 'SecurityMode',
      stateChangeReason: 'StateChangeReason',
      subscriptionConfig: 'SubscriptionConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
      clusterType: 'string',
      createTime: 'number',
      deployMode: 'string',
      emrDefaultRole: 'string',
      endTime: 'number',
      expireTime: 'number',
      nodeAttributes: NodeAttributes,
      paymentType: 'string',
      readyTime: 'number',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      securityMode: 'string',
      stateChangeReason: ClusterStateChangeReason,
      subscriptionConfig: SubscriptionConfig,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterScript extends $tea.Model {
  executionFailStrategy?: string;
  executionMoment?: string;
  nodeSelect?: NodeSelector;
  priority?: number;
  scriptArgs?: string;
  scriptName?: string;
  scriptPath?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      executionMoment: 'ExecutionMoment',
      nodeSelect: 'NodeSelect',
      priority: 'Priority',
      scriptArgs: 'ScriptArgs',
      scriptName: 'ScriptName',
      scriptPath: 'ScriptPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      executionMoment: 'string',
      nodeSelect: NodeSelector,
      priority: 'number',
      scriptArgs: 'string',
      scriptName: 'string',
      scriptPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterStateChangeReason extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterSummary extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  clusterState?: string;
  clusterType?: string;
  createTime?: number;
  emrDefaultRole?: string;
  endTime?: number;
  expireTime?: number;
  paymentType?: string;
  readyTime?: number;
  releaseVersion?: string;
  resourceGroupId?: string;
  stateChangeReason?: ClusterStateChangeReason;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterState: 'ClusterState',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      emrDefaultRole: 'EmrDefaultRole',
      endTime: 'EndTime',
      expireTime: 'ExpireTime',
      paymentType: 'PaymentType',
      readyTime: 'ReadyTime',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      stateChangeReason: 'StateChangeReason',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
      clusterType: 'string',
      createTime: 'number',
      emrDefaultRole: 'string',
      endTime: 'number',
      expireTime: 'number',
      paymentType: 'string',
      readyTime: 'number',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      stateChangeReason: ClusterStateChangeReason,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComponentInstanceSelector extends $tea.Model {
  actionScope?: string;
  applicationNames?: string[];
  componentInstances?: ComponentInstanceSelectorComponentInstances[];
  components?: ComponentInstanceSelectorComponents[];
  nodeGroupIds?: string[];
  nodeIds?: string[];
  runActionScope?: string;
  static names(): { [key: string]: string } {
    return {
      actionScope: 'ActionScope',
      applicationNames: 'ApplicationNames',
      componentInstances: 'ComponentInstances',
      components: 'Components',
      nodeGroupIds: 'NodeGroupIds',
      nodeIds: 'NodeIds',
      runActionScope: 'RunActionScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionScope: 'string',
      applicationNames: { 'type': 'array', 'itemType': 'string' },
      componentInstances: { 'type': 'array', 'itemType': ComponentInstanceSelectorComponentInstances },
      components: { 'type': 'array', 'itemType': ComponentInstanceSelectorComponents },
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      runActionScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComponentLayout extends $tea.Model {
  applicationName?: string;
  componentName?: string;
  nodeSelector?: ComponentLayoutNodeSelector;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
      nodeSelector: ComponentLayoutNodeSelector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertNodeGroup extends $tea.Model {
  nodeGroupId?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertNodeGroupParam extends $tea.Model {
  nodeGroupId?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CostOptimizedConfig extends $tea.Model {
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstancePools?: number;
  static names(): { [key: string]: string } {
    return {
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstancePools: 'SpotInstancePools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupParam extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  dataDisks?: DiskInfo[];
  instanceTypes?: string[];
  nodeCount?: number;
  nodeGroupName?: string;
  nodeGroupType?: string;
  nodeKeyPairName?: string;
  nodeRamRole?: string;
  nodeRootPassword?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  paymentType?: string;
  securityGroupId?: string;
  spotStrategy?: string;
  systemDisk?: SystemDiskParam;
  vSwitchIds?: string[];
  withPublicIp?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      dataDisks: 'DataDisks',
      instanceTypes: 'InstanceTypes',
      nodeCount: 'NodeCount',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      nodeKeyPairName: 'NodeKeyPairName',
      nodeRamRole: 'NodeRamRole',
      nodeRootPassword: 'NodeRootPassword',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      withPublicIp: 'WithPublicIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      dataDisks: { 'type': 'array', 'itemType': DiskInfo },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeCount: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      nodeKeyPairName: 'string',
      nodeRamRole: 'string',
      nodeRootPassword: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      systemDisk: SystemDiskParam,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      withPublicIp: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataDisk extends $tea.Model {
  category?: string;
  count?: number;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecreaseNodeGroupParam extends $tea.Model {
  nodeGroupId?: string;
  releaseInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      releaseInstanceIds: 'ReleaseInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      releaseInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentLayout extends $tea.Model {
  applicationName?: string;
  componentName?: string;
  nodeSelector?: NodeSelector;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
      nodeSelector: NodeSelector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Disk extends $tea.Model {
  category?: string;
  count?: number;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiskInfo extends $tea.Model {
  category?: string;
  count?: number;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiskSize extends $tea.Model {
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

export class FailedReason extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  errorMsg?: string;
  requestId?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorMsg: 'string',
      requestId: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HealthSummary extends $tea.Model {
  badCount?: number;
  goodCount?: number;
  noneCount?: number;
  stoppedCount?: number;
  totalCount?: number;
  unknownCount?: number;
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      badCount: 'BadCount',
      goodCount: 'GoodCount',
      noneCount: 'NoneCount',
      stoppedCount: 'StoppedCount',
      totalCount: 'TotalCount',
      unknownCount: 'UnknownCount',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      badCount: 'number',
      goodCount: 'number',
      noneCount: 'number',
      stoppedCount: 'number',
      totalCount: 'number',
      unknownCount: 'number',
      warningCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseNodeGroup extends $tea.Model {
  description?: string;
  nodeCount?: number;
  nodeGroupId?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      nodeCount: 'NodeCount',
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      nodeCount: 'number',
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseNodeGroupParam extends $tea.Model {
  nodeCount?: number;
  nodeGroupId?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: 'number',
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KeyValue extends $tea.Model {
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

export class MetaStoreConf extends $tea.Model {
  dbPassword?: string;
  dbUrl?: string;
  dbUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dbPassword: 'DbPassword',
      dbUrl: 'DbUrl',
      dbUserName: 'DbUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbPassword: 'string',
      dbUrl: 'string',
      dbUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricsTrigger extends $tea.Model {
  comparisonOperator?: string;
  coolDownInterval?: number;
  evaluationCount?: number;
  metricName?: string;
  statistics?: string;
  tags?: Tag[];
  threshold?: number;
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      coolDownInterval: 'CoolDownInterval',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      statistics: 'Statistics',
      tags: 'Tags',
      threshold: 'Threshold',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      coolDownInterval: 'number',
      evaluationCount: 'number',
      metricName: 'string',
      statistics: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      threshold: 'number',
      timeWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Node extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  expireTime?: number;
  instanceType?: string;
  maintenanceStatus?: string;
  nodeGroupId?: string;
  nodeGroupType?: string;
  nodeId?: string;
  nodeName?: string;
  nodeState?: string;
  privateIp?: string;
  publicIp?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      expireTime: 'ExpireTime',
      instanceType: 'InstanceType',
      maintenanceStatus: 'MaintenanceStatus',
      nodeGroupId: 'NodeGroupId',
      nodeGroupType: 'NodeGroupType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeState: 'NodeState',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      expireTime: 'number',
      instanceType: 'string',
      maintenanceStatus: 'string',
      nodeGroupId: 'string',
      nodeGroupType: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeState: 'string',
      privateIp: 'string',
      publicIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeAttributes extends $tea.Model {
  keyPairName?: string;
  ramRole?: string;
  securityGroupId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      ramRole: 'RamRole',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      ramRole: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeCountConstraint extends $tea.Model {
  max?: number;
  min?: number;
  type?: string;
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeGroup extends $tea.Model {
  additionalSecurityGroupIds?: string[];
  costOptimizedConfig?: CostOptimizedConfig;
  dataDisks?: DataDisk[];
  deploymentSetStrategy?: string;
  gracefulShutdown?: boolean;
  instanceTypes?: string[];
  nodeGroupId?: string;
  nodeGroupName?: string;
  nodeGroupState?: string;
  nodeGroupType?: string;
  nodeResizeStrategy?: string;
  paymentType?: string;
  runningNodeCount?: number;
  spotBidPrices?: SpotBidPrice[];
  spotInstanceRemedy?: boolean;
  spotStrategy?: string;
  stateChangeReason?: NodeGroupStateChangeReason;
  systemDisk?: SystemDisk;
  vSwitchIds?: string[];
  withPublicIp?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalSecurityGroupIds: 'AdditionalSecurityGroupIds',
      costOptimizedConfig: 'CostOptimizedConfig',
      dataDisks: 'DataDisks',
      deploymentSetStrategy: 'DeploymentSetStrategy',
      gracefulShutdown: 'GracefulShutdown',
      instanceTypes: 'InstanceTypes',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeGroupState: 'NodeGroupState',
      nodeGroupType: 'NodeGroupType',
      nodeResizeStrategy: 'NodeResizeStrategy',
      paymentType: 'PaymentType',
      runningNodeCount: 'RunningNodeCount',
      spotBidPrices: 'SpotBidPrices',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      spotStrategy: 'SpotStrategy',
      stateChangeReason: 'StateChangeReason',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      withPublicIp: 'WithPublicIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalSecurityGroupIds: { 'type': 'array', 'itemType': 'string' },
      costOptimizedConfig: CostOptimizedConfig,
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentSetStrategy: 'string',
      gracefulShutdown: 'boolean',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeGroupState: 'string',
      nodeGroupType: 'string',
      nodeResizeStrategy: 'string',
      paymentType: 'string',
      runningNodeCount: 'number',
      spotBidPrices: { 'type': 'array', 'itemType': SpotBidPrice },
      spotInstanceRemedy: 'boolean',
      spotStrategy: 'string',
      stateChangeReason: NodeGroupStateChangeReason,
      systemDisk: SystemDisk,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      withPublicIp: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeGroupConfig extends $tea.Model {
  additionalSecurityGroupIds?: string[];
  costOptimizedConfig?: CostOptimizedConfig;
  dataDisks?: DataDisk[];
  deploymentSetStrategy?: string;
  gracefulShutdown?: boolean;
  instanceTypes?: string[];
  nodeCount?: number;
  nodeGroupName?: string;
  nodeGroupType?: string;
  nodeResizeStrategy?: string;
  paymentType?: string;
  spotBidPrices?: SpotBidPrice[];
  spotInstanceRemedy?: boolean;
  spotStrategy?: string;
  subscriptionConfig?: SubscriptionConfig;
  systemDisk?: SystemDisk;
  vSwitchIds?: string[];
  withPublicIp?: boolean;
  static names(): { [key: string]: string } {
    return {
      additionalSecurityGroupIds: 'AdditionalSecurityGroupIds',
      costOptimizedConfig: 'CostOptimizedConfig',
      dataDisks: 'DataDisks',
      deploymentSetStrategy: 'DeploymentSetStrategy',
      gracefulShutdown: 'GracefulShutdown',
      instanceTypes: 'InstanceTypes',
      nodeCount: 'NodeCount',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      nodeResizeStrategy: 'NodeResizeStrategy',
      paymentType: 'PaymentType',
      spotBidPrices: 'SpotBidPrices',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      spotStrategy: 'SpotStrategy',
      subscriptionConfig: 'SubscriptionConfig',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      withPublicIp: 'WithPublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalSecurityGroupIds: { 'type': 'array', 'itemType': 'string' },
      costOptimizedConfig: CostOptimizedConfig,
      dataDisks: { 'type': 'array', 'itemType': DataDisk },
      deploymentSetStrategy: 'string',
      gracefulShutdown: 'boolean',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeCount: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      nodeResizeStrategy: 'string',
      paymentType: 'string',
      spotBidPrices: { 'type': 'array', 'itemType': SpotBidPrice },
      spotInstanceRemedy: 'boolean',
      spotStrategy: 'string',
      subscriptionConfig: SubscriptionConfig,
      systemDisk: SystemDisk,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      withPublicIp: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeGroupParam extends $tea.Model {
  autoPayOrder?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  dataDisks?: DiskInfo[];
  description?: string;
  instanceTypes?: string[];
  nodeCount?: number;
  nodeGroupIndex?: number;
  nodeGroupName?: string;
  nodeGroupType?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  paymentType?: string;
  systemDisk?: SystemDiskParam;
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPayOrder: 'AutoPayOrder',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      dataDisks: 'DataDisks',
      description: 'Description',
      instanceTypes: 'InstanceTypes',
      nodeCount: 'NodeCount',
      nodeGroupIndex: 'NodeGroupIndex',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPayOrder: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      dataDisks: { 'type': 'array', 'itemType': DiskInfo },
      description: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeCount: 'number',
      nodeGroupIndex: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      systemDisk: SystemDiskParam,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeGroupStateChangeReason extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSelector extends $tea.Model {
  nodeGroupId?: string;
  nodeGroupName?: string;
  nodeGroupTypes?: string[];
  nodeNames?: string[];
  nodeSelectType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeGroupTypes: 'NodeGroupTypes',
      nodeNames: 'NodeNames',
      nodeSelectType: 'NodeSelectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeSelectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSUser extends $tea.Model {
  group?: string;
  password?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      password: 'Password',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      password: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnKubeClusterResource extends $tea.Model {
  cpu?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Operation extends $tea.Model {
  clusterId?: string;
  createTime?: number;
  description?: string;
  endTime?: number;
  operationId?: string;
  operationState?: string;
  operationType?: string;
  startTime?: number;
  stateChangeReason?: OperationStateChangeReason;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      operationId: 'OperationId',
      operationState: 'OperationState',
      operationType: 'OperationType',
      startTime: 'StartTime',
      stateChangeReason: 'StateChangeReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'number',
      description: 'string',
      endTime: 'number',
      operationId: 'string',
      operationState: 'string',
      operationType: 'string',
      startTime: 'number',
      stateChangeReason: OperationStateChangeReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationStateChangeReason extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Order extends $tea.Model {
  createTime?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Page extends $tea.Model {
  items?: string[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Pod extends $tea.Model {
  message?: string;
  podName?: string;
  podStatus?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      podName: 'PodName',
      podStatus: 'PodStatus',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      podName: 'string',
      podStatus: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: string;
  originalPrice?: string;
  payType?: string;
  promotionResults?: PromotionInfo[];
  resourceType?: string;
  spotInstanceTypeOriginalPrice?: string;
  spotInstanceTypePrice?: string;
  spotOriginalPrice?: string;
  spotPrice?: string;
  taxPrice?: string;
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      payType: 'PayType',
      promotionResults: 'PromotionResults',
      resourceType: 'ResourceType',
      spotInstanceTypeOriginalPrice: 'SpotInstanceTypeOriginalPrice',
      spotInstanceTypePrice: 'SpotInstanceTypePrice',
      spotOriginalPrice: 'SpotOriginalPrice',
      spotPrice: 'SpotPrice',
      taxPrice: 'TaxPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'string',
      originalPrice: 'string',
      payType: 'string',
      promotionResults: { 'type': 'array', 'itemType': PromotionInfo },
      resourceType: 'string',
      spotInstanceTypeOriginalPrice: 'string',
      spotInstanceTypePrice: 'string',
      spotOriginalPrice: 'string',
      spotPrice: 'string',
      taxPrice: 'string',
      tradePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Promotion extends $tea.Model {
  productCode?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromotionInfo extends $tea.Model {
  canPromFee?: string;
  isSelected?: string;
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      isSelected: 'IsSelected',
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'string',
      isSelected: 'string',
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromotionParam extends $tea.Model {
  productCode?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstance extends $tea.Model {
  instanceId?: string;
  renewDuration?: number;
  renewDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      renewDuration: 'RenewDuration',
      renewDurationUnit: 'RenewDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      renewDuration: 'number',
      renewDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceParam extends $tea.Model {
  instanceId?: string;
  renewDuration?: number;
  renewDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      renewDuration: 'RenewDuration',
      renewDurationUnit: 'RenewDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      renewDuration: 'number',
      renewDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestTag extends $tea.Model {
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

export class ResizeDiskNodeGroupParam extends $tea.Model {
  dataDiskCapacity?: number;
  nodeGroupId?: string;
  rollingRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataDiskCapacity: 'DataDiskCapacity',
      nodeGroupId: 'NodeGroupId',
      rollingRestart: 'RollingRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCapacity: 'number',
      nodeGroupId: 'string',
      rollingRestart: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingActivity extends $tea.Model {
  cause?: string;
  description?: string;
  endTime?: number;
  essScalingRuleId?: string;
  expectNum?: number;
  hostGroupName?: string;
  id?: string;
  instanceIds?: string;
  scalingGroupId?: string;
  scalingRuleName?: string;
  startTime?: number;
  status?: string;
  totalCapacity?: number;
  transition?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      description: 'Description',
      endTime: 'EndTime',
      essScalingRuleId: 'EssScalingRuleId',
      expectNum: 'ExpectNum',
      hostGroupName: 'HostGroupName',
      id: 'Id',
      instanceIds: 'InstanceIds',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleName: 'ScalingRuleName',
      startTime: 'StartTime',
      status: 'Status',
      totalCapacity: 'TotalCapacity',
      transition: 'Transition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      description: 'string',
      endTime: 'number',
      essScalingRuleId: 'string',
      expectNum: 'number',
      hostGroupName: 'string',
      id: 'string',
      instanceIds: 'string',
      scalingGroupId: 'string',
      scalingRuleName: 'string',
      startTime: 'number',
      status: 'string',
      totalCapacity: 'number',
      transition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingConstraints extends $tea.Model {
  maxCapacity?: number;
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfig extends $tea.Model {
  dataDiskCategory?: string;
  dataDiskCount?: number;
  dataDiskSize?: number;
  defaultCoolDownTime?: number;
  instanceTypeList?: ScalingGroupConfigInstanceTypeList[];
  multiAvailablePolicy?: ScalingGroupConfigMultiAvailablePolicy;
  nodeOfflinePolicy?: ScalingGroupConfigNodeOfflinePolicy;
  privatePoolOptions?: ScalingGroupConfigPrivatePoolOptions;
  scalingMaxSize?: number;
  scalingMinSize?: number;
  spotStrategy?: string;
  sysDiskCategory?: string;
  sysDiskSize?: number;
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskCount: 'DataDiskCount',
      dataDiskSize: 'DataDiskSize',
      defaultCoolDownTime: 'DefaultCoolDownTime',
      instanceTypeList: 'InstanceTypeList',
      multiAvailablePolicy: 'MultiAvailablePolicy',
      nodeOfflinePolicy: 'NodeOfflinePolicy',
      privatePoolOptions: 'PrivatePoolOptions',
      scalingMaxSize: 'ScalingMaxSize',
      scalingMinSize: 'ScalingMinSize',
      spotStrategy: 'SpotStrategy',
      sysDiskCategory: 'SysDiskCategory',
      sysDiskSize: 'SysDiskSize',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskCount: 'number',
      dataDiskSize: 'number',
      defaultCoolDownTime: 'number',
      instanceTypeList: { 'type': 'array', 'itemType': ScalingGroupConfigInstanceTypeList },
      multiAvailablePolicy: ScalingGroupConfigMultiAvailablePolicy,
      nodeOfflinePolicy: ScalingGroupConfigNodeOfflinePolicy,
      privatePoolOptions: ScalingGroupConfigPrivatePoolOptions,
      scalingMaxSize: 'number',
      scalingMinSize: 'number',
      spotStrategy: 'string',
      sysDiskCategory: 'string',
      sysDiskSize: 'number',
      triggerMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRule extends $tea.Model {
  activityType?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  metricsTrigger?: MetricsTrigger;
  ruleName?: string;
  timeTrigger?: TimeTrigger;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      metricsTrigger: 'MetricsTrigger',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      metricsTrigger: MetricsTrigger,
      ruleName: 'string',
      timeTrigger: TimeTrigger,
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleSpec extends $tea.Model {
  adjustmentValue?: number;
  byLoadScalingRuleSpec?: ScalingRuleSpecByLoadScalingRuleSpec;
  byTimeScalingRuleSpec?: ScalingRuleSpecByTimeScalingRuleSpec;
  coolDownInterval?: number;
  scalingActivityType?: string;
  scalingRuleName?: string;
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentValue: 'AdjustmentValue',
      byLoadScalingRuleSpec: 'ByLoadScalingRuleSpec',
      byTimeScalingRuleSpec: 'ByTimeScalingRuleSpec',
      coolDownInterval: 'CoolDownInterval',
      scalingActivityType: 'ScalingActivityType',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentValue: 'number',
      byLoadScalingRuleSpec: ScalingRuleSpecByLoadScalingRuleSpec,
      byTimeScalingRuleSpec: ScalingRuleSpecByTimeScalingRuleSpec,
      coolDownInterval: 'number',
      scalingActivityType: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleV1 extends $tea.Model {
  adjustmentType?: string;
  adjustmentValue?: number;
  coolDownTime?: number;
  ruleName?: string;
  ruleParam?: ScalingRuleV1RuleParam;
  ruleType?: string;
  scalingConfigBizId?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      coolDownTime: 'CoolDownTime',
      ruleName: 'RuleName',
      ruleParam: 'RuleParam',
      ruleType: 'RuleType',
      scalingConfigBizId: 'ScalingConfigBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      coolDownTime: 'number',
      ruleName: 'string',
      ruleParam: ScalingRuleV1RuleParam,
      ruleType: 'string',
      scalingConfigBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Script extends $tea.Model {
  executionFailStrategy?: string;
  executionMoment?: string;
  nodeSelector?: NodeSelector;
  priority?: number;
  scriptArgs?: string;
  scriptName?: string;
  scriptPath?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      executionMoment: 'ExecutionMoment',
      nodeSelector: 'NodeSelector',
      priority: 'Priority',
      scriptArgs: 'ScriptArgs',
      scriptName: 'ScriptName',
      scriptPath: 'ScriptPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      executionMoment: 'string',
      nodeSelector: NodeSelector,
      priority: 'number',
      scriptArgs: 'string',
      scriptName: 'string',
      scriptPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpotBidPrice extends $tea.Model {
  bidPrice?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      bidPrice: 'BidPrice',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidPrice: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpotPriceLimit extends $tea.Model {
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

export class StateChangeReason extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionConfig extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SystemDisk extends $tea.Model {
  category?: string;
  count?: number;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SystemDiskParam extends $tea.Model {
  category?: string;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tag extends $tea.Model {
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

export class TagResource extends $tea.Model {
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

export class TimeTrigger extends $tea.Model {
  endTime?: number;
  launchExpirationTime?: number;
  launchTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchExpirationTime: 'number',
      launchTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationConfig extends $tea.Model {
  configAction?: string;
  configDescription?: string;
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  configScope?: string;
  effectiveActions?: string;
  effectiveType?: string;
  nodeGroupId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      configAction: 'ConfigAction',
      configDescription: 'ConfigDescription',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      configScope: 'ConfigScope',
      effectiveActions: 'EffectiveActions',
      effectiveType: 'EffectiveType',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAction: 'string',
      configDescription: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      configScope: 'string',
      effectiveActions: 'string',
      effectiveType: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpecNodeGroup extends $tea.Model {
  newInstanceType?: string;
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newInstanceType: 'NewInstanceType',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newInstanceType: 'string',
      nodeGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpecNodeGroupParam extends $tea.Model {
  newInstanceType?: string;
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newInstanceType: 'NewInstanceType',
      nodeGroupId: 'NodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newInstanceType: 'string',
      nodeGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class User extends $tea.Model {
  group?: string;
  password?: string;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      password: 'Password',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      password: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserParam extends $tea.Model {
  password?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  applicationConfigs?: ApplicationConfig[];
  applications?: Application[];
  bootstrapScripts?: Script[];
  clientToken?: string;
  clusterName?: string;
  clusterType?: string;
  deployMode?: string;
  nodeAttributes?: NodeAttributes;
  nodeGroups?: NodeGroupConfig[];
  paymentType?: string;
  regionId?: string;
  releaseVersion?: string;
  resourceGroupId?: string;
  securityMode?: string;
  subscriptionConfig?: SubscriptionConfig;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applications: 'Applications',
      bootstrapScripts: 'BootstrapScripts',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      deployMode: 'DeployMode',
      nodeAttributes: 'NodeAttributes',
      nodeGroups: 'NodeGroups',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      securityMode: 'SecurityMode',
      subscriptionConfig: 'SubscriptionConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ApplicationConfig },
      applications: { 'type': 'array', 'itemType': Application },
      bootstrapScripts: { 'type': 'array', 'itemType': Script },
      clientToken: 'string',
      clusterName: 'string',
      clusterType: 'string',
      deployMode: 'string',
      nodeAttributes: NodeAttributes,
      nodeGroups: { 'type': 'array', 'itemType': NodeGroupConfig },
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      securityMode: 'string',
      subscriptionConfig: SubscriptionConfig,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  clusterId?: string;
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClusterResponseBody;
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
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecreaseNodesRequest extends $tea.Model {
  clusterId?: string;
  decreaseNodeCount?: number;
  nodeGroupId?: string;
  nodeIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      decreaseNodeCount: 'DecreaseNodeCount',
      nodeGroupId: 'NodeGroupId',
      nodeIds: 'NodeIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      decreaseNodeCount: 'number',
      nodeGroupId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecreaseNodesResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecreaseNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DecreaseNodesResponseBody;
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
      body: DecreaseNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteClusterResponseBody;
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
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  cluster?: Cluster;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: Cluster,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetClusterResponseBody;
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
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeGroupRequest extends $tea.Model {
  clusterId?: string;
  nodeGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroupId: 'NodeGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeGroupResponseBody extends $tea.Model {
  nodeGroup?: NodeGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroup: 'NodeGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroup: NodeGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNodeGroupResponseBody;
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
      body: GetNodeGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationRequest extends $tea.Model {
  clusterId?: string;
  operationId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      operationId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationResponseBody extends $tea.Model {
  operation?: Operation;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: Operation,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOperationResponseBody;
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
      body: GetOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseNodesRequest extends $tea.Model {
  applicationConfigs?: ApplicationConfig[];
  autoPayOrder?: boolean;
  clusterId?: string;
  increaseNodeCount?: number;
  nodeGroupId?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      autoPayOrder: 'AutoPayOrder',
      clusterId: 'ClusterId',
      increaseNodeCount: 'IncreaseNodeCount',
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ApplicationConfig },
      autoPayOrder: 'boolean',
      clusterId: 'string',
      increaseNodeCount: 'number',
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseNodesResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncreaseNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IncreaseNodesResponseBody;
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
      body: IncreaseNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupResponseBody extends $tea.Model {
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

export class JoinResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JoinResourceGroupResponseBody;
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
      body: JoinResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  clusterIds?: string[];
  clusterName?: string;
  clusterStates?: string[];
  clusterTypes?: string[];
  maxResults?: number;
  nextToken?: string;
  paymentTypes?: string[];
  regionId?: string;
  resourceGroupId?: string;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      clusterName: 'ClusterName',
      clusterStates: 'ClusterStates',
      clusterTypes: 'ClusterTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      paymentTypes: 'PaymentTypes',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      clusterName: 'string',
      clusterStates: { 'type': 'array', 'itemType': 'string' },
      clusterTypes: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      paymentTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ClusterSummary[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ClusterSummary },
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

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClustersResponseBody;
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
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsRequest extends $tea.Model {
  clusterId?: string;
  maxResults?: number;
  nextToken?: string;
  nodeGroupIds?: string[];
  nodeGroupNames?: string[];
  nodeGroupStates?: string[];
  nodeGroupTypes?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupIds: 'NodeGroupIds',
      nodeGroupNames: 'NodeGroupNames',
      nodeGroupStates: 'NodeGroupStates',
      nodeGroupTypes: 'NodeGroupTypes',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeGroupNames: { 'type': 'array', 'itemType': 'string' },
      nodeGroupStates: { 'type': 'array', 'itemType': 'string' },
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  nodeGroups?: NodeGroup[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroups: 'NodeGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeGroups: { 'type': 'array', 'itemType': NodeGroup },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodeGroupsResponseBody;
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
      body: ListNodeGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  clusterId?: string;
  maxResults?: number;
  nextToken?: string;
  nodeGroupIds?: string[];
  nodeIds?: string[];
  nodeNames?: string[];
  nodeStates?: string[];
  privateIps?: string[];
  publicIps?: string[];
  regionId?: string;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupIds: 'NodeGroupIds',
      nodeIds: 'NodeIds',
      nodeNames: 'NodeNames',
      nodeStates: 'NodeStates',
      privateIps: 'PrivateIps',
      publicIps: 'PublicIps',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeStates: { 'type': 'array', 'itemType': 'string' },
      privateIps: { 'type': 'array', 'itemType': 'string' },
      publicIps: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  nodes?: Node[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': Node },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNodesResponseBody;
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
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceIds?: string[];
  resourceType?: string;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceIds?: string[];
  resourceType?: string;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
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
  statusCode: number;
  body: TagResourcesResponseBody;
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
  regionId?: string;
  resourceIds?: string[];
  resourceType?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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

export class AckNodeSelectorLabels extends $tea.Model {
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

export class AckNodeSelectorTaints extends $tea.Model {
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

export class ComponentInstanceSelectorComponentInstances extends $tea.Model {
  applicationName?: string;
  componentName?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComponentInstanceSelectorComponents extends $tea.Model {
  applicationName?: string;
  componentName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComponentLayoutNodeSelector extends $tea.Model {
  nodeEndIndex?: number;
  nodeGroupId?: string;
  nodeGroupIndex?: number;
  nodeGroupName?: string;
  nodeGroupTypes?: string[];
  nodeNames?: string[];
  nodeSelectType?: string;
  nodeStartIndex?: number;
  static names(): { [key: string]: string } {
    return {
      nodeEndIndex: 'NodeEndIndex',
      nodeGroupId: 'NodeGroupId',
      nodeGroupIndex: 'NodeGroupIndex',
      nodeGroupName: 'NodeGroupName',
      nodeGroupTypes: 'NodeGroupTypes',
      nodeNames: 'NodeNames',
      nodeSelectType: 'NodeSelectType',
      nodeStartIndex: 'NodeStartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeEndIndex: 'number',
      nodeGroupId: 'string',
      nodeGroupIndex: 'number',
      nodeGroupName: 'string',
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeSelectType: 'string',
      nodeStartIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigInstanceTypeList extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigMultiAvailablePolicyPolicyParam extends $tea.Model {
  onDemandBaseCapacity?: number;
  onDemandPercentageAboveBaseCapacity?: number;
  spotInstancePools?: number;
  spotInstanceRemedy?: boolean;
  static names(): { [key: string]: string } {
    return {
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigMultiAvailablePolicy extends $tea.Model {
  policyParam?: ScalingGroupConfigMultiAvailablePolicyPolicyParam;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyParam: 'PolicyParam',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyParam: ScalingGroupConfigMultiAvailablePolicyPolicyParam,
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigNodeOfflinePolicy extends $tea.Model {
  mode?: string;
  timeoutMs?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      timeoutMs: 'TimeoutMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      timeoutMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingGroupConfigPrivatePoolOptions extends $tea.Model {
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

export class ScalingRuleSpecByLoadScalingRuleSpec extends $tea.Model {
  comparisonOperator?: string;
  evaluationCount?: number;
  metricName?: string;
  statistics?: string;
  threshold?: number;
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      statistics: 'Statistics',
      threshold: 'Threshold',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      metricName: 'string',
      statistics: 'string',
      threshold: 'number',
      timeWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleSpecByTimeScalingRuleSpec extends $tea.Model {
  endTime?: number;
  launchTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRuleV1RuleParam extends $tea.Model {
  comparisonOperator?: string;
  evaluationCount?: number;
  launchExpirationTime?: number;
  launchTime?: string;
  metricName?: string;
  period?: number;
  recurrenceEndTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  statistics?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      metricName: 'MetricName',
      period: 'Period',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      metricName: 'string',
      period: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      statistics: 'string',
      threshold: 'number',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "emr.aliyuncs.com",
      'cn-hangzhou': "emr.aliyuncs.com",
      'cn-shanghai': "emr.aliyuncs.com",
      'cn-shenzhen': "emr.aliyuncs.com",
      'ap-southeast-1': "emr.aliyuncs.com",
      'us-west-1': "emr.aliyuncs.com",
      'cn-hangzhou-finance': "emr.aliyuncs.com",
      'cn-shenzhen-finance-1': "emr.aliyuncs.com",
      'cn-shanghai-finance-1': "emr.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 调用CreateCluster创建集群。
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationConfigs)) {
      query["ApplicationConfigs"] = request.applicationConfigs;
    }

    if (!Util.isUnset(request.applications)) {
      query["Applications"] = request.applications;
    }

    if (!Util.isUnset(request.bootstrapScripts)) {
      query["BootstrapScripts"] = request.bootstrapScripts;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.deployMode)) {
      query["DeployMode"] = request.deployMode;
    }

    if (!Util.isUnset($tea.toMap(request.nodeAttributes))) {
      query["NodeAttributes"] = request.nodeAttributes;
    }

    if (!Util.isUnset(request.nodeGroups)) {
      query["NodeGroups"] = request.nodeGroups;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.releaseVersion)) {
      query["ReleaseVersion"] = request.releaseVersion;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityMode)) {
      query["SecurityMode"] = request.securityMode;
    }

    if (!Util.isUnset($tea.toMap(request.subscriptionConfig))) {
      query["SubscriptionConfig"] = request.subscriptionConfig;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 缩容节点。
   */
  async decreaseNodesWithOptions(request: DecreaseNodesRequest, runtime: $Util.RuntimeOptions): Promise<DecreaseNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.decreaseNodeCount)) {
      query["DecreaseNodeCount"] = request.decreaseNodeCount;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DecreaseNodes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DecreaseNodesResponse>(await this.callApi(params, req, runtime), new DecreaseNodesResponse({}));
  }

  async decreaseNodes(request: DecreaseNodesRequest): Promise<DecreaseNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decreaseNodesWithOptions(request, runtime);
  }

  /**
   * 删除集群。
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 调用GetCluster获取集群详情。
   */
  async getClusterWithOptions(request: GetClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * 获取节点组详情。
   */
  async getNodeGroupWithOptions(request: GetNodeGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeGroup",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeGroupResponse>(await this.callApi(params, req, runtime), new GetNodeGroupResponse({}));
  }

  async getNodeGroup(request: GetNodeGroupRequest): Promise<GetNodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeGroupWithOptions(request, runtime);
  }

  /**
   * 获取操作详情。
   */
  async getOperationWithOptions(request: GetOperationRequest, runtime: $Util.RuntimeOptions): Promise<GetOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOperation",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOperationResponse>(await this.callApi(params, req, runtime), new GetOperationResponse({}));
  }

  async getOperation(request: GetOperationRequest): Promise<GetOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationWithOptions(request, runtime);
  }

  /**
   * 扩容节点。
   */
  async increaseNodesWithOptions(request: IncreaseNodesRequest, runtime: $Util.RuntimeOptions): Promise<IncreaseNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationConfigs)) {
      query["ApplicationConfigs"] = request.applicationConfigs;
    }

    if (!Util.isUnset(request.autoPayOrder)) {
      query["AutoPayOrder"] = request.autoPayOrder;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.increaseNodeCount)) {
      query["IncreaseNodeCount"] = request.increaseNodeCount;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.paymentDuration)) {
      query["PaymentDuration"] = request.paymentDuration;
    }

    if (!Util.isUnset(request.paymentDurationUnit)) {
      query["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IncreaseNodes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IncreaseNodesResponse>(await this.callApi(params, req, runtime), new IncreaseNodesResponse({}));
  }

  async increaseNodes(request: IncreaseNodesRequest): Promise<IncreaseNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.increaseNodesWithOptions(request, runtime);
  }

  /**
   * 加入资源组。
   */
  async joinResourceGroupWithOptions(request: JoinResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JoinResourceGroup",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JoinResourceGroupResponse>(await this.callApi(params, req, runtime), new JoinResourceGroupResponse({}));
  }

  async joinResourceGroup(request: JoinResourceGroupRequest): Promise<JoinResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinResourceGroupWithOptions(request, runtime);
  }

  /**
   * 查询集群。
   */
  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterStates)) {
      query["ClusterStates"] = request.clusterStates;
    }

    if (!Util.isUnset(request.clusterTypes)) {
      query["ClusterTypes"] = request.clusterTypes;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.paymentTypes)) {
      query["PaymentTypes"] = request.paymentTypes;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 查询节点组。
   */
  async listNodeGroupsWithOptions(request: ListNodeGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nodeGroupIds)) {
      query["NodeGroupIds"] = request.nodeGroupIds;
    }

    if (!Util.isUnset(request.nodeGroupNames)) {
      query["NodeGroupNames"] = request.nodeGroupNames;
    }

    if (!Util.isUnset(request.nodeGroupStates)) {
      query["NodeGroupStates"] = request.nodeGroupStates;
    }

    if (!Util.isUnset(request.nodeGroupTypes)) {
      query["NodeGroupTypes"] = request.nodeGroupTypes;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeGroups",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeGroupsResponse>(await this.callApi(params, req, runtime), new ListNodeGroupsResponse({}));
  }

  async listNodeGroups(request: ListNodeGroupsRequest): Promise<ListNodeGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeGroupsWithOptions(request, runtime);
  }

  /**
   * 查询节点。
   */
  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nodeGroupIds)) {
      query["NodeGroupIds"] = request.nodeGroupIds;
    }

    if (!Util.isUnset(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!Util.isUnset(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    if (!Util.isUnset(request.nodeStates)) {
      query["NodeStates"] = request.nodeStates;
    }

    if (!Util.isUnset(request.privateIps)) {
      query["PrivateIps"] = request.privateIps;
    }

    if (!Util.isUnset(request.publicIps)) {
      query["PublicIps"] = request.publicIps;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 查询标签资源。
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
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
      version: "2021-03-20",
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

  /**
   * 给资源打标签。
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
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
      version: "2021-03-20",
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

  /**
   * 删除指定资源标签。
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
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
      version: "2021-03-20",
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

}
