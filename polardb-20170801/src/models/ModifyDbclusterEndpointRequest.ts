// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically add new nodes to the endpoint. Valid values:
   * 
   * - **Enable**: Automatically adds new nodes.
   * 
   * - **Disable**: Does not automatically add new nodes. This is the default value.
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
   * The ID of the cluster endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * pe-**************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The advanced configurations of the cluster endpoint in JSON format. You can set the consistency level, transaction splitting, whether the primary node accepts read requests, the connection pool, and other settings.
   * 
   * - Sets the load balancing policy. Format: `{\\"LoadBalancePolicy\\":\\"policy\\"}`. Valid values:
   * 
   *   - **0**: Connections-based load balancing (default)
   * 
   *   - **1**: Active requests-based load balancing
   * 
   * - Specifies whether the primary node accepts read requests. Format: `{\\"MasterAcceptReads\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: The primary node accepts read requests (default).
   * 
   *   - **off**: The primary node does not accept read requests.
   * 
   * - Enables or disables transaction splitting. Format: `{\\"DistributedTransaction\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: Enables transaction splitting (default).
   * 
   *   - **off**: Disables transaction splitting.
   * 
   * - Sets the consistency level. Format: `{\\"ConsistLevel\\":\\"level\\"}`. Valid values:
   * 
   *   - **0**: Eventual consistency (weak)
   * 
   *   - **1**: Session consistency (medium) (default)
   * 
   *   - **2**: Global consistency (strong)
   * 
   * - Sets the timeout period for a global consistency read. Format: `{\\"ConsistTimeout\\":\\"timeout\\"}`. Valid values: 0 to 60000. Default value: 20. Unit: ms.
   * 
   * - Sets the timeout period for a session consistency read. Format: `{\\"ConsistSessionTimeout\\":\\"timeout\\"}`. Valid values: 0 to 60000. Default value: 0. Unit: ms.
   * 
   * - Sets the policy for handling timeouts of global or session consistency reads. Format: `{\\"ConsistTimeoutAction\\":\\"policy\\"}`. Valid values:
   * 
   *   - **0**: Forwards read requests to the primary node (default).
   * 
   *   - **1**: The proxy returns the error message \\`wait replication complete timeout, please retry\\` to the application.
   * 
   * - Sets the connection pool type. Format: `{\\"ConnectionPersist\\":\\"type\\"}`. Valid values:
   * 
   *   - **off**: Disables the connection pool (default).
   * 
   *   - **Session**: Enables the session-level connection pool.
   * 
   *   - **Transaction**: Enables the transaction-level connection pool.
   * 
   * - Enables or disables parallel query. Format: `{\\"MaxParallelDegree\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: Enables parallel query.
   * 
   *   - **off**: Disables parallel query (default).
   * 
   * - Enables or disables automatic routing of requests to the row store or column store. Format: `{\\"EnableHtapImci\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: Enables automatic routing.
   * 
   *   - **off**: Disables automatic routing (default).
   * 
   * - Enables or disables overload protection. Format: `{\\"EnableOverloadThrottle\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: Enables overload protection.
   * 
   *   - **off**: Disables overload protection (default).
   * 
   * > * You can set transaction splitting, whether the primary node accepts read requests, the connection pool, and overload protection only when the read/write mode of the cluster endpoint for PolarDB for MySQL is set to ReadWrite (automatic read/write splitting).
   * >
   * > * If the read/write mode of a cluster endpoint for PolarDB for MySQL is **ReadOnly**, both **connections-based** and **active requests-based** load balancing policies are supported. If the read/write mode is **ReadWrite** (automatic read/write splitting), only the **active requests-based** load balancing policy is supported.
   * >
   * > * You can enable automatic routing to the row store or column store if the read/write mode of the cluster endpoint for PolarDB for MySQL is **ReadWrite** (automatic read/write splitting), or if the read/write mode is **ReadOnly** and the load balancing policy is **active requests-based**.
   * >
   * > * Only PolarDB for MySQL supports global consistency.
   * >
   * > * If you set the **ReadWriteMode** parameter to **ReadOnly**, you can only set the consistency level to **0**.
   * >
   * > * You can set the consistency level, transaction splitting, whether the primary node accepts read requests, and the connection pool at the same time. For example: `{\\"ConsistLevel\\":\\"1\\",\\"DistributedTransaction\\":\\"on\\",\\"ConnectionPersist\\":\\"Session\\",\\"MasterAcceptReads\\":\\"on\\"}`.
   * >
   * > * The transaction splitting setting is constrained by the consistency level. For example, you cannot enable transaction splitting if the consistency level is **0** (eventual consistency). You can enable transaction splitting if the consistency level is **1** (session consistency) or **2** (global consistency).
   * 
   * @example
   * {"ConsistLevel":"1","DistributedTransaction":"on","MasterAcceptReads":"off","ConnectionPersist": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The nodes to be added to the endpoint for read request distribution. Separate multiple node IDs with commas (,). The original nodes are used by default.
   * 
   * > - For PolarDB for MySQL, specify the node IDs.
   * >
   * > - For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle Compatible), specify the node roles, such as `Writer,Reader1,Reader2`.
   * >
   * > - If you set **ReadWriteMode** to **ReadOnly**, you can attach only one node. However, if this node fails, the endpoint may be unavailable for up to one hour. Do not use this configuration in a production environment. Select at least two nodes to improve availability.
   * >
   * > - If you set **ReadWriteMode** to **ReadWrite**, you must select at least two nodes.
   * >   \\* For PolarDB for MySQL, you can select any two nodes. If both nodes are read-only nodes, write requests are sent to the primary node.
   * >   \\* For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle Compatible), you must include the primary node.
   * 
   * @example
   * pi-**************,pi-*************
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy for handling global consistency timeouts. Valid values:
   * 
   * - **0**: Forwards the request to the primary node.
   * 
   * - **2**: Degrades the request. If a global consistency read times out, the query is automatically degraded to a regular request. The client does not receive an error message.
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
   * - **ReadWrite**: Read/write (automatic read/write splitting)
   * 
   * - **ReadOnly**: Read-only
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
   * - **ON**: Enable
   * 
   * - **OFF**: Disable
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

