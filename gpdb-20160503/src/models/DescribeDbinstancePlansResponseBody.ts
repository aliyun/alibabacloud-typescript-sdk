// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePlansResponseBodyItems } from "./DescribeDbinstancePlansResponseBodyItems";


export class DescribeDBInstancePlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is returned only if the request fails.
   * 
   * @example
   * ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The queried plans.
   */
  items?: DescribeDBInstancePlansResponseBodyItems;
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
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34b32a0a-08ef-4a87-b6be-cdd988888888
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * If the request was successful, **success** is returned. If the request failed, this parameter is not returned.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      status: 'Status',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      items: DescribeDBInstancePlansResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      status: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

