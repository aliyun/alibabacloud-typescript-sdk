import * as $dara from '@darabonba/typescript';
export declare class SearchMemoriesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application. Example value: pa-**************.
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
     * The ID of the memory user.
     *
     * This parameter is required.
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
     * Specifies the number of top results to return.
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
