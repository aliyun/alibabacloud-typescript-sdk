import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceSwitchLogResponseBodyItemsItem extends $dara.Model {
    affectedSessions?: string;
    HAStatus?: string;
    switchCauseCode?: string;
    switchCauseDetail?: string;
    switchFinishTime?: string;
    switchId?: string;
    switchStartTime?: string;
    totalSessions?: string;
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
export declare class DescribeDBInstanceSwitchLogResponseBodyItems extends $dara.Model {
    item?: DescribeDBInstanceSwitchLogResponseBodyItemsItem[];
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
export declare class DescribeDBInstanceSwitchLogResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceName?: string;
    items?: DescribeDBInstanceSwitchLogResponseBodyItems;
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
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
     * D1CA494F-CC13-4EB6-8C4D-5352EE4045BD
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries on the current page.
     *
     * @example
     * 2
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
