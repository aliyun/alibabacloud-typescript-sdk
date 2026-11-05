import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterEndpointsZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Note: Only edge cluster (Zonal) IDs are supported. Regular PolarDB cluster IDs are not supported. You can call DescribeDBClustersZonal to retrieve the list of edge clusters.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The cluster endpoint ID.
     *
     * @example
     * pe-*************
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * Specifies whether to return AI node information.
     *
     * @example
     * AI
     */
    describeType?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
