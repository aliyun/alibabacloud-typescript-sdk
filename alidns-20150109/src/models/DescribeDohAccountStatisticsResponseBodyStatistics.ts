// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohAccountStatisticsResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1544976000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 3141592653
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of IPv4-based HTTP requests.
   * 
   * @example
   * 3141592653
   */
  v4HttpCount?: number;
  /**
   * @remarks
   * The number of IPv4-based HTTPS requests.
   * 
   * @example
   * 3141592653
   */
  v4HttpsCount?: number;
  /**
   * @remarks
   * The number of IPv6-based HTTP requests.
   * 
   * @example
   * 3141592653
   */
  v6HttpCount?: number;
  /**
   * @remarks
   * The number of IPv6-based HTTPS requests.
   * 
   * @example
   * 3141592653
   */
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

