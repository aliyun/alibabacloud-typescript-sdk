import * as $dara from '@darabonba/typescript';
export declare class DescribeDatabasesZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the edge cluster. Only edge clusters are supported. You can call the DescribeDBClustersZonal operation to obtain a list of valid edge clusters and call the DescribeEdgeCloudRegion operation to query the regions that support edge clusters.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * test_db
     */
    DBName?: string;
    /**
     * @remarks
     * The maximum number of entries to return in this call.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The query token. Set the value to the NextToken value returned from the previous API call. If no subsequent query is required, do not specify this parameter.
     *
     * @example
     * 212db86sca4384811e0b5e8707e******
     */
    nextToken?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: integers greater than 0 and less than or equal to the maximum value of the Integer data type. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * - 30
     * - 50
     * - 100
     *
     * Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
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
