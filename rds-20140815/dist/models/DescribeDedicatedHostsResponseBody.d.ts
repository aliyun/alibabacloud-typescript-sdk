import * as $dara from '@darabonba/typescript';
export declare class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $dara.Model {
    accountName?: string;
    allocationStatus?: string;
    bastionInstanceId?: string;
    CPUAllocationRatio?: string;
    cpuUsed?: string;
    createdTime?: string;
    dedicatedHostGroupId?: string;
    dedicatedHostId?: string;
    diskAllocationRatio?: string;
    endTime?: string;
    engine?: string;
    hostCPU?: string;
    hostClass?: string;
    hostMem?: string;
    hostName?: string;
    hostStatus?: string;
    hostStorage?: string;
    hostType?: string;
    IPAddress?: string;
    imageCategory?: string;
    instanceNumber?: string;
    memAllocationRatio?: string;
    memoryUsed?: string;
    openPermission?: string;
    storageUsed?: string;
    VPCId?: string;
    vSwitchId?: string;
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
export declare class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $dara.Model {
    dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts[];
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
export declare class DescribeDedicatedHostsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The host group ID.
     *
     * @example
     * dhg-7a9xxxxxxxx
     */
    dedicatedHostGroupId?: string;
    dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C860658E-68A6-46C1-AF6E-3AE7C4D3CACF
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
