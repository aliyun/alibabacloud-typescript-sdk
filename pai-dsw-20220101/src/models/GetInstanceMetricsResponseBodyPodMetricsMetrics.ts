// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceMetricsResponseBodyPodMetricsMetrics extends $dara.Model {
  /**
   * @remarks
   * The timestamp corresponding to the metric.
   * 
   * @example
   * 1670890560
   */
  time?: number;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 25.901031
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
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

