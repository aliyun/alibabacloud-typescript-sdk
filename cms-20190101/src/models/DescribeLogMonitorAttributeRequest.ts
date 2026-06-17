// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMonitorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total_******
   */
  metricName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

