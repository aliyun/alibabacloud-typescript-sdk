import * as $dara from '@darabonba/typescript';
export declare class DescribeImportTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * @example
     * myadmin
     */
    account?: string;
    /**
     * @remarks
     * The kernel version number.
     *
     * @example
     * 5.7
     */
    dbVersion?: string;
    /**
     * @remarks
     * The task details.
     *
     * @example
     * Error Message
     */
    detail?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A103039D-B1B2-4C57-B989-7D7C0DA95426
     */
    requestId?: string;
    /**
     * @remarks
     * The category of the source instance. Valid values:
     *
     * - **ECS**: Alibaba Cloud ECS.
     * - **other**: Other.
     *
     * @example
     * aliyunRDS
     */
    sourceCategory?: string;
    /**
     * @remarks
     * The source IP address.
     *
     * @example
     * 59.172.25.122
     */
    sourceIp?: string;
    /**
     * @remarks
     * The source MySQL port.
     *
     * @example
     * 3306
     */
    sourcePort?: string;
    /**
     * @remarks
     * The task status.
     *
     * @example
     * Importing
     */
    status?: string;
    /**
     * @remarks
     * The name of the destination disaster recovery instance for the switchover.
     *
     * @example
     * rm-t4neh0q12v1******
     */
    targetInstanceName?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 416980000
     */
    taskId?: number;
    /**
     * @remarks
     * The task name.
     *
     * @example
     * test01
     */
    taskName?: string;
    /**
     * @remarks
     * The task type, which is used to query tasks of specific types. Separate multiple values with commas (,). A maximum of 30 values are supported. By default, this parameter is left empty, which indicates that no limit is applied.
     *
     * @example
     * import
     */
    taskType?: string;
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
