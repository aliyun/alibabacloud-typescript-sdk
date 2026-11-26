// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAsrVocabResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success, and other values indicate failure. You can determine the cause of the failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The hot word ID, which is the specified vocabId.
   * 
   * @example
   * 71b1795ac8634bd8bdf4d3878480c7c2
   */
  data?: string;
  /**
   * @remarks
   * The error details if an error occurs, or **successful** if the request is successful.
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
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. You can determine whether the request is successful based on this field:
   * 
   * - **true**: Successful.
   * - **false/null**: Failed.
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
      data: 'string',
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

