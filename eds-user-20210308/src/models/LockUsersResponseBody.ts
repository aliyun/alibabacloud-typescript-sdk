// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LockUsersResponseBodyLockUsersResult } from "./LockUsersResponseBodyLockUsersResult";


export class LockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the locking the convenience user.
   */
  lockUsersResult?: LockUsersResponseBodyLockUsersResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lockUsersResult: 'LockUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockUsersResult: LockUsersResponseBodyLockUsersResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.lockUsersResult && typeof (this.lockUsersResult as any).validate === 'function') {
      (this.lockUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

