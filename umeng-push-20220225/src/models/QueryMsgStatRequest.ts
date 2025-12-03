// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMsgStatRequest extends $dara.Model {
  /**
   * @example
   * ufe29y2167046828041801
   */
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

