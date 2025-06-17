// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 11288111.1
   */
  bps?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The startstamp of the returned usage data.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type of requests. Valid values:
   * 
   * *   **StaticHttps**: static HTTPS requests
   * *   **DynamicHttps**: dynamic HTTPS requests
   * *   **DynamicHttp**: dynamic HTTP requests
   * *   **StaticQuic**: static QUIC requests
   * *   **DynamicQuic**: dynamic QUIC requests
   * 
   * @example
   * DynamicHttp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bps: 'Bps',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bps: 'number',
      domain: 'string',
      timeStamp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

