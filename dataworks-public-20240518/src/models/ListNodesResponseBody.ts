// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesResponseBodyPagingInfoNodesDataSource extends $dara.Model {
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

export class ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs extends $dara.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 623731286945488XXXX
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

export class ListNodesResponseBodyPagingInfoNodesInputsTables extends $dara.Model {
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

export class ListNodesResponseBodyPagingInfoNodesInputsVariablesNode extends $dara.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 623731286945488XXXX
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

export class ListNodesResponseBodyPagingInfoNodesInputsVariables extends $dara.Model {
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
   * 543211286945488XXXX
   */
  id?: number;
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
  node?: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * The scope of the variable. Valid values:
   * 
   * *   WorkSpace
   * *   NodeParameter
   * *   NodeContext
   * *   Workflow
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
   * The variable value.
   * 
   * @example
   * 222
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
      node: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode,
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

export class ListNodesResponseBodyPagingInfoNodesInputs extends $dara.Model {
  /**
   * @remarks
   * The node output list.
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * The table list.
   */
  tables?: ListNodesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The variable list.
   */
  variables?: ListNodesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsVariables },
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

export class ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $dara.Model {
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

export class ListNodesResponseBodyPagingInfoNodesOutputsTables extends $dara.Model {
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

export class ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode extends $dara.Model {
  /**
   * @remarks
   * The node output.
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

export class ListNodesResponseBodyPagingInfoNodesOutputsVariables extends $dara.Model {
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
   * 623731286945488XXXX
   */
  id?: number;
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
  node?: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * The variable scope. Valid values:
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
   * The variable type. Valid values:
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
   * The variable value.
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
      node: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode,
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

export class ListNodesResponseBodyPagingInfoNodesOutputs extends $dara.Model {
  /**
   * @remarks
   * The node output list.
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * The table list.
   */
  tables?: ListNodesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The variable list.
   */
  variables?: ListNodesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsVariables },
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

export class ListNodesResponseBodyPagingInfoNodesRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The identifier of the resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/173913.html) operation to query the identifier of the resource group.
   * 
   * @example
   * S_res_group_XXXX
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: 'string',
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

export class ListNodesResponseBodyPagingInfoNodesScriptRuntime extends $dara.Model {
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

export class ListNodesResponseBodyPagingInfoNodesScript extends $dara.Model {
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
  runtime?: ListNodesResponseBodyPagingInfoNodesScriptRuntime;
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
      runtime: ListNodesResponseBodyPagingInfoNodesScriptRuntime,
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

export class ListNodesResponseBodyPagingInfoNodesStrategy extends $dara.Model {
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
   * The rerun interval. Unit: milliseconds.
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
   * The number of reruns.
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * Timeout.
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

export class ListNodesResponseBodyPagingInfoNodesTags extends $dara.Model {
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

export class ListNodesResponseBodyPagingInfoNodesTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression for scheduling
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the validity period of the trigger.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: number;
  /**
   * @remarks
   * The start time of the validity period of the trigger.
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
   * *   Scheduler: periodic scheduling
   * *   Manual: manual trigger
   * *   Streaming: streaming task
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

export class ListNodesResponseBodyPagingInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the node in DataStudio was created.
   * 
   * @example
   * 1722910655000
   */
  createTime?: number;
  /**
   * @remarks
   * The data source.
   */
  dataSource?: ListNodesResponseBodyPagingInfoNodesDataSource;
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
   * 860438872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * The node input.
   */
  inputs?: ListNodesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * The timestamp when the node in DataStudio was last modified.
   * 
   * @example
   * 1722910655000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The node output.
   */
  outputs?: ListNodesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * The owner of nodes in DataStudio.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * @example
   * 33233
   */
  projectId?: number;
  /**
   * @remarks
   * The scheduling type.
   * 
   * Valid values:
   * 
   * *   Normal: The node is scheduled as expected.
   * *   Pause: The node is paused, and the running of its descendant nodes is blocked.
   * *   Skip: The node is dry run. The system does not actually run the node but directly prompts that the node is successfully run. The running duration of the node is 0 seconds. In addition, the node does not occupy resources or block the running of its descendant nodes.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The information about the resource group.
   */
  runtimeResource?: ListNodesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * The script information.
   */
  script?: ListNodesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * The scheduling policy.
   */
  strategy?: ListNodesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * The tag information (not in use).
   */
  tags?: ListNodesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * The scheduling task ID.
   * 
   * @example
   * 88888888888
   */
  taskId?: number;
  /**
   * @remarks
   * The trigger.
   */
  trigger?: ListNodesResponseBodyPagingInfoNodesTrigger;
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
      dataSource: ListNodesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'number',
      inputs: ListNodesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'number',
      recurrence: 'string',
      runtimeResource: ListNodesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodesResponseBodyPagingInfoNodesScript,
      strategy: ListNodesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesTags },
      taskId: 'number',
      trigger: ListNodesResponseBodyPagingInfoNodesTrigger,
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

export class ListNodesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of nodes in DataStudio.
   */
  nodes?: ListNodesResponseBodyPagingInfoNodes[];
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
   * 42
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
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodes },
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

export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListNodesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2197B9C4-39CE-55EA-8EEA-FDBAE52DXXXX
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
      pagingInfo: ListNodesResponseBodyPagingInfo,
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

