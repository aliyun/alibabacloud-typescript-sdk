import * as $dara from '@darabonba/typescript';
export declare class SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $dara.Model {
    /**
     * @remarks
     * Specifies whether RAM users can manage their own AccessKeys.
     *
     * @example
     * false
     */
    allowUserToManageAccessKeys?: boolean;
    /**
     * @remarks
     * Specifies whether RAM users can manage their own API keys. Valid values:
     *
     * - true: RAM users can manage their own API keys.
     *
     * - false: RAM users cannot manage their own API keys.
     *
     * @example
     * false
     */
    allowUserToManageServiceCredentials?: boolean;
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
export declare class SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $dara.Model {
    /**
     * @remarks
     * Specifies whether RAM users can manage their own passwords.
     *
     * @example
     * true
     */
    allowUserToChangePassword?: boolean;
    /**
     * @remarks
     * Specifies whether RAM users can sign in with a passkey.
     *
     * @example
     * false
     */
    allowUserToLoginWithPasskey?: boolean;
    /**
     * @remarks
     * Specifies whether to save the verification status for seven days after a RAM user completes multi-factor authentication (MFA) during sign-in.
     *
     * @example
     * false
     */
    enableSaveMFATicket?: boolean;
    /**
     * @remarks
     * The login network mask.
     *
     * @example
     * 10.0.0.0/8
     */
    loginNetworkMasks?: string;
    /**
     * @remarks
     * The duration of the login session for a RAM user, in hours.
     *
     * @example
     * 6
     */
    loginSessionDuration?: number;
    /**
     * @remarks
     * The MFA policy for user sign-in. This parameter is the recommended replacement for `EnforceMFAForLogin`, which is still supported.
     *
     * @example
     * adaptive
     */
    MFAOperationForLogin?: string;
    /**
     * @remarks
     * This parameter is deprecated.
     *
     * @example
     * autonomous
     *
     * @deprecated
     */
    operationForRiskLogin?: string;
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
export declare class SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $dara.Model {
    /**
     * @remarks
     * Specifies whether RAM users can manage their own MFA devices.
     *
     * @example
     * false
     */
    allowUserToManageMFADevices?: boolean;
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
export declare class SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays extends $dara.Model {
    /**
     * @remarks
     * The maximum idle period, in days, for an AccessKey of a RAM user. If an AccessKey is not used within the specified period, the system automatically disables it the next day.
     *
     * Default value: 730.
     *
     * @example
     * 730
     */
    maxIdleDaysForAccessKeys?: number;
    /**
     * @remarks
     * The maximum idle period, in days, for a RAM user. If a RAM user with console sign-in enabled does not sign in within this period, the system automatically disables their console sign-in the next day. This setting does not apply to single sign-on (SSO).
     *
     * Default value: 730.
     *
     * @example
     * 730
     */
    maxIdleDaysForUsers?: number;
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
export declare class SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $dara.Model {
    /**
     * @remarks
     * Specifies whether RAM users can attach or detach their personal DingTalk accounts.
     *
     * @example
     * true
     */
    allowUserToManagePersonalDingTalk?: boolean;
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
export declare class SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference extends $dara.Model {
    /**
     * @remarks
     * The allowed MFA methods.
     */
    verificationTypes?: string[];
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
export declare class SetSecurityPreferenceResponseBodySecurityPreference extends $dara.Model {
    /**
     * @remarks
     * The AccessKey preferences.
     */
    accessKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
    /**
     * @remarks
     * The login preferences.
     */
    loginProfilePreference?: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
    /**
     * @remarks
     * The MFA (multi-factor authentication) preferences.
     */
    MFAPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
    /**
     * @remarks
     * Settings for the maximum idle period in days.
     */
    maxIdleDays?: SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays;
    /**
     * @remarks
     * The personal information preferences.
     */
    personalInfoPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
    /**
     * @remarks
     * The preferences for MFA methods.
     */
    verificationPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference;
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
export declare class SetSecurityPreferenceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 17494710-B4BA-4185-BBBB-C1A6ABDE1639
     */
    requestId?: string;
    /**
     * @remarks
     * The security preferences.
     */
    securityPreference?: SetSecurityPreferenceResponseBodySecurityPreference;
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
