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

export class DescribeDomainStatisticsResponseBodyStatistics extends $dara.Model {
  statistic?: DescribeDomainStatisticsResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeDomainStatisticsResponseBodyStatisticsStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.statistic)) {
      $dara.Model.validateArray(this.statistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AEC7A64-3CB1-4C49-8B35-0B901F1E26BF
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on the Domain Name System (DNS) requests.
   */
  statistics?: DescribeDomainStatisticsResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: DescribeDomainStatisticsResponseBodyStatistics,
    };
  }

  validate() {
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

