// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEciScalingConfigurationRequestContainersLivenessProbeExec } from "./CreateEciScalingConfigurationRequestContainersLivenessProbeExec";
import { CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet } from "./CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet";
import { CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket } from "./CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket";


export class CreateEciScalingConfigurationRequestContainersLivenessProbe extends $dara.Model {
  exec?: CreateEciScalingConfigurationRequestContainersLivenessProbeExec;
  failureThreshold?: number;
  httpGet?: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket;
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
      exec: CreateEciScalingConfigurationRequestContainersLivenessProbeExec,
      failureThreshold: 'number',
      httpGet: CreateEciScalingConfigurationRequestContainersLivenessProbeHttpGet,
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      tcpSocket: CreateEciScalingConfigurationRequestContainersLivenessProbeTcpSocket,
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

