import * as $dara from '@darabonba/typescript';
export declare class GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema extends $dara.Model {
    columnName?: string;
    columnType?: string;
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
export declare class GetGovernanceItemReportResponseBodyColumnsSchema extends $dara.Model {
    columnSchema?: GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema[];
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
export declare class GetGovernanceItemReportResponseBodyColumnsValueColumnRow extends $dara.Model {
    columnValue?: any[];
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
export declare class GetGovernanceItemReportResponseBodyColumnsValue extends $dara.Model {
    columnRow?: GetGovernanceItemReportResponseBodyColumnsValueColumnRow[];
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
export declare class GetGovernanceItemReportResponseBody extends $dara.Model {
    columnsSchema?: GetGovernanceItemReportResponseBodyColumnsSchema;
    columnsValue?: GetGovernanceItemReportResponseBodyColumnsValue;
    /**
     * @remarks
     * The time when the report for the check item was generated.
     *
     * @example
     * 2020-10-19T15:06:52Z
     */
    generateTime?: string;
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * This parameter is returned only when `IsTruncated` is set to true. Use this parameter to retrieve the truncated content.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The data type of the metric value. Valid values:
     *
     * - Number: the numeric type.
     *
     * - String: the string type.
     *
     * - Boolean: the Boolean type.
     *
     * @example
     * Number
     */
    metricType?: string;
    /**
     * @remarks
     * The metric value.
     *
     * @example
     * 100
     */
    metricValue?: any;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F2CE9688-AA85-5F23-8C22-0EC23473405F
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
