import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup extends $dara.Model {
    createTime?: string;
    engine?: string;
    engineVersion?: string;
    forceRestart?: number;
    paramCounts?: number;
    parameterGroupDesc?: string;
    parameterGroupId?: string;
    parameterGroupName?: string;
    parameterGroupType?: number;
    updateTime?: string;
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
export declare class DescribeParameterGroupsResponseBodyParameterGroups extends $dara.Model {
    parameterGroup?: DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup[];
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
export declare class DescribeParameterGroupsResponseBody extends $dara.Model {
    parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D4A23265-C5B6-42E1-98A0-EFA1EB42E723
     */
    requestId?: string;
    /**
     * @remarks
     * **[Deprecated]** Indicates whether the specified region has parameter templates. Valid values:
     *
     * * true: No parameter templates exist.
     * * false: Parameter templates exist.
     * >Warning: This parameter is deprecated and is not recommended.
     *
     * @example
     * false
     */
    signalForOptimizeParams?: boolean;
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
