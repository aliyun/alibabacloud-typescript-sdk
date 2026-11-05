import * as $dara from '@darabonba/typescript';
export declare class DescribeStoragePlanRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * @example
     * 30
     */
    pageSize?: number;
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
