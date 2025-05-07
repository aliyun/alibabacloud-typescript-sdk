// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApplicationScalingRuleResponseBodyDataMetricMetrics } from "./CreateApplicationScalingRuleResponseBodyDataMetricMetrics";


export class CreateApplicationScalingRuleResponseBodyDataMetric extends $dara.Model {
  /**
   * @example
   * 3
   */
  maxReplicas?: number;
  metrics?: CreateApplicationScalingRuleResponseBodyDataMetricMetrics[];
  /**
   * @example
   * 1
   */
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyDataMetricMetrics },
      minReplicas: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

