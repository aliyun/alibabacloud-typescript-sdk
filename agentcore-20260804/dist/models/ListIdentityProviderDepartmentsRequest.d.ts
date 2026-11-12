import * as $dara from '@darabonba/typescript';
export declare class ListIdentityProviderDepartmentsRequest extends $dara.Model {
    /**
     * @remarks
     * The number of departments returned per page. Valid values: 1 to 50. Default value: 50.
     *
     * @example
     * 50
     */
    maxResults?: number;
    /**
     * @remarks
     * The nextToken returned from the previous page. Do not pass this parameter for the first query. When continuing pagination, keep the identity provider and parentDepartmentId unchanged, and pass the token as is. An empty return value or no return value indicates that there are no subsequent pages at the current level.
     *
     * @example
     * example-next-page-token
     */
    nextToken?: string;
    /**
     * @remarks
     * Queries the direct child departments of this department. If this parameter is not passed or is empty, the root level is queried, and all descendants are not recursively returned. When expanding a node in the list, pass the id of the node, not its parentId.
     *
     * @example
     * 10001
     */
    parentDepartmentId?: string;
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
