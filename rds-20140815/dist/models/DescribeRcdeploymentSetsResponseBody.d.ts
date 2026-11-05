import * as $dara from '@darabonba/typescript';
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity extends $dara.Model {
    availableAmount?: number;
    usedAmount?: number;
    zoneId?: string;
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
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities extends $dara.Model {
    capacity?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacitiesCapacity[];
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
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds extends $dara.Model {
    instanceId?: string[];
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
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag extends $dara.Model {
    resourceId?: string;
    resourceType?: string;
    tagKey?: string;
    tagValue?: string;
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
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags extends $dara.Model {
    tag?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTagsTag[];
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
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet extends $dara.Model {
    accountId?: string;
    capacities?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetCapacities;
    createTime?: string;
    deploymentSetDescription?: string;
    deploymentSetId?: string;
    deploymentSetName?: string;
    deploymentStrategy?: string;
    domain?: string;
    granularity?: string;
    groupCount?: number;
    instanceAmount?: number;
    instanceIds?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetInstanceIds;
    strategy?: string;
    tags?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSetTags;
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
export declare class DescribeRCDeploymentSetsResponseBodyDeploymentSets extends $dara.Model {
    deploymentSet?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet[];
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
export declare class DescribeRCDeploymentSetsResponseBody extends $dara.Model {
    deploymentSets?: DescribeRCDeploymentSetsResponseBodyDeploymentSets;
    pageNumber?: number;
    pageSize?: number;
    regionId?: string;
    requestId?: string;
    totalCount?: number;
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
