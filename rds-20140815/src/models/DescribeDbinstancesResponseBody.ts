// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesResponseBodyItems } from "./DescribeDbinstancesResponseBodyItems";


export class DescribeDBInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  items?: DescribeDBInstancesResponseBodyItems;
  /**
   * @remarks
   * The token that is used to display the next page. If the returned entries are displayed on multiple pages, the next page can be displayed when you call this operation again with **NextToken** specified.
   * 
   * @example
   * o7PORW5o2TJg**********
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * > If you specify **MaxResults** or **NextToken**, only the value **1** is returned. You can ignore the value 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > If you specify **MaxResults** or **NextToken**, only the number of entries on the current page is returned. You can ignore the number.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesResponseBodyItems,
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
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

