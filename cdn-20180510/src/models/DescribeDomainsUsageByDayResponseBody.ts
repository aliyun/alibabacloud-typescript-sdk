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

export class DescribeDomainsUsageByDayResponseBodyUsageByDays extends $dara.Model {
  usageByDay?: DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay[];
  static names(): { [key: string]: string } {
    return {
      usageByDay: 'UsageByDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageByDay: { 'type': 'array', 'itemType': DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay },
    };
  }

  validate() {
    if(Array.isArray(this.usageByDay)) {
      $dara.Model.validateArray(this.usageByDay);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDomainsUsageByDayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 86400
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-12-23T09:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C88EF8ED-72F0-45EA-9E86-95114E224FC5
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-22T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The monitoring data collected at each time interval.
   */
  usageByDays?: DescribeDomainsUsageByDayResponseBodyUsageByDays;
  /**
   * @remarks
   * The summarized monitoring data.
   */
  usageTotal?: DescribeDomainsUsageByDayResponseBodyUsageTotal;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      usageByDays: 'UsageByDays',
      usageTotal: 'UsageTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      usageByDays: DescribeDomainsUsageByDayResponseBodyUsageByDays,
      usageTotal: DescribeDomainsUsageByDayResponseBodyUsageTotal,
    };
  }

  validate() {
    if(this.usageByDays && typeof (this.usageByDays as any).validate === 'function') {
      (this.usageByDays as any).validate();
    }
    if(this.usageTotal && typeof (this.usageTotal as any).validate === 'function') {
      (this.usageTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

