// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataQualityEvaluationTask extends $tea.Model {
  /**
   * @example
   * 201
   */
  dataSourceId?: number;
  /**
   * @example
   * This is a daily run data quality evaluation plan.
   */
  description?: string;
  hooks?: DataQualityEvaluationTaskHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 质量校验任务
   */
  name?: string;
  notifications?: DataQualityEvaluationTaskNotifications[];
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  target?: DataQualityEvaluationTaskTarget;
  /**
   * @example
   * 10
   */
  tenantId?: number;
  trigger?: DataQualityEvaluationTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      tenantId: 'TenantId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': DataQualityEvaluationTaskHooks },
      id: 'number',
      name: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotifications },
      projectId: 'number',
      runtimeConf: 'string',
      target: DataQualityEvaluationTaskTarget,
      tenantId: 'number',
      trigger: DataQualityEvaluationTaskTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstance extends $tea.Model {
  /**
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * Passed
   */
  status?: string;
  task?: DataQualityEvaluationTaskInstanceTask;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      status: 'Status',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      status: 'string',
      task: DataQualityEvaluationTaskInstanceTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResult extends $tea.Model {
  details?: DataQualityResultDetails[];
  /**
   * @example
   * 10001
   */
  id?: number;
  rule?: DataQualityResultRule;
  /**
   * @example
   * [   {     "gender": "male",     "_count": 100   }, {     "gender": "female",     "_count": 100   } ]
   */
  sample?: string;
  /**
   * @example
   * Passed
   */
  status?: string;
  /**
   * @example
   * 20001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      id: 'Id',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DataQualityResultDetails },
      id: 'number',
      rule: DataQualityResultRule,
      sample: 'string',
      status: 'string',
      taskInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRule extends $tea.Model {
  checkingConfig?: DataQualityRuleCheckingConfig;
  /**
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  errorHandlers?: DataQualityRuleErrorHandlers[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 表不能为空
   */
  name?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  samplingConfig?: DataQualityRuleSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: DataQualityRuleTarget;
  /**
   * @example
   * system::user_defined
   */
  templateCode?: string;
  /**
   * @example
   * 1
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: DataQualityRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': DataQualityRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityRuleSamplingConfig,
      severity: 'string',
      target: DataQualityRuleTarget,
      templateCode: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the process.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606087c-9ac4-43f0-83a8-0b5ced21XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55D786C9-DD57-524D-884C-C5239278XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class AbolishDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbolishDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbolishDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateProjectToResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace with which you want to associate the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateProjectToResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
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

export class AssociateProjectToResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateProjectToResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateProjectToResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDataSourceRequest extends $tea.Model {
  /**
   * @example
   * demo_holo_datasource
   */
  cloneDataSourceName?: string;
  /**
   * @example
   * 16036
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cloneDataSourceName: 'CloneDataSourceName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneDataSourceName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 19715
   */
  id?: number;
  /**
   * @example
   * FCD583B9-346B-5E75-82C1-4A7C192C48DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleRequest extends $tea.Model {
  /**
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * 任务ID，是告警规则关联的任务ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DIJobId?: number;
  /**
   * @remarks
   * 描述。
   */
  description?: string;
  /**
   * @remarks
   * 告警规则是否启用，默认不开启。
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 告警指标类型，可选的枚举值：
   * - Heartbeat（任务状态报警）
   * - FailoverCount（failover次数报警）
   * - Delay（任务延迟报警）
   * 
   * This parameter is required.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alartRule
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notificationSettings?: CreateDIAlarmRuleRequestNotificationSettings;
  /**
   * @remarks
   * This parameter is required.
   */
  triggerConditions?: CreateDIAlarmRuleRequestTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
      notificationSettings: CreateDIAlarmRuleRequestNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestTriggerConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleShrinkRequest extends $tea.Model {
  /**
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * 任务ID，是告警规则关联的任务ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DIJobId?: number;
  /**
   * @remarks
   * 描述。
   */
  description?: string;
  /**
   * @remarks
   * 告警规则是否启用，默认不开启。
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 告警指标类型，可选的枚举值：
   * - Heartbeat（任务状态报警）
   * - FailoverCount（failover次数报警）
   * - Delay（任务延迟报警）
   * 
   * This parameter is required.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alartRule
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notificationSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  triggerConditionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettingsShrink: 'NotificationSettings',
      triggerConditionsShrink: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
      notificationSettingsShrink: 'string',
      triggerConditionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 1
   */
  DIAlarmRuleId?: string;
  /**
   * @example
   * C636A747-7E4E-594D-94CD-2B4F8A9A9A63
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDIAlarmRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDIAlarmRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  jobSettings?: CreateDIJobRequestJobSettings;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettings: CreateDIJobRequestJobSettings,
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: CreateDIJobRequestResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobShrinkRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  jobSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettingsShrink: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettingsShrink: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      sourceDataSourceSettingsShrink: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettingsShrink: 'string',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettingsShrink: 'string',
      migrationType: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      sourceDataSourceSettingsShrink: 'string',
      sourceDataSourceType: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * 11792
   */
  DIJobId?: number;
  /**
   * @example
   * 4F6AB6B3-41FB-5EBB-AFB2-0C98D49DA2BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * this is a holo datasource
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo_holo_datasource
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 22130
   */
  id?: number;
  /**
   * @example
   * B62EC203-B39E-5DC1-B5B8-EB3C61707009
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceSharedRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 144544
   */
  dataSourceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * 1107550004253538
   */
  sharedUser?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 106560
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      sharedUser: 'SharedUser',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      envType: 'string',
      sharedUser: 'string',
      targetProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceSharedRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 105412
   */
  id?: number;
  /**
   * @example
   * 46F594E6-84AB-5FA5-8144-6F3D149961E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceSharedRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataSourceSharedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDataSourceSharedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the process.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of entities to which you want to apply the process.
   * 
   * >  A process can be applied to only a single entity and its child entities. If you specify multiple entities in the array, the process is applied only to the first entity in the array and its child entities. Make sure that the array in your request contains only one element. Extra elements will be ignored.
   * 
   * This parameter is required.
   */
  objectIds?: string[];
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * Specifies whether to deploy or undeploy the entity. Valid values:
   * 
   * *   Online: deploys the entity.
   * *   Offline: undeploys the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIds: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the process.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of entities to which you want to apply the process.
   * 
   * >  A process can be applied to only a single entity and its child entities. If you specify multiple entities in the array, the process is applied only to the first entity in the array and its child entities. Make sure that the array in your request contains only one element. Extra elements will be ignored.
   * 
   * This parameter is required.
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * Specifies whether to deploy or undeploy the entity. Valid values:
   * 
   * *   Online: deploys the entity.
   * *   Offline: undeploys the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIdsShrink: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIdsShrink: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the UDF. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE49C88D-5BEE-5ADD-8B8C-C4BBC0D7XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eb870033-74c8-4b1b-9664-04c4e7cc3465
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      resourceGroupId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkResponseBody extends $tea.Model {
  /**
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The container ID. If you want to create a node in a container, you must configure this parameter to specify the container. The container can be a workflow or a node in a container.
   * 
   * >  If you configure this parameter, the path field defined in FlowSpec becomes invalid.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  containerId?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * The scene of the node. This parameter determines the location (the DataStudio pane or the Manual pane) of the node. You can set this parameter to DATAWORKS_MANUAL_WORKFLOW only if the ContainerId parameter is configured and the container specified by ContainerId is a manually triggered workflow.
   * 
   * Valid values:
   * 
   * *   DATAWORKS_PROJECT
   * *   DATAWORKS_MANUAL_WORKFLOW
   * *   DATAWORKS_MANUAL_TASK
   * 
   * This parameter is required.
   * 
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  /**
   * @remarks
   * The FlowSpec field information about the node. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      projectId: 'ProjectId',
      scene: 'Scene',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      projectId: 'string',
      scene: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: CreateProjectRequestAliyunResourceTags[];
  description?: string;
  /**
   * @example
   * false
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * true
   */
  devRoleDisabled?: boolean;
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
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      name: 'Name',
      paiTaskEnabled: 'PaiTaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': CreateProjectRequestAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      name: 'string',
      paiTaskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectShrinkRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTagsShrink?: string;
  description?: string;
  /**
   * @example
   * false
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * true
   */
  devRoleDisabled?: boolean;
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
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      name: 'Name',
      paiTaskEnabled: 'PaiTaskEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTagsShrink: 'string',
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      name: 'string',
      paiTaskEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  /**
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24054
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleCodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodes: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24054
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodesShrink: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodesShrink: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectMemberResponseBody extends $tea.Model {
  /**
   * @example
   * 2B2F0B26-9253-5780-B6DB-F1A886D44D6F
   */
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

export class CreateProjectMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the file resource. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5B97987-66EA-5563-9599-A2752292XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eb870033-74c8-4b1b-9664-04c4e7cc3465
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @example
   * 创建用于普通任务的通用资源组
   */
  remark?: string;
  /**
   * @example
   * 2
   */
  spec?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      name: 'Name',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      remark: 'Remark',
      spec: 'Spec',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientToken: 'string',
      name: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      remark: 'string',
      spec: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  resourceGroupOrder?: CreateResourceGroupResponseBodyResourceGroupOrder;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupOrder: 'ResourceGroupOrder',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupOrder: CreateResourceGroupResponseBodyResourceGroupOrder,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  networkId?: number;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      networkId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  routeId?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeId: 'RouteId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeId: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow/).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0EF298E5-0940-5AC7-9CB0-65025070XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIAlarmRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 2
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 1
   */
  DIJobId?: number;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIAlarmRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class DeleteDIAlarmRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDIAlarmRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDIAlarmRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11126
   */
  DIJobId?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * D33D4A51-5845-579A-B4BA-FAADD0F83D53
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  /**
   * @example
   * 1234
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * B56432E0-2112-5C97-88D0-AA0AE5C75C74
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceSharedRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22127
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceSharedRuleResponseBody extends $tea.Model {
  /**
   * @example
   * 64B-587A-8CED-969E1973887FXXX-TT
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteDataSourceSharedRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceSharedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSourceSharedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88198F19-A36B-52A9-AE44-4518A688XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class DeleteFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1E54497-5122-505E-91C6-BAC14980XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true\\
   * false
   * 
   * @example
   * true
   */
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

export class DeleteNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
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

export class DeleteProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 534752
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectMemberResponseBody extends $tea.Model {
  /**
   * @example
   * 1FF0465F-209C-5964-8F30-FAF21B677CC6
   */
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

export class DeleteProjectMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88198F19-A36B-52A9-AE44-4518A688XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class DeleteResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
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

export class DeleteResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class DeleteRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B17730C0-D959-548A-AE23-E754177CXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class DeleteWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateProjectFromResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the workspace from which you want to disassociate the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateProjectFromResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
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

export class DissociateProjectFromResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateProjectFromResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DissociateProjectFromResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageRequest extends $tea.Model {
  /**
   * @remarks
   * The code of the stage in the process. You can call the GetDeployment operation to query the code.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * 
   * *   false
   * 
   *     **
   * 
   *     **Note:** The value of this parameter indicates only whether the stage is triggered but does not indicate whether the execution of the stage is successful.
   * 
   * @example
   * true
   */
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

export class ExecDeploymentStageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecDeploymentStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecDeploymentStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobRequest extends $tea.Model {
  /**
   * @example
   * 11588
   */
  DIJobId?: number;
  projectId?: number;
  /**
   * @example
   * true
   */
  withDetails?: boolean;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      projectId: 'ProjectId',
      withDetails: 'WithDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      projectId: 'number',
      withDetails: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBody extends $tea.Model {
  pagingInfo?: GetDIJobResponseBodyPagingInfo;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: GetDIJobResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobLogRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  DIJobId?: number;
  /**
   * @remarks
   * The failover ID.
   * 
   * @example
   * 10
   */
  failoverId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 6153616438
   */
  instanceId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      failoverId: 'FailoverId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      failoverId: 'number',
      instanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The log.
   * 
   * @example
   * >>>>>>>> stdout:n++++++++++++++++++executing sql: create database if not exists jindo_test location \\"oss://pangbei-hdfs/tmp/hive\\" n++n
   */
  log?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDIJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDIJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 16035
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBody extends $tea.Model {
  dataSource?: GetDataSourceResponseBodyDataSource;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9252F32F-D855-549E-8898-61CF5A733050
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: GetDataSourceResponseBodyDataSource,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the process.
   * 
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the process.
   */
  pipeline?: GetDeploymentResponseBodyPipeline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08468352-032C-5262-AEDC-68C9FA05XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetDeploymentResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the UDF.
   */
  function?: GetFunctionResponseBodyFunction;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6CF95929-6D12-5A88-8CC3-4B2F4C2EXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: GetFunctionResponseBodyFunction,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 70ecdaec-bf21-4c11-8ecb-4f77453ceea8
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBody extends $tea.Model {
  jobStatus?: GetJobStatusResponseBodyJobStatus;
  /**
   * @example
   * 5E2BFE96-C0E0-5A98-85C8-633EC803198D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: GetJobStatusResponseBodyJobStatus,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkResponseBody extends $tea.Model {
  network?: GetNetworkResponseBodyNetwork;
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: GetNetworkResponseBodyNetwork,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the node.
   */
  node?: GetNodeResponseBodyNode;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: GetNodeResponseBodyNode,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  project?: GetProjectResponseBodyProject;
  /**
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBody extends $tea.Model {
  projectMember?: GetProjectMemberResponseBodyProjectMember;
  /**
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectMember: 'ProjectMember',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectMember: GetProjectMemberResponseBodyProjectMember,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRoleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRoleResponseBody extends $tea.Model {
  projectRole?: GetProjectRoleResponseBodyProjectRole;
  /**
   * @example
   * 82F28E60-CF48-5EDF-AB25-D806847B97D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectRole: 'ProjectRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRole: GetProjectRoleResponseBodyProjectRole,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E871F6C0-2EFF-5790-A00D-C57543EEXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the file resource.
   */
  resource?: GetResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: GetResourceResponseBodyResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  resourceGroup?: GetResourceGroupResponseBodyResourceGroup;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: GetResourceGroupResponseBodyResourceGroup,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  route?: GetRouteResponseBodyRoute;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      route: 'Route',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      route: GetRouteResponseBodyRoute,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2BDD628-8A21-5BD1-B930-1A2D5989XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow.
   */
  workflowDefinition?: GetWorkflowDefinitionResponseBodyWorkflowDefinition;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowDefinition: 'WorkflowDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowDefinition: GetWorkflowDefinitionResponseBodyWorkflowDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantMemberProjectRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 105149
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleCodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodes: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantMemberProjectRolesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 105149
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodesShrink: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodesShrink: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantMemberProjectRolesResponseBody extends $tea.Model {
  /**
   * @example
   * 2d9ced66-38ef-4923-baf6-391dd3a7e656
   */
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

export class GrantMemberProjectRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantMemberProjectRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantMemberProjectRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportWorkflowDefinitionResponseBody extends $tea.Model {
  asyncJob?: ImportWorkflowDefinitionResponseBodyAsyncJob;
  /**
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF020E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncJob: 'AsyncJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncJob: ImportWorkflowDefinitionResponseBodyAsyncJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesRequest extends $tea.Model {
  /**
   * @example
   * 34988
   */
  DIAlarmRuleId?: number;
  /**
   * @example
   * 1000001
   */
  jobId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      jobId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBody extends $tea.Model {
  pagingInfo?: ListDIAlarmRulesResponseBodyPagingInfo;
  /**
   * @example
   * 74C2FECD-5B3A-554A-BCF5-351A36DE9815
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIAlarmRulesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIAlarmRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIAlarmRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsRequest extends $tea.Model {
  /**
   * @example
   * 11588
   */
  DIJobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1717971005
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alarm
   */
  eventType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716971005
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      endTime: 'number',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponseBody extends $tea.Model {
  pagingInfo?: ListDIJobEventsResponseBodyPagingInfo;
  /**
   * @example
   * 645F6D68-9C29-5961-80B1-BDD4B794C22D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobEventsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsRequest extends $tea.Model {
  /**
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1712205941
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  metricName?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586509407
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      endTime: 'number',
      metricName: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsShrinkRequest extends $tea.Model {
  /**
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1712205941
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  metricNameShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1586509407
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      metricNameShrink: 'MetricName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      endTime: 'number',
      metricNameShrink: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBody extends $tea.Model {
  pagingInfo?: ListDIJobMetricsResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobMetricsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobRunDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ds_name
   */
  sourceDataSourceName?: string;
  /**
   * @example
   * db_name
   */
  sourceDatabaseName?: string;
  /**
   * @example
   * schema_name
   */
  sourceSchemaName?: string;
  /**
   * @example
   * table_name
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceDataSourceName: 'SourceDataSourceName',
      sourceDatabaseName: 'SourceDatabaseName',
      sourceSchemaName: 'SourceSchemaName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      instanceId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      sourceDataSourceName: 'string',
      sourceDatabaseName: 'string',
      sourceSchemaName: 'string',
      sourceTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobRunDetailsResponseBody extends $tea.Model {
  pagingInfo?: ListDIJobRunDetailsResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobRunDetailsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobRunDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobRunDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobRunDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The destination type. If you do not configure this parameter, no limits are imposed on the tasks.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental: one-time full synchronization and real-time incremental synchronization
   * *   RealtimeIncremental: real-time incremental synchronization
   * *   Full: full synchronization
   * *   OfflineIncremental: batch incremental synchronization
   * *   FullAndOfflineIncremental: one-time full synchronization and batch incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the export task.
   * 
   * The name of each export task must be unique. You must make sure that the names of the export tasks in the current workspace are unique.
   * 
   * @example
   * test_export_01
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @remarks
   * The source type. If you do not configure this parameter, no limits are imposed on the tasks.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataSourceType: 'DestinationDataSourceType',
      migrationType: 'MigrationType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataSourceType: 'string',
      migrationType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDIJobsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7263E4AC-9D2E-5B29-B8AF-7C5012E92A41
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDIJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDIJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesRequest extends $tea.Model {
  /**
   * @example
   * 2024-04-01
   */
  bizdateFrom?: string;
  /**
   * @example
   * 2024-05-01
   */
  bizdateTo?: string;
  /**
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @example
   * 10000
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * CWF2
   */
  triggerClient?: string;
  /**
   * @example
   * 1001
   */
  triggerClientId?: string;
  static names(): { [key: string]: string } {
    return {
      bizdateFrom: 'BizdateFrom',
      bizdateTo: 'BizdateTo',
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tableGuid: 'TableGuid',
      triggerClient: 'TriggerClient',
      triggerClientId: 'TriggerClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdateFrom: 'string',
      bizdateTo: 'string',
      createTimeFrom: 'number',
      createTimeTo: 'number',
      dataQualityEvaluationTaskId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tableGuid: 'string',
      triggerClient: 'string',
      triggerClientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  pagingInfo?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pagingInfo: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataQualityEvaluationTaskInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataQualityEvaluationTaskInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksRequest extends $tea.Model {
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  pagingInfo?: ListDataQualityEvaluationTasksResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pagingInfo: ListDataQualityEvaluationTasksResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataQualityEvaluationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataQualityEvaluationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsRequest extends $tea.Model {
  /**
   * @example
   * 2024-05-01
   */
  bizdateFrom?: string;
  /**
   * @example
   * 2024-05-04
   */
  bizdateTo?: string;
  /**
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @example
   * 200001
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @example
   * 10001
   */
  dataQualityEvaluationTaskInstanceId?: number;
  /**
   * @example
   * 100001
   */
  dataQualityRuleId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizdateFrom: 'BizdateFrom',
      bizdateTo: 'BizdateTo',
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      dataQualityEvaluationTaskInstanceId: 'DataQualityEvaluationTaskInstanceId',
      dataQualityRuleId: 'DataQualityRuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdateFrom: 'string',
      bizdateTo: 'string',
      createTimeFrom: 'number',
      createTimeTo: 'number',
      dataQualityEvaluationTaskId: 'number',
      dataQualityEvaluationTaskInstanceId: 'number',
      dataQualityRuleId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  pagingInfo?: ListDataQualityResultsResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pagingInfo: ListDataQualityResultsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataQualityResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataQualityResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesRequest extends $tea.Model {
  /**
   * @example
   * 10000
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @example
   * unit_test
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskId: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tableGuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  pagingInfo?: ListDataQualityRulesResponseBodyPagingInfo;
  /**
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pagingInfo: ListDataQualityRulesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataQualityRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataQualityRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @example
   * 1
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      targetProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesResponseBody extends $tea.Model {
  dataSourceSharedRules?: ListDataSourceSharedRulesResponseBodyDataSourceSharedRules[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceSharedRules: 'DataSourceSharedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceSharedRules: { 'type': 'array', 'itemType': ListDataSourceSharedRulesResponseBodyDataSourceSharedRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceSharedRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourceSharedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesRequest extends $tea.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17820
   */
  projectId?: number;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * ["tag1", "tag2", "tag3"]
   */
  tags?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesShrinkRequest extends $tea.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17820
   */
  projectId?: number;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * ["tag1", "tag2", "tag3"]
   */
  tags?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      tags: 'Tags',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      tags: 'string',
      typesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  pagingInfo?: ListDataSourcesResponseBodyPagingInfo;
  /**
   * @example
   * 7BE1433F-6D55-5D86-9344-CA6F7DD19B13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataSourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the user who creates the processes. This parameter specifies a filter condition.
   * 
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The status of the processes. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   INIT
   * *   RUNNING
   * *   SUCCESS
   * *   FAIL
   * *   TERMINATION
   * *   CANCEL
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDeploymentsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDeploymentsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the owner of the UDF. This parameter specifies a filter condition.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @remarks
   * The UDF type. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   MATH: mathematical operation function
   * *   AGGREGATE: aggregate function
   * *   STRING: string processing function
   * *   DATE: date function
   * *   ANALYTIC: window function
   * *   OTHER: others
   * 
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListFunctionsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89FB2BF0-EB00-5D03-9C34-05931001XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListFunctionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworksRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworksResponseBody extends $tea.Model {
  networkList?: ListNetworksResponseBodyNetworkList[];
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      networkList: 'NetworkList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkList: { 'type': 'array', 'itemType': ListNetworksResponseBodyNetworkList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListNodeDependenciesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 204EAF68-CCE3-5112-8DA0-E7A60F02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodeDependenciesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeDependenciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeDependenciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  /**
   * @remarks
   * The container ID. This parameter specifies a filter condition.
   * 
   * @example
   * 860438872620113XXXX
   */
  containerId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  recurrence?: string;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   Allowed: The nodes can be rerun regardless of whether they are successfully run or fail to run.
   * *   FailureAllowed: The nodes can be rerun only after they fail to run.
   * *   Denied: The nodes cannot be rerun regardless of whether they are successfully run or fail to run.
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The scene of nodes. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   DATAWORKS_PROJECT
   * *   MANUAL_WORKFLOW
   * *   MANUAL_NODE
   * 
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      rerunMode: 'RerunMode',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      recurrence: 'string',
      rerunMode: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListNodesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2197B9C4-39CE-55EA-8EEA-FDBAE52DXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodesResponseBodyPagingInfo,
      requestId: 'string',
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

export class ListProjectMembersRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62136
   */
  projectId?: number;
  roleCodes?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      roleCodes: 'RoleCodes',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62136
   */
  projectId?: number;
  roleCodesShrink?: string;
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      roleCodesShrink: 'RoleCodes',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      roleCodesShrink: 'string',
      userIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBody extends $tea.Model {
  pagingInfo?: ListProjectMembersResponseBodyPagingInfo;
  /**
   * @example
   * 9FBBBB1F-DD5E-5D8E-8F50-37F77460F056
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProjectMembersResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesRequest extends $tea.Model {
  codes?: string[];
  names?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      names: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': 'string' },
      names: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesShrinkRequest extends $tea.Model {
  codesShrink?: string;
  namesShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      codesShrink: 'Codes',
      namesShrink: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codesShrink: 'string',
      namesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBody extends $tea.Model {
  pagingInfo?: ListProjectRolesResponseBodyPagingInfo;
  /**
   * @example
   * 61649187-0BCF-5E75-8D4B-64FDBEBBB447
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProjectRolesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: ListProjectsRequestAliyunResourceTags[];
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  ids?: number[];
  names?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      ids: 'Ids',
      names: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListProjectsRequestAliyunResourceTags },
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      ids: { 'type': 'array', 'itemType': 'number' },
      names: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsShrinkRequest extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zff
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTagsShrink?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  idsShrink?: string;
  namesShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTagsShrink: 'AliyunResourceTags',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      idsShrink: 'Ids',
      namesShrink: 'Names',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTagsShrink: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      idsShrink: 'string',
      namesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  pagingInfo?: ListProjectsResponseBodyPagingInfo;
  /**
   * @example
   * 6D24AD9A-652F-59E2-AC1F-05029300F8A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProjectsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $tea.Model {
  /**
   * @example
   * Resource
   */
  name?: string;
  /**
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @example
   * 1000
   */
  projectId?: number;
  resourceGroupTypes?: string[];
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      paymentType: 'PaymentType',
      projectId: 'ProjectId',
      resourceGroupTypes: 'ResourceGroupTypes',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      paymentType: 'string',
      projectId: 'number',
      resourceGroupTypes: { 'type': 'array', 'itemType': 'string' },
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsShrinkRequest extends $tea.Model {
  /**
   * @example
   * Resource
   */
  name?: string;
  /**
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @example
   * 1000
   */
  projectId?: number;
  resourceGroupTypesShrink?: string;
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      paymentType: 'PaymentType',
      projectId: 'ProjectId',
      resourceGroupTypesShrink: 'ResourceGroupTypes',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      paymentType: 'string',
      projectId: 'number',
      resourceGroupTypesShrink: 'string',
      statusesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  resourceGroupList?: ListResourceGroupsResponseBodyResourceGroupList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupList: 'ResourceGroupList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupList: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyResourceGroupList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace administrator. You can log on to the Alibaba Cloud Management Console and view the ID on the Security Settings page.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: string;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   Python
   * *   Jar
   * *   Archive
   * *   File
   * 
   * @example
   * python
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListResourcesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListResourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  networkId?: number;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutesResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  routeList?: ListRoutesResponseBodyRouteList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeList: 'RouteList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeList: { 'type': 'array', 'itemType': ListRoutesResponseBodyRouteList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace administrator. You can log on to the Alibaba Cloud Management Console and view the ID on the Security Settings page.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The workflow type. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   CycleWorkflow
   * *   ManualWorkflow
   * 
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListWorkflowDefinitionsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C3ED0C5-ABAB-55E1-854B-DAC02B11XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListWorkflowDefinitionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowDefinitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowDefinitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The path to which you want to move the UDF. You do not need to specify a UDF name in the path.
   * 
   * For example, if you want to move the test UDF to root/demo/test, you must set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48C0E2F0-52BA-5888-BDFA-28F1B9AFXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class MoveFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The path to which you want to move the node. You do not need to specify a node name in the path.
   * 
   * For example, if you want to move the test node to root/demo/test, you must set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class MoveNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The path to which you want to move the file resource. You do not need to specify a file resource name in the path.
   * 
   * For example, if you want to move the test file resource to root/demo/test, you must set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F332BED4-DD73-5972-A9C2-642BA6CFXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class MoveResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The path to which you want to move the workflow. You do not need to specify a workflow name in the path.
   * 
   * For example, if you want to move the test workflow to root/demo/test, you must set this parameter to root/demo.
   * 
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05ADAF4F-7709-5FB1-B606-3513483FXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class MoveWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The new name.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1ED4C97F-BA2A-57C5-BA7C-8853627EXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The new name.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class RenameNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The new name.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA8XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class RenameResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * The unique identifier of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The new name.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the ID.
   * 
   * @example
   * 975BD43D-C421-595C-A29C-565A8AD5XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class RenameWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeMemberProjectRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 105149
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleCodes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodes: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeMemberProjectRolesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 105149
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodesShrink: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodesShrink: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeMemberProjectRolesResponseBody extends $tea.Model {
  /**
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
   */
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

export class RevokeMemberProjectRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeMemberProjectRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeMemberProjectRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 10000
   */
  DIJobId?: number;
  /**
   * @example
   * false
   */
  forceToRerun?: boolean;
  realtimeStartSettings?: StartDIJobRequestRealtimeStartSettings;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      realtimeStartSettings: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      forceToRerun: 'boolean',
      realtimeStartSettings: StartDIJobRequestRealtimeStartSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 10000
   */
  DIJobId?: number;
  /**
   * @example
   * false
   */
  forceToRerun?: boolean;
  realtimeStartSettingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      forceToRerun: 'ForceToRerun',
      realtimeStartSettingsShrink: 'RealtimeStartSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      forceToRerun: 'boolean',
      realtimeStartSettingsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * 999431B2-6013-577F-B684-36F7433C753B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class StartDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11668
   */
  DIJobId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      instanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDIJobResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 92F778C7-8F00-53B1-AE1A-B3B17101247D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class StopDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34982
   */
  DIAlarmRuleId?: number;
  /**
   * @example
   * 1
   */
  DIJobId?: number;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @example
   * alarm_rule_name
   */
  name?: string;
  notificationSettings?: UpdateDIAlarmRuleRequestNotificationSettings;
  triggerConditions?: UpdateDIAlarmRuleRequestTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
      notificationSettings: UpdateDIAlarmRuleRequestNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': UpdateDIAlarmRuleRequestTriggerConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34982
   */
  DIAlarmRuleId?: number;
  /**
   * @example
   * 1
   */
  DIJobId?: number;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @example
   * alarm_rule_name
   */
  name?: string;
  notificationSettingsShrink?: string;
  triggerConditionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettingsShrink: 'NotificationSettings',
      triggerConditionsShrink: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
      notificationSettingsShrink: 'string',
      triggerConditionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleResponseBody extends $tea.Model {
  /**
   * @example
   * A6C6B486-E3A2-5D52-9E76-D9380485D946
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class UpdateDIAlarmRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDIAlarmRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDIAlarmRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  description?: string;
  jobSettings?: UpdateDIJobRequestJobSettings;
  projectId?: number;
  resourceSettings?: UpdateDIJobRequestResourceSettings;
  tableMappings?: UpdateDIJobRequestTableMappings[];
  transformationRules?: UpdateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      jobSettings: 'JobSettings',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      jobSettings: UpdateDIJobRequestJobSettings,
      projectId: 'number',
      resourceSettings: UpdateDIJobRequestResourceSettings,
      tableMappings: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  description?: string;
  jobSettingsShrink?: string;
  projectId?: number;
  resourceSettingsShrink?: string;
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      jobSettingsShrink: 'JobSettings',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      jobSettingsShrink: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobResponseBody extends $tea.Model {
  /**
   * @example
   * AAC30B35-820D-5F3E-A42C-E96BB6379325
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class UpdateDIJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: string;
  /**
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5678
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      description: 'Description',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      connectionPropertiesMode: 'string',
      description: 'string',
      id: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * 102E8E24-0387-531D-8A75-1C0AE7DD03E5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class UpdateDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the UDF. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12123960-CB2C-5086-868E-C6C1D024XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
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

export class UpdateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the node. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class UpdateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  description?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * true
   */
  devRoleDisabled?: boolean;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Forbidden
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
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

export class UpdateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the file resource. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class UpdateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @remarks
   * The new name that you want to change for the resource group.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @remarks
   * The new remarks that you want to modify for the resource group.
   * 
   * @example
   * 创建用于普通任务的通用资源组
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
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

export class UpdateResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRouteResponseBody extends $tea.Model {
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

export class UpdateRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20BF7E80-668A-5620-8AD8-879B8FEAXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class UpdateWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskHooks extends $tea.Model {
  /**
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @example
   * BlockTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      type: 'Type',
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

export class DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels extends $tea.Model {
  channels?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers extends $tea.Model {
  /**
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @example
   * AliUid
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskNotificationsNotifications extends $tea.Model {
  notificationChannels?: DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels[];
  notificationReceivers?: DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskNotifications extends $tea.Model {
  /**
   * @example
   * ${blockType} == "Strong"
   */
  condition?: string;
  notifications?: DataQualityEvaluationTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotificationsNotifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskTarget extends $tea.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskTrigger extends $tea.Model {
  taskIds?: number[];
  /**
   * @example
   * ByScheduledTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTaskHooks extends $tea.Model {
  /**
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @example
   * BlockTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      type: 'Type',
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

export class DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels extends $tea.Model {
  channels?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers extends $tea.Model {
  /**
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @example
   * AliUid
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTaskNotificationsNotifications extends $tea.Model {
  notificationChannels?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels[];
  notificationReceivers?: DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTaskNotifications extends $tea.Model {
  /**
   * @example
   * ${blockType} == "Strong"
   */
  condition?: string;
  notifications?: DataQualityEvaluationTaskInstanceTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotificationsNotifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTaskTarget extends $tea.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTaskTrigger extends $tea.Model {
  taskIds?: number[];
  /**
   * @example
   * ByScheduledTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityEvaluationTaskInstanceTask extends $tea.Model {
  /**
   * @example
   * 201
   */
  dataSourceId?: number;
  hooks?: DataQualityEvaluationTaskInstanceTaskHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 质量校验任务
   */
  name?: string;
  notifications?: DataQualityEvaluationTaskInstanceTaskNotifications[];
  projectId?: number;
  /**
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  target?: DataQualityEvaluationTaskInstanceTaskTarget;
  tenantId?: number;
  trigger?: DataQualityEvaluationTaskInstanceTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      tenantId: 'TenantId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      hooks: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskHooks },
      id: 'number',
      name: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotifications },
      projectId: 'number',
      runtimeConf: 'string',
      target: DataQualityEvaluationTaskInstanceTaskTarget,
      tenantId: 'number',
      trigger: DataQualityEvaluationTaskInstanceTaskTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultDetails extends $tea.Model {
  /**
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @example
   * Passed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleCheckingConfigThresholdsCritical extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleCheckingConfigThresholdsExpected extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleCheckingConfigThresholdsWarned extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleCheckingConfigThresholds extends $tea.Model {
  critical?: DataQualityResultRuleCheckingConfigThresholdsCritical;
  expected?: DataQualityResultRuleCheckingConfigThresholdsExpected;
  warned?: DataQualityResultRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DataQualityResultRuleCheckingConfigThresholdsCritical,
      expected: DataQualityResultRuleCheckingConfigThresholdsExpected,
      warned: DataQualityResultRuleCheckingConfigThresholdsWarned,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleCheckingConfig extends $tea.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: DataQualityResultRuleCheckingConfigThresholds;
  /**
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: DataQualityResultRuleCheckingConfigThresholds,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleErrorHandlers extends $tea.Model {
  /**
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @example
   * SaveErrorData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleSamplingConfig extends $tea.Model {
  /**
   * @example
   * Min
   */
  metric?: string;
  /**
   * @example
   * { "Columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @example
   * SET odps.sql.udf.timeout=600s;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRuleTarget extends $tea.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityResultRule extends $tea.Model {
  checkingConfig?: DataQualityResultRuleCheckingConfig;
  /**
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  errorHandlers?: DataQualityResultRuleErrorHandlers[];
  /**
   * @example
   * 100001
   */
  id?: number;
  /**
   * @example
   * 表不能为空
   */
  name?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  samplingConfig?: DataQualityResultRuleSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: DataQualityResultRuleTarget;
  /**
   * @example
   * system::user_defined
   */
  templateCode?: string;
  /**
   * @example
   * 1
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: DataQualityResultRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': DataQualityResultRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityResultRuleSamplingConfig,
      severity: 'string',
      target: DataQualityResultRuleTarget,
      templateCode: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleCheckingConfigThresholdsCritical extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleCheckingConfigThresholdsExpected extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleCheckingConfigThresholdsWarned extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleCheckingConfigThresholds extends $tea.Model {
  critical?: DataQualityRuleCheckingConfigThresholdsCritical;
  expected?: DataQualityRuleCheckingConfigThresholdsExpected;
  warned?: DataQualityRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DataQualityRuleCheckingConfigThresholdsCritical,
      expected: DataQualityRuleCheckingConfigThresholdsExpected,
      warned: DataQualityRuleCheckingConfigThresholdsWarned,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleCheckingConfig extends $tea.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: DataQualityRuleCheckingConfigThresholds;
  /**
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: DataQualityRuleCheckingConfigThresholds,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleErrorHandlers extends $tea.Model {
  /**
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @example
   * SaveErrorData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleSamplingConfig extends $tea.Model {
  /**
   * @example
   * Min
   */
  metric?: string;
  /**
   * @example
   * { "Columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @example
   * SET odps.sql.udf.timeout=600s;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataQualityRuleTarget extends $tea.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels extends $tea.Model {
  channels?: string[];
  /**
   * @example
   * Warning
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers extends $tea.Model {
  /**
   * @example
   * DingToken
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleRequestNotificationSettings extends $tea.Model {
  /**
   * @example
   * 5
   */
  inhibitionInterval?: number;
  notificationChannels?: CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels[];
  notificationReceivers?: CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      inhibitionInterval: 'InhibitionInterval',
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inhibitionInterval: 'number',
      notificationChannels: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleRequestTriggerConditions extends $tea.Model {
  ddlReportTags?: string[];
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      ddlReportTags: 'DdlReportTags',
      duration: 'Duration',
      severity: 'Severity',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlReportTags: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestDestinationDataSourceSettings extends $tea.Model {
  /**
   * @example
   * holo_datasource_1
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsColumnDataTypeSettings extends $tea.Model {
  /**
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsCycleScheduleSettings extends $tea.Model {
  /**
   * @example
   * Full
   */
  cycleMigrationType?: string;
  /**
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      cycleMigrationType: 'CycleMigrationType',
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleMigrationType: 'string',
      scheduleParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsDdlHandlingSettings extends $tea.Model {
  /**
   * @example
   * Critical
   */
  action?: string;
  /**
   * @example
   * AddColumn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsRuntimeSettings extends $tea.Model {
  /**
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @example
   * 1
   */
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

export class CreateDIJobRequestJobSettings extends $tea.Model {
  /**
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: CreateDIJobRequestJobSettingsDdlHandlingSettings[];
  runtimeSettings?: CreateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: CreateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsRuntimeSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettingsOfflineResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettingsRealtimeResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettingsScheduleResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1579085295030
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestResourceSettings extends $tea.Model {
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
  scheduleResourceSettings?: CreateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: CreateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: CreateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: CreateDIJobRequestResourceSettingsScheduleResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties extends $tea.Model {
  /**
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encoding: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestSourceDataSourceSettings extends $tea.Model {
  /**
   * @example
   * mysql_datasource_1
   */
  dataSourceName?: string;
  dataSourceProperties?: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappingsSourceObjectSelectionRules extends $tea.Model {
  /**
   * @example
   * Include
   */
  action?: string;
  /**
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappingsTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappings extends $tea.Model {
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  transformationRules?: CreateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
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

export class CreateResourceGroupResponseBodyResourceGroupOrder extends $tea.Model {
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @example
   * 2391982058XXXXX
   */
  orderId?: number;
  /**
   * @example
   * c442b330-3b10-4584-959e-736e4edXXXXX
   */
  orderInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      orderId: 'OrderId',
      orderInstanceId: 'OrderInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      orderId: 'number',
      orderInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings extends $tea.Model {
  /**
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings extends $tea.Model {
  /**
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings extends $tea.Model {
  /**
   * @example
   * Full
   */
  cycleMigrationType?: string;
  /**
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      cycleMigrationType: 'CycleMigrationType',
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleMigrationType: 'string',
      scheduleParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings extends $tea.Model {
  /**
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @example
   * CreateTable
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings extends $tea.Model {
  /**
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @example
   * 1
   */
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

export class GetDIJobResponseBodyPagingInfoJobSettings extends $tea.Model {
  /**
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  columnDataTypeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings[];
  runtimeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_7708_1667792816832
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1579085295030
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1718359176885
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoResourceSettings extends $tea.Model {
  offlineResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings;
  scheduleResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties extends $tea.Model {
  /**
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encoding: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettings extends $tea.Model {
  /**
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  dataSourceProperties?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules extends $tea.Model {
  /**
   * @example
   * Include
   */
  action?: string;
  /**
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules extends $tea.Model {
  /**
   * @example
   * AddColumn
   */
  ruleActionType?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTableMappings extends $tea.Model {
  sourceObjectSelectionRules?: GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules[];
  transformationRules?: GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 32601
   */
  DIJobId?: string;
  /**
   * @example
   * description
   */
  description?: string;
  destinationDataSourceSettings?: GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings[];
  /**
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @example
   * imp_ods_dms_det_dealer_info_df
   */
  jobName?: string;
  jobSettings?: GetDIJobResponseBodyPagingInfoJobSettings;
  jobStatus?: string;
  /**
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @example
   * 98330
   */
  projectId?: number;
  resourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettings;
  sourceDataSourceSettings?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettings[];
  /**
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  tableMappings?: GetDIJobResponseBodyPagingInfoTableMappings[];
  transformationRules?: GetDIJobResponseBodyPagingInfoTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettings: GetDIJobResponseBodyPagingInfoJobSettings,
      jobStatus: 'string',
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: GetDIJobResponseBodyPagingInfoResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappings },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBodyDataSource extends $tea.Model {
  /**
   * @remarks
   * The connection properties of the data source.
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @remarks
   * The mode in which the data source is added. The mode varies based on the data source type. Valid values:
   * 
   * *   InstanceMode: instance mode
   * *   UrlMode: connection string mode
   * *   CdhMode: CDH cluster mode
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The time when the data source was added. This value is a UNIX timestamp.
   * 
   * @example
   * 1698286929333
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who adds the data source.
   * 
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 16738
   */
  id?: number;
  /**
   * @remarks
   * The time when the data source was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1698286929333
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the user who modifies the data source.
   * 
   * @example
   * 1107550004253538
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace with which the data source is associated.
   * 
   * @example
   * 52660
   */
  projectId?: number;
  /**
   * @remarks
   * The unique business key of the data source. For example, the unique business key of a Hologres data source is in the ${tenantOwnerId}:${regionId}:${type}:${instanceId}:${database} format.
   * 
   * @example
   * 1107550004253538:cn-beijing:holo:hgprecn-cn-x0r3oun4k001:testdb
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * hologres
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      projectId: 'ProjectId',
      qualifiedName: 'QualifiedName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      projectId: 'number',
      qualifiedName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyPipelineStages extends $tea.Model {
  /**
   * @remarks
   * The code of the stage.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The description of the stage.
   */
  description?: string;
  /**
   * @remarks
   * The details of the stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The error message returned for the stage.
   */
  message?: string;
  /**
   * @remarks
   * The name of the stage.
   */
  name?: string;
  /**
   * @remarks
   * The status of the stage.
   * 
   * Valid values:
   * 
   * *   INIT
   * *   RUNNING
   * *   SUCCESS
   * *   FAIL
   * *   TERMINATION
   * *   CANCEL
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The step number of the stage.
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * The type of the stage.
   * 
   * Valid values:
   * 
   * *   DELETE
   * *   BUILD
   * *   CHECK
   * *   DEPLOY
   * *   OFFLINE
   * 
   * @example
   * BUILD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyPipeline extends $tea.Model {
  /**
   * @remarks
   * The time when the process was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the process.
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The error message returned when the process fails.
   */
  message?: string;
  /**
   * @remarks
   * The time when the process was modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 56160
   */
  projectId?: string;
  /**
   * @remarks
   * The information about stages in the process.
   */
  stages?: GetDeploymentResponseBodyPipelineStages[];
  /**
   * @remarks
   * The status of the process.
   * 
   * Valid values:
   * 
   * *   INIT
   * *   RUNNING
   * *   SUCCESS
   * *   FAIL
   * *   TERMINATION
   * *   CANCEL
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'string',
      stages: { 'type': 'array', 'itemType': GetDeploymentResponseBodyPipelineStages },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBodyFunction extends $tea.Model {
  /**
   * @remarks
   * The time when the UDF was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The time when the UDF was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724506661000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the UDF.
   */
  name?: string;
  /**
   * @remarks
   * The owner of the UDF.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the UDF belongs.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the UDF. For more information, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBodyJobStatus extends $tea.Model {
  /**
   * @example
   * False
   */
  completed?: string;
  /**
   * @example
   * 1729063449802
   */
  createTime?: string;
  /**
   * @example
   * Not Found
   */
  error?: string;
  /**
   * @example
   * C664CDE3-9C0B-5792-B17F-6C543783BBBC
   */
  jobId?: string;
  /**
   * @example
   * Create
   */
  jobType?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      jobType: 'JobType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'string',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      jobType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkResponseBodyNetwork extends $tea.Model {
  /**
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @example
   * 1000
   */
  id?: number;
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-2ze13vamugr7jenXXXXX
   */
  securityGroupId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      id: 'number',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyNode extends $tea.Model {
  /**
   * @remarks
   * The time when the node was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The time when the node was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the node.
   */
  name?: string;
  /**
   * @remarks
   * The owner of the node.
   * 
   * @example
   * 196596664824XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about this node. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyProjectAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
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

export class GetProjectResponseBodyProject extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zfa
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: GetProjectResponseBodyProjectAliyunResourceTags[];
  description?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  displayName?: string;
  /**
   * @example
   * 28477242
   */
  id?: number;
  /**
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * 207947397706614299
   */
  owner?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': GetProjectResponseBodyProjectAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBodyProjectMemberRoles extends $tea.Model {
  /**
   * @example
   * role_project_guest
   */
  code?: string;
  name?: string;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBodyProjectMember extends $tea.Model {
  /**
   * @example
   * 88757
   */
  projectId?: number;
  roles?: GetProjectMemberResponseBodyProjectMemberRoles[];
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roles: 'Roles',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roles: { 'type': 'array', 'itemType': GetProjectMemberResponseBodyProjectMemberRoles },
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRoleResponseBodyProjectRole extends $tea.Model {
  /**
   * @example
   * role_project_guest
   */
  code?: string;
  name?: string;
  /**
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyResource extends $tea.Model {
  /**
   * @remarks
   * The time when the file resource was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The time when the file resource was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the file resource.
   */
  name?: string;
  /**
   * @remarks
   * The owner of the file resource.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the file resource belongs.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the file resource. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroupSpec extends $tea.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * 2CU
   */
  standard?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      standard: 'Standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      standard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroup extends $tea.Model {
  /**
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  defaultVpcId?: string;
  /**
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  defaultVswitchId?: string;
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @example
   * c442b330-3b10-4584-959e-736e4edXXXXX
   */
  orderInstanceId?: string;
  /**
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @example
   * 创建用于普通任务的通用资源组
   */
  remark?: string;
  /**
   * @example
   * CommonV2
   */
  resourceGroupType?: string;
  spec?: GetResourceGroupResponseBodyResourceGroupSpec;
  /**
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      defaultVpcId: 'DefaultVpcId',
      defaultVswitchId: 'DefaultVswitchId',
      id: 'Id',
      name: 'Name',
      orderInstanceId: 'OrderInstanceId',
      paymentType: 'PaymentType',
      remark: 'Remark',
      resourceGroupType: 'ResourceGroupType',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      defaultVpcId: 'string',
      defaultVswitchId: 'string',
      id: 'string',
      name: 'string',
      orderInstanceId: 'string',
      paymentType: 'string',
      remark: 'string',
      resourceGroupType: 'string',
      spec: GetResourceGroupResponseBodyResourceGroupSpec,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteResponseBodyRoute extends $tea.Model {
  /**
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @example
   * 1000
   */
  id?: number;
  /**
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @example
   * ns-679XXXXX
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destinationCidr: 'DestinationCidr',
      id: 'Id',
      networkId: 'NetworkId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      destinationCidr: 'string',
      id: 'number',
      networkId: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBodyWorkflowDefinition extends $tea.Model {
  /**
   * @remarks
   * The time when the workflow was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1708481905000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The time when the workflow was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1708481905000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the workflow.
   */
  name?: string;
  /**
   * @remarks
   * The owner of the workflow.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the workflow belongs.
   * 
   * @example
   * 307XXX
   */
  projectId?: string;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow/).
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportWorkflowDefinitionResponseBodyAsyncJob extends $tea.Model {
  /**
   * @example
   * false
   */
  completed?: boolean;
  /**
   * @example
   * 1706581425000
   */
  createTime?: number;
  /**
   * @example
   * target folder already exists: XXXX
   */
  error?: string;
  /**
   * @example
   * 1234567691239009XXXX
   */
  id?: string;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * 632647691239009XXXX
   */
  response?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Create
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'number',
      error: 'string',
      id: 'string',
      progress: 'number',
      response: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels extends $tea.Model {
  channels?: string[];
  /**
   * @example
   * Critical
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers extends $tea.Model {
  /**
   * @example
   * DingToken
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings extends $tea.Model {
  /**
   * @example
   * 5
   */
  inhibitionInterval?: number;
  notificationChannels?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels[];
  notificationReceivers?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      inhibitionInterval: 'InhibitionInterval',
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inhibitionInterval: 'number',
      notificationChannels: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions extends $tea.Model {
  ddlReportTags?: string[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * Critical
   */
  severity?: string;
  /**
   * @example
   * 5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      ddlReportTags: 'DdlReportTags',
      duration: 'Duration',
      severity: 'Severity',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlReportTags: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules extends $tea.Model {
  /**
   * @example
   * 72402
   */
  DIAlarmRuleId?: number;
  /**
   * @example
   * 32594
   */
  DIJobId?: number;
  /**
   * @example
   * rule descrition
   */
  description?: string;
  /**
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @example
   * rule_name
   */
  name?: string;
  notificationSettings?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings;
  triggerConditions?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
      notificationSettings: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyPagingInfo extends $tea.Model {
  DIJobAlarmRules?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 90
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobAlarmRules: 'DIJobAlarmRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobAlarmRules: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponseBodyPagingInfoDIJobEvent extends $tea.Model {
  /**
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @example
   * Phone
   */
  channels?: string;
  /**
   * @example
   * 1663573162
   */
  createTime?: string;
  detail?: string;
  /**
   * @example
   * alter table table2 ***
   */
  dstSql?: string;
  /**
   * @example
   * table2
   */
  dstTable?: string;
  /**
   * @example
   * 2024-05-29 15:11:31,377 [main] INFO com.*.**.di.core.metrics.:21 []  {****} 
   * 2024-05-29 15:11:31,384 [main] INFO *.aliyun.*.di.*.*.metrics.*:27 [] - Open MarioDiReporter 
   * 2024-05-29 15:11:33,248 [flink-akka.*.*-dispatcher-17] INFO
   */
  failoverMessage?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @example
   * alter table table1 ***
   */
  srcSql?: string;
  /**
   * @example
   * table1
   */
  srcTable?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * Delay
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      channels: 'Channels',
      createTime: 'CreateTime',
      detail: 'Detail',
      dstSql: 'DstSql',
      dstTable: 'DstTable',
      failoverMessage: 'FailoverMessage',
      id: 'Id',
      severity: 'Severity',
      srcSql: 'SrcSql',
      srcTable: 'SrcTable',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      channels: 'string',
      createTime: 'string',
      detail: 'string',
      dstSql: 'string',
      dstTable: 'string',
      failoverMessage: 'string',
      id: 'string',
      severity: 'string',
      srcSql: 'string',
      srcTable: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobEventsResponseBodyPagingInfo extends $tea.Model {
  DIJobEvent?: ListDIJobEventsResponseBodyPagingInfoDIJobEvent[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobEvent: 'DIJobEvent',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobEvent: { 'type': 'array', 'itemType': ListDIJobEventsResponseBodyPagingInfoDIJobEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList extends $tea.Model {
  /**
   * @example
   * 1716881141
   */
  time?: number;
  /**
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfoJobMetrics extends $tea.Model {
  /**
   * @example
   * JobDelay
   */
  name?: string;
  seriesList?: ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      seriesList: 'SeriesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      seriesList: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfo extends $tea.Model {
  jobMetrics?: ListDIJobMetricsResponseBodyPagingInfoJobMetrics[];
  static names(): { [key: string]: string } {
    return {
      jobMetrics: 'JobMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobMetrics: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos extends $tea.Model {
  /**
   * @example
   * dst_db
   */
  destinationDatabaseName?: string;
  /**
   * @example
   * dst_name
   */
  destinationDatasourceName?: string;
  /**
   * @example
   * dst_schema
   */
  destinationSchemaName?: string;
  /**
   * @example
   * dst_name
   */
  destinationTableName?: string;
  /**
   * @example
   * sync table t1 fail.
   */
  fullMigrationErrorMessage?: string;
  /**
   * @example
   * Finished
   */
  fullMigrationStatus?: string;
  /**
   * @example
   * 0
   */
  offlineErrorRecords?: number;
  /**
   * @example
   * 100
   */
  offlineTotalBytes?: number;
  /**
   * @example
   * 10
   */
  offlineTotalRecords?: number;
  /**
   * @example
   * sync table t1 fail.
   */
  realtimeMigrationErrorMessage?: string;
  /**
   * @example
   * Running
   */
  realtimeMigrationStatus?: string;
  /**
   * @example
   * db_name
   */
  sourceDatabaseName?: string;
  /**
   * @example
   * ds_name
   */
  sourceDatasourceName?: string;
  /**
   * @example
   * schema_name
   */
  sourceSchemaName?: string;
  /**
   * @example
   * table_name
   */
  sourceTableName?: string;
  /**
   * @example
   * create table t1 fail.
   */
  structureMigrationErrorMessage?: string;
  /**
   * @example
   * Finished
   */
  structureMigrationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDatabaseName: 'DestinationDatabaseName',
      destinationDatasourceName: 'DestinationDatasourceName',
      destinationSchemaName: 'DestinationSchemaName',
      destinationTableName: 'DestinationTableName',
      fullMigrationErrorMessage: 'FullMigrationErrorMessage',
      fullMigrationStatus: 'FullMigrationStatus',
      offlineErrorRecords: 'OfflineErrorRecords',
      offlineTotalBytes: 'OfflineTotalBytes',
      offlineTotalRecords: 'OfflineTotalRecords',
      realtimeMigrationErrorMessage: 'RealtimeMigrationErrorMessage',
      realtimeMigrationStatus: 'RealtimeMigrationStatus',
      sourceDatabaseName: 'SourceDatabaseName',
      sourceDatasourceName: 'SourceDatasourceName',
      sourceSchemaName: 'SourceSchemaName',
      sourceTableName: 'SourceTableName',
      structureMigrationErrorMessage: 'StructureMigrationErrorMessage',
      structureMigrationStatus: 'StructureMigrationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDatabaseName: 'string',
      destinationDatasourceName: 'string',
      destinationSchemaName: 'string',
      destinationTableName: 'string',
      fullMigrationErrorMessage: 'string',
      fullMigrationStatus: 'string',
      offlineErrorRecords: 'number',
      offlineTotalBytes: 'number',
      offlineTotalRecords: 'number',
      realtimeMigrationErrorMessage: 'string',
      realtimeMigrationStatus: 'string',
      sourceDatabaseName: 'string',
      sourceDatasourceName: 'string',
      sourceSchemaName: 'string',
      sourceTableName: 'string',
      structureMigrationErrorMessage: 'string',
      structureMigrationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobRunDetailsResponseBodyPagingInfo extends $tea.Model {
  jobRunInfos?: ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 131
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobRunInfos: 'JobRunInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRunInfos: { 'type': 'array', 'itemType': ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBodyPagingInfoDIJobs extends $tea.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 32599
   */
  DIJobId?: number;
  /**
   * @remarks
   * The destination type. Valid values: Hologres and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * mysql_to_holo_sync_35197
   */
  jobName?: string;
  /**
   * @remarks
   * The status of the synchronization task. Valid values:
   * 
   * *   Finished
   * *   Initialized
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Stopping
   * 
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental: one-time full synchronization and real-time incremental synchronization
   * *   RealtimeIncremental: real-time incremental synchronization
   * *   Full: full synchronization
   * *   OfflineIncremental: batch incremental synchronization
   * *   FullAndOfflineIncremental: one-time full synchronization and batch incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the synchronization task belongs.
   * 
   * @example
   * 26442
   */
  projectId?: number;
  /**
   * @remarks
   * The source type. The value MySQL is returned.
   * 
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobStatus: 'string',
      migrationType: 'string',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The synchronization tasks returned.
   */
  DIJobs?: ListDIJobsResponseBodyPagingInfoDIJobs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobs: 'DIJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobs: { 'type': 'array', 'itemType': ListDIJobsResponseBodyPagingInfoDIJobs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskHooks extends $tea.Model {
  /**
   * @remarks
   * Hook触发条件
   * 
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @remarks
   * Hook类型
   * 
   * @example
   * BlockTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      type: 'Type',
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

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers extends $tea.Model {
  /**
   * @remarks
   * 扩展信息，格式为 json，例如钉钉机器人支持 at 所有人
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * 告警接收人类型
   * 
   * @example
   * AliUid
   */
  receiverType?: string;
  /**
   * @remarks
   * 告警接收人
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels extends $tea.Model {
  /**
   * @remarks
   * 通知方式
   */
  channels?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications extends $tea.Model {
  /**
   * @remarks
   * 告警接收人设置
   */
  nofiticationReceivers?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers[];
  /**
   * @remarks
   * 通知方式
   */
  notificationChannels?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels[];
  static names(): { [key: string]: string } {
    return {
      nofiticationReceivers: 'NofiticationReceivers',
      notificationChannels: 'NotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nofiticationReceivers: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNofiticationReceivers },
      notificationChannels: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotificationsNotificationChannels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotifications extends $tea.Model {
  /**
   * @remarks
   * 通知触发条件
   * 
   * @example
   * ${severity} == "High"
   */
  condition?: string;
  /**
   * @remarks
   * 具体的消息通知设置
   */
  notifications?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotificationsNotifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTarget extends $tea.Model {
  /**
   * @remarks
   * 表所属的数据库类型
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * 分区表的分区设置
   * 
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * 表在数据地图中的唯一ID
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * 监控对象类型
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTrigger extends $tea.Model {
  /**
   * @remarks
   * 具体指明哪些调度节点的实例执行成功后可以触发
   */
  taskIds?: number[];
  /**
   * @remarks
   * 何种事件可以触发质量校验任务执行
   * 
   * @example
   * ByScheduledTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask extends $tea.Model {
  /**
   * @remarks
   * 质量监控任务描述
   * 
   * @example
   * This is a daily run data quality evaluation plan.
   */
  description?: string;
  /**
   * @remarks
   * 数据质量校验任务实例生命周期中的回调设置，目前只支持一个阻塞调度任务的Hook
   */
  hooks?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskHooks[];
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * 质量监控任务名称
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * 数据质量校验任务通知订阅配置
   */
  notifications?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotifications;
  /**
   * @remarks
   * 项目空间Id
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * 代表region的资源属性字段
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * 使用数据源时的一些设置，目前只支持指定EMR的yarn队列、采集EMR表时把SQL引擎指定为SPARK-SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK-SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * 参看 DataQualityTarget示例	数据质量校验任务的监控对象，参考 DataQualityTarget
   */
  target?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTarget;
  /**
   * @remarks
   * 租户Id
   * 
   * @example
   * 10
   */
  tenantId?: number;
  /**
   * @remarks
   * 数据质量校验任务的触发配置
   */
  trigger?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      tenantId: 'TenantId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hooks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskHooks },
      id: 'number',
      name: 'string',
      notifications: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskNotifications,
      projectId: 'number',
      regionId: 'string',
      runtimeConf: 'string',
      target: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTarget,
      tenantId: 'number',
      trigger: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTaskTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances extends $tea.Model {
  /**
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @example
   * 1710239005403
   */
  finishTime?: number;
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * {
   *   "bizdate": "20240517",
   *   "triggerTime": "1710239005403"
   * }
   */
  parameters?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * Critical
   */
  status?: string;
  task?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask;
  /**
   * @example
   * {
   *   "TriggerClientId": 10001,
   *   "TriggerClient": "CWF2"
   * }
   */
  triggerContext?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      id: 'Id',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      status: 'Status',
      task: 'Task',
      triggerContext: 'TriggerContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      finishTime: 'number',
      id: 'number',
      parameters: 'string',
      projectId: 'number',
      status: 'string',
      task: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstancesTask,
      triggerContext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfo extends $tea.Model {
  dataQualityEvaluationTaskInstances?: ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskInstances: 'DataQualityEvaluationTaskInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskInstances: { 'type': 'array', 'itemType': ListDataQualityEvaluationTaskInstancesResponseBodyPagingInfoDataQualityEvaluationTaskInstances },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks extends $tea.Model {
  /**
   * @example
   * ${severity} == "High" AND ${status} == "Critical"
   */
  condition?: string;
  /**
   * @example
   * BlockTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      type: 'Type',
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

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels extends $tea.Model {
  channels?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers extends $tea.Model {
  /**
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @example
   * AliUid
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications extends $tea.Model {
  notificationChannels?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels[];
  notificationReceivers?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationChannels: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications extends $tea.Model {
  /**
   * @example
   * ${severity} == "High"
   */
  condition?: string;
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notifications: 'Notifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      notifications: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget extends $tea.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger extends $tea.Model {
  taskIds?: number[];
  /**
   * @example
   * ByScheduledTaskInstance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks extends $tea.Model {
  /**
   * @example
   * This is a daily run data quality evaluation plan
   */
  description?: string;
  hooks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  name?: string;
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications;
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * { "queue": "default", "sqlEngine": "SPARK-SQL" }
   */
  runtimeConf?: string;
  target?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget;
  /**
   * @example
   * 10
   */
  tenantId?: number;
  trigger?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      tenantId: 'TenantId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hooks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks },
      id: 'number',
      name: 'string',
      notifications: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget,
      tenantId: 'number',
      trigger: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityEvaluationTasksResponseBodyPagingInfo extends $tea.Model {
  dataQualityEvaluationTasks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 131
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTasks: 'DataQualityEvaluationTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTasks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails extends $tea.Model {
  /**
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @remarks
   * *   ERROR
   * *   PASSED
   * *   WARNED
   * *   CRITICAL
   * 
   * @example
   * PASSED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical extends $tea.Model {
  /**
   * @remarks
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected extends $tea.Model {
  /**
   * @remarks
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned extends $tea.Model {
  /**
   * @remarks
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds extends $tea.Model {
  critical?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical;
  expected?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected;
  warned?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical,
      expected: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected,
      warned: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig extends $tea.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds;
  /**
   * @remarks
   * *   FIXED
   * *   FLUCTATION
   * *   AUTO
   * *   AVERAGE
   * *   VARIANCE
   * *   FLUCTATION_DISCREATE
   * 
   * @example
   * FIXED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers extends $tea.Model {
  /**
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * *   SAVE_ERROR_DATA
   * 
   * @example
   * SAVE_ERROR_DATA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig extends $tea.Model {
  /**
   * @remarks
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * *
   * 
   * @example
   * COUNT
   */
  metric?: string;
  /**
   * @example
   * { "columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @example
   * SET odps.sql.udf.timeout=600s;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget extends $tea.Model {
  /**
   * @remarks
   * *   MAX_COMPUTE
   * *   EMR
   * *   CDH
   * *   HOLOGRES
   * *   ANALYTICDB_FOR_POSTGRESQL
   * *   ANALYTICDB_FOR_MYSQL
   * *   STAR_ROCKS
   * 
   * @example
   * MAX_COMPUTE
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * *   TABLE
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule extends $tea.Model {
  checkingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig;
  /**
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  errorHandlers?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers[];
  /**
   * @example
   * 100001
   */
  id?: number;
  name?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  samplingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig;
  /**
   * @remarks
   * *   HIGH
   * *   NORMAL
   * 
   * @example
   * NORMAL
   */
  severity?: string;
  target?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget;
  /**
   * @example
   * system::user_defined
   */
  templateCode?: string;
  /**
   * @example
   * 1
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig,
      severity: 'string',
      target: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget,
      templateCode: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResults extends $tea.Model {
  /**
   * @example
   * 1708284916414
   */
  createTime?: number;
  details?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails[];
  /**
   * @example
   * 16033
   */
  id?: number;
  rule?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule;
  /**
   * @example
   * [
   *   {
   *     "gender": "male",
   *     "_count": 100
   *   }, {
   *     "gender": "female",
   *     "_count": 100
   *   }
   * ]
   */
  sample?: string;
  /**
   * @remarks
   * *   RUNNING
   * *   ERROR
   * *   PASSED
   * *   WARNED
   * *   CRITICAL
   * 
   * @example
   * PASSED
   */
  status?: string;
  /**
   * @example
   * 200001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      details: 'Details',
      id: 'Id',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      details: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails },
      id: 'number',
      rule: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule,
      sample: 'string',
      status: 'string',
      taskInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfo extends $tea.Model {
  dataQualityResults?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResults[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 219
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityResults: 'DataQualityResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityResults: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResults },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned extends $tea.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds extends $tea.Model {
  critical?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical;
  expected?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected;
  warned?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical,
      expected: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected,
      warned: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig extends $tea.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds;
  /**
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers extends $tea.Model {
  /**
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @example
   * SaveErrorData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig extends $tea.Model {
  /**
   * @example
   * Max
   */
  metric?: string;
  /**
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @example
   * SET odps.sql.udf.timeout=600s; 
   * SET odps.sql.python.version=cp27;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget extends $tea.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRules extends $tea.Model {
  checkingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig;
  /**
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  errorHandlers?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers[];
  /**
   * @example
   * 22130
   */
  id?: number;
  name?: string;
  /**
   * @example
   * 100001
   */
  projectId?: number;
  samplingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget;
  /**
   * @example
   * system::user_defined
   */
  templateCode?: string;
  /**
   * @example
   * 100001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig,
      severity: 'string',
      target: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget,
      templateCode: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBodyPagingInfo extends $tea.Model {
  dataQualityRules?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRules[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRules: { 'type': 'array', 'itemType': ListDataQualityRulesResponseBodyPagingInfoDataQualityRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceSharedRulesResponseBodyDataSourceSharedRules extends $tea.Model {
  /**
   * @example
   * 1724379762000
   */
  createTime?: number;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * targetProject.datasource
   */
  sharedDataSourceName?: string;
  /**
   * @example
   * 1
   */
  sharedUser?: string;
  /**
   * @example
   * 1
   */
  sourceProjectId?: number;
  /**
   * @example
   * 1
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      id: 'Id',
      sharedDataSourceName: 'SharedDataSourceName',
      sharedUser: 'SharedUser',
      sourceProjectId: 'SourceProjectId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      dataSourceId: 'number',
      envType: 'string',
      id: 'number',
      sharedDataSourceName: 'string',
      sharedUser: 'string',
      sourceProjectId: 'number',
      targetProjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource extends $tea.Model {
  /**
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @example
   * 1648711113000
   */
  createTime?: number;
  /**
   * @example
   * 1624387842781448
   */
  createUser?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 16035
   */
  id?: number;
  /**
   * @example
   * 1648711113000
   */
  modifyTime?: number;
  /**
   * @example
   * 1624387842781448
   */
  modifyUser?: string;
  /**
   * @example
   * 1648711121000:cn-beijing:odps:yongxunQA_beijing_standard
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      qualifiedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfoDataSources extends $tea.Model {
  dataSource?: ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * mysql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource },
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfo extends $tea.Model {
  dataSources?: ListDataSourcesResponseBodyPagingInfoDataSources[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfoDeploymentsStages extends $tea.Model {
  /**
   * @remarks
   * The code of the stage.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * The description of the stage.
   */
  description?: string;
  /**
   * @remarks
   * The additional information about the stage.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The error message returned during the stage.
   */
  message?: string;
  /**
   * @remarks
   * The name of the stage.
   */
  name?: string;
  /**
   * @remarks
   * The status of the stage.
   * 
   * Valid values:
   * 
   * *   INIT
   * *   RUNNING
   * *   SUCCESS
   * *   FAIL
   * *   TERMINATION
   * *   CANCEL
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The step number of the stage.
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * The type of the stage. This parameter indicates the operation type in the stage.
   * 
   * Valid values:
   * 
   * *   DEPLOY
   * *   CHECK
   * *   OFFLINE.
   * *   BUILD
   * *   DELETE
   * 
   * @example
   * CHECK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfoDeployments extends $tea.Model {
  /**
   * @remarks
   * The time when the process was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1702736654000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who creates the process.
   * 
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * ddf354a5-03df-48fc-94c1-cc973f79XXXX
   */
  id?: string;
  /**
   * @remarks
   * The error message returned if the process fails.
   */
  message?: string;
  /**
   * @remarks
   * The time when the process was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1702736654000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 44683
   */
  projectId?: string;
  /**
   * @remarks
   * The stages of the process.
   */
  stages?: ListDeploymentsResponseBodyPagingInfoDeploymentsStages[];
  /**
   * @remarks
   * The status of the process.
   * 
   * Valid values:
   * 
   * *   INIT
   * *   RUNNING
   * *   FAIL
   * *   SUCCESS
   * *   TERMINATION
   * *   CANCEL
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'string',
      stages: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyPagingInfoDeploymentsStages },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The processes.
   */
  deployments?: ListDeploymentsResponseBodyPagingInfoDeployments[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2524
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      deployments: 'Deployments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyPagingInfoDeployments },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsDataSource extends $tea.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
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

export class ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource group used when you run the UDF.
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * The command.
   * 
   * @example
   * ODPS_FUNCTION
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsScript extends $tea.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctions extends $tea.Model {
  /**
   * @remarks
   * The file resources in an Advanced RISC Machines (ARM) cluster.
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  armResource?: string;
  /**
   * @remarks
   * The fully qualified class name of the UDF.
   * 
   * @example
   * com.demo.Main
   */
  className?: string;
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * testUdf(xx,yy)
   */
  commandDescription?: string;
  /**
   * @remarks
   * The time when the UDF was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1655953028000
   */
  createTime?: number;
  /**
   * @remarks
   * The data source information about the UDF.
   */
  dataSource?: ListFunctionsResponseBodyPagingInfoFunctionsDataSource;
  /**
   * @remarks
   * The name of the database. This parameter is returned for E-MapReduce (EMR) functions.
   * 
   * @example
   * odps_first
   */
  databaseName?: string;
  /**
   * @remarks
   * The overall description of the UDF.
   */
  description?: string;
  /**
   * @remarks
   * The code of the embedded UDF.
   * 
   * @example
   * print(\\"hello,world!\\")
   */
  embeddedCode?: string;
  /**
   * @remarks
   * The type of the nested code.
   * 
   * Valid values:
   * 
   * *   Python2
   * *   Python3
   * *   Java8
   * *   Java11
   * *   Java17
   * 
   * @example
   * Python2
   */
  embeddedCodeType?: string;
  /**
   * @remarks
   * The type of the nested resource.
   * 
   * Valid values:
   * 
   * *   File: general resources
   * *   Embedded: embedded resources
   * 
   * @example
   * File
   */
  embeddedResourceType?: string;
  /**
   * @remarks
   * The description of the example.
   */
  exampleDescription?: string;
  /**
   * @remarks
   * The files resources.
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  fileResource?: string;
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @remarks
   * The time when the UDF was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1655953028000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the UDF.
   */
  name?: string;
  /**
   * @remarks
   * The owner of the UDF.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The description of the parameter.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The ID of the workspace to which the UDF belongs.
   * 
   * @example
   * 307XXX
   */
  projectId?: string;
  /**
   * @remarks
   * The description of the return value.
   */
  returnValueDescription?: string;
  /**
   * @remarks
   * The information about the resource group used when you run the UDF.
   */
  runtimeResource?: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource;
  /**
   * @remarks
   * The script information about the UDF.
   */
  script?: ListFunctionsResponseBodyPagingInfoFunctionsScript;
  /**
   * @remarks
   * The UDF type.
   * 
   * Valid values:
   * 
   * *   MATH: mathematical operation function
   * *   AGGREGATE: aggregate function
   * *   STRING: string processing function
   * *   DATE: date function
   * *   ANALYTIC: window function
   * *   OTHER: others
   * 
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      armResource: 'ArmResource',
      className: 'ClassName',
      commandDescription: 'CommandDescription',
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      databaseName: 'DatabaseName',
      description: 'Description',
      embeddedCode: 'EmbeddedCode',
      embeddedCodeType: 'EmbeddedCodeType',
      embeddedResourceType: 'EmbeddedResourceType',
      exampleDescription: 'ExampleDescription',
      fileResource: 'FileResource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      parameterDescription: 'ParameterDescription',
      projectId: 'ProjectId',
      returnValueDescription: 'ReturnValueDescription',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armResource: 'string',
      className: 'string',
      commandDescription: 'string',
      createTime: 'number',
      dataSource: ListFunctionsResponseBodyPagingInfoFunctionsDataSource,
      databaseName: 'string',
      description: 'string',
      embeddedCode: 'string',
      embeddedCodeType: 'string',
      embeddedResourceType: 'string',
      exampleDescription: 'string',
      fileResource: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      parameterDescription: 'string',
      projectId: 'string',
      returnValueDescription: 'string',
      runtimeResource: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource,
      script: ListFunctionsResponseBodyPagingInfoFunctionsScript,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The UDFs.
   */
  functions?: ListFunctionsResponseBodyPagingInfoFunctions[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyPagingInfoFunctions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworksResponseBodyNetworkList extends $tea.Model {
  /**
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @example
   * 1000
   */
  id?: number;
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-2ze13vamugr7jenXXXXX
   */
  securityGroupId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  vpcId?: string;
  /**
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      id: 'number',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesDataSource extends $tea.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables extends $tea.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * The output of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables extends $tea.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 543218872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * The node to which the variable belongs.
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * The scope of the variable.
   * 
   * Valid values:
   * 
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
   * *   Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * Valid values:
   * 
   * *   NoKvVariableExpression
   * *   Constant
   * *   PassThrough
   * *   System
   * *   NodeOutput
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputs extends $tea.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The variables.
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 463497880880954XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables extends $tea.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * The output of the node to which the variable belongs.
   * 
   * @example
   * 463497880880954XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables extends $tea.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * The node to which the variable belongs.
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * The scope of the variable.
   * 
   * Valid values:
   * 
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
   * *   Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * Valid values:
   * 
   * *   NoKvVariableExpression
   * *   Constant
   * *   PassThrough
   * *   System
   * *   NodeOutput
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputs extends $tea.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The variables.
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * S_res_group_XXXX_XXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * The command used to distinguish node types.
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesScript extends $tea.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesStrategy extends $tea.Model {
  /**
   * @remarks
   * The instance generation mode.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The rerun interval after a failure. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode.
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of reruns after a failure.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * The tag value
   * 
   * @example
   * null
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesTrigger extends $tea.Model {
  /**
   * @remarks
   * The CRON expression for scheduling.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the validity period of the scheduling. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * The start time of the validity period of the scheduling. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the trigger.
   * 
   * Valid values:
   * 
   * *   Scheduler
   * *   Manual
   * *   Streaming
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodes extends $tea.Model {
  /**
   * @remarks
   * The time when the node was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * The description of the node.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 723932906364267XXXX
   */
  id?: string;
  /**
   * @remarks
   * The input of the node.
   */
  inputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * The time when the node was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the node.
   */
  name?: string;
  /**
   * @remarks
   * The output of the node.
   */
  outputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * The owner of the node.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 65133
   */
  projectId?: string;
  /**
   * @remarks
   * The scheduling type.
   * 
   * Valid values:
   * 
   * *   Normal: The node is scheduled as expected.
   * *   Pause: The node is paused, and the running of its descendant nodes is blocked.
   * *   Skip: The node is dry run. The system does not actually run the node but directly prompts that the node is successfully run. The running duration of the node is 0 seconds. In addition, the node does not occupy resources or block the running of its descendant nodes.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The information about the resource group.
   */
  runtimeResource?: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: ListNodeDependenciesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * The scheduling policy.
   */
  strategy?: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * The tags. This parameter is not in use.
   */
  tags?: ListNodeDependenciesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * The scheduling task ID.
   * 
   * @example
   * 580667964888595XXXX
   */
  taskId?: string;
  /**
   * @remarks
   * The trigger.
   */
  trigger?: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodeDependenciesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'string',
      recurrence: 'string',
      runtimeResource: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodeDependenciesResponseBodyPagingInfoNodesScript,
      strategy: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesTags },
      taskId: 'string',
      trigger: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The descendant nodes.
   */
  nodes?: ListNodeDependenciesResponseBodyPagingInfoNodes[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 90
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesDataSource extends $tea.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
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

export class ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 623731286945488XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsTables extends $tea.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * The output of the node.
   * 
   * @example
   * 623731286945488XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsVariables extends $tea.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 543211286945488XXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * The node to which the variable belongs.
   */
  node?: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * The scope of the variable.
   * 
   * Valid values:
   * 
   * *   WorkSpace
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * Valid values:
   * 
   * *   NoKvVariableExpression
   * *   Constant
   * *   PassThrough
   * *   System
   * *   NodeOutput
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * 222
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputs extends $tea.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The variables.
   */
  variables?: ListNodesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsTables extends $tea.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * The output of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsVariables extends $tea.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 623731286945488XXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * The node to which the variable belongs.
   */
  node?: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * The scope of the variable.
   * 
   * Valid values:
   * 
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
   * *   Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * Valid values:
   * 
   * *   NoKvVariableExpression
   * *   Constant
   * *   PassThrough
   * *   System
   * *   NodeOutput
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputs extends $tea.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The variables.
   */
  variables?: ListNodesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * The command used to distinguish node types.
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesScript extends $tea.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListNodesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesStrategy extends $tea.Model {
  /**
   * @remarks
   * The instance generation mode.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The rerun interval. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode.
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of reruns.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * null
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

export class ListNodesResponseBodyPagingInfoNodesTrigger extends $tea.Model {
  /**
   * @remarks
   * The CRON expression for scheduling.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the validity period of the trigger.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * The start time of the validity period of the trigger.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the trigger.
   * 
   * Valid values:
   * 
   * *   Scheduler
   * *   Manual
   * *   Steaming
   * 
   * <!---->
   * 
   * *
   * *
   * *
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodes extends $tea.Model {
  /**
   * @remarks
   * The time when the node was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1722910655000
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: ListNodesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * The description of the node.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The input of the node.
   */
  inputs?: ListNodesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * The time when the node was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1722910655000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The output of the node.
   */
  outputs?: ListNodesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * The owner of the node.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * @example
   * 33233
   */
  projectId?: string;
  /**
   * @remarks
   * The scheduling type.
   * 
   * Valid values:
   * 
   * *   Normal: The node is scheduled as expected.
   * *   Pause: The node is paused, and the running of its descendant nodes is blocked.
   * *   Skip: The node is dry run. The system does not actually run the node but directly prompts that the node is successfully run. The running duration of the node is 0 seconds. In addition, the node does not occupy resources or block the running of its descendant nodes.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The information about the resource group.
   */
  runtimeResource?: ListNodesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: ListNodesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * The scheduling policy.
   */
  strategy?: ListNodesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * The tags. This parameter is not in use.
   */
  tags?: ListNodesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * The scheduling task ID.
   * 
   * @example
   * 88888888888
   */
  taskId?: string;
  /**
   * @remarks
   * The trigger.
   */
  trigger?: ListNodesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'string',
      recurrence: 'string',
      runtimeResource: ListNodesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodesResponseBodyPagingInfoNodesScript,
      strategy: ListNodesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesTags },
      taskId: 'string',
      trigger: ListNodesResponseBodyPagingInfoNodesTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The nodes.
   */
  nodes?: ListNodesResponseBodyPagingInfoNodes[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 42
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyPagingInfoProjectMembersRoles extends $tea.Model {
  /**
   * @example
   * role_project_guest
   */
  code?: string;
  name?: string;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyPagingInfoProjectMembers extends $tea.Model {
  /**
   * @example
   * 62136
   */
  projectId?: number;
  roles?: ListProjectMembersResponseBodyPagingInfoProjectMembersRoles[];
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roles: 'Roles',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roles: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPagingInfoProjectMembersRoles },
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  projectMembers?: ListProjectMembersResponseBodyPagingInfoProjectMembers[];
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectMembers: 'ProjectMembers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectMembers: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPagingInfoProjectMembers },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBodyPagingInfoProjectRoles extends $tea.Model {
  /**
   * @example
   * role_project_guest
   */
  code?: string;
  name?: string;
  /**
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  projectRoles?: ListProjectRolesResponseBodyPagingInfoProjectRoles[];
  /**
   * @example
   * 42
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectRoles: 'ProjectRoles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      projectRoles: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyPagingInfoProjectRoles },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequestAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
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

export class ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags extends $tea.Model {
  /**
   * @example
   * batch
   */
  key?: string;
  /**
   * @example
   * blue
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

export class ListProjectsResponseBodyPagingInfoProjects extends $tea.Model {
  /**
   * @example
   * rg-acfmzbn7pti3zfa
   */
  aliyunResourceGroupId?: string;
  aliyunResourceTags?: ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags[];
  description?: string;
  /**
   * @example
   * true
   */
  devEnvironmentEnabled?: boolean;
  /**
   * @example
   * false
   */
  devRoleDisabled?: boolean;
  displayName?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * sora_finance
   */
  name?: string;
  /**
   * @example
   * 123532153125
   */
  owner?: string;
  /**
   * @example
   * true
   */
  paiTaskEnabled?: boolean;
  /**
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      aliyunResourceTags: 'AliyunResourceTags',
      description: 'Description',
      devEnvironmentEnabled: 'DevEnvironmentEnabled',
      devRoleDisabled: 'DevRoleDisabled',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      paiTaskEnabled: 'PaiTaskEnabled',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      aliyunResourceTags: { 'type': 'array', 'itemType': ListProjectsResponseBodyPagingInfoProjectsAliyunResourceTags },
      description: 'string',
      devEnvironmentEnabled: 'boolean',
      devRoleDisabled: 'boolean',
      displayName: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      paiTaskEnabled: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  projects?: ListProjectsResponseBodyPagingInfoProjects[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projects: 'Projects',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyPagingInfoProjects },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyResourceGroupListSpec extends $tea.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * 2CU
   */
  standard?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      standard: 'Standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      standard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyResourceGroupList extends $tea.Model {
  /**
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @example
   * 11075500042XXXXX
   */
  createUser?: string;
  /**
   * @example
   * vpc-m2et4f3oc8msfbccXXXXX
   */
  defaultVpcId?: string;
  /**
   * @example
   * vsw-uf8usrhs7hjd9amsXXXXX
   */
  defaultVswicthId?: string;
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @example
   * c442b330-3b10-4584-959e-736e4edXXXXX
   */
  orderInstanceId?: string;
  /**
   * @example
   * PrePaid
   */
  paymentType?: string;
  /**
   * @example
   * 创建用于普通任务的通用资源组
   */
  remark?: string;
  /**
   * @example
   * CommonV2
   */
  resourceGroupType?: string;
  spec?: ListResourceGroupsResponseBodyResourceGroupListSpec;
  /**
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      defaultVpcId: 'DefaultVpcId',
      defaultVswicthId: 'DefaultVswicthId',
      id: 'Id',
      name: 'Name',
      orderInstanceId: 'OrderInstanceId',
      paymentType: 'PaymentType',
      remark: 'Remark',
      resourceGroupType: 'ResourceGroupType',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      defaultVpcId: 'string',
      defaultVswicthId: 'string',
      id: 'string',
      name: 'string',
      orderInstanceId: 'string',
      paymentType: 'string',
      remark: 'string',
      resourceGroupType: 'string',
      spec: ListResourceGroupsResponseBodyResourceGroupListSpec,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesDataSource extends $tea.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
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

export class ListResourcesResponseBodyPagingInfoResourcesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * The command used to distinguish file resource types.
   * 
   * @example
   * ODPS_PYTHON
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesScript extends $tea.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 123348864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResources extends $tea.Model {
  /**
   * @remarks
   * The time when the file resource was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: ListResourcesResponseBodyPagingInfoResourcesDataSource;
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The times when the file resource was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the file resource.
   * 
   * @example
   * math.py
   */
  name?: string;
  /**
   * @remarks
   * The owner of the file resource.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * @example
   * 344247
   */
  projectId?: string;
  /**
   * @remarks
   * The script information.
   */
  script?: ListResourcesResponseBodyPagingInfoResourcesScript;
  /**
   * @remarks
   * The path of the source of the file resource. If the SourecType parameter is set to Local, this parameter is left empty.
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  sourcePath?: string;
  /**
   * @remarks
   * The storage type of the source of the file resource.
   * 
   * Valid values:
   * 
   * *   Local
   * *   Oss
   * 
   * @example
   * local
   */
  sourceType?: string;
  /**
   * @remarks
   * The storage path of the destination of the file resource.
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  targetPath?: string;
  /**
   * @remarks
   * The storage type of the destination of the file resource.
   * 
   * Valid values:
   * 
   * *   Gateway
   * *   Oss
   * *   Hdfs
   * 
   * @example
   * oss
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the file resource.
   * 
   * Valid values:
   * 
   * *   Python
   * *   Jar
   * *   Archive
   * *   File
   * 
   * @example
   * jar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListResourcesResponseBodyPagingInfoResourcesDataSource,
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      script: ListResourcesResponseBodyPagingInfoResourcesScript,
      sourcePath: 'string',
      sourceType: 'string',
      targetPath: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The file resources.
   */
  resources?: ListResourcesResponseBodyPagingInfoResources[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyPagingInfoResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutesResponseBodyRouteList extends $tea.Model {
  /**
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @example
   * 1000
   */
  id?: number;
  /**
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @example
   * ns-679XXXXXX
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destinationCidr: 'DestinationCidr',
      id: 'Id',
      networkId: 'NetworkId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      destinationCidr: 'string',
      id: 'number',
      networkId: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * The command.
   * 
   * @example
   * WORKFLOW
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript extends $tea.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 698002781368644XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions extends $tea.Model {
  /**
   * @remarks
   * The time when the workflow was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1698057323000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the workflow.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The times when the workflow was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1698057323000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the workflow.
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the workflow belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 4710
   */
  projectId?: string;
  /**
   * @remarks
   * The script information.
   */
  script?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript;
  /**
   * @remarks
   * The type of the workflow.
   * 
   * Valid values:
   * 
   * *   CycleWorkflow
   * *   ManualWorkflow
   * 
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      script: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfo extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 227
   */
  totalCount?: number;
  /**
   * @remarks
   * The workflows.
   */
  workflowDefinitions?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflowDefinitions: 'WorkflowDefinitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflowDefinitions: { 'type': 'array', 'itemType': ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequestRealtimeStartSettingsFailoverSettings extends $tea.Model {
  /**
   * @example
   * 10
   */
  interval?: number;
  /**
   * @example
   * 30
   */
  upperLimit?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      upperLimit: 'UpperLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      upperLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDIJobRequestRealtimeStartSettings extends $tea.Model {
  failoverSettings?: StartDIJobRequestRealtimeStartSettingsFailoverSettings;
  /**
   * @example
   * 1671516776
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      failoverSettings: 'FailoverSettings',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverSettings: StartDIJobRequestRealtimeStartSettingsFailoverSettings,
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleRequestNotificationSettingsNotificationChannels extends $tea.Model {
  channels?: string[];
  /**
   * @example
   * Warning
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleRequestNotificationSettingsNotificationReceivers extends $tea.Model {
  /**
   * @example
   * DingToken
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleRequestNotificationSettings extends $tea.Model {
  /**
   * @example
   * 5
   */
  inhibitionInterval?: number;
  notificationChannels?: UpdateDIAlarmRuleRequestNotificationSettingsNotificationChannels[];
  notificationReceivers?: UpdateDIAlarmRuleRequestNotificationSettingsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      inhibitionInterval: 'InhibitionInterval',
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inhibitionInterval: 'number',
      notificationChannels: { 'type': 'array', 'itemType': UpdateDIAlarmRuleRequestNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': UpdateDIAlarmRuleRequestNotificationSettingsNotificationReceivers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIAlarmRuleRequestTriggerConditions extends $tea.Model {
  ddlReportTags?: string[];
  /**
   * @example
   * 15
   */
  duration?: number;
  /**
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @example
   * 5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      ddlReportTags: 'DdlReportTags',
      duration: 'Duration',
      severity: 'Severity',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlReportTags: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsColumnDataTypeSettings extends $tea.Model {
  /**
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsCycleScheduleSettings extends $tea.Model {
  /**
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsDdlHandlingSettings extends $tea.Model {
  /**
   * @example
   * Critical
   */
  action?: string;
  /**
   * @example
   * AddColumn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsRuntimeSettings extends $tea.Model {
  /**
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @example
   * 1
   */
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

export class UpdateDIJobRequestJobSettings extends $tea.Model {
  /**
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  columnDataTypeSettings?: UpdateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: UpdateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: UpdateDIJobRequestJobSettingsDdlHandlingSettings[];
  runtimeSettings?: UpdateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: UpdateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsRuntimeSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsOfflineResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsRealtimeResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsScheduleResourceSettings extends $tea.Model {
  /**
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @example
   * S_res_group_235454102432001_1721021993437
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettings extends $tea.Model {
  offlineResourceSettings?: UpdateDIJobRequestResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings;
  scheduleResourceSettings?: UpdateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: UpdateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: UpdateDIJobRequestResourceSettingsScheduleResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappingsSourceObjectSelectionRules extends $tea.Model {
  /**
   * @example
   * Include
   */
  action?: string;
  /**
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappingsTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappings extends $tea.Model {
  sourceObjectSelectionRules?: UpdateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  transformationRules?: UpdateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsTransformationRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTransformationRules extends $tea.Model {
  /**
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
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
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Terminates the process for deploying or undeploying an entity. The process is not deleted and can still be queried by calling query operations.
   * 
   * @param request - AbolishDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbolishDeploymentResponse
   */
  async abolishDeploymentWithOptions(request: AbolishDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<AbolishDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AbolishDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbolishDeploymentResponse>(await this.callApi(params, req, runtime), new AbolishDeploymentResponse({}));
  }

  /**
   * Terminates the process for deploying or undeploying an entity. The process is not deleted and can still be queried by calling query operations.
   * 
   * @param request - AbolishDeploymentRequest
   * @returns AbolishDeploymentResponse
   */
  async abolishDeployment(request: AbolishDeploymentRequest): Promise<AbolishDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishDeploymentWithOptions(request, runtime);
  }

  /**
   * Associates a resource group with a workspace.
   * 
   * @param request - AssociateProjectToResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateProjectToResourceGroupResponse
   */
  async associateProjectToResourceGroupWithOptions(request: AssociateProjectToResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AssociateProjectToResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssociateProjectToResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateProjectToResourceGroupResponse>(await this.callApi(params, req, runtime), new AssociateProjectToResourceGroupResponse({}));
  }

  /**
   * Associates a resource group with a workspace.
   * 
   * @param request - AssociateProjectToResourceGroupRequest
   * @returns AssociateProjectToResourceGroupResponse
   */
  async associateProjectToResourceGroup(request: AssociateProjectToResourceGroupRequest): Promise<AssociateProjectToResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateProjectToResourceGroupWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - CloneDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneDataSourceResponse
   */
  async cloneDataSourceWithOptions(request: CloneDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CloneDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloneDataSourceName)) {
      query["CloneDataSourceName"] = request.cloneDataSourceName;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneDataSourceResponse>(await this.callApi(params, req, runtime), new CloneDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - CloneDataSourceRequest
   * @returns CloneDataSourceResponse
   */
  async cloneDataSource(request: CloneDataSourceRequest): Promise<CloneDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneDataSourceWithOptions(request, runtime);
  }

  /**
   * 创建数据集成报警规则
   * 
   * @param tmpReq - CreateDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIAlarmRuleResponse
   */
  async createDIAlarmRuleWithOptions(tmpReq: CreateDIAlarmRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDIAlarmRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDIAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.notificationSettings)) {
      request.notificationSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationSettings, "NotificationSettings", "json");
    }

    if (!Util.isUnset(tmpReq.triggerConditions)) {
      request.triggerConditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConditions, "TriggerConditions", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDIAlarmRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new CreateDIAlarmRuleResponse({}));
  }

  /**
   * 创建数据集成报警规则
   * 
   * @param request - CreateDIAlarmRuleRequest
   * @returns CreateDIAlarmRuleResponse
   */
  async createDIAlarmRule(request: CreateDIAlarmRuleRequest): Promise<CreateDIAlarmRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * 创建数据集成任务
   * 
   * @param tmpReq - CreateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIJobResponse
   */
  async createDIJobWithOptions(tmpReq: CreateDIJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destinationDataSourceSettings)) {
      request.destinationDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationDataSourceSettings, "DestinationDataSourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.sourceDataSourceSettings)) {
      request.sourceDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceDataSourceSettings, "SourceDataSourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!Util.isUnset(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDIJobResponse>(await this.callApi(params, req, runtime), new CreateDIJobResponse({}));
  }

  /**
   * 创建数据集成任务
   * 
   * @param request - CreateDIJobRequest
   * @returns CreateDIJobResponse
   */
  async createDIJob(request: CreateDIJobRequest): Promise<CreateDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDIJobWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(request: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionProperties)) {
      query["ConnectionProperties"] = request.connectionProperties;
    }

    if (!Util.isUnset(request.connectionPropertiesMode)) {
      query["ConnectionPropertiesMode"] = request.connectionPropertiesMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceResponse>(await this.callApi(params, req, runtime), new CreateDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceSharedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceSharedRuleResponse
   */
  async createDataSourceSharedRuleWithOptions(request: CreateDataSourceSharedRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceSharedRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!Util.isUnset(request.sharedUser)) {
      query["SharedUser"] = request.sharedUser;
    }

    if (!Util.isUnset(request.targetProjectId)) {
      query["TargetProjectId"] = request.targetProjectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSourceSharedRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceSharedRuleResponse>(await this.callApi(params, req, runtime), new CreateDataSourceSharedRuleResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - CreateDataSourceSharedRuleRequest
   * @returns CreateDataSourceSharedRuleResponse
   */
  async createDataSourceSharedRule(request: CreateDataSourceSharedRuleRequest): Promise<CreateDataSourceSharedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceSharedRuleWithOptions(request, runtime);
  }

  /**
   * Creates a process for deploying or undeploying an entity in DataStudio.
   * 
   * @remarks
   * >  You cannot use this API operation to create a process for multiple entities at a time. If you specify multiple entities in a request, the system creates a process only for the first entity.
   * 
   * @param tmpReq - CreateDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentResponse
   */
  async createDeploymentWithOptions(tmpReq: CreateDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDeploymentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "ObjectIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.objectIdsShrink)) {
      body["ObjectIds"] = request.objectIdsShrink;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentResponse>(await this.callApi(params, req, runtime), new CreateDeploymentResponse({}));
  }

  /**
   * Creates a process for deploying or undeploying an entity in DataStudio.
   * 
   * @remarks
   * >  You cannot use this API operation to create a process for multiple entities at a time. If you specify multiple entities in a request, the system creates a process only for the first entity.
   * 
   * @param request - CreateDeploymentRequest
   * @returns CreateDeploymentResponse
   */
  async createDeployment(request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeploymentWithOptions(request, runtime);
  }

  /**
   * Creates a user-defined function (UDF) in DataStudio. The information about the UDF is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple UDFs at a time. If you specify multiple UDFs by using FlowSpec, the system creates only the first specified UDF.
   * 
   * @param request - CreateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResponse
   */
  async createFunctionWithOptions(request: CreateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  /**
   * Creates a user-defined function (UDF) in DataStudio. The information about the UDF is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple UDFs at a time. If you specify multiple UDFs by using FlowSpec, the system creates only the first specified UDF.
   * 
   * @param request - CreateFunctionRequest
   * @returns CreateFunctionResponse
   */
  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionWithOptions(request, runtime);
  }

  /**
   * 创建并绑定通用资源组网络资源。
   * 
   * @param request - CreateNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkResponse
   */
  async createNetworkWithOptions(request: CreateNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      body["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetwork",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkResponse>(await this.callApi(params, req, runtime), new CreateNetworkResponse({}));
  }

  /**
   * 创建并绑定通用资源组网络资源。
   * 
   * @param request - CreateNetworkRequest
   * @returns CreateNetworkResponse
   */
  async createNetwork(request: CreateNetworkRequest): Promise<CreateNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkWithOptions(request, runtime);
  }

  /**
   * Creates a node in DataStudio. The information about the node is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple nodes at a time. If you specify multiple nodes by using FlowSpec, the system creates only the first specified node.
   * 
   * @param request - CreateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeResponse
   */
  async createNodeWithOptions(request: CreateNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.containerId)) {
      body["ContainerId"] = request.containerId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeResponse>(await this.callApi(params, req, runtime), new CreateNodeResponse({}));
  }

  /**
   * Creates a node in DataStudio. The information about the node is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple nodes at a time. If you specify multiple nodes by using FlowSpec, the system creates only the first specified node.
   * 
   * @param request - CreateNodeRequest
   * @returns CreateNodeResponse
   */
  async createNode(request: CreateNodeRequest): Promise<CreateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!Util.isUnset(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!Util.isUnset(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * 添加工作空间成员
   * 
   * @param tmpReq - CreateProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectMemberResponse
   */
  async createProjectMemberWithOptions(tmpReq: CreateProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProjectMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProjectMember",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectMemberResponse>(await this.callApi(params, req, runtime), new CreateProjectMemberResponse({}));
  }

  /**
   * 添加工作空间成员
   * 
   * @param request - CreateProjectMemberRequest
   * @returns CreateProjectMemberResponse
   */
  async createProjectMember(request: CreateProjectMemberRequest): Promise<CreateProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectMemberWithOptions(request, runtime);
  }

  /**
   * Creates a file resource in DataStudio. The information about the file resource is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple file resources at a time. If you specify multiple file resources by using FlowSpec, the system creates only the first specified resource.
   * 
   * @param request - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: CreateResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  /**
   * Creates a file resource in DataStudio. The information about the file resource is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple file resources at a time. If you specify multiple file resources by using FlowSpec, the system creates only the first specified resource.
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  /**
   * 创建通用资源组。
   * 
   * @param request - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.paymentDuration)) {
      body["PaymentDuration"] = request.paymentDuration;
    }

    if (!Util.isUnset(request.paymentDurationUnit)) {
      body["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!Util.isUnset(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      body["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateResourceGroupResponse({}));
  }

  /**
   * 创建通用资源组。
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建网络资源的路由。
   * 
   * @param request - CreateRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteResponse
   */
  async createRouteWithOptions(request: CreateRouteRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationCidr)) {
      body["DestinationCidr"] = request.destinationCidr;
    }

    if (!Util.isUnset(request.networkId)) {
      body["NetworkId"] = request.networkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRouteResponse>(await this.callApi(params, req, runtime), new CreateRouteResponse({}));
  }

  /**
   * 创建网络资源的路由。
   * 
   * @param request - CreateRouteRequest
   * @returns CreateRouteResponse
   */
  async createRoute(request: CreateRouteRequest): Promise<CreateRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouteWithOptions(request, runtime);
  }

  /**
   * Creates a workflow in a directory of DataStudio.
   * 
   * @remarks
   * > You cannot use this API operation to create multiple workflows at a time. If you specify multiple workflows by using FlowSpec, the system creates only the first specified workflow. Other specified workflows and the nodes in the workflows are ignored. You can call the CreateNode operation to create a node.
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinitionWithOptions(request: CreateWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new CreateWorkflowDefinitionResponse({}));
  }

  /**
   * Creates a workflow in a directory of DataStudio.
   * 
   * @remarks
   * > You cannot use this API operation to create multiple workflows at a time. If you specify multiple workflows by using FlowSpec, the system creates only the first specified workflow. Other specified workflows and the nodes in the workflows are ignored. You can call the CreateNode operation to create a node.
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinition(request: CreateWorkflowDefinitionRequest): Promise<CreateWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Deletes an alert rule configured for a synchronization task.
   * 
   * @param request - DeleteDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIAlarmRuleResponse
   */
  async deleteDIAlarmRuleWithOptions(request: DeleteDIAlarmRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDIAlarmRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDIAlarmRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new DeleteDIAlarmRuleResponse({}));
  }

  /**
   * Deletes an alert rule configured for a synchronization task.
   * 
   * @param request - DeleteDIAlarmRuleRequest
   * @returns DeleteDIAlarmRuleResponse
   */
  async deleteDIAlarmRule(request: DeleteDIAlarmRuleRequest): Promise<DeleteDIAlarmRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * 删除数据集成任务
   * 
   * @param request - DeleteDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIJobResponse
   */
  async deleteDIJobWithOptions(request: DeleteDIJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDIJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDIJobResponse>(await this.callApi(params, req, runtime), new DeleteDIJobResponse({}));
  }

  /**
   * 删除数据集成任务
   * 
   * @param request - DeleteDIJobRequest
   * @returns DeleteDIJobResponse
   */
  async deleteDIJob(request: DeleteDIJobRequest): Promise<DeleteDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDIJobWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceSharedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceSharedRuleResponse
   */
  async deleteDataSourceSharedRuleWithOptions(request: DeleteDataSourceSharedRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceSharedRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSourceSharedRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceSharedRuleResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceSharedRuleResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - DeleteDataSourceSharedRuleRequest
   * @returns DeleteDataSourceSharedRuleResponse
   */
  async deleteDataSourceSharedRule(request: DeleteDataSourceSharedRuleRequest): Promise<DeleteDataSourceSharedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceSharedRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a user-defined function (UDF) in DataStudio.
   * 
   * @remarks
   * >  A UDF that is deployed cannot be deleted. If you want to delete such a UDF, you must first undeploy the UDF.
   * 
   * @param request - DeleteFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(request: DeleteFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  /**
   * Deletes a user-defined function (UDF) in DataStudio.
   * 
   * @remarks
   * >  A UDF that is deployed cannot be deleted. If you want to delete such a UDF, you must first undeploy the UDF.
   * 
   * @param request - DeleteFunctionRequest
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(request: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionWithOptions(request, runtime);
  }

  /**
   * 解绑并删除通用资源组网络资源。
   * 
   * @param request - DeleteNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkResponse
   */
  async deleteNetworkWithOptions(request: DeleteNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetwork",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkResponse>(await this.callApi(params, req, runtime), new DeleteNetworkResponse({}));
  }

  /**
   * 解绑并删除通用资源组网络资源。
   * 
   * @param request - DeleteNetworkRequest
   * @returns DeleteNetworkResponse
   */
  async deleteNetwork(request: DeleteNetworkRequest): Promise<DeleteNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkWithOptions(request, runtime);
  }

  /**
   * Deletes a node from DataStudio.
   * 
   * @remarks
   * >  A node that is deployed cannot be deleted. If you want to delete such a node, you must first undeploy the node.
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: DeleteNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodeResponse>(await this.callApi(params, req, runtime), new DeleteNodeResponse({}));
  }

  /**
   * Deletes a node from DataStudio.
   * 
   * @remarks
   * >  A node that is deployed cannot be deleted. If you want to delete such a node, you must first undeploy the node.
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * 销毁工作空间
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  /**
   * 销毁工作空间
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * 移除工作空间成员
   * 
   * @param request - DeleteProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectMemberResponse
   */
  async deleteProjectMemberWithOptions(request: DeleteProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProjectMember",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectMemberResponse>(await this.callApi(params, req, runtime), new DeleteProjectMemberResponse({}));
  }

  /**
   * 移除工作空间成员
   * 
   * @param request - DeleteProjectMemberRequest
   * @returns DeleteProjectMemberResponse
   */
  async deleteProjectMember(request: DeleteProjectMemberRequest): Promise<DeleteProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectMemberWithOptions(request, runtime);
  }

  /**
   * Deletes a file resource from DataStudio.
   * 
   * @remarks
   * >  A file resource that is deployed cannot be deleted. If you want to delete such a file resource, you must first undeploy the file resource.
   * 
   * @param request - DeleteResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(request: DeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  /**
   * Deletes a file resource from DataStudio.
   * 
   * @remarks
   * >  A file resource that is deployed cannot be deleted. If you want to delete such a file resource, you must first undeploy the file resource.
   * 
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(request: DeleteResourceRequest): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a serverless resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: DeleteResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupResponse({}));
  }

  /**
   * Deletes a serverless resource group.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * 删除网络资源的路由。
   * 
   * @param request - DeleteRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteResponse
   */
  async deleteRouteWithOptions(request: DeleteRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRouteResponse>(await this.callApi(params, req, runtime), new DeleteRouteResponse({}));
  }

  /**
   * 删除网络资源的路由。
   * 
   * @param request - DeleteRouteRequest
   * @returns DeleteRouteResponse
   */
  async deleteRoute(request: DeleteRouteRequest): Promise<DeleteRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteWithOptions(request, runtime);
  }

  /**
   * Deletes a workflow from DataStudio.
   * 
   * @remarks
   * >  A workflow that is deployed cannot be deleted. If you want to delete such a workflow, you must first undeploy the workflow.
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinitionWithOptions(request: DeleteWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new DeleteWorkflowDefinitionResponse({}));
  }

  /**
   * Deletes a workflow from DataStudio.
   * 
   * @remarks
   * >  A workflow that is deployed cannot be deleted. If you want to delete such a workflow, you must first undeploy the workflow.
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinition(request: DeleteWorkflowDefinitionRequest): Promise<DeleteWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Disassociates a resource group from a workspace.
   * 
   * @param request - DissociateProjectFromResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateProjectFromResourceGroupResponse
   */
  async dissociateProjectFromResourceGroupWithOptions(request: DissociateProjectFromResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DissociateProjectFromResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DissociateProjectFromResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateProjectFromResourceGroupResponse>(await this.callApi(params, req, runtime), new DissociateProjectFromResourceGroupResponse({}));
  }

  /**
   * Disassociates a resource group from a workspace.
   * 
   * @param request - DissociateProjectFromResourceGroupRequest
   * @returns DissociateProjectFromResourceGroupResponse
   */
  async dissociateProjectFromResourceGroup(request: DissociateProjectFromResourceGroupRequest): Promise<DissociateProjectFromResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateProjectFromResourceGroupWithOptions(request, runtime);
  }

  /**
   * Executes a stage in a process.
   * 
   * @remarks
   * >  The stages in a process are sequential. For more information, see the GetDeployment operation. Skipping or repeating a stage is not allowed.
   * >  The execution of a stage is asynchronous. The response of this operation indicates only whether a stage is triggered but does not indicate whether the execution of the stage is successful. You can call the GetDeployment operation to check whether the execution is successful.
   * 
   * @param request - ExecDeploymentStageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDeploymentStageResponse
   */
  async execDeploymentStageWithOptions(request: ExecDeploymentStageRequest, runtime: $Util.RuntimeOptions): Promise<ExecDeploymentStageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecDeploymentStage",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecDeploymentStageResponse>(await this.callApi(params, req, runtime), new ExecDeploymentStageResponse({}));
  }

  /**
   * Executes a stage in a process.
   * 
   * @remarks
   * >  The stages in a process are sequential. For more information, see the GetDeployment operation. Skipping or repeating a stage is not allowed.
   * >  The execution of a stage is asynchronous. The response of this operation indicates only whether a stage is triggered but does not indicate whether the execution of the stage is successful. You can call the GetDeployment operation to check whether the execution is successful.
   * 
   * @param request - ExecDeploymentStageRequest
   * @returns ExecDeploymentStageResponse
   */
  async execDeploymentStage(request: ExecDeploymentStageRequest): Promise<ExecDeploymentStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDeploymentStageWithOptions(request, runtime);
  }

  /**
   * 查看数据集成任务
   * 
   * @param request - GetDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobResponse
   */
  async getDIJobWithOptions(request: GetDIJobRequest, runtime: $Util.RuntimeOptions): Promise<GetDIJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDIJobResponse>(await this.callApi(params, req, runtime), new GetDIJobResponse({}));
  }

  /**
   * 查看数据集成任务
   * 
   * @param request - GetDIJobRequest
   * @returns GetDIJobResponse
   */
  async getDIJob(request: GetDIJobRequest): Promise<GetDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDIJobWithOptions(request, runtime);
  }

  /**
   * Obtains logs generated for a synchronization task.
   * 
   * @param request - GetDIJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobLogResponse
   */
  async getDIJobLogWithOptions(request: GetDIJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetDIJobLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDIJobLog",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDIJobLogResponse>(await this.callApi(params, req, runtime), new GetDIJobLogResponse({}));
  }

  /**
   * Obtains logs generated for a synchronization task.
   * 
   * @param request - GetDIJobLogRequest
   * @returns GetDIJobLogResponse
   */
  async getDIJobLog(request: GetDIJobLogRequest): Promise<GetDIJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDIJobLogWithOptions(request, runtime);
  }

  /**
   * Queries a data source by ID.
   * 
   * @remarks
   * You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Deployment, Development, Project Owner, and O\\&M
   * 
   * @param request - GetDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceResponse
   */
  async getDataSourceWithOptions(request: GetDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceResponse>(await this.callApi(params, req, runtime), new GetDataSourceResponse({}));
  }

  /**
   * Queries a data source by ID.
   * 
   * @remarks
   * You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Deployment, Development, Project Owner, and O\\&M
   * 
   * @param request - GetDataSourceRequest
   * @returns GetDataSourceResponse
   */
  async getDataSource(request: GetDataSourceRequest): Promise<GetDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a process for deploying or undeploying an entity.
   * 
   * @param request - GetDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(request: GetDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
  }

  /**
   * Queries the information about a process for deploying or undeploying an entity.
   * 
   * @param request - GetDeploymentRequest
   * @returns GetDeploymentResponse
   */
  async getDeployment(request: GetDeploymentRequest): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  /**
   * Queries the information about a user-defined function (UDF) in DataStudio.
   * 
   * @param request - GetFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResponse
   */
  async getFunctionWithOptions(request: GetFunctionRequest, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  /**
   * Queries the information about a user-defined function (UDF) in DataStudio.
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFunctionWithOptions(request, runtime);
  }

  /**
   * 返回异步任务的状态信息
   * 
   * @param request - GetJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobStatusResponse
   */
  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobStatus",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobStatusResponse>(await this.callApi(params, req, runtime), new GetJobStatusResponse({}));
  }

  /**
   * 返回异步任务的状态信息
   * 
   * @param request - GetJobStatusRequest
   * @returns GetJobStatusResponse
   */
  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  /**
   * 获取某个网络资源详细信息。
   * 
   * @param request - GetNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkResponse
   */
  async getNetworkWithOptions(request: GetNetworkRequest, runtime: $Util.RuntimeOptions): Promise<GetNetworkResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNetwork",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNetworkResponse>(await this.callApi(params, req, runtime), new GetNetworkResponse({}));
  }

  /**
   * 获取某个网络资源详细信息。
   * 
   * @param request - GetNetworkRequest
   * @returns GetNetworkResponse
   */
  async getNetwork(request: GetNetworkRequest): Promise<GetNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNetworkWithOptions(request, runtime);
  }

  /**
   * Queries the information about a node in DataStudio.
   * 
   * @param request - GetNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeResponse
   */
  async getNodeWithOptions(request: GetNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeResponse>(await this.callApi(params, req, runtime), new GetNodeResponse({}));
  }

  /**
   * Queries the information about a node in DataStudio.
   * 
   * @param request - GetNodeRequest
   * @returns GetNodeResponse
   */
  async getNode(request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  /**
   * 查询工作空间详情
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  /**
   * 查询工作空间详情
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * 查询工作空间成员详情
   * 
   * @param request - GetProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectMemberResponse
   */
  async getProjectMemberWithOptions(request: GetProjectMemberRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectMember",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectMemberResponse>(await this.callApi(params, req, runtime), new GetProjectMemberResponse({}));
  }

  /**
   * 查询工作空间成员详情
   * 
   * @param request - GetProjectMemberRequest
   * @returns GetProjectMemberResponse
   */
  async getProjectMember(request: GetProjectMemberRequest): Promise<GetProjectMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectMemberWithOptions(request, runtime);
  }

  /**
   * 查询工作空间角色详情
   * 
   * @param request - GetProjectRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectRoleResponse
   */
  async getProjectRoleWithOptions(request: GetProjectRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectRole",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectRoleResponse>(await this.callApi(params, req, runtime), new GetProjectRoleResponse({}));
  }

  /**
   * 查询工作空间角色详情
   * 
   * @param request - GetProjectRoleRequest
   * @returns GetProjectRoleResponse
   */
  async getProjectRole(request: GetProjectRoleRequest): Promise<GetProjectRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectRoleWithOptions(request, runtime);
  }

  /**
   * Queries the information about a file resource.
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: GetResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceResponse>(await this.callApi(params, req, runtime), new GetResourceResponse({}));
  }

  /**
   * Queries the information about a file resource.
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: GetResourceRequest): Promise<GetResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * 根据id获取指定资源组。
   * 
   * @param request - GetResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResponse
   */
  async getResourceGroupWithOptions(request: GetResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupResponse({}));
  }

  /**
   * 根据id获取指定资源组。
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  /**
   * 根据id获取指定路由。
   * 
   * @param request - GetRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRouteResponse
   */
  async getRouteWithOptions(request: GetRouteRequest, runtime: $Util.RuntimeOptions): Promise<GetRouteResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRouteResponse>(await this.callApi(params, req, runtime), new GetRouteResponse({}));
  }

  /**
   * 根据id获取指定路由。
   * 
   * @param request - GetRouteRequest
   * @returns GetRouteResponse
   */
  async getRoute(request: GetRouteRequest): Promise<GetRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRouteWithOptions(request, runtime);
  }

  /**
   * Queries the infomation about a workflow.
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinitionWithOptions(request: GetWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new GetWorkflowDefinitionResponse({}));
  }

  /**
   * Queries the infomation about a workflow.
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinition(request: GetWorkflowDefinitionRequest): Promise<GetWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 授予工作空间成员角色
   * 
   * @param tmpReq - GrantMemberProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantMemberProjectRolesResponse
   */
  async grantMemberProjectRolesWithOptions(tmpReq: GrantMemberProjectRolesRequest, runtime: $Util.RuntimeOptions): Promise<GrantMemberProjectRolesResponse> {
    Util.validateModel(tmpReq);
    let request = new GrantMemberProjectRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantMemberProjectRoles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantMemberProjectRolesResponse>(await this.callApi(params, req, runtime), new GrantMemberProjectRolesResponse({}));
  }

  /**
   * 授予工作空间成员角色
   * 
   * @param request - GrantMemberProjectRolesRequest
   * @returns GrantMemberProjectRolesResponse
   */
  async grantMemberProjectRoles(request: GrantMemberProjectRolesRequest): Promise<GrantMemberProjectRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantMemberProjectRolesWithOptions(request, runtime);
  }

  /**
   * 调用此接口，可以将通过FlowSpec定义的工作流节点和其内部的子节点都导入到数据开发中
   * 
   * @param request - ImportWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportWorkflowDefinitionResponse
   */
  async importWorkflowDefinitionWithOptions(request: ImportWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<ImportWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new ImportWorkflowDefinitionResponse({}));
  }

  /**
   * 调用此接口，可以将通过FlowSpec定义的工作流节点和其内部的子节点都导入到数据开发中
   * 
   * @param request - ImportWorkflowDefinitionRequest
   * @returns ImportWorkflowDefinitionResponse
   */
  async importWorkflowDefinition(request: ImportWorkflowDefinitionRequest): Promise<ImportWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 查看数据集成报警规则
   * 
   * @param request - ListDIAlarmRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIAlarmRulesResponse
   */
  async listDIAlarmRulesWithOptions(request: ListDIAlarmRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListDIAlarmRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIAlarmRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIAlarmRulesResponse>(await this.callApi(params, req, runtime), new ListDIAlarmRulesResponse({}));
  }

  /**
   * 查看数据集成报警规则
   * 
   * @param request - ListDIAlarmRulesRequest
   * @returns ListDIAlarmRulesResponse
   */
  async listDIAlarmRules(request: ListDIAlarmRulesRequest): Promise<ListDIAlarmRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIAlarmRulesWithOptions(request, runtime);
  }

  /**
   * 获取数据集成任务事件
   * 
   * @param request - ListDIJobEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobEventsResponse
   */
  async listDIJobEventsWithOptions(request: ListDIJobEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobEventsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobEvents",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobEventsResponse>(await this.callApi(params, req, runtime), new ListDIJobEventsResponse({}));
  }

  /**
   * 获取数据集成任务事件
   * 
   * @param request - ListDIJobEventsRequest
   * @returns ListDIJobEventsResponse
   */
  async listDIJobEvents(request: ListDIJobEventsRequest): Promise<ListDIJobEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobEventsWithOptions(request, runtime);
  }

  /**
   * 获取数据集成任务指标
   * 
   * @param tmpReq - ListDIJobMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobMetricsResponse
   */
  async listDIJobMetricsWithOptions(tmpReq: ListDIJobMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobMetricsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDIJobMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricName)) {
      request.metricNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricName, "MetricName", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobMetrics",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobMetricsResponse>(await this.callApi(params, req, runtime), new ListDIJobMetricsResponse({}));
  }

  /**
   * 获取数据集成任务指标
   * 
   * @param request - ListDIJobMetricsRequest
   * @returns ListDIJobMetricsResponse
   */
  async listDIJobMetrics(request: ListDIJobMetricsRequest): Promise<ListDIJobMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobMetricsWithOptions(request, runtime);
  }

  /**
   * 获取数据集成运行信息
   * 
   * @param request - ListDIJobRunDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobRunDetailsResponse
   */
  async listDIJobRunDetailsWithOptions(request: ListDIJobRunDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobRunDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobRunDetails",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobRunDetailsResponse>(await this.callApi(params, req, runtime), new ListDIJobRunDetailsResponse({}));
  }

  /**
   * 获取数据集成运行信息
   * 
   * @param request - ListDIJobRunDetailsRequest
   * @returns ListDIJobRunDetailsResponse
   */
  async listDIJobRunDetails(request: ListDIJobRunDetailsRequest): Promise<ListDIJobRunDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobRunDetailsWithOptions(request, runtime);
  }

  /**
   * Queries a list of synchronization tasks.
   * 
   * @param request - ListDIJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobsResponse
   */
  async listDIJobsWithOptions(request: ListDIJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDIJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDIJobs",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDIJobsResponse>(await this.callApi(params, req, runtime), new ListDIJobsResponse({}));
  }

  /**
   * Queries a list of synchronization tasks.
   * 
   * @param request - ListDIJobsRequest
   * @returns ListDIJobsResponse
   */
  async listDIJobs(request: ListDIJobsRequest): Promise<ListDIJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDIJobsWithOptions(request, runtime);
  }

  /**
   * ListDataQualityEvaluationTaskInstances
   * 
   * @param request - ListDataQualityEvaluationTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityEvaluationTaskInstancesResponse
   */
  async listDataQualityEvaluationTaskInstancesWithOptions(request: ListDataQualityEvaluationTaskInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataQualityEvaluationTaskInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataQualityEvaluationTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataQualityEvaluationTaskInstancesResponse>(await this.callApi(params, req, runtime), new ListDataQualityEvaluationTaskInstancesResponse({}));
  }

  /**
   * ListDataQualityEvaluationTaskInstances
   * 
   * @param request - ListDataQualityEvaluationTaskInstancesRequest
   * @returns ListDataQualityEvaluationTaskInstancesResponse
   */
  async listDataQualityEvaluationTaskInstances(request: ListDataQualityEvaluationTaskInstancesRequest): Promise<ListDataQualityEvaluationTaskInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataQualityEvaluationTaskInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListDataQualityEvaluationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityEvaluationTasksResponse
   */
  async listDataQualityEvaluationTasksWithOptions(request: ListDataQualityEvaluationTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListDataQualityEvaluationTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataQualityEvaluationTasks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataQualityEvaluationTasksResponse>(await this.callApi(params, req, runtime), new ListDataQualityEvaluationTasksResponse({}));
  }

  /**
   * @param request - ListDataQualityEvaluationTasksRequest
   * @returns ListDataQualityEvaluationTasksResponse
   */
  async listDataQualityEvaluationTasks(request: ListDataQualityEvaluationTasksRequest): Promise<ListDataQualityEvaluationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataQualityEvaluationTasksWithOptions(request, runtime);
  }

  /**
   * @param request - ListDataQualityResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityResultsResponse
   */
  async listDataQualityResultsWithOptions(request: ListDataQualityResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataQualityResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataQualityResults",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataQualityResultsResponse>(await this.callApi(params, req, runtime), new ListDataQualityResultsResponse({}));
  }

  /**
   * @param request - ListDataQualityResultsRequest
   * @returns ListDataQualityResultsResponse
   */
  async listDataQualityResults(request: ListDataQualityResultsRequest): Promise<ListDataQualityResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataQualityResultsWithOptions(request, runtime);
  }

  /**
   * 质量监控规则分页查询
   * 
   * @param request - ListDataQualityRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityRulesResponse
   */
  async listDataQualityRulesWithOptions(request: ListDataQualityRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataQualityRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataQualityRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataQualityRulesResponse>(await this.callApi(params, req, runtime), new ListDataQualityRulesResponse({}));
  }

  /**
   * 质量监控规则分页查询
   * 
   * @param request - ListDataQualityRulesRequest
   * @returns ListDataQualityRulesResponse
   */
  async listDataQualityRules(request: ListDataQualityRulesRequest): Promise<ListDataQualityRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataQualityRulesWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - ListDataSourceSharedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceSharedRulesResponse
   */
  async listDataSourceSharedRulesWithOptions(request: ListDataSourceSharedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceSharedRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceSharedRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceSharedRulesResponse>(await this.callApi(params, req, runtime), new ListDataSourceSharedRulesResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - ListDataSourceSharedRulesRequest
   * @returns ListDataSourceSharedRulesResponse
   */
  async listDataSourceSharedRules(request: ListDataSourceSharedRulesRequest): Promise<ListDataSourceSharedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceSharedRulesWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param tmpReq - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(tmpReq: ListDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDataSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourcesResponse>(await this.callApi(params, req, runtime), new ListDataSourcesResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of processes that are used to deploy or undeploy entities in DataStudio. You can also specify filter conditions to query specific processes.
   * 
   * @param request - ListDeploymentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(request: ListDeploymentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployments",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
  }

  /**
   * Queries a list of processes that are used to deploy or undeploy entities in DataStudio. You can also specify filter conditions to query specific processes.
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentsWithOptions(request, runtime);
  }

  /**
   * Queries a list of user-defined functions (UDFs) in DataStudio. You can also specify filter conditions to query specific UDFs.
   * 
   * @param request - ListFunctionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(request: ListFunctionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  /**
   * Queries a list of user-defined functions (UDFs) in DataStudio. You can also specify filter conditions to query specific UDFs.
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionsWithOptions(request, runtime);
  }

  /**
   * 获取通用资源组网络资源列表。
   * 
   * @param request - ListNetworksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworksResponse
   */
  async listNetworksWithOptions(request: ListNetworksRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNetworks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNetworksResponse>(await this.callApi(params, req, runtime), new ListNetworksResponse({}));
  }

  /**
   * 获取通用资源组网络资源列表。
   * 
   * @param request - ListNetworksRequest
   * @returns ListNetworksResponse
   */
  async listNetworks(request: ListNetworksRequest): Promise<ListNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworksWithOptions(request, runtime);
  }

  /**
   * Queries a list of descendant nodes of a node in DataStudio.
   * 
   * @param request - ListNodeDependenciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependenciesWithOptions(request: ListNodeDependenciesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeDependenciesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeDependencies",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeDependenciesResponse>(await this.callApi(params, req, runtime), new ListNodeDependenciesResponse({}));
  }

  /**
   * Queries a list of descendant nodes of a node in DataStudio.
   * 
   * @param request - ListNodeDependenciesRequest
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependencies(request: ListNodeDependenciesRequest): Promise<ListNodeDependenciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeDependenciesWithOptions(request, runtime);
  }

  /**
   * Queries a list of nodes in DataStudio. You can also specify filter conditions to query specific nodes.
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * Queries a list of nodes in DataStudio. You can also specify filter conditions to query specific nodes.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 分页查询工作空间成员详情
   * 
   * @param tmpReq - ListProjectMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectMembersResponse
   */
  async listProjectMembersWithOptions(tmpReq: ListProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    if (!Util.isUnset(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!Util.isUnset(request.userIdsShrink)) {
      body["UserIds"] = request.userIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectMembers",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectMembersResponse>(await this.callApi(params, req, runtime), new ListProjectMembersResponse({}));
  }

  /**
   * 分页查询工作空间成员详情
   * 
   * @param request - ListProjectMembersRequest
   * @returns ListProjectMembersResponse
   */
  async listProjectMembers(request: ListProjectMembersRequest): Promise<ListProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  /**
   * 分页查询工作空间角色详情
   * 
   * @param tmpReq - ListProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectRolesResponse
   */
  async listProjectRolesWithOptions(tmpReq: ListProjectRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectRolesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    if (!Util.isUnset(tmpReq.names)) {
      request.namesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.names, "Names", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codesShrink)) {
      body["Codes"] = request.codesShrink;
    }

    if (!Util.isUnset(request.namesShrink)) {
      body["Names"] = request.namesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectRoles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectRolesResponse>(await this.callApi(params, req, runtime), new ListProjectRolesResponse({}));
  }

  /**
   * 分页查询工作空间角色详情
   * 
   * @param request - ListProjectRolesRequest
   * @returns ListProjectRolesResponse
   */
  async listProjectRoles(request: ListProjectRolesRequest): Promise<ListProjectRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectRolesWithOptions(request, runtime);
  }

  /**
   * 分页查询工作空间详情
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    if (!Util.isUnset(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    if (!Util.isUnset(tmpReq.names)) {
      request.namesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.names, "Names", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!Util.isUnset(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!Util.isUnset(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!Util.isUnset(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!Util.isUnset(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!Util.isUnset(request.namesShrink)) {
      body["Names"] = request.namesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  /**
   * 分页查询工作空间详情
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * 获取资源组列表。
   * 
   * @param tmpReq - ListResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(tmpReq: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListResourceGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceGroupTypes)) {
      request.resourceGroupTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceGroupTypes, "ResourceGroupTypes", "json");
    }

    if (!Util.isUnset(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceGroups",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupsResponse({}));
  }

  /**
   * 获取资源组列表。
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of file resources in DataStudio. You can also specify filter conditions to query specific file resources.
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  /**
   * Queries a list of file resources in DataStudio. You can also specify filter conditions to query specific file resources.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * 获取网络资源的路由列表。
   * 
   * @param request - ListRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoutesResponse
   */
  async listRoutesWithOptions(request: ListRoutesRequest, runtime: $Util.RuntimeOptions): Promise<ListRoutesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoutes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRoutesResponse>(await this.callApi(params, req, runtime), new ListRoutesResponse({}));
  }

  /**
   * 获取网络资源的路由列表。
   * 
   * @param request - ListRoutesRequest
   * @returns ListRoutesResponse
   */
  async listRoutes(request: ListRoutesRequest): Promise<ListRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRoutesWithOptions(request, runtime);
  }

  /**
   * Queries a list of workflows in DataStudio. You can also specify filter conditions to query specific workflows.
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitionsWithOptions(request: ListWorkflowDefinitionsRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkflowDefinitionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowDefinitions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowDefinitionsResponse>(await this.callApi(params, req, runtime), new ListWorkflowDefinitionsResponse({}));
  }

  /**
   * Queries a list of workflows in DataStudio. You can also specify filter conditions to query specific workflows.
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitions(request: ListWorkflowDefinitionsRequest): Promise<ListWorkflowDefinitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkflowDefinitionsWithOptions(request, runtime);
  }

  /**
   * Moves a user-defined function (UDF) to a path in DataStudio.
   * 
   * @param request - MoveFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveFunctionResponse
   */
  async moveFunctionWithOptions(request: MoveFunctionRequest, runtime: $Util.RuntimeOptions): Promise<MoveFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveFunctionResponse>(await this.callApi(params, req, runtime), new MoveFunctionResponse({}));
  }

  /**
   * Moves a user-defined function (UDF) to a path in DataStudio.
   * 
   * @param request - MoveFunctionRequest
   * @returns MoveFunctionResponse
   */
  async moveFunction(request: MoveFunctionRequest): Promise<MoveFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveFunctionWithOptions(request, runtime);
  }

  /**
   * Moves a node to a path in DataStudio.
   * 
   * @param request - MoveNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveNodeResponse
   */
  async moveNodeWithOptions(request: MoveNodeRequest, runtime: $Util.RuntimeOptions): Promise<MoveNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveNodeResponse>(await this.callApi(params, req, runtime), new MoveNodeResponse({}));
  }

  /**
   * Moves a node to a path in DataStudio.
   * 
   * @param request - MoveNodeRequest
   * @returns MoveNodeResponse
   */
  async moveNode(request: MoveNodeRequest): Promise<MoveNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveNodeWithOptions(request, runtime);
  }

  /**
   * Moves a file resource to a path in DataStudio.
   * 
   * @param request - MoveResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceResponse
   */
  async moveResourceWithOptions(request: MoveResourceRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceResponse>(await this.callApi(params, req, runtime), new MoveResourceResponse({}));
  }

  /**
   * Moves a file resource to a path in DataStudio.
   * 
   * @param request - MoveResourceRequest
   * @returns MoveResourceResponse
   */
  async moveResource(request: MoveResourceRequest): Promise<MoveResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceWithOptions(request, runtime);
  }

  /**
   * Moves a workflow to a path in DataStudio.
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinitionWithOptions(request: MoveWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<MoveWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new MoveWorkflowDefinitionResponse({}));
  }

  /**
   * Moves a workflow to a path in DataStudio.
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinition(request: MoveWorkflowDefinitionRequest): Promise<MoveWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Renames a user-defined function (UDF) in DataStudio.
   * 
   * @param request - RenameFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFunctionResponse
   */
  async renameFunctionWithOptions(request: RenameFunctionRequest, runtime: $Util.RuntimeOptions): Promise<RenameFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameFunctionResponse>(await this.callApi(params, req, runtime), new RenameFunctionResponse({}));
  }

  /**
   * Renames a user-defined function (UDF) in DataStudio.
   * 
   * @param request - RenameFunctionRequest
   * @returns RenameFunctionResponse
   */
  async renameFunction(request: RenameFunctionRequest): Promise<RenameFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameFunctionWithOptions(request, runtime);
  }

  /**
   * Renames a node in DataStudio.
   * 
   * @param request - RenameNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameNodeResponse
   */
  async renameNodeWithOptions(request: RenameNodeRequest, runtime: $Util.RuntimeOptions): Promise<RenameNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameNodeResponse>(await this.callApi(params, req, runtime), new RenameNodeResponse({}));
  }

  /**
   * Renames a node in DataStudio.
   * 
   * @param request - RenameNodeRequest
   * @returns RenameNodeResponse
   */
  async renameNode(request: RenameNodeRequest): Promise<RenameNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameNodeWithOptions(request, runtime);
  }

  /**
   * Renames a file resource in DataStudio.
   * 
   * @param request - RenameResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameResourceResponse
   */
  async renameResourceWithOptions(request: RenameResourceRequest, runtime: $Util.RuntimeOptions): Promise<RenameResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameResourceResponse>(await this.callApi(params, req, runtime), new RenameResourceResponse({}));
  }

  /**
   * Renames a file resource in DataStudio.
   * 
   * @param request - RenameResourceRequest
   * @returns RenameResourceResponse
   */
  async renameResource(request: RenameResourceRequest): Promise<RenameResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameResourceWithOptions(request, runtime);
  }

  /**
   * Renames a workflow in DataStudio.
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinitionWithOptions(request: RenameWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<RenameWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new RenameWorkflowDefinitionResponse({}));
  }

  /**
   * Renames a workflow in DataStudio.
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinition(request: RenameWorkflowDefinitionRequest): Promise<RenameWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 撤销工作空间成员的角色
   * 
   * @param tmpReq - RevokeMemberProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeMemberProjectRolesResponse
   */
  async revokeMemberProjectRolesWithOptions(tmpReq: RevokeMemberProjectRolesRequest, runtime: $Util.RuntimeOptions): Promise<RevokeMemberProjectRolesResponse> {
    Util.validateModel(tmpReq);
    let request = new RevokeMemberProjectRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeMemberProjectRoles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeMemberProjectRolesResponse>(await this.callApi(params, req, runtime), new RevokeMemberProjectRolesResponse({}));
  }

  /**
   * 撤销工作空间成员的角色
   * 
   * @param request - RevokeMemberProjectRolesRequest
   * @returns RevokeMemberProjectRolesResponse
   */
  async revokeMemberProjectRoles(request: RevokeMemberProjectRolesRequest): Promise<RevokeMemberProjectRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeMemberProjectRolesWithOptions(request, runtime);
  }

  /**
   * 启动数据集成任务
   * 
   * @param tmpReq - StartDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDIJobResponse
   */
  async startDIJobWithOptions(tmpReq: StartDIJobRequest, runtime: $Util.RuntimeOptions): Promise<StartDIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new StartDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.realtimeStartSettings)) {
      request.realtimeStartSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.realtimeStartSettings, "RealtimeStartSettings", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDIJobResponse>(await this.callApi(params, req, runtime), new StartDIJobResponse({}));
  }

  /**
   * 启动数据集成任务
   * 
   * @param request - StartDIJobRequest
   * @returns StartDIJobResponse
   */
  async startDIJob(request: StartDIJobRequest): Promise<StartDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDIJobWithOptions(request, runtime);
  }

  /**
   * Stops a synchronization task.
   * 
   * @param request - StopDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDIJobResponse
   */
  async stopDIJobWithOptions(request: StopDIJobRequest, runtime: $Util.RuntimeOptions): Promise<StopDIJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDIJobResponse>(await this.callApi(params, req, runtime), new StopDIJobResponse({}));
  }

  /**
   * Stops a synchronization task.
   * 
   * @param request - StopDIJobRequest
   * @returns StopDIJobResponse
   */
  async stopDIJob(request: StopDIJobRequest): Promise<StopDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDIJobWithOptions(request, runtime);
  }

  /**
   * 更新数据集成报警规则
   * 
   * @param tmpReq - UpdateDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIAlarmRuleResponse
   */
  async updateDIAlarmRuleWithOptions(tmpReq: UpdateDIAlarmRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDIAlarmRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDIAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.notificationSettings)) {
      request.notificationSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationSettings, "NotificationSettings", "json");
    }

    if (!Util.isUnset(tmpReq.triggerConditions)) {
      request.triggerConditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConditions, "TriggerConditions", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDIAlarmRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new UpdateDIAlarmRuleResponse({}));
  }

  /**
   * 更新数据集成报警规则
   * 
   * @param request - UpdateDIAlarmRuleRequest
   * @returns UpdateDIAlarmRuleResponse
   */
  async updateDIAlarmRule(request: UpdateDIAlarmRuleRequest): Promise<UpdateDIAlarmRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * 更新数据集成任务
   * 
   * @param tmpReq - UpdateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIJobResponse
   */
  async updateDIJobWithOptions(tmpReq: UpdateDIJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDIJobResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!Util.isUnset(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!Util.isUnset(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!Util.isUnset(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDIJobResponse>(await this.callApi(params, req, runtime), new UpdateDIJobResponse({}));
  }

  /**
   * 更新数据集成任务
   * 
   * @param request - UpdateDIJobRequest
   * @returns UpdateDIJobResponse
   */
  async updateDIJob(request: UpdateDIJobRequest): Promise<UpdateDIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDIJobWithOptions(request, runtime);
  }

  /**
   * 验证用
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: UpdateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionProperties)) {
      query["ConnectionProperties"] = request.connectionProperties;
    }

    if (!Util.isUnset(request.connectionPropertiesMode)) {
      query["ConnectionPropertiesMode"] = request.connectionPropertiesMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new UpdateDataSourceResponse({}));
  }

  /**
   * 验证用
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a user-defined function (UDF) in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResponse
   */
  async updateFunctionWithOptions(request: UpdateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  /**
   * Updates the basic information about a user-defined function (UDF) in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFunctionWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a node in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeResponse
   */
  async updateNodeWithOptions(request: UpdateNodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNodeResponse>(await this.callApi(params, req, runtime), new UpdateNodeResponse({}));
  }

  /**
   * Updates the basic information about a node in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateNodeRequest
   * @returns UpdateNodeResponse
   */
  async updateNode(request: UpdateNodeRequest): Promise<UpdateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeWithOptions(request, runtime);
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!Util.isUnset(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a file resource in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(request: UpdateResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  /**
   * Updates the basic information about a file resource in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceWithOptions(request, runtime);
  }

  /**
   * Updates basic information about a resource group.
   * 
   * @param request - UpdateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroupWithOptions(request: UpdateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupResponse({}));
  }

  /**
   * Updates basic information about a resource group.
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  /**
   * 更新网络资源的路由。
   * 
   * @param request - UpdateRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRouteResponse
   */
  async updateRouteWithOptions(request: UpdateRouteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationCidr)) {
      body["DestinationCidr"] = request.destinationCidr;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRouteResponse>(await this.callApi(params, req, runtime), new UpdateRouteResponse({}));
  }

  /**
   * 更新网络资源的路由。
   * 
   * @param request - UpdateRouteRequest
   * @returns UpdateRouteResponse
   */
  async updateRoute(request: UpdateRouteRequest): Promise<UpdateRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRouteWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a workflow in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinitionWithOptions(request: UpdateWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowDefinitionResponse({}));
  }

  /**
   * Updates the basic information about a workflow in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinition(request: UpdateWorkflowDefinitionRequest): Promise<UpdateWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowDefinitionWithOptions(request, runtime);
  }

}
