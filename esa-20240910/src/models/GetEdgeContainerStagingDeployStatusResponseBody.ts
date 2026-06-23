// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState extends $dara.Model {
  /**
   * @remarks
   * The reason for the last restart.
   * 
   * @example
   * OOMKilled
   */
  lastTerminatedReason?: string;
  /**
   * @remarks
   * The number of restarts.
   * 
   * @example
   * 1
   */
  restartCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTerminatedReason: 'LastTerminatedReason',
      restartCount: 'RestartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTerminatedReason: 'string',
      restartCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerStagingDeployStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the container status is ready. Valid values:
   * 
   * - **ok**: Ready.
   * 
   * - **unready**: Not ready.
   * 
   * @example
   * ok
   */
  containersReady?: string;
  /**
   * @remarks
   * The creation time (UNIX timestamp).
   * 
   * @example
   * 2024-09-24T06:46:35Z
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The container initialization status. Valid values:
   * 
   * - **ok**: Succeeded.
   * 
   * - **unready**: Not completed.
   * 
   * @example
   * ok
   */
  initialized?: string;
  /**
   * @remarks
   * The status of the container in the staging environment. Valid values:
   * - NoContainer: no container.
   * - Pending: pending deployment.
   * - ContainerCreating: the container is being created.
   * - Running: running.
   * - Succeeded: completed.
   * - ImagePullBackOff: image pull failed.
   * - CrashLoopBackOff: abnormal container startup.
   * - Failed: failed.
   * - Unknown: unknown.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The container restart status.
   */
  podRestartState?: GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState;
  /**
   * @remarks
   * Indicates whether the container is ready to receive traffic. Valid values:
   * 
   * - **ok**: Ready.
   * 
   * - **unready**: Not ready.
   * 
   * @example
   * ok
   */
  ready?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F2C992B-3FE2-5EBB-A61F-F9DD4EB257DA
   */
  requestId?: string;
  /**
   * @remarks
   * The container scheduling status. Valid values:
   * 
   * - **ok**: Succeeded.
   * 
   * - **unready**: Not completed.
   * 
   * @example
   * ok
   */
  scheduled?: string;
  /**
   * @remarks
   * The list of VIPs.
   */
  VIPs?: string[];
  static names(): { [key: string]: string } {
    return {
      containersReady: 'ContainersReady',
      creationTimestamp: 'CreationTimestamp',
      initialized: 'Initialized',
      phase: 'Phase',
      podRestartState: 'PodRestartState',
      ready: 'Ready',
      requestId: 'RequestId',
      scheduled: 'Scheduled',
      VIPs: 'VIPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containersReady: 'string',
      creationTimestamp: 'string',
      initialized: 'string',
      phase: 'string',
      podRestartState: GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState,
      ready: 'string',
      requestId: 'string',
      scheduled: 'string',
      VIPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.podRestartState && typeof (this.podRestartState as any).validate === 'function') {
      (this.podRestartState as any).validate();
    }
    if(Array.isArray(this.VIPs)) {
      $dara.Model.validateArray(this.VIPs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

