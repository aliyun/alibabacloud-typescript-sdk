import * as $dara from '@darabonba/typescript';
export declare class CreateSAMLProviderResponseBodySAMLProvider extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud Resource Name (ARN) of the IdP.
     *
     * @example
     * acs:ram::177242285274****:saml-provider/test-provider
     */
    arn?: string;
    /**
     * @remarks
     * The supported signature algorithm. Valid values:
     *
     * - rsa-sha256
     *
     * - rsa-sha1 (default)
     *
     * @example
     * rsa-sha1
     */
    authnSignAlgo?: string;
    /**
     * @remarks
     * The time when the information was created. It is displayed in UTC.
     *
     * @example
     * 2020-10-22T02:37:05Z
     */
    createDate?: string;
    /**
     * @remarks
     * The IdP description.
     *
     * @example
     * This is a provider.
     */
    description?: string;
    /**
     * @remarks
     * The IdP name.
     *
     * @example
     * test-provider
     */
    SAMLProviderName?: string;
    /**
     * @remarks
     * The time when the information was last updated. It is displayed in UTC.
     *
     * @example
     * 2020-10-22T02:51:20Z
     */
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
export declare class CreateSAMLProviderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E5EDDFD2-3654-4F9F-9780-4AE7D81823EF
     */
    requestId?: string;
    /**
     * @remarks
     * The information about the IdP.
     */
    SAMLProvider?: CreateSAMLProviderResponseBodySAMLProvider;
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
