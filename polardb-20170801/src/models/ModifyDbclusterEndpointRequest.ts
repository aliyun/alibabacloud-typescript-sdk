// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic association of newly added nodes with the cluster endpoint. Valid values:
   * 
   * *   **Enable**: enables automatic association of newly added nodes with the cluster endpoint.
   * *   **Disable** (default): disables automatic association of newly added nodes with the cluster endpoint.
   * 
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the custom cluster endpoint.
   * 
   * @example
   * test
   */
  DBEndpointDescription?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * pe-**************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The advanced configurations of the cluster endpoint, which are in the JSON format. You can configure the consistency level, transaction splitting, and connection pool settings, and specify whether the primary node accepts read requests.
   * 
   * *   The load balancing policy. Format: `{\\"LoadBalancePolicy\\":\\"Load balancing policy\\"}`. Valid values:
   * 
   *     *   **0** (default): connections-based load balancing
   *     *   **1**: active requests-based load balancing
   * 
   * *   Specifies whether to allow the primary node to accept read requests. Format: `{\\"MasterAcceptReads\\":\\"Specification about whether to allow the primary node to accept read requests\\"}`. Valid values:
   * 
   *     *   **on** (default): allows the primary node to accept read requests.
   *     *   **off**: does not allow the primary node to accept read requests.
   * 
   * *   Specifies whether to enable the transaction splitting feature. Format: `{\\"DistributedTransaction\\":\\"Specification about whether to enable the transaction splitting feature\\"}`. Valid values:
   * 
   *     *   **on** (default): enables the transaction splitting feature.
   *     *   **off**: disables the transaction splitting feature.
   * 
   * *   The consistency level. Format: `{\\"ConsistLevel\\":\\"Consistency level\\"}`. Valid values:
   * 
   *     *   **0**: eventual consistency (weak)
   *     *   **1** (default): session consistency (medium)
   *     *   **2**: global consistency (strong)
   * 
   * *   The global consistency timeout. Format: `{\\"ConsistTimeout\\":\\"Global consistency timeout\\"}`. Valid values: 0 to 60,000. Default value: 20. Unit: ms.
   * 
   * *   The session consistency timeout. Format: `{\\"ConsistSessionTimeout\\":\\"Session consistency timeout\\"}`. Valid values: 0 to 60,000. Default value: 0. Unit: ms.
   * 
   * *   The global (or session) consistency timeout policy. Format: `{\\"ConsistTimeoutAction\\":\\"Consistency timeout policy\\"}`. Valid values:
   * 
   *     *   **0** (default): PolarProxy sends read requests to the primary node.
   *     *   **1**: PolarProxy returns the "wait replication complete timeout, please retry" error message to the application.
   * 
   * *   Specifies whether to enable the connection pool feature. Format: `{\\"ConnectionPersist\\":\\"Specification about whether to enable the connection pool feature\\"}`. Valid values:
   * 
   *     *   **off** (default): disables the connection pool feature.
   *     *   **Session**: enables the session-level connection pool.
   *     *   **Transaction**: enables the transaction-level connection pool.
   * 
   * *   Specifies whether to enable the parallel query feature. Format: `{\\"MaxParallelDegree\\":\\"Specification about whether to enable the parallel query feature\\"}`. Valid values:
   * 
   *     *   **on**: enables the parallel query feature.
   *     *   **off** (default): disables the parallel query feature.
   * 
   * *   Specifies whether to enable the automatic request distribution among row store and column store nodes feature. Format: `{\\"EnableHtapImci\\":\\"Specification about whether to enable automatic request distribution among row store and column store nodes feature\\"}`. Valid values:
   * 
   *     *   **on**: enables the automatic request distribution among row store and column store nodes feature.
   *     *   **off** (default): disables the automatic request distribution among row store and column store nodes feature.
   * 
   * *   Specifies whether to enable the overload protection feature. Format: `{\\"EnableOverloadThrottle\\":\\"Specification about whether to enable the overload protection feature\\"}`. Valid values:
   * 
   *     *   **on**: enables the overload protection feature.
   *     *   **off** (default): disables the overload protection feature.
   * 
   * > 
   * 
   * *   You can configure the transaction splitting, connection pool, and overload protection settings, and specify whether the primary node accepts read requests settings for the cluster endpoint of a PolarDB for MySQL cluster only if ReadWriteMode of the cluster endpoint is set to Read and Write (Automatic Read/Write Splitting).
   * 
   * *   If ReadWriteMode of the cluster endpoint of a PolarDB for MySQL cluster is set to **Read-only**, you can specify the **Connections-based Load Balancing** or **Active Request-based Load Balancing** policy for the cluster endpoint. If ReadWriteMode of the cluster endpoint of a PolarDB for MySQL cluster is set to **Read/Write (Automatic Read/Write Splitting)**, you can specify only the **Active Request-based Load Balancing** policy for the cluster endpoint.
   * 
   * *   You can enable automatic request distribution among column store and row store nodes for the cluster endpoint of a PolarDB for MySQL cluster if ReadWriteMode of the cluster endpoint is set to **Read and Write (Automatic Read/Write Splitting)**, or if the ReadWriteMode of the cluster endpoint is set to **Read-only** and the load balancing policy is set to **Active requests-based load balancing**.
   * 
   * *   Only PolarDB for MySQL supports global consistency.
   * 
   * *   You can set the consistency level of the cluster endpoint of a PolarDB for MySQL cluster only to **0** if **ReadWriteMode** of the cluster endpoint is set to **ReadOnly**.
   * 
   * *   You can configure the settings for the consistency level, transaction splitting, and connection pool features, and specify whether the primary node accepts read requests settings at a time. Example: `{\\"ConsistLevel\\":\\"1\\",\\"DistributedTransaction\\":\\"on\\",\\"ConnectionPersist\\":\\"Session\\",\\"MasterAcceptReads\\":\\"on\\"}`.
   * 
   * *   The configuration for transaction splitting is limited by the configuration for the consistency level. For example, if you set the consistency level to **0**, you cannot enable transaction splitting. If you set the consistency level to **1** or **2**, you can enable transaction splitting.
   * 
   * @example
   * {"ConsistLevel":"1","DistributedTransaction":"on","MasterAcceptReads":"off","ConnectionPersist": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The reader nodes to be associated with the endpoint. If you need to specify multiple reader nodes, separate the reader nodes with commas (,). If you do not specify this parameter, the predefined nodes are used by default.
   * 
   * > 
   * 
   * *   You must specify the node ID for each PolarDB for MySQL cluster.
   * 
   * *   You must specify the role name of each node for each PolarDB for PostgreSQL or PolarDB for Oracle cluster. Example: `Writer,Reader1,Reader2`.
   * 
   * *   If you set **ReadWriteMode** to **ReadOnly**, only one node can be associated with the cluster endpoint. If the only node becomes faulty, the cluster endpoint may be unavailable for up to an hour. We recommend that you do not associate only one node with the cluster endpoint in production environments. We recommend that you associate at least two nodes with the cluster endpoint to improve service availability.
   * 
   * *   If you set **ReadWriteMode** to **ReadWrite**, you must associate at least two nodes with the cluster endpoint.
   * 
   *     *   No limits are imposed on the two nodes that you select for each PolarDB for MySQL cluster. If the two nodes are read-only nodes, write requests are forwarded to the primary node.
   *     *   The following limit applies to PolarDB for PostgreSQL and PolarDB for Oracle clusters: One of the selected nodes must be the primary node.
   * 
   * @example
   * pi-**************,pi-*************
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Global consistency timeout policy. Valid values:
   * 
   * *   **0**: sends the request to the primary node.
   * *   **2**: downgrades the consistency level of a query to inconsistent read when a global consistent read in the query times out. No error message is returned to the client.
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * Global consistency timeout.
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * *   **ReadWrite**: The cluster endpoint handles read and write requests. Automatic read/write splitting is enabled.
   * *   **ReadOnly**: The cluster endpoint handles read-only requests.
   * 
   * @example
   * ReadWrite
   */
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the global consistency (high-performance mode) feature for the nodes. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * on
   */
  sccMode?: string;
  static names(): { [key: string]: string } {
    return {
      autoAddNewNodes: 'AutoAddNewNodes',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      nodes: 'Nodes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      polarSccTimeoutAction: 'PolarSccTimeoutAction',
      polarSccWaitTimeout: 'PolarSccWaitTimeout',
      readWriteMode: 'ReadWriteMode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sccMode: 'SccMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAddNewNodes: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      DBEndpointId: 'string',
      endpointConfig: 'string',
      nodes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      polarSccTimeoutAction: 'string',
      polarSccWaitTimeout: 'string',
      readWriteMode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sccMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

