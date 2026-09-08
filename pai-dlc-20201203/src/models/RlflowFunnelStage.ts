// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowFunnelStage extends $dara.Model {
  /**
   * @remarks
   * The number of trajectories that reach this level.
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * The level identifier. Valid values: traj, dispatch, run, rollout, reward, sampled, and trained.
   * 
   * @example
   * traj
   */
  key?: string;
  /**
   * @remarks
   * The Chinese name of the level. Valid values: 生成轨迹, 下发到 Worker, Agent 启动, Rollout 完成, reward 打分, 采样入批, and 完成训练.
   * 
   * @example
   * 生成轨迹
   */
  label?: string;
  /**
   * @remarks
   * The percentage relative to the first traj level.
   * 
   * @example
   * 100
   */
  pct?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      key: 'Key',
      label: 'Label',
      pct: 'Pct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      key: 'string',
      label: 'string',
      pct: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

