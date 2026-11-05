import * as $dara from '@darabonba/typescript';
export declare class GetDBInstanceTopologyResponseBodyDataConnections extends $dara.Model {
    /**
     * @remarks
     * The database endpoint.
     *
     * @example
     * rm-m5ezban****mysql.rds.aliyuncs.com
     */
    connectionString?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-m5ezban****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The network endpoint type of the instance. Valid values:
     *
     * * **vpc**: internal endpoint.
     * * **public**: public endpoint.
     *
     * @example
     * vpc
     */
    netType?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-qingdao-c
     */
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
export declare class GetDBInstanceTopologyResponseBodyDataNodes extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-m5ezban****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The ID of the dedicated cluster.
     * > An empty value is returned for instances that are not deployed in a dedicated cluster.
     *
     * @example
     * dhg-4n****
     */
    dedicatedHostGroupId?: string;
    /**
     * @remarks
     * The ID of the host in the dedicated cluster.
     * > An empty value is returned for instances that are not deployed in a dedicated cluster.
     *
     * @example
     * i-bp****
     */
    dedicatedHostId?: string;
    /**
     * @remarks
     * The unique identifier of the instance.
     * > **-1** is returned for instances that are not deployed in a dedicated cluster.
     *
     * @example
     * 349054
     */
    nodeId?: string;
    /**
     * @remarks
     * The role of the node. Valid values:
     * * **Master**: primary node.
     * * **Slave**: secondary node.
     *
     * @example
     * master
     */
    role?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-qingdao-c
     */
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
export declare class GetDBInstanceTopologyResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of network connection information for the instance.
     */
    connections?: GetDBInstanceTopologyResponseBodyDataConnections[];
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-m5ezban****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The nodes.
     */
    nodes?: GetDBInstanceTopologyResponseBodyDataNodes[];
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
export declare class GetDBInstanceTopologyResponseBody extends $dara.Model {
    /**
     * @remarks
     * An internal parameter. You can ignore this parameter.
     *
     * @example
     * None
     */
    code?: string;
    /**
     * @remarks
     * The topology details.
     */
    data?: GetDBInstanceTopologyResponseBodyData;
    /**
     * @remarks
     * An internal parameter. You can ignore this parameter.
     *
     * @example
     * None
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7430AB1A-6D49-5B6D-B9E5-920250076074
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
