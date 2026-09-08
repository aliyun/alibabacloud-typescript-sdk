// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowStuckItem extends $dara.Model {
  /**
   * @remarks
   * The number of idle seconds since NowMs. This value is the descending sort key of the Stuck list.
   * 
   * @example
   * 0
   */
  idleSec?: number;
  /**
   * @remarks
   * The UNIX timestamp of the last event, in milliseconds.
   * 
   * @example
   * 1787293215480
   */
  lastTsMs?: number;
  /**
   * @remarks
   * The current milestone where the entry is staying. Valid values:
   * - 已生成未下发: Generated but not delivered.
   * - 已下发未启动: Delivered but not started.
   * - 已启动待生成: Started and pending generation.
   * - 生成中: Generating.
   * - Rollout完成待打分: Rollout completed and pending scoring.
   * - 已打分待采样: Scored and pending sampling.
   * - 已采样待训练: Sampled and pending training.
   * 
   * @example
   * 生成中
   */
  milestone?: string;
  /**
   * @remarks
   * The number of completed generation rounds.
   * 
   * @example
   * 3
   */
  NTurns?: number;
  /**
   * @remarks
   * The UID of the sample.
   * 
   * @example
   * 321fa56f-e1e5-4eb3-8047-db7a230c9a75
   */
  promptUid?: string;
  /**
   * @remarks
   * The ordinal number of the trajectory.
   * 
   * @example
   * 2
   */
  sampleIndex?: string;
  static names(): { [key: string]: string } {
    return {
      idleSec: 'IdleSec',
      lastTsMs: 'LastTsMs',
      milestone: 'Milestone',
      NTurns: 'NTurns',
      promptUid: 'PromptUid',
      sampleIndex: 'SampleIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idleSec: 'number',
      lastTsMs: 'number',
      milestone: 'string',
      NTurns: 'number',
      promptUid: 'string',
      sampleIndex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

