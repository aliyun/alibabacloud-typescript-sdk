// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowSankeyColumn extends $dara.Model {
  /**
   * @remarks
   * The number of trajectories in the column. The value is monotonized: reaching a later stage implies having passed through all preceding stages.
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * The column identifier. Valid values: gen, run, rollout, sampled, and trained.
   * 
   * @example
   * traj
   */
  key?: string;
  /**
   * @remarks
   * The Chinese name of the column. Valid values: 轨迹生成, Agent 启动, Rollout 完成, 采样入批, and 完成训练.
   * 
   * @example
   * 生成轨迹
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      key: 'Key',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      key: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

