// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelByMsgIdRequest extends $dara.Model {
  /**
   * @example
   * ucj0242167047014687101
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

