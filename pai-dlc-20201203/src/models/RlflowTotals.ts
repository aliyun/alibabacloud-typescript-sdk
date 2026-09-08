// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowTotals extends $dara.Model {
  /**
   * @remarks
   * The number of in-flight trajectories (no desired state).
   * 
   * @example
   * 0
   */
  inflight?: number;
  /**
   * @remarks
   * The number of trajectories that have completed reward scoring (hit reward_score_computed).
   * 
   * @example
   * 96
   */
  rewarded?: number;
  /**
   * @remarks
   * The number of trajectories sampled into a batch by the trainer (hit sampled_from_replay_buffer).
   * 
   * @example
   * 96
   */
  sampled?: number;
  /**
   * @remarks
   * The number of trajectories that have completed training (hit actor_parameters_updated).
   * 
   * @example
   * 96
   */
  trained?: number;
  /**
   * @remarks
   * The total number of trajectories in the window.
   * 
   * @example
   * 96
   */
  trajs?: number;
  /**
   * @remarks
   * The number of sample UIDs that appear in the window.
   * 
   * @example
   * 24
   */
  uids?: number;
  static names(): { [key: string]: string } {
    return {
      inflight: 'Inflight',
      rewarded: 'Rewarded',
      sampled: 'Sampled',
      trained: 'Trained',
      trajs: 'Trajs',
      uids: 'Uids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inflight: 'number',
      rewarded: 'number',
      sampled: 'number',
      trained: 'number',
      trajs: 'number',
      uids: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

