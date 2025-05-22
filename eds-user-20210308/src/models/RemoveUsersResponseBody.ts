// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveUsersResponseBodyRemoveUsersResult } from "./RemoveUsersResponseBodyRemoveUsersResult";


export class RemoveUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of removing the convenience user.
   */
  removeUsersResult?: RemoveUsersResponseBodyRemoveUsersResult;
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
      removeUsersResult: 'RemoveUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUsersResult: RemoveUsersResponseBodyRemoveUsersResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.removeUsersResult && typeof (this.removeUsersResult as any).validate === 'function') {
      (this.removeUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

