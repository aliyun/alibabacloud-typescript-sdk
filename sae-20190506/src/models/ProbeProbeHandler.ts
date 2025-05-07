// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProbeProbeHandlerHttpGet } from "./ProbeProbeHandlerHttpGet";
import { ProbeProbeHandlerTcpSocket } from "./ProbeProbeHandlerTcpSocket";


export class ProbeProbeHandler extends $dara.Model {
  httpGet?: ProbeProbeHandlerHttpGet;
  tcpSocket?: ProbeProbeHandlerTcpSocket;
  static names(): { [key: string]: string } {
    return {
      httpGet: 'httpGet',
      tcpSocket: 'tcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpGet: ProbeProbeHandlerHttpGet,
      tcpSocket: ProbeProbeHandlerTcpSocket,
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

