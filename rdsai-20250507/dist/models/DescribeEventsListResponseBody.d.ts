import * as $dara from '@darabonba/typescript';
export declare class DescribeEventsListResponseBodyEvents extends $dara.Model {
    /**
     * @remarks
     * The event code.
     *
     * @example
     * ExceptionEvent
     */
    eventCode?: string;
    /**
     * @remarks
     * The event status.
     *
     * @example
     * None
     */
    eventStatus?: string;
    /**
     * @remarks
     * The list of event times.
     */
    eventTimeList?: string[];
    /**
     * @remarks
     * The description of the instance.
     *
     * @example
     * Test instance
     */
    instanceDescription?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-2zecnb327gp36****
     */
    instanceId?: string;
    /**
     * @remarks
     * The recovery time.
     *
     * @example
     * 2025-07-23T02:11:07Z
     */
    recoveryTime?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
export declare class DescribeEventsListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The total number of events.
     *
     * @example
     * OtherException:3,MysqlIOException:1
     */
    eventCodeCounts?: string;
    /**
     * @remarks
     * The list of events.
     */
    events?: DescribeEventsListResponseBodyEvents[];
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    pageCount?: number;
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
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 20
     */
    totalCount?: number;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 10
     */
    totalPages?: number;
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
