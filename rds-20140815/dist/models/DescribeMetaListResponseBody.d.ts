import * as $dara from '@darabonba/typescript';
export declare class DescribeMetaListResponseBodyItemsMeta extends $dara.Model {
    database?: string;
    size?: string;
    tables?: string;
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
export declare class DescribeMetaListResponseBodyItems extends $dara.Model {
    meta?: DescribeMetaListResponseBodyItemsMeta[];
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
     * The name of the instance.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceName?: string;
    items?: DescribeMetaListResponseBodyItems;
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
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 60F9A12A-16B8-4728-B099-4CA38D32C31C
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    totalPageCount?: number;
    /**
     * @remarks
     * The total number of entries.
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
