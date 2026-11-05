import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceHistoryEventsRequestEventPublishTime extends $dara.Model {
    end?: string;
    start?: string;
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
export declare class DescribeRCInstanceHistoryEventsRequestNotBefore extends $dara.Model {
    end?: string;
    /**
     * @example
     * 2017-11-30T06:32:31Z
     */
    start?: string;
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
export declare class DescribeRCInstanceHistoryEventsRequestTag extends $dara.Model {
    key?: string;
    value?: string;
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
export declare class DescribeRCInstanceHistoryEventsRequest extends $dara.Model {
    eventPublishTime?: DescribeRCInstanceHistoryEventsRequestEventPublishTime;
    notBefore?: DescribeRCInstanceHistoryEventsRequestNotBefore;
    eventCycleStatus?: string;
    eventId?: string[];
    eventType?: string;
    impactLevel?: string;
    instanceEventCycleStatus?: string[];
    instanceEventType?: string[];
    instanceId?: string;
    maxResults?: string;
    pageNumber?: string;
    pageSize?: string;
    /**
     * @remarks
     * This parameter is required.
     */
    regionId?: string;
    resourceGroupId?: string;
    resourceId?: string[];
    tag?: DescribeRCInstanceHistoryEventsRequestTag[];
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
