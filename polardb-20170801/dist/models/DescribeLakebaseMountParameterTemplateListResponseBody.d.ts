import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterTemplateListResponseBodyParameters extends $dara.Model {
    /**
     * @remarks
     * The parameter description.
     *
     * @example
     * Auto-increment offset
     */
    comment?: string;
    /**
     * @remarks
     * The default value.
     *
     * @example
     * 1
     */
    defaultValue?: string;
    /**
     * @remarks
     * Indicates whether the parameter takes effect dynamically. Valid values:
     * - 1: Yes.
     * - 0: No.
     *
     * @example
     * 1
     */
    isDynamic?: string;
    /**
     * @remarks
     * Indicates whether users are allowed to modify the parameter. Valid values:
     * - 1: Yes.
     * - 0: No.
     *
     * @example
     * 1
     */
    isUserChangeable?: string;
    /**
     * @remarks
     * The value range or enumerated values, such as [0-3600].
     *
     * @example
     * [0-3600]
     */
    optional?: string;
    /**
     * @remarks
     * The parameter name.
     *
     * @example
     * auto_increment_offset
     */
    parameterName?: string;
    /**
     * @remarks
     * The unit.
     *
     * @example
     * s
     */
    unit?: string;
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
export declare class DescribeLakebaseMountParameterTemplateListResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of parameter templates.
     */
    parameters?: DescribeLakebaseMountParameterTemplateListResponseBodyParameters[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F45FFACC-xxx
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
