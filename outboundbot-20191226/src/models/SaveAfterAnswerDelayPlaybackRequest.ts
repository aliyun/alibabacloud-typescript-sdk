// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAfterAnswerDelayPlaybackRequest extends $dara.Model {
  /**
   * @example
   * 1000
   */
  afterAnswerDelayPlayback?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 980116ec-2d3d-4747-8059-dc25e7af8501
   */
  entryId?: string;
  /**
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

