// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorApplicationResponseBodyDataAnalysis } from "./GetDoctorApplicationResponseBodyDataAnalysis";
import { GetDoctorApplicationResponseBodyDataMetrics } from "./GetDoctorApplicationResponseBodyDataMetrics";


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

