import * as $dara from '@darabonba/typescript';
export declare class DescribeEventsResponseBodyEventItemsEventItems extends $dara.Model {
    callerUid?: number;
    eventId?: number;
    eventName?: string;
    eventPayload?: string;
    eventReason?: string;
    eventRecordTime?: string;
    eventTime?: string;
    eventType?: string;
    eventUserType?: string;
    regionId?: string;
    resourceName?: string;
    resourceType?: string;
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
export declare class DescribeEventsResponseBodyEventItems extends $dara.Model {
    eventItems?: DescribeEventsResponseBodyEventItemsEventItems[];
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
export declare class DescribeEventsResponseBody extends $dara.Model {
    eventItems?: DescribeEventsResponseBodyEventItems;
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
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A103039D-B1B2-4C57-B989-7D7C0DA95426
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 40
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
