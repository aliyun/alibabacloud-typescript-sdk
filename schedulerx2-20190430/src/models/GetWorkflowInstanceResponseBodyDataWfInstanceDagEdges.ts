// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges extends $dara.Model {
  /**
   * @remarks
   * The upstream job instance of the current job instance. A value of 0 indicates that the upstream job instance is the root node.
   * 
   * @example
   * 24058798
   */
  source?: number;
  /**
   * @remarks
   * The downstream job instance of the current job instance.
   * 
   * @example
   * 24058796
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

