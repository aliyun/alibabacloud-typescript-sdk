// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDataCorrectPreCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingOrderId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * OrderId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5BC081C7-5F77-5C92-9758-E1ED17CA****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
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

