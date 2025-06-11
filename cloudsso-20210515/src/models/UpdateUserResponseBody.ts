// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserResponseBodyUser } from "./UpdateUserResponseBodyUser";


export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F44F02EC-70D1-5E51-8E8E-FA9AC4EF952A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the user.
   */
  user?: UpdateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: UpdateUserResponseBodyUser,
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

