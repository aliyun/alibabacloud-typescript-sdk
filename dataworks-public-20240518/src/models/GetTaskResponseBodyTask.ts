// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskResponseBodyTaskDataSource } from "./GetTaskResponseBodyTaskDataSource";
import { GetTaskResponseBodyTaskDependencies } from "./GetTaskResponseBodyTaskDependencies";
import { GetTaskResponseBodyTaskInputs } from "./GetTaskResponseBodyTaskInputs";
import { GetTaskResponseBodyTaskOutputs } from "./GetTaskResponseBodyTaskOutputs";
import { GetTaskResponseBodyTaskRuntimeResource } from "./GetTaskResponseBodyTaskRuntimeResource";
import { GetTaskResponseBodyTaskScript } from "./GetTaskResponseBodyTaskScript";
import { GetTaskResponseBodyTaskSubTasks } from "./GetTaskResponseBodyTaskSubTasks";
import { GetTaskResponseBodyTaskTags } from "./GetTaskResponseBodyTaskTags";
import { GetTaskResponseBodyTaskTrigger } from "./GetTaskResponseBodyTaskTrigger";


export class GetTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the creator.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: GetTaskResponseBodyTaskDataSource;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: GetTaskResponseBodyTaskDependencies[];
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
   * The instance ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   * 
   * **if can be null:**
   * false
   */
  inputs?: GetTaskResponseBodyTaskInputs;
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
   * The modification time.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * SQL node
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: GetTaskResponseBodyTaskOutputs;
  /**
   * @remarks
   * The account ID of the task owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the task. Valid values: 1 to 8. A larger value indicates a higher priority. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The environment of the workspace. This parameter is deprecated and replaced by the EnvType parameter. Valid values:
   * 
   * *   Prod: production environment
   * *   Dev: development environment
   * 
   * @example
   * Prod
   * 
   * @deprecated
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
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
   * *   AllDenied: The task cannot be rerun regardless of whether the task is successfully run or fails to be run.
   * *   FailureAllowed: The task can be rerun only after it fails to be run.
   * *   AllAllowed: The task can be rerun regardless of whether the task is successfully run or fails to be run.
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
   */
  runtimeResource?: GetTaskResponseBodyTaskRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: GetTaskResponseBodyTaskScript;
  /**
   * @remarks
   * The configurations of the subtasks, such as a do-while node.
   */
  subTasks?: GetTaskResponseBodyTaskSubTasks;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetTaskResponseBodyTaskTags[];
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
   * The method to trigger task scheduling.
   */
  trigger?: GetTaskResponseBodyTaskTrigger;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * ODPS_SQL
   */
  type?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataSource: 'DataSource',
      dependencies: 'Dependencies',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      inputs: 'Inputs',
      instanceMode: 'InstanceMode',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      priority: 'Priority',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      subTasks: 'SubTasks',
      tags: 'Tags',
      timeout: 'Timeout',
      trigger: 'Trigger',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      createTime: 'number',
      createUser: 'string',
      dataSource: GetTaskResponseBodyTaskDataSource,
      dependencies: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDependencies },
      description: 'string',
      envType: 'string',
      id: 'number',
      inputs: GetTaskResponseBodyTaskInputs,
      instanceMode: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      outputs: GetTaskResponseBodyTaskOutputs,
      owner: 'string',
      priority: 'number',
      projectEnv: 'string',
      projectId: 'number',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      runtimeResource: GetTaskResponseBodyTaskRuntimeResource,
      script: GetTaskResponseBodyTaskScript,
      subTasks: GetTaskResponseBodyTaskSubTasks,
      tags: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskTags },
      timeout: 'number',
      trigger: GetTaskResponseBodyTaskTrigger,
      type: 'string',
      workflowId: 'number',
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
    if(this.subTasks && typeof (this.subTasks as any).validate === 'function') {
      (this.subTasks as any).validate();
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

