import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterParametersResponseBodyParametersParameters extends $dara.Model {
    isEqual?: string;
    isInstancePolarDBKey?: string;
    isInstanceRdsKey?: string;
    isPolarDBKey?: string;
    isRdsKey?: string;
    distParameterDescription?: string;
    distParameterName?: string;
    distParameterOptional?: string;
    distParameterValue?: string;
    rdsParameterDescription?: string;
    rdsParameterName?: string;
    rdsParameterOptional?: string;
    rdsParameterValue?: string;
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
export declare class DescribeDBClusterParametersResponseBodyParameters extends $dara.Model {
    parameters?: DescribeDBClusterParametersResponseBodyParametersParameters[];
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
export declare class DescribeDBClusterParametersResponseBodyRunningParametersParameter extends $dara.Model {
    checkingCode?: string;
    dataType?: string;
    defaultParameterValue?: string;
    factor?: string;
    forceRestart?: boolean;
    isModifiable?: boolean;
    isNodeAvailable?: string;
    paramRelyRule?: string;
    parameterDescription?: string;
    parameterName?: string;
    parameterStatus?: string;
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
export declare class DescribeDBClusterParametersResponseBodyRunningParameters extends $dara.Model {
    parameter?: DescribeDBClusterParametersResponseBodyRunningParametersParameter[];
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
export declare class DescribeDBClusterParametersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-bp1s826a1up******
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The database type. Valid values:
     *
     * - **MySQL**
     *
     * - **PostgreSQL**
     *
     * - **Oracle**
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database engine version.
     * Valid values for MySQL:
     *
     * - **5.6**
     *
     * - **5.7**
     *
     * - **8.0**
     *
     * Valid values for PostgreSQL:
     *
     * - **11**
     *
     * - **14**
     *
     * Valid values for Oracle:
     *
     * - **11**
     *
     * - **14**
     *
     * @example
     * 5.6
     */
    DBVersion?: string;
    /**
     * @remarks
     * The engine.
     *
     * @example
     * POLARDB
     */
    engine?: string;
    /**
     * @remarks
     * The number of parameters.
     *
     * @example
     * 1
     */
    parameterNumbers?: string;
    parameters?: DescribeDBClusterParametersResponseBodyParameters;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EBEAA83D-1734-42E3-85E3-E25F6E******
     */
    requestId?: string;
    runningParameters?: DescribeDBClusterParametersResponseBodyRunningParameters;
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
