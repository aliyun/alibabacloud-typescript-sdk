// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiscoverEventSourceResponseBodyData } from "./DiscoverEventSourceResponseBodyData";


export class DiscoverEventSourceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: DiscoverEventSourceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * C7043799-F4DA-5290-9249-97C35987****
   */
  requestId?: string;
  /**
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
      data: DiscoverEventSourceResponseBodyData,
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

