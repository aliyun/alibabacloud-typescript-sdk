import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters extends $dara.Model {
    /**
     * @remarks
     * The default value of the parameter.
     *
     * @example
     * default
     */
    default?: string;
    /**
     * @remarks
     * The parameter description.
     *
     * @example
     * The name of the parameter
     */
    description?: string;
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * Indicates whether the application needs to be restarted after you modify the parameter.
     *
     * @example
     * false
     */
    needRestart?: boolean;
    /**
     * @remarks
     * The regular expression for the parameter.
     *
     * @example
     * ^[a-zA-Z0-9]{1,20}$
     */
    pattern?: string;
    /**
     * @remarks
     * Indicates whether the parameter is read-only.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The parameter type.
     *
     * @example
     * string
     */
    type?: string;
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
export declare class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates extends $dara.Model {
    /**
     * @remarks
     * The subcomponent ID or application ID.
     *
     * @example
     * pac-**************
     */
    componentId?: string;
    /**
     * @remarks
     * The type of the subcomponent.
     *
     * @example
     * supabase
     */
    componentType?: string;
    /**
     * @remarks
     * A list of parameter template details.
     */
    parameters?: DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters[];
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
export declare class DescribeApplicationParametersResponseBodyParameterTemplates extends $dara.Model {
    /**
     * @remarks
     * A list of subcomponents that contain lists of parameter template details.
     */
    componentParameterTemplates?: DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates[];
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
export declare class DescribeApplicationParametersResponseBodyParametersComponentParametersParameters extends $dara.Model {
    /**
     * @remarks
     * The default value of the parameter.
     *
     * @example
     * default value
     */
    default?: string;
    /**
     * @remarks
     * The parameter description.
     *
     * @example
     * The name of the parameter
     */
    description?: string;
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * Indicates whether the application needs to be restarted after you modify the parameter.
     *
     * @example
     * false
     */
    needRestart?: boolean;
    /**
     * @remarks
     * The regular expression for the parameter.
     *
     * @example
     * ^[a-zA-Z0-9]{1,20}$
     */
    pattern?: string;
    /**
     * @remarks
     * Indicates whether the parameter is read-only.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The status.
     *
     * @example
     * Applied
     */
    status?: string;
    /**
     * @remarks
     * The parameter type.
     *
     * @example
     * string
     */
    type?: string;
    /**
     * @remarks
     * The current value of the parameter.
     *
     * @example
     * value
     */
    value?: string;
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
export declare class DescribeApplicationParametersResponseBodyParametersComponentParameters extends $dara.Model {
    /**
     * @remarks
     * The subcomponent ID or application ID.
     *
     * @example
     * pac-**************
     */
    componentId?: string;
    /**
     * @remarks
     * The type of the subcomponent.
     *
     * @example
     * supabase
     */
    componentType?: string;
    /**
     * @remarks
     * A list of parameter details.
     */
    parameters?: DescribeApplicationParametersResponseBodyParametersComponentParametersParameters[];
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
export declare class DescribeApplicationParametersResponseBodyParameters extends $dara.Model {
    /**
     * @remarks
     * A list of subcomponents that contain lists of parameter details.
     */
    componentParameters?: DescribeApplicationParametersResponseBodyParametersComponentParameters[];
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
export declare class DescribeApplicationParametersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the parameter template.
     */
    parameterTemplates?: DescribeApplicationParametersResponseBodyParameterTemplates;
    /**
     * @remarks
     * The parameter details.
     */
    parameters?: DescribeApplicationParametersResponseBodyParameters;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
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
