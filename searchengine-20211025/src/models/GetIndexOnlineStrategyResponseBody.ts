// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIndexOnlineStrategyResponseBodyResult } from "./GetIndexOnlineStrategyResponseBodyResult";


export class GetIndexOnlineStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: GetIndexOnlineStrategyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexOnlineStrategyResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

