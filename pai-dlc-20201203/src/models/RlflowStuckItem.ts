// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowStuckItem extends $dara.Model {
  /**
   * @remarks
   * The number of idle seconds since NowMs (the descending sort key for the stuck list).
   * 
   * @example
   * 0
   */
  idleSec?: number;
  /**
   * @remarks
   * The millisecond timestamp of the last event.
   * 
   * @example
   * 1787293215480
   */
  lastTsMs?: number;
  /**
   * @remarks
   * The current milestone: generated but not dispatched, dispatched but not started, started but pending generation, generating, rollout completed pending scoring, scored pending sampling, or sampled pending training.
   * 
   * @example
   * Generating
   */
  milestone?: string;
  /**
   * @remarks
   * The number of completed generation turns.
   * 
   * @example
   * 3
   */
  NTurns?: number;
  /**
   * @remarks
   * The sample UID.
   * 
   * @example
   * 321fa56f-e1e5-4eb3-8047-db7a230c9a75
   */
  promptUid?: string;
  /**
   * @remarks
   * The trajectory index.
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

