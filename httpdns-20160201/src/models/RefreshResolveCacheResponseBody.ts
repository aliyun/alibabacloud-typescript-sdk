// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshResolveCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FA8C2599-362D-4113-8FB4-E88A40C2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

