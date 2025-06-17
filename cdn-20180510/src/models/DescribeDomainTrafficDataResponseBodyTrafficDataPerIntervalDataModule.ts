// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The amount of network traffic in the Chinese mainland.
   * 
   * @example
   * 0
   */
  domesticValue?: string;
  /**
   * @remarks
   * The amount of HTTPS traffic on points of presence (POPs) in the Chinese mainland.
   * 
   * @example
   * 0
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The amount of HTTPS traffic on POPs outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The total amount of HTTPS traffic on POPs.
   * 
   * @example
   * 423304182
   */
  httpsValue?: string;
  /**
   * @remarks
   * The amount of network traffic outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total volume of traffic.
   * 
   * @example
   * 423304182
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      httpsDomesticValue: 'HttpsDomesticValue',
      httpsOverseasValue: 'HttpsOverseasValue',
      httpsValue: 'HttpsValue',
      overseasValue: 'OverseasValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      httpsDomesticValue: 'string',
      httpsOverseasValue: 'string',
      httpsValue: 'string',
      overseasValue: 'string',
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

