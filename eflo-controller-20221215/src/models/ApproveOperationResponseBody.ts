// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * Resource not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
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

