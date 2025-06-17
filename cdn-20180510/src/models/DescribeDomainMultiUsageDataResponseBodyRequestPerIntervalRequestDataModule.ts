// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 11288111
   */
  request?: number;
  /**
   * @remarks
   * The timestamp of the returned number of requests.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The type.
   * 
   * >  The value is Simple for Alibaba Cloud CDN.
   * 
   * @example
   * Simple
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      request: 'Request',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      request: 'number',
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

