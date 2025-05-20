// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNotificationForPartnerResponseBody extends $dara.Model {
  /**
   * @example
   * 11111111111111111111111
   */
  errorMsg?: string;
  /**
   * @example
   * 0A011920166449C2FAAE8D179E1704C5
   */
  msgId?: string;
  /**
   * @example
   * 1940A84F-6D90-5764-9119-6279970C6FF5
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      msgId: 'MsgId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      msgId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

