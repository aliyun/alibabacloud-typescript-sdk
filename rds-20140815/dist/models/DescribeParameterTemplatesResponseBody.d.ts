import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
    checkingCode?: string;
    forceModify?: string;
    forceRestart?: string;
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
     * The database engine.
     *
     * @example
     * mysql
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
     * The number of parameters.
     *
     * @example
     * 2
     */
    parameterCount?: string;
    parameters?: DescribeParameterTemplatesResponseBodyParameters;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 0F9B7410-EC73-510C-B385-8339455C12C6
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
