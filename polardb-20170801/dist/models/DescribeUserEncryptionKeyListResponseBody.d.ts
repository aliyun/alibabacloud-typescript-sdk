import * as $dara from '@darabonba/typescript';
export declare class DescribeUserEncryptionKeyListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The list of cluster keys.
     */
    keyList?: string[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The page size.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
