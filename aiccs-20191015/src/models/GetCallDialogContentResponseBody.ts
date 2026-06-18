// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDialogContentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * 123456^123478
   */
  callId?: string;
  /**
   * @remarks
   * The call status.
   * 
   * > Valid values:
   * >
   * > - `0`: Not connected
   * >
   * > - `1`: Connected
   * >
   * > - `2`: Disconnected
   * 
   * @example
   * 2
   */
  callStatus?: number;
  /**
   * @remarks
   * The dialog content.
   * 
   * @example
   * [{\\"content\\":\\"您好。\\",\\"role\\":\\"assistant\\"},{\\"content\\":\\"不用了。\\",\\"role\\":\\"user\\"},{\\"content\\":\\"呃，不用了，再见，谢谢。\\",\\"role\\":\\"user\\"}]
   */
  dialogContent?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callStatus: 'CallStatus',
      dialogContent: 'DialogContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callStatus: 'number',
      dialogContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallDialogContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial. Returned only when RAM authentication fails.
   * 
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetCallDialogContentResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB0B0481-F13E-16E0-8A7A-1AD2FXXXEF55
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetCallDialogContentResponseBodyData,
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

