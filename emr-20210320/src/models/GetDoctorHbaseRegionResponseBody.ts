// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Number of read requests per day
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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

export class GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Number of write requests per day
   */
  description?: string;
  /**
   * @remarks
   * Name of the metric.
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

export class GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount extends $dara.Model {
  /**
   * @remarks
   * Description of the metric.
   * 
   * @example
   * Number of store file
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * storeFileCount
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
   * 100
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

export class GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Total read request
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * totalReadRequest
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
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

export class GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest extends $dara.Model {
  /**
   * @remarks
   * Metric description.
   * 
   * @example
   * Total Write Request
   */
  description?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * totalWriteRequest
   */
  name?: string;
  /**
   * @remarks
   * Metric unit.
   * 
   * @example
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * Metric value.
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

export class GetDoctorHBaseRegionResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * Number of read requests in a single day.
   */
  dailyReadRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * Number of write requests in a single day.
   */
  dailyWriteRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * Store file count.
   */
  storeFileCount?: GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * Total read request count
   */
  totalReadRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * Total write request count
   */
  totalWriteRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      dailyReadRequest: 'DailyReadRequest',
      dailyWriteRequest: 'DailyWriteRequest',
      storeFileCount: 'StoreFileCount',
      totalReadRequest: 'TotalReadRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyReadRequest: GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest,
      dailyWriteRequest: GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest,
      storeFileCount: GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount,
      totalReadRequest: GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest,
      totalWriteRequest: GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  validate() {
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.storeFileCount && typeof (this.storeFileCount as any).validate === 'function') {
      (this.storeFileCount as any).validate();
    }
    if(this.totalReadRequest && typeof (this.totalReadRequest as any).validate === 'function') {
      (this.totalReadRequest as any).validate();
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

export class GetDoctorHBaseRegionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Metrics information.
   */
  metrics?: GetDoctorHBaseRegionResponseBodyDataMetrics;
  /**
   * @remarks
   * Host of the RegionServer.
   * 
   * @example
   * emr-worker-2.cluster-20****
   */
  regionServerHost?: string;
  /**
   * @remarks
   * Table name.
   * 
   * @example
   * tb_item
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      regionServerHost: 'RegionServerHost',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: GetDoctorHBaseRegionResponseBodyDataMetrics,
      regionServerHost: 'string',
      tableName: 'string',
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

export class GetDoctorHBaseRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: GetDoctorHBaseRegionResponseBodyData;
  /**
   * @remarks
   * Request ID.
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
      data: GetDoctorHBaseRegionResponseBodyData,
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

