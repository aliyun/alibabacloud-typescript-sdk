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
   *     * **0**: connection-based load balancing (default)
   *     * **1**: active-request-based load balancing
   * 
   * * To configure whether the primary node accepts read requests, use the format `{\\"MasterAcceptReads\\":\\"Whether the primary node accepts reads\\"}`. Valid values:
   *     * **on**: The primary node accepts read requests. (Default)
   *     * **off**: The primary node does not accept read requests.
   * 
   * * To configure transaction splitting, use the format `{\\"DistributedTransaction\\":\\"Transaction splitting\\"}`. Valid values:
   *     * **on**: Transaction splitting is enabled. (Default)
   *     * **off**: Transaction splitting is disabled.
   * 
   * * To configure the consistency level, use the format `{\\"ConsistLevel\\":\\"Consistency level\\"}`. Valid values:
   *     * **0**: eventual consistency (weak)
   *     * **1**: session consistency (medium) (default)
   *     * **2**: global consistency (strong)
   * 
   * * To configure the global consistency read timeout period, use the format `{\\"ConsistTimeout\\":\\"Global consistency read timeout\\"}`. Valid values: 0 to 60000. Default value: 20. Unit: ms.
   * 
   * * To configure the session consistency read timeout period, use the format `{\\"ConsistSessionTimeout\\":\\"Session consistency read timeout\\"}`. Valid values: 0 to 60000. Default value: 0. Unit: ms.
   * 
   * * To configure the global (or session) consistency read timeout policy, use the format `{\\"ConsistTimeoutAction\\":\\"Global consistency read timeout policy\\"}`. Valid values:
   *     * **0**: Forward the read request to the primary node. (Default)
   *     * **1**: The proxy returns the error message `wait replication complete timeout, please retry` to the application.
   * 
   * * To configure connection pooling, use the format `{\\"ConnectionPersist\\":\\"Connection pool\\"}`. Valid values:
   *     * **off**: Connection pooling is disabled. (Default)
   *     * **Session**: Session-level connection pooling is enabled.
   *     * **Transaction**: Transaction-level connection pooling is enabled.
   * 
   * * To configure parallel query, use the format `{\\"MaxParallelDegree\\":\\"Parallel query\\"}`. Valid values:
   *     * **on**: Parallel query is enabled.
   *     * **off**: Parallel query is disabled. (Default)
   * 
   * * To configure automatic request distribution among row offload reads from primary nodes, use the format `{\\"EnableHtapImci\\":\\"Row store/column store automatic request distribution\\"}`. Valid values:
   *     * **on**: Automatic request distribution among row offload reads from primary nodes is enabled.
   *     * **off**: Automatic request distribution among row offload reads from primary nodes is disabled. (Default)
   * 
   * 
   * * To configure overload protection, use the format `{\\"EnableOverloadThrottle\\":\\"Whether to enable overload protection\\"}`. Valid values:
   *     * **on**: Overload protection is enabled.
   *     * **off**: Overload protection is disabled. (Default)
   * 
   * * To configure node weights, use the format `{\\"NodesWeight\\":{\\"Node ID\\":\\"Weight value\\"}}`.
   * 
   * > * Transaction splitting, whether the primary node accepts read requests, connection pooling, and overload protection can be configured only when the read/write mode of the PolarDB for MySQL cluster endpoint is **ReadWrite (automatic read/write splitting)**.
   * > * When the read/write mode of the PolarDB for MySQL cluster endpoint is **ReadOnly**, both **connection-based load balancing** and **active-request-based load balancing** are supported. When the read/write mode is **ReadWrite (automatic read/write splitting)**, only **active-request-based load balancing** is supported.
   * > * Automatic request distribution among row offload reads from primary nodes can be configured when the read/write mode of the PolarDB for MySQL cluster endpoint is **ReadWrite (automatic read/write splitting)**, or when the read/write mode is **ReadOnly** and the load balancing policy is **active-request-based load balancing**.
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
   * The read load nodes to add to the endpoint. Separate multiple nodes with commas (,). Default value: the existing nodes.
   * 
   * > * For PolarDB for MySQL, specify node IDs.
   * > * For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Compatible with Oracle), specify node role names, such as `Writer,Reader1,Reader2`.
   * > * If **ReadWriteMode** is set to **ReadOnly**, you can mount only one node. However, if this node fails, the endpoint may be unavailable for up to 1 hour. Do not use this configuration in production environments. Mount at least 2 nodes to improve availability.
   * > * If **ReadWriteMode** is set to **ReadWrite**, select at least 2 nodes.
   *     * For PolarDB for MySQL, you can select any two nodes. If both nodes are read-only nodes, write requests are forwarded to the primary node.
   *     * For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Compatible with Oracle), the primary node must be included.
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
   * - **2**: Timeout degradation. When the global consistency read times out, the query is automatically degraded to regular requests, and the client does not receive an error message.
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
   * Specifies whether to enable the global consistency (high-performance mode) feature for the node. Valid values:
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

