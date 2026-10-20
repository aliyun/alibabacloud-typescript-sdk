// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySnapshotResponseBodyAllocationId extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge zone where the snapshot resides.
   * 
   * @example
   * cn-hangzhou-27
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of instance IDs.
   */
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySnapshotResponseBodyUnAllocationId extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge zone where the snapshot resides.
   * 
   * @example
   * cn-chengdu-26
   */
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of successfully created snapshots.
   */
  allocationId?: CopySnapshotResponseBodyAllocationId[];
  /**
   * @remarks
   * The status code indicating success. Valid values:
   * 
   * - **PartSuccess**: Partially successful.
   * - **AllSuccess**: All successful.
   * 
   * @example
   * PartSuccess
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
   * The list of edge zones where snapshot creation failed.
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

