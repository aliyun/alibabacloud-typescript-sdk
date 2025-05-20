// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceivedMsgMsgContent extends $dara.Model {
  msgData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      msgData: 'msg_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.msgData) {
      $dara.Model.validateMap(this.msgData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

