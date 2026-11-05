import * as $dara from '@darabonba/typescript';
export declare class DescribeMaskingRulesResponseBodyDataRulesRuleConfig extends $dara.Model {
    /**
     * @remarks
     * The list of columns.
     */
    columns?: string[];
    /**
     * @remarks
     * The list of databases.
     */
    databases?: string[];
    /**
     * @remarks
     * The list of tables.
     */
    tables?: string[];
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
export declare class DescribeMaskingRulesResponseBodyDataRules extends $dara.Model {
    /**
     * @remarks
     * The default encryption or masking algorithm.
     *
     * @example
     * aes-128-gcm
     */
    defaultAlgo?: string;
    /**
     * @remarks
     * Indicates whether the rule is enabled.
     *
     * @example
     * true
     */
    enabled?: string;
    /**
     * @remarks
     * The algorithms for the rule. Multiple algorithms are supported. Additional parameters can be added for masking algorithms. Format: {name: Algorithm 1}, {name: Algorithm 2, params: {encryption position, number of encrypted digits}}.
     *
     * @example
     * [{"name": "aes-128-gcm"},
     *         {"name":"sm4-128-gcm"}]
     */
    maskingAlgo?: string;
    /**
     * @remarks
     * The rule configuration.
     */
    ruleConfig?: DescribeMaskingRulesResponseBodyDataRulesRuleConfig;
    /**
     * @remarks
     * The name of the rule.
     *
     * @example
     * test
     */
    ruleName?: string;
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
export declare class DescribeMaskingRulesResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of encryption or masking rules.
     */
    rules?: DescribeMaskingRulesResponseBodyDataRules[];
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
export declare class DescribeMaskingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: DescribeMaskingRulesResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 69779000-57A4-38F6-BF85-**********A2
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
