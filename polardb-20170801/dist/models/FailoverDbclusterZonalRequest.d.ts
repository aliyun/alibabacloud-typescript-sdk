import * as $dara from '@darabonba/typescript';
export declare class FailoverDBClusterZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate requests. You can generate the value of this parameter on the client side. The value must be unique across different requests and is case-sensitive. It can contain up to 64 ASCII characters.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a4233c1e7d1c5******
     */
    clientToken?: string;
    /**
     * @remarks
     * The ID of the edge cloud cluster. Only the edge cluster IDs returned by DescribeDBClustersZonal are supported. Standard PolarDB cluster IDs are not supported. Note: Only edge cluster IDs are accepted. You can call DescribeDBClustersZonal to obtain available edge cluster IDs.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * Specifies whether to switch back to the original primary zone after a failover. Valid values:
     *
     * - true: Yes.
     * - false: No.
     *
     * @example
     * false
     */
    rollBackForDisaster?: boolean;
    /**
     * @remarks
     * The ID of the edge cluster node to be switched to the primary node. If you leave this parameter empty, the system automatically selects a primary node. You can call DescribeDbClusterAttributeZonal to query the node ID. Note: DescribeDbClusterAttributeZonal.
     *
     * @example
     * pi-***********
     */
    targetDBNodeId?: string;
    /**
     * @remarks
     * Specifies whether it is an active primary/secondary switchover within the primary zone. Valid values:
     *
     * - Primary: Performs a primary/secondary switchover within the primary zone.
     * - Standby: Switches to the hot standby storage cluster.
     *
     * @example
     * Primary
     */
    targetZoneType?: string;
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
