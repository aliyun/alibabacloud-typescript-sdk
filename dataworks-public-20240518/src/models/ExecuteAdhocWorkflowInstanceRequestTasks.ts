// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAdhocWorkflowInstanceRequestTasksDataSource } from "./ExecuteAdhocWorkflowInstanceRequestTasksDataSource";
import { ExecuteAdhocWorkflowInstanceRequestTasksDependencies } from "./ExecuteAdhocWorkflowInstanceRequestTasksDependencies";
import { ExecuteAdhocWorkflowInstanceRequestTasksInputs } from "./ExecuteAdhocWorkflowInstanceRequestTasksInputs";
import { ExecuteAdhocWorkflowInstanceRequestTasksOutputs } from "./ExecuteAdhocWorkflowInstanceRequestTasksOutputs";
import { ExecuteAdhocWorkflowInstanceRequestTasksRuntimeResource } from "./ExecuteAdhocWorkflowInstanceRequestTasksRuntimeResource";
import { ExecuteAdhocWorkflowInstanceRequestTasksScript } from "./ExecuteAdhocWorkflowInstanceRequestTasksScript";


export class ExecuteAdhocWorkflowInstanceRequestTasks extends $dara.Model {
  /**
   * @remarks
   * The unique code of the client. This code uniquely identifies a task.
   * 
   * This parameter is required.
   * 
   * @example
   * Task_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The information about the associated data source.
   */
  dataSource?: ExecuteAdhocWorkflowInstanceRequestTasksDataSource;
  /**
   * @remarks
   * The dependency information.
   */
  dependencies?: ExecuteAdhocWorkflowInstanceRequestTasksDependencies[];
  /**
   * @remarks
   * The input information.
   */
  inputs?: ExecuteAdhocWorkflowInstanceRequestTasksInputs;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * SQL node.
   */
  name?: string;
  /**
   * @remarks
   * The output information.
   */
  outputs?: ExecuteAdhocWorkflowInstanceRequestTasksOutputs;
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
   * The configurations of the runtime environment, such as the resource group information.
   * 
   * This parameter is required.
   */
  runtimeResource?: ExecuteAdhocWorkflowInstanceRequestTasksRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: ExecuteAdhocWorkflowInstanceRequestTasksScript;
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
      clientUniqueCode: 'ClientUniqueCode',
      dataSource: 'DataSource',
      dependencies: 'Dependencies',
      inputs: 'Inputs',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      dataSource: ExecuteAdhocWorkflowInstanceRequestTasksDataSource,
      dependencies: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksDependencies },
      inputs: ExecuteAdhocWorkflowInstanceRequestTasksInputs,
      name: 'string',
      outputs: ExecuteAdhocWorkflowInstanceRequestTasksOutputs,
      owner: 'string',
      runtimeResource: ExecuteAdhocWorkflowInstanceRequestTasksRuntimeResource,
      script: ExecuteAdhocWorkflowInstanceRequestTasksScript,
      timeout: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

