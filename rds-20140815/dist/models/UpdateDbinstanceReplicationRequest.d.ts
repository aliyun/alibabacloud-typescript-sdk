import * as $dara from '@darabonba/typescript';
export declare class UpdateDBInstanceReplicationRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the replication channel, which is used to identify the replication channel.
     *
     * @example
     * replication-channel-001
     */
    channelName?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp1234567890abcdef
     */
    dbInstanceId?: string;
    /**
     * @remarks
     * The host address of the primary database, which supports an IP address or a domain name.
     *
     * @example
     * 192.168.1.100
     */
    masterHost?: string;
    /**
     * @remarks
     * The password of the primary database, which is used to authenticate the replication user. The password must be Base64-encoded in advance.
     *
     * @example
     * U2VjdXJlUGFzczEyMyE=
     */
    masterPassword?: string;
    /**
     * @remarks
     * The port number of the primary database, which is typically 3306 for MySQL.
     *
     * @example
     * 3306
     */
    masterPort?: number;
    /**
     * @remarks
     * The username of the primary database, which is used to establish a replication connection. Specify this parameter only when an update is required.
     *
     * @example
     * repl_user
     */
    masterUser?: string;
    /**
     * @remarks
     * The operation type, which specifies the operation to be performed on the replication channel.
     *
     * This parameter is required.
     *
     * @example
     * Start
     */
    operation?: string;
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
     * The region ID.
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
