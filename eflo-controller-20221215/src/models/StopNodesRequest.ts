// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow skipping failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFailedNodeTasks: 'boolean',
      nodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

