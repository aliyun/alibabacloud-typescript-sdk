// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMTTSChatResponseBodyData extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * xxxx
   */
  data?: Buffer;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * sDwqZnFGwsv9x7yjVwQVKTV4
   */
  requestId?: string;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      sessionId: 'sessionId',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'Buffer',
      message: 'string',
      requestId: 'string',
      sessionId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

