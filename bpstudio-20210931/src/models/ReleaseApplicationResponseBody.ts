// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The resource does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
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

