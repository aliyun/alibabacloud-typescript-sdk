import * as $dara from '@darabonba/typescript';
export declare class UpdateMOQuotaAlertThresholdRequestApikey extends $dara.Model {
    /**
     * @remarks
     * ApiKey
     *
     * @example
     * sk-rds-*****
     */
    apikey?: string;
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
export declare class UpdateMOQuotaAlertThresholdRequest extends $dara.Model {
    /**
     * @remarks
     * The list of API keys.
     *
     * This parameter is required.
     */
    apikey?: UpdateMOQuotaAlertThresholdRequestApikey[];
    /**
     * @remarks
     * The instance name.
     *
     * This parameter is required.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
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
