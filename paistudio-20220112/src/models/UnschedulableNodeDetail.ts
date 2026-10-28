// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnschedulableNodeDetail extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: string[];
  /**
   * @remarks
   * The failure cause.
   * 
   * @example
   * NotEnoughGPU
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
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

