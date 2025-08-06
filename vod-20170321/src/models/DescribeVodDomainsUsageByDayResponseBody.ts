// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainsUsageByDayResponseBodyUsageByDaysUsageByDay extends $dara.Model {
  bytesHitRate?: string;
  maxBps?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  maxSrcBpsTime?: string;
  qps?: string;
  requestHitRate?: string;
  timeStamp?: string;
  totalAccess?: string;
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

export class DescribeVodDomainsUsageByDayResponseBodyUsageByDays extends $dara.Model {
  usageByDay?: DescribeVodDomainsUsageByDayResponseBodyUsageByDaysUsageByDay[];
  static names(): { [key: string]: string } {
    return {
      usageByDay: 'UsageByDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageByDay: { 'type': 'array', 'itemType': DescribeVodDomainsUsageByDayResponseBodyUsageByDaysUsageByDay },
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

export class DescribeVodDomainsUsageByDayResponseBodyUsageTotal extends $dara.Model {
  bytesHitRate?: string;
  maxBps?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  maxSrcBpsTime?: string;
  requestHitRate?: string;
  totalAccess?: string;
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

export class DescribeVodDomainsUsageByDayResponseBody extends $dara.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  usageByDays?: DescribeVodDomainsUsageByDayResponseBodyUsageByDays;
  usageTotal?: DescribeVodDomainsUsageByDayResponseBodyUsageTotal;
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
      usageByDays: DescribeVodDomainsUsageByDayResponseBodyUsageByDays,
      usageTotal: DescribeVodDomainsUsageByDayResponseBodyUsageTotal,
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

