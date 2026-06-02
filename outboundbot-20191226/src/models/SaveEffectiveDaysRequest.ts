// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveEffectiveDaysRequest extends $dara.Model {
  /**
   * @example
   * 30
   */
  effectiveDays?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e90b5b8e-c8b4-4182-b28d-a5aa81685e49
   */
  entryId?: string;
  /**
   * @example
   * 2
   */
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveDays: 'EffectiveDays',
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDays: 'number',
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

