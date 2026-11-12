import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBTenantResponseBody extends $dara.Model {
    /**
     * @remarks
     * The creation time. The time is displayed in the ISO 8601 standard in the UTC time zone. The format is YYYY-MM-DDTHH:mm:ssZ, such as 2026-10-15T08:00:00Z.
     *
     * @example
     * 2026-10-15T08:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The AgenticDB cluster ID.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 01A13E8C-3773-1A76-BA95-96EA81D260DC
     */
    requestId?: string;
    /**
     * @remarks
     * The tenant ID.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
    /**
     * @remarks
     * The tenant name.
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
