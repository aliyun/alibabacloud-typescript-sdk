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

export class DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

