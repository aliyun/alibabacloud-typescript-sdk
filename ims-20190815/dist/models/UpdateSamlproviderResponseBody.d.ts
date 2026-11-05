import * as $dara from '@darabonba/typescript';
export declare class UpdateSAMLProviderResponseBodySAMLProvider extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud Resource Name (ARN) of the identity provider.
     *
     * @example
     * acs:ram::177242285274****:saml-provider/test-provider
     */
    arn?: string;
    /**
     * @remarks
     * The signature algorithm supported by the Alibaba Cloud SP. Valid values:
     *
     * - rsa-sha256
     *
     * - rsa-sha1
     *
     * @example
     * rsa-sha1
     */
    authnSignAlgo?: string;
    /**
     * @remarks
     * The time when the identity provider was created. The time is in UTC.
     *
     * @example
     * 2020-10-22T02:37:05Z
     */
    createDate?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * This is a new provider.
     */
    description?: string;
    /**
     * @remarks
     * The name of the identity provider.
     *
     * @example
     * test-provider
     */
    SAMLProviderName?: string;
    /**
     * @remarks
     * The time when the identity provider was last updated. The time is in Coordinated Universal Time (UTC).
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
export declare class UpdateSAMLProviderResponseBody extends $dara.Model {
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
     * The information about the identity provider.
     */
    SAMLProvider?: UpdateSAMLProviderResponseBodySAMLProvider;
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
