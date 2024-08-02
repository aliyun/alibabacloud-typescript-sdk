// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-sls';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import * as $tea from '@alicloud/tea-typescript';

export class Alert extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: AlertConfiguration;
  createTime?: number;
  /**
   * @example
   * Alert Desc
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alertNameExample
   */
  displayName?: string;
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alert-123456
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @example
   * ENABLED/DISABLED
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoAnnotation?: boolean;
  conditionConfiguration?: ConditionConfiguration;
  /**
   * @example
   * dasnboardExample
   */
  dashboard?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupConfiguration?: GroupConfiguration;
  joinConfigurations?: JoinConfiguration[];
  labels?: AlertTag[];
  /**
   * @example
   * 1698907508
   */
  muteUntil?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  noDataFire?: boolean;
  /**
   * @example
   * 6
   */
  noDataSeverity?: number;
  policyConfiguration?: PolicyConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  queryList?: AlertQuery[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  sendResolved?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  severityConfigurations?: SeverityConfiguration[];
  sinkAlerthub?: SinkAlerthubConfiguration;
  sinkCms?: SinkCmsConfiguration;
  sinkEventStore?: SinkEventStoreConfiguration;
  tags?: string[];
  templateConfiguration?: TemplateConfiguration;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  threshold?: number;
  /**
   * @example
   * default
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
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
  /**
   * @example
   * chartExmaple
   */
  chartTitle?: string;
  /**
   * @example
   * dashboardExample
   */
  dashboardId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * now
   */
  end?: string;
  /**
   * @example
   * auto
   */
  powerSqlMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * projectExample
   */
  project?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -5m
   */
  start?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * store Example
   */
  store?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * log
   */
  storeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Relative
   */
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
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * example value
   */
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
  /**
   * @example
   * cnt > 100
   */
  condition?: string;
  /**
   * @example
   * __count__ > 5
   */
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

export class ConsumeProcessor extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ConsumeProcessorConfiguration;
  /**
   * @example
   * 1717171200
   */
  createTime?: number;
  /**
   * @example
   * 过滤content字段
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * consume-processor-1
   */
  processorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 字段过滤处理
   */
  processorName?: string;
  /**
   * @example
   * 1717171200
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      processorId: 'processorId',
      processorName: 'processorName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ConsumeProcessorConfiguration,
      createTime: 'number',
      description: 'string',
      processorId: 'string',
      processorName: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumeProcessorConfiguration extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | project content
   */
  spl?: string;
  static names(): { [key: string]: string } {
    return {
      spl: 'spl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumerGroup extends $tea.Model {
  /**
   * @example
   * test-group
   */
  name?: string;
  /**
   * @example
   * false
   */
  order?: boolean;
  /**
   * @example
   * 300
   */
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

export class ETL extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @example
   * 1714274900
   */
  createTime?: number;
  /**
   * @example
   * 加工作业
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etljob
   */
  displayName?: string;
  /**
   * @example
   * 1714274900
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etl-20240426
   */
  name?: string;
  /**
   * @example
   * f0eb655e501a8780808d1970ef6d04c4
   */
  scheduleId?: string;
  /**
   * @example
   * RUNNING
   */
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
  /**
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @deprecated
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1714274900
   */
  fromTime?: number;
  /**
   * @example
   * SPL
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @example
   * config.vpc.vpc_id.test1：vpc-uf6mskb0b****n9yj
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logtarget
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e_set("key","value")
   */
  script?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sinks?: ETLConfigurationSink[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1714274970
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      fromTime: 'fromTime',
      lang: 'lang',
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
      lang: 'string',
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
  /**
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @deprecated
   */
  accessKeySecret?: string;
  datasets?: string[];
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-etljob
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logtarget
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      datasets: 'datasets',
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
      datasets: { 'type': 'array', 'itemType': 'string' },
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
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: boolean;
  /**
   * @example
   * default
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  arn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cmkKeyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  fields?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
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

export class IngestProcessor extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: IngestProcessorConfiguration;
  /**
   * @example
   * 1717171200
   */
  createTime?: number;
  /**
   * @example
   * 过滤content字段
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-processor-1
   */
  processorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 字段过滤处理
   */
  processorName?: string;
  /**
   * @example
   * 1717171200
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      processorId: 'processorId',
      processorName: 'processorName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: IngestProcessorConfiguration,
      createTime: 'number',
      description: 'string',
      processorId: 'string',
      processorName: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IngestProcessorConfiguration extends $tea.Model {
  /**
   * @example
   * keep
   */
  parseFail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | project content
   */
  spl?: string;
  static names(): { [key: string]: string } {
    return {
      parseFail: 'parseFail',
      spl: 'spl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parseFail: 'string',
      spl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinConfiguration extends $tea.Model {
  /**
   * @example
   * $0.id == $1.id
   */
  condition?: string;
  /**
   * @example
   * left_join
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-test
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value-test
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  logTags?: LogTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  logs?: LogItem[];
  /**
   * @example
   * 192.1.1.1
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * topic-test
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  contents?: LogContent[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1690254376
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-test
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value-test
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @example
   * 1655176807
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  inputDetail?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file
   */
  inputType?: string;
  /**
   * @example
   * 1655176807
   */
  lastModifyTime?: number;
  /**
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputDetail?: LogtailConfigOutputDetail;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LogService
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @example
   * 1655176807
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  flushers?: { [key: string]: any }[];
  global?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @example
   * 1655176807
   */
  lastModifyTime?: number;
  /**
   * @example
   * 127.0.0.1 - - [10/Jun/2022:12:36:49 +0800] "GET /index.html HTTP/1.1" 200
   */
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
  /**
   * @example
   * dc74b0f569126bb310e1ba6454c351ac
   */
  annotationdataId?: string;
  annotations?: { [key: string]: MLDataParamAnnotationsValue };
  config?: { [key: string]: string };
  /**
   * @example
   * 1695094335
   */
  createTime?: number;
  /**
   * @example
   * 59db060bd89468245d76416a68a510ac
   */
  dataHash?: string;
  /**
   * @example
   * a9bd488f6dd42d294495fb780858e83d
   */
  datasetId?: string;
  /**
   * @example
   * 1695094335
   */
  lastModifyTime?: number;
  predictions?: { [key: string]: MLDataParamPredictionsValue };
  /**
   * @example
   * xxx/xxx/xxx/
   */
  value?: string;
  /**
   * @example
   * oss
   */
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
  /**
   * @example
   * sls-console
   */
  createBy?: string;
  /**
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @example
   * Metric
   */
  dataType?: string;
  /**
   * @example
   * d9bd488f6dd42d294495fb780858e83d
   */
  datasetId?: string;
  /**
   * @example
   * 数据集A
   */
  description?: string;
  /**
   * @example
   * a191ae4ca615b0ccb93c211fc8a998af
   */
  labelId?: string;
  /**
   * @example
   * 1695090077
   */
  lastModifyTime?: number;
  /**
   * @example
   * sls_builtin_dataset_metric.shapeclassification.anomalydetection
   */
  name?: string;
  /**
   * @example
   * Metric.ShapeClassification.AnomalyDetection
   */
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
  /**
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @example
   * 默认表
   */
  description?: string;
  /**
   * @example
   * abbd488f6dd42d294495fb780858e83d
   */
  labelId?: string;
  /**
   * @example
   * 1695090077
   */
  lastModifyTime?: number;
  /**
   * @example
   * 标签表
   */
  name?: string;
  settings?: MLLabelParamSettings[];
  /**
   * @example
   * xxx
   */
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
  /**
   * @example
   * 某某服务
   */
  description?: string;
  model?: MLServiceParamModel;
  /**
   * @example
   * service_name
   */
  name?: string;
  resource?: MLServiceParamResource;
  /**
   * @example
   * sls_builtin
   */
  serviceType?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 1695090077
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: MaxComputeExportConfiguration;
  createTime?: number;
  /**
   * @example
   * MaxComputeExport
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxComputeExport
   */
  displayName?: string;
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxComputeExport
   */
  name?: string;
  /**
   * @example
   * RUNNING
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  fromTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sink?: MaxComputeExportConfigurationSink;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: string[];
  /**
   * @deprecated
   */
  odpsAccessKeyId?: string;
  /**
   * @deprecated
   */
  odpsAccessSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxxxxxxx
   */
  odpsEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_project
   */
  odpsProject?: string;
  /**
   * @example
   * acs:ram::xxxxxxx
   */
  odpsRolearn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_table
   */
  odpsTable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  odpsTunnelEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  partitionColumn?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * %Y_%m_%d
   */
  partitionTimeFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * +0800
   */
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
  /**
   * @example
   * 1714284025
   */
  createTime?: number;
  /**
   * @example
   * job-test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-demo
   */
  displayName?: string;
  /**
   * @example
   * 1714284115
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-1714109458-123456
   */
  name?: string;
  /**
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @example
   * RUNNING
   */
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
      configuration: OSSExportConfiguration,
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

export class OSSExportConfiguration extends $tea.Model {
  /**
   * @example
   * 1714123644
   */
  fromTime?: number;
  /**
   * @example
   * logstore-demo
   */
  logstore?: string;
  /**
   * @example
   * acs:ram::123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  sink?: OSSExportConfigurationSink;
  /**
   * @example
   * 1714357112
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  /**
   * @example
   * 1714360481
   */
  createTime?: number;
  /**
   * @example
   * oss ingestion
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss ingestion
   */
  displayName?: string;
  /**
   * @example
   * 1714360481
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-oss-123456
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @example
   * c7f01719d9feb105fc9d8df92af62010
   */
  scheduleId?: string;
  /**
   * @example
   * RUNNING
   */
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
      scheduleId: 'scheduleId',
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
      scheduleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSIngestionConfiguration extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myLogstore
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ossbucket
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionCodec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @example
   * 1714360481
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * never
   */
  interval?: string;
  /**
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @example
   * true
   */
  restoreObjectEnabled?: boolean;
  /**
   * @example
   * acs:ram::12345:role/aliyunlogdefaultrole
   */
  roleARN?: string;
  /**
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  timeFormat?: string;
  /**
   * @example
   * [0-9]{0,2}\/[0-9a-zA-Z]+\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
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
  /**
   * @example
   * example_action_policy
   */
  actionPolicyId?: string;
  /**
   * @example
   * sls.builtin.dynamic
   */
  alertPolicyId?: string;
  /**
   * @example
   * 10m
   */
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

export class ProcessorAssociate extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-processor-1
   */
  processorId?: string;
  static names(): { [key: string]: string } {
    return {
      processorId: 'processorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectSummary extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      projectName: 'projectName',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      projectName: 'string',
      region: 'string',
      resourceGroupId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SavedSearch extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  savedsearchName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 0/5 * * * *
   */
  cronExpression?: string;
  /**
   * @example
   * 4
   */
  delay?: number;
  /**
   * @example
   * 60s
   */
  interval?: string;
  /**
   * @example
   * false
   */
  runImmediately?: boolean;
  /**
   * @example
   * +0800
   */
  timeZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FixedRate
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  /**
   * @example
   * 1714123644
   */
  createTime?: number;
  /**
   * @example
   * schedule-sql-test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scheduleSqlTest
   */
  displayName?: string;
  /**
   * @example
   * 1714123644
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sql-1714123463-225223
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  schedule?: Schedule;
  /**
   * @example
   * e73f43732852064ad5d091914e39342f
   */
  scheduleId?: string;
  /**
   * @example
   * ENABLED
   */
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
      scheduleId: 'scheduleId',
      status: 'status',
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
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledSQLConfiguration extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * log2log
   */
  dataFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  destEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dest-logstore-demo
   */
  destLogstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-demo
   */
  destProject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  destRoleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1712592000
   */
  fromTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * @m-1m
   */
  fromTimeExpr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enhanced
   */
  resourcePool?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  script?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * source-logstore-demo
   */
  sourceLogstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * searchQuery
   */
  sqlType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * @m
   */
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
  /**
   * @example
   * 8
   */
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * true
   */
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
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * cn-shanghai-intranet.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * exampleStore
   */
  eventStore?: string;
  /**
   * @example
   * exampleProject
   */
  project?: string;
  /**
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
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

export class StoreViewStore extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  project?: string;
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      query: 'query',
      storeName: 'storeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      query: 'string',
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateConfiguration extends $tea.Model {
  aonotations?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls.app.ack.ip.not_enough
   */
  id?: string;
  /**
   * @example
   * cn
   */
  lang?: string;
  tokens?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sys
   */
  type?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 1000000000
   */
  callerUid?: number;
  /**
   * @example
   * 2023-09-06 14:57:07
   */
  createDate?: string;
  /**
   * @example
   * 100
   */
  expirationTime?: number;
  /**
   * @example
   * 2023-09-06 14:58:07
   */
  expireDate?: string;
  /**
   * @example
   * {"xx":"yy"}
   */
  extra?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * 1
   */
  number?: number;
  /**
   * @example
   * {"type":"aliyun","ids":[1,2]}
   */
  sharingTo?: string;
  /**
   * @example
   * xxxxx
   */
  ticket?: string;
  /**
   * @example
   * xxxxx
   */
  ticketId?: string;
  /**
   * @example
   * 1
   */
  usedNumber?: number;
  /**
   * @example
   * false
   */
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
      sharingTo: 'sharingTo',
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
      sharingTo: 'string',
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

export class Chart extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  action?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  display?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  search?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-chart
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * linepro
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  charts?: Chart[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  /**
   * @example
   * 这是一个仪表盘。
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-alert
   */
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

export class ExternalStore extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds_store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameter?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds-vpc
   */
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
  /**
   * @example
   * 1622186280
   */
  lastModifyTime?: number;
  line?: IndexLine;
  /**
   * @example
   * true
   */
  logReduce?: boolean;
  logReduceBlackList?: string[];
  logReduceWhiteList?: string[];
  /**
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  loggingDetails?: LoggingLoggingDetails[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-project
   */
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
  /**
   * @example
   * true
   */
  appendMeta?: boolean;
  /**
   * @example
   * true
   */
  autoSplit?: boolean;
  createTime?: number;
  /**
   * @example
   * false
   */
  enableTracking?: boolean;
  encryptConf?: EncryptConf;
  hotTtl?: number;
  /**
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  lastModifyTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstoreName?: string;
  /**
   * @example
   * 2
   */
  maxSplitShard?: number;
  /**
   * @example
   * standard
   */
  mode?: string;
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  telemetryType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
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
  /**
   * @example
   * 192.168.x.x
   */
  ip?: string;
  /**
   * @example
   * 1657509674
   */
  lastHeartbeatTime?: number;
  /**
   * @example
   * 3B70F4F1-80F7-46C4-A6C1-100D66C***47
   */
  machineUniqueid?: string;
  /**
   * @example
   * test
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-group
   */
  groupName?: string;
  groupType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ip
   */
  machineIdentifyType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  lastModifyTime?: string;
  owner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  quota?: { [key: string]: any };
  region?: string;
  resourceGroupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataRedundancyType: 'dataRedundancyType',
      description: 'description',
      lastModifyTime: 'lastModifyTime',
      owner: 'owner',
      projectName: 'projectName',
      quota: 'quota',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataRedundancyType: 'string',
      description: 'string',
      lastModifyTime: 'string',
      owner: 'string',
      projectName: 'string',
      quota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * NotExist
   */
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
  /**
   * @example
   * 1453949705
   */
  createTime?: number;
  /**
   * @example
   * 8000000000000000000000000000000
   */
  exclusiveEndKey?: string;
  /**
   * @example
   * 00000000000000000000000000000000
   */
  inclusiveBeginKey?: string;
  /**
   * @example
   * 0
   */
  shardID?: number;
  /**
   * @example
   * readwrite
   */
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
  /**
   * @example
   * xxxx
   */
  annotatedBy?: string;
  /**
   * @example
   * 1694761550
   */
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
  /**
   * @example
   * xxx
   */
  annotatedBy?: string;
  /**
   * @example
   * 1694761550
   */
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
  /**
   * @example
   * true
   */
  chn?: boolean;
  /**
   * @example
   * true
   */
  caseSensitive?: boolean;
  token?: string[];
  /**
   * @example
   * myAlias
   */
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @example
   * true
   */
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
  /**
   * @remarks
   * Specifies whether to enable case sensitivity. This parameter is required only when **type** is set to **text**. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Specifies whether to include Chinese characters. This parameter is required only when **type** is set to **text**. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The data type of the field value. Valid values: text, json, double, and long.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The alias of the field.
   * 
   * @example
   * myAlias
   */
  alias?: string;
  /**
   * @remarks
   * The delimiters that are used to split text.
   */
  token?: string[];
  /**
   * @remarks
   * Specifies whether to turn on Enable Analytics for the field.
   * 
   * @example
   * false
   */
  docValue?: boolean;
  vectorIndex?: string;
  embedding?: string;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      chn: 'chn',
      type: 'type',
      alias: 'alias',
      token: 'token',
      docValue: 'doc_value',
      vectorIndex: 'vector_index',
      embedding: 'embedding',
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
      vectorIndex: 'string',
      embedding: 'string',
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
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2i7nhaxifxey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-project
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Only PROJECT is supported. Set the value to PROJECT.
   * 
   * @example
   * PROJECT
   */
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
  /**
   * @remarks
   * The IDs of shards whose data is being consumed.
   * 
   * This parameter is required.
   */
  body?: number[];
  /**
   * @remarks
   * The consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * consumer_1
   */
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

export class ConsumerGroupUpdateCheckPointRequest extends $tea.Model {
  /**
   * @remarks
   * The value of the checkpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * MTUyNDE1NTM3OTM3MzkwODQ5Ng==
   */
  checkpoint?: string;
  /**
   * @remarks
   * The ID of the shard.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shard?: number;
  /**
   * @remarks
   * The consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * consumer_1
   */
  consumer?: string;
  /**
   * @remarks
   * Specifies whether to enable forceful updates. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * False
   */
  forceSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'checkpoint',
      shard: 'shard',
      consumer: 'consumer',
      forceSuccess: 'forceSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      shard: 'number',
      consumer: 'string',
      forceSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumerGroupUpdateCheckPointResponse extends $tea.Model {
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

export class CreateAlertRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: AlertConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The data structure of the request.
   */
  body?: MLDataSetParam;
  /**
   * @remarks
   * The unique identifier of the dataset.
   * 
   * @example
   * cb8cc4eb51a85e823471cdb368fae9be
   */
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
  /**
   * @remarks
   * The data structure of the request.
   */
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
  /**
   * @remarks
   * The body of the request.
   */
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
  /**
   * @remarks
   * The name of the consumer group. The name must be unique in a project.
   * 
   * This parameter is required.
   * 
   * @example
   * consumerGroupX
   */
  consumerGroup?: string;
  /**
   * @remarks
   * Specifies whether to consume data in sequence. Valid values:
   * 
   * *   true
   * 
   *     *   In a shard, data is consumed in ascending order based on the value of the \\*\\*__tag__:__receive_time__\\*\\* field.
   *     *   If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
   *     *   If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
   * 
   * *   false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  order?: boolean;
  /**
   * @remarks
   * The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
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
  /**
   * @remarks
   * The data structure of the dashboard.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
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

export class CreateDownloadJobRequest extends $tea.Model {
  /**
   * @remarks
   * 下载配置
   * 
   * This parameter is required.
   */
  configuration?: CreateDownloadJobRequestConfiguration;
  /**
   * @remarks
   * 任务描述
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * This parameter is required.
   * 
   * @example
   * download-123456789
   */
  displayName?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * download-123
   */
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
      configuration: CreateDownloadJobRequestConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadJobResponse extends $tea.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @example
   * this is ETL
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls-test-etl
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etl-123456
   */
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
  /**
   * @remarks
   * The configuration of field indexes. A field index is a key-value pair in which the key specifies the name of the field and the value specifies the index configuration of the field. You must specify this parameter, the line parameter, or both parameters. For more information, see Example.
   */
  keys?: { [key: string]: KeysValue };
  /**
   * @remarks
   * The configuration of full-text indexes. You must specify this parameter, the keys parameter, or both parameters. For more information, see Example.
   */
  line?: CreateIndexRequestLine;
  /**
   * @remarks
   * Specifies whether to turn on LogReduce. After you turn on LogReduce, either the whitelist or blacklist takes effect.
   * 
   * @example
   * false
   */
  logReduce?: boolean;
  /**
   * @remarks
   * The fields in the blacklist that you want to use to cluster logs.
   */
  logReduceBlackList?: string[];
  /**
   * @remarks
   * The fields in the whitelist that you want to use to cluster logs.
   */
  logReduceWhiteList?: string[];
  /**
   * @remarks
   * The maximum length of a field value that can be retained. Default value: 2048. Unit: bytes. The default value is equal to 2 KB. You can change the value of max_text_len. Valid values: 64 to 16384.
   * 
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
   * @remarks
   * The retention period of logs. Unit: days. Valid values: 7, 30, and 90.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * Specifies whether to record public IP addresses. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sharding. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the web tracking feature. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The data structure of the encryption configuration.
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot storage tier of the Logstore. Unit: days. You can specify a value that ranges from 30 to the value of ttl.
   * 
   * Hot data that is stored for longer than the period specified by hot_ttl is converted to cold data. For more information, see [Enable hot and cold-tiered storage for a Logstore](https://help.aliyun.com/document_detail/308645.html).
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The name of the Logstore. The name must meet the following requirements:
   * 
   * *   The name must be unique in a project.
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split. Valid values: 1 to 64.
   * 
   * > If you set autoSplit to true, you must configure this parameter.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Logstore. Log Service provides the following types of Logstores: Standard Logstores and Query Logstores. Valid values:
   * 
   * *   **standard**: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
   * *   **query**: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. Log retention periods of weeks or months are considered long.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * > You cannot call the CreateLogStore operation to change the number of shards. You can call the SplitShard or MergeShards operation to change the number of shards.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The type of the observable data. Valid values:
   * 
   * *   None: logs
   * *   Metrics: metrics
   * 
   * @example
   * None
   */
  telemetryType?: string;
  /**
   * @remarks
   * The retention period of data. Unit: days. Valid values: 1 to 3000. If you set this parameter to 3650, data is permanently stored.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The configurations of service logs.
   * 
   * This parameter is required.
   */
  loggingDetails?: CreateLoggingRequestLoggingDetails[];
  /**
   * @remarks
   * The name of the project to which service logs are stored.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
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
  /**
   * @remarks
   * The aggregation plug-ins.
   */
  aggregators?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The data output plug-ins.
   * 
   * This parameter is required.
   */
  flushers?: { [key: string]: any }[];
  /**
   * @remarks
   * The global configuration.
   */
  global?: { [key: string]: any };
  /**
   * @remarks
   * The data source plug-ins.
   * 
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The sample log.
   * 
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * The processing plug-ins.
   */
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
  /**
   * @remarks
   * The attributes of the machine group.
   */
  groupAttribute?: CreateMachineGroupRequestGroupAttribute;
  /**
   * @remarks
   * The name of the machine group. The name must meet the following requirements:
   * 
   * *   The name of each machine group in a project must be unique.
   * *   It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   It must start and end with a lowercase letter or a digit.
   * *   It must be 3 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-machine-group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the machine group. The parameter can be left empty.
   * 
   * @example
   * ""
   */
  groupType?: string;
  /**
   * @remarks
   * The type of the machine group identifier. Valid values:
   * 
   * *   ip: The machine group uses IP addresses as identifiers.
   * *   userdefined: The machine group uses custom identifiers.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  machineIdentifyType?: string;
  /**
   * @remarks
   * The identifiers of machine group.
   * 
   * *   If you set machineIdentifyType to ip, enter the IP address of the machine.
   * *   If you set machineIdentifyType to userdefined, enter a custom identifier.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: OSSExportConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ali-test-oss-job
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-123456789-123456
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: OSSExportConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ali-test-oss-hdfs-job
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-123456789-123456
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ingest-oss-123456
   */
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
  /**
   * @remarks
   * The name of the external store.
   * 
   * This parameter is required.
   * 
   * @example
   * test_oss_store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * The parameters that are configured for the external store.
   * 
   * This parameter is required.
   */
  parameter?: CreateOssExternalStoreRequestParameter;
  /**
   * @remarks
   * The type of the external store. Set the value to oss.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
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
  /**
   * @remarks
   * Data redundancy type
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * The description of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * this is test
   */
  description?: string;
  /**
   * @remarks
   * The name of the project. The name must be unique in a region. You cannot change the name after you create the project. The name must meet the following requirements:
   * 
   * *   The name must be unique.
   * *   It can contain only lowercase letters, digits, and hyphens (-).
   * *   It must start and end with a lowercase letter or a digit.
   * *   It must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzf******sxby
   */
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
  /**
   * @remarks
   * The name of the external store. The name must be unique in a project and must be different from Logstore names.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * The parameter struct.
   * 
   * This parameter is required.
   */
  parameter?: CreateRdsExternalStoreRequestParameter;
  /**
   * @remarks
   * The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * rds-vpc
   */
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
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * displayname
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the Logstore to which the saved search belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the saved search. The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * pv in minutes
   */
  savedsearchName?: string;
  /**
   * @remarks
   * The query statement of the saved search. A query statement consists of a search statement and an analytic statement in the `Search statement|Analytic statement` format. For more information about search statements and analytic statements, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * 
   * This parameter is required.
   * 
   * @example
   * *|select date_format(__time__-__time__%60, \\"%H:%i:%s\\") as time, COUNT(*) as pv group by time
   */
  searchQuery?: string;
  /**
   * @remarks
   * The topic of the log.
   * 
   * @example
   * theme
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ali-test-scheduled-sql
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sql-123456789-123456
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class CreateSqlInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  useAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      useAsDefault: 'useAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      useAsDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlInstanceResponse extends $tea.Model {
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

export class CreateStoreViewRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my_storeview
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * logstore
   */
  storeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stores?: StoreViewStore[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      storeType: 'storeType',
      stores: 'stores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      storeType: 'string',
      stores: { 'type': 'array', 'itemType': StoreViewStore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoreViewResponse extends $tea.Model {
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

export class CreateTicketRequest extends $tea.Model {
  accessTokenExpirationTime?: number;
  expirationTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokenExpirationTime: 'accessTokenExpirationTime',
      expirationTime: 'expirationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenExpirationTime: 'number',
      expirationTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponseBody extends $tea.Model {
  /**
   * @example
   * eyJ***************.eyJ******************.KUT****************
   */
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
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @example
   * oss
   */
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

export class DeleteCollectionPolicyResponse extends $tea.Model {
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

export class DeleteDownloadJobResponse extends $tea.Model {
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

export class DeleteStoreViewResponse extends $tea.Model {
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

export class DisableScheduledSQLResponse extends $tea.Model {
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

export class EnableScheduledSQLResponse extends $tea.Model {
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
  /**
   * @remarks
   * The names of the Logtail configurations.
   */
  configs?: string[];
  /**
   * @remarks
   * The number of Logtail configurations.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The number of returned machine groups.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The names of the returned machine groups.
   * 
   * @example
   * [ "sample-group1","sample-group2" ]
   */
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
  /**
   * @remarks
   * The shard ID.
   * 
   * *   If the specified shard does not exist, an empty list is returned.
   * *   If no shard ID is specified, the checkpoints of all shards are returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @example
   * oss
   */
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
  /**
   * @remarks
   * The number of logs that you want to obtain and are generated before the generation time of the start log. Valid values: (0,100].
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  backLines?: number;
  /**
   * @remarks
   * The number of logs that you want to obtain and are generated after the generation time of the start log. Valid values: (0,100].
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  forwardLines?: number;
  /**
   * @remarks
   * The unique identifier of the log group to which the start log belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 85C897C740352DC6-808
   */
  packId?: string;
  /**
   * @remarks
   * The unique context identifier of the start log in the log group.
   * 
   * This parameter is required.
   * 
   * @example
   * 2|MTY1NTcwNTUzODY5MTY0MDk1Mg==|3|0
   */
  packMeta?: string;
  /**
   * @remarks
   * The type of the data in the Logstore. Set the value to context_log.
   * 
   * This parameter is required.
   * 
   * @example
   * context_log
   */
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
  /**
   * @remarks
   * The number of logs that are generated before the generation time of the start log.
   * 
   * @example
   * 100
   */
  backLines?: number;
  /**
   * @remarks
   * The number of logs that are generated after the generation time of the start log.
   * 
   * @example
   * 100
   */
  forwardLines?: number;
  /**
   * @remarks
   * The logs that are returned.
   */
  logs?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether the query and analysis results are complete. Valid values:
   * 
   * *   Complete: The query is successful, and the complete query and analysis results are returned.
   * *   Incomplete: The query is successful, but the query and analysis results are incomplete. To obtain the complete results, you must repeat the request.
   * 
   * @example
   * Complete
   */
  progress?: string;
  /**
   * @remarks
   * The total number of logs that are returned. The logs include the start log that is specified in the request.
   * 
   * @example
   * 201
   */
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
  /**
   * @remarks
   * The point in time that you want to use to query a cursor. Set the value to a UNIX timestamp or a string such as `begin` and `end`.
   * 
   * This parameter is required.
   * 
   * @example
   * begin
   */
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
  /**
   * @remarks
   * The value of the cursor.
   * 
   * @example
   * MTQ0NzI5OTYwNjg5NjYzMjM1Ng==
   */
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
  /**
   * @remarks
   * The cursor.
   * 
   * This parameter is required.
   * 
   * @example
   * MTU0NzQ3MDY4MjM3NjUxMzQ0Ng==
   */
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
  /**
   * @remarks
   * The server time that is queried based on the cursor. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1554260243
   */
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

export class GetDownloadJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * 下载配置
   */
  configuration?: GetDownloadJobResponseBodyConfiguration;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * 任务描述
   * 
   * @example
   * a download job
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * @example
   * download-123456
   */
  displayName?: string;
  /**
   * @remarks
   * 任务执行细节
   */
  executionDetails?: GetDownloadJobResponseBodyExecutionDetails;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @remarks
   * 代表资源状态的资源属性字段
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      executionDetails: 'executionDetails',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetDownloadJobResponseBodyConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: GetDownloadJobResponseBodyExecutionDetails,
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDownloadJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDownloadJobResponseBody,
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
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The search statement. Only search statements are supported. Analytic statements are not supported. For more information about the syntax of search statements, see [Log search overview](https://help.aliyun.com/document_detail/43772.html).
   * 
   * @example
   * with_pack_meta
   */
  query?: string;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The topic of the logs.
   * 
   * @example
   * topic
   */
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
  /**
   * @remarks
   * The type of the index.
   * 
   * @example
   * v2
   */
  indexMode?: string;
  /**
   * @remarks
   * The configurations of field indexes. A field index is in the key-value format in which the key specifies the name of the field and the value specifies the index configuration of the field.
   */
  keys?: { [key: string]: KeysValue };
  /**
   * @remarks
   * The time when the index configurations were last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1524155379
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The configurations of full-text indexes.
   */
  line?: GetIndexResponseBodyLine;
  /**
   * @remarks
   * Indicates whether the log clustering feature is enabled.
   * 
   * @example
   * false
   */
  logReduce?: boolean;
  /**
   * @remarks
   * The fields in the blacklist that are used to cluster logs. This parameter is valid only if the log clustering feature is enabled.
   */
  logReduceBlackList?: string[];
  /**
   * @remarks
   * The fields in the whitelist that are used to cluster logs. This parameter is valid only if the log clustering feature is enabled.
   */
  logReduceWhiteList?: string[];
  /**
   * @remarks
   * The maximum length of a field value that can be retained. Default value: 2048. Unit: bytes. The default value is equal to 2 KB. You can change the value of the max_text_len parameter. Valid values: 64 to 16384. Unit: bytes.
   * 
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
   * @remarks
   * The storage type. The value is fixed as pg.
   * 
   * @example
   * pg
   */
  storage?: string;
  /**
   * @remarks
   * The lifecycle of the index file. Valid values: 7, 30, and 90. Unit: day.
   * 
   * @example
   * 30
   */
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
  /**
   * @example
   * ChargeByFunction
   */
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
  /**
   * @remarks
   * The beginning of the time range to query. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you specify the same value for the **from** and **to** parameters, the interval is invalid, and an error message is returned.
   * *   The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > To ensure that full data can be queried, specify a query time range that is accurate to the minute. If you also specify a time range in an analytic statement, Simple Log Service uses the time range specified in the analytic statement for query and analysis.
   * 
   * If you want to specify a time range that is accurate to the second in your analytic statement, you must use the from_unixtime or to_unixtime function to convert the time format. For more information about the functions, see [from_unixtime function](https://help.aliyun.com/document_detail/63451.html) and [to_unixtime function](https://help.aliyun.com/document_detail/63451.html). Examples:
   * 
   * *   `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
   * *   `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse(\\"2022-10-19 15:46:05\\", \\"%Y-%m-%d %H:%i:%s\\")) AND __time__ < to_unixtime(now())`
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  /**
   * @remarks
   * The maximum number of logs to return for the request. This parameter takes effect only when the query parameter is set to a search statement. Minimum value: 0. Maximum value: 100. Default value: 100.
   * 
   * @example
   * 100
   */
  line?: number;
  /**
   * @remarks
   * The line from which the query starts. This parameter takes effect only when the query parameter is set to a search statement. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Specifies whether to enable the Dedicated SQL feature. For more information, see [Enable Dedicated SQL](https://help.aliyun.com/document_detail/223777.html). Valid values:
   * 
   * *   true: enables the Dedicated SQL feature.
   * *   false (default): enables the Standard SQL feature.
   * 
   * You can use the powerSql or **query** parameter to configure Dedicated SQL.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The search statement or the query statement. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html). If you add `set session parallel_sql=true;` to the analytic statement in the query parameter, Dedicated SQL is used. For example, you can set the query parameter to `* | set session parallel_sql=true; select count(*) as pv`. For more information about common errors that may occur during log query and analysis, see [How do I resolve common errors that occur when I query and analyze logs?](https://help.aliyun.com/document_detail/61628.html)
   * 
   * > If you specify an analytic statement in the value of the query parameter, the line and offset parameters do not take effect. In this case, we recommend that you set the line and offset parameters to 0 and use the LIMIT clause to limit the number of logs to return on each page. For more information, see [Paged query](https://help.aliyun.com/document_detail/89994.html).
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return logs in reverse chronological order of log timestamps. The log timestamps are accurate to the minute. Valid values:
   * 
   * *   true: returns logs in reverse chronological order of log timestamps.
   * *   false (default): returns logs in chronological order of log timestamps.
   * 
   * > 
   * 
   * *   The reverse parameter takes effect only when the query parameter is set to a search statement. The reverse parameter specifies the method used to sort returned logs.
   * *   If the query parameter is set to a query statement, the reverse parameter does not take effect. The method used to sort returned logs is specified by the ORDER BY clause in the analytic statement. If you use the keyword asc in the ORDER BY clause, the logs are sorted in chronological order. If you use the keyword desc in the ORDER BY clause, the logs are sorted in reverse chronological order. By default, asc is used in the ORDER BY clause.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The end of the time range to query. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you specify the same value for the **from** and **to** parameters, the interval is invalid, and an error message is returned.
   * *   The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > To ensure that full data can be queried, specify a query time range that is accurate to the minute. If you also specify a time range in an analytic statement, Simple Log Service uses the time range specified in the analytic statement for query and analysis.
   * 
   * If you want to specify a time range that is accurate to the second in your analytic statement, you must use the from_unixtime or to_unixtime function to convert the time format. For more information about the functions, see [from_unixtime function](https://help.aliyun.com/document_detail/63451.html) and [to_unixtime function](https://help.aliyun.com/document_detail/63451.html). Examples:
   * 
   * *   `* | SELECT * FROM log WHERE from_unixtime(__time__) > from_unixtime(1664186624) AND from_unixtime(__time__) < now()`
   * *   `* | SELECT * FROM log WHERE __time__ > to_unixtime(date_parse(\\"2022-10-19 15:46:05\\", \\"%Y-%m-%d %H:%i:%s\\")) AND __time__ < to_unixtime(now())`
   * 
   * This parameter is required.
   * 
   * @example
   * 1627269085
   */
  to?: number;
  /**
   * @remarks
   * The topic of the logs. The default value is double quotation marks (""). For more information, see [Topic](https://help.aliyun.com/document_detail/48881.html).
   * 
   * @example
   * topic
   */
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
  /**
   * @remarks
   * The compression method.
   * 
   * This parameter is required.
   * 
   * @example
   * lz4
   */
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
  /**
   * @remarks
   * Specifies whether to page forward or backward for the scan-based query or the phrase search.
   * 
   * @example
   * false
   */
  forward?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The value is the log time that is specified when log data is written.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  from?: number;
  highlight?: boolean;
  /**
   * @remarks
   * The maximum number of logs to return for the request. This parameter takes effect only when the query parameter is set to a search statement. Minimum value: 0. Maximum value: 100. Default value: 100.
   * 
   * @example
   * 100
   */
  line?: number;
  /**
   * @remarks
   * The line from which the query starts. This parameter takes effect only when the query parameter is set to a search statement. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Specifies whether to enable the SQL enhancement feature. By default, the feature is disabled.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The search statement or the query statement. For more information, see the "Log search overview" and "Log analysis overview" topics.
   * 
   * If you add set session parallel_sql=true; to the analytic statement in the query parameter, Dedicated SQL is used. For example, you can set the query parameter to \\* | set session parallel_sql=true; select count(\\*) as pv.
   * 
   * Note: If you specify an analytic statement in the query parameter, the line and offset parameters do not take effect in this operation. In this case, we recommend that you set the line and offset parameters to 0 and use the LIMIT clause to limit the number of logs to return on each page. For more information, see the "Perform paged queries" topic.
   * 
   * @example
   * status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to return logs in reverse chronological order of log timestamps. The log timestamps are accurate to the minute. Valid values:
   * 
   * true: Logs are returned in reverse chronological order of log timestamps. false (default): Logs are returned in chronological order of log timestamps. Note: The reverse parameter takes effect only when the query parameter is set to a search statement. The reverse parameter specifies the method used to sort returned logs. If the query parameter is set to a query statement, the reverse parameter does not take effect. The method used to sort returned logs is specified by the ORDER BY clause in the analytic statement. If you use the keyword asc in the ORDER BY clause, the logs are sorted in chronological order. If you use the keyword desc in the ORDER BY clause, the logs are sorted in reverse chronological order. By default, asc is used in the ORDER BY clause.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The parameter that is used to query data.
   * 
   * @example
   * mode=scan
   */
  session?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is the log time that is specified when log data is written.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1627268185
   */
  to?: number;
  /**
   * @remarks
   * The topic of the logs. Default value: double quotation marks ("").
   * 
   * @example
   * ""
   */
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
      to: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsV2ResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * The metadata that is returned.
   */
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
  /**
   * @example
   * true
   */
  allowBuiltin?: boolean;
  body?: MLServiceAnalysisParam;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      allowBuiltin: 'allowBuiltin',
      body: 'body',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowBuiltin: 'boolean',
      body: MLServiceAnalysisParam,
      version: 'string',
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

export class GetMetricStoreMeteringModeResponseBody extends $tea.Model {
  /**
   * @example
   * ChargeByFunction
   */
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

export class GetMetricStoreMeteringModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetricStoreMeteringModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMetricStoreMeteringModeResponseBody,
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
  /**
   * @remarks
   * Specifies whether to enable the Dedicated SQL feature. For more information, see [Enable Dedicated SQL](https://help.aliyun.com/document_detail/223777.html). Valid values:
   * 
   * *   true
   * *   false (default): enables the Standard SQL feature.
   * 
   * You can use the powerSql or **query** parameter to configure Dedicated SQL.
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The standard SQL statement. In this example, the SQL statement queries the number of page views (PVs) from 2022-03-01 10:41:40 to 2022-03-01 10:56:40 in a Logstore whose name is nginx-moni.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT COUNT(*) as pv FROM nginx-moni where __time__ &gt; 1646102500 and __time__ &lt; 1646103400
   */
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

export class GetSlsServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ServiceStatus;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ServiceStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSqlInstanceResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetSqlInstanceResponseBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreViewResponseBody extends $tea.Model {
  /**
   * @example
   * logstore
   */
  storeType?: string;
  stores?: StoreViewStore[];
  static names(): { [key: string]: string } {
    return {
      storeType: 'storeType',
      stores: 'stores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeType: 'string',
      stores: { 'type': 'array', 'itemType': StoreViewStore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStoreViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetStoreViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreViewIndexResponseBody extends $tea.Model {
  indexes?: GetStoreViewIndexResponseBodyIndexes[];
  static names(): { [key: string]: string } {
    return {
      indexes: 'indexes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexes: { 'type': 'array', 'itemType': GetStoreViewIndexResponseBodyIndexes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreViewIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStoreViewIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetStoreViewIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertsRequest extends $tea.Model {
  /**
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The line from which the query starts.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: MLDataParam[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The line from which the query starts.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: MLDataSetParam[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The line from which the query starts.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: MLLabelParam[];
  /**
   * @remarks
   * The total number of tags that meet the query conditions.
   * 
   * @example
   * 20
   */
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
  centralProject?: string;
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @example
   * your-test-bucket1
   */
  instanceId?: string;
  offset?: number;
  /**
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @example
   * oss
   */
  productCode?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      centralProject: 'centralProject',
      dataCode: 'dataCode',
      instanceId: 'instanceId',
      offset: 'offset',
      policyName: 'policyName',
      productCode: 'productCode',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralProject: 'string',
      dataCode: 'string',
      instanceId: 'string',
      offset: 'number',
      policyName: 'string',
      productCode: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentCount?: number;
  data?: ListCollectionPoliciesResponseBodyData[];
  statistics?: ListCollectionPoliciesResponseBodyStatistics[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'currentCount',
      data: 'data',
      statistics: 'statistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      data: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyData },
      statistics: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyStatistics },
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
  /**
   * @remarks
   * The name of the Logtail configuration.
   * 
   * @example
   * logtail-config-sample
   */
  configName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The Logtail configurations that are returned on the current page.
   */
  configs?: string[];
  /**
   * @remarks
   * The number of Logtail configurations that are returned on the current page.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The total number of Logtail configurations that meet the query conditions.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500. Default value: 500.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The details of the dashboard.
   */
  dashboardItems?: ListDashboardResponseBodyDashboardItems[];
  /**
   * @remarks
   * The queried dashboards. Each dashboard in the array is specified by dashboardName.
   */
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
  /**
   * @remarks
   * The domain name that is used to match custom domain names. For example, if you set domainName to `example.com`, the matched domain names are `a.example.com` and `b.example.com`.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 500. Maximum value: 500.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The number of domain names that are returned on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * The total number of domain names that are returned.
   * 
   * @example
   * 1
   */
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

export class ListDownloadJobsRequest extends $tea.Model {
  /**
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 10
   */
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

export class ListDownloadJobsResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  results?: ListDownloadJobsResponseBodyResults[];
  /**
   * @example
   * 10
   */
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
      results: { 'type': 'array', 'itemType': ListDownloadJobsResponseBodyResults },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDownloadJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDownloadJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListETLsRequest extends $tea.Model {
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 10
   */
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

export class ListLogStoresRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the Logstore. Fuzzy match is supported. For example, if you enter test, Logstores whose name contains test are returned.
   * 
   * @example
   * my-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The type of the Logstore. Valid values: standard and query.
   * 
   * *   **standard**: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
   * *   **query**: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the volume of data is large, the log retention period is long, or log analysis is not required. Log retention periods of weeks or months are considered long.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500. Default value: 500.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The type of the data that you want to query. Valid values:
   * 
   * *   None: logs
   * *   Metrics: metrics
   * 
   * @example
   * None
   */
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
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The Logstores that meet the query conditions.
   * 
   * @example
   * ["test-1","test-2"]
   */
  logstores?: string[];
  /**
   * @remarks
   * The number of the Logstores that meet the query conditions.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The name of the Logtail pipeline configuration.
   * 
   * @example
   * logtail-config-sample
   */
  configName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The line from which the query starts.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of Logtail pipeline configurations per page.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The Logtail pipeline configurations that are returned on the current page.
   */
  configs?: string[];
  /**
   * @remarks
   * The number of Logtail pipeline configurations that are returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The total number of Logtail pipeline configurations in the current project.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The name of the machine group. This parameter is used to filter machine groups. Partial match is supported.
   * 
   * @example
   * test-machine-group
   */
  groupName?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The number of machine groups that are returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The machine groups that meet the query conditions.
   * 
   * @example
   * [ "test-machine-group-1", "test-machine-group-2" ]
   */
  machinegroups?: string[];
  /**
   * @remarks
   * The total number of machine groups that meet the query conditions.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100. Maximum value: 500.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The number of machines that are returned on the current page.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The machines that are returned.
   */
  machines?: Machine[];
  /**
   * @remarks
   * The total number of machines.
   * 
   * @example
   * 8
   */
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
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 100
   */
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

export class ListOSSExportsResponseBody extends $tea.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  results?: OSSExport[];
  /**
   * @example
   * 10
   */
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
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 100
   */
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

export class ListOSSHDFSExportsResponseBody extends $tea.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  results?: OSSExport[];
  /**
   * @example
   * 10
   */
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
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 10
   */
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
  fetchQuota?: boolean;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * ali-test-project
   */
  projectName?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100. This operation can return up to 500 projects.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      fetchQuota: 'fetchQuota',
      offset: 'offset',
      projectName: 'projectName',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchQuota: 'boolean',
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
  /**
   * @remarks
   * The number of returned projects on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The projects that meet the query conditions.
   */
  projects?: Project[];
  /**
   * @remarks
   * The total number of projects that meet the query conditions.
   * 
   * @example
   * 11
   */
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
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The number of saved searches returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The saved searches.
   * 
   * @example
   * [ "test-1", "test-2" ]
   */
  savedsearchItems?: SavedSearch[];
  /**
   * @remarks
   * The total number of saved searches that meet the query conditions.
   * 
   * @example
   * 4
   */
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
  logstore?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 100
   */
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

export class ListScheduledSQLsResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  results?: ScheduledSQL[];
  /**
   * @example
   * 80
   */
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

export class ListStoreViewsRequest extends $tea.Model {
  /**
   * @example
   * my_storeview
   */
  name?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 100
   */
  size?: number;
  /**
   * @example
   * logstore
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      offset: 'offset',
      size: 'size',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      offset: 'number',
      size: 'number',
      storeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoreViewsResponseBody extends $tea.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  storeviews?: string[];
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      storeviews: 'storeviews',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      storeviews: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoreViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListStoreViewsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListStoreViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the resources whose tags you want to query. You must specify at least one of resourceId and tags.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   project
   * *   logstore
   * *   dashboard
   * *   MachineGroup
   * *   LogtailConfig
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to use to filter resources based on exact match. Each tag is a key-value pair. You must specify at least one of resourceId and tags.
   * 
   * You can enter up to 20 tags.
   */
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
  /**
   * @remarks
   * The IDs of the resources whose tags you want to query. You must specify at least one of resourceId and tags.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   project
   * *   logstore
   * *   dashboard
   * *   MachineGroup
   * *   LogtailConfig
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to use to filter resources based on exact match. Each tag is a key-value pair. You must specify at least one of resourceId and tags.
   * 
   * You can enter up to 20 tags.
   */
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
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned tags.
   */
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

export class OpenSlsServiceResponse extends $tea.Model {
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

export class PutAnnotationDataRequest extends $tea.Model {
  /**
   * @remarks
   * The unique identifier of the data.
   * 
   * @example
   * 2156d560fc7c01420542df92cd6365ds
   */
  annotationdataId?: string;
  /**
   * @remarks
   * The data structure of the request.
   */
  mlDataParam?: MLDataParam;
  /**
   * @remarks
   * The raw log data.
   */
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
  /**
   * @remarks
   * The project policy.
   * 
   * @example
   * { 	"Version": "1", 	"Statement": [{ 		"Action": ["log:PostLogStoreLogs"], 		"Resource": "acs:log:*:*:project/exampleproject/*", 		"Effect": "Deny", 		"Condition": { 			"StringNotLike": { 				"acs:SourceVpc": ["vpc-*"] 			} 		} 	}] }
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The logs. Each element is a JSON object that indicates a log.
   * 
   * >  **Note**: The time in a log that is collected by using the web tracking feature is the time at which Simple Log Service receives the log. You do not need to configure the __time__ field for each log. If this field exists, it is overwritten by the time at which Simple Log Service receives the log.
   * 
   * This parameter is required.
   */
  logs?: { [key: string]: string }[];
  /**
   * @remarks
   * The source of the logs.
   * 
   * This parameter is required.
   * 
   * @example
   * source
   */
  source?: string;
  /**
   * @remarks
   * The tags of the logs.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The topic of the logs.
   * 
   * @example
   * topic
   */
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

export class RefreshTokenRequest extends $tea.Model {
  /**
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @example
   * eyJ***************.eyJ******************.KUT****************
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenExpirationTime: 'accessTokenExpirationTime',
      ticket: 'ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenExpirationTime: 'number',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTokenResponseBody extends $tea.Model {
  /**
   * @example
   * eyJ***************.eyJ******************.KUT****************
   */
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshTokenResponseBody,
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
  /**
   * @remarks
   * The position where the shard is split.
   * 
   * @example
   * ef000000000000000000000000000000
   */
  key?: string;
  /**
   * @remarks
   * The number of new shards that are generated after splitting.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The resource IDs. You can specify only one resource and add tags to the resource.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   project
   * *   logstore
   * *   dashboard
   * *   machinegroup
   * *   logtailconfig
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to add to the resource. You can specify up to 20 tags in each call. Each tag is a key-value pair.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * Specifies whether to unbind all tags. Default value: false. Valid values:
   * 
   * *   false: unbinds only the tags that match the value of tags.
   * *   true: unbinds all tags that are bound to the resource.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. Each time you call this operation, you can unbind tags only from a single resource. Therefore, you can enter only one resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-project
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   project
   * *   logstore
   * *   dashboard
   * *   machinegroup
   * *   logtailconfig
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. If you set all to false, only the tags that match the value of this parameter are unbound.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: AlertConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The data structure of the request.
   */
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
  /**
   * @remarks
   * The data structure of the request.
   */
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
  /**
   * @remarks
   * The body of the request.
   */
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
  /**
   * @remarks
   * Specifies whether to consume data in sequence. Valid values:
   * 
   * *   true: If a shard is split, the data in the original shard is consumed first. Then, the data in the new shards is consumed at the same time. If shards are merged, the data in the original shards is consumed first. Then, the data in the new shard is consumed.
   * *   false: The data in all shards is consumed at the same time. If a new shard is generated after a shard is split or shards are merged, the data in the new shard is immediately consumed.
   * 
   * @example
   * true
   */
  order?: boolean;
  /**
   * @remarks
   * The timeout period. If Simple Log Service does not receive heartbeats from a consumer within the timeout period, Simple Log Service deletes the consumer. Unit: seconds.
   * 
   * @example
   * 300
   */
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
  /**
   * @remarks
   * The attributes of the dashboard.
   */
  attribute?: { [key: string]: string };
  /**
   * @remarks
   * The charts on the dashboard.
   * 
   * This parameter is required.
   */
  charts?: Chart[];
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * This parameter is required.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  /**
   * @remarks
   * The description of the dashboard.
   * 
   * @example
   * test dashboard.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the dashboard.
   * 
   * This parameter is required.
   * 
   * @example
   * Method pv
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ETLConfiguration;
  /**
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is update
   */
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
  /**
   * @remarks
   * The configuration of field indexes. A field index is a key-value pair in which the key specifies the name of the field and the value specifies the index configuration of the field.
   */
  keys?: { [key: string]: KeysValue };
  /**
   * @remarks
   * The configuration of full-text indexes.
   */
  line?: UpdateIndexRequestLine;
  /**
   * @remarks
   * Specifies whether to turn on LogReduce. If you turn on LogReduce, only one of `log_reduce_white_list` and `log_reduce_black_list` takes effect.
   * 
   * @example
   * false
   */
  logReduce?: boolean;
  /**
   * @remarks
   * The fields in the blacklist that you want to use to cluster logs.
   */
  logReduceBlackList?: string[];
  /**
   * @remarks
   * The fields in the whitelist that you want to use to cluster logs.
   */
  logReduceWhiteList?: string[];
  /**
   * @remarks
   * The maximum length of a field value that can be retained.
   * 
   * @example
   * 2048
   */
  maxTextLen?: number;
  /**
   * @remarks
   * The retention period of data. Unit: days. Valid values: 7, 30, and 90.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * Specifies whether to record public IP addresses. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sharding. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the web tracking feature. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The data structure of the encryption configuration.
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot storage tier of the Logstore. Minimum value: 30. Unit: day. You can specify a value that ranges from 30 to the value of ttl. Hot data that is stored for longer than the period specified by hot_ttl is converted to cold data. For more information, see [Enable hot and cold-tiered storage for a Logstore](https://help.aliyun.com/document_detail/308645.html).
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split. Valid values: 1 to 64.
   * 
   * > If you set autoSplit to true, you must specify maxSplitShard.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores.
   * 
   * *   **standard**: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
   * *   **query**: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the volume of data is large, the log retention period is long, or log analysis is not required. Log retention periods of weeks or months are considered long.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * > You cannot call the UpdateLogstore operation to change the number of shards. You can call the SplitShard or MergeShards operation to change the number of shards.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  shardCount?: number;
  /**
   * @remarks
   * The type of the log that you want to query. Valid values:
   * 
   * *   None: all types of logs.
   * *   Metrics: metrics.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  telemetryType?: string;
  /**
   * @remarks
   * The retention period of data. Unit: day. Valid values: 1 to 3650. If you set ttl to 3650, data is permanently stored.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * The billing mode. Valid values: ChargeByFunction and ChargeByDataIngest. Default value: ChargeByFunction. The value ChargeByFunction specifies the pay-by-feature billing mode. The value ChargeByDataIngest specifies the pay-by-ingested-data billing mode.
   * 
   * This parameter is required.
   * 
   * @example
   * ChargeByFunction
   */
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
  /**
   * @remarks
   * The configurations of service logs.
   * 
   * This parameter is required.
   */
  loggingDetails?: UpdateLoggingRequestLoggingDetails[];
  /**
   * @remarks
   * The name of the project to which you want to save service logs.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
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
  /**
   * @remarks
   * The aggregation plug-ins.
   */
  aggregators?: { [key: string]: any }[];
  /**
   * @remarks
   * The name of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The data output plug-ins.
   * 
   * This parameter is required.
   */
  flushers?: { [key: string]: any }[];
  /**
   * @remarks
   * The global configuration.
   */
  global?: { [key: string]: any };
  /**
   * @remarks
   * The data source plug-ins.
   * 
   * This parameter is required.
   */
  inputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The sample log.
   * 
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * The processing plug-ins.
   */
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
  /**
   * @remarks
   * The attribute of the machine group. This parameter is empty by default.
   */
  groupAttribute?: UpdateMachineGroupRequestGroupAttribute;
  /**
   * @remarks
   * The name of the machine group.
   * 
   * This parameter is required.
   * 
   * @example
   * test-machine-group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the machine group. Set the value to an empty string.
   * 
   * @example
   * ""
   */
  groupType?: string;
  /**
   * @remarks
   * The identifier type of the machine group. Valid values:
   * 
   * *   ip: The machine group uses IP addresses as identifiers.
   * *   userdefined: The machine group uses custom identifiers.
   * 
   * This parameter is required.
   * 
   * @example
   * userdefined
   */
  machineIdentifyType?: string;
  /**
   * @remarks
   * The identifiers of the machines in the machine group.
   * 
   * *   If you set machineIdentifyType to ip, enter the IP addresses of the machines.
   * *   If you set machineIdentifyType to userdefined, enter a custom identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * [uu_id_1，uu_id_2]
   */
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
  /**
   * @remarks
   * The operation on the machine. Valid values: add and delete. A value of add specifies to add the machine to the machine group. A value of delete specifies to remove the machine from the machine group.
   * 
   * @example
   * add
   */
  action?: string;
  /**
   * @remarks
   * The machines to be added or removed.
   * 
   * This parameter is required.
   */
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

export class UpdateMetricStoreMeteringModeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ChargeByFunction
   */
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

export class UpdateMetricStoreMeteringModeResponse extends $tea.Model {
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
  /**
   * @example
   * ali-test-oss-job
   */
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
  /**
   * @example
   * ali-test-oss-hdfs-job
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: OSSIngestionConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The name of the external store.
   * 
   * This parameter is required.
   * 
   * @example
   * test-oss-store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * The parameters that are configured for the external store.
   * 
   * This parameter is required.
   */
  parameter?: UpdateOssExternalStoreRequestParameter;
  /**
   * @remarks
   * The type of the external store. Set the value to oss.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
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
  /**
   * @remarks
   * The description of the project. The default value is an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * Description of my-project-test
   */
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
  /**
   * @remarks
   * The name of the external store.
   * 
   * This parameter is required.
   * 
   * @example
   * rds_store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * The parameter struct.
   * 
   * This parameter is required.
   */
  parameter?: UpdateRdsExternalStoreRequestParameter;
  /**
   * @remarks
   * The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * rds-vpc
   */
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
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * displayname
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the Logstore to which the saved search belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the saved search. The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * savedsearch-name
   */
  savedsearchName?: string;
  /**
   * @remarks
   * The search statement or the query statement of the saved search. A query statement consists of a search statement and an analytic statement in the Search statement|Analytic statement format.
   * 
   * For more information, see Log search overview and Log analysis overview.
   * 
   * This parameter is required.
   * 
   * @example
   * *|select date_format(__time__-__time__%60, \\"%H:%i:%s\\") as time, COUNT(*) as pv group by time
   */
  searchQuery?: string;
  /**
   * @remarks
   * The topic of the logs.
   * 
   * @example
   * theme
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: ScheduledSQLConfiguration;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ali-test-scheduled-sql
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class UpdateSqlInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  useAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      useAsDefault: 'useAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      useAsDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSqlInstanceResponse extends $tea.Model {
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

export class UpdateStoreViewRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * logstore
   */
  storeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stores?: StoreViewStore[];
  static names(): { [key: string]: string } {
    return {
      storeType: 'storeType',
      stores: 'stores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeType: 'string',
      stores: { 'type': 'array', 'itemType': StoreViewStore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoreViewResponse extends $tea.Model {
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
  centralizeConfig?: UpsertCollectionPolicyRequestCentralizeConfig;
  /**
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  dataConfig?: UpsertCollectionPolicyRequestDataConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  policyConfig?: UpsertCollectionPolicyRequestPolicyConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productCode?: string;
  resourceDirectory?: UpsertCollectionPolicyRequestResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: UpsertCollectionPolicyRequestCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: UpsertCollectionPolicyRequestDataConfig,
      enabled: 'boolean',
      policyConfig: UpsertCollectionPolicyRequestPolicyConfig,
      policyName: 'string',
      productCode: 'string',
      resourceDirectory: UpsertCollectionPolicyRequestResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyResponse extends $tea.Model {
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

export class LogtailConfigOutputDetail extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * ""
   */
  config?: string;
  /**
   * @example
   * builtin
   */
  mode?: string;
  /**
   * @example
   * Trace.RCA
   */
  type?: string;
  /**
   * @example
   * 0.01
   */
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
  /**
   * @example
   * xxxx
   */
  modelResourceId?: string;
  /**
   * @example
   * xxx_type
   */
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
  /**
   * @example
   * 2
   */
  cpuLimit?: number;
  /**
   * @example
   * 20
   */
  gpu?: number;
  /**
   * @example
   * 64
   */
  memoryLimit?: number;
  /**
   * @example
   * 2
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @example
   * 300
   */
  bufferInterval?: number;
  /**
   * @example
   * 256
   */
  bufferSize?: number;
  /**
   * @example
   * snappy
   */
  compressionType?: string;
  contentDetail?: { [key: string]: any };
  /**
   * @example
   * json
   */
  contentType?: string;
  /**
   * @example
   * 900
   * 
   * @deprecated
   */
  delaySec?: number;
  /**
   * @example
   * 900
   */
  delaySeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://oss-cn-hangzhou-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * %Y/%m/%d/%H/%M
   */
  pathFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * time
   */
  pathFormatType?: string;
  /**
   * @example
   * demo/
   */
  prefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @example
   * .json
   */
  suffix?: string;
  /**
   * @example
   * +0800
   */
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
      delaySeconds: 'delaySeconds',
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
      contentDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contentType: 'string',
      delaySec: 'number',
      delaySeconds: 'number',
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

export class IndexLine extends $tea.Model {
  /**
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @example
   * true
   */
  chn?: boolean;
  excludeKeys?: string[];
  includeKeys?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * consumergroup_log
   */
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
  /**
   * @example
   * test-group
   */
  externalName?: string;
  /**
   * @example
   * test-topic
   */
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

export class CreateDownloadJobRequestConfigurationSink extends $tea.Model {
  /**
   * @remarks
   * 对象存储桶
   * 
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * 压缩格式
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * 下载文件格式
   * 
   * This parameter is required.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * 下载使用roleArn
   * 
   * @example
   * acs:ram::0123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AliyunOSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionType: 'compressionType',
      contentType: 'contentType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionType: 'string',
      contentType: 'string',
      prefix: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadJobRequestConfiguration extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * This parameter is required.
   * 
   * @example
   * 1722406260
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * 是否启用powerSql
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * 查询语句
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   * 
   * This parameter is required.
   */
  sink?: CreateDownloadJobRequestConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * This parameter is required.
   * 
   * @example
   * 1722409860
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowInComplete: 'allowInComplete',
      fromTime: 'fromTime',
      logstore: 'logstore',
      powerSql: 'powerSql',
      query: 'query',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInComplete: 'boolean',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: CreateDownloadJobRequestConfigurationSink,
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexRequestLine extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable case sensitivity. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Specifies whether to include Chinese characters. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The excluded fields. You cannot specify both include_keys and exclude_keys.
   */
  excludeKeys?: string[];
  /**
   * @remarks
   * The included fields. You cannot specify both include_keys and exclude_keys.
   */
  includeKeys?: string[];
  /**
   * @remarks
   * The delimiters. You can specify a delimiter to delimit the content of a field value. For more information about delimiters, see Example.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The name of the Logstore to which service logs of the type are stored.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The type of service logs. Valid values:
   * 
   * *   consumergroup_log: the consumption delay logs of consumer groups.
   * *   logtail_alarm: the alert logs of Logtail.
   * *   operation_log: the operation logs.
   * *   logtail_profile: the collection logs of Logtail.
   * *   metering: the metering logs.
   * *   logtail_status: the status logs of Logtail.
   * *   scheduledsqlalert: the run logs of Scheduled SQL jobs.
   * *   etl_alert: the run logs of data transformation jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * consumergroup_log
   */
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
  /**
   * @remarks
   * The identifier of the external management system on which the machine group depends.
   * 
   * @example
   * testgroup
   */
  externalName?: string;
  /**
   * @remarks
   * The log topic of the machine group.
   * 
   * @example
   * testtopic
   */
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
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * auto-test
   */
  name?: string;
  /**
   * @remarks
   * The type of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
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
  /**
   * @remarks
   * The AccessKey ID of your account.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI5tFsHGGeYry*****1Sz
   */
  accessid?: string;
  /**
   * @remarks
   * The AccessKey secret of your account.
   * 
   * This parameter is required.
   * 
   * @example
   * GyviCLDVHkHrOztdkxuE6******Rp6
   */
  accesskey?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The fields that are associated to the external store.
   * 
   * This parameter is required.
   */
  columns?: CreateOssExternalStoreRequestParameterColumns[];
  /**
   * @remarks
   * The Object Storage Service (OSS) endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The names of the OSS objects that are associated to the external store.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The name of the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * meta
   */
  db?: string;
  /**
   * @remarks
   * The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * i-bp1b6c719dfa08exf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The password that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sfdsfldsfksfls****
   */
  password?: string;
  /**
   * @remarks
   * The internal or public port of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, and cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * The name of the database table in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * join_meta
   */
  table?: string;
  /**
   * @remarks
   * The username that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
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
  /**
   * @remarks
   * The shard ID.
   * 
   * @example
   * 0
   */
  shard?: number;
  /**
   * @remarks
   * The value of the checkpoint.
   * 
   * @example
   * MTUyNDE1NTM3OTM3MzkwODQ5Ng==
   */
  checkpoint?: string;
  /**
   * @remarks
   * The time when the checkpoint was last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1524224984800922
   */
  updateTime?: number;
  /**
   * @remarks
   * The consumer at the checkpoint.
   * 
   * @example
   * consumer_1
   */
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

export class GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig extends $tea.Model {
  /**
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @example
   * your-sls-logstore-ttl
   */
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

export class GetCollectionPolicyResponseBodyCollectionPolicyDataConfig extends $tea.Model {
  dataProject?: string;
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dataProject: 'dataProject',
      dataRegion: 'dataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProject: 'string',
      dataRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig extends $tea.Model {
  instanceIds?: string[];
  regions?: string[];
  /**
   * @example
   * all
   */
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

export class GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory extends $tea.Model {
  accountGroupType?: string;
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      accountGroupType: 'accountGroupType',
      members: 'members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountGroupType: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCollectionPolicyResponseBodyCollectionPolicy extends $tea.Model {
  centralizeConfig?: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig;
  /**
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  dataConfig?: GetCollectionPolicyResponseBodyCollectionPolicyDataConfig;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  internalPolicy?: boolean;
  policyConfig?: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig;
  /**
   * @example
   * your_log_policy
   */
  policyName?: string;
  policyUid?: string;
  /**
   * @example
   * oss
   */
  productCode?: string;
  resourceDirectory?: GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      internalPolicy: 'internalPolicy',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      policyUid: 'policyUid',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: GetCollectionPolicyResponseBodyCollectionPolicyCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: GetCollectionPolicyResponseBodyCollectionPolicyDataConfig,
      enabled: 'boolean',
      internalPolicy: 'boolean',
      policyConfig: GetCollectionPolicyResponseBodyCollectionPolicyPolicyConfig,
      policyName: 'string',
      policyUid: 'string',
      productCode: 'string',
      resourceDirectory: GetCollectionPolicyResponseBodyCollectionPolicyResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadJobResponseBodyConfigurationSink extends $tea.Model {
  /**
   * @remarks
   * 对象存储桶
   * 
   * @example
   * ali-test-oss-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * 压缩格式
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * 下载文件格式
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * 下载使用roleArn
   * 
   * @example
   * acs:ram::0123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @example
   * AliyunOSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionType: 'compressionType',
      contentType: 'contentType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionType: 'string',
      contentType: 'string',
      prefix: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadJobResponseBodyConfiguration extends $tea.Model {
  /**
   * @example
   * true
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * @example
   * 1722409860
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * 是否启用powerSql
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * 查询语句
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   */
  sink?: GetDownloadJobResponseBodyConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * @example
   * 1722411060
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowInComplete: 'allowInComplete',
      fromTime: 'fromTime',
      logstore: 'logstore',
      powerSql: 'powerSql',
      query: 'query',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInComplete: 'boolean',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: GetDownloadJobResponseBodyConfigurationSink,
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadJobResponseBodyExecutionDetails extends $tea.Model {
  /**
   * @example
   * EXSFGSDASDASDG123ASD
   */
  checkSum?: string;
  /**
   * @remarks
   * 下载错误信息
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * 下载执行时间
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * 下载结果链接
   * 
   * @example
   * https://xxx.csv.zst?xxx
   */
  filePath?: string;
  /**
   * @remarks
   * 下载文件大小
   * 
   * @example
   * 123456
   */
  fileSize?: number;
  /**
   * @remarks
   * 下载日志条数
   * 
   * @example
   * 123
   */
  logCount?: number;
  /**
   * @remarks
   * 下载进度
   * 
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      checkSum: 'checkSum',
      errorMessage: 'errorMessage',
      executeTime: 'executeTime',
      filePath: 'filePath',
      fileSize: 'fileSize',
      logCount: 'logCount',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSum: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      filePath: 'string',
      fileSize: 'number',
      logCount: 'number',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistogramsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The start time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned.
   * 
   * @example
   * 1409529600
   */
  from?: number;
  /**
   * @remarks
   * The end time of the subinterval. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the from parameter, but does not include the end time specified by the to parameter. If you specify the same value for the from and to parameters, the interval is invalid, and an error message is returned.
   * 
   * @example
   * 1409569200
   */
  to?: number;
  /**
   * @remarks
   * The number of logs that are generated within the subinterval.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the query and analysis results in the subinterval is complete. Valid values:
   * 
   * Complete: The query is successful, and the complete query and analysis results are returned.
   * 
   * Incomplete: The query is successful, but the query and analysis results are incomplete. To obtain the complete results, you must repeat the request.
   * 
   * @example
   * Complete
   */
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
  /**
   * @remarks
   * Indicates whether case sensitivity is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Indicates whether Chinese characters are included. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The excluded fields.
   */
  excludeKeys?: string[];
  /**
   * @remarks
   * The included fields.
   */
  includeKeys?: string[];
  /**
   * @remarks
   * The delimiters.
   */
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
  /**
   * @remarks
   * The SQL statement after | in the query statement.
   * 
   * @example
   * select *
   */
  aggQuery?: string;
  columnTypes?: string[];
  /**
   * @remarks
   * The number of rows that are returned.
   * 
   * @example
   * 1
   */
  count?: number;
  cpuCores?: number;
  cpuSec?: number;
  /**
   * @remarks
   * The amount of time that is consumed by the request. Unit: milliseconds.
   * 
   * @example
   * 5
   */
  elapsedMillisecond?: number;
  /**
   * @remarks
   * Indicates whether the query is an SQL query.
   * 
   * @example
   * false
   */
  hasSQL?: boolean;
  highlights?: LogContent[][];
  /**
   * @remarks
   * Indicates whether the returned result is accurate.
   * 
   * @example
   * true
   */
  isAccurate?: boolean;
  /**
   * @remarks
   * All keys in the query result.
   */
  keys?: string[];
  limited?: number;
  mode?: number;
  phraseQueryInfo?: GetLogsV2ResponseBodyMetaPhraseQueryInfo;
  /**
   * @remarks
   * The number of logs that are processed in the request.
   * 
   * @example
   * 10000
   */
  processedBytes?: number;
  /**
   * @remarks
   * The number of rows that are processed in the request.
   * 
   * @example
   * 10000
   */
  processedRows?: number;
  /**
   * @remarks
   * Indicates whether the query result is complete. Valid values:
   * 
   * *   Complete: The query was successful, and the complete result is returned.
   * *   Incomplete: The query was successful, but the query result is incomplete. To obtain the complete result, you must call the operation again.
   * 
   * @example
   * Complete
   */
  progress?: string;
  scanBytes?: number;
  /**
   * @remarks
   * The type of observable data.
   * 
   * @example
   * None
   */
  telementryType?: string;
  /**
   * @remarks
   * All terms in the query statement.
   */
  terms?: { [key: string]: any }[];
  /**
   * @remarks
   * The part before | in the query statement.
   * 
   * @example
   * *
   */
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

export class GetSqlInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * project_name
   */
  name?: string;
  /**
   * @example
   * 2
   */
  cu?: number;
  /**
   * @example
   * 1710230272
   */
  createTime?: number;
  /**
   * @example
   * 1710230272
   */
  updateTime?: number;
  /**
   * @example
   * true
   */
  useAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      cu: 'cu',
      createTime: 'createTime',
      updateTime: 'updateTime',
      useAsDefault: 'useAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      cu: 'number',
      createTime: 'number',
      updateTime: 'number',
      useAsDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoreViewIndexResponseBodyIndexes extends $tea.Model {
  index?: Index;
  /**
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @example
   * example-project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: Index,
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataCentralizeConfig extends $tea.Model {
  /**
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @example
   * your-sls-logstore-ttl
   */
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

export class ListCollectionPoliciesResponseBodyDataDataConfig extends $tea.Model {
  dataProject?: string;
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dataProject: 'dataProject',
      dataRegion: 'dataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProject: 'string',
      dataRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyDataPolicyConfig extends $tea.Model {
  instanceIds?: string[];
  regions?: string[];
  /**
   * @example
   * all
   */
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

export class ListCollectionPoliciesResponseBodyDataResourceDirectory extends $tea.Model {
  accountGroupType?: string;
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      accountGroupType: 'accountGroupType',
      members: 'members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountGroupType: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyData extends $tea.Model {
  centralizeConfig?: ListCollectionPoliciesResponseBodyDataCentralizeConfig;
  /**
   * @example
   * false
   */
  centralizeEnabled?: boolean;
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  dataConfig?: ListCollectionPoliciesResponseBodyDataDataConfig;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  internalPolicy?: boolean;
  policyConfig?: ListCollectionPoliciesResponseBodyDataPolicyConfig;
  /**
   * @example
   * your_log_policy
   */
  policyName?: string;
  policyUid?: string;
  /**
   * @example
   * oss
   */
  productCode?: string;
  resourceDirectory?: ListCollectionPoliciesResponseBodyDataResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      centralizeConfig: 'centralizeConfig',
      centralizeEnabled: 'centralizeEnabled',
      dataCode: 'dataCode',
      dataConfig: 'dataConfig',
      enabled: 'enabled',
      internalPolicy: 'internalPolicy',
      policyConfig: 'policyConfig',
      policyName: 'policyName',
      policyUid: 'policyUid',
      productCode: 'productCode',
      resourceDirectory: 'resourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralizeConfig: ListCollectionPoliciesResponseBodyDataCentralizeConfig,
      centralizeEnabled: 'boolean',
      dataCode: 'string',
      dataConfig: ListCollectionPoliciesResponseBodyDataDataConfig,
      enabled: 'boolean',
      internalPolicy: 'boolean',
      policyConfig: ListCollectionPoliciesResponseBodyDataPolicyConfig,
      policyName: 'string',
      policyUid: 'string',
      productCode: 'string',
      resourceDirectory: ListCollectionPoliciesResponseBodyDataResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyStatisticsPolicySourceList extends $tea.Model {
  policyName?: string;
  policyUid?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'policyName',
      policyUid: 'policyUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectionPoliciesResponseBodyStatistics extends $tea.Model {
  policySourceList?: ListCollectionPoliciesResponseBodyStatisticsPolicySourceList[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      policySourceList: 'policySourceList',
      productCode: 'productCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySourceList: { 'type': 'array', 'itemType': ListCollectionPoliciesResponseBodyStatisticsPolicySourceList },
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardResponseBodyDashboardItems extends $tea.Model {
  /**
   * @remarks
   * The dashboard ID. The ID must be unique in a project. Fuzzy search is supported. For example, if you enter da, all dashboards whose IDs start with da are queried.
   * 
   * @example
   * dashboard-1609294922657-434834
   */
  dashboardName?: string;
  /**
   * @remarks
   * The display name of the dashboard.
   * 
   * @example
   * data-ingest
   */
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

export class ListDownloadJobsResponseBodyResultsConfigurationSink extends $tea.Model {
  /**
   * @remarks
   * 对象存储桶
   * 
   * @example
   * ali-test-oss-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * 压缩格式
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * 下载文件格式
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * 下载使用roleArn
   * 
   * @example
   * acs:ram::123456:role/aliyunlogimportossrole
   */
  roleArn?: string;
  /**
   * @example
   * AliyunOSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionType: 'compressionType',
      contentType: 'contentType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionType: 'string',
      contentType: 'string',
      prefix: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResultsConfiguration extends $tea.Model {
  /**
   * @example
   * false
   */
  allowInComplete?: string;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * @example
   * 1722409260
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * 是否启用powerSql
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * 查询语句
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   */
  sink?: ListDownloadJobsResponseBodyResultsConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * @example
   * 1722411060
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowInComplete: 'allowInComplete',
      fromTime: 'fromTime',
      logstore: 'logstore',
      powerSql: 'powerSql',
      query: 'query',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInComplete: 'string',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: ListDownloadJobsResponseBodyResultsConfigurationSink,
      toTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResultsExecutionDetails extends $tea.Model {
  /**
   * @example
   * ETASFGASDASQWDasd
   */
  checkSum?: string;
  /**
   * @remarks
   * 下载错误信息
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * 下载执行时间
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * 下载结果链接
   * 
   * @example
   * https://sls-downloaded-xxxx.csv.gzip?Expiresxxx
   */
  filePath?: string;
  /**
   * @remarks
   * 下载文件大小
   * 
   * @example
   * 123456
   */
  fileSize?: number;
  /**
   * @remarks
   * 下载日志条数
   * 
   * @example
   * 123
   */
  logCount?: number;
  /**
   * @remarks
   * 下载进度
   * 
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      checkSum: 'checkSum',
      errorMessage: 'errorMessage',
      executeTime: 'executeTime',
      filePath: 'filePath',
      fileSize: 'fileSize',
      logCount: 'logCount',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSum: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      filePath: 'string',
      fileSize: 'number',
      logCount: 'number',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResults extends $tea.Model {
  /**
   * @remarks
   * 下载配置
   */
  configuration?: ListDownloadJobsResponseBodyResultsConfiguration;
  /**
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * 任务描述
   * 
   * @example
   * a download job
   */
  description?: string;
  /**
   * @remarks
   * 任务显示名称
   * 
   * @example
   * download-123
   */
  displayName?: string;
  /**
   * @remarks
   * 任务执行细节
   */
  executionDetails?: ListDownloadJobsResponseBodyResultsExecutionDetails;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      executionDetails: 'executionDetails',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListDownloadJobsResponseBodyResultsConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: ListDownloadJobsResponseBodyResultsExecutionDetails,
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that you want to use to filter resources. For example, if you set the key to `"test-key"`, only resources to which the key is added are returned.``
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to use to filter resources. If you set the value to null, resources are filtered based only on the key of the tag.
   * 
   * @example
   * value1
   * 
   * **if can be null:**
   * true
   */
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
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * ali-test-project
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value1
   */
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
  /**
   * @remarks
   * The key of the tag. The key must meet the following requirements:
   * 
   * *   The key must be `1 to 128` characters in length.
   * *   The key cannot contain `http://` or `https://`.
   * *   The key cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value must meet the following requirements:
   * 
   * *   The value must be `1 to 128` characters in length.
   * *   The value cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * value1
   */
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
  /**
   * @remarks
   * Specifies whether to enable case sensitivity. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * Specifies whether to include Chinese characters. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  chn?: boolean;
  /**
   * @remarks
   * The excluded fields. You cannot specify both include_keys and exclude_keys.
   */
  excludeKeys?: string[];
  /**
   * @remarks
   * The included fields. You cannot specify both include_keys and exclude_keys.
   */
  includeKeys?: string[];
  /**
   * @remarks
   * The delimiters that are used to split text.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The name of the Logstore to which you want to save service logs.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The type of service logs. Valid values:
   * 
   * *   consumergroup_log: the consumption delay logs of consumer groups.
   * *   logtail_alarm: the alert logs of Logtail.
   * *   operation_log: the operation logs.
   * *   logtail_profile: the collection logs of Logtail.
   * *   metering: the metering logs.
   * *   logtail_status: the status logs of Logtail.
   * *   scheduledsqlalert: the operational logs of Scheduled SQL jobs.
   * *   etl_alert: the operational logs of data transformation jobs.
   * 
   * This parameter is required.
   * 
   * @example
   * consumergroup_log
   */
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
  /**
   * @remarks
   * The identifier of the external management system on which the machine group depends. This parameter is empty by default.
   * 
   * @example
   * testgroup2
   */
  externalName?: string;
  /**
   * @remarks
   * The topic of the machine group. This parameter is empty by default.
   * 
   * @example
   * testtopic2
   */
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
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * varchar
   */
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
  /**
   * @remarks
   * The AccessKey ID of your account.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI5tFsHGGeYry*****1Sz
   */
  accessid?: string;
  /**
   * @remarks
   * The AccessKey secret of your account.
   * 
   * This parameter is required.
   * 
   * @example
   * GyviCLDVHkHrOztdkxuE6******Rp6
   */
  accesskey?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The fields that are associated to the external store.
   * 
   * This parameter is required.
   */
  columns?: UpdateOssExternalStoreRequestParameterColumns[];
  /**
   * @remarks
   * The Object Storage Service (OSS) endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The names of the OSS objects that are associated to the external store.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The name of the database in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * meta
   */
  db?: string;
  /**
   * @remarks
   * The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * i-bp1b6c719dfa08exf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The password that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sfdsfldsfksfls****
   */
  password?: string;
  /**
   * @remarks
   * The internal or public port of the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, and cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * The name of the database table in the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * join_meta
   */
  table?: string;
  /**
   * @remarks
   * The username that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
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

export class UpsertCollectionPolicyRequestCentralizeConfig extends $tea.Model {
  /**
   * @example
   * your-sls-logstore-in-beijing
   */
  destLogstore?: string;
  /**
   * @example
   * your-sls-project-in-beijing
   */
  destProject?: string;
  /**
   * @example
   * cn-beijing
   */
  destRegion?: string;
  /**
   * @example
   * your-sls-logstore-ttl
   */
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

export class UpsertCollectionPolicyRequestDataConfig extends $tea.Model {
  dataRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dataRegion: 'dataRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertCollectionPolicyRequestPolicyConfig extends $tea.Model {
  instanceIds?: string[];
  regions?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * all
   */
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

export class UpsertCollectionPolicyRequestResourceDirectory extends $tea.Model {
  accountGroupType?: string;
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      accountGroupType: 'accountGroupType',
      members: 'members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountGroupType: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._signatureAlgorithm = "v2";
    this._endpointRule = "central";
  }


  /**
   * Applies a Logtail configuration to a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyConfigToMachineGroupResponse
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
   * Applies a Logtail configuration to a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns ApplyConfigToMachineGroupResponse
   */
  async applyConfigToMachineGroup(project: string, machineGroup: string, configName: string): Promise<ApplyConfigToMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyConfigToMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  /**
   * Modifies the resource group of a resource.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
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

  /**
   * Modifies the resource group of a resource.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(project: string, request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(project, request, headers, runtime);
  }

  /**
   * Sends heartbeats to a server from a consumer.
   * 
   * @remarks
   * ### Usage notes
   * *   Connections between consumers and servers are established by sending heartbeats at regular intervals. If a server does not receive heartbeats from a consumer on schedule, the server deletes the consumer.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ConsumerGroupHeartBeatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsumerGroupHeartBeatResponse
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
   * Sends heartbeats to a server from a consumer.
   * 
   * @remarks
   * ### Usage notes
   * *   Connections between consumers and servers are established by sending heartbeats at regular intervals. If a server does not receive heartbeats from a consumer on schedule, the server deletes the consumer.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ConsumerGroupHeartBeatRequest
   * @returns ConsumerGroupHeartBeatResponse
   */
  async consumerGroupHeartBeat(project: string, logstore: string, consumerGroup: string, request: ConsumerGroupHeartBeatRequest): Promise<ConsumerGroupHeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consumerGroupHeartBeatWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * Updates the data consumption progress.
   * 
   * @remarks
   *   If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ConsumerGroupUpdateCheckPointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsumerGroupUpdateCheckPointResponse
   */
  async consumerGroupUpdateCheckPointWithOptions(project: string, logstore: string, consumerGroup: string, request: ConsumerGroupUpdateCheckPointRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConsumerGroupUpdateCheckPointResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumer)) {
      query["consumer"] = request.consumer;
    }

    if (!Util.isUnset(request.forceSuccess)) {
      query["forceSuccess"] = request.forceSuccess;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkpoint)) {
      body["checkpoint"] = request.checkpoint;
    }

    if (!Util.isUnset(request.shard)) {
      body["shard"] = request.shard;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConsumerGroupUpdateCheckPoint",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}?type=checkpoint`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ConsumerGroupUpdateCheckPointResponse>(await this.execute(params, req, runtime), new ConsumerGroupUpdateCheckPointResponse({}));
  }

  /**
   * Updates the data consumption progress.
   * 
   * @remarks
   *   If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ConsumerGroupUpdateCheckPointRequest
   * @returns ConsumerGroupUpdateCheckPointResponse
   */
  async consumerGroupUpdateCheckPoint(project: string, logstore: string, consumerGroup: string, request: ConsumerGroupUpdateCheckPointRequest): Promise<ConsumerGroupUpdateCheckPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consumerGroupUpdateCheckPointWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * CreateAlert
   * 
   * @param request - CreateAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertResponse
   */
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

  /**
   * CreateAlert
   * 
   * @param request - CreateAlertRequest
   * @returns CreateAlertResponse
   */
  async createAlert(project: string, request: CreateAlertRequest): Promise<CreateAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlertWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateAnnotationDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnotationDataSetResponse
   */
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

  /**
   * Creates a dataset.
   * 
   * @param request - CreateAnnotationDataSetRequest
   * @returns CreateAnnotationDataSetResponse
   */
  async createAnnotationDataSet(request: CreateAnnotationDataSetRequest): Promise<CreateAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnotationDataSetWithOptions(request, headers, runtime);
  }

  /**
   * Creates a tag table.
   * 
   * @param request - CreateAnnotationLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnotationLabelResponse
   */
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

  /**
   * Creates a tag table.
   * 
   * @param request - CreateAnnotationLabelRequest
   * @returns CreateAnnotationLabelResponse
   */
  async createAnnotationLabel(request: CreateAnnotationLabelRequest): Promise<CreateAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnotationLabelWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 100 Logtail configurations in a project.
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - CreateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigResponse
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
   * Creates a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 100 Logtail configurations in a project.
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - CreateConfigRequest
   * @returns CreateConfigResponse
   */
  async createConfig(project: string, request: CreateConfigRequest): Promise<CreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a consumer group for a specified Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   You can create up to 30 consumer groups for a Logstore.
   * *   Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDKs for Java. For more information, see [Consume log data](https://help.aliyun.com/document_detail/120035.html) and [Use consumer groups to consume data](https://help.aliyun.com/document_detail/28998.html).
   * 
   * @param request - CreateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
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
   * Creates a consumer group for a specified Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   You can create up to 30 consumer groups for a Logstore.
   * *   Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDKs for Java. For more information, see [Consume log data](https://help.aliyun.com/document_detail/120035.html) and [Use consumer groups to consume data](https://help.aliyun.com/document_detail/28998.html).
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(project: string, logstore: string, request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Creates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - CreateDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDashboardResponse
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
   * Creates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - CreateDashboardRequest
   * @returns CreateDashboardResponse
   */
  async createDashboard(project: string, request: CreateDashboardRequest): Promise<CreateDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDashboardWithOptions(project, request, headers, runtime);
  }

  /**
   * Binds a new custom domain name to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
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
   * Binds a new custom domain name to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(project: string, request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建下载任务
   * 
   * @param request - CreateDownloadJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadJobResponse
   */
  async createDownloadJobWithOptions(project: string, request: CreateDownloadJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDownloadJobResponse> {
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
      action: "CreateDownloadJob",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateDownloadJobResponse>(await this.execute(params, req, runtime), new CreateDownloadJobResponse({}));
  }

  /**
   * 创建下载任务
   * 
   * @param request - CreateDownloadJobRequest
   * @returns CreateDownloadJobResponse
   */
  async createDownloadJob(project: string, request: CreateDownloadJobRequest): Promise<CreateDownloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDownloadJobWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建数据加工任务
   * 
   * @param request - CreateETLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateETLResponse
   */
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

  /**
   * 创建数据加工任务
   * 
   * @param request - CreateETLRequest
   * @returns CreateETLResponse
   */
  async createETL(project: string, request: CreateETLRequest): Promise<CreateETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createETLWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates indexes for a Logstore.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
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
   * Creates indexes for a Logstore.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(project: string, logstore: string, request: CreateIndexRequest): Promise<CreateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Create a Logstore
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateLogStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogStoreResponse
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
   * Create a Logstore
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateLogStoreRequest
   * @returns CreateLogStoreResponse
   */
  async createLogStore(project: string, request: CreateLogStoreRequest): Promise<CreateLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogStoreWithOptions(project, request, headers, runtime);
  }

  /**
   * Enables the service log feature for a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateLoggingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoggingResponse
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
   * Enables the service log feature for a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateLoggingRequest
   * @returns CreateLoggingResponse
   */
  async createLogging(project: string, request: CreateLoggingRequest): Promise<CreateLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLoggingWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param request - CreateLogtailPipelineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogtailPipelineConfigResponse
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
   * Creates a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param request - CreateLogtailPipelineConfigRequest
   * @returns CreateLogtailPipelineConfigResponse
   */
  async createLogtailPipelineConfig(project: string, request: CreateLogtailPipelineConfigRequest): Promise<CreateLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogtailPipelineConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a machine group.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMachineGroupResponse
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
   * Creates a machine group.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateMachineGroupRequest
   * @returns CreateMachineGroupResponse
   */
  async createMachineGroup(project: string, request: CreateMachineGroupRequest): Promise<CreateMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMachineGroupWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建OSS投递任务
   * 
   * @param request - CreateOSSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSExportResponse
   */
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

  /**
   * 创建OSS投递任务
   * 
   * @param request - CreateOSSExportRequest
   * @returns CreateOSSExportResponse
   */
  async createOSSExport(project: string, request: CreateOSSExportRequest): Promise<CreateOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSExportWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建OSSHDFS投递任务
   * 
   * @param request - CreateOSSHDFSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSHDFSExportResponse
   */
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

  /**
   * 创建OSSHDFS投递任务
   * 
   * @param request - CreateOSSHDFSExportRequest
   * @returns CreateOSSHDFSExportResponse
   */
  async createOSSHDFSExport(project: string, request: CreateOSSHDFSExportRequest): Promise<CreateOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSHDFSExportWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建OSS导入任务
   * 
   * @param request - CreateOSSIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSIngestionResponse
   */
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

  /**
   * 创建OSS导入任务
   * 
   * @param request - CreateOSSIngestionRequest
   * @returns CreateOSSIngestionResponse
   */
  async createOSSIngestion(project: string, request: CreateOSSIngestionRequest): Promise<CreateOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSIngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates an Object Storage Service (OSS) external store.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateOssExternalStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOssExternalStoreResponse
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
   * Creates an Object Storage Service (OSS) external store.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateOssExternalStoreRequest
   * @returns CreateOssExternalStoreResponse
   */
  async createOssExternalStore(project: string, request: CreateOssExternalStoreRequest): Promise<CreateOssExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOssExternalStoreWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a project.
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
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

  /**
   * Creates a project.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * Creates an ApsaraDB RDS external store.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateRdsExternalStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRdsExternalStoreResponse
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
   * Creates an ApsaraDB RDS external store.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateRdsExternalStoreRequest
   * @returns CreateRdsExternalStoreResponse
   */
  async createRdsExternalStore(project: string, request: CreateRdsExternalStoreRequest): Promise<CreateRdsExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRdsExternalStoreWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateSavedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavedSearchResponse
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
   * Creates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateSavedSearchRequest
   * @returns CreateSavedSearchResponse
   */
  async createSavedSearch(project: string, request: CreateSavedSearchRequest): Promise<CreateSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSavedSearchWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建定时SQL任务
   * 
   * @param request - CreateScheduledSQLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledSQLResponse
   */
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

  /**
   * 创建定时SQL任务
   * 
   * @param request - CreateScheduledSQLRequest
   * @returns CreateScheduledSQLResponse
   */
  async createScheduledSQL(project: string, request: CreateScheduledSQLRequest): Promise<CreateScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledSQLWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建独享sql实例
   * 
   * @param request - CreateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstanceWithOptions(project: string, request: CreateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSqlInstanceResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cu)) {
      body["cu"] = request.cu;
    }

    if (!Util.isUnset(request.useAsDefault)) {
      body["useAsDefault"] = request.useAsDefault;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSqlInstance",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/sqlinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateSqlInstanceResponse>(await this.execute(params, req, runtime), new CreateSqlInstanceResponse({}));
  }

  /**
   * 创建独享sql实例
   * 
   * @param request - CreateSqlInstanceRequest
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstance(project: string, request: CreateSqlInstanceRequest): Promise<CreateSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlInstanceWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建StoreView
   * 
   * @param request - CreateStoreViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStoreViewResponse
   */
  async createStoreViewWithOptions(project: string, request: CreateStoreViewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateStoreViewResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    if (!Util.isUnset(request.stores)) {
      body["stores"] = request.stores;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateStoreViewResponse>(await this.execute(params, req, runtime), new CreateStoreViewResponse({}));
  }

  /**
   * 创建StoreView
   * 
   * @param request - CreateStoreViewRequest
   * @returns CreateStoreViewResponse
   */
  async createStoreView(project: string, request: CreateStoreViewRequest): Promise<CreateStoreViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStoreViewWithOptions(project, request, headers, runtime);
  }

  /**
   * 创建Ticket
   * 
   * @param request - CreateTicketRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: CreateTicketRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTicketResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessTokenExpirationTime)) {
      query["accessTokenExpirationTime"] = request.accessTokenExpirationTime;
    }

    if (!Util.isUnset(request.expirationTime)) {
      query["expirationTime"] = request.expirationTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
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

  /**
   * 创建Ticket
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTicketWithOptions(request, headers, runtime);
  }

  /**
   * 删除告警
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertResponse
   */
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

  /**
   * 删除告警
   * @returns DeleteAlertResponse
   */
  async deleteAlert(project: string, alertName: string): Promise<DeleteAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * Removes data from a dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnnotationDataResponse
   */
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

  /**
   * Removes data from a dataset.
   * @returns DeleteAnnotationDataResponse
   */
  async deleteAnnotationData(datasetId: string, annotationdataId: string): Promise<DeleteAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @remarks
   * You can delete a dataset only if no data exists in the dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnnotationDataSetResponse
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
   * Deletes a dataset.
   * 
   * @remarks
   * You can delete a dataset only if no data exists in the dataset.
   * @returns DeleteAnnotationDataSetResponse
   */
  async deleteAnnotationDataSet(datasetId: string): Promise<DeleteAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
   * Deletes a tag table.
   * 
   * @remarks
   * Only non-built-in tags can be deleted.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnnotationLabelResponse
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
   * Deletes a tag table.
   * 
   * @remarks
   * Only non-built-in tags can be deleted.
   * @returns DeleteAnnotationLabelResponse
   */
  async deleteAnnotationLabel(labelId: string): Promise<DeleteAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  /**
   * 通过调用DeleteCollectionPolicy删除配置的日志采集规则
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai) or Singapore region to call the operation.
   * 
   * @param request - DeleteCollectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCollectionPolicyResponse
   */
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
      bodyType: "none",
    });
    return $tea.cast<DeleteCollectionPolicyResponse>(await this.execute(params, req, runtime), new DeleteCollectionPolicyResponse({}));
  }

  /**
   * 通过调用DeleteCollectionPolicy删除配置的日志采集规则
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai) or Singapore region to call the operation.
   * 
   * @param request - DeleteCollectionPolicyRequest
   * @returns DeleteCollectionPolicyResponse
   */
  async deleteCollectionPolicy(policyName: string, request: DeleteCollectionPolicyRequest): Promise<DeleteCollectionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCollectionPolicyWithOptions(policyName, request, headers, runtime);
  }

  /**
   * Deletes a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigResponse
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
   * Deletes a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * @returns DeleteConfigResponse
   */
  async deleteConfig(project: string, configName: string): Promise<DeleteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
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
   * Deletes a consumer group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(project: string, logstore: string, consumerGroup: string): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(project, logstore, consumerGroup, headers, runtime);
  }

  /**
   * Deletes a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDashboardResponse
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
   * Deletes a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns DeleteDashboardResponse
   */
  async deleteDashboard(project: string, dashboardName: string): Promise<DeleteDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  /**
   * Deletes a custom domain name that is bound to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
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
   * Deletes a custom domain name that is bound to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteDomainResponse
   */
  async deleteDomain(project: string, domainName: string): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(project, domainName, headers, runtime);
  }

  /**
   * 删除下载任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDownloadJobResponse
   */
  async deleteDownloadJobWithOptions(project: string, downloadJobName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDownloadJobResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDownloadJob",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs/${downloadJobName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteDownloadJobResponse>(await this.execute(params, req, runtime), new DeleteDownloadJobResponse({}));
  }

  /**
   * 删除下载任务
   * @returns DeleteDownloadJobResponse
   */
  async deleteDownloadJob(project: string, downloadJobName: string): Promise<DeleteDownloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDownloadJobWithOptions(project, downloadJobName, headers, runtime);
  }

  /**
   * 删除数据加工任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteETLResponse
   */
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

  /**
   * 删除数据加工任务
   * @returns DeleteETLResponse
   */
  async deleteETL(project: string, etlName: string): Promise<DeleteETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Deletes an external store.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExternalStoreResponse
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
   * Deletes an external store.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteExternalStoreResponse
   */
  async deleteExternalStore(project: string, externalStoreName: string): Promise<DeleteExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExternalStoreWithOptions(project, externalStoreName, headers, runtime);
  }

  /**
   * Deletes an index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
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
   * Deletes an index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteIndexResponse
   */
  async deleteIndex(project: string, logstore: string): Promise<DeleteIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Deletes a Logstore, including all shards and indexes in the Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogStoreResponse
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
   * Deletes a Logstore, including all shards and indexes in the Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * @returns DeleteLogStoreResponse
   */
  async deleteLogStore(project: string, logstore: string): Promise<DeleteLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogStoreWithOptions(project, logstore, headers, runtime);
  }

  /**
   * 关闭项目的服务日志记录。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoggingResponse
   */
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

  /**
   * 关闭项目的服务日志记录。
   * @returns DeleteLoggingResponse
   */
  async deleteLogging(project: string): Promise<DeleteLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLoggingWithOptions(project, headers, runtime);
  }

  /**
   * Deletes a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogtailPipelineConfigResponse
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
   * Deletes a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * @returns DeleteLogtailPipelineConfigResponse
   */
  async deleteLogtailPipelineConfig(project: string, configName: string): Promise<DeleteLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogtailPipelineConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Deletes a machine group. If the Logtail configurations for log collection are applied to a machine group, the configurations are disassociated from the machine group after the machine group is deleted.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMachineGroupResponse
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
   * Deletes a machine group. If the Logtail configurations for log collection are applied to a machine group, the configurations are disassociated from the machine group after the machine group is deleted.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteMachineGroupResponse
   */
  async deleteMachineGroup(project: string, machineGroup: string): Promise<DeleteMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMachineGroupWithOptions(project, machineGroup, headers, runtime);
  }

  /**
   * Deletes an Object Storage Service (OSS) data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOSSExportResponse
   */
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

  /**
   * Deletes an Object Storage Service (OSS) data shipping job.
   * @returns DeleteOSSExportResponse
   */
  async deleteOSSExport(project: string, ossExportName: string): Promise<DeleteOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 删除OSSHDFS投递任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOSSHDFSExportResponse
   */
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

  /**
   * 删除OSSHDFS投递任务
   * @returns DeleteOSSHDFSExportResponse
   */
  async deleteOSSHDFSExport(project: string, ossExportName: string): Promise<DeleteOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 删除OSS导入任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOSSIngestionResponse
   */
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

  /**
   * 删除OSS导入任务
   * @returns DeleteOSSIngestionResponse
   */
  async deleteOSSIngestion(project: string, ossIngestionName: string): Promise<DeleteOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * 删除project
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
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

  /**
   * 删除project
   * @returns DeleteProjectResponse
   */
  async deleteProject(project: string): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(project, headers, runtime);
  }

  /**
   * Deletes a project policy.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectPolicyResponse
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
   * Deletes a project policy.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteProjectPolicyResponse
   */
  async deleteProjectPolicy(project: string): Promise<DeleteProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
   * Deletes a saved search.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSavedSearchResponse
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
   * Deletes a saved search.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteSavedSearchResponse
   */
  async deleteSavedSearch(project: string, savedsearchName: string): Promise<DeleteSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  /**
   * 删除定时SQL任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledSQLResponse
   */
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

  /**
   * 删除定时SQL任务
   * @returns DeleteScheduledSQLResponse
   */
  async deleteScheduledSQL(project: string, scheduledSQLName: string): Promise<DeleteScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * 删除StoreView
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStoreViewResponse
   */
  async deleteStoreViewWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteStoreViewResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteStoreViewResponse>(await this.execute(params, req, runtime), new DeleteStoreViewResponse({}));
  }

  /**
   * 删除StoreView
   * @returns DeleteStoreViewResponse
   */
  async deleteStoreView(project: string, name: string): Promise<DeleteStoreViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteStoreViewWithOptions(project, name, headers, runtime);
  }

  /**
   * 禁用告警
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAlertResponse
   */
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

  /**
   * 禁用告警
   * @returns DisableAlertResponse
   */
  async disableAlert(project: string, alertName: string): Promise<DisableAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * 禁用定时SQL任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableScheduledSQLResponse
   */
  async disableScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DisableScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}?action=disable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DisableScheduledSQLResponse>(await this.execute(params, req, runtime), new DisableScheduledSQLResponse({}));
  }

  /**
   * 禁用定时SQL任务
   * @returns DisableScheduledSQLResponse
   */
  async disableScheduledSQL(project: string, scheduledSQLName: string): Promise<DisableScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * 启用告警
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAlertResponse
   */
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

  /**
   * 启用告警
   * @returns EnableAlertResponse
   */
  async enableAlert(project: string, alertName: string): Promise<EnableAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * 启用定时SQL任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableScheduledSQLResponse
   */
  async enableScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "EnableScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}?action=enable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<EnableScheduledSQLResponse>(await this.execute(params, req, runtime), new EnableScheduledSQLResponse({}));
  }

  /**
   * 启用定时SQL任务
   * @returns EnableScheduledSQLResponse
   */
  async enableScheduledSQL(project: string, scheduledSQLName: string): Promise<EnableScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * GetAlert
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertResponse
   */
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

  /**
   * GetAlert
   * @returns GetAlertResponse
   */
  async getAlert(project: string, alertName: string): Promise<GetAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * Queries data in a dataset based on the unique identifier of the data.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationDataResponse
   */
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

  /**
   * Queries data in a dataset based on the unique identifier of the data.
   * @returns GetAnnotationDataResponse
   */
  async getAnnotationData(datasetId: string, annotationdataId: string): Promise<GetAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
   * Queries a dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationDataSetResponse
   */
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

  /**
   * Queries a dataset.
   * @returns GetAnnotationDataSetResponse
   */
  async getAnnotationDataSet(datasetId: string): Promise<GetAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
   * Queries a tag table by using a label ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationLabelResponse
   */
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

  /**
   * Queries a tag table by using a label ID.
   * @returns GetAnnotationLabelResponse
   */
  async getAnnotationLabel(labelId: string): Promise<GetAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  /**
   * Queries the Logtail configurations that are applied to a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppliedConfigsResponse
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
   * Queries the Logtail configurations that are applied to a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetAppliedConfigsResponse
   */
  async getAppliedConfigs(project: string, machineGroup: string): Promise<GetAppliedConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppliedConfigsWithOptions(project, machineGroup, headers, runtime);
  }

  /**
   * Queries the machine groups to which a Logtail configuration is bound.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppliedMachineGroupsResponse
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
   * Queries the machine groups to which a Logtail configuration is bound.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetAppliedMachineGroupsResponse
   */
  async getAppliedMachineGroups(project: string, configName: string): Promise<GetAppliedMachineGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppliedMachineGroupsWithOptions(project, configName, headers, runtime);
  }

  /**
   * Queries the checkpoints of a shard from which data is consumed by a consumer group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetCheckPointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCheckPointResponse
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
   * Queries the checkpoints of a shard from which data is consumed by a consumer group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetCheckPointRequest
   * @returns GetCheckPointResponse
   */
  async getCheckPoint(project: string, logstore: string, consumerGroup: string, request: GetCheckPointRequest): Promise<GetCheckPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCheckPointWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * 调用GetCollectionPolicy获取对应的规则
   * 
   * @param request - GetCollectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCollectionPolicyResponse
   */
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

  /**
   * 调用GetCollectionPolicy获取对应的规则
   * 
   * @param request - GetCollectionPolicyRequest
   * @returns GetCollectionPolicyResponse
   */
  async getCollectionPolicy(policyName: string, request: GetCollectionPolicyRequest): Promise<GetCollectionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCollectionPolicyWithOptions(policyName, request, headers, runtime);
  }

  /**
   * Queries the details of a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigResponse
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
   * Queries the details of a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * @returns GetConfigResponse
   */
  async getConfig(project: string, configName: string): Promise<GetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Queries the contextual logs of a specified log.
   * 
   * @remarks
   *   You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetContextLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextLogsResponse
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
   * Queries the contextual logs of a specified log.
   * 
   * @remarks
   *   You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetContextLogsRequest
   * @returns GetContextLogsResponse
   */
  async getContextLogs(project: string, logstore: string, request: GetContextLogsRequest): Promise<GetContextLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContextLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries a cursor based on a point in time.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The following content describes the relationships among a cursor, project, Logstore, and shard:
   *     *   A project can have multiple Logstores.
   *     *   A Logstore can have multiple shards.
   *     *   You can use a cursor to obtain a log in a shard.
   * 
   * @param request - GetCursorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCursorResponse
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
   * Queries a cursor based on a point in time.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The following content describes the relationships among a cursor, project, Logstore, and shard:
   *     *   A project can have multiple Logstores.
   *     *   A Logstore can have multiple shards.
   *     *   You can use a cursor to obtain a log in a shard.
   * 
   * @param request - GetCursorRequest
   * @returns GetCursorResponse
   */
  async getCursor(project: string, logstore: string, shardId: string, request: GetCursorRequest): Promise<GetCursorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCursorWithOptions(project, logstore, shardId, request, headers, runtime);
  }

  /**
   * Queries the server time of a cursor.
   * 
   * @param request - GetCursorTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCursorTimeResponse
   */
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

  /**
   * Queries the server time of a cursor.
   * 
   * @param request - GetCursorTimeRequest
   * @returns GetCursorTimeResponse
   */
  async getCursorTime(project: string, logstore: string, shardId: string, request: GetCursorTimeRequest): Promise<GetCursorTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCursorTimeWithOptions(project, logstore, shardId, request, headers, runtime);
  }

  /**
   * Queries a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDashboardResponse
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
   * Queries a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns GetDashboardResponse
   */
  async getDashboard(project: string, dashboardName: string): Promise<GetDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  /**
   * 获取下载任务信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDownloadJobResponse
   */
  async getDownloadJobWithOptions(project: string, downloadJobName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDownloadJobResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDownloadJob",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs/${downloadJobName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDownloadJobResponse>(await this.execute(params, req, runtime), new GetDownloadJobResponse({}));
  }

  /**
   * 获取下载任务信息
   * @returns GetDownloadJobResponse
   */
  async getDownloadJob(project: string, downloadJobName: string): Promise<GetDownloadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDownloadJobWithOptions(project, downloadJobName, headers, runtime);
  }

  /**
   * 获取数据加工任务信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetETLResponse
   */
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

  /**
   * 获取数据加工任务信息
   * @returns GetETLResponse
   */
  async getETL(project: string, etlName: string): Promise<GetETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Queries the details of an external store.
   * 
   * @remarks
   *   The supported data sources of external stores include Object Storage Service (OSS) buckets and ApsaraDB RDS for MySQL databases in a virtual private cloud (VPC).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExternalStoreResponse
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
   * Queries the details of an external store.
   * 
   * @remarks
   *   The supported data sources of external stores include Object Storage Service (OSS) buckets and ApsaraDB RDS for MySQL databases in a virtual private cloud (VPC).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetExternalStoreResponse
   */
  async getExternalStore(project: string, externalStoreName: string): Promise<GetExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExternalStoreWithOptions(project, externalStoreName, headers, runtime);
  }

  /**
   * Queries the distribution of logs that meet the specified search conditions in a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The time range is evenly divided into subintervals in the responses. If the time range that is specified in the request remains unchanged, the subintervals in the responses also remain unchanged.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
   *     *   Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds.
   *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
   *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * > Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:__receive_time__ field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * *   Simple Log Service provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](https://help.aliyun.com/document_detail/462234.html).
   * 
   * @param request - GetHistogramsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistogramsResponse
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
   * Queries the distribution of logs that meet the specified search conditions in a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The time range is evenly divided into subintervals in the responses. If the time range that is specified in the request remains unchanged, the subintervals in the responses also remain unchanged.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
   *     *   Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds.
   *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
   *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * > Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:__receive_time__ field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * *   Simple Log Service provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](https://help.aliyun.com/document_detail/462234.html).
   * 
   * @param request - GetHistogramsRequest
   * @returns GetHistogramsResponse
   */
  async getHistograms(project: string, logstore: string, request: GetHistogramsRequest): Promise<GetHistogramsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistogramsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries the index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexResponse
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
   * Queries the index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetIndexResponse
   */
  async getIndex(project: string, logstore: string): Promise<GetIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries the details of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogStoreResponse
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
   * Queries the details of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetLogStoreResponse
   */
  async getLogStore(project: string, logstore: string): Promise<GetLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreWithOptions(project, logstore, headers, runtime);
  }

  /**
   * 获取LogStore计量模式
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogStoreMeteringModeResponse
   */
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

  /**
   * 获取LogStore计量模式
   * @returns GetLogStoreMeteringModeResponse
   */
  async getLogStoreMeteringMode(project: string, logstore: string): Promise<GetLogStoreMeteringModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreMeteringModeWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries the service log configuration of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoggingResponse
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
   * Queries the service log configuration of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetLoggingResponse
   */
  async getLogging(project: string): Promise<GetLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLoggingWithOptions(project, headers, runtime);
  }

  /**
   * Queries the logs of a Logstore in a project.
   * 
   * @remarks
   * ### Usage notes
   * > Simple Log Service allows you to create a Scheduled SQL job. For more information, see [Create a Scheduled SQL job](https://help.aliyun.com/document_detail/286457.html).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot forecast the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the x-log-progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
   *         Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. This type of log is usually generated in common scenarios. 
   *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
   *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * > Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:**receive_time** field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * *   Simple Log Service provides examples on how to call the GetLogs operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Examples of calling the GetLogs operation by using Simple Log Service SDK for Java](https://help.aliyun.com/document_detail/407683.html) and [Examples of calling the GetLogs operation by using Simple Log Service SDK for Python](https://help.aliyun.com/document_detail/407684.html).
   * 
   * @param request - GetLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogsResponse
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
   * Queries the logs of a Logstore in a project.
   * 
   * @remarks
   * ### Usage notes
   * > Simple Log Service allows you to create a Scheduled SQL job. For more information, see [Create a Scheduled SQL job](https://help.aliyun.com/document_detail/286457.html).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot forecast the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the x-log-progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
   *         Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. This type of log is usually generated in common scenarios. 
   *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
   *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * > Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:**receive_time** field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * *   Simple Log Service provides examples on how to call the GetLogs operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Examples of calling the GetLogs operation by using Simple Log Service SDK for Java](https://help.aliyun.com/document_detail/407683.html) and [Examples of calling the GetLogs operation by using Simple Log Service SDK for Python](https://help.aliyun.com/document_detail/407684.html).
   * 
   * @param request - GetLogsRequest
   * @returns GetLogsResponse
   */
  async getLogs(project: string, logstore: string, request: GetLogsRequest): Promise<GetLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries the raw log data in a Logstore of a project. The returned result shows the raw log data in a specific time range. The returned results are compressed and transmitted.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times you must call this API operation to obtain a complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation again to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log. The latency of the query varies based on the type of the log. Simple Log Service classifies logs into the following types based on log timestamps:
   * 1.  1.  Real-time data: The difference between the time record in the log and the current server time is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as real-time data. This type of log is usually generated in common scenarios.
   * 2.  2.  Historical data: The difference between the time record in the log and the current server time is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as historical data. This type of log is usually generated in data backfill scenarios. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * 
   * @param request - GetLogsV2Request
   * @param headers - GetLogsV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogsV2Response
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
   * Queries the raw log data in a Logstore of a project. The returned result shows the raw log data in a specific time range. The returned results are compressed and transmitted.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times you must call this API operation to obtain a complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation again to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log. The latency of the query varies based on the type of the log. Simple Log Service classifies logs into the following types based on log timestamps:
   * 1.  1.  Real-time data: The difference between the time record in the log and the current server time is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as real-time data. This type of log is usually generated in common scenarios.
   * 2.  2.  Historical data: The difference between the time record in the log and the current server time is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and the server received the log at 12:05:00, September 25, 2014 (UTC), the server processes the log as historical data. This type of log is usually generated in data backfill scenarios. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * 
   * @param request - GetLogsV2Request
   * @returns GetLogsV2Response
   */
  async getLogsV2(project: string, logstore: string, request: GetLogsV2Request): Promise<GetLogsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetLogsV2Headers({ });
    return await this.getLogsV2WithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries the details of a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogtailPipelineConfigResponse
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
   * Queries the details of a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * @returns GetLogtailPipelineConfigResponse
   */
  async getLogtailPipelineConfig(project: string, configName: string): Promise<GetLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogtailPipelineConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * GetMLServiceResults
   * 
   * @param request - GetMLServiceResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMLServiceResultsResponse
   */
  async getMLServiceResultsWithOptions(serviceName: string, request: GetMLServiceResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMLServiceResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowBuiltin)) {
      query["allowBuiltin"] = request.allowBuiltin;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
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

  /**
   * GetMLServiceResults
   * 
   * @param request - GetMLServiceResultsRequest
   * @returns GetMLServiceResultsResponse
   */
  async getMLServiceResults(serviceName: string, request: GetMLServiceResultsRequest): Promise<GetMLServiceResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMLServiceResultsWithOptions(serviceName, request, headers, runtime);
  }

  /**
   * Queries the details of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMachineGroupResponse
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
   * Queries the details of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetMachineGroupResponse
   */
  async getMachineGroup(project: string, machineGroup: string): Promise<GetMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMachineGroupWithOptions(project, machineGroup, headers, runtime);
  }

  /**
   * 获取 MetricStore 计量模式
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetricStoreMeteringModeResponse
   */
  async getMetricStoreMeteringModeWithOptions(project: string, metricStore: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMetricStoreMeteringModeResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMetricStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${metricStore}/meteringmode`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMetricStoreMeteringModeResponse>(await this.execute(params, req, runtime), new GetMetricStoreMeteringModeResponse({}));
  }

  /**
   * 获取 MetricStore 计量模式
   * @returns GetMetricStoreMeteringModeResponse
   */
  async getMetricStoreMeteringMode(project: string, metricStore: string): Promise<GetMetricStoreMeteringModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricStoreMeteringModeWithOptions(project, metricStore, headers, runtime);
  }

  /**
   * 获取OSS投递任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSExportResponse
   */
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

  /**
   * 获取OSS投递任务
   * @returns GetOSSExportResponse
   */
  async getOSSExport(project: string, ossExportName: string): Promise<GetOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Get OSSHDFS Exports
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSHDFSExportResponse
   */
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

  /**
   * Get OSSHDFS Exports
   * @returns GetOSSHDFSExportResponse
   */
  async getOSSHDFSExport(project: string, ossExportName: string): Promise<GetOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 获取oss导入任务信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSIngestionResponse
   */
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

  /**
   * 获取oss导入任务信息
   * @returns GetOSSIngestionResponse
   */
  async getOSSIngestion(project: string, ossIngestionName: string): Promise<GetOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Queries the details of a project.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
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
   * Queries the details of a project.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetProjectResponse
   */
  async getProject(project: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(project, headers, runtime);
  }

  /**
   * Queries logs in a project. You can use this operation to query logs at the project level.
   * 
   * @remarks
   * ### Usage notes
   * *   You can use the query parameter to specify a standard SQL statement.
   * *   You must specify a project in the domain name of the request.
   * *   You must specify a Logstore in the FROM clause of the SQL statement. A Logstore can be used as an SQL table.
   * *   You must specify a time range in the SQL statement by using the __date__ parameter or __time__ parameter. The value of the __date__ parameter is a timestamp, and the value of the __time__ parameter is an integer. The unit of the __time__ parameter is seconds.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetProjectLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectLogsResponse
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
   * Queries logs in a project. You can use this operation to query logs at the project level.
   * 
   * @remarks
   * ### Usage notes
   * *   You can use the query parameter to specify a standard SQL statement.
   * *   You must specify a project in the domain name of the request.
   * *   You must specify a Logstore in the FROM clause of the SQL statement. A Logstore can be used as an SQL table.
   * *   You must specify a time range in the SQL statement by using the __date__ parameter or __time__ parameter. The value of the __date__ parameter is a timestamp, and the value of the __time__ parameter is an integer. The unit of the __time__ parameter is seconds.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetProjectLogsRequest
   * @returns GetProjectLogsResponse
   */
  async getProjectLogs(project: string, request: GetProjectLogsRequest): Promise<GetProjectLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectLogsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a project policy.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectPolicyResponse
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
   * Queries a project policy.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns GetProjectPolicyResponse
   */
  async getProjectPolicy(project: string): Promise<GetProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
   * Queries a saved search.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavedSearchResponse
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
   * Queries a saved search.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetSavedSearchResponse
   */
  async getSavedSearch(project: string, savedsearchName: string): Promise<GetSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  /**
   * 查看定时SQL任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledSQLResponse
   */
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

  /**
   * 查看定时SQL任务
   * @returns GetScheduledSQLResponse
   */
  async getScheduledSQL(project: string, scheduledSQLName: string): Promise<GetScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * getSlsService
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSlsServiceResponse
   */
  async getSlsServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSlsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSlsService",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/slsservice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSlsServiceResponse>(await this.execute(params, req, runtime), new GetSlsServiceResponse({}));
  }

  /**
   * getSlsService
   * @returns GetSlsServiceResponse
   */
  async getSlsService(): Promise<GetSlsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSlsServiceWithOptions(headers, runtime);
  }

  /**
   * 查询独享sql实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstanceWithOptions(project: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSqlInstanceResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSqlInstance",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/sqlinstance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $tea.cast<GetSqlInstanceResponse>(await this.execute(params, req, runtime), new GetSqlInstanceResponse({}));
  }

  /**
   * 查询独享sql实例
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstance(project: string): Promise<GetSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlInstanceWithOptions(project, headers, runtime);
  }

  /**
   * 查询StoreView
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoreViewResponse
   */
  async getStoreViewWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStoreViewResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetStoreViewResponse>(await this.execute(params, req, runtime), new GetStoreViewResponse({}));
  }

  /**
   * 查询StoreView
   * @returns GetStoreViewResponse
   */
  async getStoreView(project: string, name: string): Promise<GetStoreViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoreViewWithOptions(project, name, headers, runtime);
  }

  /**
   * 查询StoreView索引
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoreViewIndexResponse
   */
  async getStoreViewIndexWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStoreViewIndexResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetStoreViewIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}/index`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetStoreViewIndexResponse>(await this.execute(params, req, runtime), new GetStoreViewIndexResponse({}));
  }

  /**
   * 查询StoreView索引
   * @returns GetStoreViewIndexResponse
   */
  async getStoreViewIndex(project: string, name: string): Promise<GetStoreViewIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoreViewIndexWithOptions(project, name, headers, runtime);
  }

  /**
   * 查询告警列表
   * 
   * @param request - ListAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertsResponse
   */
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

  /**
   * 查询告警列表
   * 
   * @param request - ListAlertsRequest
   * @returns ListAlertsResponse
   */
  async listAlerts(project: string, request: ListAlertsRequest): Promise<ListAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries data in datasets.
   * 
   * @param request - ListAnnotationDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationDataResponse
   */
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

  /**
   * Queries data in datasets.
   * 
   * @param request - ListAnnotationDataRequest
   * @returns ListAnnotationDataResponse
   */
  async listAnnotationData(datasetId: string, request: ListAnnotationDataRequest): Promise<ListAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationDataWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Queries a list of datasets.
   * 
   * @param request - ListAnnotationDataSetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationDataSetsResponse
   */
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

  /**
   * Queries a list of datasets.
   * 
   * @param request - ListAnnotationDataSetsRequest
   * @returns ListAnnotationDataSetsResponse
   */
  async listAnnotationDataSets(request: ListAnnotationDataSetsRequest): Promise<ListAnnotationDataSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationDataSetsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of tag tables.
   * 
   * @param request - ListAnnotationLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationLabelsResponse
   */
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

  /**
   * Queries a list of tag tables.
   * 
   * @param request - ListAnnotationLabelsRequest
   * @returns ListAnnotationLabelsResponse
   */
  async listAnnotationLabels(request: ListAnnotationLabelsRequest): Promise<ListAnnotationLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationLabelsWithOptions(request, headers, runtime);
  }

  /**
   * 通过调用ListCollectionPolicies接口查看配置的日志采集规则
   * 
   * @param request - ListCollectionPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectionPoliciesResponse
   */
  async listCollectionPoliciesWithOptions(request: ListCollectionPoliciesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCollectionPoliciesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.centralProject)) {
      query["centralProject"] = request.centralProject;
    }

    if (!Util.isUnset(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    if (!Util.isUnset(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
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

  /**
   * 通过调用ListCollectionPolicies接口查看配置的日志采集规则
   * 
   * @param request - ListCollectionPoliciesRequest
   * @returns ListCollectionPoliciesResponse
   */
  async listCollectionPolicies(request: ListCollectionPoliciesRequest): Promise<ListCollectionPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCollectionPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * Queries all Logtail configurations in a project.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigResponse
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
   * Queries all Logtail configurations in a project.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListConfigRequest
   * @returns ListConfigResponse
   */
  async listConfig(project: string, request: ListConfigRequest): Promise<ListConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries all consumer groups of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupResponse
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
   * Queries all consumer groups of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns ListConsumerGroupResponse
   */
  async listConsumerGroup(project: string, logstore: string): Promise<ListConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries a list of dashboards.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardResponse
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
   * Queries a list of dashboards.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListDashboardRequest
   * @returns ListDashboardResponse
   */
  async listDashboard(project: string, request: ListDashboardRequest): Promise<ListDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the custom domain names that are bound to projects.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Only one custom domain name can be bound to each project.
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
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
   * Queries the custom domain names that are bound to projects.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Only one custom domain name can be bound to each project.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(project: string, request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(project, request, headers, runtime);
  }

  /**
   * 列举下载任务
   * 
   * @param request - ListDownloadJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownloadJobsResponse
   */
  async listDownloadJobsWithOptions(project: string, request: ListDownloadJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDownloadJobsResponse> {
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
      action: "ListDownloadJobs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDownloadJobsResponse>(await this.execute(params, req, runtime), new ListDownloadJobsResponse({}));
  }

  /**
   * 列举下载任务
   * 
   * @param request - ListDownloadJobsRequest
   * @returns ListDownloadJobsResponse
   */
  async listDownloadJobs(project: string, request: ListDownloadJobsRequest): Promise<ListDownloadJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDownloadJobsWithOptions(project, request, headers, runtime);
  }

  /**
   * 列出数据加工任务
   * 
   * @param request - ListETLsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListETLsResponse
   */
  async listETLsWithOptions(project: string, request: ListETLsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListETLsResponse> {
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

  /**
   * 列出数据加工任务
   * 
   * @param request - ListETLsRequest
   * @returns ListETLsResponse
   */
  async listETLs(project: string, request: ListETLsRequest): Promise<ListETLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listETLsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries all Logstores or Logstores that match specific conditions in a project.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListLogStores`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*`|
   * 
   * @param request - ListLogStoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogStoresResponse
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
   * Queries all Logstores or Logstores that match specific conditions in a project.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListLogStores`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*`|
   * 
   * @param request - ListLogStoresRequest
   * @returns ListLogStoresResponse
   */
  async listLogStores(project: string, request: ListLogStoresRequest): Promise<ListLogStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogStoresWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of Logtail pipeline configurations that meet the specified conditions.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param request - ListLogtailPipelineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogtailPipelineConfigResponse
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
   * Queries a list of Logtail pipeline configurations that meet the specified conditions.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param request - ListLogtailPipelineConfigRequest
   * @returns ListLogtailPipelineConfigResponse
   */
  async listLogtailPipelineConfig(project: string, request: ListLogtailPipelineConfigRequest): Promise<ListLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogtailPipelineConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the machine groups of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachineGroupResponse
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
   * Queries the machine groups of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachineGroupRequest
   * @returns ListMachineGroupResponse
   */
  async listMachineGroup(project: string, request: ListMachineGroupRequest): Promise<ListMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMachineGroupWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of machines that are connected to Simple Log Service in a specified machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachinesResponse
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
   * Queries a list of machines that are connected to Simple Log Service in a specified machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachinesRequest
   * @returns ListMachinesResponse
   */
  async listMachines(project: string, machineGroup: string, request: ListMachinesRequest): Promise<ListMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMachinesWithOptions(project, machineGroup, request, headers, runtime);
  }

  /**
   * 列出OSS投递任务
   * 
   * @param request - ListOSSExportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOSSExportsResponse
   */
  async listOSSExportsWithOptions(project: string, request: ListOSSExportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOSSExportsResponse> {
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

  /**
   * 列出OSS投递任务
   * 
   * @param request - ListOSSExportsRequest
   * @returns ListOSSExportsResponse
   */
  async listOSSExports(project: string, request: ListOSSExportsRequest): Promise<ListOSSExportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSExportsWithOptions(project, request, headers, runtime);
  }

  /**
   * 列举OSSHDFS投递任务
   * 
   * @param request - ListOSSHDFSExportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOSSHDFSExportsResponse
   */
  async listOSSHDFSExportsWithOptions(project: string, request: ListOSSHDFSExportsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOSSHDFSExportsResponse> {
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

  /**
   * 列举OSSHDFS投递任务
   * 
   * @param request - ListOSSHDFSExportsRequest
   * @returns ListOSSHDFSExportsResponse
   */
  async listOSSHDFSExports(project: string, request: ListOSSHDFSExportsRequest): Promise<ListOSSHDFSExportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSHDFSExportsWithOptions(project, request, headers, runtime);
  }

  /**
   * 列出oss导入任务
   * 
   * @param request - ListOSSIngestionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOSSIngestionsResponse
   */
  async listOSSIngestionsWithOptions(project: string, request: ListOSSIngestionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOSSIngestionsResponse> {
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

  /**
   * 列出oss导入任务
   * 
   * @param request - ListOSSIngestionsRequest
   * @returns ListOSSIngestionsResponse
   */
  async listOSSIngestions(project: string, request: ListOSSIngestionsRequest): Promise<ListOSSIngestionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSIngestionsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the projects that meet specified conditions.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(request: ListProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fetchQuota)) {
      query["fetchQuota"] = request.fetchQuota;
    }

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
   * Queries the projects that meet specified conditions.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: ListProjectRequest): Promise<ListProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of saved searches.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListSavedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSavedSearchResponse
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
   * Queries a list of saved searches.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListSavedSearchRequest
   * @returns ListSavedSearchResponse
   */
  async listSavedSearch(project: string, request: ListSavedSearchRequest): Promise<ListSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSavedSearchWithOptions(project, request, headers, runtime);
  }

  /**
   * 列举定时SQL任务
   * 
   * @param request - ListScheduledSQLsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledSQLsResponse
   */
  async listScheduledSQLsWithOptions(project: string, request: ListScheduledSQLsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListScheduledSQLsResponse> {
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

  /**
   * 列举定时SQL任务
   * 
   * @param request - ListScheduledSQLsRequest
   * @returns ListScheduledSQLsResponse
   */
  async listScheduledSQLs(project: string, request: ListScheduledSQLsRequest): Promise<ListScheduledSQLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledSQLsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of shards in a Logstore.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShardsResponse
   */
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

  /**
   * Queries a list of shards in a Logstore.
   * @returns ListShardsResponse
   */
  async listShards(project: string, logstore: string): Promise<ListShardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShardsWithOptions(project, logstore, headers, runtime);
  }

  /**
   * 查询StoreView列表
   * 
   * @param request - ListStoreViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStoreViewsResponse
   */
  async listStoreViewsWithOptions(project: string, request: ListStoreViewsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStoreViewsResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.storeType)) {
      query["storeType"] = request.storeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStoreViews",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListStoreViewsResponse>(await this.execute(params, req, runtime), new ListStoreViewsResponse({}));
  }

  /**
   * 查询StoreView列表
   * 
   * @param request - ListStoreViewsRequest
   * @returns ListStoreViewsResponse
   */
  async listStoreViews(project: string, request: ListStoreViewsRequest): Promise<ListStoreViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStoreViewsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of tags for one or more resources. You can query tags for resources by resource type or filter resources by tag. Each tag is a key-value pair.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListTagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
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
   * Queries a list of tags for one or more resources. You can query tags for resources by resource type or filter resources by tag. Each tag is a key-value pair.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListTagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 合并两个相邻的readwrite状态的Shards。在参数中指定一个shardID，服务端自动找相邻的下一个Shard进行合并。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MergeShardResponse
   */
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

  /**
   * 合并两个相邻的readwrite状态的Shards。在参数中指定一个shardID，服务端自动找相邻的下一个Shard进行合并。
   * @returns MergeShardResponse
   */
  async mergeShard(project: string, logstore: string, shard: string): Promise<MergeShardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.mergeShardWithOptions(project, logstore, shard, headers, runtime);
  }

  /**
   * openSlsService
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenSlsServiceResponse
   */
  async openSlsServiceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenSlsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "OpenSlsService",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/slsservice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<OpenSlsServiceResponse>(await this.execute(params, req, runtime), new OpenSlsServiceResponse({}));
  }

  /**
   * openSlsService
   * @returns OpenSlsServiceResponse
   */
  async openSlsService(): Promise<OpenSlsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openSlsServiceWithOptions(headers, runtime);
  }

  /**
   * Adds data to a dataset for storage.
   * 
   * @param request - PutAnnotationDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutAnnotationDataResponse
   */
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

  /**
   * Adds data to a dataset for storage.
   * 
   * @param request - PutAnnotationDataRequest
   * @returns PutAnnotationDataResponse
   */
  async putAnnotationData(datasetId: string, request: PutAnnotationDataRequest): Promise<PutAnnotationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putAnnotationDataWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Creates a project policy.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Alibaba Cloud Simple Log Service allows you to configure a project policy to authorize other users to access the specified Log Service resources.
   *     *   You must configure a project policy based on policy syntax. Before you configure a project policy, you must be familiar with the Action, Resource, and Condition parameters. For more information, see [RAM](https://help.aliyun.com/document_detail/128139.html).
   *     *   If you set the Principal element to an asterisk (\\*) and do not configure the Condition element when you configure a project policy, the policy applies to all users except for the project owner. If you set the Principal element to an asterisk (\\*) and configure the Condition element when you configure a project policy, the policy applies to all users including the project owner.
   *     *   You can configure multiple project policies for a project. The total size of the policies cannot exceed 16 KB.
   * 
   * @param request - PutProjectPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutProjectPolicyResponse
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
   * Creates a project policy.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Alibaba Cloud Simple Log Service allows you to configure a project policy to authorize other users to access the specified Log Service resources.
   *     *   You must configure a project policy based on policy syntax. Before you configure a project policy, you must be familiar with the Action, Resource, and Condition parameters. For more information, see [RAM](https://help.aliyun.com/document_detail/128139.html).
   *     *   If you set the Principal element to an asterisk (\\*) and do not configure the Condition element when you configure a project policy, the policy applies to all users except for the project owner. If you set the Principal element to an asterisk (\\*) and configure the Condition element when you configure a project policy, the policy applies to all users including the project owner.
   *     *   You can configure multiple project policies for a project. The total size of the policies cannot exceed 16 KB.
   * 
   * @param request - PutProjectPolicyRequest
   * @returns PutProjectPolicyResponse
   */
  async putProjectPolicy(project: string, request: PutProjectPolicyRequest): Promise<PutProjectPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectPolicyWithOptions(project, request, headers, runtime);
  }

  /**
   * 设置project传输加速状态
   * 
   * @param request - PutProjectTransferAccelerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutProjectTransferAccelerationResponse
   */
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

  /**
   * 设置project传输加速状态
   * 
   * @param request - PutProjectTransferAccelerationRequest
   * @returns PutProjectTransferAccelerationResponse
   */
  async putProjectTransferAcceleration(project: string, request: PutProjectTransferAccelerationRequest): Promise<PutProjectTransferAccelerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectTransferAccelerationWithOptions(project, request, headers, runtime);
  }

  /**
   * Sends multiple logs to Simple Log Service in one request.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * *   You can call this operation to collect logs from web pages or clients.
   * *   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
   * *   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
   * *   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
   * 
   * @param request - PutWebtrackingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutWebtrackingResponse
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
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutWebtrackingResponse>(await this.execute(params, req, runtime), new PutWebtrackingResponse({}));
  }

  /**
   * Sends multiple logs to Simple Log Service in one request.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * *   You can call this operation to collect logs from web pages or clients.
   * *   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
   * *   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
   * *   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
   * 
   * @param request - PutWebtrackingRequest
   * @returns PutWebtrackingResponse
   */
  async putWebtracking(project: string, logstoreName: string, request: PutWebtrackingRequest): Promise<PutWebtrackingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putWebtrackingWithOptions(project, logstoreName, request, headers, runtime);
  }

  /**
   * queryMLServiceResults
   * 
   * @deprecated OpenAPI QueryMLServiceResults is deprecated
   * 
   * @param request - QueryMLServiceResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMLServiceResultsResponse
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
   * queryMLServiceResults
   * 
   * @deprecated OpenAPI QueryMLServiceResults is deprecated
   * 
   * @param request - QueryMLServiceResultsRequest
   * @returns QueryMLServiceResultsResponse
   */
  // Deprecated
  async queryMLServiceResults(serviceName: string, request: QueryMLServiceResultsRequest): Promise<QueryMLServiceResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMLServiceResultsWithOptions(serviceName, request, headers, runtime);
  }

  /**
   * 刷新token
   * 
   * @param request - RefreshTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshTokenResponse
   */
  async refreshTokenWithOptions(request: RefreshTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefreshTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessTokenExpirationTime)) {
      query["accessTokenExpirationTime"] = request.accessTokenExpirationTime;
    }

    if (!Util.isUnset(request.ticket)) {
      query["ticket"] = request.ticket;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshToken",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/token/refresh`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshTokenResponse>(await this.execute(params, req, runtime), new RefreshTokenResponse({}));
  }

  /**
   * 刷新token
   * 
   * @param request - RefreshTokenRequest
   * @returns RefreshTokenResponse
   */
  async refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshTokenWithOptions(request, headers, runtime);
  }

  /**
   * Removes a Logtail configuration from a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveConfigFromMachineGroupResponse
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
   * Removes a Logtail configuration from a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns RemoveConfigFromMachineGroupResponse
   */
  async removeConfigFromMachineGroup(project: string, machineGroup: string, configName: string): Promise<RemoveConfigFromMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeConfigFromMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  /**
   * Splits a shard in the readwrite state.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
   * 
   * @param request - SplitShardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitShardResponse
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
   * Splits a shard in the readwrite state.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
   * 
   * @param request - SplitShardRequest
   * @returns SplitShardResponse
   */
  async splitShard(project: string, logstore: string, shard: string, request: SplitShardRequest): Promise<SplitShardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitShardWithOptions(project, logstore, shard, request, headers, runtime);
  }

  /**
   * 启动数据加工任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartETLResponse
   */
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

  /**
   * 启动数据加工任务
   * @returns StartETLResponse
   */
  async startETL(project: string, etlName: string): Promise<StartETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * 启动OSS投递任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOSSExportResponse
   */
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

  /**
   * 启动OSS投递任务
   * @returns StartOSSExportResponse
   */
  async startOSSExport(project: string, ossExportName: string): Promise<StartOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 启动OSSHDFS投递任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOSSHDFSExportResponse
   */
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

  /**
   * 启动OSSHDFS投递任务
   * @returns StartOSSHDFSExportResponse
   */
  async startOSSHDFSExport(project: string, ossExportName: string): Promise<StartOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 启动OSS导入任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOSSIngestionResponse
   */
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

  /**
   * 启动OSS导入任务
   * @returns StartOSSIngestionResponse
   */
  async startOSSIngestion(project: string, ossIngestionName: string): Promise<StartOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * 停止数据加工任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopETLResponse
   */
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

  /**
   * 停止数据加工任务
   * @returns StopETLResponse
   */
  async stopETL(project: string, etlName: string): Promise<StopETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * 停止OSS投递任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOSSExportResponse
   */
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

  /**
   * 停止OSS投递任务
   * @returns StopOSSExportResponse
   */
  async stopOSSExport(project: string, ossExportName: string): Promise<StopOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 停止OSSHDFS投递任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOSSHDFSExportResponse
   */
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

  /**
   * 停止OSSHDFS投递任务
   * @returns StopOSSHDFSExportResponse
   */
  async stopOSSHDFSExport(project: string, ossExportName: string): Promise<StopOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 停止OSS导入任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOSSIngestionResponse
   */
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

  /**
   * 停止OSS导入任务
   * @returns StopOSSIngestionResponse
   */
  async stopOSSIngestion(project: string, ossIngestionName: string): Promise<StopOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Creates and adds tags to a resource. You can add tags only to projects.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:TagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
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
   * Creates and adds tags to a resource. You can add tags only to projects.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:TagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Detaches one or more tags from a resource. You can detach tags only from Simple Log Service projects. You can detach multiple or all tags from a Simple Log Service project at a time.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UntagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
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
   * Detaches one or more tags from a resource. You can detach tags only from Simple Log Service projects. You can detach multiple or all tags from a Simple Log Service project at a time.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UntagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 更新告警
   * 
   * @param request - UpdateAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertResponse
   */
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

  /**
   * 更新告警
   * 
   * @param request - UpdateAlertRequest
   * @returns UpdateAlertResponse
   */
  async updateAlert(project: string, alertName: string, request: UpdateAlertRequest): Promise<UpdateAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertWithOptions(project, alertName, request, headers, runtime);
  }

  /**
   * Updates a dataset.
   * 
   * @param request - UpdateAnnotationDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnnotationDataSetResponse
   */
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

  /**
   * Updates a dataset.
   * 
   * @param request - UpdateAnnotationDataSetRequest
   * @returns UpdateAnnotationDataSetResponse
   */
  async updateAnnotationDataSet(datasetId: string, request: UpdateAnnotationDataSetRequest): Promise<UpdateAnnotationDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationDataSetWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Updates a tag table.
   * 
   * @remarks
   * You can update only the names of the tags in a tag set.
   * 
   * @param request - UpdateAnnotationLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnnotationLabelResponse
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
   * Updates a tag table.
   * 
   * @remarks
   * You can update only the names of the tags in a tag set.
   * 
   * @param request - UpdateAnnotationLabelRequest
   * @returns UpdateAnnotationLabelResponse
   */
  async updateAnnotationLabel(request: UpdateAnnotationLabelRequest): Promise<UpdateAnnotationLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationLabelWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - UpdateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigResponse
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
   * Modifies a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - UpdateConfigRequest
   * @returns UpdateConfigResponse
   */
  async updateConfig(project: string, configName: string, request: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigWithOptions(project, configName, request, headers, runtime);
  }

  /**
   * Updates the attributes of a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerGroupResponse
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
   * Updates the attributes of a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(project: string, logstore: string, consumerGroup: string, request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * Updates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDashboardResponse
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
   * Updates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateDashboardRequest
   * @returns UpdateDashboardResponse
   */
  async updateDashboard(project: string, dashboardName: string, request: UpdateDashboardRequest): Promise<UpdateDashboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDashboardWithOptions(project, dashboardName, request, headers, runtime);
  }

  /**
   * 更新数据加工任务
   * 
   * @param request - UpdateETLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateETLResponse
   */
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

  /**
   * 更新数据加工任务
   * 
   * @param request - UpdateETLRequest
   * @returns UpdateETLResponse
   */
  async updateETL(project: string, etlName: string, request: UpdateETLRequest): Promise<UpdateETLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateETLWithOptions(project, etlName, request, headers, runtime);
  }

  /**
   * Updates the indexes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIndexResponse
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
   * Updates the indexes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateIndexRequest
   * @returns UpdateIndexResponse
   */
  async updateIndex(project: string, logstore: string, request: UpdateIndexRequest): Promise<UpdateIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIndexWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Updates the attributes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * *   You can call the UpdateLogStore operation to change only the time-to-live (TTL) attribute.
   * 
   * @param request - UpdateLogStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreResponse
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
   * Updates the attributes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * *   You can call the UpdateLogStore operation to change only the time-to-live (TTL) attribute.
   * 
   * @param request - UpdateLogStoreRequest
   * @returns UpdateLogStoreResponse
   */
  async updateLogStore(project: string, logstore: string, request: UpdateLogStoreRequest): Promise<UpdateLogStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Changes the billing mode of a Logstore.
   * 
   * @param request - UpdateLogStoreMeteringModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreMeteringModeResponse
   */
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

  /**
   * Changes the billing mode of a Logstore.
   * 
   * @param request - UpdateLogStoreMeteringModeRequest
   * @returns UpdateLogStoreMeteringModeResponse
   */
  async updateLogStoreMeteringMode(project: string, logstore: string, request: UpdateLogStoreMeteringModeRequest): Promise<UpdateLogStoreMeteringModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreMeteringModeWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Updates the service log configurations of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateLoggingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoggingResponse
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
   * Updates the service log configurations of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateLoggingRequest
   * @returns UpdateLoggingResponse
   */
  async updateLogging(project: string, request: UpdateLoggingRequest): Promise<UpdateLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLoggingWithOptions(project, request, headers, runtime);
  }

  /**
   * Updates a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param request - UpdateLogtailPipelineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogtailPipelineConfigResponse
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
   * Updates a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param request - UpdateLogtailPipelineConfigRequest
   * @returns UpdateLogtailPipelineConfigResponse
   */
  async updateLogtailPipelineConfig(project: string, configName: string, request: UpdateLogtailPipelineConfigRequest): Promise<UpdateLogtailPipelineConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogtailPipelineConfigWithOptions(project, configName, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMachineGroupResponse
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
   * Modifies the configuration of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupRequest
   * @returns UpdateMachineGroupResponse
   */
  async updateMachineGroup(project: string, groupName: string, request: UpdateMachineGroupRequest): Promise<UpdateMachineGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMachineGroupWithOptions(project, groupName, request, headers, runtime);
  }

  /**
   * Modifies the machines in a machine group. You can add machine to or remove machines from the machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMachineGroupMachineResponse
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
   * Modifies the machines in a machine group. You can add machine to or remove machines from the machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupMachineRequest
   * @returns UpdateMachineGroupMachineResponse
   */
  async updateMachineGroupMachine(project: string, machineGroup: string, request: UpdateMachineGroupMachineRequest): Promise<UpdateMachineGroupMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMachineGroupMachineWithOptions(project, machineGroup, request, headers, runtime);
  }

  /**
   * 更新 MetricStore 计量模式
   * 
   * @param request - UpdateMetricStoreMeteringModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetricStoreMeteringModeResponse
   */
  async updateMetricStoreMeteringModeWithOptions(project: string, metricStore: string, request: UpdateMetricStoreMeteringModeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMetricStoreMeteringModeResponse> {
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
      action: "UpdateMetricStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${metricStore}/meteringmode`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateMetricStoreMeteringModeResponse>(await this.execute(params, req, runtime), new UpdateMetricStoreMeteringModeResponse({}));
  }

  /**
   * 更新 MetricStore 计量模式
   * 
   * @param request - UpdateMetricStoreMeteringModeRequest
   * @returns UpdateMetricStoreMeteringModeResponse
   */
  async updateMetricStoreMeteringMode(project: string, metricStore: string, request: UpdateMetricStoreMeteringModeRequest): Promise<UpdateMetricStoreMeteringModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMetricStoreMeteringModeWithOptions(project, metricStore, request, headers, runtime);
  }

  /**
   * 更新OSS投递任务
   * 
   * @param request - UpdateOSSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOSSExportResponse
   */
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

  /**
   * 更新OSS投递任务
   * 
   * @param request - UpdateOSSExportRequest
   * @returns UpdateOSSExportResponse
   */
  async updateOSSExport(project: string, ossExportName: string, request: UpdateOSSExportRequest): Promise<UpdateOSSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSExportWithOptions(project, ossExportName, request, headers, runtime);
  }

  /**
   * 更新OSSHDFS投递任务
   * 
   * @param request - UpdateOSSHDFSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOSSHDFSExportResponse
   */
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

  /**
   * 更新OSSHDFS投递任务
   * 
   * @param request - UpdateOSSHDFSExportRequest
   * @returns UpdateOSSHDFSExportResponse
   */
  async updateOSSHDFSExport(project: string, ossExportName: string, request: UpdateOSSHDFSExportRequest): Promise<UpdateOSSHDFSExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSHDFSExportWithOptions(project, ossExportName, request, headers, runtime);
  }

  /**
   * 更新oss导入任务
   * 
   * @param request - UpdateOSSIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOSSIngestionResponse
   */
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

  /**
   * 更新oss导入任务
   * 
   * @param request - UpdateOSSIngestionRequest
   * @returns UpdateOSSIngestionResponse
   */
  async updateOSSIngestion(project: string, ossIngestionName: string, request: UpdateOSSIngestionRequest): Promise<UpdateOSSIngestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSIngestionWithOptions(project, ossIngestionName, request, headers, runtime);
  }

  /**
   * Updates an Object Storage Service (OSS) external store.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateOssExternalStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOssExternalStoreResponse
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
   * Updates an Object Storage Service (OSS) external store.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateOssExternalStoreRequest
   * @returns UpdateOssExternalStoreResponse
   */
  async updateOssExternalStore(project: string, externalStoreName: string, request: UpdateOssExternalStoreRequest): Promise<UpdateOssExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOssExternalStoreWithOptions(project, externalStoreName, request, headers, runtime);
  }

  /**
   * Updates a project.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
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
   * Updates a project.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(project: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(project, request, headers, runtime);
  }

  /**
   * Updates an ApsaraDB RDS external store.
   * 
   * @remarks
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateRdsExternalStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRdsExternalStoreResponse
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
   * Updates an ApsaraDB RDS external store.
   * 
   * @remarks
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateRdsExternalStoreRequest
   * @returns UpdateRdsExternalStoreResponse
   */
  async updateRdsExternalStore(project: string, externalStoreName: string, request: UpdateRdsExternalStoreRequest): Promise<UpdateRdsExternalStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRdsExternalStoreWithOptions(project, externalStoreName, request, headers, runtime);
  }

  /**
   * Updates a saved search.
   * 
   * @param request - UpdateSavedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSavedSearchResponse
   */
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

  /**
   * Updates a saved search.
   * 
   * @param request - UpdateSavedSearchRequest
   * @returns UpdateSavedSearchResponse
   */
  async updateSavedSearch(project: string, savedsearchName: string, request: UpdateSavedSearchRequest): Promise<UpdateSavedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSavedSearchWithOptions(project, savedsearchName, request, headers, runtime);
  }

  /**
   * 更新定时SQL任务
   * 
   * @param request - UpdateScheduledSQLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledSQLResponse
   */
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

  /**
   * 更新定时SQL任务
   * 
   * @param request - UpdateScheduledSQLRequest
   * @returns UpdateScheduledSQLResponse
   */
  async updateScheduledSQL(project: string, scheduledSQLName: string, request: UpdateScheduledSQLRequest): Promise<UpdateScheduledSQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateScheduledSQLWithOptions(project, scheduledSQLName, request, headers, runtime);
  }

  /**
   * 更新独享sql实例
   * 
   * @param request - UpdateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceResponse
   */
  async updateSqlInstanceWithOptions(project: string, request: UpdateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSqlInstanceResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cu)) {
      body["cu"] = request.cu;
    }

    if (!Util.isUnset(request.useAsDefault)) {
      body["useAsDefault"] = request.useAsDefault;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSqlInstance",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/sqlinstance`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateSqlInstanceResponse>(await this.execute(params, req, runtime), new UpdateSqlInstanceResponse({}));
  }

  /**
   * 更新独享sql实例
   * 
   * @param request - UpdateSqlInstanceRequest
   * @returns UpdateSqlInstanceResponse
   */
  async updateSqlInstance(project: string, request: UpdateSqlInstanceRequest): Promise<UpdateSqlInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceWithOptions(project, request, headers, runtime);
  }

  /**
   * 更新StoreView
   * 
   * @param request - UpdateStoreViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStoreViewResponse
   */
  async updateStoreViewWithOptions(project: string, name: string, request: UpdateStoreViewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateStoreViewResponse> {
    Util.validateModel(request);
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    if (!Util.isUnset(request.stores)) {
      body["stores"] = request.stores;
    }

    let req = new $OpenApi.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateStoreViewResponse>(await this.execute(params, req, runtime), new UpdateStoreViewResponse({}));
  }

  /**
   * 更新StoreView
   * 
   * @param request - UpdateStoreViewRequest
   * @returns UpdateStoreViewResponse
   */
  async updateStoreView(project: string, name: string, request: UpdateStoreViewRequest): Promise<UpdateStoreViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateStoreViewWithOptions(project, name, request, headers, runtime);
  }

  /**
   * 调用UpsertCollectionPolicy接口创建或更新日志采集规则
   * 
   * @param request - UpsertCollectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertCollectionPolicyResponse
   */
  async upsertCollectionPolicyWithOptions(request: UpsertCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpsertCollectionPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.centralizeConfig)) {
      body["centralizeConfig"] = request.centralizeConfig;
    }

    if (!Util.isUnset(request.centralizeEnabled)) {
      body["centralizeEnabled"] = request.centralizeEnabled;
    }

    if (!Util.isUnset(request.dataCode)) {
      body["dataCode"] = request.dataCode;
    }

    if (!Util.isUnset(request.dataConfig)) {
      body["dataConfig"] = request.dataConfig;
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

    if (!Util.isUnset(request.resourceDirectory)) {
      body["resourceDirectory"] = request.resourceDirectory;
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
      bodyType: "none",
    });
    return $tea.cast<UpsertCollectionPolicyResponse>(await this.execute(params, req, runtime), new UpsertCollectionPolicyResponse({}));
  }

  /**
   * 调用UpsertCollectionPolicy接口创建或更新日志采集规则
   * 
   * @param request - UpsertCollectionPolicyRequest
   * @returns UpsertCollectionPolicyResponse
   */
  async upsertCollectionPolicy(request: UpsertCollectionPolicyRequest): Promise<UpsertCollectionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertCollectionPolicyWithOptions(request, headers, runtime);
  }

}
