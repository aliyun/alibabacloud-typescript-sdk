import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag extends $dara.Model {
    tagKey?: string;
    tagValue?: string;
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
export declare class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags extends $dara.Model {
    tag?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag[];
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
export declare class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag extends $dara.Model {
    DBInstanceId?: string;
    tags?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags;
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
export declare class DescribeDBInstanceByTagsResponseBodyItems extends $dara.Model {
    DBInstanceTag?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag[];
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
export declare class DescribeDBInstanceByTagsResponseBody extends $dara.Model {
    items?: DescribeDBInstanceByTagsResponseBodyItems;
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
     * The number of entries per page.
     *
     * @example
     * 10
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
     * 30
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
