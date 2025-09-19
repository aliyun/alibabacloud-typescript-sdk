// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentResourceAllocation } from "./ResidentResourceAllocation";


export class ResidentResourceAllocationStatus extends $dara.Model {
  lastAllocatedTime?: string;
  lastAllocation?: ResidentResourceAllocation[];
  static names(): { [key: string]: string } {
    return {
      lastAllocatedTime: 'lastAllocatedTime',
      lastAllocation: 'lastAllocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastAllocatedTime: 'string',
      lastAllocation: { 'type': 'array', 'itemType': ResidentResourceAllocation },
    };
  }

  validate() {
    if(Array.isArray(this.lastAllocation)) {
      $dara.Model.validateArray(this.lastAllocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

