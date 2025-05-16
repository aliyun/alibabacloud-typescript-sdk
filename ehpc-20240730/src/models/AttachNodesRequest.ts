// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachNodesRequestComputeNode } from "./AttachNodesRequestComputeNode";


export class AttachNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-xxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The compute node information.
   * 
   * This parameter is required.
   */
  computeNode?: AttachNodesRequestComputeNode;
  /**
   * @remarks
   * The name of the queue to which the instance is to be added.
   * 
   * @example
   * comp
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNode: 'ComputeNode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNode: AttachNodesRequestComputeNode,
      queueName: 'string',
    };
  }

  validate() {
    if(this.computeNode && typeof (this.computeNode as any).validate === 'function') {
      (this.computeNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

