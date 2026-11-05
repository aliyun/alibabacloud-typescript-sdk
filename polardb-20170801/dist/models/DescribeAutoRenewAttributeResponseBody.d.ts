import * as $dara from '@darabonba/typescript';
export declare class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $dara.Model {
    autoRenewEnabled?: boolean;
    DBClusterId?: string;
    duration?: number;
    periodUnit?: string;
    regionId?: string;
    renewalStatus?: string;
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
export declare class DescribeAutoRenewAttributeResponseBodyItems extends $dara.Model {
    autoRenewAttribute?: DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute[];
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
export declare class DescribeAutoRenewAttributeResponseBody extends $dara.Model {
    items?: DescribeAutoRenewAttributeResponseBodyItems;
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
     * The total page count.
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
     * 65D7ACE6-4A61-4B6E-B357-8CB24A******
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
