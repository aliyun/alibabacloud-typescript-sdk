import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $dara.Model {
    DBInstanceIPArrayAttribute?: string;
    DBInstanceIPArrayName?: string;
    securityIPList?: string;
    securityIPType?: string;
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
export declare class DescribeDBInstanceIPArrayListResponseBodyItems extends $dara.Model {
    DBInstanceIPArray?: DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray[];
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
export declare class DescribeDBInstanceIPArrayListResponseBody extends $dara.Model {
    items?: DescribeDBInstanceIPArrayListResponseBodyItems;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * E2B6AF71-DC32-4055-B477-43B348798D10
     */
    requestId?: string;
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
