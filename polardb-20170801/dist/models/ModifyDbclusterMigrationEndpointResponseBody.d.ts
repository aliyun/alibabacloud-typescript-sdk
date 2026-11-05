import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterMigrationEndpointResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to view information about all clusters in the destination region, including the cluster ID.
     *
     * @example
     * pc-k2j1qqukj583di7n9
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * F901FB05-8109-547F-A0B9-9C4FF7F4927A
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 21498490
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
