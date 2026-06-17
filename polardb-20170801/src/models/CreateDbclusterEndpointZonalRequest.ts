// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterEndpointZonalRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically add new nodes to this endpoint. Valid values:
   * 
   * - Enable: New nodes are automatically added to this endpoint.
   * 
   * - Disable: New nodes are not automatically added to this endpoint. This is the default value.
   * 
   * @example
   * Disable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates the value, which must be unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
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
   * pc-***************
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
   * The advanced configurations of the cluster endpoint, specified in the JSON format. This parameter supports settings for consistency level, transaction splitting, offloading reads from the primary node, and the connection pool.
   * 
   * - Sets the load balancing policy. The format is {"LoadBalancePolicy":"policy"}. Valid values:
   * 
   *   - **0**: Connections-based load balancing. This is the default value.
   * 
   *   - **1**: Active requests-based load balancing.
   * 
   * - Sets the consistency level. The format is `{"ConsistLevel":"level"}`. Valid values:
   * 
   *   - **0**: Eventual consistency.
   * 
   *   - **1**: Session consistency. This is the default value.
   * 
   *   - **2**: Global consistency.
   * 
   * - Sets transaction splitting. The format is `{"DistributedTransaction":"on/off"}`. Valid values:
   * 
   *   - **on**: Enables transaction splitting. This is the default value.
   * 
   *   - **off**: Disables transaction splitting.
   * 
   * - Specifies whether the primary node accepts read requests. The format is `{"MasterAcceptReads":"on/off"}`. Valid values:
   * 
   *   - **on**: The primary node accepts read requests.
   * 
   *   - **off**: The primary node does not accept read requests. This is the default value.
   * 
   * - Sets the connection pool. The format is `{"ConnectionPersist":"type"}`. Valid values:
   * 
   *   - **off**: Disables the connection pool. This is the default value.
   * 
   *   - **Session**: Enables the session-level connection pool.
   * 
   *   - **Transaction**: Enables transaction-level connection pooling.
   * 
   * - Sets parallel query. The format is {"MaxParallelDegree":"degree"}. Valid values:
   * 
   *   - A specific number of concurrent queries. Example: "MaxParallelDegree":"2".
   * 
   *   - **off**: Disables parallel query. This is the default value.
   * 
   * - Sets automatic routing for row store and column store. The format is {"EnableHtapImci":"on/off"}. Valid values:
   * 
   *   - **on**: Enables automatic routing for row store and column store.
   * 
   *   - **off**: Disables automatic routing for row store and column store. This is the default value.
   * 
   * - Specifies whether to enable overload protection. The format is {"EnableOverloadThrottle":"on/off"}. Valid values:
   * 
   *   - **on**: Enables overload protection.
   * 
   *   - **off**: Disables overload protection. This is the default value.
   * 
   * > * You can set transaction splitting, specify whether the primary node accepts read requests, configure the connection pool, and enable overload protection only when the read/write mode of the cluster endpoint for a PolarDB for MySQL cluster is set to \\*\\*ReadWrite\\*\\* (automatic read/write splitting).
   * >
   * > * When the read/write mode of the cluster endpoint for a PolarDB for MySQL cluster is set to **ReadOnly**, both **connections-based load balancing** and **active requests-based load balancing** are supported. When the read/write mode is set to **ReadWrite** (automatic read/write splitting), only **active requests-based load balancing** is supported.
   * >
   * > * You can enable automatic routing for row store and column store when the read/write mode of the cluster endpoint for a PolarDB for MySQL cluster is set to **ReadWrite** (automatic read/write splitting), or when the read/write mode is set to **ReadOnly** and the load balancing policy is set to **active requests-based load balancing**.
   * >
   * > * Only PolarDB for MySQL supports setting the consistency level to global consistency.
   * >
   * > * If you set the **ReadWriteMode** parameter to **ReadOnly**, you can only set the consistency level to **0**.
   * >
   * > * You can configure the consistency level, transaction splitting, whether the primary node accepts reads, and the connection pool at the same time. For example: `{"ConsistLevel":"1","DistributedTransaction":"on","ConnectionPersist":"Session","MasterAcceptReads":"on"}`.
   * >
   * > * The transaction splitting setting is constrained by the consistency level. For example, if the consistency level is set to **0**, you cannot enable transaction splitting. If the consistency level is set to **1** or **2**, you can enable transaction splitting.
   * 
   * @example
   * {"ConsistLevel": "1","DistributedTransaction": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The type of the custom cluster endpoint. The value is fixed to **Custom**.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The read-only nodes to be added to the endpoint. Separate multiple node IDs with commas (,). By default, all nodes are added.
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
   * - 0: Sends the request to the primary node.
   * 
   * - 2: Degrades to regular requests. If a global consistency read times out, the query is automatically degraded to a regular request, and the client does not receive an error message.
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
   * - ReadWrite: read and write (automatic read/write splitting).
   * 
   * - ReadOnly: read-only. This is the default value.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the global consistency (high-performance mode) feature for the node. Valid values:
   * 
   * - ON: Enables the feature.
   * 
   * - OFF: Disables the feature.
   * 
   * @example
   * on
   */
  sccMode?: string;
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
      endpointConfig: 'string',
      endpointType: 'string',
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

