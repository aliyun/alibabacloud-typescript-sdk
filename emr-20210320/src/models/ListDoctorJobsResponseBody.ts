// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorJobsResponseBodyDataMetricsMemSeconds extends $dara.Model {
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

export class ListDoctorJobsResponseBodyDataMetricsVcoreSeconds extends $dara.Model {
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

export class ListDoctorJobsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The amount of memory consumed.
   */
  memSeconds?: ListDoctorJobsResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The CPU usage.
   */
  vcoreSeconds?: ListDoctorJobsResponseBodyDataMetricsVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: ListDoctorJobsResponseBodyDataMetricsMemSeconds,
      vcoreSeconds: ListDoctorJobsResponseBodyDataMetricsVcoreSeconds,
    };
  }

  validate() {
    if(this.memSeconds && typeof (this.memSeconds as any).validate === 'function') {
      (this.memSeconds as any).validate();
    }
    if(this.vcoreSeconds && typeof (this.vcoreSeconds as any).validate === 'function') {
      (this.vcoreSeconds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the job that was submitted to YARN.
   * 
   * @example
   * application_1607584549220_*****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * tpcds
   */
  appName?: string;
  /**
   * @remarks
   * The total running time of the job. Unit: milliseconds.
   * 
   * @example
   * 242
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The final state of the job. Valid values:
   * 
   * *   SUCCEEDED
   * *   FAILED
   * *   KILLED
   * *   ENDED
   * *   UNDEFINED
   * 
   * @example
   * KILLED
   */
  finalStatus?: string;
  /**
   * @remarks
   * The end time of the job. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1683690929000
   */
  finishTime?: number;
  /**
   * @remarks
   * The time when the job was started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1672148400000
   */
  launchTime?: number;
  /**
   * @remarks
   * The data about the metrics.
   */
  metrics?: ListDoctorJobsResponseBodyDataMetrics;
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
   * 1675180800000
   */
  startTime?: number;
  /**
   * @remarks
   * The running state of the job. Valid values:
   * 
   * *   FINISHED
   * *   FAILED
   * *   KILLED
   * 
   * @example
   * FINISHED
   */
  state?: string;
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
   * The username that was used to submit the job.
   * 
   * @example
   * DW
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      elapsedTime: 'ElapsedTime',
      finalStatus: 'FinalStatus',
      finishTime: 'FinishTime',
      launchTime: 'LaunchTime',
      metrics: 'Metrics',
      queue: 'Queue',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      elapsedTime: 'number',
      finalStatus: 'string',
      finishTime: 'number',
      launchTime: 'number',
      metrics: ListDoctorJobsResponseBodyDataMetrics,
      queue: 'string',
      startTime: 'number',
      state: 'string',
      type: 'string',
      user: 'string',
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

export class ListDoctorJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the jobs.
   */
  data?: ListDoctorJobsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDoctorJobsResponseBodyData },
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

