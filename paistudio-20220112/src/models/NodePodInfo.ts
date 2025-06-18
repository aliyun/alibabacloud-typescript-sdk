// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class NodePodInfo extends $dara.Model {
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * 192.168.2.2
   */
  podIP?: string;
  /**
   * @example
   * test
   */
  podName?: string;
  /**
   * @example
   * test
   */
  podNamespace?: string;
  resourceSpec?: ResourceAmount;
  /**
   * @example
   * dlc19de9s6vn3acr
   */
  workloadId?: string;
  /**
   * @example
   * dlc
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      podIP: 'PodIP',
      podName: 'PodName',
      podNamespace: 'PodNamespace',
      resourceSpec: 'ResourceSpec',
      workloadId: 'WorkloadId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      podIP: 'string',
      podName: 'string',
      podNamespace: 'string',
      resourceSpec: ResourceAmount,
      workloadId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

