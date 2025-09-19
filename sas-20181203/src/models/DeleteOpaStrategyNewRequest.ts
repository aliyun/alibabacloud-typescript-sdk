// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOpaStrategyNewRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of rules.
   */
  strategyIds?: number[];
  static names(): { [key: string]: string } {
    return {
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.strategyIds)) {
      $dara.Model.validateArray(this.strategyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

