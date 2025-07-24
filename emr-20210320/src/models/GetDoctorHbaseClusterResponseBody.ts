// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorHBaseClusterResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The overall score of the HBase cluster.
   * 
   * @example
   * 85
   */
  hbaseScore?: number;
  static names(): { [key: string]: string } {
    return {
      hbaseScore: 'HbaseScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaseScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The average load under normal working conditions
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * avgLoad
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
   * 36.0
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest extends $dara.Model {
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
   * 430
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest extends $dara.Model {
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
   * 128
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Memory heap usage in megabytes (MB)
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * memHeap
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 240
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The average load under normal working conditions
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * normalAvgLoad
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
   * 526.4
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * The ability to evenly distribute Regions on different RegionServer nodes
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionBalance
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount extends $dara.Model {
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
   * 161
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of region servers count
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * regionServerCount
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
   * 6
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of store files
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
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
   * 298
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsTableCount extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Number of tables
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tableCount
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
   * 10
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total data size in megabytes (MB)
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * totalDataSize
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 256
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest extends $dara.Model {
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
   * 430
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest extends $dara.Model {
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
   * 576
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

export class GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest extends $dara.Model {
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
   * 520
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

export class GetDoctorHBaseClusterResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The average load.
   */
  avgLoad?: GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad;
  /**
   * @remarks
   * The number of read requests in a day.
   */
  dailyReadRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The number of write requests in a day.
   */
  dailyWriteRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The memory size.
   */
  memHeap?: GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap;
  /**
   * @remarks
   * The normal average load.
   */
  normalAvgLoad?: GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad;
  /**
   * @remarks
   * The region balance degree.
   */
  regionBalance?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance;
  /**
   * @remarks
   * The number of regions.
   */
  regionCount?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The number of region servers.
   */
  regionServerCount?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount;
  /**
   * @remarks
   * The number of StoreFiles.
   */
  storeFileCount?: GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * The number of tables.
   */
  tableCount?: GetDoctorHBaseClusterResponseBodyDataMetricsTableCount;
  /**
   * @remarks
   * The size of the cluster.
   */
  totalDataSize?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The total number of read requests.
   */
  totalReadRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * The total number of requests in the cluster.
   */
  totalRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest;
  /**
   * @remarks
   * The total number of write requests.
   */
  totalWriteRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgLoad: 'AvgLoad',
      dailyReadRequest: 'DailyReadRequest',
      dailyWriteRequest: 'DailyWriteRequest',
      memHeap: 'MemHeap',
      normalAvgLoad: 'NormalAvgLoad',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionServerCount: 'RegionServerCount',
      storeFileCount: 'StoreFileCount',
      tableCount: 'TableCount',
      totalDataSize: 'TotalDataSize',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLoad: GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad,
      dailyReadRequest: GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest,
      dailyWriteRequest: GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest,
      memHeap: GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap,
      normalAvgLoad: GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad,
      regionBalance: GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance,
      regionCount: GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount,
      regionServerCount: GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount,
      storeFileCount: GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount,
      tableCount: GetDoctorHBaseClusterResponseBodyDataMetricsTableCount,
      totalDataSize: GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize,
      totalReadRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest,
      totalRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  validate() {
    if(this.avgLoad && typeof (this.avgLoad as any).validate === 'function') {
      (this.avgLoad as any).validate();
    }
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.memHeap && typeof (this.memHeap as any).validate === 'function') {
      (this.memHeap as any).validate();
    }
    if(this.normalAvgLoad && typeof (this.normalAvgLoad as any).validate === 'function') {
      (this.normalAvgLoad as any).validate();
    }
    if(this.regionBalance && typeof (this.regionBalance as any).validate === 'function') {
      (this.regionBalance as any).validate();
    }
    if(this.regionCount && typeof (this.regionCount as any).validate === 'function') {
      (this.regionCount as any).validate();
    }
    if(this.regionServerCount && typeof (this.regionServerCount as any).validate === 'function') {
      (this.regionServerCount as any).validate();
    }
    if(this.storeFileCount && typeof (this.storeFileCount as any).validate === 'function') {
      (this.storeFileCount as any).validate();
    }
    if(this.tableCount && typeof (this.tableCount as any).validate === 'function') {
      (this.tableCount as any).validate();
    }
    if(this.totalDataSize && typeof (this.totalDataSize as any).validate === 'function') {
      (this.totalDataSize as any).validate();
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

export class GetDoctorHBaseClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis result.
   */
  analysis?: GetDoctorHBaseClusterResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHBaseClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHBaseClusterResponseBodyDataAnalysis,
      metrics: GetDoctorHBaseClusterResponseBodyDataMetrics,
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorHBaseClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetDoctorHBaseClusterResponseBodyData;
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
      data: GetDoctorHBaseClusterResponseBodyData,
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

