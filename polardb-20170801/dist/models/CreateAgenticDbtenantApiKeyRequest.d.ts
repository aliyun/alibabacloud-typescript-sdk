import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBTenantApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The AgenticDB cluster ID, which starts with pagc-. You must first call CreateDBCluster and set AgenticDbType to dedicated and ServerlessType to AgileServerless to create an AgenticDB cluster, and then pass the returned DBClusterId.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The description of the purpose.
     *
     * @example
     * Dedicated key for MCP server
     */
    description?: string;
    /**
     * @remarks
     * The expiration time in ISO 8601 format. If this parameter is not specified, the API key never expires.
     *
     * @example
     * 2027-01-01T00:00:00Z
     */
    expireTime?: string;
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
     * The ID of the existing tenant.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
    /**
     * @remarks
     * The tenant name. It must be unique within the cluster and be 2 to 64 characters in length.
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
