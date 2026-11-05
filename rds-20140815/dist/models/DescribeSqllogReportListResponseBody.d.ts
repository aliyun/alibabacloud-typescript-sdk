import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $dara.Model {
    avgLatency?: number;
    SQLExecuteTimes?: number;
    SQLText?: string;
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
export declare class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems extends $dara.Model {
    latencyTopNItem?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem[];
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
export declare class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem extends $dara.Model {
    SQLExecuteTimes?: number;
    SQLText?: string;
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
export declare class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems extends $dara.Model {
    QPSTopNItem?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem[];
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
export declare class DescribeSQLLogReportListResponseBodyItemsItem extends $dara.Model {
    latencyTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems;
    QPSTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems;
    reportTime?: string;
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
export declare class DescribeSQLLogReportListResponseBodyItems extends $dara.Model {
    item?: DescribeSQLLogReportListResponseBodyItemsItem[];
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
export declare class DescribeSQLLogReportListResponseBody extends $dara.Model {
    items?: DescribeSQLLogReportListResponseBodyItems;
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
     * The number of SQL log running reports on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries returned.
     *
     * @example
     * 60
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
