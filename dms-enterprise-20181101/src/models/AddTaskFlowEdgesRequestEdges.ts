// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTaskFlowEdgesRequestEdges extends $dara.Model {
  /**
   * @remarks
   * The ID of the node where the end node of the edge is located.
   * 
   * This parameter is required.
   * 
   * @example
   * 44***
   */
  nodeEnd?: number;
  /**
   * @remarks
   * The ID of the node where the start node of the edge is located.
   * 
   * This parameter is required.
   * 
   * @example
   * 44***
   */
  nodeFrom?: number;
  static names(): { [key: string]: string } {
    return {
      nodeEnd: 'NodeEnd',
      nodeFrom: 'NodeFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeEnd: 'number',
      nodeFrom: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

