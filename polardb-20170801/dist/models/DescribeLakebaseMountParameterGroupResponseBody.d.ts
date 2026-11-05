import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterGroupResponseBodyParameterDetail extends $dara.Model {
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
     * The parameter value.
     *
     * @example
     * 1
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
export declare class DescribeLakebaseMountParameterGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The creation time (UTC).
     *
     * @example
     * 2026-08-01T00:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * Indicates whether the parameter template is applied. Valid values: 0: No. 1: Yes.
     *
     * @example
     * 0
     */
    isApply?: number;
    /**
     * @remarks
     * The modification time (UTC).
     *
     * @example
     * 2026-08-10T12:00:00Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The parameter details of the template. An empty array is returned if no data is available.
     */
    parameterDetail?: DescribeLakebaseMountParameterGroupResponseBodyParameterDetail[];
    /**
     * @remarks
     * The description of the parameter template.
     *
     * @example
     * Default template
     */
    parameterGroupDesc?: string;
    /**
     * @remarks
     * The parameter template ID.
     *
     * @example
     * pcpg-lakebase-xxx
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The name of the parameter template.
     *
     * @example
     * default-template
     */
    parameterGroupName?: string;
    /**
     * @remarks
     * The parameter templatetype. Valid values: 0: System. 1: User.
     *
     * @example
     * 1
     */
    parameterGroupType?: number;
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
