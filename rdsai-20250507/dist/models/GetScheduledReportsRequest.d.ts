import * as $dara from '@darabonba/typescript';
export declare class GetScheduledReportsRequest extends $dara.Model {
    /**
     * @remarks
     * The end time for filtering. Format: YYYY-MM-DDTHH:mm:ssZ. If you do not specify this parameter, no filtering is applied.
     *
     * @example
     * 2026-01-25T02:02:00Z
     */
    endTime?: string;
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
     * The number of entries per page. Default value: 20. Maximum value: 100.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The ID of the scheduled task.
     *
     * This parameter is required.
     *
     * @example
     * 847268a4-196f-416b-aa12-bfe0c115****
     */
    scheduledId?: string;
    /**
     * @remarks
     * The start time for filtering. Format: YYYY-MM-DDTHH:mm:ssZ. If you do not specify this parameter, no filtering is applied.
     *
     * @example
     * 2026-01-25T01:02:00Z
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
