// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationCancelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A926AE2-4C96-573F-824F-0532960799F8
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
      code: 'number',
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

