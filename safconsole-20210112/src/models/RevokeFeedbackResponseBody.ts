// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeFeedbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface status or POP error code. Value explanations are as follows: 2xx: Success. 3xx: Redirect. 4xx: Request error. 5xx: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Public parameter, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

