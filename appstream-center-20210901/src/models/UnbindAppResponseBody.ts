// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This field is returned when the request fails and may not be included in a successful response.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The error or result message. This field describes the cause of a failed request and may not be included in a successful response.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value for troubleshooting.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. To check whether an asynchronous task is completed, query the task status separately.
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

