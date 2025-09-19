// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoarStrategyTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 43313389-DED8-5BB7-8CB9-F22CDEB744DE
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the policy task.
   * 
   * @example
   * 10688
   */
  strategyTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyTaskId: 'StrategyTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

