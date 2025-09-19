// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWhiteListStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DFD6277-CC36-57F7-ACE6-F5952XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the application whitelist policy.
   * 
   * @example
   * 8634
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

