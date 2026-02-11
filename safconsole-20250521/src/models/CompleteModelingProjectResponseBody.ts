// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteModelingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 055f1546-f465-4c92-a2da-bfb86abe6f56
   */
  requestId?: string;
  /**
   * @remarks
   * Return result, indicating whether the creation was successful:
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  resultObject?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: Call succeeded.
   * - **false**: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      resultObject: 'string',
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

