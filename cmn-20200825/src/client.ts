// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class AgentsTask extends $tea.Model {
  actionType?: string;
  agentType?: string;
  agentsTaskId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  params?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      agentType: 'AgentType',
      agentsTaskId: 'AgentsTaskId',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      params: 'Params',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      agentType: 'string',
      agentsTaskId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      params: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AggregateData extends $tea.Model {
  aggregateDataDescription?: string;
  aggregateDataId?: string;
  aggregateDataName?: string;
  aggregateModeList?: string[];
  dataItem?: string;
  deviceIdList?: string[];
  gmtCreate?: string;
  gmtModified?: string;
  isAllDevice?: number;
  monitorItemId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataDescription: 'AggregateDataDescription',
      aggregateDataId: 'AggregateDataId',
      aggregateDataName: 'AggregateDataName',
      aggregateModeList: 'AggregateModeList',
      dataItem: 'DataItem',
      deviceIdList: 'DeviceIdList',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isAllDevice: 'IsAllDevice',
      monitorItemId: 'MonitorItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataDescription: 'string',
      aggregateDataId: 'string',
      aggregateDataName: 'string',
      aggregateModeList: { 'type': 'array', 'itemType': 'string' },
      dataItem: 'string',
      deviceIdList: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      isAllDevice: 'number',
      monitorItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlarmOverview extends $tea.Model {
  alarmOverviewId?: string;
  alarmOverviewName?: string;
  conditionList?: AlarmOverviewConditionList[];
  serialNumber?: number;
  static names(): { [key: string]: string } {
    return {
      alarmOverviewId: 'AlarmOverviewId',
      alarmOverviewName: 'AlarmOverviewName',
      conditionList: 'ConditionList',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmOverviewId: 'string',
      alarmOverviewName: 'string',
      conditionList: { 'type': 'array', 'itemType': AlarmOverviewConditionList },
      serialNumber: 'number',
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

export class BusinessType extends $tea.Model {
  abbr?: string;
  actionFlag?: string;
  businessTypeId?: string;
  createTime?: string;
  direction?: number;
  gateway?: number;
  leaseTime?: string;
  mask?: string;
  name?: string;
  reserveNumber?: number;
  sharing?: string;
  type?: string;
  updateTime?: string;
  vlan?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      abbr: 'Abbr',
      actionFlag: 'ActionFlag',
      businessTypeId: 'BusinessTypeId',
      createTime: 'CreateTime',
      direction: 'Direction',
      gateway: 'Gateway',
      leaseTime: 'LeaseTime',
      mask: 'Mask',
      name: 'Name',
      reserveNumber: 'ReserveNumber',
      sharing: 'Sharing',
      type: 'Type',
      updateTime: 'UpdateTime',
      vlan: 'Vlan',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbr: 'string',
      actionFlag: 'string',
      businessTypeId: 'string',
      createTime: 'string',
      direction: 'number',
      gateway: 'number',
      leaseTime: 'string',
      mask: 'string',
      name: 'string',
      reserveNumber: 'number',
      sharing: 'string',
      type: 'string',
      updateTime: 'string',
      vlan: 'string',
      zoneType: 'string',
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

export class ConfigurationSpecification extends $tea.Model {
  architecture?: string;
  configurationSpecificationId?: string;
  createTime?: string;
  model?: string;
  relatedVariate?: string[];
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      createTime: 'CreateTime',
      model: 'Model',
      relatedVariate: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      configurationSpecificationId: 'string',
      createTime: 'string',
      model: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationVariate extends $tea.Model {
  comment?: string;
  configurationVariateId?: string;
  createTime?: string;
  formatFunction?: string;
  updateTime?: string;
  variateName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      configurationVariateId: 'ConfigurationVariateId',
      createTime: 'CreateTime',
      formatFunction: 'FormatFunction',
      updateTime: 'UpdateTime',
      variateName: 'VariateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      configurationVariateId: 'string',
      createTime: 'string',
      formatFunction: 'string',
      updateTime: 'string',
      variateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionPolicy extends $tea.Model {
  algorithm?: string;
  connectionPolicyId?: string;
  createTime?: string;
  downlinkDeviceId?: string;
  downlinkModuleId?: string;
  id?: string;
  linkCount?: number;
  name?: string;
  networkArchitectureIterationId?: string;
  updateTime?: string;
  uplinkDeviceId?: string;
  uplinkModelId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      connectionPolicyId: 'ConnectionPolicyId',
      createTime: 'CreateTime',
      downlinkDeviceId: 'DownlinkDeviceId',
      downlinkModuleId: 'DownlinkModuleId',
      id: 'Id',
      linkCount: 'LinkCount',
      name: 'Name',
      networkArchitectureIterationId: 'NetworkArchitectureIterationId',
      updateTime: 'UpdateTime',
      uplinkDeviceId: 'UplinkDeviceId',
      uplinkModelId: 'UplinkModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      connectionPolicyId: 'string',
      createTime: 'string',
      downlinkDeviceId: 'string',
      downlinkModuleId: 'string',
      id: 'string',
      linkCount: 'number',
      name: 'string',
      networkArchitectureIterationId: 'string',
      updateTime: 'string',
      uplinkDeviceId: 'string',
      uplinkModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataView extends $tea.Model {
  dataViewChartList?: DataViewChart[];
  dataViewDescription?: string;
  dataViewId?: string;
  dataViewName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      dataViewChartList: 'DataViewChartList',
      dataViewDescription: 'DataViewDescription',
      dataViewId: 'DataViewId',
      dataViewName: 'DataViewName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataViewChartList: { 'type': 'array', 'itemType': DataViewChart },
      dataViewDescription: 'string',
      dataViewId: 'string',
      dataViewName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataViewChart extends $tea.Model {
  chartType?: string;
  dataViewId?: string;
  dataViewSource?: string;
  gmtCreate?: string;
  gmtModified?: string;
  grid?: string;
  static names(): { [key: string]: string } {
    return {
      chartType: 'ChartType',
      dataViewId: 'DataViewId',
      dataViewSource: 'DataViewSource',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      grid: 'Grid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartType: 'string',
      dataViewId: 'string',
      dataViewSource: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      grid: 'string',
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

export class DeviceResource extends $tea.Model {
  archId?: string;
  businessType?: string;
  businessTypeId?: string;
  businessTypeParams?: string;
  createTime?: string;
  data?: string;
  deviceResource?: DeviceResourceDeviceResource[];
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  downloadType?: string;
  ipType?: string;
  listType?: string;
  loopbackPort?: string;
  netLocation?: string;
  setupProjectId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      archId: 'ArchId',
      businessType: 'BusinessType',
      businessTypeId: 'BusinessTypeId',
      businessTypeParams: 'BusinessTypeParams',
      createTime: 'CreateTime',
      data: 'Data',
      deviceResource: 'DeviceResource',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      downloadType: 'DownloadType',
      ipType: 'IpType',
      listType: 'ListType',
      loopbackPort: 'LoopbackPort',
      netLocation: 'NetLocation',
      setupProjectId: 'SetupProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archId: 'string',
      businessType: 'string',
      businessTypeId: 'string',
      businessTypeParams: 'string',
      createTime: 'string',
      data: 'string',
      deviceResource: { 'type': 'array', 'itemType': DeviceResourceDeviceResource },
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      downloadType: 'string',
      ipType: 'string',
      listType: 'string',
      loopbackPort: 'string',
      netLocation: 'string',
      setupProjectId: 'string',
      type: 'string',
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

export class Event extends $tea.Model {
  alarmStatus?: string;
  count?: number;
  createTime?: string;
  deviceId?: string;
  eventName?: string;
  eventObject?: string;
  eventObjectId?: string;
  eventType?: string;
  message?: string;
  resourceDevice?: EventResourceDevice;
  templateId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      count: 'Count',
      createTime: 'CreateTime',
      deviceId: 'DeviceId',
      eventName: 'EventName',
      eventObject: 'EventObject',
      eventObjectId: 'EventObjectId',
      eventType: 'EventType',
      message: 'Message',
      resourceDevice: 'ResourceDevice',
      templateId: 'TemplateId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      count: 'number',
      createTime: 'string',
      deviceId: 'string',
      eventName: 'string',
      eventObject: 'string',
      eventObjectId: 'string',
      eventType: 'string',
      message: 'string',
      resourceDevice: EventResourceDevice,
      templateId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventDefinition extends $tea.Model {
  createTime?: string;
  eventId?: string;
  eventName?: string;
  eventType?: string;
  templateId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventId: 'EventId',
      eventName: 'EventName',
      eventType: 'EventType',
      templateId: 'TemplateId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      eventId: 'string',
      eventName: 'string',
      eventType: 'string',
      templateId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionItem extends $tea.Model {
  inspectionCrontab?: string;
  itemDescription?: string;
  itemId?: string;
  itemName?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionCrontab: 'InspectionCrontab',
      itemDescription: 'ItemDescription',
      itemId: 'ItemId',
      itemName: 'ItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionCrontab: 'string',
      itemDescription: 'string',
      itemId: 'string',
      itemName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionScript extends $tea.Model {
  inspectionAlarmRules?: InspectionScriptInspectionAlarmRules[];
  inspectionCrontab?: string;
  itemDescription?: string;
  itemId?: string;
  itemName?: string;
  model?: string;
  role?: string;
  script?: string;
  scriptId?: string;
  scriptStatus?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionAlarmRules: 'InspectionAlarmRules',
      inspectionCrontab: 'InspectionCrontab',
      itemDescription: 'ItemDescription',
      itemId: 'ItemId',
      itemName: 'ItemName',
      model: 'Model',
      role: 'Role',
      script: 'Script',
      scriptId: 'ScriptId',
      scriptStatus: 'ScriptStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionAlarmRules: { 'type': 'array', 'itemType': InspectionScriptInspectionAlarmRules },
      inspectionCrontab: 'string',
      itemDescription: 'string',
      itemId: 'string',
      itemName: 'string',
      model: 'string',
      role: 'string',
      script: 'string',
      scriptId: 'string',
      scriptStatus: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionTask extends $tea.Model {
  deviceId?: string;
  errorCode?: string;
  executionBeginTime?: string;
  executionEndTime?: string;
  hostname?: string;
  IP?: string;
  inspectionAlarmRules?: InspectionTaskInspectionAlarmRules[];
  inspectionResult?: string;
  itemId?: string;
  itemName?: string;
  model?: string;
  role?: string;
  space?: string;
  taskStatus?: string;
  templateId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      errorCode: 'ErrorCode',
      executionBeginTime: 'ExecutionBeginTime',
      executionEndTime: 'ExecutionEndTime',
      hostname: 'Hostname',
      IP: 'IP',
      inspectionAlarmRules: 'InspectionAlarmRules',
      inspectionResult: 'InspectionResult',
      itemId: 'ItemId',
      itemName: 'ItemName',
      model: 'Model',
      role: 'Role',
      space: 'Space',
      taskStatus: 'TaskStatus',
      templateId: 'TemplateId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      errorCode: 'string',
      executionBeginTime: 'string',
      executionEndTime: 'string',
      hostname: 'string',
      IP: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': InspectionTaskInspectionAlarmRules },
      inspectionResult: 'string',
      itemId: 'string',
      itemName: 'string',
      model: 'string',
      role: 'string',
      space: 'string',
      taskStatus: 'string',
      templateId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Ip extends $tea.Model {
  businessTypeId?: string;
  businessTypeName?: string;
  createTime?: string;
  deviceMac?: string;
  deviceName?: string;
  ipAddress?: string;
  ipId?: string;
  ipName?: string;
  parentIpBlock?: string;
  port?: string;
  status?: string;
  zoneLayer?: IpZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      businessTypeId: 'BusinessTypeId',
      businessTypeName: 'BusinessTypeName',
      createTime: 'CreateTime',
      deviceMac: 'DeviceMac',
      deviceName: 'DeviceName',
      ipAddress: 'IpAddress',
      ipId: 'IpId',
      ipName: 'IpName',
      parentIpBlock: 'ParentIpBlock',
      port: 'Port',
      status: 'Status',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeId: 'string',
      businessTypeName: 'string',
      createTime: 'string',
      deviceMac: 'string',
      deviceName: 'string',
      ipAddress: 'string',
      ipId: 'string',
      ipName: 'string',
      parentIpBlock: 'string',
      port: 'string',
      status: 'string',
      zoneLayer: { 'type': 'array', 'itemType': IpZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpBlock extends $tea.Model {
  application?: string;
  backupDeviceName?: string;
  block?: string;
  businessTypeId?: string;
  category?: string;
  createTime?: string;
  description?: string;
  deviceName?: string;
  ipBlockId?: string;
  mask?: string;
  netBusiness?: string;
  netType?: string;
  ownership?: string;
  parentId?: string;
  reserveParentBlock?: string;
  resourceGroupId?: string;
  updateType?: string;
  zoneLayer?: IpBlockZoneLayer[];
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      backupDeviceName: 'BackupDeviceName',
      block: 'Block',
      businessTypeId: 'BusinessTypeId',
      category: 'Category',
      createTime: 'CreateTime',
      description: 'Description',
      deviceName: 'DeviceName',
      ipBlockId: 'IpBlockId',
      mask: 'Mask',
      netBusiness: 'NetBusiness',
      netType: 'NetType',
      ownership: 'Ownership',
      parentId: 'ParentId',
      reserveParentBlock: 'ReserveParentBlock',
      resourceGroupId: 'ResourceGroupId',
      updateType: 'UpdateType',
      zoneLayer: 'ZoneLayer',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      backupDeviceName: 'string',
      block: 'string',
      businessTypeId: 'string',
      category: 'string',
      createTime: 'string',
      description: 'string',
      deviceName: 'string',
      ipBlockId: 'string',
      mask: 'string',
      netBusiness: 'string',
      netType: 'string',
      ownership: 'string',
      parentId: 'string',
      reserveParentBlock: 'string',
      resourceGroupId: 'string',
      updateType: 'string',
      zoneLayer: { 'type': 'array', 'itemType': IpBlockZoneLayer },
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpBlockRecord extends $tea.Model {
  createTime?: string;
  creator?: number;
  description?: string;
  detail?: IpBlockRecordDetail[];
  ipBlockCode?: string[];
  ipBlockRecordId?: string;
  netType?: string;
  recordType?: string;
  status?: string;
  title?: string;
  updateTime?: string;
  workNo?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      detail: 'Detail',
      ipBlockCode: 'IpBlockCode',
      ipBlockRecordId: 'IpBlockRecordId',
      netType: 'NetType',
      recordType: 'RecordType',
      status: 'Status',
      title: 'Title',
      updateTime: 'UpdateTime',
      workNo: 'WorkNo',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'number',
      description: 'string',
      detail: { 'type': 'array', 'itemType': IpBlockRecordDetail },
      ipBlockCode: { 'type': 'array', 'itemType': 'string' },
      ipBlockRecordId: 'string',
      netType: 'string',
      recordType: 'string',
      status: 'string',
      title: 'string',
      updateTime: 'string',
      workNo: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IpRecord extends $tea.Model {
  businessTypeName?: string;
  createTime?: string;
  creator?: string;
  description?: string;
  detail?: IpRecordDetail[];
  ipBlock?: string;
  ipCode?: string[];
  ipRecordId?: string;
  recodeType?: string;
  status?: string;
  updateTime?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      businessTypeName: 'BusinessTypeName',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      detail: 'Detail',
      ipBlock: 'IpBlock',
      ipCode: 'IpCode',
      ipRecordId: 'IpRecordId',
      recodeType: 'RecodeType',
      status: 'Status',
      updateTime: 'UpdateTime',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeName: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      detail: { 'type': 'array', 'itemType': IpRecordDetail },
      ipBlock: 'string',
      ipCode: { 'type': 'array', 'itemType': 'string' },
      ipRecordId: 'string',
      recodeType: 'string',
      status: 'string',
      updateTime: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelToRole extends $tea.Model {
  createTime?: string;
  id?: string;
  model?: string;
  modelToRoleId?: string;
  networkArchitectureIterationId?: string;
  role?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      model: 'Model',
      modelToRoleId: 'ModelToRoleId',
      networkArchitectureIterationId: 'NetworkArchitectureIterationId',
      role: 'Role',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      model: 'string',
      modelToRoleId: 'string',
      networkArchitectureIterationId: 'string',
      role: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Module extends $tea.Model {
  createTime?: string;
  device?: ModuleDevice;
  id?: string;
  maxCount?: number;
  minCount?: number;
  moduleDetails?: ModuleModuleDetails[];
  moduleId?: string;
  moduleType?: string;
  name?: string;
  parentModuleId?: string;
  stack?: boolean;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      device: 'Device',
      id: 'Id',
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      moduleDetails: 'ModuleDetails',
      moduleId: 'ModuleId',
      moduleType: 'ModuleType',
      name: 'Name',
      parentModuleId: 'ParentModuleId',
      stack: 'Stack',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      device: ModuleDevice,
      id: 'string',
      maxCount: 'number',
      minCount: 'number',
      moduleDetails: { 'type': 'array', 'itemType': ModuleModuleDetails },
      moduleId: 'string',
      moduleType: 'string',
      name: 'string',
      parentModuleId: 'string',
      stack: 'boolean',
      updateTime: 'string',
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
  enable?: number;
  execInterval?: string;
  gmtCreate?: string;
  gmtModified?: string;
  monitorItemDescription?: string;
  monitorItemId?: string;
  monitorItemName?: string;
  securityDomain?: string;
  static names(): { [key: string]: string } {
    return {
      analysisCode: 'AnalysisCode',
      collectionType: 'CollectionType',
      config: 'Config',
      enable: 'Enable',
      execInterval: 'ExecInterval',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      monitorItemDescription: 'MonitorItemDescription',
      monitorItemId: 'MonitorItemId',
      monitorItemName: 'MonitorItemName',
      securityDomain: 'SecurityDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisCode: 'string',
      collectionType: 'string',
      config: 'string',
      enable: 'number',
      execInterval: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      monitorItemDescription: 'string',
      monitorItemId: 'string',
      monitorItemName: 'string',
      securityDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NetworkArchitecture extends $tea.Model {
  archVersionIterationId?: string;
  availabe?: boolean;
  children?: string[];
  createTime?: string;
  description?: string;
  deviceNumber?: number;
  groupNumber?: number;
  id?: string;
  name?: string;
  networkArchitectureId?: string;
  role?: string;
  selected?: boolean;
  stack?: boolean;
  status?: string;
  updateTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      archVersionIterationId: 'ArchVersionIterationId',
      availabe: 'Availabe',
      children: 'Children',
      createTime: 'CreateTime',
      description: 'Description',
      deviceNumber: 'DeviceNumber',
      groupNumber: 'GroupNumber',
      id: 'Id',
      name: 'Name',
      networkArchitectureId: 'NetworkArchitectureId',
      role: 'Role',
      selected: 'Selected',
      stack: 'Stack',
      status: 'Status',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archVersionIterationId: 'string',
      availabe: 'boolean',
      children: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      deviceNumber: 'number',
      groupNumber: 'number',
      id: 'string',
      name: 'string',
      networkArchitectureId: 'string',
      role: 'string',
      selected: 'boolean',
      stack: 'boolean',
      status: 'string',
      updateTime: 'string',
      version: 'string',
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

export class OsVersion extends $tea.Model {
  accessId?: string;
  createTime?: string;
  directory?: string;
  expireTime?: string;
  fileName?: string;
  filePath?: string;
  host?: string;
  model?: string;
  osVersion?: string;
  osVersionId?: string;
  policy?: string;
  signature?: string;
  status?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      createTime: 'CreateTime',
      directory: 'Directory',
      expireTime: 'ExpireTime',
      fileName: 'FileName',
      filePath: 'FilePath',
      host: 'Host',
      model: 'Model',
      osVersion: 'OsVersion',
      osVersionId: 'OsVersionId',
      policy: 'Policy',
      signature: 'Signature',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      createTime: 'string',
      directory: 'string',
      expireTime: 'string',
      fileName: 'string',
      filePath: 'string',
      host: 'string',
      model: 'string',
      osVersion: 'string',
      osVersionId: 'string',
      policy: 'string',
      signature: 'string',
      status: 'string',
      vendor: 'string',
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

export class ResourceInformation extends $tea.Model {
  architectureId?: string;
  createTime?: string;
  information?: ResourceInformationInformation[];
  resourceAttribute?: string;
  resourceInformationId?: string;
  resourceType?: string;
  setupProjectId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      architectureId: 'ArchitectureId',
      createTime: 'CreateTime',
      information: 'Information',
      resourceAttribute: 'ResourceAttribute',
      resourceInformationId: 'ResourceInformationId',
      resourceType: 'ResourceType',
      setupProjectId: 'SetupProjectId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureId: 'string',
      createTime: 'string',
      information: { 'type': 'array', 'itemType': ResourceInformationInformation },
      resourceAttribute: 'string',
      resourceInformationId: 'string',
      resourceType: 'string',
      setupProjectId: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleDuty extends $tea.Model {
  createTime?: string;
  endDate?: string;
  scheduleDutyId?: string;
  scheduleTypeIds?: string[];
  startDate?: string;
  typeWorkerList?: ScheduleDutyTypeWorkerList[];
  updateTime?: string;
  workDate?: string;
  workType?: string;
  workerId?: string;
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endDate: 'EndDate',
      scheduleDutyId: 'ScheduleDutyId',
      scheduleTypeIds: 'ScheduleTypeIds',
      startDate: 'StartDate',
      typeWorkerList: 'TypeWorkerList',
      updateTime: 'UpdateTime',
      workDate: 'WorkDate',
      workType: 'WorkType',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endDate: 'string',
      scheduleDutyId: 'string',
      scheduleTypeIds: { 'type': 'array', 'itemType': 'string' },
      startDate: 'string',
      typeWorkerList: { 'type': 'array', 'itemType': ScheduleDutyTypeWorkerList },
      updateTime: 'string',
      workDate: 'string',
      workType: 'string',
      workerId: 'string',
      workerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleType extends $tea.Model {
  createTime?: string;
  key?: string;
  relatedWorker?: string[];
  scheduleTypeId?: string;
  status?: string;
  updateTime?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      key: 'Key',
      relatedWorker: 'RelatedWorker',
      scheduleTypeId: 'ScheduleTypeId',
      status: 'Status',
      updateTime: 'UpdateTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      key: 'string',
      relatedWorker: { 'type': 'array', 'itemType': 'string' },
      scheduleTypeId: 'string',
      status: 'string',
      updateTime: 'string',
      value: 'string',
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
  workerContact?: string;
  workerId?: string;
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      scheduleWorkerId: 'ScheduleWorkerId',
      updateTime: 'UpdateTime',
      workerContact: 'WorkerContact',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      scheduleWorkerId: 'string',
      updateTime: 'string',
      workerContact: 'string',
      workerId: 'string',
      workerName: 'string',
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

export class SetupProject extends $tea.Model {
  archId?: string;
  archVersion?: string;
  architectureId?: string;
  createTime?: string;
  deliveryTime?: string;
  description?: string;
  nodes?: string;
  packages?: SetupProjectPackages[];
  setupProjectId?: string;
  setupProjectName?: string;
  spaceId?: string;
  spaceName?: string;
  spaceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      archId: 'ArchId',
      archVersion: 'ArchVersion',
      architectureId: 'ArchitectureId',
      createTime: 'CreateTime',
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      nodes: 'Nodes',
      packages: 'Packages',
      setupProjectId: 'SetupProjectId',
      setupProjectName: 'SetupProjectName',
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
      spaceType: 'SpaceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archId: 'string',
      archVersion: 'string',
      architectureId: 'string',
      createTime: 'string',
      deliveryTime: 'string',
      description: 'string',
      nodes: 'string',
      packages: { 'type': 'array', 'itemType': SetupProjectPackages },
      setupProjectId: 'string',
      setupProjectName: 'string',
      spaceId: 'string',
      spaceName: 'string',
      spaceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpaceModel extends $tea.Model {
  createTime?: string;
  instance?: string;
  operateType?: string;
  sort?: SpaceModelSort;
  spaceId?: string;
  spaceModel?: SpaceModelSpaceModel;
  spaceModelId?: string;
  spaceModelName?: string;
  spaceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instance: 'Instance',
      operateType: 'OperateType',
      sort: 'Sort',
      spaceId: 'SpaceId',
      spaceModel: 'SpaceModel',
      spaceModelId: 'SpaceModelId',
      spaceModelName: 'SpaceModelName',
      spaceType: 'SpaceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instance: 'string',
      operateType: 'string',
      sort: SpaceModelSort,
      spaceId: 'string',
      spaceModel: SpaceModelSpaceModel,
      spaceModelId: 'string',
      spaceModelName: 'string',
      spaceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionItem extends $tea.Model {
  alarmStatus?: string;
  language?: string;
  monitorItemId?: string;
  notificationGroupId?: string;
  notificationMode?: string;
  recoveryNotice?: number;
  subscriptionItemId?: string;
  subscriptionType?: string;
  suppressionStrategy?: string;
  triggerTimes?: number;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      language: 'Language',
      monitorItemId: 'MonitorItemId',
      notificationGroupId: 'NotificationGroupId',
      notificationMode: 'NotificationMode',
      recoveryNotice: 'RecoveryNotice',
      subscriptionItemId: 'SubscriptionItemId',
      subscriptionType: 'SubscriptionType',
      suppressionStrategy: 'SuppressionStrategy',
      triggerTimes: 'TriggerTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      language: 'string',
      monitorItemId: 'string',
      notificationGroupId: 'string',
      notificationMode: 'string',
      recoveryNotice: 'number',
      subscriptionItemId: 'string',
      subscriptionType: 'string',
      suppressionStrategy: 'string',
      triggerTimes: 'number',
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

export class TimePeriod extends $tea.Model {
  cronExpression?: string;
  gmtCreate?: string;
  gmtModified?: string;
  source?: string;
  timePeriodDescription?: string;
  timePeriodId?: string;
  timePeriodName?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      source: 'Source',
      timePeriodDescription: 'TimePeriodDescription',
      timePeriodId: 'TimePeriodId',
      timePeriodName: 'TimePeriodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      source: 'string',
      timePeriodDescription: 'string',
      timePeriodId: 'string',
      timePeriodName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ZoneType extends $tea.Model {
  createTime?: string;
  name?: string;
  zoneTypeId?: string;
  zoneTypeLayer?: ZoneTypeZoneTypeLayer[];
  zoneTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      name: 'Name',
      zoneTypeId: 'ZoneTypeId',
      zoneTypeLayer: 'ZoneTypeLayer',
      zoneTypeName: 'ZoneTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      zoneTypeId: 'string',
      zoneTypeLayer: { 'type': 'array', 'itemType': ZoneTypeZoneTypeLayer },
      zoneTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyIPRequest extends $tea.Model {
  businessTypeId?: string;
  businessTypeParams?: string;
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  instanceId?: string;
  ipType?: string;
  loopbackPort?: string;
  netLocation?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      businessTypeId: 'BusinessTypeId',
      businessTypeParams: 'BusinessTypeParams',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      instanceId: 'InstanceId',
      ipType: 'IpType',
      loopbackPort: 'LoopbackPort',
      netLocation: 'NetLocation',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeId: 'string',
      businessTypeParams: 'string',
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ipType: 'string',
      loopbackPort: 'string',
      netLocation: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyIPShrinkRequest extends $tea.Model {
  businessTypeId?: string;
  businessTypeParams?: string;
  deviceResourceId?: string;
  deviceResourceIdsShrink?: string;
  instanceId?: string;
  ipType?: string;
  loopbackPort?: string;
  netLocation?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      businessTypeId: 'BusinessTypeId',
      businessTypeParams: 'BusinessTypeParams',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      instanceId: 'InstanceId',
      ipType: 'IpType',
      loopbackPort: 'LoopbackPort',
      netLocation: 'NetLocation',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTypeId: 'string',
      businessTypeParams: 'string',
      deviceResourceId: 'string',
      deviceResourceIdsShrink: 'string',
      instanceId: 'string',
      ipType: 'string',
      loopbackPort: 'string',
      netLocation: 'string',
      setupProjectId: 'string',
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

export class AutoDutyRequest extends $tea.Model {
  dutyBatch?: string;
  dutyName?: string;
  endDate?: string;
  instanceId?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      dutyBatch: 'DutyBatch',
      dutyName: 'DutyName',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dutyBatch: 'string',
      dutyName: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoDutyResponseBody extends $tea.Model {
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

export class AutoDutyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AutoDutyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AutoDutyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEventRequest extends $tea.Model {
  eventName?: string;
  eventObjectId?: string;
  eventType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventObjectId: 'EventObjectId',
      eventType: 'EventType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventObjectId: 'string',
      eventType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEventResponseBody extends $tea.Model {
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

export class CloseEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationSpecificationRequest extends $tea.Model {
  architecture?: string;
  clientToken?: string;
  instanceId?: string;
  model?: string;
  relatedVariate?: Buffer[];
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      model: 'Model',
      relatedVariate: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      clientToken: 'string',
      instanceId: 'string',
      model: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'Buffer' },
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationSpecificationShrinkRequest extends $tea.Model {
  architecture?: string;
  clientToken?: string;
  instanceId?: string;
  model?: string;
  relatedVariateShrink?: string;
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      model: 'Model',
      relatedVariateShrink: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      clientToken: 'string',
      instanceId: 'string',
      model: 'string',
      relatedVariateShrink: 'string',
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      vendor: 'string',
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

export class CreateConfigurationVariateRequest extends $tea.Model {
  clientToken?: string;
  comment?: string;
  formatFunction?: string;
  instanceId?: string;
  variateName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      comment: 'Comment',
      formatFunction: 'FormatFunction',
      instanceId: 'InstanceId',
      variateName: 'VariateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      comment: 'string',
      formatFunction: 'string',
      instanceId: 'string',
      variateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigurationVariateResponseBody extends $tea.Model {
  configurationVariateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationVariateId: 'ConfigurationVariateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationVariateId: 'string',
      requestId: 'string',
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

export class CreateDedicatedLineRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  contact?: string;
  dedicatedLineGateway?: string;
  dedicatedLineIp?: string;
  dedicatedLineRole?: string;
  description?: string;
  deviceId?: string;
  devicePort?: string;
  instanceId?: string;
  isp?: string;
  phone?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      contact: 'Contact',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineRole: 'DedicatedLineRole',
      description: 'Description',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      instanceId: 'InstanceId',
      isp: 'Isp',
      phone: 'Phone',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      contact: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineIp: 'string',
      dedicatedLineRole: 'string',
      description: 'string',
      deviceId: 'string',
      devicePort: 'string',
      instanceId: 'string',
      isp: 'string',
      phone: 'string',
      physicalSpaceId: 'string',
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

export class CreateDeviceRequest extends $tea.Model {
  clientToken?: string;
  deviceFormId?: string;
  enablePassword?: string;
  extAttributes?: string;
  hostName?: string;
  instanceId?: string;
  ip?: string;
  loginPassword?: string;
  loginType?: string;
  loginUsername?: string;
  mac?: string;
  model?: string;
  physicalSpaceId?: string;
  securityDomain?: string;
  serviceStatus?: string;
  sn?: string;
  snmpAccountType?: string;
  snmpAccountVersion?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpCommunity?: string;
  snmpPrivacyPassphrase?: string;
  snmpPrivacyProtocol?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deviceFormId: 'DeviceFormId',
      enablePassword: 'EnablePassword',
      extAttributes: 'ExtAttributes',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      loginPassword: 'LoginPassword',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      mac: 'Mac',
      model: 'Model',
      physicalSpaceId: 'PhysicalSpaceId',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      snmpAccountType: 'SnmpAccountType',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpCommunity: 'SnmpCommunity',
      snmpPrivacyPassphrase: 'SnmpPrivacyPassphrase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deviceFormId: 'string',
      enablePassword: 'string',
      extAttributes: 'string',
      hostName: 'string',
      instanceId: 'string',
      ip: 'string',
      loginPassword: 'string',
      loginType: 'string',
      loginUsername: 'string',
      mac: 'string',
      model: 'string',
      physicalSpaceId: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      sn: 'string',
      snmpAccountType: 'string',
      snmpAccountVersion: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpCommunity: 'string',
      snmpPrivacyPassphrase: 'string',
      snmpPrivacyProtocol: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  deviceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      requestId: 'string',
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

export class CreateDeviceFormRequest extends $tea.Model {
  accountConfig?: boolean;
  clientToken?: string;
  configCompare?: boolean;
  detailDisplay?: boolean;
  deviceFormName?: string;
  instanceId?: string;
  relatedDeviceFormId?: string;
  resourceUse?: string;
  script?: string;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      accountConfig: 'AccountConfig',
      clientToken: 'ClientToken',
      configCompare: 'ConfigCompare',
      detailDisplay: 'DetailDisplay',
      deviceFormName: 'DeviceFormName',
      instanceId: 'InstanceId',
      relatedDeviceFormId: 'RelatedDeviceFormId',
      resourceUse: 'ResourceUse',
      script: 'Script',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountConfig: 'boolean',
      clientToken: 'string',
      configCompare: 'boolean',
      detailDisplay: 'boolean',
      deviceFormName: 'string',
      instanceId: 'string',
      relatedDeviceFormId: 'string',
      resourceUse: 'string',
      script: 'string',
      uniqueKey: 'string',
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

export class CreateDevicePropertyRequest extends $tea.Model {
  clientToken?: string;
  deviceFormId?: string;
  instanceId?: string;
  propertyContent?: string;
  propertyFormat?: string;
  propertyKey?: string;
  propertyName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
      propertyContent: 'PropertyContent',
      propertyFormat: 'PropertyFormat',
      propertyKey: 'PropertyKey',
      propertyName: 'PropertyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deviceFormId: 'string',
      instanceId: 'string',
      propertyContent: 'string',
      propertyFormat: 'string',
      propertyKey: 'string',
      propertyName: 'string',
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

export class CreateDevicesRequest extends $tea.Model {
  clientToken?: string;
  deviceFormId?: string;
  deviceParamModelList?: CreateDevicesRequestDeviceParamModelList[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deviceFormId: 'DeviceFormId',
      deviceParamModelList: 'DeviceParamModelList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deviceFormId: 'string',
      deviceParamModelList: { 'type': 'array', 'itemType': CreateDevicesRequestDeviceParamModelList },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicesShrinkRequest extends $tea.Model {
  clientToken?: string;
  deviceFormId?: string;
  deviceParamModelListShrink?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deviceFormId: 'DeviceFormId',
      deviceParamModelListShrink: 'DeviceParamModelList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deviceFormId: 'string',
      deviceParamModelListShrink: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicesResponseBody extends $tea.Model {
  deviceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventDefinitionRequest extends $tea.Model {
  clientToken?: string;
  eventName?: string;
  eventType?: string;
  instanceId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eventName: 'EventName',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eventName: 'string',
      eventType: 'string',
      instanceId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventDefinitionResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventDefinitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEventDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEventDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkJobRequest extends $tea.Model {
  autoConfirm?: boolean;
  doubleConvertStrategy?: string;
  instanceId?: string;
  jobId?: string;
  singleStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoConfirm: 'AutoConfirm',
      doubleConvertStrategy: 'DoubleConvertStrategy',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      singleStrategy: 'SingleStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirm: 'boolean',
      doubleConvertStrategy: 'string',
      instanceId: 'string',
      jobId: 'string',
      singleStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkJobResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLinkJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLinkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLinkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorItemRequest extends $tea.Model {
  alarmRuleList?: CreateMonitorItemRequestAlarmRuleList[];
  analysisCode?: string;
  clientToken?: string;
  collectionType?: string;
  config?: string;
  dataItem?: string;
  deviceForm?: string;
  effective?: number;
  execInterval?: number;
  instanceId?: string;
  monitorItemDescription?: string;
  monitorItemName?: string;
  securityDomain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alarmRuleList: 'AlarmRuleList',
      analysisCode: 'AnalysisCode',
      clientToken: 'ClientToken',
      collectionType: 'CollectionType',
      config: 'Config',
      dataItem: 'DataItem',
      deviceForm: 'DeviceForm',
      effective: 'Effective',
      execInterval: 'ExecInterval',
      instanceId: 'InstanceId',
      monitorItemDescription: 'MonitorItemDescription',
      monitorItemName: 'MonitorItemName',
      securityDomain: 'SecurityDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmRuleList: { 'type': 'array', 'itemType': CreateMonitorItemRequestAlarmRuleList },
      analysisCode: 'string',
      clientToken: 'string',
      collectionType: 'string',
      config: 'string',
      dataItem: 'string',
      deviceForm: 'string',
      effective: 'number',
      execInterval: 'number',
      instanceId: 'string',
      monitorItemDescription: 'string',
      monitorItemName: 'string',
      securityDomain: 'string',
      type: 'string',
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

export class CreateOsVersionRequest extends $tea.Model {
  clientToken?: string;
  createTime?: string;
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  model?: string;
  osVersion?: string;
  status?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createTime: 'CreateTime',
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      model: 'Model',
      osVersion: 'OsVersion',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      model: 'string',
      osVersion: 'string',
      status: 'string',
      vendor: 'string',
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

export class CreatePhysicalSpaceRequest extends $tea.Model {
  address?: string;
  city?: string;
  clientToken?: string;
  country?: string;
  instanceId?: string;
  owner?: string;
  physicalSpaceName?: string;
  province?: string;
  remark?: string;
  spaceAbbreviation?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      clientToken: 'ClientToken',
      country: 'Country',
      instanceId: 'InstanceId',
      owner: 'Owner',
      physicalSpaceName: 'PhysicalSpaceName',
      province: 'Province',
      remark: 'Remark',
      spaceAbbreviation: 'SpaceAbbreviation',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      clientToken: 'string',
      country: 'string',
      instanceId: 'string',
      owner: 'string',
      physicalSpaceName: 'string',
      province: 'string',
      remark: 'string',
      spaceAbbreviation: 'string',
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalSpaceResponseBody extends $tea.Model {
  physicalSpaceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpaceId: 'PhysicalSpaceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpaceId: 'string',
      requestId: 'string',
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

export class CreateRealtimeTaskRequest extends $tea.Model {
  clientToken?: string;
  deviceId?: string;
  instanceId?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deviceId: 'string',
      instanceId: 'string',
      script: 'string',
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

export class CreateResourceInformationRequest extends $tea.Model {
  architectureId?: string;
  clientToken?: string;
  information?: CreateResourceInformationRequestInformation[];
  instanceId?: string;
  resourceAttribute?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      architectureId: 'ArchitectureId',
      clientToken: 'ClientToken',
      information: 'Information',
      instanceId: 'InstanceId',
      resourceAttribute: 'ResourceAttribute',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureId: 'string',
      clientToken: 'string',
      information: { 'type': 'array', 'itemType': CreateResourceInformationRequestInformation },
      instanceId: 'string',
      resourceAttribute: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInformationResponseBody extends $tea.Model {
  requestId?: string;
  resourceInformationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceInformationId: 'ResourceInformationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInformationId: 'string',
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

export class CreateSetupProjectRequest extends $tea.Model {
  deliveryTime?: string;
  description?: string;
  instanceId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      instanceId: 'InstanceId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTime: 'string',
      description: 'string',
      instanceId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSetupProjectResponseBody extends $tea.Model {
  requestId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setupProjectId: 'string',
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

export class CreateSpaceModelRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  sort?: CreateSpaceModelRequestSort[];
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      sort: 'Sort',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      sort: { 'type': 'array', 'itemType': CreateSpaceModelRequestSort },
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceModelShrinkRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  sortShrink?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      sortShrink: 'Sort',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      sortShrink: 'string',
      spaceType: 'string',
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

export class CreateTaskRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  params?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      params: 'Params',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      params: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
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

export class CreateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimePeriodRequest extends $tea.Model {
  clientToken?: string;
  expression?: string;
  instanceId?: string;
  timePeriodDescription?: string;
  timePeriodName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      expression: 'Expression',
      instanceId: 'InstanceId',
      timePeriodDescription: 'TimePeriodDescription',
      timePeriodName: 'TimePeriodName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      expression: 'string',
      instanceId: 'string',
      timePeriodDescription: 'string',
      timePeriodName: 'string',
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

export class CreateWorkOrderRequest extends $tea.Model {
  alarmHappenTime?: string;
  alarmRecoverTime?: string;
  alarmRelated?: string;
  area?: string;
  circuitId?: string;
  circuitName?: string;
  circuitType?: string;
  clientToken?: string;
  deviceIp?: string;
  deviceIpA?: string;
  deviceIpB?: string;
  deviceModelA?: string;
  deviceModelB?: string;
  deviceName?: string;
  deviceNameA?: string;
  deviceNameB?: string;
  devicePortA?: string;
  devicePortB?: string;
  deviceSnA?: string;
  deviceSnB?: string;
  deviceType?: string;
  deviceVendor?: string;
  deviceVendorA?: string;
  deviceVendorB?: string;
  emergencyDegree?: string;
  impactBusiness?: string;
  incidentDescription?: string;
  incidentSubType?: string;
  incidentType?: string;
  instanceId?: string;
  liableMan?: string;
  linkMan?: string;
  originalSubjectAlarm?: string;
  processLimited?: string;
  processMan?: string;
  processManId?: string;
  skillGroups?: string;
  workOrderSource?: string;
  workOrderStep?: string;
  workOrderTitle?: string;
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHappenTime: 'AlarmHappenTime',
      alarmRecoverTime: 'AlarmRecoverTime',
      alarmRelated: 'AlarmRelated',
      area: 'Area',
      circuitId: 'CircuitId',
      circuitName: 'CircuitName',
      circuitType: 'CircuitType',
      clientToken: 'ClientToken',
      deviceIp: 'DeviceIp',
      deviceIpA: 'DeviceIpA',
      deviceIpB: 'DeviceIpB',
      deviceModelA: 'DeviceModelA',
      deviceModelB: 'DeviceModelB',
      deviceName: 'DeviceName',
      deviceNameA: 'DeviceNameA',
      deviceNameB: 'DeviceNameB',
      devicePortA: 'DevicePortA',
      devicePortB: 'DevicePortB',
      deviceSnA: 'DeviceSnA',
      deviceSnB: 'DeviceSnB',
      deviceType: 'DeviceType',
      deviceVendor: 'DeviceVendor',
      deviceVendorA: 'DeviceVendorA',
      deviceVendorB: 'DeviceVendorB',
      emergencyDegree: 'EmergencyDegree',
      impactBusiness: 'ImpactBusiness',
      incidentDescription: 'IncidentDescription',
      incidentSubType: 'IncidentSubType',
      incidentType: 'IncidentType',
      instanceId: 'InstanceId',
      liableMan: 'LiableMan',
      linkMan: 'LinkMan',
      originalSubjectAlarm: 'OriginalSubjectAlarm',
      processLimited: 'ProcessLimited',
      processMan: 'ProcessMan',
      processManId: 'ProcessManId',
      skillGroups: 'SkillGroups',
      workOrderSource: 'WorkOrderSource',
      workOrderStep: 'WorkOrderStep',
      workOrderTitle: 'WorkOrderTitle',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHappenTime: 'string',
      alarmRecoverTime: 'string',
      alarmRelated: 'string',
      area: 'string',
      circuitId: 'string',
      circuitName: 'string',
      circuitType: 'string',
      clientToken: 'string',
      deviceIp: 'string',
      deviceIpA: 'string',
      deviceIpB: 'string',
      deviceModelA: 'string',
      deviceModelB: 'string',
      deviceName: 'string',
      deviceNameA: 'string',
      deviceNameB: 'string',
      devicePortA: 'string',
      devicePortB: 'string',
      deviceSnA: 'string',
      deviceSnB: 'string',
      deviceType: 'string',
      deviceVendor: 'string',
      deviceVendorA: 'string',
      deviceVendorB: 'string',
      emergencyDegree: 'string',
      impactBusiness: 'string',
      incidentDescription: 'string',
      incidentSubType: 'string',
      incidentType: 'string',
      instanceId: 'string',
      liableMan: 'string',
      linkMan: 'string',
      originalSubjectAlarm: 'string',
      processLimited: 'string',
      processMan: 'string',
      processManId: 'string',
      skillGroups: 'string',
      workOrderSource: 'string',
      workOrderStep: 'string',
      workOrderTitle: 'string',
      workOrderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkOrderResponseBody extends $tea.Model {
  requestId?: string;
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWorkOrderResponseBody,
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

export class DeleteConfigurationVariateRequest extends $tea.Model {
  configurationVariateId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationVariateId: 'ConfigurationVariateId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationVariateId: 'string',
      instanceId: 'string',
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

export class DeleteDeliveryArchVersionRequest extends $tea.Model {
  deliveryArchVersionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryArchVersionId: 'DeliveryArchVersionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryArchVersionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeliveryArchVersionResponseBody extends $tea.Model {
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

export class DeleteDeliveryArchVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeliveryArchVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeliveryArchVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeliveryProjectRequest extends $tea.Model {
  deliveryProjectId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryProjectId: 'DeliveryProjectId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryProjectId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeliveryProjectResponseBody extends $tea.Model {
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

export class DeleteDeliveryProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeliveryProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeliveryProjectResponseBody,
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

export class DeleteDevicesRequest extends $tea.Model {
  deviceIds?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesShrinkRequest extends $tea.Model {
  deviceIdsShrink?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIdsShrink: 'DeviceIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIdsShrink: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicesResponseBody extends $tea.Model {
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

export class DeleteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventDefinitionRequest extends $tea.Model {
  eventId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventDefinitionResponseBody extends $tea.Model {
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

export class DeleteEventDefinitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInspectionTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
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

export class DeletePhysicalSpaceRequest extends $tea.Model {
  instanceId?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      physicalSpaceId: 'string',
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

export class DeleteWorkOrderRequest extends $tea.Model {
  instanceId?: string;
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      workOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkOrderResponseBody extends $tea.Model {
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

export class DeleteWorkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWorkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNotificationRequest extends $tea.Model {
  expiryTime?: string;
  instanceId?: string;
  list?: DisableNotificationRequestList[];
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      instanceId: 'InstanceId',
      list: 'List',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      instanceId: 'string',
      list: { 'type': 'array', 'itemType': DisableNotificationRequestList },
      reason: 'string',
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

export class DownloadDeviceResourceRequest extends $tea.Model {
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  downloadType?: string;
  instanceId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      downloadType: 'DownloadType',
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      downloadType: 'string',
      instanceId: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDeviceResourceShrinkRequest extends $tea.Model {
  deviceResourceId?: string;
  deviceResourceIdsShrink?: string;
  downloadType?: string;
  instanceId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      downloadType: 'DownloadType',
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      deviceResourceIdsShrink: 'string',
      downloadType: 'string',
      instanceId: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDeviceResourceResponseBody extends $tea.Model {
  downloadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      requestId: 'string',
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

export class EnableNotificationRequest extends $tea.Model {
  instanceId?: string;
  list?: EnableNotificationRequestList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      list: { 'type': 'array', 'itemType': EnableNotificationRequestList },
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

export class GetAlarmStatusRequest extends $tea.Model {
  aggregateDataId?: string;
  appId?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  instanceId?: string;
  monitorItemId?: string;
  portCollectionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      appId: 'AppId',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      monitorItemId: 'MonitorItemId',
      portCollectionId: 'PortCollectionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      appId: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      instanceId: 'string',
      monitorItemId: 'string',
      portCollectionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBody extends $tea.Model {
  alarmStatus?: GetAlarmStatusResponseBodyAlarmStatus;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: GetAlarmStatusResponseBodyAlarmStatus,
      requestId: 'string',
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
  configurationSpecification?: GetConfigurationSpecificationResponseBodyConfigurationSpecification;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationSpecification: 'ConfigurationSpecification',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationSpecification: GetConfigurationSpecificationResponseBodyConfigurationSpecification,
      requestId: 'string',
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

export class GetConfigurationVariateRequest extends $tea.Model {
  configurationVariateId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationVariateId: 'ConfigurationVariateId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationVariateId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationVariateResponseBody extends $tea.Model {
  configurationVariate?: GetConfigurationVariateResponseBodyConfigurationVariate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationVariate: 'ConfigurationVariate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationVariate: GetConfigurationVariateResponseBodyConfigurationVariate,
      requestId: 'string',
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
  dedicatedLine?: GetDedicatedLineResponseBodyDedicatedLine;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLine: 'DedicatedLine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLine: GetDedicatedLineResponseBodyDedicatedLine,
      requestId: 'string',
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

export class GetDeviceConfigRequest extends $tea.Model {
  date?: string;
  deviceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      deviceId: 'string',
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

export class GetDeviceConfigDateRequest extends $tea.Model {
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

export class GetDeviceConfigDateResponseBody extends $tea.Model {
  deviceConfigDate?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceConfigDate: 'DeviceConfigDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceConfigDate: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceConfigDateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceConfigDateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDiffRequest extends $tea.Model {
  deviceId?: string;
  endDate?: string;
  instanceId?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      endDate: 'string',
      instanceId: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigDiffResponseBody extends $tea.Model {
  deviceConfigDiff?: GetDeviceConfigDiffResponseBodyDeviceConfigDiff;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceConfigDiff: 'DeviceConfigDiff',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceConfigDiff: GetDeviceConfigDiffResponseBodyDeviceConfigDiff,
      requestId: 'string',
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
  deviceForm?: GetDeviceFormResponseBodyDeviceForm;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceForm: 'DeviceForm',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceForm: GetDeviceFormResponseBodyDeviceForm,
      requestId: 'string',
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

export class GetDeviceOpLogRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOpLogResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: number;
  operationLogs?: GetDeviceOpLogResponseBodyOperationLogs[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      operationLogs: 'OperationLogs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      operationLogs: { 'type': 'array', 'itemType': GetDeviceOpLogResponseBodyOperationLogs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOpLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceOpLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceOpLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyRequest extends $tea.Model {
  deviceFormId?: string;
  devicePropertyId?: string;
  instanceId?: string;
  propertyKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      devicePropertyId: 'DevicePropertyId',
      instanceId: 'InstanceId',
      propertyKey: 'PropertyKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      devicePropertyId: 'string',
      instanceId: 'string',
      propertyKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyResponseBody extends $tea.Model {
  deviceProperty?: GetDevicePropertyResponseBodyDeviceProperty;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceProperty: 'DeviceProperty',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceProperty: GetDevicePropertyResponseBodyDeviceProperty,
      requestId: 'string',
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

export class GetDeviceResourceRequest extends $tea.Model {
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

export class GetDeviceResourceResponseBody extends $tea.Model {
  deviceResource?: GetDeviceResourceResponseBodyDeviceResource;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceResource: 'DeviceResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResource: GetDeviceResourceResponseBodyDeviceResource,
      requestId: 'string',
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

export class GetInspectionTaskRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  itemName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      itemName: 'ItemName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      itemName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskResponseBody extends $tea.Model {
  inspectionTask?: GetInspectionTaskResponseBodyInspectionTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTask: 'InspectionTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTask: GetInspectionTaskResponseBodyInspectionTask,
      requestId: 'string',
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
  osVersion?: GetOsDownloadPathResponseBodyOsVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      osVersion: 'OsVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osVersion: GetOsDownloadPathResponseBodyOsVersion,
      requestId: 'string',
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
  osVersion?: GetOsVersionResponseBodyOsVersion[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      osVersion: 'OsVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osVersion: { 'type': 'array', 'itemType': GetOsVersionResponseBodyOsVersion },
      requestId: 'string',
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
  ossPolicy?: GetOssPolicyResponseBodyOssPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossPolicy: 'OssPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPolicy: GetOssPolicyResponseBodyOssPolicy,
      requestId: 'string',
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

export class GetPhysicalSpaceRequest extends $tea.Model {
  instanceId?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceResponseBody extends $tea.Model {
  physicalSpace?: GetPhysicalSpaceResponseBodyPhysicalSpace;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalSpace: 'PhysicalSpace',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalSpace: GetPhysicalSpaceResponseBodyPhysicalSpace,
      requestId: 'string',
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

export class GetPhysicalSpaceTopoRequest extends $tea.Model {
  instanceId?: string;
  physicalSpaceId?: string;
  topoType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      physicalSpaceId: 'PhysicalSpaceId',
      topoType: 'TopoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      physicalSpaceId: 'string',
      topoType: 'string',
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

export class GetRealtimeTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeTaskResponseBody extends $tea.Model {
  inspectionTask?: GetRealtimeTaskResponseBodyInspectionTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTask: 'InspectionTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTask: GetRealtimeTaskResponseBodyInspectionTask,
      requestId: 'string',
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

export class GetSpaceModelInstanceRequest extends $tea.Model {
  instanceId?: string;
  operateType?: string;
  spaceId?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operateType: 'OperateType',
      spaceId: 'SpaceId',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operateType: 'string',
      spaceId: 'string',
      spaceType: 'string',
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

export class GetSpaceModelSortRequest extends $tea.Model {
  instanceId?: string;
  operateType?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operateType: 'OperateType',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operateType: 'string',
      spaceType: 'string',
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

export class GetTaskRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  requestId?: string;
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkOrderRequest extends $tea.Model {
  instanceId?: string;
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      workOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkOrderResponseBody extends $tea.Model {
  content?: GetWorkOrderResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetWorkOrderResponseBodyContent,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWorkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusRequest extends $tea.Model {
  aggregateDataName?: string;
  city?: string;
  country?: string;
  dedicatedLineName?: string;
  deviceForm?: string;
  deviceId?: string;
  domain?: string;
  hostName?: string;
  instanceId?: string;
  manufacturer?: string;
  maxResults?: number;
  model?: string;
  monitorItemId?: string;
  nextToken?: string;
  physicalSpaceId?: string;
  portCollectionId?: string;
  portCollectionName?: string;
  province?: string;
  region?: string;
  role?: string;
  securityDomain?: string;
  serviceStatus?: string;
  space?: string;
  spaceType?: string;
  status?: string;
  type?: string;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataName: 'AggregateDataName',
      city: 'City',
      country: 'Country',
      dedicatedLineName: 'DedicatedLineName',
      deviceForm: 'DeviceForm',
      deviceId: 'DeviceId',
      domain: 'Domain',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      manufacturer: 'Manufacturer',
      maxResults: 'MaxResults',
      model: 'Model',
      monitorItemId: 'MonitorItemId',
      nextToken: 'NextToken',
      physicalSpaceId: 'PhysicalSpaceId',
      portCollectionId: 'PortCollectionId',
      portCollectionName: 'PortCollectionName',
      province: 'Province',
      region: 'Region',
      role: 'Role',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      space: 'Space',
      spaceType: 'SpaceType',
      status: 'Status',
      type: 'Type',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataName: 'string',
      city: 'string',
      country: 'string',
      dedicatedLineName: 'string',
      deviceForm: 'string',
      deviceId: 'string',
      domain: 'string',
      hostName: 'string',
      instanceId: 'string',
      manufacturer: 'string',
      maxResults: 'number',
      model: 'string',
      monitorItemId: 'string',
      nextToken: 'string',
      physicalSpaceId: 'string',
      portCollectionId: 'string',
      portCollectionName: 'string',
      province: 'string',
      region: 'string',
      role: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      space: 'string',
      spaceType: 'string',
      status: 'string',
      type: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBody extends $tea.Model {
  alarmStatus?: ListAlarmStatusResponseBodyAlarmStatus[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  statistics?: ListAlarmStatusResponseBodyStatistics[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: { 'type': 'array', 'itemType': ListAlarmStatusResponseBodyAlarmStatus },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': ListAlarmStatusResponseBodyStatistics },
      totalCount: 'number',
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

export class ListAlarmStatusHistoriesRequest extends $tea.Model {
  aggregateDataId?: string;
  appId?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  end?: number;
  instanceId?: string;
  monitorItemId?: string;
  portCollectionId?: string;
  start?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      appId: 'AppId',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      end: 'End',
      instanceId: 'InstanceId',
      monitorItemId: 'MonitorItemId',
      portCollectionId: 'PortCollectionId',
      start: 'Start',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      appId: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      end: 'number',
      instanceId: 'string',
      monitorItemId: 'string',
      portCollectionId: 'string',
      start: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusHistoriesResponseBody extends $tea.Model {
  alarmStatusHistories?: ListAlarmStatusHistoriesResponseBodyAlarmStatusHistories[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatusHistories: 'AlarmStatusHistories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatusHistories: { 'type': 'array', 'itemType': ListAlarmStatusHistoriesResponseBodyAlarmStatusHistories },
      requestId: 'string',
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

export class ListAlarmStatusStatisticsRequest extends $tea.Model {
  alarmStatus?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  physicalSpaceId?: string;
  securityDomain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      physicalSpaceId: 'PhysicalSpaceId',
      securityDomain: 'SecurityDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      physicalSpaceId: 'string',
      securityDomain: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusStatisticsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  statistics?: ListAlarmStatusStatisticsResponseBodyStatistics[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': ListAlarmStatusStatisticsResponseBodyStatistics },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlarmStatusStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlarmStatusStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeRequest extends $tea.Model {
  architectureId?: string;
  instanceId?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architectureId: 'ArchitectureId',
      instanceId: 'InstanceId',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureId: 'string',
      instanceId: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeResponseBody extends $tea.Model {
  architecture?: ListArchitectureAttributeResponseBodyArchitecture[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: { 'type': 'array', 'itemType': ListArchitectureAttributeResponseBodyArchitecture },
      requestId: 'string',
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

export class ListConfigurationSpecificationsRequest extends $tea.Model {
  architecture?: string;
  instanceId?: string;
  maxResults?: number;
  model?: string;
  nextToken?: string;
  role?: string;
  specificationName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      role: 'Role',
      specificationName: 'SpecificationName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      instanceId: 'string',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      role: 'string',
      specificationName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationSpecificationsResponseBody extends $tea.Model {
  configurationSpecification?: ListConfigurationSpecificationsResponseBodyConfigurationSpecification[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configurationSpecification: 'ConfigurationSpecification',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationSpecification: { 'type': 'array', 'itemType': ListConfigurationSpecificationsResponseBodyConfigurationSpecification },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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
  configurationVariate?: ListConfigurationVariateResponseBodyConfigurationVariate[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configurationVariate: 'ConfigurationVariate',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationVariate: { 'type': 'array', 'itemType': ListConfigurationVariateResponseBodyConfigurationVariate },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListConnectionPoliciesRequest extends $tea.Model {
  architectureIterationId?: string;
  connectionPolicyId?: string;
  downlinkArchitectureDeviceId?: string;
  downlinkArchitectureModuleId?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  uplinkArchitectureDeviceId?: string;
  uplinkArchitectureModuleId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureIterationId: 'ArchitectureIterationId',
      connectionPolicyId: 'ConnectionPolicyId',
      downlinkArchitectureDeviceId: 'DownlinkArchitectureDeviceId',
      downlinkArchitectureModuleId: 'DownlinkArchitectureModuleId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      uplinkArchitectureDeviceId: 'UplinkArchitectureDeviceId',
      uplinkArchitectureModuleId: 'UplinkArchitectureModuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureIterationId: 'string',
      connectionPolicyId: 'string',
      downlinkArchitectureDeviceId: 'string',
      downlinkArchitectureModuleId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      uplinkArchitectureDeviceId: 'string',
      uplinkArchitectureModuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoliciesResponseBody extends $tea.Model {
  connectionPolicy?: ListConnectionPoliciesResponseBodyConnectionPolicy[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      connectionPolicy: 'ConnectionPolicy',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPolicy: { 'type': 'array', 'itemType': ListConnectionPoliciesResponseBodyConnectionPolicy },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListDedicatedLinesRequest extends $tea.Model {
  instanceId?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      physicalSpaceId: 'string',
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

export class ListDeviceFormsResponseBody extends $tea.Model {
  deviceForms?: ListDeviceFormsResponseBodyDeviceForms[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceForms: 'DeviceForms',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceForms: { 'type': 'array', 'itemType': ListDeviceFormsResponseBodyDeviceForms },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListDevicePropertiesRequest extends $tea.Model {
  deviceFormId?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePropertiesResponseBody extends $tea.Model {
  deviceProperties?: ListDevicePropertiesResponseBodyDeviceProperties[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceProperties: 'DeviceProperties',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceProperties: { 'type': 'array', 'itemType': ListDevicePropertiesResponseBodyDeviceProperties },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListDeviceResourcesRequest extends $tea.Model {
  businessType?: string;
  instanceId?: string;
  listType?: string;
  maxResults?: number;
  nextToken?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      instanceId: 'InstanceId',
      listType: 'ListType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      instanceId: 'string',
      listType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResourcesResponseBody extends $tea.Model {
  deviceResource?: ListDeviceResourcesResponseBodyDeviceResource[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceResource: 'DeviceResource',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResource: { 'type': 'array', 'itemType': ListDeviceResourcesResponseBodyDeviceResource },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListDeviceValuesRequest extends $tea.Model {
  attributeGroup?: string;
  attributeKeyword?: string;
  deviceFormId?: string;
  deviceFormName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeGroup: 'AttributeGroup',
      attributeKeyword: 'AttributeKeyword',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeGroup: 'string',
      attributeKeyword: 'string',
      deviceFormId: 'string',
      deviceFormName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceValuesResponseBody extends $tea.Model {
  deviceValues?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceValues: 'DeviceValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceValues: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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

export class ListDevicesRequest extends $tea.Model {
  deviceFormId?: string;
  deviceFormName?: string;
  deviceIds?: string[];
  extAttributes?: string;
  hostName?: string[];
  instanceId?: string;
  ip?: string[];
  keyword?: string;
  mac?: string[];
  maxResults?: number;
  model?: string[];
  nextToken?: string;
  physicalSpaceId?: string;
  physicalSpaceIds?: string[];
  securityDomain?: string[];
  serviceStatus?: string[];
  sn?: string[];
  vendor?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      deviceIds: 'DeviceIds',
      extAttributes: 'ExtAttributes',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      keyword: 'Keyword',
      mac: 'Mac',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceIds: 'PhysicalSpaceIds',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      deviceFormName: 'string',
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      extAttributes: 'string',
      hostName: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      mac: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      model: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      physicalSpaceId: 'string',
      physicalSpaceIds: { 'type': 'array', 'itemType': 'string' },
      securityDomain: { 'type': 'array', 'itemType': 'string' },
      serviceStatus: { 'type': 'array', 'itemType': 'string' },
      sn: { 'type': 'array', 'itemType': 'string' },
      vendor: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesShrinkRequest extends $tea.Model {
  deviceFormId?: string;
  deviceFormName?: string;
  deviceIdsShrink?: string;
  extAttributes?: string;
  hostName?: string[];
  instanceId?: string;
  ip?: string[];
  keyword?: string;
  mac?: string[];
  maxResults?: number;
  model?: string[];
  nextToken?: string;
  physicalSpaceId?: string;
  physicalSpaceIdsShrink?: string;
  securityDomain?: string[];
  serviceStatus?: string[];
  sn?: string[];
  vendor?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      deviceIdsShrink: 'DeviceIds',
      extAttributes: 'ExtAttributes',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      keyword: 'Keyword',
      mac: 'Mac',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceIdsShrink: 'PhysicalSpaceIds',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      deviceFormName: 'string',
      deviceIdsShrink: 'string',
      extAttributes: 'string',
      hostName: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ip: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      mac: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      model: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      physicalSpaceId: 'string',
      physicalSpaceIdsShrink: 'string',
      securityDomain: { 'type': 'array', 'itemType': 'string' },
      serviceStatus: { 'type': 'array', 'itemType': 'string' },
      sn: { 'type': 'array', 'itemType': 'string' },
      vendor: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  amountUsed?: number;
  devices?: ListDevicesResponseBodyDevices[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      amountUsed: 'AmountUsed',
      devices: 'Devices',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountUsed: 'number',
      devices: { 'type': 'array', 'itemType': ListDevicesResponseBodyDevices },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListEventDefinitionsRequest extends $tea.Model {
  eventId?: string;
  eventName?: string;
  eventType?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventName: 'EventName',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventName: 'string',
      eventType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventDefinitionsResponseBody extends $tea.Model {
  eventDefinitions?: EventDefinition[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventDefinitions: 'EventDefinitions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDefinitions: { 'type': 'array', 'itemType': EventDefinition },
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

export class ListEventDefinitionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventDefinitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventDefinitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsRequest extends $tea.Model {
  deviceId?: string;
  eventType?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      eventType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBody extends $tea.Model {
  events?: Event[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  statistics?: ListEventsResponseBodyStatistics[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': Event },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': ListEventsResponseBodyStatistics },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesRequest extends $tea.Model {
  instanceId?: string;
  model?: string[];
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      model: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      model: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesShrinkRequest extends $tea.Model {
  instanceId?: string;
  modelShrink?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modelShrink: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modelShrink: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionDevicesResponseBody extends $tea.Model {
  inspectionScripts?: ListInspectionDevicesResponseBodyInspectionScripts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionScripts: 'InspectionScripts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionScripts: { 'type': 'array', 'itemType': ListInspectionDevicesResponseBodyInspectionScripts },
      requestId: 'string',
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

export class ListInspectionTaskReportsRequest extends $tea.Model {
  inspectionItemId?: string;
  instanceId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionItemId: 'InspectionItemId',
      instanceId: 'InstanceId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionItemId: 'string',
      instanceId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponseBody extends $tea.Model {
  inspectionTask?: ListInspectionTaskReportsResponseBodyInspectionTask[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTask: 'InspectionTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTask: { 'type': 'array', 'itemType': ListInspectionTaskReportsResponseBodyInspectionTask },
      requestId: 'string',
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

export class ListInspectionTasksRequest extends $tea.Model {
  alarmStatus?: string[];
  deviceType?: string;
  hostName?: string;
  IP?: string;
  instanceId?: string;
  itemId?: string;
  maxResults?: number;
  model?: string;
  nextToken?: string;
  role?: string;
  space?: string;
  taskStatus?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      deviceType: 'DeviceType',
      hostName: 'HostName',
      IP: 'IP',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      role: 'Role',
      space: 'Space',
      taskStatus: 'TaskStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: { 'type': 'array', 'itemType': 'string' },
      deviceType: 'string',
      hostName: 'string',
      IP: 'string',
      instanceId: 'string',
      itemId: 'string',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      role: 'string',
      space: 'string',
      taskStatus: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksShrinkRequest extends $tea.Model {
  alarmStatusShrink?: string;
  deviceType?: string;
  hostName?: string;
  IP?: string;
  instanceId?: string;
  itemId?: string;
  maxResults?: number;
  model?: string;
  nextToken?: string;
  role?: string;
  space?: string;
  taskStatus?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatusShrink: 'AlarmStatus',
      deviceType: 'DeviceType',
      hostName: 'HostName',
      IP: 'IP',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      role: 'Role',
      space: 'Space',
      taskStatus: 'TaskStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatusShrink: 'string',
      deviceType: 'string',
      hostName: 'string',
      IP: 'string',
      instanceId: 'string',
      itemId: 'string',
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      role: 'string',
      space: 'string',
      taskStatus: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponseBody extends $tea.Model {
  inspectionTasks?: ListInspectionTasksResponseBodyInspectionTasks[];
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionTasks: 'InspectionTasks',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTasks: { 'type': 'array', 'itemType': ListInspectionTasksResponseBodyInspectionTasks },
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
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

export class ListIpBlocksRequest extends $tea.Model {
  category?: string;
  instanceId?: string;
  ip?: string;
  ipBlockCode?: string;
  maxResults?: number;
  netBusiness?: string;
  netType?: string;
  nextToken?: string;
  status?: string;
  subNetBusiness?: string;
  topParent?: boolean;
  treeType?: boolean;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipBlockCode: 'IpBlockCode',
      maxResults: 'MaxResults',
      netBusiness: 'NetBusiness',
      netType: 'NetType',
      nextToken: 'NextToken',
      status: 'Status',
      subNetBusiness: 'SubNetBusiness',
      topParent: 'TopParent',
      treeType: 'TreeType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      ip: 'string',
      ipBlockCode: 'string',
      maxResults: 'number',
      netBusiness: 'string',
      netType: 'string',
      nextToken: 'string',
      status: 'string',
      subNetBusiness: 'string',
      topParent: 'boolean',
      treeType: 'boolean',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksResponseBody extends $tea.Model {
  ipBlock?: ListIpBlocksResponseBodyIpBlock[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipBlock: 'IpBlock',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipBlock: { 'type': 'array', 'itemType': ListIpBlocksResponseBodyIpBlock },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListLinksRequest extends $tea.Model {
  deviceNameA?: string;
  deviceNameB?: string;
  ipA?: string;
  ipB?: string;
  linkName?: string;
  linkNo?: string;
  linkStatus?: string;
  linkType?: string;
  maxResults?: number;
  nextToken?: string;
  portA?: string;
  portB?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNameA: 'DeviceNameA',
      deviceNameB: 'DeviceNameB',
      ipA: 'IpA',
      ipB: 'IpB',
      linkName: 'LinkName',
      linkNo: 'LinkNo',
      linkStatus: 'LinkStatus',
      linkType: 'LinkType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      portA: 'PortA',
      portB: 'PortB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNameA: 'string',
      deviceNameB: 'string',
      ipA: 'string',
      ipB: 'string',
      linkName: 'string',
      linkNo: 'string',
      linkStatus: 'string',
      linkType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      portA: 'string',
      portB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLinksResponseBody extends $tea.Model {
  content?: ListLinksResponseBodyContent[];
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListLinksResponseBodyContent },
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLinksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLinksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsRequest extends $tea.Model {
  content?: string;
  end?: number;
  instanceId?: string;
  logType?: string;
  maxResults?: number;
  nextToken?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      end: 'End',
      instanceId: 'InstanceId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      end: 'number',
      instanceId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBody extends $tea.Model {
  logs?: ListLogsResponseBodyLogs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListLogsResponseBodyLogs },
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

export class ListLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataRequest extends $tea.Model {
  aggregateDataId?: string;
  appId?: string;
  dataItem?: string;
  dataType?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  end?: number;
  instanceId?: string;
  key?: string;
  monitorItemId?: string;
  portCollectionId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      appId: 'AppId',
      dataItem: 'DataItem',
      dataType: 'DataType',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      end: 'End',
      instanceId: 'InstanceId',
      key: 'Key',
      monitorItemId: 'MonitorItemId',
      portCollectionId: 'PortCollectionId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      appId: 'string',
      dataItem: 'string',
      dataType: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      end: 'number',
      instanceId: 'string',
      key: 'string',
      monitorItemId: 'string',
      portCollectionId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataResponseBody extends $tea.Model {
  monitorData?: ListMonitorDataResponseBodyMonitorData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: { 'type': 'array', 'itemType': ListMonitorDataResponseBodyMonitorData },
      requestId: 'string',
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

export class ListNotificationHistoriesRequest extends $tea.Model {
  aggregateDataId?: string;
  alarmStatus?: string;
  appId?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  end?: number;
  instanceId?: string;
  maxResults?: number;
  message?: string;
  monitorItemId?: string;
  nextToken?: string;
  notificationGroupId?: string;
  notificationMode?: string;
  physicalSpaceId?: string;
  portCollectionId?: string;
  start?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      alarmStatus: 'AlarmStatus',
      appId: 'AppId',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      end: 'End',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      message: 'Message',
      monitorItemId: 'MonitorItemId',
      nextToken: 'NextToken',
      notificationGroupId: 'NotificationGroupId',
      notificationMode: 'NotificationMode',
      physicalSpaceId: 'PhysicalSpaceId',
      portCollectionId: 'PortCollectionId',
      start: 'Start',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      alarmStatus: 'string',
      appId: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      end: 'number',
      instanceId: 'string',
      maxResults: 'number',
      message: 'string',
      monitorItemId: 'string',
      nextToken: 'string',
      notificationGroupId: 'string',
      notificationMode: 'string',
      physicalSpaceId: 'string',
      portCollectionId: 'string',
      start: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationHistoriesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  notificationHistories?: ListNotificationHistoriesResponseBodyNotificationHistories[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      notificationHistories: 'NotificationHistories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      notificationHistories: { 'type': 'array', 'itemType': ListNotificationHistoriesResponseBodyNotificationHistories },
      requestId: 'string',
      totalCount: 'number',
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
  maxResults?: number;
  nextToken?: number;
  osVersion?: ListOsVersionsResponseBodyOsVersion[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osVersion: 'OsVersion',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      osVersion: { 'type': 'array', 'itemType': ListOsVersionsResponseBodyOsVersion },
      requestId: 'string',
      totalCount: 'number',
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

export class ListPhysicalSpacesRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  physicalSpaceIds?: string[];
  physicalSpaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      physicalSpaceIds: 'PhysicalSpaceIds',
      physicalSpaceName: 'PhysicalSpaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      physicalSpaceIds: { 'type': 'array', 'itemType': 'string' },
      physicalSpaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalSpacesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: number;
  physicalSpaces?: ListPhysicalSpacesResponseBodyPhysicalSpaces[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      physicalSpaces: 'PhysicalSpaces',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      physicalSpaces: { 'type': 'array', 'itemType': ListPhysicalSpacesResponseBodyPhysicalSpaces },
      requestId: 'string',
      totalCount: 'number',
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

export class ListRegionsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ListResourceInformationsRequest extends $tea.Model {
  architectureId?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      architectureId: 'ArchitectureId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  resourceInformation?: ListResourceInformationsResponseBodyResourceInformation[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceInformation: 'ResourceInformation',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      resourceInformation: { 'type': 'array', 'itemType': ListResourceInformationsResponseBodyResourceInformation },
      totalCount: 'number',
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

export class ListSetupProjectsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  spaceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      spaceId: 'SpaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      spaceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  setupProject?: ListSetupProjectsResponseBodySetupProject[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      setupProject: 'SetupProject',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      setupProject: { 'type': 'array', 'itemType': ListSetupProjectsResponseBodySetupProject },
      totalCount: 'number',
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  spaceModel?: ListSpaceModelsResponseBodySpaceModel[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      spaceModel: 'SpaceModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      spaceModel: { 'type': 'array', 'itemType': ListSpaceModelsResponseBodySpaceModel },
      totalCount: 'number',
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

export class ListTasksHistoriesRequest extends $tea.Model {
  deviceId?: string;
  instanceId?: string;
  itemId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      itemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponseBody extends $tea.Model {
  inspectionTasks?: ListTasksHistoriesResponseBodyInspectionTasks[];
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionTasks: 'InspectionTasks',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTasks: { 'type': 'array', 'itemType': ListTasksHistoriesResponseBodyInspectionTasks },
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListWorkOrdersRequest extends $tea.Model {
  deviceSnA?: string;
  instanceId?: string;
  maxResults?: string;
  nextToken?: string;
  workOrderSource?: string;
  workOrderStep?: string;
  workOrderTitle?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSnA: 'DeviceSnA',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      workOrderSource: 'WorkOrderSource',
      workOrderStep: 'WorkOrderStep',
      workOrderTitle: 'WorkOrderTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSnA: 'string',
      instanceId: 'string',
      maxResults: 'string',
      nextToken: 'string',
      workOrderSource: 'string',
      workOrderStep: 'string',
      workOrderTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkOrdersResponseBody extends $tea.Model {
  content?: ListWorkOrdersResponseBodyContent[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListWorkOrdersResponseBodyContent },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWorkOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWorkOrdersResponseBody,
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

export class ReleaseIPRequest extends $tea.Model {
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  instanceId?: string;
  ipType?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      instanceId: 'InstanceId',
      ipType: 'IpType',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      ipType: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseIPShrinkRequest extends $tea.Model {
  deviceResourceId?: string;
  deviceResourceIdsShrink?: string;
  instanceId?: string;
  ipType?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      instanceId: 'InstanceId',
      ipType: 'IpType',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceResourceId: 'string',
      deviceResourceIdsShrink: 'string',
      instanceId: 'string',
      ipType: 'string',
      setupProjectId: 'string',
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

export class RemarkWorkOrderRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  operator?: string;
  remark?: string;
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      operator: 'Operator',
      remark: 'Remark',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      operator: 'string',
      remark: 'string',
      workOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemarkWorkOrderResponseBody extends $tea.Model {
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

export class RemarkWorkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemarkWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemarkWorkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksRequest extends $tea.Model {
  instanceId?: string;
  retryTasks?: RetryTasksRequestRetryTasks[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      retryTasks: 'RetryTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      retryTasks: { 'type': 'array', 'itemType': RetryTasksRequestRetryTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksShrinkRequest extends $tea.Model {
  instanceId?: string;
  retryTasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      retryTasksShrink: 'RetryTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      retryTasksShrink: 'string',
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

export class UpdateConfigurationSpecificationRequest extends $tea.Model {
  architecture?: string;
  configurationSpecificationId?: string;
  instanceId?: string;
  model?: string;
  relatedVariate?: Buffer[];
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      instanceId: 'InstanceId',
      model: 'Model',
      relatedVariate: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      configurationSpecificationId: 'string',
      instanceId: 'string',
      model: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'Buffer' },
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationSpecificationShrinkRequest extends $tea.Model {
  architecture?: string;
  configurationSpecificationId?: string;
  instanceId?: string;
  model?: string;
  relatedVariateShrink?: string;
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      instanceId: 'InstanceId',
      model: 'Model',
      relatedVariateShrink: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      configurationSpecificationId: 'string',
      instanceId: 'string',
      model: 'string',
      relatedVariateShrink: 'string',
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      vendor: 'string',
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

export class UpdateConfigurationVariateRequest extends $tea.Model {
  comment?: string;
  configurationVariateId?: string;
  formatFunction?: string;
  instanceId?: string;
  variateName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      configurationVariateId: 'ConfigurationVariateId',
      formatFunction: 'FormatFunction',
      instanceId: 'InstanceId',
      variateName: 'VariateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      configurationVariateId: 'string',
      formatFunction: 'string',
      instanceId: 'string',
      variateName: 'string',
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

export class UpdateDedicatedLineRequest extends $tea.Model {
  bandwidth?: number;
  contact?: string;
  dedicatedLineGateway?: string;
  dedicatedLineId?: string;
  dedicatedLineIp?: string;
  dedicatedLineRole?: string;
  description?: string;
  deviceId?: string;
  devicePort?: string;
  instanceId?: string;
  isp?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      contact: 'Contact',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineId: 'DedicatedLineId',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineRole: 'DedicatedLineRole',
      description: 'Description',
      deviceId: 'DeviceId',
      devicePort: 'DevicePort',
      instanceId: 'InstanceId',
      isp: 'Isp',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      contact: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineId: 'string',
      dedicatedLineIp: 'string',
      dedicatedLineRole: 'string',
      description: 'string',
      deviceId: 'string',
      devicePort: 'string',
      instanceId: 'string',
      isp: 'string',
      phone: 'string',
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

export class UpdateDeviceRequest extends $tea.Model {
  deviceId?: string;
  enablePassword?: string;
  extAttributes?: string;
  hostName?: string;
  instanceId?: string;
  ip?: string;
  loginPassword?: string;
  loginType?: string;
  loginUsername?: string;
  mac?: string;
  model?: string;
  physicalSpaceId?: string;
  securityDomain?: string;
  serviceStatus?: string;
  sn?: string;
  snmpAccountType?: string;
  snmpAccountVersion?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpCommunity?: string;
  snmpPrivacyPassphrase?: string;
  snmpPrivacyProtocol?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      enablePassword: 'EnablePassword',
      extAttributes: 'ExtAttributes',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      loginPassword: 'LoginPassword',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      mac: 'Mac',
      model: 'Model',
      physicalSpaceId: 'PhysicalSpaceId',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      snmpAccountType: 'SnmpAccountType',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpCommunity: 'SnmpCommunity',
      snmpPrivacyPassphrase: 'SnmpPrivacyPassphrase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      enablePassword: 'string',
      extAttributes: 'string',
      hostName: 'string',
      instanceId: 'string',
      ip: 'string',
      loginPassword: 'string',
      loginType: 'string',
      loginUsername: 'string',
      mac: 'string',
      model: 'string',
      physicalSpaceId: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      sn: 'string',
      snmpAccountType: 'string',
      snmpAccountVersion: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpCommunity: 'string',
      snmpPrivacyPassphrase: 'string',
      snmpPrivacyProtocol: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      vendor: 'string',
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

export class UpdateDeviceFormRequest extends $tea.Model {
  accountConfig?: boolean;
  attributeList?: UpdateDeviceFormRequestAttributeList[];
  configCompare?: boolean;
  detailDisplay?: boolean;
  deviceFormId?: string;
  instanceId?: string;
  relatedDeviceFormId?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      accountConfig: 'AccountConfig',
      attributeList: 'AttributeList',
      configCompare: 'ConfigCompare',
      detailDisplay: 'DetailDisplay',
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
      relatedDeviceFormId: 'RelatedDeviceFormId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountConfig: 'boolean',
      attributeList: { 'type': 'array', 'itemType': UpdateDeviceFormRequestAttributeList },
      configCompare: 'boolean',
      detailDisplay: 'boolean',
      deviceFormId: 'string',
      instanceId: 'string',
      relatedDeviceFormId: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceFormShrinkRequest extends $tea.Model {
  accountConfig?: boolean;
  attributeListShrink?: string;
  configCompare?: boolean;
  detailDisplay?: boolean;
  deviceFormId?: string;
  instanceId?: string;
  relatedDeviceFormId?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      accountConfig: 'AccountConfig',
      attributeListShrink: 'AttributeList',
      configCompare: 'ConfigCompare',
      detailDisplay: 'DetailDisplay',
      deviceFormId: 'DeviceFormId',
      instanceId: 'InstanceId',
      relatedDeviceFormId: 'RelatedDeviceFormId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountConfig: 'boolean',
      attributeListShrink: 'string',
      configCompare: 'boolean',
      detailDisplay: 'boolean',
      deviceFormId: 'string',
      instanceId: 'string',
      relatedDeviceFormId: 'string',
      script: 'string',
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

export class UpdateDevicePropertyRequest extends $tea.Model {
  devicePropertyId?: string;
  instanceId?: string;
  propertyContent?: string;
  propertyFormat?: string;
  propertyName?: string;
  static names(): { [key: string]: string } {
    return {
      devicePropertyId: 'DevicePropertyId',
      instanceId: 'InstanceId',
      propertyContent: 'PropertyContent',
      propertyFormat: 'PropertyFormat',
      propertyName: 'PropertyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicePropertyId: 'string',
      instanceId: 'string',
      propertyContent: 'string',
      propertyFormat: 'string',
      propertyName: 'string',
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

export class UpdateDeviceResourceRequest extends $tea.Model {
  data?: string;
  deviceResourceId?: string;
  deviceResourceIds?: string[];
  instanceId?: string;
  setupProjectId?: string;
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIds: 'DeviceResourceIds',
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      deviceResourceId: 'string',
      deviceResourceIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      setupProjectId: 'string',
      updateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResourceShrinkRequest extends $tea.Model {
  data?: string;
  deviceResourceId?: string;
  deviceResourceIdsShrink?: string;
  instanceId?: string;
  setupProjectId?: string;
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      deviceResourceId: 'DeviceResourceId',
      deviceResourceIdsShrink: 'DeviceResourceIds',
      instanceId: 'InstanceId',
      setupProjectId: 'SetupProjectId',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      deviceResourceId: 'string',
      deviceResourceIdsShrink: 'string',
      instanceId: 'string',
      setupProjectId: 'string',
      updateType: 'string',
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

export class UpdateDevicesRequest extends $tea.Model {
  deviceIds?: string[];
  enablePassword?: string;
  instanceId?: string;
  loginPassword?: string;
  loginType?: string;
  loginUsername?: string;
  model?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  serviceStatus?: string;
  snmpAccountType?: string;
  snmpAccountVersion?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpCommunity?: string;
  snmpPrivacyPassphrase?: string;
  snmpPrivacyProtocol?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      enablePassword: 'EnablePassword',
      instanceId: 'InstanceId',
      loginPassword: 'LoginPassword',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      model: 'Model',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      serviceStatus: 'ServiceStatus',
      snmpAccountType: 'SnmpAccountType',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpCommunity: 'SnmpCommunity',
      snmpPrivacyPassphrase: 'SnmpPrivacyPassphrase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: { 'type': 'array', 'itemType': 'string' },
      enablePassword: 'string',
      instanceId: 'string',
      loginPassword: 'string',
      loginType: 'string',
      loginUsername: 'string',
      model: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      serviceStatus: 'string',
      snmpAccountType: 'string',
      snmpAccountVersion: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpCommunity: 'string',
      snmpPrivacyPassphrase: 'string',
      snmpPrivacyProtocol: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      vendor: 'string',
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

export class UpdateEventDefinitionRequest extends $tea.Model {
  eventId?: string;
  eventName?: string;
  eventType?: string;
  instanceId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventName: 'EventName',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventName: 'string',
      eventType: 'string',
      instanceId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventDefinitionResponseBody extends $tea.Model {
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

export class UpdateEventDefinitionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEventDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEventDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInformationKeyActionRequest extends $tea.Model {
  instanceId?: string;
  key?: string;
  keyAction?: string;
  resourceInformationId?: string;
  setupProjectId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      key: 'Key',
      keyAction: 'KeyAction',
      resourceInformationId: 'ResourceInformationId',
      setupProjectId: 'SetupProjectId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      key: 'string',
      keyAction: 'string',
      resourceInformationId: 'string',
      setupProjectId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInformationKeyActionResponseBody extends $tea.Model {
  actionMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionMessage: 'ActionMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionMessage: 'string',
      requestId: 'string',
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

export class UpdateInstanceRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
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

export class UpdateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRequest extends $tea.Model {
  fileName?: string;
  filePath?: string;
  instanceId?: string;
  model?: string;
  osVersion?: string;
  osVersionId?: string;
  status?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      model: 'Model',
      osVersion: 'OsVersion',
      osVersionId: 'OsVersionId',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePath: 'string',
      instanceId: 'string',
      model: 'string',
      osVersion: 'string',
      osVersionId: 'string',
      status: 'string',
      vendor: 'string',
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

export class UpdatePhysicalSpaceRequest extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  instanceId?: string;
  owner?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  province?: string;
  remark?: string;
  spaceAbbreviation?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      instanceId: 'InstanceId',
      owner: 'Owner',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      province: 'Province',
      remark: 'Remark',
      spaceAbbreviation: 'SpaceAbbreviation',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      instanceId: 'string',
      owner: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      province: 'string',
      remark: 'string',
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

export class UpdateProjectProgressRequest extends $tea.Model {
  instanceId?: string;
  progress?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      progress: 'Progress',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      progress: 'string',
      setupProjectId: 'string',
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

export class UpdateResourceInformationRequest extends $tea.Model {
  information?: UpdateResourceInformationRequestInformation[];
  instanceId?: string;
  resourceAttribute?: string;
  resourceInformationId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      information: 'Information',
      instanceId: 'InstanceId',
      resourceAttribute: 'ResourceAttribute',
      resourceInformationId: 'ResourceInformationId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      information: { 'type': 'array', 'itemType': UpdateResourceInformationRequestInformation },
      instanceId: 'string',
      resourceAttribute: 'string',
      resourceInformationId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInformationShrinkRequest extends $tea.Model {
  informationShrink?: string;
  instanceId?: string;
  resourceAttribute?: string;
  resourceInformationId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      informationShrink: 'Information',
      instanceId: 'InstanceId',
      resourceAttribute: 'ResourceAttribute',
      resourceInformationId: 'ResourceInformationId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      informationShrink: 'string',
      instanceId: 'string',
      resourceAttribute: 'string',
      resourceInformationId: 'string',
      resourceType: 'string',
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

export class UpdateResourceInstanceRequest extends $tea.Model {
  instanceId?: string;
  resourceInformation?: UpdateResourceInstanceRequestResourceInformation[];
  resourceInformationId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformation: 'ResourceInformation',
      resourceInformationId: 'ResourceInformationId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformation: { 'type': 'array', 'itemType': UpdateResourceInstanceRequestResourceInformation },
      resourceInformationId: 'string',
      setupProjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceShrinkRequest extends $tea.Model {
  instanceId?: string;
  resourceInformationShrink?: string;
  resourceInformationId?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceInformationShrink: 'ResourceInformation',
      resourceInformationId: 'ResourceInformationId',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceInformationShrink: 'string',
      resourceInformationId: 'string',
      setupProjectId: 'string',
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

export class UpdateSetupProjectRequest extends $tea.Model {
  architectureId?: string;
  deliveryTime?: string;
  description?: string;
  instanceId?: string;
  nodes?: string;
  packages?: UpdateSetupProjectRequestPackages[];
  setupProjectId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureId: 'ArchitectureId',
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      instanceId: 'InstanceId',
      nodes: 'Nodes',
      packages: 'Packages',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureId: 'string',
      deliveryTime: 'string',
      description: 'string',
      instanceId: 'string',
      nodes: 'string',
      packages: { 'type': 'array', 'itemType': UpdateSetupProjectRequestPackages },
      setupProjectId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectShrinkRequest extends $tea.Model {
  architectureId?: string;
  deliveryTime?: string;
  description?: string;
  instanceId?: string;
  nodes?: string;
  packagesShrink?: string;
  setupProjectId?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureId: 'ArchitectureId',
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      instanceId: 'InstanceId',
      nodes: 'Nodes',
      packagesShrink: 'Packages',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureId: 'string',
      deliveryTime: 'string',
      description: 'string',
      instanceId: 'string',
      nodes: 'string',
      packagesShrink: 'string',
      setupProjectId: 'string',
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSetupProjectResponseBody extends $tea.Model {
  requestId?: string;
  setupProjectId?: string;
  setupProjectName?: string;
  setupProjectSpecification?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      setupProjectId: 'SetupProjectId',
      setupProjectName: 'SetupProjectName',
      setupProjectSpecification: 'SetupProjectSpecification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      setupProjectId: 'string',
      setupProjectName: 'string',
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
  sort?: UpdateSpaceModelRequestSort[];
  spaceModelId?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sort: 'Sort',
      spaceModelId: 'SpaceModelId',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sort: { 'type': 'array', 'itemType': UpdateSpaceModelRequestSort },
      spaceModelId: 'string',
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelShrinkRequest extends $tea.Model {
  instanceId?: string;
  sortShrink?: string;
  spaceModelId?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sortShrink: 'Sort',
      spaceModelId: 'SpaceModelId',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sortShrink: 'string',
      spaceModelId: 'string',
      spaceType: 'string',
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

export class UpdateSpaceModelInstanceRequest extends $tea.Model {
  instance?: string;
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      spaceId: 'string',
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

export class UpdateWorkOrderRequest extends $tea.Model {
  alarmHappenTime?: string;
  alarmRecoverTime?: string;
  alarmRelated?: string;
  area?: string;
  circuitId?: string;
  circuitName?: string;
  circuitType?: string;
  clientToken?: string;
  deviceIp?: string;
  deviceIpA?: string;
  deviceIpB?: string;
  deviceModelA?: string;
  deviceModelB?: string;
  deviceName?: string;
  deviceNameA?: string;
  deviceNameB?: string;
  devicePortA?: string;
  devicePortB?: string;
  deviceSnA?: string;
  deviceSnB?: string;
  deviceType?: string;
  deviceVendor?: string;
  deviceVendorA?: string;
  deviceVendorB?: string;
  emergencyDegree?: string;
  extra?: string;
  hangFileName?: string;
  hangFilePath?: string;
  hangReason?: string;
  impactBusiness?: string;
  incidentDescription?: string;
  incidentSubType?: string;
  incidentType?: string;
  instanceId?: string;
  liableMan?: string;
  linkMan?: string;
  originalSubjectAlarm?: string;
  processLimited?: string;
  processMan?: string;
  processManId?: string;
  processResult?: string;
  skillGroups?: string;
  workOrderId?: string;
  workOrderSource?: string;
  workOrderStep?: string;
  workOrderTitle?: string;
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHappenTime: 'AlarmHappenTime',
      alarmRecoverTime: 'AlarmRecoverTime',
      alarmRelated: 'AlarmRelated',
      area: 'Area',
      circuitId: 'CircuitId',
      circuitName: 'CircuitName',
      circuitType: 'CircuitType',
      clientToken: 'ClientToken',
      deviceIp: 'DeviceIp',
      deviceIpA: 'DeviceIpA',
      deviceIpB: 'DeviceIpB',
      deviceModelA: 'DeviceModelA',
      deviceModelB: 'DeviceModelB',
      deviceName: 'DeviceName',
      deviceNameA: 'DeviceNameA',
      deviceNameB: 'DeviceNameB',
      devicePortA: 'DevicePortA',
      devicePortB: 'DevicePortB',
      deviceSnA: 'DeviceSnA',
      deviceSnB: 'DeviceSnB',
      deviceType: 'DeviceType',
      deviceVendor: 'DeviceVendor',
      deviceVendorA: 'DeviceVendorA',
      deviceVendorB: 'DeviceVendorB',
      emergencyDegree: 'EmergencyDegree',
      extra: 'Extra',
      hangFileName: 'HangFileName',
      hangFilePath: 'HangFilePath',
      hangReason: 'HangReason',
      impactBusiness: 'ImpactBusiness',
      incidentDescription: 'IncidentDescription',
      incidentSubType: 'IncidentSubType',
      incidentType: 'IncidentType',
      instanceId: 'InstanceId',
      liableMan: 'LiableMan',
      linkMan: 'LinkMan',
      originalSubjectAlarm: 'OriginalSubjectAlarm',
      processLimited: 'ProcessLimited',
      processMan: 'ProcessMan',
      processManId: 'ProcessManId',
      processResult: 'ProcessResult',
      skillGroups: 'SkillGroups',
      workOrderId: 'WorkOrderId',
      workOrderSource: 'WorkOrderSource',
      workOrderStep: 'WorkOrderStep',
      workOrderTitle: 'WorkOrderTitle',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHappenTime: 'string',
      alarmRecoverTime: 'string',
      alarmRelated: 'string',
      area: 'string',
      circuitId: 'string',
      circuitName: 'string',
      circuitType: 'string',
      clientToken: 'string',
      deviceIp: 'string',
      deviceIpA: 'string',
      deviceIpB: 'string',
      deviceModelA: 'string',
      deviceModelB: 'string',
      deviceName: 'string',
      deviceNameA: 'string',
      deviceNameB: 'string',
      devicePortA: 'string',
      devicePortB: 'string',
      deviceSnA: 'string',
      deviceSnB: 'string',
      deviceType: 'string',
      deviceVendor: 'string',
      deviceVendorA: 'string',
      deviceVendorB: 'string',
      emergencyDegree: 'string',
      extra: 'string',
      hangFileName: 'string',
      hangFilePath: 'string',
      hangReason: 'string',
      impactBusiness: 'string',
      incidentDescription: 'string',
      incidentSubType: 'string',
      incidentType: 'string',
      instanceId: 'string',
      liableMan: 'string',
      linkMan: 'string',
      originalSubjectAlarm: 'string',
      processLimited: 'string',
      processMan: 'string',
      processManId: 'string',
      processResult: 'string',
      skillGroups: 'string',
      workOrderId: 'string',
      workOrderSource: 'string',
      workOrderStep: 'string',
      workOrderTitle: 'string',
      workOrderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkOrderResponseBody extends $tea.Model {
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

export class UpdateWorkOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateWorkOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWorkOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlarmOverviewConditionList extends $tea.Model {
  conditionName?: string;
  conditionValue?: string;
  static names(): { [key: string]: string } {
    return {
      conditionName: 'ConditionName',
      conditionValue: 'ConditionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionName: 'string',
      conditionValue: 'string',
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

export class DeviceResourceDeviceResource extends $tea.Model {
  blockNumber?: string;
  business?: string;
  config?: string;
  configGenerate?: boolean;
  configTaskStatus?: string;
  deliveryIp?: string;
  deviceNumber?: string;
  deviceResourceId?: string;
  hostName?: string;
  interConnection?: string;
  location?: string;
  loopback?: string;
  managerIp?: string;
  model?: string;
  role?: string;
  setupProjectId?: string;
  sn?: string;
  stack?: boolean;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      blockNumber: 'BlockNumber',
      business: 'Business',
      config: 'Config',
      configGenerate: 'ConfigGenerate',
      configTaskStatus: 'ConfigTaskStatus',
      deliveryIp: 'DeliveryIp',
      deviceNumber: 'DeviceNumber',
      deviceResourceId: 'DeviceResourceId',
      hostName: 'HostName',
      interConnection: 'InterConnection',
      location: 'Location',
      loopback: 'Loopback',
      managerIp: 'ManagerIp',
      model: 'Model',
      role: 'Role',
      setupProjectId: 'SetupProjectId',
      sn: 'Sn',
      stack: 'Stack',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockNumber: 'string',
      business: 'string',
      config: 'string',
      configGenerate: 'boolean',
      configTaskStatus: 'string',
      deliveryIp: 'string',
      deviceNumber: 'string',
      deviceResourceId: 'string',
      hostName: 'string',
      interConnection: 'string',
      location: 'string',
      loopback: 'string',
      managerIp: 'string',
      model: 'string',
      role: 'string',
      setupProjectId: 'string',
      sn: 'string',
      stack: 'boolean',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventResourceDevice extends $tea.Model {
  hostName?: string;
  physicalSpace?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      physicalSpace: 'PhysicalSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      physicalSpace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionScriptInspectionAlarmRules extends $tea.Model {
  alarmExpression?: string;
  alarmLevel?: string;
  alarmOperator?: string;
  alarmValue?: string;
  static names(): { [key: string]: string } {
    return {
      alarmExpression: 'AlarmExpression',
      alarmLevel: 'AlarmLevel',
      alarmOperator: 'AlarmOperator',
      alarmValue: 'AlarmValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmExpression: 'string',
      alarmLevel: 'string',
      alarmOperator: 'string',
      alarmValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InspectionTaskInspectionAlarmRules extends $tea.Model {
  actualValue?: string;
  expression?: string;
  level?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      expression: 'Expression',
      level: 'Level',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      expression: 'string',
      level: 'string',
      operator: 'string',
      value: 'string',
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
  deviceMac?: string;
  deviceName?: string;
  gateway?: string;
  ip?: string;
  parentIpBlocks?: string[];
  port?: string;
  remoteDeviceName?: string;
  remoteIp?: string;
  remotePort?: string;
  zoneLayer?: IpRecordDetailZoneLayer[];
  static names(): { [key: string]: string } {
    return {
      deviceMac: 'DeviceMac',
      deviceName: 'DeviceName',
      gateway: 'Gateway',
      ip: 'Ip',
      parentIpBlocks: 'ParentIpBlocks',
      port: 'Port',
      remoteDeviceName: 'RemoteDeviceName',
      remoteIp: 'RemoteIp',
      remotePort: 'RemotePort',
      zoneLayer: 'ZoneLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceMac: 'string',
      deviceName: 'string',
      gateway: 'string',
      ip: 'string',
      parentIpBlocks: { 'type': 'array', 'itemType': 'string' },
      port: 'string',
      remoteDeviceName: 'string',
      remoteIp: 'string',
      remotePort: 'string',
      zoneLayer: { 'type': 'array', 'itemType': IpRecordDetailZoneLayer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModuleDevice extends $tea.Model {
  count?: number;
  createTime?: string;
  deviceCount?: number;
  deviceRole?: string;
  deviceX?: string;
  deviceY?: string;
  id?: string;
  role?: string;
  updateTime?: string;
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      createTime: 'CreateTime',
      deviceCount: 'DeviceCount',
      deviceRole: 'DeviceRole',
      deviceX: 'DeviceX',
      deviceY: 'DeviceY',
      id: 'Id',
      role: 'Role',
      updateTime: 'UpdateTime',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      createTime: 'string',
      deviceCount: 'number',
      deviceRole: 'string',
      deviceX: 'string',
      deviceY: 'string',
      id: 'string',
      role: 'string',
      updateTime: 'string',
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
  deviceDetails?: ModuleModuleDetailsDeviceDetails[];
  orderNumber?: number;
  static names(): { [key: string]: string } {
    return {
      deviceDetails: 'DeviceDetails',
      orderNumber: 'OrderNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceDetails: { 'type': 'array', 'itemType': ModuleModuleDetailsDeviceDetails },
      orderNumber: 'number',
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

export class ResourceInformationInformation extends $tea.Model {
  key?: string;
  keyAction?: string;
  keyAttribute?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAction: 'KeyAction',
      keyAttribute: 'KeyAttribute',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAction: 'string',
      keyAttribute: 'string',
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

export class SetupProjectPackages extends $tea.Model {
  deviceNumber?: string;
  model?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      model: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'string',
      model: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpaceModelSort extends $tea.Model {
  level?: number;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levelName: 'string',
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
  createTime?: string;
  sort?: SpaceModelSpaceModelSort;
  spaceModelId?: string;
  spaceType?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      sort: 'Sort',
      spaceModelId: 'SpaceModelId',
      spaceType: 'SpaceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sort: SpaceModelSpaceModelSort,
      spaceModelId: 'string',
      spaceType: 'string',
      status: 'string',
      updateTime: 'string',
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

export class ZoneTypeZoneTypeLayer extends $tea.Model {
  mask?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mask: 'Mask',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mask: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicesRequestDeviceParamModelList extends $tea.Model {
  enablePassword?: string;
  extAttributes?: string;
  hostName?: string;
  ip?: string;
  loginPassword?: string;
  loginType?: string;
  loginUsername?: string;
  mac?: string;
  model?: string;
  physicalSpaceName?: string;
  securityDomain?: string;
  serviceStatus?: string;
  sn?: string;
  snmpAccountType?: string;
  snmpAccountVersion?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpCommunity?: string;
  snmpPrivacyPassphrase?: string;
  snmpPrivacyProtocol?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      enablePassword: 'EnablePassword',
      extAttributes: 'ExtAttributes',
      hostName: 'HostName',
      ip: 'Ip',
      loginPassword: 'LoginPassword',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      mac: 'Mac',
      model: 'Model',
      physicalSpaceName: 'PhysicalSpaceName',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      snmpAccountType: 'SnmpAccountType',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpCommunity: 'SnmpCommunity',
      snmpPrivacyPassphrase: 'SnmpPrivacyPassphrase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePassword: 'string',
      extAttributes: 'string',
      hostName: 'string',
      ip: 'string',
      loginPassword: 'string',
      loginType: 'string',
      loginUsername: 'string',
      mac: 'string',
      model: 'string',
      physicalSpaceName: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      sn: 'string',
      snmpAccountType: 'string',
      snmpAccountVersion: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpCommunity: 'string',
      snmpPrivacyPassphrase: 'string',
      snmpPrivacyProtocol: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorItemRequestAlarmRuleList extends $tea.Model {
  alarmStatus?: string;
  expression?: string;
  value?: string;
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      expression: 'Expression',
      value: 'Value',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      expression: 'string',
      value: 'string',
      variable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInformationRequestInformation extends $tea.Model {
  key?: string;
  keyAction?: string;
  keyAttribute?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAction: 'KeyAction',
      keyAttribute: 'KeyAttribute',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAction: 'string',
      keyAttribute: 'string',
      keyDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpaceModelRequestSort extends $tea.Model {
  level?: number;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNotificationRequestList extends $tea.Model {
  aggregateDataId?: string;
  appId?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  monitorItemId?: string;
  portCollectionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      appId: 'AppId',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      portCollectionId: 'PortCollectionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      appId: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      monitorItemId: 'string',
      portCollectionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNotificationRequestList extends $tea.Model {
  aggregateDataId?: string;
  appId?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  monitorItemId?: string;
  portCollectionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      appId: 'AppId',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      monitorItemId: 'MonitorItemId',
      portCollectionId: 'PortCollectionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      appId: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      monitorItemId: 'string',
      portCollectionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusAggregateData extends $tea.Model {
  aggregateDataDescription?: string;
  aggregateDataId?: string;
  aggregateDataName?: string;
  aggregateMode?: string;
  dataItem?: string;
  deviceId?: string;
  isAllDevice?: number;
  monitorItemId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataDescription: 'AggregateDataDescription',
      aggregateDataId: 'AggregateDataId',
      aggregateDataName: 'AggregateDataName',
      aggregateMode: 'AggregateMode',
      dataItem: 'DataItem',
      deviceId: 'DeviceId',
      isAllDevice: 'IsAllDevice',
      monitorItemId: 'MonitorItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataDescription: 'string',
      aggregateDataId: 'string',
      aggregateDataName: 'string',
      aggregateMode: 'string',
      dataItem: 'string',
      deviceId: 'string',
      isAllDevice: 'number',
      monitorItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusDedicatedLine extends $tea.Model {
  bandwidth?: string;
  dedicatedLineGateway?: string;
  dedicatedLineName?: string;
  deviceId?: string;
  ip?: string;
  portName?: string;
  space?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineName: 'DedicatedLineName',
      deviceId: 'DeviceId',
      ip: 'Ip',
      portName: 'PortName',
      space: 'Space',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineName: 'string',
      deviceId: 'string',
      ip: 'string',
      portName: 'string',
      space: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusMonitorItem extends $tea.Model {
  collectionType?: string;
  deviceForm?: string;
  effective?: number;
  execInterval?: string;
  monitorItemDescription?: string;
  monitorItemId?: string;
  monitorItemName?: string;
  securityDomain?: string;
  static names(): { [key: string]: string } {
    return {
      collectionType: 'CollectionType',
      deviceForm: 'DeviceForm',
      effective: 'Effective',
      execInterval: 'ExecInterval',
      monitorItemDescription: 'MonitorItemDescription',
      monitorItemId: 'MonitorItemId',
      monitorItemName: 'MonitorItemName',
      securityDomain: 'SecurityDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionType: 'string',
      deviceForm: 'string',
      effective: 'number',
      execInterval: 'string',
      monitorItemDescription: 'string',
      monitorItemId: 'string',
      monitorItemName: 'string',
      securityDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusNotificationSwitch extends $tea.Model {
  expiryTime?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      reason: 'string',
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
  deviceId?: string;
  portName?: string;
  resourceDevice?: GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortListResourceDevice;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      portName: 'PortName',
      resourceDevice: 'ResourceDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      portName: 'string',
      resourceDevice: GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortListResourceDevice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusPortCollection extends $tea.Model {
  portCollectionDescription?: string;
  portCollectionId?: string;
  portCollectionName?: string;
  portList?: GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortList[];
  static names(): { [key: string]: string } {
    return {
      portCollectionDescription: 'PortCollectionDescription',
      portCollectionId: 'PortCollectionId',
      portCollectionName: 'PortCollectionName',
      portList: 'PortList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portCollectionDescription: 'string',
      portCollectionId: 'string',
      portCollectionName: 'string',
      portList: { 'type': 'array', 'itemType': GetAlarmStatusResponseBodyAlarmStatusPortCollectionPortList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusResourceApp extends $tea.Model {
  appId?: string;
  domain?: string;
  port?: string;
  securityDomain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      port: 'Port',
      securityDomain: 'SecurityDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      port: 'string',
      securityDomain: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatusResourceDevice extends $tea.Model {
  deviceForm?: string;
  deviceId?: string;
  hostName?: string;
  ip?: string;
  model?: string;
  securityDomain?: string;
  sn?: string;
  space?: string;
  status?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceForm: 'DeviceForm',
      deviceId: 'DeviceId',
      hostName: 'HostName',
      ip: 'Ip',
      model: 'Model',
      securityDomain: 'SecurityDomain',
      sn: 'Sn',
      space: 'Space',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceForm: 'string',
      deviceId: 'string',
      hostName: 'string',
      ip: 'string',
      model: 'string',
      securityDomain: 'string',
      sn: 'string',
      space: 'string',
      status: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlarmStatusResponseBodyAlarmStatus extends $tea.Model {
  abnormalDataItem?: string;
  agentIp?: string;
  aggregateData?: GetAlarmStatusResponseBodyAlarmStatusAggregateData;
  aggregateDataId?: string;
  alarmRule?: string;
  alarmStatus?: string;
  appId?: string;
  collectionTime?: string;
  dedicatedLine?: GetAlarmStatusResponseBodyAlarmStatusDedicatedLine;
  dedicatedLineId?: string;
  deviceId?: string;
  firstAbnormalTime?: string;
  monitorItem?: GetAlarmStatusResponseBodyAlarmStatusMonitorItem;
  monitorItemId?: string;
  notificationSwitch?: GetAlarmStatusResponseBodyAlarmStatusNotificationSwitch;
  portCollection?: GetAlarmStatusResponseBodyAlarmStatusPortCollection;
  portCollectionId?: string;
  receiveTime?: string;
  resourceApp?: GetAlarmStatusResponseBodyAlarmStatusResourceApp;
  resourceDevice?: GetAlarmStatusResponseBodyAlarmStatusResourceDevice;
  responseCode?: string;
  result?: string;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalDataItem: 'AbnormalDataItem',
      agentIp: 'AgentIp',
      aggregateData: 'AggregateData',
      aggregateDataId: 'AggregateDataId',
      alarmRule: 'AlarmRule',
      alarmStatus: 'AlarmStatus',
      appId: 'AppId',
      collectionTime: 'CollectionTime',
      dedicatedLine: 'DedicatedLine',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      firstAbnormalTime: 'FirstAbnormalTime',
      monitorItem: 'MonitorItem',
      monitorItemId: 'MonitorItemId',
      notificationSwitch: 'NotificationSwitch',
      portCollection: 'PortCollection',
      portCollectionId: 'PortCollectionId',
      receiveTime: 'ReceiveTime',
      resourceApp: 'ResourceApp',
      resourceDevice: 'ResourceDevice',
      responseCode: 'ResponseCode',
      result: 'Result',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDataItem: 'string',
      agentIp: 'string',
      aggregateData: GetAlarmStatusResponseBodyAlarmStatusAggregateData,
      aggregateDataId: 'string',
      alarmRule: 'string',
      alarmStatus: 'string',
      appId: 'string',
      collectionTime: 'string',
      dedicatedLine: GetAlarmStatusResponseBodyAlarmStatusDedicatedLine,
      dedicatedLineId: 'string',
      deviceId: 'string',
      firstAbnormalTime: 'string',
      monitorItem: GetAlarmStatusResponseBodyAlarmStatusMonitorItem,
      monitorItemId: 'string',
      notificationSwitch: GetAlarmStatusResponseBodyAlarmStatusNotificationSwitch,
      portCollection: GetAlarmStatusResponseBodyAlarmStatusPortCollection,
      portCollectionId: 'string',
      receiveTime: 'string',
      resourceApp: GetAlarmStatusResponseBodyAlarmStatusResourceApp,
      resourceDevice: GetAlarmStatusResponseBodyAlarmStatusResourceDevice,
      responseCode: 'string',
      result: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationSpecificationResponseBodyConfigurationSpecification extends $tea.Model {
  architecture?: string;
  configurationSpecificationId?: string;
  createTime?: string;
  mode?: string;
  relatedVariate?: string[];
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      createTime: 'CreateTime',
      mode: 'Mode',
      relatedVariate: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      configurationSpecificationId: 'string',
      createTime: 'string',
      mode: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationVariateResponseBodyConfigurationVariate extends $tea.Model {
  comment?: string;
  formatFunction?: string;
  variateName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      formatFunction: 'FormatFunction',
      variateName: 'VariateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      formatFunction: 'string',
      variateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedLineResponseBodyDedicatedLine extends $tea.Model {
  bandwidth?: number;
  dedicatedLineGateway?: string;
  dedicatedLineId?: string;
  dedicatedLineIp?: string;
  dedicatedLineRole?: string;
  description?: string;
  deviceId?: string;
  deviceName?: string;
  devicePort?: string;
  isp?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineId: 'DedicatedLineId',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineRole: 'DedicatedLineRole',
      description: 'Description',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      devicePort: 'DevicePort',
      isp: 'Isp',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      dedicatedLineGateway: 'string',
      dedicatedLineId: 'string',
      dedicatedLineIp: 'string',
      dedicatedLineRole: 'string',
      description: 'string',
      deviceId: 'string',
      deviceName: 'string',
      devicePort: 'string',
      isp: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResponseBodyDevice extends $tea.Model {
  deviceFormId?: string;
  deviceFormName?: string;
  deviceId?: string;
  enablePassword?: string;
  extAttributes?: string;
  hostName?: string;
  ip?: string;
  loginPassword?: string;
  loginType?: string;
  loginUsername?: string;
  mac?: string;
  model?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  securityDomain?: string;
  serviceStatus?: string;
  sn?: string;
  snmpAccountType?: string;
  snmpAccountVersion?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpCommunity?: string;
  snmpPrivacyPassphrase?: string;
  snmpPrivacyProtocol?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      deviceId: 'DeviceId',
      enablePassword: 'EnablePassword',
      extAttributes: 'ExtAttributes',
      hostName: 'HostName',
      ip: 'Ip',
      loginPassword: 'LoginPassword',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      mac: 'Mac',
      model: 'Model',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      snmpAccountType: 'SnmpAccountType',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpCommunity: 'SnmpCommunity',
      snmpPrivacyPassphrase: 'SnmpPrivacyPassphrase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      deviceFormName: 'string',
      deviceId: 'string',
      enablePassword: 'string',
      extAttributes: 'string',
      hostName: 'string',
      ip: 'string',
      loginPassword: 'string',
      loginType: 'string',
      loginUsername: 'string',
      mac: 'string',
      model: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      sn: 'string',
      snmpAccountType: 'string',
      snmpAccountVersion: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpCommunity: 'string',
      snmpPrivacyPassphrase: 'string',
      snmpPrivacyProtocol: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      vendor: 'string',
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

export class GetDeviceFormResponseBodyDeviceFormAttributeList extends $tea.Model {
  attributeBuiltIn?: boolean;
  attributeFormat?: string;
  attributeFuzzyQuery?: boolean;
  attributeKey?: string;
  attributeName?: string;
  attributePlaceholder?: string;
  attributeQuery?: boolean;
  attributeReference?: string;
  attributeRequirement?: boolean;
  attributeTableDisplay?: boolean;
  attributeType?: string;
  attributeUniqueness?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeBuiltIn: 'AttributeBuiltIn',
      attributeFormat: 'AttributeFormat',
      attributeFuzzyQuery: 'AttributeFuzzyQuery',
      attributeKey: 'AttributeKey',
      attributeName: 'AttributeName',
      attributePlaceholder: 'AttributePlaceholder',
      attributeQuery: 'AttributeQuery',
      attributeReference: 'AttributeReference',
      attributeRequirement: 'AttributeRequirement',
      attributeTableDisplay: 'AttributeTableDisplay',
      attributeType: 'AttributeType',
      attributeUniqueness: 'AttributeUniqueness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeBuiltIn: 'boolean',
      attributeFormat: 'string',
      attributeFuzzyQuery: 'boolean',
      attributeKey: 'string',
      attributeName: 'string',
      attributePlaceholder: 'string',
      attributeQuery: 'boolean',
      attributeReference: 'string',
      attributeRequirement: 'boolean',
      attributeTableDisplay: 'boolean',
      attributeType: 'string',
      attributeUniqueness: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceFormResponseBodyDeviceForm extends $tea.Model {
  accountConfig?: boolean;
  attributeList?: GetDeviceFormResponseBodyDeviceFormAttributeList[];
  configCompare?: boolean;
  detailDisplay?: boolean;
  deviceFormId?: string;
  deviceFormName?: string;
  formBuiltIn?: boolean;
  resourceUse?: string;
  script?: string;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      accountConfig: 'AccountConfig',
      attributeList: 'AttributeList',
      configCompare: 'ConfigCompare',
      detailDisplay: 'DetailDisplay',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      formBuiltIn: 'FormBuiltIn',
      resourceUse: 'ResourceUse',
      script: 'Script',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountConfig: 'boolean',
      attributeList: { 'type': 'array', 'itemType': GetDeviceFormResponseBodyDeviceFormAttributeList },
      configCompare: 'boolean',
      detailDisplay: 'boolean',
      deviceFormId: 'string',
      deviceFormName: 'string',
      formBuiltIn: 'boolean',
      resourceUse: 'string',
      script: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceOpLogResponseBodyOperationLogs extends $tea.Model {
  deviceId?: string;
  gmtModifiedTime?: string;
  keyword?: string;
  newValue?: string;
  oldValue?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      gmtModifiedTime: 'GmtModifiedTime',
      keyword: 'Keyword',
      newValue: 'NewValue',
      oldValue: 'OldValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      gmtModifiedTime: 'string',
      keyword: 'string',
      newValue: 'string',
      oldValue: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePropertyResponseBodyDeviceProperty extends $tea.Model {
  builtIn?: boolean;
  deviceFormId?: string;
  deviceFormName?: string;
  devicePropertyId?: string;
  propertyContent?: string;
  propertyFormat?: string;
  propertyKey?: string;
  propertyName?: string;
  static names(): { [key: string]: string } {
    return {
      builtIn: 'BuiltIn',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      devicePropertyId: 'DevicePropertyId',
      propertyContent: 'PropertyContent',
      propertyFormat: 'PropertyFormat',
      propertyKey: 'PropertyKey',
      propertyName: 'PropertyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtIn: 'boolean',
      deviceFormId: 'string',
      deviceFormName: 'string',
      devicePropertyId: 'string',
      propertyContent: 'string',
      propertyFormat: 'string',
      propertyKey: 'string',
      propertyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceResourceResponseBodyDeviceResource extends $tea.Model {
  blockNumber?: string;
  business?: string;
  config?: string;
  configTaskStatus?: string;
  deliveryIp?: string;
  deviceNum?: string;
  deviceResourceId?: string;
  generateConfig?: string;
  hostName?: string;
  interConnection?: string;
  location?: string;
  loopback?: string;
  managerIp?: string;
  model?: string;
  role?: string;
  setupProjectId?: string;
  sn?: string;
  stack?: boolean;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      blockNumber: 'BlockNumber',
      business: 'Business',
      config: 'Config',
      configTaskStatus: 'ConfigTaskStatus',
      deliveryIp: 'DeliveryIp',
      deviceNum: 'DeviceNum',
      deviceResourceId: 'DeviceResourceId',
      generateConfig: 'GenerateConfig',
      hostName: 'HostName',
      interConnection: 'InterConnection',
      location: 'Location',
      loopback: 'Loopback',
      managerIp: 'ManagerIp',
      model: 'Model',
      role: 'Role',
      setupProjectId: 'SetupProjectId',
      sn: 'Sn',
      stack: 'Stack',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockNumber: 'string',
      business: 'string',
      config: 'string',
      configTaskStatus: 'string',
      deliveryIp: 'string',
      deviceNum: 'string',
      deviceResourceId: 'string',
      generateConfig: 'string',
      hostName: 'string',
      interConnection: 'string',
      location: 'string',
      loopback: 'string',
      managerIp: 'string',
      model: 'string',
      role: 'string',
      setupProjectId: 'string',
      sn: 'string',
      stack: 'boolean',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskResponseBodyInspectionTaskInspectionAlarmRules extends $tea.Model {
  actualValue?: string;
  expression?: string;
  level?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      expression: 'Expression',
      level: 'Level',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      expression: 'string',
      level: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionTaskResponseBodyInspectionTask extends $tea.Model {
  deviceDisplay?: string;
  deviceId?: string;
  errorCode?: string;
  executionBeginTime?: string;
  executionEndTime?: string;
  hostName?: string;
  IP?: string;
  inspectionAlarmRules?: GetInspectionTaskResponseBodyInspectionTaskInspectionAlarmRules[];
  inspectionResult?: string;
  itemId?: string;
  itemName?: string;
  model?: string[];
  scriptId?: string;
  space?: string;
  taskId?: string;
  taskStatus?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceDisplay: 'DeviceDisplay',
      deviceId: 'DeviceId',
      errorCode: 'ErrorCode',
      executionBeginTime: 'ExecutionBeginTime',
      executionEndTime: 'ExecutionEndTime',
      hostName: 'HostName',
      IP: 'IP',
      inspectionAlarmRules: 'InspectionAlarmRules',
      inspectionResult: 'InspectionResult',
      itemId: 'ItemId',
      itemName: 'ItemName',
      model: 'Model',
      scriptId: 'ScriptId',
      space: 'Space',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceDisplay: 'string',
      deviceId: 'string',
      errorCode: 'string',
      executionBeginTime: 'string',
      executionEndTime: 'string',
      hostName: 'string',
      IP: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': GetInspectionTaskResponseBodyInspectionTaskInspectionAlarmRules },
      inspectionResult: 'string',
      itemId: 'string',
      itemName: 'string',
      model: { 'type': 'array', 'itemType': 'string' },
      scriptId: 'string',
      space: 'string',
      taskId: 'string',
      taskStatus: 'string',
      vendor: 'string',
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

export class GetOssPolicyResponseBodyOssPolicy extends $tea.Model {
  accessId?: string;
  directory?: string;
  expireTime?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      directory: 'Directory',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      directory: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceResponseBodyPhysicalSpace extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  owner?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  province?: string;
  remark?: string;
  spaceAbbreviation?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      owner: 'Owner',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      province: 'Province',
      remark: 'Remark',
      spaceAbbreviation: 'SpaceAbbreviation',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      owner: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      province: 'string',
      remark: 'string',
      spaceAbbreviation: 'string',
      spaceType: 'string',
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

export class GetPhysicalSpaceTopoResponseBodyTopoDataLinks extends $tea.Model {
  sourceDeviceId?: string;
  sourceDeviceName?: string;
  sourcePort?: string;
  targetDeviceId?: string;
  targetDeviceName?: string;
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDeviceId: 'SourceDeviceId',
      sourceDeviceName: 'SourceDeviceName',
      sourcePort: 'SourcePort',
      targetDeviceId: 'TargetDeviceId',
      targetDeviceName: 'TargetDeviceName',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDeviceId: 'string',
      sourceDeviceName: 'string',
      sourcePort: 'string',
      targetDeviceId: 'string',
      targetDeviceName: 'string',
      targetPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalSpaceTopoResponseBodyTopoData extends $tea.Model {
  devices?: GetPhysicalSpaceTopoResponseBodyTopoDataDevices[];
  links?: GetPhysicalSpaceTopoResponseBodyTopoDataLinks[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      links: 'Links',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': GetPhysicalSpaceTopoResponseBodyTopoDataDevices },
      links: { 'type': 'array', 'itemType': GetPhysicalSpaceTopoResponseBodyTopoDataLinks },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeTaskResponseBodyInspectionTask extends $tea.Model {
  errorCode?: string;
  inspectionMessage?: string;
  inspectionResult?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      inspectionMessage: 'InspectionMessage',
      inspectionResult: 'InspectionResult',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      inspectionMessage: 'string',
      inspectionResult: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleWorkerResponseBodyScheduleWorker extends $tea.Model {
  createTime?: string;
  scheduleWorkerId?: string;
  updateTime?: string;
  workerContact?: string;
  workerId?: string;
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      scheduleWorkerId: 'ScheduleWorkerId',
      updateTime: 'UpdateTime',
      workerContact: 'WorkerContact',
      workerId: 'WorkerId',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      scheduleWorkerId: 'string',
      updateTime: 'string',
      workerContact: 'string',
      workerId: 'string',
      workerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectResponseBodySetupProjectPackages extends $tea.Model {
  deviceNumber?: string;
  model?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      model: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'string',
      model: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSetupProjectResponseBodySetupProject extends $tea.Model {
  createTime?: string;
  deliveryTime?: string;
  nodes?: string;
  packages?: GetSetupProjectResponseBodySetupProjectPackages[];
  progress?: string;
  setupProjectId?: string;
  spaceId?: string;
  spaceName?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deliveryTime: 'DeliveryTime',
      nodes: 'Nodes',
      packages: 'Packages',
      progress: 'Progress',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deliveryTime: 'string',
      nodes: 'string',
      packages: { 'type': 'array', 'itemType': GetSetupProjectResponseBodySetupProjectPackages },
      progress: 'string',
      setupProjectId: 'string',
      spaceId: 'string',
      spaceName: 'string',
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelResponseBodySpaceModelSort extends $tea.Model {
  level?: number;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpaceModelResponseBodySpaceModel extends $tea.Model {
  createTime?: string;
  sort?: GetSpaceModelResponseBodySpaceModelSort[];
  spaceModelId?: string;
  spaceType?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      sort: 'Sort',
      spaceModelId: 'SpaceModelId',
      spaceType: 'SpaceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sort: { 'type': 'array', 'itemType': GetSpaceModelResponseBodySpaceModelSort },
      spaceModelId: 'string',
      spaceType: 'string',
      status: 'string',
      updateTime: 'string',
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

export class GetSpaceModelSortResponseBodySpaceModel extends $tea.Model {
  level?: number;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTask extends $tea.Model {
  category?: string;
  createTime?: string;
  params?: string;
  responseCode?: string;
  result?: string;
  status?: string;
  taskId?: string;
  templateId?: string;
  templateName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      params: 'Params',
      responseCode: 'ResponseCode',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      params: 'string',
      responseCode: 'string',
      result: 'string',
      status: 'string',
      taskId: 'string',
      templateId: 'string',
      templateName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkOrderResponseBodyContentWorkOrderOperationDtos extends $tea.Model {
  gmtCreate?: string;
  operation?: string;
  operationId?: string;
  operator?: string;
  remark?: string;
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      operation: 'Operation',
      operationId: 'OperationId',
      operator: 'Operator',
      remark: 'Remark',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      operation: 'string',
      operationId: 'string',
      operator: 'string',
      remark: 'string',
      workOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkOrderResponseBodyContent extends $tea.Model {
  alarmHappenTime?: string;
  alarmRecoverTime?: string;
  alarmRelated?: string;
  area?: string;
  circuitId?: string;
  circuitName?: string;
  circuitType?: string;
  deviceAlarmInfo?: string;
  deviceIp?: string;
  deviceIpA?: string;
  deviceIpB?: string;
  deviceModelA?: string;
  deviceModelB?: string;
  deviceName?: string;
  deviceNameA?: string;
  deviceNameB?: string;
  devicePortA?: string;
  devicePortB?: string;
  deviceSnA?: string;
  deviceSnB?: string;
  deviceType?: string;
  deviceVendor?: string;
  deviceVendorA?: string;
  deviceVendorB?: string;
  emergencyDegree?: string;
  extra?: string;
  faultDuration?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hangFileName?: string;
  hangFilePath?: string;
  hangReason?: string;
  impactBusiness?: string;
  incidentDescription?: string;
  incidentSubType?: string;
  incidentType?: string;
  liableMan?: string;
  linkMan?: string;
  originalSubjectAlarm?: string;
  processLimited?: string;
  processMan?: string;
  processManId?: string;
  processResult?: string;
  skillGroups?: string;
  timeout?: string;
  workOrderId?: string;
  workOrderOperationDtos?: GetWorkOrderResponseBodyContentWorkOrderOperationDtos[];
  workOrderSource?: string;
  workOrderStep?: string;
  workOrderTitle?: string;
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHappenTime: 'AlarmHappenTime',
      alarmRecoverTime: 'AlarmRecoverTime',
      alarmRelated: 'AlarmRelated',
      area: 'Area',
      circuitId: 'CircuitId',
      circuitName: 'CircuitName',
      circuitType: 'CircuitType',
      deviceAlarmInfo: 'DeviceAlarmInfo',
      deviceIp: 'DeviceIp',
      deviceIpA: 'DeviceIpA',
      deviceIpB: 'DeviceIpB',
      deviceModelA: 'DeviceModelA',
      deviceModelB: 'DeviceModelB',
      deviceName: 'DeviceName',
      deviceNameA: 'DeviceNameA',
      deviceNameB: 'DeviceNameB',
      devicePortA: 'DevicePortA',
      devicePortB: 'DevicePortB',
      deviceSnA: 'DeviceSnA',
      deviceSnB: 'DeviceSnB',
      deviceType: 'DeviceType',
      deviceVendor: 'DeviceVendor',
      deviceVendorA: 'DeviceVendorA',
      deviceVendorB: 'DeviceVendorB',
      emergencyDegree: 'EmergencyDegree',
      extra: 'Extra',
      faultDuration: 'FaultDuration',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hangFileName: 'HangFileName',
      hangFilePath: 'HangFilePath',
      hangReason: 'HangReason',
      impactBusiness: 'ImpactBusiness',
      incidentDescription: 'IncidentDescription',
      incidentSubType: 'IncidentSubType',
      incidentType: 'IncidentType',
      liableMan: 'LiableMan',
      linkMan: 'LinkMan',
      originalSubjectAlarm: 'OriginalSubjectAlarm',
      processLimited: 'ProcessLimited',
      processMan: 'ProcessMan',
      processManId: 'ProcessManId',
      processResult: 'ProcessResult',
      skillGroups: 'SkillGroups',
      timeout: 'Timeout',
      workOrderId: 'WorkOrderId',
      workOrderOperationDtos: 'WorkOrderOperationDtos',
      workOrderSource: 'WorkOrderSource',
      workOrderStep: 'WorkOrderStep',
      workOrderTitle: 'WorkOrderTitle',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHappenTime: 'string',
      alarmRecoverTime: 'string',
      alarmRelated: 'string',
      area: 'string',
      circuitId: 'string',
      circuitName: 'string',
      circuitType: 'string',
      deviceAlarmInfo: 'string',
      deviceIp: 'string',
      deviceIpA: 'string',
      deviceIpB: 'string',
      deviceModelA: 'string',
      deviceModelB: 'string',
      deviceName: 'string',
      deviceNameA: 'string',
      deviceNameB: 'string',
      devicePortA: 'string',
      devicePortB: 'string',
      deviceSnA: 'string',
      deviceSnB: 'string',
      deviceType: 'string',
      deviceVendor: 'string',
      deviceVendorA: 'string',
      deviceVendorB: 'string',
      emergencyDegree: 'string',
      extra: 'string',
      faultDuration: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hangFileName: 'string',
      hangFilePath: 'string',
      hangReason: 'string',
      impactBusiness: 'string',
      incidentDescription: 'string',
      incidentSubType: 'string',
      incidentType: 'string',
      liableMan: 'string',
      linkMan: 'string',
      originalSubjectAlarm: 'string',
      processLimited: 'string',
      processMan: 'string',
      processManId: 'string',
      processResult: 'string',
      skillGroups: 'string',
      timeout: 'string',
      workOrderId: 'string',
      workOrderOperationDtos: { 'type': 'array', 'itemType': GetWorkOrderResponseBodyContentWorkOrderOperationDtos },
      workOrderSource: 'string',
      workOrderStep: 'string',
      workOrderTitle: 'string',
      workOrderType: 'string',
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
  physicalSpace?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedLineName: 'DedicatedLineName',
      physicalSpace: 'PhysicalSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedLineName: 'string',
      physicalSpace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusMonitorItem extends $tea.Model {
  collectionType?: string;
  monitorItemDescription?: string;
  monitorItemName?: string;
  static names(): { [key: string]: string } {
    return {
      collectionType: 'CollectionType',
      monitorItemDescription: 'MonitorItemDescription',
      monitorItemName: 'MonitorItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionType: 'string',
      monitorItemDescription: 'string',
      monitorItemName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusNotificationSwitch extends $tea.Model {
  expiryTime?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      reason: 'string',
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

export class ListAlarmStatusResponseBodyAlarmStatusResourceApp extends $tea.Model {
  appId?: string;
  domain?: string;
  port?: string;
  securityDomain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      domain: 'Domain',
      port: 'Port',
      securityDomain: 'SecurityDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      domain: 'string',
      port: 'string',
      securityDomain: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatusResourceDevice extends $tea.Model {
  deviceForm?: string;
  hostName?: string;
  physicalSpace?: string;
  static names(): { [key: string]: string } {
    return {
      deviceForm: 'DeviceForm',
      hostName: 'HostName',
      physicalSpace: 'PhysicalSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceForm: 'string',
      hostName: 'string',
      physicalSpace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmStatusResponseBodyAlarmStatus extends $tea.Model {
  abnormalDataItem?: string;
  agentIp?: string;
  aggregateData?: ListAlarmStatusResponseBodyAlarmStatusAggregateData;
  aggregateDataId?: string;
  alarmRule?: string;
  alarmStatus?: string;
  appId?: string;
  collectionTime?: string;
  dedicatedLine?: ListAlarmStatusResponseBodyAlarmStatusDedicatedLine;
  dedicatedLineId?: string;
  deviceId?: string;
  firstAbnormalTime?: string;
  monitorItem?: ListAlarmStatusResponseBodyAlarmStatusMonitorItem;
  monitorItemId?: string;
  notificationSwitch?: ListAlarmStatusResponseBodyAlarmStatusNotificationSwitch;
  portCollection?: ListAlarmStatusResponseBodyAlarmStatusPortCollection;
  portCollectionId?: string;
  receiveTime?: string;
  resourceApp?: ListAlarmStatusResponseBodyAlarmStatusResourceApp;
  resourceDevice?: ListAlarmStatusResponseBodyAlarmStatusResourceDevice;
  responseCode?: string;
  result?: string;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalDataItem: 'AbnormalDataItem',
      agentIp: 'AgentIp',
      aggregateData: 'AggregateData',
      aggregateDataId: 'AggregateDataId',
      alarmRule: 'AlarmRule',
      alarmStatus: 'AlarmStatus',
      appId: 'AppId',
      collectionTime: 'CollectionTime',
      dedicatedLine: 'DedicatedLine',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      firstAbnormalTime: 'FirstAbnormalTime',
      monitorItem: 'MonitorItem',
      monitorItemId: 'MonitorItemId',
      notificationSwitch: 'NotificationSwitch',
      portCollection: 'PortCollection',
      portCollectionId: 'PortCollectionId',
      receiveTime: 'ReceiveTime',
      resourceApp: 'ResourceApp',
      resourceDevice: 'ResourceDevice',
      responseCode: 'ResponseCode',
      result: 'Result',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalDataItem: 'string',
      agentIp: 'string',
      aggregateData: ListAlarmStatusResponseBodyAlarmStatusAggregateData,
      aggregateDataId: 'string',
      alarmRule: 'string',
      alarmStatus: 'string',
      appId: 'string',
      collectionTime: 'string',
      dedicatedLine: ListAlarmStatusResponseBodyAlarmStatusDedicatedLine,
      dedicatedLineId: 'string',
      deviceId: 'string',
      firstAbnormalTime: 'string',
      monitorItem: ListAlarmStatusResponseBodyAlarmStatusMonitorItem,
      monitorItemId: 'string',
      notificationSwitch: ListAlarmStatusResponseBodyAlarmStatusNotificationSwitch,
      portCollection: ListAlarmStatusResponseBodyAlarmStatusPortCollection,
      portCollectionId: 'string',
      receiveTime: 'string',
      resourceApp: ListAlarmStatusResponseBodyAlarmStatusResourceApp,
      resourceDevice: ListAlarmStatusResponseBodyAlarmStatusResourceDevice,
      responseCode: 'string',
      result: 'string',
      uniqueKey: 'string',
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

export class ListAlarmStatusStatisticsResponseBodyStatistics extends $tea.Model {
  count?: number;
  name?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArchitectureAttributeResponseBodyArchitecture extends $tea.Model {
  model?: string[];
  role?: string[];
  vendor?: string[];
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': 'string' },
      role: { 'type': 'array', 'itemType': 'string' },
      vendor: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationSpecificationsResponseBodyConfigurationSpecification extends $tea.Model {
  architecture?: string;
  configurationSpecificationId?: string;
  createTime?: string;
  model?: string;
  relatedVariate?: string[];
  role?: string;
  specificationContent?: string;
  specificationName?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      configurationSpecificationId: 'ConfigurationSpecificationId',
      createTime: 'CreateTime',
      model: 'Model',
      relatedVariate: 'RelatedVariate',
      role: 'Role',
      specificationContent: 'SpecificationContent',
      specificationName: 'SpecificationName',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      configurationSpecificationId: 'string',
      createTime: 'string',
      model: 'string',
      relatedVariate: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      specificationContent: 'string',
      specificationName: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigurationVariateResponseBodyConfigurationVariate extends $tea.Model {
  comment?: string;
  configurationVariateId?: string;
  createTime?: string;
  formatFunction?: string;
  updateTime?: string;
  variateName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      configurationVariateId: 'ConfigurationVariateId',
      createTime: 'CreateTime',
      formatFunction: 'FormatFunction',
      updateTime: 'UpdateTime',
      variateName: 'VariateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      configurationVariateId: 'string',
      createTime: 'string',
      formatFunction: 'string',
      updateTime: 'string',
      variateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoliciesResponseBodyConnectionPolicy extends $tea.Model {
  algorithm?: string;
  architectureIterationId?: string;
  createTime?: string;
  downlinkArchitectureDeviceId?: string;
  downlinkArchitectureModuleId?: string;
  id?: string;
  linkCount?: number;
  name?: string;
  updateTime?: string;
  uplinkArchitectureDeviceId?: string;
  uplinkArchitectureModuleId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      architectureIterationId: 'ArchitectureIterationId',
      createTime: 'CreateTime',
      downlinkArchitectureDeviceId: 'DownlinkArchitectureDeviceId',
      downlinkArchitectureModuleId: 'DownlinkArchitectureModuleId',
      id: 'Id',
      linkCount: 'LinkCount',
      name: 'Name',
      updateTime: 'UpdateTime',
      uplinkArchitectureDeviceId: 'UplinkArchitectureDeviceId',
      uplinkArchitectureModuleId: 'UplinkArchitectureModuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      architectureIterationId: 'string',
      createTime: 'string',
      downlinkArchitectureDeviceId: 'string',
      downlinkArchitectureModuleId: 'string',
      id: 'string',
      linkCount: 'number',
      name: 'string',
      updateTime: 'string',
      uplinkArchitectureDeviceId: 'string',
      uplinkArchitectureModuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDedicatedLinesResponseBodyDedicatedLines extends $tea.Model {
  bandwidth?: number;
  contact?: string;
  dedicatedLineGateway?: string;
  dedicatedLineId?: string;
  dedicatedLineIp?: string;
  dedicatedLineRole?: string;
  description?: string;
  deviceId?: string;
  deviceName?: string;
  devicePort?: string;
  isp?: string;
  phone?: string;
  physicalSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      contact: 'Contact',
      dedicatedLineGateway: 'DedicatedLineGateway',
      dedicatedLineId: 'DedicatedLineId',
      dedicatedLineIp: 'DedicatedLineIp',
      dedicatedLineRole: 'DedicatedLineRole',
      description: 'Description',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      devicePort: 'DevicePort',
      isp: 'Isp',
      phone: 'Phone',
      physicalSpaceId: 'PhysicalSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      contact: 'string',
      dedicatedLineGateway: 'string',
      dedicatedLineId: 'string',
      dedicatedLineIp: 'string',
      dedicatedLineRole: 'string',
      description: 'string',
      deviceId: 'string',
      deviceName: 'string',
      devicePort: 'string',
      isp: 'string',
      phone: 'string',
      physicalSpaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsResponseBodyDeviceFormsAttributeList extends $tea.Model {
  attributeBuiltIn?: boolean;
  attributeFormat?: string;
  attributeFuzzyQuery?: boolean;
  attributeKey?: string;
  attributeName?: string;
  attributePlaceholder?: string;
  attributeQuery?: boolean;
  attributeReference?: string;
  attributeRequirement?: boolean;
  attributeTableDisplay?: boolean;
  attributeType?: string;
  attributeUniqueness?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeBuiltIn: 'AttributeBuiltIn',
      attributeFormat: 'AttributeFormat',
      attributeFuzzyQuery: 'AttributeFuzzyQuery',
      attributeKey: 'AttributeKey',
      attributeName: 'AttributeName',
      attributePlaceholder: 'AttributePlaceholder',
      attributeQuery: 'AttributeQuery',
      attributeReference: 'AttributeReference',
      attributeRequirement: 'AttributeRequirement',
      attributeTableDisplay: 'AttributeTableDisplay',
      attributeType: 'AttributeType',
      attributeUniqueness: 'AttributeUniqueness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeBuiltIn: 'boolean',
      attributeFormat: 'string',
      attributeFuzzyQuery: 'boolean',
      attributeKey: 'string',
      attributeName: 'string',
      attributePlaceholder: 'string',
      attributeQuery: 'boolean',
      attributeReference: 'string',
      attributeRequirement: 'boolean',
      attributeTableDisplay: 'boolean',
      attributeType: 'string',
      attributeUniqueness: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceFormsResponseBodyDeviceForms extends $tea.Model {
  accountConfig?: boolean;
  attributeList?: ListDeviceFormsResponseBodyDeviceFormsAttributeList[];
  configCompare?: boolean;
  detailDisplay?: boolean;
  deviceFormId?: string;
  deviceFormName?: string;
  formBuiltIn?: boolean;
  relatedDeviceFormId?: string;
  resourceUse?: string;
  script?: string;
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      accountConfig: 'AccountConfig',
      attributeList: 'AttributeList',
      configCompare: 'ConfigCompare',
      detailDisplay: 'DetailDisplay',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      formBuiltIn: 'FormBuiltIn',
      relatedDeviceFormId: 'RelatedDeviceFormId',
      resourceUse: 'ResourceUse',
      script: 'Script',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountConfig: 'boolean',
      attributeList: { 'type': 'array', 'itemType': ListDeviceFormsResponseBodyDeviceFormsAttributeList },
      configCompare: 'boolean',
      detailDisplay: 'boolean',
      deviceFormId: 'string',
      deviceFormName: 'string',
      formBuiltIn: 'boolean',
      relatedDeviceFormId: 'string',
      resourceUse: 'string',
      script: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePropertiesResponseBodyDeviceProperties extends $tea.Model {
  builtIn?: boolean;
  deviceFormId?: string;
  deviceFormName?: string;
  devicePropertyId?: string;
  propertyContent?: string;
  propertyFormat?: string;
  propertyKey?: string;
  propertyName?: string;
  static names(): { [key: string]: string } {
    return {
      builtIn: 'BuiltIn',
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      devicePropertyId: 'DevicePropertyId',
      propertyContent: 'PropertyContent',
      propertyFormat: 'PropertyFormat',
      propertyKey: 'PropertyKey',
      propertyName: 'PropertyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtIn: 'boolean',
      deviceFormId: 'string',
      deviceFormName: 'string',
      devicePropertyId: 'string',
      propertyContent: 'string',
      propertyFormat: 'string',
      propertyKey: 'string',
      propertyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResourcesResponseBodyDeviceResource extends $tea.Model {
  blockNumber?: string;
  business?: string;
  config?: string;
  configTaskId?: string;
  configTaskStatus?: string;
  deliveryIp?: string;
  deviceNumber?: string;
  deviceResourceId?: string;
  generateConfig?: string;
  hostName?: string;
  interConnection?: string;
  location?: string;
  loopback?: string;
  managerIp?: string;
  model?: string;
  params?: string;
  role?: string;
  setupProjectId?: string;
  sn?: string;
  specification?: string;
  stack?: boolean;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      blockNumber: 'BlockNumber',
      business: 'Business',
      config: 'Config',
      configTaskId: 'ConfigTaskId',
      configTaskStatus: 'ConfigTaskStatus',
      deliveryIp: 'DeliveryIp',
      deviceNumber: 'DeviceNumber',
      deviceResourceId: 'DeviceResourceId',
      generateConfig: 'GenerateConfig',
      hostName: 'HostName',
      interConnection: 'InterConnection',
      location: 'Location',
      loopback: 'Loopback',
      managerIp: 'ManagerIp',
      model: 'Model',
      params: 'Params',
      role: 'Role',
      setupProjectId: 'SetupProjectId',
      sn: 'Sn',
      specification: 'Specification',
      stack: 'Stack',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockNumber: 'string',
      business: 'string',
      config: 'string',
      configTaskId: 'string',
      configTaskStatus: 'string',
      deliveryIp: 'string',
      deviceNumber: 'string',
      deviceResourceId: 'string',
      generateConfig: 'string',
      hostName: 'string',
      interConnection: 'string',
      location: 'string',
      loopback: 'string',
      managerIp: 'string',
      model: 'string',
      params: 'string',
      role: 'string',
      setupProjectId: 'string',
      sn: 'string',
      specification: 'string',
      stack: 'boolean',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDevices extends $tea.Model {
  deviceFormId?: string;
  deviceFormName?: string;
  deviceId?: string;
  enablePassword?: string;
  extAttributes?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hostName?: string;
  ip?: string;
  loginPassword?: string;
  loginType?: string;
  loginUsername?: string;
  mac?: string;
  model?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  securityDomain?: string;
  serviceStatus?: string;
  sn?: string;
  snmpAccountType?: string;
  snmpAccountVersion?: string;
  snmpAuthPassphrase?: string;
  snmpAuthProtocol?: string;
  snmpCommunity?: string;
  snmpPrivacyPassphrase?: string;
  snmpPrivacyProtocol?: string;
  snmpSecurityLevel?: string;
  snmpUsername?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceFormId: 'DeviceFormId',
      deviceFormName: 'DeviceFormName',
      deviceId: 'DeviceId',
      enablePassword: 'EnablePassword',
      extAttributes: 'ExtAttributes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hostName: 'HostName',
      ip: 'Ip',
      loginPassword: 'LoginPassword',
      loginType: 'LoginType',
      loginUsername: 'LoginUsername',
      mac: 'Mac',
      model: 'Model',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      securityDomain: 'SecurityDomain',
      serviceStatus: 'ServiceStatus',
      sn: 'Sn',
      snmpAccountType: 'SnmpAccountType',
      snmpAccountVersion: 'SnmpAccountVersion',
      snmpAuthPassphrase: 'SnmpAuthPassphrase',
      snmpAuthProtocol: 'SnmpAuthProtocol',
      snmpCommunity: 'SnmpCommunity',
      snmpPrivacyPassphrase: 'SnmpPrivacyPassphrase',
      snmpPrivacyProtocol: 'SnmpPrivacyProtocol',
      snmpSecurityLevel: 'SnmpSecurityLevel',
      snmpUsername: 'SnmpUsername',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceFormId: 'string',
      deviceFormName: 'string',
      deviceId: 'string',
      enablePassword: 'string',
      extAttributes: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hostName: 'string',
      ip: 'string',
      loginPassword: 'string',
      loginType: 'string',
      loginUsername: 'string',
      mac: 'string',
      model: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      securityDomain: 'string',
      serviceStatus: 'string',
      sn: 'string',
      snmpAccountType: 'string',
      snmpAccountVersion: 'string',
      snmpAuthPassphrase: 'string',
      snmpAuthProtocol: 'string',
      snmpCommunity: 'string',
      snmpPrivacyPassphrase: 'string',
      snmpPrivacyProtocol: 'string',
      snmpSecurityLevel: 'string',
      snmpUsername: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyStatistics extends $tea.Model {
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

export class ListInspectionDevicesResponseBodyInspectionScripts extends $tea.Model {
  deviceId?: string;
  deviceState?: string;
  hostName?: string;
  manageIp?: string;
  model?: string;
  role?: string;
  space?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      hostName: 'HostName',
      manageIp: 'ManageIp',
      model: 'Model',
      role: 'Role',
      space: 'Space',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceState: 'string',
      hostName: 'string',
      manageIp: 'string',
      model: 'string',
      role: 'string',
      space: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponseBodyInspectionTaskAlarmStatistic extends $tea.Model {
  criticalNumber?: number;
  inspectionItem?: string;
  model?: string;
  vendor?: string;
  warningNumber?: number;
  static names(): { [key: string]: string } {
    return {
      criticalNumber: 'CriticalNumber',
      inspectionItem: 'InspectionItem',
      model: 'Model',
      vendor: 'Vendor',
      warningNumber: 'WarningNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criticalNumber: 'number',
      inspectionItem: 'string',
      model: 'string',
      vendor: 'string',
      warningNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTaskReportsResponseBodyInspectionTask extends $tea.Model {
  actualDeviceNumber?: number;
  alarmNumber?: number;
  alarmStatistic?: ListInspectionTaskReportsResponseBodyInspectionTaskAlarmStatistic[];
  criticalNumber?: number;
  criticalRate?: string;
  deviceRate?: string;
  failureStatistic?: string;
  failureTaskNumber?: number;
  failureTaskRate?: string;
  normalNumber?: number;
  normalRate?: string;
  runningTaskNumber?: number;
  runningTaskRate?: string;
  successTaskNumber?: number;
  successTaskRate?: string;
  taskNumber?: number;
  totalDeviceNumber?: number;
  warningNumber?: number;
  warningRate?: string;
  static names(): { [key: string]: string } {
    return {
      actualDeviceNumber: 'ActualDeviceNumber',
      alarmNumber: 'AlarmNumber',
      alarmStatistic: 'AlarmStatistic',
      criticalNumber: 'CriticalNumber',
      criticalRate: 'CriticalRate',
      deviceRate: 'DeviceRate',
      failureStatistic: 'FailureStatistic',
      failureTaskNumber: 'FailureTaskNumber',
      failureTaskRate: 'FailureTaskRate',
      normalNumber: 'NormalNumber',
      normalRate: 'NormalRate',
      runningTaskNumber: 'RunningTaskNumber',
      runningTaskRate: 'RunningTaskRate',
      successTaskNumber: 'SuccessTaskNumber',
      successTaskRate: 'SuccessTaskRate',
      taskNumber: 'TaskNumber',
      totalDeviceNumber: 'TotalDeviceNumber',
      warningNumber: 'WarningNumber',
      warningRate: 'WarningRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualDeviceNumber: 'number',
      alarmNumber: 'number',
      alarmStatistic: { 'type': 'array', 'itemType': ListInspectionTaskReportsResponseBodyInspectionTaskAlarmStatistic },
      criticalNumber: 'number',
      criticalRate: 'string',
      deviceRate: 'string',
      failureStatistic: 'string',
      failureTaskNumber: 'number',
      failureTaskRate: 'string',
      normalNumber: 'number',
      normalRate: 'string',
      runningTaskNumber: 'number',
      runningTaskRate: 'string',
      successTaskNumber: 'number',
      successTaskRate: 'string',
      taskNumber: 'number',
      totalDeviceNumber: 'number',
      warningNumber: 'number',
      warningRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponseBodyInspectionTasksInspectionAlarmRules extends $tea.Model {
  actualValue?: string;
  alarmExpression?: string;
  alarmLevel?: string;
  alarmOperator?: string;
  alarmValue?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      alarmExpression: 'AlarmExpression',
      alarmLevel: 'AlarmLevel',
      alarmOperator: 'AlarmOperator',
      alarmValue: 'AlarmValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      alarmExpression: 'string',
      alarmLevel: 'string',
      alarmOperator: 'string',
      alarmValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInspectionTasksResponseBodyInspectionTasks extends $tea.Model {
  alarmStatus?: string;
  deviceId?: string;
  deviceType?: string;
  errorCode?: string;
  executionBeginTime?: string;
  executionEndTime?: string;
  hostName?: string;
  IP?: string;
  inspectionAlarmRules?: ListInspectionTasksResponseBodyInspectionTasksInspectionAlarmRules[];
  inspectionMessage?: string;
  inspectionResult?: string;
  itemId?: string;
  itemName?: string;
  model?: string[];
  role?: string;
  scriptId?: string;
  space?: string;
  taskId?: string;
  taskStatus?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      errorCode: 'ErrorCode',
      executionBeginTime: 'ExecutionBeginTime',
      executionEndTime: 'ExecutionEndTime',
      hostName: 'HostName',
      IP: 'IP',
      inspectionAlarmRules: 'InspectionAlarmRules',
      inspectionMessage: 'InspectionMessage',
      inspectionResult: 'InspectionResult',
      itemId: 'ItemId',
      itemName: 'ItemName',
      model: 'Model',
      role: 'Role',
      scriptId: 'ScriptId',
      space: 'Space',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      deviceId: 'string',
      deviceType: 'string',
      errorCode: 'string',
      executionBeginTime: 'string',
      executionEndTime: 'string',
      hostName: 'string',
      IP: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': ListInspectionTasksResponseBodyInspectionTasksInspectionAlarmRules },
      inspectionMessage: 'string',
      inspectionResult: 'string',
      itemId: 'string',
      itemName: 'string',
      model: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      scriptId: 'string',
      space: 'string',
      taskId: 'string',
      taskStatus: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  instanceDeviceMaxCount?: string;
  instanceEndDate?: string;
  instanceId?: string;
  instanceName?: string;
  instanceOpenDate?: string;
  instanceSpec?: string;
  instanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDeviceMaxCount: 'InstanceDeviceMaxCount',
      instanceEndDate: 'InstanceEndDate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceOpenDate: 'InstanceOpenDate',
      instanceSpec: 'InstanceSpec',
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDeviceMaxCount: 'string',
      instanceEndDate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceOpenDate: 'string',
      instanceSpec: 'string',
      instanceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksResponseBodyIpBlockTasksIpList extends $tea.Model {
  devId?: string;
  devName?: string;
  ip?: string;
  origin?: string;
  ping?: string;
  static names(): { [key: string]: string } {
    return {
      devId: 'DevId',
      devName: 'DevName',
      ip: 'Ip',
      origin: 'Origin',
      ping: 'Ping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devId: 'string',
      devName: 'string',
      ip: 'string',
      origin: 'string',
      ping: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpBlocksResponseBodyIpBlockTasks extends $tea.Model {
  domain?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  ip?: string;
  ipList?: ListIpBlocksResponseBodyIpBlockTasksIpList[];
  msg?: string;
  status?: string;
  taskId?: string;
  totalIpCount?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      ip: 'Ip',
      ipList: 'IpList',
      msg: 'Msg',
      status: 'Status',
      taskId: 'TaskId',
      totalIpCount: 'TotalIpCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      ip: 'string',
      ipList: { 'type': 'array', 'itemType': ListIpBlocksResponseBodyIpBlockTasksIpList },
      msg: 'string',
      status: 'string',
      taskId: 'string',
      totalIpCount: 'number',
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
  application?: string;
  backupDeviceName?: string;
  businessTypeId?: string;
  businessTypeName?: string;
  category?: string;
  description?: string;
  deviceName?: string;
  ipBlockCode?: string;
  ipBlockId?: string;
  ipBlocks?: string[];
  isLock?: number;
  limitZoneTypes?: string;
  netBusiness?: string;
  netType?: string;
  ownership?: string;
  parentId?: string;
  status?: string;
  subBusinessTypeName?: string;
  tasks?: ListIpBlocksResponseBodyIpBlockTasks[];
  zoneLayer?: ListIpBlocksResponseBodyIpBlockZoneLayer[];
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      backupDeviceName: 'BackupDeviceName',
      businessTypeId: 'BusinessTypeId',
      businessTypeName: 'BusinessTypeName',
      category: 'Category',
      description: 'Description',
      deviceName: 'DeviceName',
      ipBlockCode: 'IpBlockCode',
      ipBlockId: 'IpBlockId',
      ipBlocks: 'IpBlocks',
      isLock: 'IsLock',
      limitZoneTypes: 'LimitZoneTypes',
      netBusiness: 'NetBusiness',
      netType: 'NetType',
      ownership: 'Ownership',
      parentId: 'ParentId',
      status: 'Status',
      subBusinessTypeName: 'SubBusinessTypeName',
      tasks: 'Tasks',
      zoneLayer: 'ZoneLayer',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      backupDeviceName: 'string',
      businessTypeId: 'string',
      businessTypeName: 'string',
      category: 'string',
      description: 'string',
      deviceName: 'string',
      ipBlockCode: 'string',
      ipBlockId: 'string',
      ipBlocks: { 'type': 'array', 'itemType': 'string' },
      isLock: 'number',
      limitZoneTypes: 'string',
      netBusiness: 'string',
      netType: 'string',
      ownership: 'string',
      parentId: 'string',
      status: 'string',
      subBusinessTypeName: 'string',
      tasks: { 'type': 'array', 'itemType': ListIpBlocksResponseBodyIpBlockTasks },
      zoneLayer: { 'type': 'array', 'itemType': ListIpBlocksResponseBodyIpBlockZoneLayer },
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLinksResponseBodyContent extends $tea.Model {
  deviceNameA?: string;
  deviceNameB?: string;
  gmtCreate?: string;
  gmtModified?: string;
  idxA?: string;
  idxB?: string;
  ipA?: string;
  ipB?: string;
  jobId?: string;
  linkName?: string;
  linkNo?: string;
  linkStatus?: string;
  linkType?: string;
  message?: string;
  portA?: string;
  portB?: string;
  portDescA?: string;
  portDescB?: string;
  portStatusA?: string;
  portStatusB?: string;
  portTypeA?: string;
  portTypeB?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNameA: 'DeviceNameA',
      deviceNameB: 'DeviceNameB',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      idxA: 'IdxA',
      idxB: 'IdxB',
      ipA: 'IpA',
      ipB: 'IpB',
      jobId: 'JobId',
      linkName: 'LinkName',
      linkNo: 'LinkNo',
      linkStatus: 'LinkStatus',
      linkType: 'LinkType',
      message: 'Message',
      portA: 'PortA',
      portB: 'PortB',
      portDescA: 'PortDescA',
      portDescB: 'PortDescB',
      portStatusA: 'PortStatusA',
      portStatusB: 'PortStatusB',
      portTypeA: 'PortTypeA',
      portTypeB: 'PortTypeB',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNameA: 'string',
      deviceNameB: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      idxA: 'string',
      idxB: 'string',
      ipA: 'string',
      ipB: 'string',
      jobId: 'string',
      linkName: 'string',
      linkNo: 'string',
      linkStatus: 'string',
      linkType: 'string',
      message: 'string',
      portA: 'string',
      portB: 'string',
      portDescA: 'string',
      portDescB: 'string',
      portStatusA: 'string',
      portStatusB: 'string',
      portTypeA: 'string',
      portTypeB: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyLogsResourceDevice extends $tea.Model {
  hostName?: string;
  physicalSpace?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      physicalSpace: 'PhysicalSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      physicalSpace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogsResponseBodyLogs extends $tea.Model {
  log?: string;
  resourceDevice?: ListLogsResponseBodyLogsResourceDevice;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      resourceDevice: 'ResourceDevice',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
      resourceDevice: ListLogsResponseBodyLogsResourceDevice,
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMonitorDataResponseBodyMonitorData extends $tea.Model {
  dataItem?: string;
  key?: string;
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataItem: 'DataItem',
      key: 'Key',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataItem: 'string',
      key: 'string',
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationHistoriesResponseBodyNotificationHistories extends $tea.Model {
  aggregateDataId?: string;
  alarmStatus?: string;
  appId?: string;
  dedicatedLineId?: string;
  deviceId?: string;
  message?: string;
  monitorItemId?: string;
  notificationGroupId?: string;
  notificationGroupName?: string;
  notificationMode?: string;
  output?: string;
  portCollectionId?: string;
  status?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDataId: 'AggregateDataId',
      alarmStatus: 'AlarmStatus',
      appId: 'AppId',
      dedicatedLineId: 'DedicatedLineId',
      deviceId: 'DeviceId',
      message: 'Message',
      monitorItemId: 'MonitorItemId',
      notificationGroupId: 'NotificationGroupId',
      notificationGroupName: 'NotificationGroupName',
      notificationMode: 'NotificationMode',
      output: 'Output',
      portCollectionId: 'PortCollectionId',
      status: 'Status',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDataId: 'string',
      alarmStatus: 'string',
      appId: 'string',
      dedicatedLineId: 'string',
      deviceId: 'string',
      message: 'string',
      monitorItemId: 'string',
      notificationGroupId: 'string',
      notificationGroupName: 'string',
      notificationMode: 'string',
      output: 'string',
      portCollectionId: 'string',
      status: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOsVersionsResponseBodyOsVersion extends $tea.Model {
  createTime?: string;
  fileName?: string;
  filePath?: string;
  model?: string;
  osVersion?: string;
  osVersionId?: string;
  status?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      filePath: 'FilePath',
      model: 'Model',
      osVersion: 'OsVersion',
      osVersionId: 'OsVersionId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      filePath: 'string',
      model: 'string',
      osVersion: 'string',
      osVersionId: 'string',
      status: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalSpacesResponseBodyPhysicalSpaces extends $tea.Model {
  address?: string;
  city?: string;
  country?: string;
  instance?: string;
  owner?: string;
  physicalSpaceId?: string;
  physicalSpaceName?: string;
  province?: string;
  remark?: string;
  spaceAbbreviation?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      instance: 'Instance',
      owner: 'Owner',
      physicalSpaceId: 'PhysicalSpaceId',
      physicalSpaceName: 'PhysicalSpaceName',
      province: 'Province',
      remark: 'Remark',
      spaceAbbreviation: 'SpaceAbbreviation',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      instance: 'string',
      owner: 'string',
      physicalSpaceId: 'string',
      physicalSpaceName: 'string',
      province: 'string',
      remark: 'string',
      spaceAbbreviation: 'string',
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponseBodyResourceInformationInformation extends $tea.Model {
  key?: string;
  keyAction?: string;
  keyAttribute?: string;
  keyDescription?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAction: 'KeyAction',
      keyAttribute: 'KeyAttribute',
      keyDescription: 'KeyDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAction: 'string',
      keyAttribute: 'string',
      keyDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInformationsResponseBodyResourceInformation extends $tea.Model {
  information?: ListResourceInformationsResponseBodyResourceInformationInformation[];
  resourceAttribute?: string;
  resourceInformationId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      information: 'Information',
      resourceAttribute: 'ResourceAttribute',
      resourceInformationId: 'ResourceInformationId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      information: { 'type': 'array', 'itemType': ListResourceInformationsResponseBodyResourceInformationInformation },
      resourceAttribute: 'string',
      resourceInformationId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBodyLogicResourceKeyList extends $tea.Model {
  key?: string;
  keyAction?: string;
  keyAttribute?: string;
  keyDescription?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAction: 'KeyAction',
      keyAttribute: 'KeyAttribute',
      keyDescription: 'KeyDescription',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAction: 'string',
      keyAttribute: 'string',
      keyDescription: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBodyLogicResource extends $tea.Model {
  keyList?: ListResourceInstancesResponseBodyLogicResourceKeyList[];
  resourceAttribute?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      keyList: 'KeyList',
      resourceAttribute: 'ResourceAttribute',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyList: { 'type': 'array', 'itemType': ListResourceInstancesResponseBodyLogicResourceKeyList },
      resourceAttribute: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceType extends $tea.Model {
  key?: string;
  resourceType?: string;
  resourceTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      resourceType: 'ResourceType',
      resourceTypeName: 'ResourceTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      resourceType: 'string',
      resourceTypeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponseBodySetupProjectPackages extends $tea.Model {
  deviceNumber?: number;
  model?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      model: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'number',
      model: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSetupProjectsResponseBodySetupProject extends $tea.Model {
  archVersion?: string;
  architectureId?: string;
  createTime?: string;
  deliveryTime?: string;
  description?: string;
  nodes?: string;
  packages?: ListSetupProjectsResponseBodySetupProjectPackages[];
  progress?: string;
  setupProjectId?: string;
  spaceId?: string;
  spaceName?: string;
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      archVersion: 'ArchVersion',
      architectureId: 'ArchitectureId',
      createTime: 'CreateTime',
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      nodes: 'Nodes',
      packages: 'Packages',
      progress: 'Progress',
      setupProjectId: 'SetupProjectId',
      spaceId: 'SpaceId',
      spaceName: 'SpaceName',
      spaceType: 'SpaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archVersion: 'string',
      architectureId: 'string',
      createTime: 'string',
      deliveryTime: 'string',
      description: 'string',
      nodes: 'string',
      packages: { 'type': 'array', 'itemType': ListSetupProjectsResponseBodySetupProjectPackages },
      progress: 'string',
      setupProjectId: 'string',
      spaceId: 'string',
      spaceName: 'string',
      spaceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsResponseBodySpaceModelSort extends $tea.Model {
  level?: number;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpaceModelsResponseBodySpaceModel extends $tea.Model {
  createTime?: string;
  sort?: ListSpaceModelsResponseBodySpaceModelSort[];
  spaceModelId?: string;
  spaceType?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      sort: 'Sort',
      spaceModelId: 'SpaceModelId',
      spaceType: 'SpaceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sort: { 'type': 'array', 'itemType': ListSpaceModelsResponseBodySpaceModelSort },
      spaceModelId: 'string',
      spaceType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponseBodyInspectionTasksInspectionAlarmRules extends $tea.Model {
  actualValue?: string;
  alarmExpression?: string;
  alarmLevel?: string;
  alarmOperator?: string;
  alarmValue?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      alarmExpression: 'AlarmExpression',
      alarmLevel: 'AlarmLevel',
      alarmOperator: 'AlarmOperator',
      alarmValue: 'AlarmValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      alarmExpression: 'string',
      alarmLevel: 'string',
      alarmOperator: 'string',
      alarmValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksHistoriesResponseBodyInspectionTasks extends $tea.Model {
  executionBeginTime?: string;
  executionEndTime?: string;
  inspectionAlarmRules?: ListTasksHistoriesResponseBodyInspectionTasksInspectionAlarmRules[];
  inspectionResult?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      executionBeginTime: 'ExecutionBeginTime',
      executionEndTime: 'ExecutionEndTime',
      inspectionAlarmRules: 'InspectionAlarmRules',
      inspectionResult: 'InspectionResult',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionBeginTime: 'string',
      executionEndTime: 'string',
      inspectionAlarmRules: { 'type': 'array', 'itemType': ListTasksHistoriesResponseBodyInspectionTasksInspectionAlarmRules },
      inspectionResult: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkOrdersResponseBodyContentWorkOrderOperationDtos extends $tea.Model {
  gmtCreate?: string;
  operation?: string;
  operationId?: string;
  operator?: string;
  remark?: string;
  workOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      operation: 'Operation',
      operationId: 'OperationId',
      operator: 'Operator',
      remark: 'Remark',
      workOrderId: 'WorkOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      operation: 'string',
      operationId: 'string',
      operator: 'string',
      remark: 'string',
      workOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkOrdersResponseBodyContent extends $tea.Model {
  alarmHappenTime?: string;
  alarmRecoverTime?: string;
  alarmRelated?: string;
  area?: string;
  circuitId?: string;
  circuitName?: string;
  circuitType?: string;
  deviceAlarmInfo?: string;
  deviceIp?: string;
  deviceIpA?: string;
  deviceIpB?: string;
  deviceModelA?: string;
  deviceModelB?: string;
  deviceName?: string;
  deviceNameA?: string;
  deviceNameB?: string;
  devicePortA?: string;
  devicePortB?: string;
  deviceSnA?: string;
  deviceSnB?: string;
  deviceType?: string;
  deviceVendor?: string;
  deviceVendorA?: string;
  deviceVendorB?: string;
  emergencyDegree?: string;
  extra?: string;
  faultDuration?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hangFileName?: string;
  hangFilePath?: string;
  hangReason?: string;
  impactBusiness?: string;
  incidentDescription?: string;
  incidentSubType?: string;
  incidentType?: string;
  liableMan?: string;
  linkMan?: string;
  originalSubjectAlarm?: string;
  processLimited?: string;
  processMan?: string;
  processManId?: string;
  processResult?: string;
  skillGroups?: string;
  timeout?: string;
  workOrderId?: string;
  workOrderOperationDtos?: ListWorkOrdersResponseBodyContentWorkOrderOperationDtos[];
  workOrderSource?: string;
  workOrderStep?: string;
  workOrderTitle?: string;
  workOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHappenTime: 'AlarmHappenTime',
      alarmRecoverTime: 'AlarmRecoverTime',
      alarmRelated: 'AlarmRelated',
      area: 'Area',
      circuitId: 'CircuitId',
      circuitName: 'CircuitName',
      circuitType: 'CircuitType',
      deviceAlarmInfo: 'DeviceAlarmInfo',
      deviceIp: 'DeviceIp',
      deviceIpA: 'DeviceIpA',
      deviceIpB: 'DeviceIpB',
      deviceModelA: 'DeviceModelA',
      deviceModelB: 'DeviceModelB',
      deviceName: 'DeviceName',
      deviceNameA: 'DeviceNameA',
      deviceNameB: 'DeviceNameB',
      devicePortA: 'DevicePortA',
      devicePortB: 'DevicePortB',
      deviceSnA: 'DeviceSnA',
      deviceSnB: 'DeviceSnB',
      deviceType: 'DeviceType',
      deviceVendor: 'DeviceVendor',
      deviceVendorA: 'DeviceVendorA',
      deviceVendorB: 'DeviceVendorB',
      emergencyDegree: 'EmergencyDegree',
      extra: 'Extra',
      faultDuration: 'FaultDuration',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hangFileName: 'HangFileName',
      hangFilePath: 'HangFilePath',
      hangReason: 'HangReason',
      impactBusiness: 'ImpactBusiness',
      incidentDescription: 'IncidentDescription',
      incidentSubType: 'IncidentSubType',
      incidentType: 'IncidentType',
      liableMan: 'LiableMan',
      linkMan: 'LinkMan',
      originalSubjectAlarm: 'OriginalSubjectAlarm',
      processLimited: 'ProcessLimited',
      processMan: 'ProcessMan',
      processManId: 'ProcessManId',
      processResult: 'ProcessResult',
      skillGroups: 'SkillGroups',
      timeout: 'Timeout',
      workOrderId: 'WorkOrderId',
      workOrderOperationDtos: 'WorkOrderOperationDtos',
      workOrderSource: 'WorkOrderSource',
      workOrderStep: 'WorkOrderStep',
      workOrderTitle: 'WorkOrderTitle',
      workOrderType: 'WorkOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHappenTime: 'string',
      alarmRecoverTime: 'string',
      alarmRelated: 'string',
      area: 'string',
      circuitId: 'string',
      circuitName: 'string',
      circuitType: 'string',
      deviceAlarmInfo: 'string',
      deviceIp: 'string',
      deviceIpA: 'string',
      deviceIpB: 'string',
      deviceModelA: 'string',
      deviceModelB: 'string',
      deviceName: 'string',
      deviceNameA: 'string',
      deviceNameB: 'string',
      devicePortA: 'string',
      devicePortB: 'string',
      deviceSnA: 'string',
      deviceSnB: 'string',
      deviceType: 'string',
      deviceVendor: 'string',
      deviceVendorA: 'string',
      deviceVendorB: 'string',
      emergencyDegree: 'string',
      extra: 'string',
      faultDuration: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hangFileName: 'string',
      hangFilePath: 'string',
      hangReason: 'string',
      impactBusiness: 'string',
      incidentDescription: 'string',
      incidentSubType: 'string',
      incidentType: 'string',
      liableMan: 'string',
      linkMan: 'string',
      originalSubjectAlarm: 'string',
      processLimited: 'string',
      processMan: 'string',
      processManId: 'string',
      processResult: 'string',
      skillGroups: 'string',
      timeout: 'string',
      workOrderId: 'string',
      workOrderOperationDtos: { 'type': 'array', 'itemType': ListWorkOrdersResponseBodyContentWorkOrderOperationDtos },
      workOrderSource: 'string',
      workOrderStep: 'string',
      workOrderTitle: 'string',
      workOrderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryTasksRequestRetryTasks extends $tea.Model {
  deviceId?: string;
  itemName?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      itemName: 'ItemName',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      itemName: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceFormRequestAttributeList extends $tea.Model {
  attributeFormat?: string;
  attributeFuzzyQuery?: boolean;
  attributeKey?: string;
  attributeName?: string;
  attributePlaceholder?: string;
  attributeQuery?: boolean;
  attributeReference?: string;
  attributeRequirement?: boolean;
  attributeTableDisplay?: boolean;
  attributeType?: string;
  attributeUniqueness?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeFormat: 'AttributeFormat',
      attributeFuzzyQuery: 'AttributeFuzzyQuery',
      attributeKey: 'AttributeKey',
      attributeName: 'AttributeName',
      attributePlaceholder: 'AttributePlaceholder',
      attributeQuery: 'AttributeQuery',
      attributeReference: 'AttributeReference',
      attributeRequirement: 'AttributeRequirement',
      attributeTableDisplay: 'AttributeTableDisplay',
      attributeType: 'AttributeType',
      attributeUniqueness: 'AttributeUniqueness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFormat: 'string',
      attributeFuzzyQuery: 'boolean',
      attributeKey: 'string',
      attributeName: 'string',
      attributePlaceholder: 'string',
      attributeQuery: 'boolean',
      attributeReference: 'string',
      attributeRequirement: 'boolean',
      attributeTableDisplay: 'boolean',
      attributeType: 'string',
      attributeUniqueness: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInformationRequestInformation extends $tea.Model {
  key?: string;
  keyAction?: string;
  keyAttribute?: string;
  keyDescription?: string;
  setupProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyAction: 'KeyAction',
      keyAttribute: 'KeyAttribute',
      keyDescription: 'KeyDescription',
      setupProjectId: 'SetupProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyAction: 'string',
      keyAttribute: 'string',
      keyDescription: 'string',
      setupProjectId: 'string',
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

export class UpdateSetupProjectRequestPackages extends $tea.Model {
  deviceNumber?: number;
  model?: string;
  role?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNumber: 'DeviceNumber',
      model: 'Model',
      role: 'Role',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNumber: 'number',
      model: 'string',
      role: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSpaceModelRequestSort extends $tea.Model {
  level?: number;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      levelName: 'string',
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

  async applyIPWithOptions(tmpReq: ApplyIPRequest, runtime: $Util.RuntimeOptions): Promise<ApplyIPResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyIPShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.businessTypeId)) {
      query["BusinessTypeId"] = request.businessTypeId;
    }

    if (!Util.isUnset(request.businessTypeParams)) {
      query["BusinessTypeParams"] = request.businessTypeParams;
    }

    if (!Util.isUnset(request.deviceResourceId)) {
      query["DeviceResourceId"] = request.deviceResourceId;
    }

    if (!Util.isUnset(request.deviceResourceIdsShrink)) {
      query["DeviceResourceIds"] = request.deviceResourceIdsShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!Util.isUnset(request.loopbackPort)) {
      query["LoopbackPort"] = request.loopbackPort;
    }

    if (!Util.isUnset(request.netLocation)) {
      query["NetLocation"] = request.netLocation;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      query["SetupProjectId"] = request.setupProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyIP",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyIPResponse>(await this.callApi(params, req, runtime), new ApplyIPResponse({}));
  }

  async applyIP(request: ApplyIPRequest): Promise<ApplyIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyIPWithOptions(request, runtime);
  }

  async autoDutyWithOptions(request: AutoDutyRequest, runtime: $Util.RuntimeOptions): Promise<AutoDutyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dutyBatch)) {
      body["DutyBatch"] = request.dutyBatch;
    }

    if (!Util.isUnset(request.dutyName)) {
      body["DutyName"] = request.dutyName;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AutoDuty",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AutoDutyResponse>(await this.callApi(params, req, runtime), new AutoDutyResponse({}));
  }

  async autoDuty(request: AutoDutyRequest): Promise<AutoDutyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.autoDutyWithOptions(request, runtime);
  }

  async closeEventWithOptions(request: CloseEventRequest, runtime: $Util.RuntimeOptions): Promise<CloseEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventObjectId)) {
      body["EventObjectId"] = request.eventObjectId;
    }

    if (!Util.isUnset(request.eventType)) {
      body["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloseEvent",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseEventResponse>(await this.callApi(params, req, runtime), new CloseEventResponse({}));
  }

  async closeEvent(request: CloseEventRequest): Promise<CloseEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeEventWithOptions(request, runtime);
  }

  async createConfigurationSpecificationWithOptions(tmpReq: CreateConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigurationSpecificationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateConfigurationSpecificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedVariate)) {
      request.relatedVariateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedVariate, "RelatedVariate", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architecture)) {
      body["Architecture"] = request.architecture;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.relatedVariateShrink)) {
      body["RelatedVariate"] = request.relatedVariateShrink;
    }

    if (!Util.isUnset(request.role)) {
      body["Role"] = request.role;
    }

    if (!Util.isUnset(request.specificationContent)) {
      body["SpecificationContent"] = request.specificationContent;
    }

    if (!Util.isUnset(request.specificationName)) {
      body["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigurationSpecification",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigurationSpecificationResponse>(await this.callApi(params, req, runtime), new CreateConfigurationSpecificationResponse({}));
  }

  async createConfigurationSpecification(request: CreateConfigurationSpecificationRequest): Promise<CreateConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigurationSpecificationWithOptions(request, runtime);
  }

  async createConfigurationVariateWithOptions(request: CreateConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigurationVariateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.formatFunction)) {
      body["FormatFunction"] = request.formatFunction;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.variateName)) {
      body["VariateName"] = request.variateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigurationVariate",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigurationVariateResponse>(await this.callApi(params, req, runtime), new CreateConfigurationVariateResponse({}));
  }

  async createConfigurationVariate(request: CreateConfigurationVariateRequest): Promise<CreateConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigurationVariateWithOptions(request, runtime);
  }

  async createDedicatedLineWithOptions(request: CreateDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.contact)) {
      body["Contact"] = request.contact;
    }

    if (!Util.isUnset(request.dedicatedLineGateway)) {
      body["DedicatedLineGateway"] = request.dedicatedLineGateway;
    }

    if (!Util.isUnset(request.dedicatedLineIp)) {
      body["DedicatedLineIp"] = request.dedicatedLineIp;
    }

    if (!Util.isUnset(request.dedicatedLineRole)) {
      body["DedicatedLineRole"] = request.dedicatedLineRole;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.devicePort)) {
      body["DevicePort"] = request.devicePort;
    }

    if (!Util.isUnset(request.isp)) {
      body["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      body["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDedicatedLine",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDedicatedLineResponse>(await this.callApi(params, req, runtime), new CreateDedicatedLineResponse({}));
  }

  async createDedicatedLine(request: CreateDedicatedLineRequest): Promise<CreateDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedLineWithOptions(request, runtime);
  }

  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deviceFormId)) {
      body["DeviceFormId"] = request.deviceFormId;
    }

    if (!Util.isUnset(request.enablePassword)) {
      body["EnablePassword"] = request.enablePassword;
    }

    if (!Util.isUnset(request.extAttributes)) {
      body["ExtAttributes"] = request.extAttributes;
    }

    if (!Util.isUnset(request.hostName)) {
      body["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["LoginPassword"] = request.loginPassword;
    }

    if (!Util.isUnset(request.loginType)) {
      body["LoginType"] = request.loginType;
    }

    if (!Util.isUnset(request.loginUsername)) {
      body["LoginUsername"] = request.loginUsername;
    }

    if (!Util.isUnset(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      body["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    if (!Util.isUnset(request.securityDomain)) {
      body["SecurityDomain"] = request.securityDomain;
    }

    if (!Util.isUnset(request.serviceStatus)) {
      body["ServiceStatus"] = request.serviceStatus;
    }

    if (!Util.isUnset(request.sn)) {
      body["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.snmpAccountType)) {
      body["SnmpAccountType"] = request.snmpAccountType;
    }

    if (!Util.isUnset(request.snmpAccountVersion)) {
      body["SnmpAccountVersion"] = request.snmpAccountVersion;
    }

    if (!Util.isUnset(request.snmpAuthPassphrase)) {
      body["SnmpAuthPassphrase"] = request.snmpAuthPassphrase;
    }

    if (!Util.isUnset(request.snmpAuthProtocol)) {
      body["SnmpAuthProtocol"] = request.snmpAuthProtocol;
    }

    if (!Util.isUnset(request.snmpCommunity)) {
      body["SnmpCommunity"] = request.snmpCommunity;
    }

    if (!Util.isUnset(request.snmpPrivacyPassphrase)) {
      body["SnmpPrivacyPassphrase"] = request.snmpPrivacyPassphrase;
    }

    if (!Util.isUnset(request.snmpPrivacyProtocol)) {
      body["SnmpPrivacyProtocol"] = request.snmpPrivacyProtocol;
    }

    if (!Util.isUnset(request.snmpSecurityLevel)) {
      body["SnmpSecurityLevel"] = request.snmpSecurityLevel;
    }

    if (!Util.isUnset(request.snmpUsername)) {
      body["SnmpUsername"] = request.snmpUsername;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDevice",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeviceResponse>(await this.callApi(params, req, runtime), new CreateDeviceResponse({}));
  }

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  async createDeviceFormWithOptions(request: CreateDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceFormResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountConfig)) {
      body["AccountConfig"] = request.accountConfig;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configCompare)) {
      body["ConfigCompare"] = request.configCompare;
    }

    if (!Util.isUnset(request.detailDisplay)) {
      body["DetailDisplay"] = request.detailDisplay;
    }

    if (!Util.isUnset(request.deviceFormName)) {
      body["DeviceFormName"] = request.deviceFormName;
    }

    if (!Util.isUnset(request.relatedDeviceFormId)) {
      body["RelatedDeviceFormId"] = request.relatedDeviceFormId;
    }

    if (!Util.isUnset(request.resourceUse)) {
      body["ResourceUse"] = request.resourceUse;
    }

    if (!Util.isUnset(request.script)) {
      body["Script"] = request.script;
    }

    if (!Util.isUnset(request.uniqueKey)) {
      body["UniqueKey"] = request.uniqueKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeviceForm",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeviceFormResponse>(await this.callApi(params, req, runtime), new CreateDeviceFormResponse({}));
  }

  async createDeviceForm(request: CreateDeviceFormRequest): Promise<CreateDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceFormWithOptions(request, runtime);
  }

  async createDevicePropertyWithOptions(request: CreateDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevicePropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deviceFormId)) {
      body["DeviceFormId"] = request.deviceFormId;
    }

    if (!Util.isUnset(request.propertyContent)) {
      body["PropertyContent"] = request.propertyContent;
    }

    if (!Util.isUnset(request.propertyFormat)) {
      body["PropertyFormat"] = request.propertyFormat;
    }

    if (!Util.isUnset(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!Util.isUnset(request.propertyName)) {
      body["PropertyName"] = request.propertyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeviceProperty",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDevicePropertyResponse>(await this.callApi(params, req, runtime), new CreateDevicePropertyResponse({}));
  }

  async createDeviceProperty(request: CreateDevicePropertyRequest): Promise<CreateDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevicePropertyWithOptions(request, runtime);
  }

  async createDevicesWithOptions(tmpReq: CreateDevicesRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevicesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceParamModelList)) {
      request.deviceParamModelListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceParamModelList, "DeviceParamModelList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deviceFormId)) {
      body["DeviceFormId"] = request.deviceFormId;
    }

    if (!Util.isUnset(request.deviceParamModelListShrink)) {
      body["DeviceParamModelList"] = request.deviceParamModelListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDevices",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDevicesResponse>(await this.callApi(params, req, runtime), new CreateDevicesResponse({}));
  }

  async createDevices(request: CreateDevicesRequest): Promise<CreateDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevicesWithOptions(request, runtime);
  }

  async createEventDefinitionWithOptions(request: CreateEventDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventType)) {
      body["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEventDefinition",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEventDefinitionResponse>(await this.callApi(params, req, runtime), new CreateEventDefinitionResponse({}));
  }

  async createEventDefinition(request: CreateEventDefinitionRequest): Promise<CreateEventDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventDefinitionWithOptions(request, runtime);
  }

  async createLinkJobWithOptions(request: CreateLinkJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateLinkJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoConfirm)) {
      body["AutoConfirm"] = request.autoConfirm;
    }

    if (!Util.isUnset(request.doubleConvertStrategy)) {
      body["DoubleConvertStrategy"] = request.doubleConvertStrategy;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.singleStrategy)) {
      body["SingleStrategy"] = request.singleStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLinkJob",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLinkJobResponse>(await this.callApi(params, req, runtime), new CreateLinkJobResponse({}));
  }

  async createLinkJob(request: CreateLinkJobRequest): Promise<CreateLinkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLinkJobWithOptions(request, runtime);
  }

  async createMonitorItemWithOptions(request: CreateMonitorItemRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmRuleList)) {
      body["AlarmRuleList"] = request.alarmRuleList;
    }

    if (!Util.isUnset(request.analysisCode)) {
      body["AnalysisCode"] = request.analysisCode;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.collectionType)) {
      body["CollectionType"] = request.collectionType;
    }

    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.dataItem)) {
      body["DataItem"] = request.dataItem;
    }

    if (!Util.isUnset(request.deviceForm)) {
      body["DeviceForm"] = request.deviceForm;
    }

    if (!Util.isUnset(request.effective)) {
      body["Effective"] = request.effective;
    }

    if (!Util.isUnset(request.execInterval)) {
      body["ExecInterval"] = request.execInterval;
    }

    if (!Util.isUnset(request.monitorItemDescription)) {
      body["MonitorItemDescription"] = request.monitorItemDescription;
    }

    if (!Util.isUnset(request.monitorItemName)) {
      body["MonitorItemName"] = request.monitorItemName;
    }

    if (!Util.isUnset(request.securityDomain)) {
      body["SecurityDomain"] = request.securityDomain;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorItem",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorItemResponse>(await this.callApi(params, req, runtime), new CreateMonitorItemResponse({}));
  }

  async createMonitorItem(request: CreateMonitorItemRequest): Promise<CreateMonitorItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorItemWithOptions(request, runtime);
  }

  async createOsVersionWithOptions(request: CreateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateOsVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createTime)) {
      body["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOsVersion",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOsVersionResponse>(await this.callApi(params, req, runtime), new CreateOsVersionResponse({}));
  }

  async createOsVersion(request: CreateOsVersionRequest): Promise<CreateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOsVersionWithOptions(request, runtime);
  }

  async createPhysicalSpaceWithOptions(request: CreatePhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhysicalSpaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      body["Address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      body["City"] = request.city;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.country)) {
      body["Country"] = request.country;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.physicalSpaceName)) {
      body["PhysicalSpaceName"] = request.physicalSpaceName;
    }

    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.spaceAbbreviation)) {
      body["SpaceAbbreviation"] = request.spaceAbbreviation;
    }

    if (!Util.isUnset(request.spaceType)) {
      body["SpaceType"] = request.spaceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePhysicalSpace",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePhysicalSpaceResponse>(await this.callApi(params, req, runtime), new CreatePhysicalSpaceResponse({}));
  }

  async createPhysicalSpace(request: CreatePhysicalSpaceRequest): Promise<CreatePhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhysicalSpaceWithOptions(request, runtime);
  }

  async createRealtimeTaskWithOptions(request: CreateRealtimeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRealtimeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.script)) {
      body["Script"] = request.script;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRealtimeTask",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRealtimeTaskResponse>(await this.callApi(params, req, runtime), new CreateRealtimeTaskResponse({}));
  }

  async createRealtimeTask(request: CreateRealtimeTaskRequest): Promise<CreateRealtimeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRealtimeTaskWithOptions(request, runtime);
  }

  async createResourceInformationWithOptions(request: CreateResourceInformationRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceInformationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architectureId)) {
      body["ArchitectureId"] = request.architectureId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.information)) {
      bodyFlat["Information"] = request.information;
    }

    if (!Util.isUnset(request.resourceAttribute)) {
      body["ResourceAttribute"] = request.resourceAttribute;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceInformation",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceInformationResponse>(await this.callApi(params, req, runtime), new CreateResourceInformationResponse({}));
  }

  async createResourceInformation(request: CreateResourceInformationRequest): Promise<CreateResourceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceInformationWithOptions(request, runtime);
  }

  async createSetupProjectWithOptions(request: CreateSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateSetupProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliveryTime)) {
      body["DeliveryTime"] = request.deliveryTime;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSetupProject",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSetupProjectResponse>(await this.callApi(params, req, runtime), new CreateSetupProjectResponse({}));
  }

  async createSetupProject(request: CreateSetupProjectRequest): Promise<CreateSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSetupProjectWithOptions(request, runtime);
  }

  async createSpaceModelWithOptions(tmpReq: CreateSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateSpaceModelResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSpaceModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.spaceType)) {
      body["SpaceType"] = request.spaceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSpaceModel",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSpaceModelResponse>(await this.callApi(params, req, runtime), new CreateSpaceModelResponse({}));
  }

  async createSpaceModel(request: CreateSpaceModelRequest): Promise<CreateSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpaceModelWithOptions(request, runtime);
  }

  async createTaskWithOptions(request: CreateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  async createTimePeriodWithOptions(request: CreateTimePeriodRequest, runtime: $Util.RuntimeOptions): Promise<CreateTimePeriodResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.expression)) {
      body["Expression"] = request.expression;
    }

    if (!Util.isUnset(request.timePeriodDescription)) {
      body["TimePeriodDescription"] = request.timePeriodDescription;
    }

    if (!Util.isUnset(request.timePeriodName)) {
      body["TimePeriodName"] = request.timePeriodName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTimePeriod",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTimePeriodResponse>(await this.callApi(params, req, runtime), new CreateTimePeriodResponse({}));
  }

  async createTimePeriod(request: CreateTimePeriodRequest): Promise<CreateTimePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTimePeriodWithOptions(request, runtime);
  }

  async createWorkOrderWithOptions(request: CreateWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmHappenTime)) {
      body["AlarmHappenTime"] = request.alarmHappenTime;
    }

    if (!Util.isUnset(request.alarmRecoverTime)) {
      body["AlarmRecoverTime"] = request.alarmRecoverTime;
    }

    if (!Util.isUnset(request.alarmRelated)) {
      body["AlarmRelated"] = request.alarmRelated;
    }

    if (!Util.isUnset(request.area)) {
      body["Area"] = request.area;
    }

    if (!Util.isUnset(request.circuitId)) {
      body["CircuitId"] = request.circuitId;
    }

    if (!Util.isUnset(request.circuitName)) {
      body["CircuitName"] = request.circuitName;
    }

    if (!Util.isUnset(request.circuitType)) {
      body["CircuitType"] = request.circuitType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deviceIp)) {
      body["DeviceIp"] = request.deviceIp;
    }

    if (!Util.isUnset(request.deviceIpA)) {
      body["DeviceIpA"] = request.deviceIpA;
    }

    if (!Util.isUnset(request.deviceIpB)) {
      body["DeviceIpB"] = request.deviceIpB;
    }

    if (!Util.isUnset(request.deviceModelA)) {
      body["DeviceModelA"] = request.deviceModelA;
    }

    if (!Util.isUnset(request.deviceModelB)) {
      body["DeviceModelB"] = request.deviceModelB;
    }

    if (!Util.isUnset(request.deviceName)) {
      body["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceNameA)) {
      body["DeviceNameA"] = request.deviceNameA;
    }

    if (!Util.isUnset(request.deviceNameB)) {
      body["DeviceNameB"] = request.deviceNameB;
    }

    if (!Util.isUnset(request.devicePortA)) {
      body["DevicePortA"] = request.devicePortA;
    }

    if (!Util.isUnset(request.devicePortB)) {
      body["DevicePortB"] = request.devicePortB;
    }

    if (!Util.isUnset(request.deviceSnA)) {
      body["DeviceSnA"] = request.deviceSnA;
    }

    if (!Util.isUnset(request.deviceSnB)) {
      body["DeviceSnB"] = request.deviceSnB;
    }

    if (!Util.isUnset(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.deviceVendor)) {
      body["DeviceVendor"] = request.deviceVendor;
    }

    if (!Util.isUnset(request.deviceVendorA)) {
      body["DeviceVendorA"] = request.deviceVendorA;
    }

    if (!Util.isUnset(request.deviceVendorB)) {
      body["DeviceVendorB"] = request.deviceVendorB;
    }

    if (!Util.isUnset(request.emergencyDegree)) {
      body["EmergencyDegree"] = request.emergencyDegree;
    }

    if (!Util.isUnset(request.impactBusiness)) {
      body["ImpactBusiness"] = request.impactBusiness;
    }

    if (!Util.isUnset(request.incidentDescription)) {
      body["IncidentDescription"] = request.incidentDescription;
    }

    if (!Util.isUnset(request.incidentSubType)) {
      body["IncidentSubType"] = request.incidentSubType;
    }

    if (!Util.isUnset(request.incidentType)) {
      body["IncidentType"] = request.incidentType;
    }

    if (!Util.isUnset(request.liableMan)) {
      body["LiableMan"] = request.liableMan;
    }

    if (!Util.isUnset(request.linkMan)) {
      body["LinkMan"] = request.linkMan;
    }

    if (!Util.isUnset(request.originalSubjectAlarm)) {
      body["OriginalSubjectAlarm"] = request.originalSubjectAlarm;
    }

    if (!Util.isUnset(request.processLimited)) {
      body["ProcessLimited"] = request.processLimited;
    }

    if (!Util.isUnset(request.processMan)) {
      body["ProcessMan"] = request.processMan;
    }

    if (!Util.isUnset(request.processManId)) {
      body["ProcessManId"] = request.processManId;
    }

    if (!Util.isUnset(request.skillGroups)) {
      body["SkillGroups"] = request.skillGroups;
    }

    if (!Util.isUnset(request.workOrderSource)) {
      body["WorkOrderSource"] = request.workOrderSource;
    }

    if (!Util.isUnset(request.workOrderStep)) {
      body["WorkOrderStep"] = request.workOrderStep;
    }

    if (!Util.isUnset(request.workOrderTitle)) {
      body["WorkOrderTitle"] = request.workOrderTitle;
    }

    if (!Util.isUnset(request.workOrderType)) {
      body["WorkOrderType"] = request.workOrderType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkOrder",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkOrderResponse>(await this.callApi(params, req, runtime), new CreateWorkOrderResponse({}));
  }

  async createWorkOrder(request: CreateWorkOrderRequest): Promise<CreateWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkOrderWithOptions(request, runtime);
  }

  async deleteConfigurationSpecificationWithOptions(request: DeleteConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigurationSpecificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configurationSpecificationId)) {
      body["ConfigurationSpecificationId"] = request.configurationSpecificationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigurationSpecification",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigurationSpecificationResponse>(await this.callApi(params, req, runtime), new DeleteConfigurationSpecificationResponse({}));
  }

  async deleteConfigurationSpecification(request: DeleteConfigurationSpecificationRequest): Promise<DeleteConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigurationSpecificationWithOptions(request, runtime);
  }

  async deleteConfigurationVariateWithOptions(request: DeleteConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigurationVariateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configurationVariateId)) {
      body["ConfigurationVariateId"] = request.configurationVariateId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigurationVariate",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigurationVariateResponse>(await this.callApi(params, req, runtime), new DeleteConfigurationVariateResponse({}));
  }

  async deleteConfigurationVariate(request: DeleteConfigurationVariateRequest): Promise<DeleteConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigurationVariateWithOptions(request, runtime);
  }

  async deleteDedicatedLineWithOptions(request: DeleteDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dedicatedLineId)) {
      body["DedicatedLineId"] = request.dedicatedLineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDedicatedLine",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDedicatedLineResponse>(await this.callApi(params, req, runtime), new DeleteDedicatedLineResponse({}));
  }

  async deleteDedicatedLine(request: DeleteDedicatedLineRequest): Promise<DeleteDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedLineWithOptions(request, runtime);
  }

  async deleteDeliveryArchVersionWithOptions(request: DeleteDeliveryArchVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeliveryArchVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliveryArchVersionId)) {
      body["DeliveryArchVersionId"] = request.deliveryArchVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeliveryArchVersion",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeliveryArchVersionResponse>(await this.callApi(params, req, runtime), new DeleteDeliveryArchVersionResponse({}));
  }

  async deleteDeliveryArchVersion(request: DeleteDeliveryArchVersionRequest): Promise<DeleteDeliveryArchVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeliveryArchVersionWithOptions(request, runtime);
  }

  async deleteDeliveryProjectWithOptions(request: DeleteDeliveryProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeliveryProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliveryProjectId)) {
      body["DeliveryProjectId"] = request.deliveryProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeliveryProject",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeliveryProjectResponse>(await this.callApi(params, req, runtime), new DeleteDeliveryProjectResponse({}));
  }

  async deleteDeliveryProject(request: DeleteDeliveryProjectRequest): Promise<DeleteDeliveryProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeliveryProjectWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDevice",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeviceResponse>(await this.callApi(params, req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async deleteDeviceFormWithOptions(request: DeleteDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceFormResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceFormId)) {
      body["DeviceFormId"] = request.deviceFormId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeviceForm",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeviceFormResponse>(await this.callApi(params, req, runtime), new DeleteDeviceFormResponse({}));
  }

  async deleteDeviceForm(request: DeleteDeviceFormRequest): Promise<DeleteDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceFormWithOptions(request, runtime);
  }

  async deleteDevicePropertyWithOptions(request: DeleteDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicePropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.devicePropertyId)) {
      body["DevicePropertyId"] = request.devicePropertyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeviceProperty",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDevicePropertyResponse>(await this.callApi(params, req, runtime), new DeleteDevicePropertyResponse({}));
  }

  async deleteDeviceProperty(request: DeleteDevicePropertyRequest): Promise<DeleteDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicePropertyWithOptions(request, runtime);
  }

  async deleteDeviceResourceWithOptions(request: DeleteDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceResourceId)) {
      query["DeviceResourceId"] = request.deviceResourceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeviceResource",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeviceResourceResponse>(await this.callApi(params, req, runtime), new DeleteDeviceResourceResponse({}));
  }

  async deleteDeviceResource(request: DeleteDeviceResourceRequest): Promise<DeleteDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceResourceWithOptions(request, runtime);
  }

  async deleteDevicesWithOptions(tmpReq: DeleteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceIds)) {
      request.deviceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceIds, "DeviceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceIdsShrink)) {
      body["DeviceIds"] = request.deviceIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDevices",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDevicesResponse>(await this.callApi(params, req, runtime), new DeleteDevicesResponse({}));
  }

  async deleteDevices(request: DeleteDevicesRequest): Promise<DeleteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicesWithOptions(request, runtime);
  }

  async deleteEventDefinitionWithOptions(request: DeleteEventDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventDefinition",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventDefinitionResponse>(await this.callApi(params, req, runtime), new DeleteEventDefinitionResponse({}));
  }

  async deleteEventDefinition(request: DeleteEventDefinitionRequest): Promise<DeleteEventDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventDefinitionWithOptions(request, runtime);
  }

  async deleteInspectionTaskWithOptions(request: DeleteInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInspectionTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInspectionTask",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInspectionTaskResponse>(await this.callApi(params, req, runtime), new DeleteInspectionTaskResponse({}));
  }

  async deleteInspectionTask(request: DeleteInspectionTaskRequest): Promise<DeleteInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInspectionTaskWithOptions(request, runtime);
  }

  async deleteOsVersionWithOptions(request: DeleteOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOsVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.osVersionId)) {
      body["OsVersionId"] = request.osVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOsVersion",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOsVersionResponse>(await this.callApi(params, req, runtime), new DeleteOsVersionResponse({}));
  }

  async deleteOsVersion(request: DeleteOsVersionRequest): Promise<DeleteOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOsVersionWithOptions(request, runtime);
  }

  async deletePhysicalSpaceWithOptions(request: DeletePhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhysicalSpaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.physicalSpaceId)) {
      body["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePhysicalSpace",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePhysicalSpaceResponse>(await this.callApi(params, req, runtime), new DeletePhysicalSpaceResponse({}));
  }

  async deletePhysicalSpace(request: DeletePhysicalSpaceRequest): Promise<DeletePhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhysicalSpaceWithOptions(request, runtime);
  }

  async deleteResourceInformationWithOptions(request: DeleteResourceInformationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceInformationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceInformationId)) {
      body["ResourceInformationId"] = request.resourceInformationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceInformation",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceInformationResponse>(await this.callApi(params, req, runtime), new DeleteResourceInformationResponse({}));
  }

  async deleteResourceInformation(request: DeleteResourceInformationRequest): Promise<DeleteResourceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceInformationWithOptions(request, runtime);
  }

  async deleteSetupProjectWithOptions(request: DeleteSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSetupProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.setupProjectId)) {
      body["SetupProjectId"] = request.setupProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSetupProject",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSetupProjectResponse>(await this.callApi(params, req, runtime), new DeleteSetupProjectResponse({}));
  }

  async deleteSetupProject(request: DeleteSetupProjectRequest): Promise<DeleteSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSetupProjectWithOptions(request, runtime);
  }

  async deleteSpaceModelWithOptions(request: DeleteSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpaceModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.spaceModelId)) {
      query["SpaceModelId"] = request.spaceModelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSpaceModel",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSpaceModelResponse>(await this.callApi(params, req, runtime), new DeleteSpaceModelResponse({}));
  }

  async deleteSpaceModel(request: DeleteSpaceModelRequest): Promise<DeleteSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpaceModelWithOptions(request, runtime);
  }

  async deleteWorkOrderWithOptions(request: DeleteWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workOrderId)) {
      body["WorkOrderId"] = request.workOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkOrder",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkOrderResponse>(await this.callApi(params, req, runtime), new DeleteWorkOrderResponse({}));
  }

  async deleteWorkOrder(request: DeleteWorkOrderRequest): Promise<DeleteWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkOrderWithOptions(request, runtime);
  }

  async disableNotificationWithOptions(request: DisableNotificationRequest, runtime: $Util.RuntimeOptions): Promise<DisableNotificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expiryTime)) {
      body["ExpiryTime"] = request.expiryTime;
    }

    if (!Util.isUnset(request.list)) {
      body["List"] = request.list;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableNotification",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableNotificationResponse>(await this.callApi(params, req, runtime), new DisableNotificationResponse({}));
  }

  async disableNotification(request: DisableNotificationRequest): Promise<DisableNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableNotificationWithOptions(request, runtime);
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadDeviceResource",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadDeviceResourceResponse>(await this.callApi(params, req, runtime), new DownloadDeviceResourceResponse({}));
  }

  async downloadDeviceResource(request: DownloadDeviceResourceRequest): Promise<DownloadDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDeviceResourceWithOptions(request, runtime);
  }

  async enableNotificationWithOptions(request: EnableNotificationRequest, runtime: $Util.RuntimeOptions): Promise<EnableNotificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.list)) {
      body["List"] = request.list;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableNotification",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableNotificationResponse>(await this.callApi(params, req, runtime), new EnableNotificationResponse({}));
  }

  async enableNotification(request: EnableNotificationRequest): Promise<EnableNotificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableNotificationWithOptions(request, runtime);
  }

  async getAlarmStatusWithOptions(request: GetAlarmStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAlarmStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlarmStatus",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlarmStatusResponse>(await this.callApi(params, req, runtime), new GetAlarmStatusResponse({}));
  }

  async getAlarmStatus(request: GetAlarmStatusRequest): Promise<GetAlarmStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlarmStatusWithOptions(request, runtime);
  }

  async getConfigurationSpecificationWithOptions(request: GetConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigurationSpecificationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigurationSpecification",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigurationSpecificationResponse>(await this.callApi(params, req, runtime), new GetConfigurationSpecificationResponse({}));
  }

  async getConfigurationSpecification(request: GetConfigurationSpecificationRequest): Promise<GetConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigurationSpecificationWithOptions(request, runtime);
  }

  async getConfigurationVariateWithOptions(request: GetConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigurationVariateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigurationVariate",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigurationVariateResponse>(await this.callApi(params, req, runtime), new GetConfigurationVariateResponse({}));
  }

  async getConfigurationVariate(request: GetConfigurationVariateRequest): Promise<GetConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigurationVariateWithOptions(request, runtime);
  }

  async getDedicatedLineWithOptions(request: GetDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<GetDedicatedLineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDedicatedLine",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDedicatedLineResponse>(await this.callApi(params, req, runtime), new GetDedicatedLineResponse({}));
  }

  async getDedicatedLine(request: GetDedicatedLineRequest): Promise<GetDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDedicatedLineWithOptions(request, runtime);
  }

  async getDeviceWithOptions(request: GetDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDevice",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceResponse>(await this.callApi(params, req, runtime), new GetDeviceResponse({}));
  }

  async getDevice(request: GetDeviceRequest): Promise<GetDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceWithOptions(request, runtime);
  }

  async getDeviceConfigWithOptions(request: GetDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceConfig",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceConfigResponse>(await this.callApi(params, req, runtime), new GetDeviceConfigResponse({}));
  }

  async getDeviceConfig(request: GetDeviceConfigRequest): Promise<GetDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigWithOptions(request, runtime);
  }

  async getDeviceConfigDateWithOptions(request: GetDeviceConfigDateRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigDateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceConfigDate",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceConfigDateResponse>(await this.callApi(params, req, runtime), new GetDeviceConfigDateResponse({}));
  }

  async getDeviceConfigDate(request: GetDeviceConfigDateRequest): Promise<GetDeviceConfigDateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigDateWithOptions(request, runtime);
  }

  async getDeviceConfigDiffWithOptions(request: GetDeviceConfigDiffRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigDiffResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceConfigDiff",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceConfigDiffResponse>(await this.callApi(params, req, runtime), new GetDeviceConfigDiffResponse({}));
  }

  async getDeviceConfigDiff(request: GetDeviceConfigDiffRequest): Promise<GetDeviceConfigDiffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigDiffWithOptions(request, runtime);
  }

  async getDeviceFormWithOptions(request: GetDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceFormResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceForm",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceFormResponse>(await this.callApi(params, req, runtime), new GetDeviceFormResponse({}));
  }

  async getDeviceForm(request: GetDeviceFormRequest): Promise<GetDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceFormWithOptions(request, runtime);
  }

  async getDeviceOpLogWithOptions(request: GetDeviceOpLogRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceOpLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceOpLog",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceOpLogResponse>(await this.callApi(params, req, runtime), new GetDeviceOpLogResponse({}));
  }

  async getDeviceOpLog(request: GetDeviceOpLogRequest): Promise<GetDeviceOpLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceOpLogWithOptions(request, runtime);
  }

  async getDevicePropertyWithOptions(request: GetDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<GetDevicePropertyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceProperty",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDevicePropertyResponse>(await this.callApi(params, req, runtime), new GetDevicePropertyResponse({}));
  }

  async getDeviceProperty(request: GetDevicePropertyRequest): Promise<GetDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevicePropertyWithOptions(request, runtime);
  }

  async getDeviceResourceWithOptions(request: GetDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceResource",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceResourceResponse>(await this.callApi(params, req, runtime), new GetDeviceResourceResponse({}));
  }

  async getDeviceResource(request: GetDeviceResourceRequest): Promise<GetDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceResourceWithOptions(request, runtime);
  }

  async getInspectionTaskWithOptions(request: GetInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetInspectionTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInspectionTask",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInspectionTaskResponse>(await this.callApi(params, req, runtime), new GetInspectionTaskResponse({}));
  }

  async getInspectionTask(request: GetInspectionTaskRequest): Promise<GetInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInspectionTaskWithOptions(request, runtime);
  }

  async getOsDownloadPathWithOptions(request: GetOsDownloadPathRequest, runtime: $Util.RuntimeOptions): Promise<GetOsDownloadPathResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOsDownloadPath",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOsDownloadPathResponse>(await this.callApi(params, req, runtime), new GetOsDownloadPathResponse({}));
  }

  async getOsDownloadPath(request: GetOsDownloadPathRequest): Promise<GetOsDownloadPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOsDownloadPathWithOptions(request, runtime);
  }

  async getOsVersionWithOptions(request: GetOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetOsVersionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOsVersion",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOsVersionResponse>(await this.callApi(params, req, runtime), new GetOsVersionResponse({}));
  }

  async getOsVersion(request: GetOsVersionRequest): Promise<GetOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOsVersionWithOptions(request, runtime);
  }

  async getOssPolicyWithOptions(request: GetOssPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetOssPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOssPolicy",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOssPolicyResponse>(await this.callApi(params, req, runtime), new GetOssPolicyResponse({}));
  }

  async getOssPolicy(request: GetOssPolicyRequest): Promise<GetOssPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssPolicyWithOptions(request, runtime);
  }

  async getPhysicalSpaceWithOptions(request: GetPhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalSpaceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalSpace",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalSpaceResponse>(await this.callApi(params, req, runtime), new GetPhysicalSpaceResponse({}));
  }

  async getPhysicalSpace(request: GetPhysicalSpaceRequest): Promise<GetPhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalSpaceWithOptions(request, runtime);
  }

  async getPhysicalSpaceTopoWithOptions(request: GetPhysicalSpaceTopoRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalSpaceTopoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      query["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    if (!Util.isUnset(request.topoType)) {
      query["TopoType"] = request.topoType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalSpaceTopo",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalSpaceTopoResponse>(await this.callApi(params, req, runtime), new GetPhysicalSpaceTopoResponse({}));
  }

  async getPhysicalSpaceTopo(request: GetPhysicalSpaceTopoRequest): Promise<GetPhysicalSpaceTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalSpaceTopoWithOptions(request, runtime);
  }

  async getRealtimeTaskWithOptions(request: GetRealtimeTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetRealtimeTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealtimeTask",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealtimeTaskResponse>(await this.callApi(params, req, runtime), new GetRealtimeTaskResponse({}));
  }

  async getRealtimeTask(request: GetRealtimeTaskRequest): Promise<GetRealtimeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealtimeTaskWithOptions(request, runtime);
  }

  async getScheduleWorkerWithOptions(request: GetScheduleWorkerRequest, runtime: $Util.RuntimeOptions): Promise<GetScheduleWorkerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScheduleWorker",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScheduleWorkerResponse>(await this.callApi(params, req, runtime), new GetScheduleWorkerResponse({}));
  }

  async getScheduleWorker(request: GetScheduleWorkerRequest): Promise<GetScheduleWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScheduleWorkerWithOptions(request, runtime);
  }

  async getSetupProjectWithOptions(request: GetSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetSetupProjectResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSetupProject",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSetupProjectResponse>(await this.callApi(params, req, runtime), new GetSetupProjectResponse({}));
  }

  async getSetupProject(request: GetSetupProjectRequest): Promise<GetSetupProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSetupProjectWithOptions(request, runtime);
  }

  async getSpaceModelWithOptions(request: GetSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<GetSpaceModelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSpaceModel",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSpaceModelResponse>(await this.callApi(params, req, runtime), new GetSpaceModelResponse({}));
  }

  async getSpaceModel(request: GetSpaceModelRequest): Promise<GetSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpaceModelWithOptions(request, runtime);
  }

  async getSpaceModelInstanceWithOptions(request: GetSpaceModelInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetSpaceModelInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSpaceModelInstance",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSpaceModelInstanceResponse>(await this.callApi(params, req, runtime), new GetSpaceModelInstanceResponse({}));
  }

  async getSpaceModelInstance(request: GetSpaceModelInstanceRequest): Promise<GetSpaceModelInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpaceModelInstanceWithOptions(request, runtime);
  }

  async getSpaceModelSortWithOptions(request: GetSpaceModelSortRequest, runtime: $Util.RuntimeOptions): Promise<GetSpaceModelSortResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSpaceModelSort",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSpaceModelSortResponse>(await this.callApi(params, req, runtime), new GetSpaceModelSortResponse({}));
  }

  async getSpaceModelSort(request: GetSpaceModelSortRequest): Promise<GetSpaceModelSortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpaceModelSortWithOptions(request, runtime);
  }

  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  async getWorkOrderWithOptions(request: GetWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkOrderResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkOrder",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkOrderResponse>(await this.callApi(params, req, runtime), new GetWorkOrderResponse({}));
  }

  async getWorkOrder(request: GetWorkOrderRequest): Promise<GetWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkOrderWithOptions(request, runtime);
  }

  async listAlarmStatusWithOptions(request: ListAlarmStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlarmStatus",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlarmStatusResponse>(await this.callApi(params, req, runtime), new ListAlarmStatusResponse({}));
  }

  async listAlarmStatus(request: ListAlarmStatusRequest): Promise<ListAlarmStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmStatusWithOptions(request, runtime);
  }

  async listAlarmStatusHistoriesWithOptions(request: ListAlarmStatusHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmStatusHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlarmStatusHistories",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlarmStatusHistoriesResponse>(await this.callApi(params, req, runtime), new ListAlarmStatusHistoriesResponse({}));
  }

  async listAlarmStatusHistories(request: ListAlarmStatusHistoriesRequest): Promise<ListAlarmStatusHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmStatusHistoriesWithOptions(request, runtime);
  }

  async listAlarmStatusStatisticsWithOptions(request: ListAlarmStatusStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlarmStatusStatisticsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlarmStatusStatistics",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlarmStatusStatisticsResponse>(await this.callApi(params, req, runtime), new ListAlarmStatusStatisticsResponse({}));
  }

  async listAlarmStatusStatistics(request: ListAlarmStatusStatisticsRequest): Promise<ListAlarmStatusStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlarmStatusStatisticsWithOptions(request, runtime);
  }

  async listArchitectureAttributeWithOptions(request: ListArchitectureAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ListArchitectureAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListArchitectureAttribute",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListArchitectureAttributeResponse>(await this.callApi(params, req, runtime), new ListArchitectureAttributeResponse({}));
  }

  async listArchitectureAttribute(request: ListArchitectureAttributeRequest): Promise<ListArchitectureAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listArchitectureAttributeWithOptions(request, runtime);
  }

  async listConfigurationSpecificationsWithOptions(request: ListConfigurationSpecificationsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigurationSpecificationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigurationSpecifications",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigurationSpecificationsResponse>(await this.callApi(params, req, runtime), new ListConfigurationSpecificationsResponse({}));
  }

  async listConfigurationSpecifications(request: ListConfigurationSpecificationsRequest): Promise<ListConfigurationSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigurationSpecificationsWithOptions(request, runtime);
  }

  async listConfigurationVariateWithOptions(request: ListConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigurationVariateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigurationVariate",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigurationVariateResponse>(await this.callApi(params, req, runtime), new ListConfigurationVariateResponse({}));
  }

  async listConfigurationVariate(request: ListConfigurationVariateRequest): Promise<ListConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigurationVariateWithOptions(request, runtime);
  }

  async listConnectionPoliciesWithOptions(request: ListConnectionPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architectureIterationId)) {
      body["ArchitectureIterationId"] = request.architectureIterationId;
    }

    if (!Util.isUnset(request.connectionPolicyId)) {
      body["ConnectionPolicyId"] = request.connectionPolicyId;
    }

    if (!Util.isUnset(request.downlinkArchitectureDeviceId)) {
      body["DownlinkArchitectureDeviceId"] = request.downlinkArchitectureDeviceId;
    }

    if (!Util.isUnset(request.downlinkArchitectureModuleId)) {
      body["DownlinkArchitectureModuleId"] = request.downlinkArchitectureModuleId;
    }

    if (!Util.isUnset(request.uplinkArchitectureDeviceId)) {
      body["UplinkArchitectureDeviceId"] = request.uplinkArchitectureDeviceId;
    }

    if (!Util.isUnset(request.uplinkArchitectureModuleId)) {
      body["UplinkArchitectureModuleId"] = request.uplinkArchitectureModuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListConnectionPolicies",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionPoliciesResponse>(await this.callApi(params, req, runtime), new ListConnectionPoliciesResponse({}));
  }

  async listConnectionPolicies(request: ListConnectionPoliciesRequest): Promise<ListConnectionPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoliciesWithOptions(request, runtime);
  }

  async listDedicatedLinesWithOptions(request: ListDedicatedLinesRequest, runtime: $Util.RuntimeOptions): Promise<ListDedicatedLinesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDedicatedLines",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDedicatedLinesResponse>(await this.callApi(params, req, runtime), new ListDedicatedLinesResponse({}));
  }

  async listDedicatedLines(request: ListDedicatedLinesRequest): Promise<ListDedicatedLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDedicatedLinesWithOptions(request, runtime);
  }

  async listDeviceFormsWithOptions(request: ListDeviceFormsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceFormsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceForms",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceFormsResponse>(await this.callApi(params, req, runtime), new ListDeviceFormsResponse({}));
  }

  async listDeviceForms(request: ListDeviceFormsRequest): Promise<ListDeviceFormsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceFormsWithOptions(request, runtime);
  }

  async listDevicePropertiesWithOptions(request: ListDevicePropertiesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicePropertiesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceProperties",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDevicePropertiesResponse>(await this.callApi(params, req, runtime), new ListDevicePropertiesResponse({}));
  }

  async listDeviceProperties(request: ListDevicePropertiesRequest): Promise<ListDevicePropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicePropertiesWithOptions(request, runtime);
  }

  async listDeviceResourcesWithOptions(request: ListDeviceResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceResources",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceResourcesResponse>(await this.callApi(params, req, runtime), new ListDeviceResourcesResponse({}));
  }

  async listDeviceResources(request: ListDeviceResourcesRequest): Promise<ListDeviceResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceResourcesWithOptions(request, runtime);
  }

  async listDeviceValuesWithOptions(request: ListDeviceValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceValuesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceValues",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceValuesResponse>(await this.callApi(params, req, runtime), new ListDeviceValuesResponse({}));
  }

  async listDeviceValues(request: ListDeviceValuesRequest): Promise<ListDeviceValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceValuesWithOptions(request, runtime);
  }

  async listDevicesWithOptions(tmpReq: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDevicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceIds)) {
      request.deviceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceIds, "DeviceIds", "json");
    }

    if (!Util.isUnset(tmpReq.physicalSpaceIds)) {
      request.physicalSpaceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.physicalSpaceIds, "PhysicalSpaceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.deviceFormId)) {
      query["DeviceFormId"] = request.deviceFormId;
    }

    if (!Util.isUnset(request.deviceFormName)) {
      query["DeviceFormName"] = request.deviceFormName;
    }

    if (!Util.isUnset(request.deviceIdsShrink)) {
      query["DeviceIds"] = request.deviceIdsShrink;
    }

    if (!Util.isUnset(request.extAttributes)) {
      query["ExtAttributes"] = request.extAttributes;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.model)) {
      query["Model"] = request.model;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      query["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    if (!Util.isUnset(request.physicalSpaceIdsShrink)) {
      query["PhysicalSpaceIds"] = request.physicalSpaceIdsShrink;
    }

    if (!Util.isUnset(request.securityDomain)) {
      query["SecurityDomain"] = request.securityDomain;
    }

    if (!Util.isUnset(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDevices",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDevicesResponse>(await this.callApi(params, req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async listEventDefinitionsWithOptions(request: ListEventDefinitionsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventDefinitionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEventDefinitions",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventDefinitionsResponse>(await this.callApi(params, req, runtime), new ListEventDefinitionsResponse({}));
  }

  async listEventDefinitions(request: ListEventDefinitionsRequest): Promise<ListEventDefinitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventDefinitionsWithOptions(request, runtime);
  }

  async listEventsWithOptions(request: ListEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEvents",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventsResponse>(await this.callApi(params, req, runtime), new ListEventsResponse({}));
  }

  async listEvents(request: ListEventsRequest): Promise<ListEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventsWithOptions(request, runtime);
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInspectionDevices",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInspectionDevicesResponse>(await this.callApi(params, req, runtime), new ListInspectionDevicesResponse({}));
  }

  async listInspectionDevices(request: ListInspectionDevicesRequest): Promise<ListInspectionDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInspectionDevicesWithOptions(request, runtime);
  }

  async listInspectionTaskReportsWithOptions(request: ListInspectionTaskReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListInspectionTaskReportsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInspectionTaskReports",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInspectionTaskReportsResponse>(await this.callApi(params, req, runtime), new ListInspectionTaskReportsResponse({}));
  }

  async listInspectionTaskReports(request: ListInspectionTaskReportsRequest): Promise<ListInspectionTaskReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInspectionTaskReportsWithOptions(request, runtime);
  }

  async listInspectionTasksWithOptions(tmpReq: ListInspectionTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListInspectionTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInspectionTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarmStatus)) {
      request.alarmStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmStatus, "AlarmStatus", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInspectionTasks",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInspectionTasksResponse>(await this.callApi(params, req, runtime), new ListInspectionTasksResponse({}));
  }

  async listInspectionTasks(request: ListInspectionTasksRequest): Promise<ListInspectionTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInspectionTasksWithOptions(request, runtime);
  }

  async listInstancesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(runtime);
  }

  async listIpBlocksWithOptions(request: ListIpBlocksRequest, runtime: $Util.RuntimeOptions): Promise<ListIpBlocksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIpBlocks",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIpBlocksResponse>(await this.callApi(params, req, runtime), new ListIpBlocksResponse({}));
  }

  async listIpBlocks(request: ListIpBlocksRequest): Promise<ListIpBlocksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpBlocksWithOptions(request, runtime);
  }

  async listLinksWithOptions(request: ListLinksRequest, runtime: $Util.RuntimeOptions): Promise<ListLinksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLinks",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLinksResponse>(await this.callApi(params, req, runtime), new ListLinksResponse({}));
  }

  async listLinks(request: ListLinksRequest): Promise<ListLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLinksWithOptions(request, runtime);
  }

  async listLogsWithOptions(request: ListLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogs",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLogsResponse>(await this.callApi(params, req, runtime), new ListLogsResponse({}));
  }

  async listLogs(request: ListLogsRequest): Promise<ListLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogsWithOptions(request, runtime);
  }

  async listMonitorDataWithOptions(request: ListMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<ListMonitorDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMonitorData",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMonitorDataResponse>(await this.callApi(params, req, runtime), new ListMonitorDataResponse({}));
  }

  async listMonitorData(request: ListMonitorDataRequest): Promise<ListMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMonitorDataWithOptions(request, runtime);
  }

  async listNotificationHistoriesWithOptions(request: ListNotificationHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListNotificationHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNotificationHistories",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNotificationHistoriesResponse>(await this.callApi(params, req, runtime), new ListNotificationHistoriesResponse({}));
  }

  async listNotificationHistories(request: ListNotificationHistoriesRequest): Promise<ListNotificationHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotificationHistoriesWithOptions(request, runtime);
  }

  async listOsVersionsWithOptions(request: ListOsVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListOsVersionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOsVersions",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOsVersionsResponse>(await this.callApi(params, req, runtime), new ListOsVersionsResponse({}));
  }

  async listOsVersions(request: ListOsVersionsRequest): Promise<ListOsVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOsVersionsWithOptions(request, runtime);
  }

  async listPhysicalSpacesWithOptions(request: ListPhysicalSpacesRequest, runtime: $Util.RuntimeOptions): Promise<ListPhysicalSpacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPhysicalSpaces",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPhysicalSpacesResponse>(await this.callApi(params, req, runtime), new ListPhysicalSpacesResponse({}));
  }

  async listPhysicalSpaces(request: ListPhysicalSpacesRequest): Promise<ListPhysicalSpacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhysicalSpacesWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async listResourceInformationsWithOptions(request: ListResourceInformationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceInformationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceInformations",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceInformationsResponse>(await this.callApi(params, req, runtime), new ListResourceInformationsResponse({}));
  }

  async listResourceInformations(request: ListResourceInformationsRequest): Promise<ListResourceInformationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceInformationsWithOptions(request, runtime);
  }

  async listResourceInstancesWithOptions(request: ListResourceInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceInstances",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceInstancesResponse>(await this.callApi(params, req, runtime), new ListResourceInstancesResponse({}));
  }

  async listResourceInstances(request: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceInstancesWithOptions(request, runtime);
  }

  async listResourceTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListResourceTypes",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypesResponse>(await this.callApi(params, req, runtime), new ListResourceTypesResponse({}));
  }

  async listResourceTypes(): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(runtime);
  }

  async listSetupProjectsWithOptions(request: ListSetupProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListSetupProjectsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSetupProjects",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSetupProjectsResponse>(await this.callApi(params, req, runtime), new ListSetupProjectsResponse({}));
  }

  async listSetupProjects(request: ListSetupProjectsRequest): Promise<ListSetupProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSetupProjectsWithOptions(request, runtime);
  }

  async listSpaceModelsWithOptions(request: ListSpaceModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListSpaceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSpaceModels",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSpaceModelsResponse>(await this.callApi(params, req, runtime), new ListSpaceModelsResponse({}));
  }

  async listSpaceModels(request: ListSpaceModelsRequest): Promise<ListSpaceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpaceModelsWithOptions(request, runtime);
  }

  async listTasksHistoriesWithOptions(request: ListTasksHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasksHistories",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTasksHistoriesResponse>(await this.callApi(params, req, runtime), new ListTasksHistoriesResponse({}));
  }

  async listTasksHistories(request: ListTasksHistoriesRequest): Promise<ListTasksHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksHistoriesWithOptions(request, runtime);
  }

  async listWorkOrdersWithOptions(request: ListWorkOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceSnA)) {
      body["DeviceSnA"] = request.deviceSnA;
    }

    if (!Util.isUnset(request.workOrderSource)) {
      body["WorkOrderSource"] = request.workOrderSource;
    }

    if (!Util.isUnset(request.workOrderStep)) {
      body["WorkOrderStep"] = request.workOrderStep;
    }

    if (!Util.isUnset(request.workOrderTitle)) {
      body["WorkOrderTitle"] = request.workOrderTitle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkOrders",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkOrdersResponse>(await this.callApi(params, req, runtime), new ListWorkOrdersResponse({}));
  }

  async listWorkOrders(request: ListWorkOrdersRequest): Promise<ListWorkOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkOrdersWithOptions(request, runtime);
  }

  async lockSpaceModelWithOptions(request: LockSpaceModelRequest, runtime: $Util.RuntimeOptions): Promise<LockSpaceModelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.spaceModelId)) {
      query["SpaceModelId"] = request.spaceModelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockSpaceModel",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockSpaceModelResponse>(await this.callApi(params, req, runtime), new LockSpaceModelResponse({}));
  }

  async lockSpaceModel(request: LockSpaceModelRequest): Promise<LockSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockSpaceModelWithOptions(request, runtime);
  }

  async releaseIPWithOptions(tmpReq: ReleaseIPRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseIPResponse> {
    Util.validateModel(tmpReq);
    let request = new ReleaseIPShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.deviceResourceId)) {
      query["DeviceResourceId"] = request.deviceResourceId;
    }

    if (!Util.isUnset(request.deviceResourceIdsShrink)) {
      query["DeviceResourceIds"] = request.deviceResourceIdsShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      query["SetupProjectId"] = request.setupProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseIP",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseIPResponse>(await this.callApi(params, req, runtime), new ReleaseIPResponse({}));
  }

  async releaseIP(request: ReleaseIPRequest): Promise<ReleaseIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseIPWithOptions(request, runtime);
  }

  async remarkWorkOrderWithOptions(request: RemarkWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<RemarkWorkOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.workOrderId)) {
      body["WorkOrderId"] = request.workOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemarkWorkOrder",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemarkWorkOrderResponse>(await this.callApi(params, req, runtime), new RemarkWorkOrderResponse({}));
  }

  async remarkWorkOrder(request: RemarkWorkOrderRequest): Promise<RemarkWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.remarkWorkOrderWithOptions(request, runtime);
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryTasks",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryTasksResponse>(await this.callApi(params, req, runtime), new RetryTasksResponse({}));
  }

  async retryTasks(request: RetryTasksRequest): Promise<RetryTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryTasksWithOptions(request, runtime);
  }

  async updateConfigurationSpecificationWithOptions(tmpReq: UpdateConfigurationSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigurationSpecificationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateConfigurationSpecificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedVariate)) {
      request.relatedVariateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedVariate, "RelatedVariate", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architecture)) {
      body["Architecture"] = request.architecture;
    }

    if (!Util.isUnset(request.configurationSpecificationId)) {
      body["ConfigurationSpecificationId"] = request.configurationSpecificationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.relatedVariateShrink)) {
      body["RelatedVariate"] = request.relatedVariateShrink;
    }

    if (!Util.isUnset(request.role)) {
      body["Role"] = request.role;
    }

    if (!Util.isUnset(request.specificationContent)) {
      body["SpecificationContent"] = request.specificationContent;
    }

    if (!Util.isUnset(request.specificationName)) {
      body["SpecificationName"] = request.specificationName;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigurationSpecification",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigurationSpecificationResponse>(await this.callApi(params, req, runtime), new UpdateConfigurationSpecificationResponse({}));
  }

  async updateConfigurationSpecification(request: UpdateConfigurationSpecificationRequest): Promise<UpdateConfigurationSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigurationSpecificationWithOptions(request, runtime);
  }

  async updateConfigurationVariateWithOptions(request: UpdateConfigurationVariateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigurationVariateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.configurationVariateId)) {
      body["ConfigurationVariateId"] = request.configurationVariateId;
    }

    if (!Util.isUnset(request.formatFunction)) {
      body["FormatFunction"] = request.formatFunction;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.variateName)) {
      body["VariateName"] = request.variateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigurationVariate",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigurationVariateResponse>(await this.callApi(params, req, runtime), new UpdateConfigurationVariateResponse({}));
  }

  async updateConfigurationVariate(request: UpdateConfigurationVariateRequest): Promise<UpdateConfigurationVariateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigurationVariateWithOptions(request, runtime);
  }

  async updateDedicatedLineWithOptions(request: UpdateDedicatedLineRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDedicatedLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.contact)) {
      body["Contact"] = request.contact;
    }

    if (!Util.isUnset(request.dedicatedLineGateway)) {
      body["DedicatedLineGateway"] = request.dedicatedLineGateway;
    }

    if (!Util.isUnset(request.dedicatedLineId)) {
      body["DedicatedLineId"] = request.dedicatedLineId;
    }

    if (!Util.isUnset(request.dedicatedLineIp)) {
      body["DedicatedLineIp"] = request.dedicatedLineIp;
    }

    if (!Util.isUnset(request.dedicatedLineRole)) {
      body["DedicatedLineRole"] = request.dedicatedLineRole;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.devicePort)) {
      body["DevicePort"] = request.devicePort;
    }

    if (!Util.isUnset(request.isp)) {
      body["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDedicatedLine",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDedicatedLineResponse>(await this.callApi(params, req, runtime), new UpdateDedicatedLineResponse({}));
  }

  async updateDedicatedLine(request: UpdateDedicatedLineRequest): Promise<UpdateDedicatedLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDedicatedLineWithOptions(request, runtime);
  }

  async updateDeviceWithOptions(request: UpdateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.enablePassword)) {
      body["EnablePassword"] = request.enablePassword;
    }

    if (!Util.isUnset(request.extAttributes)) {
      body["ExtAttributes"] = request.extAttributes;
    }

    if (!Util.isUnset(request.hostName)) {
      body["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["LoginPassword"] = request.loginPassword;
    }

    if (!Util.isUnset(request.loginType)) {
      body["LoginType"] = request.loginType;
    }

    if (!Util.isUnset(request.loginUsername)) {
      body["LoginUsername"] = request.loginUsername;
    }

    if (!Util.isUnset(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      body["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    if (!Util.isUnset(request.securityDomain)) {
      body["SecurityDomain"] = request.securityDomain;
    }

    if (!Util.isUnset(request.serviceStatus)) {
      body["ServiceStatus"] = request.serviceStatus;
    }

    if (!Util.isUnset(request.sn)) {
      body["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.snmpAccountType)) {
      body["SnmpAccountType"] = request.snmpAccountType;
    }

    if (!Util.isUnset(request.snmpAccountVersion)) {
      body["SnmpAccountVersion"] = request.snmpAccountVersion;
    }

    if (!Util.isUnset(request.snmpAuthPassphrase)) {
      body["SnmpAuthPassphrase"] = request.snmpAuthPassphrase;
    }

    if (!Util.isUnset(request.snmpAuthProtocol)) {
      body["SnmpAuthProtocol"] = request.snmpAuthProtocol;
    }

    if (!Util.isUnset(request.snmpCommunity)) {
      body["SnmpCommunity"] = request.snmpCommunity;
    }

    if (!Util.isUnset(request.snmpPrivacyPassphrase)) {
      body["SnmpPrivacyPassphrase"] = request.snmpPrivacyPassphrase;
    }

    if (!Util.isUnset(request.snmpPrivacyProtocol)) {
      body["SnmpPrivacyProtocol"] = request.snmpPrivacyProtocol;
    }

    if (!Util.isUnset(request.snmpSecurityLevel)) {
      body["SnmpSecurityLevel"] = request.snmpSecurityLevel;
    }

    if (!Util.isUnset(request.snmpUsername)) {
      body["SnmpUsername"] = request.snmpUsername;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDevice",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceResponse>(await this.callApi(params, req, runtime), new UpdateDeviceResponse({}));
  }

  async updateDevice(request: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceWithOptions(request, runtime);
  }

  async updateDeviceFormWithOptions(tmpReq: UpdateDeviceFormRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceFormResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDeviceFormShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attributeList)) {
      request.attributeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributeList, "AttributeList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountConfig)) {
      body["AccountConfig"] = request.accountConfig;
    }

    if (!Util.isUnset(request.attributeListShrink)) {
      body["AttributeList"] = request.attributeListShrink;
    }

    if (!Util.isUnset(request.configCompare)) {
      body["ConfigCompare"] = request.configCompare;
    }

    if (!Util.isUnset(request.detailDisplay)) {
      body["DetailDisplay"] = request.detailDisplay;
    }

    if (!Util.isUnset(request.deviceFormId)) {
      body["DeviceFormId"] = request.deviceFormId;
    }

    if (!Util.isUnset(request.relatedDeviceFormId)) {
      body["RelatedDeviceFormId"] = request.relatedDeviceFormId;
    }

    if (!Util.isUnset(request.script)) {
      body["Script"] = request.script;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeviceForm",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceFormResponse>(await this.callApi(params, req, runtime), new UpdateDeviceFormResponse({}));
  }

  async updateDeviceForm(request: UpdateDeviceFormRequest): Promise<UpdateDeviceFormResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceFormWithOptions(request, runtime);
  }

  async updateDevicePropertyWithOptions(request: UpdateDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevicePropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.devicePropertyId)) {
      body["DevicePropertyId"] = request.devicePropertyId;
    }

    if (!Util.isUnset(request.propertyContent)) {
      body["PropertyContent"] = request.propertyContent;
    }

    if (!Util.isUnset(request.propertyFormat)) {
      body["PropertyFormat"] = request.propertyFormat;
    }

    if (!Util.isUnset(request.propertyName)) {
      body["PropertyName"] = request.propertyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeviceProperty",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDevicePropertyResponse>(await this.callApi(params, req, runtime), new UpdateDevicePropertyResponse({}));
  }

  async updateDeviceProperty(request: UpdateDevicePropertyRequest): Promise<UpdateDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevicePropertyWithOptions(request, runtime);
  }

  async updateDeviceResourceWithOptions(tmpReq: UpdateDeviceResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDeviceResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceResourceIds)) {
      request.deviceResourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceResourceIds, "DeviceResourceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.deviceResourceId)) {
      body["DeviceResourceId"] = request.deviceResourceId;
    }

    if (!Util.isUnset(request.deviceResourceIdsShrink)) {
      body["DeviceResourceIds"] = request.deviceResourceIdsShrink;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      body["SetupProjectId"] = request.setupProjectId;
    }

    if (!Util.isUnset(request.updateType)) {
      body["UpdateType"] = request.updateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeviceResource",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeviceResourceResponse>(await this.callApi(params, req, runtime), new UpdateDeviceResourceResponse({}));
  }

  async updateDeviceResource(request: UpdateDeviceResourceRequest): Promise<UpdateDeviceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceResourceWithOptions(request, runtime);
  }

  async updateDevicesWithOptions(request: UpdateDevicesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceIds)) {
      bodyFlat["DeviceIds"] = request.deviceIds;
    }

    if (!Util.isUnset(request.enablePassword)) {
      body["EnablePassword"] = request.enablePassword;
    }

    if (!Util.isUnset(request.loginPassword)) {
      body["LoginPassword"] = request.loginPassword;
    }

    if (!Util.isUnset(request.loginType)) {
      body["LoginType"] = request.loginType;
    }

    if (!Util.isUnset(request.loginUsername)) {
      body["LoginUsername"] = request.loginUsername;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      body["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    if (!Util.isUnset(request.physicalSpaceName)) {
      body["PhysicalSpaceName"] = request.physicalSpaceName;
    }

    if (!Util.isUnset(request.serviceStatus)) {
      body["ServiceStatus"] = request.serviceStatus;
    }

    if (!Util.isUnset(request.snmpAccountType)) {
      body["SnmpAccountType"] = request.snmpAccountType;
    }

    if (!Util.isUnset(request.snmpAccountVersion)) {
      body["SnmpAccountVersion"] = request.snmpAccountVersion;
    }

    if (!Util.isUnset(request.snmpAuthPassphrase)) {
      body["SnmpAuthPassphrase"] = request.snmpAuthPassphrase;
    }

    if (!Util.isUnset(request.snmpAuthProtocol)) {
      body["SnmpAuthProtocol"] = request.snmpAuthProtocol;
    }

    if (!Util.isUnset(request.snmpCommunity)) {
      body["SnmpCommunity"] = request.snmpCommunity;
    }

    if (!Util.isUnset(request.snmpPrivacyPassphrase)) {
      body["SnmpPrivacyPassphrase"] = request.snmpPrivacyPassphrase;
    }

    if (!Util.isUnset(request.snmpPrivacyProtocol)) {
      body["SnmpPrivacyProtocol"] = request.snmpPrivacyProtocol;
    }

    if (!Util.isUnset(request.snmpSecurityLevel)) {
      body["SnmpSecurityLevel"] = request.snmpSecurityLevel;
    }

    if (!Util.isUnset(request.snmpUsername)) {
      body["SnmpUsername"] = request.snmpUsername;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDevices",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDevicesResponse>(await this.callApi(params, req, runtime), new UpdateDevicesResponse({}));
  }

  async updateDevices(request: UpdateDevicesRequest): Promise<UpdateDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevicesWithOptions(request, runtime);
  }

  async updateEventDefinitionWithOptions(request: UpdateEventDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventId)) {
      body["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventType)) {
      body["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEventDefinition",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEventDefinitionResponse>(await this.callApi(params, req, runtime), new UpdateEventDefinitionResponse({}));
  }

  async updateEventDefinition(request: UpdateEventDefinitionRequest): Promise<UpdateEventDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventDefinitionWithOptions(request, runtime);
  }

  async updateInformationKeyActionWithOptions(request: UpdateInformationKeyActionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInformationKeyActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.keyAction)) {
      query["KeyAction"] = request.keyAction;
    }

    if (!Util.isUnset(request.resourceInformationId)) {
      query["ResourceInformationId"] = request.resourceInformationId;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      query["SetupProjectId"] = request.setupProjectId;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInformationKeyAction",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInformationKeyActionResponse>(await this.callApi(params, req, runtime), new UpdateInformationKeyActionResponse({}));
  }

  async updateInformationKeyAction(request: UpdateInformationKeyActionRequest): Promise<UpdateInformationKeyActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInformationKeyActionWithOptions(request, runtime);
  }

  async updateInstanceWithOptions(request: UpdateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  async updateOsVersionWithOptions(request: UpdateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!Util.isUnset(request.osVersionId)) {
      body["OsVersionId"] = request.osVersionId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOsVersion",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOsVersionResponse>(await this.callApi(params, req, runtime), new UpdateOsVersionResponse({}));
  }

  async updateOsVersion(request: UpdateOsVersionRequest): Promise<UpdateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionWithOptions(request, runtime);
  }

  async updatePhysicalSpaceWithOptions(request: UpdatePhysicalSpaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePhysicalSpaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      body["Address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      body["City"] = request.city;
    }

    if (!Util.isUnset(request.country)) {
      body["Country"] = request.country;
    }

    if (!Util.isUnset(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!Util.isUnset(request.physicalSpaceId)) {
      body["PhysicalSpaceId"] = request.physicalSpaceId;
    }

    if (!Util.isUnset(request.physicalSpaceName)) {
      body["PhysicalSpaceName"] = request.physicalSpaceName;
    }

    if (!Util.isUnset(request.province)) {
      body["Province"] = request.province;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.spaceAbbreviation)) {
      body["SpaceAbbreviation"] = request.spaceAbbreviation;
    }

    if (!Util.isUnset(request.spaceType)) {
      body["SpaceType"] = request.spaceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePhysicalSpace",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePhysicalSpaceResponse>(await this.callApi(params, req, runtime), new UpdatePhysicalSpaceResponse({}));
  }

  async updatePhysicalSpace(request: UpdatePhysicalSpaceRequest): Promise<UpdatePhysicalSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePhysicalSpaceWithOptions(request, runtime);
  }

  async updateProjectProgressWithOptions(request: UpdateProjectProgressRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.progress)) {
      body["Progress"] = request.progress;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      body["SetupProjectId"] = request.setupProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProjectProgress",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectProgressResponse>(await this.callApi(params, req, runtime), new UpdateProjectProgressResponse({}));
  }

  async updateProjectProgress(request: UpdateProjectProgressRequest): Promise<UpdateProjectProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectProgressWithOptions(request, runtime);
  }

  async updateResourceInformationWithOptions(tmpReq: UpdateResourceInformationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateResourceInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.information)) {
      request.informationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.information, "Information", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.informationShrink)) {
      body["Information"] = request.informationShrink;
    }

    if (!Util.isUnset(request.resourceAttribute)) {
      body["ResourceAttribute"] = request.resourceAttribute;
    }

    if (!Util.isUnset(request.resourceInformationId)) {
      body["ResourceInformationId"] = request.resourceInformationId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceInformation",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceInformationResponse>(await this.callApi(params, req, runtime), new UpdateResourceInformationResponse({}));
  }

  async updateResourceInformation(request: UpdateResourceInformationRequest): Promise<UpdateResourceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceInformationWithOptions(request, runtime);
  }

  async updateResourceInstanceWithOptions(tmpReq: UpdateResourceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateResourceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceInformation)) {
      request.resourceInformationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceInformation, "ResourceInformation", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceInformationShrink)) {
      query["ResourceInformation"] = request.resourceInformationShrink;
    }

    if (!Util.isUnset(request.resourceInformationId)) {
      query["ResourceInformationId"] = request.resourceInformationId;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      query["SetupProjectId"] = request.setupProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceInstance",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceInstanceResponse>(await this.callApi(params, req, runtime), new UpdateResourceInstanceResponse({}));
  }

  async updateResourceInstance(request: UpdateResourceInstanceRequest): Promise<UpdateResourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceInstanceWithOptions(request, runtime);
  }

  async updateSetupProjectWithOptions(tmpReq: UpdateSetupProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSetupProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSetupProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.packages)) {
      request.packagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.packages, "Packages", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.architectureId)) {
      body["ArchitectureId"] = request.architectureId;
    }

    if (!Util.isUnset(request.deliveryTime)) {
      body["DeliveryTime"] = request.deliveryTime;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.nodes)) {
      body["Nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.packagesShrink)) {
      body["Packages"] = request.packagesShrink;
    }

    if (!Util.isUnset(request.setupProjectId)) {
      body["SetupProjectId"] = request.setupProjectId;
    }

    if (!Util.isUnset(request.spaceId)) {
      body["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSetupProject",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSetupProjectResponse>(await this.callApi(params, req, runtime), new UpdateSetupProjectResponse({}));
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!Util.isUnset(request.spaceModelId)) {
      body["SpaceModelId"] = request.spaceModelId;
    }

    if (!Util.isUnset(request.spaceType)) {
      body["SpaceType"] = request.spaceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSpaceModel",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSpaceModelResponse>(await this.callApi(params, req, runtime), new UpdateSpaceModelResponse({}));
  }

  async updateSpaceModel(request: UpdateSpaceModelRequest): Promise<UpdateSpaceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSpaceModelWithOptions(request, runtime);
  }

  async updateSpaceModelInstanceWithOptions(request: UpdateSpaceModelInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSpaceModelInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instance)) {
      query["Instance"] = request.instance;
    }

    if (!Util.isUnset(request.spaceId)) {
      query["SpaceId"] = request.spaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSpaceModelInstance",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSpaceModelInstanceResponse>(await this.callApi(params, req, runtime), new UpdateSpaceModelInstanceResponse({}));
  }

  async updateSpaceModelInstance(request: UpdateSpaceModelInstanceRequest): Promise<UpdateSpaceModelInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSpaceModelInstanceWithOptions(request, runtime);
  }

  async updateWorkOrderWithOptions(request: UpdateWorkOrderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmHappenTime)) {
      body["AlarmHappenTime"] = request.alarmHappenTime;
    }

    if (!Util.isUnset(request.alarmRecoverTime)) {
      body["AlarmRecoverTime"] = request.alarmRecoverTime;
    }

    if (!Util.isUnset(request.alarmRelated)) {
      body["AlarmRelated"] = request.alarmRelated;
    }

    if (!Util.isUnset(request.area)) {
      body["Area"] = request.area;
    }

    if (!Util.isUnset(request.circuitId)) {
      body["CircuitId"] = request.circuitId;
    }

    if (!Util.isUnset(request.circuitName)) {
      body["CircuitName"] = request.circuitName;
    }

    if (!Util.isUnset(request.circuitType)) {
      body["CircuitType"] = request.circuitType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deviceIp)) {
      body["DeviceIp"] = request.deviceIp;
    }

    if (!Util.isUnset(request.deviceIpA)) {
      body["DeviceIpA"] = request.deviceIpA;
    }

    if (!Util.isUnset(request.deviceIpB)) {
      body["DeviceIpB"] = request.deviceIpB;
    }

    if (!Util.isUnset(request.deviceModelA)) {
      body["DeviceModelA"] = request.deviceModelA;
    }

    if (!Util.isUnset(request.deviceModelB)) {
      body["DeviceModelB"] = request.deviceModelB;
    }

    if (!Util.isUnset(request.deviceName)) {
      body["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceNameA)) {
      body["DeviceNameA"] = request.deviceNameA;
    }

    if (!Util.isUnset(request.deviceNameB)) {
      body["DeviceNameB"] = request.deviceNameB;
    }

    if (!Util.isUnset(request.devicePortA)) {
      body["DevicePortA"] = request.devicePortA;
    }

    if (!Util.isUnset(request.devicePortB)) {
      body["DevicePortB"] = request.devicePortB;
    }

    if (!Util.isUnset(request.deviceSnA)) {
      body["DeviceSnA"] = request.deviceSnA;
    }

    if (!Util.isUnset(request.deviceSnB)) {
      body["DeviceSnB"] = request.deviceSnB;
    }

    if (!Util.isUnset(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.deviceVendor)) {
      body["DeviceVendor"] = request.deviceVendor;
    }

    if (!Util.isUnset(request.deviceVendorA)) {
      body["DeviceVendorA"] = request.deviceVendorA;
    }

    if (!Util.isUnset(request.deviceVendorB)) {
      body["DeviceVendorB"] = request.deviceVendorB;
    }

    if (!Util.isUnset(request.emergencyDegree)) {
      body["EmergencyDegree"] = request.emergencyDegree;
    }

    if (!Util.isUnset(request.extra)) {
      body["Extra"] = request.extra;
    }

    if (!Util.isUnset(request.hangFileName)) {
      body["HangFileName"] = request.hangFileName;
    }

    if (!Util.isUnset(request.hangFilePath)) {
      body["HangFilePath"] = request.hangFilePath;
    }

    if (!Util.isUnset(request.hangReason)) {
      body["HangReason"] = request.hangReason;
    }

    if (!Util.isUnset(request.impactBusiness)) {
      body["ImpactBusiness"] = request.impactBusiness;
    }

    if (!Util.isUnset(request.incidentDescription)) {
      body["IncidentDescription"] = request.incidentDescription;
    }

    if (!Util.isUnset(request.incidentSubType)) {
      body["IncidentSubType"] = request.incidentSubType;
    }

    if (!Util.isUnset(request.incidentType)) {
      body["IncidentType"] = request.incidentType;
    }

    if (!Util.isUnset(request.liableMan)) {
      body["LiableMan"] = request.liableMan;
    }

    if (!Util.isUnset(request.linkMan)) {
      body["LinkMan"] = request.linkMan;
    }

    if (!Util.isUnset(request.originalSubjectAlarm)) {
      body["OriginalSubjectAlarm"] = request.originalSubjectAlarm;
    }

    if (!Util.isUnset(request.processLimited)) {
      body["ProcessLimited"] = request.processLimited;
    }

    if (!Util.isUnset(request.processMan)) {
      body["ProcessMan"] = request.processMan;
    }

    if (!Util.isUnset(request.processManId)) {
      body["ProcessManId"] = request.processManId;
    }

    if (!Util.isUnset(request.processResult)) {
      body["ProcessResult"] = request.processResult;
    }

    if (!Util.isUnset(request.skillGroups)) {
      body["SkillGroups"] = request.skillGroups;
    }

    if (!Util.isUnset(request.workOrderId)) {
      body["WorkOrderId"] = request.workOrderId;
    }

    if (!Util.isUnset(request.workOrderSource)) {
      body["WorkOrderSource"] = request.workOrderSource;
    }

    if (!Util.isUnset(request.workOrderStep)) {
      body["WorkOrderStep"] = request.workOrderStep;
    }

    if (!Util.isUnset(request.workOrderTitle)) {
      body["WorkOrderTitle"] = request.workOrderTitle;
    }

    if (!Util.isUnset(request.workOrderType)) {
      body["WorkOrderType"] = request.workOrderType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkOrder",
      version: "2020-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkOrderResponse>(await this.callApi(params, req, runtime), new UpdateWorkOrderResponse({}));
  }

  async updateWorkOrder(request: UpdateWorkOrderRequest): Promise<UpdateWorkOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkOrderWithOptions(request, runtime);
  }

}
