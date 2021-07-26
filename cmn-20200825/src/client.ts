// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class OrderStep extends $tea.Model {
  displayMethod?: string;
  gmtCreate?: string;
  gmtModify?: string;
  jobKwargs?: string;
  jobMessage?: string;
  jobReturnStatus?: string;
  jobReturnValues?: string;
  jobSystem?: string;
  orderId?: string;
  orderStepId?: string;
  realNextStep?: string;
  restriction?: OrderStepRestriction[];
  stepName?: string;
  stepStatus?: string;
  stepTitle?: string;
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      displayMethod: 'DisplayMethod',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      jobKwargs: 'JobKwargs',
      jobMessage: 'JobMessage',
      jobReturnStatus: 'JobReturnStatus',
      jobReturnValues: 'JobReturnValues',
      jobSystem: 'JobSystem',
      orderId: 'OrderId',
      orderStepId: 'OrderStepId',
      realNextStep: 'RealNextStep',
      restriction: 'Restriction',
      stepName: 'StepName',
      stepStatus: 'StepStatus',
      stepTitle: 'StepTitle',
      stepType: 'StepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayMethod: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      jobKwargs: 'string',
      jobMessage: 'string',
      jobReturnStatus: 'string',
      jobReturnValues: 'string',
      jobSystem: 'string',
      orderId: 'string',
      orderStepId: 'string',
      realNextStep: 'string',
      restriction: { 'type': 'array', 'itemType': OrderStepRestriction },
      stepName: 'string',
      stepStatus: 'string',
      stepTitle: 'string',
      stepType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceForm extends $tea.Model {
  accountConfig?: string;
  configCompare?: string;
  formId?: string;
  formName?: string;
  propertiesList?: DeviceFormProperty[];
  static names(): { [key: string]: string } {
    return {
      accountConfig: 'AccountConfig',
      configCompare: 'ConfigCompare',
      formId: 'FormId',
      formName: 'FormName',
      propertiesList: 'PropertiesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountConfig: 'string',
      configCompare: 'string',
      formId: 'string',
      formName: 'string',
      propertiesList: { 'type': 'array', 'itemType': DeviceFormProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleType extends $tea.Model {
  scheduleTypeId?: string;
  createTime?: string;
  updateTime?: string;
  key?: string;
  value?: string;
  status?: string;
  relatedWorker?: string[];
  static names(): { [key: string]: string } {
    return {
      scheduleTypeId: 'ScheduleTypeId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      key: 'Key',
      value: 'Value',
      status: 'Status',
      relatedWorker: 'RelatedWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTypeId: 'string',
      createTime: 'string',
      updateTime: 'string',
      key: 'string',
      value: 'string',
      status: 'string',
      relatedWorker: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Task extends $tea.Model {
  category?: string;
  gmtCreate?: string;
  gmtModify?: string;
  params?: string;
  responseCode?: string;
  result?: string;
  status?: string;
  taskId?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      params: 'Params',
      responseCode: 'ResponseCode',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      params: 'string',
      responseCode: 'string',
      result: 'string',
      status: 'string',
      taskId: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Scheme extends $tea.Model {
  category?: string;
  content?: string;
  description?: string;
  gmtCreate?: string;
  gmtModify?: string;
  input?: SchemeInput[];
  output?: SchemeOutput[];
  schemeId?: string;
  schemeName?: string;
  status?: string;
  view?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      input: 'Input',
      output: 'Output',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      status: 'Status',
      view: 'View',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      input: { 'type': 'array', 'itemType': SchemeInput },
      output: { 'type': 'array', 'itemType': SchemeOutput },
      schemeId: 'string',
      schemeName: 'string',
      status: 'string',
      view: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregateData extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  dataItem?: string;
  deviceIdList?: string[];
  aggregateModeList?: string[];
  aggregateDataName?: string;
  aggregateDataDescription?: string;
  isAllDevice?: number;
  monitorItemId?: string;
  aggregateDataId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      dataItem: 'DataItem',
      deviceIdList: 'DeviceIdList',
      aggregateModeList: 'AggregateModeList',
      aggregateDataName: 'AggregateDataName',
      aggregateDataDescription: 'AggregateDataDescription',
      isAllDevice: 'IsAllDevice',
      monitorItemId: 'MonitorItemId',
      aggregateDataId: 'AggregateDataId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      dataItem: 'string',
      deviceIdList: { 'type': 'array', 'itemType': 'string' },
      aggregateModeList: { 'type': 'array', 'itemType': 'string' },
      aggregateDataName: 'string',
      aggregateDataDescription: 'string',
      isAllDevice: 'number',
      monitorItemId: 'string',
      aggregateDataId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpaceModel extends $tea.Model {
  spaceModelName?: string;
  createTime?: string;
  spaceModelId?: string;
  spaceType?: string;
  sort?: SpaceModelSort;
  spaceModel?: SpaceModelSpaceModel;
  spaceId?: string;
  instance?: string;
  status?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      spaceModelName: 'SpaceModelName',
      createTime: 'CreateTime',
      spaceModelId: 'SpaceModelId',
      spaceType: 'SpaceType',
      sort: 'Sort',
      spaceModel: 'SpaceModel',
      spaceId: 'SpaceId',
      instance: 'Instance',
      status: 'Status',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceModelName: 'string',
      createTime: 'string',
      spaceModelId: 'string',
      spaceType: 'string',
      sort: SpaceModelSort,
      spaceModel: SpaceModelSpaceModel,
      spaceId: 'string',
      instance: 'string',
      status: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Port extends $tea.Model {
  deviceId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  portCollectionId?: string;
  portName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      portCollectionId: 'PortCollectionId',
      portName: 'PortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      portCollectionId: 'string',
      portName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessType extends $tea.Model {
  businessTypeId?: string;
  createTime?: string;
  updateTime?: string;
  name?: string;
  abbr?: string;
  mask?: string;
  gateway?: number;
  sharing?: string;
  direction?: number;
  reserveNumber?: number;
  type?: string;
  zoneType?: string;
  leaseTime?: string;
  vlan?: string;
  actionFlag?: string;
  static names(): { [key: string]: string } {
    return {
      businessTypeId: 'BusinessTypeId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      name: 'Name',
      abbr: 'Abbr',
      mask: 'Mask',
      gateway: 'Gateway',
      sharing: 'Sharing',
      direction: 'Direction',
      reserveNumber: 'ReserveNumber',
      type: 'Type',
      zoneType: 'ZoneType',
      leaseTime: 'LeaseTime',
      vlan: 'Vlan',
      actionFlag: 'ActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeId: 'string',
      createTime: 'string',
      updateTime: 'string',
      name: 'string',
      abbr: 'string',
      mask: 'string',
      gateway: 'number',
      sharing: 'string',
      direction: 'number',
      reserveNumber: 'number',
      type: 'string',
      zoneType: 'string',
      leaseTime: 'string',
      vlan: 'string',
      actionFlag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationGroup extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  notificationGroupDescription?: string;
  notificationGroupId?: string;
  notificationGroupName?: string;
  notificationGroupType?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      notificationGroupDescription: 'NotificationGroupDescription',
      notificationGroupId: 'NotificationGroupId',
      notificationGroupName: 'NotificationGroupName',
      notificationGroupType: 'NotificationGroupType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      notificationGroupDescription: 'string',
      notificationGroupId: 'string',
      notificationGroupName: 'string',
      notificationGroupType: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Template extends $tea.Model {
  category?: string;
  comment?: string;
  gmtCreate?: string;
  gmtModify?: string;
  input?: TemplateInput[];
  output?: TemplateOutput[];
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      input: 'Input',
      output: 'Output',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      comment: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      input: { 'type': 'array', 'itemType': TemplateInput },
      output: { 'type': 'array', 'itemType': TemplateOutput },
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DedicatedLine extends $tea.Model {
  bandwidth?: number;
  deviceId?: string;
  devicePort?: string;
  isp?: string;
  lineGateway?: string;
  lineId?: string;
  lineIp?: string;
  lineRole?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      isp: 'Isp',
      lineGateway: 'LineGateway',
      lineId: 'LineId',
      lineIp: 'LineIp',
      lineRole: 'LineRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      deviceId: 'string',
      devicePort: 'string',
      isp: 'string',
      lineGateway: 'string',
      lineId: 'string',
      lineIp: 'string',
      lineRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceResource extends $tea.Model {
  createTime?: string;
  deviceResourceIds?: string[];
  deviceResourceId?: string;
  setupProjectId?: string;
  type?: string;
  data?: string;
  downloadType?: string;
  businessType?: string;
  listType?: string;
  archId?: string;
  deviceResource?: DeviceResourceDeviceResource[];
  ipType?: string;
  netLocation?: string;
  businessTypeParams?: string;
  loopbackPort?: string;
  businessTypeId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deviceResourceIds: 'DeviceResourceIds',
      deviceResourceId: 'DeviceResourceId',
      setupProjectId: 'SetupProjectId',
      type: 'Type',
      data: 'Data',
      downloadType: 'DownloadType',
      businessType: 'BusinessType',
      listType: 'ListType',
      archId: 'ArchId',
      deviceResource: 'DeviceResource',
      ipType: 'IpType',
      netLocation: 'NetLocation',
      businessTypeParams: 'BusinessTypeParams',
      loopbackPort: 'LoopbackPort',
      businessTypeId: 'BusinessTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      deviceResourceId: 'string',
      setupProjectId: 'string',
      type: 'string',
      data: 'string',
      downloadType: 'string',
      businessType: 'string',
      listType: 'string',
      archId: 'string',
      deviceResource: { 'type': 'array', 'itemType': DeviceResourceDeviceResource },
      ipType: 'string',
      netLocation: 'string',
      businessTypeParams: 'string',
      loopbackPort: 'string',
      businessTypeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelToRole extends $tea.Model {
  modelToRoleId?: string;
  createTime?: string;
  updateTime?: string;
  id?: string;
  networkArchitectureIterationId?: string;
  role?: string;
  vendor?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      modelToRoleId: 'ModelToRoleId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      id: 'Id',
      networkArchitectureIterationId: 'NetworkArchitectureIterationId',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelToRoleId: 'string',
      createTime: 'string',
      updateTime: 'string',
      id: 'string',
      networkArchitectureIterationId: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleWorker extends $tea.Model {
  createTime?: string;
  scheduleWorkerId?: string;
  updateTime?: string;
  workerId?: string;
  workerName?: string;
  workerContact?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      scheduleWorkerId: 'ScheduleWorkerId',
      updateTime: 'UpdateTime',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
      workerContact: 'WorkerContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      scheduleWorkerId: 'string',
      updateTime: 'string',
      workerId: 'string',
      workerName: 'string',
      workerContact: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpBlock extends $tea.Model {
  resourceGroupId?: string;
  createTime?: string;
  ipBlockId?: string;
  block?: string;
  mask?: string;
  parentId?: string;
  netType?: string;
  category?: string;
  businessTypeId?: string;
  deviceName?: string;
  zoneName?: string;
  backupDeviceName?: string;
  netBusiness?: string;
  ownership?: string;
  application?: string;
  description?: string;
  reserveParentBlock?: string;
  updateType?: string;
  zoneLayer?: IpBlockZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      createTime: 'CreateTime',
      ipBlockId: 'IpBlockId',
      block: 'Block',
      mask: 'Mask',
      parentId: 'ParentId',
      netType: 'NetType',
      category: 'Category',
      businessTypeId: 'BusinessTypeId',
      deviceName: 'DeviceName',
      zoneName: 'ZoneName',
      backupDeviceName: 'BackupDeviceName',
      netBusiness: 'NetBusiness',
      ownership: 'Ownership',
      application: 'Application',
      description: 'Description',
      reserveParentBlock: 'ReserveParentBlock',
      updateType: 'UpdateType',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      createTime: 'string',
      ipBlockId: 'string',
      block: 'string',
      mask: 'string',
      parentId: 'string',
      netType: 'string',
      category: 'string',
      businessTypeId: 'string',
      deviceName: 'string',
      zoneName: 'string',
      backupDeviceName: 'string',
      netBusiness: 'string',
      ownership: 'string',
      application: 'string',
      description: 'string',
      reserveParentBlock: 'string',
      updateType: 'string',
      zoneLayer: { 'type': 'array', 'itemType': IpBlockZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Order extends $tea.Model {
  gmtCreate?: string;
  gmtModify?: string;
  orderId?: string;
  output?: string;
  params?: string;
  schemeId?: string;
  schemeName?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      orderId: 'OrderId',
      output: 'Output',
      params: 'Params',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      orderId: 'string',
      output: 'string',
      params: 'string',
      schemeId: 'string',
      schemeName: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Script extends $tea.Model {
  content?: string;
  gmtCreate?: string;
  gmtModify?: string;
  input?: ScriptInput[];
  output?: ScriptOutput[];
  rules?: ScriptRule[];
  scriptId?: string;
  templateId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      input: 'Input',
      output: 'Output',
      rules: 'Rules',
      scriptId: 'ScriptId',
      templateId: 'TemplateId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      input: { 'type': 'array', 'itemType': ScriptInput },
      output: { 'type': 'array', 'itemType': ScriptOutput },
      rules: { 'type': 'array', 'itemType': ScriptRule },
      scriptId: 'string',
      templateId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Agent extends $tea.Model {
  agentId?: string;
  agentName?: string;
  agentVersion?: string;
  cpuUsage?: string;
  diskUsage?: string;
  gmtModify?: string;
  ip?: string;
  kernelVersion?: string;
  memoryUsage?: string;
  securityDomain?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      agentVersion: 'AgentVersion',
      cpuUsage: 'CpuUsage',
      diskUsage: 'DiskUsage',
      gmtModify: 'GmtModify',
      ip: 'Ip',
      kernelVersion: 'KernelVersion',
      memoryUsage: 'MemoryUsage',
      securityDomain: 'SecurityDomain',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      agentVersion: 'string',
      cpuUsage: 'string',
      diskUsage: 'string',
      gmtModify: 'string',
      ip: 'string',
      kernelVersion: 'string',
      memoryUsage: 'string',
      securityDomain: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInformation extends $tea.Model {
  createTime?: string;
  resourceInformationId?: string;
  updateTime?: string;
  resourceType?: string;
  resourceAttribute?: string;
  setupProjectId?: string;
  information?: ResourceInformationInformation[];
  architectureId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      resourceInformationId: 'ResourceInformationId',
      updateTime: 'UpdateTime',
      resourceType: 'ResourceType',
      resourceAttribute: 'ResourceAttribute',
      setupProjectId: 'SetupProjectId',
      information: 'Information',
      architectureId: 'ArchitectureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceInformationId: 'string',
      updateTime: 'string',
      resourceType: 'string',
      resourceAttribute: 'string',
      setupProjectId: 'string',
      information: { 'type': 'array', 'itemType': ResourceInformationInformation },
      architectureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScriptRule extends $tea.Model {
  arch?: string;
  domain?: string;
  model?: string;
  os?: string;
  role?: string;
  ruleId?: string;
  scriptId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      arch: 'Arch',
      domain: 'Domain',
      model: 'Model',
      os: 'Os',
      role: 'Role',
      ruleId: 'RuleId',
      scriptId: 'ScriptId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      domain: 'string',
      model: 'string',
      os: 'string',
      role: 'string',
      ruleId: 'string',
      scriptId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleDuty extends $tea.Model {
  createTime?: string;
  scheduleDutyId?: string;
  updateTime?: string;
  workDate?: string;
  workType?: string;
  workerName?: string;
  workerId?: string;
  startDate?: string;
  endDate?: string;
  scheduleTypeIds?: string[];
  typeWorkerList?: ScheduleDutyTypeWorkerList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      scheduleDutyId: 'ScheduleDutyId',
      updateTime: 'UpdateTime',
      workDate: 'WorkDate',
      workType: 'WorkType',
      workerName: 'WorkerName',
      workerId: 'WorkerId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      scheduleTypeIds: 'ScheduleTypeIds',
      typeWorkerList: 'TypeWorkerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      scheduleDutyId: 'string',
      updateTime: 'string',
      workDate: 'string',
      workType: 'string',
      workerName: 'string',
      workerId: 'string',
      startDate: 'string',
      endDate: 'string',
      scheduleTypeIds: { 'type': 'array', 'itemType': 'string' },
      typeWorkerList: { 'type': 'array', 'itemType': ScheduleDutyTypeWorkerList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Device extends $tea.Model {
  accountType?: string;
  accountVersion?: string;
  authPassPhrase?: string;
  authProtocol?: string;
  community?: string;
  deviceForm?: string;
  deviceId?: string;
  deviceIp?: string;
  deviceMac?: string;
  deviceSn?: string;
  hostname?: string;
  model?: string;
  privacyPassPhrase?: string;
  privacyProtocol?: string;
  securityDomain?: string;
  securityLevel?: string;
  space?: string;
  sshAccount?: string;
  sshPassword?: string;
  status?: string;
  telnetAccount?: string;
  telnetPassword?: string;
  userName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accountVersion: 'AccountVersion',
      authPassPhrase: 'AuthPassPhrase',
      authProtocol: 'AuthProtocol',
      community: 'Community',
      deviceForm: 'DeviceForm',
      deviceId: 'DeviceId',
      deviceIp: 'DeviceIp',
      deviceMac: 'DeviceMac',
      deviceSn: 'DeviceSn',
      hostname: 'Hostname',
      model: 'Model',
      privacyPassPhrase: 'PrivacyPassPhrase',
      privacyProtocol: 'PrivacyProtocol',
      securityDomain: 'SecurityDomain',
      securityLevel: 'SecurityLevel',
      space: 'Space',
      sshAccount: 'SshAccount',
      sshPassword: 'SshPassword',
      status: 'Status',
      telnetAccount: 'TelnetAccount',
      telnetPassword: 'TelnetPassword',
      userName: 'UserName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accountVersion: 'string',
      authPassPhrase: 'string',
      authProtocol: 'string',
      community: 'string',
      deviceForm: 'string',
      deviceId: 'string',
      deviceIp: 'string',
      deviceMac: 'string',
      deviceSn: 'string',
      hostname: 'string',
      model: 'string',
      privacyPassPhrase: 'string',
      privacyProtocol: 'string',
      securityDomain: 'string',
      securityLevel: 'string',
      space: 'string',
      sshAccount: 'string',
      sshPassword: 'string',
      status: 'string',
      telnetAccount: 'string',
      telnetPassword: 'string',
      userName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimePeriod extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  timePeriodDescription?: string;
  timePeriodName?: string;
  timePeriodId?: string;
  cronExpression?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      timePeriodDescription: 'TimePeriodDescription',
      timePeriodName: 'TimePeriodName',
      timePeriodId: 'TimePeriodId',
      cronExpression: 'CronExpression',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      timePeriodDescription: 'string',
      timePeriodName: 'string',
      timePeriodId: 'string',
      cronExpression: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AtomicStep extends $tea.Model {
  description?: string;
  input?: AtomicStepInput[];
  output?: AtomicStepOutput[];
  stepId?: string;
  stepName?: string;
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      input: 'Input',
      output: 'Output',
      stepId: 'StepId',
      stepName: 'StepName',
      stepType: 'StepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      input: { 'type': 'array', 'itemType': AtomicStepInput },
      output: { 'type': 'array', 'itemType': AtomicStepOutput },
      stepId: 'string',
      stepName: 'string',
      stepType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionItem extends $tea.Model {
  itemId?: string;
  itemName?: string;
  itemDescription?: string;
  inspectionCrontab?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemDescription: 'ItemDescription',
      inspectionCrontab: 'InspectionCrontab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemName: 'string',
      itemDescription: 'string',
      inspectionCrontab: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceProperty extends $tea.Model {
  content?: string;
  deviceForm?: string;
  format?: string;
  nameCn?: string;
  nameEn?: string;
  propertyId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      deviceForm: 'DeviceForm',
      format: 'Format',
      nameCn: 'NameCn',
      nameEn: 'NameEn',
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      deviceForm: 'string',
      format: 'string',
      nameCn: 'string',
      nameEn: 'string',
      propertyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentsTask extends $tea.Model {
  actionType?: string;
  agentType?: string;
  gmtCreate?: string;
  gmtModify?: string;
  params?: string;
  status?: string;
  agentsTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      agentType: 'AgentType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      params: 'Params',
      status: 'Status',
      agentsTaskId: 'AgentsTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      agentType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      params: 'string',
      status: 'string',
      agentsTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Module extends $tea.Model {
  moduleId?: string;
  createTime?: string;
  updateTime?: string;
  id?: string;
  parentModuleId?: string;
  name?: string;
  moduleType?: string;
  minCount?: number;
  maxCount?: number;
  stack?: boolean;
  device?: ModuleDevice;
  moduleDetails?: ModuleModuleDetails[];
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      id: 'Id',
      parentModuleId: 'ParentModuleId',
      name: 'Name',
      moduleType: 'ModuleType',
      minCount: 'MinCount',
      maxCount: 'MaxCount',
      stack: 'Stack',
      device: 'Device',
      moduleDetails: 'ModuleDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      createTime: 'string',
      updateTime: 'string',
      id: 'string',
      parentModuleId: 'string',
      name: 'string',
      moduleType: 'string',
      minCount: 'number',
      maxCount: 'number',
      stack: 'boolean',
      device: ModuleDevice,
      moduleDetails: { 'type': 'array', 'itemType': ModuleModuleDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataViewChart extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  dataViewId?: string;
  chartType?: string;
  dataViewSource?: string;
  grid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      dataViewId: 'DataViewId',
      chartType: 'ChartType',
      dataViewSource: 'DataViewSource',
      grid: 'Grid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      dataViewId: 'string',
      chartType: 'string',
      dataViewSource: 'string',
      grid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScriptHistory extends $tea.Model {
  comment?: string;
  content?: string;
  gmtCreate?: string;
  gmtModify?: string;
  input?: ScriptHistoryInput[];
  output?: ScriptHistoryOutput[];
  scriptId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      input: 'Input',
      output: 'Output',
      scriptId: 'ScriptId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      content: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      input: { 'type': 'array', 'itemType': ScriptHistoryInput },
      output: { 'type': 'array', 'itemType': ScriptHistoryOutput },
      scriptId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NetworkArchitecture extends $tea.Model {
  networkArchitectureId?: string;
  createTime?: string;
  updateTime?: string;
  role?: string;
  groupNumber?: number;
  deviceNumber?: number;
  availabe?: boolean;
  stack?: boolean;
  selected?: boolean;
  children?: string[];
  id?: string;
  version?: string;
  name?: string;
  description?: string;
  status?: string;
  archVersionIterationId?: string;
  static names(): { [key: string]: string } {
    return {
      networkArchitectureId: 'NetworkArchitectureId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      role: 'Role',
      groupNumber: 'GroupNumber',
      deviceNumber: 'DeviceNumber',
      availabe: 'Availabe',
      stack: 'Stack',
      selected: 'Selected',
      children: 'Children',
      id: 'Id',
      version: 'Version',
      name: 'Name',
      description: 'Description',
      status: 'Status',
      archVersionIterationId: 'ArchVersionIterationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkArchitectureId: 'string',
      createTime: 'string',
      updateTime: 'string',
      role: 'string',
      groupNumber: 'number',
      deviceNumber: 'number',
      availabe: 'boolean',
      stack: 'boolean',
      selected: 'boolean',
      children: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      version: 'string',
      name: 'string',
      description: 'string',
      status: 'string',
      archVersionIterationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationVariate extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  configurationVariateId?: string;
  variateName?: string;
  comment?: string;
  formatFunction?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      configurationVariateId: 'ConfigurationVariateId',
      variateName: 'VariateName',
      comment: 'Comment',
      formatFunction: 'FormatFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      configurationVariateId: 'string',
      variateName: 'string',
      comment: 'string',
      formatFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Ip extends $tea.Model {
  ipId?: string;
  ipName?: string;
  createTime?: string;
  ipAddress?: string;
  parentIpBlock?: string;
  businessTypeId?: string;
  businessTypeName?: string;
  status?: string;
  deviceName?: string;
  port?: string;
  deviceMac?: string;
  zoneLayer?: IpZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      ipId: 'IpId',
      ipName: 'IpName',
      createTime: 'CreateTime',
      ipAddress: 'IpAddress',
      parentIpBlock: 'ParentIpBlock',
      businessTypeId: 'BusinessTypeId',
      businessTypeName: 'BusinessTypeName',
      status: 'Status',
      deviceName: 'DeviceName',
      port: 'Port',
      deviceMac: 'DeviceMac',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipId: 'string',
      ipName: 'string',
      createTime: 'string',
      ipAddress: 'string',
      parentIpBlock: 'string',
      businessTypeId: 'string',
      businessTypeName: 'string',
      status: 'string',
      deviceName: 'string',
      port: 'string',
      deviceMac: 'string',
      zoneLayer: { 'type': 'array', 'itemType': IpZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OsVersion extends $tea.Model {
  createTime?: string;
  vendor?: string;
  model?: string;
  osVersion?: string;
  status?: string;
  fileName?: string;
  filePath?: string;
  osVersionId?: string;
  accessId?: string;
  policy?: string;
  signature?: string;
  directory?: string;
  host?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      vendor: 'Vendor',
      model: 'Model',
      osVersion: 'OsVersion',
      status: 'Status',
      fileName: 'FileName',
      filePath: 'FilePath',
      osVersionId: 'OsVersionId',
      accessId: 'AccessId',
      policy: 'Policy',
      signature: 'Signature',
      directory: 'Directory',
      host: 'Host',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      vendor: 'string',
      model: 'string',
      osVersion: 'string',
      status: 'string',
      fileName: 'string',
      filePath: 'string',
      osVersionId: 'string',
      accessId: 'string',
      policy: 'string',
      signature: 'string',
      directory: 'string',
      host: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskLog extends $tea.Model {
  funcName?: string;
  gmtCreate?: string;
  level?: string;
  lineNo?: number;
  logId?: string;
  message?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      funcName: 'FuncName',
      gmtCreate: 'GmtCreate',
      level: 'Level',
      lineNo: 'LineNo',
      logId: 'LogId',
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcName: 'string',
      gmtCreate: 'string',
      level: 'string',
      lineNo: 'number',
      logId: 'string',
      message: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationSpecification extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  specificationName?: string;
  configurationSpecificationId?: string;
  architecture?: string;
  role?: string;
  vendor?: string;
  model?: string;
  specificationContent?: string;
  relatedVariate?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      specificationName: 'SpecificationName',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      architecture: 'Architecture',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      specificationContent: 'SpecificationContent',
      relatedVariate: 'RelatedVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      specificationName: 'string',
      configurationSpecificationId: 'string',
      architecture: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
      specificationContent: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ZoneType extends $tea.Model {
  zoneTypeName?: string;
  createTime?: string;
  zoneTypeId?: string;
  name?: string;
  zoneTypeLayer?: ZoneTypeZoneTypeLayer[];
  static names(): { [key: string]: string } {
    return {
      zoneTypeName: 'ZoneTypeName',
      createTime: 'CreateTime',
      zoneTypeId: 'ZoneTypeId',
      name: 'Name',
      zoneTypeLayer: 'ZoneTypeLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneTypeName: 'string',
      createTime: 'string',
      zoneTypeId: 'string',
      name: 'string',
      zoneTypeLayer: { 'type': 'array', 'itemType': ZoneTypeZoneTypeLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupProject extends $tea.Model {
  setupProjectName?: string;
  createTime?: string;
  setupProjectId?: string;
  spaceId?: string;
  description?: string;
  archId?: string;
  deliveryTime?: string;
  nodes?: string;
  architectureId?: string;
  status?: string;
  spaceType?: string;
  spaceName?: string;
  archVersion?: string;
  packages?: SetupProjectPackages[];
  static names(): { [key: string]: string } {
    return {
      setupProjectName: 'SetupProjectName',
      createTime: 'CreateTime',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
      description: 'Description',
      archId: 'ArchId',
      deliveryTime: 'DeliveryTime',
      nodes: 'Nodes',
      architectureId: 'ArchitectureId',
      status: 'Status',
      spaceType: 'SpaceType',
      spaceName: 'SpaceName',
      archVersion: 'ArchVersion',
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setupProjectName: 'string',
      createTime: 'string',
      setupProjectId: 'string',
      spaceId: 'string',
      description: 'string',
      archId: 'string',
      deliveryTime: 'string',
      nodes: 'string',
      architectureId: 'string',
      status: 'string',
      spaceType: 'string',
      spaceName: 'string',
      archVersion: 'string',
      packages: { 'type': 'array', 'itemType': SetupProjectPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionTask extends $tea.Model {
  templateId?: string;
  itemName?: string;
  itemId?: string;
  space?: string;
  hostname?: string;
  IP?: string;
  vendor?: string;
  model?: string;
  role?: string;
  taskStatus?: string;
  deviceId?: string;
  errorCode?: string;
  inspectionResult?: string;
  executionBeginTime?: string;
  executionEndTime?: string;
  inspectionAlarmRules?: InspectionTaskInspectionAlarmRules[];
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      itemName: 'ItemName',
      itemId: 'ItemId',
      space: 'Space',
      hostname: 'Hostname',
      IP: 'IP',
      vendor: 'Vendor',
      model: 'Model',
      role: 'Role',
      taskStatus: 'TaskStatus',
      deviceId: 'DeviceId',
      errorCode: 'ErrorCode',
      inspectionResult: 'InspectionResult',
      executionBeginTime: 'ExecutionBeginTime',
      executionEndTime: 'ExecutionEndTime',
      inspectionAlarmRules: 'InspectionAlarmRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      itemName: 'string',
      itemId: 'string',
      space: 'string',
      hostname: 'string',
      IP: 'string',
      vendor: 'string',
      model: 'string',
      role: 'string',
      taskStatus: 'string',
      deviceId: 'string',
      errorCode: 'string',
      inspectionResult: 'string',
      executionBeginTime: 'string',
      executionEndTime: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': InspectionTaskInspectionAlarmRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CliTask extends $tea.Model {
  agentIp?: string;
  cliTaskId?: string;
  command?: string;
  deviceId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  output?: string;
  protocol?: string;
  responseCode?: string;
  result?: string;
  sessionId?: string;
  status?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      agentIp: 'AgentIp',
      cliTaskId: 'CliTaskId',
      command: 'Command',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      output: 'Output',
      protocol: 'Protocol',
      responseCode: 'ResponseCode',
      result: 'Result',
      sessionId: 'SessionId',
      status: 'Status',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIp: 'string',
      cliTaskId: 'string',
      command: 'string',
      deviceId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      output: 'string',
      protocol: 'string',
      responseCode: 'string',
      result: 'string',
      sessionId: 'string',
      status: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpBlockRecord extends $tea.Model {
  ipBlockRecordId?: string;
  createTime?: string;
  updateTime?: string;
  title?: string;
  creator?: number;
  workNo?: string;
  netType?: string;
  status?: string;
  zoneName?: string;
  description?: string;
  detail?: IpBlockRecordDetail[];
  recordType?: string;
  ipBlockCode?: string[];
  static names(): { [key: string]: string } {
    return {
      ipBlockRecordId: 'IpBlockRecordId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      title: 'Title',
      creator: 'Creator',
      workNo: 'WorkNo',
      netType: 'NetType',
      status: 'Status',
      zoneName: 'ZoneName',
      description: 'Description',
      detail: 'Detail',
      recordType: 'RecordType',
      ipBlockCode: 'IpBlockCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockRecordId: 'string',
      createTime: 'string',
      updateTime: 'string',
      title: 'string',
      creator: 'number',
      workNo: 'string',
      netType: 'string',
      status: 'string',
      zoneName: 'string',
      description: 'string',
      detail: { 'type': 'array', 'itemType': IpBlockRecordDetail },
      recordType: 'string',
      ipBlockCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpRecord extends $tea.Model {
  createTime?: string;
  ipRecordId?: string;
  updateTime?: string;
  businessTypeName?: string;
  creator?: string;
  status?: string;
  zoneName?: string;
  description?: string;
  ipBlock?: string;
  detail?: IpRecordDetail[];
  recodeType?: string;
  ipCode?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ipRecordId: 'IpRecordId',
      updateTime: 'UpdateTime',
      businessTypeName: 'BusinessTypeName',
      creator: 'Creator',
      status: 'Status',
      zoneName: 'ZoneName',
      description: 'Description',
      ipBlock: 'IpBlock',
      detail: 'Detail',
      recodeType: 'RecodeType',
      ipCode: 'IpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ipRecordId: 'string',
      updateTime: 'string',
      businessTypeName: 'string',
      creator: 'string',
      status: 'string',
      zoneName: 'string',
      description: 'string',
      ipBlock: 'string',
      detail: { 'type': 'array', 'itemType': IpRecordDetail },
      recodeType: 'string',
      ipCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MonitorItem extends $tea.Model {
  analysisCode?: string;
  collectionType?: string;
  config?: string;
  monitorItemDescription?: string;
  enable?: number;
  execInterval?: string;
  gmtCreate?: string;
  gmtModified?: string;
  monitorItemName?: string;
  securityDomain?: string;
  monitorItemId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisCode: 'AnalysisCode',
      collectionType: 'CollectionType',
      config: 'Config',
      monitorItemDescription: 'MonitorItemDescription',
      enable: 'Enable',
      execInterval: 'ExecInterval',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      monitorItemName: 'MonitorItemName',
      securityDomain: 'SecurityDomain',
      monitorItemId: 'MonitorItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisCode: 'string',
      collectionType: 'string',
      config: 'string',
      monitorItemDescription: 'string',
      enable: 'number',
      execInterval: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      monitorItemName: 'string',
      securityDomain: 'string',
      monitorItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PhysicalSpace extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  province?: string;
  spaceId?: string;
  spaceName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      province: 'Province',
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      province: 'string',
      spaceId: 'string',
      spaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionScript extends $tea.Model {
  scriptId?: string;
  itemId?: string;
  itemName?: string;
  itemDescription?: string;
  inspectionCrontab?: string;
  vendor?: string;
  model?: string;
  role?: string;
  scriptStatus?: string;
  script?: string;
  inspectionAlarmRules?: InspectionScriptInspectionAlarmRules[];
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemDescription: 'ItemDescription',
      inspectionCrontab: 'InspectionCrontab',
      vendor: 'Vendor',
      model: 'Model',
      role: 'Role',
      scriptStatus: 'ScriptStatus',
      script: 'Script',
      inspectionAlarmRules: 'InspectionAlarmRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      itemId: 'string',
      itemName: 'string',
      itemDescription: 'string',
      inspectionCrontab: 'string',
      vendor: 'string',
      model: 'string',
      role: 'string',
      scriptStatus: 'string',
      script: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': InspectionScriptInspectionAlarmRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionItem extends $tea.Model {
  alarmStatus?: string;
  notificationMode?: string;
  suppressionStrategy?: string;
  notificationGroupId?: string;
  subscriptionType?: string;
  triggerTimes?: number;
  monitorItemId?: string;
  language?: string;
  recoveryNotice?: number;
  subscriptionItemId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      notificationMode: 'NotificationMode',
      suppressionStrategy: 'SuppressionStrategy',
      notificationGroupId: 'NotificationGroupId',
      subscriptionType: 'SubscriptionType',
      triggerTimes: 'TriggerTimes',
      monitorItemId: 'MonitorItemId',
      language: 'Language',
      recoveryNotice: 'RecoveryNotice',
      subscriptionItemId: 'SubscriptionItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      notificationMode: 'string',
      suppressionStrategy: 'string',
      notificationGroupId: 'string',
      subscriptionType: 'string',
      triggerTimes: 'number',
      monitorItemId: 'string',
      language: 'string',
      recoveryNotice: 'number',
      subscriptionItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataView extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  dataViewName?: string;
  dataViewDescription?: string;
  dataViewId?: string;
  dataViewChartList?: DataViewChart[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      dataViewName: 'DataViewName',
      dataViewDescription: 'DataViewDescription',
      dataViewId: 'DataViewId',
      dataViewChartList: 'DataViewChartList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      dataViewName: 'string',
      dataViewDescription: 'string',
      dataViewId: 'string',
      dataViewChartList: { 'type': 'array', 'itemType': DataViewChart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceTask extends $tea.Model {
  deviceId?: string;
  deviceIp?: string;
  deviceName?: string;
  deviceTaskId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  output?: string;
  params?: string;
  responseCode?: string;
  result?: string;
  scriptId?: string;
  scriptVersion?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceIp: 'DeviceIp',
      deviceName: 'DeviceName',
      deviceTaskId: 'DeviceTaskId',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      output: 'Output',
      params: 'Params',
      responseCode: 'ResponseCode',
      result: 'Result',
      scriptId: 'ScriptId',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceIp: 'string',
      deviceName: 'string',
      deviceTaskId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      output: 'string',
      params: 'string',
      responseCode: 'string',
      result: 'string',
      scriptId: 'string',
      scriptVersion: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PortCollection extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  portCollectionDescription?: string;
  portCollectionId?: string;
  portCollectionName?: string;
  portList?: Port[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      portCollectionDescription: 'PortCollectionDescription',
      portCollectionId: 'PortCollectionId',
      portCollectionName: 'PortCollectionName',
      portList: 'PortList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      portCollectionDescription: 'string',
      portCollectionId: 'string',
      portCollectionName: 'string',
      portList: { 'type': 'array', 'itemType': Port },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionPolicy extends $tea.Model {
  createTime?: string;
  connectionPolicyId?: string;
  networkArchitectureIterationId?: string;
  name?: string;
  algorithm?: string;
  linkCount?: number;
  uplinkModelId?: string;
  downlinkModuleId?: string;
  uplinkDeviceId?: string;
  downlinkDeviceId?: string;
  id?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      connectionPolicyId: 'ConnectionPolicyId',
      networkArchitectureIterationId: 'NetworkArchitectureIterationId',
      name: 'Name',
      algorithm: 'Algorithm',
      linkCount: 'LinkCount',
      uplinkModelId: 'UplinkModelId',
      downlinkModuleId: 'DownlinkModuleId',
      uplinkDeviceId: 'UplinkDeviceId',
      downlinkDeviceId: 'DownlinkDeviceId',
      id: 'Id',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      connectionPolicyId: 'string',
      networkArchitectureIterationId: 'string',
      name: 'string',
      algorithm: 'string',
      linkCount: 'number',
      uplinkModelId: 'string',
      downlinkModuleId: 'string',
      uplinkDeviceId: 'string',
      downlinkDeviceId: 'string',
      id: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceFormProperty extends $tea.Model {
  content?: string;
  keyword?: string;
  placeholder?: boolean;
  required?: boolean;
  searchSupported?: boolean;
  sequence?: number;
  tableVisible?: boolean;
  uniqueness?: boolean;
  valueReference?: string;
  valueSource?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      keyword: 'Keyword',
      placeholder: 'Placeholder',
      required: 'Required',
      searchSupported: 'SearchSupported',
      sequence: 'Sequence',
      tableVisible: 'TableVisible',
      uniqueness: 'Uniqueness',
      valueReference: 'ValueReference',
      valueSource: 'ValueSource',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      keyword: 'string',
      placeholder: 'boolean',
      required: 'boolean',
      searchSupported: 'boolean',
      sequence: 'number',
      tableVisible: 'boolean',
      uniqueness: 'boolean',
      valueReference: 'string',
      valueSource: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationSpecificationRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  specificationName?: string;
  architecture?: string;
  role?: string;
  vendor?: string;
  model?: string;
  specificationContent?: string;
  relatedVariate?: Buffer[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      specificationName: 'SpecificationName',
      architecture: 'Architecture',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      specificationContent: 'SpecificationContent',
      relatedVariate: 'RelatedVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      specificationName: 'string',
      architecture: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
      specificationContent: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'Buffer' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationSpecificationShrinkRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  specificationName?: string;
  architecture?: string;
  role?: string;
  vendor?: string;
  model?: string;
  specificationContent?: string;
  relatedVariateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      specificationName: 'SpecificationName',
      architecture: 'Architecture',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      specificationContent: 'SpecificationContent',
      relatedVariateShrink: 'RelatedVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      specificationName: 'string',
      architecture: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
      specificationContent: 'string',
      relatedVariateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationSpecificationResponseBody extends $tea.Model {
  configurationSpecificationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationSpecificationId: 'ConfigurationSpecificationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationSpecificationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigurationSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigurationSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockRequest extends $tea.Model {
  instanceId?: string;
  ipBlockId?: string;
  block?: string;
  mask?: string;
  parentId?: string;
  netType?: string;
  category?: string;
  status?: string;
  businessTypeId?: string;
  deviceName?: string;
  zoneName?: string;
  backupDeviceName?: string;
  netBusiness?: string;
  ownership?: string;
  application?: string;
  description?: string;
  reserveParentBlock?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipBlockId: 'IpBlockId',
      block: 'Block',
      mask: 'Mask',
      parentId: 'ParentId',
      netType: 'NetType',
      category: 'Category',
      status: 'Status',
      businessTypeId: 'BusinessTypeId',
      deviceName: 'DeviceName',
      zoneName: 'ZoneName',
      backupDeviceName: 'BackupDeviceName',
      netBusiness: 'NetBusiness',
      ownership: 'Ownership',
      application: 'Application',
      description: 'Description',
      reserveParentBlock: 'ReserveParentBlock',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipBlockId: 'string',
      block: 'string',
      mask: 'string',
      parentId: 'string',
      netType: 'string',
      category: 'string',
      status: 'string',
      businessTypeId: 'string',
      deviceName: 'string',
      zoneName: 'string',
      backupDeviceName: 'string',
      netBusiness: 'string',
      ownership: 'string',
      application: 'string',
      description: 'string',
      reserveParentBlock: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockResponseBody extends $tea.Model {
  ipBlockId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipBlockId: 'IpBlockId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationVariateRequest extends $tea.Model {
  instanceId?: string;
  configurationVariateId?: string;
  variateName?: string;
  comment?: string;
  formatFunction?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      configurationVariateId: 'ConfigurationVariateId',
      variateName: 'VariateName',
      comment: 'Comment',
      formatFunction: 'FormatFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      configurationVariateId: 'string',
      variateName: 'string',
      comment: 'string',
      formatFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationVariateResponseBody extends $tea.Model {
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

export class UpdateConfigurationVariateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigurationVariateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigurationVariateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTypeRequest extends $tea.Model {
  instanceId?: string;
  scheduleTypeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleTypeId: 'ScheduleTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleTypeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTypeResponseBody extends $tea.Model {
  requestId?: string;
  scheduleType?: GetScheduleTypeResponseBodyScheduleType;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleType: 'ScheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleType: GetScheduleTypeResponseBodyScheduleType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScheduleTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScheduleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponseBody extends $tea.Model {
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

export class DeleteDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceValuesRequest extends $tea.Model {
  deviceFormId?: string;
  deviceFormName?: string;
  attributeKeyword?: string;
  attributeGroup?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      attributeKeyword: 'AttributeKeyword',
      attributeGroup: 'AttributeGroup',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      deviceFormName: 'string',
      attributeKeyword: 'string',
      attributeGroup: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceValuesResponseBody extends $tea.Model {
  requestId?: string;
  deviceValues?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceValues: 'DeviceValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockRecordRequest extends $tea.Model {
  instanceId?: string;
  ipBlockRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipBlockRecordId: 'IpBlockRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipBlockRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockRecordResponseBody extends $tea.Model {
  requestId?: string;
  ipBlockRecord?: GetIpBlockRecordResponseBodyIpBlockRecord;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipBlockRecord: 'IpBlockRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipBlockRecord: GetIpBlockRecordResponseBodyIpBlockRecord,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIpBlockRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIpBlockRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  spaceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      spaceType: 'SpaceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      spaceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: string;
  maxResults?: number;
  spaceModel?: ListSpaceModelsResponseBodySpaceModel[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      spaceModel: 'SpaceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      spaceModel: { 'type': 'array', 'itemType': ListSpaceModelsResponseBodySpaceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSpaceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSpaceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePropertiesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  deviceFormId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      deviceFormId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePropertiesResponseBody extends $tea.Model {
  deviceProperties?: ListDevicePropertiesResponseBodyDeviceProperties[];
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      deviceProperties: 'DeviceProperties',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceProperties: { 'type': 'array', 'itemType': ListDevicePropertiesResponseBodyDeviceProperties },
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePropertiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicePropertiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicePropertiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesRequest extends $tea.Model {
  instanceId?: string;
  role?: string;
  vendor?: string;
  model?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      role: 'string',
      vendor: 'string',
      model: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesShrinkRequest extends $tea.Model {
  instanceId?: string;
  role?: string;
  vendor?: string;
  modelShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      role: 'Role',
      vendor: 'Vendor',
      modelShrink: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      role: 'string',
      vendor: 'string',
      modelShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesResponseBody extends $tea.Model {
  requestId?: string;
  inspectionScripts?: ListInspectionDevicesResponseBodyInspectionScripts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      inspectionScripts: 'InspectionScripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      inspectionScripts: { 'type': 'array', 'itemType': ListInspectionDevicesResponseBodyInspectionScripts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInspectionDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInspectionDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  itemId?: string;
  hostName?: string;
  IP?: string;
  taskStatus?: string;
  instanceId?: string;
  space?: string;
  role?: string;
  vendor?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      itemId: 'ItemId',
      hostName: 'HostName',
      IP: 'IP',
      taskStatus: 'TaskStatus',
      instanceId: 'InstanceId',
      space: 'Space',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      itemId: 'string',
      hostName: 'string',
      IP: 'string',
      taskStatus: 'string',
      instanceId: 'string',
      space: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  inspectionTasks?: ListInspectionTasksResponseBodyInspectionTasks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      inspectionTasks: 'InspectionTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      inspectionTasks: { 'type': 'array', 'itemType': ListInspectionTasksResponseBodyInspectionTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInspectionTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInspectionTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleWorkersRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleWorkersResponseBody extends $tea.Model {
  scheduleWorker?: ListScheduleWorkersResponseBodyScheduleWorker[];
  totalCount?: number;
  maxResults?: number;
  requestId?: string;
  nextToken?: number;
  static names(): { [key: string]: string } {
    return {
      scheduleWorker: 'ScheduleWorker',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      requestId: 'RequestId',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleWorker: { 'type': 'array', 'itemType': ListScheduleWorkersResponseBodyScheduleWorker },
      totalCount: 'number',
      maxResults: 'number',
      requestId: 'string',
      nextToken: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleWorkersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScheduleWorkersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScheduleWorkersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectProgressRequest extends $tea.Model {
  instanceId?: string;
  setupProjectId?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      setupProjectId: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectProgressResponseBody extends $tea.Model {
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

export class UpdateProjectProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResourceRequest extends $tea.Model {
  instanceId?: string;
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  setupProjectId?: string;
  updateType?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      setupProjectId: 'SetupProjectId',
      updateType: 'UpdateType',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      setupProjectId: 'string',
      updateType: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResourceShrinkRequest extends $tea.Model {
  instanceId?: string;
  deviceResourceId?: string;
  deviceResourceIdsShrink?: string;
  setupProjectId?: string;
  updateType?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      setupProjectId: 'SetupProjectId',
      updateType: 'UpdateType',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      deviceResourceId: 'string',
      deviceResourceIdsShrink: 'string',
      setupProjectId: 'string',
      updateType: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResourceResponseBody extends $tea.Model {
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

export class UpdateDeviceResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyRequest extends $tea.Model {
  devicePropertyId?: string;
  propertyKey?: string;
  deviceFormId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      propertyKey: 'PropertyKey',
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      propertyKey: 'string',
      deviceFormId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyResponseBody extends $tea.Model {
  requestId?: string;
  deviceProperty?: GetDevicePropertyResponseBodyDeviceProperty;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceProperty: 'DeviceProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceProperty: GetDevicePropertyResponseBodyDeviceProperty,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevicePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevicePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $tea.Model {
  requestId?: string;
  resourceType?: ListResourceTypesResponseBodyResourceType[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceType: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectRequest extends $tea.Model {
  instanceId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectResponseBody extends $tea.Model {
  requestId?: string;
  setupProject?: GetSetupProjectResponseBodySetupProject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setupProject: 'SetupProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setupProject: GetSetupProjectResponseBodySetupProject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSetupProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSetupProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationVariateRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  variateName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      variateName: 'VariateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      variateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationVariateResponseBody extends $tea.Model {
  totalCount?: number;
  configurationVariate?: ListConfigurationVariateResponseBodyConfigurationVariate[];
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      configurationVariate: 'ConfigurationVariate',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      configurationVariate: { 'type': 'array', 'itemType': ListConfigurationVariateResponseBodyConfigurationVariate },
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationVariateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigurationVariateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigurationVariateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceModelRequest extends $tea.Model {
  instanceId?: string;
  spaceType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceType: 'SpaceType',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceModelResponseBody extends $tea.Model {
  requestId?: string;
  spaceModelId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spaceModelId: 'SpaceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spaceModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSpaceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSpaceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleWorkerRequest extends $tea.Model {
  instanceId?: string;
  scheduleWorkerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleWorkerId: 'ScheduleWorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleWorkerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleWorkerResponseBody extends $tea.Model {
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

export class DeleteScheduleWorkerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScheduleWorkerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScheduleWorkerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedLinesRequest extends $tea.Model {
  physicalSpaceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedLinesResponseBody extends $tea.Model {
  dedicatedLines?: ListDedicatedLinesResponseBodyDedicatedLines[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLines: 'DedicatedLines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLines: { 'type': 'array', 'itemType': ListDedicatedLinesResponseBodyDedicatedLines },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedLinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDedicatedLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDedicatedLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInformationKeyActionRequest extends $tea.Model {
  resourceInformationId?: string;
  instanceId?: string;
  key?: string;
  value?: string;
  keyAction?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceInformationId: 'ResourceInformationId',
      instanceId: 'InstanceId',
      key: 'Key',
      value: 'Value',
      keyAction: 'KeyAction',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceInformationId: 'string',
      instanceId: 'string',
      key: 'string',
      value: 'string',
      keyAction: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInformationKeyActionResponseBody extends $tea.Model {
  requestId?: string;
  actionMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      actionMessage: 'ActionMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      actionMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInformationKeyActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInformationKeyActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInformationKeyActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeTaskRequest extends $tea.Model {
  taskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeTaskResponseBody extends $tea.Model {
  requestId?: string;
  inspectionTask?: GetRealtimeTaskResponseBodyInspectionTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      inspectionTask: 'InspectionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      inspectionTask: GetRealtimeTaskResponseBodyInspectionTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRealtimeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRealtimeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTypesRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTypesResponseBody extends $tea.Model {
  totalCount?: number;
  scheduleType?: ListScheduleTypesResponseBodyScheduleType[];
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      scheduleType: 'ScheduleType',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      scheduleType: { 'type': 'array', 'itemType': ListScheduleTypesResponseBodyScheduleType },
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScheduleTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScheduleTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTypeRequest extends $tea.Model {
  instanceId?: string;
  scheduleType?: string;
  relatedWorker?: string[];
  status?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleType: 'ScheduleType',
      relatedWorker: 'RelatedWorker',
      status: 'Status',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleType: 'string',
      relatedWorker: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTypeShrinkRequest extends $tea.Model {
  instanceId?: string;
  scheduleType?: string;
  relatedWorkerShrink?: string;
  status?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleType: 'ScheduleType',
      relatedWorkerShrink: 'RelatedWorker',
      status: 'Status',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleType: 'string',
      relatedWorkerShrink: 'string',
      status: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTypeResponseBody extends $tea.Model {
  requestId?: string;
  scheduleTypeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleTypeId: 'ScheduleTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleTypeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScheduleTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleWorkerRequest extends $tea.Model {
  instanceId?: string;
  scheduleWorkerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleWorkerId: 'ScheduleWorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleWorkerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleWorkerResponseBody extends $tea.Model {
  requestId?: string;
  scheduleWorker?: GetScheduleWorkerResponseBodyScheduleWorker;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleWorker: 'ScheduleWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleWorker: GetScheduleWorkerResponseBodyScheduleWorker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleWorkerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScheduleWorkerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScheduleWorkerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleWorkerRequest extends $tea.Model {
  instanceId?: string;
  workerId?: string;
  workerName?: string;
  workerContact?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
      workerContact: 'WorkerContact',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      workerId: 'string',
      workerName: 'string',
      workerContact: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleWorkerResponseBody extends $tea.Model {
  requestId?: string;
  scheduleWorkerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleWorkerId: 'ScheduleWorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleWorkerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleWorkerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScheduleWorkerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduleWorkerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationVariateRequest extends $tea.Model {
  instanceId?: string;
  variateName?: string;
  clientToken?: string;
  comment?: string;
  formatFunction?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      variateName: 'VariateName',
      clientToken: 'ClientToken',
      comment: 'Comment',
      formatFunction: 'FormatFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      variateName: 'string',
      clientToken: 'string',
      comment: 'string',
      formatFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationVariateResponseBody extends $tea.Model {
  requestId?: string;
  configurationVariateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationVariateId: 'ConfigurationVariateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationVariateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationVariateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigurationVariateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigurationVariateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelSortRequest extends $tea.Model {
  instanceId?: string;
  spaceType?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceType: 'SpaceType',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceType: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelSortResponseBody extends $tea.Model {
  requestId?: string;
  spaceModel?: GetSpaceModelSortResponseBodySpaceModel[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spaceModel: 'SpaceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spaceModel: { 'type': 'array', 'itemType': GetSpaceModelSortResponseBodySpaceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelSortResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSpaceModelSortResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSpaceModelSortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealtimeTaskRequest extends $tea.Model {
  deviceId?: string;
  script?: string;
  instanceId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      script: 'Script',
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      script: 'string',
      instanceId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRealtimeTaskResponseBody extends $tea.Model {
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

export class CreateRealtimeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRealtimeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRealtimeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceFormRequest extends $tea.Model {
  deviceFormId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceFormResponseBody extends $tea.Model {
  requestId?: string;
  deviceForm?: GetDeviceFormResponseBodyDeviceForm;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceForm: 'DeviceForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceForm: GetDeviceFormResponseBodyDeviceForm,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceFormResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceFormResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceFormResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceRequest extends $tea.Model {
  deviceFormId?: string;
  physicalSpaceId?: string;
  hostName?: string;
  ip?: string;
  sn?: string;
  mac?: string;
  vendor?: string;
  model?: string;
  serviceStatus?: string;
  securityDomain?: string;
  loginType?: string;
  loginUsername?: string;
  loginPassword?: string;
  snmpAccountVersion?: string;
  snmpCommunity?: string;
  snmpAccountType?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpPrivacyPassphase?: string;
  snmpPrivacyProtocol?: string;
  extAttributes?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      physicalSpaceId: 'PhysicalSpaceId',
      hostName: 'HostName',
      ip: 'Ip',
      sn: 'Sn',
      mac: 'Mac',
      vendor: 'Vendor',
      model: 'Model',
      serviceStatus: 'ServiceStatus',
      securityDomain: 'SecurityDomain',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      loginPassword: 'LoginPassword',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpCommunity: 'SnmpCommunity',
      snmpAccountType: 'SnmpAccountType',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpPrivacyPassphase: 'SnmpPrivacyPassphase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      extAttributes: 'ExtAttributes',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      physicalSpaceId: 'string',
      hostName: 'string',
      ip: 'string',
      sn: 'string',
      mac: 'string',
      vendor: 'string',
      model: 'string',
      serviceStatus: 'string',
      securityDomain: 'string',
      loginType: 'string',
      loginUsername: 'string',
      loginPassword: 'string',
      snmpAccountVersion: 'string',
      snmpCommunity: 'string',
      snmpAccountType: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpPrivacyPassphase: 'string',
      snmpPrivacyProtocol: 'string',
      extAttributes: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  requestId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetupProjectRequest extends $tea.Model {
  instanceId?: string;
  deliveryTime?: string;
  spaceId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      deliveryTime: 'DeliveryTime',
      spaceId: 'SpaceId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      deliveryTime: 'string',
      spaceId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetupProjectResponseBody extends $tea.Model {
  setupProjectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      setupProjectId: 'SetupProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setupProjectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetupProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSetupProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSetupProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDedicatedLineRequest extends $tea.Model {
  dedicatedLineId?: string;
  isp?: string;
  bandwidth?: number;
  dedicatedLineIp?: string;
  dedicatedLineGateway?: string;
  dedicatedLineRole?: string;
  deviceId?: string;
  devicePort?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineId: 'DedicatedLineId',
      isp: 'Isp',
      bandwidth: 'Bandwidth',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineRole: 'DedicatedLineRole',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineId: 'string',
      isp: 'string',
      bandwidth: 'number',
      dedicatedLineIp: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineRole: 'string',
      deviceId: 'string',
      devicePort: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDedicatedLineResponseBody extends $tea.Model {
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

export class UpdateDedicatedLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDedicatedLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDedicatedLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsVersionRequest extends $tea.Model {
  instanceId?: string;
  osVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      osVersionId: 'OsVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      osVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  osVersion?: GetOsVersionResponseBodyOsVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osVersion: { 'type': 'array', 'itemType': GetOsVersionResponseBodyOsVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleDutyRequest extends $tea.Model {
  instanceId?: string;
  scheduleDutyId?: string;
  typeWorkerList?: UpdateScheduleDutyRequestTypeWorkerList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDutyId: 'ScheduleDutyId',
      typeWorkerList: 'TypeWorkerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDutyId: 'string',
      typeWorkerList: { 'type': 'array', 'itemType': UpdateScheduleDutyRequestTypeWorkerList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleDutyShrinkRequest extends $tea.Model {
  instanceId?: string;
  scheduleDutyId?: string;
  typeWorkerListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDutyId: 'ScheduleDutyId',
      typeWorkerListShrink: 'TypeWorkerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDutyId: 'string',
      typeWorkerListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleDutyResponseBody extends $tea.Model {
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

export class UpdateScheduleDutyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateScheduleDutyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateScheduleDutyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpRecordRequest extends $tea.Model {
  instanceId?: string;
  ipRecordName?: string;
  businessTypeId?: string;
  creator?: string;
  device?: CreateIpRecordRequestDevice[];
  recordType?: string;
  ipCode?: string[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipRecordName: 'IpRecordName',
      businessTypeId: 'BusinessTypeId',
      creator: 'Creator',
      device: 'Device',
      recordType: 'RecordType',
      ipCode: 'IpCode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipRecordName: 'string',
      businessTypeId: 'string',
      creator: 'string',
      device: { 'type': 'array', 'itemType': CreateIpRecordRequestDevice },
      recordType: 'string',
      ipCode: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpRecordShrinkRequest extends $tea.Model {
  instanceId?: string;
  ipRecordName?: string;
  businessTypeId?: string;
  creator?: string;
  deviceShrink?: string;
  recordType?: string;
  ipCodeShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipRecordName: 'IpRecordName',
      businessTypeId: 'BusinessTypeId',
      creator: 'Creator',
      deviceShrink: 'Device',
      recordType: 'RecordType',
      ipCodeShrink: 'IpCode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipRecordName: 'string',
      businessTypeId: 'string',
      creator: 'string',
      deviceShrink: 'string',
      recordType: 'string',
      ipCodeShrink: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpRecordResponseBody extends $tea.Model {
  ipRecordId?: string;
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      ipRecordId: 'IpRecordId',
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipRecordId: 'string',
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  requestId?: string;
  instances?: ListInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZoneTypesRequest extends $tea.Model {
  name?: string;
  maxResults?: number;
  nextToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      maxResults: 'number',
      nextToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZoneTypesResponseBody extends $tea.Model {
  totalCount?: number;
  maxResults?: number;
  requestId?: string;
  nextToken?: number;
  zoneType?: ListZoneTypesResponseBodyZoneType[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      maxResults: 'number',
      requestId: 'string',
      nextToken: 'number',
      zoneType: { 'type': 'array', 'itemType': ListZoneTypesResponseBodyZoneType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZoneTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListZoneTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListZoneTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhysicalSpaceRequest extends $tea.Model {
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  country?: string;
  province?: string;
  city?: string;
  address?: string;
  instanceId?: string;
  owner?: string;
  spaceAbbreviation?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
      instanceId: 'InstanceId',
      owner: 'Owner',
      spaceAbbreviation: 'SpaceAbbreviation',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      address: 'string',
      instanceId: 'string',
      owner: 'string',
      spaceAbbreviation: 'string',
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePhysicalSpaceResponseBody extends $tea.Model {
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

export class UpdatePhysicalSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePhysicalSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePhysicalSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceRequest extends $tea.Model {
  instanceId?: string;
  resourceInformationId?: string;
  setupProjectId?: string;
  resourceInformation?: UpdateResourceInstanceRequestResourceInformation[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformationId: 'ResourceInformationId',
      setupProjectId: 'SetupProjectId',
      resourceInformation: 'ResourceInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformationId: 'string',
      setupProjectId: 'string',
      resourceInformation: { 'type': 'array', 'itemType': UpdateResourceInstanceRequestResourceInformation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceShrinkRequest extends $tea.Model {
  instanceId?: string;
  resourceInformationId?: string;
  setupProjectId?: string;
  resourceInformationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformationId: 'ResourceInformationId',
      setupProjectId: 'SetupProjectId',
      resourceInformationShrink: 'ResourceInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformationId: 'string',
      setupProjectId: 'string',
      resourceInformationShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceResponseBody extends $tea.Model {
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

export class UpdateResourceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateResourceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateResourceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleDutyRequest extends $tea.Model {
  instanceId?: string;
  scheduleDutyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDutyId: 'ScheduleDutyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDutyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleDutyResponseBody extends $tea.Model {
  requestId?: string;
  scheduleDuty?: GetScheduleDutyResponseBodyScheduleDuty;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleDuty: 'ScheduleDuty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleDuty: GetScheduleDutyResponseBodyScheduleDuty,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleDutyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScheduleDutyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScheduleDutyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationVariateRequest extends $tea.Model {
  instanceId?: string;
  configurationVariateId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      configurationVariateId: 'ConfigurationVariateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      configurationVariateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationVariateResponseBody extends $tea.Model {
  requestId?: string;
  configurationVariate?: GetConfigurationVariateResponseBodyConfigurationVariate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationVariate: 'ConfigurationVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationVariate: GetConfigurationVariateResponseBodyConfigurationVariate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationVariateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigurationVariateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigurationVariateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusRequest extends $tea.Model {
  deviceId?: string;
  monitorItemId?: string;
  type?: string;
  aggregateDataId?: string;
  dedicatedLineId?: string;
  instanceId?: string;
  portCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      type: 'Type',
      aggregateDataId: 'AggregateDataId',
      dedicatedLineId: 'DedicatedLineId',
      instanceId: 'InstanceId',
      portCollectionId: 'PortCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      monitorItemId: 'string',
      type: 'string',
      aggregateDataId: 'string',
      dedicatedLineId: 'string',
      instanceId: 'string',
      portCollectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBody extends $tea.Model {
  requestId?: string;
  alarmStatus?: GetAlarmStatusResponseBodyAlarmStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alarmStatus: 'AlarmStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alarmStatus: GetAlarmStatusResponseBodyAlarmStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlarmStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlarmStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpRecordRequest extends $tea.Model {
  instanceId?: string;
  ipRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipRecordId: 'IpRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpRecordResponseBody extends $tea.Model {
  ipRecord?: GetIpRecordResponseBodyIpRecord;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipRecord: 'IpRecord',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipRecord: GetIpRecordResponseBodyIpRecord,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIpRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIpRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleDutiesRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleDutiesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  scheduleDuties?: ListScheduleDutiesResponseBodyScheduleDuties[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      scheduleDuties: 'ScheduleDuties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      scheduleDuties: { 'type': 'array', 'itemType': ListScheduleDutiesResponseBodyScheduleDuties },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleDutiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScheduleDutiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScheduleDutiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSpaceModelRequest extends $tea.Model {
  instanceId?: string;
  spaceModelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceModelId: 'SpaceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockSpaceModelResponseBody extends $tea.Model {
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

export class LockSpaceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LockSpaceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LockSpaceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInformationRequest extends $tea.Model {
  instanceId?: string;
  resourceInformationId?: string;
  resourceType?: string;
  resourceAttribute?: string;
  information?: UpdateResourceInformationRequestInformation[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformationId: 'ResourceInformationId',
      resourceType: 'ResourceType',
      resourceAttribute: 'ResourceAttribute',
      information: 'Information',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformationId: 'string',
      resourceType: 'string',
      resourceAttribute: 'string',
      information: { 'type': 'array', 'itemType': UpdateResourceInformationRequestInformation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInformationShrinkRequest extends $tea.Model {
  instanceId?: string;
  resourceInformationId?: string;
  resourceType?: string;
  resourceAttribute?: string;
  informationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformationId: 'ResourceInformationId',
      resourceType: 'ResourceType',
      resourceAttribute: 'ResourceAttribute',
      informationShrink: 'Information',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformationId: 'string',
      resourceType: 'string',
      resourceAttribute: 'string',
      informationShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInformationResponseBody extends $tea.Model {
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

export class UpdateResourceInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateResourceInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateResourceInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimePeriodRequest extends $tea.Model {
  timePeriodName?: string;
  timePeriodDescription?: string;
  expression?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      timePeriodName: 'TimePeriodName',
      timePeriodDescription: 'TimePeriodDescription',
      expression: 'Expression',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePeriodName: 'string',
      timePeriodDescription: 'string',
      expression: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimePeriodResponseBody extends $tea.Model {
  requestId?: string;
  timePeriodId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timePeriodId: 'TimePeriodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timePeriodId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimePeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTimePeriodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTimePeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  deviceFormId?: string;
  deviceFormName?: string;
  physicalSpaceId?: string;
  hostName?: string[];
  ip?: string[];
  sn?: string[];
  mac?: string[];
  vendor?: string[];
  model?: string[];
  serviceStatus?: string[];
  securityDomain?: string[];
  extAttributes?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      physicalSpaceId: 'PhysicalSpaceId',
      hostName: 'HostName',
      ip: 'Ip',
      sn: 'Sn',
      mac: 'Mac',
      vendor: 'Vendor',
      model: 'Model',
      serviceStatus: 'ServiceStatus',
      securityDomain: 'SecurityDomain',
      extAttributes: 'ExtAttributes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      deviceFormId: 'string',
      deviceFormName: 'string',
      physicalSpaceId: 'string',
      hostName: { 'type': 'array', 'itemType': 'string' },
      ip: { 'type': 'array', 'itemType': 'string' },
      sn: { 'type': 'array', 'itemType': 'string' },
      mac: { 'type': 'array', 'itemType': 'string' },
      vendor: { 'type': 'array', 'itemType': 'string' },
      model: { 'type': 'array', 'itemType': 'string' },
      serviceStatus: { 'type': 'array', 'itemType': 'string' },
      securityDomain: { 'type': 'array', 'itemType': 'string' },
      extAttributes: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  devices?: ListDevicesResponseBodyDevices[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      devices: 'Devices',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      devices: { 'type': 'array', 'itemType': ListDevicesResponseBodyDevices },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsRequest extends $tea.Model {
  inspectionItemId?: string;
  vendor?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionItemId: 'InspectionItemId',
      vendor: 'Vendor',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionItemId: 'string',
      vendor: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponseBody extends $tea.Model {
  requestId?: string;
  inspectionTask?: ListInspectionTaskReportsResponseBodyInspectionTask[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      inspectionTask: 'InspectionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      inspectionTask: { 'type': 'array', 'itemType': ListInspectionTaskReportsResponseBodyInspectionTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInspectionTaskReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInspectionTaskReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorItemRequest extends $tea.Model {
  monitorItemName?: string;
  monitorItemDescription?: string;
  dataItem?: string;
  securityDomain?: string;
  analysisCode?: string;
  collectionType?: string;
  effective?: number;
  config?: string;
  execInterval?: number;
  deviceForm?: string;
  alarmRuleList?: CreateMonitorItemRequestAlarmRuleList[];
  type?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItemName: 'MonitorItemName',
      monitorItemDescription: 'MonitorItemDescription',
      dataItem: 'DataItem',
      securityDomain: 'SecurityDomain',
      analysisCode: 'AnalysisCode',
      collectionType: 'CollectionType',
      effective: 'Effective',
      config: 'Config',
      execInterval: 'ExecInterval',
      deviceForm: 'DeviceForm',
      alarmRuleList: 'AlarmRuleList',
      type: 'Type',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItemName: 'string',
      monitorItemDescription: 'string',
      dataItem: 'string',
      securityDomain: 'string',
      analysisCode: 'string',
      collectionType: 'string',
      effective: 'number',
      config: 'string',
      execInterval: 'number',
      deviceForm: 'string',
      alarmRuleList: { 'type': 'array', 'itemType': CreateMonitorItemRequestAlarmRuleList },
      type: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorItemResponseBody extends $tea.Model {
  monitorItemId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItemId: 'MonitorItemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItemId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalSpaceRequest extends $tea.Model {
  physicalSpaceName?: string;
  country?: string;
  province?: string;
  city?: string;
  address?: string;
  clientToken?: string;
  instanceId?: string;
  spaceType?: string;
  spaceAbbreviation?: string;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      spaceType: 'SpaceType',
      spaceAbbreviation: 'SpaceAbbreviation',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceName: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      address: 'string',
      clientToken: 'string',
      instanceId: 'string',
      spaceType: 'string',
      spaceAbbreviation: 'string',
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalSpaceResponseBody extends $tea.Model {
  requestId?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePhysicalSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePhysicalSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevicesRequest extends $tea.Model {
  deviceIds?: string[];
  loginType?: string;
  loginUsername?: string;
  loginPassword?: string;
  snmpAccountVersion?: string;
  snmpCommunity?: string;
  snmpAccountType?: string;
  snmpSecurityLevel?: string;
  snmpUserName?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpPrivacyPassphase?: string;
  snmpPrivacyProtocol?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      loginPassword: 'LoginPassword',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpCommunity: 'SnmpCommunity',
      snmpAccountType: 'SnmpAccountType',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUserName: 'SnmpUserName',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpPrivacyPassphase: 'SnmpPrivacyPassphase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      loginType: 'string',
      loginUsername: 'string',
      loginPassword: 'string',
      snmpAccountVersion: 'string',
      snmpCommunity: 'string',
      snmpAccountType: 'string',
      snmpSecurityLevel: 'string',
      snmpUserName: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpPrivacyPassphase: 'string',
      snmpPrivacyProtocol: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevicesResponseBody extends $tea.Model {
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

export class UpdateDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleTypeRequest extends $tea.Model {
  instanceId?: string;
  scheduleTypeId?: string;
  scheduleType?: string;
  relatedWorker?: string[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleTypeId: 'ScheduleTypeId',
      scheduleType: 'ScheduleType',
      relatedWorker: 'RelatedWorker',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleTypeId: 'string',
      scheduleType: 'string',
      relatedWorker: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleTypeShrinkRequest extends $tea.Model {
  instanceId?: string;
  scheduleTypeId?: string;
  scheduleType?: string;
  relatedWorkerShrink?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleTypeId: 'ScheduleTypeId',
      scheduleType: 'ScheduleType',
      relatedWorkerShrink: 'RelatedWorker',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleTypeId: 'string',
      scheduleType: 'string',
      relatedWorkerShrink: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleTypeResponseBody extends $tea.Model {
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

export class UpdateScheduleTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateScheduleTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateScheduleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDeviceResourceRequest extends $tea.Model {
  instanceId?: string;
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  downloadType?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      downloadType: 'DownloadType',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      downloadType: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDeviceResourceShrinkRequest extends $tea.Model {
  instanceId?: string;
  deviceResourceId?: string;
  deviceResourceIdsShrink?: string;
  downloadType?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      downloadType: 'DownloadType',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      deviceResourceId: 'string',
      deviceResourceIdsShrink: 'string',
      downloadType: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDeviceResourceResponseBody extends $tea.Model {
  requestId?: string;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDeviceResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadDeviceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadDeviceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsDownloadPathRequest extends $tea.Model {
  instanceId?: string;
  osVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      osVersionId: 'OsVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      osVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsDownloadPathResponseBody extends $tea.Model {
  requestId?: string;
  osVersion?: GetOsDownloadPathResponseBodyOsVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osVersion: GetOsDownloadPathResponseBodyOsVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsDownloadPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOsDownloadPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOsDownloadPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoliciesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  instanceId?: string;
  architectureIterationId?: string;
  connectionPolicyId?: string;
  uplinkArchitectureModuleId?: string;
  downlinkArchitectureModuleId?: string;
  uplinkArchitectureDeviceId?: string;
  downlinkArchitectureDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      instanceId: 'InstanceId',
      architectureIterationId: 'ArchitectureIterationId',
      connectionPolicyId: 'ConnectionPolicyId',
      uplinkArchitectureModuleId: 'UplinkArchitectureModuleId',
      downlinkArchitectureModuleId: 'DownlinkArchitectureModuleId',
      uplinkArchitectureDeviceId: 'UplinkArchitectureDeviceId',
      downlinkArchitectureDeviceId: 'DownlinkArchitectureDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      instanceId: 'string',
      architectureIterationId: 'string',
      connectionPolicyId: 'string',
      uplinkArchitectureModuleId: 'string',
      downlinkArchitectureModuleId: 'string',
      uplinkArchitectureDeviceId: 'string',
      downlinkArchitectureDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoliciesResponseBody extends $tea.Model {
  totalCount?: number;
  connectionPolicy?: ListConnectionPoliciesResponseBodyConnectionPolicy[];
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      connectionPolicy: 'ConnectionPolicy',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      connectionPolicy: { 'type': 'array', 'itemType': ListConnectionPoliciesResponseBodyConnectionPolicy },
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectionPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectionPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleWorkerRequest extends $tea.Model {
  instanceId?: string;
  scheduleWorkerId?: string;
  workerId?: string;
  workerName?: string;
  workerContact?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleWorkerId: 'ScheduleWorkerId',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
      workerContact: 'WorkerContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleWorkerId: 'string',
      workerId: 'string',
      workerName: 'string',
      workerContact: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleWorkerResponseBody extends $tea.Model {
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

export class UpdateScheduleWorkerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateScheduleWorkerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateScheduleWorkerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationVariateRequest extends $tea.Model {
  instanceId?: string;
  configurationVariateId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      configurationVariateId: 'ConfigurationVariateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      configurationVariateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationVariateResponseBody extends $tea.Model {
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

export class DeleteConfigurationVariateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigurationVariateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigurationVariateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleDutyRequest extends $tea.Model {
  instanceId?: string;
  startDate?: string;
  endDate?: string;
  scheduleTypeIds?: string[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      scheduleTypeIds: 'ScheduleTypeIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'string',
      endDate: 'string',
      scheduleTypeIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleDutyShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: string;
  endDate?: string;
  scheduleTypeIdsShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      scheduleTypeIdsShrink: 'ScheduleTypeIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'string',
      endDate: 'string',
      scheduleTypeIdsShrink: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleDutyResponseBody extends $tea.Model {
  requestId?: string;
  scheduleDutyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scheduleDutyId: 'ScheduleDutyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleDutyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleDutyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScheduleDutyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduleDutyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceRequest extends $tea.Model {
  physicalSpaceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceResponseBody extends $tea.Model {
  requestId?: string;
  physicalSpace?: GetPhysicalSpaceResponseBodyPhysicalSpace;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      physicalSpace: 'PhysicalSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      physicalSpace: GetPhysicalSpaceResponseBodyPhysicalSpace,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPhysicalSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPhysicalSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInformationRequest extends $tea.Model {
  instanceId?: string;
  resourceInformationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformationId: 'ResourceInformationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInformationResponseBody extends $tea.Model {
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

export class DeleteResourceInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteResourceInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteResourceInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSetupProjectRequest extends $tea.Model {
  instanceId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSetupProjectResponseBody extends $tea.Model {
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

export class DeleteSetupProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSetupProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSetupProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedLineRequest extends $tea.Model {
  physicalSpaceId?: string;
  isp?: string;
  bandwidth?: number;
  dedicatedLineIp?: string;
  dedicatedLineGateway?: string;
  dedicatedLineRole?: string;
  deviceId?: string;
  devicePort?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      isp: 'Isp',
      bandwidth: 'Bandwidth',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineRole: 'DedicatedLineRole',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      isp: 'string',
      bandwidth: 'number',
      dedicatedLineIp: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineRole: 'string',
      deviceId: 'string',
      devicePort: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedLineResponseBody extends $tea.Model {
  dedicatedLineId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineId: 'DedicatedLineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyIPRequest extends $tea.Model {
  instanceId?: string;
  ipType?: string;
  setupProjectId?: string;
  businessTypeId?: string;
  deviceResourceIds?: string[];
  loopbackPort?: string;
  netLocation?: string;
  businessTypeParams?: string;
  deviceResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipType: 'IpType',
      setupProjectId: 'SetupProjectId',
      businessTypeId: 'BusinessTypeId',
      deviceResourceIds: 'DeviceResourceIds',
      loopbackPort: 'LoopbackPort',
      netLocation: 'NetLocation',
      businessTypeParams: 'BusinessTypeParams',
      deviceResourceId: 'DeviceResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipType: 'string',
      setupProjectId: 'string',
      businessTypeId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      loopbackPort: 'string',
      netLocation: 'string',
      businessTypeParams: 'string',
      deviceResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyIPShrinkRequest extends $tea.Model {
  instanceId?: string;
  ipType?: string;
  setupProjectId?: string;
  businessTypeId?: string;
  deviceResourceIdsShrink?: string;
  loopbackPort?: string;
  netLocation?: string;
  businessTypeParams?: string;
  deviceResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipType: 'IpType',
      setupProjectId: 'SetupProjectId',
      businessTypeId: 'BusinessTypeId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      loopbackPort: 'LoopbackPort',
      netLocation: 'NetLocation',
      businessTypeParams: 'BusinessTypeParams',
      deviceResourceId: 'DeviceResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipType: 'string',
      setupProjectId: 'string',
      businessTypeId: 'string',
      deviceResourceIdsShrink: 'string',
      loopbackPort: 'string',
      netLocation: 'string',
      businessTypeParams: 'string',
      deviceResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyIPResponseBody extends $tea.Model {
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

export class ApplyIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRequest extends $tea.Model {
  instanceId?: string;
  osVersionId?: string;
  vendor?: string;
  model?: string;
  osVersion?: string;
  status?: string;
  fileName?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      osVersionId: 'OsVersionId',
      vendor: 'Vendor',
      model: 'Model',
      osVersion: 'OsVersion',
      status: 'Status',
      fileName: 'FileName',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      osVersionId: 'string',
      vendor: 'string',
      model: 'string',
      osVersion: 'string',
      status: 'string',
      fileName: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionResponseBody extends $tea.Model {
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

export class UpdateOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelInstanceRequest extends $tea.Model {
  instanceId?: string;
  spaceId?: string;
  spaceType?: string;
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceId: 'SpaceId',
      spaceType: 'SpaceType',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceId: 'string',
      spaceType: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelInstanceResponseBody extends $tea.Model {
  requestId?: string;
  spaceModel?: GetSpaceModelInstanceResponseBodySpaceModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spaceModel: 'SpaceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spaceModel: GetSpaceModelInstanceResponseBodySpaceModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSpaceModelInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSpaceModelInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOsVersionsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOsVersionsResponseBody extends $tea.Model {
  totalCount?: number;
  maxResults?: number;
  requestId?: string;
  nextToken?: number;
  osVersion?: ListOsVersionsResponseBodyOsVersion[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      maxResults: 'number',
      requestId: 'string',
      nextToken: 'number',
      osVersion: { 'type': 'array', 'itemType': ListOsVersionsResponseBodyOsVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOsVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOsVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOsVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigRequest extends $tea.Model {
  deviceId?: string;
  date?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      date: 'Date',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      date: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponseBody extends $tea.Model {
  deviceConfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceConfig: 'DeviceConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceConfig: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedLineRequest extends $tea.Model {
  dedicatedLineId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineId: 'DedicatedLineId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedLineResponseBody extends $tea.Model {
  requestId?: string;
  dedicatedLine?: GetDedicatedLineResponseBodyDedicatedLine;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedLine: 'DedicatedLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedLine: GetDedicatedLineResponseBodyDedicatedLine,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDedicatedLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDedicatedLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResourceRequest extends $tea.Model {
  instanceId?: string;
  deviceResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      deviceResourceId: 'DeviceResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      deviceResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResourceResponseBody extends $tea.Model {
  requestId?: string;
  deviceResource?: GetDeviceResourceResponseBodyDeviceResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceResource: 'DeviceResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceResource: GetDeviceResourceResponseBodyDeviceResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedLineRequest extends $tea.Model {
  dedicatedLineId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineId: 'DedicatedLineId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedLineResponseBody extends $tea.Model {
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

export class DeleteDedicatedLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDedicatedLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDedicatedLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  ipAddress?: string;
  ipBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ipAddress: 'IpAddress',
      ipBlockId: 'IpBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ipAddress: 'string',
      ipBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: string;
  maxResults?: number;
  ip?: ListIpResponseBodyIp[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      ip: { 'type': 'array', 'itemType': ListIpResponseBodyIp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationSpecificationsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  architecture?: string;
  role?: string;
  vendor?: string;
  model?: string;
  specificationName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      architecture: 'Architecture',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      specificationName: 'SpecificationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      architecture: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
      specificationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationSpecificationsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  configurationSpecification?: ListConfigurationSpecificationsResponseBodyConfigurationSpecification[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      configurationSpecification: 'ConfigurationSpecification',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      configurationSpecification: { 'type': 'array', 'itemType': ListConfigurationSpecificationsResponseBodyConfigurationSpecification },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationSpecificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigurationSpecificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigurationSpecificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNotificationRequest extends $tea.Model {
  list?: EnableNotificationRequestList[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': EnableNotificationRequestList },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNotificationResponseBody extends $tea.Model {
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

export class EnableNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevicePropertyRequest extends $tea.Model {
  devicePropertyId?: string;
  propertyFormat?: string;
  propertyContent?: string;
  propertyName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      propertyFormat: 'PropertyFormat',
      propertyContent: 'PropertyContent',
      propertyName: 'PropertyName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      propertyFormat: 'string',
      propertyContent: 'string',
      propertyName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevicePropertyResponseBody extends $tea.Model {
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

export class UpdateDevicePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDevicePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDevicePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationHistoriesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  monitorItemId?: string;
  deviceId?: string;
  type?: string;
  dedicatedLineId?: string;
  aggregateDataId?: string;
  instanceId?: string;
  portCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      monitorItemId: 'MonitorItemId',
      deviceId: 'DeviceId',
      type: 'Type',
      dedicatedLineId: 'DedicatedLineId',
      aggregateDataId: 'AggregateDataId',
      instanceId: 'InstanceId',
      portCollectionId: 'PortCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      monitorItemId: 'string',
      deviceId: 'string',
      type: 'string',
      dedicatedLineId: 'string',
      aggregateDataId: 'string',
      instanceId: 'string',
      portCollectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: string;
  maxResults?: number;
  notificationHistories?: ListNotificationHistoriesResponseBodyNotificationHistories[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      notificationHistories: 'NotificationHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      notificationHistories: { 'type': 'array', 'itemType': ListNotificationHistoriesResponseBodyNotificationHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNotificationHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNotificationHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropertyRequest extends $tea.Model {
  devicePropertyId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropertyResponseBody extends $tea.Model {
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

export class DeleteDevicePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevicePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevicePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesRequest extends $tea.Model {
  instanceId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBody extends $tea.Model {
  logicResource?: ListResourceInstancesResponseBodyLogicResource[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logicResource: 'LogicResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicResource: { 'type': 'array', 'itemType': ListResourceInstancesResponseBodyLogicResource },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  instanceId?: string;
  netType?: string;
  treeType?: boolean;
  ipBlock?: string;
  ip?: string;
  status?: string;
  zoneName?: string;
  netBusiness?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      instanceId: 'InstanceId',
      netType: 'NetType',
      treeType: 'TreeType',
      ipBlock: 'IpBlock',
      ip: 'Ip',
      status: 'Status',
      zoneName: 'ZoneName',
      netBusiness: 'NetBusiness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      instanceId: 'string',
      netType: 'string',
      treeType: 'boolean',
      ipBlock: 'string',
      ip: 'string',
      status: 'string',
      zoneName: 'string',
      netBusiness: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  ipBlock?: ListIpBlocksResponseBodyIpBlock[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      ipBlock: 'IpBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
      ipBlock: { 'type': 'array', 'itemType': ListIpBlocksResponseBodyIpBlock },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIpBlocksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIpBlocksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResourcesRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  businessType?: string;
  listType?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      businessType: 'BusinessType',
      listType: 'ListType',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      businessType: 'string',
      listType: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResourcesResponseBody extends $tea.Model {
  totalCount?: number;
  deviceResource?: ListDeviceResourcesResponseBodyDeviceResource[];
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      deviceResource: 'DeviceResource',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      deviceResource: { 'type': 'array', 'itemType': ListDeviceResourcesResponseBodyDeviceResource },
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  architectureId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      architectureId: 'ArchitectureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      architectureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  resourceInformation?: ListResourceInformationsResponseBodyResourceInformation[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      resourceInformation: 'ResourceInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
      resourceInformation: { 'type': 'array', 'itemType': ListResourceInformationsResponseBodyResourceInformation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceInformationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceInformationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsResponseBody extends $tea.Model {
  deviceForms?: ListDeviceFormsResponseBodyDeviceForms[];
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      deviceForms: 'DeviceForms',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceForms: { 'type': 'array', 'itemType': ListDeviceFormsResponseBodyDeviceForms },
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceFormsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceFormsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationSpecificationRequest extends $tea.Model {
  configurationSpecificationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationSpecificationId: 'ConfigurationSpecificationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationSpecificationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationSpecificationResponseBody extends $tea.Model {
  requestId?: string;
  configurationSpecification?: GetConfigurationSpecificationResponseBodyConfigurationSpecification;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationSpecification: 'ConfigurationSpecification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationSpecification: GetConfigurationSpecificationResponseBodyConfigurationSpecification,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigurationSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigurationSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleDutyRequest extends $tea.Model {
  instanceId?: string;
  scheduleDutyId?: string;
  typeWorkerList?: DeleteScheduleDutyRequestTypeWorkerList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDutyId: 'ScheduleDutyId',
      typeWorkerList: 'TypeWorkerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDutyId: 'string',
      typeWorkerList: { 'type': 'array', 'itemType': DeleteScheduleDutyRequestTypeWorkerList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleDutyShrinkRequest extends $tea.Model {
  instanceId?: string;
  scheduleDutyId?: string;
  typeWorkerListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDutyId: 'ScheduleDutyId',
      typeWorkerListShrink: 'TypeWorkerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDutyId: 'string',
      typeWorkerListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleDutyResponseBody extends $tea.Model {
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

export class DeleteScheduleDutyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScheduleDutyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScheduleDutyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScheduleDutyRequest extends $tea.Model {
  instanceId?: string;
  scheduleDuty?: UploadScheduleDutyRequestScheduleDuty[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDuty: 'ScheduleDuty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDuty: { 'type': 'array', 'itemType': UploadScheduleDutyRequestScheduleDuty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScheduleDutyShrinkRequest extends $tea.Model {
  instanceId?: string;
  scheduleDutyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scheduleDutyShrink: 'ScheduleDuty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scheduleDutyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScheduleDutyResponseBody extends $tea.Model {
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

export class UploadScheduleDutyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadScheduleDutyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadScheduleDutyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusHistoriesRequest extends $tea.Model {
  start?: number;
  end?: number;
  deviceId?: string;
  monitorItemId?: string;
  type?: string;
  aggregateDataId?: string;
  dedicatedLineId?: string;
  instanceId?: string;
  portCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      type: 'Type',
      aggregateDataId: 'AggregateDataId',
      dedicatedLineId: 'DedicatedLineId',
      instanceId: 'InstanceId',
      portCollectionId: 'PortCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      end: 'number',
      deviceId: 'string',
      monitorItemId: 'string',
      type: 'string',
      aggregateDataId: 'string',
      dedicatedLineId: 'string',
      instanceId: 'string',
      portCollectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusHistoriesResponseBody extends $tea.Model {
  requestId?: string;
  alarmStatusHistories?: ListAlarmStatusHistoriesResponseBodyAlarmStatusHistories[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alarmStatusHistories: 'AlarmStatusHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alarmStatusHistories: { 'type': 'array', 'itemType': ListAlarmStatusHistoriesResponseBodyAlarmStatusHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmStatusHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmStatusHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelRequest extends $tea.Model {
  instanceId?: string;
  spaceModelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceModelId: 'SpaceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelResponseBody extends $tea.Model {
  requestId?: string;
  spaceModel?: GetSpaceModelResponseBodySpaceModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spaceModel: 'SpaceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spaceModel: GetSpaceModelResponseBodySpaceModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSpaceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSpaceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceFormRequest extends $tea.Model {
  deviceFormName?: string;
  configCompare?: boolean;
  accountConfig?: boolean;
  detailDisplay?: boolean;
  uniqueKey?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormName: 'DeviceFormName',
      configCompare: 'ConfigCompare',
      accountConfig: 'AccountConfig',
      detailDisplay: 'DetailDisplay',
      uniqueKey: 'UniqueKey',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormName: 'string',
      configCompare: 'boolean',
      accountConfig: 'boolean',
      detailDisplay: 'boolean',
      uniqueKey: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceFormResponseBody extends $tea.Model {
  deviceFormId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceFormResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceFormResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceFormResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalSpacesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  physicalSpaceIds?: string[];
  physicalSpaceName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      physicalSpaceIds: 'PhysicalSpaceIds',
      physicalSpaceName: 'PhysicalSpaceName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      physicalSpaceIds: { 'type': 'array', 'itemType': 'string' },
      physicalSpaceName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalSpacesResponseBody extends $tea.Model {
  nextToken?: number;
  physicalSpaces?: ListPhysicalSpacesResponseBodyPhysicalSpaces[];
  requestId?: string;
  totalCount?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      physicalSpaces: 'PhysicalSpaces',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'number',
      physicalSpaces: { 'type': 'array', 'itemType': ListPhysicalSpacesResponseBodyPhysicalSpaces },
      requestId: 'string',
      totalCount: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalSpacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhysicalSpacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhysicalSpacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataRequest extends $tea.Model {
  start?: number;
  end?: number;
  dataType?: string;
  dataItem?: string;
  monitorItemId?: string;
  deviceId?: string;
  key?: string;
  aggregateDataId?: string;
  portCollectionId?: string;
  dedicatedLineId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
      dataType: 'DataType',
      dataItem: 'DataItem',
      monitorItemId: 'MonitorItemId',
      deviceId: 'DeviceId',
      key: 'Key',
      aggregateDataId: 'AggregateDataId',
      portCollectionId: 'PortCollectionId',
      dedicatedLineId: 'DedicatedLineId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      end: 'number',
      dataType: 'string',
      dataItem: 'string',
      monitorItemId: 'string',
      deviceId: 'string',
      key: 'string',
      aggregateDataId: 'string',
      portCollectionId: 'string',
      dedicatedLineId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataResponseBody extends $tea.Model {
  requestId?: string;
  monitorData?: ListMonitorDataResponseBodyMonitorData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorData: 'MonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorData: { 'type': 'array', 'itemType': ListMonitorDataResponseBodyMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInformationRequest extends $tea.Model {
  instanceId?: string;
  resourceType?: string;
  resourceAttribute?: string;
  architectureId?: string;
  information?: CreateResourceInformationRequestInformation[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceType: 'ResourceType',
      resourceAttribute: 'ResourceAttribute',
      architectureId: 'ArchitectureId',
      information: 'Information',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceType: 'string',
      resourceAttribute: 'string',
      architectureId: 'string',
      information: { 'type': 'array', 'itemType': CreateResourceInformationRequestInformation },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInformationResponseBody extends $tea.Model {
  resourceInformationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceInformationId: 'ResourceInformationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceInformationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourceInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelInstanceRequest extends $tea.Model {
  spaceId?: string;
  instance?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      instance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelInstanceResponseBody extends $tea.Model {
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

export class UpdateSpaceModelInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSpaceModelInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSpaceModelInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpRecordRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  ipRecordId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      ipRecordId: 'IpRecordId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      ipRecordId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpRecordResponseBody extends $tea.Model {
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

export class UpdateIpRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseIPRequest extends $tea.Model {
  instanceId?: string;
  ipType?: string;
  setupProjectId?: string;
  deviceResourceIds?: string[];
  deviceResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipType: 'IpType',
      setupProjectId: 'SetupProjectId',
      deviceResourceIds: 'DeviceResourceIds',
      deviceResourceId: 'DeviceResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipType: 'string',
      setupProjectId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      deviceResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseIPShrinkRequest extends $tea.Model {
  instanceId?: string;
  ipType?: string;
  setupProjectId?: string;
  deviceResourceIdsShrink?: string;
  deviceResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipType: 'IpType',
      setupProjectId: 'SetupProjectId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      deviceResourceId: 'DeviceResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipType: 'string',
      setupProjectId: 'string',
      deviceResourceIdsShrink: 'string',
      deviceResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseIPResponseBody extends $tea.Model {
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

export class ReleaseIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResourceRequest extends $tea.Model {
  deviceResourceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResourceResponseBody extends $tea.Model {
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

export class DeleteDeviceResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockRequest extends $tea.Model {
  ipBlockId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ipBlockId: 'IpBlockId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockResponseBody extends $tea.Model {
  requestId?: string;
  ipBlock?: GetIpBlockResponseBodyIpBlock;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipBlock: 'IpBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipBlock: GetIpBlockResponseBodyIpBlock,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIpBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIpBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpBlockRequest extends $tea.Model {
  instanceId?: string;
  ipBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipBlockId: 'IpBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpBlockResponseBody extends $tea.Model {
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

export class DeleteIpBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInspectionTaskRequest extends $tea.Model {
  taskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInspectionTaskResponseBody extends $tea.Model {
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

export class DeleteInspectionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationSpecificationRequest extends $tea.Model {
  configurationSpecificationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationSpecificationId: 'ConfigurationSpecificationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationSpecificationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigurationSpecificationResponseBody extends $tea.Model {
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

export class DeleteConfigurationSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigurationSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigurationSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessTypesRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  name?: string;
  reserveNumber?: number;
  type?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      name: 'Name',
      reserveNumber: 'ReserveNumber',
      type: 'Type',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      name: 'string',
      reserveNumber: 'number',
      type: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessTypesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  businessType?: ListBusinessTypesResponseBodyBusinessType[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
      businessType: { 'type': 'array', 'itemType': ListBusinessTypesResponseBodyBusinessType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBusinessTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBusinessTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  status?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponseBody extends $tea.Model {
  setupProject?: ListSetupProjectsResponseBodySetupProject[];
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      setupProject: 'SetupProject',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setupProject: { 'type': 'array', 'itemType': ListSetupProjectsResponseBodySetupProject },
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSetupProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSetupProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  itemId?: string;
  deviceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      itemId: 'ItemId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      itemId: 'string',
      deviceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: number;
  inspectionTasks?: ListTasksHistoriesResponseBodyInspectionTasks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      inspectionTasks: 'InspectionTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'number',
      inspectionTasks: { 'type': 'array', 'itemType': ListTasksHistoriesResponseBodyInspectionTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTasksHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTasksHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationSpecificationRequest extends $tea.Model {
  instanceId?: string;
  specificationName?: string;
  configurationSpecificationId?: string;
  architecture?: string;
  role?: string;
  vendor?: string;
  model?: string;
  specificationContent?: string;
  relatedVariate?: Buffer[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      specificationName: 'SpecificationName',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      architecture: 'Architecture',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      specificationContent: 'SpecificationContent',
      relatedVariate: 'RelatedVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      specificationName: 'string',
      configurationSpecificationId: 'string',
      architecture: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
      specificationContent: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'Buffer' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationSpecificationShrinkRequest extends $tea.Model {
  instanceId?: string;
  specificationName?: string;
  configurationSpecificationId?: string;
  architecture?: string;
  role?: string;
  vendor?: string;
  model?: string;
  specificationContent?: string;
  relatedVariateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      specificationName: 'SpecificationName',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      architecture: 'Architecture',
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      specificationContent: 'SpecificationContent',
      relatedVariateShrink: 'RelatedVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      specificationName: 'string',
      configurationSpecificationId: 'string',
      architecture: 'string',
      role: 'string',
      vendor: 'string',
      model: 'string',
      specificationContent: 'string',
      relatedVariateShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationSpecificationResponseBody extends $tea.Model {
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

export class UpdateConfigurationSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigurationSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigurationSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionRequest extends $tea.Model {
  instanceId?: string;
  createTime?: string;
  vendor?: string;
  model?: string;
  osVersion?: string;
  status?: string;
  fileName?: string;
  filePath?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      vendor: 'Vendor',
      model: 'Model',
      osVersion: 'OsVersion',
      status: 'Status',
      fileName: 'FileName',
      filePath: 'FilePath',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      createTime: 'string',
      vendor: 'string',
      model: 'string',
      osVersion: 'string',
      status: 'string',
      fileName: 'string',
      filePath: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionResponseBody extends $tea.Model {
  osVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      osVersionId: 'OsVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockRecordRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  title?: string;
  creator?: string;
  workNo?: string;
  netType?: string;
  zoneLayer?: CreateIpBlockRecordRequestZoneLayer[];
  businessType?: CreateIpBlockRecordRequestBusinessType[];
  netBusiness?: string;
  parentIpBlock?: string;
  mask?: number;
  recordType?: string;
  ipBlockCode?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      title: 'Title',
      creator: 'Creator',
      workNo: 'WorkNo',
      netType: 'NetType',
      zoneLayer: 'ZoneLayer',
      businessType: 'BusinessType',
      netBusiness: 'NetBusiness',
      parentIpBlock: 'ParentIpBlock',
      mask: 'Mask',
      recordType: 'RecordType',
      ipBlockCode: 'IpBlockCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      title: 'string',
      creator: 'string',
      workNo: 'string',
      netType: 'string',
      zoneLayer: { 'type': 'array', 'itemType': CreateIpBlockRecordRequestZoneLayer },
      businessType: { 'type': 'array', 'itemType': CreateIpBlockRecordRequestBusinessType },
      netBusiness: 'string',
      parentIpBlock: 'string',
      mask: 'number',
      recordType: 'string',
      ipBlockCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockRecordShrinkRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  title?: string;
  creator?: string;
  workNo?: string;
  netType?: string;
  zoneLayerShrink?: string;
  businessTypeShrink?: string;
  netBusiness?: string;
  parentIpBlock?: string;
  mask?: number;
  recordType?: string;
  ipBlockCodeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      title: 'Title',
      creator: 'Creator',
      workNo: 'WorkNo',
      netType: 'NetType',
      zoneLayerShrink: 'ZoneLayer',
      businessTypeShrink: 'BusinessType',
      netBusiness: 'NetBusiness',
      parentIpBlock: 'ParentIpBlock',
      mask: 'Mask',
      recordType: 'RecordType',
      ipBlockCodeShrink: 'IpBlockCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      title: 'string',
      creator: 'string',
      workNo: 'string',
      netType: 'string',
      zoneLayerShrink: 'string',
      businessTypeShrink: 'string',
      netBusiness: 'string',
      parentIpBlock: 'string',
      mask: 'number',
      recordType: 'string',
      ipBlockCodeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockRecordResponseBody extends $tea.Model {
  requestId?: string;
  ipBlockRecordId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipBlockRecordId: 'IpBlockRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipBlockRecordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpBlockRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpBlockRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpBlockRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  ipBlockId?: string;
  businessTypeId?: string;
  deviceName?: string;
  zoneName?: string;
  backupDeviceName?: string;
  netBusiness?: string;
  ownership?: string;
  application?: string;
  description?: string;
  updateType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      ipBlockId: 'IpBlockId',
      businessTypeId: 'BusinessTypeId',
      deviceName: 'DeviceName',
      zoneName: 'ZoneName',
      backupDeviceName: 'BackupDeviceName',
      netBusiness: 'NetBusiness',
      ownership: 'Ownership',
      application: 'Application',
      description: 'Description',
      updateType: 'UpdateType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      ipBlockId: 'string',
      businessTypeId: 'string',
      deviceName: 'string',
      zoneName: 'string',
      backupDeviceName: 'string',
      netBusiness: 'string',
      ownership: 'string',
      application: 'string',
      description: 'string',
      updateType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpBlockResponseBody extends $tea.Model {
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

export class UpdateIpBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePropertyRequest extends $tea.Model {
  deviceFormId?: string;
  propertyName?: string;
  propertyKey?: string;
  propertyFormat?: string;
  propertyContent?: string;
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      propertyName: 'PropertyName',
      propertyKey: 'PropertyKey',
      propertyFormat: 'PropertyFormat',
      propertyContent: 'PropertyContent',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      propertyName: 'string',
      propertyKey: 'string',
      propertyFormat: 'string',
      propertyContent: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePropertyResponseBody extends $tea.Model {
  devicePropertyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevicePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevicePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpBlockRecordRequest extends $tea.Model {
  instanceId?: string;
  clientToken?: string;
  ipBlockRecordId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      ipBlockRecordId: 'IpBlockRecordId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientToken: 'string',
      ipBlockRecordId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpBlockRecordResponseBody extends $tea.Model {
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

export class UpdateIpBlockRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpBlockRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpBlockRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksRequest extends $tea.Model {
  retryTasks?: RetryTasksRequestRetryTasks[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      retryTasks: 'RetryTasks',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryTasks: { 'type': 'array', 'itemType': RetryTasksRequestRetryTasks },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksShrinkRequest extends $tea.Model {
  retryTasksShrink?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      retryTasksShrink: 'RetryTasks',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryTasksShrink: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksResponseBody extends $tea.Model {
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

export class RetryTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoRequest extends $tea.Model {
  physicalSpaceId?: string;
  topoType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      topoType: 'TopoType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      topoType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoResponseBody extends $tea.Model {
  requestId?: string;
  topoData?: GetPhysicalSpaceTopoResponseBodyTopoData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topoData: 'TopoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topoData: GetPhysicalSpaceTopoResponseBodyTopoData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPhysicalSpaceTopoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPhysicalSpaceTopoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssPolicyRequest extends $tea.Model {
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

export class GetOssPolicyResponseBody extends $tea.Model {
  requestId?: string;
  ossPolicy?: GetOssPolicyResponseBodyOssPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossPolicy: 'OssPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossPolicy: GetOssPolicyResponseBodyOssPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOssPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOssPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceFormRequest extends $tea.Model {
  deviceFormId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceFormResponseBody extends $tea.Model {
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

export class DeleteDeviceFormResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceFormResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceFormResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceFormRequest extends $tea.Model {
  deviceFormId?: string;
  configCompare?: boolean;
  accountConfig?: boolean;
  attributeList?: UpdateDeviceFormRequestAttributeList[];
  detailDisplay?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      configCompare: 'ConfigCompare',
      accountConfig: 'AccountConfig',
      attributeList: 'AttributeList',
      detailDisplay: 'DetailDisplay',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      configCompare: 'boolean',
      accountConfig: 'boolean',
      attributeList: { 'type': 'array', 'itemType': UpdateDeviceFormRequestAttributeList },
      detailDisplay: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceFormShrinkRequest extends $tea.Model {
  deviceFormId?: string;
  configCompare?: boolean;
  accountConfig?: boolean;
  attributeListShrink?: string;
  detailDisplay?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      configCompare: 'ConfigCompare',
      accountConfig: 'AccountConfig',
      attributeListShrink: 'AttributeList',
      detailDisplay: 'DetailDisplay',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      configCompare: 'boolean',
      accountConfig: 'boolean',
      attributeListShrink: 'string',
      detailDisplay: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceFormResponseBody extends $tea.Model {
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

export class UpdateDeviceFormResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceFormResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceFormResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceRequest extends $tea.Model {
  deviceId?: string;
  physicalSpaceId?: string;
  hostName?: string;
  ip?: string;
  sn?: string;
  mac?: string;
  vendor?: string;
  model?: string;
  serviceStatus?: string;
  securityDomain?: string;
  loginType?: string;
  loginUsername?: string;
  loginPassword?: string;
  snmpAccountVersion?: string;
  snmpCommunity?: string;
  snmpAccountType?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpPrivacyPassphase?: string;
  snmpPrivacyProtocol?: string;
  extAttributes?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      physicalSpaceId: 'PhysicalSpaceId',
      hostName: 'HostName',
      ip: 'Ip',
      sn: 'Sn',
      mac: 'Mac',
      vendor: 'Vendor',
      model: 'Model',
      serviceStatus: 'ServiceStatus',
      securityDomain: 'SecurityDomain',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      loginPassword: 'LoginPassword',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpCommunity: 'SnmpCommunity',
      snmpAccountType: 'SnmpAccountType',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpPrivacyPassphase: 'SnmpPrivacyPassphase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      extAttributes: 'ExtAttributes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      physicalSpaceId: 'string',
      hostName: 'string',
      ip: 'string',
      sn: 'string',
      mac: 'string',
      vendor: 'string',
      model: 'string',
      serviceStatus: 'string',
      securityDomain: 'string',
      loginType: 'string',
      loginUsername: 'string',
      loginPassword: 'string',
      snmpAccountVersion: 'string',
      snmpCommunity: 'string',
      snmpAccountType: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpPrivacyPassphase: 'string',
      snmpPrivacyProtocol: 'string',
      extAttributes: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResponseBody extends $tea.Model {
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

export class UpdateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResponseBody extends $tea.Model {
  device?: GetDeviceResponseBodyDevice;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: GetDeviceResponseBodyDevice,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectRequest extends $tea.Model {
  instanceId?: string;
  setupProjectId?: string;
  spaceId?: string;
  description?: string;
  architectureId?: string;
  deliveryTime?: string;
  nodes?: string;
  packages?: UpdateSetupProjectRequestPackages[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
      description: 'Description',
      architectureId: 'ArchitectureId',
      deliveryTime: 'DeliveryTime',
      nodes: 'Nodes',
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      setupProjectId: 'string',
      spaceId: 'string',
      description: 'string',
      architectureId: 'string',
      deliveryTime: 'string',
      nodes: 'string',
      packages: { 'type': 'array', 'itemType': UpdateSetupProjectRequestPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectShrinkRequest extends $tea.Model {
  instanceId?: string;
  setupProjectId?: string;
  spaceId?: string;
  description?: string;
  architectureId?: string;
  deliveryTime?: string;
  nodes?: string;
  packagesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
      description: 'Description',
      architectureId: 'ArchitectureId',
      deliveryTime: 'DeliveryTime',
      nodes: 'Nodes',
      packagesShrink: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      setupProjectId: 'string',
      spaceId: 'string',
      description: 'string',
      architectureId: 'string',
      deliveryTime: 'string',
      nodes: 'string',
      packagesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectResponseBody extends $tea.Model {
  setupProjectName?: string;
  setupProjectId?: string;
  requestId?: string;
  setupProjectSpecification?: string;
  static names(): { [key: string]: string } {
    return {
      setupProjectName: 'SetupProjectName',
      setupProjectId: 'SetupProjectId',
      requestId: 'RequestId',
      setupProjectSpecification: 'SetupProjectSpecification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setupProjectName: 'string',
      setupProjectId: 'string',
      requestId: 'string',
      setupProjectSpecification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSetupProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSetupProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelRequest extends $tea.Model {
  instanceId?: string;
  spaceType?: string;
  spaceModelId?: string;
  sort?: UpdateSpaceModelRequestSort[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceType: 'SpaceType',
      spaceModelId: 'SpaceModelId',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceType: 'string',
      spaceModelId: 'string',
      sort: { 'type': 'array', 'itemType': UpdateSpaceModelRequestSort },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelShrinkRequest extends $tea.Model {
  instanceId?: string;
  spaceType?: string;
  spaceModelId?: string;
  sortShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceType: 'SpaceType',
      spaceModelId: 'SpaceModelId',
      sortShrink: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceType: 'string',
      spaceModelId: 'string',
      sortShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelResponseBody extends $tea.Model {
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

export class UpdateSpaceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSpaceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSpaceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  success?: boolean;
  message?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
      message: 'Message',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      success: 'boolean',
      message: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpaceModelRequest extends $tea.Model {
  instanceId?: string;
  spaceModelId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spaceModelId: 'SpaceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spaceModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpaceModelResponseBody extends $tea.Model {
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

export class DeleteSpaceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSpaceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSpaceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNotificationRequest extends $tea.Model {
  expiryTime?: string;
  reason?: string;
  list?: DisableNotificationRequestList[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      reason: 'Reason',
      list: 'List',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      reason: 'string',
      list: { 'type': 'array', 'itemType': DisableNotificationRequestList },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNotificationResponseBody extends $tea.Model {
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

export class DisableNotificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableNotificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableNotificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDiffRequest extends $tea.Model {
  deviceId?: string;
  startDate?: string;
  endDate?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      startDate: 'string',
      endDate: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDiffResponseBody extends $tea.Model {
  requestId?: string;
  deviceConfigDiff?: GetDeviceConfigDiffResponseBodyDeviceConfigDiff;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceConfigDiff: 'DeviceConfigDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceConfigDiff: GetDeviceConfigDiffResponseBodyDeviceConfigDiff,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDiffResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceConfigDiffResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceConfigDiffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskRequest extends $tea.Model {
  taskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskResponseBody extends $tea.Model {
  space?: string;
  requestId?: string;
  deviceId?: string;
  inspectionResult?: string;
  inspectionAlarmRules?: GetInspectionTaskResponseBodyInspectionAlarmRules[];
  IP?: string;
  hostName?: string;
  vendor?: string;
  taskStatus?: string;
  itemId?: string;
  executionEndTime?: string;
  executionBeginTime?: string;
  model?: string[];
  itemName?: string;
  errorCode?: string;
  scriptId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      space: 'Space',
      requestId: 'RequestId',
      deviceId: 'DeviceId',
      inspectionResult: 'InspectionResult',
      inspectionAlarmRules: 'InspectionAlarmRules',
      IP: 'IP',
      hostName: 'HostName',
      vendor: 'Vendor',
      taskStatus: 'TaskStatus',
      itemId: 'ItemId',
      executionEndTime: 'ExecutionEndTime',
      executionBeginTime: 'ExecutionBeginTime',
      model: 'Model',
      itemName: 'ItemName',
      errorCode: 'ErrorCode',
      scriptId: 'ScriptId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      space: 'string',
      requestId: 'string',
      deviceId: 'string',
      inspectionResult: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': GetInspectionTaskResponseBodyInspectionAlarmRules },
      IP: 'string',
      hostName: 'string',
      vendor: 'string',
      taskStatus: 'string',
      itemId: 'string',
      executionEndTime: 'string',
      executionBeginTime: 'string',
      model: { 'type': 'array', 'itemType': 'string' },
      itemName: 'string',
      errorCode: 'string',
      scriptId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  space?: string;
  deviceForm?: string;
  status?: string;
  deviceId?: string;
  monitorItemId?: string;
  type?: string;
  instanceId?: string;
  dedicatedLineName?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      space: 'Space',
      deviceForm: 'DeviceForm',
      status: 'Status',
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      type: 'Type',
      instanceId: 'InstanceId',
      dedicatedLineName: 'DedicatedLineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      space: 'string',
      deviceForm: 'string',
      status: 'string',
      deviceId: 'string',
      monitorItemId: 'string',
      type: 'string',
      instanceId: 'string',
      dedicatedLineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  nextToken?: string;
  maxResults?: number;
  alarmStatus?: ListAlarmStatusResponseBodyAlarmStatus[];
  statistics?: ListAlarmStatusResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      alarmStatus: 'AlarmStatus',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      alarmStatus: { 'type': 'array', 'itemType': ListAlarmStatusResponseBodyAlarmStatus },
      statistics: { 'type': 'array', 'itemType': ListAlarmStatusResponseBodyStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeRequest extends $tea.Model {
  instanceId?: string;
  architectureId?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      architectureId: 'ArchitectureId',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      architectureId: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeResponseBody extends $tea.Model {
  requestId?: string;
  architecture?: ListArchitectureAttributeResponseBodyArchitecture[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      architecture: 'Architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      architecture: { 'type': 'array', 'itemType': ListArchitectureAttributeResponseBodyArchitecture },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListArchitectureAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListArchitectureAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOsVersionRequest extends $tea.Model {
  instanceId?: string;
  osVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      osVersionId: 'OsVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      osVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOsVersionResponseBody extends $tea.Model {
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

export class DeleteOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTypeRequest extends $tea.Model {
  scheduleTypeId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleTypeId: 'ScheduleTypeId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTypeId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleTypeResponseBody extends $tea.Model {
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

export class DeleteScheduleTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScheduleTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScheduleTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhysicalSpaceRequest extends $tea.Model {
  physicalSpaceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhysicalSpaceResponseBody extends $tea.Model {
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

export class DeletePhysicalSpaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePhysicalSpaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePhysicalSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderStepRestriction extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeInput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeOutput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpaceModelSort extends $tea.Model {
  levelName?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      levelName: 'LevelName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelName: 'string',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpaceModelSpaceModelSort extends $tea.Model {
  level?: number;
  levleName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levleName: 'LevleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpaceModelSpaceModel extends $tea.Model {
  spaceModelId?: string;
  status?: string;
  spaceType?: string;
  createTime?: string;
  updateTime?: string;
  sort?: SpaceModelSpaceModelSort;
  static names(): { [key: string]: string } {
    return {
      spaceModelId: 'SpaceModelId',
      status: 'Status',
      spaceType: 'SpaceType',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceModelId: 'string',
      status: 'string',
      spaceType: 'string',
      createTime: 'string',
      updateTime: 'string',
      sort: SpaceModelSpaceModelSort,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateInput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateOutput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceResourceDeviceResource extends $tea.Model {
  deviceResourceId?: string;
  setupProjectId?: string;
  role?: string;
  blockNumber?: string;
  deviceNumber?: string;
  vendor?: string;
  model?: string;
  hostName?: string;
  sn?: string;
  location?: string;
  managerIp?: string;
  deliveryIp?: string;
  configGenerate?: boolean;
  configTaskStatus?: string;
  config?: string;
  loopback?: string;
  interConnection?: string;
  business?: string;
  stack?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      setupProjectId: 'SetupProjectId',
      role: 'Role',
      blockNumber: 'BlockNumber',
      deviceNumber: 'DeviceNumber',
      vendor: 'Vendor',
      model: 'Model',
      hostName: 'HostName',
      sn: 'Sn',
      location: 'Location',
      managerIp: 'ManagerIp',
      deliveryIp: 'DeliveryIp',
      configGenerate: 'ConfigGenerate',
      configTaskStatus: 'ConfigTaskStatus',
      config: 'Config',
      loopback: 'Loopback',
      interConnection: 'InterConnection',
      business: 'Business',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      setupProjectId: 'string',
      role: 'string',
      blockNumber: 'string',
      deviceNumber: 'string',
      vendor: 'string',
      model: 'string',
      hostName: 'string',
      sn: 'string',
      location: 'string',
      managerIp: 'string',
      deliveryIp: 'string',
      configGenerate: 'boolean',
      configTaskStatus: 'string',
      config: 'string',
      loopback: 'string',
      interConnection: 'string',
      business: 'string',
      stack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpBlockZoneLayer extends $tea.Model {
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

export class ScriptInput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScriptOutput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInformationInformation extends $tea.Model {
  key?: string;
  keyAttribute?: string;
  keyAction?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAttribute: 'KeyAttribute',
      keyAction: 'KeyAction',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAttribute: 'string',
      keyAction: 'string',
      keyDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleDutyTypeWorkerList extends $tea.Model {
  scheduleTypeId?: string;
  scheduleWorkerName?: string[];
  static names(): { [key: string]: string } {
    return {
      scheduleTypeId: 'ScheduleTypeId',
      scheduleWorkerName: 'ScheduleWorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTypeId: 'string',
      scheduleWorkerName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AtomicStepInput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AtomicStepOutput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleDevice extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  id?: string;
  deviceRole?: string;
  deviceCount?: number;
  deviceX?: string;
  deviceY?: string;
  role?: string;
  count?: number;
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      id: 'Id',
      deviceRole: 'DeviceRole',
      deviceCount: 'DeviceCount',
      deviceX: 'DeviceX',
      deviceY: 'DeviceY',
      role: 'Role',
      count: 'Count',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      id: 'string',
      deviceRole: 'string',
      deviceCount: 'number',
      deviceX: 'string',
      deviceY: 'string',
      role: 'string',
      count: 'number',
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleModuleDetailsDeviceDetails extends $tea.Model {
  orderNumber?: number;
  static names(): { [key: string]: string } {
    return {
      orderNumber: 'OrderNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleModuleDetails extends $tea.Model {
  orderNumber?: number;
  deviceDetails?: ModuleModuleDetailsDeviceDetails[];
  static names(): { [key: string]: string } {
    return {
      orderNumber: 'OrderNumber',
      deviceDetails: 'DeviceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNumber: 'number',
      deviceDetails: { 'type': 'array', 'itemType': ModuleModuleDetailsDeviceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScriptHistoryInput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScriptHistoryOutput extends $tea.Model {
  description?: string;
  name?: string;
  sample?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpZoneLayer extends $tea.Model {
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

export class ZoneTypeZoneTypeLayer extends $tea.Model {
  name?: string;
  mask?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      mask: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupProjectPackages extends $tea.Model {
  role?: string;
  deviceNumber?: string;
  vendor?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      deviceNumber: 'DeviceNumber',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      deviceNumber: 'string',
      vendor: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionTaskInspectionAlarmRules extends $tea.Model {
  expression?: string;
  operator?: string;
  value?: string;
  actualValue?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
      actualValue: 'ActualValue',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
      actualValue: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpBlockRecordDetailZoneLayer extends $tea.Model {
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

export class IpBlockRecordDetail extends $tea.Model {
  businessTypeName?: string;
  deviceName?: string;
  gateway?: string;
  parentIpBlocks?: string[];
  zoneLayer?: IpBlockRecordDetailZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      businessTypeName: 'BusinessTypeName',
      deviceName: 'DeviceName',
      gateway: 'Gateway',
      parentIpBlocks: 'ParentIpBlocks',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeName: 'string',
      deviceName: 'string',
      gateway: 'string',
      parentIpBlocks: { 'type': 'array', 'itemType': 'string' },
      zoneLayer: { 'type': 'array', 'itemType': IpBlockRecordDetailZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpRecordDetailZoneLayer extends $tea.Model {
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

export class IpRecordDetail extends $tea.Model {
  ip?: string;
  deviceName?: string;
  port?: string;
  remoteIp?: string;
  remoteDeviceName?: string;
  remotePort?: string;
  deviceMac?: string;
  gateway?: string;
  parentIpBlocks?: string[];
  zoneLayer?: IpRecordDetailZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      deviceName: 'DeviceName',
      port: 'Port',
      remoteIp: 'RemoteIp',
      remoteDeviceName: 'RemoteDeviceName',
      remotePort: 'RemotePort',
      deviceMac: 'DeviceMac',
      gateway: 'Gateway',
      parentIpBlocks: 'ParentIpBlocks',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      deviceName: 'string',
      port: 'string',
      remoteIp: 'string',
      remoteDeviceName: 'string',
      remotePort: 'string',
      deviceMac: 'string',
      gateway: 'string',
      parentIpBlocks: { 'type': 'array', 'itemType': 'string' },
      zoneLayer: { 'type': 'array', 'itemType': IpRecordDetailZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionScriptInspectionAlarmRules extends $tea.Model {
  alarmExpression?: string;
  alarmOperator?: string;
  alarmValue?: string;
  alarmLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alarmExpression: 'AlarmExpression',
      alarmOperator: 'AlarmOperator',
      alarmValue: 'AlarmValue',
      alarmLevel: 'AlarmLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmExpression: 'string',
      alarmOperator: 'string',
      alarmValue: 'string',
      alarmLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTypeResponseBodyScheduleType extends $tea.Model {
  status?: string;
  scheduleTypeId?: string;
  createTime?: string;
  updateTime?: string;
  scheduleType?: string;
  relatedWorker?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      scheduleTypeId: 'ScheduleTypeId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      scheduleType: 'ScheduleType',
      relatedWorker: 'RelatedWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      scheduleTypeId: 'string',
      createTime: 'string',
      updateTime: 'string',
      scheduleType: 'string',
      relatedWorker: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockRecordResponseBodyIpBlockRecordDetailZoneLayer extends $tea.Model {
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

export class GetIpBlockRecordResponseBodyIpBlockRecordDetail extends $tea.Model {
  businessTypeName?: string;
  deviceName?: string;
  gateway?: string;
  parentIpBlocks?: string[];
  zoneLayer?: GetIpBlockRecordResponseBodyIpBlockRecordDetailZoneLayer[];
  ipBlockCode?: string;
  static names(): { [key: string]: string } {
    return {
      businessTypeName: 'BusinessTypeName',
      deviceName: 'DeviceName',
      gateway: 'Gateway',
      parentIpBlocks: 'ParentIpBlocks',
      zoneLayer: 'ZoneLayer',
      ipBlockCode: 'IpBlockCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeName: 'string',
      deviceName: 'string',
      gateway: 'string',
      parentIpBlocks: { 'type': 'array', 'itemType': 'string' },
      zoneLayer: { 'type': 'array', 'itemType': GetIpBlockRecordResponseBodyIpBlockRecordDetailZoneLayer },
      ipBlockCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockRecordResponseBodyIpBlockRecord extends $tea.Model {
  ipBlockRecordId?: string;
  createTime?: string;
  updateTime?: string;
  title?: string;
  creator?: number;
  workNo?: string;
  netType?: string;
  status?: string;
  zoneName?: string;
  description?: string;
  detail?: GetIpBlockRecordResponseBodyIpBlockRecordDetail[];
  recordType?: string;
  ipBlockCode?: string[];
  static names(): { [key: string]: string } {
    return {
      ipBlockRecordId: 'IpBlockRecordId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      title: 'Title',
      creator: 'Creator',
      workNo: 'WorkNo',
      netType: 'NetType',
      status: 'Status',
      zoneName: 'ZoneName',
      description: 'Description',
      detail: 'Detail',
      recordType: 'RecordType',
      ipBlockCode: 'IpBlockCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockRecordId: 'string',
      createTime: 'string',
      updateTime: 'string',
      title: 'string',
      creator: 'number',
      workNo: 'string',
      netType: 'string',
      status: 'string',
      zoneName: 'string',
      description: 'string',
      detail: { 'type': 'array', 'itemType': GetIpBlockRecordResponseBodyIpBlockRecordDetail },
      recordType: 'string',
      ipBlockCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsResponseBodySpaceModelSort extends $tea.Model {
  levelName?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      levelName: 'LevelName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelName: 'string',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsResponseBodySpaceModel extends $tea.Model {
  spaceType?: string;
  sort?: ListSpaceModelsResponseBodySpaceModelSort[];
  createTime?: string;
  spaceModelId?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      spaceType: 'SpaceType',
      sort: 'Sort',
      createTime: 'CreateTime',
      spaceModelId: 'SpaceModelId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceType: 'string',
      sort: { 'type': 'array', 'itemType': ListSpaceModelsResponseBodySpaceModelSort },
      createTime: 'string',
      spaceModelId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePropertiesResponseBodyDeviceProperties extends $tea.Model {
  devicePropertyId?: string;
  deviceFormId?: string;
  deviceFormName?: string;
  propertyName?: string;
  propertyKey?: string;
  propertyFormat?: string;
  propertyContent?: string;
  builtIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      propertyName: 'PropertyName',
      propertyKey: 'PropertyKey',
      propertyFormat: 'PropertyFormat',
      propertyContent: 'PropertyContent',
      builtIn: 'BuiltIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      deviceFormId: 'string',
      deviceFormName: 'string',
      propertyName: 'string',
      propertyKey: 'string',
      propertyFormat: 'string',
      propertyContent: 'string',
      builtIn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesResponseBodyInspectionScripts extends $tea.Model {
  role?: string;
  vendor?: string;
  model?: string;
  hostName?: string;
  manageIp?: string;
  deviceState?: string;
  space?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
      hostName: 'HostName',
      manageIp: 'ManageIp',
      deviceState: 'DeviceState',
      space: 'Space',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      vendor: 'string',
      model: 'string',
      hostName: 'string',
      manageIp: 'string',
      deviceState: 'string',
      space: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponseBodyInspectionTasksInspectionAlarmRules extends $tea.Model {
  alarmExpression?: string;
  alarmOperator?: string;
  alarmValue?: string;
  actualValue?: string;
  alarmLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alarmExpression: 'AlarmExpression',
      alarmOperator: 'AlarmOperator',
      alarmValue: 'AlarmValue',
      actualValue: 'ActualValue',
      alarmLevel: 'AlarmLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmExpression: 'string',
      alarmOperator: 'string',
      alarmValue: 'string',
      actualValue: 'string',
      alarmLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponseBodyInspectionTasks extends $tea.Model {
  deviceId?: string;
  itemId?: string;
  executionEndTime?: string;
  executionBeginTime?: string;
  itemName?: string;
  scriptId?: string;
  space?: string;
  inspectionResult?: string;
  inspectionAlarmRules?: ListInspectionTasksResponseBodyInspectionTasksInspectionAlarmRules[];
  IP?: string;
  hostName?: string;
  vendor?: string;
  taskStatus?: string;
  model?: string[];
  errorCode?: string;
  inspectionMessage?: string;
  taskId?: string;
  deviceDisplay?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      itemId: 'ItemId',
      executionEndTime: 'ExecutionEndTime',
      executionBeginTime: 'ExecutionBeginTime',
      itemName: 'ItemName',
      scriptId: 'ScriptId',
      space: 'Space',
      inspectionResult: 'InspectionResult',
      inspectionAlarmRules: 'InspectionAlarmRules',
      IP: 'IP',
      hostName: 'HostName',
      vendor: 'Vendor',
      taskStatus: 'TaskStatus',
      model: 'Model',
      errorCode: 'ErrorCode',
      inspectionMessage: 'InspectionMessage',
      taskId: 'TaskId',
      deviceDisplay: 'DeviceDisplay',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      itemId: 'string',
      executionEndTime: 'string',
      executionBeginTime: 'string',
      itemName: 'string',
      scriptId: 'string',
      space: 'string',
      inspectionResult: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': ListInspectionTasksResponseBodyInspectionTasksInspectionAlarmRules },
      IP: 'string',
      hostName: 'string',
      vendor: 'string',
      taskStatus: 'string',
      model: { 'type': 'array', 'itemType': 'string' },
      errorCode: 'string',
      inspectionMessage: 'string',
      taskId: 'string',
      deviceDisplay: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleWorkersResponseBodyScheduleWorker extends $tea.Model {
  scheduleWorkerId?: string;
  createTime?: string;
  workerId?: string;
  workerName?: string;
  workerContact?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleWorkerId: 'ScheduleWorkerId',
      createTime: 'CreateTime',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
      workerContact: 'WorkerContact',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleWorkerId: 'string',
      createTime: 'string',
      workerId: 'string',
      workerName: 'string',
      workerContact: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyResponseBodyDeviceProperty extends $tea.Model {
  devicePropertyId?: string;
  deviceFormId?: string;
  deviceFormName?: string;
  propertyName?: string;
  propertyKey?: string;
  propertyFormat?: string;
  propertyContent?: string;
  builtIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      propertyName: 'PropertyName',
      propertyKey: 'PropertyKey',
      propertyFormat: 'PropertyFormat',
      propertyContent: 'PropertyContent',
      builtIn: 'BuiltIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      deviceFormId: 'string',
      deviceFormName: 'string',
      propertyName: 'string',
      propertyKey: 'string',
      propertyFormat: 'string',
      propertyContent: 'string',
      builtIn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceType extends $tea.Model {
  resourceType?: string;
  resourceTypeName?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceTypeName: 'ResourceTypeName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceTypeName: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectResponseBodySetupProjectPackages extends $tea.Model {
  role?: string;
  deviceNumber?: string;
  vendor?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      deviceNumber: 'DeviceNumber',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      deviceNumber: 'string',
      vendor: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectResponseBodySetupProject extends $tea.Model {
  deliveryTime?: string;
  packages?: GetSetupProjectResponseBodySetupProjectPackages[];
  createTime?: string;
  spaceId?: string;
  spaceName?: string;
  spaceType?: string;
  setupProjectId?: string;
  nodes?: string;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryTime: 'DeliveryTime',
      packages: 'Packages',
      createTime: 'CreateTime',
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
      spaceType: 'SpaceType',
      setupProjectId: 'SetupProjectId',
      nodes: 'Nodes',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTime: 'string',
      packages: { 'type': 'array', 'itemType': GetSetupProjectResponseBodySetupProjectPackages },
      createTime: 'string',
      spaceId: 'string',
      spaceName: 'string',
      spaceType: 'string',
      setupProjectId: 'string',
      nodes: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationVariateResponseBodyConfigurationVariate extends $tea.Model {
  createTime?: string;
  configurationVariateId?: string;
  variateName?: string;
  updateTime?: string;
  comment?: string;
  formatFunction?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      configurationVariateId: 'ConfigurationVariateId',
      variateName: 'VariateName',
      updateTime: 'UpdateTime',
      comment: 'Comment',
      formatFunction: 'FormatFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      configurationVariateId: 'string',
      variateName: 'string',
      updateTime: 'string',
      comment: 'string',
      formatFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedLinesResponseBodyDedicatedLines extends $tea.Model {
  dedicatedLineId?: string;
  isp?: string;
  bandwidth?: number;
  dedicatedLineIp?: string;
  dedicatedLineGateway?: string;
  dedicatedLineRole?: string;
  deviceId?: string;
  devicePort?: string;
  deviceName?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineId: 'DedicatedLineId',
      isp: 'Isp',
      bandwidth: 'Bandwidth',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineRole: 'DedicatedLineRole',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      deviceName: 'DeviceName',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineId: 'string',
      isp: 'string',
      bandwidth: 'number',
      dedicatedLineIp: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineRole: 'string',
      deviceId: 'string',
      devicePort: 'string',
      deviceName: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeTaskResponseBodyInspectionTask extends $tea.Model {
  taskStatus?: string;
  inspectionResult?: string;
  errorCode?: string;
  inspectionMessage?: string;
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      inspectionResult: 'InspectionResult',
      errorCode: 'ErrorCode',
      inspectionMessage: 'InspectionMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'string',
      inspectionResult: 'string',
      errorCode: 'string',
      inspectionMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTypesResponseBodyScheduleType extends $tea.Model {
  status?: string;
  relatedWorker?: string[];
  createTime?: string;
  scheduleTypeId?: string;
  updateTime?: string;
  scheduleType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      relatedWorker: 'RelatedWorker',
      createTime: 'CreateTime',
      scheduleTypeId: 'ScheduleTypeId',
      updateTime: 'UpdateTime',
      scheduleType: 'ScheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      relatedWorker: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      scheduleTypeId: 'string',
      updateTime: 'string',
      scheduleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleWorkerResponseBodyScheduleWorker extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  scheduleWorkerId?: string;
  workerId?: string;
  workerName?: string;
  workerContact?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      scheduleWorkerId: 'ScheduleWorkerId',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
      workerContact: 'WorkerContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      scheduleWorkerId: 'string',
      workerId: 'string',
      workerName: 'string',
      workerContact: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelSortResponseBodySpaceModel extends $tea.Model {
  levelName?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      levelName: 'LevelName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelName: 'string',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceFormResponseBodyDeviceFormAttributeList extends $tea.Model {
  attributeKey?: string;
  attributeName?: string;
  attributeRequirement?: boolean;
  attributeUniqueness?: boolean;
  attributeFormat?: string;
  attributeType?: string;
  attributeReference?: string;
  attributeTableDisplay?: boolean;
  attributePlaceholder?: string;
  attributeQuery?: boolean;
  attributeFuzzyQuery?: boolean;
  attributeBuiltIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      attributeName: 'AttributeName',
      attributeRequirement: 'AttributeRequirement',
      attributeUniqueness: 'AttributeUniqueness',
      attributeFormat: 'AttributeFormat',
      attributeType: 'AttributeType',
      attributeReference: 'AttributeReference',
      attributeTableDisplay: 'AttributeTableDisplay',
      attributePlaceholder: 'AttributePlaceholder',
      attributeQuery: 'AttributeQuery',
      attributeFuzzyQuery: 'AttributeFuzzyQuery',
      attributeBuiltIn: 'AttributeBuiltIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      attributeName: 'string',
      attributeRequirement: 'boolean',
      attributeUniqueness: 'boolean',
      attributeFormat: 'string',
      attributeType: 'string',
      attributeReference: 'string',
      attributeTableDisplay: 'boolean',
      attributePlaceholder: 'string',
      attributeQuery: 'boolean',
      attributeFuzzyQuery: 'boolean',
      attributeBuiltIn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceFormResponseBodyDeviceForm extends $tea.Model {
  configCompare?: boolean;
  attributeList?: GetDeviceFormResponseBodyDeviceFormAttributeList[];
  deviceFormId?: string;
  deviceFormName?: string;
  formBuiltIn?: boolean;
  accountConfig?: boolean;
  detailDisplay?: boolean;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      configCompare: 'ConfigCompare',
      attributeList: 'AttributeList',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      formBuiltIn: 'FormBuiltIn',
      accountConfig: 'AccountConfig',
      detailDisplay: 'DetailDisplay',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCompare: 'boolean',
      attributeList: { 'type': 'array', 'itemType': GetDeviceFormResponseBodyDeviceFormAttributeList },
      deviceFormId: 'string',
      deviceFormName: 'string',
      formBuiltIn: 'boolean',
      accountConfig: 'boolean',
      detailDisplay: 'boolean',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsVersionResponseBodyOsVersion extends $tea.Model {
  downloadPath?: string;
  static names(): { [key: string]: string } {
    return {
      downloadPath: 'DownloadPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduleDutyRequestTypeWorkerList extends $tea.Model {
  scheduleTypeId?: string;
  scheduleWorkerName?: string[];
  static names(): { [key: string]: string } {
    return {
      scheduleTypeId: 'ScheduleTypeId',
      scheduleWorkerName: 'ScheduleWorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTypeId: 'string',
      scheduleWorkerName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpRecordRequestDeviceZoneLayer extends $tea.Model {
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

export class CreateIpRecordRequestDevice extends $tea.Model {
  deviceName?: string;
  port?: string;
  remoteDeviceName?: string;
  remotePort?: string;
  deviceMac?: string;
  zoneLayer?: CreateIpRecordRequestDeviceZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      port: 'Port',
      remoteDeviceName: 'RemoteDeviceName',
      remotePort: 'RemotePort',
      deviceMac: 'DeviceMac',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      port: 'string',
      remoteDeviceName: 'string',
      remotePort: 'string',
      deviceMac: 'string',
      zoneLayer: { 'type': 'array', 'itemType': CreateIpRecordRequestDeviceZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  instanceSpec?: string;
  instanceOpenDate?: string;
  instanceEndDate?: string;
  instanceDeviceMaxCount?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      instanceOpenDate: 'InstanceOpenDate',
      instanceEndDate: 'InstanceEndDate',
      instanceDeviceMaxCount: 'InstanceDeviceMaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      instanceOpenDate: 'string',
      instanceEndDate: 'string',
      instanceDeviceMaxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZoneTypesResponseBodyZoneTypeZoneTypeLayer extends $tea.Model {
  name?: string;
  mask?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      mask: 'Mask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      mask: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZoneTypesResponseBodyZoneType extends $tea.Model {
  name?: string;
  zoneTypeName?: string;
  zoneTypeLayer?: ListZoneTypesResponseBodyZoneTypeZoneTypeLayer[];
  createTime?: string;
  zoneTypeId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      zoneTypeName: 'ZoneTypeName',
      zoneTypeLayer: 'ZoneTypeLayer',
      createTime: 'CreateTime',
      zoneTypeId: 'ZoneTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      zoneTypeName: 'string',
      zoneTypeLayer: { 'type': 'array', 'itemType': ListZoneTypesResponseBodyZoneTypeZoneTypeLayer },
      createTime: 'string',
      zoneTypeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceRequestResourceInformation extends $tea.Model {
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

export class GetScheduleDutyResponseBodyScheduleDuty extends $tea.Model {
  workType?: string;
  createTime?: string;
  updateTime?: string;
  workDate?: string;
  workerId?: string;
  scheduleDutyId?: string;
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      workType: 'WorkType',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      workDate: 'WorkDate',
      workerId: 'WorkerId',
      scheduleDutyId: 'ScheduleDutyId',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workType: 'string',
      createTime: 'string',
      updateTime: 'string',
      workDate: 'string',
      workerId: 'string',
      scheduleDutyId: 'string',
      workerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationVariateResponseBodyConfigurationVariate extends $tea.Model {
  variateName?: string;
  comment?: string;
  formatFunction?: string;
  static names(): { [key: string]: string } {
    return {
      variateName: 'VariateName',
      comment: 'Comment',
      formatFunction: 'FormatFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variateName: 'string',
      comment: 'string',
      formatFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusResourceDevice extends $tea.Model {
  hostName?: string;
  ip?: string;
  vendor?: string;
  model?: string;
  status?: string;
  sn?: string;
  space?: string;
  deviceId?: string;
  securityDomain?: string;
  deviceForm?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      ip: 'Ip',
      vendor: 'Vendor',
      model: 'Model',
      status: 'Status',
      sn: 'Sn',
      space: 'Space',
      deviceId: 'DeviceId',
      securityDomain: 'SecurityDomain',
      deviceForm: 'DeviceForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      ip: 'string',
      vendor: 'string',
      model: 'string',
      status: 'string',
      sn: 'string',
      space: 'string',
      deviceId: 'string',
      securityDomain: 'string',
      deviceForm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusMonitorItem extends $tea.Model {
  monitorItemName?: string;
  monitorItemDescription?: string;
  securityDomain?: string;
  collectionType?: string;
  execInterval?: string;
  monitorItemId?: string;
  deviceForm?: string;
  effective?: number;
  static names(): { [key: string]: string } {
    return {
      monitorItemName: 'MonitorItemName',
      monitorItemDescription: 'MonitorItemDescription',
      securityDomain: 'SecurityDomain',
      collectionType: 'CollectionType',
      execInterval: 'ExecInterval',
      monitorItemId: 'MonitorItemId',
      deviceForm: 'DeviceForm',
      effective: 'Effective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItemName: 'string',
      monitorItemDescription: 'string',
      securityDomain: 'string',
      collectionType: 'string',
      execInterval: 'string',
      monitorItemId: 'string',
      deviceForm: 'string',
      effective: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusNotificationSwitch extends $tea.Model {
  reason?: string;
  expiryTime?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      expiryTime: 'ExpiryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      expiryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusAggregateData extends $tea.Model {
  aggregateMode?: string;
  aggregateDataDescription?: string;
  dataItem?: string;
  aggregateDataName?: string;
  deviceId?: string;
  isAllDevice?: number;
  aggregateDataId?: string;
  monitorItemId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateMode: 'AggregateMode',
      aggregateDataDescription: 'AggregateDataDescription',
      dataItem: 'DataItem',
      aggregateDataName: 'AggregateDataName',
      deviceId: 'DeviceId',
      isAllDevice: 'IsAllDevice',
      aggregateDataId: 'AggregateDataId',
      monitorItemId: 'MonitorItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateMode: 'string',
      aggregateDataDescription: 'string',
      dataItem: 'string',
      aggregateDataName: 'string',
      deviceId: 'string',
      isAllDevice: 'number',
      aggregateDataId: 'string',
      monitorItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusDedicatedLine extends $tea.Model {
  dedicatedLineName?: string;
  space?: string;
  portName?: string;
  deviceId?: string;
  bandwidth?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineName: 'DedicatedLineName',
      space: 'Space',
      portName: 'PortName',
      deviceId: 'DeviceId',
      bandwidth: 'Bandwidth',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineName: 'string',
      space: 'string',
      portName: 'string',
      deviceId: 'string',
      bandwidth: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortListResourceDevice extends $tea.Model {
  hostName?: string;
  ip?: string;
  securityDomain?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      ip: 'Ip',
      securityDomain: 'SecurityDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      ip: 'string',
      securityDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortList extends $tea.Model {
  portName?: string;
  deviceId?: string;
  resourceDevice?: GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortListResourceDevice;
  static names(): { [key: string]: string } {
    return {
      portName: 'PortName',
      deviceId: 'DeviceId',
      resourceDevice: 'ResourceDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portName: 'string',
      deviceId: 'string',
      resourceDevice: GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortListResourceDevice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusPortCollection extends $tea.Model {
  portCollectionName?: string;
  portCollectionId?: string;
  portCollectionDescription?: string;
  portList?: GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortList[];
  static names(): { [key: string]: string } {
    return {
      portCollectionName: 'PortCollectionName',
      portCollectionId: 'PortCollectionId',
      portCollectionDescription: 'PortCollectionDescription',
      portList: 'PortList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portCollectionName: 'string',
      portCollectionId: 'string',
      portCollectionDescription: 'string',
      portList: { 'type': 'array', 'itemType': GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatus extends $tea.Model {
  deviceId?: string;
  monitorItemId?: string;
  collectionTime?: string;
  receiveTime?: string;
  alarmRule?: string;
  alarmStatus?: string;
  result?: string;
  abnormalDataItem?: string;
  uniqueKey?: string;
  responseCode?: string;
  resourceDevice?: GetAlarmStatusResponseBodyAlarmStatusResourceDevice;
  monitorItem?: GetAlarmStatusResponseBodyAlarmStatusMonitorItem;
  firstAbnormalTime?: string;
  notificationSwitch?: GetAlarmStatusResponseBodyAlarmStatusNotificationSwitch;
  aggregateDataId?: string;
  dedicatedLineId?: string;
  aggregateData?: GetAlarmStatusResponseBodyAlarmStatusAggregateData;
  dedicatedLine?: GetAlarmStatusResponseBodyAlarmStatusDedicatedLine;
  portCollectionId?: string;
  portCollection?: GetAlarmStatusResponseBodyAlarmStatusPortCollection;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      collectionTime: 'CollectionTime',
      receiveTime: 'ReceiveTime',
      alarmRule: 'AlarmRule',
      alarmStatus: 'AlarmStatus',
      result: 'Result',
      abnormalDataItem: 'AbnormalDataItem',
      uniqueKey: 'UniqueKey',
      responseCode: 'ResponseCode',
      resourceDevice: 'ResourceDevice',
      monitorItem: 'MonitorItem',
      firstAbnormalTime: 'FirstAbnormalTime',
      notificationSwitch: 'NotificationSwitch',
      aggregateDataId: 'AggregateDataId',
      dedicatedLineId: 'DedicatedLineId',
      aggregateData: 'AggregateData',
      dedicatedLine: 'DedicatedLine',
      portCollectionId: 'PortCollectionId',
      portCollection: 'PortCollection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      monitorItemId: 'string',
      collectionTime: 'string',
      receiveTime: 'string',
      alarmRule: 'string',
      alarmStatus: 'string',
      result: 'string',
      abnormalDataItem: 'string',
      uniqueKey: 'string',
      responseCode: 'string',
      resourceDevice: GetAlarmStatusResponseBodyAlarmStatusResourceDevice,
      monitorItem: GetAlarmStatusResponseBodyAlarmStatusMonitorItem,
      firstAbnormalTime: 'string',
      notificationSwitch: GetAlarmStatusResponseBodyAlarmStatusNotificationSwitch,
      aggregateDataId: 'string',
      dedicatedLineId: 'string',
      aggregateData: GetAlarmStatusResponseBodyAlarmStatusAggregateData,
      dedicatedLine: GetAlarmStatusResponseBodyAlarmStatusDedicatedLine,
      portCollectionId: 'string',
      portCollection: GetAlarmStatusResponseBodyAlarmStatusPortCollection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpRecordResponseBodyIpRecordDetailZoneLayer extends $tea.Model {
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

export class GetIpRecordResponseBodyIpRecordDetail extends $tea.Model {
  ip?: string;
  deviceName?: string;
  port?: string;
  remoteIp?: string;
  remoteDeviceName?: string;
  remotePort?: string;
  deviceMac?: string;
  gateway?: string;
  parentIpBlocks?: string[];
  zoneLayer?: GetIpRecordResponseBodyIpRecordDetailZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      deviceName: 'DeviceName',
      port: 'Port',
      remoteIp: 'RemoteIp',
      remoteDeviceName: 'RemoteDeviceName',
      remotePort: 'RemotePort',
      deviceMac: 'DeviceMac',
      gateway: 'Gateway',
      parentIpBlocks: 'ParentIpBlocks',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      deviceName: 'string',
      port: 'string',
      remoteIp: 'string',
      remoteDeviceName: 'string',
      remotePort: 'string',
      deviceMac: 'string',
      gateway: 'string',
      parentIpBlocks: { 'type': 'array', 'itemType': 'string' },
      zoneLayer: { 'type': 'array', 'itemType': GetIpRecordResponseBodyIpRecordDetailZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpRecordResponseBodyIpRecord extends $tea.Model {
  status?: string;
  description?: string;
  ipCode?: string[];
  createTime?: string;
  updateTime?: string;
  creator?: string;
  ipRecordId?: string;
  ipRecordName?: string;
  zoneName?: string;
  businessTypeName?: string;
  recodeType?: string;
  ipBlock?: string;
  detail?: GetIpRecordResponseBodyIpRecordDetail[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      ipCode: 'IpCode',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      creator: 'Creator',
      ipRecordId: 'IpRecordId',
      ipRecordName: 'IpRecordName',
      zoneName: 'ZoneName',
      businessTypeName: 'BusinessTypeName',
      recodeType: 'RecodeType',
      ipBlock: 'IpBlock',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      ipCode: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      updateTime: 'string',
      creator: 'string',
      ipRecordId: 'string',
      ipRecordName: 'string',
      zoneName: 'string',
      businessTypeName: 'string',
      recodeType: 'string',
      ipBlock: 'string',
      detail: { 'type': 'array', 'itemType': GetIpRecordResponseBodyIpRecordDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleDutiesResponseBodyScheduleDutiesTypeWorkerList extends $tea.Model {
  scheduleDutyId?: string;
  scheduleTypeId?: string;
  scheduleTypeName?: string;
  scheduleWorkerName?: string[];
  static names(): { [key: string]: string } {
    return {
      scheduleDutyId: 'ScheduleDutyId',
      scheduleTypeId: 'ScheduleTypeId',
      scheduleTypeName: 'ScheduleTypeName',
      scheduleWorkerName: 'ScheduleWorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleDutyId: 'string',
      scheduleTypeId: 'string',
      scheduleTypeName: 'string',
      scheduleWorkerName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleDutiesResponseBodyScheduleDuties extends $tea.Model {
  scheduleDutyDate?: string;
  scheduleDutyId?: string;
  createTime?: string;
  updateTime?: string;
  holiday?: boolean;
  typeWorkerList?: ListScheduleDutiesResponseBodyScheduleDutiesTypeWorkerList[];
  static names(): { [key: string]: string } {
    return {
      scheduleDutyDate: 'ScheduleDutyDate',
      scheduleDutyId: 'ScheduleDutyId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      holiday: 'Holiday',
      typeWorkerList: 'TypeWorkerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleDutyDate: 'string',
      scheduleDutyId: 'string',
      createTime: 'string',
      updateTime: 'string',
      holiday: 'boolean',
      typeWorkerList: { 'type': 'array', 'itemType': ListScheduleDutiesResponseBodyScheduleDutiesTypeWorkerList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInformationRequestInformation extends $tea.Model {
  key?: string;
  keyAttribute?: string;
  keyAction?: string;
  keyDescription?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAttribute: 'KeyAttribute',
      keyAction: 'KeyAction',
      keyDescription: 'KeyDescription',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAttribute: 'string',
      keyAction: 'string',
      keyDescription: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDevices extends $tea.Model {
  deviceId?: string;
  deviceFormName?: string;
  deviceFormId?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  hostName?: string;
  ip?: string;
  sn?: string;
  mac?: string;
  vendor?: string;
  model?: string;
  securityDomain?: string;
  serviceStatus?: string;
  loginType?: string;
  loginUsername?: string;
  loginPassword?: string;
  snmpAccountVersion?: string;
  snmpCommunity?: string;
  snmpAccountType?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  snmpAuthPassPhrase?: string;
  snmpAuthProtocol?: string;
  snmpPrivacyPassphase?: string;
  snmpPrivacyProtocol?: string;
  extAttributes?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceFormName: 'DeviceFormName',
      deviceFormId: 'DeviceFormId',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      hostName: 'HostName',
      ip: 'Ip',
      sn: 'Sn',
      mac: 'Mac',
      vendor: 'Vendor',
      model: 'Model',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      loginPassword: 'LoginPassword',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpCommunity: 'SnmpCommunity',
      snmpAccountType: 'SnmpAccountType',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      snmpAuthPassPhrase: 'SnmpAuthPassPhrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpPrivacyPassphase: 'SnmpPrivacyPassphase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      extAttributes: 'ExtAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceFormName: 'string',
      deviceFormId: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      hostName: 'string',
      ip: 'string',
      sn: 'string',
      mac: 'string',
      vendor: 'string',
      model: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      loginType: 'string',
      loginUsername: 'string',
      loginPassword: 'string',
      snmpAccountVersion: 'string',
      snmpCommunity: 'string',
      snmpAccountType: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      snmpAuthPassPhrase: 'string',
      snmpAuthProtocol: 'string',
      snmpPrivacyPassphase: 'string',
      snmpPrivacyProtocol: 'string',
      extAttributes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponseBodyInspectionTaskAlarmStatistic extends $tea.Model {
  inspectionItem?: string;
  vendor?: string;
  model?: string;
  criticalNumber?: number;
  warningNumber?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionItem: 'InspectionItem',
      vendor: 'Vendor',
      model: 'Model',
      criticalNumber: 'CriticalNumber',
      warningNumber: 'WarningNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionItem: 'string',
      vendor: 'string',
      model: 'string',
      criticalNumber: 'number',
      warningNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponseBodyInspectionTask extends $tea.Model {
  totalDeviceNumber?: number;
  actualDeviceNumber?: number;
  deviceRate?: string;
  taskNumber?: number;
  runningTaskNumber?: number;
  runningTaskRate?: string;
  successTaskNumber?: number;
  successTaskRate?: string;
  failureTaskNumber?: number;
  failureTaskRate?: string;
  failureStatistic?: string;
  alarmNumber?: number;
  criticalNumber?: number;
  criticalRate?: string;
  warningNumber?: number;
  warningRate?: string;
  normalNumber?: number;
  normalRate?: string;
  alarmStatistic?: ListInspectionTaskReportsResponseBodyInspectionTaskAlarmStatistic[];
  static names(): { [key: string]: string } {
    return {
      totalDeviceNumber: 'TotalDeviceNumber',
      actualDeviceNumber: 'ActualDeviceNumber',
      deviceRate: 'DeviceRate',
      taskNumber: 'TaskNumber',
      runningTaskNumber: 'RunningTaskNumber',
      runningTaskRate: 'RunningTaskRate',
      successTaskNumber: 'SuccessTaskNumber',
      successTaskRate: 'SuccessTaskRate',
      failureTaskNumber: 'FailureTaskNumber',
      failureTaskRate: 'FailureTaskRate',
      failureStatistic: 'FailureStatistic',
      alarmNumber: 'AlarmNumber',
      criticalNumber: 'CriticalNumber',
      criticalRate: 'CriticalRate',
      warningNumber: 'WarningNumber',
      warningRate: 'WarningRate',
      normalNumber: 'NormalNumber',
      normalRate: 'NormalRate',
      alarmStatistic: 'AlarmStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDeviceNumber: 'number',
      actualDeviceNumber: 'number',
      deviceRate: 'string',
      taskNumber: 'number',
      runningTaskNumber: 'number',
      runningTaskRate: 'string',
      successTaskNumber: 'number',
      successTaskRate: 'string',
      failureTaskNumber: 'number',
      failureTaskRate: 'string',
      failureStatistic: 'string',
      alarmNumber: 'number',
      criticalNumber: 'number',
      criticalRate: 'string',
      warningNumber: 'number',
      warningRate: 'string',
      normalNumber: 'number',
      normalRate: 'string',
      alarmStatistic: { 'type': 'array', 'itemType': ListInspectionTaskReportsResponseBodyInspectionTaskAlarmStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorItemRequestAlarmRuleList extends $tea.Model {
  alarmStatus?: string;
  variable?: string;
  expression?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      variable: 'Variable',
      expression: 'Expression',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      variable: 'string',
      expression: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOsDownloadPathResponseBodyOsVersion extends $tea.Model {
  downloadPath?: string;
  static names(): { [key: string]: string } {
    return {
      downloadPath: 'DownloadPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoliciesResponseBodyConnectionPolicy extends $tea.Model {
  id?: string;
  architectureIterationId?: string;
  name?: string;
  linkCount?: number;
  algorithm?: string;
  createTime?: string;
  updateTime?: string;
  uplinkArchitectureModuleId?: string;
  downlinkArchitectureModuleId?: string;
  uplinkArchitectureDeviceId?: string;
  downlinkArchitectureDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      architectureIterationId: 'ArchitectureIterationId',
      name: 'Name',
      linkCount: 'LinkCount',
      algorithm: 'Algorithm',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      uplinkArchitectureModuleId: 'UplinkArchitectureModuleId',
      downlinkArchitectureModuleId: 'DownlinkArchitectureModuleId',
      uplinkArchitectureDeviceId: 'UplinkArchitectureDeviceId',
      downlinkArchitectureDeviceId: 'DownlinkArchitectureDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      architectureIterationId: 'string',
      name: 'string',
      linkCount: 'number',
      algorithm: 'string',
      createTime: 'string',
      updateTime: 'string',
      uplinkArchitectureModuleId: 'string',
      downlinkArchitectureModuleId: 'string',
      uplinkArchitectureDeviceId: 'string',
      downlinkArchitectureDeviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceResponseBodyPhysicalSpace extends $tea.Model {
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  country?: string;
  province?: string;
  city?: string;
  address?: string;
  spaceType?: string;
  spaceAbbreviation?: string;
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
      spaceType: 'SpaceType',
      spaceAbbreviation: 'SpaceAbbreviation',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      address: 'string',
      spaceType: 'string',
      spaceAbbreviation: 'string',
      owner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelInstanceResponseBodySpaceModel extends $tea.Model {
  instance?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOsVersionsResponseBodyOsVersion extends $tea.Model {
  osVersion?: string;
  fileName?: string;
  status?: string;
  filePath?: string;
  createTime?: string;
  vendor?: string;
  model?: string;
  osVersionId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      osVersion: 'OsVersion',
      fileName: 'FileName',
      status: 'Status',
      filePath: 'FilePath',
      createTime: 'CreateTime',
      vendor: 'Vendor',
      model: 'Model',
      osVersionId: 'OsVersionId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osVersion: 'string',
      fileName: 'string',
      status: 'string',
      filePath: 'string',
      createTime: 'string',
      vendor: 'string',
      model: 'string',
      osVersionId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedLineResponseBodyDedicatedLine extends $tea.Model {
  dedicatedLineId?: string;
  isp?: string;
  bandwidth?: number;
  dedicatedLineIp?: string;
  dedicatedLineGateway?: string;
  dedicatedLineRole?: string;
  deviceId?: string;
  devicePort?: string;
  deviceName?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineId: 'DedicatedLineId',
      isp: 'Isp',
      bandwidth: 'Bandwidth',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineRole: 'DedicatedLineRole',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      deviceName: 'DeviceName',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineId: 'string',
      isp: 'string',
      bandwidth: 'number',
      dedicatedLineIp: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineRole: 'string',
      deviceId: 'string',
      devicePort: 'string',
      deviceName: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResourceResponseBodyDeviceResource extends $tea.Model {
  deviceResourceId?: string;
  setupProjectId?: string;
  role?: string;
  blockNumber?: string;
  deviceNum?: string;
  vendor?: string;
  model?: string;
  hostName?: string;
  sn?: string;
  location?: string;
  managerIp?: string;
  deliveryIp?: string;
  generateConfig?: string;
  configTaskStatus?: string;
  config?: string;
  loopback?: string;
  interConnection?: string;
  business?: string;
  stack?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      setupProjectId: 'SetupProjectId',
      role: 'Role',
      blockNumber: 'BlockNumber',
      deviceNum: 'DeviceNum',
      vendor: 'Vendor',
      model: 'Model',
      hostName: 'HostName',
      sn: 'Sn',
      location: 'Location',
      managerIp: 'ManagerIp',
      deliveryIp: 'DeliveryIp',
      generateConfig: 'GenerateConfig',
      configTaskStatus: 'ConfigTaskStatus',
      config: 'Config',
      loopback: 'Loopback',
      interConnection: 'InterConnection',
      business: 'Business',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      setupProjectId: 'string',
      role: 'string',
      blockNumber: 'string',
      deviceNum: 'string',
      vendor: 'string',
      model: 'string',
      hostName: 'string',
      sn: 'string',
      location: 'string',
      managerIp: 'string',
      deliveryIp: 'string',
      generateConfig: 'string',
      configTaskStatus: 'string',
      config: 'string',
      loopback: 'string',
      interConnection: 'string',
      business: 'string',
      stack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpResponseBodyIpZoneLayer extends $tea.Model {
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

export class ListIpResponseBodyIp extends $tea.Model {
  port?: string;
  deviceMac?: string;
  ipAddress?: string;
  ipId?: string;
  status?: string;
  parentIpBlock?: string;
  createTime?: string;
  zoneLayer?: ListIpResponseBodyIpZoneLayer[];
  businessTypeName?: string;
  businessTypeId?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      deviceMac: 'DeviceMac',
      ipAddress: 'IpAddress',
      ipId: 'IpId',
      status: 'Status',
      parentIpBlock: 'ParentIpBlock',
      createTime: 'CreateTime',
      zoneLayer: 'ZoneLayer',
      businessTypeName: 'BusinessTypeName',
      businessTypeId: 'BusinessTypeId',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      deviceMac: 'string',
      ipAddress: 'string',
      ipId: 'string',
      status: 'string',
      parentIpBlock: 'string',
      createTime: 'string',
      zoneLayer: { 'type': 'array', 'itemType': ListIpResponseBodyIpZoneLayer },
      businessTypeName: 'string',
      businessTypeId: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationSpecificationsResponseBodyConfigurationSpecification extends $tea.Model {
  createTime?: string;
  updateTime?: string;
  specificationName?: string;
  architecture?: string;
  role?: string;
  model?: string;
  vendor?: string;
  specificationContent?: string;
  relatedVariate?: string[];
  configurationSpecificationId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      specificationName: 'SpecificationName',
      architecture: 'Architecture',
      role: 'Role',
      model: 'Model',
      vendor: 'Vendor',
      specificationContent: 'SpecificationContent',
      relatedVariate: 'RelatedVariate',
      configurationSpecificationId: 'ConfigurationSpecificationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      specificationName: 'string',
      architecture: 'string',
      role: 'string',
      model: 'string',
      vendor: 'string',
      specificationContent: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'string' },
      configurationSpecificationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNotificationRequestList extends $tea.Model {
  type?: string;
  monitorItemId?: string;
  deviceId?: string;
  aggregateDataId?: string;
  dedicatedLineId?: string;
  portCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      monitorItemId: 'MonitorItemId',
      deviceId: 'DeviceId',
      aggregateDataId: 'AggregateDataId',
      dedicatedLineId: 'DedicatedLineId',
      portCollectionId: 'PortCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      monitorItemId: 'string',
      deviceId: 'string',
      aggregateDataId: 'string',
      dedicatedLineId: 'string',
      portCollectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationHistoriesResponseBodyNotificationHistories extends $tea.Model {
  time?: string;
  notificationMode?: string;
  status?: string;
  output?: string;
  message?: string;
  deviceId?: string;
  monitorItemId?: string;
  notificationGroupId?: string;
  notificationGroupName?: string;
  dedicatedLineId?: string;
  aggregateDataId?: string;
  portCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      notificationMode: 'NotificationMode',
      status: 'Status',
      output: 'Output',
      message: 'Message',
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      notificationGroupId: 'NotificationGroupId',
      notificationGroupName: 'NotificationGroupName',
      dedicatedLineId: 'DedicatedLineId',
      aggregateDataId: 'AggregateDataId',
      portCollectionId: 'PortCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      notificationMode: 'string',
      status: 'string',
      output: 'string',
      message: 'string',
      deviceId: 'string',
      monitorItemId: 'string',
      notificationGroupId: 'string',
      notificationGroupName: 'string',
      dedicatedLineId: 'string',
      aggregateDataId: 'string',
      portCollectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBodyLogicResourceKeyList extends $tea.Model {
  key?: string;
  value?: string;
  keyAttribute?: string;
  keyAction?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      keyAttribute: 'KeyAttribute',
      keyAction: 'KeyAction',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      keyAttribute: 'string',
      keyAction: 'string',
      keyDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBodyLogicResource extends $tea.Model {
  resourceType?: string;
  resourceAttribute?: string;
  keyList?: ListResourceInstancesResponseBodyLogicResourceKeyList[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceAttribute: 'ResourceAttribute',
      keyList: 'KeyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceAttribute: 'string',
      keyList: { 'type': 'array', 'itemType': ListResourceInstancesResponseBodyLogicResourceKeyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksResponseBodyIpBlockZoneLayer extends $tea.Model {
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

export class ListIpBlocksResponseBodyIpBlock extends $tea.Model {
  ipBlockId?: string;
  ipBlockCode?: string;
  parentId?: string;
  netType?: string;
  status?: string;
  ownership?: string;
  category?: string;
  description?: string;
  backupDeviceName?: string;
  zoneLayer?: ListIpBlocksResponseBodyIpBlockZoneLayer[];
  businessTypeId?: string;
  businessTypeName?: string;
  netBusiness?: string;
  application?: string;
  deviceName?: string;
  zoneName?: string;
  ipBlocks?: string[];
  static names(): { [key: string]: string } {
    return {
      ipBlockId: 'IpBlockId',
      ipBlockCode: 'IpBlockCode',
      parentId: 'ParentId',
      netType: 'NetType',
      status: 'Status',
      ownership: 'Ownership',
      category: 'Category',
      description: 'Description',
      backupDeviceName: 'BackupDeviceName',
      zoneLayer: 'ZoneLayer',
      businessTypeId: 'BusinessTypeId',
      businessTypeName: 'BusinessTypeName',
      netBusiness: 'NetBusiness',
      application: 'Application',
      deviceName: 'DeviceName',
      zoneName: 'ZoneName',
      ipBlocks: 'IpBlocks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockId: 'string',
      ipBlockCode: 'string',
      parentId: 'string',
      netType: 'string',
      status: 'string',
      ownership: 'string',
      category: 'string',
      description: 'string',
      backupDeviceName: 'string',
      zoneLayer: { 'type': 'array', 'itemType': ListIpBlocksResponseBodyIpBlockZoneLayer },
      businessTypeId: 'string',
      businessTypeName: 'string',
      netBusiness: 'string',
      application: 'string',
      deviceName: 'string',
      zoneName: 'string',
      ipBlocks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResourcesResponseBodyDeviceResource extends $tea.Model {
  setupProjectId?: string;
  deviceResourceId?: string;
  role?: string;
  blockNumber?: string;
  deviceNumber?: string;
  vendor?: string;
  model?: string;
  hostName?: string;
  sn?: string;
  configTaskId?: string;
  location?: string;
  managerIp?: string;
  deliveryIp?: string;
  generateConfig?: string;
  configTaskStatus?: string;
  config?: string;
  specification?: string;
  params?: string;
  loopback?: string;
  interConnection?: string;
  business?: string;
  stack?: boolean;
  static names(): { [key: string]: string } {
    return {
      setupProjectId: 'SetupProjectId',
      deviceResourceId: 'DeviceResourceId',
      role: 'Role',
      blockNumber: 'BlockNumber',
      deviceNumber: 'DeviceNumber',
      vendor: 'Vendor',
      model: 'Model',
      hostName: 'HostName',
      sn: 'Sn',
      configTaskId: 'ConfigTaskId',
      location: 'Location',
      managerIp: 'ManagerIp',
      deliveryIp: 'DeliveryIp',
      generateConfig: 'GenerateConfig',
      configTaskStatus: 'ConfigTaskStatus',
      config: 'Config',
      specification: 'Specification',
      params: 'Params',
      loopback: 'Loopback',
      interConnection: 'InterConnection',
      business: 'Business',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setupProjectId: 'string',
      deviceResourceId: 'string',
      role: 'string',
      blockNumber: 'string',
      deviceNumber: 'string',
      vendor: 'string',
      model: 'string',
      hostName: 'string',
      sn: 'string',
      configTaskId: 'string',
      location: 'string',
      managerIp: 'string',
      deliveryIp: 'string',
      generateConfig: 'string',
      configTaskStatus: 'string',
      config: 'string',
      specification: 'string',
      params: 'string',
      loopback: 'string',
      interConnection: 'string',
      business: 'string',
      stack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponseBodyResourceInformationInformation extends $tea.Model {
  key?: string;
  keyAttribute?: string;
  keyAction?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAttribute: 'KeyAttribute',
      keyAction: 'KeyAction',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAttribute: 'string',
      keyAction: 'string',
      keyDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponseBodyResourceInformation extends $tea.Model {
  information?: ListResourceInformationsResponseBodyResourceInformationInformation[];
  resourceInformationId?: string;
  resourceAttribute?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      information: 'Information',
      resourceInformationId: 'ResourceInformationId',
      resourceAttribute: 'ResourceAttribute',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      information: { 'type': 'array', 'itemType': ListResourceInformationsResponseBodyResourceInformationInformation },
      resourceInformationId: 'string',
      resourceAttribute: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsResponseBodyDeviceFormsAttributeList extends $tea.Model {
  attributeKey?: string;
  attributeName?: string;
  attributeRequirement?: boolean;
  attributeUniqueness?: boolean;
  attributeFormat?: string;
  attributeType?: string;
  attributeReference?: string;
  attributeTableDisplay?: boolean;
  attributePlaceholder?: string;
  attributeQuery?: boolean;
  attributeFuzzyQuery?: boolean;
  attributeBuiltIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      attributeName: 'AttributeName',
      attributeRequirement: 'AttributeRequirement',
      attributeUniqueness: 'AttributeUniqueness',
      attributeFormat: 'AttributeFormat',
      attributeType: 'AttributeType',
      attributeReference: 'AttributeReference',
      attributeTableDisplay: 'AttributeTableDisplay',
      attributePlaceholder: 'AttributePlaceholder',
      attributeQuery: 'AttributeQuery',
      attributeFuzzyQuery: 'AttributeFuzzyQuery',
      attributeBuiltIn: 'AttributeBuiltIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      attributeName: 'string',
      attributeRequirement: 'boolean',
      attributeUniqueness: 'boolean',
      attributeFormat: 'string',
      attributeType: 'string',
      attributeReference: 'string',
      attributeTableDisplay: 'boolean',
      attributePlaceholder: 'string',
      attributeQuery: 'boolean',
      attributeFuzzyQuery: 'boolean',
      attributeBuiltIn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsResponseBodyDeviceForms extends $tea.Model {
  configCompare?: boolean;
  attributeList?: ListDeviceFormsResponseBodyDeviceFormsAttributeList[];
  accountConfig?: boolean;
  detailDisplay?: boolean;
  formBuiltIn?: boolean;
  uniqueKey?: string;
  deviceFormId?: string;
  deviceFormName?: string;
  static names(): { [key: string]: string } {
    return {
      configCompare: 'ConfigCompare',
      attributeList: 'AttributeList',
      accountConfig: 'AccountConfig',
      detailDisplay: 'DetailDisplay',
      formBuiltIn: 'FormBuiltIn',
      uniqueKey: 'UniqueKey',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCompare: 'boolean',
      attributeList: { 'type': 'array', 'itemType': ListDeviceFormsResponseBodyDeviceFormsAttributeList },
      accountConfig: 'boolean',
      detailDisplay: 'boolean',
      formBuiltIn: 'boolean',
      uniqueKey: 'string',
      deviceFormId: 'string',
      deviceFormName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationSpecificationResponseBodyConfigurationSpecification extends $tea.Model {
  createTime?: string;
  configurationSpecificationId?: string;
  updateTime?: string;
  specificationName?: string;
  architecture?: string;
  role?: string;
  mode?: string;
  vendor?: string;
  specificationContent?: string;
  relatedVariate?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      updateTime: 'UpdateTime',
      specificationName: 'SpecificationName',
      architecture: 'Architecture',
      role: 'Role',
      mode: 'Mode',
      vendor: 'Vendor',
      specificationContent: 'SpecificationContent',
      relatedVariate: 'RelatedVariate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      configurationSpecificationId: 'string',
      updateTime: 'string',
      specificationName: 'string',
      architecture: 'string',
      role: 'string',
      mode: 'string',
      vendor: 'string',
      specificationContent: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleDutyRequestTypeWorkerList extends $tea.Model {
  scheduleTypeId?: string;
  scheduleTypeName?: string;
  scheduleWorkerName?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleTypeId: 'ScheduleTypeId',
      scheduleTypeName: 'ScheduleTypeName',
      scheduleWorkerName: 'ScheduleWorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTypeId: 'string',
      scheduleTypeName: 'string',
      scheduleWorkerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScheduleDutyRequestScheduleDutyWorker extends $tea.Model {
  workType?: string;
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      workType: 'WorkType',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workType: 'string',
      workerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScheduleDutyRequestScheduleDuty extends $tea.Model {
  workDate?: string;
  worker?: UploadScheduleDutyRequestScheduleDutyWorker[];
  static names(): { [key: string]: string } {
    return {
      workDate: 'WorkDate',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workDate: 'string',
      worker: { 'type': 'array', 'itemType': UploadScheduleDutyRequestScheduleDutyWorker },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusHistoriesResponseBodyAlarmStatusHistories extends $tea.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelResponseBodySpaceModelSort extends $tea.Model {
  levelName?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      levelName: 'LevelName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelName: 'string',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelResponseBodySpaceModel extends $tea.Model {
  spaceModelId?: string;
  status?: string;
  spaceType?: string;
  createTime?: string;
  updateTime?: string;
  sort?: GetSpaceModelResponseBodySpaceModelSort[];
  static names(): { [key: string]: string } {
    return {
      spaceModelId: 'SpaceModelId',
      status: 'Status',
      spaceType: 'SpaceType',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceModelId: 'string',
      status: 'string',
      spaceType: 'string',
      createTime: 'string',
      updateTime: 'string',
      sort: { 'type': 'array', 'itemType': GetSpaceModelResponseBodySpaceModelSort },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalSpacesResponseBodyPhysicalSpaces extends $tea.Model {
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  country?: string;
  province?: string;
  city?: string;
  address?: string;
  spaceAbbreviation?: string;
  spaceType?: string;
  owner?: string;
  instance?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
      spaceAbbreviation: 'SpaceAbbreviation',
      spaceType: 'SpaceType',
      owner: 'Owner',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      address: 'string',
      spaceAbbreviation: 'string',
      spaceType: 'string',
      owner: 'string',
      instance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataResponseBodyMonitorData extends $tea.Model {
  timestamp?: number;
  value?: string;
  dataItem?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
      dataItem: 'DataItem',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
      dataItem: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInformationRequestInformation extends $tea.Model {
  key?: string;
  keyAttribute?: string;
  keyAction?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAttribute: 'KeyAttribute',
      keyAction: 'KeyAction',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAttribute: 'string',
      keyAction: 'string',
      keyDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpBlockResponseBodyIpBlockZoneLayer extends $tea.Model {
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

export class GetIpBlockResponseBodyIpBlock extends $tea.Model {
  ipBlockId?: string;
  ipBlockCode?: string;
  parentId?: string;
  netType?: string;
  status?: string;
  ownership?: string;
  category?: string;
  description?: string;
  backupDeviceName?: string;
  zoneLayer?: GetIpBlockResponseBodyIpBlockZoneLayer[];
  businessTypeId?: string;
  businessTypeName?: string;
  netBusiness?: string;
  application?: string;
  deviceName?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      ipBlockId: 'IpBlockId',
      ipBlockCode: 'IpBlockCode',
      parentId: 'ParentId',
      netType: 'NetType',
      status: 'Status',
      ownership: 'Ownership',
      category: 'Category',
      description: 'Description',
      backupDeviceName: 'BackupDeviceName',
      zoneLayer: 'ZoneLayer',
      businessTypeId: 'BusinessTypeId',
      businessTypeName: 'BusinessTypeName',
      netBusiness: 'NetBusiness',
      application: 'Application',
      deviceName: 'DeviceName',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlockId: 'string',
      ipBlockCode: 'string',
      parentId: 'string',
      netType: 'string',
      status: 'string',
      ownership: 'string',
      category: 'string',
      description: 'string',
      backupDeviceName: 'string',
      zoneLayer: { 'type': 'array', 'itemType': GetIpBlockResponseBodyIpBlockZoneLayer },
      businessTypeId: 'string',
      businessTypeName: 'string',
      netBusiness: 'string',
      application: 'string',
      deviceName: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessTypesResponseBodyBusinessType extends $tea.Model {
  updateTime?: string;
  createTime?: string;
  businessTypeId?: string;
  name?: string;
  abbreviation?: string;
  mask?: string;
  gateway?: number;
  sharing?: string;
  direction?: number;
  reserveNumber?: number;
  type?: string;
  zoneType?: string;
  leaseTime?: string;
  vlan?: string;
  actionFlag?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      businessTypeId: 'BusinessTypeId',
      name: 'Name',
      abbreviation: 'Abbreviation',
      mask: 'Mask',
      gateway: 'Gateway',
      sharing: 'Sharing',
      direction: 'Direction',
      reserveNumber: 'ReserveNumber',
      type: 'Type',
      zoneType: 'ZoneType',
      leaseTime: 'LeaseTime',
      vlan: 'Vlan',
      actionFlag: 'ActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      createTime: 'string',
      businessTypeId: 'string',
      name: 'string',
      abbreviation: 'string',
      mask: 'string',
      gateway: 'number',
      sharing: 'string',
      direction: 'number',
      reserveNumber: 'number',
      type: 'string',
      zoneType: 'string',
      leaseTime: 'string',
      vlan: 'string',
      actionFlag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponseBodySetupProjectPackages extends $tea.Model {
  role?: string;
  deviceNumber?: number;
  vendor?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      deviceNumber: 'DeviceNumber',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      deviceNumber: 'number',
      vendor: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponseBodySetupProject extends $tea.Model {
  progress?: string;
  spaceType?: string;
  spaceName?: string;
  archVersion?: string;
  architectureId?: string;
  packages?: ListSetupProjectsResponseBodySetupProjectPackages[];
  deliveryTime?: string;
  createTime?: string;
  spaceId?: string;
  setupProjectId?: string;
  nodes?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      spaceType: 'SpaceType',
      spaceName: 'SpaceName',
      archVersion: 'ArchVersion',
      architectureId: 'ArchitectureId',
      packages: 'Packages',
      deliveryTime: 'DeliveryTime',
      createTime: 'CreateTime',
      spaceId: 'SpaceId',
      setupProjectId: 'SetupProjectId',
      nodes: 'Nodes',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      spaceType: 'string',
      spaceName: 'string',
      archVersion: 'string',
      architectureId: 'string',
      packages: { 'type': 'array', 'itemType': ListSetupProjectsResponseBodySetupProjectPackages },
      deliveryTime: 'string',
      createTime: 'string',
      spaceId: 'string',
      setupProjectId: 'string',
      nodes: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponseBodyInspectionTasksInspectionAlarmRules extends $tea.Model {
  alarmExpression?: string;
  alarmOperator?: string;
  alarmValue?: string;
  actualValue?: string;
  alarmLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alarmExpression: 'AlarmExpression',
      alarmOperator: 'AlarmOperator',
      alarmValue: 'AlarmValue',
      actualValue: 'ActualValue',
      alarmLevel: 'AlarmLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmExpression: 'string',
      alarmOperator: 'string',
      alarmValue: 'string',
      actualValue: 'string',
      alarmLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponseBodyInspectionTasks extends $tea.Model {
  executionEndTime?: string;
  executionBeginTime?: string;
  inspectionResult?: string;
  inspectionAlarmRules?: ListTasksHistoriesResponseBodyInspectionTasksInspectionAlarmRules[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      executionEndTime: 'ExecutionEndTime',
      executionBeginTime: 'ExecutionBeginTime',
      inspectionResult: 'InspectionResult',
      inspectionAlarmRules: 'InspectionAlarmRules',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionEndTime: 'string',
      executionBeginTime: 'string',
      inspectionResult: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': ListTasksHistoriesResponseBodyInspectionTasksInspectionAlarmRules },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpBlockRecordRequestZoneLayer extends $tea.Model {
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

export class CreateIpBlockRecordRequestBusinessType extends $tea.Model {
  name?: string;
  number?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksRequestRetryTasks extends $tea.Model {
  deviceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoResponseBodyTopoDataLinks extends $tea.Model {
  sourceDeviceId?: string;
  sourcePort?: string;
  targetDeviceId?: string;
  targetPort?: string;
  sourceDeviceName?: string;
  targetDeviceName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDeviceId: 'SourceDeviceId',
      sourcePort: 'SourcePort',
      targetDeviceId: 'TargetDeviceId',
      targetPort: 'TargetPort',
      sourceDeviceName: 'SourceDeviceName',
      targetDeviceName: 'TargetDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDeviceId: 'string',
      sourcePort: 'string',
      targetDeviceId: 'string',
      targetPort: 'string',
      sourceDeviceName: 'string',
      targetDeviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoResponseBodyTopoDataDevices extends $tea.Model {
  deviceId?: string;
  deviceRole?: string;
  hostName?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceRole: 'DeviceRole',
      hostName: 'HostName',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceRole: 'string',
      hostName: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoResponseBodyTopoData extends $tea.Model {
  updateTime?: string;
  links?: GetPhysicalSpaceTopoResponseBodyTopoDataLinks[];
  devices?: GetPhysicalSpaceTopoResponseBodyTopoDataDevices[];
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      links: 'Links',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      links: { 'type': 'array', 'itemType': GetPhysicalSpaceTopoResponseBodyTopoDataLinks },
      devices: { 'type': 'array', 'itemType': GetPhysicalSpaceTopoResponseBodyTopoDataDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssPolicyResponseBodyOssPolicy extends $tea.Model {
  accessId?: string;
  policy?: string;
  signature?: string;
  directory?: string;
  host?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      policy: 'Policy',
      signature: 'Signature',
      directory: 'Directory',
      host: 'Host',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      policy: 'string',
      signature: 'string',
      directory: 'string',
      host: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceFormRequestAttributeList extends $tea.Model {
  attributeKey?: string;
  attributeName?: string;
  attributeRequirement?: boolean;
  attributeUniqueness?: boolean;
  attributeFormat?: string;
  attributeType?: string;
  attributeReference?: string;
  attributeTableDisplay?: boolean;
  attributePlaceholder?: string;
  attributeQuery?: boolean;
  attributeFuzzyQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      attributeName: 'AttributeName',
      attributeRequirement: 'AttributeRequirement',
      attributeUniqueness: 'AttributeUniqueness',
      attributeFormat: 'AttributeFormat',
      attributeType: 'AttributeType',
      attributeReference: 'AttributeReference',
      attributeTableDisplay: 'AttributeTableDisplay',
      attributePlaceholder: 'AttributePlaceholder',
      attributeQuery: 'AttributeQuery',
      attributeFuzzyQuery: 'AttributeFuzzyQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      attributeName: 'string',
      attributeRequirement: 'boolean',
      attributeUniqueness: 'boolean',
      attributeFormat: 'string',
      attributeType: 'string',
      attributeReference: 'string',
      attributeTableDisplay: 'boolean',
      attributePlaceholder: 'string',
      attributeQuery: 'boolean',
      attributeFuzzyQuery: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResponseBodyDevice extends $tea.Model {
  deviceId?: string;
  deviceFormId?: string;
  deviceFormName?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  hostName?: string;
  ip?: string;
  sn?: string;
  mac?: string;
  vendor?: string;
  model?: string;
  securityDomain?: string;
  serviceStatus?: string;
  loginType?: string;
  loginUsername?: string;
  loginPassword?: string;
  snmpAccountVersion?: string;
  snmpCommunity?: string;
  snmpAccountType?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpPrivacyPassphase?: string;
  snmpPrivacyProtocol?: string;
  extAttributes?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      hostName: 'HostName',
      ip: 'Ip',
      sn: 'Sn',
      mac: 'Mac',
      vendor: 'Vendor',
      model: 'Model',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      loginPassword: 'LoginPassword',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpCommunity: 'SnmpCommunity',
      snmpAccountType: 'SnmpAccountType',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpPrivacyPassphase: 'SnmpPrivacyPassphase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      extAttributes: 'ExtAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceFormId: 'string',
      deviceFormName: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      hostName: 'string',
      ip: 'string',
      sn: 'string',
      mac: 'string',
      vendor: 'string',
      model: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      loginType: 'string',
      loginUsername: 'string',
      loginPassword: 'string',
      snmpAccountVersion: 'string',
      snmpCommunity: 'string',
      snmpAccountType: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpPrivacyPassphase: 'string',
      snmpPrivacyProtocol: 'string',
      extAttributes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectRequestPackages extends $tea.Model {
  role?: string;
  deviceNumber?: number;
  vendor?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      deviceNumber: 'DeviceNumber',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      deviceNumber: 'number',
      vendor: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelRequestSort extends $tea.Model {
  levelName?: string;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      levelName: 'LevelName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelName: 'string',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNotificationRequestList extends $tea.Model {
  deviceId?: string;
  monitorItemId?: string;
  aggregateDataId?: string;
  type?: string;
  dedicatedLineId?: string;
  portCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      aggregateDataId: 'AggregateDataId',
      type: 'Type',
      dedicatedLineId: 'DedicatedLineId',
      portCollectionId: 'PortCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      monitorItemId: 'string',
      aggregateDataId: 'string',
      type: 'string',
      dedicatedLineId: 'string',
      portCollectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDiffResponseBodyDeviceConfigDiff extends $tea.Model {
  extractDiff?: string;
  totalDiff?: string;
  static names(): { [key: string]: string } {
    return {
      extractDiff: 'ExtractDiff',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractDiff: 'string',
      totalDiff: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskResponseBodyInspectionAlarmRules extends $tea.Model {
  expression?: string;
  operator?: string;
  value?: string;
  actualValue?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
      actualValue: 'ActualValue',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
      actualValue: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusResourceDevice extends $tea.Model {
  hostName?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusMonitorItem extends $tea.Model {
  monitorItemName?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItemName: 'MonitorItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItemName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusNotificationSwitch extends $tea.Model {
  reason?: string;
  expiryTime?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      expiryTime: 'ExpiryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      expiryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusAggregateData extends $tea.Model {
  aggregateDataName?: string;
  dataItem?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataName: 'AggregateDataName',
      dataItem: 'DataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataName: 'string',
      dataItem: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusDedicatedLine extends $tea.Model {
  dedicatedLineName?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineName: 'DedicatedLineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusPortCollection extends $tea.Model {
  portCollectionName?: string;
  static names(): { [key: string]: string } {
    return {
      portCollectionName: 'PortCollectionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portCollectionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatus extends $tea.Model {
  deviceId?: string;
  monitorItemId?: string;
  collectionTime?: string;
  receiveTime?: string;
  alarmRule?: string;
  alarmStatus?: string;
  result?: string;
  abnormalDataItem?: string;
  uniqueKey?: string;
  responseCode?: string;
  resourceDevice?: ListAlarmStatusResponseBodyAlarmStatusResourceDevice;
  monitorItem?: ListAlarmStatusResponseBodyAlarmStatusMonitorItem;
  firstAbnormalTime?: string;
  notificationSwitch?: ListAlarmStatusResponseBodyAlarmStatusNotificationSwitch;
  aggregateDataId?: string;
  aggregateData?: ListAlarmStatusResponseBodyAlarmStatusAggregateData;
  dedicatedLineId?: string;
  dedicatedLine?: ListAlarmStatusResponseBodyAlarmStatusDedicatedLine;
  portCollectionId?: string;
  portCollection?: ListAlarmStatusResponseBodyAlarmStatusPortCollection;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      collectionTime: 'CollectionTime',
      receiveTime: 'ReceiveTime',
      alarmRule: 'AlarmRule',
      alarmStatus: 'AlarmStatus',
      result: 'Result',
      abnormalDataItem: 'AbnormalDataItem',
      uniqueKey: 'UniqueKey',
      responseCode: 'ResponseCode',
      resourceDevice: 'ResourceDevice',
      monitorItem: 'MonitorItem',
      firstAbnormalTime: 'FirstAbnormalTime',
      notificationSwitch: 'NotificationSwitch',
      aggregateDataId: 'AggregateDataId',
      aggregateData: 'AggregateData',
      dedicatedLineId: 'DedicatedLineId',
      dedicatedLine: 'DedicatedLine',
      portCollectionId: 'PortCollectionId',
      portCollection: 'PortCollection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      monitorItemId: 'string',
      collectionTime: 'string',
      receiveTime: 'string',
      alarmRule: 'string',
      alarmStatus: 'string',
      result: 'string',
      abnormalDataItem: 'string',
      uniqueKey: 'string',
      responseCode: 'string',
      resourceDevice: ListAlarmStatusResponseBodyAlarmStatusResourceDevice,
      monitorItem: ListAlarmStatusResponseBodyAlarmStatusMonitorItem,
      firstAbnormalTime: 'string',
      notificationSwitch: ListAlarmStatusResponseBodyAlarmStatusNotificationSwitch,
      aggregateDataId: 'string',
      aggregateData: ListAlarmStatusResponseBodyAlarmStatusAggregateData,
      dedicatedLineId: 'string',
      dedicatedLine: ListAlarmStatusResponseBodyAlarmStatusDedicatedLine,
      portCollectionId: 'string',
      portCollection: ListAlarmStatusResponseBodyAlarmStatusPortCollection,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyStatistics extends $tea.Model {
  count?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeResponseBodyArchitecture extends $tea.Model {
  role?: string[];
  vendor?: string[];
  model?: string[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      vendor: 'Vendor',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': 'string' },
      vendor: { 'type': 'array', 'itemType': 'string' },
      model: { 'type': 'array', 'itemType': 'string' },
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
    this._endpoint = this.getEndpoint("cmn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createConfigurationSpecificationWithOptions(tmpReq: CreateConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigurationSpecificationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateConfigurationSpecificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedVariate)) {
      request.relatedVariateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedVariate, "RelatedVariate", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConfigurationSpecificationResponse>(await this.doRPCRequest("CreateConfigurationSpecification", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConfigurationSpecificationResponse({}));
  }

  async createConfigurationSpecification(request: CreateConfigurationSpecificationRequest): Promise<CreateConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigurationSpecificationWithOptions(request, runtime);
  }

  async createIpBlockWithOptions(request: CreateIpBlockRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpBlockResponse>(await this.doRPCRequest("CreateIpBlock", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpBlockResponse({}));
  }

  async createIpBlock(request: CreateIpBlockRequest): Promise<CreateIpBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpBlockWithOptions(request, runtime);
  }

  async updateConfigurationVariateWithOptions(request: UpdateConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigurationVariateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConfigurationVariateResponse>(await this.doRPCRequest("UpdateConfigurationVariate", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConfigurationVariateResponse({}));
  }

  async updateConfigurationVariate(request: UpdateConfigurationVariateRequest): Promise<UpdateConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigurationVariateWithOptions(request, runtime);
  }

  async getScheduleTypeWithOptions(request: GetScheduleTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetScheduleTypeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetScheduleTypeResponse>(await this.doRPCRequest("GetScheduleType", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetScheduleTypeResponse({}));
  }

  async getScheduleType(request: GetScheduleTypeRequest): Promise<GetScheduleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScheduleTypeWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResponse>(await this.doRPCRequest("DeleteDevice", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async listDeviceValuesWithOptions(request: ListDeviceValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceValuesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceValuesResponse>(await this.doRPCRequest("ListDeviceValues", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceValuesResponse({}));
  }

  async listDeviceValues(request: ListDeviceValuesRequest): Promise<ListDeviceValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceValuesWithOptions(request, runtime);
  }

  async getIpBlockRecordWithOptions(request: GetIpBlockRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetIpBlockRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetIpBlockRecordResponse>(await this.doRPCRequest("GetIpBlockRecord", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetIpBlockRecordResponse({}));
  }

  async getIpBlockRecord(request: GetIpBlockRecordRequest): Promise<GetIpBlockRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpBlockRecordWithOptions(request, runtime);
  }

  async listSpaceModelsWithOptions(request: ListSpaceModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListSpaceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSpaceModelsResponse>(await this.doRPCRequest("ListSpaceModels", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListSpaceModelsResponse({}));
  }

  async listSpaceModels(request: ListSpaceModelsRequest): Promise<ListSpaceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpaceModelsWithOptions(request, runtime);
  }

  async listDevicePropertiesWithOptions(request: ListDevicePropertiesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicePropertiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDevicePropertiesResponse>(await this.doRPCRequest("ListDeviceProperties", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListDevicePropertiesResponse({}));
  }

  async listDeviceProperties(request: ListDevicePropertiesRequest): Promise<ListDevicePropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicePropertiesWithOptions(request, runtime);
  }

  async listInspectionDevicesWithOptions(tmpReq: ListInspectionDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListInspectionDevicesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInspectionDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.model)) {
      request.modelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.model, "Model", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInspectionDevicesResponse>(await this.doRPCRequest("ListInspectionDevices", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListInspectionDevicesResponse({}));
  }

  async listInspectionDevices(request: ListInspectionDevicesRequest): Promise<ListInspectionDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInspectionDevicesWithOptions(request, runtime);
  }

  async listInspectionTasksWithOptions(request: ListInspectionTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListInspectionTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInspectionTasksResponse>(await this.doRPCRequest("ListInspectionTasks", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListInspectionTasksResponse({}));
  }

  async listInspectionTasks(request: ListInspectionTasksRequest): Promise<ListInspectionTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInspectionTasksWithOptions(request, runtime);
  }

  async listScheduleWorkersWithOptions(request: ListScheduleWorkersRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduleWorkersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListScheduleWorkersResponse>(await this.doRPCRequest("ListScheduleWorkers", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListScheduleWorkersResponse({}));
  }

  async listScheduleWorkers(request: ListScheduleWorkersRequest): Promise<ListScheduleWorkersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduleWorkersWithOptions(request, runtime);
  }

  async updateProjectProgressWithOptions(request: UpdateProjectProgressRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectProgressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectProgressResponse>(await this.doRPCRequest("UpdateProjectProgress", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectProgressResponse({}));
  }

  async updateProjectProgress(request: UpdateProjectProgressRequest): Promise<UpdateProjectProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectProgressWithOptions(request, runtime);
  }

  async updateDeviceResourceWithOptions(tmpReq: UpdateDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDeviceResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceResourceResponse>(await this.doRPCRequest("UpdateDeviceResource", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceResourceResponse({}));
  }

  async updateDeviceResource(request: UpdateDeviceResourceRequest): Promise<UpdateDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceResourceWithOptions(request, runtime);
  }

  async getDevicePropertyWithOptions(request: GetDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<GetDevicePropertyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDevicePropertyResponse>(await this.doRPCRequest("GetDeviceProperty", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDevicePropertyResponse({}));
  }

  async getDeviceProperty(request: GetDevicePropertyRequest): Promise<GetDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevicePropertyWithOptions(request, runtime);
  }

  async listResourceTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListResourceTypesResponse>(await this.doRPCRequest("ListResourceTypes", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListResourceTypesResponse({}));
  }

  async listResourceTypes(): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(runtime);
  }

  async getSetupProjectWithOptions(request: GetSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetSetupProjectResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSetupProjectResponse>(await this.doRPCRequest("GetSetupProject", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetSetupProjectResponse({}));
  }

  async getSetupProject(request: GetSetupProjectRequest): Promise<GetSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSetupProjectWithOptions(request, runtime);
  }

  async listConfigurationVariateWithOptions(request: ListConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigurationVariateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConfigurationVariateResponse>(await this.doRPCRequest("ListConfigurationVariate", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListConfigurationVariateResponse({}));
  }

  async listConfigurationVariate(request: ListConfigurationVariateRequest): Promise<ListConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigurationVariateWithOptions(request, runtime);
  }

  async createSpaceModelWithOptions(request: CreateSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateSpaceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSpaceModelResponse>(await this.doRPCRequest("CreateSpaceModel", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSpaceModelResponse({}));
  }

  async createSpaceModel(request: CreateSpaceModelRequest): Promise<CreateSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpaceModelWithOptions(request, runtime);
  }

  async deleteScheduleWorkerWithOptions(request: DeleteScheduleWorkerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleWorkerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScheduleWorkerResponse>(await this.doRPCRequest("DeleteScheduleWorker", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScheduleWorkerResponse({}));
  }

  async deleteScheduleWorker(request: DeleteScheduleWorkerRequest): Promise<DeleteScheduleWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduleWorkerWithOptions(request, runtime);
  }

  async listDedicatedLinesWithOptions(request: ListDedicatedLinesRequest, runtime: $Util.RuntimeOptions): Promise<ListDedicatedLinesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDedicatedLinesResponse>(await this.doRPCRequest("ListDedicatedLines", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListDedicatedLinesResponse({}));
  }

  async listDedicatedLines(request: ListDedicatedLinesRequest): Promise<ListDedicatedLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDedicatedLinesWithOptions(request, runtime);
  }

  async updateInformationKeyActionWithOptions(request: UpdateInformationKeyActionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInformationKeyActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateInformationKeyActionResponse>(await this.doRPCRequest("UpdateInformationKeyAction", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateInformationKeyActionResponse({}));
  }

  async updateInformationKeyAction(request: UpdateInformationKeyActionRequest): Promise<UpdateInformationKeyActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInformationKeyActionWithOptions(request, runtime);
  }

  async getRealtimeTaskWithOptions(request: GetRealtimeTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetRealtimeTaskResponse>(await this.doRPCRequest("GetRealtimeTask", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetRealtimeTaskResponse({}));
  }

  async getRealtimeTask(request: GetRealtimeTaskRequest): Promise<GetRealtimeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeTaskWithOptions(request, runtime);
  }

  async listScheduleTypesWithOptions(request: ListScheduleTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduleTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListScheduleTypesResponse>(await this.doRPCRequest("ListScheduleTypes", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListScheduleTypesResponse({}));
  }

  async listScheduleTypes(request: ListScheduleTypesRequest): Promise<ListScheduleTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduleTypesWithOptions(request, runtime);
  }

  async createScheduleTypeWithOptions(tmpReq: CreateScheduleTypeRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduleTypeResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateScheduleTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedWorker)) {
      request.relatedWorkerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedWorker, "RelatedWorker", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScheduleTypeResponse>(await this.doRPCRequest("CreateScheduleType", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScheduleTypeResponse({}));
  }

  async createScheduleType(request: CreateScheduleTypeRequest): Promise<CreateScheduleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduleTypeWithOptions(request, runtime);
  }

  async getScheduleWorkerWithOptions(request: GetScheduleWorkerRequest, runtime: $Util.RuntimeOptions): Promise<GetScheduleWorkerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetScheduleWorkerResponse>(await this.doRPCRequest("GetScheduleWorker", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetScheduleWorkerResponse({}));
  }

  async getScheduleWorker(request: GetScheduleWorkerRequest): Promise<GetScheduleWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScheduleWorkerWithOptions(request, runtime);
  }

  async createScheduleWorkerWithOptions(request: CreateScheduleWorkerRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduleWorkerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScheduleWorkerResponse>(await this.doRPCRequest("CreateScheduleWorker", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScheduleWorkerResponse({}));
  }

  async createScheduleWorker(request: CreateScheduleWorkerRequest): Promise<CreateScheduleWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduleWorkerWithOptions(request, runtime);
  }

  async createConfigurationVariateWithOptions(request: CreateConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigurationVariateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConfigurationVariateResponse>(await this.doRPCRequest("CreateConfigurationVariate", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConfigurationVariateResponse({}));
  }

  async createConfigurationVariate(request: CreateConfigurationVariateRequest): Promise<CreateConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigurationVariateWithOptions(request, runtime);
  }

  async getSpaceModelSortWithOptions(request: GetSpaceModelSortRequest, runtime: $Util.RuntimeOptions): Promise<GetSpaceModelSortResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSpaceModelSortResponse>(await this.doRPCRequest("GetSpaceModelSort", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetSpaceModelSortResponse({}));
  }

  async getSpaceModelSort(request: GetSpaceModelSortRequest): Promise<GetSpaceModelSortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpaceModelSortWithOptions(request, runtime);
  }

  async createRealtimeTaskWithOptions(request: CreateRealtimeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRealtimeTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRealtimeTaskResponse>(await this.doRPCRequest("CreateRealtimeTask", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRealtimeTaskResponse({}));
  }

  async createRealtimeTask(request: CreateRealtimeTaskRequest): Promise<CreateRealtimeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRealtimeTaskWithOptions(request, runtime);
  }

  async getDeviceFormWithOptions(request: GetDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceFormResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDeviceFormResponse>(await this.doRPCRequest("GetDeviceForm", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDeviceFormResponse({}));
  }

  async getDeviceForm(request: GetDeviceFormRequest): Promise<GetDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceFormWithOptions(request, runtime);
  }

  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceResponse>(await this.doRPCRequest("CreateDevice", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceResponse({}));
  }

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  async createSetupProjectWithOptions(request: CreateSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateSetupProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSetupProjectResponse>(await this.doRPCRequest("CreateSetupProject", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSetupProjectResponse({}));
  }

  async createSetupProject(request: CreateSetupProjectRequest): Promise<CreateSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSetupProjectWithOptions(request, runtime);
  }

  async updateDedicatedLineWithOptions(request: UpdateDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDedicatedLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDedicatedLineResponse>(await this.doRPCRequest("UpdateDedicatedLine", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDedicatedLineResponse({}));
  }

  async updateDedicatedLine(request: UpdateDedicatedLineRequest): Promise<UpdateDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDedicatedLineWithOptions(request, runtime);
  }

  async getOsVersionWithOptions(request: GetOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetOsVersionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOsVersionResponse>(await this.doRPCRequest("GetOsVersion", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetOsVersionResponse({}));
  }

  async getOsVersion(request: GetOsVersionRequest): Promise<GetOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOsVersionWithOptions(request, runtime);
  }

  async updateScheduleDutyWithOptions(tmpReq: UpdateScheduleDutyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduleDutyResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateScheduleDutyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.typeWorkerList)) {
      request.typeWorkerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeWorkerList, "TypeWorkerList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateScheduleDutyResponse>(await this.doRPCRequest("UpdateScheduleDuty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateScheduleDutyResponse({}));
  }

  async updateScheduleDuty(request: UpdateScheduleDutyRequest): Promise<UpdateScheduleDutyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduleDutyWithOptions(request, runtime);
  }

  async createIpRecordWithOptions(tmpReq: CreateIpRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpRecordResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateIpRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.device)) {
      request.deviceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.device, "Device", "json");
    }

    if (!Util.isUnset(tmpReq.ipCode)) {
      request.ipCodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipCode, "IpCode", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpRecordResponse>(await this.doRPCRequest("CreateIpRecord", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpRecordResponse({}));
  }

  async createIpRecord(request: CreateIpRecordRequest): Promise<CreateIpRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpRecordWithOptions(request, runtime);
  }

  async listInstancesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(runtime);
  }

  async listZoneTypesWithOptions(request: ListZoneTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListZoneTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListZoneTypesResponse>(await this.doRPCRequest("ListZoneTypes", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListZoneTypesResponse({}));
  }

  async listZoneTypes(request: ListZoneTypesRequest): Promise<ListZoneTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listZoneTypesWithOptions(request, runtime);
  }

  async updatePhysicalSpaceWithOptions(request: UpdatePhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhysicalSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePhysicalSpaceResponse>(await this.doRPCRequest("UpdatePhysicalSpace", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePhysicalSpaceResponse({}));
  }

  async updatePhysicalSpace(request: UpdatePhysicalSpaceRequest): Promise<UpdatePhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhysicalSpaceWithOptions(request, runtime);
  }

  async updateResourceInstanceWithOptions(tmpReq: UpdateResourceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateResourceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceInformation)) {
      request.resourceInformationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceInformation, "ResourceInformation", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateResourceInstanceResponse>(await this.doRPCRequest("UpdateResourceInstance", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateResourceInstanceResponse({}));
  }

  async updateResourceInstance(request: UpdateResourceInstanceRequest): Promise<UpdateResourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceInstanceWithOptions(request, runtime);
  }

  async getScheduleDutyWithOptions(request: GetScheduleDutyRequest, runtime: $Util.RuntimeOptions): Promise<GetScheduleDutyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetScheduleDutyResponse>(await this.doRPCRequest("GetScheduleDuty", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetScheduleDutyResponse({}));
  }

  async getScheduleDuty(request: GetScheduleDutyRequest): Promise<GetScheduleDutyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScheduleDutyWithOptions(request, runtime);
  }

  async getConfigurationVariateWithOptions(request: GetConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigurationVariateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetConfigurationVariateResponse>(await this.doRPCRequest("GetConfigurationVariate", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigurationVariateResponse({}));
  }

  async getConfigurationVariate(request: GetConfigurationVariateRequest): Promise<GetConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigurationVariateWithOptions(request, runtime);
  }

  async getAlarmStatusWithOptions(request: GetAlarmStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAlarmStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAlarmStatusResponse>(await this.doRPCRequest("GetAlarmStatus", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetAlarmStatusResponse({}));
  }

  async getAlarmStatus(request: GetAlarmStatusRequest): Promise<GetAlarmStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlarmStatusWithOptions(request, runtime);
  }

  async getIpRecordWithOptions(request: GetIpRecordRequest, runtime: $Util.RuntimeOptions): Promise<GetIpRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetIpRecordResponse>(await this.doRPCRequest("GetIpRecord", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetIpRecordResponse({}));
  }

  async getIpRecord(request: GetIpRecordRequest): Promise<GetIpRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpRecordWithOptions(request, runtime);
  }

  async listScheduleDutiesWithOptions(request: ListScheduleDutiesRequest, runtime: $Util.RuntimeOptions): Promise<ListScheduleDutiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListScheduleDutiesResponse>(await this.doRPCRequest("ListScheduleDuties", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListScheduleDutiesResponse({}));
  }

  async listScheduleDuties(request: ListScheduleDutiesRequest): Promise<ListScheduleDutiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScheduleDutiesWithOptions(request, runtime);
  }

  async lockSpaceModelWithOptions(request: LockSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<LockSpaceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LockSpaceModelResponse>(await this.doRPCRequest("LockSpaceModel", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new LockSpaceModelResponse({}));
  }

  async lockSpaceModel(request: LockSpaceModelRequest): Promise<LockSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockSpaceModelWithOptions(request, runtime);
  }

  async updateResourceInformationWithOptions(tmpReq: UpdateResourceInformationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateResourceInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.information)) {
      request.informationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.information, "Information", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateResourceInformationResponse>(await this.doRPCRequest("UpdateResourceInformation", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateResourceInformationResponse({}));
  }

  async updateResourceInformation(request: UpdateResourceInformationRequest): Promise<UpdateResourceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceInformationWithOptions(request, runtime);
  }

  async createTimePeriodWithOptions(request: CreateTimePeriodRequest, runtime: $Util.RuntimeOptions): Promise<CreateTimePeriodResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTimePeriodResponse>(await this.doRPCRequest("CreateTimePeriod", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTimePeriodResponse({}));
  }

  async createTimePeriod(request: CreateTimePeriodRequest): Promise<CreateTimePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTimePeriodWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevicesResponse>(await this.doRPCRequest("ListDevices", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async listInspectionTaskReportsWithOptions(request: ListInspectionTaskReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListInspectionTaskReportsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInspectionTaskReportsResponse>(await this.doRPCRequest("ListInspectionTaskReports", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListInspectionTaskReportsResponse({}));
  }

  async listInspectionTaskReports(request: ListInspectionTaskReportsRequest): Promise<ListInspectionTaskReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInspectionTaskReportsWithOptions(request, runtime);
  }

  async createMonitorItemWithOptions(request: CreateMonitorItemRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMonitorItemResponse>(await this.doRPCRequest("CreateMonitorItem", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMonitorItemResponse({}));
  }

  async createMonitorItem(request: CreateMonitorItemRequest): Promise<CreateMonitorItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorItemWithOptions(request, runtime);
  }

  async createPhysicalSpaceWithOptions(request: CreatePhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhysicalSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePhysicalSpaceResponse>(await this.doRPCRequest("CreatePhysicalSpace", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePhysicalSpaceResponse({}));
  }

  async createPhysicalSpace(request: CreatePhysicalSpaceRequest): Promise<CreatePhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhysicalSpaceWithOptions(request, runtime);
  }

  async updateDevicesWithOptions(request: UpdateDevicesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDevicesResponse>(await this.doRPCRequest("UpdateDevices", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDevicesResponse({}));
  }

  async updateDevices(request: UpdateDevicesRequest): Promise<UpdateDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevicesWithOptions(request, runtime);
  }

  async updateScheduleTypeWithOptions(tmpReq: UpdateScheduleTypeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduleTypeResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateScheduleTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedWorker)) {
      request.relatedWorkerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedWorker, "RelatedWorker", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateScheduleTypeResponse>(await this.doRPCRequest("UpdateScheduleType", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateScheduleTypeResponse({}));
  }

  async updateScheduleType(request: UpdateScheduleTypeRequest): Promise<UpdateScheduleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduleTypeWithOptions(request, runtime);
  }

  async downloadDeviceResourceWithOptions(tmpReq: DownloadDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDeviceResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new DownloadDeviceResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DownloadDeviceResourceResponse>(await this.doRPCRequest("DownloadDeviceResource", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new DownloadDeviceResourceResponse({}));
  }

  async downloadDeviceResource(request: DownloadDeviceResourceRequest): Promise<DownloadDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDeviceResourceWithOptions(request, runtime);
  }

  async getOsDownloadPathWithOptions(request: GetOsDownloadPathRequest, runtime: $Util.RuntimeOptions): Promise<GetOsDownloadPathResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOsDownloadPathResponse>(await this.doRPCRequest("GetOsDownloadPath", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetOsDownloadPathResponse({}));
  }

  async getOsDownloadPath(request: GetOsDownloadPathRequest): Promise<GetOsDownloadPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOsDownloadPathWithOptions(request, runtime);
  }

  async listConnectionPoliciesWithOptions(request: ListConnectionPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectionPoliciesResponse>(await this.doRPCRequest("ListConnectionPolicies", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectionPoliciesResponse({}));
  }

  async listConnectionPolicies(request: ListConnectionPoliciesRequest): Promise<ListConnectionPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoliciesWithOptions(request, runtime);
  }

  async updateScheduleWorkerWithOptions(request: UpdateScheduleWorkerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScheduleWorkerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateScheduleWorkerResponse>(await this.doRPCRequest("UpdateScheduleWorker", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateScheduleWorkerResponse({}));
  }

  async updateScheduleWorker(request: UpdateScheduleWorkerRequest): Promise<UpdateScheduleWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScheduleWorkerWithOptions(request, runtime);
  }

  async deleteConfigurationVariateWithOptions(request: DeleteConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigurationVariateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConfigurationVariateResponse>(await this.doRPCRequest("DeleteConfigurationVariate", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConfigurationVariateResponse({}));
  }

  async deleteConfigurationVariate(request: DeleteConfigurationVariateRequest): Promise<DeleteConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigurationVariateWithOptions(request, runtime);
  }

  async createScheduleDutyWithOptions(tmpReq: CreateScheduleDutyRequest, runtime: $Util.RuntimeOptions): Promise<CreateScheduleDutyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateScheduleDutyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.scheduleTypeIds)) {
      request.scheduleTypeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleTypeIds, "ScheduleTypeIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScheduleDutyResponse>(await this.doRPCRequest("CreateScheduleDuty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScheduleDutyResponse({}));
  }

  async createScheduleDuty(request: CreateScheduleDutyRequest): Promise<CreateScheduleDutyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScheduleDutyWithOptions(request, runtime);
  }

  async getPhysicalSpaceWithOptions(request: GetPhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalSpaceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetPhysicalSpaceResponse>(await this.doRPCRequest("GetPhysicalSpace", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetPhysicalSpaceResponse({}));
  }

  async getPhysicalSpace(request: GetPhysicalSpaceRequest): Promise<GetPhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalSpaceWithOptions(request, runtime);
  }

  async deleteResourceInformationWithOptions(request: DeleteResourceInformationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceInformationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteResourceInformationResponse>(await this.doRPCRequest("DeleteResourceInformation", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteResourceInformationResponse({}));
  }

  async deleteResourceInformation(request: DeleteResourceInformationRequest): Promise<DeleteResourceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceInformationWithOptions(request, runtime);
  }

  async deleteSetupProjectWithOptions(request: DeleteSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSetupProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSetupProjectResponse>(await this.doRPCRequest("DeleteSetupProject", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSetupProjectResponse({}));
  }

  async deleteSetupProject(request: DeleteSetupProjectRequest): Promise<DeleteSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSetupProjectWithOptions(request, runtime);
  }

  async createDedicatedLineWithOptions(request: CreateDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedLineResponse>(await this.doRPCRequest("CreateDedicatedLine", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedLineResponse({}));
  }

  async createDedicatedLine(request: CreateDedicatedLineRequest): Promise<CreateDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedLineWithOptions(request, runtime);
  }

  async applyIPWithOptions(tmpReq: ApplyIPRequest, runtime: $Util.RuntimeOptions): Promise<ApplyIPResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyIPShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyIPResponse>(await this.doRPCRequest("ApplyIP", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyIPResponse({}));
  }

  async applyIP(request: ApplyIPRequest): Promise<ApplyIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyIPWithOptions(request, runtime);
  }

  async updateOsVersionWithOptions(request: UpdateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionResponse>(await this.doRPCRequest("UpdateOsVersion", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionResponse({}));
  }

  async updateOsVersion(request: UpdateOsVersionRequest): Promise<UpdateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionWithOptions(request, runtime);
  }

  async getSpaceModelInstanceWithOptions(request: GetSpaceModelInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetSpaceModelInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSpaceModelInstanceResponse>(await this.doRPCRequest("GetSpaceModelInstance", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetSpaceModelInstanceResponse({}));
  }

  async getSpaceModelInstance(request: GetSpaceModelInstanceRequest): Promise<GetSpaceModelInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpaceModelInstanceWithOptions(request, runtime);
  }

  async listOsVersionsWithOptions(request: ListOsVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListOsVersionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOsVersionsResponse>(await this.doRPCRequest("ListOsVersions", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListOsVersionsResponse({}));
  }

  async listOsVersions(request: ListOsVersionsRequest): Promise<ListOsVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOsVersionsWithOptions(request, runtime);
  }

  async getDeviceConfigWithOptions(request: GetDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDeviceConfigResponse>(await this.doRPCRequest("GetDeviceConfig", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDeviceConfigResponse({}));
  }

  async getDeviceConfig(request: GetDeviceConfigRequest): Promise<GetDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigWithOptions(request, runtime);
  }

  async getDedicatedLineWithOptions(request: GetDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<GetDedicatedLineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDedicatedLineResponse>(await this.doRPCRequest("GetDedicatedLine", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDedicatedLineResponse({}));
  }

  async getDedicatedLine(request: GetDedicatedLineRequest): Promise<GetDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDedicatedLineWithOptions(request, runtime);
  }

  async getDeviceResourceWithOptions(request: GetDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDeviceResourceResponse>(await this.doRPCRequest("GetDeviceResource", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDeviceResourceResponse({}));
  }

  async getDeviceResource(request: GetDeviceResourceRequest): Promise<GetDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceResourceWithOptions(request, runtime);
  }

  async deleteDedicatedLineWithOptions(request: DeleteDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDedicatedLineResponse>(await this.doRPCRequest("DeleteDedicatedLine", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDedicatedLineResponse({}));
  }

  async deleteDedicatedLine(request: DeleteDedicatedLineRequest): Promise<DeleteDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedLineWithOptions(request, runtime);
  }

  async listIpWithOptions(request: ListIpRequest, runtime: $Util.RuntimeOptions): Promise<ListIpResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListIpResponse>(await this.doRPCRequest("ListIp", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListIpResponse({}));
  }

  async listIp(request: ListIpRequest): Promise<ListIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpWithOptions(request, runtime);
  }

  async listConfigurationSpecificationsWithOptions(request: ListConfigurationSpecificationsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigurationSpecificationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConfigurationSpecificationsResponse>(await this.doRPCRequest("ListConfigurationSpecifications", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListConfigurationSpecificationsResponse({}));
  }

  async listConfigurationSpecifications(request: ListConfigurationSpecificationsRequest): Promise<ListConfigurationSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigurationSpecificationsWithOptions(request, runtime);
  }

  async enableNotificationWithOptions(request: EnableNotificationRequest, runtime: $Util.RuntimeOptions): Promise<EnableNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableNotificationResponse>(await this.doRPCRequest("EnableNotification", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new EnableNotificationResponse({}));
  }

  async enableNotification(request: EnableNotificationRequest): Promise<EnableNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableNotificationWithOptions(request, runtime);
  }

  async updateDevicePropertyWithOptions(request: UpdateDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevicePropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDevicePropertyResponse>(await this.doRPCRequest("UpdateDeviceProperty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDevicePropertyResponse({}));
  }

  async updateDeviceProperty(request: UpdateDevicePropertyRequest): Promise<UpdateDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevicePropertyWithOptions(request, runtime);
  }

  async listNotificationHistoriesWithOptions(request: ListNotificationHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListNotificationHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListNotificationHistoriesResponse>(await this.doRPCRequest("ListNotificationHistories", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListNotificationHistoriesResponse({}));
  }

  async listNotificationHistories(request: ListNotificationHistoriesRequest): Promise<ListNotificationHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotificationHistoriesWithOptions(request, runtime);
  }

  async deleteDevicePropertyWithOptions(request: DeleteDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicePropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevicePropertyResponse>(await this.doRPCRequest("DeleteDeviceProperty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevicePropertyResponse({}));
  }

  async deleteDeviceProperty(request: DeleteDevicePropertyRequest): Promise<DeleteDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicePropertyWithOptions(request, runtime);
  }

  async listResourceInstancesWithOptions(request: ListResourceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListResourceInstancesResponse>(await this.doRPCRequest("ListResourceInstances", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListResourceInstancesResponse({}));
  }

  async listResourceInstances(request: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceInstancesWithOptions(request, runtime);
  }

  async listIpBlocksWithOptions(request: ListIpBlocksRequest, runtime: $Util.RuntimeOptions): Promise<ListIpBlocksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListIpBlocksResponse>(await this.doRPCRequest("ListIpBlocks", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListIpBlocksResponse({}));
  }

  async listIpBlocks(request: ListIpBlocksRequest): Promise<ListIpBlocksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpBlocksWithOptions(request, runtime);
  }

  async listDeviceResourcesWithOptions(request: ListDeviceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceResourcesResponse>(await this.doRPCRequest("ListDeviceResources", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceResourcesResponse({}));
  }

  async listDeviceResources(request: ListDeviceResourcesRequest): Promise<ListDeviceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceResourcesWithOptions(request, runtime);
  }

  async listResourceInformationsWithOptions(request: ListResourceInformationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceInformationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListResourceInformationsResponse>(await this.doRPCRequest("ListResourceInformations", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListResourceInformationsResponse({}));
  }

  async listResourceInformations(request: ListResourceInformationsRequest): Promise<ListResourceInformationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceInformationsWithOptions(request, runtime);
  }

  async listDeviceFormsWithOptions(request: ListDeviceFormsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceFormsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceFormsResponse>(await this.doRPCRequest("ListDeviceForms", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceFormsResponse({}));
  }

  async listDeviceForms(request: ListDeviceFormsRequest): Promise<ListDeviceFormsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceFormsWithOptions(request, runtime);
  }

  async getConfigurationSpecificationWithOptions(request: GetConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigurationSpecificationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetConfigurationSpecificationResponse>(await this.doRPCRequest("GetConfigurationSpecification", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigurationSpecificationResponse({}));
  }

  async getConfigurationSpecification(request: GetConfigurationSpecificationRequest): Promise<GetConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigurationSpecificationWithOptions(request, runtime);
  }

  async deleteScheduleDutyWithOptions(tmpReq: DeleteScheduleDutyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleDutyResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteScheduleDutyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.typeWorkerList)) {
      request.typeWorkerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeWorkerList, "TypeWorkerList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScheduleDutyResponse>(await this.doRPCRequest("DeleteScheduleDuty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScheduleDutyResponse({}));
  }

  async deleteScheduleDuty(request: DeleteScheduleDutyRequest): Promise<DeleteScheduleDutyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduleDutyWithOptions(request, runtime);
  }

  async uploadScheduleDutyWithOptions(tmpReq: UploadScheduleDutyRequest, runtime: $Util.RuntimeOptions): Promise<UploadScheduleDutyResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadScheduleDutyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.scheduleDuty)) {
      request.scheduleDutyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleDuty, "ScheduleDuty", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadScheduleDutyResponse>(await this.doRPCRequest("UploadScheduleDuty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UploadScheduleDutyResponse({}));
  }

  async uploadScheduleDuty(request: UploadScheduleDutyRequest): Promise<UploadScheduleDutyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadScheduleDutyWithOptions(request, runtime);
  }

  async listAlarmStatusHistoriesWithOptions(request: ListAlarmStatusHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmStatusHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAlarmStatusHistoriesResponse>(await this.doRPCRequest("ListAlarmStatusHistories", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListAlarmStatusHistoriesResponse({}));
  }

  async listAlarmStatusHistories(request: ListAlarmStatusHistoriesRequest): Promise<ListAlarmStatusHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmStatusHistoriesWithOptions(request, runtime);
  }

  async getSpaceModelWithOptions(request: GetSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<GetSpaceModelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSpaceModelResponse>(await this.doRPCRequest("GetSpaceModel", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetSpaceModelResponse({}));
  }

  async getSpaceModel(request: GetSpaceModelRequest): Promise<GetSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpaceModelWithOptions(request, runtime);
  }

  async createDeviceFormWithOptions(request: CreateDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceFormResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceFormResponse>(await this.doRPCRequest("CreateDeviceForm", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceFormResponse({}));
  }

  async createDeviceForm(request: CreateDeviceFormRequest): Promise<CreateDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceFormWithOptions(request, runtime);
  }

  async listPhysicalSpacesWithOptions(request: ListPhysicalSpacesRequest, runtime: $Util.RuntimeOptions): Promise<ListPhysicalSpacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListPhysicalSpacesResponse>(await this.doRPCRequest("ListPhysicalSpaces", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListPhysicalSpacesResponse({}));
  }

  async listPhysicalSpaces(request: ListPhysicalSpacesRequest): Promise<ListPhysicalSpacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhysicalSpacesWithOptions(request, runtime);
  }

  async listMonitorDataWithOptions(request: ListMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<ListMonitorDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListMonitorDataResponse>(await this.doRPCRequest("ListMonitorData", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListMonitorDataResponse({}));
  }

  async listMonitorData(request: ListMonitorDataRequest): Promise<ListMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMonitorDataWithOptions(request, runtime);
  }

  async createResourceInformationWithOptions(request: CreateResourceInformationRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceInformationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourceInformationResponse>(await this.doRPCRequest("CreateResourceInformation", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourceInformationResponse({}));
  }

  async createResourceInformation(request: CreateResourceInformationRequest): Promise<CreateResourceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceInformationWithOptions(request, runtime);
  }

  async updateSpaceModelInstanceWithOptions(request: UpdateSpaceModelInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSpaceModelInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSpaceModelInstanceResponse>(await this.doRPCRequest("UpdateSpaceModelInstance", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSpaceModelInstanceResponse({}));
  }

  async updateSpaceModelInstance(request: UpdateSpaceModelInstanceRequest): Promise<UpdateSpaceModelInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSpaceModelInstanceWithOptions(request, runtime);
  }

  async updateIpRecordWithOptions(request: UpdateIpRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpRecordResponse>(await this.doRPCRequest("UpdateIpRecord", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpRecordResponse({}));
  }

  async updateIpRecord(request: UpdateIpRecordRequest): Promise<UpdateIpRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpRecordWithOptions(request, runtime);
  }

  async releaseIPWithOptions(tmpReq: ReleaseIPRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseIPResponse> {
    Util.validateModel(tmpReq);
    let request = new ReleaseIPShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseIPResponse>(await this.doRPCRequest("ReleaseIP", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseIPResponse({}));
  }

  async releaseIP(request: ReleaseIPRequest): Promise<ReleaseIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseIPWithOptions(request, runtime);
  }

  async deleteDeviceResourceWithOptions(request: DeleteDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResourceResponse>(await this.doRPCRequest("DeleteDeviceResource", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResourceResponse({}));
  }

  async deleteDeviceResource(request: DeleteDeviceResourceRequest): Promise<DeleteDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceResourceWithOptions(request, runtime);
  }

  async getIpBlockWithOptions(request: GetIpBlockRequest, runtime: $Util.RuntimeOptions): Promise<GetIpBlockResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetIpBlockResponse>(await this.doRPCRequest("GetIpBlock", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetIpBlockResponse({}));
  }

  async getIpBlock(request: GetIpBlockRequest): Promise<GetIpBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpBlockWithOptions(request, runtime);
  }

  async deleteIpBlockWithOptions(request: DeleteIpBlockRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpBlockResponse>(await this.doRPCRequest("DeleteIpBlock", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpBlockResponse({}));
  }

  async deleteIpBlock(request: DeleteIpBlockRequest): Promise<DeleteIpBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpBlockWithOptions(request, runtime);
  }

  async deleteInspectionTaskWithOptions(request: DeleteInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInspectionTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteInspectionTaskResponse>(await this.doRPCRequest("DeleteInspectionTask", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteInspectionTaskResponse({}));
  }

  async deleteInspectionTask(request: DeleteInspectionTaskRequest): Promise<DeleteInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInspectionTaskWithOptions(request, runtime);
  }

  async deleteConfigurationSpecificationWithOptions(request: DeleteConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigurationSpecificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConfigurationSpecificationResponse>(await this.doRPCRequest("DeleteConfigurationSpecification", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConfigurationSpecificationResponse({}));
  }

  async deleteConfigurationSpecification(request: DeleteConfigurationSpecificationRequest): Promise<DeleteConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigurationSpecificationWithOptions(request, runtime);
  }

  async listBusinessTypesWithOptions(request: ListBusinessTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListBusinessTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListBusinessTypesResponse>(await this.doRPCRequest("ListBusinessTypes", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListBusinessTypesResponse({}));
  }

  async listBusinessTypes(request: ListBusinessTypesRequest): Promise<ListBusinessTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusinessTypesWithOptions(request, runtime);
  }

  async listSetupProjectsWithOptions(request: ListSetupProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListSetupProjectsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSetupProjectsResponse>(await this.doRPCRequest("ListSetupProjects", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListSetupProjectsResponse({}));
  }

  async listSetupProjects(request: ListSetupProjectsRequest): Promise<ListSetupProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSetupProjectsWithOptions(request, runtime);
  }

  async listTasksHistoriesWithOptions(request: ListTasksHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTasksHistoriesResponse>(await this.doRPCRequest("ListTasksHistories", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListTasksHistoriesResponse({}));
  }

  async listTasksHistories(request: ListTasksHistoriesRequest): Promise<ListTasksHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksHistoriesWithOptions(request, runtime);
  }

  async updateConfigurationSpecificationWithOptions(tmpReq: UpdateConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigurationSpecificationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateConfigurationSpecificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedVariate)) {
      request.relatedVariateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedVariate, "RelatedVariate", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConfigurationSpecificationResponse>(await this.doRPCRequest("UpdateConfigurationSpecification", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConfigurationSpecificationResponse({}));
  }

  async updateConfigurationSpecification(request: UpdateConfigurationSpecificationRequest): Promise<UpdateConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigurationSpecificationWithOptions(request, runtime);
  }

  async createOsVersionWithOptions(request: CreateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOsVersionResponse>(await this.doRPCRequest("CreateOsVersion", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOsVersionResponse({}));
  }

  async createOsVersion(request: CreateOsVersionRequest): Promise<CreateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOsVersionWithOptions(request, runtime);
  }

  async createIpBlockRecordWithOptions(tmpReq: CreateIpBlockRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpBlockRecordResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateIpBlockRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.zoneLayer)) {
      request.zoneLayerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.zoneLayer, "ZoneLayer", "json");
    }

    if (!Util.isUnset(tmpReq.businessType)) {
      request.businessTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessType, "BusinessType", "json");
    }

    if (!Util.isUnset(tmpReq.ipBlockCode)) {
      request.ipBlockCodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipBlockCode, "IpBlockCode", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpBlockRecordResponse>(await this.doRPCRequest("CreateIpBlockRecord", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpBlockRecordResponse({}));
  }

  async createIpBlockRecord(request: CreateIpBlockRecordRequest): Promise<CreateIpBlockRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpBlockRecordWithOptions(request, runtime);
  }

  async updateIpBlockWithOptions(request: UpdateIpBlockRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpBlockResponse>(await this.doRPCRequest("UpdateIpBlock", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpBlockResponse({}));
  }

  async updateIpBlock(request: UpdateIpBlockRequest): Promise<UpdateIpBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpBlockWithOptions(request, runtime);
  }

  async createDevicePropertyWithOptions(request: CreateDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevicePropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevicePropertyResponse>(await this.doRPCRequest("CreateDeviceProperty", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevicePropertyResponse({}));
  }

  async createDeviceProperty(request: CreateDevicePropertyRequest): Promise<CreateDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevicePropertyWithOptions(request, runtime);
  }

  async updateIpBlockRecordWithOptions(request: UpdateIpBlockRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpBlockRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpBlockRecordResponse>(await this.doRPCRequest("UpdateIpBlockRecord", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpBlockRecordResponse({}));
  }

  async updateIpBlockRecord(request: UpdateIpBlockRecordRequest): Promise<UpdateIpBlockRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpBlockRecordWithOptions(request, runtime);
  }

  async retryTasksWithOptions(tmpReq: RetryTasksRequest, runtime: $Util.RuntimeOptions): Promise<RetryTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new RetryTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.retryTasks)) {
      request.retryTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retryTasks, "RetryTasks", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<RetryTasksResponse>(await this.doRPCRequest("RetryTasks", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new RetryTasksResponse({}));
  }

  async retryTasks(request: RetryTasksRequest): Promise<RetryTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryTasksWithOptions(request, runtime);
  }

  async getPhysicalSpaceTopoWithOptions(request: GetPhysicalSpaceTopoRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalSpaceTopoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPhysicalSpaceTopoResponse>(await this.doRPCRequest("GetPhysicalSpaceTopo", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetPhysicalSpaceTopoResponse({}));
  }

  async getPhysicalSpaceTopo(request: GetPhysicalSpaceTopoRequest): Promise<GetPhysicalSpaceTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalSpaceTopoWithOptions(request, runtime);
  }

  async getOssPolicyWithOptions(request: GetOssPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetOssPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOssPolicyResponse>(await this.doRPCRequest("GetOssPolicy", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetOssPolicyResponse({}));
  }

  async getOssPolicy(request: GetOssPolicyRequest): Promise<GetOssPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssPolicyWithOptions(request, runtime);
  }

  async deleteDeviceFormWithOptions(request: DeleteDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceFormResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceFormResponse>(await this.doRPCRequest("DeleteDeviceForm", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceFormResponse({}));
  }

  async deleteDeviceForm(request: DeleteDeviceFormRequest): Promise<DeleteDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceFormWithOptions(request, runtime);
  }

  async updateDeviceFormWithOptions(tmpReq: UpdateDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceFormResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDeviceFormShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attributeList)) {
      request.attributeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributeList, "AttributeList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceFormResponse>(await this.doRPCRequest("UpdateDeviceForm", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceFormResponse({}));
  }

  async updateDeviceForm(request: UpdateDeviceFormRequest): Promise<UpdateDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceFormWithOptions(request, runtime);
  }

  async updateDeviceWithOptions(request: UpdateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceResponse>(await this.doRPCRequest("UpdateDevice", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceResponse({}));
  }

  async updateDevice(request: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceWithOptions(request, runtime);
  }

  async getDeviceWithOptions(request: GetDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDeviceResponse>(await this.doRPCRequest("GetDevice", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDeviceResponse({}));
  }

  async getDevice(request: GetDeviceRequest): Promise<GetDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceWithOptions(request, runtime);
  }

  async updateSetupProjectWithOptions(tmpReq: UpdateSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSetupProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSetupProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.packages)) {
      request.packagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.packages, "Packages", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSetupProjectResponse>(await this.doRPCRequest("UpdateSetupProject", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSetupProjectResponse({}));
  }

  async updateSetupProject(request: UpdateSetupProjectRequest): Promise<UpdateSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSetupProjectWithOptions(request, runtime);
  }

  async updateSpaceModelWithOptions(tmpReq: UpdateSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSpaceModelResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSpaceModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSpaceModelResponse>(await this.doRPCRequest("UpdateSpaceModel", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSpaceModelResponse({}));
  }

  async updateSpaceModel(request: UpdateSpaceModelRequest): Promise<UpdateSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSpaceModelWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListRegionsResponse>(await this.doRPCRequest("ListRegions", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async deleteSpaceModelWithOptions(request: DeleteSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpaceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSpaceModelResponse>(await this.doRPCRequest("DeleteSpaceModel", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSpaceModelResponse({}));
  }

  async deleteSpaceModel(request: DeleteSpaceModelRequest): Promise<DeleteSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpaceModelWithOptions(request, runtime);
  }

  async disableNotificationWithOptions(request: DisableNotificationRequest, runtime: $Util.RuntimeOptions): Promise<DisableNotificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableNotificationResponse>(await this.doRPCRequest("DisableNotification", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DisableNotificationResponse({}));
  }

  async disableNotification(request: DisableNotificationRequest): Promise<DisableNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableNotificationWithOptions(request, runtime);
  }

  async getDeviceConfigDiffWithOptions(request: GetDeviceConfigDiffRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigDiffResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDeviceConfigDiffResponse>(await this.doRPCRequest("GetDeviceConfigDiff", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetDeviceConfigDiffResponse({}));
  }

  async getDeviceConfigDiff(request: GetDeviceConfigDiffRequest): Promise<GetDeviceConfigDiffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigDiffWithOptions(request, runtime);
  }

  async getInspectionTaskWithOptions(request: GetInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetInspectionTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetInspectionTaskResponse>(await this.doRPCRequest("GetInspectionTask", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new GetInspectionTaskResponse({}));
  }

  async getInspectionTask(request: GetInspectionTaskRequest): Promise<GetInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInspectionTaskWithOptions(request, runtime);
  }

  async listAlarmStatusWithOptions(request: ListAlarmStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAlarmStatusResponse>(await this.doRPCRequest("ListAlarmStatus", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListAlarmStatusResponse({}));
  }

  async listAlarmStatus(request: ListAlarmStatusRequest): Promise<ListAlarmStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmStatusWithOptions(request, runtime);
  }

  async listArchitectureAttributeWithOptions(request: ListArchitectureAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ListArchitectureAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListArchitectureAttributeResponse>(await this.doRPCRequest("ListArchitectureAttribute", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListArchitectureAttributeResponse({}));
  }

  async listArchitectureAttribute(request: ListArchitectureAttributeRequest): Promise<ListArchitectureAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArchitectureAttributeWithOptions(request, runtime);
  }

  async deleteOsVersionWithOptions(request: DeleteOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOsVersionResponse>(await this.doRPCRequest("DeleteOsVersion", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOsVersionResponse({}));
  }

  async deleteOsVersion(request: DeleteOsVersionRequest): Promise<DeleteOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOsVersionWithOptions(request, runtime);
  }

  async deleteScheduleTypeWithOptions(request: DeleteScheduleTypeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScheduleTypeResponse>(await this.doRPCRequest("DeleteScheduleType", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScheduleTypeResponse({}));
  }

  async deleteScheduleType(request: DeleteScheduleTypeRequest): Promise<DeleteScheduleTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScheduleTypeWithOptions(request, runtime);
  }

  async deletePhysicalSpaceWithOptions(request: DeletePhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhysicalSpaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePhysicalSpaceResponse>(await this.doRPCRequest("DeletePhysicalSpace", "2020-08-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePhysicalSpaceResponse({}));
  }

  async deletePhysicalSpace(request: DeletePhysicalSpaceRequest): Promise<DeletePhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhysicalSpaceWithOptions(request, runtime);
  }

}
