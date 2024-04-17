// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AckConfig extends $tea.Model {
  ackInstanceId?: string;
  customAnnotations?: Tag[];
  customLabels?: Tag[];
  dataDiskSize?: number;
  dataDiskStorageClass?: string;
  limitCpu?: number;
  limitMemory?: number;
  mountHostCgroup?: boolean;
  namespace?: string;
  nodeSelectors?: Tag[];
  requestCpu?: number;
  requestMemory?: number;
  tolerations?: Toleration[];
  static names(): { [key: string]: string } {
    return {
      ackInstanceId: 'AckInstanceId',
      customAnnotations: 'CustomAnnotations',
      customLabels: 'CustomLabels',
      dataDiskSize: 'DataDiskSize',
      dataDiskStorageClass: 'DataDiskStorageClass',
      limitCpu: 'LimitCpu',
      limitMemory: 'LimitMemory',
      mountHostCgroup: 'MountHostCgroup',
      namespace: 'Namespace',
      nodeSelectors: 'NodeSelectors',
      requestCpu: 'RequestCpu',
      requestMemory: 'RequestMemory',
      tolerations: 'Tolerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackInstanceId: 'string',
      customAnnotations: { 'type': 'array', 'itemType': Tag },
      customLabels: { 'type': 'array', 'itemType': Tag },
      dataDiskSize: 'number',
      dataDiskStorageClass: 'string',
      limitCpu: 'number',
      limitMemory: 'number',
      mountHostCgroup: 'boolean',
      namespace: 'string',
      nodeSelectors: { 'type': 'array', 'itemType': Tag },
      requestCpu: 'number',
      requestMemory: 'number',
      tolerations: { 'type': 'array', 'itemType': Toleration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ApiTemplate extends $tea.Model {
  apiName?: string;
  content?: string;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
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

export class ApplicationConfigFile extends $tea.Model {
  applicationName?: string;
  configFileName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configFileName: 'ConfigFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configFileName: 'string',
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

export class Attribute extends $tea.Model {
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

export class AutoRenewInstance extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoRenewDurationUnit?: string;
  emrAutoRenewDuration?: number;
  emrAutoRenewDurationUnit?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      emrAutoRenewDuration: 'EmrAutoRenewDuration',
      emrAutoRenewDurationUnit: 'EmrAutoRenewDurationUnit',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      emrAutoRenewDuration: 'number',
      emrAutoRenewDurationUnit: 'string',
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

export class AutoScalingConstraints extends $tea.Model {
  autoScalingMetricUnits?: MetricUnitValue[];
  defaultMetricTriggeredRules?: ScalingRule[];
  maxAdjustmentValue?: number;
  maxByLoadRuleCount?: number;
  maxByTimeRuleCount?: number;
  supportMetricTags?: AutoScalingConstraintsSupportMetricTags[];
  supportMetrics?: string[];
  supportRuleTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      autoScalingMetricUnits: 'AutoScalingMetricUnits',
      defaultMetricTriggeredRules: 'DefaultMetricTriggeredRules',
      maxAdjustmentValue: 'MaxAdjustmentValue',
      maxByLoadRuleCount: 'MaxByLoadRuleCount',
      maxByTimeRuleCount: 'MaxByTimeRuleCount',
      supportMetricTags: 'SupportMetricTags',
      supportMetrics: 'SupportMetrics',
      supportRuleTypes: 'SupportRuleTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScalingMetricUnits: { 'type': 'array', 'itemType': MetricUnitValue },
      defaultMetricTriggeredRules: { 'type': 'array', 'itemType': ScalingRule },
      maxAdjustmentValue: 'number',
      maxByLoadRuleCount: 'number',
      maxByTimeRuleCount: 'number',
      supportMetricTags: { 'type': 'array', 'itemType': AutoScalingConstraintsSupportMetricTags },
      supportMetrics: { 'type': 'array', 'itemType': 'string' },
      supportRuleTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoScalingPolicy extends $tea.Model {
  constraints?: AutoScalingPolicyConstraints;
  scalingRules?: ScalingRule[];
  static names(): { [key: string]: string } {
    return {
      constraints: 'constraints',
      scalingRules: 'scalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: AutoScalingPolicyConstraints,
      scalingRules: { 'type': 'array', 'itemType': ScalingRule },
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
  applicationName?: string;
  componentInstances?: ComponentInstanceSelectorComponentInstances[];
  components?: ComponentInstanceSelectorComponents[];
  runActionScope?: string;
  static names(): { [key: string]: string } {
    return {
      actionScope: 'ActionScope',
      applicationName: 'ApplicationName',
      componentInstances: 'ComponentInstances',
      components: 'Components',
      runActionScope: 'RunActionScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionScope: 'string',
      applicationName: 'string',
      componentInstances: { 'type': 'array', 'itemType': ComponentInstanceSelectorComponentInstances },
      components: { 'type': 'array', 'itemType': ComponentInstanceSelectorComponents },
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

export class ConfigEffectActions extends $tea.Model {
  configEffectAction?: string;
  configFiles?: string[];
  static names(): { [key: string]: string } {
    return {
      configEffectAction: 'ConfigEffectAction',
      configFiles: 'ConfigFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configEffectAction: 'string',
      configFiles: { 'type': 'array', 'itemType': 'string' },
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

export class DeploymentSetConstraints extends $tea.Model {
  defaultValue?: string;
  enableState?: string;
  replacementStrategy?: ReplacementStrategy;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      enableState: 'EnableState',
      replacementStrategy: 'ReplacementStrategy',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      enableState: 'string',
      replacementStrategy: ReplacementStrategy,
      values: { 'type': 'array', 'itemType': 'string' },
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

export class DiskConstraints extends $tea.Model {
  categories?: string[];
  countConstraint?: ValueConstraints;
  sizeConstraint?: ValueConstraints;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      countConstraint: 'CountConstraint',
      sizeConstraint: 'SizeConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      countConstraint: ValueConstraints,
      sizeConstraint: ValueConstraints,
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
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

export class InstanceCategory extends $tea.Model {
  defaultValue?: string;
  keys?: string[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      keys: 'Keys',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceType extends $tea.Model {
  cpuArchitecture?: string;
  cpuCore?: number;
  instanceCategory?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  localStorageAmount?: number;
  localStorageCapacity?: number;
  optimized?: boolean;
  static names(): { [key: string]: string } {
    return {
      cpuArchitecture: 'CpuArchitecture',
      cpuCore: 'CpuCore',
      instanceCategory: 'InstanceCategory',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      optimized: 'Optimized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArchitecture: 'string',
      cpuCore: 'number',
      instanceCategory: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      optimized: 'boolean',
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

export class ListApiTemplatesDTO extends $tea.Model {
  apiName?: string;
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  operatorId?: string;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      operatorId: 'OperatorId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      operatorId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      userId: 'string',
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

export class MetricUnitValue extends $tea.Model {
  metricName?: string;
  metricUnit?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      metricUnit: 'MetricUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      metricUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricsTrigger extends $tea.Model {
  conditionLogicOperator?: string;
  conditions?: TriggerCondition[];
  coolDownInterval?: number;
  evaluationCount?: number;
  timeConstraints?: TimeConstraint[];
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      conditionLogicOperator: 'ConditionLogicOperator',
      conditions: 'Conditions',
      coolDownInterval: 'CoolDownInterval',
      evaluationCount: 'EvaluationCount',
      timeConstraints: 'TimeConstraints',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionLogicOperator: 'string',
      conditions: { 'type': 'array', 'itemType': TriggerCondition },
      coolDownInterval: 'number',
      evaluationCount: 'number',
      timeConstraints: { 'type': 'array', 'itemType': TimeConstraint },
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
  createTime?: number;
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
      createTime: 'CreateTime',
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
      createTime: 'number',
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
  masterRootPassword?: string;
  ramRole?: string;
  securityGroupId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      masterRootPassword: 'MasterRootPassword',
      ramRole: 'RamRole',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      masterRootPassword: 'string',
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
  status?: string;
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
      status: 'Status',
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
      status: 'string',
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
  componentTags?: string[];
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
      componentTags: 'ComponentTags',
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
      componentTags: { 'type': 'array', 'itemType': 'string' },
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

export class OperationData extends $tea.Model {
  actualDeliveredAmounts?: number;
  toBeDeliveredAmounts?: number;
  static names(): { [key: string]: string } {
    return {
      actualDeliveredAmounts: 'actualDeliveredAmounts',
      toBeDeliveredAmounts: 'toBeDeliveredAmounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualDeliveredAmounts: 'number',
      toBeDeliveredAmounts: 'number',
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
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
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

export class RecommendScalingRule extends $tea.Model {
  activityType?: string;
  adjustmentValue?: number;
  instanceType?: string;
  maxSave?: number;
  metricsTrigger?: MetricsTrigger;
  ruleName?: string;
  timeTrigger?: TimeTrigger;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentValue: 'AdjustmentValue',
      instanceType: 'InstanceType',
      maxSave: 'MaxSave',
      metricsTrigger: 'MetricsTrigger',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentValue: 'number',
      instanceType: 'string',
      maxSave: 'number',
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

export class RenewInstance extends $tea.Model {
  emrRenewDuration?: number;
  emrRenewDurationUnit?: string;
  instanceId?: string;
  renewDuration?: number;
  renewDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      emrRenewDuration: 'EmrRenewDuration',
      emrRenewDurationUnit: 'EmrRenewDurationUnit',
      instanceId: 'InstanceId',
      renewDuration: 'RenewDuration',
      renewDurationUnit: 'RenewDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrRenewDuration: 'number',
      emrRenewDurationUnit: 'string',
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

export class ReplacementStrategy extends $tea.Model {
  instanceCategories?: InstanceCategory[];
  static names(): { [key: string]: string } {
    return {
      instanceCategories: 'InstanceCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCategories: { 'type': 'array', 'itemType': InstanceCategory },
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

export class ScalingActivityResult extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingActivityResultDTO extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingAnalyzeResult extends $tea.Model {
  actualUsage?: number;
  idealUsage?: number;
  releaseCores?: number;
  reservedCores?: number;
  static names(): { [key: string]: string } {
    return {
      actualUsage: 'ActualUsage',
      idealUsage: 'IdealUsage',
      releaseCores: 'ReleaseCores',
      reservedCores: 'ReservedCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualUsage: 'number',
      idealUsage: 'number',
      releaseCores: 'number',
      reservedCores: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingAnalyzeTimeRange extends $tea.Model {
  endTime?: number;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      type: 'string',
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
  adjustmentValue?: number;
  metricsTrigger?: MetricsTrigger;
  minAdjustmentValue?: number;
  ruleName?: string;
  timeTrigger?: TimeTrigger;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentValue: 'AdjustmentValue',
      metricsTrigger: 'MetricsTrigger',
      minAdjustmentValue: 'MinAdjustmentValue',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentValue: 'number',
      metricsTrigger: MetricsTrigger,
      minAdjustmentValue: 'number',
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

export class TimeConstraint extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeRange extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeTrigger extends $tea.Model {
  endTime?: number;
  launchExpirationTime?: number;
  launchTime?: string;
  recurrenceType?: string;
  recurrenceValue?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Toleration extends $tea.Model {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerCondition extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  statistics?: string;
  tags?: Tag[];
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      statistics: 'Statistics',
      tags: 'Tags',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      statistics: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationConfig extends $tea.Model {
  configDescription?: string;
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configDescription: 'ConfigDescription',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDescription: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
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

export class ValueConstraints extends $tea.Model {
  defaultValue?: number;
  end?: number;
  start?: number;
  step?: number;
  type?: string;
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      end: 'End',
      start: 'Start',
      step: 'Step',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'number',
      end: 'number',
      start: 'number',
      step: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'number' },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
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

export class CreateNodeGroupRequest extends $tea.Model {
  clusterId?: string;
  nodeGroup?: NodeGroupConfig;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeGroup: 'NodeGroup',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeGroup: NodeGroupConfig,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupResponseBody extends $tea.Model {
  nodeGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeGroupResponseBody;
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
      body: CreateNodeGroupResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecreaseNodesResponseBody;
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

export class DeleteApiTemplateRequest extends $tea.Model {
  apiName?: string;
  regionId?: string;
  resourceGroupId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiTemplateResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApiTemplateResponseBody;
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
      body: DeleteApiTemplateResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
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

export class GetApiTemplateRequest extends $tea.Model {
  regionId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiTemplateResponseBody extends $tea.Model {
  data?: ApiTemplate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ApiTemplate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApiTemplateResponseBody;
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
      body: GetApiTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  applicationName?: string;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  application?: GetApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationResponseBody;
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
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingActivityRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingActivityResponseBody extends $tea.Model {
  requestId?: string;
  scalingActivity?: GetAutoScalingActivityResponseBodyScalingActivity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivity: 'ScalingActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivity: GetAutoScalingActivityResponseBodyScalingActivity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingActivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoScalingActivityResponseBody;
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
      body: GetAutoScalingActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyRequest extends $tea.Model {
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

export class GetAutoScalingPolicyResponseBody extends $tea.Model {
  requestId?: string;
  scalingPolicy?: GetAutoScalingPolicyResponseBodyScalingPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingPolicy: 'ScalingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingPolicy: GetAutoScalingPolicyResponseBodyScalingPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoScalingPolicyResponseBody;
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
      body: GetAutoScalingPolicyResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
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

export class GetDoctorApplicationRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBody extends $tea.Model {
  data?: GetDoctorApplicationResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorApplicationResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorApplicationResponseBody;
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
      body: GetDoctorApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryRequest extends $tea.Model {
  clusterId?: string;
  componentInfo?: GetDoctorComputeSummaryRequestComponentInfo;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentInfo: 'ComponentInfo',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentInfo: GetDoctorComputeSummaryRequestComponentInfo,
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBody extends $tea.Model {
  data?: GetDoctorComputeSummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorComputeSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorComputeSummaryResponseBody;
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
      body: GetDoctorComputeSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBody extends $tea.Model {
  data?: GetDoctorHBaseClusterResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHBaseClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHBaseClusterResponseBody;
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
      body: GetDoctorHBaseClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  hbaseRegionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      hbaseRegionId: 'HbaseRegionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      hbaseRegionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBody extends $tea.Model {
  data?: GetDoctorHBaseRegionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHBaseRegionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHBaseRegionResponseBody;
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
      body: GetDoctorHBaseRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  regionServerHost?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
      regionServerHost: 'RegionServerHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
      regionServerHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBody extends $tea.Model {
  data?: GetDoctorHBaseRegionServerResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHBaseRegionServerResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHBaseRegionServerResponseBody;
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
      body: GetDoctorHBaseRegionServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBody extends $tea.Model {
  data?: GetDoctorHBaseTableResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHBaseTableResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHBaseTableResponseBody;
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
      body: GetDoctorHBaseTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBody extends $tea.Model {
  data?: GetDoctorHDFSClusterResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHDFSClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHDFSClusterResponseBody;
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
      body: GetDoctorHDFSClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  dirPath?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      dirPath: 'DirPath',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      dirPath: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBody extends $tea.Model {
  data?: GetDoctorHDFSDirectoryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHDFSDirectoryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHDFSDirectoryResponseBody;
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
      body: GetDoctorHDFSDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  name?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponseBody extends $tea.Model {
  data?: GetDoctorHDFSUGIResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHDFSUGIResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHDFSUGIResponseBody;
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
      body: GetDoctorHDFSUGIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBody extends $tea.Model {
  data?: GetDoctorHiveClusterResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHiveClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHiveClusterResponseBody;
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
      body: GetDoctorHiveClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseRequest extends $tea.Model {
  clusterId?: string;
  databaseName?: string;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBody extends $tea.Model {
  data?: GetDoctorHiveDatabaseResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHiveDatabaseResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHiveDatabaseResponseBody;
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
      body: GetDoctorHiveDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  regionId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBody extends $tea.Model {
  data?: GetDoctorHiveTableResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHiveTableResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorHiveTableResponseBody;
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
      body: GetDoctorHiveTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobRequest extends $tea.Model {
  appId?: string;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobResponseBody extends $tea.Model {
  data?: GetDoctorJobResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorJobResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorJobResponseBody;
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
      body: GetDoctorJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorReportComponentSummaryRequest extends $tea.Model {
  clusterId?: string;
  componentType?: string;
  dateTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentType: 'ComponentType',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentType: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorReportComponentSummaryResponseBody extends $tea.Model {
  data?: GetDoctorReportComponentSummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorReportComponentSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorReportComponentSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDoctorReportComponentSummaryResponseBody;
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
      body: GetDoctorReportComponentSummaryResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeGroupResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOperationResponseBody;
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
  minIncreaseNodeCount?: number;
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
      minIncreaseNodeCount: 'MinIncreaseNodeCount',
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
      minIncreaseNodeCount: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IncreaseNodesResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: JoinResourceGroupResponseBody;
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

export class ListApiTemplatesRequest extends $tea.Model {
  apiName?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  templateId?: string;
  templateIds?: string[];
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      templateIds: 'TemplateIds',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiTemplatesResponseBody extends $tea.Model {
  apiTemplates?: ApiTemplate[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiTemplates: 'ApiTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTemplates: { 'type': 'array', 'itemType': ApiTemplate },
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

export class ListApiTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApiTemplatesResponseBody;
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
      body: ListApiTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationConfigsRequest extends $tea.Model {
  applicationName?: string;
  clusterId?: string;
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  maxResults?: number;
  nextToken?: string;
  nodeGroupId?: string;
  nodeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clusterId: 'ClusterId',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clusterId: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationConfigsResponseBody extends $tea.Model {
  applicationConfigs?: ListApplicationConfigsResponseBodyApplicationConfigs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ListApplicationConfigsResponseBodyApplicationConfigs },
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

export class ListApplicationConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationConfigsResponseBody;
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
      body: ListApplicationConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  applicationNames?: string[];
  clusterId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationNames: 'ApplicationNames',
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationNames: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  applications?: ListApplicationsResponseBodyApplications[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
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

export class ListApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsResponseBody;
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
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingActivitiesRequest extends $tea.Model {
  clusterId?: string;
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  nodeGroupId?: string;
  regionId?: string;
  scalingActivityStates?: string[];
  scalingActivityType?: string;
  scalingRuleName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      regionId: 'RegionId',
      scalingActivityStates: 'ScalingActivityStates',
      scalingActivityType: 'ScalingActivityType',
      scalingRuleName: 'ScalingRuleName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      regionId: 'string',
      scalingActivityStates: { 'type': 'array', 'itemType': 'string' },
      scalingActivityType: 'string',
      scalingRuleName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingActivitiesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  scalingActivities?: ListAutoScalingActivitiesResponseBodyScalingActivities[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scalingActivities: 'ScalingActivities',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      scalingActivities: { 'type': 'array', 'itemType': ListAutoScalingActivitiesResponseBodyScalingActivities },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingActivitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAutoScalingActivitiesResponseBody;
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
      body: ListAutoScalingActivitiesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
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

export class ListComponentInstancesRequest extends $tea.Model {
  applicationNames?: string[];
  clusterId?: string;
  componentNames?: string[];
  componentStates?: string[];
  maxResults?: number;
  nextToken?: string;
  nodeIds?: string[];
  nodeNames?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationNames: 'ApplicationNames',
      clusterId: 'ClusterId',
      componentNames: 'ComponentNames',
      componentStates: 'ComponentStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeIds: 'NodeIds',
      nodeNames: 'NodeNames',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationNames: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      componentNames: { 'type': 'array', 'itemType': 'string' },
      componentStates: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentInstancesResponseBody extends $tea.Model {
  componentInstances?: ListComponentInstancesResponseBodyComponentInstances[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      componentInstances: 'ComponentInstances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentInstances: { 'type': 'array', 'itemType': ListComponentInstancesResponseBodyComponentInstances },
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

export class ListComponentInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListComponentInstancesResponseBody;
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
      body: ListComponentInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsRequest extends $tea.Model {
  applicationNames?: string[];
  clusterId?: string;
  componentNames?: string[];
  componentStates?: string[];
  includeExpiredConfig?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationNames: 'ApplicationNames',
      clusterId: 'ClusterId',
      componentNames: 'ComponentNames',
      componentStates: 'ComponentStates',
      includeExpiredConfig: 'IncludeExpiredConfig',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationNames: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      componentNames: { 'type': 'array', 'itemType': 'string' },
      componentStates: { 'type': 'array', 'itemType': 'string' },
      includeExpiredConfig: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $tea.Model {
  components?: ListComponentsResponseBodyComponents[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponents },
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

export class ListComponentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListComponentsResponseBody;
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
      body: ListComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsRequest extends $tea.Model {
  appIds?: string[];
  clusterId?: string;
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  queues?: string[];
  regionId?: string;
  types?: string[];
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      queues: 'Queues',
      regionId: 'RegionId',
      types: 'Types',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      queues: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBody extends $tea.Model {
  data?: ListDoctorApplicationsResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorApplicationsResponseBodyData },
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

export class ListDoctorApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorApplicationsResponseBody;
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
      body: ListDoctorApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryRequest extends $tea.Model {
  clusterId?: string;
  componentTypes?: string[];
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentTypes: 'ComponentTypes',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentTypes: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBody extends $tea.Model {
  data?: ListDoctorComputeSummaryResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorComputeSummaryResponseBodyData },
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

export class ListDoctorComputeSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorComputeSummaryResponseBody;
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
      body: ListDoctorComputeSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  regionServerHosts?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      regionServerHosts: 'RegionServerHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      regionServerHosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBody extends $tea.Model {
  data?: ListDoctorHBaseRegionServersResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHBaseRegionServersResponseBodyData },
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

export class ListDoctorHBaseRegionServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorHBaseRegionServersResponseBody;
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
      body: ListDoctorHBaseRegionServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBody extends $tea.Model {
  data?: ListDoctorHBaseTablesResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHBaseTablesResponseBodyData },
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

export class ListDoctorHBaseTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorHBaseTablesResponseBody;
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
      body: ListDoctorHBaseTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  dirPath?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      dirPath: 'DirPath',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      dirPath: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBody extends $tea.Model {
  data?: ListDoctorHDFSDirectoriesResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHDFSDirectoriesResponseBodyData },
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

export class ListDoctorHDFSDirectoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorHDFSDirectoriesResponseBody;
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
      body: ListDoctorHDFSDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBody extends $tea.Model {
  data?: ListDoctorHDFSUGIResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHDFSUGIResponseBodyData },
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

export class ListDoctorHDFSUGIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorHDFSUGIResponseBody;
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
      body: ListDoctorHDFSUGIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesRequest extends $tea.Model {
  clusterId?: string;
  databaseNames?: string[];
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseNames: 'DatabaseNames',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseNames: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBody extends $tea.Model {
  data?: ListDoctorHiveDatabasesResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHiveDatabasesResponseBodyData },
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

export class ListDoctorHiveDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorHiveDatabasesResponseBody;
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
      body: ListDoctorHiveDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesRequest extends $tea.Model {
  clusterId?: string;
  dateTime?: string;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBody extends $tea.Model {
  data?: ListDoctorHiveTablesResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHiveTablesResponseBodyData },
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

export class ListDoctorHiveTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorHiveTablesResponseBody;
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
      body: ListDoctorHiveTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsRequest extends $tea.Model {
  appIds?: string[];
  clusterId?: string;
  endRange?: ListDoctorJobsRequestEndRange;
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  queues?: string[];
  regionId?: string;
  startRange?: ListDoctorJobsRequestStartRange;
  types?: string[];
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      clusterId: 'ClusterId',
      endRange: 'EndRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      queues: 'Queues',
      regionId: 'RegionId',
      startRange: 'StartRange',
      types: 'Types',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      endRange: ListDoctorJobsRequestEndRange,
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      queues: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      startRange: ListDoctorJobsRequestStartRange,
      types: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsResponseBody extends $tea.Model {
  data?: ListDoctorJobsResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorJobsResponseBodyData },
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

export class ListDoctorJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorJobsResponseBody;
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
      body: ListDoctorJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsRequest extends $tea.Model {
  clusterId?: string;
  endRange?: ListDoctorJobsStatsRequestEndRange;
  groupBy?: string[];
  maxResults?: number;
  nextToken?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  startRange?: ListDoctorJobsStatsRequestStartRange;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endRange: 'EndRange',
      groupBy: 'GroupBy',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      startRange: 'StartRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endRange: ListDoctorJobsStatsRequestEndRange,
      groupBy: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      startRange: ListDoctorJobsStatsRequestStartRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsResponseBody extends $tea.Model {
  data?: ListDoctorJobsStatsResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorJobsStatsResponseBodyData },
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

export class ListDoctorJobsStatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorJobsStatsResponseBody;
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
      body: ListDoctorJobsStatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorReportsRequest extends $tea.Model {
  clusterId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorReportsResponseBody extends $tea.Model {
  data?: ListDoctorReportsResponseBodyData[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorReportsResponseBodyData },
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

export class ListDoctorReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDoctorReportsResponseBody;
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
      body: ListDoctorReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTypesRequest extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  deployMode?: string;
  instanceType?: string;
  isModification?: boolean;
  nodeGroupId?: string;
  nodeGroupType?: string;
  paymentType?: string;
  regionId?: string;
  releaseVersion?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      deployMode: 'DeployMode',
      instanceType: 'InstanceType',
      isModification: 'IsModification',
      nodeGroupId: 'NodeGroupId',
      nodeGroupType: 'NodeGroupType',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      deployMode: 'string',
      instanceType: 'string',
      isModification: 'boolean',
      nodeGroupId: 'string',
      nodeGroupType: 'string',
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTypesResponseBody extends $tea.Model {
  instanceTypes?: InstanceType[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': InstanceType },
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

export class ListInstanceTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceTypesResponseBody;
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
      body: ListInstanceTypesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeGroupsResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
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

export class ListReleaseVersionsRequest extends $tea.Model {
  clusterType?: string;
  iaasType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      iaasType: 'IaasType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      iaasType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  releaseVersions?: ListReleaseVersionsResponseBodyReleaseVersions[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      releaseVersions: 'ReleaseVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      releaseVersions: { 'type': 'array', 'itemType': ListReleaseVersionsResponseBodyReleaseVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListReleaseVersionsResponseBody;
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
      body: ListReleaseVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsRequest extends $tea.Model {
  clusterId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  scriptType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      scriptType: 'ScriptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      scriptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  scripts?: ListScriptsResponseBodyScripts[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scripts: 'Scripts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      scripts: { 'type': 'array', 'itemType': ListScriptsResponseBodyScripts },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScriptsResponseBody;
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
      body: ListScriptsResponseBody,
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

export class PutAutoScalingPolicyRequest extends $tea.Model {
  clusterId?: string;
  constraints?: ScalingConstraints;
  nodeGroupId?: string;
  regionId?: string;
  scalingRules?: ScalingRule[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      nodeGroupId: 'NodeGroupId',
      regionId: 'RegionId',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: ScalingConstraints,
      nodeGroupId: 'string',
      regionId: 'string',
      scalingRules: { 'type': 'array', 'itemType': ScalingRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAutoScalingPolicyResponseBody extends $tea.Model {
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

export class PutAutoScalingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAutoScalingPolicyResponseBody;
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
      body: PutAutoScalingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAutoScalingPolicyRequest extends $tea.Model {
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

export class RemoveAutoScalingPolicyResponseBody extends $tea.Model {
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

export class RemoveAutoScalingPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveAutoScalingPolicyResponseBody;
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
      body: RemoveAutoScalingPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunApiTemplateRequest extends $tea.Model {
  apiName?: string;
  clientToken?: string;
  regionId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      clientToken: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunApiTemplateResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunApiTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunApiTemplateResponseBody;
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
      body: RunApiTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunApplicationActionRequest extends $tea.Model {
  actionName?: string;
  batchSize?: number;
  clusterId?: string;
  componentInstanceSelector?: ComponentInstanceSelector;
  description?: string;
  executeStrategy?: string;
  interval?: number;
  regionId?: string;
  rollingExecute?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      batchSize: 'BatchSize',
      clusterId: 'ClusterId',
      componentInstanceSelector: 'ComponentInstanceSelector',
      description: 'Description',
      executeStrategy: 'ExecuteStrategy',
      interval: 'Interval',
      regionId: 'RegionId',
      rollingExecute: 'RollingExecute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      batchSize: 'number',
      clusterId: 'string',
      componentInstanceSelector: ComponentInstanceSelector,
      description: 'string',
      executeStrategy: 'string',
      interval: 'number',
      regionId: 'string',
      rollingExecute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunApplicationActionResponseBody extends $tea.Model {
  abnInstances?: RunApplicationActionResponseBodyAbnInstances[];
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnInstances: 'AbnInstances',
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnInstances: { 'type': 'array', 'itemType': RunApplicationActionResponseBodyAbnInstances },
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunApplicationActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunApplicationActionResponseBody;
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
      body: RunApplicationActionResponseBody,
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

export class UpdateApplicationConfigsRequest extends $tea.Model {
  applicationConfigs?: UpdateApplicationConfig[];
  applicationName?: string;
  clusterId?: string;
  configAction?: string;
  configScope?: string;
  description?: string;
  nodeGroupId?: string;
  nodeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applicationName: 'ApplicationName',
      clusterId: 'ClusterId',
      configAction: 'ConfigAction',
      configScope: 'ConfigScope',
      description: 'Description',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': UpdateApplicationConfig },
      applicationName: 'string',
      clusterId: 'string',
      configAction: 'string',
      configScope: 'string',
      description: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationConfigsResponseBody extends $tea.Model {
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

export class UpdateApplicationConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationConfigsResponseBody;
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
      body: UpdateApplicationConfigsResponseBody,
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

export class AutoScalingConstraintsSupportMetricTags extends $tea.Model {
  metricName?: string;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoScalingPolicyConstraints extends $tea.Model {
  maxCapacity?: number;
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'maxCapacity',
      minCapacity: 'minCapacity',
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

export class GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute extends $tea.Model {
  description?: string;
  valueIncrementStep?: string;
  valueMaximum?: string;
  valueMinimum?: string;
  valueType?: string;
  valueUnit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      valueIncrementStep: 'ValueIncrementStep',
      valueMaximum: 'ValueMaximum',
      valueMinimum: 'ValueMinimum',
      valueType: 'ValueType',
      valueUnit: 'ValueUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      valueIncrementStep: 'string',
      valueMaximum: 'string',
      valueMinimum: 'string',
      valueType: 'string',
      valueUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationActionsActionParams extends $tea.Model {
  description?: string;
  key?: string;
  valueAttribute?: GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      valueAttribute: 'ValueAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      valueAttribute: GetApplicationResponseBodyApplicationActionsActionParamsValueAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationActions extends $tea.Model {
  actionName?: string;
  actionParams?: GetApplicationResponseBodyApplicationActionsActionParams[];
  command?: string;
  componentName?: string;
  description?: string;
  runActionScope?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionParams: 'ActionParams',
      command: 'Command',
      componentName: 'ComponentName',
      description: 'Description',
      runActionScope: 'RunActionScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionParams: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationActionsActionParams },
      command: 'string',
      componentName: 'string',
      description: 'string',
      runActionScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  actions?: GetApplicationResponseBodyApplicationActions[];
  applicationName?: string;
  applicationState?: string;
  applicationVersion?: string;
  communityVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      applicationName: 'ApplicationName',
      applicationState: 'ApplicationState',
      applicationVersion: 'ApplicationVersion',
      communityVersion: 'CommunityVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationActions },
      applicationName: 'string',
      applicationState: 'string',
      applicationVersion: 'string',
      communityVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingActivityResponseBodyScalingActivity extends $tea.Model {
  activityId?: string;
  activityResults?: ScalingActivityResult[];
  activityState?: string;
  activityType?: string;
  clusterId?: string;
  description?: string;
  endTime?: number;
  expectNum?: number;
  nodeGroupId?: string;
  nodeGroupName?: string;
  operationId?: string;
  ruleDetail?: ScalingRule;
  ruleName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityResults: 'ActivityResults',
      activityState: 'ActivityState',
      activityType: 'ActivityType',
      clusterId: 'ClusterId',
      description: 'Description',
      endTime: 'EndTime',
      expectNum: 'ExpectNum',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      operationId: 'OperationId',
      ruleDetail: 'RuleDetail',
      ruleName: 'RuleName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityResults: { 'type': 'array', 'itemType': ScalingActivityResult },
      activityState: 'string',
      activityType: 'string',
      clusterId: 'string',
      description: 'string',
      endTime: 'number',
      expectNum: 'number',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      operationId: 'string',
      ruleDetail: ScalingRule,
      ruleName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyResponseBodyScalingPolicyConstraints extends $tea.Model {
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

export class GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules extends $tea.Model {
  activityType?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  metricsTrigger?: MetricsTrigger;
  minAdjustmentValue?: number;
  ruleName?: string;
  timeTrigger?: TimeTrigger;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      metricsTrigger: 'MetricsTrigger',
      minAdjustmentValue: 'MinAdjustmentValue',
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
      minAdjustmentValue: 'number',
      ruleName: 'string',
      timeTrigger: TimeTrigger,
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyResponseBodyScalingPolicy extends $tea.Model {
  clusterId?: string;
  constraints?: GetAutoScalingPolicyResponseBodyScalingPolicyConstraints;
  nodeGroupId?: string;
  scalingPolicyId?: string;
  scalingRules?: GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      nodeGroupId: 'NodeGroupId',
      scalingPolicyId: 'ScalingPolicyId',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: GetAutoScalingPolicyResponseBodyScalingPolicyConstraints,
      nodeGroupId: 'string',
      scalingPolicyId: 'string',
      scalingRules: { 'type': 'array', 'itemType': GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataAnalysis extends $tea.Model {
  score?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataMetricsMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataMetricsMemUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataMetrics extends $tea.Model {
  memSeconds?: GetDoctorApplicationResponseBodyDataMetricsMemSeconds;
  memUtilization?: GetDoctorApplicationResponseBodyDataMetricsMemUtilization;
  vcoreSeconds?: GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds;
  vcoreUtilization?: GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memUtilization: 'MemUtilization',
      vcoreSeconds: 'VcoreSeconds',
      vcoreUtilization: 'VcoreUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorApplicationResponseBodyDataMetricsMemSeconds,
      memUtilization: GetDoctorApplicationResponseBodyDataMetricsMemUtilization,
      vcoreSeconds: GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds,
      vcoreUtilization: GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyData extends $tea.Model {
  analysis?: GetDoctorApplicationResponseBodyDataAnalysis;
  appName?: string;
  endTime?: number;
  ids?: string[];
  metrics?: GetDoctorApplicationResponseBodyDataMetrics;
  querySql?: string;
  queue?: string;
  startTime?: number;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      appName: 'AppName',
      endTime: 'EndTime',
      ids: 'Ids',
      metrics: 'Metrics',
      querySql: 'QuerySql',
      queue: 'Queue',
      startTime: 'StartTime',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorApplicationResponseBodyDataAnalysis,
      appName: 'string',
      endTime: 'number',
      ids: { 'type': 'array', 'itemType': 'string' },
      metrics: GetDoctorApplicationResponseBodyDataMetrics,
      querySql: 'string',
      queue: 'string',
      startTime: 'number',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryRequestComponentInfo extends $tea.Model {
  componentName?: string;
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataAnalysis extends $tea.Model {
  healthyJobCount?: number;
  needAttentionJobCount?: number;
  score?: number;
  scoreDayGrowthRatio?: number;
  subHealthyJobCount?: number;
  unhealthyJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthyJobCount: 'HealthyJobCount',
      needAttentionJobCount: 'NeedAttentionJobCount',
      score: 'Score',
      scoreDayGrowthRatio: 'ScoreDayGrowthRatio',
      subHealthyJobCount: 'SubHealthyJobCount',
      unhealthyJobCount: 'UnhealthyJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyJobCount: 'number',
      needAttentionJobCount: 'number',
      score: 'number',
      scoreDayGrowthRatio: 'number',
      subHealthyJobCount: 'number',
      unhealthyJobCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsReadSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyDataMetrics extends $tea.Model {
  memSeconds?: GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds;
  memSecondsDayGrowthRatio?: GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio;
  memUtilization?: GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization;
  readSize?: GetDoctorComputeSummaryResponseBodyDataMetricsReadSize;
  vcoreSeconds?: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds;
  vcoreSecondsDayGrowthRatio?: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio;
  vcoreUtilization?: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization;
  writeSize?: GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memSecondsDayGrowthRatio: 'MemSecondsDayGrowthRatio',
      memUtilization: 'MemUtilization',
      readSize: 'ReadSize',
      vcoreSeconds: 'VcoreSeconds',
      vcoreSecondsDayGrowthRatio: 'VcoreSecondsDayGrowthRatio',
      vcoreUtilization: 'VcoreUtilization',
      writeSize: 'WriteSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorComputeSummaryResponseBodyDataMetricsMemSeconds,
      memSecondsDayGrowthRatio: GetDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio,
      memUtilization: GetDoctorComputeSummaryResponseBodyDataMetricsMemUtilization,
      readSize: GetDoctorComputeSummaryResponseBodyDataMetricsReadSize,
      vcoreSeconds: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds,
      vcoreSecondsDayGrowthRatio: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio,
      vcoreUtilization: GetDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization,
      writeSize: GetDoctorComputeSummaryResponseBodyDataMetricsWriteSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorComputeSummaryResponseBodyData extends $tea.Model {
  analysis?: GetDoctorComputeSummaryResponseBodyDataAnalysis;
  metrics?: GetDoctorComputeSummaryResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorComputeSummaryResponseBodyDataAnalysis,
      metrics: GetDoctorComputeSummaryResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataAnalysis extends $tea.Model {
  hbaseScore?: number;
  static names(): { [key: string]: string } {
    return {
      hbaseScore: 'HbaseScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaseScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsTableCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetrics extends $tea.Model {
  avgLoad?: GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad;
  dailyReadRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest;
  dailyWriteRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest;
  memHeap?: GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap;
  normalAvgLoad?: GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad;
  regionBalance?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance;
  regionCount?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount;
  regionServerCount?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount;
  storeFileCount?: GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount;
  tableCount?: GetDoctorHBaseClusterResponseBodyDataMetricsTableCount;
  totalDataSize?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize;
  totalReadRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest;
  totalRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest;
  totalWriteRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgLoad: 'AvgLoad',
      dailyReadRequest: 'DailyReadRequest',
      dailyWriteRequest: 'DailyWriteRequest',
      memHeap: 'MemHeap',
      normalAvgLoad: 'NormalAvgLoad',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionServerCount: 'RegionServerCount',
      storeFileCount: 'StoreFileCount',
      tableCount: 'TableCount',
      totalDataSize: 'TotalDataSize',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLoad: GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad,
      dailyReadRequest: GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest,
      dailyWriteRequest: GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest,
      memHeap: GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap,
      normalAvgLoad: GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad,
      regionBalance: GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance,
      regionCount: GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount,
      regionServerCount: GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount,
      storeFileCount: GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount,
      tableCount: GetDoctorHBaseClusterResponseBodyDataMetricsTableCount,
      totalDataSize: GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize,
      totalReadRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest,
      totalRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyData extends $tea.Model {
  analysis?: GetDoctorHBaseClusterResponseBodyDataAnalysis;
  metrics?: GetDoctorHBaseClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHBaseClusterResponseBodyDataAnalysis,
      metrics: GetDoctorHBaseClusterResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyDataMetrics extends $tea.Model {
  dailyReadRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest;
  dailyWriteRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest;
  storeFileCount?: GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount;
  totalReadRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest;
  totalWriteRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      dailyReadRequest: 'DailyReadRequest',
      dailyWriteRequest: 'DailyWriteRequest',
      storeFileCount: 'StoreFileCount',
      totalReadRequest: 'TotalReadRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyReadRequest: GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest,
      dailyWriteRequest: GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest,
      storeFileCount: GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount,
      totalReadRequest: GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest,
      totalWriteRequest: GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionResponseBodyData extends $tea.Model {
  metrics?: GetDoctorHBaseRegionResponseBodyDataMetrics;
  regionServerHost?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      regionServerHost: 'RegionServerHost',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHBaseRegionResponseBodyDataMetrics,
      regionServerHost: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyDataMetrics extends $tea.Model {
  avgGc?: GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc;
  cacheRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio;
  dailyReadRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest;
  dailyReadRequestDayGrowthRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  dailyWriteRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest;
  dailyWriteRequestDayGrowthRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  regionCount?: GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount;
  totalReadRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest;
  totalRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest;
  totalWriteRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgGc: 'AvgGc',
      cacheRatio: 'CacheRatio',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      regionCount: 'RegionCount',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgGc: GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc,
      cacheRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio,
      dailyReadRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      regionCount: GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount,
      totalReadRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest,
      totalRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseRegionServerResponseBodyData extends $tea.Model {
  metrics?: GetDoctorHBaseRegionServerResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHBaseRegionServerResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataAnalysis extends $tea.Model {
  readRequestHotspotRegionList?: string[];
  readRequestUnbalanceSuggestion?: string;
  requestHotspotRegionList?: string[];
  requestUnbalanceSuggestion?: string;
  tableScore?: number;
  writeRequestHotspotRegionList?: string[];
  writeRequestUnbalanceSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      readRequestHotspotRegionList: 'ReadRequestHotspotRegionList',
      readRequestUnbalanceSuggestion: 'ReadRequestUnbalanceSuggestion',
      requestHotspotRegionList: 'RequestHotspotRegionList',
      requestUnbalanceSuggestion: 'RequestUnbalanceSuggestion',
      tableScore: 'TableScore',
      writeRequestHotspotRegionList: 'WriteRequestHotspotRegionList',
      writeRequestUnbalanceSuggestion: 'WriteRequestUnbalanceSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      readRequestUnbalanceSuggestion: 'string',
      requestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      requestUnbalanceSuggestion: 'string',
      tableScore: 'number',
      writeRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      writeRequestUnbalanceSuggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsLocality extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsTableSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyDataMetrics extends $tea.Model {
  coldAccessDay?: GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay;
  coldConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay;
  coldDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize;
  dailyReadRequest?: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest;
  dailyReadRequestDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  dailyWriteRequest?: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest;
  dailyWriteRequestDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  freezeConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay;
  freezeDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize;
  hotDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize;
  locality?: GetDoctorHBaseTableResponseBodyDataMetricsLocality;
  readRequestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance;
  regionBalance?: GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance;
  regionCount?: GetDoctorHBaseTableResponseBodyDataMetricsRegionCount;
  regionCountDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio;
  regionServerCount?: GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount;
  requestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance;
  storeFileCount?: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount;
  storeFileCountDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio;
  tableSize?: GetDoctorHBaseTableResponseBodyDataMetricsTableSize;
  tableSizeDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio;
  warmConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay;
  warmDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize;
  writeRequestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance;
  static names(): { [key: string]: string } {
    return {
      coldAccessDay: 'ColdAccessDay',
      coldConfigDay: 'ColdConfigDay',
      coldDataSize: 'ColdDataSize',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      freezeConfigDay: 'FreezeConfigDay',
      freezeDataSize: 'FreezeDataSize',
      hotDataSize: 'HotDataSize',
      locality: 'Locality',
      readRequestBalance: 'ReadRequestBalance',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionCountDayGrowthRatio: 'RegionCountDayGrowthRatio',
      regionServerCount: 'RegionServerCount',
      requestBalance: 'RequestBalance',
      storeFileCount: 'StoreFileCount',
      storeFileCountDayGrowthRatio: 'StoreFileCountDayGrowthRatio',
      tableSize: 'TableSize',
      tableSizeDayGrowthRatio: 'TableSizeDayGrowthRatio',
      warmConfigDay: 'WarmConfigDay',
      warmDataSize: 'WarmDataSize',
      writeRequestBalance: 'WriteRequestBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldAccessDay: GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay,
      coldConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay,
      coldDataSize: GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize,
      dailyReadRequest: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      freezeConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay,
      freezeDataSize: GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize,
      hotDataSize: GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize,
      locality: GetDoctorHBaseTableResponseBodyDataMetricsLocality,
      readRequestBalance: GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance,
      regionBalance: GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance,
      regionCount: GetDoctorHBaseTableResponseBodyDataMetricsRegionCount,
      regionCountDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio,
      regionServerCount: GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount,
      requestBalance: GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance,
      storeFileCount: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount,
      storeFileCountDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio,
      tableSize: GetDoctorHBaseTableResponseBodyDataMetricsTableSize,
      tableSizeDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio,
      warmConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay,
      warmDataSize: GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize,
      writeRequestBalance: GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseTableResponseBodyData extends $tea.Model {
  analysis?: GetDoctorHBaseTableResponseBodyDataAnalysis;
  metrics?: GetDoctorHBaseTableResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHBaseTableResponseBodyDataAnalysis,
      metrics: GetDoctorHBaseTableResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataAnalysis extends $tea.Model {
  hdfsScore?: number;
  static names(): { [key: string]: string } {
    return {
      hdfsScore: 'HdfsScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfsScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataRatio;
  coldDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileDayGrowthCount;
  emptyFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileRatio;
  freezeDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataRatio;
  freezeDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataRatio;
  hotDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileDayGrowthCount;
  largeFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileRatio;
  mediumFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileDayGrowthCount;
  mediumFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileRatio;
  smallFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileDayGrowthCount;
  smallFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileRatio;
  tinyFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileDayGrowthCount;
  tinyFileRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileRatio;
  totalDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataRatio;
  warmDataSize?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsMediumFileRatio,
      smallFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsSmallFileRatio,
      tinyFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHDFSClusterResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHDFSClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSClusterResponseBodyData extends $tea.Model {
  analysis?: GetDoctorHDFSClusterResponseBodyDataAnalysis;
  metrics?: GetDoctorHDFSClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHDFSClusterResponseBodyDataAnalysis,
      metrics: GetDoctorHDFSClusterResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount;
  freezeDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileDayGrowthCount;
  mediumFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileDayGrowthCount;
  smallFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileDayGrowthCount;
  tinyFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileDayGrowthCount;
  totalDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount,
      freezeDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileDayGrowthCount,
      mediumFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileDayGrowthCount,
      smallFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileDayGrowthCount,
      tinyFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileDayGrowthCount,
      totalDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSDirectoryResponseBodyData extends $tea.Model {
  depth?: number;
  group?: string;
  metrics?: GetDoctorHDFSDirectoryResponseBodyDataMetrics;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      group: 'Group',
      metrics: 'Metrics',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      group: 'string',
      metrics: GetDoctorHDFSDirectoryResponseBodyDataMetrics,
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponseBodyDataMetrics extends $tea.Model {
  totalDataSize?: GetDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize;
  totalDirCount?: GetDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount;
  totalFileCount?: GetDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount;
  static names(): { [key: string]: string } {
    return {
      totalDataSize: 'TotalDataSize',
      totalDirCount: 'TotalDirCount',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDataSize: GetDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize,
      totalDirCount: GetDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount,
      totalFileCount: GetDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHDFSUGIResponseBodyData extends $tea.Model {
  metrics?: GetDoctorHDFSUGIResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHDFSUGIResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataAnalysis extends $tea.Model {
  hiveDistributionScore?: number;
  hiveFormatScore?: number;
  hiveFrequencyScore?: number;
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataFormats extends $tea.Model {
  formatName?: string;
  formatRatio?: number;
  formatSize?: number;
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsDatabaseCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsLargeFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsMediumFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsPartitionNum extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsSmallFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTableCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTinyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataRatio;
  coldDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  databaseCount?: GetDoctorHiveClusterResponseBodyDataMetricsDatabaseCount;
  emptyFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileDayGrowthCount;
  emptyFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileRatio;
  freezeDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataRatio;
  freezeDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataRatio;
  hotDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileDayGrowthCount;
  largeFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileRatio;
  mediumFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileDayGrowthCount;
  mediumFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileRatio;
  partitionNum?: GetDoctorHiveClusterResponseBodyDataMetricsPartitionNum;
  smallFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileDayGrowthCount;
  smallFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileRatio;
  tableCount?: GetDoctorHiveClusterResponseBodyDataMetricsTableCount;
  tinyFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileDayGrowthCount;
  tinyFileRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileRatio;
  totalDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataRatio?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataRatio;
  warmDataSize?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      databaseCount: 'DatabaseCount',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      partitionNum: 'PartitionNum',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tableCount: 'TableCount',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      databaseCount: GetDoctorHiveClusterResponseBodyDataMetricsDatabaseCount,
      emptyFileCount: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsMediumFileRatio,
      partitionNum: GetDoctorHiveClusterResponseBodyDataMetricsPartitionNum,
      smallFileCount: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsSmallFileRatio,
      tableCount: GetDoctorHiveClusterResponseBodyDataMetricsTableCount,
      tinyFileCount: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHiveClusterResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHiveClusterResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHiveClusterResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveClusterResponseBodyData extends $tea.Model {
  analysis?: GetDoctorHiveClusterResponseBodyDataAnalysis;
  formats?: GetDoctorHiveClusterResponseBodyDataFormats[];
  metrics?: GetDoctorHiveClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveClusterResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveClusterResponseBodyDataFormats },
      metrics: GetDoctorHiveClusterResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataAnalysis extends $tea.Model {
  hiveDistributionScore?: number;
  hiveFormatScore?: number;
  hiveFrequencyScore?: number;
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataFormats extends $tea.Model {
  formatDayGrowthSize?: number;
  formatName?: string;
  formatRatio?: number;
  formatSize?: number;
  formatSizeDayGrowthRatio?: number;
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatDayGrowthSize: 'FormatDayGrowthSize',
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeDayGrowthRatio: 'FormatSizeDayGrowthRatio',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDayGrowthSize: 'number',
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeDayGrowthRatio: 'number',
      formatSizeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsPartitionNum extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTableCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataRatio;
  coldDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileDayGrowthCount;
  emptyFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileRatio;
  freezeDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataRatio;
  freezeDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataRatio;
  hotDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileDayGrowthCount;
  largeFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileRatio;
  mediumFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileDayGrowthCount;
  mediumFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileRatio;
  partitionNum?: GetDoctorHiveDatabaseResponseBodyDataMetricsPartitionNum;
  smallFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileDayGrowthCount;
  smallFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileRatio;
  tableCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTableCount;
  tinyFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileDayGrowthCount;
  tinyFileRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileRatio;
  totalDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataRatio;
  warmDataSize?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      partitionNum: 'PartitionNum',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tableCount: 'TableCount',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsMediumFileRatio,
      partitionNum: GetDoctorHiveDatabaseResponseBodyDataMetricsPartitionNum,
      smallFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsSmallFileRatio,
      tableCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTableCount,
      tinyFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHiveDatabaseResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHiveDatabaseResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveDatabaseResponseBodyData extends $tea.Model {
  analysis?: GetDoctorHiveDatabaseResponseBodyDataAnalysis;
  formats?: GetDoctorHiveDatabaseResponseBodyDataFormats[];
  metrics?: GetDoctorHiveDatabaseResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveDatabaseResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveDatabaseResponseBodyDataFormats },
      metrics: GetDoctorHiveDatabaseResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataAnalysis extends $tea.Model {
  hiveDistributionScore?: number;
  hiveFormatScore?: number;
  hiveFrequencyScore?: number;
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataFormats extends $tea.Model {
  formatDayGrowthSize?: number;
  formatName?: string;
  formatRatio?: number;
  formatSize?: number;
  formatSizeDayGrowthRatio?: number;
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatDayGrowthSize: 'FormatDayGrowthSize',
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeDayGrowthRatio: 'FormatSizeDayGrowthRatio',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDayGrowthSize: 'number',
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeDayGrowthRatio: 'number',
      formatSizeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsColdDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsEmptyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsFreezeDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsHotDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsLargeFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsMediumFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsPartitionNum extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsSmallFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTinyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsWarmDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: GetDoctorHiveTableResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataRatio?: GetDoctorHiveTableResponseBodyDataMetricsColdDataRatio;
  coldDataSize?: GetDoctorHiveTableResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileDayGrowthCount;
  emptyFileRatio?: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileRatio;
  freezeDataDayGrowthSize?: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataRatio?: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataRatio;
  freezeDataSize?: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: GetDoctorHiveTableResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataRatio?: GetDoctorHiveTableResponseBodyDataMetricsHotDataRatio;
  hotDataSize?: GetDoctorHiveTableResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: GetDoctorHiveTableResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: GetDoctorHiveTableResponseBodyDataMetricsLargeFileDayGrowthCount;
  largeFileRatio?: GetDoctorHiveTableResponseBodyDataMetricsLargeFileRatio;
  mediumFileCount?: GetDoctorHiveTableResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: GetDoctorHiveTableResponseBodyDataMetricsMediumFileDayGrowthCount;
  mediumFileRatio?: GetDoctorHiveTableResponseBodyDataMetricsMediumFileRatio;
  partitionNum?: GetDoctorHiveTableResponseBodyDataMetricsPartitionNum;
  smallFileCount?: GetDoctorHiveTableResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: GetDoctorHiveTableResponseBodyDataMetricsSmallFileDayGrowthCount;
  smallFileRatio?: GetDoctorHiveTableResponseBodyDataMetricsSmallFileRatio;
  tinyFileCount?: GetDoctorHiveTableResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: GetDoctorHiveTableResponseBodyDataMetricsTinyFileDayGrowthCount;
  tinyFileRatio?: GetDoctorHiveTableResponseBodyDataMetricsTinyFileRatio;
  totalDataDayGrowthSize?: GetDoctorHiveTableResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: GetDoctorHiveTableResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: GetDoctorHiveTableResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: GetDoctorHiveTableResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: GetDoctorHiveTableResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataRatio?: GetDoctorHiveTableResponseBodyDataMetricsWarmDataRatio;
  warmDataSize?: GetDoctorHiveTableResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: GetDoctorHiveTableResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      partitionNum: 'PartitionNum',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: GetDoctorHiveTableResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: GetDoctorHiveTableResponseBodyDataMetricsColdDataRatio,
      coldDataSize: GetDoctorHiveTableResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: GetDoctorHiveTableResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHiveTableResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: GetDoctorHiveTableResponseBodyDataMetricsHotDataRatio,
      hotDataSize: GetDoctorHiveTableResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHiveTableResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHiveTableResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: GetDoctorHiveTableResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: GetDoctorHiveTableResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHiveTableResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: GetDoctorHiveTableResponseBodyDataMetricsMediumFileRatio,
      partitionNum: GetDoctorHiveTableResponseBodyDataMetricsPartitionNum,
      smallFileCount: GetDoctorHiveTableResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHiveTableResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: GetDoctorHiveTableResponseBodyDataMetricsSmallFileRatio,
      tinyFileCount: GetDoctorHiveTableResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHiveTableResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: GetDoctorHiveTableResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: GetDoctorHiveTableResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHiveTableResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHiveTableResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHiveTableResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHiveTableResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: GetDoctorHiveTableResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: GetDoctorHiveTableResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHiveTableResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHiveTableResponseBodyData extends $tea.Model {
  analysis?: GetDoctorHiveTableResponseBodyDataAnalysis;
  formats?: GetDoctorHiveTableResponseBodyDataFormats[];
  metrics?: GetDoctorHiveTableResponseBodyDataMetrics;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveTableResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveTableResponseBodyDataFormats },
      metrics: GetDoctorHiveTableResponseBodyDataMetrics,
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobResponseBodyDataMetricsMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobResponseBodyDataMetricsVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobResponseBodyDataMetrics extends $tea.Model {
  memSeconds?: GetDoctorJobResponseBodyDataMetricsMemSeconds;
  vcoreSeconds?: GetDoctorJobResponseBodyDataMetricsVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorJobResponseBodyDataMetricsMemSeconds,
      vcoreSeconds: GetDoctorJobResponseBodyDataMetricsVcoreSeconds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorJobResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  elapsedTime?: number;
  finalStatus?: string;
  finishTime?: number;
  launchTime?: number;
  metrics?: GetDoctorJobResponseBodyDataMetrics;
  queue?: string;
  startTime?: number;
  state?: string;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      elapsedTime: 'ElapsedTime',
      finalStatus: 'FinalStatus',
      finishTime: 'FinishTime',
      launchTime: 'LaunchTime',
      metrics: 'Metrics',
      queue: 'Queue',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      elapsedTime: 'number',
      finalStatus: 'string',
      finishTime: 'number',
      launchTime: 'number',
      metrics: GetDoctorJobResponseBodyDataMetrics,
      queue: 'string',
      startTime: 'number',
      state: 'string',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorReportComponentSummaryResponseBodyData extends $tea.Model {
  score?: number;
  suggestion?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationConfigsResponseBodyApplicationConfigs extends $tea.Model {
  applicationName?: string;
  configEffectState?: string;
  configFileName?: string;
  configItemKey?: string;
  configItemValue?: string;
  createTime?: number;
  custom?: boolean;
  description?: string;
  initValue?: string;
  modifier?: string;
  nodeGroupId?: string;
  nodeId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      configEffectState: 'ConfigEffectState',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
      createTime: 'CreateTime',
      custom: 'Custom',
      description: 'Description',
      initValue: 'InitValue',
      modifier: 'Modifier',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      configEffectState: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
      createTime: 'number',
      custom: 'boolean',
      description: 'string',
      initValue: 'string',
      modifier: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  applicationName?: string;
  applicationState?: string;
  applicationVersion?: string;
  communityVersion?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationState: 'ApplicationState',
      applicationVersion: 'ApplicationVersion',
      communityVersion: 'CommunityVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationState: 'string',
      applicationVersion: 'string',
      communityVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoScalingActivitiesResponseBodyScalingActivities extends $tea.Model {
  activityId?: string;
  activityState?: string;
  activityType?: string;
  clusterId?: string;
  description?: string;
  endTime?: number;
  expectNum?: number;
  nodeGroupId?: string;
  nodeGroupName?: string;
  operationId?: string;
  ruleName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityState: 'ActivityState',
      activityType: 'ActivityType',
      clusterId: 'ClusterId',
      description: 'Description',
      endTime: 'EndTime',
      expectNum: 'ExpectNum',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      operationId: 'OperationId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityState: 'string',
      activityType: 'string',
      clusterId: 'string',
      description: 'string',
      endTime: 'number',
      expectNum: 'number',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      operationId: 'string',
      ruleName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentInstancesResponseBodyComponentInstances extends $tea.Model {
  applicationName?: string;
  bizState?: string;
  commissionState?: string;
  componentInstanceState?: string;
  componentName?: string;
  createTime?: number;
  desiredState?: string;
  nodeId?: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      bizState: 'BizState',
      commissionState: 'CommissionState',
      componentInstanceState: 'ComponentInstanceState',
      componentName: 'ComponentName',
      createTime: 'CreateTime',
      desiredState: 'DesiredState',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      bizState: 'string',
      commissionState: 'string',
      componentInstanceState: 'string',
      componentName: 'string',
      createTime: 'number',
      desiredState: 'string',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponents extends $tea.Model {
  applicationName?: string;
  attributes?: Attribute[];
  componentName?: string;
  namespace?: string;
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      attributes: 'Attributes',
      componentName: 'ComponentName',
      namespace: 'Namespace',
      replica: 'Replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      attributes: { 'type': 'array', 'itemType': Attribute },
      componentName: 'string',
      namespace: 'string',
      replica: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyDataAnalysis extends $tea.Model {
  score?: number;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyDataMetricsMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyDataMetricsMemUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyDataMetrics extends $tea.Model {
  memSeconds?: ListDoctorApplicationsResponseBodyDataMetricsMemSeconds;
  memUtilization?: ListDoctorApplicationsResponseBodyDataMetricsMemUtilization;
  vcoreSeconds?: ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds;
  vcoreUtilization?: ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memUtilization: 'MemUtilization',
      vcoreSeconds: 'VcoreSeconds',
      vcoreUtilization: 'VcoreUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: ListDoctorApplicationsResponseBodyDataMetricsMemSeconds,
      memUtilization: ListDoctorApplicationsResponseBodyDataMetricsMemUtilization,
      vcoreSeconds: ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds,
      vcoreUtilization: ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorApplicationsResponseBodyData extends $tea.Model {
  analysis?: ListDoctorApplicationsResponseBodyDataAnalysis;
  appId?: string;
  appName?: string;
  endTime?: number;
  ids?: string[];
  metrics?: ListDoctorApplicationsResponseBodyDataMetrics;
  querySql?: string;
  queue?: string;
  startTime?: number;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      appId: 'AppId',
      appName: 'AppName',
      endTime: 'EndTime',
      ids: 'Ids',
      metrics: 'Metrics',
      querySql: 'QuerySql',
      queue: 'Queue',
      startTime: 'StartTime',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorApplicationsResponseBodyDataAnalysis,
      appId: 'string',
      appName: 'string',
      endTime: 'number',
      ids: { 'type': 'array', 'itemType': 'string' },
      metrics: ListDoctorApplicationsResponseBodyDataMetrics,
      querySql: 'string',
      queue: 'string',
      startTime: 'number',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataAnalysis extends $tea.Model {
  healthyJobCount?: number;
  needAttentionJobCount?: number;
  score?: number;
  scoreDayGrowthRatio?: number;
  subHealthyJobCount?: number;
  unhealthyJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthyJobCount: 'HealthyJobCount',
      needAttentionJobCount: 'NeedAttentionJobCount',
      score: 'Score',
      scoreDayGrowthRatio: 'ScoreDayGrowthRatio',
      subHealthyJobCount: 'SubHealthyJobCount',
      unhealthyJobCount: 'UnhealthyJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyJobCount: 'number',
      needAttentionJobCount: 'number',
      score: 'number',
      scoreDayGrowthRatio: 'number',
      subHealthyJobCount: 'number',
      unhealthyJobCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsReadSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetrics extends $tea.Model {
  memSeconds?: ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds;
  memSecondsDayGrowthRatio?: ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio;
  memUtilization?: ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization;
  readSize?: ListDoctorComputeSummaryResponseBodyDataMetricsReadSize;
  vcoreSeconds?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds;
  vcoreSecondsDayGrowthRatio?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio;
  vcoreUtilization?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization;
  writeSize?: ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memSecondsDayGrowthRatio: 'MemSecondsDayGrowthRatio',
      memUtilization: 'MemUtilization',
      readSize: 'ReadSize',
      vcoreSeconds: 'VcoreSeconds',
      vcoreSecondsDayGrowthRatio: 'VcoreSecondsDayGrowthRatio',
      vcoreUtilization: 'VcoreUtilization',
      writeSize: 'WriteSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds,
      memSecondsDayGrowthRatio: ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio,
      memUtilization: ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization,
      readSize: ListDoctorComputeSummaryResponseBodyDataMetricsReadSize,
      vcoreSeconds: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds,
      vcoreSecondsDayGrowthRatio: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio,
      vcoreUtilization: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization,
      writeSize: ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyData extends $tea.Model {
  analysis?: ListDoctorComputeSummaryResponseBodyDataAnalysis;
  componentName?: string;
  metrics?: ListDoctorComputeSummaryResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      componentName: 'ComponentName',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorComputeSummaryResponseBodyDataAnalysis,
      componentName: 'string',
      metrics: ListDoctorComputeSummaryResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetrics extends $tea.Model {
  avgGc?: ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc;
  cacheRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio;
  dailyReadRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest;
  dailyReadRequestDayGrowthRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  dailyWriteRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest;
  dailyWriteRequestDayGrowthRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  regionCount?: ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount;
  totalReadRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest;
  totalRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest;
  totalWriteRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgGc: 'AvgGc',
      cacheRatio: 'CacheRatio',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      regionCount: 'RegionCount',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgGc: ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc,
      cacheRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio,
      dailyReadRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      regionCount: ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount,
      totalReadRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest,
      totalRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyData extends $tea.Model {
  metrics?: ListDoctorHBaseRegionServersResponseBodyDataMetrics;
  regionServerHost?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      regionServerHost: 'RegionServerHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: ListDoctorHBaseRegionServersResponseBodyDataMetrics,
      regionServerHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataAnalysis extends $tea.Model {
  readRequestHotspotRegionList?: string[];
  readRequestUnbalanceSuggestion?: string;
  requestHotspotRegionList?: string[];
  requestUnbalanceSuggestion?: string;
  tableScore?: number;
  writeRequestHotspotRegionList?: string[];
  writeRequestUnbalanceSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      readRequestHotspotRegionList: 'ReadRequestHotspotRegionList',
      readRequestUnbalanceSuggestion: 'ReadRequestUnbalanceSuggestion',
      requestHotspotRegionList: 'RequestHotspotRegionList',
      requestUnbalanceSuggestion: 'RequestUnbalanceSuggestion',
      tableScore: 'TableScore',
      writeRequestHotspotRegionList: 'WriteRequestHotspotRegionList',
      writeRequestUnbalanceSuggestion: 'WriteRequestUnbalanceSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      readRequestUnbalanceSuggestion: 'string',
      requestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      requestUnbalanceSuggestion: 'string',
      tableScore: 'number',
      writeRequestHotspotRegionList: { 'type': 'array', 'itemType': 'string' },
      writeRequestUnbalanceSuggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsLocality extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsTableSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyDataMetrics extends $tea.Model {
  coldAccessDay?: ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay;
  coldConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay;
  coldDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize;
  dailyReadRequest?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest;
  dailyReadRequestDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  dailyWriteRequest?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest;
  dailyWriteRequestDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  freezeConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay;
  freezeDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize;
  hotDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize;
  locality?: ListDoctorHBaseTablesResponseBodyDataMetricsLocality;
  readRequestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance;
  regionBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance;
  regionCount?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount;
  regionCountDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio;
  regionServerCount?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount;
  requestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance;
  storeFileCount?: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount;
  storeFileCountDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio;
  tableSize?: ListDoctorHBaseTablesResponseBodyDataMetricsTableSize;
  tableSizeDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio;
  warmConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay;
  warmDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize;
  writeRequestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance;
  static names(): { [key: string]: string } {
    return {
      coldAccessDay: 'ColdAccessDay',
      coldConfigDay: 'ColdConfigDay',
      coldDataSize: 'ColdDataSize',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      freezeConfigDay: 'FreezeConfigDay',
      freezeDataSize: 'FreezeDataSize',
      hotDataSize: 'HotDataSize',
      locality: 'Locality',
      readRequestBalance: 'ReadRequestBalance',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionCountDayGrowthRatio: 'RegionCountDayGrowthRatio',
      regionServerCount: 'RegionServerCount',
      requestBalance: 'RequestBalance',
      storeFileCount: 'StoreFileCount',
      storeFileCountDayGrowthRatio: 'StoreFileCountDayGrowthRatio',
      tableSize: 'TableSize',
      tableSizeDayGrowthRatio: 'TableSizeDayGrowthRatio',
      warmConfigDay: 'WarmConfigDay',
      warmDataSize: 'WarmDataSize',
      writeRequestBalance: 'WriteRequestBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldAccessDay: ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay,
      coldConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay,
      coldDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize,
      dailyReadRequest: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      freezeConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay,
      freezeDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize,
      hotDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize,
      locality: ListDoctorHBaseTablesResponseBodyDataMetricsLocality,
      readRequestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance,
      regionBalance: ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance,
      regionCount: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount,
      regionCountDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio,
      regionServerCount: ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount,
      requestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance,
      storeFileCount: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount,
      storeFileCountDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio,
      tableSize: ListDoctorHBaseTablesResponseBodyDataMetricsTableSize,
      tableSizeDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio,
      warmConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay,
      warmDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize,
      writeRequestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseTablesResponseBodyData extends $tea.Model {
  analysis?: ListDoctorHBaseTablesResponseBodyDataAnalysis;
  metrics?: ListDoctorHBaseTablesResponseBodyDataMetrics;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHBaseTablesResponseBodyDataAnalysis,
      metrics: ListDoctorHBaseTablesResponseBodyDataMetrics,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileDayGrowthCount;
  freezeDataDayGrowthSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileDayGrowthCount;
  mediumFileCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileDayGrowthCount;
  smallFileCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileDayGrowthCount;
  tinyFileCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileDayGrowthCount;
  totalDataDayGrowthSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataSize?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsEmptyFileDayGrowthCount,
      freezeDataDayGrowthSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsLargeFileDayGrowthCount,
      mediumFileCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsMediumFileDayGrowthCount,
      smallFileCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsSmallFileDayGrowthCount,
      tinyFileCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTinyFileDayGrowthCount,
      totalDataDayGrowthSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: ListDoctorHDFSDirectoriesResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataSize: ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: ListDoctorHDFSDirectoriesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSDirectoriesResponseBodyData extends $tea.Model {
  depth?: number;
  dirPath?: string;
  group?: string;
  metrics?: ListDoctorHDFSDirectoriesResponseBodyDataMetrics;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      dirPath: 'DirPath',
      group: 'Group',
      metrics: 'Metrics',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      dirPath: 'string',
      group: 'string',
      metrics: ListDoctorHDFSDirectoriesResponseBodyDataMetrics,
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyDataMetrics extends $tea.Model {
  totalDataSize?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize;
  totalDirCount?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount;
  totalFileCount?: ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount;
  static names(): { [key: string]: string } {
    return {
      totalDataSize: 'TotalDataSize',
      totalDirCount: 'TotalDirCount',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDataSize: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDataSize,
      totalDirCount: ListDoctorHDFSUGIResponseBodyDataMetricsTotalDirCount,
      totalFileCount: ListDoctorHDFSUGIResponseBodyDataMetricsTotalFileCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHDFSUGIResponseBodyData extends $tea.Model {
  metrics?: ListDoctorHDFSUGIResponseBodyDataMetrics;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: ListDoctorHDFSUGIResponseBodyDataMetrics,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataAnalysis extends $tea.Model {
  hiveDistributionScore?: number;
  hiveFormatScore?: number;
  hiveFrequencyScore?: number;
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataFormats extends $tea.Model {
  formatDayGrowthSize?: number;
  formatName?: string;
  formatRatio?: number;
  formatSize?: number;
  formatSizeDayGrowthRatio?: number;
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatDayGrowthSize: 'FormatDayGrowthSize',
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeDayGrowthRatio: 'FormatSizeDayGrowthRatio',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDayGrowthSize: 'number',
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeDayGrowthRatio: 'number',
      formatSizeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsPartitionNum extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTableCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataRatio;
  coldDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileDayGrowthCount;
  emptyFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileRatio;
  freezeDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataRatio;
  freezeDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataRatio;
  hotDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileDayGrowthCount;
  largeFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileRatio;
  mediumFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileDayGrowthCount;
  mediumFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileRatio;
  partitionNum?: ListDoctorHiveDatabasesResponseBodyDataMetricsPartitionNum;
  smallFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileDayGrowthCount;
  smallFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileRatio;
  tableCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTableCount;
  tinyFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileDayGrowthCount;
  tinyFileRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileRatio;
  totalDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataRatio;
  warmDataSize?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      partitionNum: 'PartitionNum',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tableCount: 'TableCount',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataRatio,
      coldDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataRatio,
      hotDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsMediumFileRatio,
      partitionNum: ListDoctorHiveDatabasesResponseBodyDataMetricsPartitionNum,
      smallFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsSmallFileRatio,
      tableCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTableCount,
      tinyFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: ListDoctorHiveDatabasesResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: ListDoctorHiveDatabasesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveDatabasesResponseBodyData extends $tea.Model {
  analysis?: ListDoctorHiveDatabasesResponseBodyDataAnalysis;
  databaseName?: string;
  formats?: ListDoctorHiveDatabasesResponseBodyDataFormats[];
  metrics?: ListDoctorHiveDatabasesResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      databaseName: 'DatabaseName',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHiveDatabasesResponseBodyDataAnalysis,
      databaseName: 'string',
      formats: { 'type': 'array', 'itemType': ListDoctorHiveDatabasesResponseBodyDataFormats },
      metrics: ListDoctorHiveDatabasesResponseBodyDataMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataAnalysis extends $tea.Model {
  hiveDistributionScore?: number;
  hiveFormatScore?: number;
  hiveFrequencyScore?: number;
  hiveScore?: number;
  static names(): { [key: string]: string } {
    return {
      hiveDistributionScore: 'HiveDistributionScore',
      hiveFormatScore: 'HiveFormatScore',
      hiveFrequencyScore: 'HiveFrequencyScore',
      hiveScore: 'HiveScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveDistributionScore: 'number',
      hiveFormatScore: 'number',
      hiveFrequencyScore: 'number',
      hiveScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataFormats extends $tea.Model {
  formatDayGrowthSize?: number;
  formatName?: string;
  formatRatio?: number;
  formatSize?: number;
  formatSizeDayGrowthRatio?: number;
  formatSizeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      formatDayGrowthSize: 'FormatDayGrowthSize',
      formatName: 'FormatName',
      formatRatio: 'FormatRatio',
      formatSize: 'FormatSize',
      formatSizeDayGrowthRatio: 'FormatSizeDayGrowthRatio',
      formatSizeUnit: 'FormatSizeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDayGrowthSize: 'number',
      formatName: 'string',
      formatRatio: 'number',
      formatSize: 'number',
      formatSizeDayGrowthRatio: 'number',
      formatSizeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsColdDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsHotDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsLargeFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsMediumFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsPartitionNum extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsSmallFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTinyFileRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCountDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsTotalFileDayGrowthCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataDayGrowthSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSize extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyDataMetrics extends $tea.Model {
  coldDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataDayGrowthSize;
  coldDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataRatio;
  coldDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSize;
  coldDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  emptyFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCount;
  emptyFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  emptyFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileDayGrowthCount;
  emptyFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileRatio;
  freezeDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataDayGrowthSize;
  freezeDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataRatio;
  freezeDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSize;
  freezeDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  hotDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataDayGrowthSize;
  hotDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataRatio;
  hotDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSize;
  hotDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  largeFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCount;
  largeFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  largeFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileDayGrowthCount;
  largeFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileRatio;
  mediumFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCount;
  mediumFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  mediumFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileDayGrowthCount;
  mediumFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileRatio;
  partitionNum?: ListDoctorHiveTablesResponseBodyDataMetricsPartitionNum;
  smallFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCount;
  smallFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  smallFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileDayGrowthCount;
  smallFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileRatio;
  tinyFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCount;
  tinyFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  tinyFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileDayGrowthCount;
  tinyFileRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileRatio;
  totalDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataDayGrowthSize;
  totalDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSize;
  totalDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  totalFileCount?: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCount;
  totalFileCountDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  totalFileDayGrowthCount?: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileDayGrowthCount;
  warmDataDayGrowthSize?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataDayGrowthSize;
  warmDataRatio?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataRatio;
  warmDataSize?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSize;
  warmDataSizeDayGrowthRatio?: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataRatio: 'ColdDataRatio',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      emptyFileRatio: 'EmptyFileRatio',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataRatio: 'FreezeDataRatio',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataRatio: 'HotDataRatio',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      largeFileRatio: 'LargeFileRatio',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      mediumFileRatio: 'MediumFileRatio',
      partitionNum: 'PartitionNum',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      smallFileRatio: 'SmallFileRatio',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      tinyFileRatio: 'TinyFileRatio',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataRatio: 'WarmDataRatio',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsColdDataRatio,
      coldDataSize: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileDayGrowthCount,
      emptyFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsEmptyFileRatio,
      freezeDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataRatio,
      freezeDataSize: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsHotDataRatio,
      hotDataSize: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileDayGrowthCount,
      largeFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsLargeFileRatio,
      mediumFileCount: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileDayGrowthCount,
      mediumFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsMediumFileRatio,
      partitionNum: ListDoctorHiveTablesResponseBodyDataMetricsPartitionNum,
      smallFileCount: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileDayGrowthCount,
      smallFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsSmallFileRatio,
      tinyFileCount: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileDayGrowthCount,
      tinyFileRatio: ListDoctorHiveTablesResponseBodyDataMetricsTinyFileRatio,
      totalDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: ListDoctorHiveTablesResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataRatio: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataRatio,
      warmDataSize: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: ListDoctorHiveTablesResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHiveTablesResponseBodyData extends $tea.Model {
  analysis?: ListDoctorHiveTablesResponseBodyDataAnalysis;
  formats?: ListDoctorHiveTablesResponseBodyDataFormats[];
  metrics?: ListDoctorHiveTablesResponseBodyDataMetrics;
  owner?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
      owner: 'Owner',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHiveTablesResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': ListDoctorHiveTablesResponseBodyDataFormats },
      metrics: ListDoctorHiveTablesResponseBodyDataMetrics,
      owner: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsRequestEndRange extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsRequestStartRange extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsResponseBodyDataMetricsMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsResponseBodyDataMetricsVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsResponseBodyDataMetrics extends $tea.Model {
  memSeconds?: ListDoctorJobsResponseBodyDataMetricsMemSeconds;
  vcoreSeconds?: ListDoctorJobsResponseBodyDataMetricsVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: ListDoctorJobsResponseBodyDataMetricsMemSeconds,
      vcoreSeconds: ListDoctorJobsResponseBodyDataMetricsVcoreSeconds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  elapsedTime?: number;
  finalStatus?: string;
  finishTime?: number;
  launchTime?: number;
  metrics?: ListDoctorJobsResponseBodyDataMetrics;
  queue?: string;
  startTime?: number;
  state?: string;
  type?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      elapsedTime: 'ElapsedTime',
      finalStatus: 'FinalStatus',
      finishTime: 'FinishTime',
      launchTime: 'LaunchTime',
      metrics: 'Metrics',
      queue: 'Queue',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      elapsedTime: 'number',
      finalStatus: 'string',
      finishTime: 'number',
      launchTime: 'number',
      metrics: ListDoctorJobsResponseBodyDataMetrics,
      queue: 'string',
      startTime: 'number',
      state: 'string',
      type: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsRequestEndRange extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsRequestStartRange extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsResponseBodyDataAppsCount extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsResponseBodyDataMemSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsResponseBodyDataVcoreSeconds extends $tea.Model {
  description?: string;
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsResponseBodyData extends $tea.Model {
  appsCount?: ListDoctorJobsStatsResponseBodyDataAppsCount;
  memSeconds?: ListDoctorJobsStatsResponseBodyDataMemSeconds;
  queue?: string;
  type?: string;
  user?: string;
  vcoreSeconds?: ListDoctorJobsStatsResponseBodyDataVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      appsCount: 'AppsCount',
      memSeconds: 'MemSeconds',
      queue: 'Queue',
      type: 'Type',
      user: 'User',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appsCount: ListDoctorJobsStatsResponseBodyDataAppsCount,
      memSeconds: ListDoctorJobsStatsResponseBodyDataMemSeconds,
      queue: 'string',
      type: 'string',
      user: 'string',
      vcoreSeconds: ListDoctorJobsStatsResponseBodyDataVcoreSeconds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorReportsResponseBodyDataSummaryReport extends $tea.Model {
  score?: number;
  suggestion?: string;
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
      summary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorReportsResponseBodyData extends $tea.Model {
  componentTypes?: string[];
  dateTime?: string;
  summaryReport?: ListDoctorReportsResponseBodyDataSummaryReport;
  static names(): { [key: string]: string } {
    return {
      componentTypes: 'ComponentTypes',
      dateTime: 'DateTime',
      summaryReport: 'SummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentTypes: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      summaryReport: ListDoctorReportsResponseBodyDataSummaryReport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReleaseVersionsResponseBodyReleaseVersions extends $tea.Model {
  iaasType?: string;
  releaseVersion?: string;
  series?: string;
  static names(): { [key: string]: string } {
    return {
      iaasType: 'IaasType',
      releaseVersion: 'ReleaseVersion',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iaasType: 'string',
      releaseVersion: 'string',
      series: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBodyScripts extends $tea.Model {
  action?: string;
  endTime?: number;
  executionFailStrategy?: string;
  executionMoment?: string;
  executionState?: string;
  lastUpdateTime?: number;
  nodeSelector?: NodeSelector;
  regionId?: string;
  scriptArgs?: string;
  scriptId?: string;
  scriptName?: string;
  scriptPath?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      endTime: 'EndTime',
      executionFailStrategy: 'ExecutionFailStrategy',
      executionMoment: 'ExecutionMoment',
      executionState: 'ExecutionState',
      lastUpdateTime: 'LastUpdateTime',
      nodeSelector: 'NodeSelector',
      regionId: 'RegionId',
      scriptArgs: 'ScriptArgs',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptPath: 'ScriptPath',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      endTime: 'number',
      executionFailStrategy: 'string',
      executionMoment: 'string',
      executionState: 'string',
      lastUpdateTime: 'number',
      nodeSelector: NodeSelector,
      regionId: 'string',
      scriptArgs: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptPath: 'string',
      startTime: 'number',
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

export class RunApplicationActionResponseBodyAbnInstances extends $tea.Model {
  nodeId?: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      nodeName: 'string',
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

    if (!Util.isUnset(request.nodeAttributes)) {
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

    if (!Util.isUnset(request.subscriptionConfig)) {
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
    * 创建节点组。
    *
    * @param request CreateNodeGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNodeGroupResponse
   */
  async createNodeGroupWithOptions(request: CreateNodeGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.nodeGroup)) {
      query["NodeGroup"] = request.nodeGroup;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNodeGroup",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeGroupResponse>(await this.callApi(params, req, runtime), new CreateNodeGroupResponse({}));
  }

  /**
    * 创建节点组。
    *
    * @param request CreateNodeGroupRequest
    * @return CreateNodeGroupResponse
   */
  async createNodeGroup(request: CreateNodeGroupRequest): Promise<CreateNodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeGroupWithOptions(request, runtime);
  }

  /**
    * 缩容节点。
    *
    * @param request DecreaseNodesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DecreaseNodesResponse
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

  /**
    * 缩容节点。
    *
    * @param request DecreaseNodesRequest
    * @return DecreaseNodesResponse
   */
  async decreaseNodes(request: DecreaseNodesRequest): Promise<DecreaseNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decreaseNodesWithOptions(request, runtime);
  }

  /**
    * 创建集群模板
    *
    * @param request DeleteApiTemplateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteApiTemplateResponse
   */
  async deleteApiTemplateWithOptions(request: DeleteApiTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApiTemplateResponse>(await this.callApi(params, req, runtime), new DeleteApiTemplateResponse({}));
  }

  /**
    * 创建集群模板
    *
    * @param request DeleteApiTemplateRequest
    * @return DeleteApiTemplateResponse
   */
  async deleteApiTemplate(request: DeleteApiTemplateRequest): Promise<DeleteApiTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiTemplateWithOptions(request, runtime);
  }

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

  async getApiTemplateWithOptions(request: GetApiTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetApiTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApiTemplateResponse>(await this.callApi(params, req, runtime), new GetApiTemplateResponse({}));
  }

  async getApiTemplate(request: GetApiTemplateRequest): Promise<GetApiTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApiTemplateWithOptions(request, runtime);
  }

  /**
    * 查询应用详情。
    *
    * @param request GetApplicationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetApplicationResponse
   */
  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

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
      action: "GetApplication",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  /**
    * 查询应用详情。
    *
    * @param request GetApplicationRequest
    * @return GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
    * 获取弹性伸缩活动详情。
    *
    * @param request GetAutoScalingActivityRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAutoScalingActivityResponse
   */
  async getAutoScalingActivityWithOptions(request: GetAutoScalingActivityRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoScalingActivityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoScalingActivity",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoScalingActivityResponse>(await this.callApi(params, req, runtime), new GetAutoScalingActivityResponse({}));
  }

  /**
    * 获取弹性伸缩活动详情。
    *
    * @param request GetAutoScalingActivityRequest
    * @return GetAutoScalingActivityResponse
   */
  async getAutoScalingActivity(request: GetAutoScalingActivityRequest): Promise<GetAutoScalingActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoScalingActivityWithOptions(request, runtime);
  }

  async getAutoScalingPolicyWithOptions(request: GetAutoScalingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoScalingPolicyResponse> {
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
      action: "GetAutoScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoScalingPolicyResponse>(await this.callApi(params, req, runtime), new GetAutoScalingPolicyResponse({}));
  }

  async getAutoScalingPolicy(request: GetAutoScalingPolicyRequest): Promise<GetAutoScalingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoScalingPolicyWithOptions(request, runtime);
  }

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
    * get one doctor analysis app
    *
    * @param request GetDoctorApplicationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorApplicationResponse
   */
  async getDoctorApplicationWithOptions(request: GetDoctorApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorApplication",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorApplicationResponse>(await this.callApi(params, req, runtime), new GetDoctorApplicationResponse({}));
  }

  /**
    * get one doctor analysis app
    *
    * @param request GetDoctorApplicationRequest
    * @return GetDoctorApplicationResponse
   */
  async getDoctorApplication(request: GetDoctorApplicationRequest): Promise<GetDoctorApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorApplicationWithOptions(request, runtime);
  }

  /**
    * get one specific luster engine queue by <type, name>
    *
    * @param request GetDoctorComputeSummaryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorComputeSummaryResponse
   */
  async getDoctorComputeSummaryWithOptions(request: GetDoctorComputeSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorComputeSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentInfo)) {
      query["ComponentInfo"] = request.componentInfo;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorComputeSummary",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorComputeSummaryResponse>(await this.callApi(params, req, runtime), new GetDoctorComputeSummaryResponse({}));
  }

  /**
    * get one specific luster engine queue by <type, name>
    *
    * @param request GetDoctorComputeSummaryRequest
    * @return GetDoctorComputeSummaryResponse
   */
  async getDoctorComputeSummary(request: GetDoctorComputeSummaryRequest): Promise<GetDoctorComputeSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorComputeSummaryWithOptions(request, runtime);
  }

  /**
    * get Doctor HBaseCluster
    *
    * @param request GetDoctorHBaseClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHBaseClusterResponse
   */
  async getDoctorHBaseClusterWithOptions(request: GetDoctorHBaseClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHBaseClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHBaseCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHBaseClusterResponse>(await this.callApi(params, req, runtime), new GetDoctorHBaseClusterResponse({}));
  }

  /**
    * get Doctor HBaseCluster
    *
    * @param request GetDoctorHBaseClusterRequest
    * @return GetDoctorHBaseClusterResponse
   */
  async getDoctorHBaseCluster(request: GetDoctorHBaseClusterRequest): Promise<GetDoctorHBaseClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHBaseClusterWithOptions(request, runtime);
  }

  /**
    * list Doctor HBaseRegions
    *
    * @param request GetDoctorHBaseRegionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHBaseRegionResponse
   */
  async getDoctorHBaseRegionWithOptions(request: GetDoctorHBaseRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHBaseRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.hbaseRegionId)) {
      query["HbaseRegionId"] = request.hbaseRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHBaseRegion",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHBaseRegionResponse>(await this.callApi(params, req, runtime), new GetDoctorHBaseRegionResponse({}));
  }

  /**
    * list Doctor HBaseRegions
    *
    * @param request GetDoctorHBaseRegionRequest
    * @return GetDoctorHBaseRegionResponse
   */
  async getDoctorHBaseRegion(request: GetDoctorHBaseRegionRequest): Promise<GetDoctorHBaseRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHBaseRegionWithOptions(request, runtime);
  }

  /**
    * get Doctor HBaseRegionServer
    *
    * @param request GetDoctorHBaseRegionServerRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHBaseRegionServerResponse
   */
  async getDoctorHBaseRegionServerWithOptions(request: GetDoctorHBaseRegionServerRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHBaseRegionServerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionServerHost)) {
      query["RegionServerHost"] = request.regionServerHost;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHBaseRegionServer",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHBaseRegionServerResponse>(await this.callApi(params, req, runtime), new GetDoctorHBaseRegionServerResponse({}));
  }

  /**
    * get Doctor HBaseRegionServer
    *
    * @param request GetDoctorHBaseRegionServerRequest
    * @return GetDoctorHBaseRegionServerResponse
   */
  async getDoctorHBaseRegionServer(request: GetDoctorHBaseRegionServerRequest): Promise<GetDoctorHBaseRegionServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHBaseRegionServerWithOptions(request, runtime);
  }

  /**
    * get Doctor HBaseTable
    *
    * @param request GetDoctorHBaseTableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHBaseTableResponse
   */
  async getDoctorHBaseTableWithOptions(request: GetDoctorHBaseTableRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHBaseTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHBaseTable",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHBaseTableResponse>(await this.callApi(params, req, runtime), new GetDoctorHBaseTableResponse({}));
  }

  /**
    * get Doctor HBaseTable
    *
    * @param request GetDoctorHBaseTableRequest
    * @return GetDoctorHBaseTableResponse
   */
  async getDoctorHBaseTable(request: GetDoctorHBaseTableRequest): Promise<GetDoctorHBaseTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHBaseTableWithOptions(request, runtime);
  }

  /**
    * list Doctor HBaseTableRegions
    *
    * @param request GetDoctorHDFSClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHDFSClusterResponse
   */
  async getDoctorHDFSClusterWithOptions(request: GetDoctorHDFSClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHDFSClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHDFSCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHDFSClusterResponse>(await this.callApi(params, req, runtime), new GetDoctorHDFSClusterResponse({}));
  }

  /**
    * list Doctor HBaseTableRegions
    *
    * @param request GetDoctorHDFSClusterRequest
    * @return GetDoctorHDFSClusterResponse
   */
  async getDoctorHDFSCluster(request: GetDoctorHDFSClusterRequest): Promise<GetDoctorHDFSClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHDFSClusterWithOptions(request, runtime);
  }

  /**
    * get Doctor HDFSNode
    *
    * @param request GetDoctorHDFSDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHDFSDirectoryResponse
   */
  async getDoctorHDFSDirectoryWithOptions(request: GetDoctorHDFSDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHDFSDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.dirPath)) {
      query["DirPath"] = request.dirPath;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHDFSDirectory",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHDFSDirectoryResponse>(await this.callApi(params, req, runtime), new GetDoctorHDFSDirectoryResponse({}));
  }

  /**
    * get Doctor HDFSNode
    *
    * @param request GetDoctorHDFSDirectoryRequest
    * @return GetDoctorHDFSDirectoryResponse
   */
  async getDoctorHDFSDirectory(request: GetDoctorHDFSDirectoryRequest): Promise<GetDoctorHDFSDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHDFSDirectoryWithOptions(request, runtime);
  }

  /**
    * get Doctor HDFS UGI
    *
    * @param request GetDoctorHDFSUGIRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHDFSUGIResponse
   */
  async getDoctorHDFSUGIWithOptions(request: GetDoctorHDFSUGIRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHDFSUGIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHDFSUGI",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHDFSUGIResponse>(await this.callApi(params, req, runtime), new GetDoctorHDFSUGIResponse({}));
  }

  /**
    * get Doctor HDFS UGI
    *
    * @param request GetDoctorHDFSUGIRequest
    * @return GetDoctorHDFSUGIResponse
   */
  async getDoctorHDFSUGI(request: GetDoctorHDFSUGIRequest): Promise<GetDoctorHDFSUGIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHDFSUGIWithOptions(request, runtime);
  }

  /**
    * list Doctor Hive Cluster
    *
    * @param request GetDoctorHiveClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHiveClusterResponse
   */
  async getDoctorHiveClusterWithOptions(request: GetDoctorHiveClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHiveClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHiveCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHiveClusterResponse>(await this.callApi(params, req, runtime), new GetDoctorHiveClusterResponse({}));
  }

  /**
    * list Doctor Hive Cluster
    *
    * @param request GetDoctorHiveClusterRequest
    * @return GetDoctorHiveClusterResponse
   */
  async getDoctorHiveCluster(request: GetDoctorHiveClusterRequest): Promise<GetDoctorHiveClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHiveClusterWithOptions(request, runtime);
  }

  /**
    * get Doctor Hive Database
    *
    * @param request GetDoctorHiveDatabaseRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHiveDatabaseResponse
   */
  async getDoctorHiveDatabaseWithOptions(request: GetDoctorHiveDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHiveDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHiveDatabase",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHiveDatabaseResponse>(await this.callApi(params, req, runtime), new GetDoctorHiveDatabaseResponse({}));
  }

  /**
    * get Doctor Hive Database
    *
    * @param request GetDoctorHiveDatabaseRequest
    * @return GetDoctorHiveDatabaseResponse
   */
  async getDoctorHiveDatabase(request: GetDoctorHiveDatabaseRequest): Promise<GetDoctorHiveDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHiveDatabaseWithOptions(request, runtime);
  }

  /**
    * get Doctor Hive Table
    *
    * @param request GetDoctorHiveTableRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorHiveTableResponse
   */
  async getDoctorHiveTableWithOptions(request: GetDoctorHiveTableRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorHiveTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorHiveTable",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorHiveTableResponse>(await this.callApi(params, req, runtime), new GetDoctorHiveTableResponse({}));
  }

  /**
    * get Doctor Hive Table
    *
    * @param request GetDoctorHiveTableRequest
    * @return GetDoctorHiveTableResponse
   */
  async getDoctorHiveTable(request: GetDoctorHiveTableRequest): Promise<GetDoctorHiveTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorHiveTableWithOptions(request, runtime);
  }

  /**
    * Get realtime job by yarn
    *
    * @param request GetDoctorJobRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorJobResponse
   */
  async getDoctorJobWithOptions(request: GetDoctorJobRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

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
      action: "GetDoctorJob",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorJobResponse>(await this.callApi(params, req, runtime), new GetDoctorJobResponse({}));
  }

  /**
    * Get realtime job by yarn
    *
    * @param request GetDoctorJobRequest
    * @return GetDoctorJobResponse
   */
  async getDoctorJob(request: GetDoctorJobRequest): Promise<GetDoctorJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorJobWithOptions(request, runtime);
  }

  /**
    * get specify component's report analysis by emr doctor
    *
    * @param request GetDoctorReportComponentSummaryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDoctorReportComponentSummaryResponse
   */
  async getDoctorReportComponentSummaryWithOptions(request: GetDoctorReportComponentSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetDoctorReportComponentSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentType)) {
      query["ComponentType"] = request.componentType;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDoctorReportComponentSummary",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDoctorReportComponentSummaryResponse>(await this.callApi(params, req, runtime), new GetDoctorReportComponentSummaryResponse({}));
  }

  /**
    * get specify component's report analysis by emr doctor
    *
    * @param request GetDoctorReportComponentSummaryRequest
    * @return GetDoctorReportComponentSummaryResponse
   */
  async getDoctorReportComponentSummary(request: GetDoctorReportComponentSummaryRequest): Promise<GetDoctorReportComponentSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDoctorReportComponentSummaryWithOptions(request, runtime);
  }

  /**
    * 获取节点组详情。
    *
    * @param request GetNodeGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetNodeGroupResponse
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

  /**
    * 获取节点组详情。
    *
    * @param request GetNodeGroupRequest
    * @return GetNodeGroupResponse
   */
  async getNodeGroup(request: GetNodeGroupRequest): Promise<GetNodeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeGroupWithOptions(request, runtime);
  }

  /**
    * 获取操作详情。
    *
    * @param request GetOperationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetOperationResponse
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

  /**
    * 获取操作详情。
    *
    * @param request GetOperationRequest
    * @return GetOperationResponse
   */
  async getOperation(request: GetOperationRequest): Promise<GetOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.minIncreaseNodeCount)) {
      query["MinIncreaseNodeCount"] = request.minIncreaseNodeCount;
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

  async listApiTemplatesWithOptions(request: ListApiTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListApiTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
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

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApiTemplates",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApiTemplatesResponse>(await this.callApi(params, req, runtime), new ListApiTemplatesResponse({}));
  }

  async listApiTemplates(request: ListApiTemplatesRequest): Promise<ListApiTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApiTemplatesWithOptions(request, runtime);
  }

  /**
    * 查询应用配置。
    *
    * @param request ListApplicationConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListApplicationConfigsResponse
   */
  async listApplicationConfigsWithOptions(request: ListApplicationConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.configFileName)) {
      query["ConfigFileName"] = request.configFileName;
    }

    if (!Util.isUnset(request.configItemKey)) {
      query["ConfigItemKey"] = request.configItemKey;
    }

    if (!Util.isUnset(request.configItemValue)) {
      query["ConfigItemValue"] = request.configItemValue;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationConfigs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationConfigsResponse>(await this.callApi(params, req, runtime), new ListApplicationConfigsResponse({}));
  }

  /**
    * 查询应用配置。
    *
    * @param request ListApplicationConfigsRequest
    * @return ListApplicationConfigsResponse
   */
  async listApplicationConfigs(request: ListApplicationConfigsRequest): Promise<ListApplicationConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationConfigsWithOptions(request, runtime);
  }

  /**
    * 查询应用列表。
    *
    * @param request ListApplicationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationNames)) {
      query["ApplicationNames"] = request.applicationNames;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  /**
    * 查询应用列表。
    *
    * @param request ListApplicationsRequest
    * @return ListApplicationsResponse
   */
  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
    * 查询弹性伸缩活动列表。
    *
    * @param request ListAutoScalingActivitiesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAutoScalingActivitiesResponse
   */
  async listAutoScalingActivitiesWithOptions(request: ListAutoScalingActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListAutoScalingActivitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scalingActivityStates)) {
      query["ScalingActivityStates"] = request.scalingActivityStates;
    }

    if (!Util.isUnset(request.scalingActivityType)) {
      query["ScalingActivityType"] = request.scalingActivityType;
    }

    if (!Util.isUnset(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAutoScalingActivities",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAutoScalingActivitiesResponse>(await this.callApi(params, req, runtime), new ListAutoScalingActivitiesResponse({}));
  }

  /**
    * 查询弹性伸缩活动列表。
    *
    * @param request ListAutoScalingActivitiesRequest
    * @return ListAutoScalingActivitiesResponse
   */
  async listAutoScalingActivities(request: ListAutoScalingActivitiesRequest): Promise<ListAutoScalingActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoScalingActivitiesWithOptions(request, runtime);
  }

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
    * 查询组件实例列表。
    *
    * @param request ListComponentInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListComponentInstancesResponse
   */
  async listComponentInstancesWithOptions(request: ListComponentInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListComponentInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationNames)) {
      query["ApplicationNames"] = request.applicationNames;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentNames)) {
      query["ComponentNames"] = request.componentNames;
    }

    if (!Util.isUnset(request.componentStates)) {
      query["ComponentStates"] = request.componentStates;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!Util.isUnset(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListComponentInstances",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListComponentInstancesResponse>(await this.callApi(params, req, runtime), new ListComponentInstancesResponse({}));
  }

  /**
    * 查询组件实例列表。
    *
    * @param request ListComponentInstancesRequest
    * @return ListComponentInstancesResponse
   */
  async listComponentInstances(request: ListComponentInstancesRequest): Promise<ListComponentInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listComponentInstancesWithOptions(request, runtime);
  }

  /**
    * 查询组件列表。
    *
    * @param request ListComponentsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListComponentsResponse
   */
  async listComponentsWithOptions(request: ListComponentsRequest, runtime: $Util.RuntimeOptions): Promise<ListComponentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationNames)) {
      query["ApplicationNames"] = request.applicationNames;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentNames)) {
      query["ComponentNames"] = request.componentNames;
    }

    if (!Util.isUnset(request.componentStates)) {
      query["ComponentStates"] = request.componentStates;
    }

    if (!Util.isUnset(request.includeExpiredConfig)) {
      query["IncludeExpiredConfig"] = request.includeExpiredConfig;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListComponents",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListComponentsResponse>(await this.callApi(params, req, runtime), new ListComponentsResponse({}));
  }

  /**
    * 查询组件列表。
    *
    * @param request ListComponentsRequest
    * @return ListComponentsResponse
   */
  async listComponents(request: ListComponentsRequest): Promise<ListComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listComponentsWithOptions(request, runtime);
  }

  /**
    * list all doctor analysis apps
    *
    * @param request ListDoctorApplicationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorApplicationsResponse
   */
  async listDoctorApplicationsWithOptions(request: ListDoctorApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.queues)) {
      query["Queues"] = request.queues;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorApplications",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorApplicationsResponse>(await this.callApi(params, req, runtime), new ListDoctorApplicationsResponse({}));
  }

  /**
    * list all doctor analysis apps
    *
    * @param request ListDoctorApplicationsRequest
    * @return ListDoctorApplicationsResponse
   */
  async listDoctorApplications(request: ListDoctorApplicationsRequest): Promise<ListDoctorApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorApplicationsWithOptions(request, runtime);
  }

  /**
    * list Doctor analysis result of cluster engine queue view
    *
    * @param request ListDoctorComputeSummaryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorComputeSummaryResponse
   */
  async listDoctorComputeSummaryWithOptions(request: ListDoctorComputeSummaryRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorComputeSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentTypes)) {
      query["ComponentTypes"] = request.componentTypes;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorComputeSummary",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorComputeSummaryResponse>(await this.callApi(params, req, runtime), new ListDoctorComputeSummaryResponse({}));
  }

  /**
    * list Doctor analysis result of cluster engine queue view
    *
    * @param request ListDoctorComputeSummaryRequest
    * @return ListDoctorComputeSummaryResponse
   */
  async listDoctorComputeSummary(request: ListDoctorComputeSummaryRequest): Promise<ListDoctorComputeSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorComputeSummaryWithOptions(request, runtime);
  }

  /**
    * list Doctor HBaseRegionServers
    *
    * @param request ListDoctorHBaseRegionServersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorHBaseRegionServersResponse
   */
  async listDoctorHBaseRegionServersWithOptions(request: ListDoctorHBaseRegionServersRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorHBaseRegionServersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionServerHosts)) {
      query["RegionServerHosts"] = request.regionServerHosts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorHBaseRegionServers",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorHBaseRegionServersResponse>(await this.callApi(params, req, runtime), new ListDoctorHBaseRegionServersResponse({}));
  }

  /**
    * list Doctor HBaseRegionServers
    *
    * @param request ListDoctorHBaseRegionServersRequest
    * @return ListDoctorHBaseRegionServersResponse
   */
  async listDoctorHBaseRegionServers(request: ListDoctorHBaseRegionServersRequest): Promise<ListDoctorHBaseRegionServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorHBaseRegionServersWithOptions(request, runtime);
  }

  /**
    * list Doctor HBaseTables
    *
    * @param request ListDoctorHBaseTablesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorHBaseTablesResponse
   */
  async listDoctorHBaseTablesWithOptions(request: ListDoctorHBaseTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorHBaseTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableNames)) {
      query["TableNames"] = request.tableNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorHBaseTables",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorHBaseTablesResponse>(await this.callApi(params, req, runtime), new ListDoctorHBaseTablesResponse({}));
  }

  /**
    * list Doctor HBaseTables
    *
    * @param request ListDoctorHBaseTablesRequest
    * @return ListDoctorHBaseTablesResponse
   */
  async listDoctorHBaseTables(request: ListDoctorHBaseTablesRequest): Promise<ListDoctorHBaseTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorHBaseTablesWithOptions(request, runtime);
  }

  /**
    * list Doctor HDFSNodes
    *
    * @param request ListDoctorHDFSDirectoriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorHDFSDirectoriesResponse
   */
  async listDoctorHDFSDirectoriesWithOptions(request: ListDoctorHDFSDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorHDFSDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.dirPath)) {
      query["DirPath"] = request.dirPath;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorHDFSDirectories",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorHDFSDirectoriesResponse>(await this.callApi(params, req, runtime), new ListDoctorHDFSDirectoriesResponse({}));
  }

  /**
    * list Doctor HDFSNodes
    *
    * @param request ListDoctorHDFSDirectoriesRequest
    * @return ListDoctorHDFSDirectoriesResponse
   */
  async listDoctorHDFSDirectories(request: ListDoctorHDFSDirectoriesRequest): Promise<ListDoctorHDFSDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorHDFSDirectoriesWithOptions(request, runtime);
  }

  /**
    * list Doctor HDFS UGIs
    *
    * @param request ListDoctorHDFSUGIRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorHDFSUGIResponse
   */
  async listDoctorHDFSUGIWithOptions(request: ListDoctorHDFSUGIRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorHDFSUGIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorHDFSUGI",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorHDFSUGIResponse>(await this.callApi(params, req, runtime), new ListDoctorHDFSUGIResponse({}));
  }

  /**
    * list Doctor HDFS UGIs
    *
    * @param request ListDoctorHDFSUGIRequest
    * @return ListDoctorHDFSUGIResponse
   */
  async listDoctorHDFSUGI(request: ListDoctorHDFSUGIRequest): Promise<ListDoctorHDFSUGIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorHDFSUGIWithOptions(request, runtime);
  }

  /**
    * list Doctor Hive Databases
    *
    * @param request ListDoctorHiveDatabasesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorHiveDatabasesResponse
   */
  async listDoctorHiveDatabasesWithOptions(request: ListDoctorHiveDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorHiveDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.databaseNames)) {
      query["DatabaseNames"] = request.databaseNames;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorHiveDatabases",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorHiveDatabasesResponse>(await this.callApi(params, req, runtime), new ListDoctorHiveDatabasesResponse({}));
  }

  /**
    * list Doctor Hive Databases
    *
    * @param request ListDoctorHiveDatabasesRequest
    * @return ListDoctorHiveDatabasesResponse
   */
  async listDoctorHiveDatabases(request: ListDoctorHiveDatabasesRequest): Promise<ListDoctorHiveDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorHiveDatabasesWithOptions(request, runtime);
  }

  /**
    * list Doctor Hive Tables
    *
    * @param request ListDoctorHiveTablesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorHiveTablesResponse
   */
  async listDoctorHiveTablesWithOptions(request: ListDoctorHiveTablesRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorHiveTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableNames)) {
      query["TableNames"] = request.tableNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorHiveTables",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorHiveTablesResponse>(await this.callApi(params, req, runtime), new ListDoctorHiveTablesResponse({}));
  }

  /**
    * list Doctor Hive Tables
    *
    * @param request ListDoctorHiveTablesRequest
    * @return ListDoctorHiveTablesResponse
   */
  async listDoctorHiveTables(request: ListDoctorHiveTablesRequest): Promise<ListDoctorHiveTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorHiveTablesWithOptions(request, runtime);
  }

  /**
    * list realtime jobs by yarn
    *
    * @param request ListDoctorJobsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorJobsResponse
   */
  async listDoctorJobsWithOptions(request: ListDoctorJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endRange)) {
      query["EndRange"] = request.endRange;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.queues)) {
      query["Queues"] = request.queues;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startRange)) {
      query["StartRange"] = request.startRange;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorJobs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorJobsResponse>(await this.callApi(params, req, runtime), new ListDoctorJobsResponse({}));
  }

  /**
    * list realtime jobs by yarn
    *
    * @param request ListDoctorJobsRequest
    * @return ListDoctorJobsResponse
   */
  async listDoctorJobs(request: ListDoctorJobsRequest): Promise<ListDoctorJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorJobsWithOptions(request, runtime);
  }

  /**
    * list stats groupBy jobs by yarn
    *
    * @param request ListDoctorJobsStatsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorJobsStatsResponse
   */
  async listDoctorJobsStatsWithOptions(request: ListDoctorJobsStatsRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorJobsStatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.endRange)) {
      query["EndRange"] = request.endRange;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startRange)) {
      query["StartRange"] = request.startRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorJobsStats",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorJobsStatsResponse>(await this.callApi(params, req, runtime), new ListDoctorJobsStatsResponse({}));
  }

  /**
    * list stats groupBy jobs by yarn
    *
    * @param request ListDoctorJobsStatsRequest
    * @return ListDoctorJobsStatsResponse
   */
  async listDoctorJobsStats(request: ListDoctorJobsStatsRequest): Promise<ListDoctorJobsStatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorJobsStatsWithOptions(request, runtime);
  }

  /**
    * list all reports analysis by emr doctor
    *
    * @param request ListDoctorReportsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDoctorReportsResponse
   */
  async listDoctorReportsWithOptions(request: ListDoctorReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListDoctorReportsResponse> {
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDoctorReports",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDoctorReportsResponse>(await this.callApi(params, req, runtime), new ListDoctorReportsResponse({}));
  }

  /**
    * list all reports analysis by emr doctor
    *
    * @param request ListDoctorReportsRequest
    * @return ListDoctorReportsResponse
   */
  async listDoctorReports(request: ListDoctorReportsRequest): Promise<ListDoctorReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDoctorReportsWithOptions(request, runtime);
  }

  async listInstanceTypesWithOptions(request: ListInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.deployMode)) {
      query["DeployMode"] = request.deployMode;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.isModification)) {
      query["IsModification"] = request.isModification;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.nodeGroupType)) {
      query["NodeGroupType"] = request.nodeGroupType;
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

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceTypes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceTypesResponse>(await this.callApi(params, req, runtime), new ListInstanceTypesResponse({}));
  }

  async listInstanceTypes(request: ListInstanceTypesRequest): Promise<ListInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceTypesWithOptions(request, runtime);
  }

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
    * 查询主版本。
    *
    * @param request ListReleaseVersionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListReleaseVersionsResponse
   */
  async listReleaseVersionsWithOptions(request: ListReleaseVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListReleaseVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.iaasType)) {
      query["IaasType"] = request.iaasType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListReleaseVersions",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListReleaseVersionsResponse>(await this.callApi(params, req, runtime), new ListReleaseVersionsResponse({}));
  }

  /**
    * 查询主版本。
    *
    * @param request ListReleaseVersionsRequest
    * @return ListReleaseVersionsResponse
   */
  async listReleaseVersions(request: ListReleaseVersionsRequest): Promise<ListReleaseVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listReleaseVersionsWithOptions(request, runtime);
  }

  /**
    * 查询集群脚本。
    *
    * @param request ListScriptsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListScriptsResponse
   */
  async listScriptsWithOptions(request: ListScriptsRequest, runtime: $Util.RuntimeOptions): Promise<ListScriptsResponse> {
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scriptType)) {
      query["ScriptType"] = request.scriptType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScripts",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScriptsResponse>(await this.callApi(params, req, runtime), new ListScriptsResponse({}));
  }

  /**
    * 查询集群脚本。
    *
    * @param request ListScriptsRequest
    * @return ListScriptsResponse
   */
  async listScripts(request: ListScriptsRequest): Promise<ListScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScriptsWithOptions(request, runtime);
  }

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
    * You can call this operation to configure auto scaling policies.
    *
    * @param request PutAutoScalingPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutAutoScalingPolicyResponse
   */
  async putAutoScalingPolicyWithOptions(request: PutAutoScalingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<PutAutoScalingPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scalingRules)) {
      query["ScalingRules"] = request.scalingRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutAutoScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAutoScalingPolicyResponse>(await this.callApi(params, req, runtime), new PutAutoScalingPolicyResponse({}));
  }

  /**
    * You can call this operation to configure auto scaling policies.
    *
    * @param request PutAutoScalingPolicyRequest
    * @return PutAutoScalingPolicyResponse
   */
  async putAutoScalingPolicy(request: PutAutoScalingPolicyRequest): Promise<PutAutoScalingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAutoScalingPolicyWithOptions(request, runtime);
  }

  async removeAutoScalingPolicyWithOptions(request: RemoveAutoScalingPolicyRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAutoScalingPolicyResponse> {
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
      action: "RemoveAutoScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAutoScalingPolicyResponse>(await this.callApi(params, req, runtime), new RemoveAutoScalingPolicyResponse({}));
  }

  async removeAutoScalingPolicy(request: RemoveAutoScalingPolicyRequest): Promise<RemoveAutoScalingPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAutoScalingPolicyWithOptions(request, runtime);
  }

  /**
    * 执行集群模板
    *
    * @param request RunApiTemplateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RunApiTemplateResponse
   */
  async runApiTemplateWithOptions(request: RunApiTemplateRequest, runtime: $Util.RuntimeOptions): Promise<RunApiTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunApiTemplateResponse>(await this.callApi(params, req, runtime), new RunApiTemplateResponse({}));
  }

  /**
    * 执行集群模板
    *
    * @param request RunApiTemplateRequest
    * @return RunApiTemplateResponse
   */
  async runApiTemplate(request: RunApiTemplateRequest): Promise<RunApiTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runApiTemplateWithOptions(request, runtime);
  }

  async runApplicationActionWithOptions(request: RunApplicationActionRequest, runtime: $Util.RuntimeOptions): Promise<RunApplicationActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!Util.isUnset(request.batchSize)) {
      query["BatchSize"] = request.batchSize;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.componentInstanceSelector)) {
      query["ComponentInstanceSelector"] = request.componentInstanceSelector;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executeStrategy)) {
      query["ExecuteStrategy"] = request.executeStrategy;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rollingExecute)) {
      query["RollingExecute"] = request.rollingExecute;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunApplicationAction",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunApplicationActionResponse>(await this.callApi(params, req, runtime), new RunApplicationActionResponse({}));
  }

  async runApplicationAction(request: RunApplicationActionRequest): Promise<RunApplicationActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runApplicationActionWithOptions(request, runtime);
  }

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

  /**
    * 删除指定资源标签。
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateApplicationConfigsWithOptions(request: UpdateApplicationConfigsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationConfigs)) {
      query["ApplicationConfigs"] = request.applicationConfigs;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.configAction)) {
      query["ConfigAction"] = request.configAction;
    }

    if (!Util.isUnset(request.configScope)) {
      query["ConfigScope"] = request.configScope;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationConfigs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationConfigsResponse>(await this.callApi(params, req, runtime), new UpdateApplicationConfigsResponse({}));
  }

  async updateApplicationConfigs(request: UpdateApplicationConfigsRequest): Promise<UpdateApplicationConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationConfigsWithOptions(request, runtime);
  }

}
