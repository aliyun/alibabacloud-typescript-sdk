// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataByLayerResponseBodyBpsDataIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2020-05-06T07:10:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total amount of network traffic. Unit: bytes.
   * 
   * @example
   * 2838
   */
  trafficValue?: string;
  /**
   * @remarks
   * The peak bandwidth value. Unit: bit/s.
   * 
   * @example
   * 75.68
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'string',
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

