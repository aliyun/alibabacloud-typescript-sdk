import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBTenantRequest extends $dara.Model {
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
     * The description of the tenant. The description can be up to 256 characters in length.
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
     * The tenant name. The name must be 1 to 64 characters in length, start with a letter, and contain only letters, digits, underscores (_), and hyphens (-).
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
