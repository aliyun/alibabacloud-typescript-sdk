import * as $dara from '@darabonba/typescript';
export declare class GetInspectionReportResponseBodyDataDataItemsData extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * DBInstanceStatus
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * Running
     */
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
export declare class GetInspectionReportResponseBodyDataDataItems extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetInspectionReportResponseBodyDataDataItemsData[];
    /**
     * @remarks
     * The alert level.
     *
     * @example
     * Normal
     */
    level?: string;
    /**
     * @remarks
     * The result message.
     *
     * @example
     * The instance is running normally
     */
    message?: string;
    /**
     * @remarks
     * The category name.
     *
     * @example
     * instance_runningstatus
     */
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
export declare class GetInspectionReportResponseBodyDataData extends $dara.Model {
    /**
     * @remarks
     * The group ID.
     *
     * @example
     * instance_info
     */
    group?: string;
    /**
     * @remarks
     * The attached resource names.
     */
    items?: GetInspectionReportResponseBodyDataDataItems[];
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
export declare class GetInspectionReportResponseBodyDataLevelSummary extends $dara.Model {
    /**
     * @remarks
     * The number of error items.
     *
     * @example
     * 2
     */
    error?: number;
    /**
     * @remarks
     * The number of failed items.
     *
     * @example
     * 3
     */
    failed?: number;
    /**
     * @remarks
     * The number of normal items.
     *
     * @example
     * 10
     */
    normal?: number;
    /**
     * @remarks
     * The number of warning items.
     *
     * @example
     * 1
     */
    warning?: number;
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
export declare class GetInspectionReportResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetInspectionReportResponseBodyDataData[];
    /**
     * @remarks
     * The inspection end time in the format of YYYY-MM-DDTHH:mm:ssZ.
     *
     * @example
     * 2026-01-31T02:05:04Z
     */
    endTime?: string;
    /**
     * @remarks
     * The engine type.
     *
     * @example
     * MySQL
     */
    engineType?: string;
    /**
     * @remarks
     * The instance description.
     *
     * @example
     * Test instance
     */
    instanceDesc?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-2zep6e5u6l2yu****
     */
    instanceId?: string;
    /**
     * @remarks
     * The level summary.
     */
    levelSummary?: GetInspectionReportResponseBodyDataLevelSummary;
    /**
     * @remarks
     * The Markdown text.
     * * If the InstanceId parameter is not specified, the reports for all instances in the inspection report are returned, but the MarkdownText field is empty ("").
     * * If the InstanceId parameter is specified, the report for the specified instance is returned, and the MarkdownText field contains the detailed content.
     *
     * @example
     * # RDS Instance Inspection Report\\n\\n**Instance ID**: `rm-2zep6e5u6l2yu****`\\n\\n**Engine Type**: MySQL\\n\\n**Region**: cn-beijing\\n\\n**Time Range (UTC)**: 2026-02-04T03:31:00Z ~ 2026-02-05T03:31:00Z\\n\\n> This inspection includes **60** checks, of which 1 warning, 57 normal, and 2 failed to retrieve data..
     */
    markdownText?: string;
    /**
     * @remarks
     * The region information.
     *
     * @example
     * cn-beijing
     */
    region?: string;
    /**
     * @remarks
     * The inspection start time in the format of YYYY-MM-DDTHH:mm:ssZ.
     *
     * @example
     * 2025-11-06T16:00:00Z
     */
    startTime?: string;
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
export declare class GetInspectionReportResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result details.
     */
    data?: GetInspectionReportResponseBodyData[];
    /**
     * @remarks
     * The Markdown text.
     *
     * @example
     * # RDS Batch Inspection Summary Report\\n\\n> This batch inspection checked **1** instance; **1** instance was found with warnings (1 warning in total)..
     */
    markdownText?: string;
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
     * The inspection report ID.
     *
     * @example
     * 9d246af2-a0cd-4f69-857d-3785048f****
     */
    taskId?: string;
    templateId?: string;
    templateName?: string;
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
