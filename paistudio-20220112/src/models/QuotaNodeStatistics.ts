// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllocatedHyperNodeDetail } from "./AllocatedHyperNodeDetail";


export class QuotaNodeStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of super nodes.
   * 
   * @example
   * 0
   */
  actualMinHyperNodeNum?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 0
   */
  actualMinNodeNum?: number;
  /**
   * @remarks
   * The super node details.
   */
  allocatedHyperNodeDetails?: AllocatedHyperNodeDetail[];
  /**
   * @remarks
   * The number of allocated super nodes.
   * 
   * @example
   * 0
   */
  allocatedHyperNodeNum?: number;
  /**
   * @remarks
   * The number of allocated nodes.
   * 
   * @example
   * 0
   */
  allocatedNodeNum?: number;
  /**
   * @remarks
   * The number of idle nodes.
   * 
   * @example
   * 0
   */
  emptyNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      actualMinHyperNodeNum: 'ActualMinHyperNodeNum',
      actualMinNodeNum: 'ActualMinNodeNum',
      allocatedHyperNodeDetails: 'AllocatedHyperNodeDetails',
      allocatedHyperNodeNum: 'AllocatedHyperNodeNum',
      allocatedNodeNum: 'AllocatedNodeNum',
      emptyNodeNum: 'EmptyNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualMinHyperNodeNum: 'number',
      actualMinNodeNum: 'number',
      allocatedHyperNodeDetails: { 'type': 'array', 'itemType': AllocatedHyperNodeDetail },
      allocatedHyperNodeNum: 'number',
      allocatedNodeNum: 'number',
      emptyNodeNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allocatedHyperNodeDetails)) {
      $dara.Model.validateArray(this.allocatedHyperNodeDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

