// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import SPI from '@alicloud/gateway-spi';
import GatewayClient from '@alicloud/gateway-sls';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class Alert extends $tea.Model {
  configuration?: AlertConfiguration;
  createTime?: number;
  description?: string;
  displayName?: string;
  lastModifiedTime?: number;
  name?: string;
  schedule?: Schedule;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      schedule: 'schedule',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      schedule: Schedule,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertConfiguration extends $tea.Model {
  annotations?: AlertTag[];
  autoAnnotation?: boolean;
  conditionConfiguration?: ConditionConfiguration;
  dashboard?: string;
  groupConfiguration?: GroupConfiguration;
  joinConfigurations?: JoinConfiguration[];
  labels?: AlertTag[];
  muteUntil?: number;
  noDataFire?: boolean;
  noDataSeverity?: number;
  policyConfiguration?: PolicyConfiguration;
  queryList?: AlertQuery[];
  sendResolved?: boolean;
  severityConfigurations?: SeverityConfiguration[];
  sinkAlerthub?: SinkAlerthubConfiguration;
  sinkCms?: SinkCmsConfiguration;
  sinkEventStore?: SinkEventStoreConfiguration;
  tags?: string[];
  templateConfiguration?: TemplateConfiguration;
  threshold?: number;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      autoAnnotation: 'autoAnnotation',
      conditionConfiguration: 'conditionConfiguration',
      dashboard: 'dashboard',
      groupConfiguration: 'groupConfiguration',
      joinConfigurations: 'joinConfigurations',
      labels: 'labels',
      muteUntil: 'muteUntil',
      noDataFire: 'noDataFire',
      noDataSeverity: 'noDataSeverity',
      policyConfiguration: 'policyConfiguration',
      queryList: 'queryList',
      sendResolved: 'sendResolved',
      severityConfigurations: 'severityConfigurations',
      sinkAlerthub: 'sinkAlerthub',
      sinkCms: 'sinkCms',
      sinkEventStore: 'sinkEventStore',
      tags: 'tags',
      templateConfiguration: 'templateConfiguration',
      threshold: 'threshold',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': AlertTag },
      autoAnnotation: 'boolean',
      conditionConfiguration: ConditionConfiguration,
      dashboard: 'string',
      groupConfiguration: GroupConfiguration,
      joinConfigurations: { 'type': 'array', 'itemType': JoinConfiguration },
      labels: { 'type': 'array', 'itemType': AlertTag },
      muteUntil: 'number',
      noDataFire: 'boolean',
      noDataSeverity: 'number',
      policyConfiguration: PolicyConfiguration,
      queryList: { 'type': 'array', 'itemType': AlertQuery },
      sendResolved: 'boolean',
      severityConfigurations: { 'type': 'array', 'itemType': SeverityConfiguration },
      sinkAlerthub: SinkAlerthubConfiguration,
      sinkCms: SinkCmsConfiguration,
      sinkEventStore: SinkEventStoreConfiguration,
      tags: { 'type': 'array', 'itemType': 'string' },
      templateConfiguration: TemplateConfiguration,
      threshold: 'number',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertQuery extends $tea.Model {
  chartTitle?: string;
  dashboardId?: string;
  end?: string;
  powerSqlMode?: string;
  project?: string;
  query?: string;
  region?: string;
  roleArn?: string;
  start?: string;
  store?: string;
  storeType?: string;
  timeSpanType?: string;
  ui?: string;
  static names(): { [key: string]: string } {
    return {
      chartTitle: 'chartTitle',
      dashboardId: 'dashboardId',
      end: 'end',
      powerSqlMode: 'powerSqlMode',
      project: 'project',
      query: 'query',
      region: 'region',
      roleArn: 'roleArn',
      start: 'start',
      store: 'store',
      storeType: 'storeType',
      timeSpanType: 'timeSpanType',
      ui: 'ui',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartTitle: 'string',
      dashboardId: 'string',
      end: 'string',
      powerSqlMode: 'string',
      project: 'string',
      query: 'string',
      region: 'string',
      roleArn: 'string',
      start: 'string',
      store: 'string',
      storeType: 'string',
      timeSpanType: 'string',
      ui: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ConditionConfiguration extends $tea.Model {
  condition?: string;
  countCondition?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumerGroup extends $tea.Model {
  name?: string;
  order?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      order: 'order',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertReq extends $tea.Model {
  configuration?: AlertConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSExportReq extends $tea.Model {
  configuration?: OSSExportConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSIngestionReq extends $tea.Model {
  configuration?: OSSIngestionConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSIngestionConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ETL extends $tea.Model {
  configuration?: ETLConfiguration;
  createTime?: number;
  description?: string;
  displayName?: string;
  lastModifiedTime?: number;
  name?: string;
  scheduleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      scheduleId: 'scheduleId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ETLConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      scheduleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ETLConfiguration extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  fromTime?: number;
  logstore?: string;
  parameters?: { [key: string]: any };
  roleArn?: string;
  script?: string;
  sinks?: ETLConfigurationSink[];
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      fromTime: 'fromTime',
      logstore: 'logstore',
      parameters: 'parameters',
      roleArn: 'roleArn',
      script: 'script',
      sinks: 'sinks',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      fromTime: 'number',
      logstore: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      roleArn: 'string',
      script: 'string',
      sinks: { 'type': 'array', 'itemType': ETLConfigurationSink },
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ETLConfigurationSink extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  endpoint?: string;
  logstore?: string;
  name?: string;
  project?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      endpoint: 'endpoint',
      logstore: 'logstore',
      name: 'name',
      project: 'project',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
      logstore: 'string',
      name: 'string',
      project: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptConf extends $tea.Model {
  enable?: boolean;
  encryptType?: string;
  userCmkInfo?: EncryptUserCmkConf;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      encryptType: 'encrypt_type',
      userCmkInfo: 'user_cmk_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      encryptType: 'string',
      userCmkInfo: EncryptUserCmkConf,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptUserCmkConf extends $tea.Model {
  arn?: string;
  cmkKeyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      cmkKeyId: 'cmk_key_id',
      regionId: 'region_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      cmkKeyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupConfiguration extends $tea.Model {
  fileds?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileds: 'fileds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Histogram extends $tea.Model {
  count?: number;
  from?: number;
  progress?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      from: 'from',
      progress: 'progress',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      progress: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinConfiguration extends $tea.Model {
  condition?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogContent extends $tea.Model {
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

export class LogGroup extends $tea.Model {
  logTags?: LogTag[];
  logs?: LogItem[];
  source?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      logTags: 'LogTags',
      logs: 'Logs',
      source: 'Source',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTags: { 'type': 'array', 'itemType': LogTag },
      logs: { 'type': 'array', 'itemType': LogItem },
      source: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogItem extends $tea.Model {
  contents?: LogContent[];
  time?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': LogContent },
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogTag extends $tea.Model {
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

export class LogtailConfig extends $tea.Model {
  configName?: string;
  createTime?: number;
  inputDetail?: { [key: string]: any };
  inputType?: string;
  lastModifyTime?: number;
  logSample?: string;
  outputDetail?: LogtailConfigOutputDetail;
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      createTime: 'createTime',
      inputDetail: 'inputDetail',
      inputType: 'inputType',
      lastModifyTime: 'lastModifyTime',
      logSample: 'logSample',
      outputDetail: 'outputDetail',
      outputType: 'outputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      createTime: 'number',
      inputDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputType: 'string',
      lastModifyTime: 'number',
      logSample: 'string',
      outputDetail: LogtailConfigOutputDetail,
      outputType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogtailPipelineConfig extends $tea.Model {
  aggregators?: { [key: string]: any }[];
  configName?: string;
  createTime?: number;
  flushers?: { [key: string]: any }[];
  global?: { [key: string]: any };
  inputs?: { [key: string]: any }[];
  lastModifyTime?: number;
  logSample?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      aggregators: 'aggregators',
      configName: 'configName',
      createTime: 'createTime',
      flushers: 'flushers',
      global: 'global',
      inputs: 'inputs',
      lastModifyTime: 'lastModifyTime',
      logSample: 'logSample',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configName: 'string',
      createTime: 'number',
      flushers: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      global: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      lastModifyTime: 'number',
      logSample: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLDataParam extends $tea.Model {
  annotationdataId?: string;
  annotations?: { [key: string]: MLDataParamAnnotationsValue };
  config?: { [key: string]: string };
  createTime?: number;
  dataHash?: string;
  datasetId?: string;
  lastModifyTime?: number;
  predictions?: { [key: string]: MLDataParamPredictionsValue };
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      annotationdataId: 'annotationdataId',
      annotations: 'annotations',
      config: 'config',
      createTime: 'createTime',
      dataHash: 'dataHash',
      datasetId: 'datasetId',
      lastModifyTime: 'lastModifyTime',
      predictions: 'predictions',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationdataId: 'string',
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': MLDataParamAnnotationsValue },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'number',
      dataHash: 'string',
      datasetId: 'string',
      lastModifyTime: 'number',
      predictions: { 'type': 'map', 'keyType': 'string', 'valueType': MLDataParamPredictionsValue },
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLDataSetParam extends $tea.Model {
  createBy?: string;
  createTime?: number;
  dataType?: string;
  datasetId?: string;
  description?: string;
  labelId?: string;
  lastModifyTime?: number;
  name?: string;
  settingType?: string;
  static names(): { [key: string]: string } {
    return {
      createBy: 'createBy',
      createTime: 'createTime',
      dataType: 'dataType',
      datasetId: 'datasetId',
      description: 'description',
      labelId: 'labelId',
      lastModifyTime: 'lastModifyTime',
      name: 'name',
      settingType: 'settingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createBy: 'string',
      createTime: 'number',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      labelId: 'string',
      lastModifyTime: 'number',
      name: 'string',
      settingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLLabelParam extends $tea.Model {
  createTime?: number;
  description?: string;
  labelId?: string;
  lastModifyTime?: number;
  name?: string;
  settings?: MLLabelParamSettings[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      labelId: 'labelId',
      lastModifyTime: 'lastModifyTime',
      name: 'name',
      settings: 'settings',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      labelId: 'string',
      lastModifyTime: 'number',
      name: 'string',
      settings: { 'type': 'array', 'itemType': MLLabelParamSettings },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLServiceAnalysisParam extends $tea.Model {
  input?: { [key: string]: string }[];
  parameter?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      parameter: 'parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLServiceParam extends $tea.Model {
  description?: string;
  model?: MLServiceParamModel;
  name?: string;
  resource?: MLServiceParamResource;
  serviceType?: string;
  status?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      model: 'model',
      name: 'name',
      resource: 'resource',
      serviceType: 'serviceType',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      model: MLServiceParamModel,
      name: 'string',
      resource: MLServiceParamResource,
      serviceType: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaxComputeExport extends $tea.Model {
  configuration?: MaxComputeExportConfiguration;
  createTime?: number;
  description?: string;
  displayName?: string;
  lastModifiedTime?: number;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: MaxComputeExportConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaxComputeExportConfiguration extends $tea.Model {
  fromTime?: number;
  logstore?: string;
  roleArn?: string;
  sink?: MaxComputeExportConfigurationSink;
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      logstore: 'logstore',
      roleArn: 'roleArn',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      logstore: 'string',
      roleArn: 'string',
      sink: MaxComputeExportConfigurationSink,
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaxComputeExportConfigurationSink extends $tea.Model {
  fields?: string[];
  odpsAccessKeyId?: string;
  odpsAccessSecret?: string;
  odpsEndpoint?: string;
  odpsProject?: string;
  odpsRolearn?: string;
  odpsTable?: string;
  odpsTunnelEndpoint?: string;
  partitionColumn?: string[];
  partitionTimeFormat?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      odpsAccessKeyId: 'odpsAccessKeyId',
      odpsAccessSecret: 'odpsAccessSecret',
      odpsEndpoint: 'odpsEndpoint',
      odpsProject: 'odpsProject',
      odpsRolearn: 'odpsRolearn',
      odpsTable: 'odpsTable',
      odpsTunnelEndpoint: 'odpsTunnelEndpoint',
      partitionColumn: 'partitionColumn',
      partitionTimeFormat: 'partitionTimeFormat',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      odpsAccessKeyId: 'string',
      odpsAccessSecret: 'string',
      odpsEndpoint: 'string',
      odpsProject: 'string',
      odpsRolearn: 'string',
      odpsTable: 'string',
      odpsTunnelEndpoint: 'string',
      partitionColumn: { 'type': 'array', 'itemType': 'string' },
      partitionTimeFormat: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSExport extends $tea.Model {
  configuration?: OSSExportConfiguration;
  createTime?: number;
  description?: string;
  displayName?: string;
  lastModifiedTime?: number;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSExportConfiguration extends $tea.Model {
  fromTime?: number;
  logstore?: string;
  roleArn?: string;
  sink?: OSSExportConfigurationSink;
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      logstore: 'logstore',
      roleArn: 'roleArn',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      logstore: 'string',
      roleArn: 'string',
      sink: OSSExportConfigurationSink,
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSIngestion extends $tea.Model {
  configuration?: OSSIngestionConfiguration;
  createTime?: number;
  description?: string;
  displayName?: string;
  lastModifiedTime?: number;
  name?: string;
  schedule?: Schedule;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      schedule: 'schedule',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSIngestionConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      schedule: Schedule,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSIngestionConfiguration extends $tea.Model {
  logstore?: string;
  source?: OSSIngestionConfigurationSource;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      source: OSSIngestionConfigurationSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSIngestionConfigurationSource extends $tea.Model {
  bucket?: string;
  compressionCodec?: string;
  encoding?: string;
  endTime?: number;
  endpoint?: string;
  format?: { [key: string]: any };
  interval?: string;
  pattern?: string;
  prefix?: string;
  restoreObjectEnabled?: boolean;
  roleARN?: string;
  startTime?: number;
  timeField?: string;
  timeFormat?: string;
  timePattern?: string;
  timeZone?: string;
  useMetaIndex?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionCodec: 'compressionCodec',
      encoding: 'encoding',
      endTime: 'endTime',
      endpoint: 'endpoint',
      format: 'format',
      interval: 'interval',
      pattern: 'pattern',
      prefix: 'prefix',
      restoreObjectEnabled: 'restoreObjectEnabled',
      roleARN: 'roleARN',
      startTime: 'startTime',
      timeField: 'timeField',
      timeFormat: 'timeFormat',
      timePattern: 'timePattern',
      timeZone: 'timeZone',
      useMetaIndex: 'useMetaIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionCodec: 'string',
      encoding: 'string',
      endTime: 'number',
      endpoint: 'string',
      format: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      interval: 'string',
      pattern: 'string',
      prefix: 'string',
      restoreObjectEnabled: 'boolean',
      roleARN: 'string',
      startTime: 'number',
      timeField: 'string',
      timeFormat: 'string',
      timePattern: 'string',
      timeZone: 'string',
      useMetaIndex: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyConfiguration extends $tea.Model {
  actionPolicyId?: string;
  alertPolicyId?: string;
  repeatInterval?: string;
  static names(): { [key: string]: string } {
    return {
      actionPolicyId: 'actionPolicyId',
      alertPolicyId: 'alertPolicyId',
      repeatInterval: 'repeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPolicyId: 'string',
      alertPolicyId: 'string',
      repeatInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SavedSearch extends $tea.Model {
  displayName?: string;
  logstore?: string;
  savedsearchName?: string;
  searchQuery?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      logstore: 'logstore',
      savedsearchName: 'savedsearchName',
      searchQuery: 'searchQuery',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      logstore: 'string',
      savedsearchName: 'string',
      searchQuery: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Schedule extends $tea.Model {
  cronExpression?: string;
  delay?: number;
  interval?: string;
  runImmediately?: boolean;
  timeZone?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      delay: 'delay',
      interval: 'interval',
      runImmediately: 'runImmediately',
      timeZone: 'timeZone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      delay: 'number',
      interval: 'string',
      runImmediately: 'boolean',
      timeZone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledSQL extends $tea.Model {
  configuration?: ScheduledSQLConfiguration;
  createTime?: number;
  description?: string;
  displayName?: string;
  lastModifiedTime?: number;
  name?: string;
  schedule?: Schedule;
  scheduleId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      name: 'name',
      schedule: 'schedule',
      scheduleId: 'scheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ScheduledSQLConfiguration,
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      lastModifiedTime: 'number',
      name: 'string',
      schedule: Schedule,
      scheduleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledSQLConfiguration extends $tea.Model {
  dataFormat?: string;
  destEndpoint?: string;
  destLogstore?: string;
  destProject?: string;
  destRoleArn?: string;
  fromTime?: number;
  fromTimeExpr?: string;
  maxRetries?: number;
  maxRunTimeInSeconds?: number;
  parameters?: { [key: string]: any };
  resourcePool?: string;
  roleArn?: string;
  script?: string;
  sourceLogstore?: string;
  sqlType?: string;
  toTime?: number;
  toTimeExpr?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'dataFormat',
      destEndpoint: 'destEndpoint',
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRoleArn: 'destRoleArn',
      fromTime: 'fromTime',
      fromTimeExpr: 'fromTimeExpr',
      maxRetries: 'maxRetries',
      maxRunTimeInSeconds: 'maxRunTimeInSeconds',
      parameters: 'parameters',
      resourcePool: 'resourcePool',
      roleArn: 'roleArn',
      script: 'script',
      sourceLogstore: 'sourceLogstore',
      sqlType: 'sqlType',
      toTime: 'toTime',
      toTimeExpr: 'toTimeExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      destEndpoint: 'string',
      destLogstore: 'string',
      destProject: 'string',
      destRoleArn: 'string',
      fromTime: 'number',
      fromTimeExpr: 'string',
      maxRetries: 'number',
      maxRunTimeInSeconds: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourcePool: 'string',
      roleArn: 'string',
      script: 'string',
      sourceLogstore: 'string',
      sqlType: 'string',
      toTime: 'number',
      toTimeExpr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SeverityConfiguration extends $tea.Model {
  evalCondition?: ConditionConfiguration;
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      evalCondition: 'evalCondition',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evalCondition: ConditionConfiguration,
      severity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkAlerthubConfiguration extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkCmsConfiguration extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkEventStoreConfiguration extends $tea.Model {
  enabled?: boolean;
  endpoint?: string;
  eventStore?: string;
  project?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      endpoint: 'endpoint',
      eventStore: 'eventStore',
      project: 'project',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      endpoint: 'string',
      eventStore: 'string',
      project: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateConfiguration extends $tea.Model {
  aonotations?: { [key: string]: any };
  id?: string;
  lang?: string;
  tokens?: { [key: string]: any };
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aonotations: 'aonotations',
      id: 'id',
      lang: 'lang',
      tokens: 'tokens',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aonotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lang: 'string',
      tokens: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Ticket extends $tea.Model {
  callerUid?: number;
  createDate?: string;
  expirationTime?: number;
  expireDate?: string;
  extra?: string;
  name?: string;
  number?: number;
  ticket?: string;
  ticketId?: string;
  usedNumber?: number;
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'callerUid',
      createDate: 'createDate',
      expirationTime: 'expirationTime',
      expireDate: 'expireDate',
      extra: 'extra',
      name: 'name',
      number: 'number',
      ticket: 'ticket',
      ticketId: 'ticketId',
      usedNumber: 'usedNumber',
      valid: 'valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'number',
      createDate: 'string',
      expirationTime: 'number',
      expireDate: 'string',
      extra: 'string',
      name: 'string',
      number: 'number',
      ticket: 'string',
      ticketId: 'string',
      usedNumber: 'number',
      valid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertReq extends $tea.Model {
  configuration?: AlertConfiguration;
  description?: string;
  displayName?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOSSExportReq extends $tea.Model {
  configuration?: OSSExportConfiguration;
  description?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOSSIngestionReq extends $tea.Model {
  configuration?: OSSIngestionConfiguration;
  description?: string;
  displayName?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSIngestionConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Chart extends $tea.Model {
  action?: { [key: string]: any };
  display?: { [key: string]: any };
  search?: { [key: string]: any };
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      display: 'display',
      search: 'search',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      display: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Dashboard extends $tea.Model {
  attribute?: { [key: string]: string };
  charts?: Chart[];
  dashboardName?: string;
  description?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      charts: 'charts',
      dashboardName: 'dashboardName',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      charts: { 'type': 'array', 'itemType': Chart },
      dashboardName: 'string',
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EtlJob extends $tea.Model {
  enable?: boolean;
  etlJobName?: string;
  functionConfig?: EtlJobFunctionConfig;
  functionParameter?: { [key: string]: any };
  logConfig?: EtlJobLogConfig;
  sourceConfig?: EtlJobSourceConfig;
  triggerConfig?: EtlJobTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      etlJobName: 'etlJobName',
      functionConfig: 'functionConfig',
      functionParameter: 'functionParameter',
      logConfig: 'logConfig',
      sourceConfig: 'sourceConfig',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      etlJobName: 'string',
      functionConfig: EtlJobFunctionConfig,
      functionParameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      logConfig: EtlJobLogConfig,
      sourceConfig: EtlJobSourceConfig,
      triggerConfig: EtlJobTriggerConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EtlMeta extends $tea.Model {
  enable?: boolean;
  etlMetaKey?: string;
  etlMetaName?: string;
  etlMetaTag?: string;
  etlMetaValue?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      etlMetaKey: 'etlMetaKey',
      etlMetaName: 'etlMetaName',
      etlMetaTag: 'etlMetaTag',
      etlMetaValue: 'etlMetaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      etlMetaKey: 'string',
      etlMetaName: 'string',
      etlMetaTag: 'string',
      etlMetaValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExternalStore extends $tea.Model {
  externalStoreName?: string;
  parameter?: { [key: string]: any };
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Index extends $tea.Model {
  keys?: { [key: string]: IndexKeysValue };
  lastModifyTime?: number;
  line?: IndexLine;
  logReduce?: boolean;
  logReduceBlackList?: string[];
  logReduceWhiteList?: string[];
  maxTextLen?: number;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      lastModifyTime: 'lastModifyTime',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKeysValue },
      lastModifyTime: 'number',
      line: IndexLine,
      logReduce: 'boolean',
      logReduceBlackList: { 'type': 'array', 'itemType': 'string' },
      logReduceWhiteList: { 'type': 'array', 'itemType': 'string' },
      maxTextLen: 'number',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Logging extends $tea.Model {
  loggingDetails?: LoggingLoggingDetails[];
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      loggingDetails: 'loggingDetails',
      loggingProject: 'loggingProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingDetails: { 'type': 'array', 'itemType': LoggingLoggingDetails },
      loggingProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Logstore extends $tea.Model {
  appendMeta?: boolean;
  autoSplit?: boolean;
  createTime?: number;
  enableTracking?: boolean;
  encryptConf?: EncryptConf;
  hotTtl?: number;
  infrequentAccessTTL?: number;
  lastModifyTime?: number;
  logstoreName?: string;
  maxSplitShard?: number;
  mode?: string;
  productType?: string;
  shardCount?: number;
  telemetryType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      createTime: 'createTime',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      lastModifyTime: 'lastModifyTime',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      productType: 'productType',
      shardCount: 'shardCount',
      telemetryType: 'telemetryType',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      createTime: 'number',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      lastModifyTime: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      productType: 'string',
      shardCount: 'number',
      telemetryType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Machine extends $tea.Model {
  ip?: string;
  lastHeartbeatTime?: number;
  machineUniqueid?: string;
  userdefinedId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      lastHeartbeatTime: 'lastHeartbeatTime',
      machineUniqueid: 'machine-uniqueid',
      userdefinedId: 'userdefined-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      lastHeartbeatTime: 'number',
      machineUniqueid: 'string',
      userdefinedId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineGroup extends $tea.Model {
  groupAttribute?: MachineGroupGroupAttribute;
  groupName?: string;
  groupType?: string;
  machineIdentifyType?: string;
  machineList?: string[];
  static names(): { [key: string]: string } {
    return {
      groupAttribute: 'groupAttribute',
      groupName: 'groupName',
      groupType: 'groupType',
      machineIdentifyType: 'machineIdentifyType',
      machineList: 'machineList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupAttribute: MachineGroupGroupAttribute,
      groupName: 'string',
      groupType: 'string',
      machineIdentifyType: 'string',
      machineList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Project extends $tea.Model {
  createTime?: string;
  description?: string;
  lastModifyTime?: string;
  owner?: string;
  projectName?: string;
  region?: string;
  resourceGroupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      lastModifyTime: 'lastModifyTime',
      owner: 'owner',
      projectName: 'projectName',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      lastModifyTime: 'string',
      owner: 'string',
      projectName: 'string',
      region: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceStatus extends $tea.Model {
  enabled?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Shard extends $tea.Model {
  createTime?: number;
  exclusiveEndKey?: string;
  inclusiveBeginKey?: string;
  shardID?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      exclusiveEndKey: 'exclusiveEndKey',
      inclusiveBeginKey: 'inclusiveBeginKey',
      shardID: 'shardID',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      exclusiveEndKey: 'string',
      inclusiveBeginKey: 'string',
      shardID: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLDataParamAnnotationsValue extends $tea.Model {
  annotatedBy?: string;
  updateTime?: number;
  results?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      annotatedBy: 'annotatedBy',
      updateTime: 'updateTime',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotatedBy: 'string',
      updateTime: 'number',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLDataParamPredictionsValue extends $tea.Model {
  annotatedBy?: string;
  updateTime?: number;
  results?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      annotatedBy: 'annotatedBy',
      updateTime: 'updateTime',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotatedBy: 'string',
      updateTime: 'number',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexKeysValue extends $tea.Model {
  chn?: boolean;
  caseSensitive?: boolean;
  token?: string[];
  alias?: string;
  type?: string;
  docValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      chn: 'chn',
      caseSensitive: 'caseSensitive',
      token: 'token',
      alias: 'alias',
      type: 'type',
      docValue: 'doc_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chn: 'boolean',
      caseSensitive: 'boolean',
      token: { 'type': 'array', 'itemType': 'string' },
      alias: 'string',
      type: 'string',
      docValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KeysValue extends $tea.Model {
  caseSensitive?: boolean;
  chn?: boolean;
  type?: string;
  alias?: string;
  token?: string[];
  docValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      type: 'type',
      alias: 'alias',
      token: 'token',
      docValue: 'doc_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      chn: 'boolean',
      type: 'string',
      alias: 'string',
      token: { 'type': 'array', 'itemType': 'string' },
      docValue: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyConfigToMachineGroupResponse extends $tea.Model {
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

export class ChangeResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
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

export class ConsumerGroupHeartBeatRequest extends $tea.Model {
  body?: number[];
  consumer?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      consumer: 'consumer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'number' },
      consumer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumerGroupHeartBeatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: number[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertRequest extends $tea.Model {
  configuration?: AlertConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertResponse extends $tea.Model {
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

export class CreateAnnotationDataSetRequest extends $tea.Model {
  body?: MLDataSetParam;
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      datasetId: 'datasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MLDataSetParam,
      datasetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnnotationDataSetResponse extends $tea.Model {
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

export class CreateAnnotationLabelRequest extends $tea.Model {
  body?: MLLabelParam;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MLLabelParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnnotationLabelResponse extends $tea.Model {
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

export class CreateConfigRequest extends $tea.Model {
  body?: LogtailConfig;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LogtailConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigResponse extends $tea.Model {
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

export class CreateConsumerGroupRequest extends $tea.Model {
  consumerGroup?: string;
  order?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'consumerGroup',
      order: 'order',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      order: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $tea.Model {
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

export class CreateDashboardRequest extends $tea.Model {
  body?: Dashboard;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Dashboard,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDashboardResponse extends $tea.Model {
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

export class CreateDomainRequest extends $tea.Model {
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
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

export class CreateETLRequest extends $tea.Model {
  configuration?: ETLConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ETLConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateETLResponse extends $tea.Model {
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

export class CreateIndexRequest extends $tea.Model {
  keys?: { [key: string]: KeysValue };
  line?: CreateIndexRequestLine;
  logReduce?: boolean;
  logReduceBlackList?: string[];
  logReduceWhiteList?: string[];
  maxTextLen?: number;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'map', 'keyType': 'string', 'valueType': KeysValue },
      line: CreateIndexRequestLine,
      logReduce: 'boolean',
      logReduceBlackList: { 'type': 'array', 'itemType': 'string' },
      logReduceWhiteList: { 'type': 'array', 'itemType': 'string' },
      maxTextLen: 'number',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexResponse extends $tea.Model {
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

export class CreateLogStoreRequest extends $tea.Model {
  appendMeta?: boolean;
  autoSplit?: boolean;
  enableTracking?: boolean;
  encryptConf?: EncryptConf;
  hotTtl?: number;
  infrequentAccessTTL?: number;
  logstoreName?: string;
  maxSplitShard?: number;
  mode?: string;
  shardCount?: number;
  telemetryType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      shardCount: 'shardCount',
      telemetryType: 'telemetryType',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      shardCount: 'number',
      telemetryType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogStoreResponse extends $tea.Model {
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

export class CreateLoggingRequest extends $tea.Model {
  loggingDetails?: CreateLoggingRequestLoggingDetails[];
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      loggingDetails: 'loggingDetails',
      loggingProject: 'loggingProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingDetails: { 'type': 'array', 'itemType': CreateLoggingRequestLoggingDetails },
      loggingProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoggingResponse extends $tea.Model {
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

export class CreateLogtailPipelineConfigRequest extends $tea.Model {
  aggregators?: { [key: string]: any }[];
  configName?: string;
  flushers?: { [key: string]: any }[];
  global?: { [key: string]: any };
  inputs?: { [key: string]: any }[];
  logSample?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      aggregators: 'aggregators',
      configName: 'configName',
      flushers: 'flushers',
      global: 'global',
      inputs: 'inputs',
      logSample: 'logSample',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configName: 'string',
      flushers: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      global: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logSample: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogtailPipelineConfigResponse extends $tea.Model {
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

export class CreateMachineGroupRequest extends $tea.Model {
  groupAttribute?: CreateMachineGroupRequestGroupAttribute;
  groupName?: string;
  groupType?: string;
  machineIdentifyType?: string;
  machineList?: string[];
  static names(): { [key: string]: string } {
    return {
      groupAttribute: 'groupAttribute',
      groupName: 'groupName',
      groupType: 'groupType',
      machineIdentifyType: 'machineIdentifyType',
      machineList: 'machineList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupAttribute: CreateMachineGroupRequestGroupAttribute,
      groupName: 'string',
      groupType: 'string',
      machineIdentifyType: 'string',
      machineList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMachineGroupResponse extends $tea.Model {
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

export class CreateOSSExportRequest extends $tea.Model {
  configuration?: OSSExportConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSExportResponse extends $tea.Model {
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

export class CreateOSSHDFSExportRequest extends $tea.Model {
  configuration?: OSSExportConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSHDFSExportResponse extends $tea.Model {
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

export class CreateOSSIngestionRequest extends $tea.Model {
  configuration?: OSSIngestionConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSIngestionConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSIngestionResponse extends $tea.Model {
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

export class CreateOssExternalStoreRequest extends $tea.Model {
  externalStoreName?: string;
  parameter?: CreateOssExternalStoreRequestParameter;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: CreateOssExternalStoreRequestParameter,
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssExternalStoreResponse extends $tea.Model {
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

export class CreateProjectRequest extends $tea.Model {
  dataRedundancyType?: string;
  description?: string;
  projectName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dataRedundancyType: 'dataRedundancyType',
      description: 'description',
      projectName: 'projectName',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: 'string',
      description: 'string',
      projectName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
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

export class CreateRdsExternalStoreRequest extends $tea.Model {
  externalStoreName?: string;
  parameter?: CreateRdsExternalStoreRequestParameter;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: CreateRdsExternalStoreRequestParameter,
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRdsExternalStoreResponse extends $tea.Model {
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

export class CreateSavedSearchRequest extends $tea.Model {
  displayName?: string;
  logstore?: string;
  savedsearchName?: string;
  searchQuery?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      logstore: 'logstore',
      savedsearchName: 'savedsearchName',
      searchQuery: 'searchQuery',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      logstore: 'string',
      savedsearchName: 'string',
      searchQuery: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavedSearchResponse extends $tea.Model {
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

export class CreateScheduledSQLRequest extends $tea.Model {
  configuration?: ScheduledSQLConfiguration;
  description?: string;
  displayName?: string;
  name?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ScheduledSQLConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledSQLResponse extends $tea.Model {
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

export class CreateTicketResponseBody extends $tea.Model {
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertResponse extends $tea.Model {
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

export class DeleteAnnotationDataResponse extends $tea.Model {
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

export class DeleteAnnotationDataSetResponse extends $tea.Model {
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

export class DeleteAnnotationLabelResponse extends $tea.Model {
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

export class DeleteCollectionPolicyRequest extends $tea.Model {
  dataCode?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dataCode: 'dataCode',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCode: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionPolicyResponseBody extends $tea.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectionPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCollectionPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCollectionPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigResponse extends $tea.Model {
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

export class DeleteConsumerGroupResponse extends $tea.Model {
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

export class DeleteDashboardResponse extends $tea.Model {
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

export class DeleteDomainResponse extends $tea.Model {
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

export class DeleteETLResponse extends $tea.Model {
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

export class DeleteExternalStoreResponse extends $tea.Model {
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

export class DeleteIndexResponse extends $tea.Model {
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

export class DeleteLogStoreResponse extends $tea.Model {
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

export class DeleteLoggingResponse extends $tea.Model {
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

export class DeleteLogtailPipelineConfigResponse extends $tea.Model {
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

export class DeleteMachineGroupResponse extends $tea.Model {
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

export class DeleteOSSExportResponse extends $tea.Model {
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

export class DeleteOSSHDFSExportResponse extends $tea.Model {
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

export class DeleteOSSIngestionResponse extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
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

export class DeleteProjectPolicyResponse extends $tea.Model {
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

export class DeleteSavedSearchResponse extends $tea.Model {
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

export class DeleteScheduledSQLResponse extends $tea.Model {
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

export class DeleteShipperResponse extends $tea.Model {
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

export class DisableAlertResponse extends $tea.Model {
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

export class EnableAlertResponse extends $tea.Model {
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

export class GetAlertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Alert;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Alert,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MLDataParam;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MLDataParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MLDataSetParam;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MLDataSetParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnnotationLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MLLabelParam;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MLLabelParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedConfigsResponseBody extends $tea.Model {
  configs?: string[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppliedConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppliedConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedMachineGroupsResponseBody extends $tea.Model {
  count?: number;
  machinegroups?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      machinegroups: 'machinegroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      machinegroups: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppliedMachineGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppliedMachineGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppliedMachineGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckPointRequest extends $tea.Model {
  shard?: number;
  static names(): { [key: string]: string } {
    return {
      shard: 'shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCheckPointResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetCheckPointResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyRequest extends $tea.Model {
  dataCode?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dataCode: 'dataCode',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCode: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBody extends $tea.Model {
  collectionPolicy?: GetCollectionPolicyResponseBodyCollectionPolicy;
  static names(): { [key: string]: string } {
    return {
      collectionPolicy: 'collectionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionPolicy: GetCollectionPolicyResponseBodyCollectionPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCollectionPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCollectionPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogtailConfig;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LogtailConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextLogsRequest extends $tea.Model {
  backLines?: number;
  forwardLines?: number;
  packId?: string;
  packMeta?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      backLines: 'back_lines',
      forwardLines: 'forward_lines',
      packId: 'pack_id',
      packMeta: 'pack_meta',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backLines: 'number',
      forwardLines: 'number',
      packId: 'string',
      packMeta: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextLogsResponseBody extends $tea.Model {
  backLines?: number;
  forwardLines?: number;
  logs?: { [key: string]: any }[];
  progress?: string;
  totalLines?: number;
  static names(): { [key: string]: string } {
    return {
      backLines: 'back_lines',
      forwardLines: 'forward_lines',
      logs: 'logs',
      progress: 'progress',
      totalLines: 'total_lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backLines: 'number',
      forwardLines: 'number',
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      progress: 'string',
      totalLines: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetContextLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetContextLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCursorRequest extends $tea.Model {
  from?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCursorResponseBody extends $tea.Model {
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCursorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCursorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCursorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCursorTimeRequest extends $tea.Model {
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCursorTimeResponseBody extends $tea.Model {
  cursorTime?: string;
  static names(): { [key: string]: string } {
    return {
      cursorTime: 'cursor_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursorTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCursorTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCursorTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCursorTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Dashboard;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Dashboard,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetETLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ETL;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ETL,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExternalStore;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExternalStore,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsRequest extends $tea.Model {
  from?: number;
  query?: string;
  to?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      query: 'query',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: 'string',
      to: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHistogramsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetHistogramsResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBody extends $tea.Model {
  indexMode?: string;
  keys?: { [key: string]: KeysValue };
  lastModifyTime?: number;
  line?: GetIndexResponseBodyLine;
  logReduce?: boolean;
  logReduceBlackList?: string[];
  logReduceWhiteList?: string[];
  maxTextLen?: number;
  storage?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      indexMode: 'index_mode',
      keys: 'keys',
      lastModifyTime: 'lastModifyTime',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
      storage: 'storage',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexMode: 'string',
      keys: { 'type': 'map', 'keyType': 'string', 'valueType': KeysValue },
      lastModifyTime: 'number',
      line: GetIndexResponseBodyLine,
      logReduce: 'boolean',
      logReduceBlackList: { 'type': 'array', 'itemType': 'string' },
      logReduceWhiteList: { 'type': 'array', 'itemType': 'string' },
      maxTextLen: 'number',
      storage: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Logstore;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Logstore,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStoreMeteringModeResponseBody extends $tea.Model {
  meteringMode?: string;
  static names(): { [key: string]: string } {
    return {
      meteringMode: 'meteringMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStoreMeteringModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogStoreMeteringModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLogStoreMeteringModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoggingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Logging;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Logging,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsRequest extends $tea.Model {
  from?: number;
  line?: number;
  offset?: number;
  powerSql?: boolean;
  query?: string;
  reverse?: boolean;
  to?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      line: 'line',
      offset: 'offset',
      powerSql: 'powerSql',
      query: 'query',
      reverse: 'reverse',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      line: 'number',
      offset: 'number',
      powerSql: 'boolean',
      query: 'string',
      reverse: 'boolean',
      to: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2Headers extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  acceptEncoding?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      acceptEncoding: 'Accept-Encoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      acceptEncoding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2Request extends $tea.Model {
  forward?: boolean;
  from?: number;
  highlight?: boolean;
  line?: number;
  offset?: number;
  powerSql?: boolean;
  query?: string;
  reverse?: boolean;
  session?: string;
  shard?: number;
  to?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      forward: 'forward',
      from: 'from',
      highlight: 'highlight',
      line: 'line',
      offset: 'offset',
      powerSql: 'powerSql',
      query: 'query',
      reverse: 'reverse',
      session: 'session',
      shard: 'shard',
      to: 'to',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forward: 'boolean',
      from: 'number',
      highlight: 'boolean',
      line: 'number',
      offset: 'number',
      powerSql: 'boolean',
      query: 'string',
      reverse: 'boolean',
      session: 'string',
      shard: 'number',
      to: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2ResponseBody extends $tea.Model {
  data?: { [key: string]: string }[];
  meta?: GetLogsV2ResponseBodyMeta;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      meta: GetLogsV2ResponseBodyMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLogsV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogtailPipelineConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogtailPipelineConfig;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LogtailPipelineConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMLServiceResultsRequest extends $tea.Model {
  allowBuiltin?: boolean;
  body?: MLServiceAnalysisParam;
  static names(): { [key: string]: string } {
    return {
      allowBuiltin: 'allowBuiltin',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowBuiltin: 'boolean',
      body: MLServiceAnalysisParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMLServiceResultsResponseBody extends $tea.Model {
  data?: { [key: string]: string }[];
  status?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMLServiceResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMLServiceResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMLServiceResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMachineGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MachineGroup;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MachineGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSExportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OSSExport;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OSSExport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSHDFSExportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OSSExport;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OSSExport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSIngestionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OSSIngestion;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OSSIngestion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Project,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectLogsRequest extends $tea.Model {
  powerSql?: boolean;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      powerSql: 'powerSql',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      powerSql: 'boolean',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavedSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SavedSearch;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SavedSearch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledSQLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScheduledSQL;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScheduledSQL,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShipperStatusRequest extends $tea.Model {
  from?: number;
  offset?: number;
  size?: number;
  status?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      offset: 'offset',
      size: 'size',
      status: 'status',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      offset: 'number',
      size: 'number',
      status: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShipperStatusResponseBody extends $tea.Model {
  count?: number;
  statistics?: GetShipperStatusResponseBodyStatistics;
  tasks?: GetShipperStatusResponseBodyTasks;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      statistics: 'statistics',
      tasks: 'tasks',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      statistics: GetShipperStatusResponseBodyStatistics,
      tasks: GetShipperStatusResponseBodyTasks,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShipperStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetShipperStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetShipperStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsRequest extends $tea.Model {
  logstore?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponseBody extends $tea.Model {
  count?: number;
  results?: Alert[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': Alert },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlertsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationDataRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationDataResponseBody extends $tea.Model {
  data?: MLDataParam[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MLDataParam },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnnotationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnnotationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationDataSetsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationDataSetsResponseBody extends $tea.Model {
  data?: MLDataSetParam[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MLDataSetParam },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationDataSetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnnotationDataSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnnotationDataSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationLabelsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationLabelsResponseBody extends $tea.Model {
  data?: MLLabelParam[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MLLabelParam },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAnnotationLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnnotationLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesRequest extends $tea.Model {
  attribute?: ListCollectionPoliciesRequestAttribute;
  dataCode?: string;
  instanceId?: string;
  pageNum?: number;
  pageSize?: number;
  policyName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      dataCode: 'dataCode',
      instanceId: 'instanceId',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      policyName: 'policyName',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: ListCollectionPoliciesRequestAttribute,
      dataCode: 'string',
      instanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      policyName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesShrinkRequest extends $tea.Model {
  attributeShrink?: string;
  dataCode?: string;
  instanceId?: string;
  pageNum?: number;
  pageSize?: number;
  policyName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      attributeShrink: 'attribute',
      dataCode: 'dataCode',
      instanceId: 'instanceId',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      policyName: 'policyName',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeShrink: 'string',
      dataCode: 'string',
      instanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      policyName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBody extends $tea.Model {
  currentCount?: number;
  data?: ListCollectionPoliciesResponseBodyData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'currentCount',
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      data: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCollectionPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCollectionPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRequest extends $tea.Model {
  configName?: string;
  logstoreName?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      logstoreName: 'logstoreName',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      logstoreName: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigResponseBody extends $tea.Model {
  configs?: string[];
  count?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      count: 'count',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConsumerGroup[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': ConsumerGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponseBody extends $tea.Model {
  dashboardItems?: ListDashboardResponseBodyDashboardItems[];
  dashboards?: string[];
  static names(): { [key: string]: string } {
    return {
      dashboardItems: 'dashboardItems',
      dashboards: 'dashboards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardItems: { 'type': 'array', 'itemType': ListDashboardResponseBodyDashboardItems },
      dashboards: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDashboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDashboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  domainName?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $tea.Model {
  count?: number;
  domains?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      domains: 'domains',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListETLsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListETLsResponseBody extends $tea.Model {
  count?: number;
  results?: ETL[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': ETL },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListETLsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListETLsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListETLsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalStoreRequest extends $tea.Model {
  externalStoreName?: string;
  offset?: number;
  sizs?: number;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      offset: 'offset',
      sizs: 'sizs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      offset: 'number',
      sizs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalStoreResponseBody extends $tea.Model {
  count?: number;
  externalstores?: ExternalStore[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      externalstores: 'externalstores',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      externalstores: { 'type': 'array', 'itemType': ExternalStore },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExternalStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExternalStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogStoresRequest extends $tea.Model {
  logstoreName?: string;
  mode?: string;
  offset?: number;
  size?: number;
  telemetryType?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'logstoreName',
      mode: 'mode',
      offset: 'offset',
      size: 'size',
      telemetryType: 'telemetryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
      mode: 'string',
      offset: 'number',
      size: 'number',
      telemetryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogStoresResponseBody extends $tea.Model {
  count?: number;
  logstores?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      logstores: 'logstores',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logstores: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogStoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLogStoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLogStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogtailPipelineConfigRequest extends $tea.Model {
  configName?: string;
  logstoreName?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      logstoreName: 'logstoreName',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      logstoreName: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogtailPipelineConfigResponseBody extends $tea.Model {
  configs?: string[];
  count?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      count: 'count',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogtailPipelineConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLogtailPipelineConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLogtailPipelineConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineGroupRequest extends $tea.Model {
  groupName?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineGroupResponseBody extends $tea.Model {
  count?: number;
  machinegroups?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      machinegroups: 'machinegroups',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      machinegroups: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMachineGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachinesRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachinesResponseBody extends $tea.Model {
  count?: number;
  machines?: Machine[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      machines: 'machines',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      machines: { 'type': 'array', 'itemType': Machine },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMachinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMachinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSExportsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSExportsResponseBody extends $tea.Model {
  count?: number;
  results?: OSSExport[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': OSSExport },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSExportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOSSExportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOSSExportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSHDFSExportsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSHDFSExportsResponseBody extends $tea.Model {
  count?: number;
  results?: OSSExport[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': OSSExport },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSHDFSExportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOSSHDFSExportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOSSHDFSExportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSIngestionsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSIngestionsResponseBody extends $tea.Model {
  count?: number;
  results?: OSSIngestion[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': OSSIngestion },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOSSIngestionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOSSIngestionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOSSIngestionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRequest extends $tea.Model {
  offset?: number;
  projectName?: string;
  resourceGroupId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      projectName: 'projectName',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      projectName: 'string',
      resourceGroupId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $tea.Model {
  count?: number;
  projects?: Project[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      projects: 'projects',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      projects: { 'type': 'array', 'itemType': Project },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedSearchRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedSearchResponseBody extends $tea.Model {
  count?: number;
  savedsearchItems?: SavedSearch[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      savedsearchItems: 'savedsearchItems',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      savedsearchItems: { 'type': 'array', 'itemType': SavedSearch },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavedSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSavedSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSavedSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledSQLsRequest extends $tea.Model {
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledSQLsResponseBody extends $tea.Model {
  count?: number;
  results?: ScheduledSQL[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': ScheduledSQL },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledSQLsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScheduledSQLsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScheduledSQLsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Shard[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': Shard },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShipperResponseBody extends $tea.Model {
  count?: number;
  shipper?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      shipper: 'shipper',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      shipper: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShipperResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListShipperResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListShipperResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tags?: ListTagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  resourceIdShrink?: string;
  resourceType?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      tagResources: 'tagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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

export class MergeShardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Shard[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': Shard },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAnnotationDataRequest extends $tea.Model {
  annotationdataId?: string;
  mlDataParam?: MLDataParam;
  rawLog?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      annotationdataId: 'annotationdataId',
      mlDataParam: 'mlDataParam',
      rawLog: 'rawLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationdataId: 'string',
      mlDataParam: MLDataParam,
      rawLog: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAnnotationDataResponse extends $tea.Model {
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

export class PutProjectPolicyRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectPolicyResponse extends $tea.Model {
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

export class PutProjectTransferAccelerationRequest extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProjectTransferAccelerationResponse extends $tea.Model {
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

export class PutWebtrackingRequest extends $tea.Model {
  logs?: { [key: string]: string }[];
  source?: string;
  tags?: { [key: string]: string };
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      logs: '__logs__',
      source: '__source__',
      tags: '__tags__',
      topic: '__topic__',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      source: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutWebtrackingResponse extends $tea.Model {
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

export class QueryMLServiceResultsRequest extends $tea.Model {
  allowBuiltin?: boolean;
  body?: MLServiceAnalysisParam;
  static names(): { [key: string]: string } {
    return {
      allowBuiltin: 'allowBuiltin',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowBuiltin: 'boolean',
      body: MLServiceAnalysisParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMLServiceResultsResponseBody extends $tea.Model {
  data?: { [key: string]: string }[];
  status?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMLServiceResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMLServiceResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMLServiceResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveConfigFromMachineGroupResponse extends $tea.Model {
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

export class SplitShardRequest extends $tea.Model {
  key?: string;
  shardCount?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      shardCount: 'shardCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      shardCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SplitShardResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Shard[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': Shard },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartETLResponse extends $tea.Model {
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

export class StartOSSExportResponse extends $tea.Model {
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

export class StartOSSHDFSExportResponse extends $tea.Model {
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

export class StartOSSIngestionResponse extends $tea.Model {
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

export class StopETLResponse extends $tea.Model {
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

export class StopOSSExportResponse extends $tea.Model {
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

export class StopOSSHDFSExportResponse extends $tea.Model {
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

export class StopOSSIngestionResponse extends $tea.Model {
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

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
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

export class UpdateAlertRequest extends $tea.Model {
  configuration?: AlertConfiguration;
  description?: string;
  displayName?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: AlertConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertResponse extends $tea.Model {
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

export class UpdateAnnotationDataSetRequest extends $tea.Model {
  body?: MLDataSetParam;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MLDataSetParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnnotationDataSetResponse extends $tea.Model {
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

export class UpdateAnnotationLabelRequest extends $tea.Model {
  body?: MLLabelParam;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MLLabelParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAnnotationLabelResponse extends $tea.Model {
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

export class UpdateConfigRequest extends $tea.Model {
  body?: LogtailConfig;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LogtailConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigResponse extends $tea.Model {
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

export class UpdateConsumerGroupRequest extends $tea.Model {
  order?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      order: 'order',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'boolean',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponse extends $tea.Model {
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

export class UpdateDashboardRequest extends $tea.Model {
  attribute?: { [key: string]: string };
  charts?: Chart[];
  dashboardName?: string;
  description?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      charts: 'charts',
      dashboardName: 'dashboardName',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      charts: { 'type': 'array', 'itemType': Chart },
      dashboardName: 'string',
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDashboardResponse extends $tea.Model {
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

export class UpdateETLRequest extends $tea.Model {
  configuration?: ETLConfiguration;
  description?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ETLConfiguration,
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateETLResponse extends $tea.Model {
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

export class UpdateIndexRequest extends $tea.Model {
  keys?: { [key: string]: KeysValue };
  line?: UpdateIndexRequestLine;
  logReduce?: boolean;
  logReduceBlackList?: string[];
  logReduceWhiteList?: string[];
  maxTextLen?: number;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'keys',
      line: 'line',
      logReduce: 'log_reduce',
      logReduceBlackList: 'log_reduce_black_list',
      logReduceWhiteList: 'log_reduce_white_list',
      maxTextLen: 'max_text_len',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'map', 'keyType': 'string', 'valueType': KeysValue },
      line: UpdateIndexRequestLine,
      logReduce: 'boolean',
      logReduceBlackList: { 'type': 'array', 'itemType': 'string' },
      logReduceWhiteList: { 'type': 'array', 'itemType': 'string' },
      maxTextLen: 'number',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIndexResponse extends $tea.Model {
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

export class UpdateLogStoreRequest extends $tea.Model {
  appendMeta?: boolean;
  autoSplit?: boolean;
  enableTracking?: boolean;
  encryptConf?: EncryptConf;
  hotTtl?: number;
  infrequentAccessTTL?: number;
  logstoreName?: string;
  maxSplitShard?: number;
  mode?: string;
  shardCount?: number;
  telemetryType?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      shardCount: 'shardCount',
      telemetryType: 'telemetryType',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      shardCount: 'number',
      telemetryType: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogStoreResponse extends $tea.Model {
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

export class UpdateLogStoreMeteringModeRequest extends $tea.Model {
  meteringMode?: string;
  static names(): { [key: string]: string } {
    return {
      meteringMode: 'meteringMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogStoreMeteringModeResponse extends $tea.Model {
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

export class UpdateLoggingRequest extends $tea.Model {
  loggingDetails?: UpdateLoggingRequestLoggingDetails[];
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      loggingDetails: 'loggingDetails',
      loggingProject: 'loggingProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingDetails: { 'type': 'array', 'itemType': UpdateLoggingRequestLoggingDetails },
      loggingProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoggingResponse extends $tea.Model {
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

export class UpdateLogtailPipelineConfigRequest extends $tea.Model {
  aggregators?: { [key: string]: any }[];
  configName?: string;
  flushers?: { [key: string]: any }[];
  global?: { [key: string]: any };
  inputs?: { [key: string]: any }[];
  logSample?: string;
  processors?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      aggregators: 'aggregators',
      configName: 'configName',
      flushers: 'flushers',
      global: 'global',
      inputs: 'inputs',
      logSample: 'logSample',
      processors: 'processors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configName: 'string',
      flushers: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      global: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logSample: 'string',
      processors: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogtailPipelineConfigResponse extends $tea.Model {
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

export class UpdateMachineGroupRequest extends $tea.Model {
  groupAttribute?: UpdateMachineGroupRequestGroupAttribute;
  groupName?: string;
  groupType?: string;
  machineIdentifyType?: string;
  machineList?: string[];
  static names(): { [key: string]: string } {
    return {
      groupAttribute: 'groupAttribute',
      groupName: 'groupName',
      groupType: 'groupType',
      machineIdentifyType: 'machineIdentifyType',
      machineList: 'machineList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupAttribute: UpdateMachineGroupRequestGroupAttribute,
      groupName: 'string',
      groupType: 'string',
      machineIdentifyType: 'string',
      machineList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMachineGroupResponse extends $tea.Model {
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

export class UpdateMachineGroupMachineRequest extends $tea.Model {
  action?: string;
  body?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      body: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMachineGroupMachineResponse extends $tea.Model {
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

export class UpdateOSSExportRequest extends $tea.Model {
  configuration?: OSSExportConfiguration;
  description?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOSSExportResponse extends $tea.Model {
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

export class UpdateOSSHDFSExportRequest extends $tea.Model {
  configuration?: OSSExportConfiguration;
  description?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSExportConfiguration,
      description: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOSSHDFSExportResponse extends $tea.Model {
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

export class UpdateOSSIngestionRequest extends $tea.Model {
  configuration?: OSSIngestionConfiguration;
  description?: string;
  displayName?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: OSSIngestionConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOSSIngestionResponse extends $tea.Model {
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

export class UpdateOssExternalStoreRequest extends $tea.Model {
  externalStoreName?: string;
  parameter?: UpdateOssExternalStoreRequestParameter;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: UpdateOssExternalStoreRequestParameter,
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssExternalStoreResponse extends $tea.Model {
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

export class UpdateProjectRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
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

export class UpdateRdsExternalStoreRequest extends $tea.Model {
  externalStoreName?: string;
  parameter?: UpdateRdsExternalStoreRequestParameter;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: UpdateRdsExternalStoreRequestParameter,
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRdsExternalStoreResponse extends $tea.Model {
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

export class UpdateSavedSearchRequest extends $tea.Model {
  displayName?: string;
  logstore?: string;
  savedsearchName?: string;
  searchQuery?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      logstore: 'logstore',
      savedsearchName: 'savedsearchName',
      searchQuery: 'searchQuery',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      logstore: 'string',
      savedsearchName: 'string',
      searchQuery: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSavedSearchResponse extends $tea.Model {
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

export class UpdateScheduledSQLRequest extends $tea.Model {
  configuration?: ScheduledSQLConfiguration;
  description?: string;
  displayName?: string;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ScheduledSQLConfiguration,
      description: 'string',
      displayName: 'string',
      schedule: Schedule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledSQLResponse extends $tea.Model {
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

export class UpsertCollectionPolicyRequest extends $tea.Model {
  attribute?: UpsertCollectionPolicyRequestAttribute;
  centralizeConfig?: UpsertCollectionPolicyRequestCentralizeConfig;
  centralizeEnabled?: boolean;
  dataCode?: string;
  enabled?: boolean;
  policyConfig?: UpsertCollectionPolicyRequestPolicyConfig;
  policyName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      enabled: 'enabled',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: UpsertCollectionPolicyRequestAttribute,
      centralizeConfig: UpsertCollectionPolicyRequestCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      enabled: 'boolean',
      policyConfig: UpsertCollectionPolicyRequestPolicyConfig,
      policyName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyResponseBody extends $tea.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpsertCollectionPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpsertCollectionPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogtailConfigOutputDetail extends $tea.Model {
  endpoint?: string;
  logstoreName?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      logstoreName: 'logstoreName',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      logstoreName: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLLabelParamSettings extends $tea.Model {
  config?: string;
  mode?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      mode: 'mode',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      mode: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLServiceParamModel extends $tea.Model {
  modelResourceId?: string;
  modelResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      modelResourceId: 'modelResourceId',
      modelResourceType: 'modelResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResourceId: 'string',
      modelResourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLServiceParamResource extends $tea.Model {
  cpuLimit?: number;
  gpu?: number;
  memoryLimit?: number;
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'cpuLimit',
      gpu: 'gpu',
      memoryLimit: 'memoryLimit',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      gpu: 'number',
      memoryLimit: 'number',
      replica: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSExportConfigurationSink extends $tea.Model {
  bucket?: string;
  bufferInterval?: number;
  bufferSize?: number;
  compressionType?: string;
  contentDetail?: string;
  contentType?: string;
  delaySec?: number;
  endpoint?: string;
  pathFormat?: string;
  pathFormatType?: string;
  prefix?: string;
  roleArn?: string;
  suffix?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      bufferInterval: 'bufferInterval',
      bufferSize: 'bufferSize',
      compressionType: 'compressionType',
      contentDetail: 'contentDetail',
      contentType: 'contentType',
      delaySec: 'delaySec',
      endpoint: 'endpoint',
      pathFormat: 'pathFormat',
      pathFormatType: 'pathFormatType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      suffix: 'suffix',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      bufferInterval: 'number',
      bufferSize: 'number',
      compressionType: 'string',
      contentDetail: 'string',
      contentType: 'string',
      delaySec: 'number',
      endpoint: 'string',
      pathFormat: 'string',
      pathFormatType: 'string',
      prefix: 'string',
      roleArn: 'string',
      suffix: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EtlJobFunctionConfig extends $tea.Model {
  accountId?: string;
  endpoint?: string;
  functionName?: string;
  functionProvider?: string;
  regionName?: string;
  roleArn?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      endpoint: 'endpoint',
      functionName: 'functionName',
      functionProvider: 'functionProvider',
      regionName: 'regionName',
      roleArn: 'roleArn',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      endpoint: 'string',
      functionName: 'string',
      functionProvider: 'string',
      regionName: 'string',
      roleArn: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EtlJobLogConfig extends $tea.Model {
  endpoint?: string;
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      logstoreName: 'logstoreName',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EtlJobSourceConfig extends $tea.Model {
  logstoreName?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'logstoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EtlJobTriggerConfig extends $tea.Model {
  maxRetryTime?: number;
  roleArn?: string;
  startingPosition?: string;
  startingUnixtime?: number;
  triggerInterval?: number;
  static names(): { [key: string]: string } {
    return {
      maxRetryTime: 'maxRetryTime',
      roleArn: 'roleArn',
      startingPosition: 'startingPosition',
      startingUnixtime: 'startingUnixtime',
      triggerInterval: 'triggerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRetryTime: 'number',
      roleArn: 'string',
      startingPosition: 'string',
      startingUnixtime: 'number',
      triggerInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexLine extends $tea.Model {
  caseSensitive?: boolean;
  chn?: boolean;
  excludeKeys?: string[];
  includeKeys?: string[];
  token?: string[];
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      excludeKeys: 'exclude_keys',
      includeKeys: 'include_keys',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      chn: 'boolean',
      excludeKeys: { 'type': 'array', 'itemType': 'string' },
      includeKeys: { 'type': 'array', 'itemType': 'string' },
      token: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoggingLoggingDetails extends $tea.Model {
  logstore?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineGroupGroupAttribute extends $tea.Model {
  externalName?: string;
  groupTopic?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'externalName',
      groupTopic: 'groupTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      groupTopic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestLine extends $tea.Model {
  caseSensitive?: boolean;
  chn?: boolean;
  excludeKeys?: string[];
  includeKeys?: string[];
  token?: string[];
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      excludeKeys: 'exclude_keys',
      includeKeys: 'include_keys',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      chn: 'boolean',
      excludeKeys: { 'type': 'array', 'itemType': 'string' },
      includeKeys: { 'type': 'array', 'itemType': 'string' },
      token: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoggingRequestLoggingDetails extends $tea.Model {
  logstore?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMachineGroupRequestGroupAttribute extends $tea.Model {
  externalName?: string;
  groupTopic?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'externalName',
      groupTopic: 'groupTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      groupTopic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssExternalStoreRequestParameterColumns extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssExternalStoreRequestParameter extends $tea.Model {
  accessid?: string;
  accesskey?: string;
  bucket?: string;
  columns?: CreateOssExternalStoreRequestParameterColumns[];
  endpoint?: string;
  objects?: string[];
  static names(): { [key: string]: string } {
    return {
      accessid: 'accessid',
      accesskey: 'accesskey',
      bucket: 'bucket',
      columns: 'columns',
      endpoint: 'endpoint',
      objects: 'objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      accesskey: 'string',
      bucket: 'string',
      columns: { 'type': 'array', 'itemType': CreateOssExternalStoreRequestParameterColumns },
      endpoint: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRdsExternalStoreRequestParameter extends $tea.Model {
  db?: string;
  host?: string;
  instanceId?: string;
  password?: string;
  port?: string;
  region?: string;
  table?: string;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      db: 'db',
      host: 'host',
      instanceId: 'instance-id',
      password: 'password',
      port: 'port',
      region: 'region',
      table: 'table',
      username: 'username',
      vpcId: 'vpc-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'string',
      host: 'string',
      instanceId: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      table: 'string',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckPointResponseBody extends $tea.Model {
  shard?: number;
  checkpoint?: string;
  updateTime?: number;
  consumer?: string;
  static names(): { [key: string]: string } {
    return {
      shard: 'shard',
      checkpoint: 'checkpoint',
      updateTime: 'updateTime',
      consumer: 'consumer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: 'number',
      checkpoint: 'string',
      updateTime: 'number',
      consumer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBodyCollectionPolicyAttribute extends $tea.Model {
  app?: string;
  policyGroup?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'app',
      policyGroup: 'policyGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      policyGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig extends $tea.Model {
  destLogstore?: string;
  destProject?: string;
  destRegion?: string;
  destTTL?: number;
  static names(): { [key: string]: string } {
    return {
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRegion: 'destRegion',
      destTTL: 'destTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destLogstore: 'string',
      destProject: 'string',
      destRegion: 'string',
      destTTL: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig extends $tea.Model {
  instanceIds?: string[];
  regions?: string[];
  resourceMode?: string;
  resourceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      regions: 'regions',
      resourceMode: 'resourceMode',
      resourceTags: 'resourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceMode: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBodyCollectionPolicy extends $tea.Model {
  attribute?: GetCollectionPolicyResponseBodyCollectionPolicyAttribute;
  centralizeConfig?: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig;
  centralizeEnabled?: boolean;
  dataCode?: string;
  enabled?: string;
  policyConfig?: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig;
  policyName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      enabled: 'enabled',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: GetCollectionPolicyResponseBodyCollectionPolicyAttribute,
      centralizeConfig: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      enabled: 'string',
      policyConfig: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig,
      policyName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponseBody extends $tea.Model {
  from?: number;
  to?: number;
  count?: number;
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
      count: 'count',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
      count: 'number',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexResponseBodyLine extends $tea.Model {
  caseSensitive?: boolean;
  chn?: boolean;
  excludeKeys?: string[];
  includeKeys?: string[];
  token?: string[];
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      excludeKeys: 'exclude_keys',
      includeKeys: 'include_keys',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      chn: 'boolean',
      excludeKeys: { 'type': 'array', 'itemType': 'string' },
      includeKeys: { 'type': 'array', 'itemType': 'string' },
      token: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2ResponseBodyMetaPhraseQueryInfo extends $tea.Model {
  beginOffset?: number;
  endOffset?: number;
  endTime?: number;
  scanAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'beginOffset',
      endOffset: 'endOffset',
      endTime: 'endTime',
      scanAll: 'scanAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      endOffset: 'number',
      endTime: 'number',
      scanAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2ResponseBodyMeta extends $tea.Model {
  aggQuery?: string;
  columnTypes?: string[];
  count?: number;
  cpuCores?: number;
  cpuSec?: number;
  elapsedMillisecond?: number;
  hasSQL?: boolean;
  highlights?: LogContent[][];
  isAccurate?: boolean;
  keys?: string[];
  limited?: number;
  mode?: number;
  phraseQueryInfo?: GetLogsV2ResponseBodyMetaPhraseQueryInfo;
  processedBytes?: number;
  processedRows?: number;
  progress?: string;
  scanBytes?: number;
  telementryType?: string;
  terms?: { [key: string]: any }[];
  whereQuery?: string;
  static names(): { [key: string]: string } {
    return {
      aggQuery: 'aggQuery',
      columnTypes: 'columnTypes',
      count: 'count',
      cpuCores: 'cpuCores',
      cpuSec: 'cpuSec',
      elapsedMillisecond: 'elapsedMillisecond',
      hasSQL: 'hasSQL',
      highlights: 'highlights',
      isAccurate: 'isAccurate',
      keys: 'keys',
      limited: 'limited',
      mode: 'mode',
      phraseQueryInfo: 'phraseQueryInfo',
      processedBytes: 'processedBytes',
      processedRows: 'processedRows',
      progress: 'progress',
      scanBytes: 'scanBytes',
      telementryType: 'telementryType',
      terms: 'terms',
      whereQuery: 'whereQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggQuery: 'string',
      columnTypes: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      cpuCores: 'number',
      cpuSec: 'number',
      elapsedMillisecond: 'number',
      hasSQL: 'boolean',
      highlights: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': LogContent } },
      isAccurate: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
      limited: 'number',
      mode: 'number',
      phraseQueryInfo: GetLogsV2ResponseBodyMetaPhraseQueryInfo,
      processedBytes: 'number',
      processedRows: 'number',
      progress: 'string',
      scanBytes: 'number',
      telementryType: 'string',
      terms: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      whereQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShipperStatusResponseBodyStatistics extends $tea.Model {
  fail?: number;
  running?: number;
  success?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'fail',
      running: 'running',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'number',
      running: 'number',
      success: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShipperStatusResponseBodyTasks extends $tea.Model {
  id?: string;
  taskCode?: string;
  taskCreateTime?: number;
  taskDataLines?: number;
  taskFinishTime?: number;
  taskLastDataReceiveTime?: number;
  taskMessage?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      taskCode: 'taskCode',
      taskCreateTime: 'taskCreateTime',
      taskDataLines: 'taskDataLines',
      taskFinishTime: 'taskFinishTime',
      taskLastDataReceiveTime: 'taskLastDataReceiveTime',
      taskMessage: 'taskMessage',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      taskCode: 'string',
      taskCreateTime: 'number',
      taskDataLines: 'number',
      taskFinishTime: 'number',
      taskLastDataReceiveTime: 'number',
      taskMessage: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesRequestAttribute extends $tea.Model {
  app?: string;
  policyGroup?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'app',
      policyGroup: 'policyGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      policyGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataAttribute extends $tea.Model {
  app?: string;
  policyGroup?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'app',
      policyGroup: 'policyGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      policyGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataCentralizeConfig extends $tea.Model {
  destLogstore?: string;
  destProject?: string;
  destRegion?: string;
  destTTL?: number;
  static names(): { [key: string]: string } {
    return {
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRegion: 'destRegion',
      destTTL: 'destTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destLogstore: 'string',
      destProject: 'string',
      destRegion: 'string',
      destTTL: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataPolicyConfig extends $tea.Model {
  instanceIds?: string[];
  regions?: string[];
  resourceMode?: string;
  resourceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      regions: 'regions',
      resourceMode: 'resourceMode',
      resourceTags: 'resourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceMode: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyData extends $tea.Model {
  attribute?: ListCollectionPoliciesResponseBodyDataAttribute;
  centralizeConfig?: ListCollectionPoliciesResponseBodyDataCentralizeConfig;
  centralizeEnabled?: boolean;
  dataCode?: string;
  enabled?: boolean;
  policyConfig?: ListCollectionPoliciesResponseBodyDataPolicyConfig;
  policyName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      enabled: 'enabled',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: ListCollectionPoliciesResponseBodyDataAttribute,
      centralizeConfig: ListCollectionPoliciesResponseBodyDataCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      enabled: 'boolean',
      policyConfig: ListCollectionPoliciesResponseBodyDataPolicyConfig,
      policyName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponseBodyDashboardItems extends $tea.Model {
  dashboardName?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardName: 'dashboardName',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardName: 'string',
      displayName: 'string',
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
      key: 'key',
      value: 'value',
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
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

export class TagResourcesRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class UpdateIndexRequestLine extends $tea.Model {
  caseSensitive?: boolean;
  chn?: boolean;
  excludeKeys?: string[];
  includeKeys?: string[];
  token?: string[];
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      excludeKeys: 'exclude_keys',
      includeKeys: 'include_keys',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      chn: 'boolean',
      excludeKeys: { 'type': 'array', 'itemType': 'string' },
      includeKeys: { 'type': 'array', 'itemType': 'string' },
      token: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoggingRequestLoggingDetails extends $tea.Model {
  logstore?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMachineGroupRequestGroupAttribute extends $tea.Model {
  externalName?: string;
  groupTopic?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'externalName',
      groupTopic: 'groupTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      groupTopic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssExternalStoreRequestParameterColumns extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOssExternalStoreRequestParameter extends $tea.Model {
  accessid?: string;
  accesskey?: string;
  bucket?: string;
  columns?: UpdateOssExternalStoreRequestParameterColumns[];
  endpoint?: string;
  objects?: string[];
  static names(): { [key: string]: string } {
    return {
      accessid: 'accessid',
      accesskey: 'accesskey',
      bucket: 'bucket',
      columns: 'columns',
      endpoint: 'endpoint',
      objects: 'objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      accesskey: 'string',
      bucket: 'string',
      columns: { 'type': 'array', 'itemType': UpdateOssExternalStoreRequestParameterColumns },
      endpoint: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRdsExternalStoreRequestParameter extends $tea.Model {
  db?: string;
  host?: string;
  instanceId?: string;
  password?: string;
  port?: string;
  region?: string;
  table?: string;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      db: 'db',
      host: 'host',
      instanceId: 'instance-id',
      password: 'password',
      port: 'port',
      region: 'region',
      table: 'table',
      username: 'username',
      vpcId: 'vpc-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: 'string',
      host: 'string',
      instanceId: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      table: 'string',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyRequestAttribute extends $tea.Model {
  app?: string;
  policyGroup?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'app',
      policyGroup: 'policyGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      policyGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyRequestCentralizeConfig extends $tea.Model {
  destLogstore?: string;
  destProject?: string;
  destRegion?: string;
  destTTL?: number;
  static names(): { [key: string]: string } {
    return {
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRegion: 'destRegion',
      destTTL: 'destTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destLogstore: 'string',
      destProject: 'string',
      destRegion: 'string',
      destTTL: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyRequestPolicyConfig extends $tea.Model {
  instanceIds?: string[];
  regions?: string[];
  resourceMode?: string;
  resourceTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      regions: 'regions',
      resourceMode: 'resourceMode',
      resourceTags: 'resourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regions: { 'type': 'array', 'itemType': 'string' },
      resourceMode: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {
  _client: SPI;

  constructor(config: $OpenApi.Config) {
    super(config);
    this._client = new GatewayClient();
    this._spi = this._client;
    this._endpointRule = "central";
  }


  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ApplyConfigToMachineGroupResponse
   */
  async applyConfigToMachineGroupWithOptions(project: string, machineGroup: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ApplyConfigToMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ApplyConfigToMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/configs/${configName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ApplyConfigToMachineGroupResponse>(await this.execute(params, req, runtime), new ApplyConfigToMachineGroupResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return ApplyConfigToMachineGroupResponse
   */
  async applyConfigToMachineGroup(project: string, machineGroup: string, configName: string): Promise<ApplyConfigToMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyConfigToMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  async changeResourceGroupWithOptions(project: string, request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/resourcegroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(project: string, request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Connections between consumers and servers are established by sending heartbeats at regular intervals. If a server does not receive heartbeats from a consumer on schedule, the server deletes the consumer.
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ConsumerGroupHeartBeatRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConsumerGroupHeartBeatResponse
   */
  async consumerGroupHeartBeatWithOptions(project: string, logstore: string, consumerGroup: string, request: ConsumerGroupHeartBeatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConsumerGroupHeartBeatResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumer)) {
      query["consumer"] = request.consumer;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "ConsumerGroupHeartBeat",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}?type=heartbeat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ConsumerGroupHeartBeatResponse>(await this.execute(params, req, runtime), new ConsumerGroupHeartBeatResponse({}));
  }

  /**
    * ### Usage notes
    * *   Connections between consumers and servers are established by sending heartbeats at regular intervals. If a server does not receive heartbeats from a consumer on schedule, the server deletes the consumer.
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ConsumerGroupHeartBeatRequest
    * @return ConsumerGroupHeartBeatResponse
   */
  async consumerGroupHeartBeat(project: string, logstore: string, consumerGroup: string, request: ConsumerGroupHeartBeatRequest): Promise<ConsumerGroupHeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consumerGroupHeartBeatWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  async createAlertWithOptions(project: string, request: CreateAlertRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAlertResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateAlertResponse>(await this.execute(params, req, runtime), new CreateAlertResponse({}));
  }

  async createAlert(project: string, request: CreateAlertRequest): Promise<CreateAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlertWithOptions(project, request, headers, runtime);
  }

  async createAnnotationDataSetWithOptions(request: CreateAnnotationDataSetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAnnotationDataSetResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetId)) {
      query["datasetId"] = request.datasetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateAnnotationDataSetResponse>(await this.execute(params, req, runtime), new CreateAnnotationDataSetResponse({}));
  }

  async createAnnotationDataSet(request: CreateAnnotationDataSetRequest): Promise<CreateAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnotationDataSetWithOptions(request, headers, runtime);
  }

  async createAnnotationLabelWithOptions(request: CreateAnnotationLabelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAnnotationLabelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateAnnotationLabelResponse>(await this.execute(params, req, runtime), new CreateAnnotationLabelResponse({}));
  }

  async createAnnotationLabel(request: CreateAnnotationLabelRequest): Promise<CreateAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnotationLabelWithOptions(request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](~~48984~~).
    * *   You can create up to 100 Logtail configurations in a project.
    * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](~~29058~~).
    *
    * @param request CreateConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateConfigResponse
   */
  async createConfigWithOptions(project: string, request: CreateConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConfigResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateConfigResponse>(await this.execute(params, req, runtime), new CreateConfigResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](~~48984~~).
    * *   You can create up to 100 Logtail configurations in a project.
    * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](~~29058~~).
    *
    * @param request CreateConfigRequest
    * @return CreateConfigResponse
   */
  async createConfig(project: string, request: CreateConfigRequest): Promise<CreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   You can create up to 30 consumer groups for a Logstore.
    * *   Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDKs for Java. For more information, see [Consume log data](~~120035~~) and [Use consumer groups to consume data](~~28998~~).
    *
    * @param request CreateConsumerGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(project: string, logstore: string, request: CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumerGroup)) {
      body["consumerGroup"] = request.consumerGroup;
    }

    if (!Util.isUnset(request.order)) {
      body["order"] = request.order;
    }

    if (!Util.isUnset(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.execute(params, req, runtime), new CreateConsumerGroupResponse({}));
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   You can create up to 30 consumer groups for a Logstore.
    * *   Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDKs for Java. For more information, see [Consume log data](~~120035~~) and [Use consumer groups to consume data](~~28998~~).
    *
    * @param request CreateConsumerGroupRequest
    * @return CreateConsumerGroupResponse
   */
  async createConsumerGroup(project: string, logstore: string, request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param request CreateDashboardRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDashboardResponse
   */
  async createDashboardWithOptions(project: string, request: CreateDashboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDashboardResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateDashboardResponse>(await this.execute(params, req, runtime), new CreateDashboardResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param request CreateDashboardRequest
    * @return CreateDashboardResponse
   */
  async createDashboard(project: string, request: CreateDashboardRequest): Promise<CreateDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDashboardWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateDomainRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDomainResponse
   */
  async createDomainWithOptions(project: string, request: CreateDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateDomainResponse>(await this.execute(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateDomainRequest
    * @return CreateDomainResponse
   */
  async createDomain(project: string, request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(project, request, headers, runtime);
  }

  async createETLWithOptions(project: string, request: CreateETLRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateETLResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateETLResponse>(await this.execute(params, req, runtime), new CreateETLResponse({}));
  }

  async createETL(project: string, request: CreateETLRequest): Promise<CreateETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createETLWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateIndexRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateIndexResponse
   */
  async createIndexWithOptions(project: string, logstore: string, request: CreateIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIndexResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keys)) {
      body["keys"] = request.keys;
    }

    if (!Util.isUnset(request.line)) {
      body["line"] = request.line;
    }

    if (!Util.isUnset(request.logReduce)) {
      body["log_reduce"] = request.logReduce;
    }

    if (!Util.isUnset(request.logReduceBlackList)) {
      body["log_reduce_black_list"] = request.logReduceBlackList;
    }

    if (!Util.isUnset(request.logReduceWhiteList)) {
      body["log_reduce_white_list"] = request.logReduceWhiteList;
    }

    if (!Util.isUnset(request.maxTextLen)) {
      body["max_text_len"] = request.maxTextLen;
    }

    if (!Util.isUnset(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateIndexResponse>(await this.execute(params, req, runtime), new CreateIndexResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateIndexRequest
    * @return CreateIndexResponse
   */
  async createIndex(project: string, logstore: string, request: CreateIndexRequest): Promise<CreateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateLogStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLogStoreResponse
   */
  async createLogStoreWithOptions(project: string, request: CreateLogStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLogStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appendMeta)) {
      body["appendMeta"] = request.appendMeta;
    }

    if (!Util.isUnset(request.autoSplit)) {
      body["autoSplit"] = request.autoSplit;
    }

    if (!Util.isUnset(request.enableTracking)) {
      body["enable_tracking"] = request.enableTracking;
    }

    if (!Util.isUnset(request.encryptConf)) {
      body["encrypt_conf"] = request.encryptConf;
    }

    if (!Util.isUnset(request.hotTtl)) {
      body["hot_ttl"] = request.hotTtl;
    }

    if (!Util.isUnset(request.infrequentAccessTTL)) {
      body["infrequentAccessTTL"] = request.infrequentAccessTTL;
    }

    if (!Util.isUnset(request.logstoreName)) {
      body["logstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.maxSplitShard)) {
      body["maxSplitShard"] = request.maxSplitShard;
    }

    if (!Util.isUnset(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!Util.isUnset(request.shardCount)) {
      body["shardCount"] = request.shardCount;
    }

    if (!Util.isUnset(request.telemetryType)) {
      body["telemetryType"] = request.telemetryType;
    }

    if (!Util.isUnset(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateLogStoreResponse>(await this.execute(params, req, runtime), new CreateLogStoreResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateLogStoreRequest
    * @return CreateLogStoreResponse
   */
  async createLogStore(project: string, request: CreateLogStoreRequest): Promise<CreateLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogStoreWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateLoggingRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLoggingResponse
   */
  async createLoggingWithOptions(project: string, request: CreateLoggingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLoggingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.loggingDetails)) {
      body["loggingDetails"] = request.loggingDetails;
    }

    if (!Util.isUnset(request.loggingProject)) {
      body["loggingProject"] = request.loggingProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateLoggingResponse>(await this.execute(params, req, runtime), new CreateLoggingResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateLoggingRequest
    * @return CreateLoggingResponse
   */
  async createLogging(project: string, request: CreateLoggingRequest): Promise<CreateLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLoggingWithOptions(project, request, headers, runtime);
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param request CreateLogtailPipelineConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLogtailPipelineConfigResponse
   */
  async createLogtailPipelineConfigWithOptions(project: string, request: CreateLogtailPipelineConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLogtailPipelineConfigResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregators)) {
      body["aggregators"] = request.aggregators;
    }

    if (!Util.isUnset(request.configName)) {
      body["configName"] = request.configName;
    }

    if (!Util.isUnset(request.flushers)) {
      body["flushers"] = request.flushers;
    }

    if (!Util.isUnset(request.global)) {
      body["global"] = request.global;
    }

    if (!Util.isUnset(request.inputs)) {
      body["inputs"] = request.inputs;
    }

    if (!Util.isUnset(request.logSample)) {
      body["logSample"] = request.logSample;
    }

    if (!Util.isUnset(request.processors)) {
      body["processors"] = request.processors;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new CreateLogtailPipelineConfigResponse({}));
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param request CreateLogtailPipelineConfigRequest
    * @return CreateLogtailPipelineConfigResponse
   */
  async createLogtailPipelineConfig(project: string, request: CreateLogtailPipelineConfigRequest): Promise<CreateLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogtailPipelineConfigWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateMachineGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMachineGroupResponse
   */
  async createMachineGroupWithOptions(project: string, request: CreateMachineGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMachineGroupResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupAttribute)) {
      body["groupAttribute"] = request.groupAttribute;
    }

    if (!Util.isUnset(request.groupName)) {
      body["groupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      body["groupType"] = request.groupType;
    }

    if (!Util.isUnset(request.machineIdentifyType)) {
      body["machineIdentifyType"] = request.machineIdentifyType;
    }

    if (!Util.isUnset(request.machineList)) {
      body["machineList"] = request.machineList;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateMachineGroupResponse>(await this.execute(params, req, runtime), new CreateMachineGroupResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateMachineGroupRequest
    * @return CreateMachineGroupResponse
   */
  async createMachineGroup(project: string, request: CreateMachineGroupRequest): Promise<CreateMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMachineGroupWithOptions(project, request, headers, runtime);
  }

  async createOSSExportWithOptions(project: string, request: CreateOSSExportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateOSSExportResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateOSSExportResponse>(await this.execute(params, req, runtime), new CreateOSSExportResponse({}));
  }

  async createOSSExport(project: string, request: CreateOSSExportRequest): Promise<CreateOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSExportWithOptions(project, request, headers, runtime);
  }

  async createOSSHDFSExportWithOptions(project: string, request: CreateOSSHDFSExportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateOSSHDFSExportResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateOSSHDFSExportResponse>(await this.execute(params, req, runtime), new CreateOSSHDFSExportResponse({}));
  }

  async createOSSHDFSExport(project: string, request: CreateOSSHDFSExportRequest): Promise<CreateOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSHDFSExportWithOptions(project, request, headers, runtime);
  }

  async createOSSIngestionWithOptions(project: string, request: CreateOSSIngestionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateOSSIngestionResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateOSSIngestionResponse>(await this.execute(params, req, runtime), new CreateOSSIngestionResponse({}));
  }

  async createOSSIngestion(project: string, request: CreateOSSIngestionRequest): Promise<CreateOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSIngestionWithOptions(project, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateOssExternalStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateOssExternalStoreResponse
   */
  async createOssExternalStoreWithOptions(project: string, request: CreateOssExternalStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateOssExternalStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.externalStoreName)) {
      body["externalStoreName"] = request.externalStoreName;
    }

    if (!Util.isUnset(request.parameter)) {
      body["parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOssExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateOssExternalStoreResponse>(await this.execute(params, req, runtime), new CreateOssExternalStoreResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateOssExternalStoreRequest
    * @return CreateOssExternalStoreResponse
   */
  async createOssExternalStore(project: string, request: CreateOssExternalStoreRequest): Promise<CreateOssExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOssExternalStoreWithOptions(project, request, headers, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataRedundancyType)) {
      body["dataRedundancyType"] = request.dataRedundancyType;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateProjectResponse>(await this.execute(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateRdsExternalStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRdsExternalStoreResponse
   */
  async createRdsExternalStoreWithOptions(project: string, request: CreateRdsExternalStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRdsExternalStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.externalStoreName)) {
      body["externalStoreName"] = request.externalStoreName;
    }

    if (!Util.isUnset(request.parameter)) {
      body["parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRdsExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateRdsExternalStoreResponse>(await this.execute(params, req, runtime), new CreateRdsExternalStoreResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateRdsExternalStoreRequest
    * @return CreateRdsExternalStoreResponse
   */
  async createRdsExternalStore(project: string, request: CreateRdsExternalStoreRequest): Promise<CreateRdsExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRdsExternalStoreWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateSavedSearchRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSavedSearchResponse
   */
  async createSavedSearchWithOptions(project: string, request: CreateSavedSearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSavedSearchResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.logstore)) {
      body["logstore"] = request.logstore;
    }

    if (!Util.isUnset(request.savedsearchName)) {
      body["savedsearchName"] = request.savedsearchName;
    }

    if (!Util.isUnset(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateSavedSearchResponse>(await this.execute(params, req, runtime), new CreateSavedSearchResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request CreateSavedSearchRequest
    * @return CreateSavedSearchResponse
   */
  async createSavedSearch(project: string, request: CreateSavedSearchRequest): Promise<CreateSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSavedSearchWithOptions(project, request, headers, runtime);
  }

  async createScheduledSQLWithOptions(project: string, request: CreateScheduledSQLRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateScheduledSQLResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateScheduledSQLResponse>(await this.execute(params, req, runtime), new CreateScheduledSQLResponse({}));
  }

  async createScheduledSQL(project: string, request: CreateScheduledSQLRequest): Promise<CreateScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledSQLWithOptions(project, request, headers, runtime);
  }

  async createTicketWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTicketResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateTicket",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/tickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTicketResponse>(await this.execute(params, req, runtime), new CreateTicketResponse({}));
  }

  async createTicket(): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTicketWithOptions(headers, runtime);
  }

  async deleteAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAlertResponse>(await this.execute(params, req, runtime), new DeleteAlertResponse({}));
  }

  async deleteAlert(project: string, alertName: string): Promise<DeleteAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertWithOptions(project, alertName, headers, runtime);
  }

  async deleteAnnotationDataWithOptions(datasetId: string, annotationdataId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAnnotationDataResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata/${annotationdataId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAnnotationDataResponse>(await this.execute(params, req, runtime), new DeleteAnnotationDataResponse({}));
  }

  async deleteAnnotationData(datasetId: string, annotationdataId: string): Promise<DeleteAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
    * You can delete a dataset only if no data exists in the dataset.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAnnotationDataSetResponse
   */
  async deleteAnnotationDataSetWithOptions(datasetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAnnotationDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAnnotationDataSetResponse>(await this.execute(params, req, runtime), new DeleteAnnotationDataSetResponse({}));
  }

  /**
    * You can delete a dataset only if no data exists in the dataset.
    *
    * @return DeleteAnnotationDataSetResponse
   */
  async deleteAnnotationDataSet(datasetId: string): Promise<DeleteAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
    * Only non-built-in tags can be deleted.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAnnotationLabelResponse
   */
  async deleteAnnotationLabelWithOptions(labelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAnnotationLabelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel/${labelId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAnnotationLabelResponse>(await this.execute(params, req, runtime), new DeleteAnnotationLabelResponse({}));
  }

  /**
    * Only non-built-in tags can be deleted.
    *
    * @return DeleteAnnotationLabelResponse
   */
  async deleteAnnotationLabel(labelId: string): Promise<DeleteAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  async deleteCollectionPolicyWithOptions(policyName: string, request: DeleteCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCollectionPolicyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!Util.isUnset(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCollectionPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy/${policyName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCollectionPolicyResponse>(await this.execute(params, req, runtime), new DeleteCollectionPolicyResponse({}));
  }

  async deleteCollectionPolicy(policyName: string, request: DeleteCollectionPolicyRequest): Promise<DeleteCollectionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCollectionPolicyWithOptions(policyName, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](~~29043~~).
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteConfigResponse
   */
  async deleteConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteConfigResponse>(await this.execute(params, req, runtime), new DeleteConfigResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](~~29043~~).
    *
    * @return DeleteConfigResponse
   */
  async deleteConfig(project: string, configName: string): Promise<DeleteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(project, configName, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(project: string, logstore: string, consumerGroup: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.execute(params, req, runtime), new DeleteConsumerGroupResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(project: string, logstore: string, consumerGroup: string): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(project, logstore, consumerGroup, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDashboardResponse
   */
  async deleteDashboardWithOptions(project: string, dashboardName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDashboardResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards/${dashboardName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteDashboardResponse>(await this.execute(params, req, runtime), new DeleteDashboardResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @return DeleteDashboardResponse
   */
  async deleteDashboard(project: string, dashboardName: string): Promise<DeleteDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDomainResponse
   */
  async deleteDomainWithOptions(project: string, domainName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/domains/${domainName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteDomainResponse>(await this.execute(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteDomainResponse
   */
  async deleteDomain(project: string, domainName: string): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(project, domainName, headers, runtime);
  }

  async deleteETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteETLResponse>(await this.execute(params, req, runtime), new DeleteETLResponse({}));
  }

  async deleteETL(project: string, etlName: string): Promise<DeleteETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteETLWithOptions(project, etlName, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteExternalStoreResponse
   */
  async deleteExternalStoreWithOptions(project: string, externalStoreName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExternalStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores/${externalStoreName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteExternalStoreResponse>(await this.execute(params, req, runtime), new DeleteExternalStoreResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteExternalStoreResponse
   */
  async deleteExternalStore(project: string, externalStoreName: string): Promise<DeleteExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExternalStoreWithOptions(project, externalStoreName, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteIndexResponse
   */
  async deleteIndexWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIndexResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteIndexResponse>(await this.execute(params, req, runtime), new DeleteIndexResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteIndexResponse
   */
  async deleteIndex(project: string, logstore: string): Promise<DeleteIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(project, logstore, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteLogStoreResponse
   */
  async deleteLogStoreWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLogStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteLogStoreResponse>(await this.execute(params, req, runtime), new DeleteLogStoreResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteLogStoreResponse
   */
  async deleteLogStore(project: string, logstore: string): Promise<DeleteLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogStoreWithOptions(project, logstore, headers, runtime);
  }

  async deleteLoggingWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLoggingResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteLoggingResponse>(await this.execute(params, req, runtime), new DeleteLoggingResponse({}));
  }

  async deleteLogging(project: string): Promise<DeleteLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLoggingWithOptions(project, headers, runtime);
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteLogtailPipelineConfigResponse
   */
  async deleteLogtailPipelineConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLogtailPipelineConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs/${configName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new DeleteLogtailPipelineConfigResponse({}));
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @return DeleteLogtailPipelineConfigResponse
   */
  async deleteLogtailPipelineConfig(project: string, configName: string): Promise<DeleteLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogtailPipelineConfigWithOptions(project, configName, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteMachineGroupResponse
   */
  async deleteMachineGroupWithOptions(project: string, machineGroup: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteMachineGroupResponse>(await this.execute(params, req, runtime), new DeleteMachineGroupResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteMachineGroupResponse
   */
  async deleteMachineGroup(project: string, machineGroup: string): Promise<DeleteMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMachineGroupWithOptions(project, machineGroup, headers, runtime);
  }

  async deleteOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteOSSExportResponse>(await this.execute(params, req, runtime), new DeleteOSSExportResponse({}));
  }

  async deleteOSSExport(project: string, ossExportName: string): Promise<DeleteOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async deleteOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteOSSHDFSExportResponse>(await this.execute(params, req, runtime), new DeleteOSSHDFSExportResponse({}));
  }

  async deleteOSSHDFSExport(project: string, ossExportName: string): Promise<DeleteOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async deleteOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteOSSIngestionResponse>(await this.execute(params, req, runtime), new DeleteOSSIngestionResponse({}));
  }

  async deleteOSSIngestion(project: string, ossIngestionName: string): Promise<DeleteOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  async deleteProjectWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteProjectResponse>(await this.execute(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(project: string): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(project, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteProjectPolicyResponse
   */
  async deleteProjectPolicyWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectPolicyResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProjectPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/policy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteProjectPolicyResponse>(await this.execute(params, req, runtime), new DeleteProjectPolicyResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteProjectPolicyResponse
   */
  async deleteProjectPolicy(project: string): Promise<DeleteProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSavedSearchResponse
   */
  async deleteSavedSearchWithOptions(project: string, savedsearchName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSavedSearchResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches/${savedsearchName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteSavedSearchResponse>(await this.execute(params, req, runtime), new DeleteSavedSearchResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteSavedSearchResponse
   */
  async deleteSavedSearch(project: string, savedsearchName: string): Promise<DeleteSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  async deleteScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteScheduledSQLResponse>(await this.execute(params, req, runtime), new DeleteScheduledSQLResponse({}));
  }

  async deleteScheduledSQL(project: string, scheduledSQLName: string): Promise<DeleteScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
    * @deprecated
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteShipperResponse
   */
  // Deprecated
  async deleteShipperWithOptions(project: string, logstore: string, shipperName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteShipperResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteShipper",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shipper/${shipperName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteShipperResponse>(await this.execute(params, req, runtime), new DeleteShipperResponse({}));
  }

  /**
    * @deprecated
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return DeleteShipperResponse
   */
  // Deprecated
  async deleteShipper(project: string, logstore: string, shipperName: string): Promise<DeleteShipperResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteShipperWithOptions(project, logstore, shipperName, headers, runtime);
  }

  async disableAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DisableAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}?action=disable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DisableAlertResponse>(await this.execute(params, req, runtime), new DisableAlertResponse({}));
  }

  async disableAlert(project: string, alertName: string): Promise<DisableAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableAlertWithOptions(project, alertName, headers, runtime);
  }

  async enableAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "EnableAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}?action=enable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<EnableAlertResponse>(await this.execute(params, req, runtime), new EnableAlertResponse({}));
  }

  async enableAlert(project: string, alertName: string): Promise<EnableAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableAlertWithOptions(project, alertName, headers, runtime);
  }

  async getAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlertResponse>(await this.execute(params, req, runtime), new GetAlertResponse({}));
  }

  async getAlert(project: string, alertName: string): Promise<GetAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlertWithOptions(project, alertName, headers, runtime);
  }

  async getAnnotationDataWithOptions(datasetId: string, annotationdataId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAnnotationDataResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata/${annotationdataId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAnnotationDataResponse>(await this.execute(params, req, runtime), new GetAnnotationDataResponse({}));
  }

  async getAnnotationData(datasetId: string, annotationdataId: string): Promise<GetAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  async getAnnotationDataSetWithOptions(datasetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAnnotationDataSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAnnotationDataSetResponse>(await this.execute(params, req, runtime), new GetAnnotationDataSetResponse({}));
  }

  async getAnnotationDataSet(datasetId: string): Promise<GetAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  async getAnnotationLabelWithOptions(labelId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAnnotationLabelResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel/${labelId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAnnotationLabelResponse>(await this.execute(params, req, runtime), new GetAnnotationLabelResponse({}));
  }

  async getAnnotationLabel(labelId: string): Promise<GetAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAppliedConfigsResponse
   */
  async getAppliedConfigsWithOptions(project: string, machineGroup: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppliedConfigsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAppliedConfigs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppliedConfigsResponse>(await this.execute(params, req, runtime), new GetAppliedConfigsResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetAppliedConfigsResponse
   */
  async getAppliedConfigs(project: string, machineGroup: string): Promise<GetAppliedConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppliedConfigsWithOptions(project, machineGroup, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAppliedMachineGroupsResponse
   */
  async getAppliedMachineGroupsWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppliedMachineGroupsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAppliedMachineGroups",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppliedMachineGroupsResponse>(await this.execute(params, req, runtime), new GetAppliedMachineGroupsResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetAppliedMachineGroupsResponse
   */
  async getAppliedMachineGroups(project: string, configName: string): Promise<GetAppliedMachineGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppliedMachineGroupsWithOptions(project, configName, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetCheckPointRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetCheckPointResponse
   */
  async getCheckPointWithOptions(project: string, logstore: string, consumerGroup: string, request: GetCheckPointRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCheckPointResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.shard)) {
      query["shard"] = request.shard;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCheckPoint",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<GetCheckPointResponse>(await this.execute(params, req, runtime), new GetCheckPointResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetCheckPointRequest
    * @return GetCheckPointResponse
   */
  async getCheckPoint(project: string, logstore: string, consumerGroup: string, request: GetCheckPointRequest): Promise<GetCheckPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCheckPointWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  async getCollectionPolicyWithOptions(policyName: string, request: GetCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCollectionPolicyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!Util.isUnset(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCollectionPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy/${policyName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCollectionPolicyResponse>(await this.execute(params, req, runtime), new GetCollectionPolicyResponse({}));
  }

  async getCollectionPolicy(policyName: string, request: GetCollectionPolicyRequest): Promise<GetCollectionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCollectionPolicyWithOptions(policyName, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](~~29043~~).
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetConfigResponse
   */
  async getConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConfigResponse>(await this.execute(params, req, runtime), new GetConfigResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](~~29043~~).
    *
    * @return GetConfigResponse
   */
  async getConfig(project: string, configName: string): Promise<GetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(project, configName, headers, runtime);
  }

  /**
    * *   You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetContextLogsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetContextLogsResponse
   */
  async getContextLogsWithOptions(project: string, logstore: string, request: GetContextLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetContextLogsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backLines)) {
      query["back_lines"] = request.backLines;
    }

    if (!Util.isUnset(request.forwardLines)) {
      query["forward_lines"] = request.forwardLines;
    }

    if (!Util.isUnset(request.packId)) {
      query["pack_id"] = request.packId;
    }

    if (!Util.isUnset(request.packMeta)) {
      query["pack_meta"] = request.packMeta;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetContextLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetContextLogsResponse>(await this.execute(params, req, runtime), new GetContextLogsResponse({}));
  }

  /**
    * *   You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetContextLogsRequest
    * @return GetContextLogsResponse
   */
  async getContextLogs(project: string, logstore: string, request: GetContextLogsRequest): Promise<GetContextLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContextLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   The following content describes the relationships among a cursor, project, Logstore, and shard:
    *     *   A project can have multiple Logstores.
    *     *   A Logstore can have multiple shards.
    *     *   You can use a cursor to obtain a log in a shard.
    *
    * @param request GetCursorRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetCursorResponse
   */
  async getCursorWithOptions(project: string, logstore: string, shardId: string, request: GetCursorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCursorResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      query["from"] = request.from;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCursor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shardId}?type=cursor`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCursorResponse>(await this.execute(params, req, runtime), new GetCursorResponse({}));
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   The following content describes the relationships among a cursor, project, Logstore, and shard:
    *     *   A project can have multiple Logstores.
    *     *   A Logstore can have multiple shards.
    *     *   You can use a cursor to obtain a log in a shard.
    *
    * @param request GetCursorRequest
    * @return GetCursorResponse
   */
  async getCursor(project: string, logstore: string, shardId: string, request: GetCursorRequest): Promise<GetCursorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCursorWithOptions(project, logstore, shardId, request, headers, runtime);
  }

  async getCursorTimeWithOptions(project: string, logstore: string, shardId: string, request: GetCursorTimeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCursorTimeResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cursor)) {
      query["cursor"] = request.cursor;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCursorTime",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shardId}?type=cursor_time`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCursorTimeResponse>(await this.execute(params, req, runtime), new GetCursorTimeResponse({}));
  }

  async getCursorTime(project: string, logstore: string, shardId: string, request: GetCursorTimeRequest): Promise<GetCursorTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCursorTimeWithOptions(project, logstore, shardId, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDashboardResponse
   */
  async getDashboardWithOptions(project: string, dashboardName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDashboardResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards/${dashboardName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDashboardResponse>(await this.execute(params, req, runtime), new GetDashboardResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @return GetDashboardResponse
   */
  async getDashboard(project: string, dashboardName: string): Promise<GetDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  async getETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetETLResponse>(await this.execute(params, req, runtime), new GetETLResponse({}));
  }

  async getETL(project: string, etlName: string): Promise<GetETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getETLWithOptions(project, etlName, headers, runtime);
  }

  /**
    * *   The supported data sources of external stores include Object Storage Service (OSS) buckets and ApsaraDB RDS for MySQL databases in a virtual private cloud (VPC).
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetExternalStoreResponse
   */
  async getExternalStoreWithOptions(project: string, externalStoreName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExternalStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores/${externalStoreName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExternalStoreResponse>(await this.execute(params, req, runtime), new GetExternalStoreResponse({}));
  }

  /**
    * *   The supported data sources of external stores include Object Storage Service (OSS) buckets and ApsaraDB RDS for MySQL databases in a virtual private cloud (VPC).
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetExternalStoreResponse
   */
  async getExternalStore(project: string, externalStoreName: string): Promise<GetExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExternalStoreWithOptions(project, externalStoreName, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   The time range is evenly divided into subintervals in the responses. If the time range that is specified in the request remains unchanged, the subintervals in the responses also remain unchanged.
    * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
    * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
    *     *   Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds.
    *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval \\[-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
    *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
    * > Simple Log Service calculates the difference between the log time that is specified by the \\__time\\_\\_ field and the receiving time that is specified by the \\__tag\\_\\_:\\__receive_time\\_\\_ field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval \\[-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
    * *   Simple Log Service provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](~~462234~~).
    *
    * @param request GetHistogramsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetHistogramsResponse
   */
  async getHistogramsWithOptions(project: string, logstore: string, request: GetHistogramsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHistogramsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      query["from"] = request.from;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.to)) {
      query["to"] = request.to;
    }

    if (!Util.isUnset(request.topic)) {
      query["topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistograms",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index?type=histogram`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<GetHistogramsResponse>(await this.execute(params, req, runtime), new GetHistogramsResponse({}));
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   The time range is evenly divided into subintervals in the responses. If the time range that is specified in the request remains unchanged, the subintervals in the responses also remain unchanged.
    * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
    * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
    *     *   Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds.
    *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval \\[-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
    *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
    * > Simple Log Service calculates the difference between the log time that is specified by the \\__time\\_\\_ field and the receiving time that is specified by the \\__tag\\_\\_:\\__receive_time\\_\\_ field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval \\[-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
    * *   Simple Log Service provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](~~462234~~).
    *
    * @param request GetHistogramsRequest
    * @return GetHistogramsResponse
   */
  async getHistograms(project: string, logstore: string, request: GetHistogramsRequest): Promise<GetHistogramsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistogramsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetIndexResponse
   */
  async getIndexWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIndexResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIndexResponse>(await this.execute(params, req, runtime), new GetIndexResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetIndexResponse
   */
  async getIndex(project: string, logstore: string): Promise<GetIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexWithOptions(project, logstore, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetLogStoreResponse
   */
  async getLogStoreWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLogStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLogStoreResponse>(await this.execute(params, req, runtime), new GetLogStoreResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetLogStoreResponse
   */
  async getLogStore(project: string, logstore: string): Promise<GetLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreWithOptions(project, logstore, headers, runtime);
  }

  async getLogStoreMeteringModeWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLogStoreMeteringModeResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLogStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/meteringmode`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLogStoreMeteringModeResponse>(await this.execute(params, req, runtime), new GetLogStoreMeteringModeResponse({}));
  }

  async getLogStoreMeteringMode(project: string, logstore: string): Promise<GetLogStoreMeteringModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreMeteringModeWithOptions(project, logstore, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetLoggingResponse
   */
  async getLoggingWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLoggingResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLoggingResponse>(await this.execute(params, req, runtime), new GetLoggingResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetLoggingResponse
   */
  async getLogging(project: string): Promise<GetLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLoggingWithOptions(project, headers, runtime);
  }

  /**
    * ### Usage notes
    * > Simple Log Service allows you to create a Scheduled SQL job. For more information, see [Create a Scheduled SQL job](~~286457~~).
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot forecast the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the x-log-progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
    * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
    *         Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. This type of log is usually generated in common scenarios. 
    *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval \\[-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
    *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
    * > Simple Log Service calculates the difference between the log time that is specified by the \\__time\\_\\_ field and the receiving time that is specified by the \\__tag\\_\\_:**receive_time** field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval \\[-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
    * *   Simple Log Service provides examples on how to call the GetLogs operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Examples of calling the GetLogs operation by using Simple Log Service SDK for Java](~~407683~~) and [Examples of calling the GetLogs operation by using Simple Log Service SDK for Python](~~407684~~).
    *
    * @param request GetLogsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetLogsResponse
   */
  async getLogsWithOptions(project: string, logstore: string, request: GetLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLogsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      query["from"] = request.from;
    }

    if (!Util.isUnset(request.line)) {
      query["line"] = request.line;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.powerSql)) {
      query["powerSql"] = request.powerSql;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.reverse)) {
      query["reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.to)) {
      query["to"] = request.to;
    }

    if (!Util.isUnset(request.topic)) {
      query["topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}?type=log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<GetLogsResponse>(await this.execute(params, req, runtime), new GetLogsResponse({}));
  }

  /**
    * ### Usage notes
    * > Simple Log Service allows you to create a Scheduled SQL job. For more information, see [Create a Scheduled SQL job](~~286457~~).
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot forecast the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the x-log-progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
    * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
    *         Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. This type of log is usually generated in common scenarios. 
    *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval \\[-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
    *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
    * > Simple Log Service calculates the difference between the log time that is specified by the \\__time\\_\\_ field and the receiving time that is specified by the \\__tag\\_\\_:**receive_time** field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval \\[-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
    * *   Simple Log Service provides examples on how to call the GetLogs operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Examples of calling the GetLogs operation by using Simple Log Service SDK for Java](~~407683~~) and [Examples of calling the GetLogs operation by using Simple Log Service SDK for Python](~~407684~~).
    *
    * @param request GetLogsRequest
    * @return GetLogsResponse
   */
  async getLogs(project: string, logstore: string, request: GetLogsRequest): Promise<GetLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times you must call this API operation to obtain a complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation again to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
    * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log. The latency of the query varies based on the type of the log. Simple Log Service classifies logs into the following types based on log timestamps:
    * 1.  1.  Real-time data: The difference between the time record in the log and the current server time is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as real-time data. This type of log is usually generated in common scenarios.
    * 2.  2.  Historical data: The difference between the time record in the log and the current server time is within the interval \\[-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as historical data. This type of log is usually generated in data backfill scenarios. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
    *
    * @param request GetLogsV2Request
    * @param headers GetLogsV2Headers
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetLogsV2Response
   */
  async getLogsV2WithOptions(project: string, logstore: string, request: GetLogsV2Request, headers: GetLogsV2Headers, runtime: $Util.RuntimeOptions): Promise<GetLogsV2Response> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forward)) {
      body["forward"] = request.forward;
    }

    if (!Util.isUnset(request.from)) {
      body["from"] = request.from;
    }

    if (!Util.isUnset(request.highlight)) {
      body["highlight"] = request.highlight;
    }

    if (!Util.isUnset(request.line)) {
      body["line"] = request.line;
    }

    if (!Util.isUnset(request.offset)) {
      body["offset"] = request.offset;
    }

    if (!Util.isUnset(request.powerSql)) {
      body["powerSql"] = request.powerSql;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    if (!Util.isUnset(request.reverse)) {
      body["reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.session)) {
      body["session"] = request.session;
    }

    if (!Util.isUnset(request.shard)) {
      body["shard"] = request.shard;
    }

    if (!Util.isUnset(request.to)) {
      body["to"] = request.to;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.acceptEncoding)) {
      realHeaders["Accept-Encoding"] = Util.toJSONString(headers.acceptEncoding);
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLogsV2",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/logs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLogsV2Response>(await this.execute(params, req, runtime), new GetLogsV2Response({}));
  }

  /**
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times you must call this API operation to obtain a complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation again to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
    * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log. The latency of the query varies based on the type of the log. Simple Log Service classifies logs into the following types based on log timestamps:
    * 1.  1.  Real-time data: The difference between the time record in the log and the current server time is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as real-time data. This type of log is usually generated in common scenarios.
    * 2.  2.  Historical data: The difference between the time record in the log and the current server time is within the interval \\[-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as historical data. This type of log is usually generated in data backfill scenarios. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
    *
    * @param request GetLogsV2Request
    * @return GetLogsV2Response
   */
  async getLogsV2(project: string, logstore: string, request: GetLogsV2Request): Promise<GetLogsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetLogsV2Headers({ });
    return await this.getLogsV2WithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetLogtailPipelineConfigResponse
   */
  async getLogtailPipelineConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLogtailPipelineConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs/${configName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new GetLogtailPipelineConfigResponse({}));
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @return GetLogtailPipelineConfigResponse
   */
  async getLogtailPipelineConfig(project: string, configName: string): Promise<GetLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogtailPipelineConfigWithOptions(project, configName, headers, runtime);
  }

  async getMLServiceResultsWithOptions(serviceName: string, request: GetMLServiceResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMLServiceResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowBuiltin)) {
      query["allowBuiltin"] = request.allowBuiltin;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "GetMLServiceResults",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/service/${serviceName}/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMLServiceResultsResponse>(await this.execute(params, req, runtime), new GetMLServiceResultsResponse({}));
  }

  async getMLServiceResults(serviceName: string, request: GetMLServiceResultsRequest): Promise<GetMLServiceResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMLServiceResultsWithOptions(serviceName, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMachineGroupResponse
   */
  async getMachineGroupWithOptions(project: string, machineGroup: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMachineGroupResponse>(await this.execute(params, req, runtime), new GetMachineGroupResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetMachineGroupResponse
   */
  async getMachineGroup(project: string, machineGroup: string): Promise<GetMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMachineGroupWithOptions(project, machineGroup, headers, runtime);
  }

  async getOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOSSExportResponse>(await this.execute(params, req, runtime), new GetOSSExportResponse({}));
  }

  async getOSSExport(project: string, ossExportName: string): Promise<GetOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async getOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOSSHDFSExportResponse>(await this.execute(params, req, runtime), new GetOSSHDFSExportResponse({}));
  }

  async getOSSHDFSExport(project: string, ossExportName: string): Promise<GetOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async getOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOSSIngestionResponse>(await this.execute(params, req, runtime), new GetOSSIngestionResponse({}));
  }

  async getOSSIngestion(project: string, ossIngestionName: string): Promise<GetOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetProjectResponse
   */
  async getProjectWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.execute(params, req, runtime), new GetProjectResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetProjectResponse
   */
  async getProject(project: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(project, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   You can use the query parameter to specify a standard SQL statement.
    * *   You must specify a project in the domain name of the request.
    * *   You must specify a Logstore in the FROM clause of the SQL statement. A Logstore can be used as an SQL table.
    * *   You must specify a time range in the SQL statement by using the \\__date\\_\\_ parameter or \\__time\\_\\_ parameter. The value of the \\__date\\_\\_ parameter is a timestamp, and the value of the \\__time\\_\\_ parameter is an integer. The unit of the \\__time\\_\\_ parameter is seconds.
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetProjectLogsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetProjectLogsResponse
   */
  async getProjectLogsWithOptions(project: string, request: GetProjectLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectLogsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.powerSql)) {
      query["powerSql"] = request.powerSql;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<GetProjectLogsResponse>(await this.execute(params, req, runtime), new GetProjectLogsResponse({}));
  }

  /**
    * ### Usage notes
    * *   You can use the query parameter to specify a standard SQL statement.
    * *   You must specify a project in the domain name of the request.
    * *   You must specify a Logstore in the FROM clause of the SQL statement. A Logstore can be used as an SQL table.
    * *   You must specify a time range in the SQL statement by using the \\__date\\_\\_ parameter or \\__time\\_\\_ parameter. The value of the \\__date\\_\\_ parameter is a timestamp, and the value of the \\__time\\_\\_ parameter is an integer. The unit of the \\__time\\_\\_ parameter is seconds.
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetProjectLogsRequest
    * @return GetProjectLogsResponse
   */
  async getProjectLogs(project: string, request: GetProjectLogsRequest): Promise<GetProjectLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectLogsWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetProjectPolicyResponse
   */
  async getProjectPolicyWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectPolicyResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $tea.cast<GetProjectPolicyResponse>(await this.execute(params, req, runtime), new GetProjectPolicyResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetProjectPolicyResponse
   */
  async getProjectPolicy(project: string): Promise<GetProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSavedSearchResponse
   */
  async getSavedSearchWithOptions(project: string, savedsearchName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSavedSearchResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches/${savedsearchName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSavedSearchResponse>(await this.execute(params, req, runtime), new GetSavedSearchResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return GetSavedSearchResponse
   */
  async getSavedSearch(project: string, savedsearchName: string): Promise<GetSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  async getScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetScheduledSQLResponse>(await this.execute(params, req, runtime), new GetScheduledSQLResponse({}));
  }

  async getScheduledSQL(project: string, scheduledSQLName: string): Promise<GetScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
    * @deprecated
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetShipperStatusRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetShipperStatusResponse
   */
  // Deprecated
  async getShipperStatusWithOptions(project: string, logstore: string, shipperName: string, request: GetShipperStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetShipperStatusResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      query["from"] = request.from;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetShipperStatus",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shipper/${shipperName}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetShipperStatusResponse>(await this.execute(params, req, runtime), new GetShipperStatusResponse({}));
  }

  /**
    * @deprecated
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request GetShipperStatusRequest
    * @return GetShipperStatusResponse
   */
  // Deprecated
  async getShipperStatus(project: string, logstore: string, shipperName: string, request: GetShipperStatusRequest): Promise<GetShipperStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShipperStatusWithOptions(project, logstore, shipperName, request, headers, runtime);
  }

  async listAlertsWithOptions(project: string, request: ListAlertsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlertsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlerts",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlertsResponse>(await this.execute(params, req, runtime), new ListAlertsResponse({}));
  }

  async listAlerts(project: string, request: ListAlertsRequest): Promise<ListAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertsWithOptions(project, request, headers, runtime);
  }

  async listAnnotationDataWithOptions(datasetId: string, request: ListAnnotationDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAnnotationDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAnnotationDataResponse>(await this.execute(params, req, runtime), new ListAnnotationDataResponse({}));
  }

  async listAnnotationData(datasetId: string, request: ListAnnotationDataRequest): Promise<ListAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationDataWithOptions(datasetId, request, headers, runtime);
  }

  async listAnnotationDataSetsWithOptions(request: ListAnnotationDataSetsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAnnotationDataSetsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnnotationDataSets",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAnnotationDataSetsResponse>(await this.execute(params, req, runtime), new ListAnnotationDataSetsResponse({}));
  }

  async listAnnotationDataSets(request: ListAnnotationDataSetsRequest): Promise<ListAnnotationDataSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationDataSetsWithOptions(request, headers, runtime);
  }

  async listAnnotationLabelsWithOptions(request: ListAnnotationLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAnnotationLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnnotationLabels",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAnnotationLabelsResponse>(await this.execute(params, req, runtime), new ListAnnotationLabelsResponse({}));
  }

  async listAnnotationLabels(request: ListAnnotationLabelsRequest): Promise<ListAnnotationLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationLabelsWithOptions(request, headers, runtime);
  }

  async listCollectionPoliciesWithOptions(tmpReq: ListCollectionPoliciesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCollectionPoliciesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCollectionPoliciesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.attribute)) {
      request.attributeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attribute, "attribute", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributeShrink)) {
      query["attribute"] = request.attributeShrink;
    }

    if (!Util.isUnset(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    if (!Util.isUnset(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCollectionPolicies",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCollectionPoliciesResponse>(await this.execute(params, req, runtime), new ListCollectionPoliciesResponse({}));
  }

  async listCollectionPolicies(request: ListCollectionPoliciesRequest): Promise<ListCollectionPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCollectionPoliciesWithOptions(request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param request ListConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListConfigResponse
   */
  async listConfigWithOptions(project: string, request: ListConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConfigResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configName)) {
      query["configName"] = request.configName;
    }

    if (!Util.isUnset(request.logstoreName)) {
      query["logstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConfigResponse>(await this.execute(params, req, runtime), new ListConfigResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param request ListConfigRequest
    * @return ListConfigResponse
   */
  async listConfig(project: string, request: ListConfigRequest): Promise<ListConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListConsumerGroupResponse
   */
  async listConsumerGroupWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumerGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListConsumerGroupResponse>(await this.execute(params, req, runtime), new ListConsumerGroupResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return ListConsumerGroupResponse
   */
  async listConsumerGroup(project: string, logstore: string): Promise<ListConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupWithOptions(project, logstore, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param request ListDashboardRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDashboardResponse
   */
  async listDashboardWithOptions(project: string, request: ListDashboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDashboardResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDashboardResponse>(await this.execute(params, req, runtime), new ListDashboardResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    *
    * @param request ListDashboardRequest
    * @return ListDashboardResponse
   */
  async listDashboard(project: string, request: ListDashboardRequest): Promise<ListDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardWithOptions(project, request, headers, runtime);
  }

  /**
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   Only one custom domain name can be bound to each project.
    *
    * @param request ListDomainsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDomainsResponse
   */
  async listDomainsWithOptions(project: string, request: ListDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.execute(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   Only one custom domain name can be bound to each project.
    *
    * @param request ListDomainsRequest
    * @return ListDomainsResponse
   */
  async listDomains(project: string, request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(project, request, headers, runtime);
  }

  async listETLsWithOptions(project: string, request: ListETLsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListETLsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListETLs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListETLsResponse>(await this.execute(params, req, runtime), new ListETLsResponse({}));
  }

  async listETLs(project: string, request: ListETLsRequest): Promise<ListETLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listETLsWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListExternalStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListExternalStoreResponse
   */
  async listExternalStoreWithOptions(project: string, request: ListExternalStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExternalStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.externalStoreName)) {
      query["externalStoreName"] = request.externalStoreName;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.sizs)) {
      query["sizs"] = request.sizs;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExternalStoreResponse>(await this.execute(params, req, runtime), new ListExternalStoreResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListExternalStoreRequest
    * @return ListExternalStoreResponse
   */
  async listExternalStore(project: string, request: ListExternalStoreRequest): Promise<ListExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExternalStoreWithOptions(project, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * ### Authentication resources
    * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
    * |Action|Resource|
    * |:---|:---|
    * |`log:ListLogStores`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*`|
    *
    * @param request ListLogStoresRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListLogStoresResponse
   */
  async listLogStoresWithOptions(project: string, request: ListLogStoresRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogStoresResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logstoreName)) {
      query["logstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.mode)) {
      query["mode"] = request.mode;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.telemetryType)) {
      query["telemetryType"] = request.telemetryType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogStores",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogStoresResponse>(await this.execute(params, req, runtime), new ListLogStoresResponse({}));
  }

  /**
    * ### Usage notes
    * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * ### Authentication resources
    * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
    * |Action|Resource|
    * |:---|:---|
    * |`log:ListLogStores`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*`|
    *
    * @param request ListLogStoresRequest
    * @return ListLogStoresResponse
   */
  async listLogStores(project: string, request: ListLogStoresRequest): Promise<ListLogStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogStoresWithOptions(project, request, headers, runtime);
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param request ListLogtailPipelineConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListLogtailPipelineConfigResponse
   */
  async listLogtailPipelineConfigWithOptions(project: string, request: ListLogtailPipelineConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogtailPipelineConfigResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configName)) {
      query["configName"] = request.configName;
    }

    if (!Util.isUnset(request.logstoreName)) {
      query["logstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new ListLogtailPipelineConfigResponse({}));
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param request ListLogtailPipelineConfigRequest
    * @return ListLogtailPipelineConfigResponse
   */
  async listLogtailPipelineConfig(project: string, request: ListLogtailPipelineConfigRequest): Promise<ListLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogtailPipelineConfigWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListMachineGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListMachineGroupResponse
   */
  async listMachineGroupWithOptions(project: string, request: ListMachineGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMachineGroupResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupName)) {
      query["groupName"] = request.groupName;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMachineGroupResponse>(await this.execute(params, req, runtime), new ListMachineGroupResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListMachineGroupRequest
    * @return ListMachineGroupResponse
   */
  async listMachineGroup(project: string, request: ListMachineGroupRequest): Promise<ListMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMachineGroupWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListMachinesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListMachinesResponse
   */
  async listMachinesWithOptions(project: string, machineGroup: string, request: ListMachinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMachinesResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMachines",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/machines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMachinesResponse>(await this.execute(params, req, runtime), new ListMachinesResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListMachinesRequest
    * @return ListMachinesResponse
   */
  async listMachines(project: string, machineGroup: string, request: ListMachinesRequest): Promise<ListMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMachinesWithOptions(project, machineGroup, request, headers, runtime);
  }

  async listOSSExportsWithOptions(project: string, request: ListOSSExportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOSSExportsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOSSExports",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOSSExportsResponse>(await this.execute(params, req, runtime), new ListOSSExportsResponse({}));
  }

  async listOSSExports(project: string, request: ListOSSExportsRequest): Promise<ListOSSExportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSExportsWithOptions(project, request, headers, runtime);
  }

  async listOSSHDFSExportsWithOptions(project: string, request: ListOSSHDFSExportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOSSHDFSExportsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOSSHDFSExports",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOSSHDFSExportsResponse>(await this.execute(params, req, runtime), new ListOSSHDFSExportsResponse({}));
  }

  async listOSSHDFSExports(project: string, request: ListOSSHDFSExportsRequest): Promise<ListOSSHDFSExportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSHDFSExportsWithOptions(project, request, headers, runtime);
  }

  async listOSSIngestionsWithOptions(project: string, request: ListOSSIngestionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOSSIngestionsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOSSIngestions",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOSSIngestionsResponse>(await this.execute(params, req, runtime), new ListOSSIngestionsResponse({}));
  }

  async listOSSIngestions(project: string, request: ListOSSIngestionsRequest): Promise<ListOSSIngestionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSIngestionsWithOptions(project, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListProjectRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListProjectResponse
   */
  async listProjectWithOptions(request: ListProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.projectName)) {
      query["projectName"] = request.projectName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectResponse>(await this.execute(params, req, runtime), new ListProjectResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListProjectRequest
    * @return ListProjectResponse
   */
  async listProject(request: ListProjectRequest): Promise<ListProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListSavedSearchRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSavedSearchResponse
   */
  async listSavedSearchWithOptions(project: string, request: ListSavedSearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSavedSearchResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSavedSearchResponse>(await this.execute(params, req, runtime), new ListSavedSearchResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListSavedSearchRequest
    * @return ListSavedSearchResponse
   */
  async listSavedSearch(project: string, request: ListSavedSearchRequest): Promise<ListSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSavedSearchWithOptions(project, request, headers, runtime);
  }

  async listScheduledSQLsWithOptions(project: string, request: ListScheduledSQLsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScheduledSQLsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScheduledSQLs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListScheduledSQLsResponse>(await this.execute(params, req, runtime), new ListScheduledSQLsResponse({}));
  }

  async listScheduledSQLs(project: string, request: ListScheduledSQLsRequest): Promise<ListScheduledSQLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledSQLsWithOptions(project, request, headers, runtime);
  }

  async listShardsWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListShardsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListShards",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<ListShardsResponse>(await this.execute(params, req, runtime), new ListShardsResponse({}));
  }

  async listShards(project: string, logstore: string): Promise<ListShardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShardsWithOptions(project, logstore, headers, runtime);
  }

  /**
    * @deprecated
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListShipperResponse
   */
  // Deprecated
  async listShipperWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListShipperResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListShipper",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shipper`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListShipperResponse>(await this.execute(params, req, runtime), new ListShipperResponse({}));
  }

  /**
    * @deprecated
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return ListShipperResponse
   */
  // Deprecated
  async listShipper(project: string, logstore: string): Promise<ListShipperResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShipperWithOptions(project, logstore, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param tmpReq ListTagResourcesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  async mergeShardWithOptions(project: string, logstore: string, shard: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MergeShardResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "MergeShard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shard}?action=merge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<MergeShardResponse>(await this.execute(params, req, runtime), new MergeShardResponse({}));
  }

  async mergeShard(project: string, logstore: string, shard: string): Promise<MergeShardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.mergeShardWithOptions(project, logstore, shard, headers, runtime);
  }

  async putAnnotationDataWithOptions(datasetId: string, request: PutAnnotationDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutAnnotationDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotationdataId)) {
      query["annotationdataId"] = request.annotationdataId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mlDataParam)) {
      body["mlDataParam"] = request.mlDataParam;
    }

    if (!Util.isUnset(request.rawLog)) {
      body["rawLog"] = request.rawLog;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutAnnotationDataResponse>(await this.execute(params, req, runtime), new PutAnnotationDataResponse({}));
  }

  async putAnnotationData(datasetId: string, request: PutAnnotationDataRequest): Promise<PutAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putAnnotationDataWithOptions(datasetId, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   Alibaba Cloud Simple Log Service allows you to configure a project policy to authorize other users to access the specified Log Service resources.
    *     *   You must configure a project policy based on policy syntax. Before you configure a project policy, you must be familiar with the Action, Resource, and Condition parameters. For more information, see [RAM](~~128139~~).
    *     *   If you set the Principal element to an asterisk (\\*) and do not configure the Condition element when you configure a project policy, the policy applies to all users except for the project owner. If you set the Principal element to an asterisk (\\*) and configure the Condition element when you configure a project policy, the policy applies to all users including the project owner.
    *     *   You can configure multiple project policies for a project. The total size of the policies cannot exceed 16 KB.
    *
    * @param request PutProjectPolicyRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutProjectPolicyResponse
   */
  async putProjectPolicyWithOptions(project: string, request: PutProjectPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutProjectPolicyResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "PutProjectPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/policy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutProjectPolicyResponse>(await this.execute(params, req, runtime), new PutProjectPolicyResponse({}));
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   Alibaba Cloud Simple Log Service allows you to configure a project policy to authorize other users to access the specified Log Service resources.
    *     *   You must configure a project policy based on policy syntax. Before you configure a project policy, you must be familiar with the Action, Resource, and Condition parameters. For more information, see [RAM](~~128139~~).
    *     *   If you set the Principal element to an asterisk (\\*) and do not configure the Condition element when you configure a project policy, the policy applies to all users except for the project owner. If you set the Principal element to an asterisk (\\*) and configure the Condition element when you configure a project policy, the policy applies to all users including the project owner.
    *     *   You can configure multiple project policies for a project. The total size of the policies cannot exceed 16 KB.
    *
    * @param request PutProjectPolicyRequest
    * @return PutProjectPolicyResponse
   */
  async putProjectPolicy(project: string, request: PutProjectPolicyRequest): Promise<PutProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectPolicyWithOptions(project, request, headers, runtime);
  }

  async putProjectTransferAccelerationWithOptions(project: string, request: PutProjectTransferAccelerationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutProjectTransferAccelerationResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutProjectTransferAcceleration",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/transferacceleration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutProjectTransferAccelerationResponse>(await this.execute(params, req, runtime), new PutProjectTransferAccelerationResponse({}));
  }

  async putProjectTransferAcceleration(project: string, request: PutProjectTransferAccelerationRequest): Promise<PutProjectTransferAccelerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectTransferAccelerationWithOptions(project, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](~~48984~~) and [Manage a Logstore](~~48990~~).
    * *   You can call this operation to collect logs from web pages or clients.
    * *   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](~~31752~~).
    * *   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
    * *   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](~~31752~~).
    * *   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
    * *   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
    *
    * @param request PutWebtrackingRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutWebtrackingResponse
   */
  async putWebtrackingWithOptions(project: string, logstoreName: string, request: PutWebtrackingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutWebtrackingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logs)) {
      body["__logs__"] = request.logs;
    }

    if (!Util.isUnset(request.source)) {
      body["__source__"] = request.source;
    }

    if (!Util.isUnset(request.tags)) {
      body["__tags__"] = request.tags;
    }

    if (!Util.isUnset(request.topic)) {
      body["__topic__"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutWebtracking",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstoreName}/track`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutWebtrackingResponse>(await this.execute(params, req, runtime), new PutWebtrackingResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](~~48984~~) and [Manage a Logstore](~~48990~~).
    * *   You can call this operation to collect logs from web pages or clients.
    * *   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](~~31752~~).
    * *   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
    * *   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](~~31752~~).
    * *   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
    * *   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
    *
    * @param request PutWebtrackingRequest
    * @return PutWebtrackingResponse
   */
  async putWebtracking(project: string, logstoreName: string, request: PutWebtrackingRequest): Promise<PutWebtrackingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putWebtrackingWithOptions(project, logstoreName, request, headers, runtime);
  }

  /**
    * @deprecated
    *
    * @param request QueryMLServiceResultsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryMLServiceResultsResponse
   */
  // Deprecated
  async queryMLServiceResultsWithOptions(serviceName: string, request: QueryMLServiceResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryMLServiceResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowBuiltin)) {
      query["allowBuiltin"] = request.allowBuiltin;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMLServiceResults",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/service/${serviceName}/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryMLServiceResultsResponse>(await this.execute(params, req, runtime), new QueryMLServiceResultsResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request QueryMLServiceResultsRequest
    * @return QueryMLServiceResultsResponse
   */
  // Deprecated
  async queryMLServiceResults(serviceName: string, request: QueryMLServiceResultsRequest): Promise<QueryMLServiceResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMLServiceResultsWithOptions(serviceName, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveConfigFromMachineGroupResponse
   */
  async removeConfigFromMachineGroupWithOptions(project: string, machineGroup: string, configName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveConfigFromMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveConfigFromMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/configs/${configName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<RemoveConfigFromMachineGroupResponse>(await this.execute(params, req, runtime), new RemoveConfigFromMachineGroupResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @return RemoveConfigFromMachineGroupResponse
   */
  async removeConfigFromMachineGroup(project: string, machineGroup: string, configName: string): Promise<RemoveConfigFromMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeConfigFromMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](~~28976~~).
    *
    * @param request SplitShardRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return SplitShardResponse
   */
  async splitShardWithOptions(project: string, logstore: string, shard: string, request: SplitShardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SplitShardResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      query["key"] = request.key;
    }

    if (!Util.isUnset(request.shardCount)) {
      query["shardCount"] = request.shardCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SplitShard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shard}?action=split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<SplitShardResponse>(await this.execute(params, req, runtime), new SplitShardResponse({}));
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](~~28976~~).
    *
    * @param request SplitShardRequest
    * @return SplitShardResponse
   */
  async splitShard(project: string, logstore: string, shard: string, request: SplitShardRequest): Promise<SplitShardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitShardWithOptions(project, logstore, shard, request, headers, runtime);
  }

  async startETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StartETLResponse>(await this.execute(params, req, runtime), new StartETLResponse({}));
  }

  async startETL(project: string, etlName: string): Promise<StartETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startETLWithOptions(project, etlName, headers, runtime);
  }

  async startOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StartOSSExportResponse>(await this.execute(params, req, runtime), new StartOSSExportResponse({}));
  }

  async startOSSExport(project: string, ossExportName: string): Promise<StartOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async startOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StartOSSHDFSExportResponse>(await this.execute(params, req, runtime), new StartOSSHDFSExportResponse({}));
  }

  async startOSSHDFSExport(project: string, ossExportName: string): Promise<StartOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async startOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StartOSSIngestionResponse>(await this.execute(params, req, runtime), new StartOSSIngestionResponse({}));
  }

  async startOSSIngestion(project: string, ossIngestionName: string): Promise<StartOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  async stopETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StopETLResponse>(await this.execute(params, req, runtime), new StopETLResponse({}));
  }

  async stopETL(project: string, etlName: string): Promise<StopETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopETLWithOptions(project, etlName, headers, runtime);
  }

  async stopOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StopOSSExportResponse>(await this.execute(params, req, runtime), new StopOSSExportResponse({}));
  }

  async stopOSSExport(project: string, ossExportName: string): Promise<StopOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async stopOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StopOSSHDFSExportResponse>(await this.execute(params, req, runtime), new StopOSSHDFSExportResponse({}));
  }

  async stopOSSHDFSExport(project: string, ossExportName: string): Promise<StopOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  async stopOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StopOSSIngestionResponse>(await this.execute(params, req, runtime), new StopOSSIngestionResponse({}));
  }

  async stopOSSIngestion(project: string, ossIngestionName: string): Promise<StopOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request TagResourcesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/tag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UntagResourcesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      body["all"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/untag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  async updateAlertWithOptions(project: string, alertName: string, request: UpdateAlertRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAlertResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateAlertResponse>(await this.execute(params, req, runtime), new UpdateAlertResponse({}));
  }

  async updateAlert(project: string, alertName: string, request: UpdateAlertRequest): Promise<UpdateAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertWithOptions(project, alertName, request, headers, runtime);
  }

  async updateAnnotationDataSetWithOptions(datasetId: string, request: UpdateAnnotationDataSetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAnnotationDataSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateAnnotationDataSetResponse>(await this.execute(params, req, runtime), new UpdateAnnotationDataSetResponse({}));
  }

  async updateAnnotationDataSet(datasetId: string, request: UpdateAnnotationDataSetRequest): Promise<UpdateAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationDataSetWithOptions(datasetId, request, headers, runtime);
  }

  /**
    * You can update only the names of the tags in a tag set.
    *
    * @param request UpdateAnnotationLabelRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateAnnotationLabelResponse
   */
  async updateAnnotationLabelWithOptions(request: UpdateAnnotationLabelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAnnotationLabelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateAnnotationLabelResponse>(await this.execute(params, req, runtime), new UpdateAnnotationLabelResponse({}));
  }

  /**
    * You can update only the names of the tags in a tag set.
    *
    * @param request UpdateAnnotationLabelRequest
    * @return UpdateAnnotationLabelResponse
   */
  async updateAnnotationLabel(request: UpdateAnnotationLabelRequest): Promise<UpdateAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationLabelWithOptions(request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](~~29058~~).
    *
    * @param request UpdateConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateConfigResponse
   */
  async updateConfigWithOptions(project: string, configName: string, request: UpdateConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConfigResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateConfigResponse>(await this.execute(params, req, runtime), new UpdateConfigResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    * *   After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
    * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](~~29009~~).
    * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](~~47664~~).
    * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](~~48984~~).
    * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](~~29058~~).
    *
    * @param request UpdateConfigRequest
    * @return UpdateConfigResponse
   */
  async updateConfig(project: string, configName: string, request: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigWithOptions(project, configName, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateConsumerGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateConsumerGroupResponse
   */
  async updateConsumerGroupWithOptions(project: string, logstore: string, consumerGroup: string, request: UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConsumerGroupResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      body["order"] = request.order;
    }

    if (!Util.isUnset(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateConsumerGroupResponse>(await this.execute(params, req, runtime), new UpdateConsumerGroupResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateConsumerGroupRequest
    * @return UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(project: string, logstore: string, consumerGroup: string, request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateDashboardRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDashboardResponse
   */
  async updateDashboardWithOptions(project: string, dashboardName: string, request: UpdateDashboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDashboardResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attribute)) {
      body["attribute"] = request.attribute;
    }

    if (!Util.isUnset(request.charts)) {
      body["charts"] = request.charts;
    }

    if (!Util.isUnset(request.dashboardName)) {
      body["dashboardName"] = request.dashboardName;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards/${dashboardName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateDashboardResponse>(await this.execute(params, req, runtime), new UpdateDashboardResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateDashboardRequest
    * @return UpdateDashboardResponse
   */
  async updateDashboard(project: string, dashboardName: string, request: UpdateDashboardRequest): Promise<UpdateDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDashboardWithOptions(project, dashboardName, request, headers, runtime);
  }

  async updateETLWithOptions(project: string, etlName: string, request: UpdateETLRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateETLResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateETLResponse>(await this.execute(params, req, runtime), new UpdateETLResponse({}));
  }

  async updateETL(project: string, etlName: string, request: UpdateETLRequest): Promise<UpdateETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateETLWithOptions(project, etlName, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateIndexRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateIndexResponse
   */
  async updateIndexWithOptions(project: string, logstore: string, request: UpdateIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIndexResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keys)) {
      body["keys"] = request.keys;
    }

    if (!Util.isUnset(request.line)) {
      body["line"] = request.line;
    }

    if (!Util.isUnset(request.logReduce)) {
      body["log_reduce"] = request.logReduce;
    }

    if (!Util.isUnset(request.logReduceBlackList)) {
      body["log_reduce_black_list"] = request.logReduceBlackList;
    }

    if (!Util.isUnset(request.logReduceWhiteList)) {
      body["log_reduce_white_list"] = request.logReduceWhiteList;
    }

    if (!Util.isUnset(request.maxTextLen)) {
      body["max_text_len"] = request.maxTextLen;
    }

    if (!Util.isUnset(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateIndexResponse>(await this.execute(params, req, runtime), new UpdateIndexResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateIndexRequest
    * @return UpdateIndexResponse
   */
  async updateIndex(project: string, logstore: string, request: UpdateIndexRequest): Promise<UpdateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIndexWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    * *   You can call the UpdateLogStore operation to change only the time-to-live (TTL) attribute.
    *
    * @param request UpdateLogStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLogStoreResponse
   */
  async updateLogStoreWithOptions(project: string, logstore: string, request: UpdateLogStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appendMeta)) {
      body["appendMeta"] = request.appendMeta;
    }

    if (!Util.isUnset(request.autoSplit)) {
      body["autoSplit"] = request.autoSplit;
    }

    if (!Util.isUnset(request.enableTracking)) {
      body["enable_tracking"] = request.enableTracking;
    }

    if (!Util.isUnset(request.encryptConf)) {
      body["encrypt_conf"] = request.encryptConf;
    }

    if (!Util.isUnset(request.hotTtl)) {
      body["hot_ttl"] = request.hotTtl;
    }

    if (!Util.isUnset(request.infrequentAccessTTL)) {
      body["infrequentAccessTTL"] = request.infrequentAccessTTL;
    }

    if (!Util.isUnset(request.logstoreName)) {
      body["logstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.maxSplitShard)) {
      body["maxSplitShard"] = request.maxSplitShard;
    }

    if (!Util.isUnset(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!Util.isUnset(request.shardCount)) {
      body["shardCount"] = request.shardCount;
    }

    if (!Util.isUnset(request.telemetryType)) {
      body["telemetryType"] = request.telemetryType;
    }

    if (!Util.isUnset(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateLogStoreResponse>(await this.execute(params, req, runtime), new UpdateLogStoreResponse({}));
  }

  /**
    * ### Usage notes
    * *   Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    * *   You can call the UpdateLogStore operation to change only the time-to-live (TTL) attribute.
    *
    * @param request UpdateLogStoreRequest
    * @return UpdateLogStoreResponse
   */
  async updateLogStore(project: string, logstore: string, request: UpdateLogStoreRequest): Promise<UpdateLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreWithOptions(project, logstore, request, headers, runtime);
  }

  async updateLogStoreMeteringModeWithOptions(project: string, logstore: string, request: UpdateLogStoreMeteringModeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogStoreMeteringModeResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meteringMode)) {
      body["meteringMode"] = request.meteringMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLogStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/meteringmode`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateLogStoreMeteringModeResponse>(await this.execute(params, req, runtime), new UpdateLogStoreMeteringModeResponse({}));
  }

  async updateLogStoreMeteringMode(project: string, logstore: string, request: UpdateLogStoreMeteringModeRequest): Promise<UpdateLogStoreMeteringModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreMeteringModeWithOptions(project, logstore, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateLoggingRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLoggingResponse
   */
  async updateLoggingWithOptions(project: string, request: UpdateLoggingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLoggingResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.loggingDetails)) {
      body["loggingDetails"] = request.loggingDetails;
    }

    if (!Util.isUnset(request.loggingProject)) {
      body["loggingProject"] = request.loggingProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateLoggingResponse>(await this.execute(params, req, runtime), new UpdateLoggingResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateLoggingRequest
    * @return UpdateLoggingResponse
   */
  async updateLogging(project: string, request: UpdateLoggingRequest): Promise<UpdateLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLoggingWithOptions(project, request, headers, runtime);
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param request UpdateLogtailPipelineConfigRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateLogtailPipelineConfigResponse
   */
  async updateLogtailPipelineConfigWithOptions(project: string, configName: string, request: UpdateLogtailPipelineConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogtailPipelineConfigResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregators)) {
      body["aggregators"] = request.aggregators;
    }

    if (!Util.isUnset(request.configName)) {
      body["configName"] = request.configName;
    }

    if (!Util.isUnset(request.flushers)) {
      body["flushers"] = request.flushers;
    }

    if (!Util.isUnset(request.global)) {
      body["global"] = request.global;
    }

    if (!Util.isUnset(request.inputs)) {
      body["inputs"] = request.inputs;
    }

    if (!Util.isUnset(request.logSample)) {
      body["logSample"] = request.logSample;
    }

    if (!Util.isUnset(request.processors)) {
      body["processors"] = request.processors;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs/${configName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new UpdateLogtailPipelineConfigResponse({}));
  }

  /**
    * The UK (London) region is supported. Supported regions are constantly updated.
    *
    * @param request UpdateLogtailPipelineConfigRequest
    * @return UpdateLogtailPipelineConfigResponse
   */
  async updateLogtailPipelineConfig(project: string, configName: string, request: UpdateLogtailPipelineConfigRequest): Promise<UpdateLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogtailPipelineConfigWithOptions(project, configName, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateMachineGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateMachineGroupResponse
   */
  async updateMachineGroupWithOptions(project: string, groupName: string, request: UpdateMachineGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMachineGroupResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupAttribute)) {
      body["groupAttribute"] = request.groupAttribute;
    }

    if (!Util.isUnset(request.groupName)) {
      body["groupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      body["groupType"] = request.groupType;
    }

    if (!Util.isUnset(request.machineIdentifyType)) {
      body["machineIdentifyType"] = request.machineIdentifyType;
    }

    if (!Util.isUnset(request.machineList)) {
      body["machineList"] = request.machineList;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${groupName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateMachineGroupResponse>(await this.execute(params, req, runtime), new UpdateMachineGroupResponse({}));
  }

  /**
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateMachineGroupRequest
    * @return UpdateMachineGroupResponse
   */
  async updateMachineGroup(project: string, groupName: string, request: UpdateMachineGroupRequest): Promise<UpdateMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMachineGroupWithOptions(project, groupName, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateMachineGroupMachineRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateMachineGroupMachineResponse
   */
  async updateMachineGroupMachineWithOptions(project: string, machineGroup: string, request: UpdateMachineGroupMachineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMachineGroupMachineResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateMachineGroupMachine",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/machines`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateMachineGroupMachineResponse>(await this.execute(params, req, runtime), new UpdateMachineGroupMachineResponse({}));
  }

  /**
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateMachineGroupMachineRequest
    * @return UpdateMachineGroupMachineResponse
   */
  async updateMachineGroupMachine(project: string, machineGroup: string, request: UpdateMachineGroupMachineRequest): Promise<UpdateMachineGroupMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMachineGroupMachineWithOptions(project, machineGroup, request, headers, runtime);
  }

  async updateOSSExportWithOptions(project: string, ossExportName: string, request: UpdateOSSExportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateOSSExportResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateOSSExportResponse>(await this.execute(params, req, runtime), new UpdateOSSExportResponse({}));
  }

  async updateOSSExport(project: string, ossExportName: string, request: UpdateOSSExportRequest): Promise<UpdateOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSExportWithOptions(project, ossExportName, request, headers, runtime);
  }

  async updateOSSHDFSExportWithOptions(project: string, ossExportName: string, request: UpdateOSSHDFSExportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateOSSHDFSExportResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateOSSHDFSExportResponse>(await this.execute(params, req, runtime), new UpdateOSSHDFSExportResponse({}));
  }

  async updateOSSHDFSExport(project: string, ossExportName: string, request: UpdateOSSHDFSExportRequest): Promise<UpdateOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSHDFSExportWithOptions(project, ossExportName, request, headers, runtime);
  }

  async updateOSSIngestionWithOptions(project: string, ossIngestionName: string, request: UpdateOSSIngestionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateOSSIngestionResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateOSSIngestionResponse>(await this.execute(params, req, runtime), new UpdateOSSIngestionResponse({}));
  }

  async updateOSSIngestion(project: string, ossIngestionName: string, request: UpdateOSSIngestionRequest): Promise<UpdateOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSIngestionWithOptions(project, ossIngestionName, request, headers, runtime);
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateOssExternalStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateOssExternalStoreResponse
   */
  async updateOssExternalStoreWithOptions(project: string, externalStoreName: string, request: UpdateOssExternalStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateOssExternalStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.externalStoreName)) {
      body["externalStoreName"] = request.externalStoreName;
    }

    if (!Util.isUnset(request.parameter)) {
      body["parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOssExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores/${externalStoreName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateOssExternalStoreResponse>(await this.execute(params, req, runtime), new UpdateOssExternalStoreResponse({}));
  }

  /**
    * ### [](#)Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateOssExternalStoreRequest
    * @return UpdateOssExternalStoreResponse
   */
  async updateOssExternalStore(project: string, externalStoreName: string, request: UpdateOssExternalStoreRequest): Promise<UpdateOssExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOssExternalStoreWithOptions(project, externalStoreName, request, headers, runtime);
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateProjectRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateProjectResponse
   */
  async updateProjectWithOptions(project: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateProjectResponse>(await this.execute(params, req, runtime), new UpdateProjectResponse({}));
  }

  /**
    * ### Usage notes
    * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateProjectRequest
    * @return UpdateProjectResponse
   */
  async updateProject(project: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(project, request, headers, runtime);
  }

  /**
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateRdsExternalStoreRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateRdsExternalStoreResponse
   */
  async updateRdsExternalStoreWithOptions(project: string, externalStoreName: string, request: UpdateRdsExternalStoreRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRdsExternalStoreResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.externalStoreName)) {
      body["externalStoreName"] = request.externalStoreName;
    }

    if (!Util.isUnset(request.parameter)) {
      body["parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRdsExternalStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/externalstores/${externalStoreName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateRdsExternalStoreResponse>(await this.execute(params, req, runtime), new UpdateRdsExternalStoreResponse({}));
  }

  /**
    * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
    *
    * @param request UpdateRdsExternalStoreRequest
    * @return UpdateRdsExternalStoreResponse
   */
  async updateRdsExternalStore(project: string, externalStoreName: string, request: UpdateRdsExternalStoreRequest): Promise<UpdateRdsExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRdsExternalStoreWithOptions(project, externalStoreName, request, headers, runtime);
  }

  async updateSavedSearchWithOptions(project: string, savedsearchName: string, request: UpdateSavedSearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSavedSearchResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.logstore)) {
      body["logstore"] = request.logstore;
    }

    if (!Util.isUnset(request.savedsearchName)) {
      body["savedsearchName"] = request.savedsearchName;
    }

    if (!Util.isUnset(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    if (!Util.isUnset(request.topic)) {
      body["topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches/${savedsearchName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateSavedSearchResponse>(await this.execute(params, req, runtime), new UpdateSavedSearchResponse({}));
  }

  async updateSavedSearch(project: string, savedsearchName: string, request: UpdateSavedSearchRequest): Promise<UpdateSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSavedSearchWithOptions(project, savedsearchName, request, headers, runtime);
  }

  async updateScheduledSQLWithOptions(project: string, scheduledSQLName: string, request: UpdateScheduledSQLRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateScheduledSQLResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateScheduledSQLResponse>(await this.execute(params, req, runtime), new UpdateScheduledSQLResponse({}));
  }

  async updateScheduledSQL(project: string, scheduledSQLName: string, request: UpdateScheduledSQLRequest): Promise<UpdateScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateScheduledSQLWithOptions(project, scheduledSQLName, request, headers, runtime);
  }

  async upsertCollectionPolicyWithOptions(request: UpsertCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpsertCollectionPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attribute)) {
      body["attribute"] = request.attribute;
    }

    if (!Util.isUnset(request.centralizeConfig)) {
      body["centralizeConfig"] = request.centralizeConfig;
    }

    if (!Util.isUnset(request.centralizeEnabled)) {
      body["centralizeEnabled"] = request.centralizeEnabled;
    }

    if (!Util.isUnset(request.dataCode)) {
      body["dataCode"] = request.dataCode;
    }

    if (!Util.isUnset(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.policyConfig)) {
      body["policyConfig"] = request.policyConfig;
    }

    if (!Util.isUnset(request.policyName)) {
      body["policyName"] = request.policyName;
    }

    if (!Util.isUnset(request.productCode)) {
      body["productCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpsertCollectionPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpsertCollectionPolicyResponse>(await this.execute(params, req, runtime), new UpsertCollectionPolicyResponse({}));
  }

  async upsertCollectionPolicy(request: UpsertCollectionPolicyRequest): Promise<UpsertCollectionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertCollectionPolicyWithOptions(request, headers, runtime);
  }

}
