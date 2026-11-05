import * as $dara from '@darabonba/typescript';
export declare class ListRCVClustersResponseBodyVClustersMysqlOperator extends $dara.Model {
    dashboardPublicEndpoint?: string;
    dashboardPublicEndpointExpireTime?: string;
    dashboardUsername?: string;
    dashboardVpcEndpoint?: string;
    deployTime?: string;
    status?: string;
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
export declare class ListRCVClustersResponseBodyVClusters extends $dara.Model {
    clusterId?: string;
    clusterName?: string;
    instanceCount?: number;
    mysqlOperator?: ListRCVClustersResponseBodyVClustersMysqlOperator;
    regionId?: string;
    status?: string;
    supportDiskPerformanceLevel?: string[];
    vpcId?: string;
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
export declare class ListRCVClustersResponseBody extends $dara.Model {
    requestId?: string;
    VClusters?: ListRCVClustersResponseBodyVClusters[];
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
