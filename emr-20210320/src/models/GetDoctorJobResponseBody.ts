// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorJobResponseBodyDataMetricsMemSeconds extends $dara.Model {
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

export class GetDoctorJobResponseBodyDataMetricsVcoreSeconds extends $dara.Model {
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

export class GetDoctorJobResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The amount of memory consumed.
   */
  memSeconds?: GetDoctorJobResponseBodyDataMetricsMemSeconds;
  /**
   * @remarks
   * The CPU usage.
   */
  vcoreSeconds?: GetDoctorJobResponseBodyDataMetricsVcoreSeconds;
  static names(): { [key: string]: string } {
    return {
      memSeconds: 'MemSeconds',
      vcoreSeconds: 'VcoreSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memSeconds: GetDoctorJobResponseBodyDataMetricsMemSeconds,
      vcoreSeconds: GetDoctorJobResponseBodyDataMetricsVcoreSeconds,
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

export class GetDoctorJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the job that was submitted to YARN.
   * 
   * @example
   * application_1542620905989_****
   */
  appId?: string;
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
   * The total running time of the job. Unit: milliseconds.
   * 
   * @example
   * 278
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
   * The time when the job ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1658388322000
   */
  finishTime?: number;
  /**
   * @remarks
   * The time when the job was started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1665014400000
   */
  launchTime?: number;
  /**
   * @remarks
   * The data about metrics.
   */
  metrics?: GetDoctorJobResponseBodyDataMetrics;
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
   * 1673946000000
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
      metrics: GetDoctorJobResponseBodyDataMetrics,
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

export class GetDoctorJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the job.
   */
  data?: GetDoctorJobResponseBodyData;
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
      data: GetDoctorJobResponseBodyData,
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

