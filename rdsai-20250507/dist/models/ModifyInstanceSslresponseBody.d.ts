import * as $dara from '@darabonba/typescript';
export declare class ModifyInstanceSSLResponseBody extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
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
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The expiration time of the custom SSL certificate. The time is in the yyyy-MM-dd HH:mm:ss format and displayed in the UTC+8 time zone.
     *
     * @example
     * 2027-12-31 23:59:59
     */
    SSLExpiredTime?: string;
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
