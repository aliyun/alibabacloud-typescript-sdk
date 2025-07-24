// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorComputeSummaryResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The total number of healthy jobs.
   * 
   * @example
   * 3
   */
  healthyJobCount?: number;
  /**
   * @remarks
   * The total number of jobs that require attention.
   * 
   * @example
   * 23
   */
  needAttentionJobCount?: number;
  /**
   * @remarks
   * The score for jobs.
   * 
   * @example
   * 56
   */
  score?: number;
  /**
   * @remarks
   * The day-to-day growth rate of the score for jobs.
   * 
   * @example
   * 0.03
   */
  scoreDayGrowthRatio?: number;
  /**
   * @remarks
   * The total number of sub-healthy jobs.
   * 
   * @example
   * 13
   */
  subHealthyJobCount?: number;
  /**
   * @remarks
   * The total number of unhealthy jobs.
   * 
   * @example
   * 123
   */
  unhealthyJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthyJobCount: 'HealthyJobCount',
      needAttentionJobCount: 'NeedAttentionJobCount',
      score: 'Score',
      scoreDayGrowthRatio: 'ScoreDayGrowthRatio',
      subHealthyJobCount: 'SubHealthyJobCount',
      unhealthyJobCount: 'UnhealthyJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyJobCount: 'number',
      needAttentionJobCount: 'number',
      score: 'number',
      scoreDayGrowthRatio: 'number',
      subHealthyJobCount: 'number',
      unhealthyJobCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total memory usage over time in seconds
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * memSeconds
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * MB * Sec
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 12312312
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Growth ratio of memory usage in seconds per day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * memSecondsDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.36
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of used memory to total available memory
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * memUtilization
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.82
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsReadSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total cumulative size of data read in megabytes (MB)
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * readSize
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
   * 504888659968
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total vcore usage over time in seconds
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * vcoreSeconds
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * VCores * Sec
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1231412
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Growth ratio of virtual core usage in seconds per day
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * vcoreSecondsDayGrowthRatio
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.22
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Ratio of used vcore to total available cores
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * vcoreUtilization
   */
  name?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * @example
   * “”
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 32.1
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

export class ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize extends $dara.Model {
  /**
   * @remarks
   * The description of the metric.
   * 
   * @example
   * Total cumulative size of data written in megabytes (MB)
   */
  description?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * writeSize
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
   * 6294093393920
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

export class ListDoctorComputeSummaryResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The total memory consumption over time in seconds.
   */
  memSeconds?: ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The day-to-day growth rate of the total memory consumption over time in seconds.
   */
  memSecondsDayGrowthRatio?: ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio;
  /**
   * @remarks
   * The average memory usage.
   */
  memUtilization?: ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The total amount of data read from the file system.
   */
  readSize?: ListDoctorComputeSummaryResponseBodyDataMetricsReadSize;
  /**
   * @remarks
   * The total CPU consumption over time in seconds.
   */
  vcoreSeconds?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The day-to-day growth rate of the total CPU consumption over time in seconds.
   */
  vcoreSecondsDayGrowthRatio?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio;
  /**
   * @remarks
   * The average CPU utilization. The meaning is the same as the %CPU parameter in the output of the top command in Linux.
   */
  vcoreUtilization?: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization;
  /**
   * @remarks
   * The total amount of data written to the file system.
   */
  writeSize?: ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memSecondsDayGrowthRatio: 'MemSecondsDayGrowthRatio',
      memUtilization: 'MemUtilization',
      readSize: 'ReadSize',
      vcoreSeconds: 'VcoreSeconds',
      vcoreSecondsDayGrowthRatio: 'VcoreSecondsDayGrowthRatio',
      vcoreUtilization: 'VcoreUtilization',
      writeSize: 'WriteSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: ListDoctorComputeSummaryResponseBodyDataMetricsMemSeconds,
      memSecondsDayGrowthRatio: ListDoctorComputeSummaryResponseBodyDataMetricsMemSecondsDayGrowthRatio,
      memUtilization: ListDoctorComputeSummaryResponseBodyDataMetricsMemUtilization,
      readSize: ListDoctorComputeSummaryResponseBodyDataMetricsReadSize,
      vcoreSeconds: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSeconds,
      vcoreSecondsDayGrowthRatio: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreSecondsDayGrowthRatio,
      vcoreUtilization: ListDoctorComputeSummaryResponseBodyDataMetricsVcoreUtilization,
      writeSize: ListDoctorComputeSummaryResponseBodyDataMetricsWriteSize,
    };
  }

  validate() {
    if(this.memSeconds && typeof (this.memSeconds as any).validate === 'function') {
      (this.memSeconds as any).validate();
    }
    if(this.memSecondsDayGrowthRatio && typeof (this.memSecondsDayGrowthRatio as any).validate === 'function') {
      (this.memSecondsDayGrowthRatio as any).validate();
    }
    if(this.memUtilization && typeof (this.memUtilization as any).validate === 'function') {
      (this.memUtilization as any).validate();
    }
    if(this.readSize && typeof (this.readSize as any).validate === 'function') {
      (this.readSize as any).validate();
    }
    if(this.vcoreSeconds && typeof (this.vcoreSeconds as any).validate === 'function') {
      (this.vcoreSeconds as any).validate();
    }
    if(this.vcoreSecondsDayGrowthRatio && typeof (this.vcoreSecondsDayGrowthRatio as any).validate === 'function') {
      (this.vcoreSecondsDayGrowthRatio as any).validate();
    }
    if(this.vcoreUtilization && typeof (this.vcoreUtilization as any).validate === 'function') {
      (this.vcoreUtilization as any).validate();
    }
    if(this.writeSize && typeof (this.writeSize as any).validate === 'function') {
      (this.writeSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorComputeSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The resource analysis results.
   */
  analysis?: ListDoctorComputeSummaryResponseBodyDataAnalysis;
  /**
   * @remarks
   * The name of the resource whose details are obtained based on the value of ComponentTypes. For example, if the value of ComponentTypes is Queue, the value of this parameter is a queue, such as DW.
   * 
   * @example
   * DW
   */
  componentName?: string;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorComputeSummaryResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      componentName: 'ComponentName',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorComputeSummaryResponseBodyDataAnalysis,
      componentName: 'string',
      metrics: ListDoctorComputeSummaryResponseBodyDataMetrics,
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

export class ListDoctorComputeSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of resource usage.
   */
  data?: ListDoctorComputeSummaryResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDoctorComputeSummaryResponseBodyData },
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

