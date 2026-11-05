import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceAuthInfoResponseBodyApiKeys extends $dara.Model {
    /**
     * @remarks
     * The ANON_KEY of Supabase.
     *
     * @example
     * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz****J9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzU1Nzg1ODc1LCJleHAiOjEzMjY2NDI1ODc1fQ.EGNFdeWRZBsdB051EzQsBwvDJveC9IMEXWUCDLX****
     */
    anonKey?: string;
    e2bApiKey?: string;
    /**
     * @remarks
     * The SERVICE_ROLE_KEY of Supabase.
     *
     * @example
     * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz****J9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJzZXJ2aWNlX3JvbGUiLCJpYXQiOjE3NTU3ODU4NzUsImV4cCI6MTMyNjY0MjU4NzV9.oJt4UF8cpSDOvjW39IM4fLp2750rEvxFnkNqcVM****
     */
    serviceKey?: string;
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
export declare class DescribeInstanceAuthInfoResponseBodyConfigList extends $dara.Model {
    /**
     * @remarks
     * The name of the configuration item. Valid values:
     *
     * - **GOTRUE_EXTERNAL_EMAIL_ENABLED**: Specifies whether external emails are allowed.
     * - **GOTRUE_SITE_URL**: The website URL displayed when the AI application sends emails.
     * - **GOTRUE_SMTP_PORT**: The port of the SMTP service provider.
     * - **GOTRUE_SMTP_SENDER_NAME**: The name of the email sender.
     * - **GOTRUE_SMTP_USER**: The username of the SMTP service provider.
     * - **GOTRUE_SMTP_PASS**: The password of the SMTP service provider.
     * - **GOTRUE_SMTP_ADMIN_EMAIL**: The email address of the SMTP service provider.
     * - **GOTRUE_SMTP_HOST**: The host address of the SMTP service provider.
     * - **GOTRUE_MAILER_AUTOCONFIRM**: Specifies whether automatic confirmation is enabled.
     * - **GOTRUE_MAILER_OTP_EXP**: The validity period of the one-time password (OTP). Unit: seconds.
     * - **GOTRUE_MAILER_OTP_LENGTH**: The length of the one-time password (OTP). The value must be an integer greater than or equal to 6.
     *
     * @example
     * GOTRUE_SITE_URL
     */
    name?: string;
    /**
     * @remarks
     * The value of the configuration item.
     *
     * @example
     * http://8.152. XXX.XXX
     */
    value?: string;
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
export declare class DescribeInstanceAuthInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The API keys.
     */
    apiKeys?: DescribeInstanceAuthInfoResponseBodyApiKeys;
    /**
     * @remarks
     * Reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    /**
     * @remarks
     * The list of authentication information.
     */
    configList?: DescribeInstanceAuthInfoResponseBodyConfigList[];
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The JWT secret.
     *
     * @example
     * g7jgepleljS8nxAwsOd2EDWkBWi7JcU1m2Gj****
     */
    jwtSecret?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
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
