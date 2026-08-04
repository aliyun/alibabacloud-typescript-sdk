// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllocatedHyperNodeDetail } from "./AllocatedHyperNodeDetail";


export class QuotaNodeStatistics extends $dara.Model {
  /**
   * @remarks
   * The guaranteed minimum number of hyper nodes available in the quota.
   */
  actualMinHyperNodeNum?: number;
  /**
   * @remarks
   * The guaranteed minimum number of nodes available in the quota.
   */
  actualMinNodeNum?: number;
  /**
   * @remarks
   * The details of an allocated hyper node.
   */
  allocatedHyperNodeDetails?: AllocatedHyperNodeDetail[];
  /**
   * @remarks
   * The number of hyper nodes currently allocated from the quota.
   */
  allocatedHyperNodeNum?: number;
  /**
   * @remarks
   * The number of nodes currently allocated from the quota.
   */
  allocatedNodeNum?: number;
  /**
   * @remarks
   * The number of allocated nodes currently idle.
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

