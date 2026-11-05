import * as $dara from '@darabonba/typescript';
export declare class DescribeRCClusterNodesResponseBodyNodes extends $dara.Model {
    /**
     * @example
     * 2026-01-06T22:22:16.00+08:00
     */
    creationTime?: string;
    dockerVersion?: string;
    imageId?: string;
    /**
     * @example
     * vn-uoeaq5a51g0vk473****
     */
    instanceId?: string;
    instanceRole?: string;
    ipAddresses?: string[];
    isAliyunNode?: boolean;
    /**
     * @example
     * vn-uoeaq5a51g0vk473****
     */
    nodeName?: string;
    /**
     * @example
     * rcnpf5e3ee4a65104cf0801f94850d37****
     */
    nodePoolId?: string;
    nodeStatus?: string;
    /**
     * @example
     * 1
     */
    podCount?: number;
    runtimeVersion?: string;
    /**
     * @example
     * running
     */
    state?: string;
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
export declare class DescribeRCClusterNodesResponseBodyPage extends $dara.Model {
    /**
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @example
     * 5
     */
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
export declare class DescribeRCClusterNodesResponseBody extends $dara.Model {
    nodes?: DescribeRCClusterNodesResponseBodyNodes[];
    page?: DescribeRCClusterNodesResponseBodyPage;
    /**
     * @example
     * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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
