import * as $dara from '@darabonba/typescript';
export declare class DeleteDBInstanceReplicationRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the replication channel, which is used to identify the replication task.
     *
     * @example
     * replication-channel-001
     */
    channelName?: string;
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1234567890abcdef
     */
    dbInstanceId?: string;
    /**
     * @remarks
     * 阿里云账号ID，用于指定资源的所有者
     *
     * @example
     * 1234567890123456
     */
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to obtain the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
