// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLMetricPoint extends $dara.Model {
  /**
   * @remarks
   * UTC RFC3339，秒精度；聚合桶使用最后一个有效源点的时间，不表示极值发生时间
   * 
   * @example
   * 2026-09-10T06:00:00Z
   */
  gmtTime?: string;
  /**
   * @remarks
   * 去重且排除非有限值后的有效源点数，正整数；仅聚合桶返回
   * 
   * @example
   * 3
   */
  sampleCount?: number;
  /**
   * @remarks
   * 桶内有效点的最小步数，包含；仅聚合桶返回
   * 
   * @example
   * 1
   */
  startStep?: number;
  /**
   * @remarks
   * 非负框架步数，0 有效；聚合桶使用最后一个有效源点的步数
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * 原始有限数值或桶聚合结果。非有限点省略；缺失区间不补点或填 0
   * 
   * @example
   * 0.012
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      gmtTime: 'GmtTime',
      sampleCount: 'SampleCount',
      startStep: 'StartStep',
      step: 'Step',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtTime: 'string',
      sampleCount: 'number',
      startStep: 'number',
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

