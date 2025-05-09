// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1712205941
   */
  endTime?: number;
  /**
   * @remarks
   * The metrics that you want to query.
   * 
   * This parameter is required.
   */
  metricName?: string[];
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1586509407
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      endTime: 'number',
      metricName: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metricName)) {
      $dara.Model.validateArray(this.metricName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

