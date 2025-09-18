// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemResponseBodyAllocationIds extends $dara.Model {
  ensRegionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the file system that was created.
   */
  allocationId?: string[];
  allocationIds?: CreateFileSystemResponseBodyAllocationIds[];
  /**
   * @remarks
   * The status code for successful operations. Valid values:
   * 
   * *   PartSuccess: The operation is partially successful.
   * *   AllSuccess: The operation is successful.
   * 
   * @example
   * PartSuccess
   */
  bizStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the file system that failed to be created.
   */
  unAllocationId?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationIds: 'AllocationIds',
      bizStatusCode: 'BizStatusCode',
      requestId: 'RequestId',
      unAllocationId: 'UnAllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: { 'type': 'array', 'itemType': 'string' },
      allocationIds: { 'type': 'array', 'itemType': CreateFileSystemResponseBodyAllocationIds },
      bizStatusCode: 'string',
      requestId: 'string',
      unAllocationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.allocationId)) {
      $dara.Model.validateArray(this.allocationId);
    }
    if(Array.isArray(this.allocationIds)) {
      $dara.Model.validateArray(this.allocationIds);
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

