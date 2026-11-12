import * as $dara from '@darabonba/typescript';
export declare class CreateRateLimitPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The gateway instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The maximum number of requests per minute.
     *
     * This parameter is required.
     *
     * @example
     * 10
     */
    rateLimitRpm?: string;
    /**
     * @remarks
     * The maximum number of tokens per minute.
     *
     * This parameter is required.
     *
     * @example
     * 10
     */
    rateLimitTpm?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the throttling dimension (ConsumerGroup ID or Consumer ID).
     *
     * This parameter is required.
     *
     * @example
     * cg-xxxxxxx
     */
    scopeRefId?: string;
    /**
     * @remarks
     * The throttling dimension. Valid values:
     *
     * - **ConsumerGroup**: user group
     *
     * - **Consumer**: user
     *
     * This parameter is required.
     *
     * @example
     * ConsumerGroup
     */
    scopeType?: string;
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
