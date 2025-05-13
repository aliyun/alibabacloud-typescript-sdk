// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOpenStoreUsageResponseBodyResult } from "./GetOpenStoreUsageResponseBodyResult";


export class GetOpenStoreUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1DE2491-804F-4C86-BAB4-548DD70B****
   */
  requestId?: string;
  /**
   * @remarks
   * The current request result.
   */
  result?: GetOpenStoreUsageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetOpenStoreUsageResponseBodyResult,
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

