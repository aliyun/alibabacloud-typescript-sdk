import * as $dara from '@darabonba/typescript';
export declare class CreateCostRuleResponseBodyInputTokenTiers extends $dara.Model {
    /**
     * @remarks
     * The input cost points per million tokens for the tier.
     *
     * @example
     * 1000
     */
    inputCostPointsPerMillion?: string;
    /**
     * @remarks
     * The token tier. Valid values: "" (default tier), 0-32K, 32K-64K, 64K-128K, 128K-256K, 256K-512K, 512K-1M, and 1M+.
     *
     * @example
     * 0-32K
     */
    tier?: string;
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
export declare class CreateCostRuleResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of model API IDs affected by the rule.
     *
     * @example
     * ["ma-2ze3x6i1d7g5rto28"]
     */
    affectedModelApiIds?: string[];
    /**
     * @remarks
     * The cache read cost points per million tokens.
     *
     * @example
     * 40
     */
    cacheCostPointsPerMillion?: string;
    /**
     * @remarks
     * The cache creation (write) cost points per million tokens.
     *
     * @example
     * 400
     */
    cacheCreationCostPointsPerMillion?: string;
    /**
     * @remarks
     * The cost rule ID.
     *
     * @example
     * 924d450014e64e88ac6e8486f8e990**
     */
    costRuleId?: string;
    /**
     * @remarks
     * The effective end time.
     *
     * @example
     * 2026-10-01T00:00:00Z
     */
    effectiveEndTime?: string;
    /**
     * @remarks
     * The effective start time.
     *
     * @example
     * 2026-09-01T00:00:00Z
     */
    effectiveStartTime?: string;
    /**
     * @remarks
     * The effective target type. Valid values: global, consumerGroup, and consumer.
     *
     * @example
     * global
     */
    effectiveTargetType?: string;
    /**
     * @remarks
     * The effective target value. This parameter has a value when the effective target type is not global.
     *
     * @example
     * c-xxx
     */
    effectiveTargetValue?: string;
    /**
     * @remarks
     * The explicit cache read cost points per million tokens.
     *
     * @example
     * 100
     */
    explicitCacheCostPointsPerMillion?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-09-01T12:00:00Z
     */
    gmtCreated?: string;
    /**
     * @remarks
     * The modification time.
     *
     * @example
     * 2026-09-01T12:00:00Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * The ID of the gateway instance to which the cost rule belongs.
     *
     * @example
     * pg-2ze3x6i1d7g5rto28
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The image input cost points per image.
     *
     * @example
     * 5
     */
    imageCostPointsPerCount?: string;
    /**
     * @remarks
     * The input cost points per million tokens.
     *
     * @example
     * 1000
     */
    inputCostPointsPerMillion?: string;
    /**
     * @remarks
     * The input token tier. An empty value indicates the default tier.
     *
     * @example
     * 0-32K
     */
    inputTokenTier?: string;
    /**
     * @remarks
     * The tiered pricing for input tokens. Pricing is applied per tier and is not cumulative. Each element contains Tier and InputCostPointsPerMillion.
     *
     * @example
     * [{"Tier":"0-32K","InputCostPointsPerMillion":"1000"}]
     */
    inputTokenTiers?: CreateCostRuleResponseBodyInputTokenTiers[];
    /**
     * @remarks
     * The name of the pricing model.
     *
     * @example
     * qwen3-max
     */
    modelName?: string;
    /**
     * @remarks
     * The ID of the model service.
     *
     * @example
     * ms-2ze3x6i1d7g5rto28
     */
    modelServiceId?: string;
    /**
     * @remarks
     * The model service name.
     *
     * @example
     * model-service-a
     */
    modelServiceName?: string;
    /**
     * @remarks
     * The output cost points per million tokens.
     *
     * @example
     * 2000
     */
    outputCostPointsPerMillion?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 580EF224-9647-59E7-9950-D9EBFD6A2921
     */
    requestId?: string;
    /**
     * @remarks
     * The video input cost points per second.
     *
     * @example
     * 20
     */
    videoCostPointsPerSecond?: string;
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
