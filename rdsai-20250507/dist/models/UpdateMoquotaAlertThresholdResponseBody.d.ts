import * as $dara from '@darabonba/typescript';
export declare class UpdateMOQuotaAlertThresholdResponseBodyResults extends $dara.Model {
    /**
     * @remarks
     * API Key
     *
     * @example
     * sk-rds-*****
     */
    apikey?: string;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rds_copilot***_public_cn-o*****1
     */
    instanceId?: string;
    /**
     * @remarks
     * The API key name.
     *
     * @example
     * api-*****
     */
    keyName?: string;
    /**
     * @remarks
     * The key type.
     *
     * @example
     * system / custom
     */
    keyType?: string;
    /**
     * @remarks
     * The alert threshold percentage. For example, 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
     *
     * @example
     * [0, 100]. 0 clears the alert settings
     */
    thresholdPercent?: number;
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
export declare class UpdateMOQuotaAlertThresholdResponseBody extends $dara.Model {
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
     * The list of results.
     */
    results?: UpdateMOQuotaAlertThresholdResponseBodyResults[];
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
