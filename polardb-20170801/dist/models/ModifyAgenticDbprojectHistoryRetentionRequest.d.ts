import * as $dara from '@darabonba/typescript';
export declare class ModifyAgenticDBProjectHistoryRetentionRequest extends $dara.Model {
    /**
     * @remarks
     * The AgenticDB cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The default valid range is 3,600 to 2,592,000 seconds (1 hour to 30 days), inclusive, subject to service configurations. Shortening the duration may clear historical data. Extending the duration does not restore cleared data.
     *
     * This parameter is required.
     *
     * @example
     * 604800
     */
    historyRetentionSeconds?: number;
    /**
     * @remarks
     * The ID of the target project.
     *
     * This parameter is required.
     *
     * @example
     * proj-a1b2c3d4e5f6
     */
    projectId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The tenant ID.
     *
     * This parameter is required.
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
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
