import * as $dara from '@darabonba/typescript';
export declare class DescribeActivationCodesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The effective period.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    activateAt?: string;
    /**
     * @remarks
     * The description of the activation code.
     *
     * @example
     * testCode
     */
    description?: string;
    /**
     * @remarks
     * The expiration time.
     *
     * @example
     * 2054-10-16 16:46:20
     */
    expireAt?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtModified?: string;
    /**
     * @remarks
     * The ID of the activation code.
     *
     * @example
     * 123
     */
    id?: number;
    /**
     * @remarks
     * The MAC address.
     *
     * @example
     * 12:34:56:78:98:00
     */
    macAddress?: string;
    /**
     * @remarks
     * The name of the activation code.
     *
     * @example
     * testName
     */
    name?: string;
    /**
     * @remarks
     * The unique identifier of the database.
     *
     * @example
     * 1234567890123456
     */
    systemIdentifier?: string;
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
export declare class DescribeActivationCodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of activation codes.
     *
     * @example
     * []
     */
    items?: DescribeActivationCodesResponseBodyItems[];
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
     * The number of entries on the current page.
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
