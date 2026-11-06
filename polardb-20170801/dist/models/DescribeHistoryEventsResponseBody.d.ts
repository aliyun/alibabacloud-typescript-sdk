import * as $dara from '@darabonba/typescript';
export declare class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
    /**
     * @remarks
     * The cloud service type of the application group. Valid values:
     * - **web**: Web application.
     * - **native**: Native application.
     *
     * @example
     * web
     */
    cmsProduct?: string;
    /**
     * @remarks
     * The database type.
     *
     * @example
     * mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The pagination parameter.
     *
     * @example
     * 1
     */
    detailImpact?: string;
    /**
     * @remarks
     * The instance operation details.
     *
     * @example
     * The instance needs to be restarted for system maintenance
     */
    detailReason?: string;
    /**
     * @remarks
     * The end time of the query. The end time must be later than the start time, and the interval between the start time and the end time must be within 24 hours. Specify the time in the `YYYY-MM-DDThh:mmZ` format (UTC time).
     *
     * @example
     * 2025-12-24T02:24:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The system event category. Valid values:
     * - **Exception**: Exception events.
     * - **Optimize**: Optimization events.
     * - **Notification**: Notification events.
     * - **Maintenance**: Scheduled O&M events.
     *
     * @example
     * Exception
     */
    eventCategory?: string;
    /**
     * @remarks
     * The event code.
     *
     * @example
     * de_aamexg3015
     */
    eventCode?: string;
    /**
     * @remarks
     * The event details.
     *
     * @example
     * The instance will be restarted within the maintenance window
     */
    eventDetail?: string;
    /**
     * @remarks
     * The event ID.
     *
     * @example
     * 600324
     */
    eventId?: string;
    /**
     * @remarks
     * The event impact overview.
     *
     * @example
     * The instance connection may be briefly interrupted
     */
    eventImpact?: string;
    /**
     * @remarks
     * The event level. Valid values:
     * - **INFO**: Notification.
     * - **WARN**: Warning.
     * - **CRITICAL**: Critical.
     *
     * @example
     * INFO
     */
    eventLevel?: string;
    /**
     * @remarks
     * The source of the event operation.
     *
     * @example
     * System maintenance
     */
    eventReason?: string;
    /**
     * @remarks
     * The event status. Valid values:
     * - **Inquiring**: Inquiring.
     * - **Scheduled**: Scheduled.
     * - **Running**: Running.
     * - **Succeed**: Succeeded.
     * - **Failed**: Failed.
     * - **Canceled**: Canceled.
     *
     * @example
     * Inquiring
     */
    eventStatus?: string;
    /**
     * @remarks
     * The system event type. Valid values:
     * - **SystemMaintenance.Reboot**: The instance is restarted due to system maintenance.
     * - **SystemMaintenance.Redeploy**: The instance is redeployed due to system maintenance.
     * - **SystemFailure.Reboot**: The instance is restarted due to a system failure.
     * - **SystemFailure.Redeploy**: The instance is redeployed due to a system failure.
     * - **SystemFailure.Delete**: The instance is released due to a creation failure.
     * - **InstanceFailure.Reboot**: The instance is restarted due to an instance failure.
     * - **InstanceExpiration.Stop**: The subscription instance is stopped due to expiration.
     * - **InstanceExpiration.Delete**: The subscription instance is released due to expiration.
     * - **AccountUnbalanced.Stop**: The pay-as-you-go instance is stopped due to an overdue payment.
     * - **AccountUnbalanced.Delete**: The pay-as-you-go instance is released due to an overdue payment.
     *
     * @example
     * SystemFailure.Delete
     */
    eventType?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2025-07-15T14:53:06+08:00
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2025-01-07T15:10:32+08:00
     */
    gmtModified?: string;
    /**
     * @remarks
     * The handling status.
     *
     * @example
     * done
     */
    handleStatus?: string;
    /**
     * @remarks
     * Indicates whether the event has a lifecycle.
     *
     * @example
     * 0
     */
    hasLifeCycle?: number;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pc-2ze150h1p29t***
     */
    instanceId?: string;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * dhimgsearch
     */
    instanceName?: string;
    /**
     * @remarks
     * Indicates whether the event is closed. Valid values:
     * - **0**: Closed.
     * - **1**: Open.
     *
     * @example
     * 1
     */
    isClosed?: number;
    /**
     * @remarks
     * The product name.
     *
     * @example
     * polardb
     */
    product?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The resource type. Valid values:
     * - **Instance**: Instance resources.
     * - **Host**: Host resources.
     * - **User**: User resources.
     *
     * @example
     * Host
     */
    resourceType?: string;
    /**
     * @remarks
     * The source data type.
     *
     * @example
     * loanBill
     */
    sourceType?: string;
    /**
     * @remarks
     * The start time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC time).
     *
     * @example
     * 2025-02-27T02:00:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The ID of the user to which the resource belongs.
     *
     * @example
     * 1540497309282125
     */
    uid?: string;
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
export declare class DescribeHistoryEventsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The data overview.
     */
    data?: DescribeHistoryEventsResponseBodyItemsData;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 123
     */
    id?: string;
    /**
     * @remarks
     * The region ID of the region where the task resides.
     *
     * @example
     * cn-hangzhou
     */
    region?: string;
    /**
     * @remarks
     * The event source.
     *
     * @example
     * loanBill
     */
    source?: string;
    /**
     * @remarks
     * The database version.
     *
     * @example
     * 8.0
     */
    specversion?: string;
    /**
     * @remarks
     * The name of the pending event.
     *
     * @example
     * QiTian
     */
    subject?: string;
    /**
     * @remarks
     * The running time of the query task. Unit: seconds.
     *
     * @example
     * 1758680209206
     */
    time?: string;
    /**
     * @remarks
     * The event type.
     *
     * @example
     * host
     */
    type?: string;
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
export declare class DescribeHistoryEventsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The event list.
     */
    items?: DescribeHistoryEventsResponseBodyItems[];
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
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
     * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 7
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
