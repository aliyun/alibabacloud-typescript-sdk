// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowTurns extends $dara.Model {
  /**
   * @remarks
   * 平均生成轮数
   * 
   * @example
   * 1.9
   */
  avg?: number;
  /**
   * @remarks
   * 参与统计的轨迹数
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * 最大生成轮数
   * 
   * @example
   * 9.2
   */
  max?: number;
  /**
   * @remarks
   * 生成轮数 P50
   * 
   * @example
   * 0.8
   */
  p50?: number;
  /**
   * @remarks
   * 生成轮数 P90
   * 
   * @example
   * 5.9
   */
  p90?: number;
  static names(): { [key: string]: string } {
    return {
      avg: 'Avg',
      count: 'Count',
      max: 'Max',
      p50: 'P50',
      p90: 'P90',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avg: 'number',
      count: 'number',
      max: 'number',
      p50: 'number',
      p90: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

