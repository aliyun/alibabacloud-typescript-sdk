// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ActivateQwenEduApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The failure description.
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
   * @remarks
   * The API status or POP error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The activation result. This parameter is null when an error occurs.
   */
  data?: ActivateQwenEduApiResponseBodyData;
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
   * The POP request ID. This parameter is not returned when signature or identity verification fails.
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

