// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserResponseBodyUser } from "./GetUserResponseBodyUser";


export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE42D2C4-A30A-59B7-ACEB-6D22FB44174A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the user.
   */
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

