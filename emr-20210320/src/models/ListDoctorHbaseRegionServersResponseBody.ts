// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The efficiency of garbage collection in the system
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * avgGc
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 37.9
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of the BlockCache memory size
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cacheRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 96.7
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of read requests per day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyReadRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 42571
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The growth rate of daily read request quantity.
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyReadRequestDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of write requests per day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyWriteRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 23124
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The growth rate of daily write request quantity.
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * dailyWriteRequestDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of regions count
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionCount
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 81
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total number of read requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalReadRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 170500567
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total number of requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 89499511
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total number of write requests
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalWriteRequest
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 30109837
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The average garbage collection (GC) duration.
   */
  avgGc?: ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc;
  /**
   * @remarks
   * The cache hit ratio.
   */
  cacheRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio;
  /**
   * @remarks
   * The number of daily read requests.
   */
  dailyReadRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The growth rate of the number of daily read requests.
   */
  dailyReadRequestDayGrowthRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of daily write requests.
   */
  dailyWriteRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The growth rate of the number of daily write requests.
   */
  dailyWriteRequestDayGrowthRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of regions.
   */
  regionCount?: ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The cumulative number of read requests.
   */
  totalReadRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * The cumulative number of all requests.
   */
  totalRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest;
  /**
   * @remarks
   * The cumulative number of write requests.
   */
  totalWriteRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgGc: 'AvgGc',
      cacheRatio: 'CacheRatio',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      regionCount: 'RegionCount',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgGc: ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc,
      cacheRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio,
      dailyReadRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      regionCount: ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount,
      totalReadRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest,
      totalRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  validate() {
    if(this.avgGc && typeof (this.avgGc as any).validate === 'function') {
      (this.avgGc as any).validate();
    }
    if(this.cacheRatio && typeof (this.cacheRatio as any).validate === 'function') {
      (this.cacheRatio as any).validate();
    }
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyReadRequestDayGrowthRatio && typeof (this.dailyReadRequestDayGrowthRatio as any).validate === 'function') {
      (this.dailyReadRequestDayGrowthRatio as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.dailyWriteRequestDayGrowthRatio && typeof (this.dailyWriteRequestDayGrowthRatio as any).validate === 'function') {
      (this.dailyWriteRequestDayGrowthRatio as any).validate();
    }
    if(this.regionCount && typeof (this.regionCount as any).validate === 'function') {
      (this.regionCount as any).validate();
    }
    if(this.totalReadRequest && typeof (this.totalReadRequest as any).validate === 'function') {
      (this.totalReadRequest as any).validate();
    }
    if(this.totalRequest && typeof (this.totalRequest as any).validate === 'function') {
      (this.totalRequest as any).validate();
    }
    if(this.totalWriteRequest && typeof (this.totalWriteRequest as any).validate === 'function') {
      (this.totalWriteRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHBaseRegionServersResponseBodyDataMetrics;
  /**
   * @remarks
   * The RegionServer host.
   * 
   * @example
   * emr-worker-4.cluster-20****
   */
  regionServerHost?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      regionServerHost: 'RegionServerHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: ListDoctorHBaseRegionServersResponseBodyDataMetrics,
      regionServerHost: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorHBaseRegionServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListDoctorHBaseRegionServersResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries that are returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDoctorHBaseRegionServersResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

