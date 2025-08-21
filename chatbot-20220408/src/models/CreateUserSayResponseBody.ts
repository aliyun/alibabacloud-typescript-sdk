// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserSayResponseBody extends $dara.Model {
  /**
   * @example
   * 8g4n8bnd236fg79
   */
  requestId?: string;
  /**
   * @example
   * 46456176856
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

