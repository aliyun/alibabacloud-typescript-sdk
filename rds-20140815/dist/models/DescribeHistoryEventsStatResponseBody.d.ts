import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryEventsStatResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The categorization of system events. Valid values:
     * - **Exception**: abnormal events.
     * - **Optimize**: optimization events.
     * - **Notification**: notification events.
     * - **Maintenance**: scheduled O&M events.
     *
     * @example
     * Exception
     */
    eventCategory?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 31
     */
    totalCount?: number;
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
export declare class DescribeHistoryEventsStatResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of events.
     */
    items?: DescribeHistoryEventsStatResponseBodyItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E52666CC-330E-418A-8E5B-A19E3FB42D13
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
