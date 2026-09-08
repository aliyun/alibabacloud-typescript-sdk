// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLSampleEvent extends $dara.Model {
  /**
   * @remarks
   * The details. For Megatron rows, the value is rank=..,global_step=..,ppo_epoch=..
   * 
   * @example
   * uid_generated
   */
  detail?: string;
  /**
   * @remarks
   * The event source component. For Megatron rows, the value is "{phase} {status}".
   * 
   * @example
   * DataLoader
   */
  from?: string;
  /**
   * @remarks
   * The training step to which the event belongs (raw string). For Megatron rows, this is empty because the step is included in Detail.
   * 
   * @example
   * 12
   */
  globalStep?: string;
  /**
   * @remarks
   * The stage. For Megatron rows, this is normalized to TRAIN.
   * 
   * @example
   * DATA_PREPROCESS
   */
  stage?: string;
  /**
   * @remarks
   * The millisecond timestamp.
   * 
   * @example
   * 1787293208012
   */
  timestampMs?: number;
  /**
   * @remarks
   * The event target component. For Megatron rows, the value is the function name.
   * 
   * @example
   * PPOTrainerV1
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      from: 'From',
      globalStep: 'GlobalStep',
      stage: 'Stage',
      timestampMs: 'TimestampMs',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      from: 'string',
      globalStep: 'string',
      stage: 'string',
      timestampMs: 'number',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

