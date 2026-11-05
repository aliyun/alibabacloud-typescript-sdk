import * as $dara from '@darabonba/typescript';
export declare class DescribeDatabasesZonalRequest extends $dara.Model {
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
     * The database name.
     *
     * @example
     * test_db
     */
    DBName?: string;
    /**
     * @remarks
     * The maximum number of entries to return for the current request.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The query token. This is the NextToken value from the previous API call. If there are no more results, do not specify this parameter.
     *
     * @example
     * 212db86sca4384811e0b5e8707e******
     */
    nextToken?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. The default value is 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries to return on each page. Valid values:
     *
     * - 30
     *
     * - 50
     *
     * - 100
     *
     * The default value is 30.
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
