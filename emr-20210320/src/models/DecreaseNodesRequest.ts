// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecreaseNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cooldown interval between two batches.
   */
  batchInterval?: number;
  /**
   * @remarks
   * The number of nodes to be removed in a single batch.
   */
  batchSize?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of nodes to scale out. The number of nodes to be scaled out. The value should be less than the number of surviving nodes in the current node group.
   * 
   * @example
   * 3
   */
  decreaseNodeCount?: number;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The array of node IDs. Valid values of array element N: 1 to 500.
   * 
   * @example
   * ["i-bp1cudc25w2bfwl5****"]
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The ID of the region in which you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchInterval: 'BatchInterval',
      batchSize: 'BatchSize',
      clusterId: 'ClusterId',
      decreaseNodeCount: 'DecreaseNodeCount',
      nodeGroupId: 'NodeGroupId',
      nodeIds: 'NodeIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchInterval: 'number',
      batchSize: 'number',
      clusterId: 'string',
      decreaseNodeCount: 'number',
      nodeGroupId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

