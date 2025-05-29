// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamVodListResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * 1634873413
   */
  endTime?: number;
  /**
   * @example
   * 1639077653
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

