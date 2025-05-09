// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTaskRequestDataSource } from "./UpdateTaskRequestDataSource";
import { UpdateTaskRequestDependencies } from "./UpdateTaskRequestDependencies";
import { UpdateTaskRequestInputs } from "./UpdateTaskRequestInputs";
import { UpdateTaskRequestOutputs } from "./UpdateTaskRequestOutputs";
import { UpdateTaskRequestRuntimeResource } from "./UpdateTaskRequestRuntimeResource";
import { UpdateTaskRequestScript } from "./UpdateTaskRequestScript";
import { UpdateTaskRequestTags } from "./UpdateTaskRequestTags";
import { UpdateTaskRequestTrigger } from "./UpdateTaskRequestTrigger";


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

