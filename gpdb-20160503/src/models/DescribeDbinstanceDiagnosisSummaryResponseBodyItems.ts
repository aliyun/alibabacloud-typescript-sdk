// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDiagnosisSummaryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * gp-t4np568qe9710****-master-100984919
   */
  hostname?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 192.168.XX.XX
   */
  nodeAddress?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * -1
   */
  nodeCID?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1
   */
  nodeID?: string;
  /**
   * @remarks
   * The name of the host where the node resides.
   * 
   * @example
   * ap-southeast-1.i-t4n4c4ryr0yr441d****
   */
  nodeName?: string;
  /**
   * @remarks
   * The port number of the node.
   * 
   * @example
   * 3000
   */
  nodePort?: string;
  /**
   * @remarks
   * The initial role of the node. Valid values:
   * 
   * *   **primary**: primary node.
   * *   **mirror**: secondary node.
   * 
   * If the value of this parameter is the same as that of **NodeRole**, no primary/secondary switchover occurs. If the value of this parameter is different from that of **NodeRole**, a primary/secondary switchover occurs.
   * 
   * @example
   * primary
   */
  nodePreferredRole?: string;
  /**
   * @remarks
   * The data synchronization state of the node. Valid values:
   * 
   * *   **Synced**: The node data is synchronized.
   * *   **Not Syncing**: The node data is not synchronized.
   * *   **No sync required**: Data synchronization is not required. This value may be returned only for the coordinator node.
   * 
   * @example
   * Synced
   */
  nodeReplicationMode?: string;
  /**
   * @remarks
   * The current role of the node. Valid values:
   * 
   * *   **primary**: primary node.
   * *   **mirror**: secondary node.
   * 
   * @example
   * primary
   */
  nodeRole?: string;
  /**
   * @remarks
   * The running state of the node. Valid values:
   * 
   * *   **UP**: The node is running.
   * *   **DOWN**: The node is faulty.
   * 
   * @example
   * UP
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **master**: primary coordinator node.
   * *   **slave**: standby coordinator node.
   * *   **segment**: compute node.
   * 
   * @example
   * master
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      nodeAddress: 'NodeAddress',
      nodeCID: 'NodeCID',
      nodeID: 'NodeID',
      nodeName: 'NodeName',
      nodePort: 'NodePort',
      nodePreferredRole: 'NodePreferredRole',
      nodeReplicationMode: 'NodeReplicationMode',
      nodeRole: 'NodeRole',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      nodeAddress: 'string',
      nodeCID: 'string',
      nodeID: 'string',
      nodeName: 'string',
      nodePort: 'string',
      nodePreferredRole: 'string',
      nodeReplicationMode: 'string',
      nodeRole: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

