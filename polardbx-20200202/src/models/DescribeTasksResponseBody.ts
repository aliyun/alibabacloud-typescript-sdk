// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTasksResponseBodyItems } from "./DescribeTasksResponseBodyItems";


export class DescribeTasksResponseBody extends $dara.Model {
  items?: DescribeTasksResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @example
   * D6045D78-C119-5A17-9DEA-0F810394E008
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

