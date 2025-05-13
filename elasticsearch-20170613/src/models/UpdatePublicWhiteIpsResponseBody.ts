// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePublicWhiteIpsResponseBodyResult } from "./UpdatePublicWhiteIpsResponseBodyResult";


export class UpdatePublicWhiteIpsResponseBody extends $dara.Model {
  /**
   * @example
   * C82758DD-282F-4D48-934F-92170A33****
   */
  requestId?: string;
  result?: UpdatePublicWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePublicWhiteIpsResponseBodyResult,
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

