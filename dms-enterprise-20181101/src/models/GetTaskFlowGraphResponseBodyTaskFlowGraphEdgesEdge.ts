// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskFlowGraphResponseBodyTaskFlowGraphEdgesEdge extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the task flow edge.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The ID of the end node on the edge.
   * 
   * @example
   * 44***
   */
  nodeEnd?: number;
  /**
   * @remarks
   * The ID of the start node on the edge.
   * 
   * @example
   * 44***
   */
  nodeFrom?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      id: 'Id',
      nodeEnd: 'NodeEnd',
      nodeFrom: 'NodeFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
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

