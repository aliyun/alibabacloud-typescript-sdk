// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLFlowSlowestItem } from "./RlflowSlowestItem";


export class RLFlowTransition extends $dara.Model {
  /**
   * @remarks
   * The average duration in seconds.
   * 
   * @example
   * 1.9
   */
  avg?: number;
  /**
   * @remarks
   * The number of trajectories included in the statistics.
   * 
   * @example
   * 96
   */
  count?: number;
  /**
   * @remarks
   * The phase identifier. Valid values: dispatch_wait, start_wait, env_prepare, generation, agent_finish, reward, buffer_wait, logprob, ref_logprob, advantage, update, and e2e.
   * 
   * @example
   * traj
   */
  key?: string;
  /**
   * @remarks
   * The Chinese name of the phase.
   * 
   * @example
   * 生成轨迹
   */
  label?: string;
  /**
   * @remarks
   * The maximum duration in seconds.
   * 
   * @example
   * 9.2
   */
  max?: number;
  /**
   * @remarks
   * The P50 duration in seconds.
   * 
   * @example
   * 0.8
   */
  p50?: number;
  /**
   * @remarks
   * The P90 duration in seconds.
   * 
   * @example
   * 5.9
   */
  p90?: number;
  /**
   * @remarks
   * The P99 duration in seconds.
   * 
   * @example
   * 8.6
   */
  p99?: number;
  /**
   * @remarks
   * The slowest 5 trajectories.
   * 
   * @example
   * [{"PromptUid":"321fa56f-e1e5-4eb3-8047-db7a230c9a75","SampleIndex":"2","Sec":9.2}]
   */
  slowest?: RLFlowSlowestItem[];
  static names(): { [key: string]: string } {
    return {
      avg: 'Avg',
      count: 'Count',
      key: 'Key',
      label: 'Label',
      max: 'Max',
      p50: 'P50',
      p90: 'P90',
      p99: 'P99',
      slowest: 'Slowest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avg: 'number',
      count: 'number',
      key: 'string',
      label: 'string',
      max: 'number',
      p50: 'number',
      p90: 'number',
      p99: 'number',
      slowest: { 'type': 'array', 'itemType': RLFlowSlowestItem },
    };
  }

  validate() {
    if(Array.isArray(this.slowest)) {
      $dara.Model.validateArray(this.slowest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

