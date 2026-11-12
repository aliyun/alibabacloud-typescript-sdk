import * as $dara from '@darabonba/typescript';
export declare class ListLakebaseS3AccountsRequest extends $dara.Model {
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 5
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 5
     */
    pageSize?: number;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-xxx
     */
    pfsInstanceId?: string;
    /**
     * @remarks
     * The region ID.
     * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view region IDs.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
