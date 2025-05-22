// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUsersResponseBodyCreateResult } from "./CreateUsersResponseBodyCreateResult";


export class CreateUsersResponseBody extends $dara.Model {
  allSucceed?: boolean;
  /**
   * @remarks
   * The result of user creation.
   */
  createResult?: CreateUsersResponseBodyCreateResult;
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
      allSucceed: 'AllSucceed',
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSucceed: 'boolean',
      createResult: CreateUsersResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createResult && typeof (this.createResult as any).validate === 'function') {
      (this.createResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

