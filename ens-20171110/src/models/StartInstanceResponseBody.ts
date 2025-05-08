// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

