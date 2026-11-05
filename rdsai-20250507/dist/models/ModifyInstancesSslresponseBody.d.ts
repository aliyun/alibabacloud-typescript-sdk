import * as $dara from '@darabonba/typescript';
export declare class ModifyInstancesSSLResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of instance IDs of AI applications that were successfully modified.
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
