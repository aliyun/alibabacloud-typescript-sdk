// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateGADInstanceResponseBodyResult } from "./CreateGadinstanceResponseBodyResult";


export class CreateGADInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned.
   */
  result?: CreateGADInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateGADInstanceResponseBodyResult,
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

