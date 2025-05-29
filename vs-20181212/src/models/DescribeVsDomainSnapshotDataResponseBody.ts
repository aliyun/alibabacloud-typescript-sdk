// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval } from "./DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval";


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

