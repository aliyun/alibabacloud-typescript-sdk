// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BucUser } from "./BucUser";


export class RegisterBucUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D372D265-81C4-5B84-8827-596F0CF768FF
   */
  requestId?: string;
  result?: BucUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BucUser,
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

