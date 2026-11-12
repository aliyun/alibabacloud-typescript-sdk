// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSharedDiskRecordsResponseBodySharedDisks extends $dara.Model {
  /**
   * @remarks
   * The creation time of the shared disk.
   * 
   * @example
   * 2026-06-01 10:00:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The shared disk ID.
   * 
   * @example
   * d-57kvvpuj1rk2ghumlgs6
   */
  diskId?: string;
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 10
   */
  diskSize?: number;
  /**
   * @remarks
   * The ID of the instance from which the shared disk was last detached.
   * 
   * @example
   * standard
   */
  lastDetachInstanceId?: string;
  /**
   * @remarks
   * The time when the shared disk was last detached.
   * 
   * @example
   * 2026-06-14 18:00:00
   */
  lastDetachTime?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The SDG sharing ratio parameter, which supports cloud disks with different maximum sharing ratios.
   * 
   * @example
   * 100
   */
  performanceLevel?: number;
  /**
   * @remarks
   * The reclamation time of the shared disk.
   * 
   * @example
   * 2026-06-15 14:30:00
   */
  recycleTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou-1
   */
  regionId?: string;
  /**
   * @remarks
   * The SDG ID of the shared disk.
   * 
   * @example
   * sdg-fqehhfdjv
   */
  sdgId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      lastDetachInstanceId: 'LastDetachInstanceId',
      lastDetachTime: 'LastDetachTime',
      namespace: 'Namespace',
      performanceLevel: 'PerformanceLevel',
      recycleTime: 'RecycleTime',
      regionId: 'RegionId',
      sdgId: 'SdgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      diskId: 'string',
      diskSize: 'number',
      lastDetachInstanceId: 'string',
      lastDetachTime: 'string',
      namespace: 'string',
      performanceLevel: 'number',
      recycleTime: 'string',
      regionId: 'string',
      sdgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSharedDiskRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68B85217-03B8-5141-9216-EA4D7C496B9A
   */
  requestId?: string;
  /**
   * @remarks
   * The shared disk billing records.
   */
  sharedDisks?: DescribeSharedDiskRecordsResponseBodySharedDisks[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sharedDisks: 'SharedDisks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sharedDisks: { 'type': 'array', 'itemType': DescribeSharedDiskRecordsResponseBodySharedDisks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sharedDisks)) {
      $dara.Model.validateArray(this.sharedDisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

