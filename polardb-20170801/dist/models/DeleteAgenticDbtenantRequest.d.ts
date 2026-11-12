import * as $dara from '@darabonba/typescript';
export declare class DeleteAgenticDBTenantRequest extends $dara.Model {
    /**
     * @remarks
     * The AgenticDB cluster ID, which must start with pagc-. You must first call CreateDBCluster and set AgenticDbType to dedicated to create a cluster, and then use the returned DBClusterId. Regular PolarDB cluster IDs are not supported.
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
     * The tenant ID.
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
