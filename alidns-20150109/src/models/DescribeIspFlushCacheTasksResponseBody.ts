// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks } from "./DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks";


export class DescribeIspFlushCacheTasksResponseBody extends $dara.Model {
  ispFlushCacheTasks?: DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      ispFlushCacheTasks: 'IspFlushCacheTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispFlushCacheTasks: { 'type': 'array', 'itemType': DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ispFlushCacheTasks)) {
      $dara.Model.validateArray(this.ispFlushCacheTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

