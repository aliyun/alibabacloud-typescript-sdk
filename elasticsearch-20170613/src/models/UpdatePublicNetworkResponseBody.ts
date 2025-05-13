// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePublicNetworkResponseBodyResult } from "./UpdatePublicNetworkResponseBodyResult";


export class UpdatePublicNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2A88ECA1-D827-4581-AD39-05149586****
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
   */
  result?: UpdatePublicNetworkResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePublicNetworkResponseBodyResult,
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

