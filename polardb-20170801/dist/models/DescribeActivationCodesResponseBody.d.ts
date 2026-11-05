import * as $dara from '@darabonba/typescript';
export declare class DescribeActivationCodesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * Effective period
     *
     * @example
     * 2024-10-16 16:46:20
     */
    activateAt?: string;
    /**
     * @remarks
     * Activation code description
     *
     * @example
     * testCode
     */
    description?: string;
    /**
     * @remarks
     * Expiration time
     *
     * @example
     * 2054-10-16 16:46:20
     */
    expireAt?: string;
    /**
     * @remarks
     * Creation time
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtCreated?: string;
    /**
     * @remarks
     * Update time
     *
     * @example
     * 2024-10-16 16:46:20
     */
    gmtModified?: string;
    /**
     * @remarks
     * Activation code ID
     *
     * @example
     * 123
     */
    id?: number;
    /**
     * @remarks
     * MAC address
     *
     * @example
     * 12:34:56:78:98:00
     */
    macAddress?: string;
    /**
     * @remarks
     * Activation code name
     *
     * @example
     * testName
     */
    name?: string;
    /**
     * @remarks
     * Unique identifier in the database
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
     * List of activation codes
     */
    items?: DescribeActivationCodesResponseBodyItems[];
    /**
     * @remarks
     * Current page number
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * Number of records on the current page
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The unique ID generated for this request.
     *
     * @example
     * 65D7ACE6-4A61-4B6E-B357-8CB24A******
     */
    requestId?: string;
    /**
     * @remarks
     * Total number of records
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
