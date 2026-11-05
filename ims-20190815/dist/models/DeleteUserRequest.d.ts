import * as $dara from '@darabonba/typescript';
export declare class DeleteUserRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the RAM user.
     *
     * > You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
     *
     * @example
     * 20732900249392****
     */
    userId?: string;
    /**
     * @remarks
     * The logon name of the RAM user.
     *
     * > You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
     *
     * @example
     * test@example.onaliyun.com
     */
    userPrincipalName?: string;
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
