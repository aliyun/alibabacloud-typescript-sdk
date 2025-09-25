// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The key that can be used for authorization activation. The authorization key is valid for 30 minutes and cannot be reused. It is recommended to re-obtain it before each activation.
   * 
   * @example
   * auth.1KQMcnLd4m37LN2D0F0WCD-1qtQI$
   */
  authKey?: string;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

