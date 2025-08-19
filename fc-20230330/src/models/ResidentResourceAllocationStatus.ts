// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentResourceAllocation } from "./ResidentResourceAllocation";


export class ResidentResourceAllocationStatus extends $dara.Model {
  lastAllocatedTime?: string;
  lastAllocation?: ResidentResourceAllocation;
  static names(): { [key: string]: string } {
    return {
      lastAllocatedTime: 'lastAllocatedTime',
      lastAllocation: 'lastAllocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastAllocatedTime: 'string',
      lastAllocation: ResidentResourceAllocation,
    };
  }

  validate() {
    if(this.lastAllocation && typeof (this.lastAllocation as any).validate === 'function') {
      (this.lastAllocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

