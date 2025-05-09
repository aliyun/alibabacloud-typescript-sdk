// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs } from "./ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs";
import { ListNodesResponseBodyPagingInfoNodesOutputsTables } from "./ListNodesResponseBodyPagingInfoNodesOutputsTables";
import { ListNodesResponseBodyPagingInfoNodesOutputsVariables } from "./ListNodesResponseBodyPagingInfoNodesOutputsVariables";


export class ListNodesResponseBodyPagingInfoNodesOutputs extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The variables.
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

