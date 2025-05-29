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

