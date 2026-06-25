// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateUnholdJobExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Response Code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The Error Message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded:
   * 
   * - true: The request succeeded.
   * 
   * - false: The request failed.
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

