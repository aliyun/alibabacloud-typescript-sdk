import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups extends $dara.Model {
    /**
     * @remarks
     * The creation time in UTC.
     *
     * @example
     * 2026-08-07T12:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * Indicates whether the parameter template is applied. Valid values:
     * - 0: No.
     * - 1: Yes.
     *
     * @example
     * 0
     */
    isApply?: string;
    /**
     * @remarks
     * The modification time in UTC.
     *
     * @example
     * 2026-08-10T12:00:00Z
     */
    modifyTime?: string;
    /**
     * @remarks
     * The number of parameters.
     *
     * @example
     * 10
     */
    parameterCounts?: number;
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
     * The ID of the parameter template.
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
     * The templatetype. Valid values:
     * - 0: System.
     * - 1: User.
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
export declare class DescribeLakebaseMountParameterGroupsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The parameter templates.
     */
    parameterGroups?: DescribeLakebaseMountParameterGroupsResponseBodyParameterGroups[];
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
