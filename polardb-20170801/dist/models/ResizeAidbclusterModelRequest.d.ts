import * as $dara from '@darabonba/typescript';
export declare class ResizeAIDBClusterModelRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB AI 3.0 logical instance.
     *
     * This parameter is required.
     *
     * @example
     * pm-2ze4x2mwo81knj08a
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to perform only a read-only capacity dry run.
     *
     * @example
     * true
     */
    dryRun?: boolean;
    /**
     * @remarks
     * The region ID. Requests are routed to the region where the instance resides.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The target total capacity. An abstract capacity unit of 1000 is equivalent to one L20N equivalent card. The value must be a positive integer.
     *
     * This parameter is required.
     *
     * @example
     * 12000
     */
    targetCapacity?: number;
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
