// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeDependenciesResponseBodyPagingInfoNodesDataSource } from "./ListNodeDependenciesResponseBodyPagingInfoNodesDataSource";
import { ListNodeDependenciesResponseBodyPagingInfoNodesInputs } from "./ListNodeDependenciesResponseBodyPagingInfoNodesInputs";
import { ListNodeDependenciesResponseBodyPagingInfoNodesOutputs } from "./ListNodeDependenciesResponseBodyPagingInfoNodesOutputs";
import { ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource } from "./ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource";
import { ListNodeDependenciesResponseBodyPagingInfoNodesScript } from "./ListNodeDependenciesResponseBodyPagingInfoNodesScript";
import { ListNodeDependenciesResponseBodyPagingInfoNodesStrategy } from "./ListNodeDependenciesResponseBodyPagingInfoNodesStrategy";
import { ListNodeDependenciesResponseBodyPagingInfoNodesTags } from "./ListNodeDependenciesResponseBodyPagingInfoNodesTags";
import { ListNodeDependenciesResponseBodyPagingInfoNodesTrigger } from "./ListNodeDependenciesResponseBodyPagingInfoNodesTrigger";


export class ListNodeDependenciesResponseBodyPagingInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data source.
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
   * The time when the node was last modified. This value is a UNIX timestamp.
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

