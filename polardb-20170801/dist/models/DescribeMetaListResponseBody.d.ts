import * as $dara from '@darabonba/typescript';
export declare class DescribeMetaListResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The name of the database that can be recovered.
     *
     * @example
     * test_db
     */
    database?: string;
    /**
     * @remarks
     * The size of the database or table, in bytes.
     */
    size?: number[];
    /**
     * @remarks
     * The names of the tables that can be recovered.
     */
    tables?: string[];
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
export declare class DescribeMetaListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-bp1s826a1up******
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The details of recoverable databases and tables.
     */
    items?: DescribeMetaListResponseBodyItems[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of records on the current page.
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * AA815DE7-B576-4B22-B33C-3FB31A******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    totalPageCount?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 2
     */
    totalRecordCount?: string;
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
