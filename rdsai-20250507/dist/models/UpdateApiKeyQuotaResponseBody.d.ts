import * as $dara from '@darabonba/typescript';
export declare class UpdateApiKeyQuotaResponseBodyDataCustomKeyList extends $dara.Model {
    /**
     * @remarks
     * Api Key
     *
     * @example
     * sk-rds-xxx
     */
    apiKey?: string;
    /**
     * @remarks
     * The daily quota of the API key.
     *
     * @example
     * 1000000000
     */
    dailyTokenQuota?: number;
    /**
     * @remarks
     * The quota limit ratio.
     *
     * @example
     * 0.2
     */
    limitRate?: number;
    /**
     * @remarks
     * The quota limit type. Valid values:
     * - ratio: Proportional limit.
     * - fixed: Fixed value.
     * - auto: Automatic allocation.
     *
     * @example
     * fixed
     */
    limitType?: string;
    /**
     * @remarks
     * The quota limit of the current key.
     *
     * @example
     * 10000
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
export declare class UpdateApiKeyQuotaResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of custom API keys.
     */
    customKeyList?: UpdateApiKeyQuotaResponseBodyDataCustomKeyList[];
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
export declare class UpdateApiKeyQuotaResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: UpdateApiKeyQuotaResponseBodyData;
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
     * Indicates whether the request is successful.
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
