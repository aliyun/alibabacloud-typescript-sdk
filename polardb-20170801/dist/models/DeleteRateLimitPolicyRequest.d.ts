import * as $dara from '@darabonba/typescript';
export declare class DeleteRateLimitPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The gateway instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The policy ID.
     *
     * This parameter is required.
     *
     * @example
     * 02eccf7c61cf4d05a543075ee907f3**
     */
    policyId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
