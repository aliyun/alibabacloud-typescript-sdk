// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLSampleEvent extends $dara.Model {
  /**
   * @remarks
   * The supplementary information for the event. The specific content depends on the event type.
   * 
   * @example
   * uid_generated
   */
  detail?: string;
  /**
   * @remarks
   * The source component or execution stage of the event.
   * 
   * @example
   * DataLoader
   */
  from?: string;
  /**
   * @remarks
   * The decimal string of the training step. An empty string is used when the corresponding information is not collected.
   * 
   * @example
   * 12
   */
  globalStep?: string;
  /**
   * @remarks
   * The training or sampling stage to which the event belongs.
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
   * The destination component or execution action of the event.
   * 
   * @example
   * Trainer
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

