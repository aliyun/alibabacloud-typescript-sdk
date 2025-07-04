// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceResponseBodyResult } from "./CreateInstanceResponseBodyResult";


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: CreateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateInstanceResponseBodyResult,
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

