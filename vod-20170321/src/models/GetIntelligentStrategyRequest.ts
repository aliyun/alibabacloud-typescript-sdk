// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntelligentStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

