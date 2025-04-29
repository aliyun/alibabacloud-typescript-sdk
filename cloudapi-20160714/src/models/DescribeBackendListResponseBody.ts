// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendListResponseBodyBackendInfoList } from "./DescribeBackendListResponseBodyBackendInfoList";


export class DescribeBackendListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend services.
   */
  backendInfoList?: DescribeBackendListResponseBodyBackendInfoList[];
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
   * 090A0DF9-9144-5236-8CBA-E18DE317722D
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
      backendInfoList: 'BackendInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendInfoList: { 'type': 'array', 'itemType': DescribeBackendListResponseBodyBackendInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backendInfoList)) {
      $dara.Model.validateArray(this.backendInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

