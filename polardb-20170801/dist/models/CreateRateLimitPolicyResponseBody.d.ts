import * as $dara from '@darabonba/typescript';
export declare class CreateRateLimitPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-xxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The policy ID.
     *
     * @example
     * 02eccf7c61cf4d05a543075ee907f3**
     */
    policyId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
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
