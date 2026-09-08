// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataMaskingInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * 实例未处于运行状态
   */
  errorMessage?: string;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
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

