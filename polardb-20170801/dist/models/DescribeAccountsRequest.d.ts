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
     * The node type. Required when you query the PolarDB search node account
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
     * The page number of the returned page. The value must be an integer that is larger than 0. The default value is **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries returned per page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * The default value is **30**.
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
