// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorApplicationResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score of the job.
   * 
   * @example
   * 67
   */
  score?: number;
  /**
   * @remarks
   * The suggestion for running the job.
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyDataMetricsMemSeconds extends $dara.Model {
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

export class GetDoctorApplicationResponseBodyDataMetricsMemUtilization extends $dara.Model {
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

export class GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds extends $dara.Model {
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
   * 11123
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

export class GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization extends $dara.Model {
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

export class GetDoctorApplicationResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The aggregated amount of memory that is allocated to the job multiplied by the number of seconds the job has been running.
   */
  memSeconds?: GetDoctorApplicationResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The memory usage.
   */
  memUtilization?: GetDoctorApplicationResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The aggregated number of vCPUs that are allocated to the job multiplied by the number of seconds the job has been running.
   */
  vcoreSeconds?: GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The CPU utilization. The meaning is the same as that of the %CPU command in the output of the Linux top command.
   */
  vcoreUtilization?: GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      memUtilization: 'MemUtilization',
      vcoreSeconds: 'VcoreSeconds',
      vcoreUtilization: 'VcoreUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorApplicationResponseBodyDataMetricsMemSeconds,
      memUtilization: GetDoctorApplicationResponseBodyDataMetricsMemUtilization,
      vcoreSeconds: GetDoctorApplicationResponseBodyDataMetricsVcoreSeconds,
      vcoreUtilization: GetDoctorApplicationResponseBodyDataMetricsVcoreUtilization,
    };
  }

  validate() {
    if(this.memSeconds && typeof (this.memSeconds as any).validate === 'function') {
      (this.memSeconds as any).validate();
    }
    if(this.memUtilization && typeof (this.memUtilization as any).validate === 'function') {
      (this.memUtilization as any).validate();
    }
    if(this.vcoreSeconds && typeof (this.vcoreSeconds as any).validate === 'function') {
      (this.vcoreSeconds as any).validate();
    }
    if(this.vcoreUtilization && typeof (this.vcoreUtilization as any).validate === 'function') {
      (this.vcoreUtilization as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job analysis result.
   */
  analysis?: GetDoctorApplicationResponseBodyDataAnalysis;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * CREATE TABLE test...ranks=1 (Stage-1)
   */
  appName?: string;
  /**
   * @remarks
   * The end time of the job. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1666213200000
   */
  endTime?: number;
  /**
   * @remarks
   * The job IDs. Multiple job IDs are separated with commas (,).
   * 
   * @example
   * null
   */
  ids?: string[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorApplicationResponseBodyDataMetrics;
  /**
   * @remarks
   * The SQL statement of the job. This parameter is left empty for non-SQL jobs.
   * 
   * @example
   * SELECT id, count(1) FROM test group by id;
   */
  querySql?: string;
  /**
   * @remarks
   * The YARN queue to which the job was submitted.
   * 
   * @example
   * DW
   */
  queue?: string;
  /**
   * @remarks
   * The time when the job was submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1677465658275
   */
  startTime?: number;
  /**
   * @remarks
   * The type of the compute engine.
   * 
   * @example
   * SPARK
   */
  type?: string;
  /**
   * @remarks
   * The username that is used to submit the job.
   * 
   * @example
   * DW
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      appName: 'AppName',
      endTime: 'EndTime',
      ids: 'Ids',
      metrics: 'Metrics',
      querySql: 'QuerySql',
      queue: 'Queue',
      startTime: 'StartTime',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorApplicationResponseBodyDataAnalysis,
      appName: 'string',
      endTime: 'number',
      ids: { 'type': 'array', 'itemType': 'string' },
      metrics: GetDoctorApplicationResponseBodyDataMetrics,
      querySql: 'string',
      queue: 'string',
      startTime: 'number',
      type: 'string',
      user: 'string',
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
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

export class GetDoctorApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the job.
   */
  data?: GetDoctorApplicationResponseBodyData;
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
      data: GetDoctorApplicationResponseBodyData,
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

