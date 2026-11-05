import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo extends $dara.Model {
    dataSyncTime?: string;
    logSyncTime?: string;
    nodeId?: string;
    nodeType?: string;
    regionId?: string;
    syncStatus?: string;
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
export declare class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos extends $dara.Model {
    nodeInfo?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo[];
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
export declare class DescribeDBInstanceHAConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The High-availability Mode. Valid values:
     * * **RPO**: Data consistency is prioritized. The instance ensures data reliability to minimize data loss. This mode is suitable for users who have high requirements for data consistency.
     * * **RTO**: Instance availability is prioritized. The instance recovers services as quickly as possible to maximize uptime. This mode is suitable for users who have high requirements for database uptime.
     *
     * > This parameter is returned only for MySQL instances.
     *
     * @example
     * RPO
     */
    HAMode?: string;
    hostInstanceInfos?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The data replication mode. Valid values:
     * * **Sync**: Synchronous.
     * * **Semi-sync**: Semi-synchronous.
     * * **Async**: Asynchronous.
     *
     * > This parameter is returned only for MySQL instances.
     *
     * @example
     * Sync
     */
    syncMode?: string;
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
