// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowEdgesRequestEdges extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow edge.
   * 
   * This parameter is required.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The ID of the end node of the edge.
   * 
   * This parameter is required.
   * 
   * @example
   * 44***
   */
  nodeEnd?: number;
  /**
   * @remarks
   * The ID of the start node of the edge.
   * 
   * This parameter is required.
   * 
   * @example
   * 44***
   */
  nodeFrom?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeEnd: 'NodeEnd',
      nodeFrom: 'NodeFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

