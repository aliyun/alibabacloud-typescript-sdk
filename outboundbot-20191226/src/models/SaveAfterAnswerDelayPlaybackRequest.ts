// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAfterAnswerDelayPlaybackRequest extends $dara.Model {
  /**
   * @remarks
   * The playback time for delayed playback. If this parameter is not specified, the default value 0 is used.
   * 
   * @example
   * 1
   */
  afterAnswerDelayPlayback?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 980116ec-2d3d-4747-8059-dc25e7af8501
   */
  entryId?: string;
  /**
   * @remarks
   * The policy level (required). Valid values:
   * - 2: instance
   * 
   * @example
   * 2
   */
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      afterAnswerDelayPlayback: 'AfterAnswerDelayPlayback',
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAnswerDelayPlayback: 'number',
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

