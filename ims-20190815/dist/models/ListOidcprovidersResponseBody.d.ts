import * as $dara from '@darabonba/typescript';
export declare class ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider extends $dara.Model {
    arn?: string;
    clientIds?: string;
    createDate?: string;
    description?: string;
    fingerprints?: string;
    gmtCreate?: string;
    gmtModified?: string;
    issuanceLimitTime?: number;
    issuerUrl?: string;
    OIDCProviderName?: string;
    updateDate?: string;
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
export declare class ListOIDCProvidersResponseBodyOIDCProviders extends $dara.Model {
    OIDCProvider?: ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider[];
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
export declare class ListOIDCProvidersResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * false
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.\\`\\`
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    OIDCProviders?: ListOIDCProvidersResponseBodyOIDCProviders;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D2148337-B86A-57F0-8B31-EB7BE0125226
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
