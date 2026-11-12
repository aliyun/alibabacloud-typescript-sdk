import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossCloudLevelsRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine type. Valid values:
     * - MySQL
     * - PostgreSQL
     * - Oracle
     *
     * This parameter is required.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * Valid values for MySQL:
     * - 5.6
     * - 5.7
     * - 8.0
     *
     * Valid values for PostgreSQL:
     * - 11
     * - 14
     * - 15
     *
     * @example
     * 5.6
     */
    DBVersion?: string;
    /**
     * @remarks
     * The ID of the cross-cloud resource pool. First, call DescribeCrossCloudRegion to query the cross-cloud region information based on the target cloud provider, database type, and region. Obtain a valid value (which usually starts with pj-) from CrossCloudRegionList[].ProjectId in the response, and then pass it to this operation. If CrossCloudRegionList is empty or does not contain a ProjectId, no resource pool is available under the current query conditions. Verify the cloud provider, database type, and region, and apply for a resource pool through the cross-cloud product activation process or contact product support. Do not guess the ID.
     *
     * This parameter is required.
     *
     * @example
     * pj-87681rbcef6******
     */
    projectId?: string;
    /**
     * @remarks
     * The storage type.
     *
     * This parameter is required.
     *
     * @example
     * SharedStorage
     */
    storageType?: string;
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
