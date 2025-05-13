// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWhiteIpsResponseBodyResult } from "./UpdateWhiteIpsResponseBodyResult";


export class UpdateWhiteIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The updated whitelist.
   * 
   * @example
   * 8D58B014-BBD7-4D80-B219-00B9D5C6860C
   */
  requestId?: string;
  /**
   * @remarks
   * The network configurations.
   */
  result?: UpdateWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWhiteIpsResponseBodyResult,
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

