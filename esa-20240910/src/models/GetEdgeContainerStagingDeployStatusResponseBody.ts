// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState extends $dara.Model {
  lastTerminatedReason?: string;
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
  containersReady?: string;
  creationTimestamp?: string;
  initialized?: string;
  phase?: string;
  podRestartState?: GetEdgeContainerStagingDeployStatusResponseBodyPodRestartState;
  ready?: string;
  requestId?: string;
  scheduled?: string;
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

