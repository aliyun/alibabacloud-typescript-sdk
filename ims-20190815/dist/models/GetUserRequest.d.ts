import * as $dara from '@darabonba/typescript';
export declare class GetUserRequest extends $dara.Model {
    /**
     * @remarks
     * The AccessKey ID of the Resource Access Management (RAM) user.
     * > You must specify exactly one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.
     *
     * @example
     * LTAI*******************
     */
    userAccessKeyId?: string;
    /**
     * @remarks
     * The ID of the Resource Access Management (RAM) user.
     * > You must specify exactly one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.
     *
     * @example
     * 20732900249392****
     */
    userId?: string;
    /**
     * @remarks
     * The logon Resource Access Management (RAM) user.
     *
     * The format is `<username>@<AccountAlias>.onaliyun.com`, where `<username>` is the Resource Access Management (RAM) user and `<AccountAlias>.onaliyun.com` is the default domain name.
     *
     * The `UserPrincipalName` must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The `<username>` must be 1 to 64 characters in length.
     *
     * > You must specify exactly one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.
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
