import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus extends $dara.Model {
    code?: string;
    name?: string;
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
export declare class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType extends $dara.Model {
    code?: string;
    name?: string;
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
export declare class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks extends $dara.Model {
    creationTime?: string;
    deviceCategory?: string;
    deviceSize?: string;
    deviceType?: string;
    releaseTime?: string;
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
export declare class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute extends $dara.Model {
    canAccept?: string;
    code?: string;
    device?: string;
    diskId?: string;
    hostId?: string;
    hostType?: string;
    inactiveDisks?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks[];
    migrationOptions?: string[];
    onlineRepairPolicy?: string;
    punishDomain?: string;
    punishType?: string;
    punishUrl?: string;
    rack?: string;
    responseResult?: string;
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
export declare class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
    eventCycleStatus?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus;
    eventFinishTime?: string;
    eventId?: string;
    eventPublishTime?: string;
    eventType?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType;
    extendedAttribute?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute;
    impactLevel?: string;
    instanceId?: string;
    notBefore?: string;
    reason?: string;
    reasonCode?: string;
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
export declare class DescribeRCInstanceHistoryEventsResponseBody extends $dara.Model {
    instanceSystemEventSet?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet[];
    nextToken?: string;
    pageNumber?: number;
    pageSize?: number;
    requestId?: string;
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
