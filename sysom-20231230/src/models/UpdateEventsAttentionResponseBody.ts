// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventsAttentionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The updated attention level value.
   * 
   * @example
   * 1
   */
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventsAttentionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 44841312-7227-55C9-AE03-D59729BFAE38
   */
  requestId?: string;
  /**
   * @remarks
   * The status code. Valid values:
   * - Success: The authorization is successful.
   * - Other values: The authorization failed. Check the message field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: UpdateEventsAttentionResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance not belong to current user
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UpdateEventsAttentionResponseBodyData,
      message: 'string',
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

