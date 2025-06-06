// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthKeyResponseBody extends $dara.Model {
  /**
   * @example
   * auth.1KQMcnLd4m37LN2D0F0WCD-1qtQI$
   */
  authKey?: string;
  /**
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

