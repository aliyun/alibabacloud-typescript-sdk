import * as $dara from '@darabonba/typescript';
export declare class UpdateAccessApplicationResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The access application ID.
     *
     * @example
     * app-1234567890
     */
    applicationId?: string;
    /**
     * @remarks
     * The name of the access application.
     *
     * @example
     * my-access-application
     */
    applicationName?: string;
    /**
     * @remarks
     * The OAuth client ID.
     *
     * @example
     * client-1234567890
     */
    clientId?: string;
    /**
     * @remarks
     * The creation time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The metadata URL of the identity provider.
     *
     * @example
     * https://example.com/.well-known/openid-configuration
     */
    metadataUrl?: string;
    /**
     * @remarks
     * The list of redirect URIs.
     */
    redirectUris?: string[];
    /**
     * @remarks
     * The update time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The user source.
     *
     * @example
     * LOCAL
     */
    userSource?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1234567890
     */
    workspaceId?: string;
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
export declare class UpdateAccessApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * Success
     */
    code?: string;
    /**
     * @remarks
     * The details of the access application.
     */
    data?: UpdateAccessApplicationResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request processing result message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
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
