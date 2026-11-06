import * as $dara from '@darabonba/typescript';
export declare class GetServiceEndpointApiKeyResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The active API key of the service endpoint. The service reads this value in real time from the gateway consumer, and AgentCore does not persist the plaintext. When calling the service endpoint, place this value in the request header specified by apiKeyName. Do not log this value or expose it in public configurations.
     *
     * @example
     * example-api-key-value
     */
    apiKey?: string;
    /**
     * @remarks
     * The API key fingerprint, which consists of the first 12 lowercase hexadecimal characters of the SHA-256 digest of the API key. It can be used to identify the key version but cannot replace the API key for authentication.
     *
     * @example
     * b2520bf19231
     */
    apiKeyFingerprint?: string;
    /**
     * @remarks
     * The name of the HTTP request header used to pass the API key. Currently, this is fixed to x-api-key.
     *
     * @example
     * x-api-key
     */
    apiKeyName?: string;
    /**
     * @remarks
     * The delivery location of the API key. Currently, this is fixed to Header, which indicates that the API key is passed through an HTTP request header.
     *
     * @example
     * Header
     */
    apiKeySource?: string;
    /**
     * @remarks
     * The authentication type of the service endpoint. Valid values: NONE (authentication is disabled) and API_KEY (API key authentication is used). This operation succeeds only when the authentication type is API_KEY. Therefore, a successful response always returns API_KEY.
     *
     * @example
     * API_KEY
     */
    authenticationType?: string;
    /**
     * @remarks
     * The ID of the service endpoint.
     *
     * @example
     * se-1
     */
    serviceEndpointId?: string;
    /**
     * @remarks
     * The ID of the workspace to which the service endpoint belongs.
     *
     * @example
     * ws-1
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
export declare class GetServiceEndpointApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The active API key information of the service endpoint.
     */
    data?: GetServiceEndpointApiKeyResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message. The value is success if the request is successful.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID, which is used to troubleshoot and trace the request.
     *
     * @example
     * req-1
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. The value is true if the request is successful.
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
