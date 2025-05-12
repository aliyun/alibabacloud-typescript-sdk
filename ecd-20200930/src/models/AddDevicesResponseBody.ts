// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned error message. This parameter is not returned if the value of Code is `success`.
   * 
   * @example
   * The parameter is not specified.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A87DBB05-653A-5E4B-B72B-5F4A1E07****
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

