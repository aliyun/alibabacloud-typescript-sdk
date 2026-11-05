import * as $dara from '@darabonba/typescript';
export declare class UpdateContextDatabaseApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The time when the API key was created.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The API key description.
     *
     * @example
     * for nightly cron
     */
    description?: string;
    /**
     * @remarks
     * A reserved field. This field is empty.
     *
     * @example
     * (null)
     */
    expiresAt?: string;
    /**
     * @remarks
     * The suffix of the API key.
     *
     * @example
     * 33631c
     */
    keyDisplaySuffix?: string;
    /**
     * @remarks
     * The key ID.
     *
     * @example
     * 1024
     */
    keyId?: number;
    /**
     * @remarks
     * The prefix of the API key.
     *
     * @example
     * ctxdb-
     */
    keyPrefix?: string;
    /**
     * @remarks
     * The time when the API key was last used.
     *
     * @example
     * 2026-06-01T08:30:12Z
     */
    lastUsedAt?: string;
    /**
     * @remarks
     * The API key name.
     *
     * @example
     * my-key
     */
    name?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The time when the API key was revoked.
     *
     * @example
     * (null)
     */
    revokedAt?: string;
    /**
     * @remarks
     * The API key status.
     *
     * @example
     * active
     */
    status?: string;
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
