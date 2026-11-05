import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail extends $dara.Model {
    paramName?: string;
    paramValue?: string;
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
export declare class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail extends $dara.Model {
    parameterDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail[];
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
export declare class DescribeParameterGroupResponseBodyParamGroupParameterGroup extends $dara.Model {
    createTime?: string;
    engine?: string;
    engineVersion?: string;
    forceRestart?: number;
    paramCounts?: number;
    paramDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail;
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
export declare class DescribeParameterGroupResponseBodyParamGroup extends $dara.Model {
    parameterGroup?: DescribeParameterGroupResponseBodyParamGroupParameterGroup[];
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
export declare class DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo extends $dara.Model {
    appliedTime?: string;
    DBInstanceName?: string;
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
export declare class DescribeParameterGroupResponseBodyRelatedCustinsInfo extends $dara.Model {
    relatedCustinsInfo?: DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo[];
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
export declare class DescribeParameterGroupResponseBody extends $dara.Model {
    paramGroup?: DescribeParameterGroupResponseBodyParamGroup;
    relatedCustinsInfo?: DescribeParameterGroupResponseBodyRelatedCustinsInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 498AE8CA-8C81-4A01-AF37-2B902014ED30
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
