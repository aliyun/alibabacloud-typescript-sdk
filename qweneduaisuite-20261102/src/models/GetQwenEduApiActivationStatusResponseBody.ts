// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQwenEduApiActivationStatusResponseBodyData extends $dara.Model {
  failCode?: string;
  failMessage?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failCode: 'failCode',
      failMessage: 'failMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      failMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQwenEduApiActivationStatusResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetQwenEduApiActivationStatusResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQwenEduApiActivationStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
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

