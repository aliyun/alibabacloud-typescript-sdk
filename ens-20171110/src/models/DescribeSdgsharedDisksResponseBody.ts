// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGSharedDisksResponseBodySharedDisks extends $dara.Model {
  /**
   * @remarks
   * The time when the shared disk was created.
   * 
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * shared disk id
   * 
   * @example
   * d-57kvvpuj1rk2ghumlgs6
   */
  diskId?: string;
  /**
   * @remarks
   * Shared disk type
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The namespace of the service.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * cn-hangzhou-1
   */
  regionId?: string;
  /**
   * @remarks
   * SdgId of the shared disk
   * 
   * @example
   * sdg-fqehhfdjv
   */
  sdgId?: string;
  /**
   * @remarks
   * Number of shared mounts
   * 
   * @example
   * 10
   */
  sharedNum?: number;
  /**
   * @remarks
   * Shared disk status
   * 
   * @example
   * avaliable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      diskId: 'DiskId',
      diskType: 'DiskType',
      namespace: 'Namespace',
      regionId: 'RegionId',
      sdgId: 'SdgId',
      sharedNum: 'SharedNum',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      diskId: 'string',
      diskType: 'string',
      namespace: 'string',
      regionId: 'string',
      sdgId: 'string',
      sharedNum: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGSharedDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number when paging
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
   * xxxsxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Shared disk list
   */
  sharedDisks?: DescribeSDGSharedDisksResponseBodySharedDisks[];
  /**
   * @remarks
   * The total number of entries returned.
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
      sharedDisks: { 'type': 'array', 'itemType': DescribeSDGSharedDisksResponseBodySharedDisks },
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

