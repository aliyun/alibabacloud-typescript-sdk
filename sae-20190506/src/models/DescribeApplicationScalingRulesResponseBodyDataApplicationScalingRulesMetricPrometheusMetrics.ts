// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricPrometheusMetrics extends $dara.Model {
  prometheusQuery?: string;
  targetMetricValue?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusQuery: 'PrometheusQuery',
      targetMetricValue: 'TargetMetricValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusQuery: 'string',
      targetMetricValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

