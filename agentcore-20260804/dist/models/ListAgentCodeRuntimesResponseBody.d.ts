import * as $dara from '@darabonba/typescript';
export declare class ListAgentCodeRuntimesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The runtime architecture.
     *
     * @example
     * linux/amd64
     */
    architecture?: string;
    /**
     * @remarks
     * The display name of the runtime environment.
     *
     * @example
     * Python 3.12
     */
    displayName?: string;
    /**
     * @remarks
     * The language runtime environment.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
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
export declare class ListAgentCodeRuntimesResponseBody extends $dara.Model {
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
     * The supported code runtime environments.
     */
    items?: ListAgentCodeRuntimesResponseBodyItems[];
    /**
     * @remarks
     * The actual page size.
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
     * The next page token.
     *
     * @example
     * d3MtYTFiMmMzZDRlNWY2CmNvZGUtcnVudGltZS1leGFtcGxlCjE
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
    /**
     * @remarks
     * The number of available runtime environments.
     *
     * @example
     * 3
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
