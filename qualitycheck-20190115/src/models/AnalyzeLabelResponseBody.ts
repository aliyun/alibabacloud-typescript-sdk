// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success, whereas other values indicate failure. You can determine the cause of the failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The analysis task ID.
   * 
   * @example
   * 20260629-DCC646E7-BE7F-114E-9F32-0C928292FC7F
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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

