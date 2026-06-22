// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecreaseNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cooldown time between batches.
   */
  batchInterval?: number;
  /**
   * @remarks
   * The number of nodes to concurrently take offline in a single batch.
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
   * The number of nodes to remove. The value must be less than the number of active nodes in the node group.
   * 
   * @example
   * 3
   */
  decreaseNodeCount?: number;
  /**
   * @remarks
   * The node group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * An array of node IDs. The array can contain from 1 to 500 elements.
   * 
   * @example
   * ["i-bp1cudc25w2bfwl5****"]
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The region ID.
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

