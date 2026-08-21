// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The end time, in seconds (UNIX timestamp).
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
   * The start time, in seconds (UNIX timestamp).
   * 
   * @example
   * 1709740800000
   */
  startTime?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      endTime: 'endTime',
      instance: 'instance',
      metricName: 'metricName',
      startTime: 'startTime',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      endTime: 'number',
      instance: 'string',
      metricName: 'string',
      startTime: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

