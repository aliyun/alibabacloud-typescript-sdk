// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
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
   * 
   * *   CrossCycleDependsOnChildren: cross-cycle dependency on level-1 descendant nodes
   * *   CrossCycleDependsOnSelf: cross-cycle dependency on the current node
   * *   CrossCycleDependsOnOtherNode: cross-cycle dependency on other nodes
   * *   Normal: same-cycle scheduling dependency
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The identifier of the output of the ancestor task. This parameter is returned only if `same-cycle scheduling dependencies` and the node input are configured.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ancestor task ID. This parameter is returned only if `cross-cycle scheduling dependencies` or `same-cycle scheduling dependencies` and the node input are not configured.
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
   * The name of the variable.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * *   Constant: constant
   * *   PassThrough: node output
   * *   System: variable
   * *   NodeOutput: script output
   * 
   * This parameter is required.
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
   * The variables.
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
   * The identifier of the output.
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
   * The name of the variable.
   * 
   * @example
   * key1
   */
  name?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * *   Constant: constant
   * *   PassThrough: node output
   * *   System: variable
   * *   NodeOutput: script output
   * 
   * This parameter is required.
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
   * The task outputs.
   */
  taskOutputs?: UpdateTaskRequestOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
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
   * The default number of compute units (CUs) configured for task running.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The ID of the image configured for task running.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The ID of the resource group for scheduling configured for task running.
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

export class UpdateTaskRequestScript extends $dara.Model {
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
   * The script parameters.
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
   * The CRON expression. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler. The value of this parameter is in the`yyyy-mm-dd hh:mm:ss` format.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The running mode of the task after it is triggered. This parameter takes effect only if the Type parameter is set to Scheduler. Valid values:
   * 
   * *   Pause
   * *   Skip
   * *   Normal
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The start time of the time range during which the task is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler. The value of this parameter is in the`yyyy-mm-dd hh:mm:ss` format.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
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
      recurrence: 'Recurrence',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
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
   * The unique code of the client. This code uniquely identifies a task. This parameter is used to create a task asynchronously and implement the idempotence of the task. If you do not specify this parameter when you create the task, the system automatically generates a unique code. The unique code is uniquely associated with the task ID. If you specify this parameter when you update or delete the task, the value of this parameter must be the unique code that is used to create the task.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: UpdateTaskRequestDataSource;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: UpdateTaskRequestDependencies[];
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The task ID.
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
   * 
   * *   T+1
   * *   Immediately
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
   * The account ID of the task owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The rerun interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to run.
   * *   FailureAllowed: The task can be rerun only after it fails to run.
   * *   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to run.
   * 
   * This parameter is required.
   * 
   * @example
   * AllAllowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of times that the task is rerun. This parameter takes effect only if the RerunMode parameter is set to AllAllowed or FailureAllowed.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The configurations of the runtime environment, such as the resource group information.
   * 
   * This parameter is required.
   */
  runtimeResource?: UpdateTaskRequestRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: UpdateTaskRequestScript;
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdateTaskRequestTags[];
  /**
   * @remarks
   * The timeout period of task running. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method.
   * 
   * This parameter is required.
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

