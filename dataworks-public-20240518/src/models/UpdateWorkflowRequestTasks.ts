// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWorkflowRequestTasksDataSource } from "./UpdateWorkflowRequestTasksDataSource";
import { UpdateWorkflowRequestTasksDependencies } from "./UpdateWorkflowRequestTasksDependencies";
import { UpdateWorkflowRequestTasksInputs } from "./UpdateWorkflowRequestTasksInputs";
import { UpdateWorkflowRequestTasksOutputs } from "./UpdateWorkflowRequestTasksOutputs";
import { UpdateWorkflowRequestTasksRuntimeResource } from "./UpdateWorkflowRequestTasksRuntimeResource";
import { UpdateWorkflowRequestTasksScript } from "./UpdateWorkflowRequestTasksScript";
import { UpdateWorkflowRequestTasksTags } from "./UpdateWorkflowRequestTasksTags";
import { UpdateWorkflowRequestTasksTrigger } from "./UpdateWorkflowRequestTasksTrigger";


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
   * The unique code of the client. This parameter is used to create a task asynchronously and implement the idempotence of the task. If you do not specify this parameter when you create the workflow, the system automatically generates a unique code. The unique code is uniquely associated with the workflow ID. If you specify this parameter when you update or delete the workflow, the value of this parameter must be the unique code that is used to create the workflow.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: UpdateWorkflowRequestTasksDataSource;
  /**
   * @remarks
   * The dependency information.
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
   * The task ID. If you configure this parameter, full update is performed on the task. If you do not configure this parameter, another task is created.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The input information.
   */
  inputs?: UpdateWorkflowRequestTasksInputs;
  /**
   * @remarks
   * The name of the task.
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
  runtimeResource?: UpdateWorkflowRequestTasksRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: UpdateWorkflowRequestTasksScript;
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdateWorkflowRequestTasksTags[];
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
  trigger?: UpdateWorkflowRequestTasksTrigger;
  /**
   * @remarks
   * The type of the task.
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

