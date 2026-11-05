import * as $dara from '@darabonba/typescript';
export declare class ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric extends $dara.Model {
    governanceItem?: string;
    metricType?: string;
    metricValue?: any;
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
export declare class ListRecentGovernanceMetricsResponseBodyGovernanceMetrics extends $dara.Model {
    governanceMetric?: ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric[];
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
export declare class ListRecentGovernanceMetricsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The time when the report was generated.
     *
     * @example
     * 2025-02-10T02:11:23Z
     */
    generateTime?: string;
    governanceMetrics?: ListRecentGovernanceMetricsResponseBodyGovernanceMetrics;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 49846A91-C1C5-5C2B-BC64-8B0B7BADB4C0
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
