import * as $dara from '@darabonba/typescript';
export declare class DescribeDBProxyResponseBodyDBProxyAVZones extends $dara.Model {
    DBProxyAVZones?: string[];
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
export declare class DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems extends $dara.Model {
    DBProxyConnectString?: string;
    DBProxyConnectStringNetType?: string;
    DBProxyConnectStringNetWorkType?: string;
    DBProxyConnectStringPort?: string;
    DBProxyEndpointId?: string;
    DBProxyEndpointName?: string;
    DBProxyVpcId?: string;
    DBProxyVpcInstanceId?: string;
    DBProxyVswitchId?: string;
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
export declare class DescribeDBProxyResponseBodyDBProxyConnectStringItems extends $dara.Model {
    DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems[];
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
export declare class DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions extends $dara.Model {
    DBProxyInstanceMinorVersions?: string[];
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
export declare class DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
    cpuCores?: string;
    /**
     * @example
     * pn-xxxxxxx01
     */
    nodeId?: string;
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
export declare class DescribeDBProxyResponseBodyDBProxyNodes extends $dara.Model {
    DBProxyNodes?: DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes[];
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
export declare class DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems extends $dara.Model {
    dbProxyEndpointAliases?: string;
    dbProxyEndpointName?: string;
    dbProxyEndpointType?: string;
    dbProxyReadWriteMode?: string;
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
export declare class DescribeDBProxyResponseBodyDbProxyEndpointItems extends $dara.Model {
    dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems[];
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
export declare class DescribeDBProxyResponseBody extends $dara.Model {
    DBProxyAVZones?: DescribeDBProxyResponseBodyDBProxyAVZones;
    DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItems;
    /**
     * @remarks
     * This is an internal parameter and can be ignored.
     *
     * @example
     * normal
     */
    DBProxyEngineType?: string;
    /**
     * @remarks
     * The current minor version of the proxy instance.
     *
     * @example
     * 1.13.11
     */
    DBProxyInstanceCurrentMinorVersion?: string;
    /**
     * @remarks
     * The latest minor version of the proxy instance.
     *
     * @example
     * 1.13.12
     */
    DBProxyInstanceLatestMinorVersion?: string;
    /**
     * @example
     * 2.25.9
     */
    DBProxyInstanceMinorVersions?: DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions;
    /**
     * @remarks
     * The name of the proxy instance.
     *
     * @example
     * gos787jog2wk0ye1****
     */
    DBProxyInstanceName?: string;
    /**
     * @remarks
     * The number of enabled proxy instances.
     *
     * @example
     * 1
     */
    DBProxyInstanceNum?: number;
    /**
     * @remarks
     * This parameter is supported only by ApsaraDB RDS for PostgreSQL. It indicates the actual specifications of the proxy instance.
     *
     * Format: `CPU/Memory`.
     *
     * Example: 4/8 indicates 4 CPU cores and 8 GB of memory.
     *
     * @example
     * 4/8
     */
    DBProxyInstanceSize?: string;
    /**
     * @remarks
     * The running status of the proxy instance. Valid values:
     * - DBInstanceClassChanging: The specifications are being changed.
     * - Creating: The instance is being created.
     * - Running: The instance is running.
     * - Deleting: The instance is being deleted.
     *
     * @example
     * Running
     */
    DBProxyInstanceStatus?: string;
    /**
     * @remarks
     * The type of the proxy service. Valid values:
     * - 1: shared proxy
     * - 2: dedicated proxy
     * - 3: general-purpose database proxy
     *
     * > ApsaraDB RDS for PostgreSQL does not support shared proxies.
     *
     * @example
     * 2
     */
    DBProxyInstanceType?: string;
    /**
     * @remarks
     * This is an internal parameter and can be ignored.
     *
     * @example
     * 18
     */
    DBProxyKindCode?: string;
    DBProxyNodes?: DescribeDBProxyResponseBodyDBProxyNodes;
    /**
     * @remarks
     * The status of connection persistence. Valid values:
     * - **Enabled**: enabled
     * - **Disabled**: disabled
     * - **Unsupported**: The instance does not support connection persistence.
     *
     * @example
     * Disabled
     */
    DBProxyPersistentConnectionStatus?: string;
    /**
     * @remarks
     * The status of the database proxy feature. Valid values:
     * - Shutdown: disabled
     * - Startup: enabled
     *
     * @example
     * Startup
     */
    DBProxyServiceStatus?: string;
    dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItems;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 909A69EE-71C8-4417-A0B9-FF085407E1E3
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
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
