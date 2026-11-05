import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime extends $dara.Model {
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    DBInstanceStatus?: string;
    expireTime?: string;
    lockMode?: string;
    payType?: string;
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
export declare class DescribeDBInstancesByExpireTimeResponseBodyItems extends $dara.Model {
    DBInstanceExpireTime?: DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime[];
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
export declare class DescribeDBInstancesByExpireTimeResponseBody extends $dara.Model {
    items?: DescribeDBInstancesByExpireTimeResponseBodyItems;
    /**
     * @remarks
     * The page number. Valid values: an integer greater than **0** and less than or equal to the maximum value of the Integer data type.
     *
     * Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of instances on the current page.
     *
     * @example
     * 2
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 200
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
