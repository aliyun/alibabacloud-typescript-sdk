// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGSharedDisksResponseBodySharedDisks extends $dara.Model {
  /**
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @example
   * d-57kvvpuj1rk2ghumlgs6
   */
  diskId?: string;
  /**
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * cn-hangzhou-1
   */
  regionId?: string;
  /**
   * @example
   * sdg-fqehhfdjv
   */
  sdgId?: string;
  /**
   * @example
   * 10
   */
  sharedNum?: number;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxxsxxxxx
   */
  requestId?: string;
  sharedDisks?: DescribeSDGSharedDisksResponseBodySharedDisks[];
  /**
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

