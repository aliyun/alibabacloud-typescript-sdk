import * as $dara from '@darabonba/typescript';
export declare class CreateLoginProfileResponseBodyLoginProfile extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the Resource Access Management (RAM) user is required to enable multi-factor authentication (MFA).
     *
     * @example
     * false
     */
    MFABindRequired?: boolean;
    /**
     * @remarks
     * Indicates whether the Resource Access Management (RAM) user is required to reset the password upon the next logon.
     *
     * @example
     * false
     */
    passwordResetRequired?: boolean;
    /**
     * @remarks
     * The status of the initial password. An initial password is the password set when console logon is created or re-enabled. Valid values:
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
     * The status of console password logon.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The update time. The time is in the RFC 3339 format in UTC, such as 2020-10-14T03:47:51Z.
     *
     * @example
     * 2020-10-14T03:47:51Z
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
export declare class CreateLoginProfileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The console logon profile.
     */
    loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 29CB303C-1F05-43A6-A6BC-EBC5A797F8DB
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
