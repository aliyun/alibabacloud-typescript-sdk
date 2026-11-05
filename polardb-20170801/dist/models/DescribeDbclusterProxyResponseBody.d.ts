import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterProxyResponseBodyChildInstances extends $dara.Model {
    /**
     * @remarks
     * The node specifications. For more information, see the following documents:
     *
     * - PolarDB for MySQL: [Compute node specifications](https://help.aliyun.com/document_detail/102542.html).
     *
     * - PolarDB for Oracle: [Compute node specifications](https://help.aliyun.com/document_detail/207921.html).
     *
     * - PolarDB for PostgreSQL: [Compute node specifications](https://help.aliyun.com/document_detail/209380.html).
     *
     * @example
     * polar.mysql.g4.medium
     */
    DBNodeClass?: string;
    /**
     * @remarks
     * The private IP address of the database cluster node.
     *
     * @example
     * 10.*.*10
     */
    DBNodeIP?: string;
    /**
     * @remarks
     * The ID of the database cluster node.
     *
     * @example
     * pi-wz97h479y364g9du7
     */
    DBNodeId?: string;
    /**
     * @remarks
     * The port of the database cluster node.
     *
     * @example
     * 2450
     */
    DBNodePort?: string;
    /**
     * @remarks
     * The status of the node. Valid values:
     *
     * - **Creating**: The node is being created.
     *
     * - **Running**: The node is running.
     *
     * - **Deleting**: The node is being deleted.
     *
     * - **Rebooting**: The node is being restarted.
     *
     * - **DBNodeCreating**: A node is being added.
     *
     * - **DBNodeDeleting**: A node is being deleted.
     *
     * - **ClassChanging**: The node specifications are being changed.
     *
     * - **NetAddressCreating**: A network connection is being created.
     *
     * - **NetAddressDeleting**: A network connection is being deleted.
     *
     * - **NetAddressModifying**: A network connection is being modified.
     *
     * - **MinorVersionUpgrading**: The minor version is being upgraded.
     *
     * - **Maintaining**: The instance is being maintained.
     *
     * - **Switching**: A switchover is in progress.
     *
     * @example
     * Running
     */
    DBNodeStatus?: string;
    /**
     * @remarks
     * The hostname.
     *
     * @example
     * sh-lsf01-144-37
     */
    hostName?: string;
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
export declare class DescribeDBClusterProxyResponseBody extends $dara.Model {
    /**
     * @remarks
     * A list of network instances loaded by the Cloud Enterprise Network (CEN) instance.
     */
    childInstances?: DescribeDBClusterProxyResponseBodyChildInstances[];
    /**
     * @remarks
     * The proxy cluster ID.
     *
     * @example
     * pe-xxxxxxxxx
     */
    DBProxyClusterId?: string;
    /**
     * @remarks
     * The number of proxy nodes.
     *
     * @example
     * 2
     */
    DBProxyClusterNum?: number;
    /**
     * @remarks
     * The status of the proxy cluster.
     *
     * @example
     * ClassChanging
     */
    DBProxyClusterStatus?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 30E11ED2-C922-5B96-BCC6-11EE8C484AC6
     */
    requestId?: string;
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
