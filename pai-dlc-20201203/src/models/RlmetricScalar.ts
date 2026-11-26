// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLMetricScalar extends $dara.Model {
  /**
   * @remarks
   * 该标量的源事件时间，UTC RFC3339，秒精度
   * 
   * @example
   * 2026-09-10T06:00:00Z
   */
  gmtTime?: string;
  /**
   * @remarks
   * 精确且区分大小写的原生指标键
   * 
   * @example
   * actor/ppo_kl
   */
  metricName?: string;
  /**
   * @remarks
   * 该指标在生效日志窗口内最高已观测步数，0 有效；稀疏指标的步数可以不同
   * 
   * @example
   * 5
   */
  step?: number;
  /**
   * @remarks
   * 最新已观测值；空值或非有限值为 null，不回退到较早有限值，也不填 0。完整读取时为 Available，空值本身不产生原因码；查询受限或记录损坏时仍为 Partial
   * 
   * @example
   * 0.012
   * 
   * **if can be null:**
   * true
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      gmtTime: 'GmtTime',
      metricName: 'MetricName',
      step: 'Step',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtTime: 'string',
      metricName: 'string',
      step: 'number',
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

