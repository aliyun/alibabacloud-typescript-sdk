// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDialogContentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123456^123478
   */
  callId?: string;
  /**
   * @example
   * 2
   */
  callStatus?: number;
  /**
   * @example
   * 示例值示例值
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
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetCallDialogContentResponseBodyData;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * FB0B0481-F13E-16E0-8A7A-1AD2FXXXEF55
   */
  requestId?: string;
  /**
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

