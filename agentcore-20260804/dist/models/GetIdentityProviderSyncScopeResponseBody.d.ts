import * as $dara from '@darabonba/typescript';
export declare class GetIdentityProviderSyncScopeResponseBodyDataSelectedDepartments extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the selected department still exists. A value of false indicates that the selection is invalid and the synchronization scope must be reconfirmed.
     *
     * @example
     * true
     */
    exists?: boolean;
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
     * The name of the department returned by the identity provider.
     *
     * @example
     * R&D Department
     */
    name?: string;
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
export declare class GetIdentityProviderSyncScopeResponseBodyDataSyncScope extends $dara.Model {
    /**
     * @remarks
     * When the mode is SelectedDepartments, the list must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this parameter.
     *
     * @example
     * ["10001"]
     */
    departmentIds?: string[];
    /**
     * @remarks
     * AllAuthorized: the full authorized scope, which is restricted by the application\\"s address book authorization. SelectedDepartments: the selected departments and all their child departments. When explicitly submitting syncScope, you must provide a valid mode, which is verified by the backend.
     *
     * @example
     * SelectedDepartments
     */
    mode?: string;
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
export declare class GetIdentityProviderSyncScopeResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The estimation status of the user count for the synchronization scope. The counts are available only when the status is Ready. Missing counts in other states must not be treated as 0.
     *
     * @example
     * Ready
     */
    estimateStatus?: string;
    /**
     * @remarks
     * The estimated number of users in the saved synchronization scope. This value is returned only when estimateStatus is Ready and the downstream system provides the value. It does not represent the number of users that have already been synchronized.
     *
     * @example
     * 12
     */
    estimatedUserCount?: number;
    /**
     * @remarks
     * The estimated number of departments, including child departments. This value is returned only when estimateStatus is Ready and the downstream system provides the value.
     *
     * @example
     * 2
     */
    expandedDepartmentCount?: number;
    /**
     * @remarks
     * The names and validity of the saved selected departments. This can be an empty array when the mode is AllAuthorized. An empty array does not indicate that the organization has no departments.
     *
     * @example
     * [{"id":"10001","name":"研发部","exists":true}]
     */
    selectedDepartments?: GetIdentityProviderSyncScopeResponseBodyDataSelectedDepartments[];
    /**
     * @remarks
     * The saved synchronization scope of the downstream system. AllAuthorized indicates the address book scope authorized for the application.
     *
     * @example
     * {"mode":"SelectedDepartments","departmentIds":["10001"]}
     */
    syncScope?: GetIdentityProviderSyncScopeResponseBodyDataSyncScope;
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
export declare class GetIdentityProviderSyncScopeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code of the API request. SUCCESS indicates that the request is successful, but does not indicate that the asynchronous synchronization task is completed.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The business data returned in the response.
     *
     * @example
     * {"syncScope":{"mode":"SelectedDepartments","departmentIds":["10001"]},"selectedDepartments":[{"id":"10001","name":"研发部","exists":true}],"estimateStatus":"Ready","expandedDepartmentCount":2,"estimatedUserCount":12}
     */
    data?: GetIdentityProviderSyncScopeResponseBodyData;
    /**
     * @remarks
     * The HTTP status code of the API request. This code does not indicate the execution result of the asynchronous task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
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
     * The unique identifier of the request. Provide this value when troubleshooting issues.
     *
     * @example
     * 01234567-89AB-CDEF-0123-456789ABCDEF
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the API request is successful. To check whether the asynchronous task is completed, query the task status.
     *
     * @example
     * true
     */
    success?: boolean;
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
