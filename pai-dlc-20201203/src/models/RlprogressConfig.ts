// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressConfig extends $dara.Model {
  /**
   * @remarks
   * The number of mini-batches per step.
   * 
   * @example
   * 4
   */
  numMinibatches?: number;
  /**
   * @remarks
   * The PPO mini-batch size.
   * 
   * @example
   * 128
   */
  ppoMiniBatchSize?: number;
  /**
   * @remarks
   * The number of rollouts per prompt.
   * 
   * @example
   * 8
   */
  rolloutN?: number;
  /**
   * @remarks
   * The total number of training steps.
   * 
   * @example
   * 3
   */
  totalSteps?: number;
  /**
   * @remarks
   * The training batch size.
   * 
   * @example
   * 512
   */
  trainBatchSize?: number;
  static names(): { [key: string]: string } {
    return {
      numMinibatches: 'NumMinibatches',
      ppoMiniBatchSize: 'PpoMiniBatchSize',
      rolloutN: 'RolloutN',
      totalSteps: 'TotalSteps',
      trainBatchSize: 'TrainBatchSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numMinibatches: 'number',
      ppoMiniBatchSize: 'number',
      rolloutN: 'number',
      totalSteps: 'number',
      trainBatchSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

