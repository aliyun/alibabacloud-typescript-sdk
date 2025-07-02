// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricUnitValue extends $dara.Model {
  /**
   * @remarks
   * 指标名称。
   */
  metricName?: string;
  /**
   * @remarks
   * 指标单位。
   */
  metricUnit?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      metricUnit: 'MetricUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      metricUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

