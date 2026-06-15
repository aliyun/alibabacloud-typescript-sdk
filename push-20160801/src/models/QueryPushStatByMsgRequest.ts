// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushStatByMsgRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The ID of the pushed message. This ID is returned after a message is pushed.
   * 
   * > Push data is available the next day. You cannot query data for the current day.
   * 
   * This parameter is required.
   * 
   * @example
   * 510427
   */
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

