// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances } from "./DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances";


export class DescribeIspFlushCacheInstancesResponseBody extends $dara.Model {
  ispFlushCacheInstances?: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      ispFlushCacheInstances: 'IspFlushCacheInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispFlushCacheInstances: { 'type': 'array', 'itemType': DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ispFlushCacheInstances)) {
      $dara.Model.validateArray(this.ispFlushCacheInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

