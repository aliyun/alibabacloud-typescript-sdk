// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricDefRespDTO } from "./MetricDefRespDto";
import { TrendPointDTO } from "./TrendPointDto";


export class CostQueryTrendDTO extends $dara.Model {
  /**
   * @example
   * total_amount
   */
  defaultMetric?: string;
  /**
   * @example
   * hourly
   */
  granularity?: string;
  metrics?: MetricDefRespDTO[];
  points?: TrendPointDTO[];
  static names(): { [key: string]: string } {
    return {
      defaultMetric: 'defaultMetric',
      granularity: 'granularity',
      metrics: 'metrics',
      points: 'points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultMetric: 'string',
      granularity: 'string',
      metrics: { 'type': 'array', 'itemType': MetricDefRespDTO },
      points: { 'type': 'array', 'itemType': TrendPointDTO },
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

