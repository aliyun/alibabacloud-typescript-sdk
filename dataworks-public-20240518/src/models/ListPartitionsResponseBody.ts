// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Partition } from "./Partition";


export class ListPartitionsResponseBodyPagingInfo extends $dara.Model {
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
  partitionList?: Partition[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      partitionList: 'PartitionList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      partitionList: { 'type': 'array', 'itemType': Partition },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.partitionList)) {
      $dara.Model.validateArray(this.partitionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsResponseBody extends $dara.Model {
  pagingInfo?: ListPartitionsResponseBodyPagingInfo;
  /**
   * @example
   * D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListPartitionsResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

