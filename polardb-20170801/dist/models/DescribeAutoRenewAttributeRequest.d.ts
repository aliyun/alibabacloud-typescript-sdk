import * as $dara from '@darabonba/typescript';
export declare class DescribeAutoRenewAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The cloud provider of the instance.
     *
     * @example
     * ENS
     */
    cloudProvider?: string;
    /**
     * @remarks
     * The ID of the cluster. You can specify multiple cluster IDs, separated by commas (,).
     *
     * @example
     * pc-****************
     */
    DBClusterIds?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries to return on each page. Valid values: 30, 50, and 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * > For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/98041.html).
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
     * rg-re*********
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
