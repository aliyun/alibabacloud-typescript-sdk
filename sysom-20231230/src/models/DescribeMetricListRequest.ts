// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time as a UNIX timestamp in seconds.
   * 
   * @example
   * 1683618245000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * sysom_cpu_graph
   */
  metricName?: string;
  /**
   * @remarks
   * The start time as a UNIX timestamp in seconds.
   * 
   * @example
   * 1709740800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      instance: 'instance',
      metricName: 'metricName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instance: 'string',
      metricName: 'string',
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

