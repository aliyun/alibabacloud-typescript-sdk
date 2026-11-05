import * as $dara from '@darabonba/typescript';
export declare class DescribeCharacterSetNameRequest extends $dara.Model {
    /**
     * @remarks
     * The type of the database engine. Valid values:
     *
     * - **mysql**: MySQL
     * - **mssql**: SQL Server
     * - **PostgreSQL**: PostgreSQL
     * - **MariaDB**: MariaDB
     *
     * This parameter is required.
     *
     * @example
     * mysql
     */
    engine?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call DescribeRegions to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call DescribeDBInstanceAttribute to query the resource group ID.
     *
     * @example
     * rg-acfmy*****
     */
    resourceGroupId?: string;
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
