// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetVersion } from "./DatasetVersion";


export class ListDatasetVersionsResponseBodyPagingInfo extends $dara.Model {
  datasetVersions?: DatasetVersion[];
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetVersions: 'DatasetVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersions: { 'type': 'array', 'itemType': DatasetVersion },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetVersions)) {
      $dara.Model.validateArray(this.datasetVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetVersionsResponseBody extends $dara.Model {
  pagingInfo?: ListDatasetVersionsResponseBodyPagingInfo;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * E25887B7-579C-54A5-9C4F-83A0DE367XXX
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
      pagingInfo: ListDatasetVersionsResponseBodyPagingInfo,
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

