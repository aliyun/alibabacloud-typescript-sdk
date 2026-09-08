// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowStep extends $dara.Model {
  /**
   * @remarks
   * The P50 latency in seconds from when trajectories of the step enter the buffer to when batching occurs.
   * 
   * @example
   * 0.8
   */
  bufferWaitP50?: number;
  /**
   * @remarks
   * The gap duration in seconds, calculated as train started − rollout finished. This represents batching or transfer wait time.
   * 
   * @example
   * 0
   */
  gapSec?: number;
  /**
   * @remarks
   * The training idle time in seconds, calculated as the current step training start − the previous step training end. If no marker is present, the value falls back to the current step forward computation start − the previous step optimizer end. A value greater than 0 indicates that the trainer is waiting for data.
   * 
   * @example
   * 0
   */
  idleSec?: number;
  /**
   * @remarks
   * The number of samples (UIDs) consumed by the step.
   * 
   * @example
   * 24
   */
  NSamples?: number;
  /**
   * @remarks
   * The number of trajectories executed in the step.
   * 
   * @example
   * 96
   */
  NTrajs?: number;
  /**
   * @remarks
   * The latest time when trajectories of the step enter the buffer, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  prodEndMs?: number;
  /**
   * @remarks
   * The earliest time when trajectories of the step enter the buffer, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  prodStartMs?: number;
  /**
   * @remarks
   * The P50 latency in seconds from when trajectories of the step start execution to when they enter the buffer.
   * 
   * @example
   * 0.8
   */
  rolloutP50?: number;
  /**
   * @remarks
   * The rollout duration in seconds, calculated as rollout finished − rollout started. This value is null if no marker is present.
   * 
   * @example
   * 0
   */
  rolloutSec?: number;
  /**
   * @remarks
   * The global step ordinal number.
   * 
   * @example
   * 3
   */
  step?: number;
  /**
   * @remarks
   * The forward computation start time, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TFwdStartMs?: number;
  /**
   * @remarks
   * The optimizer end time, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TOptEndMs?: number;
  /**
   * @remarks
   * The node operation log "Step N rollout finished" time, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TRolloutEndMs?: number;
  /**
   * @remarks
   * The node operation log "Step N rollout started" time, in milliseconds (taken from agent_collect_time).
   * 
   * @example
   * 1787474487713
   */
  TRolloutStartMs?: number;
  /**
   * @remarks
   * The node operation log "Step N train finished" time, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TTrainEndMs?: number;
  /**
   * @remarks
   * The node operation log "Step N train started" time, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TTrainStartMs?: number;
  /**
   * @remarks
   * The TRAIN_UPDATE (parameter update) time, in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TUpdateMs?: number;
  /**
   * @remarks
   * The training duration in seconds. This value is preferentially calculated as train finished − train started. If no marker is present, the value falls back to the duration from batching to training completion. This value is null if global_step is duplicated because of a job restart.
   * 
   * @example
   * 0
   */
  trainSec?: number;
  static names(): { [key: string]: string } {
    return {
      bufferWaitP50: 'BufferWaitP50',
      gapSec: 'GapSec',
      idleSec: 'IdleSec',
      NSamples: 'NSamples',
      NTrajs: 'NTrajs',
      prodEndMs: 'ProdEndMs',
      prodStartMs: 'ProdStartMs',
      rolloutP50: 'RolloutP50',
      rolloutSec: 'RolloutSec',
      step: 'Step',
      TFwdStartMs: 'TFwdStartMs',
      TOptEndMs: 'TOptEndMs',
      TRolloutEndMs: 'TRolloutEndMs',
      TRolloutStartMs: 'TRolloutStartMs',
      TTrainEndMs: 'TTrainEndMs',
      TTrainStartMs: 'TTrainStartMs',
      TUpdateMs: 'TUpdateMs',
      trainSec: 'TrainSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bufferWaitP50: 'number',
      gapSec: 'number',
      idleSec: 'number',
      NSamples: 'number',
      NTrajs: 'number',
      prodEndMs: 'number',
      prodStartMs: 'number',
      rolloutP50: 'number',
      rolloutSec: 'number',
      step: 'number',
      TFwdStartMs: 'number',
      TOptEndMs: 'number',
      TRolloutEndMs: 'number',
      TRolloutStartMs: 'number',
      TTrainEndMs: 'number',
      TTrainStartMs: 'number',
      TUpdateMs: 'number',
      trainSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

