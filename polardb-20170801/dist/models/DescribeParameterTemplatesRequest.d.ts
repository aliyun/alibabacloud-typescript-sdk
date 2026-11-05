import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterTemplatesRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine type. Only **MySQL** is supported.
     *
     * This parameter is required.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database version. Valid values:
     *
     * - **5.6**
     *
     * - **5.7**
     *
     * - **8.0**
     *
     * This parameter is required.
     *
     * @example
     * 5.7
     */
    DBVersion?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the IDs of available regions.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
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
