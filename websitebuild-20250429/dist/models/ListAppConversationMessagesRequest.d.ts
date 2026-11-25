import * as $dara from '@darabonba/typescript';
export declare class ListAppConversationMessagesRequest extends $dara.Model {
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
     */
    conversationId?: string;
    /**
     * @remarks
     * The number of results returned per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to start the next query. This parameter is empty if there are no more results.
     *
     * @example
     * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
     */
    nextToken?: string;
    /**
     * @remarks
     * The number of entries per page. Valid values: 10 to 100.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * 734600510965856
     */
    siteId?: string;
    /**
     * @remarks
     * The creation time of the last entry on the previous page in ISO 8601 format.
     *
     * @example
     * null
     */
    startCreateTime?: string;
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
