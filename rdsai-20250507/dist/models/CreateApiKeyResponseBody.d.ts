import * as $dara from '@darabonba/typescript';
export declare class CreateApiKeyResponseBodyDataCustomKeyList extends $dara.Model {
    /**
     * @remarks
     * Api Key
     *
     * @example
     * sk-rds-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The daily token quota for the API key.
     *
     * @example
     * 0
     */
    dailyTokenQuota?: number;
    /**
     * @remarks
     * The name of the API key.
     *
     * @example
     * api-*****
     */
    keyName?: string;
    /**
     * @remarks
     * The quota limit percentage.
     *
     * @example
     * 0.2
     */
    limitRate?: number;
    /**
     * @remarks
     * The quota limit type. Valid values:
     *
     * - **fixed**: Fixed value.
     *
     * - **ratio**: Percentage-based.
     *
     * - **auto**: Automatic allocation.
     *
     * @example
     * fixed
     */
    limitType?: string;
    roleArn?: string;
    /**
     * @remarks
     * The token quota for the current key.
     *
     * @example
     * 100000
     */
    tokenQuota?: number;
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
export declare class CreateApiKeyResponseBodyData extends $dara.Model {
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
    customKeyList?: CreateApiKeyResponseBodyDataCustomKeyList[];
    /**
     * @remarks
     * The system-generated key.
     *
     * @example
     * sk-rds-xxx
     */
    systemApiKey?: string;
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
export declare class CreateApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: CreateApiKeyResponseBodyData;
    /**
     * @remarks
     * The returned message.
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
     * FE9C65D7-930F-57A5-A207-8C396329****
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
