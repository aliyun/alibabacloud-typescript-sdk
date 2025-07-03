// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyItems } from "./DescribeSlowLogRecordsResponseBodyItems";


export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * pxc-********
   */
  DBInstanceId?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalCount: 'string',
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

