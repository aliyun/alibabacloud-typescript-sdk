// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEndpointResponseBodyResult } from "./UpdateEndpointResponseBodyResult";


export class UpdateEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * FBAD8493-87FA-583E-8A4C-D487F2DE90FC
   */
  requestId?: string;
  result?: UpdateEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateEndpointResponseBodyResult,
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

