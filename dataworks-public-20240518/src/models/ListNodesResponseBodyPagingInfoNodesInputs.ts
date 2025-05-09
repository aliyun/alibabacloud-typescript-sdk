// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs } from "./ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs";
import { ListNodesResponseBodyPagingInfoNodesInputsTables } from "./ListNodesResponseBodyPagingInfoNodesInputsTables";
import { ListNodesResponseBodyPagingInfoNodesInputsVariables } from "./ListNodesResponseBodyPagingInfoNodesInputsVariables";


export class ListNodesResponseBodyPagingInfoNodesInputs extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The variables.
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

