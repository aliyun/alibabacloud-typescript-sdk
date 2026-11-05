import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancePerformanceRequest extends $dara.Model {
    /**
     * @remarks
     * The node ID.
     *
     * This parameter is required.
     *
     * @example
     * pi-*************
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The end time of the query. The time is in the yyyy-MM-ddTHH:mmZ format in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-01-15T17:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The performance metrics. Separate multiple metrics with commas (,). For more information, see [Performance parameters](https://help.aliyun.com/document_detail/141787.html).
     *
     * @example
     * PolarDBCPUForPCU,PolarDBPCU,PolarDBMemoryForPCU,PolarDBQPSTPS,PolarDBConnections
     */
    key?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The start time of the query. The time is in the yyyy-MM-ddTHH:mmZ format in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2022-11-15T16:00Z
     */
    startTime?: string;
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
