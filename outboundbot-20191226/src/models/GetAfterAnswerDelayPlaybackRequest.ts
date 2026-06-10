// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAfterAnswerDelayPlaybackRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4
   */
  entryId?: string;
  /**
   * @remarks
   * Policy level (required)
   * 
   * - 2: Instance
   * 
   * @example
   * 2
   */
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

