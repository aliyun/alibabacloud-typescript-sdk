// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDriveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The deletion result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7AA****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

