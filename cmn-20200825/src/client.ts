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

export class ListInspectionTasksRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  itemId?: string;
  hostName?: string;
  ip?: string;
  taskStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      itemId: 'ItemId',
      hostName: 'HostName',
      ip: 'Ip',
      taskStatus: 'TaskStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      itemId: 'string',
      hostName: 'string',
      ip: 'string',
      taskStatus: 'string',
      instanceId: 'string',
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

export class ListAlarmStatusHistoriesRequest extends $tea.Model {
  start?: number;
  end?: number;
  deviceId?: string;
  monitorItemId?: string;
  type?: string;
  aggregateDataId?: string;
  dedicatedLineId?: string;
  instanceId?: string;
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

export class CreateRealtimeTaskRequest extends $tea.Model {
  deviceId?: string;
  script?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      script: 'Script',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      script: 'string',
      instanceId: 'string',
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

export class UpdatePhysicalSpaceRequest extends $tea.Model {
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  country?: string;
  province?: string;
  city?: string;
  address?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
      instanceId: 'InstanceId',
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

export class GetAlarmStatusRequest extends $tea.Model {
  deviceId?: string;
  monitorItemId?: string;
  type?: string;
  aggregateDataId?: string;
  dedicatedLineId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      type: 'Type',
      aggregateDataId: 'AggregateDataId',
      dedicatedLineId: 'DedicatedLineId',
      instanceId: 'InstanceId',
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
  static names(): { [key: string]: string } {
    return {
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
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
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      alarmStatus: 'AlarmStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      alarmStatus: { 'type': 'array', 'itemType': ListAlarmStatusResponseBodyAlarmStatus },
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
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      monitorItemId: 'MonitorItemId',
      deviceId: 'DeviceId',
      aggregateDataId: 'AggregateDataId',
      dedicatedLineId: 'DedicatedLineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      monitorItemId: 'string',
      deviceId: 'string',
      aggregateDataId: 'string',
      dedicatedLineId: 'string',
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

export class ListPhysicalSpacesResponseBodyPhysicalSpaces extends $tea.Model {
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  country?: string;
  province?: string;
  city?: string;
  address?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
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

export class DisableNotificationRequestList extends $tea.Model {
  deviceId?: string;
  monitorItemId?: string;
  aggregateDataId?: string;
  type?: string;
  dedicatedLineId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      aggregateDataId: 'AggregateDataId',
      type: 'Type',
      dedicatedLineId: 'DedicatedLineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      monitorItemId: 'string',
      aggregateDataId: 'string',
      type: 'string',
      dedicatedLineId: 'string',
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
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      country: 'Country',
      province: 'Province',
      city: 'City',
      address: 'Address',
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

  async listInstancesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(runtime);
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

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListRegionsResponse>(await this.doRPCRequest("ListRegions", "2020-08-25", "HTTPS", "GET", "AK", "json", req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
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

}
