// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProbeHandler } from "./ProbeHandler";


export class StartupProbe extends $dara.Model {
  /**
   * @remarks
   * The minimum number of consecutive failures that is considered a failure after a successful probe. Default value: 3. Minimum value: 1.
   * 
   * @example
   * 1
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The duration after the container is started before health checks are initiated. For more information, see [Probes](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes).
   * 
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The health check interval. Default value: 10. Unit: seconds. Minimum value: 1.
   * 
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The operation to determine the health of the container.
   */
  probeHandler?: ProbeHandler;
  /**
   * @remarks
   * The timeout period of a health check. Default value: 1. Minimum value: 1. For more information, see [Container probes](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes).
   * 
   * @example
   * 1
   */
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

