import * as $dara from '@darabonba/typescript';
export declare class CreateDBInstanceReplicationRequest extends $dara.Model {
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
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1234567890abcdef
     */
    dbInstanceId?: string;
    /**
     * @remarks
     * The host address of the primary database. Both IP addresses and domain names are supported.
     *
     * This parameter is required.
     *
     * @example
     * 192.168.1.100
     */
    masterHost?: string;
    /**
     * @remarks
     * The password of the primary database used to authenticate the replication user. The password must be Base64-encoded in advance.
     *
     * This parameter is required.
     *
     * @example
     * U2VjdXJlUGFzczEyMyE=
     */
    masterPassword?: string;
    /**
     * @remarks
     * The port number of the primary database. Typically, the port is 3306 for MySQL.
     *
     * This parameter is required.
     *
     * @example
     * 3306
     */
    masterPort?: number;
    /**
     * @remarks
     * The username of the primary database used to establish a replication connection.
     *
     * This parameter is required.
     *
     * @example
     * repl_user
     */
    masterUser?: string;
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
     * The region ID of the instance.
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
