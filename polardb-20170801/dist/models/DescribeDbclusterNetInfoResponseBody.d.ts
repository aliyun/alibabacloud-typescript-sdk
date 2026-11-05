import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo extends $dara.Model {
    connectionString?: string;
    connectionStringType?: string;
    IPAddress?: string;
    IPType?: string;
    port?: string;
    VPCId?: string;
    vSwitchId?: string;
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
export declare class DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos extends $dara.Model {
    DBClusterNetInfo?: DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo[];
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
export declare class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo extends $dara.Model {
    connectionString?: string;
    IPAddress?: string;
    IPType?: string;
    port?: string;
    VPCId?: string;
    vSwitchId?: string;
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
export declare class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos extends $dara.Model {
    netInfo?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo[];
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
export declare class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo extends $dara.Model {
    DBInstanceId?: string;
    DBNodeRole?: string;
    netInfos?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos;
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
export declare class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos extends $dara.Model {
    DBNodeNetInfo?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo[];
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
export declare class DescribeDBClusterNetInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The network type of the cluster. The value is fixed as **VPC**.
     *
     * @example
     * VPC
     */
    clusterNetworkType?: string;
    DBClusterNetInfos?: DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos;
    DBNodeNetInfos?: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 72D99256-ACF1-5F86-831F-8CB53E9C23ED
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
