import * as $dara from '@darabonba/typescript';
export declare class DeleteAgenticDBTenantApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the API key to delete.
     *
     * This parameter is required.
     *
     * @example
     * ak-71304e39c7e841a1
     */
    apiKeyId?: string;
    /**
     * @remarks
     * The ID of the AgenticDB cluster.
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
     * The tenant ID, which is used for secondary verification on the backend.
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
