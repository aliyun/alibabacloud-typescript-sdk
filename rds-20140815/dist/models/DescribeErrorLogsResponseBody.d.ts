import * as $dara from '@darabonba/typescript';
export declare class DescribeErrorLogsResponseBodyItemsErrorLog extends $dara.Model {
    createTime?: string;
    database?: string;
    errorInfo?: string;
    user?: string;
    userIp?: string;
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
export declare class DescribeErrorLogsResponseBodyItems extends $dara.Model {
    errorLog?: DescribeErrorLogsResponseBodyItemsErrorLog[];
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
export declare class DescribeErrorLogsResponseBody extends $dara.Model {
    items?: DescribeErrorLogsResponseBodyItems;
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
     * The number of error log entries on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 98504E07-BB0E-40FC-B152-E4882615812C
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 100
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
