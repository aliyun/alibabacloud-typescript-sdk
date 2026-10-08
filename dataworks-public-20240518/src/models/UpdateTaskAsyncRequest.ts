// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskAsyncRequestDataSource extends $dara.Model {
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

export class UpdateTaskAsyncRequestDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependency type. Valid values:
   * - CrossCycleDependsOnChildren: cross-cycle dependency on first-level child nodes.
   * - CrossCycleDependsOnSelf: cross-cycle dependency on the node itself.
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
   * The output identifier of the upstream node. This field is returned for same-cycle dependencies when the input content is configured.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  /**
   * @remarks
   * The ID of the upstream node. This field is returned for cross-cycle dependencies on other nodes and for same-cycle dependencies when no input content is configured. It is not returned in other cases.
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

export class UpdateTaskAsyncRequestInputsVariables extends $dara.Model {
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
   * The variable type. Valid values:
   * - Constant: constant.
   * - PassThrough: output of a pass-through parameter node.
   * - System: system variable.
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

export class UpdateTaskAsyncRequestInputs extends $dara.Model {
  /**
   * @remarks
   * The list of variable definitions.
   */
  variables?: UpdateTaskAsyncRequestInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': UpdateTaskAsyncRequestInputsVariables },
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

export class UpdateTaskAsyncRequestOutputsTaskOutputs extends $dara.Model {
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

export class UpdateTaskAsyncRequestOutputsVariables extends $dara.Model {
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
   * The variable type. Valid values:
   * - Constant: constant.
   * - PassThrough: output of a pass-through parameter node.
   * - System: system variable.
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

export class UpdateTaskAsyncRequestOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of node output definitions.
   */
  taskOutputs?: UpdateTaskAsyncRequestOutputsTaskOutputs[];
  /**
   * @remarks
   * The list of variable definitions.
   */
  variables?: UpdateTaskAsyncRequestOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': UpdateTaskAsyncRequestOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': UpdateTaskAsyncRequestOutputsVariables },
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

export class UpdateTaskAsyncRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The CU consumption for the node runtime configuration.
   * 
   * @example
   * 0.25
   */
  cu?: string;
  /**
   * @remarks
   * The image ID for the node runtime configuration.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The identifier of the schedule resource group for the node runtime configuration.
   * 
   * @example
   * 63900680
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

export class UpdateTaskAsyncRequestScript extends $dara.Model {
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

export class UpdateTaskAsyncRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
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
   * value
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

export class UpdateTaskAsyncRequestTrigger extends $dara.Model {
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
   * The scheduling cycle type. This parameter takes effect when Type is set to Scheduler and the cron expression specifies a timed scheduling at a specific hour. Default value: Daily. Valid values:
   * 
   * 
   * 
   * 
   * - Daily: daily scheduling.
   * - NotDaily: hourly scheduling.
   * 
   * @example
   * Daily
   */
  cycleType?: string;
  /**
   * @remarks
   * The time when the periodic trigger expires. This parameter takes effect when Type is set to Scheduler. The format is `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The run mode when the trigger fires. This parameter takes effect when Type is set to Scheduler. Valid values:
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
   * The time at which the scheduled trigger takes effect. This parameter takes effect when Type is set to Scheduler. The format is `yyyy-mm-dd hh:mm:ss`.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: scheduled periodic trigger.
   * - Manual: manual trigger.
   * 
   * @example
   * BySchedule
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

export class UpdateTaskAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the node, used to uniquely identify a node. This code is used for asynchronous processing and idempotence. If you do not specify this parameter when creating a node, the system automatically generates a value and binds it to the resource ID. If you specify this parameter when updating or deleting a resource, the value must match the client unique code used when the resource was created.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The associated data source information.
   */
  dataSource?: UpdateTaskAsyncRequestDataSource;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: UpdateTaskAsyncRequestDependencies[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a description.
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
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   */
  inputs?: UpdateTaskAsyncRequestInputs;
  /**
   * @remarks
   * The instance generation mode. Valid values:
   * - T+1: generates instances the next day.
   * - Immediately: generates instances immediately. Note: only periodic instances whose scheduled time is more than 10 minutes after the node publish time are generated normally. During the full-to-instance conversion period (22:00–24:00), real-time instance conversion is not supported. You can submit and publish nodes, but new nodes are not automatically converted to instances.
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
   * name
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: UpdateTaskAsyncRequestOutputs;
  /**
   * @remarks
   * The account ID of the node owner. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and hover over the profile picture in the upper-right corner of the top navigation bar to view the account ID. If this parameter is left empty, the Alibaba Cloud account ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
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
   * The configuration that specifies whether the node can be rerun. Valid values:
   * 
   * 
   * 
   * 
   * - AllDenied: the node cannot be rerun regardless of whether it succeeds or fails.
   * - FailureAllowed: the node can be rerun only if it fails.
   * - AllAllowed: the node can be rerun regardless of whether it succeeds or fails.
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
   * The runtime environment configuration, such as the resource group information.
   */
  runtimeResource?: UpdateTaskAsyncRequestRuntimeResource;
  /**
   * @remarks
   * The runtime script information.
   */
  script?: UpdateTaskAsyncRequestScript;
  /**
   * @remarks
   * The list of data asset tags to attach.
   */
  tags?: UpdateTaskAsyncRequestTags[];
  /**
   * @remarks
   * The timeout period defined in the scheduling configuration.
   * 
   * @example
   * 1
   */
  timeout?: number;
  /**
   * @remarks
   * The trigger method of the node.
   */
  trigger?: UpdateTaskAsyncRequestTrigger;
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
      dataSource: UpdateTaskAsyncRequestDataSource,
      dependencies: { 'type': 'array', 'itemType': UpdateTaskAsyncRequestDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      inputs: UpdateTaskAsyncRequestInputs,
      instanceMode: 'string',
      name: 'string',
      outputs: UpdateTaskAsyncRequestOutputs,
      owner: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: UpdateTaskAsyncRequestRuntimeResource,
      script: UpdateTaskAsyncRequestScript,
      tags: { 'type': 'array', 'itemType': UpdateTaskAsyncRequestTags },
      timeout: 'number',
      trigger: UpdateTaskAsyncRequestTrigger,
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

