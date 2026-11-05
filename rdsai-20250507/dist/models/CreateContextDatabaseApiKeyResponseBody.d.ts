import * as $dara from '@darabonba/typescript';
export declare class CreateContextDatabaseApiKeyResponseBodyKey extends $dara.Model {
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
     * The API key description. This field is not used.
     *
     * @example
     * 111
     */
    description?: string;
    /**
     * @remarks
     * This field is empty.
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
     * 1
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
     * This field is empty.
     *
     * @example
     * (null)
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
     * This field is empty.
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
export declare class CreateContextDatabaseApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * Api Key
     *
     * @example
     * ctxdb-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The API key details.
     */
    key?: CreateContextDatabaseApiKeyResponseBodyKey;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
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
