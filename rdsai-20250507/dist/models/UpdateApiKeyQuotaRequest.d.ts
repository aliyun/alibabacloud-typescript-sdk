import * as $dara from '@darabonba/typescript';
export declare class UpdateApiKeyQuotaRequestKeys extends $dara.Model {
    /**
     * @remarks
     * API KEY
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
     * 100000000
     */
    dailyTokenQuota?: number;
    /**
     * @remarks
     * The rate limit ratio. This parameter is required when the limit type is set to ratio.
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
     * The fixed rate limit value. This parameter is required when the limit type is set to fixed.
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
export declare class UpdateApiKeyQuotaRequest extends $dara.Model {
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The list of API keys.
     */
    keys?: UpdateApiKeyQuotaRequestKeys[];
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
