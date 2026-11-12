import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBTenantApiKeysResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The resource ID of the API key.
     *
     * @example
     * ak-71304e39c7e841a1
     */
    apiKeyId?: string;
    /**
     * @remarks
     * The masked API key.
     *
     * @example
     * pagc_key_cGFnYy1icDFhMmIz****
     */
    apiKeyMasked?: string;
    /**
     * @remarks
     * The creation time. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2026-06-10T10:30:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * MCP server token
     */
    description?: string;
    /**
     * @remarks
     * The expiration time. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2027-01-01T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The ID of the tenant to which the API key belongs.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
    /**
     * @remarks
     * The name of the tenant to which the API key belongs.
     *
     * @example
     * my-saas-app
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
export declare class DescribeAgenticDBTenantApiKeysResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of API keys.
     */
    items?: DescribeAgenticDBTenantApiKeysResponseBodyItems[];
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries returned per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C3D4E5F6-A7B8-9012-CDEF-123456789012
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 2
     */
    totalCount?: number;
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
