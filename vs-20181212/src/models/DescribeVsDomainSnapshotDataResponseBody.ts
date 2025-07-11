// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  snapshotValue?: string;
  /**
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotValue: 'SnapshotValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotValue: 'string',
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

export class DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule },
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

export class DescribeVsDomainSnapshotDataResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  snapshotDataPerInterval?: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotDataPerInterval: 'SnapshotDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotDataPerInterval: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval,
    };
  }

  validate() {
    if(this.snapshotDataPerInterval && typeof (this.snapshotDataPerInterval as any).validate === 'function') {
      (this.snapshotDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

