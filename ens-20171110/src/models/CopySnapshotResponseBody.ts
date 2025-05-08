// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopySnapshotResponseBodyAllocationId } from "./CopySnapshotResponseBodyAllocationId";
import { CopySnapshotResponseBodyUnAllocationId } from "./CopySnapshotResponseBodyUnAllocationId";


export class CopySnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of created snapshots.
   */
  allocationId?: CopySnapshotResponseBodyAllocationId[];
  /**
   * @remarks
   * The success status code.
   * 
   * *   **PartSuccess**: partially succeeded.
   * *   **AllSuccess**: all succeeded.
   * 
   * @example
   * AllSuccess
   */
  bizStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA3758E0-8899-17D3-9526-5F62CF33A586
   */
  requestId?: string;
  /**
   * @remarks
   * The list of nodes that are not created.
   */
  unAllocationId?: CopySnapshotResponseBodyUnAllocationId[];
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bizStatusCode: 'BizStatusCode',
      requestId: 'RequestId',
      unAllocationId: 'UnAllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: { 'type': 'array', 'itemType': CopySnapshotResponseBodyAllocationId },
      bizStatusCode: 'string',
      requestId: 'string',
      unAllocationId: { 'type': 'array', 'itemType': CopySnapshotResponseBodyUnAllocationId },
    };
  }

  validate() {
    if(Array.isArray(this.allocationId)) {
      $dara.Model.validateArray(this.allocationId);
    }
    if(Array.isArray(this.unAllocationId)) {
      $dara.Model.validateArray(this.unAllocationId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

