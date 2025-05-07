// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProbeProbeHandler } from "./ProbeProbeHandler";


export class Probe extends $dara.Model {
  failureThreshold?: number;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  probeHandler?: ProbeProbeHandler;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      probeHandler: 'probeHandler',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      probeHandler: ProbeProbeHandler,
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

