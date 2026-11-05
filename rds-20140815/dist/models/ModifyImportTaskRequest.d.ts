import * as $dara from '@darabonba/typescript';
export declare class ModifyImportTaskRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-2ze63v2p3o3k****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The operation to perform. Valid values:
     *
     * - RETRY_IMPORT: Retries the import.
     * - CANCEL: Cancels the task.
     *
     * This parameter is required.
     *
     * @example
     * CANCEL
     */
    operation?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the destination region. You can call the DescribeRegions operation to query region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * This parameter is required.
     *
     * @example
     * 1234567
     */
    taskId?: string;
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
