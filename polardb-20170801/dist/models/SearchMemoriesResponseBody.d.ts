import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesResponseBodyResults extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * The time follows the ISO 8601 standard in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2025-09-26T08:25:44Z
     */
    createTime?: string;
    /**
     * @remarks
     * The memory ID.
     *
     * @example
     * 423
     */
    id?: string;
    /**
     * @remarks
     * The memory content.
     *
     * @example
     * xxx
     */
    memory?: string;
    /**
     * @remarks
     * The agent to which the memory belongs.
     *
     * @example
     * agent1
     */
    memoryAgentId?: string;
    /**
     * @remarks
     * The user to whom the memory belongs.
     *
     * @example
     * user1
     */
    memoryUserId?: string;
    /**
     * @remarks
     * The metadata.
     *
     * @example
     * {"tags":"Issue_date_2023-11-30,VD_Valid"}
     */
    metadata?: string;
    /**
     * @remarks
     * The score.
     *
     * @example
     * 12
     */
    score?: string;
    /**
     * @remarks
     * The update time.
     *
     * The time follows the ISO 8601 standard in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2025-10-16T02:27:33Z
     */
    updateTime?: string;
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
export declare class SearchMemoriesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    page?: string;
    /**
     * @remarks
     * The number of records per page.
     *
     * @example
     * 10
     */
    pageSize?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * The list of results.
     */
    results?: SearchMemoriesResponseBodyResults[];
    /**
     * @remarks
     * The total number of matching records.
     *
     * @example
     * 1
     */
    total?: string;
    /**
     * @remarks
     * The total number of pages.
     *
     * @example
     * 1
     */
    totalPages?: string;
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
