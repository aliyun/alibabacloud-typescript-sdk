// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLFlowStep extends $dara.Model {
  /**
   * @remarks
   * The P50 duration in seconds from when trajectories of the step enter the buffer to when they are batched.
   * 
   * @example
   * 0.8
   */
  bufferWaitP50?: number;
  /**
   * @remarks
   * The gap duration in seconds, calculated as train started minus rollout finished, representing batching or transfer wait time.
   * 
   * @example
   * 0
   */
  gapSec?: number;
  /**
   * @remarks
   * The idle time in seconds between the training phases of adjacent steps. This value only reflects the time interval and cannot be used alone to determine data waiting or other specific causes.
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
   * The number of trajectories belonging to the current execution of the step.
   * 
   * @example
   * 96
   */
  NTrajs?: number;
  /**
   * @remarks
   * The latest time a trajectory of the step enters the buffer in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  prodEndMs?: number;
  /**
   * @remarks
   * The earliest time a trajectory of the step enters the buffer in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  prodStartMs?: number;
  /**
   * @remarks
   * The P50 duration in seconds from when trajectories of the step start execution to when they enter the buffer.
   * 
   * @example
   * 0.8
   */
  rolloutP50?: number;
  /**
   * @remarks
   * The rollout duration in seconds, calculated as rollout finished minus rollout started. This value is empty when no markers are available.
   * 
   * @example
   * 0
   */
  rolloutSec?: number;
  /**
   * @remarks
   * The global step number.
   * 
   * @example
   * 3
   */
  step?: number;
  /**
   * @remarks
   * The start time of the forward computation in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TFwdStartMs?: number;
  /**
   * @remarks
   * The end time of the optimizer in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TOptEndMs?: number;
  /**
   * @remarks
   * The time of the "Step N rollout finished" entry in the node logs in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TRolloutEndMs?: number;
  /**
   * @remarks
   * The observed rollout start time for the current step as a millisecond timestamp.
   * 
   * @example
   * 1787474487713
   */
  TRolloutStartMs?: number;
  /**
   * @remarks
   * The time of the "Step N train finished" entry in the node logs in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TTrainEndMs?: number;
  /**
   * @remarks
   * The time of the "Step N train started" entry in the node logs in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TTrainStartMs?: number;
  /**
   * @remarks
   * The time of the TRAIN_UPDATE (parameter update) event in milliseconds.
   * 
   * @example
   * 1787474487713
   */
  TUpdateMs?: number;
  /**
   * @remarks
   * The duration of the training phase for the step in seconds. This value is not provided when the training start and end times are unavailable.
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

