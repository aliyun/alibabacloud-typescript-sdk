// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2019-12-10T20:01:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The bandwidth during back-to-origin routing. Unit: bit/s.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

