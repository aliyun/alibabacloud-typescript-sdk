// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasourceResponseBody extends $dara.Model {
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
   * Error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * CF99C381-C8F6-5A8D-8C24-57F46B706D2D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded.  
   * - true: The invocation succeeded.  
   * - false: The invocation failed.
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

