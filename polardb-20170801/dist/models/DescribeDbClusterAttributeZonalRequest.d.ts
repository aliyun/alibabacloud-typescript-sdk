import * as $dara from '@darabonba/typescript';
export declare class DescribeDbClusterAttributeZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the edge cluster. You can call the DescribeDBClustersZonal operation to list available edge clusters and then use the returned DBClusterId to query the attributes. IDs of common clusters are not applicable to this operation.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to retrieve information about AI nodes.
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
