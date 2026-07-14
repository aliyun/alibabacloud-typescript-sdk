// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DirectNotifyReceiver } from "./DirectNotifyReceiver";


export class SeverityNotifyConfig extends $dara.Model {
  receivers?: DirectNotifyReceiver[];
  sendRecoverNotification?: boolean;
  static names(): { [key: string]: string } {
    return {
      receivers: 'receivers',
      sendRecoverNotification: 'sendRecoverNotification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receivers: { 'type': 'array', 'itemType': DirectNotifyReceiver },
      sendRecoverNotification: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

