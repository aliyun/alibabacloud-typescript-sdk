// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ACS extends $tea.Model {
  ACSQuotaId?: string;
  associatedProducts?: string[];
  static names(): { [key: string]: string } {
    return {
      ACSQuotaId: 'ACSQuotaId',
      associatedProducts: 'AssociatedProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACSQuotaId: 'string',
      associatedProducts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpec extends $tea.Model {
  codeDir?: Location;
  command?: string[];
  computeResource?: AlgorithmSpecComputeResource;
  customization?: AlgorithmSpecCustomization;
  hyperParameters?: HyperParameterDefinition[];
  image?: string;
  inputChannels?: Channel[];
  jobType?: string;
  metricDefinitions?: MetricDefinition[];
  outputChannels?: Channel[];
  progressDefinitions?: AlgorithmSpecProgressDefinitions;
  resourceRequirements?: ConditionExpression[];
  supportedInstanceTypes?: string[];
  supportsDistributedTraining?: boolean;
  static names(): { [key: string]: string } {
    return {
      codeDir: 'CodeDir',
      command: 'Command',
      computeResource: 'ComputeResource',
      customization: 'Customization',
      hyperParameters: 'HyperParameters',
      image: 'Image',
      inputChannels: 'InputChannels',
      jobType: 'JobType',
      metricDefinitions: 'MetricDefinitions',
      outputChannels: 'OutputChannels',
      progressDefinitions: 'ProgressDefinitions',
      resourceRequirements: 'ResourceRequirements',
      supportedInstanceTypes: 'SupportedInstanceTypes',
      supportsDistributedTraining: 'SupportsDistributedTraining',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDir: Location,
      command: { 'type': 'array', 'itemType': 'string' },
      computeResource: AlgorithmSpecComputeResource,
      customization: AlgorithmSpecCustomization,
      hyperParameters: { 'type': 'array', 'itemType': HyperParameterDefinition },
      image: 'string',
      inputChannels: { 'type': 'array', 'itemType': Channel },
      jobType: 'string',
      metricDefinitions: { 'type': 'array', 'itemType': MetricDefinition },
      outputChannels: { 'type': 'array', 'itemType': Channel },
      progressDefinitions: AlgorithmSpecProgressDefinitions,
      resourceRequirements: { 'type': 'array', 'itemType': ConditionExpression },
      supportedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      supportsDistributedTraining: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateStrategySpec extends $tea.Model {
  nodeSpecs?: NodeSpec[];
  static names(): { [key: string]: string } {
    return {
      nodeSpecs: 'NodeSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSpecs: { 'type': 'array', 'itemType': NodeSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Channel extends $tea.Model {
  description?: string;
  name?: string;
  properties?: { [key: string]: any };
  required?: boolean;
  supportedChannelTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      properties: 'Properties',
      required: 'Required',
      supportedChannelTypes: 'SupportedChannelTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      required: 'boolean',
      supportedChannelTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChannelProperty extends $tea.Model {
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

export class ComponentSpec extends $tea.Model {
  codeDir?: Location;
  command?: string;
  hyperParameters?: HyperParameterDefinition[];
  image?: string;
  inputChannels?: Channel[];
  jobType?: string;
  metricDefinitions?: MetricDefinition[];
  outputChannels?: Channel[];
  resourceRequirements?: ConditionExpression[];
  static names(): { [key: string]: string } {
    return {
      codeDir: 'CodeDir',
      command: 'Command',
      hyperParameters: 'HyperParameters',
      image: 'Image',
      inputChannels: 'InputChannels',
      jobType: 'JobType',
      metricDefinitions: 'MetricDefinitions',
      outputChannels: 'OutputChannels',
      resourceRequirements: 'ResourceRequirements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDir: Location,
      command: 'string',
      hyperParameters: { 'type': 'array', 'itemType': HyperParameterDefinition },
      image: 'string',
      inputChannels: { 'type': 'array', 'itemType': Channel },
      jobType: 'string',
      metricDefinitions: { 'type': 'array', 'itemType': MetricDefinition },
      outputChannels: { 'type': 'array', 'itemType': Channel },
      resourceRequirements: { 'type': 'array', 'itemType': ConditionExpression },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionExpression extends $tea.Model {
  key?: string;
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Features extends $tea.Model {
  quota?: FeaturesQuota;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: FeaturesQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GPUInfo extends $tea.Model {
  count?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HyperParameterDefinition extends $tea.Model {
  defaultValue?: string;
  description?: string;
  displayName?: string;
  name?: string;
  range?: HyperParameterRange;
  required?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      range: 'Range',
      required: 'Required',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      displayName: 'string',
      name: 'string',
      range: HyperParameterRange,
      required: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HyperParameterRange extends $tea.Model {
  enum?: string[];
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  maximum?: string;
  minLength?: number;
  minimum?: string;
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      enum: 'Enum',
      exclusiveMaximum: 'ExclusiveMaximum',
      exclusiveMinimum: 'ExclusiveMinimum',
      maxLength: 'MaxLength',
      maximum: 'Maximum',
      minLength: 'MinLength',
      minimum: 'Minimum',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enum: { 'type': 'array', 'itemType': 'string' },
      exclusiveMaximum: 'boolean',
      exclusiveMinimum: 'boolean',
      maxLength: 'number',
      maximum: 'string',
      minLength: 'number',
      minimum: 'string',
      pattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobViewMetric extends $tea.Model {
  CPUUsageRate?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUUsageRate?: string;
  jobId?: string;
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  resourceGroupID?: string;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUUsageRate: 'GPUUsageRate',
      jobId: 'JobId',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupID: 'ResourceGroupID',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUUsageRate: 'string',
      jobId: 'string',
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      resourceGroupID: 'string',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Label extends $tea.Model {
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

export class Location extends $tea.Model {
  locationType?: string;
  locationValue?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      locationType: 'LocationType',
      locationValue: 'LocationValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationType: 'string',
      locationValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineGroup extends $tea.Model {
  creatorID?: string;
  defaultDriver?: string;
  ecsCount?: number;
  ecsSpec?: string;
  gmtCreatedTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  gmtStartedTime?: string;
  machineGroupID?: string;
  paymentDuration?: string;
  paymentDurationUnit?: string;
  paymentType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceGroupID?: string;
  status?: string;
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      defaultDriver: 'DefaultDriver',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      machineGroupID: 'MachineGroupID',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      defaultDriver: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      machineGroupID: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Metric extends $tea.Model {
  time?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricDefinition extends $tea.Model {
  description?: string;
  name?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Node extends $tea.Model {
  acceleratorType?: string;
  boundQuotas?: QuotaIdName[];
  CPU?: string;
  creatorId?: string;
  GPU?: string;
  GPUType?: string;
  gmtCreateTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  isBound?: boolean;
  machineGroupId?: string;
  memory?: string;
  nodeName?: string;
  nodeStatus?: string;
  nodeType?: string;
  orderStatus?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceGroupId?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      boundQuotas: 'BoundQuotas',
      CPU: 'CPU',
      creatorId: 'CreatorId',
      GPU: 'GPU',
      GPUType: 'GPUType',
      gmtCreateTime: 'GmtCreateTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isBound: 'IsBound',
      machineGroupId: 'MachineGroupId',
      memory: 'Memory',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      orderStatus: 'OrderStatus',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      boundQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      CPU: 'string',
      creatorId: 'string',
      GPU: 'string',
      GPUType: 'string',
      gmtCreateTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      isBound: 'boolean',
      machineGroupId: 'string',
      memory: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      orderStatus: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeMetric extends $tea.Model {
  GPUType?: string;
  metrics?: Metric[];
  nodeID?: string;
  static names(): { [key: string]: string } {
    return {
      GPUType: 'GPUType',
      metrics: 'Metrics',
      nodeID: 'NodeID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
      nodeID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSpec extends $tea.Model {
  count?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeType extends $tea.Model {
  acceleratorType?: string;
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTypeStatistic extends $tea.Model {
  canBeBoundCount?: number;
  nodeType?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canBeBoundCount: 'CanBeBoundCount',
      nodeType: 'NodeType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBeBoundCount: 'number',
      nodeType: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeViewMetric extends $tea.Model {
  CPUUsageRate?: string;
  createdTime?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUType?: string;
  machineGroupID?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeID?: string;
  nodeStatus?: string;
  nodeType?: string;
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  taskIdMap?: { [key: string]: any };
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  totalTasks?: number;
  userIDs?: string[];
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      createdTime: 'CreatedTime',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUType: 'GPUType',
      machineGroupID: 'MachineGroupID',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeID: 'NodeID',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      taskIdMap: 'TaskIdMap',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      totalTasks: 'TotalTasks',
      userIDs: 'UserIDs',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      createdTime: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUType: 'string',
      machineGroupID: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeID: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      taskIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      totalTasks: 'number',
      userIDs: { 'type': 'array', 'itemType': 'string' },
      userNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Permission extends $tea.Model {
  isEnabled?: boolean;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Quota extends $tea.Model {
  allocateStrategy?: string;
  creatorId?: string;
  description?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  labels?: Label[];
  latestOperationId?: string;
  min?: ResourceSpec;
  parentQuotaId?: string;
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  quotaDetails?: QuotaDetails;
  quotaId?: string;
  quotaName?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceGroupIds?: string[];
  resourceType?: string;
  status?: string;
  subQuotas?: QuotaIdName[];
  workspaces?: WorkspaceIdName[];
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestOperationId: 'LatestOperationId',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
      status: 'Status',
      subQuotas: 'SubQuotas',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      creatorId: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestOperationId: 'string',
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      status: 'string',
      subQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      workspaces: { 'type': 'array', 'itemType': WorkspaceIdName },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaConfig extends $tea.Model {
  ACS?: ACS;
  clusterId?: string;
  defaultGPUDriver?: string;
  supportGPUDrivers?: string[];
  supportRDMA?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      ACS: 'ACS',
      clusterId: 'ClusterId',
      defaultGPUDriver: 'DefaultGPUDriver',
      supportGPUDrivers: 'SupportGPUDrivers',
      supportRDMA: 'SupportRDMA',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACS: ACS,
      clusterId: 'string',
      defaultGPUDriver: 'string',
      supportGPUDrivers: { 'type': 'array', 'itemType': 'string' },
      supportRDMA: 'boolean',
      userVpc: UserVpc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaDetails extends $tea.Model {
  actualMinQuota?: ResourceAmount;
  desiredMinQuota?: ResourceAmount;
  requestedQuota?: ResourceAmount;
  usedQuota?: ResourceAmount;
  static names(): { [key: string]: string } {
    return {
      actualMinQuota: 'ActualMinQuota',
      desiredMinQuota: 'DesiredMinQuota',
      requestedQuota: 'RequestedQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualMinQuota: ResourceAmount,
      desiredMinQuota: ResourceAmount,
      requestedQuota: ResourceAmount,
      usedQuota: ResourceAmount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaIdName extends $tea.Model {
  quotaId?: string;
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      quotaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaJobViewMetric extends $tea.Model {
  CPUUsageRate?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUUsageRate?: string;
  jobId?: string;
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUUsageRate: 'GPUUsageRate',
      jobId: 'JobId',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUUsageRate: 'string',
      jobId: 'string',
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaMetric extends $tea.Model {
  GPUType?: string;
  metrics?: Metric[];
  static names(): { [key: string]: string } {
    return {
      GPUType: 'GPUType',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaNodeViewMetric extends $tea.Model {
  CPUUsageRate?: string;
  createdTime?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeID?: string;
  nodeStatus?: string;
  nodeType?: string;
  quotaId?: string;
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  taskIdMap?: { [key: string]: any };
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  totalTasks?: number;
  userIDs?: string[];
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      createdTime: 'CreatedTime',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUType: 'GPUType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeID: 'NodeID',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      quotaId: 'QuotaId',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      taskIdMap: 'TaskIdMap',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      totalTasks: 'TotalTasks',
      userIDs: 'UserIDs',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      createdTime: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeID: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      quotaId: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      taskIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      totalTasks: 'number',
      userIDs: { 'type': 'array', 'itemType': 'string' },
      userNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaUserViewMetric extends $tea.Model {
  CPUNodeNumber?: number;
  CPUUsageRate?: string;
  cpuJobNames?: string[];
  cpuNodeNames?: string[];
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUNodeNumber?: number;
  GPUUsageRate?: string;
  gpuJobNames?: string[];
  gpuNodeNames?: string[];
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUNodeNumber: 'CPUNodeNumber',
      CPUUsageRate: 'CPUUsageRate',
      cpuJobNames: 'CpuJobNames',
      cpuNodeNames: 'CpuNodeNames',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUNodeNumber: 'GPUNodeNumber',
      GPUUsageRate: 'GPUUsageRate',
      gpuJobNames: 'GpuJobNames',
      gpuNodeNames: 'GpuNodeNames',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUNodeNumber: 'number',
      CPUUsageRate: 'string',
      cpuJobNames: { 'type': 'array', 'itemType': 'string' },
      cpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUNodeNumber: 'number',
      GPUUsageRate: 'string',
      gpuJobNames: { 'type': 'array', 'itemType': 'string' },
      gpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceAmount extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceGroup extends $tea.Model {
  creatorID?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  nodeCount?: number;
  resourceGroupID?: string;
  userVpc?: UserVpc;
  workspaceID?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      nodeCount: 'NodeCount',
      resourceGroupID: 'ResourceGroupID',
      userVpc: 'UserVpc',
      workspaceID: 'WorkspaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      nodeCount: 'number',
      resourceGroupID: 'string',
      userVpc: UserVpc,
      workspaceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceGroupMetric extends $tea.Model {
  gpuType?: string;
  metrics?: Metric[];
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      gpuType: 'GpuType',
      metrics: 'Metrics',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
      resourceGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceOperation extends $tea.Model {
  creatorId?: string;
  gmtCreatedTime?: string;
  gmtEndTime?: string;
  gmtModifiedTime?: string;
  gmtStartTime?: string;
  objectId?: string;
  objectType?: string;
  operationDescription?: string;
  operationId?: string;
  operationSpecJson?: string;
  operationType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtEndTime: 'GmtEndTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartTime: 'GmtStartTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      operationSpecJson: 'OperationSpecJson',
      operationType: 'OperationType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      gmtCreatedTime: 'string',
      gmtEndTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartTime: 'string',
      objectId: 'string',
      objectType: 'string',
      operationDescription: 'string',
      operationId: 'string',
      operationSpecJson: 'string',
      operationType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceSpec extends $tea.Model {
  nodeSpecs?: NodeSpec[];
  static names(): { [key: string]: string } {
    return {
      nodeSpecs: 'NodeSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSpecs: { 'type': 'array', 'itemType': NodeSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserViewMetric extends $tea.Model {
  CPUNodeNumber?: number;
  CPUUsageRate?: string;
  cpuJobNames?: string[];
  cpuNodeNames?: string[];
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUNodeNumber?: number;
  GPUUsageRate?: string;
  gpuJobNames?: string[];
  gpuNodeNames?: string[];
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  resourceGroupId?: string;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUNodeNumber: 'CPUNodeNumber',
      CPUUsageRate: 'CPUUsageRate',
      cpuJobNames: 'CpuJobNames',
      cpuNodeNames: 'CpuNodeNames',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUNodeNumber: 'GPUNodeNumber',
      GPUUsageRate: 'GPUUsageRate',
      gpuJobNames: 'GpuJobNames',
      gpuNodeNames: 'GpuNodeNames',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupId: 'ResourceGroupId',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUNodeNumber: 'number',
      CPUUsageRate: 'string',
      cpuJobNames: { 'type': 'array', 'itemType': 'string' },
      cpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUNodeNumber: 'number',
      GPUUsageRate: 'string',
      gpuJobNames: { 'type': 'array', 'itemType': 'string' },
      gpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      resourceGroupId: 'string',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserVpc extends $tea.Model {
  defaultRoute?: string;
  extendedCIDRs?: string[];
  roleArn?: string;
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      roleArn: 'RoleArn',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      roleArn: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WorkspaceIdName extends $tea.Model {
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmRequest extends $tea.Model {
  algorithmDescription?: string;
  algorithmName?: string;
  displayName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmName: 'AlgorithmName',
      displayName: 'DisplayName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmName: 'string',
      displayName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmResponseBody extends $tea.Model {
  algorithmId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionRequest extends $tea.Model {
  algorithmSpec?: AlgorithmSpec;
  static names(): { [key: string]: string } {
    return {
      algorithmSpec: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpec: AlgorithmSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionShrinkRequest extends $tea.Model {
  algorithmSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmSpecShrink: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionResponseBody extends $tea.Model {
  algorithmId?: string;
  algorithmVersion?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmVersion: 'AlgorithmVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAlgorithmVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaRequest extends $tea.Model {
  allocateStrategy?: string;
  description?: string;
  labels?: Label[];
  min?: ResourceSpec;
  parentQuotaId?: string;
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  quotaName?: string;
  resourceGroupIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      description: 'Description',
      labels: 'Labels',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $tea.Model {
  computingResourceProvider?: string;
  description?: string;
  name?: string;
  resourceType?: string;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      description: 'Description',
      name: 'Name',
      resourceType: 'ResourceType',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingResourceProvider: 'string',
      description: 'string',
      name: 'string',
      resourceType: 'string',
      userVpc: UserVpc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequest extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmSpec?: AlgorithmSpec;
  algorithmVersion?: string;
  codeDir?: Location;
  computeResource?: CreateTrainingJobRequestComputeResource;
  hyperParameters?: CreateTrainingJobRequestHyperParameters[];
  inputChannels?: CreateTrainingJobRequestInputChannels[];
  labels?: CreateTrainingJobRequestLabels[];
  outputChannels?: CreateTrainingJobRequestOutputChannels[];
  roleArn?: string;
  scheduler?: CreateTrainingJobRequestScheduler;
  trainingJobDescription?: string;
  trainingJobName?: string;
  userVpc?: CreateTrainingJobRequestUserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      codeDir: 'CodeDir',
      computeResource: 'ComputeResource',
      hyperParameters: 'HyperParameters',
      inputChannels: 'InputChannels',
      labels: 'Labels',
      outputChannels: 'OutputChannels',
      roleArn: 'RoleArn',
      scheduler: 'Scheduler',
      trainingJobDescription: 'TrainingJobDescription',
      trainingJobName: 'TrainingJobName',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      codeDir: Location,
      computeResource: CreateTrainingJobRequestComputeResource,
      hyperParameters: { 'type': 'array', 'itemType': CreateTrainingJobRequestHyperParameters },
      inputChannels: { 'type': 'array', 'itemType': CreateTrainingJobRequestInputChannels },
      labels: { 'type': 'array', 'itemType': CreateTrainingJobRequestLabels },
      outputChannels: { 'type': 'array', 'itemType': CreateTrainingJobRequestOutputChannels },
      roleArn: 'string',
      scheduler: CreateTrainingJobRequestScheduler,
      trainingJobDescription: 'string',
      trainingJobName: 'string',
      userVpc: CreateTrainingJobRequestUserVpc,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobResponseBody extends $tea.Model {
  requestId?: string;
  trainingJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trainingJobId: 'TrainingJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trainingJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMachineGroupResponseBody extends $tea.Model {
  machineGroupID?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroupID: 'MachineGroupID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroupID: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMachineGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMachineGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupMachineGroupResponseBody extends $tea.Model {
  machineGroupID?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroupID: 'MachineGroupID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroupID: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupMachineGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResourceGroupMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceGroupMachineGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponseBody extends $tea.Model {
  algorithmDescription?: string;
  algorithmId?: string;
  algorithmName?: string;
  algorithmProvider?: string;
  displayName?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  requestId?: string;
  tenantId?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      requestId: 'RequestId',
      tenantId: 'TenantId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      requestId: 'string',
      tenantId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmVersionResponseBody extends $tea.Model {
  algorithmId?: string;
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmSpec?: AlgorithmSpec;
  algorithmVersion?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  tenantId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlgorithmVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMachineGroupResponseBody extends $tea.Model {
  count?: number;
  defaultDriver?: string;
  duration?: string;
  ecsType?: string;
  gmtCreated?: string;
  gmtExpired?: string;
  gmtModified?: string;
  gmtStarted?: string;
  machineGroupID?: string;
  orderID?: string;
  PAIResourceID?: string;
  payType?: string;
  pricingCycle?: string;
  regionID?: string;
  requestId?: string;
  status?: string;
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      defaultDriver: 'DefaultDriver',
      duration: 'Duration',
      ecsType: 'EcsType',
      gmtCreated: 'GmtCreated',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      gmtStarted: 'GmtStarted',
      machineGroupID: 'MachineGroupID',
      orderID: 'OrderID',
      PAIResourceID: 'PAIResourceID',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionID: 'RegionID',
      requestId: 'RequestId',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      defaultDriver: 'string',
      duration: 'string',
      ecsType: 'string',
      gmtCreated: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      gmtStarted: 'string',
      machineGroupID: 'string',
      orderID: 'string',
      PAIResourceID: 'string',
      payType: 'string',
      pricingCycle: 'string',
      regionID: 'string',
      requestId: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMachineGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMachineGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeMetricsRequest extends $tea.Model {
  endTime?: string;
  GPUType?: string;
  startTime?: string;
  timeStep?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      GPUType: 'GPUType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      GPUType: 'string',
      startTime: 'string',
      timeStep: 'string',
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeMetricsResponseBody extends $tea.Model {
  metricType?: string;
  nodesMetrics?: NodeMetric[];
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      nodesMetrics: 'NodesMetrics',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'string',
      nodesMetrics: { 'type': 'array', 'itemType': NodeMetric },
      resourceGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNodeMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNodeMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $tea.Model {
  allocateStrategy?: string;
  creatorId?: string;
  description?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  labels?: Label[];
  latestOperationId?: string;
  min?: ResourceSpec;
  parentQuotaId?: string;
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  quotaDetails?: QuotaDetails;
  quotaId?: string;
  quotaName?: string;
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  resourceGroupIds?: string[];
  resourceType?: string;
  status?: string;
  subQuotas?: QuotaIdName[];
  workspaces?: WorkspaceIdName[];
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestOperationId: 'LatestOperationId',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
      status: 'Status',
      subQuotas: 'SubQuotas',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      creatorId: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestOperationId: 'string',
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      status: 'string',
      subQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      workspaces: { 'type': 'array', 'itemType': WorkspaceIdName },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $tea.Model {
  isAIWorkspaceDataEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isAIWorkspaceDataEnabled: 'IsAIWorkspaceDataEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAIWorkspaceDataEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBody extends $tea.Model {
  clusterID?: string;
  computingResourceProvider?: string;
  creatorID?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  requestId?: string;
  resourceType?: string;
  status?: string;
  supportRDMA?: boolean;
  userVpc?: UserVpc;
  workspaceID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'ClusterID',
      computingResourceProvider: 'ComputingResourceProvider',
      creatorID: 'CreatorID',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      status: 'Status',
      supportRDMA: 'SupportRDMA',
      userVpc: 'UserVpc',
      workspaceID: 'WorkspaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      computingResourceProvider: 'string',
      creatorID: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      resourceType: 'string',
      status: 'string',
      supportRDMA: 'boolean',
      userVpc: UserVpc,
      workspaceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupResponseBody extends $tea.Model {
  cpu?: string;
  defaultDriver?: string;
  ecsCount?: number;
  ecsSpec?: string;
  gmtCreatedTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  gmtStartedTime?: string;
  gpu?: string;
  gpuType?: string;
  machineGroupID?: string;
  memory?: string;
  paymentDuration?: string;
  paymentDurationUnit?: string;
  paymentType?: string;
  requestId?: string;
  resourceGroupID?: string;
  status?: string;
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      defaultDriver: 'DefaultDriver',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      gpu: 'Gpu',
      gpuType: 'GpuType',
      machineGroupID: 'MachineGroupID',
      memory: 'Memory',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      defaultDriver: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      gpu: 'string',
      gpuType: 'string',
      machineGroupID: 'string',
      memory: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceGroupMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupMachineGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequestRequest extends $tea.Model {
  podStatus?: string;
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      podStatus: 'PodStatus',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podStatus: 'string',
      resourceGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequestResponseBody extends $tea.Model {
  requestCPU?: number;
  requestGPU?: number;
  requestGPUInfos?: GPUInfo[];
  requestMemory?: number;
  static names(): { [key: string]: string } {
    return {
      requestCPU: 'requestCPU',
      requestGPU: 'requestGPU',
      requestGPUInfos: 'requestGPUInfos',
      requestMemory: 'requestMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCPU: 'number',
      requestGPU: 'number',
      requestGPUInfos: { 'type': 'array', 'itemType': GPUInfo },
      requestMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceGroupRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupTotalRequest extends $tea.Model {
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupTotalResponseBody extends $tea.Model {
  totalCPU?: number;
  totalGPU?: number;
  totalGPUInfos?: GPUInfo[];
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalCPU: 'totalCPU',
      totalGPU: 'totalGPU',
      totalGPUInfos: 'totalGPUInfos',
      totalMemory: 'totalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCPU: 'number',
      totalGPU: 'number',
      totalGPUInfos: { 'type': 'array', 'itemType': GPUInfo },
      totalMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceGroupTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBody extends $tea.Model {
  algorithmId?: string;
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmSpec?: AlgorithmSpec;
  algorithmVersion?: string;
  computeResource?: GetTrainingJobResponseBodyComputeResource;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  hyperParameters?: GetTrainingJobResponseBodyHyperParameters[];
  inputChannels?: GetTrainingJobResponseBodyInputChannels[];
  instances?: GetTrainingJobResponseBodyInstances[];
  isTempAlgo?: boolean;
  labels?: GetTrainingJobResponseBodyLabels[];
  latestMetrics?: GetTrainingJobResponseBodyLatestMetrics[];
  latestProgress?: GetTrainingJobResponseBodyLatestProgress;
  outputChannels?: GetTrainingJobResponseBodyOutputChannels[];
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  roleArn?: string;
  scheduler?: GetTrainingJobResponseBodyScheduler;
  status?: string;
  statusTransitions?: GetTrainingJobResponseBodyStatusTransitions[];
  trainingJobDescription?: string;
  trainingJobId?: string;
  trainingJobName?: string;
  trainingJobUrl?: string;
  userId?: string;
  userVpc?: GetTrainingJobResponseBodyUserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      computeResource: 'ComputeResource',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperParameters: 'HyperParameters',
      inputChannels: 'InputChannels',
      instances: 'Instances',
      isTempAlgo: 'IsTempAlgo',
      labels: 'Labels',
      latestMetrics: 'LatestMetrics',
      latestProgress: 'LatestProgress',
      outputChannels: 'OutputChannels',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      scheduler: 'Scheduler',
      status: 'Status',
      statusTransitions: 'StatusTransitions',
      trainingJobDescription: 'TrainingJobDescription',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      trainingJobUrl: 'TrainingJobUrl',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      computeResource: GetTrainingJobResponseBodyComputeResource,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hyperParameters: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyHyperParameters },
      inputChannels: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyInputChannels },
      instances: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyInstances },
      isTempAlgo: 'boolean',
      labels: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyLabels },
      latestMetrics: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyLatestMetrics },
      latestProgress: GetTrainingJobResponseBodyLatestProgress,
      outputChannels: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyOutputChannels },
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      roleArn: 'string',
      scheduler: GetTrainingJobResponseBodyScheduler,
      status: 'string',
      statusTransitions: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyStatusTransitions },
      trainingJobDescription: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      trainingJobUrl: 'string',
      userId: 'string',
      userVpc: GetTrainingJobResponseBodyUserVpc,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserViewMetricsRequest extends $tea.Model {
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  sortBy?: string;
  timeStep?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      timeStep: 'TimeStep',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      timeStep: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserViewMetricsResponseBody extends $tea.Model {
  resourceGroupId?: string;
  summary?: UserViewMetric;
  total?: number;
  userMetrics?: UserViewMetric[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      total: 'Total',
      userMetrics: 'UserMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      summary: UserViewMetric,
      total: 'number',
      userMetrics: { 'type': 'array', 'itemType': UserViewMetric },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserViewMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserViewMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserViewMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsResponseBody extends $tea.Model {
  algorithmVersions?: ListAlgorithmVersionsResponseBodyAlgorithmVersions[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmVersions: 'AlgorithmVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVersions: { 'type': 'array', 'itemType': ListAlgorithmVersionsResponseBodyAlgorithmVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlgorithmVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlgorithmVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsRequest extends $tea.Model {
  algorithmId?: string;
  algorithmName?: string;
  algorithmProvider?: string;
  pageNumber?: number;
  pageSize?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBody extends $tea.Model {
  algorithms?: ListAlgorithmsResponseBodyAlgorithms[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'Algorithms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': ListAlgorithmsResponseBodyAlgorithms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAlgorithmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlgorithmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasRequest extends $tea.Model {
  labels?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  parentQuotaId?: string;
  quotaIds?: string;
  quotaName?: string;
  resourceType?: string;
  sortBy?: string;
  statuses?: string;
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentQuotaId: 'ParentQuotaId',
      quotaIds: 'QuotaIds',
      quotaName: 'QuotaName',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      statuses: 'Statuses',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentQuotaId: 'string',
      quotaIds: 'string',
      quotaName: 'string',
      resourceType: 'string',
      sortBy: 'string',
      statuses: 'string',
      workspaceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBody extends $tea.Model {
  quotas?: Quota[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': Quota },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMachineGroupsRequest extends $tea.Model {
  creatorID?: string;
  ecsSpec?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  paymentDuration?: string;
  paymentDurationUnit?: string;
  paymentType?: string;
  sortBy?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      ecsSpec: 'EcsSpec',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      ecsSpec: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      sortBy: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMachineGroupsResponseBody extends $tea.Model {
  machineGroups?: MachineGroup[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroups: 'MachineGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroups: { 'type': 'array', 'itemType': MachineGroup },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMachineGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceGroupMachineGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceGroupMachineGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $tea.Model {
  computingResourceProvider?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  showAll?: boolean;
  sortBy?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      showAll: 'ShowAll',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingResourceProvider: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      showAll: 'boolean',
      sortBy: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroups?: ResourceGroup[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ResourceGroup },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobLogsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  workerId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      workerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobLogsResponseBody extends $tea.Model {
  logs?: string[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrainingJobLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsRequest extends $tea.Model {
  endTime?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsResponseBody extends $tea.Model {
  metrics?: ListTrainingJobMetricsResponseBodyMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': ListTrainingJobMetricsResponseBodyMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrainingJobMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsRequest extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  endTime?: string;
  isTempAlgo?: boolean;
  labels?: { [key: string]: any };
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  status?: string;
  trainingJobId?: string;
  trainingJobName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      endTime: 'EndTime',
      isTempAlgo: 'IsTempAlgo',
      labels: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      endTime: 'string',
      isTempAlgo: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsShrinkRequest extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  endTime?: string;
  isTempAlgo?: boolean;
  labelsShrink?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  status?: string;
  trainingJobId?: string;
  trainingJobName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      endTime: 'EndTime',
      isTempAlgo: 'IsTempAlgo',
      labelsShrink: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      endTime: 'string',
      isTempAlgo: 'boolean',
      labelsShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  trainingJobs?: ListTrainingJobsResponseBodyTrainingJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trainingJobs: 'TrainingJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      trainingJobs: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrainingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleQuotaRequest extends $tea.Model {
  min?: ResourceSpec;
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: ResourceSpec,
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ScaleQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainingJobResponseBody extends $tea.Model {
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

export class StopTrainingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmRequest extends $tea.Model {
  algorithmDescription?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmResponseBody extends $tea.Model {
  algorithmId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionRequest extends $tea.Model {
  algorithmSpec?: AlgorithmSpec;
  static names(): { [key: string]: string } {
    return {
      algorithmSpec: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpec: AlgorithmSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionShrinkRequest extends $tea.Model {
  algorithmSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmSpecShrink: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionResponseBody extends $tea.Model {
  algorithmId?: string;
  algorithmVersion?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmVersion: 'AlgorithmVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAlgorithmVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaRequest extends $tea.Model {
  description?: string;
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupRequest extends $tea.Model {
  unbind?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      unbind: 'Unbind',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unbind: 'boolean',
      userVpc: UserVpc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBody extends $tea.Model {
  resourceGroupID?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupID: 'ResourceGroupID',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupID: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainingJobLabelsRequest extends $tea.Model {
  labels?: UpdateTrainingJobLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateTrainingJobLabelsRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainingJobLabelsResponseBody extends $tea.Model {
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

export class UpdateTrainingJobLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTrainingJobLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTrainingJobLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecComputeResourcePolicy extends $tea.Model {
  value?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecComputeResource extends $tea.Model {
  policy?: AlgorithmSpecComputeResourcePolicy;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: AlgorithmSpecComputeResourcePolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecCustomization extends $tea.Model {
  codeDir?: boolean;
  static names(): { [key: string]: string } {
    return {
      codeDir: 'CodeDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDir: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecProgressDefinitionsOverallProgress extends $tea.Model {
  description?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecProgressDefinitionsRemainingTime extends $tea.Model {
  description?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecProgressDefinitions extends $tea.Model {
  overallProgress?: AlgorithmSpecProgressDefinitionsOverallProgress;
  remainingTime?: AlgorithmSpecProgressDefinitionsRemainingTime;
  static names(): { [key: string]: string } {
    return {
      overallProgress: 'OverallProgress',
      remainingTime: 'RemainingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallProgress: AlgorithmSpecProgressDefinitionsOverallProgress,
      remainingTime: AlgorithmSpecProgressDefinitionsRemainingTime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeaturesQuota extends $tea.Model {
  isEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestComputeResourceInstanceSpec extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestComputeResource extends $tea.Model {
  ecsCount?: number;
  ecsSpec?: string;
  instanceCount?: number;
  instanceSpec?: CreateTrainingJobRequestComputeResourceInstanceSpec;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      instanceCount: 'InstanceCount',
      instanceSpec: 'InstanceSpec',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
      instanceCount: 'number',
      instanceSpec: CreateTrainingJobRequestComputeResourceInstanceSpec,
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestHyperParameters extends $tea.Model {
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

export class CreateTrainingJobRequestInputChannels extends $tea.Model {
  datasetId?: string;
  inputUri?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestLabels extends $tea.Model {
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

export class CreateTrainingJobRequestOutputChannels extends $tea.Model {
  datasetId?: string;
  name?: string;
  outputUri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      name: 'Name',
      outputUri: 'OutputUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      name: 'string',
      outputUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestScheduler extends $tea.Model {
  maxRunningTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestUserVpc extends $tea.Model {
  extendedCIDRs?: string[];
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyComputeResource extends $tea.Model {
  ecsCount?: number;
  ecsSpec?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyHyperParameters extends $tea.Model {
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

export class GetTrainingJobResponseBodyInputChannels extends $tea.Model {
  datasetId?: string;
  inputUri?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyInstances extends $tea.Model {
  name?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLabels extends $tea.Model {
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

export class GetTrainingJobResponseBodyLatestMetrics extends $tea.Model {
  name?: string;
  timestamp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      timestamp: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLatestProgressOverallProgress extends $tea.Model {
  timestamp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLatestProgressRemainingTime extends $tea.Model {
  timestamp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLatestProgress extends $tea.Model {
  overallProgress?: GetTrainingJobResponseBodyLatestProgressOverallProgress;
  remainingTime?: GetTrainingJobResponseBodyLatestProgressRemainingTime;
  static names(): { [key: string]: string } {
    return {
      overallProgress: 'OverallProgress',
      remainingTime: 'RemainingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallProgress: GetTrainingJobResponseBodyLatestProgressOverallProgress,
      remainingTime: GetTrainingJobResponseBodyLatestProgressRemainingTime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyOutputChannels extends $tea.Model {
  datasetId?: string;
  name?: string;
  outputUri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      name: 'Name',
      outputUri: 'OutputUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      name: 'string',
      outputUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyScheduler extends $tea.Model {
  maxRunningTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyStatusTransitions extends $tea.Model {
  endTime?: string;
  reasonCode?: string;
  reasonMessage?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyUserVpc extends $tea.Model {
  extendedCIDRs?: string[];
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsResponseBodyAlgorithmVersions extends $tea.Model {
  algorithmId?: string;
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmVersion?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  tenantId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBodyAlgorithms extends $tea.Model {
  algorithmDescription?: string;
  algorithmId?: string;
  algorithmName?: string;
  algorithmProvider?: string;
  displayName?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsResponseBodyMetrics extends $tea.Model {
  name?: string;
  timestamp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      timestamp: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsComputeResource extends $tea.Model {
  ecsCount?: number;
  ecsSpec?: string;
  instanceCount?: number;
  instanceSpec?: ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      instanceCount: 'InstanceCount',
      instanceSpec: 'InstanceSpec',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
      instanceCount: 'number',
      instanceSpec: ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec,
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsHyperParameters extends $tea.Model {
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

export class ListTrainingJobsResponseBodyTrainingJobsInputChannels extends $tea.Model {
  datasetId?: string;
  inputUri?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsLabels extends $tea.Model {
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

export class ListTrainingJobsResponseBodyTrainingJobsOutputChannels extends $tea.Model {
  datasetId?: string;
  name?: string;
  outputUri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      name: 'Name',
      outputUri: 'OutputUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      name: 'string',
      outputUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsScheduler extends $tea.Model {
  maxRunningTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsStatusTransitions extends $tea.Model {
  endTime?: string;
  reasonCode?: string;
  reasonMessage?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsUserVpc extends $tea.Model {
  extendedCIDRs?: string[];
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobs extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmVersion?: string;
  computeResource?: ListTrainingJobsResponseBodyTrainingJobsComputeResource;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  hyperParameters?: ListTrainingJobsResponseBodyTrainingJobsHyperParameters[];
  inputChannels?: ListTrainingJobsResponseBodyTrainingJobsInputChannels[];
  isTempAlgo?: boolean;
  labels?: ListTrainingJobsResponseBodyTrainingJobsLabels[];
  outputChannels?: ListTrainingJobsResponseBodyTrainingJobsOutputChannels[];
  reasonCode?: string;
  reasonMessage?: string;
  roleArn?: string;
  scheduler?: ListTrainingJobsResponseBodyTrainingJobsScheduler;
  status?: string;
  statusTransitions?: ListTrainingJobsResponseBodyTrainingJobsStatusTransitions[];
  trainingJobDescription?: string;
  trainingJobId?: string;
  trainingJobName?: string;
  userId?: string;
  userVpc?: ListTrainingJobsResponseBodyTrainingJobsUserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      computeResource: 'ComputeResource',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperParameters: 'HyperParameters',
      inputChannels: 'InputChannels',
      isTempAlgo: 'IsTempAlgo',
      labels: 'Labels',
      outputChannels: 'OutputChannels',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      roleArn: 'RoleArn',
      scheduler: 'Scheduler',
      status: 'Status',
      statusTransitions: 'StatusTransitions',
      trainingJobDescription: 'TrainingJobDescription',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      computeResource: ListTrainingJobsResponseBodyTrainingJobsComputeResource,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hyperParameters: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsHyperParameters },
      inputChannels: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsInputChannels },
      isTempAlgo: 'boolean',
      labels: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsLabels },
      outputChannels: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsOutputChannels },
      reasonCode: 'string',
      reasonMessage: 'string',
      roleArn: 'string',
      scheduler: ListTrainingJobsResponseBodyTrainingJobsScheduler,
      status: 'string',
      statusTransitions: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsStatusTransitions },
      trainingJobDescription: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      userId: 'string',
      userVpc: ListTrainingJobsResponseBodyTrainingJobsUserVpc,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainingJobLabelsRequestLabels extends $tea.Model {
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
      'cn-beijing': "pai.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "pai.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "pai.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "pai.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "pai.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "pai.ap-southeast-5.aliyuncs.com",
      'us-west-1': "pai.us-west-1.aliyuncs.com",
      'us-east-1': "pai.us-east-1.aliyuncs.com",
      'eu-central-1': "pai.eu-central-1.aliyuncs.com",
      'me-east-1': "pai.me-east-1.aliyuncs.com",
      'ap-south-1': "pai.ap-south-1.aliyuncs.com",
      'cn-qingdao': "pai.cn-qingdao.aliyuncs.com",
      'cn-zhangjiakou': "pai.cn-zhangjiakou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paistudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAlgorithmWithOptions(request: CreateAlgorithmRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAlgorithmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmDescription)) {
      body["AlgorithmDescription"] = request.algorithmDescription;
    }

    if (!Util.isUnset(request.algorithmName)) {
      body["AlgorithmName"] = request.algorithmName;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlgorithmResponse>(await this.callApi(params, req, runtime), new CreateAlgorithmResponse({}));
  }

  async createAlgorithm(request: CreateAlgorithmRequest): Promise<CreateAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlgorithmWithOptions(request, headers, runtime);
  }

  async createAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, tmpReq: CreateAlgorithmVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAlgorithmVersionResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAlgorithmVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.algorithmSpec)) {
      request.algorithmSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.algorithmSpec, "AlgorithmSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmSpecShrink)) {
      body["AlgorithmSpec"] = request.algorithmSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${OpenApiUtil.getEncodeParam(AlgorithmId)}/versions/${OpenApiUtil.getEncodeParam(AlgorithmVersion)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new CreateAlgorithmVersionResponse({}));
  }

  async createAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string, request: CreateAlgorithmVersionRequest): Promise<CreateAlgorithmVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, request, headers, runtime);
  }

  async createQuotaWithOptions(request: CreateQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateQuotaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allocateStrategy)) {
      body["AllocateStrategy"] = request.allocateStrategy;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.min)) {
      body["Min"] = request.min;
    }

    if (!Util.isUnset(request.parentQuotaId)) {
      body["ParentQuotaId"] = request.parentQuotaId;
    }

    if (!Util.isUnset(request.queueStrategy)) {
      body["QueueStrategy"] = request.queueStrategy;
    }

    if (!Util.isUnset(request.quotaConfig)) {
      body["QuotaConfig"] = request.quotaConfig;
    }

    if (!Util.isUnset(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateQuotaResponse>(await this.callApi(params, req, runtime), new CreateQuotaResponse({}));
  }

  async createQuota(request: CreateQuotaRequest): Promise<CreateQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaWithOptions(request, headers, runtime);
  }

  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.computingResourceProvider)) {
      body["ComputingResourceProvider"] = request.computingResourceProvider;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateResourceGroupResponse({}));
  }

  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceGroupWithOptions(request, headers, runtime);
  }

  async createTrainingJobWithOptions(request: CreateTrainingJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTrainingJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmName)) {
      body["AlgorithmName"] = request.algorithmName;
    }

    if (!Util.isUnset(request.algorithmProvider)) {
      body["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!Util.isUnset(request.algorithmSpec)) {
      body["AlgorithmSpec"] = request.algorithmSpec;
    }

    if (!Util.isUnset(request.algorithmVersion)) {
      body["AlgorithmVersion"] = request.algorithmVersion;
    }

    if (!Util.isUnset(request.codeDir)) {
      body["CodeDir"] = request.codeDir;
    }

    if (!Util.isUnset(request.computeResource)) {
      body["ComputeResource"] = request.computeResource;
    }

    if (!Util.isUnset(request.hyperParameters)) {
      body["HyperParameters"] = request.hyperParameters;
    }

    if (!Util.isUnset(request.inputChannels)) {
      body["InputChannels"] = request.inputChannels;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.outputChannels)) {
      body["OutputChannels"] = request.outputChannels;
    }

    if (!Util.isUnset(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.trainingJobDescription)) {
      body["TrainingJobDescription"] = request.trainingJobDescription;
    }

    if (!Util.isUnset(request.trainingJobName)) {
      body["TrainingJobName"] = request.trainingJobName;
    }

    if (!Util.isUnset(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTrainingJobResponse>(await this.callApi(params, req, runtime), new CreateTrainingJobResponse({}));
  }

  async createTrainingJob(request: CreateTrainingJobRequest): Promise<CreateTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainingJobWithOptions(request, headers, runtime);
  }

  async deleteMachineGroupWithOptions(MachineGroupID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMachineGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/machinegroups/${OpenApiUtil.getEncodeParam(MachineGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMachineGroupResponse>(await this.callApi(params, req, runtime), new DeleteMachineGroupResponse({}));
  }

  async deleteMachineGroup(MachineGroupID: string): Promise<DeleteMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMachineGroupWithOptions(MachineGroupID, headers, runtime);
  }

  async deleteQuotaWithOptions(QuotaId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(QuotaId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteQuotaResponse>(await this.callApi(params, req, runtime), new DeleteQuotaResponse({}));
  }

  async deleteQuota(QuotaId: string): Promise<DeleteQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaWithOptions(QuotaId, headers, runtime);
  }

  async deleteResourceGroupWithOptions(ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupResponse({}));
  }

  async deleteResourceGroup(ResourceGroupID: string): Promise<DeleteResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceGroupWithOptions(ResourceGroupID, headers, runtime);
  }

  async deleteResourceGroupMachineGroupWithOptions(MachineGroupID: string, ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceGroupMachineGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceGroupMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}/machinegroups/${OpenApiUtil.getEncodeParam(MachineGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceGroupMachineGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupMachineGroupResponse({}));
  }

  async deleteResourceGroupMachineGroup(MachineGroupID: string, ResourceGroupID: string): Promise<DeleteResourceGroupMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceGroupMachineGroupWithOptions(MachineGroupID, ResourceGroupID, headers, runtime);
  }

  async getAlgorithmWithOptions(AlgorithmId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${OpenApiUtil.getEncodeParam(AlgorithmId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmResponse>(await this.callApi(params, req, runtime), new GetAlgorithmResponse({}));
  }

  async getAlgorithm(AlgorithmId: string): Promise<GetAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmWithOptions(AlgorithmId, headers, runtime);
  }

  async getAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${OpenApiUtil.getEncodeParam(AlgorithmId)}/versions/${OpenApiUtil.getEncodeParam(AlgorithmVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new GetAlgorithmVersionResponse({}));
  }

  async getAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string): Promise<GetAlgorithmVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, headers, runtime);
  }

  async getMachineGroupWithOptions(MachineGroupID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMachineGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/machinegroups/${OpenApiUtil.getEncodeParam(MachineGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMachineGroupResponse>(await this.callApi(params, req, runtime), new GetMachineGroupResponse({}));
  }

  async getMachineGroup(MachineGroupID: string): Promise<GetMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMachineGroupWithOptions(MachineGroupID, headers, runtime);
  }

  async getNodeMetricsWithOptions(ResourceGroupID: string, MetricType: string, request: GetNodeMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.GPUType)) {
      query["GPUType"] = request.GPUType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}/nodemetrics/${OpenApiUtil.getEncodeParam(MetricType)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetNodeMetricsResponse>(await this.callApi(params, req, runtime), new GetNodeMetricsResponse({}));
  }

  async getNodeMetrics(ResourceGroupID: string, MetricType: string, request: GetNodeMetricsRequest): Promise<GetNodeMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeMetricsWithOptions(ResourceGroupID, MetricType, request, headers, runtime);
  }

  async getQuotaWithOptions(QuotaId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(QuotaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaResponse>(await this.callApi(params, req, runtime), new GetQuotaResponse({}));
  }

  async getQuota(QuotaId: string): Promise<GetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(QuotaId, headers, runtime);
  }

  async getResourceGroupWithOptions(ResourceGroupID: string, request: GetResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isAIWorkspaceDataEnabled)) {
      query["IsAIWorkspaceDataEnabled"] = request.isAIWorkspaceDataEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupResponse({}));
  }

  async getResourceGroup(ResourceGroupID: string, request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupWithOptions(ResourceGroupID, request, headers, runtime);
  }

  async getResourceGroupMachineGroupWithOptions(MachineGroupID: string, ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupMachineGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroupMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}/machinegroups/${OpenApiUtil.getEncodeParam(MachineGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupMachineGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupMachineGroupResponse({}));
  }

  async getResourceGroupMachineGroup(MachineGroupID: string, ResourceGroupID: string): Promise<GetResourceGroupMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupMachineGroupWithOptions(MachineGroupID, ResourceGroupID, headers, runtime);
  }

  async getResourceGroupRequestWithOptions(request: GetResourceGroupRequestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupRequestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.podStatus)) {
      query["PodStatus"] = request.podStatus;
    }

    if (!Util.isUnset(request.resourceGroupID)) {
      query["ResourceGroupID"] = request.resourceGroupID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroupRequest",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/data/request`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupRequestResponse>(await this.callApi(params, req, runtime), new GetResourceGroupRequestResponse({}));
  }

  async getResourceGroupRequest(request: GetResourceGroupRequestRequest): Promise<GetResourceGroupRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupRequestWithOptions(request, headers, runtime);
  }

  async getResourceGroupTotalWithOptions(request: GetResourceGroupTotalRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupTotalResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceGroupID)) {
      query["ResourceGroupID"] = request.resourceGroupID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroupTotal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/data/total`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupTotalResponse>(await this.callApi(params, req, runtime), new GetResourceGroupTotalResponse({}));
  }

  async getResourceGroupTotal(request: GetResourceGroupTotalRequest): Promise<GetResourceGroupTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupTotalWithOptions(request, headers, runtime);
  }

  async getTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrainingJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${OpenApiUtil.getEncodeParam(TrainingJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrainingJobResponse>(await this.callApi(params, req, runtime), new GetTrainingJobResponse({}));
  }

  async getTrainingJob(TrainingJobId: string): Promise<GetTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  async getUserViewMetricsWithOptions(ResourceGroupID: string, request: GetUserViewMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserViewMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserViewMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}/usermetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserViewMetricsResponse>(await this.callApi(params, req, runtime), new GetUserViewMetricsResponse({}));
  }

  async getUserViewMetrics(ResourceGroupID: string, request: GetUserViewMetricsRequest): Promise<GetUserViewMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserViewMetricsWithOptions(ResourceGroupID, request, headers, runtime);
  }

  async listAlgorithmVersionsWithOptions(AlgorithmId: string, request: ListAlgorithmVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlgorithmVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlgorithmVersions",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${OpenApiUtil.getEncodeParam(AlgorithmId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlgorithmVersionsResponse>(await this.callApi(params, req, runtime), new ListAlgorithmVersionsResponse({}));
  }

  async listAlgorithmVersions(AlgorithmId: string, request: ListAlgorithmVersionsRequest): Promise<ListAlgorithmVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmVersionsWithOptions(AlgorithmId, request, headers, runtime);
  }

  async listAlgorithmsWithOptions(request: ListAlgorithmsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlgorithmsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmId)) {
      query["AlgorithmId"] = request.algorithmId;
    }

    if (!Util.isUnset(request.algorithmName)) {
      query["AlgorithmName"] = request.algorithmName;
    }

    if (!Util.isUnset(request.algorithmProvider)) {
      query["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlgorithms",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlgorithmsResponse>(await this.callApi(params, req, runtime), new ListAlgorithmsResponse({}));
  }

  async listAlgorithms(request: ListAlgorithmsRequest): Promise<ListAlgorithmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmsWithOptions(request, headers, runtime);
  }

  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQuotasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentQuotaId)) {
      query["ParentQuotaId"] = request.parentQuotaId;
    }

    if (!Util.isUnset(request.quotaIds)) {
      query["QuotaIds"] = request.quotaIds;
    }

    if (!Util.isUnset(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotas",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
  }

  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  async listResourceGroupMachineGroupsWithOptions(ResourceGroupID: string, request: ListResourceGroupMachineGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupMachineGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creatorID)) {
      query["CreatorID"] = request.creatorID;
    }

    if (!Util.isUnset(request.ecsSpec)) {
      query["EcsSpec"] = request.ecsSpec;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paymentDuration)) {
      query["PaymentDuration"] = request.paymentDuration;
    }

    if (!Util.isUnset(request.paymentDurationUnit)) {
      query["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceGroupMachineGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceGroupMachineGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupMachineGroupsResponse({}));
  }

  async listResourceGroupMachineGroups(ResourceGroupID: string, request: ListResourceGroupMachineGroupsRequest): Promise<ListResourceGroupMachineGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupMachineGroupsWithOptions(ResourceGroupID, request, headers, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.computingResourceProvider)) {
      query["ComputingResourceProvider"] = request.computingResourceProvider;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.showAll)) {
      query["ShowAll"] = request.showAll;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupsWithOptions(request, headers, runtime);
  }

  async listTrainingJobLogsWithOptions(TrainingJobId: string, request: ListTrainingJobLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrainingJobLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrainingJobLogs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${OpenApiUtil.getEncodeParam(TrainingJobId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTrainingJobLogsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobLogsResponse({}));
  }

  async listTrainingJobLogs(TrainingJobId: string, request: ListTrainingJobLogsRequest): Promise<ListTrainingJobLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobLogsWithOptions(TrainingJobId, request, headers, runtime);
  }

  async listTrainingJobMetricsWithOptions(TrainingJobId: string, request: ListTrainingJobMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrainingJobMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrainingJobMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${OpenApiUtil.getEncodeParam(TrainingJobId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTrainingJobMetricsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobMetricsResponse({}));
  }

  async listTrainingJobMetrics(TrainingJobId: string, request: ListTrainingJobMetricsRequest): Promise<ListTrainingJobMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  async listTrainingJobsWithOptions(tmpReq: ListTrainingJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrainingJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTrainingJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmName)) {
      query["AlgorithmName"] = request.algorithmName;
    }

    if (!Util.isUnset(request.algorithmProvider)) {
      query["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isTempAlgo)) {
      query["IsTempAlgo"] = request.isTempAlgo;
    }

    if (!Util.isUnset(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.trainingJobId)) {
      query["TrainingJobId"] = request.trainingJobId;
    }

    if (!Util.isUnset(request.trainingJobName)) {
      query["TrainingJobName"] = request.trainingJobName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrainingJobs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTrainingJobsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobsResponse({}));
  }

  async listTrainingJobs(request: ListTrainingJobsRequest): Promise<ListTrainingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobsWithOptions(request, headers, runtime);
  }

  async scaleQuotaWithOptions(QuotaId: string, request: ScaleQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleQuotaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.min)) {
      body["Min"] = request.min;
    }

    if (!Util.isUnset(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScaleQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(QuotaId)}/action/scale`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleQuotaResponse>(await this.callApi(params, req, runtime), new ScaleQuotaResponse({}));
  }

  async scaleQuota(QuotaId: string, request: ScaleQuotaRequest): Promise<ScaleQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  async stopTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopTrainingJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${OpenApiUtil.getEncodeParam(TrainingJobId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopTrainingJobResponse>(await this.callApi(params, req, runtime), new StopTrainingJobResponse({}));
  }

  async stopTrainingJob(TrainingJobId: string): Promise<StopTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  async updateAlgorithmWithOptions(AlgorithmId: string, request: UpdateAlgorithmRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAlgorithmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmDescription)) {
      body["AlgorithmDescription"] = request.algorithmDescription;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${OpenApiUtil.getEncodeParam(AlgorithmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlgorithmResponse>(await this.callApi(params, req, runtime), new UpdateAlgorithmResponse({}));
  }

  async updateAlgorithm(AlgorithmId: string, request: UpdateAlgorithmRequest): Promise<UpdateAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlgorithmWithOptions(AlgorithmId, request, headers, runtime);
  }

  async updateAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, tmpReq: UpdateAlgorithmVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAlgorithmVersionResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAlgorithmVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.algorithmSpec)) {
      request.algorithmSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.algorithmSpec, "AlgorithmSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmSpecShrink)) {
      body["AlgorithmSpec"] = request.algorithmSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${OpenApiUtil.getEncodeParam(AlgorithmId)}/versions/${OpenApiUtil.getEncodeParam(AlgorithmVersion)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new UpdateAlgorithmVersionResponse({}));
  }

  async updateAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string, request: UpdateAlgorithmVersionRequest): Promise<UpdateAlgorithmVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, request, headers, runtime);
  }

  async updateQuotaWithOptions(QuotaId: string, request: UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(QuotaId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateQuotaResponse>(await this.callApi(params, req, runtime), new UpdateQuotaResponse({}));
  }

  async updateQuota(QuotaId: string, request: UpdateQuotaRequest): Promise<UpdateQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  async updateResourceGroupWithOptions(ResourceGroupID: string, request: UpdateResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.unbind)) {
      body["Unbind"] = request.unbind;
    }

    if (!Util.isUnset(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${OpenApiUtil.getEncodeParam(ResourceGroupID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupResponse({}));
  }

  async updateResourceGroup(ResourceGroupID: string, request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceGroupWithOptions(ResourceGroupID, request, headers, runtime);
  }

  async updateTrainingJobLabelsWithOptions(TrainingJobId: string, request: UpdateTrainingJobLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTrainingJobLabelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrainingJobLabels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${OpenApiUtil.getEncodeParam(TrainingJobId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTrainingJobLabelsResponse>(await this.callApi(params, req, runtime), new UpdateTrainingJobLabelsResponse({}));
  }

  async updateTrainingJobLabels(TrainingJobId: string, request: UpdateTrainingJobLabelsRequest): Promise<UpdateTrainingJobLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrainingJobLabelsWithOptions(TrainingJobId, request, headers, runtime);
  }

}
