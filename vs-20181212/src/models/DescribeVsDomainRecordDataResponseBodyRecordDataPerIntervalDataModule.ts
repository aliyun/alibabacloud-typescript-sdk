// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 100
   */
  recordValue?: string;
  /**
   * @example
   * 1
   */
  streamCountValue?: string;
  /**
   * @example
   * 2021-11-19T15:59:59Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      recordValue: 'RecordValue',
      streamCountValue: 'StreamCountValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordValue: 'string',
      streamCountValue: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

