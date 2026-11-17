// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ActivateQwenEduApiResponseBodyData extends $dara.Model {
  failMessage?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failMessage: 'failMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ActivateQwenEduApiResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ActivateQwenEduApiResponseBodyData;
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
      data: ActivateQwenEduApiResponseBodyData,
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

