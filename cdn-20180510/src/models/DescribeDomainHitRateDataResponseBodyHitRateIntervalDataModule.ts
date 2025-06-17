// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio of HTTPS requests.
   * 
   * @example
   * 50.0
   */
  httpsValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-12-30T08:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The byte hit ratio.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      httpsValue: 'HttpsValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsValue: 'string',
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

