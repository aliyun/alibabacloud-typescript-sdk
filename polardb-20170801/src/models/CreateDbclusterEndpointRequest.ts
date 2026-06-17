// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically add new nodes to the endpoint. Valid values:
   * 
   * - **Enable**: Automatically adds new nodes to the endpoint.
   * 
   * - **Disable** (default): Does not automatically add new nodes to the endpoint.
   * 
   * @example
   * Disable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request. The token must be unique, case-sensitive, and a maximum of 64 ASCII characters.
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
   * The name of the custom cluster endpoint.
   * 
   * @example
   * test
   */
  DBEndpointDescription?: string;
  /**
   * @remarks
   * The advanced configurations for the custom cluster endpoint, specified as a JSON string. You can configure features such as consistency level, transaction splitting, whether the primary node accepts read requests, connection pool, and load balancing policy.
   * 
   * - Specifies the load balancing policy. The format is {"LoadBalancePolicy":"policy"}. Valid values:
   * 
   *   - **0**: connections-based load balancing (default).
   * 
   *   - **1**: active requests-based load balancing.
   * 
   * - Specifies the consistency level. The format is `{"ConsistLevel":"level"}`. Valid values:
   * 
   *   - **0**: eventual consistency.
   * 
   *   - **1**: session consistency (default).
   * 
   *   - **2**: global consistency.
   * 
   * - Specifies whether to enable transaction splitting. The format is `{"DistributedTransaction":"status"}`. Valid values:
   * 
   *   - **on**: enables transaction splitting (default).
   * 
   *   - **off**: disables transaction splitting.
   * 
   * - Specifies whether the primary node accepts read requests. The format is `{"MasterAcceptReads":"status"}`. Valid values:
   * 
   *   - **on**: The primary node accepts read requests.
   * 
   *   - **off**: The primary node does not accept read requests (default).
   * 
   * - Specifies whether to enable the connection pool. The format is `{"ConnectionPersist":"status"}`. Valid values:
   * 
   *   - **off**: disables the connection pool (default).
   * 
   *   - **Session**: enables the session-level connection pool.
   * 
   *   - **Transaction**: enables the transaction-level connection pool.
   * 
   * - Specifies the degree of parallelism for a parallel query. The format is {"MaxParallelDegree":"degree"}. Valid values:
   * 
   *   - A specific integer that specifies the degree of parallelism. For example: "MaxParallelDegree":"2".
   * 
   *   - **off**: disables parallel query (default).
   * 
   * - Specifies whether to enable automatic routing between row store and column store. The format is {"EnableHtapImci":"status"}. Valid values:
   * 
   *   - **on**: enables automatic routing.
   * 
   *   - **off**: disables automatic routing (default).
   * 
   * - Specifies whether to enable overload protection. The format is {"EnableOverloadThrottle":"status"}. Valid values:
   * 
   *   - **on**: enables overload protection.
   * 
   *   - **off**: disables overload protection (default).
   * 
   * > * You can configure transaction splitting, whether the primary node accepts read requests, the connection pool, and overload protection only for a PolarDB for MySQL endpoint in **ReadWrite** (automatic read/write splitting) mode.
   * >
   * > * A PolarDB for MySQL cluster endpoint in **ReadOnly** mode supports both **connections-based load balancing** and **active requests-based load balancing**. An endpoint in **ReadWrite** (automatic read/write splitting) mode supports only **active requests-based load balancing**.
   * >
   * > * You can enable automatic routing between row store and column store if the read/write mode of the cluster endpoint for PolarDB for MySQL is **ReadWrite** (automatic read/write splitting), or if the read/write mode is **ReadOnly** and the load balancing policy is **active requests-based load balancing**.
   * >
   * > * Only PolarDB for MySQL clusters support global consistency.
   * >
   * > * If you set **ReadWriteMode** to **ReadOnly**, the consistency level must be **0** (eventual consistency).
   * >
   * > * You can configure the consistency level, transaction splitting, whether the primary node accepts read requests, and the connection pool at the same time. Example: `{"ConsistLevel":"1","DistributedTransaction":"on","ConnectionPersist":"Session","MasterAcceptReads":"on"}`.
   * >
   * > * The setting for transaction splitting depends on the consistency level. For example, if you set the consistency level to **0** (eventual consistency), you cannot enable transaction splitting. If you set the consistency level to **1** (session consistency) or **2** (global consistency), you can enable transaction splitting.
   * 
   * @example
   * {"ConsistLevel": "1","DistributedTransaction": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The type of the custom cluster endpoint. Set the value to **Custom**.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The nodes to associate with the endpoint. Separate multiple node IDs with a comma (,). If you omit this parameter, all nodes in the cluster are added by default.
   * 
   * > - For a PolarDB for MySQL cluster, specify the node IDs.
   * >
   * > - For a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (compatible with Oracle) cluster, specify the roles of the nodes, such as `Writer,Reader1,Reader2`.
   * >
   * > - If you set **ReadWriteMode** to **ReadOnly**, you can associate only one node with the endpoint. If this node fails, the endpoint may be unavailable for up to 1 hour. This configuration is not recommended for a production environment. To improve availability, associate at least two nodes with the endpoint.
   * >
   * > - If you set **ReadWriteMode** to **ReadWrite**, you must associate at least two nodes with the endpoint.
   * >   \\* For a PolarDB for MySQL cluster, you can select any two nodes. If both nodes are read-only nodes, write requests are routed to the primary node.
   * >   \\* For a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (compatible with Oracle) cluster, the primary node must be included.
   * 
   * @example
   * pi-**********,pi-*********
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * pfs-test****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The policy for handling global consistency read timeouts. Valid values:
   * 
   * - **0**: Send the request to the primary node.
   * 
   * - **2**: Downgrade to a regular request. If a global consistency read times out, the query is automatically downgraded, and the client does not receive an error.
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
   * - **ReadWrite**: read/write (automatic read/write splitting).
   * 
   * - **ReadOnly** (default): read-only.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable global consistency (high-performance mode). Valid values:
   * 
   * - **ON**: Enables the feature.
   * 
   * - **OFF**: Disables the feature.
   * 
   * @example
   * on
   */
  sccMode?: string;
  /**
   * @example
   * vpc-2zehr7ghqovftils0****
   */
  VPCId?: string;
  /**
   * @example
   * vsw-2ze775gnf7jn33ua****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoAddNewNodes: 'AutoAddNewNodes',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      nodes: 'Nodes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      polarFsInstanceId: 'PolarFsInstanceId',
      polarSccTimeoutAction: 'PolarSccTimeoutAction',
      polarSccWaitTimeout: 'PolarSccWaitTimeout',
      readWriteMode: 'ReadWriteMode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sccMode: 'SccMode',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAddNewNodes: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      nodes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      polarFsInstanceId: 'string',
      polarSccTimeoutAction: 'string',
      polarSccWaitTimeout: 'string',
      readWriteMode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sccMode: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

