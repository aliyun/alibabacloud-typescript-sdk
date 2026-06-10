// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveMaxAttemptsPerDayRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * c8bf820a-6a8a-47bc-99bf-97593df8faa8
   */
  entryId?: string;
  /**
   * @remarks
   * Daily maximum redial attempts. Default is 3 if not specified.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
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
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      maxAttemptsPerDay: 'number',
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

