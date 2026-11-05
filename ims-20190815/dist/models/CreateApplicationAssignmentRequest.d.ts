import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationAssignmentRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * 472457090344041****
     */
    appId?: string;
    /**
     * @remarks
     * The principal name of the RAM user or the role name.
     *
     * + User principal name: The format is `<username>@<account-id>.onaliyun.com`. You can query it by calling the `GetUser` or `ListUsers` API.
     * + Role name: You can query it by calling the RAM `ListRoles` API.
     *
     * This parameter is required.
     *
     * @example
     * user@example.onaliyun.com
     */
    principalName?: string;
    /**
     * @remarks
     * The type of the target principal for the application assignment. Valid values:
     *
     * + user: The principal is a RAM user. In this case, PrincipalName must be the user principal name.
     * + role: The principal is a RAM role. In this case, PrincipalName must be the role name.
     *
     * This parameter is required.
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
