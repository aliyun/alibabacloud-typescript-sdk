// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 27B1345D-5F71-5972-8E4C-AABA6C6232F0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded.  
   * - true: The invocation succeeded.  
   * - false: Failed to Invocate.
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
      code: 'number',
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

