// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdhocWorkflowInstanceRequestTasksDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * mysql_test
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

export class ExecuteAdhocWorkflowInstanceRequestTasksDependencies extends $dara.Model {
  /**
   * @remarks
   * The identifier of the output of the ancestor task.
   * 
   * @example
   * pre.odps_sql_demo_0
   */
  upstreamOutput?: string;
  static names(): { [key: string]: string } {
    return {
      upstreamOutput: 'UpstreamOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upstreamOutput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables extends $dara.Model {
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
   * The value of the variable. You must configure this parameter in the `The ancestor output: The output variable name of the ancestor task` format.
   * 
   * @example
   * Value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ExecuteAdhocWorkflowInstanceRequestTasksInputs extends $dara.Model {
  /**
   * @remarks
   * The variables.
   */
  variables?: ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksInputsVariables },
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

export class ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs extends $dara.Model {
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

export class ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables extends $dara.Model {
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
   * *   System
   * *   Constant
   * *   NodeOutput
   * *   PassThrough
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

export class ExecuteAdhocWorkflowInstanceRequestTasksOutputs extends $dara.Model {
  /**
   * @remarks
   * The task outputs.
   */
  taskOutputs?: ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs[];
  /**
   * @remarks
   * The variables.
   */
  variables?: ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      taskOutputs: 'TaskOutputs',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskOutputs: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksOutputsTaskOutputs },
      variables: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasksOutputsVariables },
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

export class ExecuteAdhocWorkflowInstanceRequestTasksRuntimeResource extends $dara.Model {
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

export class ExecuteAdhocWorkflowInstanceRequestTasksScript extends $dara.Model {
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

export class ExecuteAdhocWorkflowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The data timestamp.
   * 
   * @example
   * 1710239005403
   */
  bizDate?: number;
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
   * The name of the workflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
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
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The tasks.
   * 
   * This parameter is required.
   */
  tasks?: ExecuteAdhocWorkflowInstanceRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      envType: 'EnvType',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      envType: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      tasks: { 'type': 'array', 'itemType': ExecuteAdhocWorkflowInstanceRequestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

