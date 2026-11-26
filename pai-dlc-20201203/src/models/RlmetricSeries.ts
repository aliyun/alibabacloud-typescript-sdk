// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLMetricPoint } from "./RlmetricPoint";


export class RLMetricSeries extends $dara.Model {
  /**
   * @remarks
   * 生效聚合策略，即使未降采样也返回
   * 
   * @example
   * Last
   */
  aggregation?: string;
  /**
   * @remarks
   * 是否为满足点数上限进行了等宽步数分桶
   * 
   * @example
   * false
   */
  downsampled?: boolean;
  /**
   * @remarks
   * 本次查询的精确指标键
   * 
   * @example
   * actor/ppo_kl
   */
  metricName?: string;
  /**
   * @remarks
   * 按步数升序排列的有限数据点或聚合桶，同一步数取最新源事件。没有有限点时返回 []，不返回 null
   * 
   * @example
   * [{"Step":1,"GmtTime":"2026-09-10T06:00:00Z","Value":0.012}]
   */
  points?: RLMetricPoint[];
  static names(): { [key: string]: string } {
    return {
      aggregation: 'Aggregation',
      downsampled: 'Downsampled',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregation: 'string',
      downsampled: 'boolean',
      metricName: 'string',
      points: { 'type': 'array', 'itemType': RLMetricPoint },
    };
  }

  validate() {
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

