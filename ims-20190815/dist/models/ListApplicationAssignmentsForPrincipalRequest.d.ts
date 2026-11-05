import * as $dara from '@darabonba/typescript';
export declare class ListApplicationAssignmentsForPrincipalRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to retrieve the next page of query results. This parameter is not required for the first API call.
     *
     * @example
     * caeba0bbb2be03f84eb48b699f0a****
     */
    nextToken?: string;
    /**
     * @remarks
     * The principal name of the RAM user or the role name.
     *
     * + User principal name: The format is `<username>@<account-id>.onaliyun.com`. You can query it by calling the GetUser or ListUsers API operation.
     * + Role name: You can query it by calling the RAM ListRoles API operation.
     *
     * @example
     * user@example.onaliyun.com
     */
    principalName?: string;
    /**
     * @remarks
     * The type of the target principal for the application assignment. Valid values:
     *
     * + user: The principal type is RAM user. In this case, PrincipalName must be the user principal name.
     * + role: The principal type is RAM role. In this case, PrincipalName must be the role name.
     *
     * @example
     * user
     */
    principalType?: string;
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
