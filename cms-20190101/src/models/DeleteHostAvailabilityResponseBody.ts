// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHostAvailabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A status code of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 57C782E6-B235-4842-AD2B-DB94961761EB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. \\`true\\`: The operation was successful. \\`false\\`: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

