// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataPushResultResponseBodyPushResults } from "./DescribeDataPushResultResponseBodyPushResults";


export class DescribeDataPushResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The push results of data files.
   */
  pushResults?: DescribeDataPushResultResponseBodyPushResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushResults: 'PushResults',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushResults: DescribeDataPushResultResponseBodyPushResults,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.pushResults && typeof (this.pushResults as any).validate === 'function') {
      (this.pushResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

