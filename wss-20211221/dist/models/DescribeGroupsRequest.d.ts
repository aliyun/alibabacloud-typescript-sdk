import * as $dara from '@darabonba/typescript';
export declare class DescribeGroupsRequest extends $dara.Model {
    /**
     * @remarks
     * The end time of the period.
     *
     * @example
     * 2026-03-28T02:06:00Z
     */
    endTime?: number;
    /**
     * @remarks
     * The list of group resource types.
     */
    groupResourceTypes?: string[];
    /**
     * @remarks
     * The group type.
     *
     * This parameter is required.
     *
     * @example
     * DEFAULT
     */
    groupType?: string;
    /**
     * @remarks
     * The Lingxiao instance ID.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 20
     */
    maxResults?: string;
    /**
     * @remarks
     * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the `nextToken` value returned in the previous response.
     *
     * @example
     * eyJvZmZzZXQiOjIwfQ==
     */
    nextToken?: string;
    /**
     * @remarks
     * The list of resource IDs.
     */
    resourceIds?: string[];
    /**
     * @remarks
     * The start time of the period.
     *
     * @example
     * 2026-03-25 10:26:44
     */
    startTime?: number;
    /**
     * @remarks
     * The list of states.
     */
    states?: string[];
    /**
     * @remarks
     * The effective period used for the query.
     *
     * @example
     * true/false
     */
    timeUsingPeriod?: boolean;
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
