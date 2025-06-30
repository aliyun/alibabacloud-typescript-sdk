// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParentInstanceResponseBodyItems } from "./DescribeParentInstanceResponseBodyItems";


export class DescribeParentInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * When performing a paginated query, set the current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The assets.
   */
  items?: DescribeParentInstanceResponseBodyItems[];
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of data asset instances displayed per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID of the result.
   * 
   * @example
   * ACEF9334-BB50-525D-8CF3-6CF504E4D1B3
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of data items in the result.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeParentInstanceResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

