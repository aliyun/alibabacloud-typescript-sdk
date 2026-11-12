import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID. Example: pa-**************. The application must be of the mem0 type. When you create the application by calling CreateApplication, set ApplicationType to mem0. If you call this operation on a non-mem0 application, the IncorrectDBInstanceEngine (403) error is returned.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The start time for memory creation.
     *
     * @example
     * yyyy-MM-ddTHH:mm:ssZ
     */
    createTimeBegin?: string;
    /**
     * @remarks
     * The end time for memory creation.
     *
     * @example
     * yyyy-MM-ddTHH:mm:ssZ
     */
    createTimeEnd?: string;
    /**
     * @remarks
     * The ID of the memory agent.
     *
     * @example
     * agent1
     */
    memoryAgentId?: string;
    /**
     * @remarks
     * The memory ID. If you specify this parameter, the complete change history of the memory is queried.
     *
     * @example
     * 4d83591f-******-4efaf8c3
     */
    memoryId?: string;
    /**
     * @remarks
     * The ID of the memory user.
     *
     * @example
     * user1
     */
    memoryUserId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    page?: number;
    /**
     * @remarks
     * The number of records to display on each page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The search query.
     *
     * @example
     * who are you
     */
    query?: string;
    /**
     * @remarks
     * The number of top results to return.
     *
     * @example
     * 3
     */
    topK?: string;
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
