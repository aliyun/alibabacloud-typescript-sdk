// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserSayResponseBody extends $dara.Model {
  /**
   * @example
   * dfgdg324gf34t34g34g3
   */
  requestId?: string;
  /**
   * @example
   * 4562121234
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSayId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

