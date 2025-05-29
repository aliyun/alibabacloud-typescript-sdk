// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecordsResponseBodyRecords } from "./DescribeRecordsResponseBodyRecords";


export class DescribeRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 2018-12-10T11:00:00Z
   */
  nextStartTime?: string;
  /**
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  records?: DescribeRecordsResponseBodyRecords[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextStartTime: 'NextStartTime',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStartTime: 'string',
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': DescribeRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

