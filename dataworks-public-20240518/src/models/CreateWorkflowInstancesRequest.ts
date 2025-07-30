// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesRequestDefaultRunPropertiesAlert extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   Sms
   * *   Mail
   * *   SmsMail
   * 
   * @example
   * Sms
   */
  noticeType?: string;
  /**
   * @remarks
   * The alerting policy. Valid values:
   * 
   * *   Success: An alert is reported when data backfill succeeds.
   * *   Failure: An alert is reported when data backfill fails.
   * *   SuccessFailure: An alert is reported regardless of whether data backfill succeeds or fails.
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
   * Specifies whether to block running if the analysis fails. If you set the Type parameter to SupplementData, this parameter is required. Valid values: true and false.
   * 
   * @example
   * true
   */
  blocked?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the analysis feature. If you set the Type parameter to SupplementData, this parameter is required. Valid values: true and false.
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
   * The end time of running. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. This parameter is required if you configure the RunPolicy parameter.
   * 
   * @example
   * 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the instances can be run immediately during the time period in the future. Valid values: true and false.
   * 
   * @example
   * false
   */
  immediately?: boolean;
  /**
   * @remarks
   * The start time of running. Configure this parameter in the `hh:mm:ss` format. The time must be in the 24-hour clock. This parameter is required if you configure the RunPolicy parameter.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the time period during which the data is backfilled. This parameter is required if you configure the RunPolicy parameter.
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
   * The configurations for analysis. If you set the Type parameter to SupplementData, this parameter is required.
   */
  analysis?: CreateWorkflowInstancesRequestDefaultRunPropertiesAnalysis;
  /**
   * @remarks
   * The IDs of the projects that do not need to be run.
   */
  excludeProjectIds?: number[];
  /**
   * @remarks
   * The IDs of the tasks that do not need to be run.
   */
  excludeTaskIds?: number[];
  /**
   * @remarks
   * The IDs of the projects that need to be run.
   */
  includeProjectIds?: number[];
  /**
   * @remarks
   * The IDs of the tasks that need to be run.
   */
  includeTaskIds?: number[];
  /**
   * @remarks
   * The data backfill mode. Default value: ManualSelection. If you set the Type parameter to SupplementData, this parameter is required. Valid values:
   * 
   * *   General: You can specify only `one root task ID`. The `IncludeTaskIds` parameter is optional. If you do not configure the IncludeTaskIds parameter, the tasks that are specified by the `RootTaskIds` parameter are included by default.
   * *   ManualSelection: You can specify `multiple root task IDs`. The `IncludeTaskIds` parameter is optional. If you do not configure the IncludeTaskIds parameter, the tasks that are specified by the `RootTaskIds` parameter are included by default.
   * *   Chain: If you set the Mode parameter to Chain, you must leave the `RootTaskIds` parameter empty and set the `IncludeTaskIds` parameter to the start task ID and the end task ID.
   * *   AllDownstream: You can specify only one `root task ID`.
   * 
   * @example
   * ManualSelection
   */
  mode?: string;
  /**
   * @remarks
   * The running order. Valid values:
   * 
   * *   Asc (default): The tasks are sorted by data timestamp in ascending order.
   * *   Desc: The tasks are sorted by data timestamp in descending order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The number of tasks that can be run in parallel. If you specify a value that ranges from 2 to 10, the value indicates the number of tasks that can be run in parallel. If you set the value to 1, the tasks are run one by one. If you set the Type parameter to SupplementData, this parameter is required.
   * 
   * @example
   * 2
   */
  parallelism?: number;
  /**
   * @remarks
   * The running priority. Valid values: 1 to 11. A larger value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The weight policy for the priority. Valid values:
   * 
   * *   `Disable`: No weight policy for the priority is enabled. This is the default value.
   * *   `Upstream`: The sum of the weights for the ancestor nodes of the current node is calculated. The more ancestor nodes, the higher the weight.
   * 
   * @example
   * Upstream
   */
  priorityWeightStrategy?: string;
  /**
   * @remarks
   * The root task IDs.
   * 
   * *   If you set the Type parameter to SupplementData and the Mode parameter to a value other than Chain, the RootTaskIds parameter is required.
   * *   If you set the Type parameter to ManualWorkflow, the RootTaskIds parameter is optional. If you do not configure the RootTaskIds parameter, the IDs of the default root nodes of the manually triggered workflow are used.
   * *   If you set the Type parameter to Manual, the RootTaskIds parameter is required. The RootTaskIds parameter specifies the IDs of the manually triggered tasks that need to be run.
   * *   If you set the Type parameter to SmokeTest, the RootTaskIds parameter is required. The RootTaskIds parameter specifies the IDs of the test tasks that need to be run.
   */
  rootTaskIds?: number[];
  /**
   * @remarks
   * The policy for running. If you leave this parameter empty, the task configuration is used.
   */
  runPolicy?: CreateWorkflowInstancesRequestDefaultRunPropertiesRunPolicy;
  /**
   * @remarks
   * The identifier of the custom resource group for scheduling. If you leave this parameter empty, the runtime configuration is used.
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
   * The environment of the workspace. Valid values:
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
  tagCreationPolicy?: string;
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
   * *   SupplementData: The values of the RootTaskIds and IncludeTaskIds parameters vary based on the value of the Mode parameter. For more information, see the Mode parameter in this API operation.
   * *   ManualWorkflow: If you set the Type parameter to ManualWorkflow, you must set the WorkflowId parameter to the ID of the manually triggered workflow. The RootTaskIds parameter is optional. If you do not configure the RootTaskIds parameter, the IDs of the default root nodes of the manually triggered workflow are used.
   * *   Manual: You need to configure only the RootTaskIds parameter. The RootTaskIds parameter specifies the IDs of the manually triggered tasks that need to be run.
   * *   SmokeTest: You need to configure only the RootTaskIds parameter. The RootTaskIds parameter specifies the IDs of the test tasks that need to be run.
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
   * The workflow parameters. This parameter takes effect only when you set the `WorkflowId` parameter to a value other than 1. If your workflow is an auto triggered workflow, configure this parameter in the key=value format. The parameters that you configure in this parameter have a lower priority than task parameters. If your workflow is a manually triggered workflow, configure this parameter in the JSON format. The parameters that you configure in this parameter have a higher priority than task parameters.
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

