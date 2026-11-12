import * as $dara from '@darabonba/typescript';
export declare class DeleteDBClusterEndpointZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the edge cluster. This operation supports only edge clusters. You can create an edge cluster by invoking the CreateDBCluster operation and setting CloudProvider to ENS, and invoke the DescribeEdgeCloudRegion operation to query active edge areas. Invocation notes: Constraints on edge clusters include that only edge clusters are supported, the cluster must be created by invoking CreateDBCluster with CloudProvider set to ENS, and active edge areas can be queried by invoking DescribeEdgeCloudRegion.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the custom cluster endpoint.
     *
     * This parameter is required.
     *
     * @example
     * pe-******************
     */
    DBEndpointId?: string;
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
