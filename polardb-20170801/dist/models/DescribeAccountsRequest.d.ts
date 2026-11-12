import * as $dara from '@darabonba/typescript';
export declare class DescribeAccountsRequest extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * @example
     * test_acc
     */
    accountName?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The node type. This parameter is required when you query the accounts of PolarDB Search nodes. Valid values:
     *
     * - Search
     *
     * @example
     * Search
     */
    nodeType?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer type. Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: **30**.
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
