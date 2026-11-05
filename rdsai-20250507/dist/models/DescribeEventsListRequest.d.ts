import * as $dara from '@darabonba/typescript';
export declare class DescribeEventsListRequest extends $dara.Model {
    /**
     * @remarks
     * The end time.
     *
     * @example
     * 2025-08-28 18:00:00
     */
    endTime?: string;
    /**
     * @remarks
     * The list of instance IDs.
     *
     * @example
     * r-uf6ce0r08lr7xn****
     */
    instanceIdList?: string;
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
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The start time.
     *
     * @example
     * 2025-01-01 18:00:00
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
