// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { $WebSocketUtils }from '@alicloud/openapi-core';


export class EndToEndRealTimeDialogResponse extends $dara.Model {
  webSocketClient?: $WebSocketUtils.WebSocketClient;
  static names(): { [key: string]: string } {
    return {
      webSocketClient: 'webSocketClient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webSocketClient: $WebSocketUtils.WebSocketClient,
    };
  }

  validate() {
    if(this.webSocketClient && typeof (this.webSocketClient as any).validate === 'function') {
      (this.webSocketClient as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

