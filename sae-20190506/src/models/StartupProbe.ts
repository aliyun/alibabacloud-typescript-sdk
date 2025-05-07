// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProbeHandler } from "./ProbeHandler";


export class StartupProbe extends $dara.Model {
  failureThreshold?: number;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  probeHandler?: ProbeHandler;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'FailureThreshold',
      initialDelaySeconds: 'InitialDelaySeconds',
      periodSeconds: 'PeriodSeconds',
      probeHandler: 'ProbeHandler',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      probeHandler: ProbeHandler,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.probeHandler && typeof (this.probeHandler as any).validate === 'function') {
      (this.probeHandler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

