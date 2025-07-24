// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc extends $dara.Model {
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
   * 42.3
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio extends $dara.Model {
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
   * 95.3
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest extends $dara.Model {
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
   * 1000
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest extends $dara.Model {
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
   * 1000
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio extends $dara.Model {
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount extends $dara.Model {
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
   * 15
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest extends $dara.Model {
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
   * 1000
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest extends $dara.Model {
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
   * 1000
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest extends $dara.Model {
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
   * 1000
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

export class GetDoctorHBaseRegionServerResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The average garbage collection (GC) duration.
   */
  avgGc?: GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc;
  /**
   * @remarks
   * The cache hit ratio.
   */
  cacheRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio;
  /**
   * @remarks
   * The number of daily read requests.
   */
  dailyReadRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The day-to-day increment rate of the number of daily read requests.
   */
  dailyReadRequestDayGrowthRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of daily write requests.
   */
  dailyWriteRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The day-to-day increment rate of the number of daily write requests.
   */
  dailyWriteRequestDayGrowthRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of regions.
   */
  regionCount?: GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The cumulative number of read requests.
   */
  totalReadRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * The cumulative number of total requests.
   */
  totalRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest;
  /**
   * @remarks
   * The cumulative number of write requests.
   */
  totalWriteRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest;
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
      avgGc: GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc,
      cacheRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio,
      dailyReadRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      regionCount: GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount,
      totalReadRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest,
      totalRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest,
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

export class GetDoctorHBaseRegionServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHBaseRegionServerResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHBaseRegionServerResponseBodyDataMetrics,
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

export class GetDoctorHBaseRegionServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetDoctorHBaseRegionServerResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHBaseRegionServerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

