// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDistResultResponseBodyDistResults } from "./DescribeDataDistResultResponseBodyDistResults";


export class DescribeDataDistResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The distribution status of data files on edge instances.
   */
  distResults?: DescribeDataDistResultResponseBodyDistResults;
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
   * The ID of the request.
   * 
   * @example
   * 50373E71-7710-4620-8AAB-133CCE49451C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      distResults: 'DistResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResults: DescribeDataDistResultResponseBodyDistResults,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.distResults && typeof (this.distResults as any).validate === 'function') {
      (this.distResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

