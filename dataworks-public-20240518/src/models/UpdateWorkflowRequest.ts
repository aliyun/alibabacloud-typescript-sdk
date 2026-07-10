// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequestDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * - CrossCycleDependsOnChildren: cross-cycle dependency on first-level child nodes
   * - CrossCycleDependsOnSelf: cross-cycle dependency on the current node
   * - CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
   * - Normal: same-cycle dependency
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The output identifier of the upstream node. This field is returned when the dependency type is `same-cycle dependency` and input content is specified.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ID of the upstream node. This field is returned when the dependency type is `cross-cycle dependency on other nodes` or `same-cycle dependency` without input content specified. It is not returned in other cases.
   * 
   * @example
   * 1234
   */
  upstreamTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      upstreamOutput: 'UpstreamOutput',
      upstreamTaskId: 'UpstreamTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      upstreamOutput: 'string',
      upstreamTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestOutputsTaskOutputs extends $dara.Model {
  /**
   * @remarks
   * The output identifier.
   * 
   * @example
   * pre.odps_sql_demo_0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of workflow node output definitions.
   */
  taskOutputs?: UpdateWorkflowRequestOutputsTaskOutputs[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateWorkflowRequestOutputsTaskOutputs },
    };
  }

  validate() {
    if(Array.isArray(this.taskOutputs)) {
      $dara.Model.validateArray(this.taskOutputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class UpdateWorkflowRequestTasksDataSource extends $dara.Model {
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * odps_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * - CrossCycleDependsOnChildren: cross-cycle dependency on first-level child nodes
   * - CrossCycleDependsOnSelf: cross-cycle dependency on the current node
   * - CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
   * - Normal: same-cycle dependency
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The output identifier of the upstream node. This field is returned when the dependency type is `same-cycle dependency` and input content is specified.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ID of the upstream node. This field is returned when the dependency type is `cross-cycle dependency on other nodes` or `same-cycle dependency` without input content specified. It is not returned in other cases.
   * 
   * @example
   * 1234
   */
  upstreamTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      upstreamOutput: 'UpstreamOutput',
      upstreamTaskId: 'UpstreamTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      upstreamOutput: 'string',
      upstreamTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksInputsVariables extends $dara.Model {
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - Constant: constant
   * - PassThrough: output of a parameter node
   * - System: variable
   * - NodeOutput: script output
   * 
   * This parameter is required.
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

export class UpdateWorkflowRequestTasksInputs extends $dara.Model {
  /**
   * @remarks
   * The list of variable definitions. If this field is not specified or is an empty array, all Inputs.Variables configurations are deleted by default.
   */
  variables?: UpdateWorkflowRequestTasksInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksInputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksOutputsTaskOutputs extends $dara.Model {
  /**
   * @remarks
   * The output identifier.
   * 
   * @example
   * pre.odps_sql_demo_0
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksOutputsVariables extends $dara.Model {
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - Constant: constant
   * - PassThrough: output of a parameter node
   * - System: variable
   * - NodeOutput: script output
   * 
   * This parameter is required.
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

export class UpdateWorkflowRequestTasksOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of node output definitions. If this field is not specified or is an empty array, all TaskOutputs configurations are deleted by default.
   */
  taskOutputs?: UpdateWorkflowRequestTasksOutputsTaskOutputs[];
  /**
   * @remarks
   * The list of variable definitions. If this field is not specified or is an empty array, all Outputs.Variables configurations are deleted by default.
   */
  variables?: UpdateWorkflowRequestTasksOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksOutputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.taskOutputs)) {
      $dara.Model.validateArray(this.taskOutputs);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The CU consumption configured for the node.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The image ID configured for the node.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the schedule resource group configured for the node.
   * 
   * This parameter is required.
   * 
   * @example
   * S_res_group_524258031846018_1684XXXXXXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      image: 'Image',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      image: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksScript extends $dara.Model {
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * echo "helloWorld"
   */
  content?: string;
  /**
   * @remarks
   * The list of script parameters.
   * 
   * @example
   * para1=$bizdate
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTasksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class UpdateWorkflowRequestTasksTrigger extends $dara.Model {
  /**
   * @remarks
   * The run mode when triggered. This parameter takes effect only when type is set to Scheduler. Valid values:
   * - Pause: paused
   * - Skip: dry run
   * - Normal: normal execution
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: triggered by a scheduling cycle
   * - Manual: manually triggered
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      recurrence: 'Recurrence',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrence: 'string',
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

export class UpdateWorkflowRequestTasks extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baseLineId?: number;
  /**
   * @remarks
   * The client unique code of the node, used for asynchronous operations and idempotence. If not specified during creation, the system automatically generates one, and the code is uniquely bound to the resource ID. If this parameter is specified during update or deletion, it must be consistent with the client unique code used during creation.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The associated data source information.
   */
  dataSource?: UpdateWorkflowRequestTasksDataSource;
  /**
   * @remarks
   * The dependency information. If this field is not specified or is an empty array, all Dependencies configurations are deleted by default.
   */
  dependencies?: UpdateWorkflowRequestTasksDependencies[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test
   */
  description?: string;
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
   * The node ID. If this field is specified, the corresponding node is fully updated. If this field is not specified, a new node is created.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The input information. If this field is empty, all Inputs configurations are deleted by default.
   */
  inputs?: UpdateWorkflowRequestTasksInputs;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The output information. If this field is empty, all Outputs configurations are deleted by default.
   */
  outputs?: UpdateWorkflowRequestTasksOutputs;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The retry time interval, in seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * Specifies whether the node can be rerun. Valid values:
   * - AllDenied: cannot be rerun regardless of success or failure
   * - FailureAllowed: can be rerun only upon failure
   * - AllAllowed: can be rerun regardless of success or failure
   * 
   * This parameter is required.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect only when the node is configured to allow reruns.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The runtime environment configuration, such as resource group information.
   * 
   * This parameter is required.
   */
  runtimeResource?: UpdateWorkflowRequestTasksRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: UpdateWorkflowRequestTasksScript;
  /**
   * @remarks
   * The list of node tags. If this field is not specified or is an empty array, all Tags configurations are deleted by default.
   */
  tags?: UpdateWorkflowRequestTasksTags[];
  /**
   * @remarks
   * The timeout period for node execution, in seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger configuration of the node.
   * 
   * This parameter is required.
   */
  trigger?: UpdateWorkflowRequestTasksTrigger;
  /**
   * @remarks
   * The node type.
   * 
   * This parameter is required.
   * 
   * @example
   * ODPS_SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      baseLineId: 'BaseLineId',
      clientUniqueCode: 'ClientUniqueCode',
      dataSource: 'DataSource',
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      inputs: 'Inputs',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      tags: 'Tags',
      timeout: 'Timeout',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseLineId: 'number',
      clientUniqueCode: 'string',
      dataSource: UpdateWorkflowRequestTasksDataSource,
      dependencies: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      inputs: UpdateWorkflowRequestTasksInputs,
      name: 'string',
      outputs: UpdateWorkflowRequestTasksOutputs,
      owner: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: UpdateWorkflowRequestTasksRuntimeResource,
      script: UpdateWorkflowRequestTasksScript,
      tags: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasksTags },
      timeout: 'number',
      trigger: UpdateWorkflowRequestTasksTrigger,
      type: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter takes effect only when type is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The time when the periodic trigger expires. This parameter takes effect only when type is set to Scheduler. Format: `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The effective period of the epoch trigger. This parameter takes effect only when type is set to Scheduler. Format: `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: triggered by a scheduling cycle
   * - Manual: manually triggered
   * 
   * This parameter is required.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
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

export class UpdateWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the workflow, used for asynchronous operations and idempotence. If not specified during creation, the system automatically generates one, and the code is uniquely bound to the resource ID. If this parameter is specified during update or deletion, it must be consistent with the client unique code used during creation.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: UpdateWorkflowRequestDependencies[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
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
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * 
   * - T+1: Instances are generated the next day.
   * - Immediately: Instances are generated immediately. Periodic instances are generated only if the scheduled time of the workflow is at least 10 minutes after the workflow is published. During the full instance generation period (22:00 to 24:00), real-time instance generation is not available. You can submit and publish workflows during this period, but instances are not regenerated after submission.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * My Workflow
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: UpdateWorkflowRequestOutputs;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The parameter list.
   * 
   * @example
   * para1=$bizdate para2=$[yyyymmdd]
   */
  parameters?: string;
  /**
   * @remarks
   * The list of workflow tags.
   */
  tags?: UpdateWorkflowRequestTags[];
  /**
   * @remarks
   * The node list.
   */
  tasks?: UpdateWorkflowRequestTasks[];
  /**
   * @remarks
   * The trigger configuration.
   * 
   * This parameter is required.
   */
  trigger?: UpdateWorkflowRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      instanceMode: 'InstanceMode',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      parameters: 'Parameters',
      tags: 'Tags',
      tasks: 'Tasks',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      dependencies: { 'type': 'array', 'itemType': UpdateWorkflowRequestDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      instanceMode: 'string',
      name: 'string',
      outputs: UpdateWorkflowRequestOutputs,
      owner: 'string',
      parameters: 'string',
      tags: { 'type': 'array', 'itemType': UpdateWorkflowRequestTags },
      tasks: { 'type': 'array', 'itemType': UpdateWorkflowRequestTasks },
      trigger: UpdateWorkflowRequestTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(this.outputs && typeof (this.outputs as any).validate === 'function') {
      (this.outputs as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

