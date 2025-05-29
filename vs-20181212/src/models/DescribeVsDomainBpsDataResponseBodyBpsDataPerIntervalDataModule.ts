// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  bpsValue?: string;
  /**
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bpsValue: 'BpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsValue: 'string',
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

