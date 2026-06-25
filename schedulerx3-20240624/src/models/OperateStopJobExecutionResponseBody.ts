// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateStopJobExecutionResponseBody extends $dara.Model {
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
   * The response message.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * E82D8B33-204D-58E1-8F56-909F6B48F3D1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of **true** indicates success, and a value of **false** indicates failure.
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

