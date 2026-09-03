// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. The value `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is not returned if Code is `success`.
   * 
   * @example
   * The parameter is not specified.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

