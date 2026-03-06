// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllocatedHyperNodeDetail } from "./AllocatedHyperNodeDetail";


export class QuotaNodeStatistics extends $dara.Model {
  actualMinHyperNodeNum?: number;
  actualMinNodeNum?: number;
  allocatedHyperNodeDetails?: AllocatedHyperNodeDetail[];
  allocatedHyperNodeNum?: number;
  allocatedNodeNum?: number;
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

