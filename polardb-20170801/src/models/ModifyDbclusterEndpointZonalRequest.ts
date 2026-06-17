// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterEndpointZonalRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically add new nodes to this endpoint. Valid values:
   * 
   * - **Enable**: yes
   * 
   * - **Disable**: no (default)
   * 
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The client generates the value, but you must make sure that the value is unique among different requests. The token is case-sensitive and can contain up to 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f******************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
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
   * pe-****************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The advanced configurations of the cluster endpoint, which are specified in the JSON format. You can set the consistency level, transaction splitting, whether the primary node accepts read requests, the connection pool, and more.
   * 
   * - To set the load balancing policy, use the format `{\\"LoadBalancePolicy\\":\\"policy\\"}`. Valid values:
   * 
   *   - **0**: connection-based load balancing (default)
   * 
   *   - **1**: active request-based load balancing
   * 
   * - To specify whether the primary node accepts read requests, use the format `{\\"MasterAcceptReads\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: The primary node accepts read requests (default).
   * 
   *   - **off**: The primary node does not accept read requests.
   * 
   * - To configure transaction splitting, use the format `{\\"DistributedTransaction\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: enables transaction splitting (default)
   * 
   *   - **off**: disables transaction splitting
   * 
   * - To set the consistency level, use the format `{\\"ConsistLevel\\":\\"level\\"}`. Valid values:
   * 
   *   - **0**: eventual consistency (weak)
   * 
   *   - **1**: session consistency (medium) (default)
   * 
   *   - **2**: global consistency (strong)
   * 
   * - To set the timeout period for a global consistency read, use the format `{\\"ConsistTimeout\\":\\"timeout\\"}`. Valid values: 0 to 60000. Default value: 20. Unit: ms.
   * 
   * - To set the timeout period for a session consistency read, use the format `{\\"ConsistSessionTimeout\\":\\"timeout\\"}`. Valid values: 0 to 60000. Default value: 0. Unit: ms.
   * 
   * - To set the policy for a global or session consistency read timeout, use the format `{\\"ConsistTimeoutAction\\":\\"policy\\"}`. Valid values:
   * 
   *   - **0**: Sends the read request to the primary node (default).
   * 
   *   - **1**: The proxy returns a \\`wait replication complete timeout, please retry\\` error message to the application.
   * 
   * - To configure the connection pool, use the format `{\\"ConnectionPersist\\":\\"pool_type\\"}`. Valid values:
   * 
   *   - **off**: disables the connection pool (default)
   * 
   *   - **Session**: enables the session-level connection pool
   * 
   *   - **Transaction**: enables transaction-level connection pooling
   * 
   * - To configure parallel queries, use the format `{\\"MaxParallelDegree\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: enables parallel queries
   * 
   *   - **off**: disables parallel queries (default)
   * 
   * - To configure automatic routing between row store and column store, use the format `{\\"EnableHtapImci\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: enables automatic routing between row store and column store
   * 
   *   - **off**: disables automatic routing between row store and column store (default)
   * 
   * - To specify whether to enable overload protection, use the format `{\\"EnableOverloadThrottle\\":\\"value\\"}`. Valid values:
   * 
   *   - **on**: enables overload protection
   * 
   *   - **off**: disables overload protection (default)
   * 
   * > * You can configure transaction splitting, specify whether the primary node accepts read requests, configure the connection pool, and enable overload protection only when the read/write mode of the cluster endpoint for PolarDB for MySQL is set to **ReadWrite** (automatic read/write splitting).
   * >
   * > * If the read/write mode of a cluster endpoint for PolarDB for MySQL is **ReadOnly**, both connection-based and active request-based load balancing policies are supported. If the read/write mode is **ReadWrite** (automatic read/write splitting), only the active request-based load balancing policy is supported.
   * >
   * > * You can configure automatic routing between row store and column store when the read/write mode of the cluster endpoint for PolarDB for MySQL is **ReadWrite** (automatic read/write splitting), or when the read/write mode is **ReadOnly** and the load balancing policy is active request-based.
   * >
   * > * Only PolarDB for MySQL supports the global consistency level.
   * >
   * > * If you set **ReadWriteMode** to **ReadOnly**, you can set the consistency level only to **0**.
   * >
   * > * You can set the consistency level, transaction splitting, whether the primary node accepts read requests, and the connection pool at the same time. For example: `{\\"ConsistLevel\\":\\"1\\",\\"DistributedTransaction\\":\\"on\\",\\"ConnectionPersist\\":\\"Session\\",\\"MasterAcceptReads\\":\\"on\\"}`.
   * >
   * > * The transaction splitting setting is constrained by the consistency level. For example, if the consistency level is **0**, you cannot enable transaction splitting. If the consistency level is **1** or **2**, you can enable transaction splitting.
   * 
   * @example
   * {\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The read-only nodes to add to the endpoint. Separate multiple node IDs with commas (,). If you do not specify this parameter, the original nodes are retained.
   * 
   * > - For PolarDB for MySQL, specify the node IDs.
   * >
   * > - For PolarDB for PostgreSQL and PolarDB for PostgreSQL (compatible with Oracle), specify the node role names, such as `Writer,Reader1,Reader2`.
   * >
   * > - If you set **ReadWriteMode** to **ReadOnly**, you can attach only one node. However, if this node fails, the endpoint might be unavailable for up to one hour. Do not use this configuration in a production environment. Select at least two nodes to improve availability.
   * >
   * > - If you set **ReadWriteMode** to **ReadWrite**, you must select at least two nodes.
   * >   \\* For PolarDB for MySQL, you can select any two nodes. If both nodes are read-only nodes, write requests are sent to the primary node.
   * >   \\* For PolarDB for PostgreSQL and PolarDB for PostgreSQL (compatible with Oracle), you must include the primary node.
   * 
   * @example
   * pi-**************,pi-*************
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy for a global consistency timeout. Valid values:
   * 
   * - **0**: Sends the request to the primary node.
   * 
   * - **2**: Timeout degradation. If a global consistency read times out, the query is automatically downgraded to a regular request, and the client does not receive an error message.
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
   * - **ReadWrite**: read-write (automatic read/write splitting)
   * 
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
   * - **ON**: enables the feature
   * 
   * - **OFF**: disables the feature
   * 
   * @example
   * OFF
   */
  sccMode?: string;
  static names(): { [key: string]: string } {
    return {
      autoAddNewNodes: 'AutoAddNewNodes',
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

