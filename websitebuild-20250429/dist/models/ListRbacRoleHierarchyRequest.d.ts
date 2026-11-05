import * as $dara from '@darabonba/typescript';
export declare class ListRbacRoleHierarchyRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The number of entries to return per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to start the next query. If no next query is available, this parameter is empty.
     *
     * @example
     * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
     */
    nextToken?: string;
    /**
     * @remarks
     * The sort field.
     *
     * @example
     * CreationTime
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort order. Valid values: ASC and DESC.
     *
     * @example
     * DOWNGRADE
     */
    orderType?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 0
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
