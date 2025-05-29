// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval } from "./DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval";


export class DescribeVsDomainRecordDataResponseBody extends $dara.Model {
  recordDataPerInterval?: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordDataPerInterval: 'RecordDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDataPerInterval: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordDataPerInterval && typeof (this.recordDataPerInterval as any).validate === 'function') {
      (this.recordDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

