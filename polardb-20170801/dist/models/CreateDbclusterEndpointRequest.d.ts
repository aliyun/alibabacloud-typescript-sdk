import * as $dara from '@darabonba/typescript';
export declare class CreateDBClusterEndpointRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to automatically add new nodes to the endpoint. Valid values:
     * * **Enable**: New nodes are automatically added to the endpoint.
     * * **Disable** (default): New nodes are not automatically added to the endpoint.
     *
     * @example
     * Disable
     */
    autoAddNewNodes?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and is case-sensitive. The value can contain up to 64 ASCII characters.
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
     * The advanced settings of the cluster endpoint. The value must be in JSON format. You can set the consistency level, transaction splitting, offload reads from primary node, and connection pool.
     * * Set the load balancing policy. Format: `{"LoadBalancePolicy":"load balancing policy"}`. Valid values:
     *    * **0**: load balancing based on the number of connections (default).
     *    * **1**: load balancing based on the number of active requests.
     * * Set the consistency level. Format: `{"ConsistLevel":"consistency level"}`. Valid values:
     *     * **0**: eventual consistency.
     *     * **1**: session consistency (default).
     *     * **2**: global consistency.
     * * Set transaction splitting. Format: `{"DistributedTransaction":"transaction splitting"}`. Valid values:
     *     * **on**: enables transaction splitting (default).
     *     * **off**: shutdown transaction splitting.
     * * Set whether the primary node accepts read requests. Format: `{"MasterAcceptReads":"offload reads from primary node"}`. Valid values:
     *     * **on**: The primary node accepts read requests.
     *     * **off**: The primary node does not accept read requests (default).
     * * Set the connection pool. Format: `{"ConnectionPersist":"connection pool"}`. Valid values:
     *     * **off**: shutdown the connection pool (default).
     *     * **Session**: enables the session-level connection pool.
     *     * **Transaction**: enables transaction-level connection pooling.
     * * Set parallel query. Format: `{"MaxParallelDegree":"parallel query"}`. Valid values:
     *     * A specific concurrent count. Example: `"MaxParallelDegree":"2"`.
     *     * **off**: shutdown parallel query (default).
     * * Set automatic request distribution among row store and column store nodes. Format: `{"EnableHtapImci":"automatic request distribution"}`. Valid values:
     *     * **on**: enables the automatic request distribution feature among row store and column store nodes.
     *     * **off**: shutdown the automatic request distribution feature among row store and column store nodes (default).
     * * Set whether to enable overload protection. Format: `{"EnableOverloadThrottle":"whether to enable overload protection"}`. Valid values:
     *    * **on**: enables overload protection.
     *    * **off**: shutdown overload protection (default).
     *
     * > * Transaction splitting, offloading reads from the primary node, connection pool, and overload protection can be set only when the read/write pattern of the PolarDB for MySQL cluster endpoint is set to **read and write (automatic read/write splitting)**.
     * >* When the read/write pattern of the PolarDB for MySQL cluster endpoint is set to **read-only**, both **load balancing based on the number of connections** and **load balancing based on the number of active requests** are supported. For cluster endpoints in the **read and write (automatic read/write splitting) pattern**, only **load balancing based on the number of active requests** is supported.
     * >* Automatic request distribution among row store and column store nodes can be set when the read/write pattern of the PolarDB for MySQL cluster endpoint is set to **read and write (automatic read/write splitting)**, or when the read/write pattern is set to **read-only** and the load balancing policy is set to **load balancing based on the number of active requests**.
     * >* Only PolarDB for MySQL supports setting the consistency level to global consistency.
     * >* If the parameter **ReadWriteMode** is set to **ReadOnly**, the consistency level can only be set to **0**.
     * >* You can set the consistency level, transaction splitting, offloading reads from the primary node, and connection pool at the same time. Example: `{"ConsistLevel":"1","DistributedTransaction":"on","ConnectionPersist":"Session","MasterAcceptReads":"on"}`.
     * >* The transaction splitting settings are constrained by the consistency level settings. For example, if the consistency level is set to **0**, transaction splitting cannot be enabled. If the consistency level is set to **1** or **2**, transaction splitting can be enabled.
     *
     * > Note: Clusters with DeployUnit=Advanced (hot standby/multi-master) may not support some advanced endpoint settings. If the OperationDenied.InstanceType error occurs, remove EndpointConfig and retry, or confirm the compatibility of the target cluster deployment type with the selected settings.
     *
     * @example
     * {"ConsistLevel": "1","DistributedTransaction": "on"}
     */
    endpointConfig?: string;
    /**
     * @remarks
     * The type of the custom cluster endpoint. Valid values:
     *
     * - **Custom**: custom cluster endpoint.
     *
     * - **DynamoDB**: DynamoDB endpoint.
     *
     * This parameter is required.
     *
     * @example
     * Custom
     */
    endpointType?: string;
    /**
     * @remarks
     * The read-only nodes to be added to the endpoint. Separate multiple nodes with commas (,). Default value: all nodes.
     *
     * > * For PolarDB for MySQL, specify node IDs.
     * >* For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Compatible with Oracle), specify node role names, such as `Writer,Reader1,Reader2`.
     * >* If **ReadWriteMode** is set to **ReadOnly**, you can add only one node. However, if this node fails, the endpoint may be unavailable for up to 1 hour. Do not use this configuration in production environments. Select at least two nodes to improve availability.
     * >* If **ReadWriteMode** is set to **ReadWrite**, select at least two nodes.
     *     * For PolarDB for MySQL, you can select any two nodes. If both nodes are read-only nodes, write requests are forwarded to the primary node.
     *     * For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Compatible with Oracle), the primary node must be included.
     *
     * @example
     * pi-**********,pi-*********
     */
    nodes?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * @example
     * pfs-test****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The timeout policy for global consistency. Valid values:
     *
     * - **0**: sends the request to the primary node.
     *
     * - **2**: degrades the request upon timeout. If a global consistency read times out, the query is automatically downgraded to regular requests, and the client does not receive an error message.
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
     * - **ReadWrite**: read and write (automatic read/write splitting).
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
     * Specifies whether to enable the global consistency (high-performance mode) feature for the node. Valid values:
     *
     * - **ON**: Enabled.
     *
     * - **OFF**: shutdown
     *
     * @example
     * on
     */
    sccMode?: string;
    /**
     * @remarks
     * vpc-2zehr7ghqovft******
     * Virtual private cloud identifier.
     *
     * @example
     * vpc-2zehr7ghqovftils0****
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-2ze775gnf7jn33ua****
     */
    vSwitchId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
