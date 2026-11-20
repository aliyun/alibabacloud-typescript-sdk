import * as $dara from '@darabonba/typescript';
export declare class ModifyInstancesSSLResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of instance IDs of the AI applications that were successfully modified.
     *
     * @example
     * [
     *     "ra-supabase-xxx",
     *     "ra-supabase-xxx"
     *   ]
     */
    instanceNames?: string[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 32DEFB4A-xxxx-ADD5-918E4FD7AB8C
     */
    requestId?: string;
    /**
     * @remarks
     * The expiration time of the custom SSL certificate. The time is in the yyyy-MM-dd HH:mm:ss format and in the UTC+8 time zone.
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
