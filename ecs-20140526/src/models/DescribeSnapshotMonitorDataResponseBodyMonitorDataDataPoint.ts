// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotMonitorDataResponseBodyMonitorDataDataPoint extends $dara.Model {
  /**
   * @remarks
   * The total size of snapshots. Unit: bytes.
   * 
   * @example
   * 243036848128
   */
  size?: number;
  /**
   * @remarks
   * The timestamp that corresponds to a snapshot size.
   * 
   * @example
   * 2019-05-10T04:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
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

