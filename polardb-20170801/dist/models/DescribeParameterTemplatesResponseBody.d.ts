import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
    checkingCode?: string;
    forceModify?: string;
    forceRestart?: string;
    isNodeAvailable?: string;
    paramRelyRule?: string;
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
export declare class DescribeParameterTemplatesResponseBodyParameters extends $dara.Model {
    templateRecord?: DescribeParameterTemplatesResponseBodyParametersTemplateRecord[];
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
export declare class DescribeParameterTemplatesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 5.7
     */
    DBVersion?: string;
    /**
     * @remarks
     * The database engine.
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
     * 183
     */
    parameterCount?: string;
    parameters?: DescribeParameterTemplatesResponseBodyParameters;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D963934D-8605-4473-8EAC-54C719******
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
