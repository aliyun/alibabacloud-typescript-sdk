// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs } from "./ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs";
import { ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables } from "./ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables";
import { ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables } from "./ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables";


export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputs extends $dara.Model {
  /**
   * @remarks
   * The node outputs.
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * The tables.
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * The variables.
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

