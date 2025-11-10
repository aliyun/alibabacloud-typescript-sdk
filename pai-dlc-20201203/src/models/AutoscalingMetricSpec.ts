// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoscalingMetricSpec extends $dara.Model {
  metricName?: string;
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      targetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

