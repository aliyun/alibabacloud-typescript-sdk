// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio. The byte hit ratio is measured in percentage.
   * 
   * @example
   * 97.46250599529726
   */
  bytesHitRate?: string;
  /**
   * @remarks
   * The peak bandwidth value. Unit: bit/s.
   * 
   * @example
   * 306747.76
   */
  maxBps?: string;
  /**
   * @remarks
   * The time when the bandwidth reached the peak value.
   * 
   * @example
   * 2019-12-23 10:55:00
   */
  maxBpsTime?: string;
  /**
   * @remarks
   * The peak bandwidth value during back-to-origin routing. Unit: bit/s.
   * 
   * @example
   * 72584.072
   */
  maxSrcBps?: string;
  /**
   * @remarks
   * The time when the bandwidth during back-to-origin routing reached the peak value.
   * 
   * @example
   * 2019-12-23 11:45:00
   */
  maxSrcBpsTime?: string;
  /**
   * @remarks
   * The number of queries per second (QPS).
   * 
   * @example
   * 7.466354166666667
   */
  qps?: string;
  /**
   * @remarks
   * The cache hit ratio that is calculated based on requests. The cache hit ratio is measured in percentage.
   * 
   * @example
   * 70.24770071912111
   */
  requestHitRate?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2019-12-22
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total amount of requests.
   * 
   * @example
   * 645093
   */
  totalAccess?: string;
  /**
   * @remarks
   * The total amount of network traffic. Unit: bytes.
   * 
   * @example
   * 564300099309
   */
  totalTraffic?: string;
  static names(): { [key: string]: string } {
    return {
      bytesHitRate: 'BytesHitRate',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
      maxSrcBpsTime: 'MaxSrcBpsTime',
      qps: 'Qps',
      requestHitRate: 'RequestHitRate',
      timeStamp: 'TimeStamp',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesHitRate: 'string',
      maxBps: 'string',
      maxBpsTime: 'string',
      maxSrcBps: 'string',
      maxSrcBpsTime: 'string',
      qps: 'string',
      requestHitRate: 'string',
      timeStamp: 'string',
      totalAccess: 'string',
      totalTraffic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

