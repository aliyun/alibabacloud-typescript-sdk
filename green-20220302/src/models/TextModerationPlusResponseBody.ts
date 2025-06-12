// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextModerationPlusResponseBodyData } from "./TextModerationPlusResponseBodyData";


export class TextModerationPlusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: TextModerationPlusResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationPlusResponseBodyData,
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

