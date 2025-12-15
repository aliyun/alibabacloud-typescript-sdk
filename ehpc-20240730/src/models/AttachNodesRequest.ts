// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachNodesRequestComputeNode extends $dara.Model {
  /**
   * @remarks
   * The image ID. This image will be used to replace the original system disk image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp1h765oyqyxxxxxxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The IDs of ECS instances.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-xxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of compute nodes.
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

