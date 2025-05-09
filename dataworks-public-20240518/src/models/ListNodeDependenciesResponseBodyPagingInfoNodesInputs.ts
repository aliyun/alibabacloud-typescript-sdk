// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs } from "./ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs";
import { ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables } from "./ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables";
import { ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables } from "./ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables";


export class ListNodeDependenciesResponseBodyPagingInfoNodesInputs extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * The variables.
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

