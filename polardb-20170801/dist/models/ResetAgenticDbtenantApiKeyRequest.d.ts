import * as $dara from '@darabonba/typescript';
export declare class ResetAgenticDBTenantApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the target API key.
     *
     * This parameter is required.
     *
     * @example
     * ak-71304e39c7e841a1
     */
    apiKeyId?: string;
    /**
     * @remarks
     * The AgenticDB cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the target tenant.
     *
     * This parameter is required.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
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
