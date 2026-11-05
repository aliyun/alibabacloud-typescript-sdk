import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterGroupsRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine type. Only **MySQL** is supported.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The version of the database engine. Valid values:
     *
     * - **5.6**
     *
     * - **5.7**
     *
     * - **8.0**
     *
     * @example
     * 8.0
     */
    DBVersion?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the region.
     *
     * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the information about all available regions of your account, including the region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
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
