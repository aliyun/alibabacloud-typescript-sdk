// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLFlowSankeyColumn } from "./RlflowSankeyColumn";
import { RLFlowSankeyExit } from "./RlflowSankeyExit";


export class RLFlowSankey extends $dara.Model {
  /**
   * @remarks
   * The five columns of the main chain.
   * 
   * @example
   * [{"Key":"traj","Label":"Generated trajectory","Count":96}]
   */
  columns?: RLFlowSankeyColumn[];
  /**
   * @remarks
   * The outflow edges of each column.
   * 
   * @example
   * [{"From":"run","FromIdx":1,"Label":"Not started","Count":0}]
   */
  exits?: RLFlowSankeyExit[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      exits: 'Exits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': RLFlowSankeyColumn },
      exits: { 'type': 'array', 'itemType': RLFlowSankeyExit },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.exits)) {
      $dara.Model.validateArray(this.exits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

