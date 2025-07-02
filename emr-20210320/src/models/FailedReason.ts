// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FailedReason extends $dara.Model {
  /**
   * @remarks
   * 错误码。
   * 
   * @example
   * MissingParameter.InstanceType
   */
  errorCode?: string;
  /**
   * @remarks
   * 错误信息。
   * 
   * @example
   * The instance type is required.
   */
  errorMessage?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944abcd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
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

