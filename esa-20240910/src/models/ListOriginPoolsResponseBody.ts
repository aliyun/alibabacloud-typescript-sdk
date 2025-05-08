// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOriginPoolsResponseBodyOriginPools } from "./ListOriginPoolsResponseBodyOriginPools";


export class ListOriginPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of origin pools.
   */
  originPools?: ListOriginPoolsResponseBodyOriginPools[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
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
   * Total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      originPools: 'OriginPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originPools: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPools },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.originPools)) {
      $dara.Model.validateArray(this.originPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

