import * as $dara from '@darabonba/typescript';
export declare class DescribeModifyParameterLogResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The last modification time.
     *
     * The time is in the ISO 8601 format. The time is displayed in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2024-10-29T09:31:37Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The parameter value after the modification.
     *
     * @example
     * test01
     */
    newParameterValue?: string;
    /**
     * @remarks
     * The parameter value before the modification.
     *
     * @example
     * test
     */
    oldParameterValue?: string;
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * hz
     */
    parameterName?: string;
    /**
     * @remarks
     * Indicates whether the modification is applied.
     *
     * @example
     * True
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
export declare class DescribeModifyParameterLogResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster engine.
     *
     * @example
     * polardb_mysql
     */
    engine?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 8.0
     */
    engineVersion?: string;
    /**
     * @remarks
     * The list of parameter modification history.
     */
    items?: DescribeModifyParameterLogResponseBodyItems[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CD35F3-F3-44CA-AFFF-BAF869******
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
