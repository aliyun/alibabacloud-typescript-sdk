// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByBackendResponseBodyApiInfoList } from "./DescribeApisByBackendResponseBodyApiInfoList";


export class DescribeApisByBackendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the returned API list.
   */
  apiInfoList?: DescribeApisByBackendResponseBodyApiInfoList;
  /**
   * @remarks
   * The number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * CEB6EC62-B6C7-5082-A45A-45A204724AC2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfoList: 'ApiInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfoList: DescribeApisByBackendResponseBodyApiInfoList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiInfoList && typeof (this.apiInfoList as any).validate === 'function') {
      (this.apiInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

