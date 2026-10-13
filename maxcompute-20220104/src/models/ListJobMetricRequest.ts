// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The grouping basis.
   * 
   * > Valid values:
   * > - project: grouping and aggregation by project
   * > - quota: grouping and aggregation by quota
   * > - type: grouping and aggregation by job type
   * > - status: grouping and aggregation by job status
   * 
   * @example
   * project
   */
  group?: string;
  /**
   * @remarks
   * The metric information.
   * 
   * @example
   * num
   */
  metric?: string;
  /**
   * @remarks
   * The monitoring statistical period.
   * 
   * @example
   * 3600
   */
  period?: number;
  /**
   * @remarks
   * The list of MaxCompute project names used for filtering.
   */
  project?: string[];
  /**
   * @remarks
   * The list of compute quota nicknames used for filtering.
   */
  quota?: string[];
  /**
   * @remarks
   * The metric type.
   * 
   * @example
   * total
   */
  type?: string;
  /**
   * @remarks
   * The end time of the query time range. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the query time range. The value is a UNIX timestamp in seconds.
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

