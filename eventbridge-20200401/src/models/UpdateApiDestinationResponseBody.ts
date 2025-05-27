// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * api-destination-name
   * 
   * @example
   * api-destination-name
   */
  apiDestinationName?: string;
  /**
   * @remarks
   * The response code. If the request is successful, Success is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request is successful, success is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 382E6272-8E9C-5681-AC96-A8AF0BFAC1A5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
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

