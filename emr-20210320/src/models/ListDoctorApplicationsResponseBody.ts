// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorApplicationsResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score of the job.
   * 
   * @example
   * 23
   */
  score?: number;
  /**
   * @remarks
   * The suggestion on executing the job.
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

export class ListDoctorApplicationsResponseBodyDataMetricsMemSeconds extends $dara.Model {
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

export class ListDoctorApplicationsResponseBodyDataMetricsMemUtilization extends $dara.Model {
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
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 0.23
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

export class ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds extends $dara.Model {
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

export class ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization extends $dara.Model {
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
   * ""
   */
  unit?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 23.1
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

export class ListDoctorApplicationsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The amount of memory consumed.
   */
  memSeconds?: ListDoctorApplicationsResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The memory usage
   */
  memUtilization?: ListDoctorApplicationsResponseBodyDataMetricsMemUtilization;
  /**
   * @remarks
   * The CPU usage.
   */
  vcoreSeconds?: ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds;
  /**
   * @remarks
   * The CPU utilization. This parameter has the same meaning as %CPU in the Linux top command.
   */
  vcoreUtilization?: ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization;
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
      memSeconds: ListDoctorApplicationsResponseBodyDataMetricsMemSeconds,
      memUtilization: ListDoctorApplicationsResponseBodyDataMetricsMemUtilization,
      vcoreSeconds: ListDoctorApplicationsResponseBodyDataMetricsVcoreSeconds,
      vcoreUtilization: ListDoctorApplicationsResponseBodyDataMetricsVcoreUtilization,
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

export class ListDoctorApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results of the jobs.
   */
  analysis?: ListDoctorApplicationsResponseBodyDataAnalysis;
  /**
   * @remarks
   * The job ID in YARN. The value of QueryID or SessionID is returned for a Hive job.
   * 
   * @example
   * application_1665056147236_*****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * data-upload
   */
  appName?: string;
  /**
   * @remarks
   * The time when the job ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1682049088086
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
   * The data about metrics.
   */
  metrics?: ListDoctorApplicationsResponseBodyDataMetrics;
  /**
   * @remarks
   * The query statement. This parameter is left empty for non-SQL jobs.
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
   * TEZ
   */
  type?: string;
  /**
   * @remarks
   * The username that was used to submit the job.
   * 
   * @example
   * DW
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      appId: 'AppId',
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
      analysis: ListDoctorApplicationsResponseBodyDataAnalysis,
      appId: 'string',
      appName: 'string',
      endTime: 'number',
      ids: { 'type': 'array', 'itemType': 'string' },
      metrics: ListDoctorApplicationsResponseBodyDataMetrics,
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

export class ListDoctorApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of jobs.
   */
  data?: ListDoctorApplicationsResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned.
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
      data: { 'type': 'array', 'itemType': ListDoctorApplicationsResponseBodyData },
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

