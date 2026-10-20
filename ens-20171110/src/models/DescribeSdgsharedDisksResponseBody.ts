// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGSharedDisksResponseBodySharedDisks extends $dara.Model {
  /**
   * @remarks
   * The time when the shared disk was created. The time follows the ISO 8601 standard and includes a time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the shared disk.
   * 
   * @example
   * d-57kvvpuj1rk2ghumlgs6
   */
  diskId?: string;
  /**
   * @remarks
   * The type of the shared disk.
   * 
   * @example
   * standard
   */
  diskType?: string;
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou-1
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-fqehhfdjv
   */
  sdgId?: string;
  /**
   * @remarks
   * The number of shared mounts.
   * 
   * @example
   * 10
   */
  sharedNum?: number;
  /**
   * @remarks
   * The status of the shared disk.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxsxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The list of shared disks.
   */
  sharedDisks?: DescribeSDGSharedDisksResponseBodySharedDisks[];
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

