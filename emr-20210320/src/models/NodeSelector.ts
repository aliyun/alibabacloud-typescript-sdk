// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSelector extends $dara.Model {
  /**
   * @remarks
   * > This parameter is deprecated. Use `NodeGroupIds` instead.
   * 
   * @example
   * ng-869471354ecd****
   * 
   * @deprecated
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The IDs of the node groups to select.
   */
  nodeGroupIds?: string[];
  /**
   * @remarks
   * > This parameter is deprecated. Use `NodeGroupNames` instead.
   * 
   * @example
   * master-1
   * 
   * @deprecated
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The names of the node groups to select.
   */
  nodeGroupNames?: string[];
  /**
   * @remarks
   * The types of node groups to select. This parameter applies only when `NodeSelectType` is set to `NODE_GROUP` and `NodeGroupIds` is not specified. The array can contain up to 10 elements.
   * 
   * @example
   * ["CORE","TASK"]
   */
  nodeGroupTypes?: string[];
  /**
   * @remarks
   * The names of the nodes to select. This parameter applies only when `NodeSelectType` is set to `NODE`.
   * 
   * @example
   * ["core1-1"]
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The node selection type. Valid values:
   * 
   * - `CLUSTER`: Selects all nodes in the cluster.
   * 
   * - `NODE_GROUP`: Selects nodes by their node group.
   * 
   * - `NODE`: Selects specific nodes by name.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  nodeSelectType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      nodeGroupIds: 'NodeGroupIds',
      nodeGroupName: 'NodeGroupName',
      nodeGroupNames: 'NodeGroupNames',
      nodeGroupTypes: 'NodeGroupTypes',
      nodeNames: 'NodeNames',
      nodeSelectType: 'NodeSelectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeGroupName: 'string',
      nodeGroupNames: { 'type': 'array', 'itemType': 'string' },
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeSelectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    if(Array.isArray(this.nodeGroupNames)) {
      $dara.Model.validateArray(this.nodeGroupNames);
    }
    if(Array.isArray(this.nodeGroupTypes)) {
      $dara.Model.validateArray(this.nodeGroupTypes);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

