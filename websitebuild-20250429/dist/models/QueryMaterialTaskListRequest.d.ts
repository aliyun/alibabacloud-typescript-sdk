import * as $dara from '@darabonba/typescript';
export declare class QueryMaterialTaskListRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the business group.
     *
     * @example
     * xx
     */
    bizGroupId?: string;
    /**
     * @remarks
     * The number of entries per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next query. This parameter is empty if no more results exist.
     *
     * @example
     * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
     */
    nextToken?: string;
    /**
     * @remarks
     * The field used for sorting.
     *
     * @example
     * gmtCreated
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort type. Valid values: ASC and DESC.
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
    statusList?: string[];
    /**
     * @remarks
     * The list of task types.
     */
    taskTypeList?: string[];
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
