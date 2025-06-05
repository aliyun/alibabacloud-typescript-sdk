// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceOpsRecordsResponseBodyRecords } from "./DescribeInstanceOpsRecordsResponseBodyRecords";


export class DescribeInstanceOpsRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the queried O\\&M tasks.
   */
  records?: DescribeInstanceOpsRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89945DD3-9072-47D0-A318-353284CFC7B3
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
      records: { 'type': 'array', 'itemType': DescribeInstanceOpsRecordsResponseBodyRecords },
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

