// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value in the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 11286111
   */
  domesticValue?: string;
  /**
   * @remarks
   * The bandwidth data for HTTPS requests in the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 11286111
   */
  httpsDomesticValue?: string;
  /**
   * @remarks
   * The bandwidth data for HTTPS requests in regions outside the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 2000
   */
  httpsOverseasValue?: string;
  /**
   * @remarks
   * The bandwidth value for HTTPS requests. Unit: bit/s.
   * 
   * @example
   * 11288111
   */
  httpsValue?: string;
  /**
   * @remarks
   * The bandwidth data in regions outside the Chinese mainland. When the bandwidth data is queried by ISP, this parameter is empty.
   * 
   * @example
   * 2000
   */
  overseasValue?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 11288111
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

