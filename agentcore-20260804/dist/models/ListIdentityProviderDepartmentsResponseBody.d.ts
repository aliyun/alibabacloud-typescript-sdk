import * as $dara from '@darabonba/typescript';
export declare class ListIdentityProviderDepartmentsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the department has child departments. A value of true indicates that the department has child departments, and an expansion entry can be displayed based on this value. A value of false indicates a leaf node. If this parameter is not returned, the value is unknown. To obtain details about the child departments, use the ID of the current node to query them separately.
     *
     * @example
     * true
     */
    hasChildren?: boolean;
    /**
     * @remarks
     * The unique identifier of the department returned by the identity provider. When querying the child departments of this node, use this value as parentDepartmentId.
     *
     * @example
     * 10001
     */
    id?: string;
    /**
     * @remarks
     * The number of department members returned by the identity provider. This parameter is not returned when the value is unknown. Do not treat a missing value as 0.
     *
     * @example
     * 12
     */
    memberCount?: number;
    /**
     * @remarks
     * The name of the department returned by the identity provider.
     *
     * @example
     * R&D Department
     */
    name?: string;
    /**
     * @remarks
     * The ID of the parent department to which this department belongs. This value describes the parent-child relationship and is not used to expand the current node.
     *
     * @example
     * 1
     */
    parentId?: string;
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
export declare class ListIdentityProviderDepartmentsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code of the API request. SUCCESS indicates that the current request is successful, but does not indicate that the asynchronous synchronization task is completed.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code of the API request. This does not indicate the execution result of an asynchronous task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The direct child departments on the current page under the current parent department. For details about the child departments, query them separately.
     *
     * @example
     * [{"id":"10001","name":"研发部","parentId":"1","memberCount":12,"hasChildren":true}]
     */
    items?: ListIdentityProviderDepartmentsResponseBodyItems[];
    /**
     * @remarks
     * The number of entries per page used for the current query.
     *
     * @example
     * 50
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message of the API request.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The token for the next page. An empty value or no return value indicates that there are no subsequent pages at the current level of the parent department, which does not mean that the entire department tree has been returned.
     *
     * @example
     * example-next-page-token
     */
    nextToken?: string;
    /**
     * @remarks
     * The unique identifier of the request. Provide this value when troubleshooting issues.
     *
     * @example
     * 01234567-89AB-CDEF-0123-456789ABCDEF
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the API request is successful. To check whether an asynchronous task is completed, query the task status.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of departments. This operation does not calculate the total number of departments. Currently, JSON null is actually returned. To determine whether pagination has ended, check whether nextToken is an empty string.
     *
     * @example
     * null
     */
    totalCount?: number;
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
