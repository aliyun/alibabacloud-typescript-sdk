// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState } from "./GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState";


export class GetEdgeContainerStagingDeployStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the container is ready.
   * 
   * *   ok
   * *   unready
   * 
   * @example
   * ok
   */
  containersReady?: string;
  /**
   * @remarks
   * The time when the container was created. The value is a timestamp.
   * 
   * @example
   * 2024-09-24T06:46:35Z
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The initialization status of the container.
   * 
   * *   ok
   * *   unready
   * 
   * @example
   * ok
   */
  initialized?: string;
  /**
   * @remarks
   * The status of the container in the staging environment.
   * 
   * *   NoContainer: created.
   * *   Running: running.
   * *   Failed: abnormal.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The details of container restart.
   */
  podRestartState?: GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState;
  /**
   * @remarks
   * Indicates whether domain names are associated with the container.
   * 
   * *   ok
   * *   unready
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
   * The scheduling status of the container.
   * 
   * *   ok
   * *   unready
   * 
   * @example
   * ok
   */
  scheduled?: string;
  /**
   * @remarks
   * The virtual IP addresses.
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

