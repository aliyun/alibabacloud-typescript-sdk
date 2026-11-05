import * as $dara from '@darabonba/typescript';
export declare class DescribeRCVClusterResponseBodyMysqlOperator extends $dara.Model {
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
export declare class DescribeRCVClusterResponseBody extends $dara.Model {
    clusterId?: string;
    clusterName?: string;
    mysqlOperator?: DescribeRCVClusterResponseBodyMysqlOperator;
    region?: string;
    requestId?: string;
    supportDiskPerformanceLevel?: string[];
    VClusterStatus?: string;
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
