import * as $dara from '@darabonba/typescript';
export declare class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList extends $dara.Model {
    zoneIDList?: string[];
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
export declare class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $dara.Model {
    allocationPolicy?: string;
    bastionInstanceId?: string;
    cpuAllocateRation?: number;
    cpuAllocatedAmount?: number;
    cpuAllocationRatio?: number;
    createTime?: string;
    dedicatedHostCountGroupByHostType?: {
        [key: string]: any;
    };
    dedicatedHostGroupDesc?: string;
    dedicatedHostGroupId?: string;
    diskAllocateRation?: number;
    diskAllocatedAmount?: number;
    diskAllocationRatio?: number;
    diskUsedAmount?: number;
    diskUtility?: number;
    engine?: string;
    hostNumber?: number;
    hostReplacePolicy?: string;
    instanceNumber?: number;
    memAllocateRation?: number;
    memAllocatedAmount?: number;
    memAllocationRatio?: number;
    memUsedAmount?: number;
    memUtility?: number;
    openPermission?: string;
    text?: string;
    VPCId?: string;
    zoneIDList?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
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
export declare class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $dara.Model {
    dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups[];
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
export declare class DescribeDedicatedHostGroupsResponseBody extends $dara.Model {
    dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * AB44DC0A-7E77-442A-97A9-C6418694CB22
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
