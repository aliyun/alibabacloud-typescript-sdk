// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDownloadRecordsResponseBodyRecords } from "./DescribeDownloadRecordsResponseBodyRecords";


export class DescribeDownloadRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to download the file.
   */
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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

