import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $dara.Model {
    autoRenew?: string;
    DBInstanceId?: string;
    duration?: number;
    regionId?: string;
    status?: string;
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
export declare class DescribeInstanceAutoRenewalAttributeResponseBodyItems extends $dara.Model {
    item?: DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem[];
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
export declare class DescribeInstanceAutoRenewalAttributeResponseBody extends $dara.Model {
    items?: DescribeInstanceAutoRenewalAttributeResponseBodyItems;
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
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4182309D-CD29-49B1-B4A5-D7CB4D56C31F
     */
    requestId?: string;
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
