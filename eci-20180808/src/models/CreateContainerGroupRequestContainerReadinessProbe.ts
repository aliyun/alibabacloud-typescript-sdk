// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestContainerReadinessProbeExec } from "./CreateContainerGroupRequestContainerReadinessProbeExec";
import { CreateContainerGroupRequestContainerReadinessProbeHttpGet } from "./CreateContainerGroupRequestContainerReadinessProbeHttpGet";
import { CreateContainerGroupRequestContainerReadinessProbeTcpSocket } from "./CreateContainerGroupRequestContainerReadinessProbeTcpSocket";


export class CreateContainerGroupRequestContainerReadinessProbe extends $dara.Model {
  exec?: CreateContainerGroupRequestContainerReadinessProbeExec;
  failureThreshold?: number;
  httpGet?: CreateContainerGroupRequestContainerReadinessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateContainerGroupRequestContainerReadinessProbeTcpSocket;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
      failureThreshold: 'FailureThreshold',
      httpGet: 'HttpGet',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      successThreshold: 'SuccessThreshold',
      tcpSocket: 'TcpSocket',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: CreateContainerGroupRequestContainerReadinessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateContainerGroupRequestContainerReadinessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateContainerGroupRequestContainerReadinessProbeTcpSocket,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
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

