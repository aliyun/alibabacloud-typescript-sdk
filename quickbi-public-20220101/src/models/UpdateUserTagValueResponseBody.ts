// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserTagValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a29270
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the result of modifying the user tag. Possible values:
   * 
   * - true: Operation succeeded
   * - false: Operation failed
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request was successful - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

