import * as $dara from '@darabonba/typescript';
export declare class ListRbacPermissionsRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The number of entries to return in each query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token that is used to start the next query. This parameter is empty if no next query exists.
     *
     * @example
     * AAAAARbaCuN6hiD08qrLdwJ9Fh3BFw8paIJ7ylB6A7Qn9JjM
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
     * The sort order. Valid values: ASC and DESC.
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
