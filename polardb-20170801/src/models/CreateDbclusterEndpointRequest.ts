// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic association of newly added nodes with the cluster endpoint. Valid values:
   * 
   * *   **Enable**
   * *   **Disable** (default)
   * 
   * @example
   * Disable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. The token is case-sensitive.
   * 
   * @example
   * 6000170000591aed949d0f******************
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of cluster.
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
   * The advanced configurations of the cluster endpoint. You must specify the configurations in the JSON format. You can specify the configurations of the following attributes: consistency level, transaction splitting, connection pool, and offload reads from the primary node.
   * 
   * *   Specify the consistency level in the format of `{"ConsistLevel":"Consistency level"}`. Default value: 1. Valid values:
   * 
   *     *   **0**: eventual consistency.
   *     *   **1**: session consistency.
   *     *   **2**: global consistency.
   * 
   * *   Specify the transaction splitting feature in the format of `{"DistributedTransaction":"Transaction splitting"}`. Valid values:
   * 
   *     *   **on**: enables the transaction splitting feature. By default, the feature is enabled.
   *     *   **off**: disables the transaction splitting feature.
   * 
   * *   Specify the offload reads from the primary node feature in the format of `{"MasterAcceptReads":"Offload reads from the primary node"}`. Default value: off. Valid values:
   * 
   *     *   **on**: The primary node accepts read requests.
   *     *   **off**: The primary node does not accept read requests.
   * 
   * *   Specify the connection pool in the format of `{"ConnectionPersist":"Connection pool"}`. Default value: off. Valid values:
   * 
   *     *   **off**: disables the connection pool.
   *     *   **Session**: enables the session-level connection pool.
   *     *   **Transaction**: enables the transaction-level connection pool.
   * 
   * >- You can specify the transaction splitting, connection pool, and offload reads from the primary node features for a PolarDB for MySQL cluster only if ReadWriteMode is set to ReadWrite for the cluster endpoint.
   * >- Only PolarDB for MySQL supports global consistency.
   * >- If the **ReadWriteMode** parameter is set to **ReadOnly**, the consistency level must be **0**.
   * >- You can use one record to specify the consistency level, transaction splitting, connection pool, and offload reads from the primary node features, such as `{"ConsistLevel":"1","DistributedTransaction":"on","ConnectionPersist":"Session","MasterAcceptReads":"on"}`.
   * >- The transaction splitting settings are restricted by the consistency level settings. For example, if you set the consistency level to **0**, transaction splitting cannot be enabled. If you set the consistency level to **1** or **2**, transaction splitting can be enabled.
   * 
   * @example
   * {"ConsistLevel": "1","DistributedTransaction": "on"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The type of the cluster endpoint. Set the value to **Custom**.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The reader nodes that you want to associate with the endpoint. If you want to specify multiple reader nodes, separate the reader nodes with commas (,). If you do not specify this parameter, all nodes are used.
   * 
   * >- You need to specify the node IDs for a PolarDB for MySQL cluster.
   * >- You need to specify the role name of each node for a PolarDB for PostgreSQL cluster or a PolarDB for PostgreSQL (Compatible with Oracle) cluster. Example: `Writer, Reader1, Reader2`.
   * >- If you set **ReadWriteMode** to **ReadOnly**, you can associate only one node with the endpoint. If the only node becomes faulty, the cluster endpoint may be unavailable for up to 1 hour. We recommend that you associate more than one node with the cluster endpoint in production environments. We recommend that you associate at least two nodes with the cluster endpoint to improve service availability.
   * >- If you set **ReadWriteMode** to **ReadWrite**, you need to associate at least two nodes with the cluster endpoint.
   * >- PolarDB for MySQL does not impose a limit on the types of the two nodes. If the nodes are read-only nodes, write requests are forwarded to the primary node. 
   * >- PolarDB for PostgreSQL and PolarDB for PostgreSQL (compatible with Oracle) require a primary node.
   * 
   * @example
   * pi-**********,pi-*********
   */
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Global consistency timeout strategy. The value range is as follows:
   * - **0**: Send the request to the primary node
   * - **2**: Timeout degradation, when a global consistency read times out, the query operation will automatically degrade to an inconsistent read, and the client will not receive an error message
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * Global consistency timeout
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * *   **ReadWrite**: receives and forwards read and write requests. Automatic read/write splitting is enabled.
   * *   **ReadOnly**: The account has the read-only permissions on the database.
   * 
   * Default value: **ReadOnly**.
   * 
   * @example
   * ReadOnly
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

