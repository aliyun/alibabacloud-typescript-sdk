// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachNodesShrinkRequest extends $dara.Model {
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
  computeNodeShrink?: string;
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
      computeNodeShrink: 'ComputeNode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNodeShrink: 'string',
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

