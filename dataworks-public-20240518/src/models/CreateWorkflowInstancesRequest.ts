// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesAlert extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   Sms: SMS only.
   * *   Mail: Mail only.
   * *   SmsMail: SMS and mail.
   * 
   * @example
   * Sms
   */
  noticeType?: string;
  /**
   * @remarks
   * The alerting policy. Valid values:
   * 
   * *   Success: Alerts on success.
   * *   Failure: Alerts on failure.
   * *   SuccessFailure: Alerts on both success and failure.
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
   * Specifies whether to block execution if the analysis fails. Required when Type = SupplementData.
   * 
   * @example
   * true
   */
  blocked?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the analysis feature. Required when Type = SupplementData.
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
   * The end time of running. Configure this parameter in the `hh:mm:ss` format (24-hour clock). This parameter is required if you configure the RunPolicy parameter. Valid values:
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether a task whose scheduled run time is in the future can be run immediately. Default value: false.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * The start time of running. Configure this parameter in the `hh:mm:ss` format (24-hour clock). This parameter is required if you configure the RunPolicy parameter.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time period type. This parameter is required if you configure the RunPolicy parameter. Valid values:
   * 
   * *   Daily
   * *   Weekend
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
   * The alert settings.
   */
  alert?: CreateWorkflowInstancesRequestDefaultRunPropertiesAlert;
  /**
   * @remarks
   * The analysis configuration. Required when Type = SupplementData.
   */
  analysis?: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis;
  /**
   * @remarks
   * The IDs of the projects not to run.
   */
  excludeProjectIds?: number[];
  /**
   * @remarks
   * The IDs of the tasks not to run.
   */
  excludeTaskIds?: number[];
  /**
   * @remarks
   * The IDs of the projects to run.
   */
  includeProjectIds?: number[];
  /**
   * @remarks
   * The IDs of the tasks to run.
   */
  includeTaskIds?: number[];
  /**
   * @remarks
   * The data backfill mode. Default value: ManualSelection. Required when Type is set to SupplementData.
   * 
   * *   General: You can specify only one value for `RootTaskIds`. The `IncludeTaskIds` parameter is optional. If it\\"s not specified, it defaults to including `RootTaskIds`.
   * *   ManualSelection: You can specify multiple values for `RootTaskIds`. The `IncludeTaskIds` parameter is optional. If it is not specified, it defaults to including `RootTaskIds`.
   * *   Chain: If you set the Mode parameter to Chain, leave the `RootTaskIds` parameter empty and set the `IncludeTaskIds` parameter to the start task ID and the end task ID.
   * *   AllDownstream: Only one `RootTaskId` can be specified.
   * 
   * @example
   * ManualSelection
   */
  mode?: string;
  /**
   * @remarks
   * The execution order. Default value: Asc.
   * 
   * *   Asc: ascending by business date.
   * *   Desc: descending by business date.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The task concurrency. Values from 2 to 10 indicate concurrency. A value of 1 indicates sequential execution. Required when Type = SupplementData.
   * 
   * @example
   * 2
   */
  parallelism?: number;
  /**
   * @remarks
   * The execution priority, range: 1–11. A higher value indicates higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The priority weighting policy.
   * 
   * *   `Disable` (default): Do not enable.
   * *   `Upstream`: The priority is based on the total weight of upstream nodes. The deeper the hierarchy, the higher the weight.
   * 
   * @example
   * Upstream
   */
  priorityWeightStrategy?: string;
  /**
   * @remarks
   * The list of root task IDs.
   * 
   * *   When Type is set to SupplementData, RootTaskIds is required unless Mode is set to Chain.
   * *   When Type is set to ManualWorkflow, RootTaskIds is optional. If it is not specified, the default root nodes of the manual workflow are used.
   * *   When Type is set to Manual, RootTaskIds is required and specifies the list of manual tasks to run.
   * *   When Type is set to SmokeTest, RootTaskIds is required and specifies the list of test tasks to run.
   */
  rootTaskIds?: number[];
  /**
   * @remarks
   * The run policy. If the parameter is left empty, the task configuration is used.
   */
  runPolicy?: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy;
  /**
   * @remarks
   * The custom scheduling resource group ID. If left empty, the task configuration is used.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  runtimeResource?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      analysis: 'Analysis',
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
   * The data timestamp at which data is no longer backfilled. Configure this parameter in the `yyyy-mm-dd` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-24
   */
  endBizDate?: string;
  /**
   * @remarks
   * The data timestamp at which the data starts to be backfilled. Configure this parameter in the `yyyy-mm-dd` format.
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
   * The data timestamps. You can specify up to seven data timestamps.
   * 
   * This parameter is required.
   */
  bizDates?: CreateWorkflowInstancesRequestPeriodsBizDates[];
  /**
   * @remarks
   * The end time of data backfill. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. Default value: 23:59:59.
   * 
   * If you configure this parameter, you must also configure the StartTime parameter.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of data backfill. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. Default value: 00:00:00.
   * 
   * If you configure this parameter, you must also configure the EndTime parameter.
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
   * The default value is true.
   * 
   * @example
   * true
   */
  autoStartEnabled?: boolean;
  /**
   * @remarks
   * The reason for the creation.
   * 
   * @example
   * create for test
   */
  comment?: string;
  /**
   * @remarks
   * The runtime configuration.
   */
  defaultRunProperties?: CreateWorkflowInstancesRequestDefaultRunProperties;
  /**
   * @remarks
   * The project environment. Valid values:
   * 
   * *   Prod
   * *   Dev
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
   * The configuration of the data backfilling period.
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
   * 
   * *   Append: New tags are added on top of the existing tags of the manual workflow.
   * *   Overwrite: Existing tags of the manual workflow are not inherited. New tags are created directly.
   * 
   * @example
   * Append
   */
  tagCreationPolicy?: string;
  /**
   * @remarks
   * The task tag list.
   */
  tags?: CreateWorkflowInstancesRequestTags[];
  /**
   * @remarks
   * The task-specific parameters. The value is in the JSON format. The key specifies the task ID. You can call the GetTask operation to obtain the format of the value by querying the script parameters.
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
   * 
   * *   SupplementData: Data backfill. The usage of RootTaskIds and IncludeTaskIds varies based on the backfill mode. See the description of the DefaultRunProperties.Mode parameter.
   * *   ManualWorkflow: Manually triggered workflow. WorkflowId is required for a manual workflow. RootTaskIds is optional. If not specified, the system uses the default root task list of the manual workflow.
   * *   Manual: Manual task. You only need to specify RootTaskIds. This is the list of manual tasks to run.
   * *   SmokeTest: Smoke test. You only need to specify RootTaskIds. This is the list of test tasks to run.
   * *   TriggerWorkflow: Triggered Workflow You must specify the WorkflowId of the triggered workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow runs.
   * 
   * This parameter is required.
   * 
   * @example
   * SupplementData
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs. This parameter is set to 1 for auto triggered tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters. This parameter takes effect when a specific workflow is specified (`WorkflowId != 1`). For scheduled workflows and triggered workflows, the format is key=value, and these parameters have lower priority than task parameters. For manual workflows, the format is JSON, and these parameters have higher priority than task parameters.
   * 
   * @example
   * { 
   *   "key1": "value1", 
   *   "key2": "value2" 
   * }
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

