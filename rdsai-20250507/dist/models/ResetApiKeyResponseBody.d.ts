import * as $dara from '@darabonba/typescript';
export declare class ResetApiKeyResponseBodyDataCustomKeyList extends $dara.Model {
    /**
     * @remarks
     * The custom API key.
     *
     * @example
     * sk-rds-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The API key name.
     *
     * @example
     * api-*****
     */
    keyName?: string;
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
export declare class ResetApiKeyResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The system API key.
     *
     * @example
     * sk-rds-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The URL for model invocation.
     *
     * @example
     * http://xxx.yy/v1
     */
    baseUrl?: string;
    /**
     * @remarks
     * The list of custom API keys.
     */
    customKeyList?: ResetApiKeyResponseBodyDataCustomKeyList[];
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
export declare class ResetApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query result.
     */
    data?: ResetApiKeyResponseBodyData;
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
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The request result.
     *
     * @example
     * true
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
