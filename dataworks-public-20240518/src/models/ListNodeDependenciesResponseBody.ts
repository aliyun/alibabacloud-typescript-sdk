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
   * The node output.
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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
   * The output of the node.
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
   * @example
   * 543218872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
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
   * The scope of the variable. Valid values:
   * 
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
   * *   Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable. Valid values:
   * 
   * *   NoKvVariableExpression
   * *   Constant
   * *   PassThrough
   * *   System
   * *   NodeOutput
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * The variable name.
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
      id: 'number',
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
   * The table list.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The variable list.
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
   * The output of the node.
   * 
   * @example
   * 463497880880954XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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
   * The node output corresponding to the variable.
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
   * @example
   * 543217824470354XXXX
   */
  id?: number;
  /**
   * @remarks
   * The variable name.
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
   * 
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
   * *   Workspace
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * The type of the variable. Valid values:
   * 
   * *   NoKvVariableExpression
   * *   Constant
   * *   PassThrough
   * *   System
   * *   NodeOutput
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
      id: 'number',
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
   * The table list.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The variable list.
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
   * The command used to distinguish node types.
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
   * @example
   * 853573334108680XXXX
   */
  id?: number;
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
      id: 'number',
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
   * The interval between retries after failure. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * The rerun mode. Valid values:
   * 
   * *   Allowed
   * *   Denied
   * *   FailureAllowed
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * The number of retries after failure.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
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
   * The effective end time of the schedule, in the format yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The unique identifier of the trigger.
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: number;
  /**
   * @remarks
   * The effective start time of the schedule, in the format yyyy-MM-dd HH:mm:ss.
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
   * *   Scheduler: periodic scheduling.
   * *   Manual: manual scheduling.
   * *   Streaming: streaming scheduler.
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
      id: 'number',
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
   * The timestamp when the node was created.
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
   * The ID of the node.
   * 
   * @example
   * 723932906364267XXXX
   */
  id?: number;
  /**
   * @remarks
   * The input of the node.
   */
  inputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * The timestamp when the node was last modified.
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  name?: string;
  /**
   * @remarks
   * The output of the node.
   */
  outputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * The owner of the node.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
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
   * *   Normal: Nodes are scheduled as expected.
   * *   Pause: Nodes are paused, and the running of their descendant nodes is blocked.
   * *   Skip: Nodes are dry run. The system does not actually run the nodes but directly prompts that the nodes are successfully run. The running duration of the nodes is 0 seconds. In addition, the nodes do not occupy resources or block the running of their descendant nodes.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The information about the resource group.
   */
  runtimeResource?: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: ListNodeDependenciesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * The scheduling policy.
   */
  strategy?: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * The tags. This parameter is not in use.
   */
  tags?: ListNodeDependenciesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * The scheduling task ID.
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
      id: 'number',
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
   * The list of dependent nodes.
   */
  nodes?: ListNodeDependenciesResponseBodyPagingInfoNodes[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The request ID.
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

