import * as $dara from '@darabonba/typescript';
export declare class ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider extends $dara.Model {
    arn?: string;
    createDate?: string;
    description?: string;
    SAMLProviderName?: string;
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
export declare class ListSAMLProvidersResponseBodySAMLProviders extends $dara.Model {
    SAMLProvider?: ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider[];
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
export declare class ListSAMLProvidersResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
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
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2D8B70D3-E194-41C9-93C5-F6A10D716D24
     */
    requestId?: string;
    SAMLProviders?: ListSAMLProvidersResponseBodySAMLProviders;
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
