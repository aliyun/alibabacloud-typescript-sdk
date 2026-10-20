// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesAlert extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values:
   * - Sms: text message only
   * - Mail: email only
   * - SmsMail: text message and email
   * 
   * @example
   * Sms
   */
  noticeType?: string;
  /**
   * @remarks
   * The alert policy. Valid values:
   * - Success: alerts on success
   * - Failure: alerts on failure
   * - SuccessFailure: alerts on both success and failure
   * 
   * @example
   * Succes
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      noticeType: 'NoticeType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to block the run if the analysis fails. This parameter is required when Type is set to SupplementData.
   * 
   * @example
   * true
   */
  blocked?: boolean;
  /**
   * @remarks
   * Specifies whether to enable analysis. This parameter is required when Type is set to SupplementData.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      blocked: 'Blocked',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocked: 'boolean',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy extends $dara.Model {
  /**
   * @remarks
   * The end time of the run. Specify the time in the hh:mm:ss format based on the 24-hour clock. This field is required if you configure a run policy.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the run can be started immediately if the run time is in the future. Default value: false.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * The start time of the run. Specify the time in the hh:mm:ss format based on the 24-hour clock. This field is required if you configure a run policy.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The period type. This field is required if you configure a run policy. Valid values:
   * - Daily: every day
   * - Weekend: weekends only
   * 
   * @example
   * Daily
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      immediately: 'Immediately',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      immediately: 'boolean',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequestDefaultRunProperties extends $dara.Model {
  /**
   * @remarks
   * The alert configurations.
   */
  alert?: CreateWorkflowInstancesRequestDefaultRunPropertiesAlert;
  /**
   * @remarks
   * The analysis configurations. This parameter is required when Type is set to SupplementData.
   */
  analysis?: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis;
  /**
   * @remarks
   * The data source name mappings for data backfill runs. The key of the map is DataSource.Name in the node definition, and the value is DataSource.Name used during data backfill runs. This parameter takes effect only when Type is set to SupplementData. If this parameter is not configured, an empty map is passed, or the key is not matched, the node continues to use the original data source. Currently, only EMR Spark SQL, EMR Shell, and EMR Spark nodes are supported.
   */
  dataSourceNameMappings?: { [key: string]: string };
  /**
   * @remarks
   * The list of project IDs to exclude from the run.
   */
  excludeProjectIds?: number[];
  /**
   * @remarks
   * The list of node IDs to exclude from the run.
   */
  excludeTaskIds?: number[];
  /**
   * @remarks
   * The list of project IDs to include in the run.
   */
  includeProjectIds?: number[];
  /**
   * @remarks
   * The list of node IDs to include in the run.
   */
  includeTaskIds?: number[];
  /**
   * @remarks
   * The data backfill mode. Default value: ManualSelection. This parameter is required when Type is set to SupplementData. Valid values:
   * - General: general mode. You can specify only one value for RootTaskIds. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the value of RootTaskIds is included by default.
   * - ManualSelection: manual selection mode. You can specify multiple values for RootTaskIds. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the values of RootTaskIds are included by default.
   * - Chain: chain mode. RootTaskIds must be left empty. You must specify two IDs for IncludeTaskIds, which are the start and end nodes.
   * - AllDownstream: all downstream mode. You can specify only one value for RootTaskIds.
   * 
   * @example
   * ManualSelection
   */
  mode?: string;
  /**
   * @remarks
   * The run order. Default value: Asc. Valid values:
   * - Asc: ascending order by business date
   * - Desc: descending order by business date
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The number of parallel nodes. A value of 2 to 10 indicates the parallelism, and a value of 1 indicates serial execution. This parameter is required when Type is set to SupplementData.
   * 
   * @example
   * 2
   */
  parallelism?: number;
  /**
   * @remarks
   * The run priority. Valid values: 1 to 11. A larger value indicates a higher priority. These parameter settings are supported only for manually triggered workflows and event-triggered workflows.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The priority weight policy. These parameter settings are supported only for manually triggered workflows and event-triggered workflows. Valid values:
   * - Disable: disabled. This is the default value.
   * - Upstream: calculates the sum of weights of upstream nodes for the current node. A deeper hierarchy indicates a higher weight.
   * 
   * @example
   * Upstream
   */
  priorityWeightStrategy?: string;
  /**
   * @remarks
   * The list of root node IDs.
   * 
   * - When Type is set to SupplementData, RootTaskIds is required except when Mode is set to Chain.
   * - When Type is set to ManualWorkflow, RootTaskIds is optional. If you do not specify RootTaskIds, the default root node list of the manually triggered workflow is used.
   * - When Type is set to Manual, RootTaskIds is required and specifies the list of manually triggered nodes to be run.
   * - When Type is set to SmokeTest, RootTaskIds is required and specifies the list of test nodes to be run.
   */
  rootTaskIds?: number[];
  /**
   * @remarks
   * The run policy. If this field is left empty, the node configuration is used.
   */
  runPolicy?: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy;
  /**
   * @remarks
   * The identifier of the custom scheduling resource group. If this field is left empty, the node configuration is used.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      analysis: 'Analysis',
      dataSourceNameMappings: 'DataSourceNameMappings',
      excludeProjectIds: 'ExcludeProjectIds',
      excludeTaskIds: 'ExcludeTaskIds',
      includeProjectIds: 'IncludeProjectIds',
      includeTaskIds: 'IncludeTaskIds',
      mode: 'Mode',
      order: 'Order',
      parallelism: 'Parallelism',
      priority: 'Priority',
      priorityWeightStrategy: 'PriorityWeightStrategy',
      rootTaskIds: 'RootTaskIds',
      runPolicy: 'RunPolicy',
      runtimeResource: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: CreateWorkflowInstancesRequestDefaultRunPropertiesAlert,
      analysis: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis,
      dataSourceNameMappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      excludeProjectIds: { 'type': 'array', 'itemType': 'number' },
      excludeTaskIds: { 'type': 'array', 'itemType': 'number' },
      includeProjectIds: { 'type': 'array', 'itemType': 'number' },
      includeTaskIds: { 'type': 'array', 'itemType': 'number' },
      mode: 'string',
      order: 'string',
      parallelism: 'number',
      priority: 'number',
      priorityWeightStrategy: 'string',
      rootTaskIds: { 'type': 'array', 'itemType': 'number' },
      runPolicy: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy,
      runtimeResource: 'string',
    };
  }

  validate() {
    if(this.alert && typeof (this.alert as any).validate === 'function') {
      (this.alert as any).validate();
    }
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(this.dataSourceNameMappings) {
      $dara.Model.validateMap(this.dataSourceNameMappings);
    }
    if(Array.isArray(this.excludeProjectIds)) {
      $dara.Model.validateArray(this.excludeProjectIds);
    }
    if(Array.isArray(this.excludeTaskIds)) {
      $dara.Model.validateArray(this.excludeTaskIds);
    }
    if(Array.isArray(this.includeProjectIds)) {
      $dara.Model.validateArray(this.includeProjectIds);
    }
    if(Array.isArray(this.includeTaskIds)) {
      $dara.Model.validateArray(this.includeTaskIds);
    }
    if(Array.isArray(this.rootTaskIds)) {
      $dara.Model.validateArray(this.rootTaskIds);
    }
    if(this.runPolicy && typeof (this.runPolicy as any).validate === 'function') {
      (this.runPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequestPeriodsBizDates extends $dara.Model {
  /**
   * @remarks
   * The end business date. Format: yyyy-mm-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-24
   */
  endBizDate?: string;
  /**
   * @remarks
   * The start business date. Format: yyyy-mm-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-20
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      endBizDate: 'EndBizDate',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endBizDate: 'string',
      startBizDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequestPeriods extends $dara.Model {
  /**
   * @remarks
   * The list of business dates. You can specify multiple business date ranges, up to a maximum of 7 ranges.
   * 
   * This parameter is required.
   */
  bizDates?: CreateWorkflowInstancesRequestPeriodsBizDates[];
  /**
   * @remarks
   * The end time of the period. Specify the time in the hh:mm:ss format based on the 24-hour clock. Default value: 23:59:59.
   * 
   * If you specify this field, you must also specify StartTime.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the period. Specify the time in the hh:mm:ss format based on the 24-hour clock. Default value: 00:00:00.
   * 
   * If you specify this field, you must also specify EndTime.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizDates: 'BizDates',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDates: { 'type': 'array', 'itemType': CreateWorkflowInstancesRequestPeriodsBizDates },
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizDates)) {
      $dara.Model.validateArray(this.bizDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagValue
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to run the workflow instance immediately after it is created. Default value: true.
   * 
   * @example
   * true
   */
  autoStartEnabled?: boolean;
  /**
   * @remarks
   * The reason for creation.
   * 
   * @example
   * create for test
   */
  comment?: string;
  /**
   * @remarks
   * The runtime configurations.
   */
  defaultRunProperties?: CreateWorkflowInstancesRequestDefaultRunProperties;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production
   * - Dev: development
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The data backfill period settings.
   */
  periods?: CreateWorkflowInstancesRequestPeriods;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The tag creation policy. Valid values:
   * - Append: Append mode. Inherits existing tags from the manual workflow and appends new tags.
   * - Overwrite: Overwrite mode. Does not inherit existing tags from the manual workflow and directly creates tags.
   * 
   * @example
   * Append
   */
  tagCreationPolicy?: string;
  /**
   * @remarks
   * The list of task tags.
   */
  tags?: CreateWorkflowInstancesRequestTags[];
  /**
   * @remarks
   * The node parameters, which are used to set parameters for specific nodes. The value is in JSON format. The key is the node ID, and the value format refers to the node script parameters (Task.Script.Parameter in the response of the GetTask operation).
   * 
   * @example
   * {
   *   "1001": "key1=val2 key2=val2", 
   *   "1002": "key1=val2 key2=val2"
   * }
   */
  taskParameters?: string;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * - SupplementData: data backfill. The methods for specifying RootTaskIds and IncludeTaskIds vary based on the data backfill mode. For more information, see the parameter description of DefaultRunProperties.Mode.
   * - ManualWorkflow: manually triggered workflow. You must set WorkflowId to the ID of the manually triggered workflow. RootTaskIds is optional. If you do not specify RootTaskIds, the default root node list of the manually triggered workflow is used.
   * - Manual: manually triggered node. You only need to specify RootTaskIds, which is the list of manually triggered nodes to be run.
   * - SmokeTest: smoke test. You only need to specify RootTaskIds, which is the list of test nodes to be run.
   * - TriggerWorkflow: event-triggered workflow. You must set WorkflowId to the ID of the event-triggered workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow is run.
   * 
   * This parameter is required.
   * 
   * @example
   * SupplementData
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the node belongs. The WorkflowId of a periodic node is always 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters. This parameter takes effect only when a specific workflow is specified (WorkflowId != 1). For a periodic workflow or an event-triggered workflow, the format is key=value, and the priority is lower than that of node parameters. For a manually triggered workflow, the format is JSON, and the priority is higher than that of node parameters.
   * 
   * @example
   * "key=value" format:
   * key1=value1 key2=value2
   * JSON format:
   * {"key1":"value1", "key2": "value2"}
   */
  workflowParameters?: string;
  static names(): { [key: string]: string } {
    return {
      autoStartEnabled: 'AutoStartEnabled',
      comment: 'Comment',
      defaultRunProperties: 'DefaultRunProperties',
      envType: 'EnvType',
      name: 'Name',
      periods: 'Periods',
      projectId: 'ProjectId',
      tagCreationPolicy: 'TagCreationPolicy',
      tags: 'Tags',
      taskParameters: 'TaskParameters',
      type: 'Type',
      workflowId: 'WorkflowId',
      workflowParameters: 'WorkflowParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStartEnabled: 'boolean',
      comment: 'string',
      defaultRunProperties: CreateWorkflowInstancesRequestDefaultRunProperties,
      envType: 'string',
      name: 'string',
      periods: CreateWorkflowInstancesRequestPeriods,
      projectId: 'number',
      tagCreationPolicy: 'string',
      tags: { 'type': 'array', 'itemType': CreateWorkflowInstancesRequestTags },
      taskParameters: 'string',
      type: 'string',
      workflowId: 'number',
      workflowParameters: 'string',
    };
  }

  validate() {
    if(this.defaultRunProperties && typeof (this.defaultRunProperties as any).validate === 'function') {
      (this.defaultRunProperties as any).validate();
    }
    if(this.periods && typeof (this.periods as any).validate === 'function') {
      (this.periods as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

