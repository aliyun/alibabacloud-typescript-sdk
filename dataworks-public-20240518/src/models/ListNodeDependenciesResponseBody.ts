// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDependenciesResponseBodyPagingInfoNodesDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  /**
   * @remarks
   * The target data table that identifies the node output. This field provides a semantic name that is easy to understand, helping you quickly identify the output content. It is used only for display and annotation purposes and has no actual logical constraints.
   * 
   * @example
   * testProject.testTableName
   */
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      refTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables extends $dara.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   * 
   * @example
   * 860438872620113XXXX
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables extends $dara.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * >Notice: This field was of the Long type in SDK versions earlier than 8.0.0 and is of the String type in SDK 8.0.0 and later. **This change does not affect normal SDK usage. The parameter is still returned in the type defined in the SDK.** Only when upgrading across SDK version 8.0.0, the type change may cause project compilation failures, and you must manually correct the data type.
   * 
   * @example
   * 543218872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * The node to which the variable belongs.
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * The scope. Valid values:
   * - NodeParameter
   * - NodeContext
   * - Workflow
   * - Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - NoKvVariableExpression
   * - Constant
   * - PassThrough
   * - System
   * - NodeOutput
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
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputs extends $dara.Model {
  /**
   * @remarks
   * The list of node outputs.
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * The list of tables.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The list of variables.
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.nodeOutputs)) {
      $dara.Model.validateArray(this.nodeOutputs);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   * 
   * @example
   * 463497880880954XXXX
   */
  data?: string;
  /**
   * @remarks
   * The target data table that identifies the node output. This field provides a semantic name that is easy to understand, helping you quickly identify the output content. It is used only for display and annotation purposes and has no actual logical constraints.
   * 
   * @example
   * testProject.testTableName
   */
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      refTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables extends $dara.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode extends $dara.Model {
  /**
   * @remarks
   * The node output that corresponds to the variable.
   * 
   * @example
   * 463497880880954XXXX
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables extends $dara.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * >Notice: This field was of the Long type in SDK versions earlier than 8.0.0 and is of the String type in SDK 8.0.0 and later. **This change does not affect normal SDK usage. The parameter is still returned in the type defined in the SDK.** Only when upgrading across SDK version 8.0.0, the type change may cause project compilation failures, and you must manually correct the data type.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * The node to which the variable belongs.
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * The scope of the variable. Valid values:
   * - NodeParameter
   * - NodeContext
   * - Workflow
   * - Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable. Valid values:
   * - NoKvVariableExpression
   * - Constant
   * - PassThrough
   * - System
   * - NodeOutput
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
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputs extends $dara.Model {
  /**
   * @remarks
   * The list of node outputs.
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * The list of tables.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The list of variables.
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  validate() {
    if(Array.isArray(this.nodeOutputs)) {
      $dara.Model.validateArray(this.nodeOutputs);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * S_res_group_XXXX_XXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * The command, which is used to distinguish node types.
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * >Notice: This field was of the Long type in SDK versions earlier than 8.0.0 and is of the String type in SDK 8.0.0 and later. **This change does not affect normal SDK usage. The parameter is still returned in the type defined in the SDK.** Only when you upgrade across SDK version 8.0.0, the type change may cause project compilation failures, and you must manually correct the data type.
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
   */
  runtime?: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesStrategy extends $dara.Model {
  /**
   * @remarks
   * The mode for generating instances. Valid values:
   * - T+1
   * - Immediately
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * The retry interval after the node failed, in milliseconds.
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The mode that specifies whether reruns are allowed. Valid values:
   * - Allowed
   * - Denied
   * - FailureAllowed
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries after a failure.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The timeout period, in milliseconds.
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * null
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression for scheduling.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time when the schedule expires. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The unique identifier of the trigger.
   * 
   * >Notice: This field was of the Long type in SDK versions earlier than 8.0.0 and is of the String type in SDK 8.0.0 and later. **This change does not affect normal SDK usage. The parameter is still returned in the type defined in the SDK.** Only when you upgrade across SDK version 8.0.0, the type change may cause project compilation failures, and you must manually correct the data type.
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * The start time when the schedule takes effect. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * Valid values:
   * 
   * - Scheduler: Timed scheduling.
   * - Manual: Manual scheduling.
   * - Streaming: Streaming scheduler.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
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

export class ListNodeDependenciesResponseBodyPagingInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the data development node was created.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The data source.
   */
  dataSource?: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * Node description
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the DataStudio node.
   * 
   * >Notice: This field was of the Long type in SDK versions earlier than 8.0.0 and is of the String type in SDK 8.0.0 and later. **This change does not affect normal SDK usage. The parameter is still returned in the type defined in the SDK.** Only when you upgrade across SDK version 8.0.0, the type change may cause project compilation failures, and you must manually correct the data type.
   * 
   * @example
   * 723932906364267XXXX
   */
  id?: string;
  /**
   * @remarks
   * The node inputs.
   */
  inputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * The timestamp when the data development node was last modified.
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the data development node.
   * 
   * @example
   * Node name
   */
  name?: string;
  /**
   * @remarks
   * The node outputs.
   */
  outputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * The owner of the data development node.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the data development node belongs.
   * 
   * @example
   * 65133
   */
  projectId?: number;
  /**
   * @remarks
   * The scheduling type.
   * 
   * Valid values:
   * 
   * - Normal: The node runs normally.
   * 
   * - Pause: The node is paused and blocks the execution of downstream nodes that depend on it.
   * 
   * - Skip: The node is set to dry run. The system directly returns a success result (with an execution duration of 0 seconds), does not block downstream node execution, and does not consume resources.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The resource group information.
   */
  runtimeResource?: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: ListNodeDependenciesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * The scheduling strategy.
   */
  strategy?: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * The tag information. This field is not currently in use.
   */
  tags?: ListNodeDependenciesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * The ID of the schedule task.
   * 
   * @example
   * 580667964888595XXXX
   */
  taskId?: number;
  /**
   * @remarks
   * The trigger.
   */
  trigger?: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodeDependenciesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'number',
      recurrence: 'string',
      runtimeResource: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodeDependenciesResponseBodyPagingInfoNodesScript,
      strategy: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesTags },
      taskId: 'number',
      trigger: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger,
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
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
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
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

export class ListNodeDependenciesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of dependent nodes returned by the query.
   */
  nodes?: ListNodeDependenciesResponseBodyPagingInfoNodes[];
  /**
   * @remarks
   * The page number of the requested data, used for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of records that meet the conditions.
   * 
   * @example
   * 90
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListNodeDependenciesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 204EAF68-CCE3-5112-8DA0-E7A60F02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodeDependenciesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

