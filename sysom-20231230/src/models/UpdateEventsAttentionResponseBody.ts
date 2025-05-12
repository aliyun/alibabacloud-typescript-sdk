// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventsAttentionResponseBodyData } from "./UpdateEventsAttentionResponseBodyData";


export class UpdateEventsAttentionResponseBody extends $dara.Model {
  /**
   * @example
   * 44841312-7227-55C9-AE03-D59729BFAE38
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpdateEventsAttentionResponseBodyData;
  /**
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

