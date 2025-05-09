// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode } from "./ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode";


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

