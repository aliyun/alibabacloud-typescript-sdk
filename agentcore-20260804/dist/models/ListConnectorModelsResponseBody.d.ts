import * as $dara from '@darabonba/typescript';
export declare class ListConnectorModelsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The description of the model.
     *
     * @example
     * Qwen flagship model
     */
    description?: string;
    /**
     * @remarks
     * The display name of the model.
     *
     * @example
     * Qwen3 Max
     */
    displayName?: string;
    /**
     * @remarks
     * The associated Connector Key ID. This field is not returned in the current version.
     *
     * @example
     * ckey-xxxx
     */
    keyId?: string;
    /**
     * @remarks
     * The associated Connector Key name. This field is not returned in the current version.
     *
     * @example
     * default
     */
    keyName?: string;
    /**
     * @remarks
     * The stable identifier of the model.
     *
     * @example
     * qwen3-max
     */
    modelId?: string;
    /**
     * @remarks
     * The source of the model.
     *
     * @example
     * official
     */
    source?: string;
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
export declare class ListConnectorModelsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
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
     * The list of available models.
     */
    items?: ListConnectorModelsResponseBodyItems[];
    /**
     * @remarks
     * The number of models returned in this request.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The next page token. This field is not returned in the current version.
     *
     * @example
     * dGVzdA==
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of models returned.
     *
     * @example
     * 100
     */
    totalCount?: number;
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
