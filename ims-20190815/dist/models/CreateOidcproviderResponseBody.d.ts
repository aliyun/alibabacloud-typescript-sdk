import * as $dara from '@darabonba/typescript';
export declare class CreateOIDCProviderResponseBodyOIDCProvider extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
     *
     * @example
     * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
     */
    arn?: string;
    /**
     * @remarks
     * The ID of the client.
     *
     * @example
     * 498469743454717****
     */
    clientIds?: string;
    /**
     * @remarks
     * The time when the OIDC IdP was created. The time is displayed in UTC.
     *
     * @example
     * 2021-11-11T06:56:03Z
     */
    createDate?: string;
    /**
     * @remarks
     * The description of the OIDC IdP.
     *
     * @example
     * This is an OIDC Provider.
     */
    description?: string;
    /**
     * @remarks
     * The fingerprint of the HTTPS certificate.
     *
     * @example
     * 902ef2deeb3c5b13ea4c3d5193629309e231****
     */
    fingerprints?: string;
    /**
     * @remarks
     * The timestamp when the OIDC IdP was created.
     *
     * @example
     * 1636613763000
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The timestamp when the OIDC IdP was modified.
     *
     * @example
     * 1636613763000
     */
    gmtModified?: string;
    /**
     * @remarks
     * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
     *
     * @example
     * 6
     */
    issuanceLimitTime?: number;
    /**
     * @remarks
     * The URL of the issuer.
     *
     * @example
     * https://xxxxxx.example.com
     */
    issuerUrl?: string;
    /**
     * @remarks
     * The name of the OIDC IdP.
     *
     * @example
     * TestOIDCProvider
     */
    OIDCProviderName?: string;
    /**
     * @remarks
     * The time when the OIDC IdP was modified. The time is displayed in UTC.
     *
     * @example
     * 2021-11-11T06:56:03Z
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
export declare class CreateOIDCProviderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the OIDC IdP.
     */
    OIDCProvider?: CreateOIDCProviderResponseBodyOIDCProvider;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 64B11B41-636D-51E3-A39B-C8703CD2218C
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
