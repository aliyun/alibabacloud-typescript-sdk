// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class NodePodInfo extends $dara.Model {
  /**
   * @remarks
   * The occupied GPU indexes.
   */
  GPUIndexes?: number[];
  /**
   * @remarks
   * The Pod status.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The IP address of the Pod.
   * 
   * @example
   * 192.168.2.2
   */
  podIP?: string;
  /**
   * @remarks
   * The Pod name.
   * 
   * @example
   * test
   */
  podName?: string;
  /**
   * @remarks
   * The namespace of the Pod.
   * 
   * @example
   * test
   */
  podNamespace?: string;
  /**
   * @remarks
   * The resource usage information.
   */
  resourceSpec?: ResourceAmount;
  /**
   * @remarks
   * The task ID or service ID.
   * 
   * @example
   * dlc19de9s6vn3acr
   */
  workloadId?: string;
  /**
   * @remarks
   * The sub-product that the Pod belongs to.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      GPUIndexes: 'GPUIndexes',
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
      GPUIndexes: { 'type': 'array', 'itemType': 'number' },
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
    if(Array.isArray(this.GPUIndexes)) {
      $dara.Model.validateArray(this.GPUIndexes);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

