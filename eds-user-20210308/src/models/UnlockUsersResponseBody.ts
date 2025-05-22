// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnlockUsersResponseBodyUnlockUsersResult } from "./UnlockUsersResponseBodyUnlockUsersResult";


export class UnlockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 023F4EC4-3602-4A3E-A514-4970847D59DB
   */
  requestId?: string;
  /**
   * @remarks
   * The result of unlocking the convenience user.
   */
  unlockUsersResult?: UnlockUsersResponseBodyUnlockUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      unlockUsersResult: 'UnlockUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      unlockUsersResult: UnlockUsersResponseBodyUnlockUsersResult,
    };
  }

  validate() {
    if(this.unlockUsersResult && typeof (this.unlockUsersResult as any).validate === 'function') {
      (this.unlockUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

