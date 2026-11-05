import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBTenantApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The plaintext of the API key. This value is returned only in the current response.
     *
     * @example
     * pagc_key_xxxx.yyyy
     */
    apiKey?: string;
    /**
     * @remarks
     * The resource ID of the API key.
     *
     * @example
     * ak-xxxxxxxxxxxx
     */
    apiKeyId?: string;
    /**
     * @remarks
     * The creation time. The time follows the ISO 8601 standard in the UTC time zone (YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-10T08:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The expiration time. If the API key never expires, this value is empty. The time follows the ISO 8601 standard in the UTC time zone (YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2027-01-01T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F45FFACC-1B2C-3D4E-5F6A-7B8C9D0E1F2A
     */
    requestId?: string;
    /**
     * @remarks
     * The tenant ID.
     *
     * @example
     * t-aaaa111122223333
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
