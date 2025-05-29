// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDownloadSQLLogsResponseBodyRecords } from "./DescribeDownloadSqllogsResponseBodyRecords";


export class DescribeDownloadSQLLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of download records.
   */
  records?: DescribeDownloadSQLLogsResponseBodyRecords[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * FDE9942A-D919-527B-B559-5D0F6F20CCEC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDownloadSQLLogsResponseBodyRecords },
      requestId: 'string',
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

