// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendOpsMessageToTerminalsRequest extends $dara.Model {
  delay?: boolean;
  msg?: string;
  opsAction?: string;
  uuids?: string[];
  waitForAck?: boolean;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      msg: 'Msg',
      opsAction: 'OpsAction',
      uuids: 'Uuids',
      waitForAck: 'WaitForAck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'boolean',
      msg: 'string',
      opsAction: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      waitForAck: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

