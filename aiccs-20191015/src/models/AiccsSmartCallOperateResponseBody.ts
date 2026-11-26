// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiccsSmartCallOperateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. A value of OK indicates that the request succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of the command execution.
   * - **true**: The command execution succeeded.
   * - **false**: The command execution failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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

