// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The bandwidth values of origin HTTPS requests.
   * 
   * @example
   * 10
   */
  httpsValue?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2019-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The traffic value at each time interval.
   * 
   * @example
   * 500
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

