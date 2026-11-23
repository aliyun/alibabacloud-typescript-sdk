// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQwenEduApiActivationStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The **failure code**. For more information, see 3.4.
   * 
   * @example
   * ACTIVATION_FAILED
   */
  failCode?: string;
  /**
   * @remarks
   * The **failure description**.
   * 
   * @example
   * Service activation failed. Try again later
   */
  failMessage?: string;
  /**
   * @remarks
   * The activation status. Valid values:
   * - ACTIVE: Activated.
   * - ACTIVATING: Activating.
   * - FAILED: Activation failed.
   * 
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
   * @remarks
   * The API status or POP error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The activation result.
   */
  data?: GetQwenEduApiActivationStatusResponseBodyData;
  /**
   * @remarks
   * The request error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The **POP request ID**. This field is not returned if signature verification or identity authentication fails.
   * 
   * @example
   * 5C5E3F0A-2B0E-4F7B-9C55-0E1A6A0E2F11
   */
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

