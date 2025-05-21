// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDownloadRecordsResponseBodyRecords } from "./DescribeDownloadRecordsResponseBodyRecords";


export class DescribeDownloadRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried download tasks.
   */
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 987F51BE-C4CB-332A-B159-63CE87******
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
      records: { 'type': 'array', 'itemType': DescribeDownloadRecordsResponseBodyRecords },
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

