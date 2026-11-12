import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBTenantRequest extends $dara.Model {
    /**
     * @remarks
     * The AgenticDB cluster ID, which starts with pagc-. You can obtain this ID after creating a cluster by calling CreateDBCluster with AgenticDbType set to dedicated. Standard PolarDB cluster IDs start with pc- and are not supported by this operation.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The tenant description. The description can be up to 256 characters in length.
     *
     * @example
     * Sample tenant
     */
    description?: string;
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
     * The tenant name.
     *
     * This parameter is required.
     *
     * @example
     * my-tenant
     */
    tenantName?: string;
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
