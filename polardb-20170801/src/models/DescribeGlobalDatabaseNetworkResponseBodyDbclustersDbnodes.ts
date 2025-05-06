// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-03-23T21:35:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Writer**: the primary node
   * *   **Reader**: a read-only node
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   **Creating**: The node is being created.
   * *   **Running**: The node is running.
   * *   **Deleting**: The node is being deleted.
   * *   **Rebooting**: The node is restarting.
   * *   **ClassChanging**: The specifications of the node are being changed.
   * *   **NetAddressCreating**: The network connection is being created.
   * *   **NetAddressDeleting**: The network connection is being deleted.
   * *   **NetAddressModifying**: The network connection is being modified.
   * *   **MinorVersionUpgrading**: The minor version of the node is being updated.
   * *   **Maintaining**: The node is being maintained.
   * *   **Switching**: A failover is being performed.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. Each node is assigned a failover priority. The failover priority determines which node is selected as the primary node when a failover occurs. A larger value indicates a higher priority. Valid values: 1 to 15.
   * 
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum input/output operations per second (IOPS).
   * 
   * @example
   * 32000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      failoverPriority: 'FailoverPriority',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      failoverPriority: 'number',
      maxConnections: 'number',
      maxIOPS: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

