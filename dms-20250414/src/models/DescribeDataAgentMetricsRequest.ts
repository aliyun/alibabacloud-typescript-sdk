// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range.
   * 
   * This parameter is required.
   * 
   * @example
   * 1782836200000
   */
  endTime?: number;
  /**
   * @remarks
   * The metric names. Separate multiple names with commas (,).
   * 
   * @example
   * data_agent_session_per_user
   */
  metricNames?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * - **basic**: basic metrics.
   * - **high_level**: advanced metrics.
   * 
   * This parameter is required.
   * 
   * @example
   * basic
   */
  metricType?: string;
  /**
   * @remarks
   * The start time of the query range.
   * 
   * This parameter is required.
   * 
   * @example
   * 1782835200000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricNames: 'MetricNames',
      metricType: 'MetricType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      metricNames: 'string',
      metricType: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

