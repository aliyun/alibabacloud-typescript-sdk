// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskRequestDataSource extends $dara.Model {
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

export class UpdateTaskRequestDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * - CrossCycleDependsOnChildren: cross-cycle dependency on first-level child nodes.
   * - CrossCycleDependsOnSelf: cross-cycle dependency on self.
   * - CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes.
   * - Normal: same-cycle dependency.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The output identifier of the upstream node. This field is returned when the dependency type is same-cycle dependency and input content is configured.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ID of the upstream node. This field is returned when the dependency type is cross-cycle dependency on other nodes, or same-cycle dependency without input content configured. It is not returned in other cases.
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

export class UpdateTaskRequestInputsVariables extends $dara.Model {
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
   * - Constant: constant.
   * - PassThrough: parameter node output.
   * - System: variable.
   * - NodeOutput: script output.
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

export class UpdateTaskRequestInputs extends $dara.Model {
  /**
   * @remarks
   * The list of variable definitions.
   */
  variables?: UpdateTaskRequestInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': UpdateTaskRequestInputsVariables },
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

export class UpdateTaskRequestOutputsTaskOutputs extends $dara.Model {
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

export class UpdateTaskRequestOutputsVariables extends $dara.Model {
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
   * - Constant: constant.
   * - PassThrough: parameter node output.
   * - System: variable.
   * - NodeOutput: script output.
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

export class UpdateTaskRequestOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of node output definitions.
   */
  taskOutputs?: UpdateTaskRequestOutputsTaskOutputs[];
  /**
   * @remarks
   * The list of variable definitions.
   */
  variables?: UpdateTaskRequestOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateTaskRequestOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': UpdateTaskRequestOutputsVariables },
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

export class UpdateTaskRequestRuntimeResource extends $dara.Model {
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

export class UpdateTaskRequestScript extends $dara.Model {
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * echo "helloWorld"
   * 
   * @deprecated
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

export class UpdateTaskRequestTags extends $dara.Model {
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

export class UpdateTaskRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter takes effect when Type is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The epoch type. This parameter takes effect when Type is set to Scheduler and the cron expression specifies timed scheduling at a specific hour. Default value: Daily. Valid values:
   * - Daily: daily scheduling.
   * - NotDaily: hourly scheduling.
   * 
   * @example
   * Daily
   */
  cycleType?: string;
  /**
   * @remarks
   * The expiration time of the periodic trigger. This parameter takes effect when Type is set to Scheduler. Format: `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The run mode when triggered. This parameter takes effect when Type is set to Scheduler. Valid values:
   * - Pause: paused.
   * - Skip: dry run.
   * - Normal: normal run.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The effective period of the epoch trigger. This parameter takes effect when Type is set to Scheduler. Format: `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: periodic scheduling trigger.
   * - Manual: manual trigger.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      cycleType: 'CycleType',
      endTime: 'EndTime',
      recurrence: 'Recurrence',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      cycleType: 'string',
      endTime: 'string',
      recurrence: 'string',
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

export class UpdateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the node, used to uniquely identify a node. This code is used to implement asynchronous operations and idempotence. If not specified during creation, the system automatically generates one, and the code is uniquely bound to the resource ID. When updating or deleting a resource, if this parameter is specified, it must be consistent with the client unique code used during creation.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The associated data source information.
   */
  dataSource?: UpdateTaskRequestDataSource;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: UpdateTaskRequestDependencies[];
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
   * - Prod: production.
   * - Dev: development.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   */
  inputs?: UpdateTaskRequestInputs;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * - T+1: The instance is generated the next day.
   * - Immediately: The instance is generated immediately. Note: Only periodic instances whose scheduled time is at least ten minutes after the node publish time are generated normally. During the full instance generation period (22:00 to 24:00), real-time instance generation is not available. You can submit and publish nodes, but new nodes do not automatically generate instances.
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: UpdateTaskRequestOutputs;
  /**
   * @remarks
   * The account ID of the node owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The retry time interval, in milliseconds. The value cannot exceed 1800000.
   * 
   * @example
   * 60000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * Specifies whether the node can be rerun. Valid values:
   * - AllDenied: The node cannot be rerun regardless of whether it succeeds or fails.
   * - FailureAllowed: The node can be rerun only when it fails.
   * - AllAllowed: The node can be rerun regardless of whether it succeeds or fails.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries. This parameter takes effect when the node is configured to allow reruns.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The environment configuration, such as resource group information.
   */
  runtimeResource?: UpdateTaskRequestRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: UpdateTaskRequestScript;
  /**
   * @remarks
   * The list of node tags.
   */
  tags?: UpdateTaskRequestTags[];
  /**
   * @remarks
   * The node execution timeout period, in seconds. The value must be greater than 3600.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The node trigger method.
   */
  trigger?: UpdateTaskRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      dataSource: 'DataSource',
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      inputs: 'Inputs',
      instanceMode: 'InstanceMode',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      dataSource: UpdateTaskRequestDataSource,
      dependencies: { 'type': 'array', 'itemType': UpdateTaskRequestDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      inputs: UpdateTaskRequestInputs,
      instanceMode: 'string',
      name: 'string',
      outputs: UpdateTaskRequestOutputs,
      owner: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: UpdateTaskRequestRuntimeResource,
      script: UpdateTaskRequestScript,
      tags: { 'type': 'array', 'itemType': UpdateTaskRequestTags },
      timeout: 'number',
      trigger: UpdateTaskRequestTrigger,
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

