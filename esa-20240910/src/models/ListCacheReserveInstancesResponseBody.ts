// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCacheReserveInstancesResponseBodyInstanceInfo } from "./ListCacheReserveInstancesResponseBodyInstanceInfo";


export class ListCacheReserveInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cache reserve instances.
   */
  instanceInfo?: ListCacheReserveInstancesResponseBodyInstanceInfo[];
  /**
   * @remarks
   * Page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default **500**, range: **1~500**.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 65C66B7B-671A-8297-9187-2R5477247B76
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * Total pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListCacheReserveInstancesResponseBodyInstanceInfo },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceInfo)) {
      $dara.Model.validateArray(this.instanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

