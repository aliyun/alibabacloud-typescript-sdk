// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAccessStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * @example
   * testStrategyId1
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

