// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the full-featured replica.
   * 
   * @example
   * 1
   */
  fullCopyId?: number;
  /**
   * @remarks
   * The ID of the replica.
   * 
   * @example
   * cn-hangzhou-h-z0
   */
  logicalZone?: string;
  /**
   * @remarks
   * The ID of the replica node.
   * 
   * @example
   * 1
   */
  nodeCopyId?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * i-bp16niirq4zdmgvm****
   */
  nodeId?: string;
  /**
   * @remarks
   * The information about node resources.
   */
  nodeResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * ONLINE
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The ID of the read-only replica.
   * 
   * @example
   * 1
   */
  readOnlyCopyId?: number;
  /**
   * @remarks
   * The type of the read-only replica.
   * 
   * @example
   * ROW_STORE
   */
  readOnlyReplicaType?: string;
  /**
   * @remarks
   * The type of the replica. Valid values: 
   * * FULL. 
   * * READONLY.
   * 
   * @example
   * FULL
   */
  replicaType?: string;
  static names(): { [key: string]: string } {
    return {
      fullCopyId: 'FullCopyId',
      logicalZone: 'LogicalZone',
      nodeCopyId: 'NodeCopyId',
      nodeId: 'NodeId',
      nodeResource: 'NodeResource',
      nodeStatus: 'NodeStatus',
      readOnlyCopyId: 'ReadOnlyCopyId',
      readOnlyReplicaType: 'ReadOnlyReplicaType',
      replicaType: 'ReplicaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullCopyId: 'number',
      logicalZone: 'string',
      nodeCopyId: 'number',
      nodeId: 'string',
      nodeResource: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource,
      nodeStatus: 'string',
      readOnlyCopyId: 'number',
      readOnlyReplicaType: 'string',
      replicaType: 'string',
    };
  }

  validate() {
    if(this.nodeResource && typeof (this.nodeResource as any).validate === 'function') {
      (this.nodeResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

