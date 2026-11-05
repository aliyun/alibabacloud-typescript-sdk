import * as $dara from '@darabonba/typescript';
export declare class DescribeParametersResponseBodyConfigParametersDBInstanceParameter extends $dara.Model {
    parameterDescription?: string;
    parameterName?: string;
    parameterValue?: string;
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
export declare class DescribeParametersResponseBodyConfigParameters extends $dara.Model {
    DBInstanceParameter?: DescribeParametersResponseBodyConfigParametersDBInstanceParameter[];
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
export declare class DescribeParametersResponseBodyParamGroupInfo extends $dara.Model {
    /**
     * @remarks
     * The ID of the parameter template.
     *
     * @example
     * rpg-sys-01040401010200
     */
    paramGroupId?: string;
    /**
     * @remarks
     * The description of the parameter template.
     *
     * @example
     * sync_binlog=1000, innodb_flush_log_at_trx_commit=2, async
     */
    parameterGroupDesc?: string;
    /**
     * @remarks
     * The name of the parameter template.
     *
     * @example
     * mysql_innodb_8.0_basic_normal_high
     */
    parameterGroupName?: string;
    /**
     * @remarks
     * The templatetype of the parameter template.
     *
     * @example
     * 0
     */
    parameterGroupType?: string;
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
export declare class DescribeParametersResponseBodyRunningParametersDBInstanceParameter extends $dara.Model {
    parameterDefaultValue?: string;
    parameterDescription?: string;
    parameterName?: string;
    parameterValue?: string;
    parameterValueRange?: string;
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
export declare class DescribeParametersResponseBodyRunningParameters extends $dara.Model {
    DBInstanceParameter?: DescribeParametersResponseBodyRunningParametersDBInstanceParameter[];
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
export declare class DescribeParametersResponseBody extends $dara.Model {
    configParameters?: DescribeParametersResponseBodyConfigParameters;
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * MySQL
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
     * The information about the parameter template.
     */
    paramGroupInfo?: DescribeParametersResponseBodyParamGroupInfo;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    runningParameters?: DescribeParametersResponseBodyRunningParameters;
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
