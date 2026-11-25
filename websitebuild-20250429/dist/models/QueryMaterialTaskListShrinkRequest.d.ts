import * as $dara from '@darabonba/typescript';
export declare class QueryMaterialTaskListShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the business group.
     *
     * @example
     * GROUP_1
     */
    bizGroupId?: string;
    /**
     * @remarks
     * The maximum number of entries to return for a single request. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to start the next query. If no next query is available, this parameter is left empty.
     *
     * @example
     * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
     */
    nextToken?: string;
    /**
     * @remarks
     * The field by which to sort the results.
     *
     * @example
     * gmtCreated
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort order.
     *
     * @example
     * DESC
     */
    orderType?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 10.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The list of task statuses.
     */
    statusListShrink?: string;
    /**
     * @remarks
     * The list of task types.
     */
    taskTypeListShrink?: string;
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
