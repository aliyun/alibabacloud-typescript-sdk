// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether new nodes are automatically added to the endpoint. Valid values: 
   * 
   * - **Enable**: New nodes are automatically added.
   * - **Disable**: New nodes are not automatically added. (Default)
   * 
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  DBEndpointDescription?: string;
  /**
   * @remarks
   * The cluster endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pe-**************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The advanced configuration of the cluster endpoint in JSON format. You can configure the consistency level, transaction splitting, whether the primary node accepts read requests, connection pooling, and other settings.
   * 
   * * To configure the load balancing policy, use the format `{\\"LoadBalancePolicy\\":\\"Load balancing policy\\"}`. Valid values:
   *     * **0**: connection-based load balancing. (Default)
   *     * **1**: active-request-based load balancing.
   * 
   * * To configure whether the primary node accepts read requests, use the format `{\\"MasterAcceptReads\\":\\"Whether the primary node accepts reads\\"}`. Valid values:
   *     * **on**: The primary node accepts read requests. (Default)
   *     * **off**: The primary node does not accept read requests.
   * 
   * * To configure transaction splitting, use two parameters together in the format `{\\"DistributedTransaction\\":\\"Transaction splitting\\",\\"TrxSplitAggressive\\":\\"Transaction splitting\\"}`. Valid values:
   *     * **Disabled**: DistributedTransaction=off, TrxSplitAggressive=off
   *     * **Read request splitting before first write request**: DistributedTransaction=on, TrxSplitAggressive=off
   *     * **Full transaction splitting**: DistributedTransaction=on, TrxSplitAggressive=on
   * 
   * * To configure the consistency level, use the format `{\\"ConsistLevel\\":\\"Consistency level\\"}`. Valid values:
   *     * **0**: eventual consistency (weak).
   *     * **1**: session consistency (medium). (Default)
   *     * **2**: global consistency (strong).
   * 
   * * To configure the global consistency read timeout period, use the format `{\\"ConsistTimeout\\":\\"Global consistency read timeout\\"}`. Valid values: 0 to 60000. Default value: 20. Unit: ms.
   * 
   * * To configure the session consistency read timeout period, use the format `{\\"ConsistSessionTimeout\\":\\"Session consistency read timeout\\"}`. Valid values: 0 to 60000. Default value: 0. Unit: ms.
   * 
   * * To configure the global (or session) consistency read timeout policy, use the format `{\\"ConsistTimeoutAction\\":\\"Global consistency read timeout policy\\"}`. Valid values:
   *     * **0**: Forward the read request to the primary node. (Default)
   *     * **1**: The proxy returns an error message `wait replication complete timeout, please retry` to the application.
   * 
   * * To configure the connection pool, use the format `{\\"ConnectionPersist\\":\\"Connection pool\\"}`. Valid values:
   *     * **off**: Disable the connection pool. (Default)
   *     * **Session**: Enable the session-level connection pool.
   *     * **Transaction**: Enable the transaction-level connection pooling.
   * 
   * * To configure on-demand connection establishment, use the format `{\\"ConnectAllBackends\\":\\"On-demand connection\\"}`. Valid values:
   *     * **on**: Enabled.
   *     * **off**: Disabled. (Default)
   * 
   * * To configure parallel query, use the format `{\\"MaxParallelDegree\\":\\"Parallel query\\"}`. Valid values:
   *     * **on**: Enable parallel query.
   *     * **off**: Disable parallel query. (Default)
   * 
   * * To configure automatic request distribution among row offload reads from primary nodes, use the format `{\\"EnableHtapImci\\":\\"Row store/column store automatic request distribution\\"}`. Valid values:
   *     * **on**: Enable automatic request distribution among row offload reads from primary nodes.
   *     * **off**: Disable automatic request distribution among row offload reads from primary nodes. (Default)
   * 
   * * To configure whether to enable overload protection, use the format `{\\"EnableOverloadThrottle\\":\\"Whether to enable overload protection\\"}`. Valid values:
   *     * **on**: Enable overload protection.
   *     * **off**: Disable overload protection. (Default)
   * 
   * * To configure node weights, use the format `{\\"NodesWeight\\":{\\"Node ID\\":\\"Weight value\\"}}`.
   * 
   * > * Transaction splitting, whether the primary node accepts read requests, connection pooling, and overload protection can be configured only when the read/write mode of the PolarDB for MySQL cluster endpoint is **read/write (automatic read/write splitting)**.
   * > * When the read/write mode of the PolarDB for MySQL cluster endpoint is **read-only**, both **connection-based load balancing** and **active-request-based load balancing** policies are supported. The **read/write (automatic read/write splitting)** mode supports only the **active-request-based load balancing** policy.
   * > * Automatic request distribution among row offload reads from primary nodes can be configured when the read/write mode of the PolarDB for MySQL cluster endpoint is **read/write (automatic read/write splitting)**, or when the read/write mode is **read-only** and the load balancing policy is **active-request-based load balancing**.
   * > * Only PolarDB for MySQL supports setting the consistency level to global consistency.
   * > * If **ReadWriteMode** is set to **ReadOnly**, the consistency level can only be set to **0**.
   * > * You can configure the consistency level, transaction splitting, whether the primary node accepts read requests, and connection pooling at the same time. Example: `{\\"ConsistLevel\\":\\"1\\",\\"DistributedTransaction\\":\\"on\\",\\"ConnectionPersist\\":\\"Session\\",\\"MasterAcceptReads\\":\\"on\\"}`.
   * > * Transaction splitting is constrained by the consistency level. For example, transaction splitting cannot be enabled when the consistency level is **0**. Transaction splitting can be enabled when the consistency level is **1** or **2**.
   * 
   * @example
   * {"ConsistLevel":"1","DistributedTransaction":"on","MasterAcceptReads":"off","ConnectionPersist": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The read load nodes to add to the target endpoint. Separate multiple nodes with commas (,). Default value: the existing nodes.
   * 
   * > * For PolarDB for MySQL, specify node IDs.
   * > * For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Compatible with Oracle), specify node role names, such as `Writer,Reader1,Reader2`.
   * > * If **ReadWriteMode** is set to **ReadOnly**, you can mount only one node. However, if this node fails, the endpoint may be unavailable for up to 1 hour. Do not use this configuration in production environments. Select at least 2 nodes to improve availability.
   * > * If **ReadWriteMode** is set to **ReadWrite**, select at least 2 nodes.
   * >     * PolarDB for MySQL allows you to select any two nodes. If both nodes are read-only nodes, write requests are forwarded to the primary node.
   * >     * PolarDB for PostgreSQL and PolarDB for PostgreSQL (Compatible with Oracle) require the primary node to be included.
   * 
   * @example
   * pi-**************,pi-*************
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The timeout policy for global consistency. Valid values:
   * 
   * - **0**: Sends the request to the primary node.
   * 
   * - **2**: Timeout degradation. When the global consistency read times out, the query automatically degrades to regular requests, and the client does not receive an error message.
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * The timeout period for global consistency.
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * - **ReadWrite**: read/write (automatic read/write splitting)
   * - **ReadOnly**: read-only
   * 
   * @example
   * ReadWrite
   */
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the global consistency (performance schema) feature for the node. Valid values:
   * 
   * - **ON**: Enabled.
   * 
   * - **OFF**: Disabled.
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

