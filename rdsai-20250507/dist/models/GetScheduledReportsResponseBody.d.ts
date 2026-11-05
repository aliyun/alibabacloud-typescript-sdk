import * as $dara from '@darabonba/typescript';
export declare class GetScheduledReportsResponseBodyReports extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2025-01-01T22:59:59Z
     */
    createdTime?: string;
    /**
     * @remarks
     * The end time of the inspection. Format: YYYY-MM-DDTHH:mm:ssZ.
     *
     * @example
     * 2025-01-01T23:59:59Z
     */
    endTime?: string;
    inspectionItems?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    reportLanguage?: string;
    reportType?: string;
    /**
     * @remarks
     * The start time of the inspection. Format: YYYY-MM-DDTHH:mm:ssZ.
     *
     * @example
     * 2025-01-01T00:00:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * success
     */
    status?: string;
    /**
     * @remarks
     * The ID of the inspection report.
     *
     * @example
     * 65f0053b-f933-49f5-bf65-4e4593e1****
     */
    taskId?: string;
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
export declare class GetScheduledReportsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * Successfully retrieved the inspection report list
     */
    message?: string;
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
     * The number of records per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The report details.
     */
    reports?: GetScheduledReportsResponseBodyReports[];
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
     * Indicates whether the request is successful.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 20
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
