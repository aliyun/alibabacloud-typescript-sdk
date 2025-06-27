// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatisticsResponseBodyStatisticsStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 15292887
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The statistical timestamp. Unit: milliseconds. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1556640000000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

