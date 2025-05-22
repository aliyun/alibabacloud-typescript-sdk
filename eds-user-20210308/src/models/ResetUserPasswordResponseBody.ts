// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetUserPasswordResponseBodyResetUsersResult } from "./ResetUserPasswordResponseBodyResetUsersResult";


export class ResetUserPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 32D05B39-E6EE-4D7A-9FD0-762A26859D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of resetting the password of the convenience user.
   */
  resetUsersResult?: ResetUserPasswordResponseBodyResetUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resetUsersResult: 'ResetUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resetUsersResult: ResetUserPasswordResponseBodyResetUsersResult,
    };
  }

  validate() {
    if(this.resetUsersResult && typeof (this.resetUsersResult as any).validate === 'function') {
      (this.resetUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

