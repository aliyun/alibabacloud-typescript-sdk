import * as $dara from '@darabonba/typescript';
export declare class DescribeBatchTasksShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The end time of creation.
     *
     * The time is in ISO 8601 format and the UTC time zone. The format is YYYY-MM-DDTHH:mm:ssZ.
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mmZ
     *
     * @example
     * 2026-04-06T20:52:40Z
     */
    endTime?: string;
    /**
     * @remarks
     * The page number. The value must be greater than 0 and less than or equal to the maximum value of the Integer data type. Default value: 1.
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
     * The start time of creation.
     *
     * The time is in ISO 8601 format and the UTC time zone. The format is YYYY-MM-DDTHH:mm:ssZ.
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mmZ
     *
     * @example
     * 2026-04-06T20:51:40Z
     */
    startTime?: string;
    /**
     * @remarks
     * The list of task statuses.
     *
     * > If this parameter is left empty, tasks in all statuses are queried by default.
     */
    statusShrink?: string;
    /**
     * @remarks
     * The batch task type.
     *
     * @example
     * polarclaw_install_skills
     */
    taskType?: string;
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
