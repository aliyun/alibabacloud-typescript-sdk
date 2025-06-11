// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectStepMetricResponseBodyDataMetrics } from "./DescribeProjectStepMetricResponseBodyDataMetrics";


export class DescribeProjectStepMetricResponseBodyData extends $dara.Model {
  /**
   * @example
   * AVG
   */
  aggregator?: string;
  metrics?: DescribeProjectStepMetricResponseBodyDataMetrics[];
  /**
   * @example
   * null
   */
  referenceValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      metrics: 'Metrics',
      referenceValue: 'ReferenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      metrics: { 'type': 'array', 'itemType': DescribeProjectStepMetricResponseBodyDataMetrics },
      referenceValue: 'number',
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

