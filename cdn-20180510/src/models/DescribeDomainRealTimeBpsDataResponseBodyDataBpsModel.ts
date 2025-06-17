// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 16710625.733333332
   */
  bps?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-30T05:41:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
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

