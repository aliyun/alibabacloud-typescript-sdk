import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterVersionZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Note: This parameter accepts only the ID of a PolarDB on ENS cluster. Regular PolarDB cluster IDs are not supported. You can call the DescribeDBClustersZonal operation to query the ID of an edge cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies the type of version information to return. Valid values:
     *
     * - LATEST_VERSION: Queries the latest version information.
     *
     * - AVAILABLE_VERSION: Queries the list of upgradable versions.
     *
     * @example
     * LATEST_VERSION
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
