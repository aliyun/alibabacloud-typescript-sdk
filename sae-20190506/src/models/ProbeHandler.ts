// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HTTPGetAction } from "./HttpgetAction";
import { TCPSocketAction } from "./TcpsocketAction";


export class ProbeHandler extends $dara.Model {
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
  static names(): { [key: string]: string } {
    return {
      httpGet: 'HttpGet',
      tcpSocket: 'TcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpGet: HTTPGetAction,
      tcpSocket: TCPSocketAction,
    };
  }

  validate() {
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

