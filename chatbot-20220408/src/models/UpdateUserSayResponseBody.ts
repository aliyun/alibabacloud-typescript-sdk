// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserSayResponseBody extends $dara.Model {
  /**
   * @example
   * 2356fg3wf34634vdt23wef2
   */
  requestId?: string;
  /**
   * @example
   * 34512323
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

