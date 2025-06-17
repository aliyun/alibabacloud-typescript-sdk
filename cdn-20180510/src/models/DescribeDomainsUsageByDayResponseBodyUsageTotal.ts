// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsUsageByDayResponseBodyUsageTotal extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio. The byte hit ratio is measured in percentage.
   * 
   * @example
   * 97.03110726801242
   */
  bytesHitRate?: string;
  /**
   * @remarks
   * The peak bandwidth value. Unit: bit/s.
   * 
   * @example
   * 1.0747912780000001E8
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
   * The cache hit ratio that is calculated based on requests. The cache hit ratio is measured in percentage.
   * 
   * @example
   * 69.92610837438424
   */
  requestHitRate?: string;
  /**
   * @remarks
   * The total amount of requests.
   * 
   * @example
   * 1319500
   */
  totalAccess?: string;
  /**
   * @remarks
   * The total amount of network traffic. Unit: bytes.
   * 
   * @example
   * 1117711832100
   */
  totalTraffic?: string;
  static names(): { [key: string]: string } {
    return {
      bytesHitRate: 'BytesHitRate',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
      maxSrcBpsTime: 'MaxSrcBpsTime',
      requestHitRate: 'RequestHitRate',
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
      requestHitRate: 'string',
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

