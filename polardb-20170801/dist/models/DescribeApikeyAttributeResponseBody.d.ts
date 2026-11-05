import * as $dara from '@darabonba/typescript';
export declare class DescribeApikeyAttributeResponseBodyItemsConsumer extends $dara.Model {
    /**
     * @remarks
     * The API key.
     *
     * @example
     * ***
     */
    apiKey?: string;
    /**
     * @remarks
     * The user group ID.
     *
     * @example
     * cg-bq6rcdjp02vt
     */
    consumerGroupId?: string;
    /**
     * @remarks
     * The consumer ID.
     *
     * @example
     * c-71qh3pscbd3i
     */
    consumerId?: string;
    /**
     * @remarks
     * The consumer tag.
     *
     * @example
     * test
     */
    consumerTag?: string;
    /**
     * @remarks
     * The creation time. The format is YYYY-MM-DDTHH:mm:ssZ (UTC time).
     *
     * @example
     * 2021-07-18T07:32:30Z
     */
    createTime?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-2ze5n62ef4s165***
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The last modification time. The format is YYYY-MM-DDTHH:mm:ssZ (UTC time).
     *
     * @example
     * 2026-04-10T01:48:25Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The consumer name.
     *
     * @example
     * test
     */
    name?: string;
    /**
     * @remarks
     * The consumer status.
     *
     * @example
     * Enabled
     */
    status?: string;
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
export declare class DescribeApikeyAttributeResponseBodyItemsUsageStatistics extends $dara.Model {
    /**
     * @remarks
     * The dimension reference ID, which is the consumer ID.
     *
     * @example
     * c-xxxxxx
     */
    dimensionRefId?: string;
    /**
     * @remarks
     * The statistical dimension. The value is typically Consumer.
     *
     * @example
     * Consumer
     */
    dimensionType?: string;
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-bp1ln7w98yrhzz7i2
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The number of cached tokens for the current month.
     *
     * @example
     * 10
     */
    monthlyCacheToken?: string;
    /**
     * @remarks
     * The number of consumed points for the current month.
     *
     * @example
     * 10
     */
    monthlyCostPoints?: string;
    /**
     * @remarks
     * The number of input tokens for the current month.
     *
     * @example
     * 10
     */
    monthlyInputToken?: string;
    /**
     * @remarks
     * The number of output tokens for the current month.
     *
     * @example
     * 10
     */
    monthlyOutputToken?: string;
    /**
     * @remarks
     * The number of tokens for the current month.
     *
     * @example
     * 10
     */
    monthlyToken?: string;
    /**
     * @remarks
     * The total number of cached tokens.
     *
     * @example
     * 10
     */
    totalCacheToken?: string;
    /**
     * @remarks
     * The total number of consumed points.
     *
     * @example
     * 10
     */
    totalCostPoints?: string;
    /**
     * @remarks
     * The total number of input tokens.
     *
     * @example
     * 10
     */
    totalInputToken?: string;
    /**
     * @remarks
     * The total number of output tokens.
     *
     * @example
     * 10
     */
    totalOutputToken?: string;
    /**
     * @remarks
     * The total number of tokens.
     *
     * @example
     * 10
     */
    totalToken?: string;
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
export declare class DescribeApikeyAttributeResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The consumer information.
     */
    consumer?: DescribeApikeyAttributeResponseBodyItemsConsumer;
    /**
     * @remarks
     * The usage statistics records for the consumer.
     */
    usageStatistics?: DescribeApikeyAttributeResponseBodyItemsUsageStatistics[];
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
export declare class DescribeApikeyAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of consumer objects.
     */
    items?: DescribeApikeyAttributeResponseBodyItems[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F3322AFE-083E-4D77-A074-421301******
     */
    requestId?: string;
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
