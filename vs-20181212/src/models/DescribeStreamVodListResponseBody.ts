// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStreamVodListResponseBodyRecords } from "./DescribeStreamVodListResponseBodyRecords";


export class DescribeStreamVodListResponseBody extends $dara.Model {
  records?: DescribeStreamVodListResponseBodyRecords[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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
      records: { 'type': 'array', 'itemType': DescribeStreamVodListResponseBodyRecords },
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

