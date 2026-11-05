import * as $dara from '@darabonba/typescript';
export declare class DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters extends $dara.Model {
    /**
     * @remarks
     * The valid values of the parameter.
     *
     * @example
     * [utf8|latin1|gbk|utf8mb4]
     */
    checkingCode?: string;
    /**
     * @remarks
     * The data type of the parameter. Valid values:
     *
     * - **INT**: Integer
     *
     * - **STRING**: String
     *
     * - **B**: Byte
     *
     * @example
     * INT
     */
    dataType?: string;
    /**
     * @remarks
     * The default value of the parameter.
     *
     * @example
     * utf8
     */
    defaultParameterValue?: string;
    /**
     * @remarks
     * The divisor. For integer and byte type parameters, the parameter value must be a multiple of this factor. The factor cannot be 0.
     *
     * @example
     * 20
     */
    factor?: string;
    /**
     * @remarks
     * Indicates whether a restart is required for the parameter modification to take effect. Valid values:
     *
     * - **false**: No
     *
     * - **true**: Yes
     *
     * @example
     * true
     */
    forceRestart?: boolean;
    /**
     * @remarks
     * Indicates whether the parameter can be modified. Valid values:
     *
     * - **false**: No
     *
     * - **true**: Yes
     *
     * @example
     * true
     */
    isModifiable?: boolean;
    /**
     * @remarks
     * Indicates whether the parameter is a global parameter. Valid values:
     *
     * - **0**: The parameter is a global parameter. Modifications to the parameter are applied to other nodes by default and cannot be canceled.
     *
     * - **1**: The parameter is not a global parameter. You can specify the nodes to which you want to apply the parameter modifications.
     *
     * @example
     * 1
     */
    isNodeAvailable?: string;
    /**
     * @remarks
     * The dependency of the parameter.
     *
     * @example
     * utf8
     */
    paramRelyRule?: string;
    /**
     * @remarks
     * The description of the parameter.
     *
     * @example
     * The server\\"s default character set.
     */
    parameterDescription?: string;
    /**
     * @remarks
     * The name of the parameter.
     *
     * @example
     * character_set_server
     */
    parameterName?: string;
    /**
     * @remarks
     * The status of the parameter. Valid values:
     *
     * - **normal**: Normal
     *
     * - **modifying**: Modifying
     *
     * @example
     * normal
     */
    parameterStatus?: string;
    /**
     * @remarks
     * The value of the parameter.
     *
     * @example
     * utf8
     */
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
export declare class DescribeDBNodesParametersResponseBodyDBNodeIds extends $dara.Model {
    /**
     * @remarks
     * The ID of the node.
     *
     * @example
     * pi-bp1r4qe3s534*****
     */
    DBNodeId?: string;
    /**
     * @remarks
     * The list of parameters that are running on the node.
     */
    runningParameters?: DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters[];
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
export declare class DescribeDBNodesParametersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of node IDs.
     */
    DBNodeIds?: DescribeDBNodesParametersResponseBodyDBNodeIds[];
    /**
     * @remarks
     * The type of the database. The value is fixed as **MySQL**.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The version of the MySQL database. Valid values:
     *
     * - **5.6**
     *
     * - **5.7**
     *
     * - **8.0**
     *
     * @example
     * 5.6
     */
    DBVersion?: string;
    /**
     * @remarks
     * The database engine of the cluster.
     *
     * @example
     * POLARDB
     */
    engine?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 9B7BFB11-C077-4FE3-B051-F69CEB******
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
