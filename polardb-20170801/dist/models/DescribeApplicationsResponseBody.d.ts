import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint extends $dara.Model {
    IP?: string;
    netType?: string;
    port?: string;
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
export declare class DescribeApplicationsResponseBodyItemsApplicationsEndpoints extends $dara.Model {
    endpoint?: DescribeApplicationsResponseBodyItemsApplicationsEndpointsEndpoint[];
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
export declare class DescribeApplicationsResponseBodyItemsApplicationsTagsTag extends $dara.Model {
    /**
     * @example
     * testKey
     */
    key?: string;
    /**
     * @example
     * testValue
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
export declare class DescribeApplicationsResponseBodyItemsApplicationsTags extends $dara.Model {
    tag?: DescribeApplicationsResponseBodyItemsApplicationsTagsTag[];
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
export declare class DescribeApplicationsResponseBodyItemsApplications extends $dara.Model {
    applicationId?: string;
    applicationType?: string;
    /**
     * @example
     * br-1db52a73dc8545f19a47a3f1d8
     */
    branchId?: string;
    creationTime?: string;
    /**
     * @example
     * pc-xxxxxx
     */
    DBClusterId?: string;
    description?: string;
    endpoints?: DescribeApplicationsResponseBodyItemsApplicationsEndpoints;
    engineVersion?: string;
    expireTime?: string;
    expired?: string;
    payType?: string;
    polarFSInstanceId?: string;
    regionId?: string;
    status?: string;
    tags?: DescribeApplicationsResponseBodyItemsApplicationsTags;
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
export declare class DescribeApplicationsResponseBodyItems extends $dara.Model {
    applications?: DescribeApplicationsResponseBodyItemsApplications[];
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
export declare class DescribeApplicationsResponseBody extends $dara.Model {
    items?: DescribeApplicationsResponseBodyItems;
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
