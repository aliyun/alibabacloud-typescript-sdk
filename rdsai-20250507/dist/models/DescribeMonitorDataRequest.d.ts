import * as $dara from '@darabonba/typescript';
export declare class DescribeMonitorDataRequest extends $dara.Model {
    /**
     * @remarks
     * The API key name.
     */
    apiKeyName?: string[];
    /**
     * @remarks
     * The end time. Format: Timestamp.
     *
     * This parameter is required.
     *
     * @example
     * 1627269085
     */
    endTime?: number;
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
     * The statistical period. Default value: 15s.
     *
     * @example
     * 15
     */
    interval?: number;
    /**
     * @remarks
     * The metric to query. Valid values:
     *
     * - pv
     * - uv
     *
     * - qps
     *
     * - success_rate
     *
     * - rt
     *
     * - rate_limited_count
     *
     * - tpm
     *
     * - cache
     *
     * This parameter is required.
     *
     * @example
     * ● pv
     */
    metric?: string;
    /**
     * @remarks
     * The start time. Format: Timestamp.
     *
     * This parameter is required.
     *
     * @example
     * 1627268185
     */
    startTime?: number;
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
