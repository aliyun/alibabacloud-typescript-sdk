// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyPagingInfoNodesDataSource } from "./ListNodesResponseBodyPagingInfoNodesDataSource";
import { ListNodesResponseBodyPagingInfoNodesInputs } from "./ListNodesResponseBodyPagingInfoNodesInputs";
import { ListNodesResponseBodyPagingInfoNodesOutputs } from "./ListNodesResponseBodyPagingInfoNodesOutputs";
import { ListNodesResponseBodyPagingInfoNodesRuntimeResource } from "./ListNodesResponseBodyPagingInfoNodesRuntimeResource";
import { ListNodesResponseBodyPagingInfoNodesScript } from "./ListNodesResponseBodyPagingInfoNodesScript";
import { ListNodesResponseBodyPagingInfoNodesStrategy } from "./ListNodesResponseBodyPagingInfoNodesStrategy";
import { ListNodesResponseBodyPagingInfoNodesTags } from "./ListNodesResponseBodyPagingInfoNodesTags";
import { ListNodesResponseBodyPagingInfoNodesTrigger } from "./ListNodesResponseBodyPagingInfoNodesTrigger";


export class ListNodesResponseBodyPagingInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1722910655000
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data source.
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
   * The input of the node.
   */
  inputs?: ListNodesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * The time when the node was last modified. This value is a UNIX timestamp.
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
   * The output of the node.
   */
  outputs?: ListNodesResponseBodyPagingInfoNodesOutputs;
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
   * The tags. This parameter is not in use.
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

