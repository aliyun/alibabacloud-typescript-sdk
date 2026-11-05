import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationParameterRequestParameters extends $dara.Model {
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * name
     */
    parameterName?: string;
    /**
     * @remarks
     * The parameter value.
     *
     * @example
     * value
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
export declare class ModifyApplicationParameterRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * name
     */
    parameterName?: string;
    /**
     * @remarks
     * The parameter value.
     *
     * @example
     * value
     */
    parameterValue?: string;
    /**
     * @remarks
     * The list of parameter names and values for modifying multiple parameters.
     */
    parameters?: ModifyApplicationParameterRequestParameters[];
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
