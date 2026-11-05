import * as $dara from '@darabonba/typescript';
export declare class GetLoginProfileResponseBodyLoginProfile extends $dara.Model {
    /**
     * @remarks
     * Specifies whether console logon is automatically disabled when the idle disablement conditions are met. This feature is enabled by default and cannot be disabled.
     *
     * @example
     * true
     */
    autoDisableLoginStatus?: string;
    /**
     * @remarks
     * The last console logon time in UTC.
     *
     * @example
     * 2020-10-14T07:25:25Z
     */
    lastLoginTime?: string;
    /**
     * @remarks
     * Specifies whether the user is required to enable multi-factor authentication (MFA). Valid values:
     *
     * - false: MFA is not required.
     * - true: MFA is required.
     *
     * @example
     * false
     */
    MFABindRequired?: boolean;
    /**
     * @remarks
     * Specifies whether the Resource Access Management (RAM) user must reset the password upon the next logon. Valid values:
     *
     * - false: The user is not required to reset the password.
     * - true: The user must reset the password.
     *
     * @example
     * false
     */
    passwordResetRequired?: boolean;
    /**
     * @remarks
     * The status of the initial password. An initial password is the password set when console logon is newly created or re-enabled. Valid values:
     *
     * - "NotInitial": The password is not an initial password.
     * - "InitialValid": The initial password is valid.
     * - "InitialExpired": The initial password has expired.
     *
     * @example
     * NotInitial
     */
    passwordStatus?: string;
    /**
     * @remarks
     * Indicates whether console logon is enabled or disabled. Valid values:
     *
     * - Active: Console logon is enabled.
     * - Inactive: Console logon is disabled.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The update time in UTC.
     *
     * @example
     * 2020-10-14T06:56:45Z
     */
    updateDate?: string;
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user.
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
export declare class GetLoginProfileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The console logon profile.
     */
    loginProfile?: GetLoginProfileResponseBodyLoginProfile;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E517F18B-632C-48FC-93F1-CDCBCC6F8444
     */
    requestId?: string;
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
