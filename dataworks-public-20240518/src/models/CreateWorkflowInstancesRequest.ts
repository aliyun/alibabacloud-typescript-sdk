// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesAlert extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values:
   * - Sms: SMS only
   * - Mail: email only
   * - SmsMail: SMS and email
   * 
   * @example
   * Sms
   */
  noticeType?: string;
  /**
   * @remarks
   * The alert policy. Valid values:
   * - Success: alert on success
   * - Failure: alert on failure
   * - SuccessFailure: alert on both success and failure
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
   * Specifies whether to block running when the analysis does not pass. This parameter is required when Type is set to SupplementData.
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
   * The end run time. Format: `hh:mm:ss` in 24-hour format. This field is required if you set the run policy.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the instance can start running immediately if the run time is in the future. Default value: false.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * The start run time. Format: `hh:mm:ss` in 24-hour format. This field is required if you set the run policy.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time period type. This field is required if you set the run policy. Valid values:
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
   * The alert configuration.
   */
  alert?: CreateWorkflowInstancesRequestDefaultRunPropertiesAlert;
  /**
   * @remarks
   * The analysis configuration. This parameter is required when Type is set to SupplementData.
   */
  analysis?: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis;
  /**
   * @remarks
   * The list of project IDs to exclude.
   */
  excludeProjectIds?: number[];
  /**
   * @remarks
   * The list of node IDs to exclude from running.
   */
  excludeTaskIds?: number[];
  /**
   * @remarks
   * The list of project IDs to include.
   */
  includeProjectIds?: number[];
  /**
   * @remarks
   * The list of node IDs to run.
   */
  includeTaskIds?: number[];
  /**
   * @remarks
   * The data backfill mode. Default value: ManualSelection. This parameter is required when Type is set to SupplementData. Valid values:
   * - General: general mode. Only one value can be specified for `RootTaskIds`. `IncludeTaskIds` is optional. If you do not specify IncludeTaskIds, the content in `RootTaskIds` is included by default.
   * - ManualSelection: manual selection. Multiple values can be specified for `RootTaskIds`. `IncludeTaskIds` is optional. If you do not specify IncludeTaskIds, the content in `RootTaskIds` is included by default.
   * - Chain: chain mode. `RootTaskIds` is empty. Specify two IDs in `IncludeTaskIds`, which are the start and end nodes.
   * - AllDownstream: all downstream. Only one value can be specified for `RootTaskIds`.
   * 
   * @example
   * ManualSelection
   */
  mode?: string;
  /**
   * @remarks
   * The run order. Default value: Asc. Valid values:
   * - Asc: ascending order by business date.
   * - Desc: descending order by business date.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The number of parallel nodes. A value from 2 to 10 specifies the parallelism. A value of 1 specifies serial execution. This parameter is required when Type is set to SupplementData.
   * 
   * @example
   * 2
   */
  parallelism?: number;
  /**
   * @remarks
   * The run priority. Valid values: 1 to 11. A larger value indicates a higher priority. This parameter settings only supports manual workflows and trigger-based workflows.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The priority weight policy. This parameter settings only supports manual workflows and trigger-based workflows. Valid values:
   * - `Disable`: disabled (default)
   * - `Upstream`: calculates the total weight of upstream nodes for the current node. The deeper the level, the higher the weight.
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
   * - When Type is set to ManualWorkflow, RootTaskIds is optional. If you do not specify RootTaskIds, the default root node list of the manual workflow is used.
   * - When Type is set to Manual, RootTaskIds is required, which specifies the list of manual nodes to run.
   * - When Type is set to SmokeTest, RootTaskIds is required, which specifies the list of test nodes to run.
   */
  rootTaskIds?: number[];
  /**
   * @remarks
   * The run policy. If this field is empty, the node configuration is used.
   */
  runPolicy?: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy;
  /**
   * @remarks
   * The identifier of the custom schedule resource group. If this field is empty, the node configuration is used.
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
   * The end business date. Format: `yyyy-mm-dd`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-24
   */
  endBizDate?: string;
  /**
   * @remarks
   * The start business date. Format: `yyyy-mm-dd`.
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
   * The list of business dates. You can specify up to 7 business date ranges.
   * 
   * This parameter is required.
   */
  bizDates?: CreateWorkflowInstancesRequestPeriodsBizDates[];
  /**
   * @remarks
   * The end period time. Format: `hh:mm:ss` in 24-hour format. Default value: 23:59:59.
   * 
   * If you specify this field, you must also specify StartTime.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The start period time. Format: `hh:mm:ss` in 24-hour format. Default value: 00:00:00.
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
   * The label key.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The label value.
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
   * Specifies whether to run the workflow instance immediately after creation. Default value: true.
   * 
   * @example
   * true
   */
  autoStartEnabled?: boolean;
  /**
   * @remarks
   * The reason for creating the workflow instance.
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
   * - Append: append mode. New tags are appended to the existing tags inherited from the manual workflow.
   * - Overwrite: overwrite mode. Existing tags of the manual workflow are not inherited. Tags are created directly.
   * 
   * @example
   * Append
   */
  tagCreationPolicy?: string;
  /**
   * @remarks
   * The list of node labels.
   */
  tags?: CreateWorkflowInstancesRequestTags[];
  /**
   * @remarks
   * The node parameters used to set parameters for specific nodes. The value is in JSON format. The key is the node ID, and the value format refers to the node script parameter (the Task.Script.Parameter field in the GetTask response).
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
   * - SupplementData: data backfill. The method for specifying RootTaskIds and IncludeTaskIds varies based on the data backfill pattern. For more information, see the DefaultRunProperties.Mode parameter description.
   * - ManualWorkflow: manual workflow. Set WorkflowId to the ID of the manual workflow. RootTaskIds is optional. If you do not specify RootTaskIds, the default root node list of the manual workflow is used.
   * - Manual: manual node. Only RootTaskIds is required, which specifies the list of manual nodes to run.
   * - SmokeTest: smoke test. Only RootTaskIds is required, which specifies the list of test nodes to run.
   * - TriggerWorkflow: trigger-based workflow. Set WorkflowId to the ID of the trigger-based workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow is run.
   * 
   * This parameter is required.
   * 
   * @example
   * SupplementData
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs. The WorkflowId for periodic nodes is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters. This parameter takes effect when a unique workflow is specified (`WorkflowId != 1`). For periodic workflows and trigger-based workflows, the format is key=value, and the priority is lower than node parameters. For manual workflows, the format is JSON, and the priority is higher than node parameters.
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

