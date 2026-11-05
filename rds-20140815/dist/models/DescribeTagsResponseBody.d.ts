import * as $dara from '@darabonba/typescript';
export declare class DescribeTagsResponseBodyItemsTagInfosDBInstanceIds extends $dara.Model {
    DBInstanceIds?: string[];
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
export declare class DescribeTagsResponseBodyItemsTagInfos extends $dara.Model {
    DBInstanceIds?: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds;
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
export declare class DescribeTagsResponseBodyItems extends $dara.Model {
    tagInfos?: DescribeTagsResponseBodyItemsTagInfos[];
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
export declare class DescribeTagsResponseBody extends $dara.Model {
    items?: DescribeTagsResponseBodyItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
