// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityCheckBaseInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the security check is enabled.
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the security check is completed.
   * 
   * - **true**: Completed.
   * - **false**: Not completed.
   * 
   * @example
   * true
   */
  taskCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      taskCompleted: 'TaskCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      taskCompleted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityCheckBaseInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * >  200: Success. Other codes (500, 400, etc.): Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: GetSecurityCheckBaseInfoResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B57D35D-9DAC-5393-AE39-07697E37C2E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: Successful.
   * - **false**: Failed.
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
      data: GetSecurityCheckBaseInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

