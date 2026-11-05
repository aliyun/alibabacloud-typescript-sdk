import * as $dara from '@darabonba/typescript';
export declare class GetSAMLProviderResponseBodySAMLProvider extends $dara.Model {
    /**
     * @remarks
     * The ARN of the identity provider.
     *
     * @example
     * acs:ram::177242285274****:saml-provider/test-provider
     */
    arn?: string;
    /**
     * @remarks
     * The signature algorithm supported by the Alibaba Cloud service provider (SP). Valid values:
     *
     * - rsa-sha256
     * - rsa-sha1
     *
     * @example
     * rsa-sha1
     */
    authnSignAlgo?: string;
    /**
     * @remarks
     * The creation time. Format: RFC 3339 (UTC). Example: 2020-10-22T02:37:05Z.
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
     * This is a provider.
     */
    description?: string;
    /**
     * @remarks
     * The metadata document. The document is Base64-encoded.
     *
     * @example
     * PD94bWwgdmVy****
     */
    encodedSAMLMetadataDocument?: string;
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
     * The update time. Format: RFC 3339 (UTC). Example: 2020-10-22T02:51:20Z.
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
export declare class GetSAMLProviderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * BAADB995-0C7A-476D-B293-7E94568EEDFB
     */
    requestId?: string;
    /**
     * @remarks
     * The identity provider information.
     */
    SAMLProvider?: GetSAMLProviderResponseBodySAMLProvider;
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
