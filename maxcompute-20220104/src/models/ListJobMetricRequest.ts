// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobMetricRequest extends $dara.Model {
  /**
   * @remarks
   * Grouping basis.
   * 
   * > Available values: project, quota, type, status. Meanings:
   * >- project: Group and aggregate by project;
   * >- quota: Group and aggregate by quota;
   * >- type: Group and aggregate by job type;
   * >- status: Group and aggregate by job status.
   * 
   * @example
   * project
   */
  group?: string;
  /**
   * @remarks
   * The name of observation metric.
   * 
   * @example
   * num
   */
  metric?: string;
  /**
   * @remarks
   * The monitoring statistical period.Unit:Second(s).
   * 
   * @example
   * 3600
   */
  period?: number;
  /**
   * @remarks
   * The name of MaxCompute projects (for filtering).
   */
  project?: string[];
  /**
   * @remarks
   * The nickname of computing Quota nickname used by the job (for filtering).
   */
  quota?: string[];
  /**
   * @remarks
   * The type of observation metric.
   * 
   * @example
   * total
   */
  type?: string;
  /**
   * @remarks
   * The end time for the observation interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start time for the observation interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      metric: 'metric',
      period: 'period',
      project: 'project',
      quota: 'quota',
      type: 'type',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      metric: 'string',
      period: 'number',
      project: { 'type': 'array', 'itemType': 'string' },
      quota: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    if(Array.isArray(this.quota)) {
      $dara.Model.validateArray(this.quota);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

