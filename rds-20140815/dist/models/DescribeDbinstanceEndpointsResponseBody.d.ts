import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem extends $dara.Model {
    connectionString?: string;
    ipAddress?: string;
    ipType?: string;
    port?: string;
    vSwitchId?: string;
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
export declare class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems extends $dara.Model {
    addressItem?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem[];
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
export declare class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem extends $dara.Model {
    DBInstanceId?: string;
    nodeId?: string;
    weight?: number;
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
export declare class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems extends $dara.Model {
    nodeItem?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem[];
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
export declare class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint extends $dara.Model {
    addressItems?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems;
    endpointDescription?: string;
    endpointId?: string;
    endpointType?: string;
    nodeItems?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems;
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
export declare class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints extends $dara.Model {
    DBInstanceEndpoint?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint[];
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
export declare class DescribeDBInstanceEndpointsResponseBodyData extends $dara.Model {
    DBInstanceEndpoints?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints;
    /**
     * @remarks
     * The instance name.
     *
     * @example
     * rm-u****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The IP address protocol version. Valid values:
     *
     * - **ipv4**
     * - **ipv6**
     *
     * @example
     * ipv4
     */
    ipVersion?: string;
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
export declare class DescribeDBInstanceEndpointsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: DescribeDBInstanceEndpointsResponseBodyData;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 777C4593-8053-427B-****105593277CAB
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
