import * as $dara from '@darabonba/typescript';
export declare class DescribeRCClustersResponseBodyClusters extends $dara.Model {
    clusterId?: string;
    clusterName?: string;
    createTime?: string;
    profile?: string;
    status?: string;
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
export declare class DescribeRCClustersResponseBody extends $dara.Model {
    clusters?: DescribeRCClustersResponseBodyClusters[];
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
