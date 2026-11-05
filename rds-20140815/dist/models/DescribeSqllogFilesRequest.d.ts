import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLLogFilesRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The name of the audit file.
     *
     * @example
     * custins****.csv
     */
    fileName?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: **1 to 100000**.
     * Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: **30 to 200**. Default value: **30**.
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
