import * as $dara from '@darabonba/typescript';
export declare class DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList extends $dara.Model {
    /**
     * @remarks
     * The capacity allocated to the resource pool.
     *
     * @example
     * 6
     */
    allocatedCapacity?: number;
    /**
     * @remarks
     * The ID of the resource pool.
     *
     * @example
     * pj-87681rbcef6******
     */
    projectId?: string;
    /**
     * @remarks
     * The used capacity of the resource pool.
     *
     * @example
     * 2
     */
    usedCapacity?: number;
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
export declare class DescribeResourcePackagesResponseBodyResourcePackageListTags extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * Key
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * Value
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
export declare class DescribeResourcePackagesResponseBodyResourcePackageList extends $dara.Model {
    /**
     * @remarks
     * Indicates whether automatic quota allocation is enabled.
     *
     * @example
     * true
     */
    autoQuota?: boolean;
    /**
     * @remarks
     * The time when the resource plan was created.
     *
     * @example
     * 1744621511000
     */
    createTime?: number;
    /**
     * @remarks
     * The time when the resource plan expires.
     *
     * @example
     * 1747238400000
     */
    expireTime?: number;
    /**
     * @remarks
     * The ID of the cross-cloud resource plan.
     *
     * @example
     * pm-bp11b0i9389******
     */
    resourcePackageId?: string;
    /**
     * @remarks
     * The quota allocation details.
     */
    resourcePackageQuotaList?: DescribeResourcePackagesResponseBodyResourcePackageListResourcePackageQuotaList[];
    /**
     * @remarks
     * The type of the cross-cloud resource plan.
     *
     * @example
     * MySQL
     */
    resourcePackageType?: string;
    /**
     * @remarks
     * The status of the cross-cloud resource plan. Valid values:
     *
     * - Normal: Normal.
     *
     * - Maintaining: Under maintenance.
     *
     * @example
     * Normal
     */
    status?: string;
    /**
     * @remarks
     * The list of tags.
     */
    tags?: DescribeResourcePackagesResponseBodyResourcePackageListTags[];
    /**
     * @remarks
     * The total capacity.
     *
     * @example
     * 8
     */
    totalCapacity?: number;
    /**
     * @remarks
     * The used capacity.
     *
     * @example
     * 4
     */
    usedCapacity?: number;
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
export declare class DescribeResourcePackagesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
     */
    requestId?: string;
    /**
     * @remarks
     * A list of cross-cloud resource plans.
     */
    resourcePackageList?: DescribeResourcePackagesResponseBodyResourcePackageList[];
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
